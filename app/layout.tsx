// ─── Layout Root ─────────────────────────────────────────────
// Configura el HTML base, las fuentes, los meta tags (Open Graph,
// Twitter, SEO) y el Schema.org JSON-LD para el negocio local.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteData } from "@/src/data/nat";

const { seoMetadata, contact } = siteData;
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://agroproductos.com";

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: siteUrl,
    siteName: "Agroproductos y servicios del centro",
    locale: "es_MX",
    type: "website",
    images: seoMetadata.ogImage
      ? [{ url: seoMetadata.ogImage, width: 1200, height: 630 }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.title,
    description: seoMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Agroproductos y servicios del centro",
  description: seoMetadata.description,
  url: siteUrl,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  areaServed: "México",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos Agrícolas",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertilizantes Especializados" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insumos Agrícolas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logística y Distribución" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="geo.region" content="MX-GUA" />
        <meta name="geo.placename" content="León, Guanajuato" />
        <meta name="geo.position" content="21.1236;-101.6803" />
        <meta name="ICBM" content="21.1236, -101.6803" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
