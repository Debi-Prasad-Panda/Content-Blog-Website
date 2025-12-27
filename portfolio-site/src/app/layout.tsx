import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luminanarrative.com"),
  title: {
    default: "Lumina Narrative | Creative Content Strategist & Writer",
    template: "%s | Lumina Narrative",
  },
  description:
    "Creative content strategist and writer crafting compelling narratives that drive engagement, build brands, and inspire action. Specializing in content writing, digital marketing, and brand storytelling.",
  keywords: [
    "content writer",
    "content strategist",
    "brand storytelling",
    "digital marketing",
    "copywriting",
    "SEO content",
    "blog writing",
    "creative writer",
  ],
  authors: [{ name: "Lumina Narrative" }],
  creator: "Lumina Narrative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminanarrative.com",
    siteName: "Lumina Narrative",
    title: "Lumina Narrative | Creative Content Strategist & Writer",
    description:
      "Creative content strategist and writer crafting compelling narratives that drive engagement, build brands, and inspire action.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Narrative - Creative Content Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Narrative | Creative Content Strategist & Writer",
    description:
      "Creative content strategist and writer crafting compelling narratives that drive engagement, build brands, and inspire action.",
    images: ["/og-image.jpg"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050505" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lumina Narrative",
              url: "https://luminanarrative.com",
              jobTitle: "Creative Content Strategist & Writer",
              description:
                "Creative content strategist and writer specializing in brand storytelling, digital marketing, and compelling content creation.",
              sameAs: [
                "https://linkedin.com/in/luminanarrative",
                "https://instagram.com/luminanarrative",
              ],
              knowsAbout: [
                "Content Writing",
                "Digital Marketing",
                "Brand Storytelling",
                "SEO",
                "Copywriting",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
