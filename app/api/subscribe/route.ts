import { NextResponse } from "next/server";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { escapeHtml, sendZeptoMail } from "@/lib/zeptomail";

const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isRateLimited = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: 5,
});

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return errorResponse(
      "Too many requests. Please wait a while before trying again.",
      429,
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  if (typeof body !== "object" || body === null) {
    return errorResponse("Invalid request body.", 400);
  }

  const record = body as Record<string, unknown>;

  /*
    Honeypot: a real visitor never sees or fills this field (see
    NewsletterSignup.tsx). A bot that blindly fills every input gets a fake
    success so it stops retrying, but nothing is sent or recorded.
  */
  const honeypot = typeof record.website === "string" ? record.website.trim() : "";
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  const email = typeof record.email === "string" ? record.email.trim() : "";
  if (!email) return errorResponse("Email is required.", 400);
  if (email.length > MAX_EMAIL_LENGTH) return errorResponse("Email is too long.", 400);
  if (!EMAIL_PATTERN.test(email)) {
    return errorResponse("Enter a valid email address.", 400);
  }

  const token = process.env.ZEPTOMAIL_TOKEN;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.NEWSLETTER_TO_EMAIL;

  if (!token || !fromEmail || !toEmail) {
    console.error("Newsletter signup: missing required ZeptoMail environment variables.");
    return errorResponse("The newsletter signup is not configured correctly.", 500);
  }

  try {
    const { ok, status } = await sendZeptoMail({
      token,
      from: { address: fromEmail, name: "FarmClub OS" },
      to: { address: toEmail, name: "FarmClub OS Subscribers" },
      replyTo: { address: email },
      subject: "New newsletter signup",
      htmlBody: `
        <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a;">
          <p>New newsletter signup from the FarmClub OS website.</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
      `.trim(),
    });

    if (!ok) {
      console.error(`Newsletter signup: ZeptoMail responded with status ${status}.`);
      return errorResponse("We could not process your signup right now.", 502);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup: unexpected error while sending notification.", error);
    return errorResponse("Something went wrong. Please try again.", 500);
  }
}
