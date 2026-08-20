import LaunchOfferData from "@/assets/jsonData/price/LaunchOfferData.json";
import LaunchPlanCard, { type LaunchPlan } from "./LaunchPlanCard";
import "@/assets/css/launch-cta.css";

type LaunchFloater = {
  icon: string;
  text: string;
};

const BannerV4 = () => {
  const floaters = LaunchOfferData.floaters as LaunchFloater[];
  const plan = LaunchOfferData.plan as LaunchPlan;

  return (
    <section
      className="banner-style-four-area launch-cta-area text-light"
      aria-label="Planes y precios de Molab.app"
    >
      <div className="container">
        <div className="site-heading secondary text-center mb-4">
          <h2 className="heading text-light">
            Un plan. Precio claro.{" "}
            <span className="text-gradient">Alguien del otro lado</span>
          </h2>
          <p className="mt-3" style={{ color: "var(--bodydark)" }}>
            Plan único. Promo anual: USD 490 (2 meses de ahorro).
          </p>
        </div>

        <LaunchPlanCard plan={plan} />

        <ul className="launch-cta-highlights">
          {floaters.map((item) => (
            <li key={item.text}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BannerV4;
