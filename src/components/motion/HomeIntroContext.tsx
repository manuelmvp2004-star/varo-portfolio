'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clearHomeIntroDocumentState } from './homeIntro.shared';

export type HomeIntroPhase = 'idle' | 'overlay' | 'settled' | 'content' | 'complete';

interface HomeIntroContextValue {
    isHomeRoute: boolean;
    isReadyForReveals: boolean;
    phase: HomeIntroPhase;
    setPhase: (phase: HomeIntroPhase) => void;
}

const HomeIntroContext = createContext<HomeIntroContextValue | null>(null);

export function HomeIntroProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHomeRoute = pathname === '/';

    useEffect(() => {
        if (!isHomeRoute) {
            clearHomeIntroDocumentState();
        }
    }, [isHomeRoute]);

    return (
        <HomeIntroProviderState key={pathname} isHomeRoute={isHomeRoute}>
            {children}
        </HomeIntroProviderState>
    );
}

function HomeIntroProviderState({
    children,
    isHomeRoute,
}: {
    children: React.ReactNode;
    isHomeRoute: boolean;
}) {
    const [phase, setPhase] = useState<HomeIntroPhase>(isHomeRoute ? 'idle' : 'complete');

    const value = useMemo(
        () => ({
            isHomeRoute,
            isReadyForReveals: !isHomeRoute || phase === 'complete',
            phase,
            setPhase,
        }),
        [isHomeRoute, phase]
    );

    return <HomeIntroContext.Provider value={value}>{children}</HomeIntroContext.Provider>;
}

export function useHomeIntro() {
    const context = useContext(HomeIntroContext);

    if (!context) {
        throw new Error('useHomeIntro must be used within a HomeIntroProvider.');
    }

    return context;
}
