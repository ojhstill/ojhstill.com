import { Link } from 'react-router-dom';

interface NavigationLinksProps {
  navigation: NavigationItem[];
  onClick?: () => void;
  className?: string;
}

export interface NavigationItem {
  name?: string;
  to?: string;
  target?: string;
  icon?: React.ReactNode;
}

export function NavigationLinks({
  navigation,
  onClick,
  className,
}: NavigationLinksProps) {
  return (
    <div className={className}>
      {navigation.map(item => (
        <Link
          key={item.name}
          to={item.to || '#'}
          onClick={onClick}
          target={item.target}
          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
          className="-mx-3 rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent flex items-center gap-2"
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  );
}
