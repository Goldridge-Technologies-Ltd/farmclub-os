import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { IconDisc } from "@/components/ui/IconDisc";
import type { DiscTone } from "@/components/ui/IconDisc";
import type { IconName } from "@/components/ui/Icon";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: IconName;
  tone?: DiscTone;
  label?: string;
  /** Centred cards are used in icon grids; left-aligned in content grids. */
  align?: "left" | "center";
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  tone = "green",
  label,
  align = "left",
  href,
  linkLabel = "Explore",
  className,
}: FeatureCardProps) {
  const isCenter = align === "center";

  return (
    <article
      className={[
        "surface-card flex h-full flex-col p-6 sm:p-7",
        isCenter ? "items-center text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? <IconDisc name={icon} tone={tone} /> : null}
      {label ? (
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-farm-gold-600">
          {label}
        </p>
      ) : null}
      <h3
        className={[
          "text-lg text-farm-green-950",
          icon && !label ? "mt-5" : label ? "mt-2" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-7 text-farm-muted">{description}</p>
      {href ? (
        <Link
          href={href}
          className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-farm-green-800 transition-colors hover:text-farm-green-950"
        >
          {linkLabel}
          <Icon
            name="arrow-right"
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      ) : null}
    </article>
  );
}
