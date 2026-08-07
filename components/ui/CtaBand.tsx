import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { HomeAction } from "@/content/pages/home";

type CtaBandProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  primaryAction: HomeAction;
  secondaryAction?: HomeAction;
  tone?: "dark" | "light";
};

export function CtaBand({
  eyebrow,
  heading,
  description,
  primaryAction,
  secondaryAction,
  tone = "dark",
}: CtaBandProps) {
  const isDark = tone === "dark";

  return (
    <section className={isDark ? "bg-farm-cream-100 py-10" : "bg-white py-10"}>
      <div className="site-container">
        <div
          className={[
            "grid gap-8 rounded-lg px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12",
            isDark
              ? "bg-farm-green-900 text-white"
              : "border border-farm-border bg-farm-cream-50 text-farm-green-950",
          ].join(" ")}
        >
          <div>
            {eyebrow ? (
              <SectionLabel tone={isDark ? "dark" : "light"}>{eyebrow}</SectionLabel>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              {heading}
            </h2>
            <p
              className={[
                "mt-4 max-w-2xl text-base leading-8",
                isDark ? "text-white/76" : "text-farm-muted",
              ].join(" ")}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={primaryAction.href} variant={isDark ? "gold" : "primary"}>
              {primaryAction.label}
            </ButtonLink>
            {secondaryAction ? (
              <ButtonLink href={secondaryAction.href} variant={isDark ? "dark" : "secondary"}>
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
