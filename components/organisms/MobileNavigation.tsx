"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/navigation";
import { ROUTES } from "@/lib/routes";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="site-mobile-actions" ref={containerRef}>
      <Link href={ROUTES.cv} className="mobile-cv-action">
        CV
      </Link>
      <button
        ref={buttonRef}
        type="button"
        className="mobile-nav-toggle"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <FiX className="h-5 w-5" aria-hidden="true" />
        ) : (
          <FiMenu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation-menu"
          className="mobile-nav-panel"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                ref={link.href === NAV_LINKS[0].href ? firstLinkRef : undefined}
                href={link.href}
                className={`mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
