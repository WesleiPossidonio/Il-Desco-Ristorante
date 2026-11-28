const preference = matchMedia('(prefers-reduced-motion: reduce)');
let dispose;
let loading;
let keyboardNavigation = false;
document.addEventListener('keydown', event => {
  if (['Tab', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) keyboardNavigation = true;
}, { passive: true });
document.addEventListener('pointerdown', () => { keyboardNavigation = false; }, { passive: true });
document.addEventListener('wheel', () => { keyboardNavigation = false; }, { passive: true });
document.addEventListener('touchstart', () => { keyboardNavigation = false; }, { passive: true });

async function startMotion() {
  if (preference.matches || dispose || loading) return;
  loading = import('./scroll-motion.js');
  try {
    const { initScrollMotion } = await loading;
    if (!preference.matches) dispose = initScrollMotion(() => keyboardNavigation);
  } catch {
    // The document is fully visible and all links work without motion.
  } finally {
    loading = null;
  }
}
preference.addEventListener('change', () => {
  if (preference.matches) { dispose?.(); dispose = null; }
  else startMotion();
});
window.addEventListener('pagehide', () => { dispose?.(); dispose = null; });
window.addEventListener('pageshow', event => { if (event.persisted) startMotion(); });
if (document.readyState === 'complete') startMotion();
else window.addEventListener('load', startMotion, { once: true });
