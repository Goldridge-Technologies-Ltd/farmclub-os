import type { HomePageContent } from "@/content/pages/home";
import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionIntro } from "@/components/home/SectionIntro";

type AudiencePathwaysProps = {
  content: HomePageContent["audiences"];
};

export function AudiencePathways({ content }: AudiencePathwaysProps) {
  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <SectionIntro
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          align="center"
        />
        <CardGrid columns="three" className="mt-12">
          {content.pathways.map((pathway) => (
            <FeatureCard
              key={pathway.title}
              title={pathway.title}
              description={pathway.description}
              label={pathway.label}
              badge={pathway.badge}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
