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
    eyebrow: "Investors & institutional engagement",
    heading: "Infrastructure for a more connected agricultural enterprise ecosystem.",
    description: "FARMCLUB OS presents a platform-led thesis that connects digital coordination, practical agricultural experience, commercial sustainability and responsible impact.",
    image: { src: "/images/investors/investors-hero-institutional-agritech.png", alt: "Institutional collaborators meeting in an agricultural technology environment." },
    primaryAction: { label: "Review the Strategic Thesis", href: "#strategic-thesis" },
    secondaryAction: { label: "Request Approved Information", href: "/contact" },
  },
  opportunity: {
    eyebrow: "The structural opportunity",
    heading: "Agricultural enterprise needs connective infrastructure.",
    description: "The sector brings together capable people, practical knowledge, institutions, technologies and markets. Their value is often constrained when support remains fragmented or difficult to navigate.",
    tensions: ["Knowledge without a next pathway", "Enterprise ambition without coordinated support", "Innovation separated from practical context", "Institutional activity without shared visibility"],
  },
  thesis: {
    eyebrow: "Strategic thesis",
    heading: "Coordinate the ecosystem, then strengthen the pathways through it.",
    statement: "FARMCLUB OS is designed as an organising layer for agricultural entrepreneurship rather than a single programme, facility or software feature.",
    pillars: [
      { label: "Digital", title: "Platform coordination", description: "A shared architecture for participation, learning, enterprise pathways and insight.", badge: "01" },
      { label: "Physical", title: "Practical interface", description: "The Hub model connects digital pathways to demonstration, exposure and collaboration.", badge: "02" },
      { label: "Enterprise", title: "Sustainable participation", description: "Enterprise development keeps the model connected to commercial capability and resilience.", badge: "03" },
      { label: "Impact", title: "Responsible intelligence", description: "A framework for clearer learning, progress visibility and better decisions.", badge: "04" },
    ],
  },
  model: {
    eyebrow: "Digital + physical model",
    heading: "Two interfaces, one operating logic.",
    description: "The digital platform organises pathways and relationships. The physical Hub model supports practical experience. Together they create continuity between information and action.",
    layers: [
      { title: "Digital platform", description: "Coordinates learning, connection, enterprise support and impact intelligence." },
      { title: "Experience & Innovation Hub", description: "Provides a framework for practical exposure, demonstration and knowledge exchange." },
      { title: "Ecosystem participation", description: "Creates clearer routes for entrepreneurs, institutions and collaborators to engage." },
    ],
  },
  sustainability: {
    eyebrow: "Commercial sustainability",
    heading: "Principles before projections.",
    principles: [
      { title: "Diversified platform value", description: "The model is intended to create value across learning, enterprise and institutional participation rather than depend on one activity." },
      { title: "Responsible growth", description: "Expansion should follow validated capability and appropriate governance, not unsupported public promises." },
      { title: "Operational discipline", description: "Digital and physical activity should be connected through a clear operating model." },
      { title: "Mission alignment", description: "Commercial sustainability and practical agricultural contribution should reinforce one another." },
    ],
  },
  impact: {
    eyebrow: "Intended impact orientation",
    heading: "Focus on capability and ecosystem quality, not unverified numbers.",
    description: "FARMCLUB OS is intended to support stronger pathways across the agricultural enterprise journey. Public reporting should emerge from responsible evidence as the platform develops.",
    areas: ["Learning & Capacity Building", "Enterprise Development", "Innovation & Research", "Market Access", "Impact Intelligence"],
  },
  governance: {
    eyebrow: "Engagement principles",
    heading: "Institutional credibility depends on clear boundaries.",
    principles: ["Make only approved public claims", "Protect confidential strategy and commercial information", "Define collaboration before implying commitment", "Use appropriate governance for information and participation", "Build evidence before reporting impact"],
  },
  collaboration: {
    eyebrow: "Potential institutional collaboration",
    heading: "Structured conversations around relevant roles.",
    items: [
      { title: "Strategic institutions", description: "Explore alignment around agricultural entrepreneurship and ecosystem coordination.", badge: "SI" },
      { title: "Learning & research organisations", description: "Discuss approved knowledge, applied learning and responsible research pathways.", badge: "LR" },
      { title: "Industry & technology collaborators", description: "Consider relevant expertise, tools and practical innovation contexts.", badge: "IT" },
      { title: "Capital partners", description: "Request approved public information and establish an appropriate route for further review.", badge: "CP" },
    ],
  },
  information: {
    eyebrow: "Approved information route",
    heading: "Continue the conversation through a controlled information pathway.",
    description: "This page is a public strategic overview, not an investment prospectus. Financial projections, ownership details, raise terms and confidential plans are not published here.",
    action: { label: "Request Investor Information", href: "/contact" },
  },
};
