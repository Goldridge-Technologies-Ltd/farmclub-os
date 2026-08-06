type SectionIntroProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionIntro({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "light",
}: SectionIntroProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={[
          "text-sm font-semibold uppercase tracking-[0.18em]",
          isDark ? "text-farm-gold-400" : "text-farm-green-700",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-farm-green-950",
        ].join(" ")}
      >
        {heading}
      </h2>
      {description ? (
        <p
          className={[
            "mt-5 text-base leading-8 sm:text-lg",
            isDark ? "text-white/76" : "text-farm-muted",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
