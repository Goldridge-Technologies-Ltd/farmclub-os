import type { HomeAction, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type InvestorsPageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset; primaryAction: HomeAction; secondaryAction: HomeAction };
  opportunity: { eyebrow: string; heading: string; description: string; tensions: string[] };
  thesis: { eyebrow: string; heading: string; statement: string; pillars: LabelledItem[] };
  model: { eyebrow: string; heading: string; description: string; layers: NamedItem[] };
  sustainability: { eyebrow: string; heading: string; principles: NamedItem[] };
  impact: { eyebrow: string; heading: string; description: string; areas: string[] };
  governance: { eyebrow: string; heading: string; principles: string[] };
  collaboration: { eyebrow: string; heading: string; items: LabelledItem[] };
  information: { eyebrow: string; heading: string; description: string; action: HomeAction };
};

export const investorsPageContent: InvestorsPageContent = {
  hero: {
    eyebrow: "For Investors",
    heading: "Investing in Africa's Digital Agricultural Infrastructure.",
    description: "FARMCLUB OS is building technology and an ecosystem that connects, equips and empowers the next generation of agri-entrepreneurs.",
    image: { src: "/images/investors/investors-hero-institutional-agritech.png", alt: "Institutional collaborators meeting in an agricultural technology environment." },
    primaryAction: { label: "Explore the Opportunity", href: "#strategic-thesis" },
    secondaryAction: { label: "Request Investor Access", href: "/contact" },
  },
  opportunity: {
    eyebrow: "The opportunity",
    heading: "A Real Problem. A Scalable Solution. A Transformative Impact.",
    description: "Agricultural entrepreneurs need better access to connected knowledge, enterprise support, finance, markets and practical innovation.",
    tensions: ["Knowledge and tools are difficult to navigate", "Enterprise support is often fragmented", "Innovation is disconnected from practical needs", "Market and finance pathways can be hard to access"],
  },
  thesis: {
    eyebrow: "Why now?",
    heading: "The Time Is Right. The Need Is Urgent.",
    statement: "FARMCLUB OS brings digital infrastructure and a practical ecosystem together to support agricultural entrepreneurship.",
    pillars: [
      { label: "Technology", title: "Digital platform", description: "A connected platform for learning, enterprise, opportunity and insight.", badge: "01" },
      { label: "Enterprise", title: "Entrepreneur support", description: "Tools and pathways that help agricultural enterprises build capability.", badge: "02" },
      { label: "Ecosystem", title: "Connected participation", description: "A shared environment for entrepreneurs, experts, institutions and markets.", badge: "03" },
      { label: "Impact", title: "Sustainable contribution", description: "Capability-led progress for enterprises and communities.", badge: "04" },
    ],
  },
  model: {
    eyebrow: "Why FARMCLUB OS?",
    heading: "A Platform Built for Scale and Sustainability.",
    description: "The model connects digital reach with practical experience, enterprise support and ecosystem collaboration.",
    layers: [
      { title: "Digital platform", description: "Connects learning, tools, relationships, markets and insight." },
      { title: "Experience & Innovation Hub", description: "Connects digital pathways to practical learning, testing and collaboration." },
      { title: "Enterprise ecosystem", description: "Brings entrepreneurs, experts, institutions and opportunities together." },
      { title: "Impact intelligence", description: "Supports responsible visibility into progress and learning." },
    ],
  },
  sustainability: {
    eyebrow: "Our competitive edge",
    heading: "Technology, Ecosystem and Purpose.",
    principles: [
      { title: "Technology at the core", description: "A digital platform designed around the complete agri-entrepreneur journey." },
      { title: "Digital and physical connection", description: "Online pathways reinforced by practical experience through the generic Hub model." },
      { title: "Enterprise focus", description: "Learning and innovation connected to viable agricultural enterprise." },
      { title: "Purpose with performance", description: "A model intended to combine sustainability with meaningful agricultural contribution." },
    ],
  },
  impact: {
    eyebrow: "Impact focus",
    heading: "Capability before unsupported numbers.",
    description: "Public impact communication focuses on the areas FARMCLUB OS is designed to strengthen.",
    areas: ["Learning & Capacity Building", "Enterprise Development", "Innovation & Research", "Market Access", "Impact Intelligence"],
  },
  governance: {
    eyebrow: "Execution discipline",
    heading: "Our Principles. Our Promise.",
    principles: ["Long-term value", "Transparency", "Accountability", "Sustainability", "Purpose and performance"],
  },
  collaboration: {
    eyebrow: "Governance you can trust",
    heading: "Strong Governance. Clear Accountability.",
    items: [
      { title: "Responsible leadership", description: "Clear stewardship of platform development and institutional engagement.", badge: "RL" },
      { title: "Structure & risk management", description: "Appropriate controls for growth, partnerships and information.", badge: "SR" },
      { title: "Impact & financial accountability", description: "Evidence-led reporting as verified information becomes available.", badge: "IA" },
      { title: "Standards & best practice", description: "A commitment to credible public claims and responsible governance.", badge: "SB" },
    ],
  },
  information: {
    eyebrow: "Request Investor Access",
    heading: "Let's Build the Future of Agriculture Together.",
    description: "Request the approved Investor Overview and connect with the FARMCLUB OS team. This public page does not publish financial projections, raise terms, traction figures or confidential plans.",
    action: { label: "Request Investor Access", href: "/contact" },
  },
};
