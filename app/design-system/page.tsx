import type { Metadata } from "next";
import { BulletList } from "@/components/ui/BulletList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { IconDisc } from "@/components/ui/IconDisc";
import { SectionIntro } from "@/components/ui/SectionIntro";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Reference sheet for the FARMCLUB OS colours, type scale, buttons, icons and cards.",
  robots: { index: false, follow: false },
};

const swatches: { name: string; token: string; className: string }[] = [
  { name: "Green 950", token: "#052a19", className: "bg-farm-green-950" },
  { name: "Green 900", token: "#06331f", className: "bg-farm-green-900" },
  { name: "Green 800", token: "#0a4a2d", className: "bg-farm-green-800" },
  { name: "Green 700", token: "#0b6a3e", className: "bg-farm-green-700" },
  { name: "Green 50", token: "#ecf1e9", className: "bg-farm-green-50" },
  { name: "Gold 600", token: "#cd8e19", className: "bg-farm-gold-600" },
  { name: "Gold 500", token: "#ddae39", className: "bg-farm-gold-500" },
  { name: "Gold 400", token: "#edbb59", className: "bg-farm-gold-400" },
  { name: "Cream 50", token: "#f9f9f7", className: "bg-farm-cream-50" },
  { name: "Cream 100", token: "#f4f5f1", className: "bg-farm-cream-100" },
  { name: "Charcoal", token: "#14231c", className: "bg-farm-charcoal" },
  { name: "Muted", token: "#5d6b64", className: "bg-farm-muted" },
];

const iconNames: IconName[] = [
  "learn",
  "innovate",
  "enterprise",
  "connect",
  "market",
  "finance",
  "impact",
  "build",
  "grow",
  "join",
  "target",
  "eye",
  "values",
  "check",
  "arrow-right",
  "arrow-left",
  "play",
  "handshake",
  "globe",
  "leaf",
  "research",
  "platform",
  "rocket",
  "report",
  "video",
  "search",
  "book",
  "community",
  "support",
  "governance",
  "secure",
  "calendar",
  "sustainability",
  "mail",
  "phone",
  "location",
  "clock",
  "menu",
  "close",
  "plus",
  "minus",
  "chevron-down",
  "linkedin",
  "x",
  "facebook",
  "instagram",
  "youtube",
];

export default function DesignSystemPage() {
  return (
    <div className="bg-white">
      <div className="site-container py-14">
        <SectionIntro
          eyebrow="Internal reference"
          heading="FARMCLUB OS Design System"
          description="The tokens, type scale and components every page is built from."
        />

        <Block title="Colour">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <div key={swatch.name}>
                <div
                  className={`h-16 rounded-card border border-farm-border ${swatch.className}`}
                />
                <p className="mt-2 text-sm font-semibold text-farm-green-950">
                  {swatch.name}
                </p>
                <p className="text-xs text-farm-muted">{swatch.token}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Type scale">
          <div className="grid gap-4">
            <h1 className="text-[3.25rem] leading-[1.08] text-farm-green-950">
              Hero heading
            </h1>
            <h2 className="text-[2.4rem] leading-[1.15] text-farm-green-950">
              Section heading
            </h2>
            <h3 className="text-lg text-farm-green-950">Card heading</h3>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-farm-gold-600">
              Eyebrow label
            </p>
            <p className="max-w-2xl text-[0.95rem] leading-7 text-farm-muted">
              Body copy. FARMCLUB OS connects learning, enterprise development,
              innovation and markets through one integrated platform.
            </p>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/design-system">Primary</ButtonLink>
            <ButtonLink href="/design-system" variant="gold">
              Gold
            </ButtonLink>
            <ButtonLink href="/design-system" variant="secondary">
              Secondary
            </ButtonLink>
            <ButtonLink href="/design-system" variant="text">
              Text link
            </ButtonLink>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-card bg-farm-green-950 p-5">
            <ButtonLink href="/design-system" variant="outline-light">
              Outline light
            </ButtonLink>
            <ButtonLink href="/design-system" variant="outline-gold">
              Outline gold
            </ButtonLink>
            <ButtonLink href="/design-system" variant="gold">
              Gold on dark
            </ButtonLink>
          </div>
        </Block>

        <Block title="Icon discs">
          <div className="flex flex-wrap items-center gap-4">
            <IconDisc name="learn" tone="green" />
            <IconDisc name="innovate" tone="gold" />
            <IconDisc name="market" tone="pale" />
            <IconDisc name="finance" tone="outline" />
            <IconDisc name="connect" tone="green" halo />
            <span className="inline-flex rounded-card bg-farm-green-950 p-3">
              <IconDisc name="impact" tone="dark" />
            </span>
          </div>
        </Block>

        <Block title={`Icons (${iconNames.length})`}>
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-8">
            {iconNames.map((name) => (
              <li
                key={name}
                className="flex flex-col items-center gap-2 rounded-card border border-farm-border p-3 text-center"
              >
                <Icon name={name} size={30} className="text-farm-green-800" />
                <span className="text-[0.68rem] leading-tight text-farm-muted">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Cards and lists">
          <div className="grid gap-5 lg:grid-cols-3">
            <FeatureCard
              icon="learn"
              title="Left aligned card"
              description="Used in content grids where cards carry a link."
              href="/design-system"
            />
            <FeatureCard
              icon="grow"
              title="Centred card"
              description="Used in icon grids such as Our Commitment to Change."
              align="center"
            />
            <div className="surface-card p-7">
              <BulletList
                items={[
                  "Learn the right skills",
                  "Start and grow your enterprise",
                  "Access tools, finance and experts",
                ]}
              />
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-farm-border pt-8">
      <h2 className="mb-6 text-xl text-farm-green-950">{title}</h2>
      {children}
    </section>
  );
}
