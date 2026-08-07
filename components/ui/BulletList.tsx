type BulletListProps = {
  items: string[];
  tone?: "light" | "dark";
};

export function BulletList({ items, tone = "light" }: BulletListProps) {
  const textClass = tone === "dark" ? "text-white/78" : "text-farm-muted";
  const markerClass = tone === "dark" ? "bg-farm-gold-400" : "bg-farm-green-800";

  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 text-sm leading-7 ${textClass}`}>
          <span
            aria-hidden="true"
            className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${markerClass}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
