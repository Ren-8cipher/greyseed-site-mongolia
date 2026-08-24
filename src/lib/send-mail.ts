/** Direct email delivery to the GREYSEED inbox — no mail app, no Gmail tab. */
export const INBOX = "soderdene803@gmail.com";

const ENDPOINT = `https://formsubmit.co/ajax/${INBOX}`;

/** Posts the given fields straight to the restaurant inbox. Throws on failure. */
export async function sendMail(subject: string, fields: Record<string, string>) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, _template: "table", _captcha: "false", ...fields }),
  });
  if (!res.ok) throw new Error(`Mail failed: ${res.status}`);
  const data = (await res.json()) as { success?: string | boolean };
  if (data.success === false || data.success === "false") throw new Error("Mail rejected");
}
