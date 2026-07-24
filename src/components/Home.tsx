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
import PrivacyProvider from "./lgpd/PrivacyProvider";
import ContentGuard from "./ui/ContentGuard";

export default function Home() {
  return (
    <PrivacyProvider>
      <ContentGuard />
      <AmbientField />
      <CursorFollower />
      <ScrollProgress />
      <div className="relative z-10">
        <Nav />
        <main>
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
    </PrivacyProvider>
  );
}
