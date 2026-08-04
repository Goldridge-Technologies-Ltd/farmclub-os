import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farmclub-os.com"),
  title: {
    default: "FARMCLUB OS",
    template: "%s | FARMCLUB OS",
  },
  description:
    "FARMCLUB OS is a digital platform for agricultural entrepreneurship, innovation and ecosystem transformation.",
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/app-icon.svg",
  },
  openGraph: {
    title: "FARMCLUB OS",
    description:
      "A digital platform for agricultural entrepreneurship, innovation and ecosystem transformation.",
    siteName: "FARMCLUB OS",
    images: [
      {
        url: "/brand/social-avatar.svg",
        width: 1080,
        height: 1080,
        alt: "FARMCLUB OS",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
