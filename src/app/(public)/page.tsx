import Script from 'next/script';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { IntroOverlay } from '@/components/motion/IntroOverlay';
import { HomeSmoothScroll } from '@/components/motion/HomeSmoothScroll';
import { buildHomeIntroBootstrapScript } from '@/components/motion/homeIntro.shared';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Reformas y Multiservicios Premium en Lucena',
    path: '/',
});

export default function Home() {
    return (
        <>
            <Script
                id="home-intro-bootstrap"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: buildHomeIntroBootstrapScript() }}
            />

            <IntroOverlay />
            <HomeSmoothScroll />

            <div data-home-intro-root="true">
                <Hero />
                <TrustBar />
                <ServicesPreview />
                <FinalCTA />
            </div>
        </>
    );
}
