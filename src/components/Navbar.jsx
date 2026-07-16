import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext.jsx";
import GetAppModal from "./GetAppModal.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const { user } = useAuth();
  const { t } = useLanguage();

  const LINKS = [
    { href: "/#about", label: t("nav.about") },
    { href: "/#features", label: t("nav.features") },
    { href: "/#previews", label: t("nav.previews") },
    { href: "/#pricing", label: t("nav.pricing") },
    { href: "/#faq", label: t("nav.faq") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/icon4.png" alt="Hudhud Edu" className="brand-mark" />
      </Link>

      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
        {LINKS.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link to="/login" className="nav-login" onClick={() => setOpen(false)}>
          {user ? t("nav.myAccount") : t("nav.login")}
        </Link>
        <LanguageSwitcher onSelect={() => setOpen(false)} />
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            setOpen(false);
            setAppModalOpen(true);
          }}
        >
          {t("nav.getApp")}
        </button>
      </nav>

      <GetAppModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
    </header>
  );
}
