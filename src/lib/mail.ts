export const OFFICIAL_EMAIL = "soderdene803@gmail.com";

/** Opens the visitor's mail app with a pre-filled message to the official inbox. */
export function mailtoLink(subject: string, lines: [string, string][]) {
  const body = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Gmail compose fallback (works when no desktop mail client is configured). */
export function gmailLink(subject: string, lines: [string, string][]) {
  const body = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    OFFICIAL_EMAIL,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
