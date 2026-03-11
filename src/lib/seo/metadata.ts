import type { Metadata } from 'next';

const BASE_URL = 'https://multiserviciosvaro.com';
const SITE_NAME = 'Multiservicios Varo';
const DEFAULT_DESCRIPTION =
    'Empresa especializada en pintura, pladur, electricidad, reformas interiores, mantenimiento y aislamiento en Zaragoza y Aragón. Presupuesto sin compromiso.';

export function buildMetadata({
    title,
    description = DEFAULT_DESCRIPTION,
    path = '',
    ogImage = '/og-default.jpg',
}: {
    title: string;
    description?: string;
    path?: string;
    ogImage?: string;
}): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonical = `${BASE_URL}${path}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonical,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
