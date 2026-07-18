import { CONTACT, PROFILE } from "../lib/content";
import { CV_FILENAME, CV_URL } from "../lib/cv";
import { usePrivacy } from "./lgpd/PrivacyProvider";
import Container from "./ui/Container";

export default function Footer() {
  const { openPrivacyPolicy } = usePrivacy();

  return (
    <footer className="border-t border-surface-line py-6">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-display text-sm font-bold tracking-tight text-ink">
            {PROFILE.name}
          </p>
          <p className="max-w-[42ch] text-center text-[12px] text-muted sm:text-left">
            Meta Ads Specialist · Growth Ops, Tracking, CRM & AI Systems. © 2026
          </p>
          <button
            type="button"
            onClick={openPrivacyPolicy}
            className="mt-1 text-[12px] text-muted transition-colors hover:text-accent"
          >
            Política de Privacidade (LGPD)
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] text-muted">
          <a href={CV_URL} download={CV_FILENAME} className="hover:text-ink">
            Baixar CV
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            GitHub
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
            E-mail
          </a>
        </div>
      </Container>
    </footer>
  );
}
