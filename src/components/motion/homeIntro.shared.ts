export const HOME_INTRO_STORAGE_KEY = 'mv-home-intro-played';
export const HOME_INTRO_ROUTE_ATTR = 'data-home-intro-route';
export const HOME_INTRO_PLAYED_ATTR = 'data-home-intro-played';

export function buildHomeIntroBootstrapScript() {
    return `
        (function () {
            var root = document.documentElement;
            root.setAttribute('${HOME_INTRO_ROUTE_ATTR}', 'home');

            try {
                var hasPlayed = window.sessionStorage.getItem('${HOME_INTRO_STORAGE_KEY}') === '1';
                root.setAttribute('${HOME_INTRO_PLAYED_ATTR}', hasPlayed ? '1' : '0');
            } catch (error) {
                root.setAttribute('${HOME_INTRO_PLAYED_ATTR}', '0');
            }
        })();
    `;
}

export function armHomeIntroDocument(hasPlayed: boolean) {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.setAttribute(HOME_INTRO_ROUTE_ATTR, 'home');
    root.setAttribute(HOME_INTRO_PLAYED_ATTR, hasPlayed ? '1' : '0');
}

export function clearHomeIntroDocumentState() {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.removeAttribute(HOME_INTRO_ROUTE_ATTR);
    root.removeAttribute(HOME_INTRO_PLAYED_ATTR);
}
