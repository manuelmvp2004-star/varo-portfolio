import type { FooterLinkGroup } from '@/types';

export const footerLinks: FooterLinkGroup[] = [
    {
        title: 'Servicios',
        links: [
            { label: 'Pintura', href: '/servicios/pintura' },
            { label: 'Pladur y Techos', href: '/servicios/pladur-techos' },
            { label: 'Electricidad', href: '/servicios/electricidad' },
            { label: 'Reformas Interiores', href: '/servicios/reformas-interiores' },
            { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
            { label: 'Aislamiento y Acabados', href: '/servicios/aislamiento-acabados' },
        ],
    },
    {
        title: 'Empresa',
        links: [
            { label: 'Quiénes Somos', href: '/empresa' },
            { label: 'Proyectos', href: '/proyectos' },
            { label: 'Blog', href: '/blog' },
            { label: 'Zonas de Servicio', href: '/zonas-de-servicio' },
        ],
    },
    {
        title: 'Contacto',
        links: [
            { label: 'Contactar', href: '/contacto' },
            { label: 'Pedir Presupuesto', href: '/presupuesto' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Aviso Legal', href: '/aviso-legal' },
            { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
            { label: 'Política de Cookies', href: '/politica-de-cookies' },
        ],
    },
];
