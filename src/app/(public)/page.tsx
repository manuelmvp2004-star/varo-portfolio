import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { Differentiators } from '@/components/home/Differentiators';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Testimonials } from '@/components/home/Testimonials';
import { CoverageMap } from '@/components/home/CoverageMap';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Reformas y Servicios Profesionales en Zaragoza',
    path: '/',
});

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <ServicesPreview />
            <Differentiators />
            <ProcessSection />
            <FeaturedProjects />
            <Testimonials />
            <CoverageMap />
            <FinalCTA />
        </>
    );
}
