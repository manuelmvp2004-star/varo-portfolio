import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import '@/styles/globals.scss';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://multiserviciosvaro.com'),
  applicationName: 'Multiservicios Varo',
  title: {
    default: 'Multiservicios Varo | Reformas y Servicios en Lucena',
    template: '%s | Multiservicios Varo',
  },
  description:
    'Empresa especializada en pintura, pladur, electricidad, reformas interiores, mantenimiento y aislamiento en Lucena, Córdoba y resto de España. Presupuesto sin compromiso.',
  keywords: [
    'reformas lucena',
    'pintura cordoba',
    'pladur cordoba',
    'electricidad cordoba',
    'reformas interiores',
    'mantenimiento hogar',
    'aislamiento térmico',
    'multiservicios varo',
  ],
  authors: [{ name: 'Multiservicios Varo' }],
  creator: 'Multiservicios Varo',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://multiserviciosvaro.com',
    siteName: 'Multiservicios Varo',
  },
  twitter: {
    card: 'summary_large_image',
  },
  themeColor: '#102F2D',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <body className="app-root">
        {children}
      </body>
    </html>
  );
}
