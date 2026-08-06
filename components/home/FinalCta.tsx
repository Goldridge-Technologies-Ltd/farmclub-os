import type { HomePageContent } from "@/content/pages/home";
import { ButtonLink } from "@/components/ui/ButtonLink";

type FinalCtaProps = {
  content: HomePageContent["finalCta"];
};

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <section className="bg-farm-cream-100 py-20 sm:py-28">
      <div className="site-container">
        <div className="rounded-lg bg-farm-green-900 px-6 py-12 text-center text-white sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-farm-gold-400">
            {content.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={content.primaryAction.href} variant="secondary">
              {content.primaryAction.label}
            </ButtonLink>
            <ButtonLink
              href={content.secondaryAction.href}
              className="border border-white/24 bg-transparent text-white hover:border-farm-gold-400 hover:bg-white/8"
            >
              {content.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
