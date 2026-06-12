import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ImpactNumbers from "./components/ImpactNumbers";
import Servicos from "./components/Servicos";
import Cases from "./components/Cases";
import Stack from "./components/Stack";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorFollower from "./components/ui/CursorFollower";

export default function App() {
  return (
    <>
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <ImpactNumbers />
        <Servicos />
        <Cases />
        <Stack />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
