import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import CurrentlyStatus from '@/components/CurrentlyStatus';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <CurrentlyStatus />
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-6 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Oliver Still
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ojhstill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/ojhstill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
