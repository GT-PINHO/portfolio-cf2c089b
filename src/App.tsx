import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OQueFaco from "./components/OQueFaco";
import ProjetosPublicos from "./components/ProjetosPublicos";
import Experiencia from "./components/Experiencia";
import Casos from "./components/Casos";
import Stack from "./components/Stack";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import AmbientField from "./components/ui/AmbientField";
import CursorFollower from "./components/ui/CursorFollower";
import SeoHead from "./components/SeoHead";
import PrivacyProvider from "./components/lgpd/PrivacyProvider";
import ContentGuard from "./components/ui/ContentGuard";

export default function App() {
  return (
    <PrivacyProvider>
      <ContentGuard />
      <SeoHead />
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
