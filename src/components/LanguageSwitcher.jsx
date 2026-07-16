import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { translations, LANGUAGES } from "../i18n/translations.js";

export default function LanguageSwitcher({ onSelect }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handlePick = (lang) => {
    setLanguage(lang);
    setOpen(false);
    onSelect?.();
  };

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className="lang-switcher-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
        </svg>
        <span>{translations[language].lang.short}</span>
      </button>

      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {LANGUAGES.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === language}
                className={`lang-switcher-option ${lang === language ? "lang-switcher-option--active" : ""}`}
                onClick={() => handlePick(lang)}
              >
                {translations[lang].lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
