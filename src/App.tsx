import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Projetos from "./components/Projetos";
import Experiencia from "./components/Experiencia";
import Formacao from "./components/Formacao";
import Skills from "./components/Skills";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const nav = document.getElementById("nav");

    // Reveal on scroll (staggered)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    reveals.forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 60 + "ms";
      io.observe(el);
    });

    const secs = Array.from(
      document.querySelectorAll<HTMLElement>("section[id],header[id]")
    );
    const navA = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a")
    );

    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
      let cur = "";
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      navA.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + cur)
      );
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Experiencia />
      <Formacao />
      <Skills />
      <Contato />
      <Footer />
    </>
  );
}
