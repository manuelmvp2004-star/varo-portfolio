import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/marketing/CookieBanner';
import { HomeIntroProvider } from '@/components/motion/HomeIntroContext';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HomeIntroProvider>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </HomeIntroProvider>
    );
}
