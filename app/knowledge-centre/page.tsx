import type { Metadata } from "next";
import Image from "next/image";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { knowledgePageContent as content } from "@/content/pages/knowledge";

export const metadata: Metadata = { title: "Knowledge Centre", description: "The growing FARMCLUB OS library for agricultural enterprise knowledge, explainers and approved ecosystem learning." };

export default function KnowledgeCentrePage() {
  return (
    <>
      <section className="bg-white"><div className="site-container grid min-h-[calc(100svh-5rem)] gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div><p className="font-serif text-2xl italic text-farm-gold-500">Knowledge / Practice / Perspective</p><h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-farm-green-950 sm:text-6xl lg:text-7xl">{content.hero.heading}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-farm-muted sm:text-xl">{content.hero.description}</p><div className="mt-9"><ButtonLink href={content.hero.action.href}>{content.hero.action.label}</ButtonLink></div></div>
        <div className="relative min-h-[440px] overflow-hidden rounded-lg lg:min-h-[640px]"><Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-farm-cream-50/94 p-6"><SectionLabel>{content.hero.eyebrow}</SectionLabel></div></div>
      </div></section>
      <section className="border-y border-farm-border bg-farm-cream-100 py-12"><div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionLabel>{content.introduction.eyebrow}</SectionLabel><h2 className="mt-4 text-3xl font-semibold text-farm-green-950 sm:text-4xl">{content.introduction.heading}</h2></div><div><p className="text-lg leading-8 text-farm-muted">{content.introduction.description}</p><p className="mt-6 border-l-4 border-farm-gold-500 pl-5 text-sm font-semibold leading-7 text-farm-green-950">{content.introduction.editorialNote}</p></div></div></section>
      <section id="coverage" className="section-padding scroll-mt-24 bg-white"><div className="site-container"><SectionIntro eyebrow={content.categories.eyebrow} heading={content.categories.heading} /><div className="mt-12 grid gap-px overflow-hidden border border-farm-border bg-farm-border md:grid-cols-2 lg:grid-cols-3">{content.categories.items.map((item) => <article key={item.title} className="group min-h-72 bg-white p-7"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-farm-green-700">{item.label}</span><span className="text-sm font-semibold text-farm-gold-500">{item.badge}</span></div><h3 className="mt-16 text-2xl font-semibold text-farm-green-950">{item.title}</h3><p className="mt-4 text-sm leading-7 text-farm-muted">{item.description}</p></article>)}</div></div></section>
      <section className="section-padding bg-farm-green-950 text-white"><div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><SectionLabel tone="dark">{content.libraryState.eyebrow}</SectionLabel><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{content.libraryState.heading}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">{content.libraryState.description}</p></div><ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/16">{content.libraryState.reviewSteps.map((step, index) => <li key={step} className="bg-farm-green-900 p-6"><span className="text-sm font-semibold text-farm-gold-400">0{index + 1}</span><p className="mt-6 text-lg font-semibold">{step}</p></li>)}</ol></div></section>
      <section className="section-padding bg-farm-cream-50"><div className="site-container"><SectionIntro eyebrow={content.pathways.eyebrow} heading={content.pathways.heading} align="center" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.pathways.items.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div></section>
      <CtaBand {...content.cta} />
    </>
  );
}
