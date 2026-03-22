import { useEffect, useCallback, useRef } from 'react';

/**
 * useCodeCopy - Adds copy-to-clipboard buttons to code blocks.
 *
 * Finds all elements matching the selector (default: '.code-block')
 * and injects a copy button. Provides visual feedback on copy success/failure.
 *
 * @param {Object} options
 * @param {string} [options.selector='.code-block'] - CSS selector for code blocks
 * @param {string} [options.buttonText='Copy'] - Default button text
 * @param {string} [options.successText='Copied!'] - Text shown after successful copy
 * @param {string} [options.errorText='Failed'] - Text shown after failed copy
 * @param {number} [options.feedbackDuration=2000] - Duration of feedback message in ms
 */
export function useCodeCopy({
  selector = '.code-block',
  buttonText = 'Copy',
  successText = 'Copied!',
  errorText = 'Failed',
  feedbackDuration = 2000
} = {}) {
  const buttonsRef = useRef([]);
  const timersRef = useRef([]);

  const copyToClipboard = useCallback(async (text) => {
    // Use modern Clipboard API with fallback
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fall through to fallback
      }
    }

    // Fallback: textarea method
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const codeBlocks = document.querySelectorAll(selector);

    if (codeBlocks.length === 0) return;

    const buttons = [];
    const timers = [];

    codeBlocks.forEach((block) => {
      // Skip if copy button already exists
      if (block.querySelector('.code-copy-btn')) return;

      // Ensure the block has relative positioning for absolute button placement
      const computedPosition = window.getComputedStyle(block).position;
      if (computedPosition === 'static') {
        block.style.position = 'relative';
      }

      // Create copy button
      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = buttonText;
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', 'Copy code to clipboard');

      // Apply styles
      Object.assign(btn.style, {
        position: 'absolute',
        top: '8px',
        right: '8px',
        padding: '4px 12px',
        fontSize: '12px',
        fontFamily: 'inherit',
        lineHeight: '1.5',
        color: 'var(--text-secondary, #94a3b8)',
        backgroundColor: 'var(--bg-tertiary, rgba(255,255,255,0.1))',
        border: '1px solid var(--border-color, rgba(255,255,255,0.15))',
        borderRadius: '6px',
        cursor: 'pointer',
        opacity: '0',
        transition: 'opacity 0.2s ease, background-color 0.2s ease',
        zIndex: '10'
      });

      // Show button on hover
      const showBtn = () => { btn.style.opacity = '1'; };
      const hideBtn = () => { btn.style.opacity = '0'; };

      block.addEventListener('mouseenter', showBtn);
      block.addEventListener('mouseleave', hideBtn);
      block.addEventListener('focusin', showBtn);
      block.addEventListener('focusout', hideBtn);

      // Handle click
      const handleClick = async () => {
        // Get code text from the block
        const codeEl = block.querySelector('code') || block;
        const text = codeEl.textContent || '';

        const success = await copyToClipboard(text);

        btn.textContent = success ? successText : errorText;
        btn.style.opacity = '1';

        if (success) {
          btn.style.color = 'var(--success-color, #22c55e)';
        } else {
          btn.style.color = 'var(--error-color, #ef4444)';
        }

        const timer = setTimeout(() => {
          btn.textContent = buttonText;
          btn.style.color = 'var(--text-secondary, #94a3b8)';
          // Only hide if not hovered
          if (!block.matches(':hover')) {
            btn.style.opacity = '0';
          }
        }, feedbackDuration);

        timers.push(timer);
      };

      btn.addEventListener('click', handleClick);

      block.appendChild(btn);
      buttons.push({ btn, block, showBtn, hideBtn, handleClick });
    });

    buttonsRef.current = buttons;
    timersRef.current = timers;

    // Cleanup
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];

      buttonsRef.current.forEach(({ btn, block, showBtn, hideBtn, handleClick }) => {
        btn.removeEventListener('click', handleClick);
        block.removeEventListener('mouseenter', showBtn);
        block.removeEventListener('mouseleave', hideBtn);
        block.removeEventListener('focusin', showBtn);
        block.removeEventListener('focusout', hideBtn);

        if (btn.parentNode) {
          btn.parentNode.removeChild(btn);
        }
      });
      buttonsRef.current = [];
    };
  }, [selector, buttonText, successText, errorText, feedbackDuration, copyToClipboard]);
}

export default useCodeCopy;
