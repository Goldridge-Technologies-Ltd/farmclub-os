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

export type LabelledItem = NamedItem & {
  label?: string;
  badge?: string;
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
    image: ImageAsset;
    imageCaption: string;
    supportItems: string[];
  };
  capabilityStrip: string[];
  caseForChange: {
    eyebrow: string;
    heading: string;
    description: string;
    bullets: string[];
    callout: {
      eyebrow: string;
      statement: string;
      supportingText: string;
    };
  };
  mission: {
    eyebrow: string;
    statement: string;
    supportingText: string;
    pillars: LabelledItem[];
  };
  ecosystem: {
    eyebrow: string;
    heading: string;
    description: string;
    core: {
      title: string;
      description: string;
    };
    engines: LabelledItem[];
    supportingCapabilities: string[];
  };
  journey: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: LabelledItem[];
  };
  hubs: {
    eyebrow: string;
    heading: string;
    statement: string;
    description: string;
    capabilities: LabelledItem[];
    action: HomeAction;
    image: ImageAsset;
  };
  audiences: {
    eyebrow: string;
    heading: string;
    description: string;
    pathways: LabelledItem[];
  };
  knowledge: {
    eyebrow: string;
    heading: string;
    description: string;
    resources: LabelledItem[];
    action: HomeAction;
    image: ImageAsset;
  };
  engagement: {
    eyebrow: string;
    heading: string;
    description: string;
    principles: string[];
    primaryAction: HomeAction;
    secondaryAction: HomeAction;
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
      label: "Understand the Ecosystem",
      href: "#farmclub-ecosystem",
    },
    image: {
      src: "/images/home/home-hero-agritech-greenhouse.png",
      alt: "Agricultural entrepreneurs using a tablet in a greenhouse setting.",
    },
    imageCaption:
      "A platform-led model for connecting digital coordination with practical agricultural enterprise support.",
    supportItems: [
      "Learning",
      "Enterprise development",
      "Innovation",
      "Markets",
      "Impact intelligence",
    ],
  },
  capabilityStrip: [
    "Learning & Capacity Building",
    "Enterprise Development",
    "Innovation & Research",
    "Market Access",
    "Impact Intelligence",
  ],
  caseForChange: {
    eyebrow: "Why a platform approach",
    heading: "Agricultural entrepreneurs need connected support, not isolated programmes.",
    description:
      "Many people entering agriculture need more than information. They need a structured pathway between learning, practical exposure, enterprise support, institutional coordination and market readiness.",
    bullets: [
      "Learning resources should connect to practical enterprise development.",
      "Innovation activity should be linked to real agricultural problems.",
      "Institutions need clearer ways to coordinate support and measure progress.",
      "Market access depends on readiness, relationships and trusted information.",
    ],
    callout: {
      eyebrow: "Organising idea",
      statement:
        "FARMCLUB OS is being developed as a digital operating layer for agricultural entrepreneurship.",
      supportingText:
        "The platform provides a framework for moving from fragmented support into connected learning, enterprise, collaboration and impact pathways.",
    },
  },
  mission: {
    eyebrow: "What FARMCLUB OS brings together",
    statement:
      "A single ecosystem where entrepreneurs, institutions and collaborators can work from the same platform logic.",
    supportingText:
      "The public website should introduce FARMCLUB OS as more than a farm project. It is a platform ecosystem intended to support capacity building, enterprise development, innovation and market participation.",
    pillars: [
      {
        label: "Platform",
        title: "Digital coordination",
        description:
          "A structured approach for organising learning, enterprise support, opportunities and insight.",
        badge: "DC",
      },
      {
        label: "Practice",
        title: "Real-world exposure",
        description:
          "A connection between digital learning and practical agricultural demonstration, testing and collaboration.",
        badge: "RW",
      },
      {
        label: "Ecosystem",
        title: "Institutional participation",
        description:
          "A clearer way for institutions, partners and collaborators to engage with agricultural entrepreneurs.",
        badge: "IP",
      },
    ],
  },
  ecosystem: {
    eyebrow: "One Platform, Four Engines",
    heading: "Four connected engines inside one FARMCLUB OS ecosystem.",
    description:
      "The core architecture keeps the platform clear: learning, connection, enterprise support and impact intelligence work together rather than appearing as disconnected initiatives.",
    core: {
      title: "FARMCLUB OS",
      description:
        "The digital platform for agricultural entrepreneurship, innovation and ecosystem coordination.",
    },
    engines: [
      {
        label: "Engine 01",
        title: "FARMCLUB Academy",
        description:
          "Designed to organise learning, capacity building and practical knowledge for agricultural entrepreneurs.",
        badge: "A",
      },
      {
        label: "Engine 02",
        title: "FARMCLUB Connect",
        description:
          "Creates a pathway between entrepreneurs, institutions, collaborators and relevant opportunities.",
        badge: "C",
      },
      {
        label: "Engine 03",
        title: "FARMCLUB Entrepreneur",
        description:
          "Supports the development of agri-enterprises through structured tools, guidance and readiness pathways.",
        badge: "E",
      },
      {
        label: "Engine 04",
        title: "FARMCLUB Impact",
        description:
          "Provides a framework for impact intelligence, progress visibility and better ecosystem decisions.",
        badge: "I",
      },
    ],
    supportingCapabilities: [
      "Learn",
      "Develop",
      "Collaborate",
      "Prepare",
      "Access markets",
      "Track impact",
    ],
  },
  journey: {
    eyebrow: "Platform journey",
    heading: "A clear pathway from learning to measurable contribution.",
    description:
      "FARMCLUB OS is intended to help people and institutions understand where they are in the agricultural enterprise journey and what support should come next.",
    steps: [
      {
        title: "Learn",
        description: "Access structured knowledge and capacity-building pathways.",
        badge: "01",
      },
      {
        title: "Gain practical exposure",
        description: "Connect digital learning to demonstration, testing and field-facing experience.",
        badge: "02",
      },
      {
        title: "Develop ideas and capabilities",
        description: "Shape concepts, skills and operating models with clearer guidance.",
        badge: "03",
      },
      {
        title: "Build or strengthen an enterprise",
        description: "Use enterprise development support to improve readiness and resilience.",
        badge: "04",
      },
      {
        title: "Connect to institutions and opportunities",
        description: "Engage with collaborators, markets and support pathways through the platform ecosystem.",
        badge: "05",
      },
      {
        title: "Contribute to measurable impact",
        description: "Support better visibility into progress, outcomes and ecosystem learning.",
        badge: "06",
      },
    ],
  },
  hubs: {
    eyebrow: "Digital learning meets practical experience",
    heading: "Experience & Innovation Hubs",
    statement: "Digital learning connected to real-world experimentation.",
    description:
      "The Hub model extends FARMCLUB OS from digital coordination into practical agricultural learning, demonstration, technology exposure, enterprise support and collaboration.",
    capabilities: [
      {
        title: "Practical learning and demonstration",
        description:
          "Designed to make agricultural knowledge easier to experience, test and apply.",
        badge: "PL",
      },
      {
        title: "Agricultural technology exposure",
        description:
          "Creates space for entrepreneurs to understand tools, methods and applied innovation.",
        badge: "AT",
      },
      {
        title: "Enterprise and innovation support",
        description:
          "Supports idea development, prototyping, readiness and business-building activity.",
        badge: "EI",
      },
      {
        title: "Collaboration and knowledge exchange",
        description:
          "Brings people together around shared agricultural learning and practical problem-solving.",
        badge: "CK",
      },
    ],
    action: {
      label: "Explore the Hub Model",
      href: "/hubs",
    },
    image: {
      src: "/images/hubs/hubs-hero-innovation-greenhouse.png",
      alt: "Agricultural team working in a greenhouse innovation setting.",
    },
  },
  audiences: {
    eyebrow: "Designed to serve",
    heading: "Clear pathways for entrepreneurs, institutions and collaborators.",
    description:
      "FARMCLUB OS is designed for people and organisations working across agricultural learning, enterprise, innovation, finance, markets and ecosystem development.",
    pathways: [
      {
        label: "Learners",
        title: "Emerging agricultural entrepreneurs",
        description:
          "People seeking structured knowledge, practical exposure and a clearer route into agricultural enterprise.",
        badge: "LE",
      },
      {
        label: "Enterprises",
        title: "Existing agri-enterprises",
        description:
          "Businesses looking to strengthen capability, improve readiness and connect with relevant support.",
        badge: "AE",
      },
      {
        label: "Education",
        title: "Schools and learning institutions",
        description:
          "Institutions that need practical pathways for agricultural entrepreneurship and applied learning.",
        badge: "SI",
      },
      {
        label: "Industry",
        title: "Industry and technical partners",
        description:
          "Organisations interested in knowledge exchange, applied innovation and enterprise support.",
        badge: "TP",
      },
      {
        label: "Development",
        title: "Development organisations",
        description:
          "Programmes and institutions seeking coordinated, platform-led approaches to agricultural entrepreneurship.",
        badge: "DO",
      },
      {
        label: "Capital",
        title: "Investors and institutional collaborators",
        description:
          "Stakeholders who want to understand the platform model and discuss responsible ecosystem participation.",
        badge: "IC",
      },
    ],
  },
  knowledge: {
    eyebrow: "Knowledge Centre preview",
    heading: "A growing library of practical resources is being prepared.",
    description:
      "The Knowledge Centre will organise reviewed learning materials, insight categories and platform guidance for agricultural entrepreneurs and ecosystem collaborators.",
    resources: [
      {
        label: "Upcoming",
        title: "Insights",
        description:
          "Short explainers and perspectives on agricultural enterprise, innovation and ecosystem development.",
        badge: "IN",
      },
      {
        label: "Upcoming",
        title: "Guides and explainers",
        description:
          "Practical resources intended to help users understand core platform and enterprise topics.",
        badge: "GD",
      },
      {
        label: "Upcoming",
        title: "Agricultural enterprise resources",
        description:
          "Structured materials for learning, planning and strengthening agri-enterprise readiness.",
        badge: "ER",
      },
      {
        label: "Upcoming",
        title: "Research and reports",
        description:
          "Reviewed knowledge categories for evidence, learning and institutional decision support.",
        badge: "RR",
      },
      {
        label: "Upcoming",
        title: "Ecosystem stories",
        description:
          "Approved stories and updates that show how people engage with the platform ecosystem.",
        badge: "ES",
      },
      {
        label: "Upcoming",
        title: "Platform updates",
        description:
          "Clear communication on approved public updates as the platform develops.",
        badge: "PU",
      },
    ],
    action: {
      label: "Visit Knowledge Centre",
      href: "/knowledge-centre",
    },
    image: {
      src: "/images/knowledge/knowledge-centre-hero-learning-lab.png",
      alt: "Agricultural learning session with participants and digital tools.",
    },
  },
  engagement: {
    eyebrow: "Institutional and investor engagement",
    heading: "Coordinated agricultural infrastructure needs credible collaboration.",
    description:
      "FARMCLUB OS presents a platform-led model for connecting commercial sustainability with practical impact. Public engagement should create a clear route for institutions, development organisations and investors to continue the conversation while keeping internal plans private.",
    principles: [
      "Platform-led coordination across learning, enterprise and ecosystem activity.",
      "Responsible institutional collaboration without implying unverified commitments.",
      "Commercial sustainability considered alongside practical agricultural impact.",
      "Clear public pathways for discussion, review and future participation.",
    ],
    primaryAction: {
      label: "Discuss Collaboration",
      href: "/contact",
    },
    secondaryAction: {
      label: "Investor Overview",
      href: "/investors",
    },
    image: {
      src: "/images/investors/investors-hero-institutional-agritech.png",
      alt: "Institutional meeting in an agricultural technology setting.",
    },
  },
  finalCta: {
    eyebrow: "CONNECT · EMPOWER · GROW",
    heading: "Move from fragmented support to a connected platform ecosystem.",
    description:
      "Explore FARMCLUB OS, understand the Hub model or open a conversation about responsible agricultural collaboration.",
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
