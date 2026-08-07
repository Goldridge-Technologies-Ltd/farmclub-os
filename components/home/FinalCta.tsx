import type { HomePageContent } from "@/content/pages/home";
import { CtaBand } from "@/components/ui/CtaBand";

type FinalCtaProps = {
  content: HomePageContent["finalCta"];
};

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <CtaBand
      eyebrow={content.eyebrow}
      heading={content.heading}
      description={content.description}
      primaryAction={content.primaryAction}
      secondaryAction={content.secondaryAction}
    />
  );
}
