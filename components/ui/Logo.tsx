import Image from "next/image";

type LogoVariant = "primary" | "reversed" | "symbol" | "symbolReversed";

type LogoProps = {
  variant?: LogoVariant;
  priority?: boolean;
  className?: string;
};

const logoAssets: Record<
  LogoVariant,
  { src: string; alt: string; width: number; height: number }
> = {
  primary: {
    src: "/brand/primary-logo-horizontal.svg",
    alt: "FARMCLUB OS",
    width: 1200,
    height: 320,
  },
  reversed: {
    src: "/brand/reversed-logo-horizontal-white.svg",
    alt: "FARMCLUB OS",
    width: 1200,
    height: 320,
  },
  symbol: {
    src: "/brand/symbol-mark.svg",
    alt: "FARMCLUB OS symbol",
    width: 512,
    height: 512,
  },
  symbolReversed: {
    src: "/brand/symbol-mark-white.svg",
    alt: "FARMCLUB OS symbol",
    width: 512,
    height: 512,
  },
};

export function Logo({
  variant = "primary",
  priority = false,
  className,
}: LogoProps) {
  const asset = logoAssets[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={className}
    />
  );
}
