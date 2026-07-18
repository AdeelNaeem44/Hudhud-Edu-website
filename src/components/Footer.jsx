import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";

// Replace these with your real profile URLs. Icons with no href are
// shown as icon-only (not clickable) until a real link is added.
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "", // TODO: add Instagram link
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/hudhudedu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "", // TODO: add YouTube link
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33Z" />
        <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { to: "/", key: "Home" },
  { to: "/#about", key: "About Us" },
  { to: "/#features", key: "Features" },
  { to: "/#pricing", key: "Pricing" },
  { to: "/#faq", key: "FAQs" },
];

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const quickLinks = t("footer.quickLinks");

  // Same fix as the navbar's "Get the App" button: clicking a Link to a
  // hash/path you're already on doesn't reliably re-trigger navigation
  // or scrolling. Handle it directly instead.
  const handleQuickLink = (e, to) => {
    e.preventDefault();
    const [path, hash] = to.split("#");
    const targetPath = path || "/";

    if (location.pathname === targetPath) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col footer-col--brand">
          <img src="/icon3.png" alt="Hudhud Edu" className="footer-logo" />
          <p className="footer-tagline">{t("footer.tagline")}</p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((s) =>
              s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ) : (
                <a
                  key={s.label}
                  aria-label={s.label}
                  aria-disabled="true"
                  style={{ cursor: "default" }}
                >
                  {s.icon}
                </a>
              )
            )}
          </div>
        </div>

        <div className="footer-col">
          <h4>{t("footer.quickLinksTitle")}</h4>
          {QUICK_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.to}
              onClick={(e) => handleQuickLink(e, link.to)}
            >
              {quickLinks[link.key]}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>{t("footer.policiesTitle")}</h4>
          <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
          <Link to="/terms">{t("footer.termsAndConditions")}</Link>
        </div>

        <div className="footer-col">
          <h4>{t("footer.contactTitle")}</h4>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{t("footer.emailLabel")}: {SUPPORT_EMAIL}</a>
        </div>
      </div>

      <div className="footer-divider" />

      <p className="footer-copyright">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
    </footer>
  );
}