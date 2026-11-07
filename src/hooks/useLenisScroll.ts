import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

const getHeaderOffset = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? -parsed : -72;
};

export const useLenisScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    window.__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor || anchor.target === '_blank') return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href.length < 2) return;

      if (href === '#home' || href === '#top') {
        event.preventDefault();
        lenis.scrollTo(0);
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        event.preventDefault();
        lenis.scrollTo(element as HTMLElement, { offset: getHeaderOffset() });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
};
