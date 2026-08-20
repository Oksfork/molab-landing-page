import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import JsonLd from "@/components/seo/JsonLd";
import FaqPageContent from "@/components/faq/FaqPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Molab.app",
  description:
    "Resolvé dudas sobre MOLAB: gestión de laboratorio dental, migración, precios, seguridad y alcance del sistema.",
  alternates: {
    canonical: "https://molab.app/faq",
  },
};

export default function FaqPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://molab.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Preguntas frecuentes",
        item: "https://molab.app/faq",
      },
    ],
  };

  return (
    <PagePatternWrapper>
      <JsonLd data={breadcrumbSchema} />
      <HeaderV10 sectionClass="dark" />
      <main>
        <FaqPageContent />
      </main>
      <FooterV1 logoColor="light" />
      <DarkClass />
    </PagePatternWrapper>
  );
}
