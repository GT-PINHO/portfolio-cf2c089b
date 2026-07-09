const CONSENT_KEY = "portfolio-lgpd-consent";

export type ConsentChoice = "accepted" | "rejected";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setConsent(choice: ConsentChoice): void {
  localStorage.setItem(CONSENT_KEY, choice);
}

export function canLoadAnalytics(): boolean {
  return getConsent() === "accepted";
}
