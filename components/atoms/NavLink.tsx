"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";

type NavLinkProps = {
  href: string;
  label: string;
  icon?: IconType;
};

export function NavLink({ href, label, icon: Icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`nav-link${isActive ? " nav-link-active" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {Icon ? <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> : null}
      {label}
    </Link>
  );
}
