type CapabilityPillProps = {
  children: string;
  tone?: "light" | "dark";
};

export function CapabilityPill({ children, tone = "light" }: CapabilityPillProps) {
  return (
    <span
      className={[
        "inline-flex rounded-full border px-4 py-2 text-sm font-semibold",
        tone === "dark"
          ? "border-white/18 bg-white/9 text-white"
          : "border-farm-border bg-white text-farm-green-950",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
