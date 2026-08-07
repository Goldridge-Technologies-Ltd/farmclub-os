import type { HomePageContent } from "@/content/pages/home";
import { BulletList } from "@/components/ui/BulletList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

type InstitutionalEngagementProps = {
  content: HomePageContent["engagement"];
};

export function InstitutionalEngagement({
  content,
}: InstitutionalEngagementProps) {
  return (
    <section className="section-padding bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionLabel>{content.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-farm-green-950 sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-farm-muted">
            {content.description}
          </p>
          <div className="mt-8">
            <BulletList items={content.principles} />
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={content.primaryAction.href}>
              {content.primaryAction.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryAction.href} variant="secondary">
              {content.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
        <MediaFrame image={content.image} aspect="aspect-[4/3]" />
      </div>
    </section>
  );
}
