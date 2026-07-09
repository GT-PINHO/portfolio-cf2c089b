import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Cases from "./components/Cases";
import Experiencia from "./components/Experiencia";
import Stack from "./components/Stack";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorFollower from "./components/ui/CursorFollower";
import SeoHead from "./components/SeoHead";
import PrivacyProvider from "./components/lgpd/PrivacyProvider";

export default function App() {
  return (
    <PrivacyProvider>
      <SeoHead />
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Servicos />
        <Cases />
        <Experiencia />
        <Stack />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </PrivacyProvider>
  );
}
