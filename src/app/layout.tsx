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
  title: {
    default: 'Multiservicios Varo | Reformas y Servicios en Zaragoza',
    template: '%s | Multiservicios Varo',
  },
  description:
    'Empresa especializada en pintura, pladur, electricidad, reformas interiores, mantenimiento y aislamiento en Zaragoza y Aragón. Presupuesto sin compromiso.',
  keywords: [
    'reformas zaragoza',
    'pintura zaragoza',
    'pladur zaragoza',
    'electricidad zaragoza',
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
      <body>
        {children}
      </body>
    </html>
  );
}
