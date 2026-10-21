// Optional Google Analytics 4. Off until a measurement ID is set in
// <meta name="ga-measurement-id">. GA sets cookies, so under UK GDPR/PECR it
// only loads after the visitor chooses Allow, and the choice can be changed
// from the About dialog. Slopp's own cookie-free statistics (analytics.js) are separate.
const CONSENT_KEY = 'slopp.ga.consent';
const ID = /^G-[A-Z0-9]{4,20}$/;

export function measurementId(doc) {
  const value = doc.querySelector('meta[name="ga-measurement-id"]')?.content?.trim() || '';
  return ID.test(value) ? value : null;
}

export function readConsent(storage) {
  try { const value = storage.getItem(CONSENT_KEY); return value === 'granted' || value === 'denied' ? value : null; } catch { return null; }
}

export function writeConsent(storage, value) {
  try { if (value) storage.setItem(CONSENT_KEY, value); else storage.removeItem(CONSENT_KEY); } catch {}
}

export function loadGtag(win, id) {
  if (win.__sloppGtag === id) return false;
  win.__sloppGtag = id;
  win[`ga-disable-${id}`] = false;
  win.dataLayer = win.dataLayer || [];
  win.gtag = function gtag() { win.dataLayer.push(arguments); };
  win.gtag('js', new Date());
  win.gtag('config', id);
  const script = win.document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  win.document.head.append(script);
  return true;
}

function forget(win, id) {
  win[`ga-disable-${id}`] = true;
  const host = win.location.hostname.split('.').slice(-2).join('.');
  for (const cookie of win.document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^_ga/.test(name)) continue;
    for (const domain of ['', `; domain=.${host}`]) win.document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
  }
}

export function startGoogleAnalytics(win = window) {
  try {
    const doc = win.document, id = measurementId(doc);
    if (!id) return 'off';
    let storage;
    try { storage = win.localStorage; } catch { storage = { getItem: () => null, setItem() {}, removeItem() {} }; }
    const banner = doc.getElementById('cookie-consent'), choices = doc.getElementById('cookie-choices');
    const privacySignal = win.navigator.doNotTrack === '1' || win.navigator.globalPrivacyControl === true;
    const ask = () => { if (banner) banner.hidden = false; };
    const choose = value => {
      writeConsent(storage, value);
      if (banner) banner.hidden = true;
      if (value === 'granted') loadGtag(win, id); else forget(win, id);
    };
    doc.getElementById('cookie-allow')?.addEventListener('click', () => choose('granted'));
    doc.getElementById('cookie-decline')?.addEventListener('click', () => choose('denied'));
    if (choices) { choices.hidden = false; choices.addEventListener('click', () => { doc.getElementById('about')?.close?.(); ask(); }); }
    if (privacySignal) return 'declined';
    const consent = readConsent(storage);
    if (consent === 'granted') { loadGtag(win, id); return 'loaded'; }
    if (consent === null) ask();
    return consent || 'asking';
  } catch { return 'off'; }
}

if (typeof window !== 'undefined') startGoogleAnalytics();
