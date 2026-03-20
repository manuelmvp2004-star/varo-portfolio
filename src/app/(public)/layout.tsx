import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomeIntroProvider } from '@/components/motion/HomeIntroContext';
import { PublicSmoothScroll } from '@/components/motion/PublicSmoothScroll';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HomeIntroProvider>
            <PublicSmoothScroll />
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-content">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </HomeIntroProvider>
    );
}
