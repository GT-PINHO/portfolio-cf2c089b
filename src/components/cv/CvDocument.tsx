import { CONTACT, EXPERIENCE, PROFILE, STACK_GROUPS } from "../../lib/content";
import { CV } from "../../lib/cv";
import { SITE_URL } from "../../lib/site";
import CvActions from "./CvActions";

/** O PDF circula fora do site, então o endereço do portfólio precisa estar nele. */
const PORTFOLIO_HOST = SITE_URL.replace(/^https?:\/\//, "");

const CONTACT_LINES = [
  { label: "Celular", value: CONTACT.whatsappDisplay, href: `tel:+${CONTACT.whatsapp}` },
  { label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/odavidpinho", href: CONTACT.linkedin },
  { label: "GitHub", value: "github.com/GT-PINHO", href: CONTACT.github },
  ...(PORTFOLIO_HOST
    ? [{ label: "Portfólio", value: PORTFOLIO_HOST, href: SITE_URL }]
    : []),
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="cv-h2">
      {children}
    </h2>
  );
}

export default function CvDocument() {
  return (
    <div className="cv-page">
      <CvActions />

      <article className="cv-doc">
        <header>
          <h1 className="cv-name">{PROFILE.fullName}</h1>
          <p className="cv-role">
            {PROFILE.role} · {PROFILE.specialty}
          </p>

          <div className="cv-contacts">
            <span>{PROFILE.location}</span>
            {CONTACT_LINES.map((c) => (
              <a key={c.label} href={c.href}>
                {c.value}
              </a>
            ))}
          </div>

          <p className="cv-status">{PROFILE.availability}</p>
        </header>

        <section>
          <SectionTitle>{CV.summaryTitle}</SectionTitle>
          <p className="cv-body">{CV.summary}</p>
        </section>

        <section>
          <SectionTitle>Experiência profissional</SectionTitle>
          {EXPERIENCE.roles.map((role) => (
            <div key={role.title} className="cv-role-block">
              <h3 className="cv-h3">{role.title}</h3>
              <p className="cv-org">{role.org}</p>
              <p className="cv-meta">{role.meta}</p>
              <ul className="cv-list">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <SectionTitle>{CV.projectsTitle}</SectionTitle>
          <ul className="cv-list">
            {CV.projects.map((p) => (
              <li key={p.name}>
                <strong>{p.name}:</strong> {p.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionTitle>{CV.skillsTitle}</SectionTitle>
          <ul className="cv-list">
            {STACK_GROUPS.map((group) => (
              <li key={group.label}>
                <strong>{group.label}:</strong>{" "}
                {group.chips.map((c) => c.name).join(", ")}.
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionTitle>{CV.educationTitle}</SectionTitle>
          <ul className="cv-list">
            {CV.education.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
