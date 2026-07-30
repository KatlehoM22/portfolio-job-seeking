"use client";

import { NavLink } from "@/components/atoms/NavLink";
import { NAV_LINKS } from "@/lib/navigation";

export function DesktopNavigation() {
  return (
    <div className="site-desktop-nav flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </div>
  );
}
