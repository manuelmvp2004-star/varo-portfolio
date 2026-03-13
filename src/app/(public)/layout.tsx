import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/marketing/CookieBanner';
import { PageRevealController } from '@/components/motion/PageRevealController';
import { IntroOverlay } from '@/components/motion/IntroOverlay';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <IntroOverlay />
            <Header />
            <PageRevealController />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}