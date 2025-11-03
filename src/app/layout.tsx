import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/elegant-icons.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css'

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
    images: [{ url: "/assets/img/logo/molab_app_logo.png" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molab.app - Tu laboratorio dental en la nube",
    description: "Gestión integral para laboratorios dentales",
    images: ["/assets/img/logo/molab_app_logo.png"],
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
  return (
    <html lang="es">
      <body className={`${outfit.className}`}>
        <Dependency />
        {children}
      </body>
    </html>
  );
}
