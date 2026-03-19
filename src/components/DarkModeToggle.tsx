import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      // Default to light - either saved as 'false' or first visit
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
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
      {darkMode ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </button>
  );
}
