import type { ImageAsset, LabelledItem } from "@/content/pages/home";

export type ContactPageContent = {
  hero: { eyebrow: string; heading: string; description: string; image: ImageAsset };
  introduction: { eyebrow: string; heading: string; description: string };
  enquiryTypes: string[];
  pathways: { eyebrow: string; heading: string; items: LabelledItem[] };
  form: { heading: string; description: string; privacyNote: string; integrationNote: string };
};

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: "Contact Us",
    heading: "Let's Build the Future of Agriculture Together.",
    description: "Whether you are an entrepreneur, partner, investor or institution, we would love to hear from you.",
    image: { src: "/images/contact/contact-hero-partnership-meeting.png", alt: "Agricultural and institutional collaborators in a focused meeting." },
  },
  introduction: {
    eyebrow: "Send us a message",
    heading: "Start the right conversation.",
    description: "Choose the enquiry type that best matches how you would like to connect with FARMCLUB OS.",
  },
  enquiryTypes: ["Partnership & Collaboration", "Platform Enquiries & Support", "Investment", "Media & Press"],
  pathways: {
    eyebrow: "How can we help?",
    heading: "Choose the closest fit.",
    items: [
      { title: "Partnership & Collaboration", description: "Work with FARMCLUB OS to empower entrepreneurs, strengthen communities and build sustainable impact.", badge: "PC" },
      { title: "Platform Enquiries & Support", description: "Ask a question about the FARMCLUB OS platform and how it works.", badge: "PS" },
      { title: "Investment", description: "Request approved investor information and connect with the team.", badge: "IN" },
      { title: "Media & Press", description: "Request approved public information, interviews or media materials.", badge: "MP" },
    ],
  },
  form: {
    heading: "Send Us a Message",
    description: "Complete the fields below to prepare your enquiry for FARMCLUB OS.",
    privacyNote: "Do not include confidential, financial, identity or other sensitive information in this interim form.",
    integrationNote: "Online delivery is not connected yet. Reviewing the form only checks that your message is complete on this device.",
  },
};
