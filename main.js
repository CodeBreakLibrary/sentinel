// ── DATA ──────────────────────────────────────────────────────────────────────
const FEED_DATA = [
  { num: '#01', id: 'lebanon-hezbollah', title: 'Hezbollah launches drone and rocket attacks on Israel', body: 'Hezbollah launched a coordinated barrage of drones and rockets toward northern Israel, striking areas near Kiryat Shmona and the Galilee region. Iron Dome intercepted the majority; however, several impacts were confirmed near Nahariya. IDF has returned fire with artillery strikes on southern Lebanese positions. UN peacekeepers in the region have gone to bunker. This marks the most significant cross-border exchange in weeks and coincides with heightened rhetoric from Hezbollah leadership.', sev: 'HIGH', conf: 95, time: '2h', flag: '🇱🇧', upvotes: 74, region: 'Lebanon / Israel', lon: 35, lat: 31.5 },
  { num: '#02', id: 'ukraine-mariupol', title: 'Ukrainian forces strike Russian drone unit logistics base near Mariupol', body: 'Ukrainian special operations forces executed a precision strike on a Russian drone unit\'s logistics base in occupied Mangush, near Mariupol. The strike reportedly destroyed a stockpile of Shahed-136 components along with maintenance vehicles and fuel depots. Russian milbloggers confirmed the strike with satellite imagery. Ukrainian GUR (military intelligence) issued a brief statement claiming responsibility without further details.', sev: 'HIGH', conf: null, time: '3h', flag: '🇺🇦', upvotes: 8, region: 'Ukraine', lon: 32, lat: 48 },
  { num: '#03', id: 'russia-tuapse-1', title: 'Oil terminal in Tuapse on fire after drone strike', body: 'A major oil storage terminal in Tuapse, on the Russian Black Sea coast, is engulfed in fire following what appears to be a Ukrainian drone strike. Emergency services are battling the blaze. Initial reports suggest 4–6 large storage tanks have been hit. The Tuapse Refinery, one of Russia\'s key coastal petroleum facilities, processes approximately 12 million tonnes of crude annually. This strike follows a pattern of Ukrainian long-range attacks on Russian energy infrastructure.', sev: 'MED', conf: null, time: '2h', flag: '🇷🇺', upvotes: 0, region: 'Black Sea', lon: 36, lat: 47 },
  { num: '#04', id: 'russia-mass-attack', title: 'Russia preparing mass drone and missile attacks on Ukraine', body: 'Ukrainian intelligence (SBU) has confirmed that Russia is massing Shahed-136 drones and Kalibr cruise missiles at forward staging areas in preparation for a large-scale combined strike on Ukrainian energy infrastructure. The attack window is estimated to be within the next 48–72 hours. Air defense units are reportedly being repositioned across key cities including Kyiv, Kharkiv, Odessa, and Zaporizhzhia. Civilians in targeted regions are being warned.', sev: 'HIGH', conf: 95, time: '4h', flag: '🇷🇺', upvotes: 0, region: 'Ukraine', lon: 32, lat: 48 },
  { num: '#05', id: 'uk-russia-pressure', title: 'UK calls for increased military pressure on Russia', body: 'Former UK Defence Secretary and senior NATO officials have urged European allies to dramatically escalate military and economic pressure on Russia. Proposals include extending the range restrictions on Storm Shadow missiles, deploying additional armored units to Eastern European NATO member states, and fast-tracking Ukraine\'s NATO membership application. The call follows a closed-door session of the European Defence Council held in Brussels.', sev: 'MED', conf: null, time: '5h', flag: '🇬🇧', upvotes: 12, region: 'Eastern Europe', lon: 28, lat: 50 },
  { num: '#06', id: 'gaza-ceasefire', title: 'Gaza ceasefire talks resume in Cairo', body: 'Qatari and Egyptian mediators have resumed shuttle diplomacy in Cairo aimed at brokering a phased ceasefire agreement between Israel and Hamas. Negotiators are reportedly discussing a 42-day initial pause in exchange for a batch of hostage releases and increased humanitarian corridor access. Israeli delegation has not yet formally responded to the latest draft framework. The talks come amid severe deterioration of civilian conditions in Rafah and northern Gaza.', sev: 'MED', conf: null, time: '6h', flag: '🇵🇸', upvotes: 33, region: 'Gaza', lon: 34.3, lat: 31.4 },
  { num: '#07', id: 'iran-nuclear', title: 'Iran nuclear talks stall in Vienna', body: 'High-level negotiations in Vienna over Iran\'s uranium enrichment caps have collapsed after Iranian delegates rejected the latest JCPOA-adjacent framework proposed by European mediators. In a parallel development, IAEA inspectors were denied access to the Fordow enrichment facility for the third time this month. Iran\'s enrichment is now estimated at 83.7% purity — dangerously close to weapons-grade. US National Security Council officials have described the situation as "gravely concerning."', sev: 'HIGH', conf: null, time: '7h', flag: '🇮🇷', upvotes: 21, region: 'Iran', lon: 53, lat: 32 },
  { num: '#08', id: 'japan-philippines', title: 'Japan deploys military contingent to Philippines for drills', body: 'Japan\'s Self-Defense Forces have deployed a joint maritime task force to the Philippines for a scheduled but newly expanded bilateral naval exercise in the South China Sea. The exercise includes anti-submarine warfare drills and coordinated air defense scenarios. The deployment comes amid renewed Chinese incursions near Scarborough Shoal and the Second Thomas Shoal. Both governments stated the exercises are "routine but responsive to the security environment."', sev: 'MED', conf: null, time: '3h', flag: '🇯🇵', upvotes: 5, region: 'South China Sea', lon: 114, lat: 16 },
  { num: '#09', id: 'sudan-darfur', title: 'Sudan: RSF advances on El Fasher intensify', body: 'Sudan\'s Rapid Support Forces (RSF) have dramatically accelerated their siege of El Fasher in North Darfur, the last major city in the region outside of RSF control. Aid workers report that all land corridors into the city are now blocked, affecting approximately 800,000 civilians. The UN has warned of imminent famine conditions. RSF artillery and drone strikes on residential neighborhoods have been documented by UNOCHA field teams. The SAF (Sudanese Armed Forces) has lost two strategic positions in the past 24 hours.', sev: 'HIGH', conf: null, time: '8h', flag: '🇸🇩', upvotes: 18, region: 'Sudan', lon: 30, lat: 15 },
  { num: '#10', id: 'taiwan-pla', title: 'PLA air incursions into Taiwan ADIZ at 3-year high', body: 'The Taiwan Ministry of National Defense has reported a sharp increase in PLA air incursions into Taiwan\'s Air Defense Identification Zone, marking the highest sustained tempo in three years. In the past 72 hours, 38 PLA aircraft including H-6 bombers and J-16 fighters crossed the median line. Taiwan has scrambled F-16s and Mirage 2000s repeatedly. The US Navy repositioned the USS Carl Vinson carrier strike group further east of the strait in response. Taipei has filed a formal diplomatic protest.', sev: 'HIGH', conf: null, time: '9h', flag: '🇹🇼', upvotes: 44, region: 'Taiwan Strait', lon: 121, lat: 24 },
  { num: '#11', id: 'korea-icbm', title: 'North Korea ICBM test window open — analysts warn', body: 'Multiple US and South Korean intelligence assessments indicate that North Korea has completed preparations at the Sohae Satellite Launching Station for what is assessed to be an ICBM test, possibly a Hwasong-18 solid-fueled missile. Activity at the site has increased markedly over the past week. Kim Jong-un was photographed inspecting missile components at a weapons plant. Japan\'s Ministry of Defense has issued a public advisory. NORAD has elevated alert status for the North American sector.', sev: 'HIGH', conf: null, time: '11h', flag: '🇰🇵', upvotes: 29, region: 'Korean Peninsula', lon: 127, lat: 37 },
  { num: '#12', id: 'yemen-red-sea', title: 'Houthi forces fire on three commercial vessels in Red Sea', body: 'Yemen\'s Houthi movement (Ansar Allah) has claimed responsibility for ballistic missile and drone attacks on three commercial vessels transiting the Red Sea near the Bab el-Mandeb strait. One vessel, a Panamanian-flagged container ship, sustained a direct hit and is reportedly taking on water. The crew has issued a distress signal. Combined Maritime Forces have dispatched a frigate to the area. Global shipping rates have spiked 4.2% on the news.', sev: 'HIGH', conf: null, time: '1h', flag: '🇾🇪', upvotes: 56, region: 'Yemen', lon: 44, lat: 15 },
  { num: '#13', id: 'sahel-wagner', title: 'Wagner/Africa Corps operations expand in Mali and Niger', body: 'Open-source intelligence confirms that Wagner Group-affiliated Africa Corps has significantly expanded its footprint across northern Mali and Niger, establishing three new forward operating bases near Gao and Agadez. The expansion coincides with French military withdrawal from the region and a notable increase in targeted killings of local community leaders critical of Russian presence. EU has suspended further security cooperation funding to both countries.', sev: 'MED', conf: null, time: '12h', flag: '🌍', upvotes: 15, region: 'Sahel', lon: -5, lat: 16 },
  { num: '#14', id: 'china-sea-incident', title: 'Chinese coast guard vessel deliberately rams Philippine supply boat', body: 'A Chinese Coast Guard vessel has deliberately rammed a Philippine Navy supply boat attempting to resupply marines stationed at the BRP Sierra Madre at Second Thomas Shoal. Three Filipino sailors were injured, one seriously. The Philippine DFA has summoned the Chinese ambassador and issued a formal condemnation. The US State Department invoked the 1951 Mutual Defense Treaty in a strong statement of support for Manila. This represents the most serious physical confrontation in the South China Sea in years.', sev: 'HIGH', conf: null, time: '5h', flag: '🇵🇭', upvotes: 88, region: 'South China Sea', lon: 114, lat: 16 },
];

