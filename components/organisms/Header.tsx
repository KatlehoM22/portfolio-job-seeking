import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { NavLink } from "@/components/atoms/NavLink";
import { FiCode, FiFileText, FiFolder, FiMail, FiUser } from "react-icons/fi";

const links = [
  { href: ROUTES.about, label: "About", icon: FiUser },
  { href: ROUTES.skills, label: "Skills", icon: FiCode },
  { href: ROUTES.projects, label: "Projects", icon: FiFolder },
  { href: ROUTES.cv, label: "CV", icon: FiFileText },
  { href: ROUTES.contact, label: "Contact", icon: FiMail },
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
            <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </div>
      </nav>
    </header>
  );
}
