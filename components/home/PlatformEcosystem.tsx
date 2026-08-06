import Image from "next/image";
import type { HomePageContent } from "@/content/pages/home";
import { SectionIntro } from "@/components/home/SectionIntro";

type PlatformEcosystemProps = {
  content: HomePageContent["platform"];
};

export function PlatformEcosystem({ content }: PlatformEcosystemProps) {
  return (
    <section id="platform-ecosystem" className="bg-white py-20 sm:py-28">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <SectionIntro
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-farm-green-900">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-lg border border-farm-border bg-farm-cream-50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-farm-green-900 text-lg font-semibold text-farm-gold-400">
                {capability.title.slice(0, 1)}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-farm-green-950">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-farm-muted">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
