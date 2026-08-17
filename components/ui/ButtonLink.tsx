import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

export type ButtonVariant =
  | "primary" // deep green fill — the default page action
  | "gold" // gold fill — investor / partnership emphasis
  | "secondary" // light surface with a green border
  | "outline-light" // transparent with a white border, for dark sections
  | "outline-gold" // transparent with a gold border, over photography
  | "text" // inline link with an arrow
  | "text-gold"; // inline link on a dark surface

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    variant?: ButtonVariant;
    /** Trailing glyph. Defaults to an arrow; "play" for video actions. */
    icon?: "arrow-right" | "play" | "none";
    size?: "md" | "lg";
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-farm-green-800 text-white hover:bg-farm-green-900",
  gold: "bg-farm-gold-500 text-farm-green-950 hover:bg-farm-gold-400",
  secondary:
    "border border-farm-border-strong bg-white text-farm-green-950 hover:border-farm-green-700 hover:bg-farm-cream-50",
  "outline-light":
    "border border-white/70 text-white hover:border-white hover:bg-white/10",
  // Sits over photography, so it carries a light scrim of its own to keep the
  // label legible against a bright frame.
  "outline-gold":
    "border border-farm-gold-500 bg-farm-green-950/40 text-white backdrop-blur-[2px] hover:bg-farm-gold-500 hover:text-farm-green-950",
  text: "text-farm-green-800 hover:text-farm-green-950",
  "text-gold": "text-farm-gold-400 hover:text-farm-gold-500",
};

export function ButtonLink({
  children,
  variant = "primary",
  icon = "arrow-right",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  const isText = variant === "text" || variant === "text-gold";

  const base = isText
    ? "group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
    : [
        "group inline-flex items-center justify-center gap-2.5 rounded-button font-semibold transition-all duration-200",
        size === "lg"
          ? "min-h-13 px-7 py-3.5 text-[0.95rem]"
          : "min-h-12 px-6 py-3 text-sm",
      ].join(" ");

  return (
    <Link
      className={[base, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span>{children}</span>
      {icon === "arrow-right" ? (
        <Icon
          name="arrow-right"
          size={isText ? 16 : 18}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
      {icon === "play" ? <Icon name="play" size={20} /> : null}
    </Link>
  );
}
