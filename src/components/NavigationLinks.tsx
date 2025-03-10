interface NavigationLinksProps {
  navigation: NavigationItem[];
  className?: string;
}

export interface NavigationItem {
  name?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function NavigationLinks({
  navigation,
  className,
}: NavigationLinksProps) {
  return (
    <div className={className}>
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="-mx-3 rounded-lg px-3 text-base/7 font-semibold hover:bg-sidebar-accent flex items-center gap-2"
        >
          {item.icon}
          {item.name}
        </a>
      ))}
    </div>
  );
}
