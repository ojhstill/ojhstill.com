'use client';

import { useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(prev => !prev);
  };

  return (
    <button
      className="border-1 border-foreground/60 hover:border-foreground/30 rounded-lg p-2 cursor-pointer"
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <MoonIcon aria-hidden="true" />
      ) : (
        <SunIcon aria-hidden="true" />
      )}
    </button>
  );
}
