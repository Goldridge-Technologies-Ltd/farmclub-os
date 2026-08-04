import Link from "next/link";
import { primaryNavigationAction, siteNavigation } from "@/lib/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
      <ul className="flex items-center gap-6">
        {siteNavigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-semibold text-farm-charcoal transition-colors hover:text-farm-green-700"
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
