import type { NavItem } from '@/types';

export const navigation: NavItem[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Empresa', href: '/empresa' },
    {
        label: 'Servicios',
        href: '/servicios',
        children: [
            { label: 'Pintura', href: '/servicios/pintura' },
            { label: 'Pladur y Techos', href: '/servicios/pladur-techos' },
            { label: 'Electricidad', href: '/servicios/electricidad' },
            { label: 'Reformas Interiores', href: '/servicios/reformas-interiores' },
            { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
            { label: 'Aislamiento y Acabados', href: '/servicios/aislamiento-acabados' },
        ],
    },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Zonas', href: '/zonas-de-servicio' },
    { label: 'Contacto', href: '/contacto' },
];

export const ctaButton = {
    label: 'Pedir Presupuesto',
    href: '/presupuesto',
};
