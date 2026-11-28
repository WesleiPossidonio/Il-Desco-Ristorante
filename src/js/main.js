const menu = document.querySelector('.menus');
const motionAllowed = matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 761px)');
let keyboardNavigation = false;
document.addEventListener('keydown', () => { keyboardNavigation = true; }, { passive: true });
document.addEventListener('pointerdown', () => { keyboardNavigation = false; }, { passive: true });

if (menu && motionAllowed.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(async entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    if (keyboardNavigation || !motionAllowed.matches) return;
    try {
      const { animateMenus } = await import('./menu-motion.js');
      if (!keyboardNavigation && motionAllowed.matches) animateMenus(menu);
    } catch {
      // Motion is optional; the static menu remains visible and usable.
    }
  }, { threshold: 0.15 });
  observer.observe(menu);
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}
