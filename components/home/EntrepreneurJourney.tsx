import type { HomePageContent } from "@/content/pages/home";
import { SectionIntro } from "@/components/home/SectionIntro";

type EntrepreneurJourneyProps = {
  content: HomePageContent["journey"];
};

export function EntrepreneurJourney({ content }: EntrepreneurJourneyProps) {
  return (
    <section className="section-padding bg-farm-cream-100">
      <div className="site-container">
        <SectionIntro
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          align="center"
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {content.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-lg border border-farm-border bg-white p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-farm-green-900 text-sm font-semibold text-farm-gold-400">
                {step.badge ?? String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-farm-green-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-farm-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
