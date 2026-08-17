import type { HomeAction, IconItem, ImageAsset } from "@/content/pages/home";

export type HubsPageContent = {
  hero: { eyebrow: string; heading: string; statement: string; description: string; image: ImageAsset; primaryAction: HomeAction; secondaryAction: HomeAction };
  capabilityAreas: { items: IconItem[] };
  offer: { eyebrow: string; heading: string; description: string; facilities: string[]; action: HomeAction; image: ImageAsset };
  model: { eyebrow: string; heading: string; description: string; stages: IconItem[] };
  cta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const hubsPageContent: HubsPageContent = {
  hero: {
    eyebrow: "Our Hubs",
    heading: "Experience & Innovation Hub",
    statement: "Where Innovation Meets Impact.",
    description: "The Hub is the physical heart of FARMCLUB OS — a living environment for learning, testing, creating and scaling agricultural solutions.",
    image: { src: "/images/hubs/hubs-hero-innovation-greenhouse.png", alt: "People learning and collaborating around agricultural technology in a greenhouse." },
    primaryAction: { label: "Explore the Hub", href: "#capabilities" },
    secondaryAction: { label: "Book a Visit", href: "/contact" },
  },
  capabilityAreas: {
    items: [
      { title: "Learn", description: "Hands-on training, courses and capacity development in modern agriculture and entrepreneurship.", icon: "learn" },
      { title: "Innovate", description: "Test ideas, prototypes and new technologies in our innovation labs and demonstration facilities.", icon: "research" },
      { title: "Build", description: "Access tools, mentorship and resources to build and grow sustainable agri-enterprises.", icon: "build" },
      { title: "Connect", description: "Collaborate with experts, partners and peers to create solutions and unlock opportunities.", icon: "connect" },
      { title: "Impact", description: "Drive real-world impact through research, innovation and enterprise development.", icon: "impact" },
    ],
  },
  offer: {
    eyebrow: "What we offer",
    heading: "A Hub Designed for Transformation",
    description: "The Hub provides the environment, tools and expertise to turn ideas into viable solutions and thriving businesses.",
    facilities: [
      "Smart greenhouse & demonstration farm",
      "Innovation labs & prototyping space",
      "Training rooms & digital learning studio",
      "Co-working & entrepreneur support space",
      "Events, bootcamps & community programmes",
    ],
    action: { label: "Discover the Hub", href: "/contact" },
    image: { src: "/images/hubs/hubs-hero-innovation-greenhouse.png", alt: "A team working together inside the Experience and Innovation Hub greenhouse." },
  },
  model: {
    eyebrow: "Our impact goals",
    heading: "Building Today. Transforming Tomorrow.",
    description: "The Hub advances the same capability areas established across the FARMCLUB OS platform.",
    stages: [
      { title: "Learning & Capacity Building", description: "Practical training for modern agriculture and entrepreneurship.", icon: "learn" },
      { title: "Enterprise Development", description: "Tools, mentorship and resources for stronger agricultural businesses.", icon: "enterprise" },
      { title: "Innovation & Research", description: "Space to explore ideas, technology and practical solutions.", icon: "research" },
      { title: "Market Access", description: "Connections that help enterprises approach buyers, suppliers and opportunities.", icon: "market" },
      { title: "Impact Intelligence", description: "Responsible learning about progress, outcomes and ecosystem contribution.", icon: "impact" },
    ],
  },
  cta: {
    eyebrow: "Be part of the innovation",
    heading: "Join the Hub community.",
    description: "Access the tools, knowledge and network to grow your agricultural enterprise and impact.",
    primaryAction: { label: "Join the Hub", href: "/contact" },
    secondaryAction: { label: "Book a Visit", href: "/contact" },
  },
};
