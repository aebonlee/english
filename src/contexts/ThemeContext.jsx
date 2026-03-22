import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const ThemeContext = createContext(undefined);

const STORAGE_KEY = 'english-pro-theme';
const VALID_THEMES = ['dark', 'light', 'auto'];

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_THEMES.includes(stored)) {
      return stored;
    }
  } catch {
    // localStorage not available
  }
  return 'auto';
}

function resolveTheme(theme) {
  if (theme === 'auto') {
    return getSystemTheme();
  }
  return theme;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(getStoredTheme()));

  const applyTheme = useCallback((resolved) => {
    setResolvedTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);

    // Also toggle class for Tailwind dark mode compatibility
    if (resolved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setTheme = useCallback((newTheme) => {
    if (!VALID_THEMES.includes(newTheme)) {
      console.warn(`Invalid theme "${newTheme}". Must be one of: ${VALID_THEMES.join(', ')}`);
      return;
    }

    setThemeState(newTheme);

    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // localStorage not available
    }

    applyTheme(resolveTheme(newTheme));
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const order = ['light', 'dark', 'auto'];
    const currentIndex = order.indexOf(theme);
    const nextTheme = order[(currentIndex + 1) % order.length];
    setTheme(nextTheme);
  }, [theme, setTheme]);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(resolveTheme(theme));
  }, [theme, applyTheme]);

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (theme !== 'auto') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue && VALID_THEMES.includes(e.newValue)) {
        setThemeState(e.newValue);
        applyTheme(resolveTheme(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [applyTheme]);

  const value = useMemo(() => ({
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === 'dark'
  }), [theme, resolvedTheme, setTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
