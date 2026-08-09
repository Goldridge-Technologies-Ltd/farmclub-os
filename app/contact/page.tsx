import type { Metadata } from "next";
import Image from "next/image";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ContactFormShell } from "@/components/ui/ContactFormShell";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactPageContent as content } from "@/content/pages/contact";

export const metadata: Metadata = { title: "Contact", description: "Choose the right enquiry pathway and prepare a message for FARMCLUB OS." };

export default function ContactPage() {
  return (
    <>
      <section className="bg-farm-cream-100"><div className="site-container grid min-h-[calc(100svh-5rem)] gap-10 py-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <div><SectionLabel>{content.hero.eyebrow}</SectionLabel><h1 className="mt-5 text-4xl font-semibold leading-[1.04] text-farm-green-950 sm:text-6xl lg:text-7xl">{content.hero.heading}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-farm-muted sm:text-xl">{content.hero.description}</p></div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg lg:min-h-[650px]"><Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" /></div>
      </div></section>
      <section className="section-padding bg-white"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionIntro eyebrow={content.introduction.eyebrow} heading={content.introduction.heading} /><p className="text-lg leading-8 text-farm-muted lg:pt-9">{content.introduction.description}</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{content.pathways.items.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div></section>
      <section className="section-padding bg-farm-green-950 text-white"><div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div className="lg:sticky lg:top-28"><SectionLabel tone="dark">Prepare your message</SectionLabel><h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{content.form.heading}</h2><p className="mt-5 text-base leading-8 text-white/74">{content.form.description}</p><p className="mt-8 border-l-4 border-farm-gold-400 pl-5 text-sm leading-7 text-white/70">{content.form.privacyNote}</p></div><ContactFormShell enquiryTypes={content.enquiryTypes} integrationNote={content.form.integrationNote} /></div></section>
    </>
  );
}
