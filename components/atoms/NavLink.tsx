import Link from "next/link";
import type { IconType } from "react-icons";

type NavLinkProps = {
  href: string;
  label: string;
  icon?: IconType;
};

export function NavLink({ href, label, icon: Icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="tech-label inline-flex items-center gap-1.5 rounded-sm border border-transparent px-2 py-1 text-[0.72rem] font-semibold text-muted-foreground transition-all hover:border-border hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
    >
      {Icon ? <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> : null}
      {label}
    </Link>
  );
}
