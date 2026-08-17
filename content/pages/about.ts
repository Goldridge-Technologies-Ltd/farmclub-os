import type { HomeAction, IconItem, ImageAsset, LabelledItem, NamedItem } from "@/content/pages/home";

export type AboutPageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset; primaryAction: HomeAction; secondaryAction: HomeAction };
  caseForChange: { eyebrow: string; heading: string; paragraphs: string[]; organisingIdea: string };
  purpose: { eyebrow: string; heading: string; description: string; mission: NamedItem; vision: NamedItem };
  principles: { eyebrow: string; heading: string; items: LabelledItem[] };
  positioning: { eyebrow: string; heading: string; description: string; connections: IconItem[] };
  audiences: { eyebrow: string; heading: string; groups: string[] };
  commitments: { eyebrow: string; heading: string; items: IconItem[] };
  stewardship: { eyebrow: string; heading: string; description: string };
  cta: { eyebrow: string; heading: string; description: string; primaryAction: HomeAction; secondaryAction: HomeAction };
};

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: "About FARMCLUB OS",
    heading: "Building the Future of Agricultural Entrepreneurship.",
    description: "FARMCLUB OS is an all-in-one digital platform that connects learning, enterprise development, innovation and markets for a new generation of agri-entrepreneurs.",
    image: { src: "/images/about/about-hero-purpose-collaboration.png", alt: "Agricultural entrepreneurs and collaborators working together with digital tools." },
    primaryAction: { label: "Explore the Platform", href: "/platform" },
    secondaryAction: { label: "Partner With Us", href: "/contact" },
  },
  caseForChange: {
    eyebrow: "A technology company with a purpose",
    heading: "Access to the right tools, knowledge and markets should not be fragmented.",
    paragraphs: [
      "FARMCLUB OS was founded to solve a real problem: access to the right tools, knowledge and markets is fragmented and hard to navigate for many aspiring entrepreneurs.",
      "We built one integrated platform that brings everything together so people can learn, build, connect and grow their agricultural enterprises.",
    ],
    organisingIdea: "We are more than a platform. We are a movement inspiring a new era of innovation and impact in agriculture.",
  },
  purpose: {
    eyebrow: "Who we are",
    heading: "Purpose built for agricultural enterprise.",
    description: "FARMCLUB OS brings knowledge, enterprise development, innovation and collaboration together in one digital ecosystem.",
    mission: { title: "Our Mission", description: "To empower a new generation of food and agricultural entrepreneurs and build a sustainable future for Africa through knowledge, innovation and collaboration." },
    vision: { title: "Our Vision", description: "A thriving ecosystem where agriculture drives wealth, creates jobs and strengthens communities across Africa and beyond." },
  },
  principles: {
    eyebrow: "What guides us",
    heading: "Our Values",
    items: [
      { label: "01", title: "Integrity", description: "We act responsibly and build trust through clear, credible engagement.", badge: "01" },
      { label: "02", title: "Inclusion", description: "We create pathways for people and communities to participate and grow.", badge: "02" },
      { label: "03", title: "Excellence", description: "We pursue practical quality in learning, enterprise support and innovation.", badge: "03" },
      { label: "04", title: "Impact", description: "We focus on meaningful progress for entrepreneurs and agricultural communities.", badge: "04" },
    ],
  },
  positioning: {
    eyebrow: "A technology company with a purpose",
    heading: "One integrated platform for agricultural entrepreneurship.",
    description: "FARMCLUB OS makes it easier to find knowledge, build capability, connect with support and approach opportunities.",
    connections: [
      { title: "Knowledge", description: "Practical agricultural learning and expert insight.", icon: "learn" },
      { title: "Enterprise", description: "Tools, mentoring and resources for starting, growing and scaling.", icon: "enterprise" },
      { title: "Innovation", description: "Ideas, research and technology connected to real needs.", icon: "innovate" },
      { title: "Markets", description: "Connections to buyers, finance and new opportunities.", icon: "market" },
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    heading: "There is a place for you in the FARMCLUB OS ecosystem.",
    groups: ["Aspiring agricultural entrepreneurs", "Existing agribusinesses", "Young people and women", "Innovators and researchers", "Community and network groups", "Learning institutions", "Partners and development organisations", "Investors and institutions"],
  },
  commitments: {
    eyebrow: "Our commitment to change",
    heading: "Our Impact Focus",
    items: [
      { title: "Youth & Women Inclusion", description: "Creating more accessible pathways into agricultural entrepreneurship.", icon: "connect" },
      { title: "Food System Transformation", description: "Supporting knowledge and innovation for stronger food systems.", icon: "sustainability" },
      { title: "Enterprise Growth", description: "Providing the tools, mentoring and resources to start, grow and scale.", icon: "grow" },
      { title: "Market Access", description: "Connecting entrepreneurs to buyers, networks and new market opportunities.", icon: "market" },
      { title: "Financing Solutions", description: "Helping entrepreneurs understand and approach relevant finance pathways.", icon: "finance" },
      { title: "Stronger Together", description: "Building a collaborative ecosystem for collective action and sustainable impact.", icon: "handshake" },
    ],
  },
  stewardship: {
    eyebrow: "Our journey",
    heading: "From entrepreneurship development to community empowerment.",
    description: "FARMCLUB OS connects individual learning and enterprise growth with the wider goal of stronger agricultural communities.",
  },
  cta: {
    eyebrow: "Connect · Empower · Grow",
    heading: "Be Part of a Movement Transforming Agriculture.",
    description: "Whether you are an entrepreneur, investor, institution or partner, there is a place for you in the FARMCLUB OS ecosystem.",
    primaryAction: { label: "Partner With Us", href: "/contact" },
    secondaryAction: { label: "Explore the Platform", href: "/platform" },
  },
};
