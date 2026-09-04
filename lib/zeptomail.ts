const ZEPTOMAIL_ENDPOINT = "https://api.zeptomail.com/v1.1/email";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EmailAddress = { address: string; name?: string };

type SendZeptoMailParams = {
  token: string;
  from: EmailAddress;
  to: EmailAddress;
  replyTo?: EmailAddress;
  subject: string;
  htmlBody: string;
};

export async function sendZeptoMail({
  token,
  from,
  to,
  replyTo,
  subject,
  htmlBody,
}: SendZeptoMailParams): Promise<{ ok: boolean; status: number }> {
  const response = await fetch(ZEPTOMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify({
      from,
      to: [{ email_address: to }],
      ...(replyTo ? { reply_to: [replyTo] } : {}),
      subject,
      htmlbody: htmlBody,
    }),
  });

  return { ok: response.ok, status: response.status };
}
