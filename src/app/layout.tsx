// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Wing Logistics - Transportation & Logistics Services in India',
    template: '%s | Wing Logistics'
  },
  description: 'Trusted logistics company providing roadways, airways, and railways transportation services across India. Fast, reliable cargo delivery for your business.',
  keywords: ['logistics company india', 'transportation services', 'cargo delivery', 'freight services', 'wing logistics', 'delhi logistics company'],
  metadataBase: new URL('https://www.winggroup.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.winggroup.org',
    title: 'Wing Logistics - Your Trusted Transportation Partner in India',
    description: 'Comprehensive logistics solutions through roadways, airways, and railways across India. Reliable and efficient transportation services.',
    siteName: 'Wing Logistics',
    images: [
      {
        url: '/images/wing-logistics-og.jpg', // Create this image with your logo and branding
        width: 1200,
        height: 630,
        alt: 'Wing Logistics - Transportation Services',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}