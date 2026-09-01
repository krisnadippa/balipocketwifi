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
  title: "Bali Pocket WiFi — #1 WiFi Rental Bali & Sewa WiFi Pocket Bali",
  description:
    "Rental Wifi Pocket Bali #1 dengan Kuota Unlimited 4G/LTE. Sewa Pocket WiFi Bali murah & praktis dengan gratis pengantaran Bandara Ngurah Rai (DPS), Canggu, Seminyak, & Ubud.",
  keywords: [
    "wifi rental bali",
    "wifi pocket bali",
    "sewa wifi bali pocket",
    "bali pocket wifi",
    "sewa wifi bali",
    "pocket wifi bali",
    "rent wifi bali",
    "bali portable wifi rental",
    "bali airport wifi rental",
    "sewa pocket wifi bali murah",
    "rental wifi bali murah",
    "travel wifi bali",
    "portable hotspot bali",
    "unlimited 4g wifi bali",
    "sewa modem bali",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "id-ID": "/",
    },
  },
  openGraph: {
    title: "Bali Pocket WiFi — #1 WiFi Rental Bali & Sewa WiFi Pocket Bali",
    description:
      "Sewa Pocket WiFi Bali #1 Unlimited 4G/LTE. Penjemputan di Bandara Ngurah Rai (DPS) atau antar ke Hotel / Villa Canggu, Ubud, Seminyak, & Uluwatu.",
    url: "/",
    siteName: "Bali Pocket WiFi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Pocket WiFi - Unlimited 4G/LTE WiFi Rental Bali",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Pocket WiFi — #1 WiFi Rental Bali & Sewa WiFi Pocket Bali",
    description:
      "Sewa Pocket WiFi Bali #1 Unlimited 4G/LTE. Penjemputan di Bandara Ngurah Rai (DPS) atau antar ke Hotel / Villa.",
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
      "name": "Bali Pocket WiFi",
      "alternateName": ["WiFi Rental Bali", "Sewa WiFi Bali Pocket", "Bali WiFi Pocket Rental"],
      "url": "https://balipocketwifi.com",
      "logo": "https://balipocketwifi.com/images/balipocketlogo.png",
      "image": "https://balipocketwifi.com/images/og-image.jpg",
      "description": "#1 Unlimited 4G/LTE Pocket WiFi Rental in Bali. Instant pickup at Ngurah Rai Airport (DPS) or free hotel delivery across Canggu, Seminyak, Ubud, Uluwatu, & Kuta.",
      "telephone": "+6282342431717",
      "email": "wifibalipocket@gmail.com",
      "priceRange": "Rp 60.000 - Rp 1.600.000",
      "currenciesAccepted": "IDR, USD, AUD, EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
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
        { "@type": "Place", "name": "Nusa Dua" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://balipocketwifi.com/#service",
      "name": "Unlimited Pocket WiFi Rental Bali",
      "provider": { "@id": "https://balipocketwifi.com/#organization" },
      "serviceType": "Pocket WiFi Rental",
      "areaServed": { "@type": "AdministrativeArea", "name": "Bali, Indonesia" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Flex Plan (Daily)",
          "price": "60000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan (3 Days)",
          "price": "235000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Explorer Plan (7 Days)",
          "price": "455000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": "https://balipocketwifi.com/#plans"
        },
        {
          "@type": "Offer",
          "name": "Nomad Plan (30 Days)",
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
          "name": "How do I pick up the WiFi device at Bali Airport (DPS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our concierge team meets you directly inside Ngurah Rai Bali Airport (DPS) arrivals hall with a personalized name sign right after customs."
          }
        },
        {
          "@type": "Question",
          "name": "Is the WiFi data truly unlimited across Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Enjoy high-speed 4G/LTE data with zero speed throttling across Canggu, Seminyak, Ubud, Uluwatu, Nusa Penida, and all popular areas in Bali."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get hotel or villa delivery in Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide direct delivery to your hotel or villa anywhere in Bali, including Canggu, Seminyak, Ubud, Kuta, Jimbaran, and Uluwatu."
          }
        },
        {
          "@type": "Question",
          "name": "How many devices can connect to one pocket WiFi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Up to 5 to 8 devices can connect simultaneously to a single Bali Pocket WiFi router with long battery life."
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
