import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";
const CONTACT_QUESTION_INDEX = 12; // "How can I contact support?" is always the last FAQ item.

function FAQItem({ item, isOpen, onToggle, isContactItem }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faq-answer">
        {isContactItem ? (
          <p>
            {item.a.split(SUPPORT_EMAIL)[0]}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        ) : (
          <p>{item.a}</p>
        )}
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const faqs = t("faq.items");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">{t("faq.eyebrow")}</span>
        <h2>{t("faq.title")}</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            isContactItem={i === CONTACT_QUESTION_INDEX}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
