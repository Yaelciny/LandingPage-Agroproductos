// ─── Layout Root ─────────────────────────────────────────────
// Configura el HTML base, las fuentes, los meta tags (Open Graph,
// Twitter, SEO) y el Schema.org JSON-LD para el negocio local.

import type { Metadata, Viewport } from "next";
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

  // ── Iconos multi-dispositivo ───────────────────────────────
  icons: {
    // Navegadores de escritorio (Chrome, Firefox, Edge moderno)
    icon: [
      { url: "/favicon-16x16.png",           sizes: "16x16",   type: "image/png" },
      { url: "/favicon-32x32.png",           sizes: "32x32",   type: "image/png" },
      { url: "/android-chrome-96x96.png",    sizes: "96x96",   type: "image/png" },
      { url: "/android-chrome-192x192.png",  sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png",  sizes: "512x512", type: "image/png" },
    ],
    // iOS / iPadOS — Safari "Agregar a inicio"
    apple: [
      { url: "/apple-touch-icon.png",        sizes: "180x180", type: "image/png" },
      { url: "/android-chrome-144x144.png",  sizes: "144x144", type: "image/png" },
    ],
    // Safari pinned tab (monocromo)
    other: [
      { rel: "mask-icon",          url: "/safari-pinned-tab.svg", color: "#22551c" },
      // Windows / Edge tiles
      { rel: "msapplication-TileImage",  url: "/mstile-144x144.png" },
    ],
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp, Telegram…) ──
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: siteUrl,
    siteName: "Agroproductos y servicios del centro",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Agroproductos y servicios del centro — Fertilizantes e Insumos Agrícolas en León, Guanajuato",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [`${siteUrl}/og-image.jpg`],
  },

  // ── PWA ──────────────────────────────────────────────────
  manifest: "/manifest.json",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ── Indexación ────────────────────────────────────────────
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

// ─── Viewport (themeColor, colorScheme, viewport meta) ────────
// Next.js App Router requiere que themeColor vaya aquí, no en metadata.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22551c" },
    { media: "(prefers-color-scheme: dark)",  color: "#162e16" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="geo.region" content="MX-GUA" />
        <meta name="geo.placename" content="León, Guanajuato" />
        <meta name="geo.position" content="21.1236;-101.6803" />
        <meta name="ICBM" content="21.1236, -101.6803" />
        {/* Windows / Edge tiles */}
        <meta name="msapplication-TileColor" content="#22551c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Safari / iOS */}
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
