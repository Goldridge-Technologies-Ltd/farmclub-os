import { ButtonLink } from "@/components/ui/ButtonLink";
import { CapabilityPill } from "@/components/ui/CapabilityPill";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { HomeAction, ImageAsset } from "@/content/pages/home";

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryAction: HomeAction;
  secondaryAction?: HomeAction;
  image: ImageAsset;
  imageCaption?: string;
  supportItems?: string[];
};

export function PageHero({
  eyebrow,
  heading,
  description,
  primaryAction,
  secondaryAction,
  image,
  imageCaption,
  supportItems = [],
}: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-farm-cream-50">
      <div className="site-container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
        <div className="content-narrow">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-normal text-farm-green-950 sm:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-farm-muted sm:text-xl">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
            {secondaryAction ? (
              <ButtonLink href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
          {supportItems.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {supportItems.map((item) => (
                <CapabilityPill key={item}>{item}</CapabilityPill>
              ))}
            </div>
          ) : null}
        </div>
        <MediaFrame
          image={image}
          aspect="min-h-[360px] sm:min-h-[480px] lg:min-h-[620px]"
          priority
          objectPosition="object-[56%_center]"
          caption={imageCaption}
        />
      </div>
    </section>
  );
}
