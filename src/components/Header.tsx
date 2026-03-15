import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { motion } from 'motion/react';
import DarkModeToggle from '@/components/DarkModeToggle';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Journey', to: '/journey' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
        >
          {/* Oliver&nbsp;<span className="text-accent">Still</span> */}
          ojh<span className="text-accent">still</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map(item => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={cn(
                  'relative text-sm font-medium transition-colors pb-0.5',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </Link>
            );
          })}
          <DarkModeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <Cross1Icon className="size-5" />
            ) : (
              <HamburgerMenuIcon className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block py-2.5 text-base font-medium transition-colors',
                  location.pathname === item.to
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
