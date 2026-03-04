import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../../styles/preloader.css';

const Preloader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Lock scroll while loading
        document.body.style.overflow = 'hidden';

        const container = containerRef.current;
        if (!container) return;

        const loadingLetter = container.querySelectorAll('.willem__letter');
        const box = container.querySelectorAll('.willem-loader__box');
        const growingImage = container.querySelectorAll('.willem__growing-image');
        const headingStart = container.querySelectorAll('.willem__h1-start');
        const headingEnd = container.querySelectorAll('.willem__h1-end');
        const coverImageExtra = container.querySelectorAll('.willem__cover-image-extra');
        const headerLetter = container.querySelectorAll('.willem__letter-white');
        const navLinks = container.querySelectorAll('.willen-nav a, .osmo-credits__p');

        const tl = gsap.timeline({
            defaults: { ease: 'expo.inOut' },
            onStart: () => container.classList.remove('is--hidden'),
            onComplete: () => {
                setIsFinished(true);
                document.body.style.overflow = 'auto'; // restore scroll
            }
        });

        if (loadingLetter.length) {
            tl.from(loadingLetter, { yPercent: 100, stagger: 0.025, duration: 1.25 });
        }

        if (box.length) {
            tl.fromTo(box, { width: '0em' }, { width: '1em', duration: 1.25 }, '< 1.25');
            tl.fromTo(growingImage, { width: '0%' }, { width: '100%', duration: 1.25 }, '<');
        }

        if (headingStart.length) {
            tl.fromTo(headingStart, { x: '0em' }, { x: '-0.05em', duration: 1.25 }, '<');
        }

        if (headingEnd.length) {
            tl.fromTo(headingEnd, { x: '0em' }, { x: '0.05em', duration: 1.25 }, '<');
        }

        if (coverImageExtra.length) {
            tl.fromTo(coverImageExtra, { opacity: 1 }, { opacity: 0, duration: 0.05, ease: 'none', stagger: 0.5 }, '-=0.05');
        }

        if (growingImage.length) {
            tl.to(growingImage, { width: '100vw', height: '100dvh', duration: 2 }, '< 1.25');
        }

        if (box.length) {
            tl.to(box, { width: '110vw', duration: 2 }, '<');
        }

        if (headerLetter.length) {
            tl.from(headerLetter, { yPercent: 100, duration: 1.25, ease: 'expo.out', stagger: 0.025 }, '< 1.2');
        }

        if (navLinks.length) {
            tl.from(navLinks, { yPercent: 100, duration: 1.25, ease: 'expo.out', stagger: 0.1 }, '<');
        }

        // Cleanup on unmount
        return () => {
            tl.kill();
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (isFinished) return null;

    return (
        <div className="preloader-overlay">
            <section ref={containerRef} className="willem-header is--loading is--hidden">
                <div className="willem-loader">
                    <div className="willem__h1">
                        <div className="willem__h1-start">
                            <span className="willem__letter">V</span>
                            <span className="willem__letter">A</span>
                        </div>
                        <div className="willem-loader__box">
                            <div className="willem-loader__box-inner">
                                <div className="willem__growing-image">
                                    <div className="willem__growing-image-wrap">
                                        <img className="willem__cover-image-extra is--1" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" loading="lazy" alt="Coding workspace" />
                                        <img className="willem__cover-image-extra is--2" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" loading="lazy" alt="Code syntax" />
                                        <img className="willem__cover-image-extra is--3" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" loading="lazy" alt="Laptop desk" />
                                        <img className="willem__cover-image" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80" loading="lazy" alt="Developer setup" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="willem__h1-end">
                            <span className="willem__letter">R</span>
                            <span className="willem__letter">O</span>
                        </div>
                    </div>
                </div>
                <div className="willem-header__content">
                    <div className="willem-header__top">
                        <nav className="willen-nav">
                            <div className="willem-nav__start">
                                <a href="#" className="willem-nav__link">Varo ©</a>
                            </div>
                            <div className="willem-nav__end">
                                <div className="willem-nav__links">
                                    <a href="#projects" className="willem-nav__link">Proyectos</a>
                                </div>
                                <div className="willem-nav__cta">
                                    <a href="#contact" className="willem-nav__link">Contacto</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="willem-header__bottom">
                        <div className="willem__h1">
                            <span className="willem__letter-white">V</span>
                            <span className="willem__letter-white">a</span>
                            <span className="willem__letter-white">r</span>
                            <span className="willem__letter-white">o</span>
                            <span className="willem__letter-white is--space">©</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Preloader;
