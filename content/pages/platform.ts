import type { HomeAction, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type PlatformPageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: ImageAsset;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
  };
  concept: { eyebrow: string; heading: string; description: string; principles: string[] };
  architecture: {
    eyebrow: string;
    heading: string;
    description: string;
    core: NamedItem;
    engines: (LabelledItem & { supports: string[] })[];
  };
  capabilityMap: { eyebrow: string; heading: string; items: LabelledItem[] };
  journey: { eyebrow: string; heading: string; description: string; steps: LabelledItem[] };
  useCases: { eyebrow: string; heading: string; items: LabelledItem[] };
  physicalBridge: {
    eyebrow: string;
    heading: string;
    description: string;
    image: ImageAsset;
    flow: string[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
  };
};

export const platformPageContent: PlatformPageContent = {
  hero: {
    eyebrow: "The FARMCLUB OS platform",
    heading: "One operating system for connected agricultural enterprise.",
    description:
      "FARMCLUB OS brings learning, relationships, enterprise development and impact intelligence into one coordinated platform architecture.",
    image: {
      src: "/images/platform/platform-hero-digital-operations.png",
      alt: "Agricultural professionals using digital tools to coordinate operations.",
    },
    primaryAction: { label: "Explore the Four Engines", href: "#four-engines" },
    secondaryAction: { label: "Discuss the Platform", href: "/contact" },
  },
  concept: {
    eyebrow: "Why an operating system",
    heading: "A shared logic for many kinds of agricultural support.",
    description:
      "The operating-system concept does not mean one rigid journey. It means common infrastructure that helps participants understand where they are, what they need and how different forms of support can connect.",
    principles: [
      "A clear entry point for different participants",
      "Connected pathways instead of isolated interventions",
      "Digital coordination linked to practical agriculture",
      "Responsible visibility into participation and progress",
    ],
  },
  architecture: {
    eyebrow: "One Platform, Four Engines",
    heading: "Four engines. One coordinated ecosystem.",
    description:
      "Each engine has a distinct role. Together they create a pathway between knowledge, people, enterprise activity and ecosystem learning.",
    core: {
      title: "FARMCLUB OS",
      description: "The shared digital layer coordinating participation, pathways and insight.",
    },
    engines: [
      {
        label: "Engine 01",
        title: "FARMCLUB Academy",
        description: "Designed to organise learning, capacity building and practical agricultural knowledge.",
        badge: "A",
        supports: ["Learning pathways", "Guides and explainers", "Practical knowledge"],
      },
      {
        label: "Engine 02",
        title: "FARMCLUB Connect",
        description: "Creates pathways between entrepreneurs, institutions, collaborators and opportunity.",
        badge: "C",
        supports: ["Ecosystem relationships", "Knowledge exchange", "Opportunity pathways"],
      },
      {
        label: "Engine 03",
        title: "FARMCLUB Entrepreneur",
        description: "Supports the development and strengthening of agricultural enterprises.",
        badge: "E",
        supports: ["Enterprise readiness", "Capability development", "Market preparation"],
      },
      {
        label: "Engine 04",
        title: "FARMCLUB Impact",
        description: "Provides a framework for progress visibility, impact intelligence and better decisions.",
        badge: "I",
        supports: ["Progress visibility", "Ecosystem learning", "Decision support"],
      },
    ],
  },
  capabilityMap: {
    eyebrow: "Supporting capability map",
    heading: "The activity beneath the engines.",
    items: [
      { title: "Learn", description: "Build knowledge and practical understanding.", badge: "01" },
      { title: "Innovate", description: "Explore ideas around real agricultural needs.", badge: "02" },
      { title: "Enterprise", description: "Develop capabilities and operating readiness.", badge: "03" },
      { title: "Connect", description: "Build relevant institutional and peer relationships.", badge: "04" },
      { title: "Market", description: "Prepare for credible routes to opportunity.", badge: "05" },
      { title: "Finance", description: "Understand readiness for appropriate finance pathways.", badge: "06" },
    ],
  },
  journey: {
    eyebrow: "A connected journey",
    heading: "From orientation to contribution without losing context.",
    description:
      "Participants and institutions can enter at different points. The platform is designed to help each next step remain connected to the wider enterprise journey.",
    steps: [
      { title: "Orient", description: "Understand needs, goals and the most relevant entry point.", badge: "01" },
      { title: "Learn", description: "Build knowledge through structured resources and pathways.", badge: "02" },
      { title: "Apply", description: "Connect learning to practical exposure and enterprise decisions.", badge: "03" },
      { title: "Develop", description: "Strengthen ideas, capabilities and organisational readiness.", badge: "04" },
      { title: "Connect", description: "Approach institutions, markets and opportunities with context.", badge: "05" },
      { title: "Understand", description: "Use responsible insight to support learning and decisions.", badge: "06" },
    ],
  },
  useCases: {
    eyebrow: "Designed around participation",
    heading: "Different users, one platform logic.",
    items: [
      { label: "Entrepreneurs", title: "Find the next useful step", description: "Move between learning, enterprise support and opportunity with greater clarity.", badge: "AE" },
      { label: "Institutions", title: "Coordinate relevant support", description: "Create clearer pathways for programmes, knowledge and engagement.", badge: "IN" },
      { label: "Innovators", title: "Connect ideas to agricultural needs", description: "Bring research, technology and collaboration closer to practical contexts.", badge: "IV" },
      { label: "Collaborators", title: "Engage through a shared framework", description: "Understand where expertise, resources or institutional participation may fit.", badge: "CO" },
    ],
  },
  physicalBridge: {
    eyebrow: "Digital meets physical",
    heading: "The platform continues into practical agricultural experience.",
    description:
      "The Experience and Innovation Hub provides the physical bridge for demonstration, practical learning, experimentation and collaboration. Activity can move between the digital platform and real-world contexts without becoming disconnected.",
    image: {
      src: "/images/hubs/hubs-hero-innovation-greenhouse.png",
      alt: "Agricultural technology and practical learning in a greenhouse environment.",
    },
    flow: ["Digital pathways", "Practical exposure", "Enterprise application", "Ecosystem insight"],
  },
  cta: {
    eyebrow: "A connected platform model",
    heading: "Choose the next view of FARMCLUB OS.",
    description: "Explore the physical Hub model or start an institutional conversation.",
    primaryAction: { label: "Explore the Hub", href: "/hubs" },
    secondaryAction: { label: "Contact FARMCLUB OS", href: "/contact" },
  },
};