const PREDICTIONS = [
  { q: 'Will there be a ceasefire in Ukraine before July 2026?', yes: 13.1, no: 86.9, votes: 5684, trend: '+0.4%' },
  { q: 'Will Iran conduct a direct attack on Israel before June 2026?', yes: 22.4, no: 77.6, votes: 3201, trend: '-1.2%' },
  { q: 'Will North Korea test an ICBM before August 2026?', yes: 41.7, no: 58.3, votes: 2118, trend: '+3.1%' },
  { q: 'Will Taiwan Strait conflict escalate to kinetic exchange?', yes: 8.9, no: 91.1, votes: 4410, trend: '+2.7%' },
  { q: 'Will RSF capture El Fasher before May 2026?', yes: 61.3, no: 38.7, votes: 892, trend: '+5.2%' },
];

const SCENARIOS = [
  { title: 'Russian Full Mobilization', prob: '8%', body: 'Russia orders a second wave of mandatory conscription in response to front line deterioration. NATO activates Article 4 consultations.', tags: ['Russia', 'NATO', 'Escalation'] },
  { title: 'Hezbollah-Israel Ground War', prob: '19%', body: 'Cross-border exchanges escalate beyond rockets into ground incursions along the Lebanon border. US carrier group repositioned.', tags: ['Lebanon', 'Israel', 'Middle East'] },
  { title: 'Iran Nuclear Threshold Crossed', prob: '12%', body: 'IAEA confirms Iran has achieved sufficient enrichment for one device. Snapback sanctions triggered under JCPOA.', tags: ['Iran', 'IAEA', 'Nuclear'] },
  { title: 'South China Sea Incident', prob: '24%', body: 'A naval collision or aircraft interception incident between Chinese and US/Philippine assets triggers diplomatic crisis.', tags: ['China', 'Philippines', 'USA'] },
  { title: 'DPRK ICBM Launch', prob: '42%', body: 'North Korea conducts a full ICBM test flight into the Pacific, triggering emergency UNSC session and US-ROK military response exercises.', tags: ['DPRK', 'USA', 'Pacific'] },
  { title: 'Sudan Famine Declaration', prob: '67%', body: 'UN officially declares famine in North Darfur as RSF fully encircles El Fasher and aid corridors remain blocked past 30 days.', tags: ['Sudan', 'UN', 'Humanitarian'] },
];

const MARKETS = {
  indices: [
    { name: 'S&P 500', val: '7,041.28', chg: '+1.04%', pos: true, flag: '🇺🇸' },
    { name: 'NASDAQ', val: '24,182.70', chg: '+1.96%', pos: true, flag: '🇺🇸' },
    { name: 'Dow Jones', val: '48,578.72', chg: '+0.07%', pos: true, flag: '🇺🇸' },
    { name: 'DAX', val: '24,269.96', chg: '+0.84%', pos: true, flag: '🇩🇪' },
    { name: 'FTSE 100', val: '10,554.31', chg: '-0.84%', pos: false, flag: '🇬🇧' },
    { name: 'Nikkei 225', val: '58,475.98', chg: '-1.75%', pos: false, flag: '🇯🇵' },
  ],
  commodities: [
    { name: 'Gold', val: '4,812.80', chg: '+0.57%', pos: true },
    { name: 'Crude Oil', val: '87.92', chg: '-7.15%', pos: false },
    { name: 'Silver', val: '79.36', chg: '+0.91%', pos: true },
  ],
  forex: [
    { name: 'EUR/USD', val: '1.1778', chg: '', pos: null },
    { name: 'GBP/USD', val: '1.3535', chg: '', pos: null },
    { name: 'USD/JPY', val: '159.13', chg: '', pos: null },
  ]
};

const KEYWORDS = [
  { rank: 1, word: 'Lebanon', count: 274, color: '#e63946' },
  { rank: 2, word: 'Israel', count: 226, color: '#f77f00' },
  { rank: 3, word: 'Iran', count: 194, color: '#e63946' },
  { rank: 4, word: 'Ceasefire', count: 168, color: '#2ec4b6' },
  { rank: 5, word: 'Russia', count: 185, color: '#f77f00' },
  { rank: 6, word: 'Taiwan', count: 152, color: '#e63946' },
  { rank: 7, word: 'Sudan', count: 109, color: '#f77f00' },
];

const CONFLICTS = [
  { lon: 32, lat: 48, type: 'high', label: 'Ukraine', detail: 'Active conflict zone — 900+ events this week', feedId: 'ukraine-mariupol' },
  { lon: 36, lat: 47, type: 'med', label: 'Black Sea', detail: 'Naval tension — drone strikes on port infrastructure', feedId: 'russia-tuapse-1' },
  { lon: 37, lat: 55, type: 'high', label: 'Russia', detail: 'Mass drone preparation — intelligence confirmed', feedId: 'russia-mass-attack' },
  { lon: 28, lat: 50, type: 'med', label: 'Eastern Europe', detail: 'NATO force posture elevated', feedId: 'uk-russia-pressure' },
  { lon: 35, lat: 31.5, type: 'high', label: 'Lebanon / Israel', detail: 'Drone & rocket attacks on Israel — ongoing', feedId: 'lebanon-hezbollah' },
  { lon: 34.3, lat: 31.4, type: 'high', label: 'Gaza', detail: 'Ceasefire negotiations ongoing — humanitarian crisis', feedId: 'gaza-ceasefire' },
  { lon: 53, lat: 32, type: 'med', label: 'Iran', detail: 'Nuclear talks stalled — IAEA access denied', feedId: 'iran-nuclear' },
  { lon: 44, lat: 15.4, type: 'high', label: 'Yemen', detail: 'Houthi missile & drone activity — Red Sea', feedId: 'yemen-red-sea' },
  { lon: 29, lat: 39, type: 'low', label: 'Turkey', detail: 'NATO member monitoring Bosphorus passage', feedId: null },
  { lon: 71, lat: 30, type: 'med', label: 'Pakistan', detail: 'Border incidents with India — elevated', feedId: null },
  { lon: 114, lat: 16, type: 'high', label: 'South China Sea', detail: 'Naval posturing — US-China-Philippines triangle', feedId: 'china-sea-incident' },
  { lon: 121, lat: 24, type: 'high', label: 'Taiwan Strait', detail: 'PLA air incursions at 3-year high', feedId: 'taiwan-pla' },
  { lon: 127, lat: 37, type: 'med', label: 'Korean Peninsula', detail: 'DPRK ICBM test window open', feedId: 'korea-icbm' },
  { lon: 30, lat: 15, type: 'high', label: 'Sudan', detail: 'RSF advances on El Fasher — aid blockage', feedId: 'sudan-darfur' },
  { lon: 38, lat: 14, type: 'med', label: 'Ethiopia', detail: 'Tigray border skirmishes resuming', feedId: null },
  { lon: 8, lat: 12, type: 'low', label: 'Nigeria', detail: 'Boko Haram activity in Lake Chad basin', feedId: null },
  { lon: -5, lat: 16, type: 'med', label: 'Sahel', detail: 'Wagner/Africa Corps operations ongoing', feedId: 'sahel-wagner' },
];

const TICKER_ITEMS = [
  { flag: '🇺🇦', text: 'UKRAINE HITS RUSSIAN RADARS, COMMAND POSTS, UAV SITES, DEPOTS', t: '2 hours' },
  { flag: '🇷🇺', text: 'DRONE STRIKE ON PASSENGER TRAIN IN KHERSON REGION', t: '2 hours' },
  { flag: '🇯🇵', text: 'JAPAN DEPLOYS MILITARY CONTINGENT TO PHILIPPINES FOR DRILLS', t: '3 hours' },
  { flag: '🇺🇦', text: 'MARIUPOL AREA STRIKE HITS RUBIKON BASE IN MANGUSH', t: '2 hours' },
  { flag: '🇾🇪', text: 'HOUTHI FORCES HIT PANAMANIAN CONTAINER SHIP — CREW SIGNALS DISTRESS', t: '1 hour' },
  { flag: '🇵🇭', text: 'CHINESE COAST GUARD RAMS PHILIPPINE SUPPLY VESSEL — SAILORS INJURED', t: '5 hours' },
  { flag: '🇰🇵', text: 'NORAD ELEVATES ALERT STATUS — DPRK ICBM LAUNCH INDICATORS DETECTED', t: '11 hours' },
  { flag: '🇹🇼', text: '38 PLA AIRCRAFT CROSS TAIWAN MEDIAN LINE IN 72 HOURS — MND', t: '9 hours' },
];

