import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { NavLink } from "@/components/atoms/NavLink";

const links = [
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.skills, label: "Skills" },
  { href: ROUTES.cv, label: "CV" },
  { href: ROUTES.projects, label: "Projects" },
  { href: ROUTES.contact, label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-[var(--space-page-x)] py-5"
        aria-label="Main navigation"
      >
        <Link
          href={ROUTES.home}
          className="brand-mark tech-label text-sm font-bold text-primary"
        >
          &lt;KM /&gt;
        </Link>

        <div className="flex flex-wrap items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </nav>
    </header>
  );
}
