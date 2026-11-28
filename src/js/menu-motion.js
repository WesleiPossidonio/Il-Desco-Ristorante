import { gsap } from 'gsap';

export function animateMenus(container) {
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference) and (min-width: 761px)', () => {
    gsap.from(container.querySelectorAll('.menu-card'), {
      y: 12,
      opacity: 0.92,
      duration: 0.24,
      stagger: 0.06,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    });
  });
  window.addEventListener('pagehide', () => media.revert(), { once: true });
}
