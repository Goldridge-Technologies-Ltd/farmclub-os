export type PrivacyBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "labelLine"; label: string; value: string; href?: string };

export type PrivacySection = {
  heading: string;
  blocks: PrivacyBlock[];
};

export type PrivacyPolicyContent = {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  intro: string[];
  sections: PrivacySection[];
};

export const privacyPolicyContent: PrivacyPolicyContent = {
  eyebrow: "Legal",
  heading: "Privacy Policy",
  lastUpdated: "September 4, 2026",
  intro: [
    `FARMCLUB OS ("FARMCLUB OS", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you provide when you interact with our website, platform, programmes, resources, and services.`,
    "This Privacy Policy explains what personal information we may collect, how we use it, how we protect it, and the rights you may have in relation to your information.",
    "This policy applies to information collected through the FARMCLUB OS website at **farmclubos.com**, including our Contact Us form, email update subscription form, and other interactions with our website.",
    "We process personal data in accordance with applicable data protection laws, including the **Nigeria Data Protection Act, 2023 (NDPA)**.",
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        {
          kind: "paragraph",
          text: "Depending on how you interact with FARMCLUB OS, we may collect information that you voluntarily provide to us.",
        },
        { kind: "subheading", text: "Contact Us Form" },
        {
          kind: "paragraph",
          text: "When you submit our Contact Us form, you may provide:",
        },
        {
          kind: "list",
          items: [
            "Your name",
            "Email address",
            "Subject or reason for contacting us",
            "Message or other information you choose to provide",
          ],
        },
        {
          kind: "paragraph",
          text: "We use this information to receive, review, and respond to your enquiry.",
        },
        { kind: "subheading", text: "Email Updates" },
        {
          kind: "paragraph",
          text: "If you choose to provide your email address through our email update subscription form, we may collect your email address for the purpose of communicating relevant FARMCLUB OS updates, news, announcements, opportunities, and other communications.",
        },
        { kind: "subheading", text: "Automatically Collected Information" },
        {
          kind: "paragraph",
          text: "When you visit our website, certain technical information may be collected automatically by our hosting, security, or infrastructure providers. This may include information such as your IP address, browser type, device information, pages visited, and basic technical information required to operate and secure the website.",
        },
        {
          kind: "paragraph",
          text: "We do not intentionally request sensitive personal information through our public contact or email subscription forms.",
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      blocks: [
        { kind: "paragraph", text: "We may use information you provide to:" },
        {
          kind: "list",
          items: [
            "Respond to enquiries and messages submitted through our Contact Us form.",
            "Communicate with you regarding an enquiry you have submitted.",
            "Send FARMCLUB OS updates, announcements, opportunities, and other communications where you have requested or consented to receive them.",
            "Maintain and operate our website and services.",
            "Improve the functionality, security, and user experience of our website.",
            "Prevent misuse, fraud, security incidents, or other unlawful activity.",
            "Comply with applicable legal and regulatory obligations.",
          ],
        },
        { kind: "paragraph", text: "We do not sell your personal information." },
        {
          kind: "paragraph",
          text: "We do not use information submitted through the Contact Us form for unrelated marketing communications unless you have separately requested or consented to receive such communications, or where otherwise permitted by applicable law.",
        },
      ],
    },
    {
      heading: "3. Email Communications",
      blocks: [
        {
          kind: "paragraph",
          text: "When you voluntarily provide your email address through our email update subscription form, we may use it to communicate relevant information about FARMCLUB OS.",
        },
        {
          kind: "paragraph",
          text: "You may stop receiving non-essential update or marketing communications at any time by using an unsubscribe option provided in the communication or by contacting us directly.",
        },
        {
          kind: "paragraph",
          text: "Submitting an enquiry through our Contact Us form does **not** automatically subscribe you to FARMCLUB OS marketing or update communications.",
        },
      ],
    },
    {
      heading: "4. Third-Party Service Providers",
      blocks: [
        {
          kind: "paragraph",
          text: "FARMCLUB OS may use trusted third-party service providers where reasonably necessary to operate our website, provide our services, and communicate with users.",
        },
        {
          kind: "paragraph",
          text: "These providers may support functions such as:",
        },
        {
          kind: "list",
          items: [
            "Website hosting and infrastructure",
            "Email and communication delivery",
            "Data storage",
            "Website security",
            "Analytics and performance monitoring",
            "Technical maintenance and development",
          ],
        },
        {
          kind: "paragraph",
          text: "Information submitted through our website may be transmitted to these service providers where necessary to perform the relevant service.",
        },
        {
          kind: "paragraph",
          text: "We take reasonable steps to work with service providers that maintain appropriate safeguards for personal information.",
        },
        {
          kind: "paragraph",
          text: "We may also disclose information where required by law, legal process, court order, or a competent regulatory authority, or where reasonably necessary to protect the rights, safety, security, or property of FARMCLUB OS or others.",
        },
      ],
    },
    {
      heading: "5. International Data Transfers",
      blocks: [
        {
          kind: "paragraph",
          text: "Some of the technology and service providers used by FARMCLUB OS may process or store information outside Nigeria.",
        },
        {
          kind: "paragraph",
          text: "Where personal information is transferred or processed internationally, FARMCLUB OS will take reasonable steps to ensure that appropriate safeguards are applied as required by applicable data protection law.",
        },
      ],
    },
    {
      heading: "6. Data Security",
      blocks: [
        {
          kind: "paragraph",
          text: "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, disclosure, or destruction.",
        },
        {
          kind: "paragraph",
          text: "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
        },
        {
          kind: "paragraph",
          text: "Where we become aware of a personal data breach that requires notification under applicable law, we will take appropriate steps to investigate, mitigate, and notify relevant parties where required.",
        },
      ],
    },
    {
      heading: "7. Data Retention",
      blocks: [
        {
          kind: "paragraph",
          text: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, managing communications, maintaining appropriate records, resolving disputes, maintaining security, and complying with legal or regulatory obligations.",
        },
        {
          kind: "paragraph",
          text: "When personal information is no longer reasonably required, we will take appropriate steps to delete, anonymise, or securely dispose of it, subject to applicable legal and operational requirements.",
        },
      ],
    },
    {
      heading: "8. Cookies and Similar Technologies",
      blocks: [
        {
          kind: "paragraph",
          text: "FARMCLUB OS may use cookies or similar technologies that are necessary to operate, secure, and improve our website.",
        },
        {
          kind: "paragraph",
          text: "Where we introduce analytics, advertising, personalisation, or other non-essential tracking technologies that require consent under applicable law, we will provide appropriate information and choices regarding their use.",
        },
        {
          kind: "paragraph",
          text: "You may also be able to control cookies through your browser settings.",
        },
      ],
    },
    {
      heading: "9. Your Privacy Rights",
      blocks: [
        {
          kind: "paragraph",
          text: "Subject to applicable law and relevant limitations, you may have rights in relation to your personal information, including the right to:",
        },
        {
          kind: "list",
          items: [
            "Request access to personal information we hold about you.",
            "Request correction of inaccurate or incomplete information.",
            "Request deletion of your personal information in appropriate circumstances.",
            "Object to certain processing of your personal information.",
            "Request restriction of certain processing.",
            "Request portability of your personal information where applicable.",
            "Withdraw consent where processing is based on consent.",
            "Lodge a complaint with the appropriate data protection authority.",
          ],
        },
        {
          kind: "paragraph",
          text: "The availability and scope of these rights may depend on the circumstances and applicable law.",
        },
      ],
    },
    {
      heading: "10. Exercising Your Rights",
      blocks: [
        {
          kind: "paragraph",
          text: "If you have a privacy-related question or would like to exercise an applicable privacy right, please contact us using the details below.",
        },
        {
          kind: "paragraph",
          text: "We may need to verify your identity before completing certain requests in order to protect your personal information.",
        },
        {
          kind: "paragraph",
          text: "We will respond to valid requests within the timeframe required by applicable law.",
        },
        {
          kind: "labelLine",
          label: "Email",
          value: "hello@farmclubos.com",
          href: "mailto:hello@farmclubos.com",
        },
      ],
    },
    {
      heading: "11. Children's Privacy",
      blocks: [
        {
          kind: "paragraph",
          text: "Our website is not intentionally designed to collect personal information from children without appropriate consent or lawful basis.",
        },
        {
          kind: "paragraph",
          text: "If you believe that a child has provided personal information to us in circumstances where it should not have been collected, please contact us so that we can take appropriate action.",
        },
      ],
    },
    {
      heading: "12. Third-Party Websites",
      blocks: [
        {
          kind: "paragraph",
          text: "Our website may contain links to third-party websites, platforms, or services.",
        },
        {
          kind: "paragraph",
          text: "FARMCLUB OS is not responsible for the privacy practices, content, or security of third-party websites.",
        },
        {
          kind: "paragraph",
          text: "We encourage you to review the privacy policies of any third-party services you choose to use.",
        },
      ],
    },
    {
      heading: "13. Changes to This Privacy Policy",
      blocks: [
        {
          kind: "paragraph",
          text: "We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or privacy practices.",
        },
        {
          kind: "paragraph",
          text: `When we make material changes, we will update the "Last Updated" date at the top of this policy and, where appropriate, provide additional notice.`,
        },
      ],
    },
    {
      heading: "14. Contact Us",
      blocks: [
        {
          kind: "paragraph",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or how FARMCLUB OS handles personal information, please contact us:",
        },
        { kind: "paragraph", text: "**FARMCLUB OS**" },
        {
          kind: "labelLine",
          label: "Email",
          value: "hello@farmclubos.com",
          href: "mailto:hello@farmclubos.com",
        },
        { kind: "labelLine", label: "Location", value: "Lagos State, Nigeria" },
        {
          kind: "paragraph",
          text: "We are committed to handling privacy enquiries responsibly and working to resolve concerns regarding the processing of personal information.",
        },
      ],
    },
  ],
};
