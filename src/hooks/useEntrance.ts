import { useRef, useEffect, RefObject } from 'react';

/**
 * Adds a CSS class 'is-visible' when the element scrolls into view.
 * Respects prefers-reduced-motion — when motion is reduced, the class
 * is added immediately without waiting for IntersectionObserver.
 */
export function useEntrance<T extends Element>(threshold = 0.12): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
