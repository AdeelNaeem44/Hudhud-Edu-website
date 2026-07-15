import { useEffect } from "react";
import AppStoreButtons from "./AppStoreButtons.jsx";

export default function GetAppModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="app-modal-backdrop" onClick={onClose}>
      <div
        className="app-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="app-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <span className="app-modal-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
        </span>

        <h3 id="app-modal-title">Get the Hudhud Edu App</h3>
        <p className="app-modal-subtitle">
          Download the app on your phone and start learning English vocabulary today.
        </p>

        <div className="app-modal-badges">
          <AppStoreButtons />
        </div>
      </div>
    </div>
  );
}