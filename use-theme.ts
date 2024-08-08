import { useEffect, useState } from 'react';

/**
 * useTheme.ts
 *
 * - A custom hook that lets us check the current theme which is set by the
 * - theme-toggle component. This is only necessary in situations where we
 * - can't handle dark/light mode variations with css alone (e.g. images).
 * - For example:
 *   const theme = useTheme();
 */
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check the theme immediately on mount
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      const isDark = html.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Set up the observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateTheme();
        }
      });
    });

    observer.observe(html, { attributes: true });

    // Call updateTheme once to ensure we have the correct initial value
    updateTheme();

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
};

export { useTheme };