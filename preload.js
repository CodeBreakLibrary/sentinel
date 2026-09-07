const { contextBridge, ipcRenderer } = require('electron');

// Minimal, explicit bridge — the renderer never gets raw ipcRenderer or
// Node access (contextIsolation stays on, nodeIntegration stays off).
// It can only ask the main process to fetch an RSS URL, or run a GDELT
// regional-brief query, and get data back.
contextBridge.exposeInMainWorld('electronAPI', {
  fetchRSS: (url) => ipcRenderer.invoke('fetch-rss', url),
  fetchRegionalBrief: (query) => ipcRenderer.invoke('fetch-regional-brief', query),
  fetchExternal: (url) => ipcRenderer.invoke('fetch-external', url),
});
