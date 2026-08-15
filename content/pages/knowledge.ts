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
    eyebrow: "Knowledge Centre",
    heading: "Knowledge. For Growth. For Impact.",
    description: "Your gateway to expert insights, practical tools, training resources and real-world stories that power agri-entrepreneurs and agribusinesses.",
    image: { src: "/images/knowledge/knowledge-centre-hero-learning-lab.png", alt: "Participants using digital tools during an agricultural learning session." },
    action: { label: "Explore Knowledge", href: "#coverage" },
  },
  introduction: {
    eyebrow: "Featured content",
    heading: "Practical knowledge for your journey.",
    description: "Explore learning resources designed to help agricultural entrepreneurs make informed decisions, build stronger enterprises and understand new opportunities.",
    editorialNote: "Content areas are organised around insights, practical tools, expert learning, research, stories and innovation.",
  },
  categories: {
    eyebrow: "Explore",
    heading: "Knowledge for every stage of the journey.",
    items: [
      { label: "Perspectives", title: "Articles & Insights", description: "Practical knowledge on agriculture, innovation and entrepreneurship.", badge: "AI" },
      { label: "Practical tools", title: "Guides & Toolkits", description: "Step-by-step resources to help you start, grow and scale.", badge: "GT" },
      { label: "Expert learning", title: "Videos & Webinars", description: "Learn from experts through live sessions and digital resources.", badge: "VW" },
      { label: "Evidence", title: "Research & Reports", description: "Data, trends and research to inform smarter decisions.", badge: "RR" },
      { label: "Real journeys", title: "Success Stories", description: "Stories from agri-entrepreneurs creating change in their communities.", badge: "SS" },
      { label: "New ideas", title: "Innovation Lab", description: "Ideas, experiments and solutions shaping the future of agriculture.", badge: "IL" },
    ],
  },
  libraryState: {
    eyebrow: "Latest knowledge",
    heading: "Knowledge for Your Journey",
    description: "The Knowledge Centre brings together practical learning across production, enterprise, innovation and growth.",
    reviewSteps: ["Learn the Basics", "Build & Grow", "Scale & Succeed", "Innovate & Lead"],
  },
  pathways: {
    eyebrow: "Learning paths",
    heading: "Grow Your Skills. Build Your Future.",
    items: [
      { title: "Start & Learn", description: "Agribusiness basics and the first steps in your entrepreneurial journey.", badge: "01" },
      { title: "Build & Grow", description: "Farm operations, business management and market development.", badge: "02" },
      { title: "Scale & Succeed", description: "Finance, enterprise growth and strategic partnerships.", badge: "03" },
      { title: "Innovate & Lead", description: "Innovation, technology, sustainability and leadership.", badge: "04" },
    ],
  },
  cta: {
    eyebrow: "Learn. Share. Grow Together.",
    heading: "Join a community building the future of food.",
    description: "Connect with agri-entrepreneurs, experts and innovators across the FARMCLUB OS ecosystem.",
    primaryAction: { label: "Join the Community", href: "/contact" },
    secondaryAction: { label: "Explore the Platform", href: "/platform" },
  },
};
