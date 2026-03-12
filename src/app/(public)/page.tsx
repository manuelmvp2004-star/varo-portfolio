import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Differentiators } from '@/components/home/Differentiators';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Testimonials } from '@/components/home/Testimonials';
import { CoverageMap } from '@/components/home/CoverageMap';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Reformas y Multiservicios Premium en Lucena',
    path: '/',
});

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <Differentiators />
            <ServicesPreview />
            <ProcessSection />
            <FeaturedProjects />
            <Testimonials />
            <CoverageMap />
            <FinalCTA />
        </>
    );
}
