// ============================================================
// SHARED TYPES — Multiservicios Varo
// ============================================================

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface FooterLinkGroup {
    title: string;
    links: { label: string; href: string }[];
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    longDescription?: string;
    icon: string;
    image?: string;
    features: string[];
    color?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    location: string;
    image: string;
    tags: string[];
    year: number;
    featured?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    location: string;
    content: string;
    rating: number;
    service?: string;
    avatar?: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
    icon: string;
}

export interface Differentiator {
    icon: string;
    title: string;
    description: string;
}

export interface CoverageZone {
    name: string;
    province?: string;
    featured?: boolean;
}

export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox';
    required?: boolean;
    placeholder?: string;
    options?: { value: string; label: string }[];
}

export interface SeoMetadata {
    title: string;
    description: string;
    openGraph?: {
        title?: string;
        description?: string;
        image?: string;
    };
    canonical?: string;
}
