import { useLanguage } from "../../i18n/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();
  const includes = t("about.includes");

  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">{t("about.eyebrow")}</span>
        <h2>{t("about.title")}</h2>
        <h3 className="section-subtitle">{t("about.subtitle")}</h3>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>{t("about.everyLesson")}</h3>
          <ul className="about-checklist">
            {includes.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-card">
          <h3>{t("about.missionTitle")}</h3>
          <h4>{t("about.missionText")}</h4>
        </div>
      </div>
    </section>
  );
}
