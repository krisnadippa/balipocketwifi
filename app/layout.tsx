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
  title: "Bali Pocket WiFi — Unlimited 4G/LTE Pocket WiFi Rental in Bali",
  description:
    "Stay connected across Bali with high-speed unlimited 4G/LTE pocket WiFi. Convenient pickup at Ngurah Rai Bali Airport (DPS) or hotel delivery in Canggu, Ubud, Seminyak, & Uluwatu.",
  keywords: [
    "Bali Pocket WiFi",
    "Bali portable wifi rental",
    "Bali pocket internet",
    "Bali travel sim pocket wifi",
    "Ngurah Rai airport wifi rental",
    "Canggu wifi rental",
    "Ubud pocket wifi",
    "Bali pocket wifi rental",
    "travel wifi bali",
    "portable hotspot bali",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bali Pocket WiFi — Unlimited 4G/LTE Pocket WiFi Rental in Bali",
    description:
      "Stay connected across Bali with high-speed unlimited 4G/LTE pocket WiFi. Convenient pickup at Ngurah Rai Bali Airport (DPS) or hotel delivery in Canggu, Ubud, Seminyak, & Uluwatu.",
    url: "/",
    siteName: "Bali Pocket WiFi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Pocket WiFi - Unlimited 4G/LTE Pocket WiFi Rental in Bali",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Pocket WiFi — Unlimited 4G/LTE Pocket WiFi Rental in Bali",
    description:
      "Stay connected across Bali with high-speed unlimited 4G/LTE pocket WiFi. Convenient pickup at Ngurah Rai Bali Airport (DPS) or hotel delivery in Canggu, Ubud, Seminyak, & Uluwatu.",
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
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-[#A3E635] selection:text-black">
        {children}
      </body>
    </html>
  );
}
