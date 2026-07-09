import { motion, AnimatePresence } from "framer-motion";
import { usePrivacy } from "./PrivacyProvider";

export default function CookieConsent() {
  const { acceptConsent, rejectConsent, openPrivacyPolicy } = usePrivacy();

  return (
    <AnimatePresence>
      <motion.aside
        role="dialog"
        aria-labelledby="lgpd-title"
        aria-describedby="lgpd-desc"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-[640px] rounded-2xl border border-surface-line bg-surface/95 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-6 sm:p-6"
      >
        <p id="lgpd-title" className="font-display text-[15px] font-bold text-ink">
          Privacidade e LGPD
        </p>
        <p id="lgpd-desc" className="mt-2 text-[13px] leading-relaxed text-muted">
          Este site não coleta dados pessoais por formulário. Usamos armazenamento local apenas para
          registrar sua preferência de privacidade. Na seção de contato, um QR Code pode ser gerado
          por serviço de terceiros.{" "}
          <button
            type="button"
            onClick={openPrivacyPolicy}
            className="text-accent underline-offset-2 hover:underline"
          >
            Leia a Política de Privacidade
          </button>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={acceptConsent}
            className="rounded-full px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#06b6d4" }}
          >
            Entendi
          </button>
          <button
            type="button"
            onClick={rejectConsent}
            className="rounded-full border border-surface-line px-4 py-2 text-[13px] font-medium text-muted transition-colors hover:border-ink/30 hover:text-ink"
          >
            Apenas essencial
          </button>
          <button
            type="button"
            onClick={openPrivacyPolicy}
            className="rounded-full px-4 py-2 text-[13px] font-medium text-accent transition-colors hover:text-ink"
          >
            Saiba mais
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
