import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { company } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${company.name} | Air Duct Cleaning in New York, NY | Free Estimates`,
    template: `%s | ${company.name} — New York, NY`,
  },
  description: `${company.name} provides NADCA-certified air duct cleaning, dryer vent cleaning, and HVAC services in New York City. Serving Manhattan, Brooklyn, Queens, the Bronx, and Staten Island since ${company.year_established}. Free estimates, same-day service.`,
  keywords: [
    'air duct cleaning New York',
    'air duct cleaning NYC',
    'duct cleaning near me',
    'HVAC cleaning New York',
    'dryer vent cleaning NYC',
    'mold remediation ducts New York',
    'indoor air quality testing NYC',
    'commercial duct cleaning New York',
    'NADCA certified duct cleaning',
    'air duct cleaning Manhattan',
    'air duct cleaning Brooklyn',
    'air duct cleaning Queens',
    'air duct cleaning Bronx',
    'air duct cleaning Staten Island',
    'duct sanitizing New York',
    'vent register cleaning NYC',
  ],
  openGraph: {
    title: `${company.name} | Air Duct Cleaning in New York, NY`,
    description: `NADCA-certified air duct cleaning across New York City. Serving all five boroughs since ${company.year_established}. Free estimates, same-day service.`,
    type: 'website',
    locale: 'en_US',
    siteName: company.name,
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York, NY',
    'geo.position': '40.7549;-73.9761',
    'ICBM': '40.7549, -73.9761',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