// ── LIVE NEWS FEED ────────────────────────────────────────────────────────────
const RSS_SOURCES = [
  { url: 'https://feeds.bbci.co.uk/news/world/rss.xml',     flag: '🇬🇧', region: 'Global' },
  { url: 'https://rss.dw.com/rss/en/rss/world',             flag: '🇩🇪', region: 'Global' },
  { url: 'https://www.france24.com/en/rss',                  flag: '🇫🇷', region: 'Global' },
  { url: 'https://feeds.feedburner.com/ndtvnews-world-news', flag: '🇮🇳', region: 'Asia' },
];

// Multiple proxies tried in order until one works
const CORS_PROXIES = [
  url => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
];

// Keywords that suggest HIGH severity
const HIGH_KEYWORDS = ['attack', 'strike', 'missile', 'bomb', 'killed', 'kill', 'war', 'troops', 'invasion', 'military', 'explosion', 'airstrike', 'hostage', 'nuclear', 'conflict', 'assault', 'offensive', 'siege', 'combat', 'drone'];

function classifySeverity(title, description) {
  const text = (title + ' ' + (description || '')).toLowerCase();
  return HIGH_KEYWORDS.some(k => text.includes(k)) ? 'HIGH' : 'MED';
}

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 60000);
  if (diff < 60) return `${diff}m`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h`;
  return `${Math.floor(diff / 1440)}d`;
}

function parseRSSXML(xmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');
  const items = Array.from(doc.querySelectorAll('item'));
  return items.map(item => ({
    title: item.querySelector('title')?.textContent || '',
    description: item.querySelector('description')?.textContent || '',
    link: item.querySelector('link')?.textContent || '',
    pubDate: item.querySelector('pubDate')?.textContent || '',
  }));
}


// ── GEO LOOKUP ────────────────────────────────────────────────────────────────
const GEO_MAP = [
  // Middle East
  { keys: ['ukraine', 'kyiv', 'kharkiv', 'zaporizhzhia', 'odessa', 'mariupol', 'kherson'], lon: 32, lat: 48, region: 'Ukraine', flag: '🇺🇦' },
  { keys: ['russia', 'moscow', 'kremlin', 'putin', 'russian'], lon: 37, lat: 55, region: 'Russia', flag: '🇷🇺' },
  { keys: ['israel', 'tel aviv', 'jerusalem', 'idf', 'iron dome'], lon: 34.8, lat: 31.5, region: 'Israel', flag: '🇮🇱' },
  { keys: ['gaza', 'hamas', 'rafah', 'palestin'], lon: 34.3, lat: 31.4, region: 'Gaza', flag: '🇵🇸' },
  { keys: ['lebanon', 'hezbollah', 'beirut'], lon: 35.5, lat: 33.9, region: 'Lebanon', flag: '🇱🇧' },
  { keys: ['iran', 'tehran', 'irgc', 'iranian'], lon: 53, lat: 32, region: 'Iran', flag: '🇮🇷' },
  { keys: ['syria', 'damascus', 'syrian'], lon: 38, lat: 35, region: 'Syria', flag: '🇸🇾' },
  { keys: ['iraq', 'baghdad', 'iraqi'], lon: 44, lat: 33, region: 'Iraq', flag: '🇮🇶' },
  { keys: ['yemen', 'houthi', 'sanaa', 'red sea', 'bab el-mandeb'], lon: 44, lat: 15, region: 'Yemen', flag: '🇾🇪' },
  { keys: ['saudi', 'riyadh', 'aramco'], lon: 45, lat: 24, region: 'Saudi Arabia', flag: '🇸🇦' },
  { keys: ['turkey', 'ankara', 'erdogan', 'turkish'], lon: 35, lat: 39, region: 'Turkey', flag: '🇹🇷' },
  // Asia-Pacific
  { keys: ['china', 'beijing', 'pla', 'chinese', 'xi jinping'], lon: 116, lat: 39, region: 'China', flag: '🇨🇳' },
  { keys: ['taiwan', 'taipei', 'adiz', 'strait'], lon: 121, lat: 24, region: 'Taiwan Strait', flag: '🇹🇼' },
  { keys: ['north korea', 'dprk', 'pyongyang', 'kim jong', 'icbm', 'hwasong'], lon: 127, lat: 40, region: 'North Korea', flag: '🇰🇵' },
  { keys: ['south korea', 'seoul', 'korean'], lon: 127, lat: 37, region: 'South Korea', flag: '🇰🇷' },
  { keys: ['japan', 'tokyo', 'japanese'], lon: 139, lat: 35, region: 'Japan', flag: '🇯🇵' },
  { keys: ['philippines', 'manila', 'philippine', 'scarborough', 'thomas shoal'], lon: 121, lat: 12, region: 'Philippines', flag: '🇵🇭' },
  { keys: ['south china sea', 'spratly', 'paracel'], lon: 114, lat: 16, region: 'South China Sea', flag: '🌏' },
  { keys: ['india', 'new delhi', 'modi', 'indian'], lon: 78, lat: 20, region: 'India', flag: '🇮🇳' },
  { keys: ['pakistan', 'islamabad', 'karachi', 'pakistani'], lon: 69, lat: 30, region: 'Pakistan', flag: '🇵🇰' },
  { keys: ['afghanistan', 'kabul', 'taliban'], lon: 69, lat: 34, region: 'Afghanistan', flag: '🇦🇫' },
  // Africa
  { keys: ['sudan', 'darfur', 'khartoum', 'rsf', 'el fasher'], lon: 30, lat: 15, region: 'Sudan', flag: '🇸🇩' },
  { keys: ['ethiopia', 'addis ababa', 'tigray', 'ethiopian'], lon: 38, lat: 8, region: 'Ethiopia', flag: '🇪🇹' },
  { keys: ['somalia', 'mogadishu', 'al-shabaab'], lon: 45, lat: 5, region: 'Somalia', flag: '🇸🇴' },
  { keys: ['mali', 'bamako', 'sahel', 'niger', 'burkina', 'wagner', 'africa corps'], lon: -5, lat: 16, region: 'Sahel', flag: '🌍' },
  { keys: ['nigeria', 'lagos', 'abuja', 'boko haram'], lon: 8, lat: 9, region: 'Nigeria', flag: '🇳🇬' },
  { keys: ['libya', 'tripoli', 'libyan'], lon: 13, lat: 27, region: 'Libya', flag: '🇱🇾' },
  { keys: ['egypt', 'cairo', 'egyptian'], lon: 30, lat: 26, region: 'Egypt', flag: '🇪🇬' },
  // Europe
  { keys: ['nato', 'brussels', 'alliance'], lon: 4.3, lat: 50.8, region: 'NATO / Brussels', flag: '🌐' },
  { keys: ['poland', 'warsaw', 'polish'], lon: 21, lat: 52, region: 'Poland', flag: '🇵🇱' },
  { keys: ['belarus', 'minsk', 'lukashenko'], lon: 27, lat: 53, region: 'Belarus', flag: '🇧🇾' },
  { keys: ['serbia', 'belgrade', 'kosovo', 'balkans'], lon: 21, lat: 44, region: 'Balkans', flag: '🇷🇸' },
  // Americas
  { keys: ['venezuela', 'caracas', 'maduro'], lon: -66, lat: 10, region: 'Venezuela', flag: '🇻🇪' },
  { keys: ['mexico', 'cartel', 'jalisco'], lon: -102, lat: 23, region: 'Mexico', flag: '🇲🇽' },
  { keys: ['haiti', 'port-au-prince'], lon: -72, lat: 19, region: 'Haiti', flag: '🇭🇹' },
];

function geoFromText(title, body) {
  const text = (title + ' ' + (body || '')).toLowerCase();
  for (const entry of GEO_MAP) {
    if (entry.keys.some(k => text.includes(k))) {
      return { lon: entry.lon, lat: entry.lat, region: entry.region, flag: entry.flag };
    }
  }
  return null;
}

function rssItemToFeedItem(item, source, index) {
  const id = 'live-' + index + '-' + Date.now();
  const sev = classifySeverity(item.title, item.description);
  const body = item.description
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .trim();

  const geo = geoFromText(item.title, body);

  return {
    num: `#${String(index + 1).padStart(2, '0')}`,
    id,
    title: item.title,
    body: body || item.title,
    sev,
    conf: null,
    time: item.pubDate ? timeAgo(item.pubDate) : 'recent',
    flag: geo ? geo.flag : source.flag,
    upvotes: 0,
    region: geo ? geo.region : source.region,
    lon: geo ? geo.lon : 0,
    lat: geo ? geo.lat : 0,
    link: item.link || null,
  };
}

