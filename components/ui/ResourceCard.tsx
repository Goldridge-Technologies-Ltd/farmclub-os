import { CapabilityPill } from "@/components/ui/CapabilityPill";

type ResourceCardProps = {
  category: string;
  title: string;
  description: string;
};

export function ResourceCard({ category, title, description }: ResourceCardProps) {
  return (
    <article className="surface-panel p-5">
      <CapabilityPill>{category}</CapabilityPill>
      <h3 className="mt-5 text-xl font-semibold text-farm-green-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-farm-muted">{description}</p>
    </article>
  );
}
