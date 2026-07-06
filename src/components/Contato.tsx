import { motion } from "framer-motion";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from "../lib/contact";
import { Reveal } from "./ui/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";

const OTHER_CHANNELS = [
  { k: "E-mail", v: "davidpinho.st@gmail.com", href: "mailto:davidpinho.st@gmail.com" },
  { k: "Instagram", v: "@odavidpinho", href: "https://instagram.com/odavidpinho" },
  { k: "LinkedIn", v: "/odavidpinho", href: "https://linkedin.com/in/odavidpinho" },
];

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M17 7H9M17 7v8" />
    </svg>
  );
}

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
                  <strong className="font-medium text-ink">Localização:</strong> Americana, SP
                </p>

                <motion.div
                  className="mt-8 flex flex-col gap-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-accent/40 bg-accent/10 px-5 py-5 transition-colors hover:border-accent hover:bg-accent/15 sm:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                        <IconWhatsApp />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                          WhatsApp
                        </p>
                        <p className="mt-0.5 font-display text-[17px] font-bold tracking-tight text-ink sm:text-lg">
                          {WHATSAPP_DISPLAY}
                        </p>
                        <p className="mt-1 text-[12.5px] text-muted">
                          Resposta mais rápida por aqui
                        </p>
                      </div>
                    </div>
                    <span className="hidden shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:flex">
                      <IconArrow />
                    </span>
                  </motion.a>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {OTHER_CHANNELS.map((c) => (
                      <motion.a
                        key={c.k}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        variants={staggerItem}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 280, damping: 26 }}
                        className="rounded-xl border border-surface-line px-4 py-4 transition-colors hover:border-accent/30"
                      >
                        <p className="text-[10.5px] uppercase tracking-[0.12em] text-muted">
                          {c.k}
                        </p>
                        <p className="mt-1 font-display text-[14px] font-semibold leading-snug text-ink">
                          {c.v}
                        </p>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center">
                <div
                  className="flex flex-col items-center gap-4 rounded-2xl border border-accent/25 bg-accent/5 p-6"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
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
