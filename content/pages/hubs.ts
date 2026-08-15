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
    eyebrow: "Our Hubs",
    heading: "Where Innovation Meets Impact.",
    description: "The Experience & Innovation Hub is the physical heart of FARMCLUB OS — a living environment for learning, testing, creating and scaling agricultural solutions.",
    image: { src: "/images/hubs/hubs-hero-innovation-greenhouse.png", alt: "People learning and collaborating around agricultural technology in a greenhouse." },
    action: { label: "Explore the Hub", href: "#hub-model" },
  },
  purpose: {
    eyebrow: "Experience & Innovation Hub",
    heading: "A Hub Designed for Transformation",
    description: "The Hub provides the environment, tools and expertise to turn ideas into viable solutions and thriving businesses.",
    statement: "A practical environment where entrepreneurs can learn, innovate, build and connect.",
  },
  bridge: {
    eyebrow: "What we offer",
    heading: "Learn. Innovate. Build. Connect.",
    description: "The Hub connects practical training, innovation facilities, enterprise resources and ecosystem relationships.",
    flow: [
      { title: "Learn", description: "Access training, courses and capacity development in modern agriculture and entrepreneurship." },
      { title: "Innovate", description: "Test ideas, technologies and solutions in innovation labs and practical facilities." },
      { title: "Build", description: "Access tools, mentorship and resources to build and grow a sustainable enterprise." },
      { title: "Connect", description: "Work with experts, partners and peers to create solutions and opportunities." },
    ],
  },
  framework: {
    eyebrow: "Experience. Innovate. Transform.",
    heading: "Practical support for agricultural enterprise.",
    items: [
      { label: "Learn", title: "Build practical capability", description: "Connect agricultural knowledge with training and demonstration.", badge: "L" },
      { label: "Innovate", title: "Test better solutions", description: "Explore ideas, technology and prototypes in a practical setting.", badge: "I" },
      { label: "Build", title: "Grow viable enterprises", description: "Use tools, mentorship and support to strengthen agricultural businesses.", badge: "B" },
    ],
  },
  capabilities: {
    eyebrow: "A Hub designed for transformation",
    heading: "Environment, tools and expertise in one place.",
    items: [
      { title: "Smart greenhouse & demonstration farm", description: "A practical setting for modern agricultural learning and demonstration.", badge: "SG" },
      { title: "Innovation labs & prototyping space", description: "Facilities for exploring, testing and refining agricultural solutions.", badge: "IL" },
      { title: "Training rooms & digital studio", description: "Spaces for courses, capacity development and digital learning.", badge: "TR" },
      { title: "Coworking & entrepreneur support space", description: "A working environment for mentorship, collaboration and enterprise support.", badge: "CW" },
      { title: "Events, bootcamps & community programmes", description: "Shared programmes for learning, exchange and ecosystem participation.", badge: "EV" },
    ],
  },
  model: {
    eyebrow: "Building today. Transforming tomorrow.",
    heading: "A practical model for sustainable impact.",
    description: "The Hub supports the same capability areas established across the FARMCLUB OS platform without publishing unverified targets or proposed locations.",
    stages: [
      { title: "Learning & Capacity Building", description: "Practical training for modern agriculture and entrepreneurship." },
      { title: "Enterprise Development", description: "Tools, mentorship and resources for stronger agricultural businesses." },
      { title: "Innovation & Research", description: "Space to explore ideas, technology and practical solutions." },
      { title: "Market Access", description: "Connections that help enterprises approach buyers, suppliers and opportunities." },
      { title: "Impact Intelligence", description: "Responsible learning about progress, outcomes and ecosystem contribution." },
    ],
  },
  engines: {
    eyebrow: "Our impact focus",
    heading: "The Hub strengthens entrepreneurs and communities.",
    links: [
      { title: "Entrepreneur capability", description: "Build knowledge, practical skills and confidence." },
      { title: "Inclusive participation", description: "Create pathways for young people and women to participate." },
      { title: "Enterprise support", description: "Help agricultural businesses build stronger foundations." },
      { title: "Innovation", description: "Advance practical learning, research and enterprise-led solutions." },
      { title: "Communities", description: "Strengthen local knowledge, collaboration and economic participation." },
    ],
  },
  cta: {
    eyebrow: "Be part of the innovation",
    heading: "Join the Hub community.",
    description: "Access the tools, knowledge and network to grow your agricultural enterprise and impact.",
    primaryAction: { label: "Join the Hub", href: "/contact" },
    secondaryAction: { label: "Explore the Platform", href: "/platform" },
  },
};
