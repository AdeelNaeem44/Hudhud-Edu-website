import Reveal from "../../components/Reveal.jsx";

// NOTE: This 3-tier structure (Basic / Growth / Pro) and the free trial
// are NOT part of the supervisor-approved content doc, which only
// specifies Weekly (20,000 UZS) and Monthly (60,000 UZS). Confirm this
// structure and these prices before shipping - all UZS amounts below are
// placeholders for review, not approved figures.
const FREE_TRIAL_DAYS = 3;

const PLANS = [
  {
    name: "Basic",
    price: "30,000",
    period: "/ mo",
    description: "Perfect for beginners just getting started.",
    features: [
      "Basic vocabulary library",
      "Limited quizzes (5/day)",
      "Progress tracking",
    ],
  },
  {
    name: "Growth",
    price: "60,000",
    period: "/ mo",
    description: "Ideal for learners building a daily habit.",
    features: [
      "Full vocabulary library",
      "Unlimited interactive quizzes",
      "Progress tracking & rankings",
      "All gamification features",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "100,000",
    period: "/ mo",
    description: "Built for learners who want it all.",
    features: [
      "Everything in Growth, plus:",
      "Advanced analytics & insights",
      "Priority support",
      "Exclusive premium content",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">Pricing</span>
        <h2>Simple, flexible plans</h2>
        <h3 className="section-subtitle">Choose the plan that fits your learning goals.</h3>
      </div>

      <div className="pricing-cards-container">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 120}>
            <div
              className={`pricing-card ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
            >
              {plan.highlighted && <div className="pricing-badge">Most Popular</div>}

              <span className="pricing-tier-label">{plan.name}</span>
              <div className="pricing-amount">
                <span className="pricing-price">{plan.price}</span>
                <span className="pricing-period">UZS {plan.period}</span>
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
                <p className="pricing-trial-note">{FREE_TRIAL_DAYS}-day free trial included</p>
                <a href="#download" className="pricing-cta">
                  Get started
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="pricing-fineprint">
        Subscriptions are managed through the App Store or Google Play.
      </p>
    </section>
  );
}