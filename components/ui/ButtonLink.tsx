import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    variant?: ButtonVariant;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-farm-green-900 text-white shadow-[var(--shadow-soft)] hover:bg-farm-green-800",
  secondary:
    "border border-farm-border bg-white text-farm-green-950 hover:border-farm-green-700 hover:bg-farm-cream-100",
  text: "px-0 text-farm-green-800 underline decoration-farm-gold-500 decoration-2 underline-offset-4 hover:text-farm-green-950",
};

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const baseClasses =
    variant === "text"
      ? "inline-flex items-center text-sm font-semibold transition-colors"
      : "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors";

  return (
    <Link
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}
