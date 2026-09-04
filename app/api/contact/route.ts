import { NextResponse } from "next/server";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { escapeHtml, sendZeptoMail } from "@/lib/zeptomail";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_ORGANISATION_LENGTH = 200;
const MAX_ENQUIRY_TYPE_LENGTH = 120;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isRateLimited = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: 5,
});

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  organisation?: string;
  enquiryType?: string;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status });
}

function validate(body: unknown): { data: ContactPayload } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";
  const organisation =
    typeof record.organisation === "string" ? record.organisation.trim() : "";
  const enquiryType =
    typeof record.enquiryType === "string" ? record.enquiryType.trim() : "";

  if (!name) return { error: "Name is required." };
  if (name.length > MAX_NAME_LENGTH) return { error: "Name is too long." };

  if (!email) return { error: "Email is required." };
  if (email.length > MAX_EMAIL_LENGTH) return { error: "Email is too long." };
  if (!EMAIL_PATTERN.test(email)) return { error: "Enter a valid email address." };

  if (!message) return { error: "Message is required." };
  if (message.length > MAX_MESSAGE_LENGTH) return { error: "Message is too long." };

  if (organisation.length > MAX_ORGANISATION_LENGTH) {
    return { error: "Organisation is too long." };
  }
  if (enquiryType.length > MAX_ENQUIRY_TYPE_LENGTH) {
    return { error: "Enquiry type is too long." };
  }

  return {
    data: {
      name,
      email,
      message,
      organisation: organisation || undefined,
      enquiryType: enquiryType || undefined,
    },
  };
}

function buildHtmlBody(data: ContactPayload): string {
  const rows = [
    `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
  ];

  if (data.enquiryType) {
    rows.push(`<p><strong>Subject:</strong> ${escapeHtml(data.enquiryType)}</p>`);
  }
  if (data.organisation) {
    rows.push(
      `<p><strong>Organisation / Company:</strong> ${escapeHtml(data.organisation)}</p>`,
    );
  }

  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a;">
      <p>New message received from the FarmClub OS website.</p>
      ${rows.join("\n")}
      <p><strong>Message:</strong></p>
      <p>${messageHtml}</p>
    </div>
  `.trim();
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return errorResponse(
      "Too many messages sent. Please wait a while before trying again.",
      429,
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  const validation = validate(body);
  if ("error" in validation) {
    return errorResponse(validation.error, 400);
  }

  const { data } = validation;

  const token = process.env.ZEPTOMAIL_TOKEN;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!token || !fromEmail || !toEmail) {
    console.error("Contact form: missing required ZeptoMail environment variables.");
    return errorResponse("The contact form is not configured correctly.", 500);
  }

  try {
    const { ok, status } = await sendZeptoMail({
      token,
      from: { address: fromEmail, name: "FarmClub OS" },
      to: { address: toEmail, name: "FarmClub OS" },
      replyTo: { address: data.email, name: data.name },
      subject: `New contact form message from ${data.name}`,
      htmlBody: buildHtmlBody(data),
    });

    if (!ok) {
      console.error(`Contact form: ZeptoMail responded with status ${status}.`);
      return errorResponse("We could not send your message right now.", 502);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form: unexpected error while sending message.", error);
    return errorResponse("Something went wrong. Please try again.", 500);
  }
}
