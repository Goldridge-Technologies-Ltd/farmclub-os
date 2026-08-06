import Image from "next/image";
import type { HomePageContent } from "@/content/pages/home";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";

type KnowledgePreviewProps = {
  content: HomePageContent["knowledge"];
};

export function KnowledgePreview({ content }: KnowledgePreviewProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-farm-green-900 lg:order-first">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionIntro
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {content.points.map((point) => (
              <li
                key={point}
                className="rounded-md border border-farm-border bg-farm-cream-50 px-4 py-3 text-sm font-semibold text-farm-green-950"
              >
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={content.action.href} variant="text">
              {content.action.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
