type IconBadgeProps = {
  label: string;
  value?: string;
  tone?: "light" | "dark" | "gold";
  className?: string;
};

export function IconBadge({
  label,
  value,
  tone = "light",
  className,
}: IconBadgeProps) {
  const toneClass = {
    light: "border-farm-border bg-farm-green-100 text-farm-green-900",
    dark: "border-white/18 bg-white/10 text-white",
    gold: "border-farm-gold-400/50 bg-farm-gold-400 text-farm-green-950",
  }[tone];

  return (
    <span
      aria-label={label}
      className={[
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold",
        toneClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden="true">{value ?? label.slice(0, 2).toUpperCase()}</span>
    </span>
  );
}
