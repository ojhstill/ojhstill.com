export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6">
      <p className="text-xs text-muted-foreground">
        © {currentYear} Oliver Still. All rights reserved. Made using React &
        Tailwind.
      </p>
    </footer>
  );
}
