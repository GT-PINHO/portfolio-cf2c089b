import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { getConsent, setConsent, type ConsentChoice } from "../../lib/consent";
import CookieConsent from "./CookieConsent";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

type PrivacyContextValue = {
  openPrivacyPolicy: () => void;
  consent: ConsentChoice | null;
  acceptConsent: () => void;
  rejectConsent: () => void;
};

const PrivacyContext = createContext<PrivacyContextValue | null>(null);

export function usePrivacy() {
  const ctx = useContext(PrivacyContext);
  if (!ctx) throw new Error("usePrivacy must be used within PrivacyProvider");
  return ctx;
}

export default function PrivacyProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentChoice | null>(() => getConsent());
  const [policyOpen, setPolicyOpen] = useState(false);

  const acceptConsent = useCallback(() => {
    setConsent("accepted");
    setConsentState("accepted");
  }, []);

  const rejectConsent = useCallback(() => {
    setConsent("rejected");
    setConsentState("rejected");
  }, []);

  const openPrivacyPolicy = useCallback(() => setPolicyOpen(true), []);

  const value = useMemo(
    () => ({ openPrivacyPolicy, consent, acceptConsent, rejectConsent }),
    [openPrivacyPolicy, consent, acceptConsent, rejectConsent]
  );

  return (
    <PrivacyContext.Provider value={value}>
      {children}
      <PrivacyPolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
      {consent === null && <CookieConsent />}
    </PrivacyContext.Provider>
  );
}
