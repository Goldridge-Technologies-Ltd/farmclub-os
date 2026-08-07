type SectionLabelProps = {
  children: string;
  tone?: "light" | "dark" | "gold";
  className?: string;
};

export function SectionLabel({
  children,
  tone = "light",
  className,
}: SectionLabelProps) {
  const toneClass = {
    light: "text-farm-green-700",
    dark: "text-farm-gold-400",
    gold: "text-farm-gold-500",
  }[tone];

  return (
    <p
      className={[
        "text-sm font-semibold uppercase tracking-[0.18em]",
        toneClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
