import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const storedTheme = localStorage.getItem('theme') as Theme;
  const [theme, setTheme] = useState<Theme>(storedTheme || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
