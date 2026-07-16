import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGUAGES, DEFAULT_LANGUAGE } from "./translations.js";

const STORAGE_KEY = "hudhud-edu-lang";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && LANGUAGES.includes(stored)) return stored;

  // Fall back to the browser's language if it's one we support, otherwise
  // default to English.
  const browserLang = (window.navigator.language || "").slice(0, 2);
  if (LANGUAGES.includes(browserLang)) return browserLang;

  return DEFAULT_LANGUAGE;
}

// Looks up a dot-separated key path in the given translation object, e.g.
// get(obj, "nav.about"). Returns undefined if any part of the path is missing.
function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function interpolate(str, vars) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match));
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    if (LANGUAGES.includes(lang)) setLanguageState(lang);
  };

  const value = useMemo(() => {
    const dict = translations[language] || translations[DEFAULT_LANGUAGE];
    const fallbackDict = translations[DEFAULT_LANGUAGE];

    // t("nav.about") -> string, t("pricing.trialNote", { days: 3 }) -> interpolated string
    // t("hero.highlights") -> array, works for any nested value not just strings.
    const t = (key, vars) => {
      const value = get(dict, key) ?? get(fallbackDict, key) ?? key;
      return typeof value === "string" ? interpolate(value, vars) : value;
    };

    return { language, setLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
