import Image from "next/image";
import type { HomePageContent } from "@/content/pages/home";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HubsSectionProps = {
  content: HomePageContent["hubs"];
};

export function HubsSection({ content }: HubsSectionProps) {
  return (
    <section className="bg-farm-green-950 py-20 text-white sm:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-farm-gold-400">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            {content.statement}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {content.capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-lg border border-white/14 bg-white/7 p-5"
              >
                <h3 className="text-lg font-semibold text-farm-gold-400">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9">
            <ButtonLink href={content.action.href} variant="secondary">
              {content.action.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/5] min-h-[420px] overflow-hidden rounded-lg bg-farm-green-900">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-farm-green-950/55 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
