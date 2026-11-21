import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const getHeaderOffset = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? -parsed : -72;
};

const normalizeId = (target: string) => {
  const id = target.startsWith('#') ? target.slice(1) : target;
  try {
    return decodeURIComponent(id);
  } catch {
    return id;
  }
};

/**
 * Single entry point for in-page scrolling. Uses Lenis when available and
 * respects the user's reduced-motion preference in the native fallback.
 */
export const scrollToTarget = (target: string | number | HTMLElement) => {
  if (typeof target === 'number') {
    if (window.__lenis) {
      window.__lenis.scrollTo(target);
      return;
    }
    window.scrollTo({
      top: target,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
    return;
  }

  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: getHeaderOffset() });
    return;
  }

  const element = typeof target === 'string' ? document.getElementById(normalizeId(target)) : target;
  element?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
};
