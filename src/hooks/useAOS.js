import { useEffect, useRef } from 'react';

/**
 * useAOS - Animate On Scroll hook using IntersectionObserver.
 *
 * Observes all elements with [data-aos] attribute and adds the
 * 'aos-animate' class when they enter the viewport. Supports
 * data-aos-delay for staggered animations.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Intersection threshold (0-1)
 * @param {string} [options.rootMargin='0px 0px -50px 0px'] - Root margin for observer
 * @param {boolean} [options.once=true] - If true, animation triggers only once
 */
export function useAOS({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true
} = {}) {
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');

    if (elements.length === 0) return;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
          const duration = el.getAttribute('data-aos-duration');

          if (duration) {
            el.style.transitionDuration = `${duration}ms`;
          }

          if (delay > 0) {
            setTimeout(() => {
              el.classList.add('aos-animate');
            }, delay);
          } else {
            el.classList.add('aos-animate');
          }

          // Unobserve if animation should only trigger once
          if (once) {
            observerRef.current?.unobserve(el);
          }
        } else if (!once) {
          // Remove animation class when out of viewport (repeat mode)
          entry.target.classList.remove('aos-animate');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin
    });

    elements.forEach((el) => {
      // Reset: ensure animation class is not present initially
      el.classList.remove('aos-animate');
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin, once]);
}

export default useAOS;
