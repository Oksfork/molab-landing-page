import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import JsonLd from "@/components/seo/JsonLd";
import BannerV3 from "@/components/banner/BannerV3";
import ProcessV2 from "@/components/process/ProcessV2";
import FeatureV1 from "@/components/features/FeatureV1";
import ServicesV2Dark from "@/components/services/ServicesV2Dark";
import PriceV3 from "@/components/pricing/PriceV3";
import BannerV4 from "@/components/banner/BannerV4";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Molab.app - Software de Gestión para Laboratorios Dentales",
  description: "Software en la nube para gestión integral de laboratorios dentales. Control de clientes, órdenes, pagos, liquidaciones y trazabilidad completa.",
  keywords: ["laboratorio dental", "software dental", "gestión laboratorio", "software odontología", "software en la nube", "sistema gestión dental"],
  openGraph: {
      title: "Molab.app - Software de Gestión para Laboratorios Dentales",
      description: "Software en la nube para gestión integral de laboratorios dentales. Control de clientes, órdenes, pagos, liquidaciones y trazabilidad completa.",
      url: "https://molab.app",
      siteName: "Molab.app",
      images: [
          {
              url: "https://molab.app/assets/img/logo/molab_app_logo.png",
              width: 1200,
              height: 630,
              alt: "Molab.app - Software de gestión para laboratorios dentales",
          },
      ],
      locale: "es_AR",
      type: "website",
  },
  twitter: {
      card: "summary_large_image",
      title: "Molab.app - Software de Gestión para Laboratorios Dentales",
      description: "Software en la nube para gestión integral de laboratorios dentales",
      images: ["https://molab.app/assets/img/logo/molab_app_logo.png"],
  },
  alternates: {
      canonical: "https://molab.app",
  },
  robots: {
      index: true,
      follow: true,
  },
};

export default function HomePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://molab.app"
        }
    ]
};


  return (
    <PagePatternWrapper>
    <JsonLd data={breadcrumbSchema} />
    <HeaderV10 sectionClass="dark"></HeaderV10>
    <main>
        <BannerV3 hasBg={false}></BannerV3>
        <FeatureV1 />
        <ProcessV2 />
        <ServicesV2Dark></ServicesV2Dark>
        <PriceV3 />
        <BannerV4 />
    </main>
    <FooterV1 logoColor="light" />
    <DarkClass />
</PagePatternWrapper>
  );
}
