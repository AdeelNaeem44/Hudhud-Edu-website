import { useState } from "react";
import Reveal from "../../components/Reveal.jsx";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to an email service or a backend endpoint.
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">{t("contact.eyebrow")}</span>
        <h2>{t("contact.title")}</h2>
        <p className="section-subtitle">{t("contact.subtitle")}</p>
      </div>

      <div className="contact-grid">
        <Reveal>
          <div className="contact-info-card">
            <h3>{t("contact.supportTitle")}</h3>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-email">
              {SUPPORT_EMAIL}
            </a>
            <p>{t("contact.replyTime")}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-form-box">
            {sent ? (
              <p className="success-message">{t("contact.successMessage")}</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder={t("contact.namePlaceholder")} required />
                <input id="email" type="email" placeholder={t("contact.emailPlaceholder")} required />
                <input id="subject" type="text" placeholder={t("contact.subjectPlaceholder")} />
                <textarea id="message" rows={5} placeholder={t("contact.messagePlaceholder")} required />

                <button className="contact-submit" type="submit">
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
