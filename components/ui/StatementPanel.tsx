type StatementPanelProps = {
  eyebrow?: string;
  statement: string;
  supportingText?: string;
  tone?: "light" | "dark";
};

export function StatementPanel({
  eyebrow,
  statement,
  supportingText,
  tone = "light",
}: StatementPanelProps) {
  const isDark = tone === "dark";

  return (
    <aside
      className={[
        "rounded-lg p-6",
        isDark
          ? "border border-white/14 bg-white/8 text-white"
          : "border border-farm-border bg-farm-cream-100 text-farm-green-950",
      ].join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "text-xs font-semibold uppercase tracking-[0.16em]",
            isDark ? "text-farm-gold-400" : "text-farm-green-700",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <p className="mt-3 text-xl font-semibold leading-8">{statement}</p>
      {supportingText ? (
        <p className={["mt-4 text-sm leading-7", isDark ? "text-white/74" : "text-farm-muted"].join(" ")}>
          {supportingText}
        </p>
      ) : null}
    </aside>
  );
}
