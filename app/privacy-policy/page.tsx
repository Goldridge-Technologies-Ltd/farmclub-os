import type { Metadata } from "next";
import { LegalDocument } from "@/components/ui/LegalDocument";
import { privacyPolicyContent } from "@/content/pages/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The FARMCLUB OS Privacy Policy: what personal information we collect, how we use it, and your rights.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument content={privacyPolicyContent} />;
}
