export type HomeAction = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type NamedItem = {
  title: string;
  description: string;
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
    image: ImageAsset;
  };
  capabilityStrip: string[];
  platform: {
    eyebrow: string;
    heading: string;
    description: string;
    capabilities: NamedItem[];
    image: ImageAsset;
  };
  journey: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: NamedItem[];
  };
  hubs: {
    eyebrow: string;
    heading: string;
    statement: string;
    capabilities: NamedItem[];
    action: HomeAction;
    image: ImageAsset;
  };
  knowledge: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
    action: HomeAction;
    image: ImageAsset;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
  };
};

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: "The Digital Platform for",
    heading: "Agricultural Entrepreneurship & Innovation",
    description:
      "FARMCLUB OS connects learning, enterprise development, innovation and markets through one integrated platform.",
    primaryAction: {
      label: "Explore the Platform",
      href: "/platform",
    },
    secondaryAction: {
      label: "Watch Overview",
      href: "#platform-ecosystem",
    },
    image: {
      src: "/images/home/home-hero-agritech-greenhouse.png",
      alt: "Agricultural technology in a greenhouse environment.",
    },
  },
  capabilityStrip: [
    "Learning & Capacity Building",
    "Enterprise Development",
    "Innovation & Research",
    "Market Access",
    "Impact Intelligence",
  ],
  platform: {
    eyebrow: "Platform Ecosystem",
    heading: "One platform for the agricultural enterprise journey.",
    description:
      "FARMCLUB OS brings core capabilities together so agricultural entrepreneurs can learn, build, connect and grow with practical support.",
    capabilities: [
      {
        title: "Learn",
        description: "Structured knowledge for practical agricultural enterprise development.",
      },
      {
        title: "Innovate",
        description: "Applied research, experimentation and problem-solving pathways.",
      },
      {
        title: "Enterprise",
        description: "Tools and support for shaping viable agri-enterprises.",
      },
      {
        title: "Connect",
        description: "Networks for collaboration across the platform ecosystem.",
      },
      {
        title: "Market",
        description: "Readiness support for market access and commercial growth.",
      },
      {
        title: "Finance",
        description: "Preparation pathways for finance access and enterprise resilience.",
      },
    ],
    image: {
      src: "/images/platform/platform-hero-digital-operations.png",
      alt: "Digital agricultural operations dashboard in use.",
    },
  },
  journey: {
    eyebrow: "Entrepreneur Journey",
    heading: "A clear path from entry to enterprise growth.",
    description:
      "The homepage journey frames how agricultural entrepreneurs move through learning, enterprise building, market readiness and impact intelligence.",
    steps: [
      {
        title: "Join",
        description: "Enter the platform ecosystem with a clear route into support.",
      },
      {
        title: "Learn",
        description: "Build practical knowledge and enterprise capability.",
      },
      {
        title: "Build",
        description: "Develop ideas, operations and business models.",
      },
      {
        title: "Grow",
        description: "Use mentorship and tools to strengthen enterprise readiness.",
      },
      {
        title: "Market",
        description: "Prepare for customers, channels and commercial opportunities.",
      },
      {
        title: "Impact",
        description: "Track progress through useful insight and reporting foundations.",
      },
    ],
  },
  hubs: {
    eyebrow: "Digital-Physical Model",
    heading: "Experience & Innovation Hubs",
    statement: "Digital learning connected to real-world experimentation.",
    capabilities: [
      {
        title: "Learn",
        description: "Practical training and enterprise development.",
      },
      {
        title: "Create",
        description: "Testing, prototyping and applied innovation.",
      },
      {
        title: "Grow",
        description: "Mentorship, market access and business support.",
      },
    ],
    action: {
      label: "Explore the Hub Model",
      href: "/hubs",
    },
    image: {
      src: "/images/hubs/hubs-hero-innovation-greenhouse.png",
      alt: "Generic agricultural innovation greenhouse without location signage.",
    },
  },
  knowledge: {
    eyebrow: "Knowledge Centre",
    heading: "Practical knowledge for agricultural entrepreneurs.",
    description:
      "The Knowledge Centre will organise learning, research and platform guidance for entrepreneurs, institutions and ecosystem collaborators.",
    points: [
      "Learning resources",
      "Research and insight",
      "Enterprise guidance",
    ],
    action: {
      label: "Visit Knowledge Centre",
      href: "/knowledge-centre",
    },
    image: {
      src: "/images/knowledge/knowledge-centre-hero-learning-lab.png",
      alt: "Agricultural learning and digital content creation environment.",
    },
  },
  finalCta: {
    eyebrow: "CONNECT · EMPOWER · GROW",
    heading: "Build the next generation of agricultural enterprise.",
    description:
      "Explore how FARMCLUB OS connects platform capability, enterprise support and ecosystem collaboration.",
    primaryAction: {
      label: "Explore the Platform",
      href: "/platform",
    },
    secondaryAction: {
      label: "Partner With Us",
      href: "/contact",
    },
  },
};
