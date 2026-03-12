import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
    {
        id: 'faq1',
        question: '¿En qué zonas trabajáis?',
        answer: 'Trabajamos principalmente en Lucena y la provincia de Córdoba. También estudiamos desplazamientos al resto de España según alcance del proyecto y planificación.',
        category: 'general',
    },
    {
        id: 'faq2',
        question: '¿Cómo puedo solicitar un presupuesto?',
        answer: 'Puedes rellenar el formulario de presupuesto en nuestra web, llamarnos al +34 616 424 271 o enviarnos un email a info@multiserviciosvaro.com. Te respondemos en menos de 24 horas.',
        category: 'presupuesto',
    },
    {
        id: 'faq3',
        question: '¿Cuánto tarda en ejecutarse una reforma?',
        answer: 'Depende del alcance del proyecto. Una reforma de baño puede estar lista en 1-2 semanas, mientras que una reforma integral puede llevar 4-8 semanas. Te damos un calendario detallado antes de comenzar.',
        category: 'reformas',
    },
    {
        id: 'faq4',
        question: '¿Ofrecéis garantía por los trabajos realizados?',
        answer: 'Sí, todos nuestros trabajos tienen garantía mínima de 1 año. En reformas estructurales, la garantía es mayor según el tipo de trabajo. Lo especificamos en cada presupuesto.',
        category: 'garantia',
    },
    {
        id: 'faq5',
        question: '¿Trabajáis con comunidades de propietarios?',
        answer: 'Sí, tenemos amplia experiencia con comunidades. Ofrecemos contratos de mantenimiento anuales y presupuestos específicos para zonas comunes, fachadas y reparaciones.',
        category: 'general',
    },
];
