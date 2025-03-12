import { useState } from 'react';
import { HamburgerMenuIcon, GlobeIcon } from '@radix-ui/react-icons';
import MobileMenu from '@/components/MobileMenu';
import DarkModeToggle from '@/components/DarkModeToggle';
import { NavigationLinks, NavigationItem } from '@/components/NavigationLinks';

interface HeaderProps {
  navigation: NavigationItem[];
}

export default function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6"
        >
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="-mx-3 px-3 py-2 text-base/7 font-semibold flex items-center gap-2"
            >
              <GlobeIcon aria-hidden="true" className="size-6" />
              ojhstill
            </a>
          </div>
          <div className="flex lg:hidden gap-x-6 items-center">
            <DarkModeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 p-2 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <NavigationLinks
            navigation={navigation}
            className="hidden lg:flex lg:gap-x-12"
          />
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6 items-center">
            <DarkModeToggle />
            <a
              href="mailto:oliver@ojhstill.com"
              className="-mx-3 flex rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
