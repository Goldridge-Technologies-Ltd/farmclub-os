type CapabilityStripProps = {
  capabilities: string[];
};

export function CapabilityStrip({ capabilities }: CapabilityStripProps) {
  return (
    <section aria-label="FARMCLUB OS capabilities" className="bg-farm-green-950 py-5">
      <div className="site-container">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-md border border-white/14 bg-white/8 px-4 py-4 text-sm font-semibold text-white"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
