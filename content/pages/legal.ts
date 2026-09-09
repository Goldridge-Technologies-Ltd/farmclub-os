export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "labelLine"; label: string; value: string; href?: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocumentContent = {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};
