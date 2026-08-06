import Image from "next/image";
import type { HomePageContent } from "@/content/pages/home";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeroSectionProps = {
  content: HomePageContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="overflow-hidden bg-farm-cream-50">
      <div className="site-container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-farm-green-700">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-normal text-farm-green-950 sm:text-6xl lg:text-7xl">
            {content.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-farm-muted sm:text-xl">
            {content.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={content.primaryAction.href}>
              {content.primaryAction.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryAction.href} variant="secondary">
              {content.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-farm-green-900 shadow-[var(--shadow-soft)] sm:min-h-[470px] lg:min-h-[620px]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-farm-green-950/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="max-w-sm rounded-md border border-white/18 bg-farm-green-950/88 p-4 text-white backdrop-blur">
              <p className="text-sm font-semibold text-farm-gold-400">
                Integrated platform ecosystem
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Learning, enterprise development, innovation and market access in one connected experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
