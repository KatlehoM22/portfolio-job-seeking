type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="tech-label rounded-sm border border-transparent px-2 py-1 text-[0.72rem] font-semibold text-muted-foreground transition-all hover:border-border hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
    >
      {label}
    </a>
  );
}
