"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigationAction, siteNavigation } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-farm-border bg-white text-farm-green-950 transition-colors hover:border-farm-green-700"
      >
        <span aria-hidden="true" className="grid gap-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-4 top-20 z-50 rounded-lg border border-farm-border bg-white p-4 shadow-[var(--shadow-soft)]"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="grid gap-1">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block rounded-md border-l-4 px-3 py-3 text-base font-semibold",
                      pathname === item.href
                        ? "border-farm-gold-500 bg-farm-green-100 text-farm-green-950"
                        : "border-transparent text-farm-charcoal hover:bg-farm-cream-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ButtonLink
                href={primaryNavigationAction.href}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                {primaryNavigationAction.label}
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
