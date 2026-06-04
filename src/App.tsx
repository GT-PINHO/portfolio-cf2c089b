import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Experiencia from "./components/Experiencia";
import Projetos from "./components/Projetos";
import Formacao from "./components/Formacao";
import Skills from "./components/Skills";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Experiencia />
        <Projetos />
        <Formacao />
        <Skills />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
