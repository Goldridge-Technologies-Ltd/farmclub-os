import type { HomePageContent } from "@/content/pages/home";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ResourceCard } from "@/components/ui/ResourceCard";

type KnowledgePreviewProps = {
  content: HomePageContent["knowledge"];
};

export function KnowledgePreview({ content }: KnowledgePreviewProps) {
  return (
    <section className="section-padding bg-farm-cream-100">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <MediaFrame image={content.image} aspect="aspect-[4/3]" />
          <div>
            <SectionIntro
              eyebrow={content.eyebrow}
              heading={content.heading}
              description={content.description}
            />
            <div className="mt-8">
              <ButtonLink href={content.action.href} variant="secondary">
                {content.action.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              category={resource.label ?? "Upcoming"}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
