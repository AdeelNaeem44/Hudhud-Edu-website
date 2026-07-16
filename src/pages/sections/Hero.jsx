import AppStoreButtons from "../../components/AppStoreButtons.jsx";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();
  const highlights = t("hero.highlights");

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
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </h1>
          <h3 className="hero-subtitle">{t("hero.subtitle")}</h3>
        </div>

        {/* Right column: panel box on top, download section stacked below it */}
        <div className="hero-panel-col">
          <div className="hero-panel">
            <h3 className="hero-panel-title">{t("hero.builtFor")}</h3>
            <ul className="hero-panel-list">
              {highlights.map((item) => (
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
