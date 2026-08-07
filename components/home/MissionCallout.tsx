import type { HomePageContent } from "@/content/pages/home";
import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

type MissionCalloutProps = {
  content: HomePageContent["mission"];
};

export function MissionCallout({ content }: MissionCalloutProps) {
  return (
    <section className="bg-farm-cream-100 py-12">
      <div className="site-container">
        <div className="surface-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.3fr] lg:p-10">
          <div>
            <SectionLabel>{content.eyebrow}</SectionLabel>
            <p className="mt-4 text-2xl font-semibold leading-9 text-farm-green-950 sm:text-3xl">
              {content.statement}
            </p>
            <p className="mt-5 text-base leading-8 text-farm-muted">
              {content.supportingText}
            </p>
          </div>
          <CardGrid columns="three">
            {content.pillars.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
                label={pillar.label}
                badge={pillar.badge}
              />
            ))}
          </CardGrid>
        </div>
      </div>
    </section>
  );
}
