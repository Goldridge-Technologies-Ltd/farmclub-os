import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-farm-border bg-white/95 backdrop-blur">
      <div className="site-container relative flex min-h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="FARMCLUB OS home" className="block w-44 sm:w-52">
          <Logo variant="primary" priority />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
