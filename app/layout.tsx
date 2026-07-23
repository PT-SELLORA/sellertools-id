import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://sellertools.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SellerTools.id — AI Reply Otomatis untuk Shopee Seller Center",
    template: "%s | SellerTools.id",
  },
  description:
    "Ekstensi Chrome AI untuk seller Shopee — balas chat pembeli otomatis pakai AI. Knowledge base toko, multi-toko, autonomy slider. Pasang gratis.",
  keywords: [
    "shopee seller tools",
    "ai reply shopee",
    "balas chat shopee otomatis",
    "shopee seller center extension",
    "tools seller shopee indonesia",
    "ai chat shopee",
    "ekstensi chrome shopee",
    "shopee ai reply",
    "sellertools",
  ],
  authors: [{ name: "PT Sellora Digital", url: BASE_URL }],
  creator: "PT Sellora Digital",
  publisher: "PT Sellora Digital",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "SellerTools.id",
    title: "SellerTools.id — AI Reply Otomatis untuk Shopee Seller Center",
    description:
      "Ekstensi Chrome AI untuk seller Shopee — balas chat pembeli otomatis pakai AI. Knowledge base toko, multi-toko, autonomy slider. Pasang gratis.",
    images: [
      {
        url: "/api/og?title=SellerTools.id&subtitle=AI+Reply+Otomatis+untuk+Shopee+Seller+Center&chip=SellerTools&category=homepage",
        width: 1200,
        height: 630,
        alt: "SellerTools.id — AI Reply untuk Shopee Seller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SellerTools.id — AI Reply Otomatis untuk Shopee Seller Center",
    description:
      "Ekstensi Chrome AI yang membantu seller Shopee membalas chat pembeli lebih cepat dan akurat.",
    images: [
      "/api/og?title=SellerTools.id&subtitle=AI+Reply+Otomatis+untuk+Shopee+Seller+Center&chip=SellerTools",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "id-ID": BASE_URL },
  },
  icons: {
    icon: "/icons/icon-32.png",
    apple: "/icons/icon-128.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "PT Sellora Digital",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/icons/icon-128.png`,
          width: 128,
          height: 128,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: "Indonesian",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "SellerTools.id",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "id-ID",
      },
      {
        "@type": "SoftwareApplication",
        name: "SellerTools — Shopee AI Reply",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Chrome, Chromium",
        url: BASE_URL,
        description:
          "Ekstensi Chrome yang membantu seller Shopee membalas chat pembeli secara otomatis menggunakan AI berbasis knowledge base toko.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "IDR",
          description: "Gratis dicoba",
        },
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "id-ID",
        featureList: [
          "AI reply berbasis knowledge base",
          "Dukungan multi-toko",
          "Autonomy slider 1-5",
          "Jadwal shift malam",
          "Audit log lengkap",
        ],
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
