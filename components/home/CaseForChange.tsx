import type { HomePageContent } from "@/content/pages/home";
import { BulletList } from "@/components/ui/BulletList";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatementPanel } from "@/components/ui/StatementPanel";

type CaseForChangeProps = {
  content: HomePageContent["caseForChange"];
};

export function CaseForChange({ content }: CaseForChangeProps) {
  return (
    <section className="section-padding bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <div className="content-wide">
          <SectionLabel>{content.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-farm-green-950 sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-farm-muted">
            {content.description}
          </p>
        </div>
        <div className="grid gap-6">
          <BulletList items={content.bullets} />
          <StatementPanel
            eyebrow={content.callout.eyebrow}
            statement={content.callout.statement}
            supportingText={content.callout.supportingText}
          />
        </div>
      </div>
    </section>
  );
}
