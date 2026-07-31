import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/legal-texts', label: 'Legal Texts' },
  { href: '/judicial-precedent', label: 'Judicial Precedent' },
  { href: '/reports', label: 'Reports' },
  { href: '/administrative-studies', label: 'Administrative Studies' },
  { href: '/financial-studies', label: 'Financial Studies' },
  { href: '/news', label: 'News' },
];

export default function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="LAIFA logo" className="w-9 h-9 shrink-0" width={36} height={36} />
            <span className="text-xl font-bold tracking-widest text-foreground">LAIFA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-wider px-3 py-2 rounded-sm transition-colors ${active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-sm border border-primary text-primary hover:bg-primary/10 transition-all"
            >
              Sign In
            </Link>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-mono uppercase tracking-wider px-3 py-2.5 rounded-sm transition-colors ${active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-sm font-mono uppercase tracking-wider px-3 py-2.5 rounded-sm border border-primary text-primary text-center"
            >
              Sign In
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="LAIFA logo" className="w-5 h-5 shrink-0" width={20} height={20} />
            <span className="text-sm font-bold tracking-widest text-foreground">LAIFA</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} LAIFA Systems &mdash; <span className="text-green-400">SECURE CONNECTION</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
