import { useState } from "react";
import Reveal from "../../components/Reveal.jsx";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to an email service or a backend endpoint.
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">Contact</span>
        <h2>We're here to help</h2>
        <p className="section-subtitle">
          Questions about the app or your subscription? Reach us directly.
        </p>
      </div>

      <div className="contact-grid">
        <Reveal>
          <div className="contact-info-card">
            <h3>Support</h3>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-email">
              {SUPPORT_EMAIL}
            </a>
            <p>We usually reply within 1–2 business days.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-form-box">
            {sent ? (
              <p className="success-message">
                Thanks — your message has been sent. We'll get back to you soon.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder="Name" required />
                <input id="email" type="email" placeholder="Email" required />
                <input id="subject" type="text" placeholder="Subject" />
                <textarea id="message" rows={5} placeholder="Message" required />

                <button className="contact-submit" type="submit">
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}