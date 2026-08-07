import type { HomePageContent } from "@/content/pages/home";
import { PageHero } from "@/components/ui/PageHero";

type HeroSectionProps = {
  content: HomePageContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <PageHero
      eyebrow={content.eyebrow}
      heading={content.heading}
      description={content.description}
      primaryAction={content.primaryAction}
      secondaryAction={content.secondaryAction}
      image={content.image}
      imageCaption={content.imageCaption}
      supportItems={content.supportItems}
    />
  );
}
