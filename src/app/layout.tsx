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
  title: "Molab.app || Tu contol en la nube"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Dependency />
        {children}
      </body>
    </html>
  );
}