async function fetchWithFallback(url) {
  // Preferred path: fetch through the main process (electron-main.js's
  // fetch-rss handler) — no CORS, no public proxy needed at all, and
  // that handler has been sitting there ready this whole time. This
  // should have been the primary path already.
  if (window.electronAPI && window.electronAPI.fetchRSS) {
    try {
      const xml = await window.electronAPI.fetchRSS(url);
      if (xml && (xml.includes('<rss') || xml.includes('<feed'))) return xml;
    } catch (e) {
      console.warn('Main-process RSS fetch failed, falling back to public proxies:', e.message);
    }
  }

  // Fallback — only reached if electronAPI is missing (e.g. testing this
  // file outside Electron) or the main-process fetch itself failed.
  for (const makeProxy of CORS_PROXIES) {
    try {
      const res = await fetch(makeProxy(url), { signal: AbortSignal.timeout(6000) });
      if (!res.ok) continue;
      const text = await res.text();
      // allorigins returns JSON with .contents; others return raw XML
      try {
        const json = JSON.parse(text);
        if (json.contents) return json.contents;
      } catch (je) {
        if (text.includes('<rss') || text.includes('<feed')) return text;
      }
    } catch (e) { continue; }
  }
  throw new Error('All proxies failed');
}

async function fetchRSSFeed(source) {
  try {
    const xml = await fetchWithFallback(source.url);
    const items = parseRSSXML(xml);
    if (!items.length) throw new Error('No items parsed');
    return items.slice(0, 6);
  } catch (e) {
    console.warn('RSS fetch failed for', source.url, e.message);
    return [];
  }
}

async function loadLiveNews() {
  // Show loading state only on first load
  if (!liveFeedData.length) {
    const feed = document.getElementById('feed');
    if (currentFeedTab === 'live') {
      feed.innerHTML = '<div style="padding:16px 12px;color:var(--text3);font-size:11px;font-family:var(--mono)">● Fetching live feeds...</div>';
    }
  }

  const results = await Promise.allSettled(RSS_SOURCES.map(s => fetchRSSFeed(s)));
  let allItems = [];

  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      result.value.forEach(item => allItems.push({ item, source: RSS_SOURCES[i] }));
    }
  });

  if (allItems.length === 0) {
    console.warn('All RSS feeds failed, using fallback data');
    if (currentFeedTab === 'live') buildFeed();
    return;
  }

  // Sort by date (newest first)
  allItems.sort((a, b) => new Date(b.item.pubDate || 0) - new Date(a.item.pubDate || 0));

  // Store live items separately
  liveFeedData = allItems.slice(0, 20).map(({ item, source }, i) =>
    rssItemToFeedItem(item, source, i)
  );

  // Re-render only if we're on the live tab
  if (currentFeedTab === 'live') {
    renderFeed(liveFeedData);
    buildLiveTicker();
  }

  // Refresh the globe's live-news markers with the latest data. Defined
  // further down in this file (globe section); window.syncLiveMarkers is
  // set once the globe finishes initializing, so guard against it not
  // existing yet on the very first call.
  if (window.syncLiveMarkers) window.syncLiveMarkers();

  // Update the live count in header
  const liveCount = document.querySelector('.hnav.live span[style]');
  if (liveCount) liveCount.textContent = liveFeedData.length;
}

function buildLiveTicker() {
  const track = document.getElementById('ticker-track');
  const items = liveFeedData.length ? liveFeedData.slice(0, 8) : HARDCODED_FEED.slice(0, 8);
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(i =>
    `<span class="ticker-item"><span class="flag">${i.flag}</span><span class="hl">${i.title.toUpperCase()}</span><span style="color:var(--text3)">${i.time}</span></span>`
  ).join('');
}

// ── STATE ─────────────────────────────────────────────────────────────────────
let selectedFeedId = null;
let currentFeedTab = 'live';
const HARDCODED_FEED = [...FEED_DATA]; // snapshot of original hardcoded data
let liveFeedData = [];

function switchFeedTab(tab) {
  currentFeedTab = tab;
  document.getElementById('ftab-live').classList.toggle('on', tab === 'live');
  document.getElementById('ftab-relevant').classList.toggle('on', tab === 'relevant');
  renderFeed(tab === 'live' ? liveFeedData : HARDCODED_FEED);
}

function renderFeed(data) {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  if (!data.length) {
    feed.innerHTML = '<div style="padding:16px 12px;color:var(--text3);font-size:11px;font-family:var(--mono)">● Fetching live feeds...</div>';
    return;
  }
  data.forEach(item => {
    const d = document.createElement('div');
    d.className = 'feed-item';
    d.id = `feed-${item.id}`;
    d.setAttribute('data-id', item.id);
    d.innerHTML = `
      <div class="fi-top">
        <span class="fi-num">${item.num}</span>
        <span class="fi-title">${item.title}</span>
        <span class="severity ${item.sev === 'HIGH' ? 'sev-high' : 'sev-med'}">${item.sev}</span>
      </div>
      <div class="fi-body">${item.body.substring(0, 120)}...</div>
      <div class="fi-foot">
        ${item.conf ? `<span class="conf-badge">CONFIDENCE ${item.conf}%</span>` : '<span class="fi-act">⚑ VERIFY</span>'}
        <span class="fi-time">${item.time}</span>
        <div class="fi-actions">
          <span class="fi-act">↑ ${item.upvotes}</span>
          <span class="fi-act">0</span>
          <span class="fi-act fi-flag">${item.flag}</span>
        </div>
      </div>`;
    d.addEventListener('click', () => openNewsDetail(item.id, data));
    feed.appendChild(d);
  });
}

// ── UI BUILDERS ───────────────────────────────────────────────────────────────
function buildFeed() {
  renderFeed(currentFeedTab === 'live' ? liveFeedData : HARDCODED_FEED);
}

function openNewsDetail(id, dataSource) {
  const item = (dataSource || [...liveFeedData, ...HARDCODED_FEED]).find(f => f.id === id);
  if (!item) return;

  // Highlight selected item
  document.querySelectorAll('.feed-item').forEach(el => el.classList.remove('selected'));
  const feedEl = document.getElementById(`feed-${id}`);
  if (feedEl) feedEl.classList.add('selected');

  selectedFeedId = id;

  // Switch right panel to news detail
  document.getElementById('tab-predictions').style.display = 'none';
  document.getElementById('tab-scenarios').style.display = 'none';
  document.getElementById('tab-detail').style.display = '';

  // Switch tab highlight
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('on'));
  document.getElementById('tab-detail-btn').classList.add('on');
  document.getElementById('tab-detail-btn').style.display = '';

  // Severity score: HIGH=85-95, MED=45-65
  const sevScore = item.sev === 'HIGH' ? (item.conf || 87) : (item.conf || 52);
  const sevColor = item.sev === 'HIGH' ? '#e63946' : '#f77f00';
  const sevLabel = item.sev === 'HIGH' ? 'HIGH SEVERITY' : 'MEDIUM SEVERITY';

  // Threat indicators
  const indicators = buildThreatIndicators(item);

  document.getElementById('tab-detail').innerHTML = `
    <div class="detail-wrap">
      <div class="detail-header">
        <div class="detail-flag">${item.flag}</div>
        <div class="detail-meta">
          <span class="severity ${item.sev === 'HIGH' ? 'sev-high' : 'sev-med'}">${item.sev}</span>
          <span class="detail-region">${item.region}</span>
          <span class="detail-time">${item.time} ago</span>
        </div>
        <button class="detail-close" onclick="closeDetail()">✕</button>
      </div>

      <div class="detail-title">${item.title}</div>

      <div class="sev-bar-wrap">
        <div class="sev-bar-label">
          <span style="color:${sevColor};font-family:var(--mono);font-size:10px;font-weight:700">${sevLabel}</span>
          <span style="font-family:var(--mono);font-size:12px;color:${sevColor}">${sevScore}%</span>
        </div>
        <div class="sev-bar-track">
          <div class="sev-bar-fill" style="width:0%;background:${sevColor}" data-target="${sevScore}"></div>
        </div>
        <div class="sev-bar-zones">
          <span>LOW</span><span>MEDIUM</span><span>HIGH</span><span>CRITICAL</span>
        </div>
      </div>

      <div class="detail-body">${item.body}</div>

      ${item.conf ? `<div class="detail-conf"><span class="conf-badge">INTELLIGENCE CONFIDENCE ${item.conf}%</span></div>` : ''}
      ${item.link ? `<div style="margin:10px 0"><a href="${item.link}" target="_blank" rel="noopener" style="font-size:10px;font-family:var(--mono);color:var(--blue);text-decoration:none;border:1px solid #4895ef40;padding:3px 8px;border-radius:3px">↗ READ FULL ARTICLE</a></div>` : ''}

      <div class="detail-indicators">
        <div class="di-head">Threat Indicators</div>
        ${indicators}
      </div>
    </div>
  `;

  // Animate the severity bar
  requestAnimationFrame(() => {
    setTimeout(() => {
      const fill = document.querySelector('.sev-bar-fill');
      if (fill) fill.style.width = fill.getAttribute('data-target') + '%';
    }, 50);
  });
}

