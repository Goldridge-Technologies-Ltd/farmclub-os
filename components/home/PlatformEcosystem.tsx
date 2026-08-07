import type { HomePageContent } from "@/content/pages/home";
import { CapabilityPill } from "@/components/ui/CapabilityPill";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionIntro } from "@/components/home/SectionIntro";

type PlatformEcosystemProps = {
  content: HomePageContent["ecosystem"];
};

export function PlatformEcosystem({ content }: PlatformEcosystemProps) {
  return (
    <section id="farmclub-ecosystem" className="section-padding bg-white">
      <div className="site-container">
        <SectionIntro
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg bg-farm-green-950 p-6 text-white sm:p-8">
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-full border border-white/14 bg-white/8 px-8 py-10 text-center">
              <IconBadge label={content.core.title} value="OS" tone="gold" />
              <h3 className="mt-5 text-3xl font-semibold">{content.core.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/76">
                {content.core.description}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {content.supportingCapabilities.map((capability) => (
                <CapabilityPill key={capability} tone="dark">
                  {capability}
                </CapabilityPill>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.engines.map((engine) => (
              <FeatureCard
                key={engine.title}
                title={engine.title}
                description={engine.description}
                label={engine.label}
                badge={engine.badge}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
