import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav id="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          David<span>.</span>Pinho
        </a>
        <div className={"nav-links" + (open ? " open" : "")} id="navlinks">
          <a href="#sobre" onClick={close}>Sobre</a>
          <a href="#servicos" onClick={close}>O que faço</a>
          <a href="#projetos" onClick={close}>Projetos</a>
          <a href="#experiencia" onClick={close}>Experiência</a>
          <a href="#formacao" onClick={close}>Formação</a>
          <a href="#contato" className="nav-cta" onClick={close}>Vamos conversar</a>
        </div>
        <div className="burger" id="burger" onClick={() => setOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
