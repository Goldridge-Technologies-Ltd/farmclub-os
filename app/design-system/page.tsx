import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
import { ContactFormShell } from "@/components/ui/ContactFormShell";
import { FaqList } from "@/components/ui/FaqList";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Logo } from "@/components/ui/Logo";
import { ResourceCard } from "@/components/ui/ResourceCard";

const swatches = [
  ["Deep green", "bg-farm-green-900", "#0B3D2E"],
  ["Charcoal green", "bg-farm-charcoal", "#16251F"],
  ["Warm gold", "bg-farm-gold-500", "#D8A33A"],
  ["Off white", "bg-farm-cream-100", "#F8F6EE"],
] as const;

export default function DesignSystemPage() {
  return (
    <section className="bg-farm-cream-50 py-16 sm:py-24">
      <div className="site-container space-y-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-farm-green-700">
            Foundation
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-farm-green-950">
            Design System Preview
          </h1>
          <p className="mt-5 text-lg leading-8 text-farm-muted">
            Shared visual primitives for the FARMCLUB OS public website.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {swatches.map(([name, className, value]) => (
            <div
              key={name}
              className="rounded-lg border border-farm-border bg-white p-4 shadow-[var(--shadow-soft)]"
            >
              <div className={`h-24 rounded-md ${className}`} />
              <p className="mt-4 font-semibold text-farm-green-950">{name}</p>
              <p className="mt-1 text-sm text-farm-muted">{value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-lg border border-farm-border bg-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-2xl font-semibold text-farm-green-950">Buttons</h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact">Primary action</ButtonLink>
            <ButtonLink href="/platform" variant="secondary">
              Secondary action
            </ButtonLink>
            <ButtonLink href="/about" variant="text">
              Text link
            </ButtonLink>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-farm-border bg-white p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-semibold text-farm-green-950">
              Light Surface Logo
            </h2>
            <div className="mt-6 max-w-xs">
              <Logo variant="primary" />
            </div>
          </div>
          <div className="rounded-lg bg-farm-green-900 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Dark Surface Logo
            </h2>
            <div className="mt-6 max-w-xs">
              <Logo variant="reversed" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-farm-green-950">
            Reusable Cards
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              label="Engine"
              title="FARMCLUB Academy"
              description="A reusable feature-card pattern for platform modules, audience pathways and capability groups."
              badge="A"
            />
            <ResourceCard
              category="Upcoming"
              title="Knowledge category"
              description="A preview pattern for reviewed resources without presenting fake published articles."
            />
            <FeatureCard
              title="Dark panel"
              description="A dark-surface card treatment for Hub and CTA sections."
              badge="D"
              tone="dark"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-farm-green-950">
              FAQ Pattern
            </h2>
            <div className="mt-6">
              <FaqList
                items={[
                  {
                    question: "What is this component for?",
                    answer:
                      "It provides an accessible disclosure pattern for future FAQ sections.",
                  },
                  {
                    question: "Does it create page content?",
                    answer:
                      "No. It is only a reusable design-system preview until used by a built route.",
                  },
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-farm-green-950">
              Contact Form Shell
            </h2>
            <div className="mt-6">
              <ContactFormShell
                enquiryTypes={[
                  "General enquiry",
                  "Partnership enquiry",
                  "Platform support",
                  "Investor enquiry",
                  "Media enquiry",
                ]}
              />
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="CTA band"
          heading="Reusable call-to-action pattern."
          description="A shared CTA surface for homepage and future route endings."
          primaryAction={{ label: "Primary action", href: "/" }}
          secondaryAction={{ label: "Secondary action", href: "/" }}
        />
      </div>
    </section>
  );
}
