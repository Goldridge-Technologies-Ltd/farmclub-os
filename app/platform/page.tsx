import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StepJourney } from "@/components/ui/StepJourney";
import { platformPageContent as content } from "@/content/pages/platform";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the FARMCLUB OS platform modules and the connected agricultural enterprise operating model.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        heading={content.hero.heading}
        description={content.hero.description}
        image={content.hero.image}
        imagePosition="object-[64%_center]"
        primaryAction={content.hero.primaryAction}
        secondaryAction={content.hero.secondaryAction}
      />

      {/* Capability band */}
      <section className="bg-white pt-8">
        <div className="site-container">
          <ul className="grid gap-y-9 rounded-band bg-farm-green-900 px-6 py-11 text-white sm:grid-cols-2 sm:px-8 lg:grid-cols-6 lg:gap-y-0">
            {content.capabilityMap.items.map((item, index) => (
              <li
                key={item.title}
                className={[
                  "px-2 text-center",
                  index > 0 ? "lg:border-l lg:border-white/12" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-farm-gold-400/40 text-farm-gold-400">
                  <Icon name={item.icon} size={25} />
                </span>
                <h3 className="mt-4 text-base">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/62">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section
        id="how-it-works"
        className="section-padding scroll-mt-24 bg-white"
      >
        <div className="site-container">
          <div className="rounded-band border border-farm-border bg-farm-cream-50 px-6 py-11 sm:px-9 lg:grid lg:grid-cols-[0.72fr_2fr] lg:items-center lg:gap-10">
            <div>
              <SectionLabel>{content.journey.eyebrow}</SectionLabel>
              <h2 className="mt-3 text-[1.6rem] leading-tight text-farm-green-950 sm:text-[1.9rem]">
                {content.journey.heading}
              </h2>
              <p className="mt-4 text-sm leading-7 text-farm-muted">
                {content.journey.description}
              </p>
              <ButtonLink href={content.journey.action.href} className="mt-7">
                {content.journey.action.label}
              </ButtonLink>
            </div>
            <StepJourney
              steps={content.journey.steps}
              size="sm"
              className="mt-10 lg:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section
        id="modules"
        className="section-padding scroll-mt-24 bg-farm-cream-50"
      >
        <div className="site-container">
          <SectionIntro
            eyebrow={content.architecture.eyebrow}
            heading={content.architecture.heading}
            description={content.architecture.description}
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.architecture.modules.map((module) => (
              <article
                key={module.title}
                className="surface-card flex h-full flex-col p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-farm-green-700 text-white">
                    <Icon name={module.icon} size={22} />
                  </span>
                  <span className="text-sm font-bold text-farm-muted/45">
                    {module.badge}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-farm-gold-600">
                  {module.label}
                </p>
                <h3 className="mt-1.5 text-lg text-farm-green-950">
                  {module.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-farm-muted">
                  {module.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-farm-border pt-4">
                  {module.supports.map((support) => (
                    <li
                      key={support}
                      className="rounded-full bg-farm-green-50 px-3 py-1 text-xs font-medium text-farm-green-900"
                    >
                      {support}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section
        id="who-we-serve"
        className="section-padding scroll-mt-24 bg-white"
      >
        <div className="site-container">
          <SectionIntro
            eyebrow={content.useCases.eyebrow}
            heading={content.useCases.heading}
            align="center"
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.useCases.items.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                align="center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hub bridge */}
      <section className="bg-white pb-4">
        <div className="site-container">
          <div className="grid gap-9 rounded-band bg-farm-green-950 p-6 text-white sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <Image
                src={content.physicalBridge.image.src}
                alt={content.physicalBridge.image.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionLabel tone="dark">
                {content.physicalBridge.eyebrow}
              </SectionLabel>
              <h2 className="mt-3 text-[1.6rem] leading-tight sm:text-[2rem]">
                {content.physicalBridge.heading}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-white/72">
                {content.physicalBridge.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {content.physicalBridge.flow.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading={`${content.cta.eyebrow} ${content.cta.heading}`}
        description={content.cta.description}
        primaryAction={content.cta.primaryAction}
        secondaryAction={content.cta.secondaryAction}
        icon="platform"
      />
    </>
  );
}
