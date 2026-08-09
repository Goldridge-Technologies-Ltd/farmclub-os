import type { HomeAction, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: ImageAsset;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
  };
  caseForChange: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    organisingIdea: string;
  };
  purpose: {
    eyebrow: string;
    heading: string;
    description: string;
    mission: NamedItem;
    vision: NamedItem;
  };
  principles: {
    eyebrow: string;
    heading: string;
    items: LabelledItem[];
  };
  positioning: {
    eyebrow: string;
    heading: string;
    description: string;
    connections: NamedItem[];
  };
  audiences: {
    eyebrow: string;
    heading: string;
    groups: string[];
  };
  commitments: {
    eyebrow: string;
    heading: string;
    items: NamedItem[];
  };
  stewardship: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
  };
};

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: "About FARMCLUB OS",
    heading: "Agriculture works better when its support systems work together.",
    description:
      "FARMCLUB OS is a technology-led platform designed to connect agricultural learning, enterprise development, innovation, institutions and opportunity through one organising system.",
    image: {
      src: "/images/about/about-hero-purpose-collaboration.png",
      alt: "Agricultural entrepreneurs and collaborators working together with digital tools.",
    },
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Start a Conversation", href: "/contact" },
  },
  caseForChange: {
    eyebrow: "The case for change",
    heading: "The challenge is not a lack of effort. It is a lack of connection.",
    paragraphs: [
      "Agricultural entrepreneurs often encounter knowledge, finance, markets, technology and institutional support as separate systems. Moving between them can be difficult, especially when there is no shared pathway for identifying what support should come next.",
      "A platform-led approach creates a common structure. It helps people learn, develop enterprises, find relevant relationships and contribute to clearer ecosystem insight without reducing agriculture to a single programme or service.",
    ],
    organisingIdea:
      "FARMCLUB OS provides an organising layer between people, practical agriculture, institutions and opportunity.",
  },
  purpose: {
    eyebrow: "Purpose and direction",
    heading: "Build the connective infrastructure agricultural enterprise needs.",
    description:
      "Our purpose is to make agricultural entrepreneurship more navigable, coordinated and capable of learning from its own activity.",
    mission: {
      title: "Mission",
      description:
        "To connect learning, enterprise support, innovation, markets and impact intelligence through an integrated platform ecosystem.",
    },
    vision: {
      title: "Vision",
      description:
        "An agricultural ecosystem where entrepreneurs and institutions can move from fragmented activity to coordinated, practical and sustainable progress.",
    },
  },
  principles: {
    eyebrow: "How we think",
    heading: "Principles for a useful agricultural platform.",
    items: [
      {
        label: "01",
        title: "Practical by design",
        description: "Digital coordination should stay connected to real agricultural work and enterprise decisions.",
        badge: "01",
      },
      {
        label: "02",
        title: "Connected, not fragmented",
        description: "Learning, relationships, enterprise support and insight should reinforce one another.",
        badge: "02",
      },
      {
        label: "03",
        title: "Inclusive pathways",
        description: "Different participants need clear entry points without being forced into one standard journey.",
        badge: "03",
      },
      {
        label: "04",
        title: "Evidence-aware",
        description: "Progress should become easier to understand through responsible impact intelligence.",
        badge: "04",
      },
      {
        label: "05",
        title: "Institutionally credible",
        description: "Collaboration should be structured, transparent and grounded in appropriate public claims.",
        badge: "05",
      },
    ],
  },
  positioning: {
    eyebrow: "Technology company with a purpose",
    heading: "Digital infrastructure in service of real-world agriculture.",
    description:
      "FARMCLUB OS is being developed as technology infrastructure for agricultural entrepreneurship. The platform logic connects digital pathways to practical experience rather than treating software and agriculture as separate worlds.",
    connections: [
      { title: "Technology", description: "Organises pathways, information, participation and insight." },
      { title: "Enterprise", description: "Keeps attention on readiness, resilience and commercial sustainability." },
      { title: "Institutions", description: "Creates clearer routes for coordination and responsible engagement." },
      { title: "Practice", description: "Connects digital learning to demonstration, testing and applied experience." },
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    heading: "One ecosystem, multiple ways to participate.",
    groups: [
      "Aspiring agricultural entrepreneurs",
      "Existing agri-enterprises",
      "Young people and women",
      "Innovators and researchers",
      "Learning institutions",
      "Development organisations",
      "Public and private institutions",
      "Investors and ecosystem collaborators",
    ],
  },
  commitments: {
    eyebrow: "Commitment areas",
    heading: "The outcomes our platform logic is intended to support.",
    items: [
      { title: "Learning and capacity", description: "Structured knowledge connected to practical next steps." },
      { title: "Enterprise development", description: "Clearer pathways for building and strengthening agri-enterprises." },
      { title: "Innovation and research", description: "Better connections between ideas, evidence and agricultural problems." },
      { title: "Market access", description: "Readiness and relationships that help enterprises approach opportunity." },
      { title: "Impact intelligence", description: "Responsible visibility into progress and ecosystem learning." },
    ],
  },
  stewardship: {
    eyebrow: "Public stewardship",
    heading: "A FARMCLUB OS initiative by Goldridge Bioagro Ltd.",
    description:
      "Goldridge Bioagro Ltd provides the corporate home for FARMCLUB OS. Its public role is to steward the platform proposition, responsible institutional engagement and the connection between digital infrastructure and practical agricultural enterprise.",
  },
  cta: {
    eyebrow: "Connect · Empower · Grow",
    heading: "See how the organising idea becomes a working platform model.",
    description: "Explore the Four Engines or discuss a responsible route for collaboration.",
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Contact FARMCLUB OS", href: "/contact" },
  },
};
