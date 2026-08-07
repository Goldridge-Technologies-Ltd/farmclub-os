import type { ReactNode } from "react";
import { IconBadge } from "@/components/ui/IconBadge";

type FeatureCardProps = {
  title: string;
  description: string;
  label?: string;
  badge?: string;
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function FeatureCard({
  title,
  description,
  label,
  badge,
  tone = "light",
  children,
}: FeatureCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={[
        "rounded-lg p-5 transition duration-200",
        isDark
          ? "dark-panel text-white hover:bg-white/10"
          : "surface-panel text-farm-charcoal hover:-translate-y-0.5 hover:border-farm-green-700/40",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <IconBadge label={title} value={badge} tone={isDark ? "dark" : "light"} />
        <div>
          {label ? (
            <p
              className={[
                "text-xs font-semibold uppercase tracking-[0.16em]",
                isDark ? "text-farm-gold-400" : "text-farm-green-700",
              ].join(" ")}
            >
              {label}
            </p>
          ) : null}
          <h3
            className={[
              "text-xl font-semibold",
              isDark ? "text-white" : "text-farm-green-950",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>
      </div>
      <p
        className={[
          "mt-4 text-sm leading-7",
          isDark ? "text-white/76" : "text-farm-muted",
        ].join(" ")}
      >
        {description}
      </p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
