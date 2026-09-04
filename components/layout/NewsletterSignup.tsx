"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
        Stay Updated
      </h3>
      <p className="mt-4 text-sm leading-6 text-white/64">
        Subscribe for updates on the platform, programmes and opportunities.
      </p>

      {status === "success" ? (
        <p
          className="mt-4 text-sm leading-6 text-farm-gold-400"
          role="status"
        >
          Thanks — we&apos;ll email you when things launch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-4">
          <div className="flex overflow-hidden rounded-button border border-white/22 bg-white/8 focus-within:border-farm-gold-400">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              aria-describedby={status !== "idle" ? "newsletter-status" : undefined}
              className="w-full min-w-[6.5rem] flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/45 focus:outline-none"
            />
            {/*
              Honeypot: hidden from real visitors, but a bot that blindly
              fills every field will fill this one. Left off-screen rather
              than display:none so simple bots that skip hidden fields still
              trip it.
            */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex shrink-0 items-center gap-1.5 bg-farm-green-700 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-farm-green-600 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Subscribe"}
              <Icon name="arrow-right" size={15} />
            </button>
          </div>
          {status === "invalid" || status === "error" ? (
            <p
              id="newsletter-status"
              role="alert"
              className="mt-3 text-xs leading-5 text-farm-gold-400"
            >
              {status === "invalid"
                ? "Enter a valid email address."
                : "Something went wrong, please try again."}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
