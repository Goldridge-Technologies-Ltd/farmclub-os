import type { HomeAction, ImageAsset, LabelledItem } from "@/content/pages/home";

export type KnowledgePageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset; action: HomeAction };
  introduction: { eyebrow: string; heading: string; description: string; editorialNote: string };
  categories: { eyebrow: string; heading: string; items: LabelledItem[] };
  libraryState: { eyebrow: string; heading: string; description: string; reviewSteps: string[] };
  pathways: { eyebrow: string; heading: string; items: LabelledItem[] };
  cta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const knowledgePageContent: KnowledgePageContent = {
  hero: {
    eyebrow: "FARMCLUB Knowledge Centre",
    heading: "Useful agricultural knowledge, organised for action.",
    description: "A growing public library designed to bring together clear explainers, enterprise resources, research categories and approved ecosystem learning.",
    image: { src: "/images/knowledge/knowledge-centre-hero-learning-lab.png", alt: "Participants using digital tools during an agricultural learning session." },
    action: { label: "Explore the Coverage", href: "#coverage" },
  },
  introduction: {
    eyebrow: "A publication platform in development",
    heading: "Credibility begins with publishing only what is ready.",
    description: "The Knowledge Centre architecture is prepared for a reviewed content library. Resources will be added as approved material becomes available, with clear categories that can later connect to a content-management system.",
    editorialNote: "No articles, authors, reports or publication dates are shown until approved resources exist.",
  },
  categories: {
    eyebrow: "Coverage",
    heading: "The areas this knowledge library will cover.",
    items: [
      { label: "Perspectives", title: "Insights", description: "Clear perspectives on agricultural enterprise, innovation and ecosystem coordination.", badge: "IN" },
      { label: "Practical learning", title: "Guides & Explainers", description: "Accessible resources intended to make important ideas easier to understand and apply.", badge: "GE" },
      { label: "Evidence", title: "Research & Reports", description: "A home for reviewed evidence and approved institutional knowledge when available.", badge: "RR" },
      { label: "Enterprise", title: "Agricultural Enterprise Resources", description: "Materials designed to support planning, capability and enterprise readiness.", badge: "AE" },
      { label: "Ecosystem", title: "Ecosystem Stories", description: "Approved stories that can share relevant learning without inventing outcomes or case studies.", badge: "ES" },
      { label: "Product", title: "Platform Updates", description: "Public communication about approved FARMCLUB OS developments.", badge: "PU" },
    ],
  },
  libraryState: {
    eyebrow: "Current library status",
    heading: "Resources are being prepared.",
    description: "Reviewed resources will be added here. The initial release presents the editorial structure honestly rather than filling the library with fictional publications.",
    reviewSteps: ["Prepare", "Review", "Approve", "Publish"],
  },
  pathways: {
    eyebrow: "Built for different reading needs",
    heading: "Start with the kind of understanding you need.",
    items: [
      { title: "Understand a concept", description: "Use explainers and insights to build a clear foundation.", badge: "01" },
      { title: "Strengthen an enterprise", description: "Find practical resources aligned with enterprise development.", badge: "02" },
      { title: "Explore evidence", description: "Review approved research and institutional material when published.", badge: "03" },
      { title: "Follow the ecosystem", description: "Read approved stories and platform updates as the library grows.", badge: "04" },
    ],
  },
  cta: {
    eyebrow: "Knowledge connected to a wider system",
    heading: "See where learning sits inside FARMCLUB OS.",
    description: "Explore the platform architecture or contact us about contributing approved knowledge in the future.",
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Contact FARMCLUB OS", href: "/contact" },
  },
};