function buildThreatIndicators(item) {
  const inds = [];
  if (item.sev === 'HIGH') {
    inds.push({ label: 'Escalation Risk', val: 'ELEVATED', color: '#e63946' });
    inds.push({ label: 'Civilian Impact', val: 'HIGH', color: '#e63946' });
  } else {
    inds.push({ label: 'Escalation Risk', val: 'MODERATE', color: '#f77f00' });
    inds.push({ label: 'Civilian Impact', val: 'MODERATE', color: '#f77f00' });
  }
  inds.push({ label: 'Regional Spillover', val: item.upvotes > 30 ? 'HIGH' : 'MODERATE', color: item.upvotes > 30 ? '#e63946' : '#f77f00' });
  inds.push({ label: 'Intl Response', val: item.conf ? 'CONFIRMED' : 'MONITORING', color: item.conf ? '#2ec4b6' : '#9999aa' });

  return inds.map(ind => `
    <div class="di-item">
      <span class="di-label">${ind.label}</span>
      <span class="di-val" style="color:${ind.color}">${ind.val}</span>
    </div>
  `).join('');
}

function closeDetail() {
  selectedFeedId = null;
  document.querySelectorAll('.feed-item').forEach(el => el.classList.remove('selected'));
  document.getElementById('tab-detail').style.display = 'none';
  document.getElementById('tab-detail-btn').style.display = 'none';

  // Restore predictions tab
  document.getElementById('tab-predictions').style.display = '';
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('on'));
  document.querySelector('.rtab[data-tab="predictions"]').classList.add('on');
}

function buildPredictions() {
  const list = document.getElementById('predictions-list');
  list.innerHTML = '';
  PREDICTIONS.forEach(p => {
    const d = document.createElement('div');
    d.className = 'pred-item';
    d.innerHTML = `
      <div class="pi-q">${p.q}</div>
      <div class="pi-bar"><div class="pi-fill" style="width:${p.yes}%"></div></div>
      <div class="pi-vals"><span class="pi-yes">${p.yes}%</span><span class="pi-no">${p.no}%</span></div>
      <div class="pi-meta"><span>${p.votes.toLocaleString()} votes</span><span style="color:var(--green)">${p.trend}</span></div>`;
    list.appendChild(d);
  });
}

function buildMarkets() {
  function rows(data, tableId) {
    const t = document.getElementById(tableId);
    t.innerHTML = '';
    data.forEach(r => {
      t.innerHTML += `<tr>
        <td class="mname">${r.flag || ''} ${r.name}</td>
        <td class="mval">${r.val}</td>
        <td class="mchg ${r.pos === true ? 'pos' : r.pos === false ? 'neg' : ''}">${r.chg}</td>
      </tr>`;
    });
  }
  rows(MARKETS.indices, 'indices-table');
  rows(MARKETS.commodities, 'commodities-table');
  rows(MARKETS.forex, 'forex-table');
}

function buildKeywords() {
  const list = document.getElementById('keywords-list');
  const max = KEYWORDS[0].count;
  list.innerHTML = '';
  KEYWORDS.forEach(k => {
    list.innerHTML += `<div class="kw-item">
      <span class="kw-rank">#${k.rank}</span>
      <span class="kw-word">${k.word}</span>
      <div class="kw-bar"><div class="kw-fill" style="width:${k.count / max * 100}%;background:${k.color}"></div></div>
      <span class="kw-count">${k.count} mentions</span>
    </div>`;
  });
}

function buildScenarios() {
  const list = document.getElementById('scenarios-list');
  list.innerHTML = '';
  SCENARIOS.forEach(s => {
    list.innerHTML += `<div class="scen-item">
      <div class="si-head"><span class="si-title">${s.title}</span><span class="si-prob">${s.prob}</span></div>
      <div class="si-body">${s.body}</div>
      <div class="si-tags">${s.tags.map(t => `<span class="si-tag">${t}</span>`).join('')}</div>
    </div>`;
  });
}

function buildTicker() {
  const track = document.getElementById('ticker-track');
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  track.innerHTML = items.map(i => `<span class="ticker-item"><span class="flag">${i.flag}</span><span class="hl">${i.text}</span><span style="color:var(--text3)">${i.t}</span></span>`).join('');
}

function switchTab(name, el) {
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('tab-predictions').style.display = name === 'predictions' ? '' : 'none';
  document.getElementById('tab-scenarios').style.display = name === 'scenarios' ? '' : 'none';
  document.getElementById('tab-detail').style.display = 'none';
  document.getElementById('tab-detail-btn').style.display = 'none';

  // Clear feed selection if not coming from detail
  if (name !== 'detail') {
    document.querySelectorAll('.feed-item').forEach(el => el.classList.remove('selected'));
    selectedFeedId = null;
  }
}

function toggleFilter(el) { el.classList.toggle('on'); }

function updateTime() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('time-display').textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} ${ampm}`;
}

// ── GLOBE (Cesium — photorealistic Google 3D Tiles, confirmed working in
// cesium-globe-test/globe-test.html) ────────────────────────────────────────
Cesium.Ion.defaultAccessToken = window.CESIUM_TOKEN;

const viewer = new Cesium.Viewer('cesium-globe', {
  baseLayerPicker: false,
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  navigationHelpButton: false,
  animation: false,
  timeline: false,
  fullscreenButton: false,
  infoBox: false,
  selectionIndicator: false,
});
viewer.canvas.style.cursor = 'grab';

// Start zoomed out over the globe, matching the old default view.
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(20, 25, 22000000),
  duration: 0,
});

async function loadPhotorealisticTileset() {
  try {
    const tileset = await Cesium.createGooglePhotorealistic3DTileset();
    viewer.scene.primitives.add(tileset);
    viewer.scene.globe.show = false; // hide the flat globe now that real tiles are in
  } catch (err) {
    // Falls back to Cesium's default flat globe/imagery — still fully
    // functional (markers, click, hover all still work), just not
    // photorealistic. Check devtools console for the real error if this
    // keeps happening.
    console.error('Photorealistic tileset failed to load, using flat globe fallback:', err);
  }
}
loadPhotorealisticTileset();

// Small helpers ---------------------------------------------------------
const SEV_COLOR = {
  high: Cesium.Color.fromCssColorString('#e63946'),
  med: Cesium.Color.fromCssColorString('#f77f00'),
  low: Cesium.Color.fromCssColorString('#4895ef'),
};
// Same palette as SEV_COLOR, but as plain CSS hex strings — SVG icons need
// a string to put in fill="...", not a Cesium.Color object.
const SEV_HEX = { high: '#e63946', med: '#f77f00', low: '#4895ef' };

// ── Icons — small inline SVGs turned into data URIs, so each marker kind
// gets a distinct recognizable shape instead of a plain dot. No external
// image files to bundle/ship — the SVG text IS the asset.
function svgDataUri(svg) {
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
const ICONS = {
  conflict: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2 L22 20 L2 20 Z" fill="${color}" stroke="white" stroke-width="0.8"/><rect x="11" y="9" width="2" height="6" fill="white"/><rect x="11" y="16" width="2" height="2" fill="white"/></svg>`),
  live: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="${color}"/><circle cx="12" cy="12" r="3" fill="white" fill-opacity="0.7"/></svg>`),
  geo: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="${color}"/></svg>`),
  quake: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="${color}" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="${color}"/></svg>`),
  weather: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 8a4.5 4.5 0 0 1 1 8.9V18Z" fill="${color}"/></svg>`),
  // Points "up" (north) by default — rotated per-aircraft to match heading.
  plane: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 L13.6 9 L23 12.5 L13.6 14 L12 23 L10.4 14 L1 12.5 L10.4 9 Z" fill="${color}" stroke="rgba(0,0,0,0.45)" stroke-width="0.6"/></svg>`),
  helicopter: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12" stroke="${color}" stroke-width="2.2"/><line x1="12" y1="3" x2="12" y2="21" stroke="${color}" stroke-width="2.2"/><circle cx="12" cy="12" r="3.2" fill="${color}"/></svg>`),
  satellite: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="1" y="9" width="6" height="6" fill="${color}"/><rect x="17" y="9" width="6" height="6" fill="${color}"/><rect x="8" y="8" width="8" height="8" fill="${color}"/></svg>`),
  // Points "up" (bow forward) by default — rotated per-vessel to match COG.
  vessel: color => svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2 L16 13 L12 11 L8 13 Z" fill="${color}"/><rect x="10" y="11" width="4" height="9" fill="${color}"/></svg>`),
};

// A pulsing "radar ping" ring around a point, built the same way the old
// canvas version faded a ring outward on a ~1.8s loop. periodMs controls
// speed, baseR/growR control how far it expands. Kept as a plain point
// (not an icon) — a ring is a ring regardless of what it's around.
function addPulseRing(lon, lat, color, periodMs, baseR, growR) {
  return viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(lon, lat),
    point: {
      pixelSize: new Cesium.CallbackProperty(() => {
        const t = (Date.now() % periodMs) / periodMs;
        return baseR + t * growR;
      }, false),
      color: new Cesium.CallbackProperty(() => {
        const t = (Date.now() % periodMs) / periodMs;
        return color.withAlpha((1 - t) * 0.45);
      }, false),
      outlineWidth: 0,
    },
  });
}

