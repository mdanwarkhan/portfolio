import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terracoreinnovations.com"),
  title: "Terra Core Innovations — Building tomorrow together",
  description: "Terra Core Innovations offers web design, ecommerce development, mobile app development, and custom CRM solutions for modern businesses.",
  keywords: ["web design", "ecommerce development", "mobile app", "CRM software", "web development"],
  authors: [{ name: "Terra Core Innovations" }],
  creator: "Terra Core Innovations",
  publisher: "Terra Core Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terracoreinnovations.com",
    siteName: "Terra Core Innovations",
    title: "Terra Core Innovations — Building tomorrow together",
    description: "Web design, ecommerce development, mobile app development, and custom CRM solutions",
    images: [
      {
        url: "https://terracoreinnovations.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Terra Core Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Core Innovations",
    description: "Building tomorrow together",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://terracoreinnovations.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#facc15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Terra Core Innovations",
              url: "https://terracoreinnovations.com",
              logo: "https://terracoreinnovations.com/logo.svg",
              description: "Web design, ecommerce development, mobile app development, and custom CRM solutions",
              sameAs: [
                "https://www.facebook.com/terracoreinnovations",
                "https://www.linkedin.com/company/terracoreinnovations",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
