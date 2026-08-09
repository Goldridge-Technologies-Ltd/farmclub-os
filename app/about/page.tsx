import type { Metadata } from "next";
import Image from "next/image";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatementPanel } from "@/components/ui/StatementPanel";
import { aboutPageContent as content } from "@/content/pages/about";

export const metadata: Metadata = { title: "About", description: "Why FARMCLUB OS exists and how it connects technology, agricultural enterprise, institutions and practical experience." };

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden bg-farm-green-950 text-white">
        <div className="site-container grid min-h-[calc(100svh-5rem)] gap-8 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-14">
          <div className="relative z-10 max-w-3xl py-8 lg:py-16">
            <SectionLabel tone="dark">{content.hero.eyebrow}</SectionLabel>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">{content.hero.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">{content.hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href={content.hero.primaryAction.href} variant="gold">{content.hero.primaryAction.label}</ButtonLink><ButtonLink href={content.hero.secondaryAction.href} variant="dark">{content.hero.secondaryAction.label}</ButtonLink></div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-lg sm:min-h-[520px] lg:min-h-[650px]">
            <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-farm-green-950/78 p-5 backdrop-blur-sm"><p className="text-sm font-semibold">Technology &middot; Enterprise &middot; Institutions &middot; Practice</p></div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white"><div className="site-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]"><SectionIntro eyebrow={content.caseForChange.eyebrow} heading={content.caseForChange.heading} /><div className="lg:pt-9">{content.caseForChange.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5 text-lg leading-8 text-farm-muted">{paragraph}</p>)}<StatementPanel statement={content.caseForChange.organisingIdea} /></div></div></section>
      <section className="section-padding bg-farm-cream-100"><div className="site-container"><div className="grid gap-8 border-b border-farm-border pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><SectionIntro eyebrow={content.purpose.eyebrow} heading={content.purpose.heading} /><p className="max-w-2xl text-lg leading-8 text-farm-muted lg:justify-self-end">{content.purpose.description}</p></div><div className="grid lg:grid-cols-2">{[content.purpose.mission, content.purpose.vision].map((item, index) => <article key={item.title} className={["py-10 lg:p-12", index === 0 ? "border-b border-farm-border lg:border-b-0 lg:border-r" : ""].join(" ")}><p className="text-sm font-semibold uppercase tracking-[0.18em] text-farm-green-700">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-3xl font-semibold text-farm-green-950">{item.title}</h3><p className="mt-5 text-lg leading-8 text-farm-muted">{item.description}</p></article>)}</div></div></section>
      <section className="section-padding bg-white"><div className="site-container"><SectionIntro eyebrow={content.principles.eyebrow} heading={content.principles.heading} /><ol className="mt-12 divide-y divide-farm-border border-y border-farm-border">{content.principles.items.map((item) => <li key={item.title} className="grid gap-3 py-7 md:grid-cols-[5rem_0.8fr_1.2fr]"><span className="text-sm font-semibold text-farm-gold-500">{item.label}</span><h3 className="text-xl font-semibold text-farm-green-950">{item.title}</h3><p className="text-base leading-7 text-farm-muted">{item.description}</p></li>)}</ol></div></section>
      <section className="section-padding bg-farm-green-950 text-white"><div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div className="lg:sticky lg:top-28"><SectionLabel tone="dark">{content.positioning.eyebrow}</SectionLabel><h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{content.positioning.heading}</h2><p className="mt-6 text-lg leading-8 text-white/74">{content.positioning.description}</p></div><div className="grid gap-4 sm:grid-cols-2">{content.positioning.connections.map((item, index) => <article key={item.title} className="dark-panel min-h-48 p-6"><span className="text-sm font-semibold text-farm-gold-400">0{index + 1}</span><h3 className="mt-7 text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p></article>)}</div></div></section>
      <section className="section-padding bg-farm-cream-50"><div className="site-container grid gap-12 lg:grid-cols-[1.12fr_0.88fr]"><div><SectionIntro eyebrow={content.audiences.eyebrow} heading={content.audiences.heading} /><ul className="mt-8 grid gap-x-8 sm:grid-cols-2">{content.audiences.groups.map((group) => <li key={group} className="border-b border-farm-border py-4 font-semibold text-farm-green-950">{group}</li>)}</ul></div><div><SectionIntro eyebrow={content.commitments.eyebrow} heading={content.commitments.heading} /><div className="mt-8 grid gap-3">{content.commitments.items.map((item, index) => <FeatureCard key={item.title} title={item.title} description={item.description} badge={String(index + 1).padStart(2, "0")} />)}</div></div></div></section>
      <section className="bg-white py-12"><div className="site-container rounded-lg border border-farm-border bg-farm-cream-100 p-7 sm:p-10 lg:grid lg:grid-cols-[0.35fr_1fr] lg:gap-10"><SectionLabel>{content.stewardship.eyebrow}</SectionLabel><div><h2 className="mt-4 text-3xl font-semibold text-farm-green-950 lg:mt-0">{content.stewardship.heading}</h2><p className="mt-5 max-w-3xl leading-8 text-farm-muted">{content.stewardship.description}</p></div></div></section>
      <CtaBand {...content.cta} />
    </>
  );
}
