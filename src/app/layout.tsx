import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ikim-tech.netlify.app'),
  title: {
    default: 'IKIM Tech Co. | Web Development & Digital Solutions',
    template: '%s | IKIM Tech Co.'
  },
  description: 'Your trusted partner for web development, mobile apps, and digital solutions. We turn your concepts into reality through innovative design and exceptional results.',
  keywords: ['web development', 'mobile apps', 'digital solutions', 'UI/UX design', 'software development', 'Ethiopia'],
  authors: [{ name: 'IKIM Tech Co.' }],
  creator: 'IKIM Tech Co.',
  publisher: 'IKIM Tech Co.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ikim-tech.netlify.app',
    siteName: 'IKIM Tech Co.',
    title: 'IKIM Tech Co. | Web Development & Digital Solutions',
    description: 'Your trusted partner for web development, mobile apps, and digital solutions.',
    images: [
      {
        url: 'https://ikim-tech.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IKIM Tech Co. - Web Development & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IKIM Tech Co. | Web Development & Digital Solutions',
    description: 'Your trusted partner for web development, mobile apps, and digital solutions.',
    images: ['https://ikim-tech.netlify.app/og-image.png'],
    creator: '@ikimtech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'my-google-site-verification',
    yandex: 'my-yandex-verification',
    yahoo: 'my-yahoo-verification',
  },
  alternates: {
    canonical: 'https://ikim-tech.netlify.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/akim_logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#033D54" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="IKIM Tech Co. - Web Development & Digital Solutions" />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
} 