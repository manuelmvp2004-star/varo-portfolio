import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'María González',
        role: 'Propietaria de vivienda',
        location: 'Zaragoza',
        content: 'Reformaron completamente nuestro baño y quedó espectacular. Puntualidad perfecta, precio ajustado y el acabado es de los mejores que he visto. Repetiré sin duda.',
        rating: 5,
        service: 'Reformas Interiores',
    },
    {
        id: 't2',
        name: 'Carlos Martínez',
        role: 'Administrador de fincas',
        location: 'Huesca',
        content: 'Llevamos dos años con contrato de mantenimiento y la atención es excelente. Resuelven cualquier incidencia en menos de 24 horas. Muy profesionales.',
        rating: 5,
        service: 'Mantenimiento',
    },
    {
        id: 't3',
        name: 'Ana Ruiz',
        role: 'Empresaria',
        location: 'Zaragoza',
        content: 'Pintaron toda nuestra oficina en un fin de semana para no interrumpir la actividad. El resultado fue impecable y el equipo muy respetuoso con el espacio.',
        rating: 5,
        service: 'Pintura',
    },
    {
        id: 't4',
        name: 'Roberto Sánchez',
        role: 'Constructor',
        location: 'Teruel',
        content: 'Subcontrato habitualmente sus servicios de pladur y electricidad. Son serios, cumplen plazos y la calidad de ejecución está al nivel de cualquier empresa grande.',
        rating: 5,
        service: 'Pladur y Electricidad',
    },
];
