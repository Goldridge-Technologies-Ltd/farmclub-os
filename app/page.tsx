import type { Metadata } from "next";
import { AudiencePathways } from "@/components/home/AudiencePathways";
import { CaseForChange } from "@/components/home/CaseForChange";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { EntrepreneurJourney } from "@/components/home/EntrepreneurJourney";
import { FinalCta } from "@/components/home/FinalCta";
import { HeroSection } from "@/components/home/HeroSection";
import { HubsSection } from "@/components/home/HubsSection";
import { InstitutionalEngagement } from "@/components/home/InstitutionalEngagement";
import { KnowledgePreview } from "@/components/home/KnowledgePreview";
import { MissionCallout } from "@/components/home/MissionCallout";
import { PlatformEcosystem } from "@/components/home/PlatformEcosystem";
import { homePageContent } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "Agricultural Entrepreneurship & Innovation",
  description:
    "FARMCLUB OS connects learning, enterprise development, innovation and markets through one integrated platform.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FARMCLUB OS",
  description:
    "FARMCLUB OS connects learning, enterprise development, innovation and markets through one integrated platform.",
  url: "https://farmclub-os.com/",
  publisher: {
    "@type": "Organization",
    name: "FARMCLUB OS",
    logo: "https://farmclub-os.com/brand/primary-logo-horizontal.svg",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection content={homePageContent.hero} />
      <CapabilityStrip capabilities={homePageContent.capabilityStrip} />
      <CaseForChange content={homePageContent.caseForChange} />
      <MissionCallout content={homePageContent.mission} />
      <PlatformEcosystem content={homePageContent.ecosystem} />
      <EntrepreneurJourney content={homePageContent.journey} />
      <HubsSection content={homePageContent.hubs} />
      <AudiencePathways content={homePageContent.audiences} />
      <KnowledgePreview content={homePageContent.knowledge} />
      <InstitutionalEngagement content={homePageContent.engagement} />
      <FinalCta content={homePageContent.finalCta} />
    </>
  );
}
