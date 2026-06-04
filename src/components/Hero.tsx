export default function Hero() {
  return (
    <header id="top">
      <div className="glow a"></div>
      <div className="glow b"></div>
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow reveal">
            <span className="dot"></span> Gestor de Tráfego Pago · Meta Ads
          </span>
          <h1 className="reveal">David Pinho</h1>
          <div className="tagline reveal">Transformo verba em resultado.</div>
          <p className="lede reveal">
            Gestor de tráfego pago especialista em <strong>Meta Ads</strong>, com
            mais de <strong>R$18 milhões</strong> em mídia gerenciada e{" "}
            <strong>400 mil+ pessoas captadas</strong> para eventos nacionais.
            Também desenvolvo <strong>sistemas e automações com IA</strong> para a
            operação.
          </p>
          <div className="cta-row reveal">
            <a href="#contato" className="btn btn-primary">Vamos conversar →</a>
            <a href="#projetos" className="btn btn-ghost">Ver projetos</a>
          </div>
          <div className="stats">
            <div className="stat reveal">
              <div className="num"><b>R$18M</b>+</div>
              <div className="label">Gerenciados em mídia</div>
            </div>
            <div className="stat reveal">
              <div className="num">400<b>k</b>+</div>
              <div className="label">Captados p/ eventos</div>
            </div>
            <div className="stat reveal">
              <div className="num">2,7<b>M</b></div>
              <div className="label">De alcance em lançamento</div>
            </div>
            <div className="stat reveal">
              <div className="num">R$<b>18,42</b></div>
              <div className="label">CPL em 4.038 leads</div>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="photo-frame">
            <img src="/david.jpg" alt="David Pinho, Gestor de Tráfego Pago" />
            <div className="photo-badge">
              <div className="k">R$100k</div>
              <div className="v">faturados em 1 dia</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
