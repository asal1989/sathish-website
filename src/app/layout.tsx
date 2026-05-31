import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sree Isai Electrical Contractor | Hosur, Tamil Nadu",
  description:
    "Leading electrical contractor in Hosur, Tamil Nadu. Expert in house wiring, commercial & industrial electrical works, solar installation, CCTV, generator setup, and panel board installation.",
  keywords:
    "Sree Isai Electrical Contractor, electrical contractor Hosur, electrical contractor Tamil Nadu, house wiring contractor, commercial electrical, industrial electrical, solar installation, CCTV installation, generator setup",
  authors: [{ name: "Sree Isai Electrical Contractor" }],
  openGraph: {
    title: "Sree Isai Electrical Contractor | Hosur, Tamil Nadu",
    description:
      "Powering Homes, Businesses & Industries with Excellence. Expert electrical services in Hosur, Tamil Nadu.",
    type: "website",
    locale: "en_IN",
    siteName: "Sree Isai Electrical Contractor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Hosur" />
        <link rel="icon" href="/favicon.ico" />
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
