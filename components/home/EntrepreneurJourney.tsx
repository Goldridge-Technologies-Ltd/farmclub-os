import type { HomePageContent } from "@/content/pages/home";
import { SectionIntro } from "@/components/home/SectionIntro";

type EntrepreneurJourneyProps = {
  content: HomePageContent["journey"];
};

export function EntrepreneurJourney({ content }: EntrepreneurJourneyProps) {
  return (
    <section className="bg-farm-cream-100 py-20 sm:py-28">
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
              className="rounded-lg border border-farm-border bg-white p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-farm-gold-400 text-sm font-semibold text-farm-green-950">
                {index + 1}
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
