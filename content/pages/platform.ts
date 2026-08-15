import type { HomeAction, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type PlatformPageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset; primaryAction: HomeAction; secondaryAction: HomeAction };
  concept: { eyebrow: string; heading: string; description: string; principles: string[] };
  architecture: { eyebrow: string; heading: string; description: string; core: NamedItem; engines: (LabelledItem & { supports: string[] })[] };
  capabilityMap: { eyebrow: string; heading: string; items: LabelledItem[] };
  journey: { eyebrow: string; heading: string; description: string; steps: LabelledItem[] };
  useCases: { eyebrow: string; heading: string; items: LabelledItem[] };
  physicalBridge: { eyebrow: string; heading: string; description: string; image: ImageAsset; flow: string[] };
  cta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const platformPageContent: PlatformPageContent = {
  hero: {
    eyebrow: "Our Platform",
    heading: "One Platform. Complete Ecosystem.",
    description: "FARMCLUB OS brings every part of the agri-entrepreneur journey together — learning, enterprise development, innovation, financing and market access — on one seamless digital platform.",
    image: { src: "/images/platform/platform-hero-digital-operations.png", alt: "Agricultural professionals using digital tools to coordinate operations." },
    primaryAction: { label: "Explore the Platform", href: "#four-engines" },
    secondaryAction: { label: "Watch Overview", href: "#four-engines" },
  },
  concept: {
    eyebrow: "How it works",
    heading: "Your Platform. Your Journey.",
    description: "FARMCLUB OS is designed to take you from where you are to where you want to be.",
    principles: ["Learn through courses, training and expert knowledge", "Build your skills and enterprise", "Innovate with ideas, research and technology", "Connect to buyers, suppliers and new markets"],
  },
  architecture: {
    eyebrow: "Platform modules",
    heading: "Everything You Need. All in One Place.",
    description: "Learning, enterprise tools, innovation, finance, networks and impact support work together in one platform ecosystem.",
    core: { title: "FARMCLUB OS", description: "One connected digital platform for the complete agri-entrepreneur journey." },
    engines: [
      { label: "Learn", title: "Learning & Development", description: "Interactive courses, live training and practical resources.", badge: "01", supports: ["Courses", "Training", "Expert knowledge"] },
      { label: "Build", title: "Enterprise Management", description: "Business planning, mentorship and enterprise support.", badge: "02", supports: ["Business tools", "Mentorship", "Enterprise support"] },
      { label: "Innovate", title: "Innovation & Research", description: "Ideas, prototypes, research and agricultural technology.", badge: "03", supports: ["Research", "Prototypes", "Technology"] },
      { label: "Finance", title: "Finance & Market Access", description: "Finance pathways, buyers, suppliers and market opportunities.", badge: "04", supports: ["Finance readiness", "Buyers", "Markets"] },
      { label: "Connect", title: "Community & Network", description: "Entrepreneurs, experts, partners and institutions in one ecosystem.", badge: "05", supports: ["Community", "Experts", "Partners"] },
      { label: "Impact", title: "Impact & Analytics", description: "Tools for understanding progress, outcomes and contribution.", badge: "06", supports: ["Progress", "Outcomes", "Insight"] },
    ],
  },
  capabilityMap: {
    eyebrow: "A complete ecosystem",
    heading: "Learn. Build. Innovate. Connect. Grow.",
    items: [
      { title: "Learn", description: "Access courses, training and expert knowledge.", badge: "01" },
      { title: "Build", description: "Develop your skills, ideas and enterprise.", badge: "02" },
      { title: "Innovate", description: "Create and test solutions with research and technology.", badge: "03" },
      { title: "Connect", description: "Join networks of entrepreneurs, experts and partners.", badge: "04" },
      { title: "Market", description: "Connect to buyers, suppliers and market opportunities.", badge: "05" },
      { title: "Grow", description: "Access mentorship, business support and practical resources.", badge: "06" },
    ],
  },
  journey: {
    eyebrow: "How it works",
    heading: "Your Platform. Your Journey.",
    description: "Six simple steps connect participation, learning, enterprise development and opportunity.",
    steps: [
      { title: "Join", description: "Create your profile and tell us about your goals.", badge: "01" },
      { title: "Learn", description: "Access courses, training and resources.", badge: "02" },
      { title: "Build", description: "Develop your skills, test ideas and build your enterprise.", badge: "03" },
      { title: "Connect", description: "Join networks and connect with experts, partners and opportunities.", badge: "04" },
      { title: "Market", description: "Connect to markets, buyers and suppliers.", badge: "05" },
      { title: "Grow", description: "Receive mentorship, business support and resources.", badge: "06" },
    ],
  },
  useCases: {
    eyebrow: "For every agri-entrepreneur",
    heading: "Who We Serve",
    items: [
      { label: "Entrepreneurs", title: "Aspiring Entrepreneurs", description: "Get the knowledge and support needed to start.", badge: "AE" },
      { label: "Businesses", title: "Agribusinesses", description: "Access support to strengthen, grow and scale.", badge: "AB" },
      { label: "Innovation", title: "Innovators & Researchers", description: "Connect ideas, research and technology with practical needs.", badge: "IR" },
      { label: "Markets", title: "Market Actors", description: "Build stronger links among suppliers, buyers and opportunities.", badge: "MA" },
      { label: "Community", title: "Community & Network Groups", description: "Learn, share and build stronger agricultural communities.", badge: "CN" },
      { label: "Institutions", title: "Partners & Institutions", description: "Collaborate to create impact at scale.", badge: "PI" },
    ],
  },
  physicalBridge: {
    eyebrow: "Experience & Innovation Hub",
    heading: "Digital learning connected to practical experience.",
    description: "The Hub is the physical heart of FARMCLUB OS — a living environment for learning, testing, creating and scaling agricultural solutions.",
    image: { src: "/images/hubs/hubs-hero-innovation-greenhouse.png", alt: "Agricultural technology and practical learning in a greenhouse environment." },
    flow: ["Learn", "Innovate", "Build", "Connect"],
  },
  cta: {
    eyebrow: "All the tools. All the connections. All the support.",
    heading: "One Platform.",
    description: "Join the community of agri-entrepreneurs building a sustainable future.",
    primaryAction: { label: "Join FARMCLUB OS", href: "/contact" },
    secondaryAction: { label: "Explore the Hub", href: "/hubs" },
  },
};
