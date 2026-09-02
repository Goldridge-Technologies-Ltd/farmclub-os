"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";

type ContactFormShellProps = {
  enquiryTypes: string[];
  integrationNote?: string;
};

type FieldName =
  | "name"
  | "email"
  | "organisation"
  | "enquiryType"
  | "message"
  | "consent";
type FormErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "reviewing" | "invalid" | "reviewed";

/*
  Presentation only has changed here. There is still no delivery integration
  (see docs/project-brief.md), so the form validates on the device and says so
  plainly rather than implying a message was sent.
*/
const fieldClass =
  "min-h-12 w-full rounded-button border border-farm-border-strong bg-white px-3.5 text-sm text-farm-charcoal placeholder:text-farm-muted focus:border-farm-green-700 focus:outline-none";

export function ContactFormShell({
  enquiryTypes,
  integrationNote = "Online delivery is not connected yet. Nothing entered here will be sent or stored.",
}: ContactFormShellProps) {
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Enter a valid email address.";
    if (!enquiryType) nextErrors.enquiryType = "Select a subject.";
    if (message.length < 20)
      nextErrors.message =
        "Add at least 20 characters so the enquiry has enough context.";
    if (data.get("consent") !== "on")
      nextErrors.consent =
        "Confirm that you understand this interim form does not transmit data.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("reviewing");
    window.setTimeout(() => setStatus("reviewed"), 350);
  }

  return (
    <form
      className="rounded-panel border border-farm-border bg-white p-6 sm:p-8"
      aria-label="Prepare a contact enquiry"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="text-[1.35rem] text-farm-green-950">Send Us a Message</h2>
      <p className="mt-2 text-sm leading-6 text-farm-muted">
        Fill in the form and our team will get back to you as soon as possible.
      </p>

      <div className="mt-6 grid gap-4">
        <FormStatusMessage status={status} integrationNote={integrationNote} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="name" error={errors.name} required>
            <input
              className={fieldClass}
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full Name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </Field>
          <Field label="Email address" name="email" error={errors.email} required>
            <input
              className={fieldClass}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </Field>
        </div>

        <Field label="Organisation / Company" name="organisation">
          <input
            className={fieldClass}
            type="text"
            name="organisation"
            autoComplete="organization"
            placeholder="Organisation / Company"
          />
        </Field>

        <Field
          label="Subject"
          name="enquiryType"
          error={errors.enquiryType}
          required
        >
          <select
            className={fieldClass}
            name="enquiryType"
            defaultValue=""
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={
              errors.enquiryType ? "enquiryType-error" : undefined
            }
          >
            <option value="" disabled>
              Select a subject
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" name="message" error={errors.message} required>
          <textarea
            className={`${fieldClass} min-h-36 py-3 leading-6`}
            name="message"
            placeholder="Message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
        </Field>

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-farm-muted">
            <input
              className="mt-1 h-4.5 w-4.5 shrink-0 accent-farm-green-800"
              type="checkbox"
              name="consent"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span>
              I understand that this interim form validates my message on this
              device but does not send or store it.
            </span>
          </label>
          {errors.consent ? (
            <p
              id="consent-error"
              className="mt-2 text-sm font-semibold text-red-700"
              role="alert"
            >
              {errors.consent}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={status === "reviewing"}
          className="group inline-flex min-h-12 w-fit items-center justify-center gap-2.5 rounded-button bg-farm-green-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-farm-green-900 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "reviewing" ? "Checking…" : "Review Message"}
          <Icon
            name="arrow-right"
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required = false,
  children,
}: {
  label: string;
  name: FieldName;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-farm-green-950">
        {label}
        {required ? <span className="text-farm-gold-600"> *</span> : null}
      </span>
      {children}
      {error ? (
        <span
          id={`${name}-error`}
          className="text-sm font-semibold text-red-700"
          role="alert"
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}

function FormStatusMessage({
  status,
  integrationNote,
}: {
  status: FormStatus;
  integrationNote: string;
}) {
  if (status === "idle")
    return (
      <p className="rounded-button border border-farm-border bg-farm-cream-50 p-3.5 text-xs leading-6 text-farm-muted">
        {integrationNote}
      </p>
    );
  if (status === "invalid")
    return (
      <p
        className="rounded-button border border-red-300 bg-red-50 p-3.5 text-sm font-semibold text-red-800"
        role="alert"
      >
        Review the highlighted fields. Nothing has been sent.
      </p>
    );
  if (status === "reviewing")
    return (
      <p
        className="rounded-button border border-farm-border bg-farm-cream-50 p-3.5 text-sm font-semibold text-farm-green-950"
        role="status"
      >
        Checking your message locally…
      </p>
    );
  return (
    <div
      className="rounded-button border border-farm-green-700 bg-farm-green-100 p-3.5"
      role="status"
    >
      <p className="text-sm font-semibold text-farm-green-950">
        Your enquiry is complete.
      </p>
      <p className="mt-1 text-xs leading-6 text-farm-green-900">
        Nothing was sent or stored. Email hello@farmclubos.com to reach the team
        while online delivery is being connected.
      </p>
    </div>
  );
}
