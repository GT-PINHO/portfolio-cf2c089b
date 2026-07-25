"use client";

import Nav from "./Nav";
import Hero from "./Hero";
import OQueFaco from "./OQueFaco";
import ProjetosPublicos from "./ProjetosPublicos";
import Experiencia from "./Experiencia";
import Casos from "./Casos";
import Stack from "./Stack";
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
          <OQueFaco />
          <ProjetosPublicos />
          <Experiencia />
          <Casos />
          <Stack />
          <Contato />
        </main>
        {/* Folga mínima: Contato sobe sob a nav sem vazio enorme */}
        <div className="h-8 md:h-12" aria-hidden />
        <Footer />
      </div>
    </>
  );
}
