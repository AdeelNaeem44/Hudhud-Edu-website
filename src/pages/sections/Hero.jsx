import AppStoreButtons from "../../components/AppStoreButtons.jsx";

const HIGHLIGHTS = [
  "Learners building everyday English vocabulary",
  "Students preparing for school, work, or travel",
  "Anyone who wants audio pronunciation they can trust",
  "Uzbek speakers who want lessons made for them",
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <span className="hero-shape hero-shape--hex-1" aria-hidden="true">
        <svg viewBox="0 0 100 88" fill="none"><path d="M25 2 75 2 100 44 75 86 25 86 0 44Z" stroke="currentColor" strokeWidth="3"/></svg>
      </span>
      <span className="hero-shape hero-shape--hex-2" aria-hidden="true">
        <svg viewBox="0 0 100 88" fill="none"><path d="M25 2 75 2 100 44 75 86 25 86 0 44Z" stroke="currentColor" strokeWidth="3"/></svg>
      </span>
      <span className="hero-diamonds hero-diamonds--tr" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </span>
      <span className="hero-diamonds hero-diamonds--bl" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </span>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Hudhud Edu</span>
          <h1>
            Learn English
            <br />
            the Smart Way
          </h1>
          <h3 className="hero-subtitle">
            HUDHUD EDU is an English learning platform designed especially for
            Uzbek learners. Build your vocabulary with interactive lessons,
            audio pronunciation, quizzes, and progress tracking that make
            learning simple, effective, and enjoyable.
          </h3>
        </div>

        {/* Right column: panel box on top, download section stacked below it */}
        <div className="hero-panel-col">
          <div className="hero-panel">
            <h3 className="hero-panel-title">Built for:</h3>
            <ul className="hero-panel-list">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-download-block">
            <div id="download">
              <AppStoreButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}