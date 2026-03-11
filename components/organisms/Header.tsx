import Link from "next/link";
import { SITE } from "@/lib/constants";
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
    <header className="border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-[var(--space-page-x)] py-4"
        aria-label="Main navigation"
      >
        <Link
          href={ROUTES.home}
          className="tech-label rounded-sm border border-border/80 bg-surface-muted px-3 py-1.5 text-[0.72rem] font-bold text-foreground"
        >
          {SITE.name}
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
