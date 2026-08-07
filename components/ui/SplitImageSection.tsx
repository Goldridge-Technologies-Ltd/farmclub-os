import type { ReactNode } from "react";
import type { ImageAsset } from "@/content/pages/home";
import { MediaFrame } from "@/components/ui/MediaFrame";

type SplitImageSectionProps = {
  children: ReactNode;
  image: ImageAsset;
  imageSide?: "left" | "right";
  tone?: "light" | "cream" | "dark";
  caption?: string;
};

export function SplitImageSection({
  children,
  image,
  imageSide = "right",
  tone = "light",
  caption,
}: SplitImageSectionProps) {
  const bgClass = {
    light: "bg-white",
    cream: "bg-farm-cream-100",
    dark: "bg-farm-green-950 text-white",
  }[tone];

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className={imageSide === "left" ? "lg:order-2" : undefined}>
          {children}
        </div>
        <MediaFrame
          image={image}
          caption={caption}
          aspect="aspect-[4/3]"
          className={imageSide === "left" ? "lg:order-1" : undefined}
        />
      </div>
    </section>
  );
}
