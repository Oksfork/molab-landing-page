import Link from "next/link";
import FaqData from "@/assets/jsonData/faq/FaqData.json";
import JsonLd from "@/components/seo/JsonLd";
import FaqList from "@/components/faq/FaqList";
import "@/assets/css/faq.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const SUPPORT_WHATSAPP =
  "https://wa.me/5491173576766?text=Hola,%20tengo%20una%20consulta%20sobre%20MOLAB";

const FaqPageContent = () => {
  const items = FaqData as FaqItem[];

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

  return (
    <section id="faq" className="faq-hub" aria-label="Preguntas frecuentes sobre Molab.app">
      <JsonLd data={faqSchema} />
      <div className="container">
        <div className="faq-hub-intro text-center">
          <span className="faq-hub-pill">FAQ</span>
          <h1 className="heading text-light">
            Cómo se opera el lab en{" "}
            <span className="text-gradient">MOLAB</span>
          </h1>
          <p>
            Tickets, comisiones, portal, liquidaciones y lo que el sistema no hace.
          </p>
        </div>

        <div className="faq-hub-list">
          <FaqList embedded />
        </div>

        <div className="faq-hub-support">
          <div className="faq-hub-support-icon" aria-hidden="true">
            <i className="fas fa-headset" />
          </div>
          <div className="faq-hub-support-copy">
            <strong>¿No encontraste lo que buscabas?</strong>
            <p>Nuestro equipo está listo para ayudarte.</p>
          </div>
          <Link
            href={SUPPORT_WHATSAPP}
            className="price-v3-btn-glass effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Contactar soporte <i className="fas fa-arrow-right ms-10" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqPageContent;
