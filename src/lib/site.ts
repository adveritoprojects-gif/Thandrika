export const SITE = {
  name: "Santhidham Dharma Peedom",
  nameMl: "",
  shortName: "Santhidham",
  person: "Sri. Muraleedhara Swamikal",
  personHonorific: "Sri. Muraleedhara Swamikal",
  personTitle: "Thandrika Jyothisha Acharyan",
  institution: "Madadhipathi Sadguru Ashram",
  locality: "Pantheerankavu",
  region: "Kerala",
  phone: "9895843138",
  phoneIntl: "+919895843138",
  whatsappNumber: "919895843138",
  email: "sadguru9895@gmail.com",
  address: {
    line1: "Santhidham Dharma Peedom",
    line2: "Madadhipathi Sadguru Ashram",
    line3: "Pantheerankavu, Kerala",
  },
} as const;

/**
 * Canonical base URL. Set NEXT_PUBLIC_SITE_URL in the environment for
 * production (e.g. https://example.com) — no domain is assumed here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Hello, I would like to enquire about a consultation with Santhidham Dharma Peedom.";
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telLink() {
  return `tel:${SITE.phoneIntl}`;
}

export const consultationOptions = [
  "Jyothisha Consultation",
  "Thandrika Guidance",
  "Spiritual Consultation",
  "Family & Life Guidance",
  "Spiritual Practices",
] as const;
