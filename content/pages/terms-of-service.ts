import type { LegalDocumentContent } from "@/content/pages/legal";

export const termsOfServiceContent: LegalDocumentContent = {
  eyebrow: "Legal",
  heading: "Terms of Service",
  lastUpdated: "September 9, 2026",
  intro: [
    `These Terms of Service ("Terms") govern your access to and use of the FARMCLUB OS public website at **farmclubos.com** (the "Website"), operated by FARMCLUB OS ("FARMCLUB OS", "we", "us", or "our").`,
    "By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.",
    "For information on how we handle personal information submitted through the Website, please see our Privacy Policy.",
  ],
  sections: [
    {
      heading: "1. About This Website",
      blocks: [
        {
          kind: "paragraph",
          text: "This Website is the public information website for FARMCLUB OS. It describes our platform, Experience & Innovation Hubs, programmes, and organisation.",
        },
        {
          kind: "paragraph",
          text: "This Website is **not** the authenticated FARMCLUB OS platform or product. No user account is created, offered, or required to use this Website, and no platform login or product functionality is available here.",
        },
        {
          kind: "paragraph",
          text: "Content on this Website is provided for general information purposes and may change as FARMCLUB OS and its platform, hubs, and programmes develop.",
        },
      ],
    },
    {
      heading: "2. Acceptable Use",
      blocks: [
        {
          kind: "paragraph",
          text: "When using this Website, you agree not to:",
        },
        {
          kind: "list",
          items: [
            "Use the Website for any unlawful purpose or in violation of these Terms.",
            "Attempt to gain unauthorised access to the Website, its infrastructure, or any related systems.",
            "Interfere with or disrupt the operation, security, or availability of the Website.",
            "Use automated means (bots, scrapers, or similar tools) to access, harvest, or extract content, email addresses, or other data from the Website, other than standard search-engine indexing.",
            "Submit false, misleading, or fraudulent information through any form on the Website.",
            "Use contact details or information obtained from the Website to send unsolicited commercial communications.",
          ],
        },
      ],
    },
    {
      heading: "3. Contact and Newsletter Submissions",
      blocks: [
        {
          kind: "paragraph",
          text: "This Website provides a Contact Us form and an email update subscription form. Information you voluntarily submit through these forms is transmitted to FARMCLUB OS and, where necessary, to trusted third-party service providers, so that we can respond to your enquiry or send the communications you have requested.",
        },
        {
          kind: "paragraph",
          text: "How we handle information submitted through these forms is described in our Privacy Policy, which forms part of these Terms by reference.",
        },
        {
          kind: "paragraph",
          text: "You agree that any information you submit through these forms is accurate, and that you will not submit personal information belonging to another person without their consent.",
        },
      ],
    },
    {
      heading: "4. Intellectual Property",
      blocks: [
        {
          kind: "paragraph",
          text: "The Website and its content, including text, graphics, logos, the FARMCLUB OS name and brand, and images, are owned by FARMCLUB OS or its licensors and are protected by applicable intellectual property laws, unless otherwise stated.",
        },
        {
          kind: "paragraph",
          text: "You may view and access Website content for your own personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works from any part of the Website without our prior written consent, except as permitted by applicable law.",
        },
      ],
    },
    {
      heading: "5. No Offer, Investment Advice, or Solicitation",
      blocks: [
        {
          kind: "paragraph",
          text: "Nothing on this Website constitutes financial, investment, or legal advice, or an offer or solicitation to buy or sell any security or investment.",
        },
        {
          kind: "paragraph",
          text: "This Website does not publish financial projections, fundraising terms, traction figures, or confidential plans. Any such information is shared separately, directly with prospective partners or investors, and is not made available through this Website.",
        },
      ],
    },
    {
      heading: "6. Third-Party Links",
      blocks: [
        {
          kind: "paragraph",
          text: "This Website may, from time to time, include links to third-party websites or services. FARMCLUB OS is not responsible for the content, accuracy, or privacy practices of any third-party website, and including a link does not imply endorsement.",
        },
      ],
    },
    {
      heading: "7. No Warranties",
      blocks: [
        {
          kind: "paragraph",
          text: `The Website and its content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including as to accuracy, completeness, or reliability.`,
        },
        {
          kind: "paragraph",
          text: "We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.",
        },
      ],
    },
    {
      heading: "8. Limitation of Liability",
      blocks: [
        {
          kind: "paragraph",
          text: "To the maximum extent permitted by applicable law, FARMCLUB OS shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to your use of, or inability to use, the Website.",
        },
      ],
    },
    {
      heading: "9. Governing Law",
      blocks: [
        {
          kind: "paragraph",
          text: "These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.",
        },
      ],
    },
    {
      heading: "10. Changes to These Terms",
      blocks: [
        {
          kind: "paragraph",
          text: "We may update these Terms from time to time to reflect changes in our Website, services, or legal requirements.",
        },
        {
          kind: "paragraph",
          text: `When we make changes, we will update the "Last Updated" date at the top of this page. Your continued use of the Website after changes are posted constitutes acceptance of the updated Terms.`,
        },
      ],
    },
    {
      heading: "11. Contact Us",
      blocks: [
        {
          kind: "paragraph",
          text: "If you have questions about these Terms, please contact us:",
        },
        { kind: "paragraph", text: "**FARMCLUB OS**" },
        {
          kind: "labelLine",
          label: "Email",
          value: "hello@farmclubos.com",
          href: "mailto:hello@farmclubos.com",
        },
        { kind: "labelLine", label: "Location", value: "Lagos State, Nigeria" },
      ],
    },
  ],
};
