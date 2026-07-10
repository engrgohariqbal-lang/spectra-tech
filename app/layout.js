import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSlidePanel } from "@/components/contact-slide-panel";
import { siteConfig } from "@/lib/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

import { JsonLd } from "@/components/json-ld";
import { icons } from "lucide-react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <ContactSlidePanel />
        <main className="flex-1 pt-[72px] md:pt-[120px]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
