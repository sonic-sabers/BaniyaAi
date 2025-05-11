import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import ClientWrapper from './components/ClientWrapper';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baniyaai.in"), // Update with your chosen domain
  title: {
    default: "BaniyaAI",
    template: "%s | BaniyaAI",
  },
  description: "Your personal finance advisor which can help you in personal finances and savings like a baniya",
  openGraph: {
    title: "BaniyaAI",
    description: "Your personal finance advisor which can help you in personal finances and savings like a baniya",
    url: "https://baniyaai.in", // Update with your chosen domain
    siteName: "BaniyaAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://baniyaai.in/logo.svg", // Update with your logo path
        width: 1200,
        height: 630,
        alt: "BaniyaAI",
      },
    ],
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
  twitter: {
    title: "Ashish Gupta",
    card: "summary_large_image",
  },
  verification: {
    google: "K1pkJ72cY3DylswXke2MHJGxmjJ91WXwgozcCICvFrU",
    // TODO: Add yandex verification key here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientWrapper>
        {children}
      </ClientWrapper>
    </html>
  );
}
