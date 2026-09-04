import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PrivacyBlock, PrivacyPolicyContent } from "@/content/pages/privacy-policy";

function renderInlineText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

function Block({ block }: { block: PrivacyBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="text-sm leading-7 text-farm-charcoal">
          {renderInlineText(block.text)}
        </p>
      );
    case "subheading":
      return (
        <h3 className="text-base font-semibold text-farm-green-950">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="grid list-disc gap-2 pl-5 text-sm leading-7 text-farm-charcoal marker:text-farm-green-700">
          {block.items.map((item) => (
            <li key={item}>{renderInlineText(item)}</li>
          ))}
        </ul>
      );
    case "labelLine":
      return (
        <p className="text-sm leading-7 text-farm-charcoal">
          <span className="font-semibold text-farm-green-950">
            {block.label}:
          </span>{" "}
          {block.href ? (
            <a
              href={block.href}
              className="font-semibold text-farm-green-800 underline decoration-farm-gold-500 underline-offset-4"
            >
              {block.value}
            </a>
          ) : (
            block.value
          )}
        </p>
      );
  }
}

export function LegalDocument({ content }: { content: PrivacyPolicyContent }) {
  return (
    <div className="bg-white">
      <div className="site-container max-w-3xl py-16">
        <SectionLabel>{content.eyebrow}</SectionLabel>
        <h1 className="mt-3 text-[2.1rem] leading-tight text-farm-green-950 sm:text-[2.6rem]">
          {content.heading}
        </h1>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-farm-muted">
          Last updated: {content.lastUpdated}
        </p>

        <div className="mt-6 grid gap-4">
          {content.intro.map((paragraph, index) => (
            <p key={index} className="text-[0.975rem] leading-7 text-farm-muted">
              {renderInlineText(paragraph)}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg text-farm-green-950 sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-4 grid gap-4">
                {section.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
