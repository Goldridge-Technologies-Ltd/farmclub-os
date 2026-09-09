import type { Metadata } from "next";
import { LegalDocument } from "@/components/ui/LegalDocument";
import { termsOfServiceContent } from "@/content/pages/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms covering use of the FARMCLUB OS public website.",
};

export default function TermsOfServicePage() {
  return <LegalDocument content={termsOfServiceContent} />;
}
