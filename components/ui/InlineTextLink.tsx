import Link from "next/link";
import type { ReactNode } from "react";

type InlineTextLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
};

export function InlineTextLink({
  href,
  children,
  tone = "light",
}: InlineTextLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex text-sm font-semibold underline decoration-2 underline-offset-4 transition-colors",
        tone === "dark"
          ? "text-farm-gold-400 decoration-white/30 hover:text-white"
          : "text-farm-green-800 decoration-farm-gold-500 hover:text-farm-green-950",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
