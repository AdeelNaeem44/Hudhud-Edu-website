// Real screenshots go in /public/screenshots/ using these exact filenames.
// If a file is missing, a placeholder shows instead so the layout never breaks.
import Reveal from "../../components/Reveal.jsx";

const SCREENS = [
  { label: "Lessons", file: "/screenshots/lessons.png" },
  { label: "Quiz", file: "/screenshots/quiz.png" },
  { label: "Progress", file: "/screenshots/progress.png" },
  { label: "Achievements", file: "/screenshots/achievements.png" },
];

function PhoneMockup({ label, file }) {
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
            <small>Add {file} to see this screen</small>
          </div>
        </div>
      </div>
      <p className="phone-mockup-label">{label}</p>
    </div>
  );
}

export default function Screenshots() {
  return (
    <section className="section screenshots-section" id="previews">
      <div className="section-heading">
        <span className="eyebrow ">Previews</span>
        <h2>Explore the features and interface of HUDHUD EDU</h2>
      </div>

      <div className="phone-gallery">
        {SCREENS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <PhoneMockup label={s.label} file={s.file} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}