// Real screenshots go in /public/screenshots/ using these exact filenames.
// If a file is missing, a placeholder shows instead so the layout never breaks.
import Reveal from "../../components/Reveal.jsx";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

const SCREENS = [
  { key: "Lessons", file: "/screenshots/lessons.png" },
  { key: "Quiz", file: "/screenshots/quiz.png" },
  { key: "Progress", file: "/screenshots/progress.png" },
  { key: "Achievements", file: "/screenshots/achievements.png" },
];

function PhoneMockup({ label, file, addFileText }) {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup-frame">
        <div className="phone-mockup-notch" />
        <div className="phone-mockup-screen">
          <img
            src={file}
            alt={`${label} screen`}
            className="phone-mockup-image"
            onError={(e) => {
              // Missing screenshot file - show a neutral placeholder
              // instead of a broken image icon.
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="phone-mockup-fallback">
            <span>{label}</span>
            <small>{addFileText}</small>
          </div>
        </div>
      </div>
      <p className="phone-mockup-label">{label}</p>
    </div>
  );
}

export default function Screenshots() {
  const { t } = useLanguage();
  const labels = t("previews.labels");

  return (
    <section className="section screenshots-section" id="previews">
      <div className="section-heading">
        <span className="eyebrow ">{t("previews.eyebrow")}</span>
        <h2>{t("previews.title")}</h2>
      </div>

      <div className="phone-gallery">
        {SCREENS.map((s, i) => (
          <Reveal key={s.key} delay={i * 100}>
            <PhoneMockup
              label={labels[s.key]}
              file={s.file}
              addFileText={t("previews.addFile", { file: s.file })}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
