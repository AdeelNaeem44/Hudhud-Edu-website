import Reveal from "../../components/Reveal.jsx";
import { useLanguage } from "../../i18n/LanguageContext.jsx";

// NOTE: This 3-tier structure (Basic / Growth / Pro) and the free trial
// are NOT part of the supervisor-approved content doc, which only
// specifies Weekly (20,000 UZS) and Monthly (60,000 UZS). Confirm this
// structure and these prices before shipping - all UZS amounts below are
// placeholders for review, not approved figures.
const FREE_TRIAL_DAYS = 3;

const PRICES = [
  { price: "30,000", period: "/ mo" },
  { price: "60,000", period: "/ mo", highlighted: true },
  { price: "100,000", period: "/ mo" },
];

export default function Pricing() {
  const { t } = useLanguage();
  const plans = t("pricing.plans");

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
                <p className="pricing-trial-note">{t("pricing.trialNote", { days: FREE_TRIAL_DAYS })}</p>
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
