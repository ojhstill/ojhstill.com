import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  navigation: NavigationItem[];
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ navigation, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span>ojhstill</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 p-2.5 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerMenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm/6 font-semibold">
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
