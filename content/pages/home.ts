export type HomeAction = { label: string; href: string };
export type ImageAsset = { src: string; alt: string };
export type NamedItem = { title: string; description: string };
export type LabelledItem = NamedItem & { label?: string; badge?: string };

export type HomePageContent = {
  hero: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction; image: ImageAsset; imageCaption: string; supportItems: string[] };
  capabilityStrip: string[];
  caseForChange: { eyebrow: string; heading: string; description: string; bullets: string[]; callout: { eyebrow: string; statement: string; supportingText: string } };
  mission: { eyebrow: string; statement: string; supportingText: string; pillars: LabelledItem[] };
  ecosystem: { eyebrow: string; heading: string; description: string; core: NamedItem; engines: LabelledItem[]; supportingCapabilities: string[] };
  journey: { eyebrow: string; heading: string; description: string; steps: LabelledItem[] };
  hubs: { eyebrow: string; heading: string; statement: string; description: string; capabilities: LabelledItem[]; action: HomeAction; image: ImageAsset };
  audiences: { eyebrow: string; heading: string; description: string; pathways: LabelledItem[] };
  knowledge: { eyebrow: string; heading: string; description: string; resources: LabelledItem[]; action: HomeAction; image: ImageAsset };
  engagement: { eyebrow: string; heading: string; description: string; principles: string[]; primaryAction: HomeAction; secondaryAction: HomeAction; image: ImageAsset };
  finalCta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: "The Digital Platform for",
    heading: "Agricultural Entrepreneurship & Innovation",
    description: "FARMCLUB OS connects learning, enterprise development, innovation and markets through one integrated platform.",
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Watch Overview", href: "#farmclub-ecosystem" },
    image: { src: "/images/home/home-hero-agritech-greenhouse.png", alt: "Agricultural entrepreneurs using a tablet in a greenhouse setting." },
    imageCaption: "Learn, build, connect and grow through one integrated platform.",
    supportItems: ["Learn", "Build", "Connect", "Grow"],
  },
  capabilityStrip: ["Learning & Capacity Building", "Enterprise Development", "Innovation & Research", "Market Access", "Impact Intelligence"],
  caseForChange: {
    eyebrow: "One platform. Endless possibilities.",
    heading: "Our Platform Ecosystem",
    description: "FARMCLUB OS brings every part of the agri-entrepreneur journey into one seamless digital ecosystem.",
    bullets: ["Learn the right skills", "Start and grow your enterprise", "Access tools, finance and experts", "Connect to markets and opportunities"],
    callout: {
      eyebrow: "Our mission",
      statement: "To empower a new generation of food and agricultural entrepreneurs across Africa.",
      supportingText: "FARMCLUB OS connects knowledge, enterprise support, innovation and opportunity in one ecosystem.",
    },
  },
  mission: {
    eyebrow: "Connect · Empower · Grow",
    statement: "Everything an agricultural entrepreneur needs to learn, build, connect and grow.",
    supportingText: "The platform brings practical knowledge, enterprise tools, expert support and market pathways together.",
    pillars: [
      { label: "Learn", title: "Build the right skills", description: "Access courses, training and practical knowledge for agricultural enterprise.", badge: "01" },
      { label: "Build", title: "Develop your enterprise", description: "Use business tools, mentorship and enterprise support to move forward.", badge: "02" },
      { label: "Connect", title: "Find people and opportunity", description: "Connect with experts, partners, markets and a wider community.", badge: "03" },
    ],
  },
  ecosystem: {
    eyebrow: "One platform. Endless possibilities.",
    heading: "Our Platform Ecosystem",
    description: "A connected ecosystem for learning, innovation, enterprise development, finance and market access.",
    core: { title: "FARMCLUB OS", description: "The digital platform for agricultural entrepreneurship and innovation." },
    engines: [
      { label: "Learn", title: "Learning & Development", description: "Courses, training and practical knowledge for building agricultural skills.", badge: "L" },
      { label: "Innovate", title: "Innovation & Research", description: "Ideas, research and technology connected to practical agricultural challenges.", badge: "I" },
      { label: "Enterprise", title: "Enterprise Management", description: "Business tools, mentorship and support for starting and growing an enterprise.", badge: "E" },
      { label: "Market", title: "Finance & Market Access", description: "Pathways to finance, buyers, suppliers and market opportunities.", badge: "M" },
    ],
    supportingCapabilities: ["Learn", "Innovate", "Build", "Connect", "Access finance", "Reach markets"],
  },
  journey: {
    eyebrow: "How it works",
    heading: "Your Journey. Our Platform.",
    description: "FARMCLUB OS supports the agri-entrepreneur journey from joining the ecosystem to creating measurable impact.",
    steps: [
      { title: "Join", description: "Create your profile and become part of the FARMCLUB OS ecosystem.", badge: "01" },
      { title: "Learn", description: "Access courses, training and practical resources.", badge: "02" },
      { title: "Build", description: "Develop your skills, test ideas and build your enterprise.", badge: "03" },
      { title: "Access & Connect", description: "Connect with networks, partnerships, tools and opportunities.", badge: "04" },
      { title: "Market", description: "Reach buyers, suppliers and new markets.", badge: "05" },
      { title: "Impact", description: "Create jobs, strengthen communities and contribute to sustainable agriculture.", badge: "06" },
    ],
  },
  hubs: {
    eyebrow: "Experience. Innovate. Transform.",
    heading: "Experience & Innovation Hub",
    statement: "Where digital learning meets real-world agricultural innovation.",
    description: "The physical Hub connects practical learning, technology, enterprise support and collaboration within the FARMCLUB OS ecosystem.",
    capabilities: [
      { title: "Learn", description: "Training and capacity development in modern agriculture and entrepreneurship.", badge: "01" },
      { title: "Innovate", description: "Test ideas, technologies and solutions in practical environments.", badge: "02" },
      { title: "Build", description: "Access tools, mentorship and resources to grow a sustainable enterprise.", badge: "03" },
      { title: "Connect", description: "Work with experts, partners and peers to create solutions and opportunities.", badge: "04" },
    ],
    action: { label: "Explore the Hub", href: "/hubs" },
    image: { src: "/images/hubs/hubs-hero-innovation-greenhouse.png", alt: "Agricultural team working in a greenhouse innovation setting." },
  },
  audiences: {
    eyebrow: "Built for the ecosystem",
    heading: "One platform for every agri-entrepreneur.",
    description: "FARMCLUB OS serves people and organisations working across agricultural enterprise, innovation, markets and community development.",
    pathways: [
      { label: "Entrepreneurs", title: "Aspiring Entrepreneurs", description: "Learn the skills and access the support needed to get started.", badge: "AE" },
      { label: "Businesses", title: "Agribusinesses", description: "Strengthen operations, reach markets and prepare to scale.", badge: "AB" },
      { label: "Innovation", title: "Innovators & Researchers", description: "Connect ideas, research and technology with practical needs.", badge: "IR" },
      { label: "Markets", title: "Market Actors", description: "Build connections between producers, suppliers, buyers and opportunities.", badge: "MA" },
      { label: "Community", title: "Community & Network Groups", description: "Share knowledge and build stronger agricultural communities.", badge: "CN" },
      { label: "Institutions", title: "Partners & Institutions", description: "Collaborate to extend knowledge, enterprise support and impact.", badge: "PI" },
    ],
  },
  knowledge: {
    eyebrow: "Knowledge Centre",
    heading: "Knowledge for growth and impact.",
    description: "Explore expert insights, practical tools, training resources and stories for agri-entrepreneurs and agribusinesses.",
    resources: [
      { label: "Knowledge", title: "Articles & Insights", description: "Practical perspectives on agriculture, innovation and entrepreneurship.", badge: "AI" },
      { label: "Tools", title: "Guides & Toolkits", description: "Step-by-step resources for starting, growing and strengthening an enterprise.", badge: "GT" },
      { label: "Learning", title: "Videos & Webinars", description: "Learn from experts through practical sessions and digital resources.", badge: "VW" },
      { label: "Evidence", title: "Research & Reports", description: "Data, trends and research for better decisions.", badge: "RR" },
      { label: "Stories", title: "Success Stories", description: "Stories from agri-entrepreneurs building enterprises and creating change.", badge: "SS" },
      { label: "Innovation", title: "Innovation Lab", description: "Ideas, experiments and solutions shaping the future of agriculture.", badge: "IL" },
    ],
    action: { label: "Explore the Knowledge Centre", href: "/knowledge-centre" },
    image: { src: "/images/knowledge/knowledge-centre-hero-learning-lab.png", alt: "Agricultural learning session with participants and digital tools." },
  },
  engagement: {
    eyebrow: "Partners & investors",
    heading: "Build a stronger agricultural ecosystem with us.",
    description: "FARMCLUB OS creates a platform for responsible collaboration among entrepreneurs, institutions, investors and ecosystem partners.",
    principles: ["Connect entrepreneurs with practical support", "Strengthen enterprise and market pathways", "Advance agricultural innovation and knowledge", "Build sustainable impact through collaboration"],
    primaryAction: { label: "Partner With Us", href: "/contact" },
    secondaryAction: { label: "Explore Investor Information", href: "/investors" },
    image: { src: "/images/investors/investors-hero-institutional-agritech.png", alt: "Institutional meeting in an agricultural technology setting." },
  },
  finalCta: {
    eyebrow: "Connect · Empower · Grow",
    heading: "Ready to transform agriculture through innovation?",
    description: "Join the FARMCLUB OS ecosystem or work with us to empower agricultural entrepreneurs.",
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Partner With Us", href: "/contact" },
  },
};
