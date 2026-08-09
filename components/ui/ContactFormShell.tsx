"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type ContactFormShellProps = {
  enquiryTypes: string[];
  integrationNote?: string;
};

type FieldName = "name" | "email" | "organisation" | "enquiryType" | "message" | "consent";
type FormErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "reviewing" | "invalid" | "reviewed";

const inputClass = "min-h-12 rounded-md border border-farm-border bg-white px-3 text-base font-normal text-farm-charcoal";

export function ContactFormShell({ enquiryTypes, integrationNote = "Online delivery is not connected yet. Nothing entered here will be sent or stored." }: ContactFormShellProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: FormErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const enquiryType = String(data.get("enquiryType") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) nextErrors.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!enquiryType) nextErrors.enquiryType = "Select an enquiry type.";
    if (message.length < 20) nextErrors.message = "Add at least 20 characters so the enquiry has enough context.";
    if (data.get("consent") !== "on") nextErrors.consent = "Confirm that you understand this interim form does not transmit data.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("reviewing");
    window.setTimeout(() => setStatus("reviewed"), 350);
  }

  return (
    <form className="surface-panel grid gap-5 p-6 text-farm-charcoal sm:p-8" aria-label="Prepare a contact enquiry" noValidate onSubmit={handleSubmit}>
      <FormStatus status={status} integrationNote={integrationNote} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}><input className={inputClass} type="text" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} /></Field>
        <Field label="Email address" name="email" error={errors.email}><input className={inputClass} type="email" name="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} /></Field>
      </div>
      <Field label="Organisation (optional)" name="organisation" error={errors.organisation}><input className={inputClass} type="text" name="organisation" autoComplete="organization" /></Field>
      <Field label="Enquiry type" name="enquiryType" error={errors.enquiryType}>
        <select className={inputClass} name="enquiryType" defaultValue="" aria-invalid={Boolean(errors.enquiryType)} aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}>
          <option value="" disabled>Select an enquiry type</option>
          {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </Field>
      <Field label="Message" name="message" error={errors.message}><textarea className="min-h-40 rounded-md border border-farm-border bg-white p-3 text-base font-normal text-farm-charcoal" name="message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} /></Field>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-farm-muted"><input className="mt-1 h-5 w-5 shrink-0 accent-farm-green-800" type="checkbox" name="consent" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} /><span>I understand that this interim form validates my message on this device but does not send or store it.</span></label>
        {errors.consent ? <p id="consent-error" className="mt-2 text-sm font-semibold text-red-700" role="alert">{errors.consent}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "reviewing"} className="inline-flex min-h-12 items-center justify-center rounded-md bg-farm-gold-400 px-5 py-3 text-sm font-semibold text-farm-green-950 transition-colors hover:bg-farm-gold-500 disabled:cursor-wait disabled:opacity-70">{status === "reviewing" ? "Reviewing…" : "Review enquiry"}</button>
        <p className="text-xs leading-6 text-farm-muted">Local review only. No delivery integration is active.</p>
      </div>
    </form>
  );
}

function Field({ label, name, error, children }: { label: string; name: FieldName; error?: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-semibold text-farm-green-950">{label}{children}{error ? <span id={`${name}-error`} className="text-sm font-semibold text-red-700" role="alert">{error}</span> : null}</label>;
}

function FormStatus({ status, integrationNote }: { status: FormStatus; integrationNote: string }) {
  if (status === "idle") return <p className="rounded-md border border-farm-border bg-farm-cream-100 p-4 text-sm leading-6 text-farm-muted">{integrationNote}</p>;
  if (status === "invalid") return <p className="rounded-md border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">Review the highlighted fields. Nothing has been sent.</p>;
  if (status === "reviewing") return <p className="rounded-md border border-farm-border bg-farm-cream-100 p-4 text-sm font-semibold text-farm-green-950" role="status">Checking your message locally…</p>;
  return <div className="rounded-md border border-farm-green-700 bg-farm-green-100 p-4" role="status"><p className="font-semibold text-farm-green-950">Your enquiry is complete.</p><p className="mt-1 text-sm leading-6 text-farm-green-900">Nothing was sent or stored. Online delivery will be connected in a future implementation.</p></div>;
}
