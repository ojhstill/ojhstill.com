import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'false') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      // Default to dark — either saved as 'true' or first visit
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggle = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark');
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded-lg border border-border/60 hover:border-border hover:bg-secondary/50 transition-colors cursor-pointer"
    >
      {darkMode ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
    </button>
  );
}
