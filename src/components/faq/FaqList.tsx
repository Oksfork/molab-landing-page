import Link from "next/link";
import FaqData from "@/assets/jsonData/faq/FaqData.json";
import JsonLd from "@/components/seo/JsonLd";
import "@/assets/css/faq.css";

type FaqItem = {
  id: string;
  home?: boolean;
  question: string;
  answer: string;
};

type FaqListProps = {
  homeOnly?: boolean;
  showMoreLink?: boolean;
  embedded?: boolean;
};

const FaqList = ({ homeOnly = false, showMoreLink = false, embedded = false }: FaqListProps) => {
  const items = (FaqData as FaqItem[]).filter((item) => (homeOnly ? item.home : true));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const panel = (
    <>
      <div className="faq-panel">
        {items.map((item, index) => {
          const splitAt = item.answer.indexOf(". ");
          const lead = splitAt === -1 ? item.answer : item.answer.slice(0, splitAt + 1);
          const restText = splitAt === -1 ? "" : item.answer.slice(splitAt + 2);
          const number = String(index + 1).padStart(2, "0");

          return (
            <details
              key={item.id}
              className="faq-item"
              open={index === 0}
            >
              <summary>
                <span className="faq-item-index">{number}</span>
                <span className="faq-item-question">{item.question}</span>
              </summary>
              <div className="faq-item-body">
                <p className="faq-item-lead">{lead}</p>
                {restText ? <p>{restText}</p> : null}
              </div>
            </details>
          );
        })}
      </div>

      {showMoreLink ? (
        <div className="faq-more">
          <Link href="/faq" className="price-v3-btn-glass effect">
            <span>
              Resolvé el resto de tus dudas{" "}
              <i className="fas fa-arrow-right ms-10" />
            </span>
          </Link>
        </div>
      ) : null}
    </>
  );

  if (embedded) {
    return panel;
  }

  return (
    <section id="faq" className="faq-section" aria-label="Preguntas frecuentes sobre Molab.app">
      <JsonLd data={faqSchema} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading secondary text-center mb-50">
              <h2 className="heading text-light">
                Antes de{" "}
                <span className="text-gradient">decidir</span>
              </h2>
              <p className="mt-3" style={{ color: "var(--bodydark)" }}>
                {homeOnly
                  ? "Alcance, precio y cambio de sistema."
                  : "Cómo se opera el lab en MOLAB."}
              </p>
            </div>
            {panel}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
