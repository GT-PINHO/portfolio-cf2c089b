import { motion } from "framer-motion";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from "../lib/contact";
import { CV_FILENAME, CV_URL } from "../lib/cv";
import { Reveal } from "./ui/Reveal";
import { ButtonPrimary, ButtonSecondary } from "./ui/Button";
import { staggerContainer, staggerItem } from "../lib/motion";

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
    <section id="contato" className="scroll-mt-20 py-12 md:py-20">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-surface-line bg-surface-raised p-7 sm:p-10 lg:p-14">
            <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                {/* Kicker */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    Contato
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.9rem,4.4vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
                  Vamos trabalhar juntos?
                </h2>
                <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-relaxed text-muted">
                  Disponível para gestão de tráfego pago, automação de operação e projetos de rastreamento avançado. Fale pelo canal que preferir.
                </p>
                <p className="mt-3 text-[14px] text-muted">
                  <strong className="font-medium text-ink">Localização:</strong> Americana — SP
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonPrimary href={whatsappUrl()}>
                    Falar no WhatsApp
                  </ButtonPrimary>
                  <ButtonSecondary href={CV_URL} download={CV_FILENAME}>
                    Baixar CV (PDF)
                  </ButtonSecondary>
                </div>

                <motion.div
                  className="mt-8 grid gap-3 sm:grid-cols-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {CHANNELS.map((c) => (
                    <motion.a
                      key={c.k}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      variants={staggerItem}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 280, damping: 26 }}
                      className="rounded-xl border border-surface-line px-5 py-4 transition-colors hover:border-accent/30"
                    >
                      <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                        {c.k}
                      </p>
                      <p className="mt-1 font-display text-[15px] font-semibold text-ink">
                        {c.v}
                      </p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* QR Code — só desktop */}
              <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center">
                <div
                  className="flex flex-col items-center gap-4 rounded-2xl border border-surface-line p-6"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Escanear para WhatsApp
                  </p>
                  <div className="rounded-xl bg-white p-2.5">
                    <img
                      src={qrSrc}
                      alt="QR Code para WhatsApp de David Pinho"
                      width={180}
                      height={180}
                      className="h-[160px] w-[160px] rounded-lg"
                    />
                  </div>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-accent hover:underline"
                  >
                    wa.me/{WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
