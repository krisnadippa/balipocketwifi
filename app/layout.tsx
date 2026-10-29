import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://balipocketwifi.com")
  ),
  title: "Sewa WiFi Pocket Bali & Sewa WiFi Bali #1 — Bali Pocket WiFi Rental",
  description:
    "Sewa WiFi Pocket Bali & Rental WiFi Bali #1 Unlimited 4G/LTE. Layanan sewa pocket WiFi Bali murah, kuota tanpa batas, bebas antre IMEI, & gratis antar hotel / Bandara Ngurah Rai (DPS).",
  keywords: [
    "sewa wifi pocket bali",
    "sewa wifi bali",
    "sewa bali pocket wifi",
    "wifi pocket bali",
    "pocket wifi bali",
    "rental wifi bali",
    "sewa pocket wifi bali",
    "sewa mifi bali",
    "sewa modem bali",
    "harga sewa wifi bali",
    "sewa wifi murah bali",
    "sewa wifi bali airport",
    "bali pocket wifi",
    "bali pocket wifi rental",
    "wifi rental bali",
    "rent wifi bali",
    "bali portable wifi rental",
    "travel wifi bali",
    "portable hotspot bali",
    "unlimited 4g wifi bali",
    "sewa modem wifi bali",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Sewa WiFi Pocket Bali & Sewa WiFi Bali #1 — Bali Pocket WiFi Rental",
    description:
      "Sewa WiFi Pocket Bali #1 Kuota Unlimited 4G/LTE. Bebas antre registrasi IMEI, baterai awet 15 jam. Gratis penjemputan Bandara Ngurah Rai (DPS) & antar ke Hotel / Villa Canggu, Seminyak, Ubud, & Uluwatu.",
    url: "/",
    siteName: "Bali Pocket WiFi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sewa WiFi Pocket Bali - Unlimited 4G/LTE Bali Pocket WiFi Rental",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa WiFi Pocket Bali & Sewa WiFi Bali #1 — Bali Pocket WiFi Rental",
    description:
      "Sewa Pocket WiFi Bali #1 Unlimited 4G/LTE. Gratis penjemputan di Bandara Ngurah Rai (DPS) atau antar ke Hotel / Villa seluruh Bali.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/balipocketlogo.png",
    shortcut: "/images/balipocketlogo.png",
    apple: "/images/balipocketlogo.png",
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
  verification: {
    google: "MqMjhmYpqO2aos3b3oL8h-Y7Rj1EP8GbdjR7x3T5l20",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TravelAgency", "Store"],
      "@id": "https://balipocketwifi.com/#organization",
      "name": "Bali Pocket WiFi - Sewa WiFi Pocket Bali",
      "alternateName": [
        "Sewa WiFi Pocket Bali",
        "Sewa WiFi Bali",
        "Sewa Bali Pocket WiFi",
        "WiFi Pocket Bali",
        "Bali Pocket WiFi Rental",
        "Rental WiFi Bali",
        "Pocket WiFi Bali"
      ],
      "url": "https://balipocketwifi.com",
      "logo": "https://balipocketwifi.com/images/balipocketlogo.png",
      "image": "https://balipocketwifi.com/images/og-image.jpg",
      "description": "Layanan Sewa WiFi Pocket Bali & Rental WiFi Bali #1 Unlimited 4G/LTE. Penjemputan gratis di Bandara Internasional Ngurah Rai Bali (DPS) atau antar langsung ke Hotel & Villa di Canggu, Seminyak, Ubud, Uluwatu, dan Kuta.",
      "telephone": "+6282342431717",
      "email": "wifibalipocket@gmail.com",
      "priceRange": "Rp 60.000 - Rp 1.600.000",
      "currenciesAccepted": "IDR, USD, AUD, EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, QRIS",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jalan Ngurah Rai International Airport",
        "addressLocality": "Badung",
        "addressRegion": "Bali",
        "postalCode": "80361",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.795015,
        "longitude": 115.180442
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "524",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bali" },
        { "@type": "Place", "name": "Ngurah Rai International Airport (DPS)" },
        { "@type": "Place", "name": "Canggu" },
        { "@type": "Place", "name": "Seminyak" },
        { "@type": "Place", "name": "Ubud" },
        { "@type": "Place", "name": "Uluwatu" },
        { "@type": "Place", "name": "Kuta" },
        { "@type": "Place", "name": "Nusa Dua" },
        { "@type": "Place", "name": "Sanur" },
        { "@type": "Place", "name": "Jimbaran" },
        { "@type": "Place", "name": "Denpasar" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://balipocketwifi.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Beranda",
          "item": "https://balipocketwifi.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sewa WiFi Pocket Bali",
          "item": "https://balipocketwifi.com/#plans"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://balipocketwifi.com/#service",
      "name": "Sewa WiFi Pocket Bali Unlimited 4G/LTE",
      "alternateName": "Bali Pocket WiFi Rental",
      "provider": { "@id": "https://balipocketwifi.com/#organization" },
      "serviceType": "Pocket WiFi Rental / Sewa MiFi",
      "areaServed": { "@type": "AdministrativeArea", "name": "Bali, Indonesia" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Flex Plan (Harian / Daily)",
          "price": "60000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan (3 Hari)",
          "price": "235000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Explorer Plan (7 Hari - Terlaris)",
          "price": "455000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Nomad Plan (30 Hari)",
          "price": "1600000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://balipocketwifi.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bagaimana cara sewa wifi pocket di Bali dan ambil di Bandara Ngurah Rai (DPS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pemesanan dilakukan online, kemudian tim concierge Bali Pocket WiFi menunggu Anda di gate kedatangan internasional maupun domestik Bandara Ngurah Rai (DPS) dengan membawa papan nama tepat setelah keluar pemeriksaan bea cukai / bagasi."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa harga sewa wifi bali per hari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Harga sewa WiFi Pocket Bali mulai dari Rp 60.000/hari untuk paket Flex harian, Rp 235.000 untuk 3 hari (Starter), Rp 455.000 untuk 7 hari (Explorer), dan Rp 1.600.000 untuk 30 hari (Nomad), seluruhnya sudah termasuk kuota 4G/LTE unlimited tanpa batas kuota."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah kuota sewa pocket wifi bali benar-benar unlimited tanpa FUP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya! Kami menyediakan kuota internet 4G/LTE unlimited berkecepatan tinggi tanpa throttling di seluruh destinasi populer Bali seperti Canggu, Seminyak, Ubud, Uluwatu, Kuta, Sanur, dan Nusa Penida."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa banyak perangkat yang bisa terhubung ke 1 modem pocket wifi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hingga 5 sampai 8 perangkat (smartphone, iPhone, Android, laptop MacBook/Windows, dan tablet) dapat terhubung secara bersamaan ke satu modem Bali Pocket WiFi dengan koneksi stabil."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah bisa diantar langsung ke hotel atau villa di Canggu, Seminyak, atau Ubud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bisa! Kami melayani pengantaran dan penjemputan langsung ke hotel, resort, villa, maupun Airbnb di seluruh area Bali termasuk Canggu, Seminyak, Ubud, Kuta, Jimbaran, Sanur, dan Uluwatu."
          }
        },
        {
          "@type": "Question",
          "name": "Kenapa lebih menguntungkan sewa wifi pocket bali dibanding beli SIM card lokal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sewa WiFi pocket Bali jauh lebih hemat karena 1 modem dapat digunakan bersama oleh 5-8 orang sekaligus, bebas antre registrasi IMEI dan pajak bea cukai di bandara, serta baterai smartphone Anda tetap awet karena tidak menguras daya untuk hotspot tethering."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="MqMjhmYpqO2aos3b3oL8h-Y7Rj1EP8GbdjR7x3T5l20" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#A3E635] selection:text-black">
        {children}
      </body>
    </html>
  );
}
