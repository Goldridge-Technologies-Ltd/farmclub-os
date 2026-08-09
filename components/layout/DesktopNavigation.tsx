"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigationAction, siteNavigation } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
      <ul className="flex items-center gap-6">
        {siteNavigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={[
                "border-b-2 py-2 text-sm font-semibold transition-colors",
                pathname === item.href
                  ? "border-farm-gold-500 text-farm-green-800"
                  : "border-transparent text-farm-charcoal hover:text-farm-green-700",
              ].join(" ")}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ButtonLink href={primaryNavigationAction.href}>
        {primaryNavigationAction.label}
      </ButtonLink>
    </nav>
  );
}
