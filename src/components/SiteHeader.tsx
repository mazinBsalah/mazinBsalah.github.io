import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/games", label: "Games" },
  { to: "/experience", label: "Experience" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b hairline">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Mazin <span className="text-accent-gradient">Salah</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-1 sm:gap-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                  activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md bg-surface" }}
                  activeOptions={{ exact: true }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Mazin Salah. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/mazin-salah" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:mbsalah@ncsu.edu" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
