import { useEffect, useState, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSectionReveal = (sectionRef: RefObject<HTMLElement | null>) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const backdrop = section.querySelector<HTMLElement>('[data-reveal-backdrop]');
      const content = gsap.utils.toArray<HTMLElement>('[data-section-reveal]', section);

      if (reducedMotion) {
        gsap.set([backdrop, ...content].filter(Boolean), { clearProps: 'all' });
        return;
      }

      if (backdrop) gsap.set(backdrop, { autoAlpha: 0, scale: 0.97 });
      gsap.set(content, { autoAlpha: 0, y: 26, scale: 0.985 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          once: true,
        },
      });

      if (backdrop) {
        timeline.to(backdrop, {
          autoAlpha: 1,
          scale: 1,
          duration: 1.25,
          ease: 'power2.out',
        });
      }

      if (content.length) {
        timeline.to(
          content,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            stagger: 0.16,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          backdrop ? '-=0.45' : 0
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reducedMotion, sectionRef]);
};
