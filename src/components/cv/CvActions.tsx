import { CV_FILENAME, CV_PDF_URL } from "../../lib/cv";

function IconBack() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0 6-6m-6 6 6 6" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      />
    </svg>
  );
}

/** O download é um arquivo real gerado de /cv por `npm run cv:pdf`. */
export default function CvActions() {
  return (
    <div className="cv-actions">
      <a href="/" className="cv-back">
        <IconBack />
        Voltar ao portfólio
      </a>

      <a href={CV_PDF_URL} download={CV_FILENAME} className="cv-download">
        <IconDownload />
        Baixar PDF
      </a>
    </div>
  );
}
