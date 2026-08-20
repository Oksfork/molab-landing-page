import Link from "next/link";

export type LaunchPlan = {
  id: string;
  badge: string;
  featured?: boolean;
  subtitle: string;
  amount: string;
  period: string;
  features: string[];
  support?: {
    title: string;
    items: string[];
  };
  promo?: {
    label: string;
    text: string;
    href: string;
  };
  ctaLabel: string;
  ctaHref: string;
  note: string;
};

const LaunchPlanCard = ({ plan }: { plan: LaunchPlan }) => {
  return (
    <article className="launch-plan-card is-featured">
      <div className="launch-plan-head">
        <span className="launch-plan-badge">
          <i className="fas fa-star" aria-hidden="true" />
          {plan.badge}
        </span>
      </div>

      <p className="launch-plan-subtitle">{plan.subtitle}</p>

      <p className="launch-plan-amount">
        <strong>{plan.amount}</strong>
        <span>{plan.period}</span>
      </p>

      <ul className="price-v3-feature-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <div className="price-v3-check-box">
              <i className="fas fa-check" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.support ? (
        <div className="launch-plan-support">
          <p className="launch-plan-support-title">
            <i className="fas fa-headset" aria-hidden="true" />
            {plan.support.title}
          </p>
          <ul>
            {plan.support.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <Link
        href={plan.ctaHref}
        className="btn btn-cta launch-plan-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        {plan.ctaLabel}
        <i className="fas fa-arrow-right" />
      </Link>
      <p className="launch-plan-note">{plan.note}</p>

      {plan.promo ? (
        <p className="launch-plan-promo">
          <strong>{plan.promo.label}:</strong>{" "}
          <Link href={plan.promo.href} target="_blank" rel="noopener noreferrer">
            {plan.promo.text}
          </Link>
        </p>
      ) : null}
    </article>
  );
};

export default LaunchPlanCard;
