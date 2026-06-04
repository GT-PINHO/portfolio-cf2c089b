export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="sec-tag reveal">Competências</span>
        <h2 className="reveal">Habilidades técnicas</h2>
        <div style={{ marginTop: "40px" }}>
          <div className="skill-block reveal">
            <div className="label">Domínio</div>
            <div className="chips">
              <span className="chip core">Meta Ads</span>
              <span className="chip core">GTM</span>
              <span className="chip core">API de Conversão</span>
              <span className="chip core">Stape</span>
              <span className="chip core">Server-Side Tracking</span>
              <span className="chip core">Pixel</span>
            </div>
          </div>
          <div className="skill-block reveal">
            <div className="label">KPIs & Métricas</div>
            <div className="chips">
              <span className="chip">CPL</span>
              <span className="chip">CTR</span>
              <span className="chip">CPC</span>
              <span className="chip">CPM</span>
              <span className="chip">ROAS</span>
              <span className="chip">Taxa de conversão</span>
            </div>
          </div>
          <div className="skill-block reveal">
            <div className="label">Tecnologia & IA</div>
            <div className="chips">
              <span className="chip">Cursor</span>
              <span className="chip">EasyPanel</span>
              <span className="chip">ManyChat</span>
              <span className="chip">Agentes de IA / Skills (Claude)</span>
              <span className="chip">IA aplicada (Claude / ChatGPT)</span>
              <span className="chip">Figma</span>
            </div>
          </div>
          <div className="skill-block reveal">
            <div className="label">Em estudo / Expandindo</div>
            <div className="chips">
              <span className="chip study">Google Ads (básico)</span>
              <span className="chip study">Mercado Livre Ads</span>
              <span className="chip study">LinkedIn Ads</span>
              <span className="chip study">TikTok Ads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
