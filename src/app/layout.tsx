import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickContact from "@/components/QuickContact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ویژن | پارتیشن، هندریل، کابین دوش، درب و پنجره", template: "%s | ویژن" },
  description:
    "شوروم آنلاین ویژن؛ طراحی و اجرای پارتیشن شیشه‌ای، هندریل، کابین دوش، درب و پنجره آلومینیومی برای منازل و پروژه‌های معماری.",
  openGraph: { type: "website", locale: "fa_IR", siteName: "ویژن" },
  alternates: { canonical: "/" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ویژن (Vision)",
  url: SITE.url,
  telephone: SITE.phone,
  address: { "@type": "PostalAddress", streetAddress: SITE.address, addressCountry: "IR" },
  sameAs: [`https://instagram.com/${SITE.instagram}`],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
