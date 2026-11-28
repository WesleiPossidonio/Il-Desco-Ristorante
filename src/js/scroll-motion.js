import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollMotion(isKeyboardNavigation) {
  const media = gsap.matchMedia();
  media.add({ desktop: '(min-width: 761px)', mobile: '(max-width: 760px)', motion: '(prefers-reduced-motion: no-preference)' }, context => {
    if (!context.conditions.motion) return;
    const desktop = context.conditions.desktop;
    const delayedTweens = new Set();
    const rise = (target, trigger, distance = 28, stagger = 0) => {
      ScrollTrigger.create({
        trigger,
        start: 'top 86%',
        once: true,
        onEnter: () => {
          if (isKeyboardNavigation()) return;
          delayedTweens.add(gsap.from(target, { y: distance, opacity: 0.45, duration: 0.75, stagger, ease: 'power3.out', clearProps: 'transform,opacity', overwrite: 'auto' }));
        },
      });
    };

    if (window.scrollY < 40 && !isKeyboardNavigation()) {
      gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('.hero h1', { y: 28, opacity: 0.65, clearProps: 'transform,opacity' })
        .from('.hero-description, .hero-actions', { y: 14, opacity: 0.65, stagger: 0.08, clearProps: 'transform,opacity' }, 0.15);
    }
    rise('.editorial-title', '.editorial');
    rise('.editorial-copy', '.editorial', 18);

    const photoReveal = (image, trigger) => {
      ScrollTrigger.create({
        trigger, start: 'top 85%', once: true,
        onEnter: () => {
          if (isKeyboardNavigation()) return;
          delayedTweens.add(gsap.from(image, { clipPath: 'inset(5% 4% 5% 4%)', duration: 1.1, ease: 'power3.out', clearProps: 'clipPath' }));
        },
      });
      if (desktop) gsap.fromTo(image, { yPercent: -4 }, {
        yPercent: 4, ease: 'none',
        scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 0.7, invalidateOnRefresh: true },
      });
    };
    photoReveal('.scene-image img', '.table-scene');
    photoReveal('.restaurant-photo img', '.restaurant-photo');

    rise('#menu-title', '.section-heading', 24);
    gsap.from('.section-rule', { scaleX: 0.15, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.section-heading', start: 'top 80%', once: true } });
    if (desktop) rise('.menu-card', '.menus', 42, 0.1);
    else document.querySelectorAll('.menu-card').forEach(card => rise(card, card, 18));
    rise('.menu-document', '.menu-document', 14);
    rise('.restaurant-content', '.restaurant-content', 24);
    rise('#final-title', '.final-inner', 28);
    rise('.final .button', '.final-inner', 14);
    gsap.from('.final-rule', { scaleX: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.final', start: 'top 78%', once: true } });

    const finishFocusedAnimation = event => {
      const target = event.target.closest('.hero-actions, .menu-document, .restaurant-content, .final-inner');
      if (target) gsap.getTweensOf([target, ...target.querySelectorAll('*')]).forEach(tween => tween.progress(1));
    };
    document.addEventListener('focusin', finishFocusedAnimation);
    return () => {
      document.removeEventListener('focusin', finishFocusedAnimation);
      delayedTweens.forEach(tween => tween.revert());
      delayedTweens.clear();
    };
  });
  return () => media.revert();
}