// Icon-based marker, with a white-ish scale bump when selected (matches
// the old "isSelected" highlight behavior). Note there's no
// disableDepthTestDistance override here — that's deliberate: leaving
// Cesium's normal depth test on means markers on the far side of the
// globe/terrain are correctly hidden behind it, instead of showing
// through the planet (which is what an earlier version of this code did).
function addMarker(lon, lat, iconUri, size, data, rotationDeg, heightMeters) {
  const entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(lon, lat, heightMeters || 0),
    billboard: {
      image: iconUri,
      width: size,
      height: size,
      // alignedAxis: ZERO = rotate in screen space. That's a simplification
      // vs. "true" world-stable heading (which needs per-frame recompute as
      // the camera moves) — good enough zoomed out, but tell me if headings
      // look off (e.g. rotated 90° or mirrored) once you're testing this,
      // and I can adjust the sign/axis.
      rotation: rotationDeg != null ? Cesium.Math.toRadians(-rotationDeg) : 0,
      alignedAxis: Cesium.Cartesian3.ZERO,
      scale: new Cesium.CallbackProperty(
        () => (selectedFeedId && data.feedId === selectedFeedId ? 1.4 : 1),
        false
      ),
    },
  });
  entity._sedricData = data; // plain custom field for click/hover lookup
  return entity;
}

// CONFLICTS — static, added once ----------------------------------------
CONFLICTS.forEach(c => {
  addPulseRing(c.lon, c.lat, SEV_COLOR[c.type], 1800, c.type === 'high' ? 4 : c.type === 'med' ? 3.5 : 3, 9);
  addMarker(c.lon, c.lat, ICONS.conflict(SEV_HEX[c.type]), 18, { kind: 'conflict', feedId: c.feedId, label: c.label, detail: c.detail, sevType: c.type });
});

// Live news markers — rebuilt whenever liveFeedData refreshes -----------
function syncLiveMarkers() {
  // Remove previous live entities before re-adding current ones.
  viewer.entities.values
    .filter(e => e._sedricData && e._sedricData.kind === 'live')
    .slice() // copy — .remove() mutates the array we're iterating
    .forEach(e => viewer.entities.remove(e));

  liveFeedData.forEach(item => {
    if (!item.lon && !item.lat) return; // skip unlocated items
    const sevType = item.sev === 'HIGH' ? 'high' : 'med';
    addPulseRing(item.lon, item.lat, SEV_COLOR[sevType], 2400, 2.5, 7);
    addMarker(item.lon, item.lat, ICONS.live(SEV_HEX[sevType]), 14, {
      kind: 'live', feedId: item.id, label: item.region, detail: item.title, sevType,
    });
  });
}
// Expose so loadLiveNews() (defined earlier in this file) can call it
// whenever fresh live items come in.
window.syncLiveMarkers = syncLiveMarkers;

// GDELT regional-brief markers — the actual "god's-eye-view data" piece.
// These are raw geo-tagged news events worldwide, not curated like
// CONFLICTS or the RSS-based live feed, so they're deliberately dim/small
// and don't pulse — background texture, not headline items.
let geoNewsData = [];
const GEO_HEX = '#8888aa';

function syncGeoMarkers() {
  viewer.entities.values
    .filter(e => e._sedricData && e._sedricData.kind === 'geo')
    .slice()
    .forEach(e => viewer.entities.remove(e));

  geoNewsData.forEach(item => {
    addMarker(item.lon, item.lat, ICONS.geo(GEO_HEX), 8, {
      kind: 'geo', feedId: null, label: item.label, detail: item.detail, sevType: null,
    });
  });
}
window.syncGeoMarkers = syncGeoMarkers;

function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Fetches recent geo-tagged news worldwide from GDELT via the main
// process (see electron-main.js's fetch-regional-brief handler). Silently
// does nothing if electronAPI isn't available (e.g. testing this file
// outside Electron) — the globe still works fine without it.
async function loadRegionalBrief() {
  if (!window.electronAPI || !window.electronAPI.fetchRegionalBrief) return;
  try {
    const geo = await window.electronAPI.fetchRegionalBrief(
      'conflict OR war OR ceasefire OR airstrike OR sanctions OR protest'
    );
    const features = (geo && geo.features) || [];
    geoNewsData = features
      .filter(f => f.geometry && Array.isArray(f.geometry.coordinates))
      .map(f => ({
        lon: f.geometry.coordinates[0],
        lat: f.geometry.coordinates[1],
        count: (f.properties && f.properties.count) || 0,
        label: (f.properties && f.properties.name) || 'Unnamed location',
        detail: stripHtml(f.properties && f.properties.html).slice(0, 160)
          || `${(f.properties && f.properties.count) || '?'} related articles`,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 150); // cap it — GDELT can return a lot, keep the globe readable
    if (window.syncGeoMarkers) window.syncGeoMarkers();
  } catch (err) {
    console.warn('Regional brief (GDELT) fetch failed:', err.message);
  }
}

// ── Earthquakes (USGS) — magnitude 2.5+ in the last day, worldwide -------
async function loadEarthquakes() {
  if (!window.electronAPI || !window.electronAPI.fetchExternal) return;
  try {
    const raw = await window.electronAPI.fetchExternal(
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson'
    );
    const data = JSON.parse(raw);
    viewer.entities.values
      .filter(e => e._sedricData && e._sedricData.kind === 'quake')
      .slice()
      .forEach(e => viewer.entities.remove(e));

    (data.features || []).forEach(f => {
      const [lon, lat] = f.geometry.coordinates;
      const mag = f.properties.mag || 0;
      const hex = mag >= 6 ? SEV_HEX.high : mag >= 4.5 ? SEV_HEX.med : SEV_HEX.low;
      addMarker(lon, lat, ICONS.quake(hex), Math.max(14, mag * 4), {
        kind: 'quake', feedId: null, mag,
        label: f.properties.place || 'Earthquake',
        detail: `Magnitude ${mag.toFixed(1)} — ${new Date(f.properties.time).toLocaleString()}`,
      });
    });
  } catch (err) {
    console.warn('USGS earthquake fetch failed:', err.message);
  }
}

// ── Weather (Open-Meteo) — sampled at your existing CONFLICTS locations,
// rather than a full global grid. Open-Meteo is a point-forecast API (you
// ask it about a specific lat/lon), so this ties weather to places you
// already track instead of inventing a separate location list.
async function loadWeather() {
  if (!window.electronAPI || !window.electronAPI.fetchExternal) return;
  viewer.entities.values
    .filter(e => e._sedricData && e._sedricData.kind === 'weather')
    .slice()
    .forEach(e => viewer.entities.remove(e));

  await Promise.allSettled(CONFLICTS.map(async c => {
    try {
      const raw = await window.electronAPI.fetchExternal(
        `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&current_weather=true`
      );
      const data = JSON.parse(raw);
      const w = data.current_weather;
      if (!w) return;
      // Offset slightly north so it doesn't sit exactly on top of the
      // conflict marker at the same coordinates.
      addMarker(c.lon, c.lat + 1.2, ICONS.weather('#9dd6ff'), 14, {
        kind: 'weather', feedId: null,
        label: `${c.label} — current weather`,
        detail: `${w.temperature}°C, wind ${w.windspeed} km/h`,
      });
    } catch (err) {
      console.warn('Open-Meteo fetch failed for', c.label, err.message);
    }
  }));
}

// ── Flight trails — shared by civilian (OpenSky) and military (adsb.lol)
// flights. A trail is just recent positions per aircraft, persisted across
// refresh cycles in this Map (not tied to any entity's lifecycle), redrawn
// as a polyline each time. Since flights refresh every 5 minutes, trails
// grow in 5-minute-resolution steps rather than smoothly — an honest
// simplification, not a full continuous track.
const flightHistory = new Map(); // hex/icao24 -> [{lon,lat}, ...]
const MAX_TRAIL_POINTS = 8;

function pushFlightHistory(id, lon, lat, height) {
  let hist = flightHistory.get(id);
  if (!hist) { hist = []; flightHistory.set(id, hist); }
  hist.push({ lon, lat, height });
  if (hist.length > MAX_TRAIL_POINTS) hist.shift();
  return hist;
}

function addFlightTrail(hist, cesiumColor) {
  if (hist.length < 2) return null;
  const flat = [];
  hist.forEach(p => flat.push(p.lon, p.lat, p.height));
  const entity = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(flat),
      width: 1.5,
      material: cesiumColor.withAlpha(0.5),
    },
  });
  entity._sedricData = { kind: 'flight-trail' };
  return entity;
}

function clearFlightEntities(kind) {
  viewer.entities.values
    .filter(e => e._sedricData && e._sedricData.kind === kind)
    .slice()
    .forEach(e => viewer.entities.remove(e));
}

