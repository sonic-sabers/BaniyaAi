import { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'BaniyaAI - AI-Powered Financial Intelligence',
  description: 'Your personal finance advisor that works like a trusted "Baniya" — smart, frugal, and always watching your bottom line.',
  keywords: 'AI, finance, financial advisor, personal finance, savings, investment',
  authors: [{ name: 'BaniyaAI Team' }],
  creator: 'BaniyaAI',
  publisher: 'BaniyaAI',
  openGraph: {
    title: 'BaniyaAI - AI-Powered Financial Intelligence',
    description: 'Your personal finance advisor that works like a trusted "Baniya" — smart, frugal, and always watching your bottom line.',
    url: 'https://baniya-ai.vercel.app',
    siteName: 'BaniyaAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BaniyaAI - AI-Powered Financial Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaniyaAI - AI-Powered Financial Intelligence',
    description: 'Your personal finance advisor that works like a trusted "Baniya" — smart, frugal, and always watching your bottom line.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3b82f6',
      },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e293b',
  applicationName: 'BaniyaAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-slate-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
