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
    eyebrow: "Contact FARMCLUB OS",
    heading: "Start with the right conversation.",
    description: "Tell us what you are exploring so your enquiry can follow the most relevant FARMCLUB OS pathway when online delivery is connected.",
    image: { src: "/images/contact/contact-hero-partnership-meeting.png", alt: "Agricultural and institutional collaborators in a focused meeting." },
  },
  introduction: {
    eyebrow: "Enquiries",
    heading: "Clear context helps create a useful next step.",
    description: "Use the enquiry categories below to frame your interest. The current website validates and reviews your message locally but does not yet transmit or store it.",
  },
  enquiryTypes: ["General enquiry", "Partnership enquiry", "Platform support", "Investor enquiry", "Media enquiry"],
  pathways: {
    eyebrow: "Conversation pathways",
    heading: "Choose the closest fit.",
    items: [
      { title: "General enquiry", description: "Questions about FARMCLUB OS and its public platform model.", badge: "GE" },
      { title: "Partnership enquiry", description: "Responsible institutional, technical or ecosystem collaboration.", badge: "PE" },
      { title: "Platform support", description: "Questions about the public website or platform access as capabilities develop.", badge: "PS" },
      { title: "Investor enquiry", description: "Requests for approved investor or institutional information.", badge: "IE" },
      { title: "Media enquiry", description: "Requests for approved public information and comment.", badge: "ME" },
    ],
  },
  form: {
    heading: "Prepare your enquiry",
    description: "Complete the fields to validate and review your message. Nothing will be sent or stored by this interim form.",
    privacyNote: "Do not include confidential, financial, identity or other sensitive information. Future online submission will require an approved privacy notice and delivery integration.",
    integrationNote: "Online delivery is not connected yet. Successful review means only that the message is complete on this device.",
  },
};
