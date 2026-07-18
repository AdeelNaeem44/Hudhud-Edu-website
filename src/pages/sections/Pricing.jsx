import Reveal from "../../components/Reveal.jsx";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

// NOTE: Per supervisor-approved content doc, only Weekly (24,000 UZS) and
// Monthly (60,000 UZS) tiers are approved. The old 3-tier Basic/Growth/Pro
// structure and free trial have been removed to match.
const PRICES = [
  { price: "24,000 UZS", period: "/ week" },
  { price: "60,000", period: "/ month", highlighted: true },
];

export default function Pricing() {
  const { t } = useLanguage();
  // Only render the first two plans (Weekly, Monthly) even if the
  // translation file still has a third (Pro) entry.
  const plans = t("pricing.plans").slice(0, 2);

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">{t("pricing.eyebrow")}</span>
        <h2>{t("pricing.title")}</h2>
        <h3 className="section-subtitle">{t("pricing.subtitle")}</h3>
      </div>

      <div className="pricing-cards-container">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 120}>
            <div
              className={`pricing-card ${PRICES[i].highlighted ? "pricing-card--highlighted" : ""}`}
            >
              {PRICES[i].highlighted && <div className="pricing-badge">{t("pricing.mostPopular")}</div>}

              <span className="pricing-tier-label">{plan.name}</span>
              <div className="pricing-amount">
                <span className="pricing-price">{PRICES[i].price}</span>
                <span className="pricing-period">UZS {PRICES[i].period}</span>
              </div>
              <p className="pricing-description">{plan.description}</p>

              <div className="pricing-divider" />

              <ul className="pricing-features">
                {plan.features.map((item) => (
                  <li key={item} className={item.endsWith(":") ? "pricing-features-heading" : ""}>
                    {!item.endsWith(":") && (
                      <span className="pricing-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pricing-bottom">
                <a href="#download" className="pricing-cta">
                  {t("pricing.getStarted")}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="pricing-fineprint">{t("pricing.fineprint")}</p>
    </section>
  );
}