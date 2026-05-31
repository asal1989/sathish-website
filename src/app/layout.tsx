import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://asal1989.github.io/sathish-website";
const PHONE = "+91-96882-16635";
const LOGO_URL = `${SITE_URL}/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sree Isai Electrical Contractor — Tirunelveli, Tamil Nadu | Trusted Electrical Services",
    template: "%s | Sree Isai Electrical Contractor",
  },
  description:
    "Sree Isai Electrical Contractor — Tirunelveli's trusted licensed electrical contractor since 2009. House wiring, industrial & commercial works, solar, CCTV, generator, panel boards. Free quotes. Call +91 96882 16635.",
  keywords: [
    "Sree Isai Electrical Contractor",
    "electrical contractor Tirunelveli",
    "electrical contractor Tamil Nadu",
    "house wiring contractor Tirunelveli",
    "industrial electrical Tirunelveli",
    "commercial electrical contractor Tirunelveli",
    "solar installation Tirunelveli",
    "CCTV installation Tirunelveli",
    "generator setup Tirunelveli",
    "panel board installation Tirunelveli",
    "best electrician Tirunelveli",
    "electrician Rathapuram",
    "electrical contractor Rathapuram taluk",
    "licensed electrician Tamil Nadu",
  ],
  authors: [{ name: "Sree Isai Electrical Contractor" }],
  creator: "Sree Isai Electrical Contractor",
  publisher: "Sree Isai Electrical Contractor",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sree Isai Electrical Contractor — Tirunelveli, Tamil Nadu",
    description:
      "Powering Homes, Businesses & Industries with Excellence. Licensed electrical contractor in Tirunelveli. House wiring, industrial, solar, CCTV. Call +91 96882 16635.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Sree Isai Electrical Contractor",
    images: [
      {
        url: LOGO_URL,
        width: 1254,
        height: 1254,
        alt: "Sree Isai Electrical Contractor - Tirunelveli, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Isai Electrical Contractor — Tirunelveli, Tamil Nadu",
    description:
      "Licensed electrical contractor in Tirunelveli. House wiring, industrial, solar, CCTV. Call +91 96882 16635.",
    images: [LOGO_URL],
  },
  icons: {
    icon: [{ url: "/sathish-website/logo.png", type: "image/png" }],
    apple: [{ url: "/sathish-website/logo.png" }],
    shortcut: ["/sathish-website/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Electrical Contractor",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE_URL}/#business`,
  name: "Sree Isai Electrical Contractor",
  alternateName: "ஸ்ரீ இசை எலக்ட்ரிக்கல் கான்ட்ராக்டர்",
  description:
    "Licensed electrical contractor in Tirunelveli, Tamil Nadu specializing in residential, commercial, and industrial electrical works, solar installation, CCTV, generators, and panel board installation.",
  url: SITE_URL,
  telephone: PHONE,
  email: "info@sreeisaielectrical.com",
  image: LOGO_URL,
  logo: LOGO_URL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "403, Amman Kovil Street, Nambipathu",
    addressLocality: "Valliyamalpuram",
    addressRegion: "Tamil Nadu",
    postalCode: "627117",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.6528,
    longitude: 77.6597,
  },
  areaServed: [
    { "@type": "City", name: "Tirunelveli" },
    { "@type": "City", name: "Palayamkottai" },
    { "@type": "City", name: "Rathapuram" },
    { "@type": "City", name: "Nanguneri" },
    { "@type": "City", name: "Tenkasi" },
    { "@type": "City", name: "Ambasamudram" },
    { "@type": "State", name: "Tamil Nadu" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://wa.me/919688216635"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      "House Wiring","Commercial Electrical Works","Industrial Electrical Contracting",
      "Electrical Maintenance & Repair","Solar Installation","CCTV Installation",
      "Generator Setup","Panel Board Installation","Street Lighting Projects",
    ].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      q: "What areas do you serve in Tamil Nadu?",
      a: "We serve Tirunelveli, Palayamkottai, Rathapuram, Nanguneri, Tenkasi, Ambasamudram, and surrounding areas across Tamil Nadu.",
    },
    {
      q: "Are you a licensed electrical contractor?",
      a: "Yes. Sree Isai Electrical Contractor is fully licensed in Tamil Nadu with 15+ years of experience. All electricians are certified and follow TNEB safety standards.",
    },
    {
      q: "Do you give free quotations?",
      a: "Yes — site visits and quotations are completely free for residential and commercial projects in Tirunelveli district. Call +91 96882 16635 for a free quote.",
    },
    {
      q: "Do you handle emergency electrical repairs?",
      a: "Yes, we offer 24/7 emergency electrical repair service in Tirunelveli and surrounding areas. Call +91 96882 16635 anytime.",
    },
    {
      q: "Do you provide warranty on your work?",
      a: "Yes. All wiring work comes with a 2-year workmanship warranty. Solar systems come with 5-year service warranty and 25-year panel performance warranty.",
    },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tirunelveli" />
        <meta name="geo.position" content="8.6528;77.6597" />
        <meta name="ICBM" content="8.6528, 77.6597" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-white`}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: "#1e3a8a", color: "#fff" },
            success: { style: { background: "#15803d" } },
            error: { style: { background: "#dc2626" } },
          }}
        />
        {children}
      </body>
    </html>
  );
}
