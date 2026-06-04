import { motion } from "framer-motion";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from "../lib/contact";
import { CV_FILENAME, CV_URL } from "../lib/cv";
import { Reveal } from "./ui/Reveal";
import { ButtonPrimary, ButtonSecondary } from "./ui/Button";

const CHANNELS = [
  { k: "E-mail", v: "davidpinho.st@gmail.com", href: "mailto:davidpinho.st@gmail.com" },
  { k: "WhatsApp", v: WHATSAPP_DISPLAY, href: whatsappUrl() },
  { k: "Instagram", v: "@odavidpinho", href: "https://instagram.com/odavidpinho" },
  { k: "LinkedIn", v: "/odavidpinho", href: "https://linkedin.com/in/odavidpinho" },
];

export default function Contato() {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=6&data=${encodeURIComponent(
    whatsappUrl()
  )}`;

  return (
    <section id="contato" className="scroll-mt-24 py-[clamp(5rem,9vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-surface-line bg-surface-raised/60 p-7 sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-accent">07</span>
                  <span className="h-px w-8 bg-accent/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    Contato
                  </span>
                </div>
                <h2 className="font-display text-[clamp(1.9rem,4.4vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
                  Vamos construir algo juntos?
                </h2>
                <p className="mt-5 max-w-[52ch] text-[1.05rem] leading-relaxed text-muted">
                  Disponível para oportunidades em gestão de tráfego, projetos
                  freelance e demandas de automação/sistemas com IA (CLT ou PJ).
                </p>
                <p className="mt-3 text-[15px] text-muted">
                  <strong className="text-ink">Localização:</strong> Americana — SP
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary href={whatsappUrl()}>
                    Falar no WhatsApp
                  </ButtonPrimary>
                  <ButtonSecondary href={CV_URL} download={CV_FILENAME}>
                    Baixar CV (PDF)
                  </ButtonSecondary>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {CHANNELS.map((c) => (
                    <motion.a
                      key={c.k}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="rounded-xl border border-surface-line px-5 py-4 transition-colors hover:border-accent/40"
                    >
                      <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                        {c.k}
                      </p>
                      <p className="mt-1 font-display text-[15px] font-semibold text-ink">
                        {c.v}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border border-surface-line bg-white p-3">
                  <img
                    src={qrSrc}
                    alt="QR Code para WhatsApp de David Pinho"
                    width={200}
                    height={200}
                    className="h-[180px] w-[180px] rounded-lg"
                  />
                </div>
                <p className="mt-4 text-[13px] leading-snug text-muted">
                  Aponte a câmera
                  <br />
                  para falar no WhatsApp
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[12px] text-accent hover:underline"
                >
                  wa.me/{WHATSAPP_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
