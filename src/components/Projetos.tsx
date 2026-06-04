export default function Projetos() {
  return (
    <section id="projetos">
      <div className="wrap">
        <span className="sec-tag reveal">Projetos</span>
        <h2 className="reveal">O que eu já construí</h2>
        <p className="sec-lead reveal">
          Sistemas e dashboards reais, em produção, usados por times de operação e
          gestão.
        </p>
        <div style={{ marginTop: "38px" }}>
          <div className="proj reveal">
            <div className="proj-idx">01</div>
            <div>
              <h3>Automação de Produtos — IAM</h3>
              <p>
                Automação (hardcode + EasyPanel) integrando os produtos do IAM ao
                ManyChat. Inclui uma aba de{" "}
                <strong>Gerenciamento de Automações e Reconciliação</strong> que dá
                à equipe de Gestão autonomia para analisar tudo sem depender do time
                de Dev.
              </p>
              <div className="tags">
                <span>EasyPanel</span>
                <span>ManyChat</span>
                <span>Automação</span>
                <span>Reconciliação</span>
              </div>
            </div>
            <span className="proj-link muted">Interno</span>
          </div>

          <div className="proj reveal">
            <div className="proj-idx">02</div>
            <div>
              <h3>Sistema de Gestão de Eventos — IAM</h3>
              <p>
                Centralizei o que antes eram duas planilhas preenchidas por vários
                departamentos em um único sistema de gestão de eventos — mais
                controle, menos erro e visibilidade para todos os times envolvidos.
              </p>
              <div className="tags">
                <span>Sistema web</span>
                <span>Multi-departamento</span>
                <span>Processos</span>
              </div>
            </div>
            <span className="proj-link muted">Interno</span>
          </div>

          <div className="proj reveal">
            <div className="proj-idx">03</div>
            <div>
              <h3>Dashboard Masterclass — IAM</h3>
              <p>
                Painel de acompanhamento da operação de Masterclass, com os
                indicadores que importam para a tomada de decisão da gestão.
              </p>
              <div className="tags">
                <span>Dashboard</span>
                <span>Vercel</span>
                <span>Dados</span>
              </div>
            </div>
            <a
              href="https://dash-masterclass-iam.vercel.app/"
              target="_blank"
              rel="noopener"
              className="proj-link"
            >
              Ver ↗
            </a>
          </div>

          <div className="proj reveal">
            <div className="proj-idx">04</div>
            <div>
              <h3>Legacy Dashboard</h3>
              <p>
                Painel de gestão para o Grupo Legacy Eco, consolidando informações
                de operação em uma visão única.
              </p>
              <div className="tags">
                <span>Dashboard</span>
                <span>Gestão</span>
              </div>
            </div>
            <a
              href="https://legacydashboard.lovable.app/"
              target="_blank"
              rel="noopener"
              className="proj-link"
            >
              Ver ↗
            </a>
          </div>

          <div className="proj reveal">
            <div className="proj-idx">05</div>
            <div>
              <h3>pinho-skills — Agentes & Skills para o Claude</h3>
              <p>
                Plugin próprio com <strong>12 skills em 3 clusters</strong> para
                Claude Code, baseadas em evidência (sem achismo, sem sycophancy).
                Roda <strong>CI com Quality Gate e eval runner</strong> — 20/20
                evals passando — e auto-seleciona o modelo por porte da tarefa. O
                cluster de <strong>growth-ops</strong> é o diferencial: leitura de
                leilão com regras de kill/scale, unit economics (LTV/CAC + payback),
                auditoria de tracking com CAPI/dedup e CRO com foco em
                message-match.
              </p>
              <div className="tags">
                <span>Claude Code</span>
                <span>12 skills</span>
                <span>CI + Evals</span>
                <span>Growth-Ops</span>
                <span>Apache-2.0</span>
              </div>
            </div>
            {/* CONFIRMAR a URL real do repo: o zip veio como "agent-skills-main"
                (repo = agent-skills), mas o README usa "pinho-agent-skills".
                Verifique no seu GitHub qual abre e ajuste o href abaixo. */}
            <a
              href="https://github.com/GT-PINHO/agent-skills"
              target="_blank"
              rel="noopener"
              className="proj-link"
            >
              Ver ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
