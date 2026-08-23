"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../../lib/content";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-4 sm:items-center"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-labelledby="privacy-title"
            aria-modal="true"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="max-h-[85vh] w-full max-w-[680px] overflow-y-auto rounded-2xl border border-surface-line bg-surface p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Transparência
                </p>
                <h2 id="privacy-title" className="mt-2 font-display text-xl font-bold text-ink">
                  Privacidade
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-raised hover:text-ink"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                <strong className="text-ink">Responsável:</strong> David Pinho ({CONTACT.email}),
                Americana, SP.
              </p>
              <p>
                Este portfólio é um site informativo. Não há cadastro, login, cookies de rastreamento
                nem formulário que armazene dados em servidor próprio.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Ao clicar em WhatsApp, LinkedIn, GitHub ou e-mail, a interação passa a ser com essas
                  plataformas e segue as políticas delas.
                </li>
                <li>
                  O QR Code de WhatsApp pode ser gerado por serviço de terceiros
                  (api.qrserver.com) apenas com o link público do WhatsApp.
                </li>
              </ul>
              <p>
                Dúvidas:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                  {CONTACT.email}
                </a>
                .
              </p>
              <p className="text-sm text-muted/80">Última atualização: julho de 2026.</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-on-accent sm:w-auto sm:px-8"
              style={{ background: "#06b6d4" }}
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
