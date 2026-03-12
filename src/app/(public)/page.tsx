import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesPreview } from '@/components/home/ServicesPreview';
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
            <ServicesPreview />
            <FinalCTA />
        </>
    );
}