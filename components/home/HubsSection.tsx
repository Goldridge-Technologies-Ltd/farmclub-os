import type { HomePageContent } from "@/content/pages/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

type HubsSectionProps = {
  content: HomePageContent["hubs"];
};

export function HubsSection({ content }: HubsSectionProps) {
  return (
    <section className="section-padding bg-farm-green-950 text-white">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <MediaFrame
            image={content.image}
            aspect="aspect-[4/3]"
            objectPosition="object-center"
          />
          <div>
            <SectionLabel tone="dark">{content.eyebrow}</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              {content.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white">
              {content.statement}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              {content.description}
            </p>
            <div className="mt-8">
              <ButtonLink href={content.action.href} variant="gold">
                {content.action.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              badge={capability.badge}
              tone="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
