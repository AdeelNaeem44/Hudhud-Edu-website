import { Link } from "react-router-dom";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";

// Replace these with your real profile URLs.
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/hudhudedu",
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
    label: "Facebook",
    href: "https://facebook.com/hudhudedu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About Us" },
  { to: "/#features", label: "Features" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#faq", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col footer-col--brand">
          <img src="/icon2.png" alt="Hudhud Edu" className="footer-logo" />
          <p className="footer-tagline">
            Learn English the smart way, built for Uzbek speakers.
          </p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          {QUICK_LINKS.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Policies</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Email: {SUPPORT_EMAIL}</a>
        </div>
      </div>

      <div className="footer-divider" />

      <p className="footer-copyright">
        © {new Date().getFullYear()} Hudhud Edu. All rights reserved.
      </p>
    </footer>
  );
}