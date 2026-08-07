import { CONTACT } from "../lib/content";
import { whatsappUrl, WHATSAPP_NUMBER } from "../lib/contact";
import Container from "./ui/Container";

const OTHER_CHANNELS = [
  { k: "E-mail", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { k: "LinkedIn", v: "/odavidpinho", href: CONTACT.linkedin },
  { k: "GitHub", v: "GT-PINHO", href: CONTACT.github },
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

/** Bloco de conversão: sempre visível (sem reveal / opacity:0). */
export default function Contato() {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=6&data=${encodeURIComponent(
    whatsappUrl()
  )}`;

  return (
    <section id="contato" className="section-anchor pb-2 pt-8 md:pb-4 md:pt-10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-surface-line bg-surface-raised p-7 sm:p-10">
          <div className="relative">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/40" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  04 — Contato
                </span>
              </div>

              <h2 className="font-display text-xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-2xl">
                {CONTACT.headline}
              </h2>
              <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-soft">
                {CONTACT.lead}
              </p>
              <p className="mt-3 text-sm text-muted">
                <strong className="font-medium text-ink">Localização:</strong> {CONTACT.location}
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-accent/40 bg-accent/10 px-5 py-5 transition-[transform,colors] hover:-translate-y-0.5 hover:border-accent hover:bg-accent/15 sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      <IconWhatsApp />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        WhatsApp
                      </p>
                      <p className="mt-0.5 font-display text-md font-bold tracking-tight text-ink sm:text-lg">
                        {CONTACT.whatsappDisplay}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Resposta mais rápida por aqui
                      </p>
                    </div>
                  </div>
                  <span className="hidden shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:flex">
                    <IconArrow />
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-4 md:hidden">
                  <div className="shrink-0 rounded-lg bg-white p-1.5">
                    <img
                      src={qrSrc}
                      alt="QR Code para WhatsApp de David Pinho"
                      width={96}
                      height={96}
                      loading="lazy"
                      className="h-24 w-24 max-w-[180px] rounded-md"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Escanear
                    </p>
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-hit mt-1 truncate text-sm text-soft hover:text-accent"
                    >
                      wa.me/{WHATSAPP_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="grid min-w-0 gap-3 sm:grid-cols-3">
                  {OTHER_CHANNELS.map((c) => (
                    <a
                      key={c.k}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      title={c.v}
                      className="min-w-0 rounded-xl border border-surface-line px-4 py-4 transition-[transform,colors] hover:-translate-y-0.5 hover:border-accent/30"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] text-muted">{c.k}</p>
                      <p className="mt-1 break-all font-display text-sm font-semibold leading-snug text-ink">
                        {c.v}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
