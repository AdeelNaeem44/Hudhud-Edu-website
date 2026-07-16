import { useLanguage } from "../i18n/LanguageContext.jsx";

const SUPPORT_EMAIL = "support.hudhudedu@gmail.com";

export default function Terms() {
  const { t } = useLanguage();
  const sections = t("terms.sections");

  return (
    <section className="static-page">
      <h1>{t("terms.title")}</h1>

      {sections.map((s) => (
        <div key={s.heading}>
          <h2>{s.heading}</h2>
          {s.intro && <p>{s.intro}</p>}
          {s.list && (
            <ul className="static-list">
              {s.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {s.body && <p>{s.body}</p>}
        </div>
      ))}

      <h2>{t("terms.contactHeading")}</h2>
      <p>
        {t("terms.contactText")}{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </section>
  );
}
