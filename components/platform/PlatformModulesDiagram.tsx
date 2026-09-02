import { IconDisc } from "@/components/ui/IconDisc";
import type { DiscTone } from "@/components/ui/IconDisc";
import type { PlatformModule } from "@/content/pages/platform";

type PlatformModulesDiagramProps = {
  modules: PlatformModule[];
};

/*
  FARMCLUB OS at the centre with the six platform modules on a dashed radial
  ring, following the same construction as the homepage EcosystemDiagram
  (components/home/EcosystemDiagram.tsx). Below `lg` the ring collapses into a
  plain icon grid so nothing shrinks past legibility on a phone.
*/
const RING_ANGLES = [270, 330, 30, 90, 150, 210];
const ORBIT_RADIUS = 40; // % of the square, so nodes sit on the dashed ring

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function PlatformModulesDiagram({
  modules,
}: PlatformModulesDiagramProps) {
  return (
    <div>
      <ul className="sr-only">
        {modules.map((module) => (
          <li key={module.title}>
            {module.title}: {module.description}
          </li>
        ))}
      </ul>

      {/* Compact layout for small screens */}
      <ul
        aria-hidden="true"
        className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:hidden"
      >
        {modules.map((module, index) => (
          <li
            key={module.title}
            className="flex flex-col items-center gap-3 text-center"
          >
            <IconDisc
              name={module.icon}
              tone={index % 2 === 0 ? "green" : "gold"}
              size="md"
            />
            <p className="text-[0.8rem] leading-5 font-semibold text-farm-green-950">
              {module.title}
            </p>
          </li>
        ))}
      </ul>

      {/* Radial diagram for large screens */}
      <div
        aria-hidden="true"
        className="relative mx-auto hidden aspect-square max-w-[36rem] lg:block"
      >
        <span
          className="absolute rounded-full border border-dashed border-farm-green-700/30"
          style={{ inset: `${50 - ORBIT_RADIUS}%` }}
        />

        <div className="absolute top-1/2 left-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-farm-green-950 text-center shadow-[var(--shadow-raised)]">
          <p className="text-[1.05rem] leading-tight font-semibold tracking-wide text-white">
            FARMCLUB
          </p>
          <p className="text-[1.05rem] leading-tight font-semibold tracking-wide text-farm-gold-500">
            OS
          </p>
        </div>

        {modules.map((module, index) => {
          const tone: DiscTone = index % 2 === 0 ? "green" : "gold";
          return (
            <div
              key={module.title}
              className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5"
              style={polar(RING_ANGLES[index], ORBIT_RADIUS)}
            >
              <IconDisc name={module.icon} tone={tone} size="lg" halo />
              <p className="text-center text-[0.85rem] leading-5 font-semibold text-farm-green-950">
                {module.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
