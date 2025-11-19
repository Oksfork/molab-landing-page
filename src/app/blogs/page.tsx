import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import JsonLd from "@/components/seo/JsonLd";
import BlogList from "@/components/blog/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Molab.app | Recursos para Laboratorios Dentales",
  description: "Artículos, guías y recursos sobre gestión de laboratorios dentales, tecnología y mejores prácticas para optimizar tu negocio.",
  keywords: ["blog laboratorio dental", "gestión dental", "recursos odontología", "tips laboratorio dental", "artículos dentales"],
  openGraph: {
      title: "Blog - Molab.app | Recursos para Laboratorios Dentales",
      description: "Artículos, guías y recursos sobre gestión de laboratorios dentales, tecnología y mejores prácticas.",
      url: "https://molab.app/blogs",
      siteName: "Molab.app",
      images: [
          {
              url: "https://molab.app/assets/img/logo/molab_app_logo.png",
              width: 1200,
              height: 630,
              alt: "Blog Molab.app - Recursos para laboratorios dentales",
          },
      ],
      locale: "es_AR",
      type: "website",
  },
  alternates: {
      canonical: "https://molab.app/blogs",
  },
  robots: {
      index: true,
      follow: true,
  },
};

export default function BlogsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://molab.app"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://molab.app/blogs"
        }
    ]
  };

  return (
    <PagePatternWrapper>
      <JsonLd data={breadcrumbSchema} />
      <HeaderV10 sectionClass="dark"></HeaderV10>
      <main>
        <BlogList />
      </main>
      <FooterV1 logoColor="light" />
      <DarkClass />
    </PagePatternWrapper>
  );
}

