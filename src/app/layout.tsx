import type { Metadata } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/ui/LenisProvider';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'], 
  variable: '--font-barlow',
  weight: ['400', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "SHROFF PROCESS PRODUCTS | Hand-Built Rubber Expansion Bellows & Joints",
  description:
    "Leading manufacturer, supplier & exporter of Rubber Expansion Bellows and Joints. Trusted by Tata, BHEL, NTPC & 500+ clients across 25+ countries since 1974.",
  keywords:
    "rubber expansion bellows, expansion joints, industrial bellows, hand-built bellows, large diameter bellows, SHROFF PROCESS PRODUCTS",
  openGraph: {
    title: "SHROFF PROCESS PRODUCTS | Hand-Built Rubber Expansion Bellows & Joints",
    description:
      "Leading manufacturer, supplier & exporter of Rubber Expansion Bellows and Joints. Trusted by Tata, BHEL, NTPC & 500+ clients across 25+ countries since 1974.",
    url: "https://www.shroffprocesspumps.com",
    siteName: "SHROFF PROCESS PRODUCTS",
    locale: "en_US",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SHROFF PROCESS PRODUCTS",
  "url": "https://www.shroffprocesspumps.com",
  "logo": "https://www.shroffprocesspumps.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9227105232",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi"]
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "SHROFF PROCESS PRODUCTS"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
