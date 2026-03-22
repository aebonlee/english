import { useEffect, useRef } from 'react';

/**
 * useTableScroller - Wraps overflowing tables in scrollable containers.
 *
 * Finds all tables matching the selector within a container scope and wraps
 * any that might overflow in a horizontally scrollable div. Also adds shadow
 * indicators to show that content is scrollable.
 *
 * @param {Object} options
 * @param {string} [options.scope='main'] - CSS selector to scope table search
 * @param {string} [options.tableSelector='table'] - CSS selector for tables
 * @param {string} [options.wrapperClass='table-scroll-wrapper'] - Class for the wrapper div
 * @param {number} [options.overflowThreshold=20] - Minimum px overflow to trigger wrapping
 */
export function useTableScroller({
  scope = 'main',
  tableSelector = 'table',
  wrapperClass = 'table-scroll-wrapper',
  overflowThreshold = 20
} = {}) {
  const wrappersRef = useRef([]);

  useEffect(() => {
    const container = document.querySelector(scope);
    if (!container) return;

    const tables = container.querySelectorAll(tableSelector);
    if (tables.length === 0) return;

    const wrappers = [];

    tables.forEach((table) => {
      // Skip if already wrapped
      if (table.parentElement?.classList.contains(wrapperClass)) return;

      // Check if table overflows its parent
      const parent = table.parentElement;
      if (!parent) return;

      const tableWidth = table.scrollWidth;
      const parentWidth = parent.clientWidth;

      if (tableWidth <= parentWidth + overflowThreshold) return;

      // Create scrollable wrapper
      const wrapper = document.createElement('div');
      wrapper.className = wrapperClass;

      Object.assign(wrapper.style, {
        overflowX: 'auto',
        overflowY: 'hidden',
        width: '100%',
        position: 'relative',
        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
        marginBlock: '1rem'
      });

      // Add scroll shadow indicators
      const shadowLeft = document.createElement('div');
      shadowLeft.className = `${wrapperClass}-shadow-left`;
      Object.assign(shadowLeft.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        width: '24px',
        background: 'linear-gradient(to right, var(--bg-primary, #0f172a), transparent)',
        pointerEvents: 'none',
        opacity: '0',
        transition: 'opacity 0.2s ease',
        zIndex: '1'
      });

      const shadowRight = document.createElement('div');
      shadowRight.className = `${wrapperClass}-shadow-right`;
      Object.assign(shadowRight.style, {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width: '24px',
        background: 'linear-gradient(to left, var(--bg-primary, #0f172a), transparent)',
        pointerEvents: 'none',
        opacity: '1',
        transition: 'opacity 0.2s ease',
        zIndex: '1'
      });

      // Outer container with relative positioning for shadows
      const outerWrapper = document.createElement('div');
      outerWrapper.style.position = 'relative';
      outerWrapper.appendChild(shadowLeft);
      outerWrapper.appendChild(shadowRight);

      // Insert wrapper into DOM
      parent.insertBefore(outerWrapper, table);
      outerWrapper.appendChild(wrapper);
      wrapper.appendChild(table);

      // Update shadow visibility on scroll
      const updateShadows = () => {
        const scrollLeft = wrapper.scrollLeft;
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

        shadowLeft.style.opacity = scrollLeft > 5 ? '1' : '0';
        shadowRight.style.opacity = scrollLeft < maxScroll - 5 ? '1' : '0';
      };

      wrapper.addEventListener('scroll', updateShadows, { passive: true });

      // Initial shadow state
      updateShadows();

      wrappers.push({ outerWrapper, wrapper, table, parent, shadowLeft, shadowRight, updateShadows });
    });

    wrappersRef.current = wrappers;

    // Handle window resize - recheck overflow
    const handleResize = () => {
      wrappersRef.current.forEach(({ wrapper, updateShadows }) => {
        updateShadows();
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      wrappersRef.current.forEach(({ outerWrapper, wrapper, table, parent, updateShadows }) => {
        wrapper.removeEventListener('scroll', updateShadows);

        // Unwrap: move table back to its original position
        if (outerWrapper.parentNode === parent) {
          parent.insertBefore(table, outerWrapper);
          parent.removeChild(outerWrapper);
        }
      });

      wrappersRef.current = [];
    };
  }, [scope, tableSelector, wrapperClass, overflowThreshold]);
}

export default useTableScroller;
