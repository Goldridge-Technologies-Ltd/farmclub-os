import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <section className="bg-farm-cream-50 py-20 sm:py-28">
      <div className="site-container max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-farm-green-700">
          CONNECT · EMPOWER · GROW
        </p>
        <h1 className="text-4xl font-semibold tracking-normal text-farm-green-950 sm:text-6xl">
          FARMCLUB OS
        </h1>
        <p className="mt-6 text-lg leading-8 text-farm-muted">
          Frontend foundation for the public FARMCLUB OS website.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/design-system">View Design System</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
