'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { Moon, Sun } from '@/assets/icons';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="theme toggler"
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="mx-2 p-4 sm:mx-4 md:my-2"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
