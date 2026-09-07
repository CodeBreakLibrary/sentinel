const { app, BrowserWindow, ipcMain, net } = require('electron')
const path = require('path')
const http = require('http')
const fs = require('fs')

const PORT = 5488

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
}

// Cesium needs real Web Workers to run its terrain/imagery math, and browsers
// refuse to create Workers on a file:// page (every file:// page is treated
// as its own isolated origin). Serving the app over a local HTTP server —
// still entirely on-device, nothing leaves the machine — fixes that for
// good, the same way `npx serve` fixed it for the standalone globe test.
function startLocalServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      const relative = urlPath === '/' ? '/index.html' : urlPath
      const filePath = path.join(__dirname, relative)

      // Keep requests confined to the app folder.
      if (!filePath.startsWith(__dirname)) {
        res.writeHead(403)
        return res.end('Forbidden')
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404)
          return res.end('Not found')
        }
        const ext = path.extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
        res.end(data)
      })
    })
    server.on('error', reject)
    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    title: 'Sedric Is The Best',
    backgroundColor: '#0a0a0b',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadURL(`http://127.0.0.1:${PORT}/index.html`)

  win.setMenuBarVisibility(false)
}

// Only these hosts can be fetched over IPC — keeps the RSS handler from
// being a generic fetch-anything endpoint.
const ALLOWED_RSS_HOSTS = new Set([
  'feeds.bbci.co.uk',
  'rss.dw.com',
  'www.france24.com',
  'feeds.feedburner.com',
])

// Fetches an RSS feed from the main process — no CORS, no public proxy.
function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    let parsed
    try {
      parsed = new URL(url)
    } catch {
      return reject(new Error('Invalid URL'))
    }
    if (parsed.protocol !== 'https:' || !ALLOWED_RSS_HOSTS.has(parsed.hostname)) {
      return reject(new Error(`Host not allowed: ${parsed.hostname}`))
    }

    const request = net.request({ url, method: 'GET' })
    request.setHeader('User-Agent', 'Mozilla/5.0 (compatible; SedricIsTheBest/1.0)')
    request.setHeader('Accept', 'application/rss+xml, application/xml, text/xml, */*')

    const timeout = setTimeout(() => {
      request.abort()
      reject(new Error('Request timed out'))
    }, 8000)

    let body = ''
    request.on('response', (response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        clearTimeout(timeout)
        request.abort()
        return reject(new Error(`Upstream returned ${response.statusCode}`))
      }
      response.on('data', (chunk) => { body += chunk.toString() })
      response.on('end', () => {
        clearTimeout(timeout)
        resolve(body)
      })
      response.on('error', (err) => {
        clearTimeout(timeout)
        reject(err)
      })
    })
    request.on('error', (err) => {
      clearTimeout(timeout)
      reject(err)
    })
    request.end()
  })
}

ipcMain.handle('fetch-rss', async (_event, url) => {
  return fetchRSS(url)
})

// ── Regional brief (GDELT) — the actual "god's-eye-view data" piece ────────
// GDELT's GEO 2.0 API returns recent geo-tagged news events worldwide as
// GeoJSON, keyed off a search query. No API key needed — it's a free public
// service — but we still route it through the main process (like RSS above)
// rather than fetching directly from the renderer, for the same reasons:
// one locked-down allowlist, no CORS surprises, one place to add a timeout.
const ALLOWED_GEO_HOSTS = new Set([
  'api.gdeltproject.org',
])

function fetchRegionalBrief(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.gdeltproject.org/api/v2/geo/geo?query=${encodeURIComponent(query)}&format=geojson`
    const parsed = new URL(url)
    if (parsed.protocol !== 'https:' || !ALLOWED_GEO_HOSTS.has(parsed.hostname)) {
      return reject(new Error(`Host not allowed: ${parsed.hostname}`))
    }

    const request = net.request({ url, method: 'GET' })
    request.setHeader('User-Agent', 'Mozilla/5.0 (compatible; SedricIsTheBest/1.0)')
    request.setHeader('Accept', 'application/json')

    const timeout = setTimeout(() => {
      request.abort()
      reject(new Error('Request timed out'))
    }, 20000)

    let body = ''
    request.on('response', (response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        clearTimeout(timeout)
        request.abort()
        return reject(new Error(`Upstream returned ${response.statusCode}`))
      }
      response.on('data', (chunk) => { body += chunk.toString() })
      response.on('end', () => {
        clearTimeout(timeout)
        try {
          resolve(JSON.parse(body))
        } catch (err) {
          reject(new Error('GDELT response was not valid JSON'))
        }
      })
      response.on('error', (err) => {
        clearTimeout(timeout)
        reject(err)
      })
    })
    request.on('error', (err) => {
      clearTimeout(timeout)
      reject(err)
    })
    request.end()
  })
}

ipcMain.handle('fetch-regional-brief', async (_event, query) => {
  return fetchRegionalBrief(query)
})

// ── Generic external fetch — USGS earthquakes, Open-Meteo weather, OpenSky
// flights, CelesTrak satellite elements. All four are plain public GET
// endpoints (no API key), so instead of writing four near-identical
// functions, one host-locked fetcher handles all of them. Returns raw text
// — the renderer decides whether to JSON.parse it or (for CelesTrak) treat
// it as plain-text orbital elements.
const ALLOWED_EXTERNAL_HOSTS = new Set([
  'earthquake.usgs.gov',
  'api.open-meteo.com',
  'opensky-network.org',
  'celestrak.org',
  'api.adsb.lol',
])

function fetchExternal(url) {
  return new Promise((resolve, reject) => {
    let parsed
    try {
      parsed = new URL(url)
    } catch {
      return reject(new Error('Invalid URL'))
    }
    if (parsed.protocol !== 'https:' || !ALLOWED_EXTERNAL_HOSTS.has(parsed.hostname)) {
      return reject(new Error(`Host not allowed: ${parsed.hostname}`))
    }

    const request = net.request({ url, method: 'GET' })
    request.setHeader('User-Agent', 'Mozilla/5.0 (compatible; SedricIsTheBest/1.0)')
    request.setHeader('Accept', 'application/json, text/plain, */*')

    const timeout = setTimeout(() => {
      request.abort()
      reject(new Error('Request timed out'))
    }, 10000)

    let body = ''
    request.on('response', (response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        clearTimeout(timeout)
        request.abort()
        return reject(new Error(`Upstream returned ${response.statusCode}`))
      }
      response.on('data', (chunk) => { body += chunk.toString() })
      response.on('end', () => {
        clearTimeout(timeout)
        resolve(body)
      })
      response.on('error', (err) => {
        clearTimeout(timeout)
        reject(err)
      })
    })
    request.on('error', (err) => {
      clearTimeout(timeout)
      reject(err)
    })
    request.end()
  })
}

ipcMain.handle('fetch-external', async (_event, url) => {
  return fetchExternal(url)
})

app.whenReady().then(async () => {
  await startLocalServer()
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