// ── Flights (OpenSky) — live civilian aircraft worldwide -----------------
async function loadFlights() {
  if (!window.electronAPI || !window.electronAPI.fetchExternal) return;
  try {
    const raw = await window.electronAPI.fetchExternal('https://opensky-network.org/api/states/all');
    const data = JSON.parse(raw);
    clearFlightEntities('flight');
    clearFlightEntities('flight-trail');

    // OpenSky's state vectors are plain arrays, not objects — indices per
    // their docs: 0=icao24, 1=callsign, 2=origin country, 5=lon, 6=lat,
    // 7=baro_altitude (m), 8=on_ground, 9=velocity (m/s), 10=true_track
    // (heading, degrees), 13=geo_altitude (m), 17=category (8 =
    // Rotorcraft/helicopter). Capped at 1500 to keep the globe responsive —
    // there can be 5000+ aircraft airborne at once.
    const states = (data.states || [])
      .filter(s => s[5] != null && s[6] != null && !s[8])
      .slice(0, 1500);

    states.forEach(s => {
      const icao24 = s[0], callsign = s[1], originCountry = s[2];
      const lon = s[5], lat = s[6], velocity = s[9], heading = s[10], category = s[17];
      // Real altitude, not ground level — without this, markers sit at 0m
      // and get hidden behind terrain/buildings as soon as you zoom in.
      // Falls back to a rough 10,000m cruise guess only if both fields are
      // missing (rare, but happens for some records).
      const height = s[13] != null ? s[13] : (s[7] != null ? s[7] : 10000);
      const isHelicopter = category === 8;
      const hex = '#2ec4b6'; // civilian — green, matches the rest of your live layer
      const icon = isHelicopter ? ICONS.helicopter(hex) : ICONS.plane(hex);

      const hist = pushFlightHistory(icao24, lon, lat, height);
      addFlightTrail(hist, Cesium.Color.fromCssColorString(hex));
      // OpenSky's /states/all doesn't include aircraft type, tail number,
      // or operator (unlike adsb.lol below) — so unlike the military
      // layer, this can't fully match the reference screenshot's 3-line
      // format. Showing what's actually available: origin country, then
      // altitude/speed in aviation units (ft/kt) to at least match style.
      const altFt = Math.round(height * 3.28084);
      const speedKt = velocity != null ? Math.round(velocity * 1.94384) : null;
      addMarker(lon, lat, icon, isHelicopter ? 14 : 12, {
        kind: 'flight', feedId: null, isHelicopter,
        label: (callsign || icao24 || 'Unknown flight').trim(),
        detail: `${originCountry || 'Unknown origin'}\n${altFt} ft${speedKt != null ? ' · ' + speedKt + ' kt' : ''}`,
      }, isHelicopter ? undefined : heading, height);
    });
  } catch (err) {
    console.warn('OpenSky fetch failed:', err.message);
  }
}

// ── Military flights (adsb.lol) — the actual "direction of military
// action, helicopters" piece. adsb.lol's /v2/mil endpoint returns aircraft
// specifically tagged as military, worldwide, no key needed. Confirmed via
// their public API docs: response is { ac: [ {lat, lon, track, category,
// flight, hex, gs, ...} ] }. Category "A7" = Rotorcraft (helicopter) in the
// standard ADS-B emitter category table — that's the concrete signal for
// distinguishing helicopters from fixed-wing here.
async function loadMilitaryFlights() {
  if (!window.electronAPI || !window.electronAPI.fetchExternal) return;
  try {
    const raw = await window.electronAPI.fetchExternal('https://api.adsb.lol/v2/mil');
    const data = JSON.parse(raw);
    clearFlightEntities('military-flight');
    clearFlightEntities('military-trail');

    const list = data.ac || data.aircraft || [];
    list.forEach(a => {
      if (a.lat == null || a.lon == null) return;
      const isHelicopter = a.category === 'A7';
      const hex = '#ffb703'; // amber — matches how god's-eye-view marks military traffic
      const icon = isHelicopter ? ICONS.helicopter(hex) : ICONS.plane(hex);
      const id = 'mil-' + (a.hex || a.flight || `${a.lat},${a.lon}`);
      // adsb.lol reports altitude in feet, like most ADS-B aggregators —
      // convert to meters for Cesium. Same "don't sit at ground level"
      // fix as the civilian flights above.
      const heightFt = typeof a.alt_baro === 'number' ? a.alt_baro : 10000 / 0.3048;
      const height = heightFt * 0.3048;

      const hist = pushFlightHistory(id, a.lon, a.lat, height);
      const trail = addFlightTrail(hist, Cesium.Color.fromCssColorString(hex));
      if (trail) trail._sedricData.kind = 'military-trail';
      // adsb.lol's /v2/mil gives us type (t), registration (r), and
      // sometimes owner/operator (ownOp) — enough to match the reference
      // screenshot's "SUPRT90 / EC45 · 15-72381 / Operator unknown · 900 ft
      // · 69 kt" format almost exactly, including their own fallback text
      // when operator data isn't available.
      const speedKt = a.gs != null ? Math.round(a.gs) : null;
      addMarker(a.lon, a.lat, icon, isHelicopter ? 15 : 13, {
        kind: 'military-flight', feedId: null, isHelicopter,
        label: (a.flight || a.r || a.hex || 'Unknown military aircraft').trim(),
        detail: `${a.t || 'Unknown type'} · ${a.r || a.hex || 'Unknown reg'}\n${a.ownOp || 'Operator unknown'} · ${Math.round(heightFt)} ft${speedKt != null ? ' · ' + speedKt + ' kt' : ''}`,
      }, isHelicopter ? undefined : a.track, height);
    });
  } catch (err) {
    console.warn('adsb.lol military fetch failed:', err.message);
  }
}

// ── AIS vessels (AISStream) — live ship tracking worldwide ---------------
// Unlike everything else so far, this is a persistent WebSocket connection,
// not a periodic fetch — vessels push position updates continuously. That
// means it doesn't need any main-process/IPC plumbing at all: WebSocket is
// a standard browser API available in this renderer regardless of
// nodeIntegration/contextIsolation (those only gate Node.js APIs).
//
// Requires your own free API key from https://aisstream.io — add this line
// to config.local.js (same file that already holds window.CESIUM_TOKEN):
//   window.AISSTREAM_API_KEY = 'your-key-here';
// Without it, this layer just stays off — everything else still works.
let aisSocket = null;
const vesselTracked = new Map(); // MMSI -> { entity, lastSeen }

// The whole-world bounding box below WILL be a lot of ships (a couple
// hundred thousand report worldwide) — that's a lot of WebSocket traffic
// and a lot of entities. If this feels like too much once you see it
// running, narrow this to a region you care about, e.g. the Mediterranean:
// [[[30, -6], [46, 36]]] — [[minLat,minLon],[maxLat,maxLon]].
const AIS_BOUNDING_BOX = [[[-90, -180], [90, 180]]];

function connectAISStream() {
  if (!window.AISSTREAM_API_KEY) {
    console.warn('AIS vessels disabled — add window.AISSTREAM_API_KEY to config.local.js to enable this layer.');
    return;
  }

  aisSocket = new WebSocket('wss://stream.aisstream.io/v0/stream');

  aisSocket.onopen = () => {
    aisSocket.send(JSON.stringify({
      APIKey: window.AISSTREAM_API_KEY,
      BoundingBoxes: AIS_BOUNDING_BOX,
      FilterMessageTypes: ['PositionReport'],
    }));
  };

  aisSocket.onmessage = (event) => {
    const handleText = (text) => {
      try {
        const msg = JSON.parse(text);
        if (msg.MessageType !== 'PositionReport') return;
        const meta = msg.MetaData || {};
        const pr = (msg.Message && msg.Message.PositionReport) || {};
        if (meta.MMSI == null || meta.latitude == null || meta.longitude == null) return;
        updateVesselMarker(meta.MMSI, meta.longitude, meta.latitude, meta.ShipName, pr.Cog, pr.Sog);
      } catch (err) {
        console.warn('AIS message parse failed:', err.message);
      }
    };
    // Some browsers/servers deliver WebSocket text frames as a Blob rather
    // than a plain string — Blob.text() reads it out asynchronously.
    if (typeof event.data === 'string') {
      handleText(event.data);
    } else if (event.data instanceof Blob) {
      event.data.text().then(handleText);
    } else {
      console.warn('Unexpected AIS message data type:', typeof event.data);
    }
  };

  aisSocket.onerror = (err) => {
    console.warn('AIS stream error — check your API key if this persists:', err);
  };

  aisSocket.onclose = () => {
    console.warn('AIS stream closed — reconnecting in 10s');
    setTimeout(connectAISStream, 10000);
  };
}

const VESSEL_HEX = '#5bc0eb'; // light blue — distinct from every other layer

