import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { IconDisc } from "@/components/ui/IconDisc";
import type { DiscTone } from "@/components/ui/IconDisc";
import type { IconName } from "@/components/ui/Icon";
import type { ImageAsset } from "@/content/pages/home";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: IconName;
  tone?: DiscTone;
  label?: string;
  /**
   * Photograph shown as a full-bleed band above the copy. When set it takes the
   * place of the icon disc, so the card leads with the subject rather than a glyph.
   */
  image?: ImageAsset;
  /** Sizes hint for the photograph; mirrors the grid the card sits in. */
  imageSizes?: string;
  /** Centred cards are used in icon grids; left-aligned in content grids. */
  align?: "left" | "center";
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  tone = "green",
  label,
  image,
  imageSizes = "(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 100vw",
  align = "left",
  href,
  linkLabel = "Explore",
  className,
}: FeatureCardProps) {
  const isCenter = align === "center";
  const showIcon = Boolean(icon) && !image;

  return (
    <article
      className={[
        "surface-card group flex h-full flex-col",
        image ? "overflow-hidden" : "p-6 sm:p-7",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image ? (
        // 3:2 matches the source photographs, so faces stay clear of the crop.
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-farm-cream-50">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={imageSizes}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}

      <div
        className={[
          "flex flex-1 flex-col",
          image ? "p-6 sm:p-7" : "",
          isCenter ? "items-center text-center" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {showIcon && icon ? <IconDisc name={icon} tone={tone} /> : null}
        {label ? (
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-farm-gold-600">
            {label}
          </p>
        ) : null}
        <h3
          className={[
            "text-lg text-farm-green-950",
            showIcon && !label ? "mt-5" : label ? "mt-2" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-7 text-farm-muted">{description}</p>
        {href ? (
          <Link
            href={href}
            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-farm-green-800 transition-colors hover:text-farm-green-950"
          >
            {linkLabel}
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
