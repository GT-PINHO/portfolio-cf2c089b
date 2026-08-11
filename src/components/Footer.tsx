"use client";

import { useState } from "react";
import { CONTACT, PROFILE } from "../lib/content";
import { CV_URL } from "../lib/cv";
import PrivacyPolicyModal from "./lgpd/PrivacyPolicyModal";
import Container from "./ui/Container";

export default function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false);

  return (
    <footer className="border-t border-surface-line py-6">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-display text-sm font-bold tracking-tight text-ink">
            {PROFILE.name}
          </p>
          <p className="max-w-[42ch] text-center text-xs text-muted sm:text-left">
            {PROFILE.role}
            {PROFILE.specialty ? ` · ${PROFILE.specialty}` : ""}
          </p>
          <p className="text-xs text-muted">© {new Date().getFullYear()}</p>
          <button
            type="button"
            onClick={() => setPolicyOpen(true)}
            className="touch-hit mt-1 rounded-sm text-xs text-muted transition-colors hover:text-accent"
          >
            Privacidade
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted">
          {/* Leva à página do currículo, não a um arquivo: "Baixar" prometia download. */}
          <a href={CV_URL} className="touch-hit rounded-sm hover:text-ink">
            Currículo
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-hit rounded-sm hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-hit rounded-sm hover:text-ink"
          >
            Instagram
          </a>
          <a href={`mailto:${CONTACT.email}`} className="touch-hit rounded-sm hover:text-ink">
            E-mail
          </a>
        </div>
      </Container>

      <PrivacyPolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