function updateVesselMarker(mmsi, lon, lat, shipName, cog, sog) {
  const label = (shipName || `MMSI ${mmsi}`).trim();
  const detail = [
    sog != null ? `${sog.toFixed(1)} kt` : null,
    cog != null ? `heading ${Math.round(cog)}°` : null,
  ].filter(Boolean).join(' — ') || 'Live AIS position';

  let entry = vesselTracked.get(mmsi);
  if (entry) {
    // Vessel already tracked — move its existing marker instead of adding
    // a new one, so the map doesn't accumulate duplicate ships.
    entry.entity.position = Cesium.Cartesian3.fromDegrees(lon, lat);
    if (cog != null) entry.entity.billboard.rotation = Cesium.Math.toRadians(-cog);
    entry.entity._sedricData.label = label;
    entry.entity._sedricData.detail = detail;
    entry.lastSeen = Date.now();
  } else {
    const entity = addMarker(lon, lat, ICONS.vessel(VESSEL_HEX), 13, {
      kind: 'vessel', feedId: null, label, detail,
    }, cog);
    vesselTracked.set(mmsi, { entity, lastSeen: Date.now() });
  }
}

// Ships that stop reporting (out of range, AIS off, etc.) would otherwise
// sit on the globe forever — clear anything not heard from in 20 minutes.
function cleanupStaleVessels() {
  const cutoff = Date.now() - 20 * 60 * 1000;
  vesselTracked.forEach((entry, mmsi) => {
    if (entry.lastSeen < cutoff) {
      viewer.entities.remove(entry.entity);
      vesselTracked.delete(mmsi);
    }
  });
}


// GROUP=stations keeps this to a handful of well-known objects (ISS, CSS
// Tiangong, etc.) for a first pass — swap the GROUP query param (e.g.
// "visual" for the ~100 brightest, "active" for everything, ~9000+ objects
// and much heavier) once this is confirmed working.
let satTrackedObjects = []; // { satrec, name, entity }

async function loadSatelliteElements() {
  if (!window.electronAPI || !window.electronAPI.fetchExternal) return;
  try {
    const raw = await window.electronAPI.fetchExternal(
      'https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=tle'
    );
    const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

    // Remove any satellites from a previous load before rebuilding.
    satTrackedObjects.forEach(({ entity }) => viewer.entities.remove(entity));
    satTrackedObjects = [];

    // TLE format: 3 lines per object — name, then two element lines
    // starting with "1 " and "2 ".
    for (let i = 0; i + 2 < lines.length; i += 3) {
      const name = lines[i];
      const line1 = lines[i + 1], line2 = lines[i + 2];
      if (!line1.startsWith('1 ') || !line2.startsWith('2 ')) continue;
      const satrec = satellite.twoline2satrec(line1, line2);
      const entity = addMarker(0, 0, ICONS.satellite('#f2c14e'), 16, {
        kind: 'satellite', feedId: null, label: name, detail: 'Live orbital position (SGP4)',
      });
      satTrackedObjects.push({ satrec, name, entity });
    }
    updateSatellitePositions(); // place them immediately, don't wait for the next tick
  } catch (err) {
    console.warn('CelesTrak fetch failed:', err.message);
  }
}

// Orbital elements barely change day-to-day, so we only re-fetch them
// occasionally (see INIT below) — but positions need recalculating often,
// since something like the ISS moves ~7.6 km/second.
function updateSatellitePositions() {
  if (!satTrackedObjects.length) return;
  const now = new Date();
  const gmst = satellite.gstime(now);
  satTrackedObjects.forEach(({ satrec, entity }) => {
    const pv = satellite.propagate(satrec, now);
    if (!pv || !pv.position) return;
    const geo = satellite.eciToGeodetic(pv.position, gmst);
    const lon = satellite.degreesLong(geo.longitude);
    const lat = satellite.degreesLat(geo.latitude);
    entity.position = Cesium.Cartesian3.fromDegrees(lon, lat, geo.height * 1000);
  });
}

const globeEvents = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

globeEvents.setInputAction(movement => {
  const picked = viewer.scene.pick(movement.position);
  const data = picked && picked.id && picked.id._sedricData;

  if (data && data.feedId) {
    if (data.kind === 'conflict') {
      const inHardcoded = HARDCODED_FEED.find(f => f.id === data.feedId);
      if (inHardcoded) switchFeedTab('relevant');
      const feedEl = document.getElementById(`feed-${data.feedId}`);
      if (feedEl) feedEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      openNewsDetail(data.feedId);
    } else if (data.kind === 'live') {
      switchFeedTab('live');
      const feedEl = document.getElementById(`feed-${data.feedId}`);
      if (feedEl) feedEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      openNewsDetail(data.feedId, liveFeedData);
    }
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

globeEvents.setInputAction(movement => {
  const picked = viewer.scene.pick(movement.endPosition);
  const data = picked && picked.id && picked.id._sedricData;
  const tt = document.getElementById('tooltip');
  const rect = viewer.scene.canvas.getBoundingClientRect();

  if (data) {
    viewer.canvas.style.cursor = data.feedId ? 'pointer' : 'default';
    tt.style.display = 'block';
    tt.style.left = movement.endPosition.x + rect.left + 14 + 'px';
    tt.style.top = movement.endPosition.y + rect.top - 42 + 'px';
    tt.querySelector('.tt-title').textContent = data.label;
    const bodyHtml = (data.detail + (data.feedId ? ' — Click to read' : ''))
      .split('\n').map(line => line.replace(/</g, '&lt;')).join('<br>');
    tt.querySelector('.tt-body').innerHTML = bodyHtml;
    const sevC =
      data.kind === 'quake' ? (data.mag >= 6 ? 'var(--red)' : data.mag >= 4.5 ? 'var(--orange)' : 'var(--blue)') :
      data.kind === 'flight' ? 'var(--green)' :
      data.kind === 'military-flight' ? '#ffb703' :
      data.kind === 'satellite' ? '#f2c14e' :
      data.kind === 'weather' ? '#9dd6ff' :
      data.kind === 'vessel' ? VESSEL_HEX :
      data.sevType === 'high' ? 'var(--red)' : data.sevType === 'med' ? 'var(--orange)' : 'var(--blue)';
    const sevT =
      data.kind === 'quake' ? `M${(data.mag || 0).toFixed(1)} EARTHQUAKE` :
      data.kind === 'flight' ? (data.isHelicopter ? 'HELICOPTER' : 'FLIGHT') :
      data.kind === 'military-flight' ? (data.isHelicopter ? 'MILITARY HELICOPTER' : 'MILITARY FLIGHT') :
      data.kind === 'satellite' ? 'SATELLITE' :
      data.kind === 'weather' ? 'WEATHER' :
      data.kind === 'vessel' ? 'VESSEL' :
      data.sevType === 'high' ? 'HIGH SEVERITY' : data.sevType === 'med' ? 'MEDIUM' : 'MONITOR';
    tt.querySelector('.tt-sev').innerHTML = `<span style="color:${sevC};font-family:var(--mono);font-size:9px;text-transform:uppercase">${sevT}</span>`;
  } else {
    viewer.canvas.style.cursor = 'grab';
    tt.style.display = 'none';
  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

// ── INIT ──────────────────────────────────────────────────────────────────────
loadLiveNews(); // Fetch live RSS news; falls back to FEED_DATA if offline
loadRegionalBrief(); // Fetch GDELT geo-tagged global news for background globe markers
loadEarthquakes(); // USGS
loadWeather(); // Open-Meteo, sampled at CONFLICTS locations
loadFlights(); // OpenSky live aircraft
loadMilitaryFlights(); // adsb.lol military-tagged aircraft
loadSatelliteElements(); // CelesTrak + SGP4 propagation
connectAISStream(); // AISStream — persistent connection, not a periodic fetch
buildPredictions();
buildMarkets();
buildKeywords();
buildScenarios();
buildTicker(); // Initial ticker with hardcoded data; replaced once live news loads
setInterval(updateTime, 1000);
updateTime();
setInterval(loadLiveNews, 5 * 60 * 1000); // Refresh every 5 minutes
setInterval(loadRegionalBrief, 10 * 60 * 1000); // Refresh every 10 minutes
setInterval(loadEarthquakes, 5 * 60 * 1000); // New quakes every 5 minutes
setInterval(loadWeather, 15 * 60 * 1000); // Weather doesn't change fast
setInterval(loadFlights, 5 * 60 * 1000); // Stay well under OpenSky's ~400/day anonymous limit
setInterval(loadMilitaryFlights, 5 * 60 * 1000); // adsb.lol has no published anonymous limit, but same cadence keeps it consistent
// Orbital elements barely change — refetch every 6 hours. Positions,
// though, need recalculating often since satellites move fast.
setInterval(loadSatelliteElements, 6 * 60 * 60 * 1000);
setInterval(updateSatellitePositions, 5000);
setInterval(cleanupStaleVessels, 5 * 60 * 1000); // drop ships we haven't heard from in 20 min

setInterval(() => {
  const a = document.getElementById('h-active');
  const t = document.getElementById('h-tensions');
  if (Math.random() < 0.3) a.textContent = parseInt(a.textContent) + (Math.random() < 0.5 ? 1 : -1);
  if (Math.random() < 0.25) t.textContent = parseInt(t.textContent) + (Math.random() < 0.5 ? 1 : -1);
}, 4000);
