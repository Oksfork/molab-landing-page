import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/elegant-icons.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css'
import JsonLd from '@/components/seo/JsonLd';

import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import Dependency from '@/components/utilities/Dependency';

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Molab.app || Tu control en la nube",
  description: "Gestión integral para laboratorios dentales. Controla clientes, órdenes, pagos y liquidaciones en una sola plataforma en la nube. Moderno, rápido y accesible desde cualquier dispositivo.",
  keywords: ["laboratorio dental", "software dental", "gestión laboratorio", "software odontología", "software en la nube"],
  authors: [{ name: "Molab.app" }, {name: "OffnenSystem"}, {name: "Artec Invent"}],
  openGraph: {
    title: "Molab.app - Tu laboratorio dental en la nube",
    description: "Plataforma de gestión integral para laboratorios dentales",
    url: "https://molab.app",
    siteName: "Molab.app",
    images: [
      { 
        url: "https://molab.app/assets/img/logo/molab_app_logo.png",
        width: 1200,
        height: 630,
        alt: "Molab.app - Software de gestión para laboratorios dentales",
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molab.app - Tu laboratorio dental en la nube",
    description: "Gestión integral para laboratorios dentales",
    images: ["https://molab.app/assets/img/logo/molab_app_logo.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://molab.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Molab.app",
    "url": "https://molab.app",
    "logo": "https://molab.app/assets/img/logo/molab_app_logo.png",
    "description": "Software en la nube para gestión integral de laboratorios dentales",
    "sameAs": [
      // Agrega aquí tus redes sociales si las tienes
      // "https://www.facebook.com/molabapp",
      // "https://www.linkedin.com/company/molabapp",
      // "https://twitter.com/molabapp"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Atención al cliente",
      "email": "contacto@contacto.com",
      "availableLanguage": "es"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR"
    }
  };

  // Schema SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Molab.app",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Prueba sin costo disponible"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "description": "Software en la nube para gestión integral de laboratorios dentales. Control de clientes, órdenes, pagos, liquidaciones y trazabilidad completa.",
    "screenshot": "https://molab.app/assets/img/logo/molab_app_logo.png",
    "softwareVersion": "1.0",
    "releaseNotes": "Versión inicial del software",
    "provider": {
      "@type": "Organization",
      "name": "Molab.app"
    }
  };

  // Schema WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Molab.app",
    "url": "https://molab.app",
    "description": "Software en la nube para gestión integral de laboratorios dentales",
    "inLanguage": "es-AR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://molab.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="es">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${outfit.className}`}>
        <Dependency />
        {children}
      </body>
    </html>
  );
}
