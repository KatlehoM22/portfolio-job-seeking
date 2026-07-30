import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { DesktopNavigation } from "@/components/organisms/DesktopNavigation";
import { MobileNavigation } from "@/components/organisms/MobileNavigation";

export function Header() {
  return (
    <header className="site-header border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <nav
        className="flex w-full items-center justify-between px-[var(--space-page-x)] py-5"
        aria-label="Main navigation"
      >
        <Link
          href={ROUTES.home}
          className="brand-mark tech-label text-sm font-bold text-primary"
        >
          &lt;KM /&gt;
        </Link>

        <DesktopNavigation />

        <MobileNavigation />
      </nav>
    </header>
  );
}
