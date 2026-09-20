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
  title: "Muzaffarpur Web Development Company | Terra Core Innovations",
  description:
    "Terra Core Innovations is a Muzaffarpur, Bihar web development company offering website design, ecommerce development, SEO, and custom software solutions for local businesses.",
  keywords: [
    "Muzaffarpur web development company",
    "website design company in Muzaffarpur",
    "ecommerce website development Muzaffarpur",
    "web developer Muzaffarpur",
    "Bihar web design agency",
    "custom website development",
    "SEO services Muzaffarpur",
  ],
  authors: [{ name: "Terra Core Innovations" }],
  creator: "Terra Core Innovations",
  publisher: "Terra Core Innovations",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://terracoreinnovations.com",
    siteName: "Terra Core Innovations",
    title: "Muzaffarpur Web Development Company | Terra Core Innovations",
    description:
      "Website design, ecommerce development, SEO, and custom business software for Muzaffarpur and Bihar businesses.",
    images: [
      {
        url: "https://terracoreinnovations.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Terra Core Innovations - Muzaffarpur Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Core Innovations",
    description: "Web design and development company in Muzaffarpur, Bihar",
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
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Muzaffarpur, Bihar",
    "geo.position": "26.1209;85.3647",
    ICBM: "26.1209, 85.3647",
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
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Muzaffarpur, Bihar" />
        <meta name="geo.position" content="26.1209;85.3647" />
        <meta name="ICBM" content="26.1209, 85.3647" />
        <link rel="icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Terra Core Innovations",
              url: "https://terracoreinnovations.com",
              logo: "https://terracoreinnovations.com/logo.svg",
              description:
                "Muzaffarpur-based web development company building websites, ecommerce stores, SEO campaigns, and custom digital solutions for businesses in Bihar.",
              areaServed: ["Muzaffarpur", "Bihar", "India"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Muzaffarpur",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              telephone: "+91-74110-08507",
              sameAs: [
                "https://www.facebook.com/terracoreinnovations",
                "https://www.linkedin.com/company/terracoreinnovations",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="top-contact-bar" aria-label="Contact details bar">
          <div className="top-contact-marquee">
            <div className="top-contact-track">
              <span>Call us: +91 74110 08507</span>
              <span>•</span>
              <span>Email: hello@terracoreinnovations.com</span>
              <span>•</span>
              <span>WhatsApp: +91 74110 08507</span>
              <span>•</span>
              <span>Call us: +91 74110 08507</span>
              <span>•</span>
              <span>Email: hello@terracoreinnovations.com</span>
              <span>•</span>
              <span>WhatsApp: +91 74110 08507</span>
            </div>
          </div>
        </div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <div className="mobile-cta-bar" aria-label="Quick contact actions">
          <a href="tel:+917411008507" className="mobile-cta-link mobile-cta-call">
            Call Now
          </a>
          <a
            href="https://wa.me/917411008507"
            target="_blank"
            rel="noreferrer"
            className="mobile-cta-link mobile-cta-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
