import { expect, test } from "bun:test";
import { loadGtag, measurementId, readConsent, startGoogleAnalytics } from "../public/ga.js";

const element = () => { const listeners = {}; return { hidden: true, listeners, addEventListener: (t, f) => { listeners[t] = f; }, click() { listeners.click?.(); } }; };
const fakeWindow = ({ id = "", consent = null, navigator = {} } = {}) => {
  const values = new Map(consent ? [["slopp.ga.consent", consent]] : []);
  const elements = { "cookie-consent": element(), "cookie-allow": element(), "cookie-decline": element(), "cookie-choices": element() };
  const scripts = [];
  const document = {
    cookie: "",
    querySelector: (s) => (s === 'meta[name="ga-measurement-id"]' ? { content: id } : null),
    getElementById: (name) => elements[name] ?? null,
    createElement: () => ({}),
    head: { append: (node) => scripts.push(node) },
  };
  return { win: { document, navigator, location: { hostname: "sloppworld.com" }, localStorage: { getItem: (k) => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: (k) => values.delete(k) } }, elements, scripts, values };
};

test("Google Analytics stays off until a valid measurement ID is configured", () => {
  const { win, scripts, elements } = fakeWindow();
  expect(startGoogleAnalytics(win)).toBe("off");
  expect(scripts).toHaveLength(0);
  expect(elements["cookie-consent"].hidden).toBe(true);
  expect(measurementId(fakeWindow({ id: "UA-123" }).win.document)).toBeNull();
  expect(measurementId(fakeWindow({ id: "G-ABC123XYZ" }).win.document)).toBe("G-ABC123XYZ");
});

test("with an ID it asks first and loads gtag only after Allow", () => {
  const { win, scripts, elements, values } = fakeWindow({ id: "G-ABC123XYZ" });
  expect(startGoogleAnalytics(win)).toBe("asking");
  expect(elements["cookie-consent"].hidden).toBe(false);
  expect(scripts).toHaveLength(0);
  elements["cookie-allow"].click();
  expect(values.get("slopp.ga.consent")).toBe("granted");
  expect(scripts[0].src).toBe("https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ");
  expect(win.dataLayer.length).toBe(2);
  expect(loadGtag(win, "G-ABC123XYZ")).toBe(false);
});

test("declining, a remembered refusal or a privacy signal never loads gtag", () => {
  const asked = fakeWindow({ id: "G-ABC123XYZ" });
  startGoogleAnalytics(asked.win);
  asked.elements["cookie-decline"].click();
  expect(readConsent(asked.win.localStorage)).toBe("denied");
  expect(asked.scripts).toHaveLength(0);
  const refused = fakeWindow({ id: "G-ABC123XYZ", consent: "denied" });
  expect(startGoogleAnalytics(refused.win)).toBe("denied");
  expect(refused.elements["cookie-consent"].hidden).toBe(true);
  const gpc = fakeWindow({ id: "G-ABC123XYZ", consent: "granted", navigator: { globalPrivacyControl: true } });
  expect(startGoogleAnalytics(gpc.win)).toBe("declined");
  expect(gpc.scripts).toHaveLength(0);
});

test("a remembered Allow loads at once and Cookie choices reopens the question", () => {
  const { win, scripts, elements } = fakeWindow({ id: "G-ABC123XYZ", consent: "granted" });
  expect(startGoogleAnalytics(win)).toBe("loaded");
  expect(scripts).toHaveLength(1);
  expect(elements["cookie-choices"].hidden).toBe(false);
  elements["cookie-choices"].click();
  expect(elements["cookie-consent"].hidden).toBe(false);
  elements["cookie-decline"].click();
  expect(win["ga-disable-G-ABC123XYZ"]).toBe(true);
});
