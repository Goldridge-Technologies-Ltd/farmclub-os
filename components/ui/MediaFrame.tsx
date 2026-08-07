import Image from "next/image";
import type { ImageAsset } from "@/content/pages/home";

type MediaFrameProps = {
  image: ImageAsset;
  aspect?: string;
  priority?: boolean;
  objectPosition?: string;
  caption?: string;
  className?: string;
};

export function MediaFrame({
  image,
  aspect = "aspect-[4/3]",
  priority = false,
  objectPosition = "object-center",
  caption,
  className,
}: MediaFrameProps) {
  return (
    <figure className={["media-frame relative", aspect, className].filter(Boolean).join(" ")}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={["object-cover", objectPosition].join(" ")}
      />
      {caption ? (
        <figcaption className="absolute bottom-4 left-4 right-4 rounded-md bg-farm-green-950/88 p-4 text-sm leading-6 text-white backdrop-blur">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
