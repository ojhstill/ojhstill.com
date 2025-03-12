export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center p-6">
      <p className="text-xs text-muted-foreground">
        © {currentYear} Oliver Still. All rights reserved.
        <br />
        Made using Vite + React + TS + Tailwind.
      </p>
    </footer>
  );
}
