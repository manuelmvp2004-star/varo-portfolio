import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/marketing/CookieBanner';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}
