import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#851839",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex flex-col min-h-screen bg-ivory text-charcoal font-body antialiased">
        {/* Skip to main content accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burgundy focus:text-ivory focus:font-body focus:text-xs focus:rounded-xs"
        >
          Skip to main content
        </a>

        {/* Global Navigation Shell */}
        <Header />

        {/* Main Semantic Landmark */}
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>

        {/* Global Footer Shell */}
        <Footer />

        {/* Floating Communication Action */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

