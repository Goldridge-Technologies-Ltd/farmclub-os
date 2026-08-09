import type { HomeAction, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type HubsPageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset; action: HomeAction };
  purpose: { eyebrow: string; heading: string; description: string; statement: string };
  bridge: { eyebrow: string; heading: string; description: string; flow: NamedItem[] };
  framework: { eyebrow: string; heading: string; items: LabelledItem[] };
  capabilities: { eyebrow: string; heading: string; items: LabelledItem[] };
  model: { eyebrow: string; heading: string; description: string; stages: NamedItem[] };
  engines: { eyebrow: string; heading: string; links: NamedItem[] };
  cta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const hubsPageContent: HubsPageContent = {
  hero: {
    eyebrow: "Experience & Innovation Hubs",
    heading: "Where digital pathways meet practical agriculture.",
    description:
      "The Hub is the physical bridge between the FARMCLUB OS platform ecosystem and practical learning, demonstration, technology exposure, enterprise development and collaboration.",
    image: {
      src: "/images/hubs/hubs-hero-innovation-greenhouse.png",
      alt: "People learning and collaborating around agricultural technology in a greenhouse.",
    },
    action: { label: "Understand the Hub Model", href: "#hub-model" },
  },
  purpose: {
    eyebrow: "Purpose of the Hub",
    heading: "Turn connected knowledge into informed action.",
    description:
      "Digital learning can explain a concept. Practical experience helps people test understanding, observe systems, exchange knowledge and make better enterprise decisions. The Hub model is intended to make that connection visible and useful.",
    statement:
      "Not a conventional training centre. Not a farm-tourism destination. A practical interface for the wider FARMCLUB OS ecosystem.",
  },
  bridge: {
    eyebrow: "Digital ↔ physical",
    heading: "A continuous exchange between platform and practice.",
    description:
      "Participants can move from structured digital pathways into relevant physical experiences, then return insight and learning to the wider ecosystem.",
    flow: [
      { title: "Discover", description: "Find a pathway through the FARMCLUB OS digital ecosystem." },
      { title: "Experience", description: "Connect knowledge to demonstration and practical agricultural contexts." },
      { title: "Develop", description: "Use that exposure to shape capabilities, ideas and enterprise choices." },
      { title: "Share", description: "Bring learning back into collaboration and responsible ecosystem insight." },
    ],
  },
  framework: {
    eyebrow: "An organising framework",
    heading: "Learn. Create. Grow.",
    items: [
      { label: "Learn", title: "See knowledge in context", description: "Practical learning and demonstration help make agricultural concepts tangible.", badge: "L" },
      { label: "Create", title: "Explore better approaches", description: "Experimentation and technology exposure create room for applied innovation.", badge: "C" },
      { label: "Grow", title: "Strengthen enterprise capability", description: "Enterprise development connects practical insight to readiness and opportunity.", badge: "G" },
    ],
  },
  capabilities: {
    eyebrow: "What the model can support",
    heading: "A practical environment with several connected roles.",
    items: [
      { title: "Practical learning", description: "Experiences intended to reinforce structured knowledge and agricultural understanding.", badge: "PL" },
      { title: "Demonstration", description: "A framework for making relevant practices, systems and approaches observable.", badge: "DM" },
      { title: "Technology exposure", description: "Opportunities to encounter agricultural tools and technologies in context.", badge: "TE" },
      { title: "Experimentation", description: "Space for careful exploration around practical agricultural challenges.", badge: "EX" },
      { title: "Enterprise development", description: "Applied learning that can inform operating choices and business readiness.", badge: "ED" },
      { title: "Knowledge exchange", description: "Structured interaction between entrepreneurs, practitioners, institutions and innovators.", badge: "KE" },
    ],
  },
  model: {
    eyebrow: "Generic operating model",
    heading: "A Hub experience begins with purpose, not place.",
    description:
      "The public Hub model is organised around participant needs and platform pathways. It does not depend on publishing locations, rollout schedules or unsupported operating claims.",
    stages: [
      { title: "Identify a learning or enterprise need", description: "Begin with a clear question, capability gap or practical objective." },
      { title: "Match the relevant experience", description: "Connect the need to demonstration, exposure, collaboration or enterprise support." },
      { title: "Apply and exchange", description: "Use practical activity to build understanding and share relevant knowledge." },
      { title: "Reconnect to the platform", description: "Carry insight into further learning, enterprise pathways and impact intelligence." },
    ],
  },
  engines: {
    eyebrow: "Connected to the Four Engines",
    heading: "The Hub extends the platform. It does not sit beside it.",
    links: [
      { title: "FARMCLUB Academy", description: "Connects learning pathways to practical context." },
      { title: "FARMCLUB Connect", description: "Supports collaboration and knowledge exchange." },
      { title: "FARMCLUB Entrepreneur", description: "Relates practical insight to enterprise development." },
      { title: "FARMCLUB Impact", description: "Provides a framework for responsible learning and progress insight." },
    ],
  },
  cta: {
    eyebrow: "From platform to practice",
    heading: "Explore how the Hub fits into a wider agricultural ecosystem.",
    description: "Review the digital platform architecture or discuss responsible institutional engagement.",
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Discuss Collaboration", href: "/contact" },
  },
};
