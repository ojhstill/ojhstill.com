export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center pt-12">
      <p className="text-xs text-muted-foreground">
        © {currentYear} Oliver Still. All rights reserved. Made using Vite +
        React + TS + Tailwind.
      </p>
    </footer>
  );
}
