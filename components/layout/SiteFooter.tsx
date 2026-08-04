import Link from "next/link";
import { siteNavigation } from "@/lib/navigation";
import { Logo } from "@/components/ui/Logo";

export function SiteFooter() {
  return (
    <footer className="bg-farm-green-950 text-white">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Link href="/" aria-label="FARMCLUB OS home" className="block w-52">
              <Logo variant="reversed" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/76">
              CONNECT · EMPOWER · GROW
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white/82 transition-colors hover:text-farm-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/14 pt-6 text-sm text-white/64 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FARMCLUB OS. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-farm-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-farm-gold-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
