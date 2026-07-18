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
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  LGPD · Lei nº 13.709/2018
                </p>
                <h2 id="privacy-title" className="mt-2 font-display text-xl font-bold text-ink">
                  Política de Privacidade
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

            <div className="space-y-4 text-[14px] leading-relaxed text-muted">
              <p>
                <strong className="text-ink">Controlador:</strong> David Pinho ({CONTACT.email}),
                Americana, SP, Brasil.
              </p>
              <p>
                Este portfólio é um site informativo sobre serviços profissionais. Não há cadastro,
                login ou formulário que armazene dados em servidor próprio.
              </p>

              <section>
                <h3 className="mb-2 font-display text-[15px] font-bold text-ink">Dados que podemos tratar</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong className="text-ink/90">Preferência de privacidade:</strong> armazenada
                    localmente no seu navegador (localStorage) para não exibir o aviso repetidamente.
                  </li>
                  <li>
                    <strong className="text-ink/90">Contato iniciado por você:</strong> ao clicar em
                    WhatsApp, LinkedIn, GitHub ou e-mail, você passa a interagir diretamente com essas
                    plataformas, regidas pelas políticas delas.
                  </li>
                  <li>
                    <strong className="text-ink/90">QR Code de WhatsApp:</strong> gerado via serviço
                    de terceiros (api.qrserver.com) apenas com o link público do WhatsApp, sem envio
                    de dados pessoais seus por este site.
                  </li>
                  <li>
                    <strong className="text-ink/90">Analytics (futuro):</strong> caso ferramentas de
                    métricas sejam adicionadas, só serão ativadas após consentimento explícito.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 font-display text-[15px] font-bold text-ink">Base legal (LGPD)</h3>
                <p>
                  O tratamento se apoia em consentimento (art. 7º, I), execução de medidas
                  pré-contratuais a seu pedido (art. 7º, V) e legítimo interesse para segurança e
                  melhoria do site (art. 7º, IX), sempre respeitando seus direitos.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-display text-[15px] font-bold text-ink">Seus direitos</h3>
                <p>
                  Você pode solicitar confirmação de tratamento, acesso, correção, eliminação,
                  portabilidade, revogação do consentimento ou informações sobre compartilhamento,
                  conforme arts. 17 a 18 da LGPD, pelo e-mail{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                    {CONTACT.email}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-display text-[15px] font-bold text-ink">Retenção e segurança</h3>
                <p>
                  Dados de preferência ficam no seu dispositivo até você limpar o armazenamento do
                  navegador. Mensagens enviadas por WhatsApp ou e-mail seguem as políticas das
                  respectivas plataformas.
                </p>
              </section>

              <p className="text-[13px] text-muted/80">Última atualização: julho de 2026.</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-full py-3 text-[14px] font-semibold text-white sm:w-auto sm:px-8"
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
