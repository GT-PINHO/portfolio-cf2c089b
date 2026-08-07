"use client";

import Nav from "./Nav";
import Hero from "./Hero";
import KpiStrip from "./sections/KpiStrip";
import Casos from "./Casos";
import Experiencia from "./Experiencia";
import OperationPillars from "./sections/OperationPillars";
import ProofStrip from "./sections/ProofStrip";
import Contato from "./Contato";
import Footer from "./Footer";
import ScrollProgress from "./ui/ScrollProgress";
import AmbientField from "./ui/AmbientField";
import CursorFollower from "./ui/CursorFollower";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <AmbientField />
      <CursorFollower />
      <ScrollProgress />
      <div className="relative z-10">
        <Nav />
        <main id="conteudo">
          <Hero />
          <KpiStrip />
          <Casos />
          <Experiencia />
          <OperationPillars />
          <ProofStrip />
          <Contato />
        </main>
        <Footer />
      </div>
    </>
  );
}
