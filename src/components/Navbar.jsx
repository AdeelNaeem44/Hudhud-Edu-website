import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext.jsx";
import GetAppModal from "./GetAppModal.jsx";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#previews", label: "Previews" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const { user } = useAuth();

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
          {user ? "My Account" : "Log in"}
        </Link>
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            setOpen(false);
            setAppModalOpen(true);
          }}
        >
          Get the App
        </button>
      </nav>

      <GetAppModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
    </header>
  );
}