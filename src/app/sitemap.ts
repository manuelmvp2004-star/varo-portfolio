import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

const BASE_URL = 'https://multiserviciosvaro.es';

export default function sitemap(): MetadataRoute.Sitemap {
    // Base public routes
    const routes = [
        '',
        '/empresa',
        '/servicios',
        '/proyectos',
        '/contacto',
        '/presupuesto',
        '/zonas-de-servicio',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/servicios/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Legal routes (lower priority)
    const legalRoutes = [
        '/aviso-legal',
        '/politica-de-privacidad',
        '/politica-de-cookies',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    return [...routes, ...serviceRoutes, ...legalRoutes];
}
