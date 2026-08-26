import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const whatsapp = "https://wa.me/5519997501584?text=Olá%2C%20David!%20Vi%20o%20case%20Growth%20Ops%20no%20seu%20portfólio.";
const caseTitle = "Growth Ops IAM | David Pinho";
const caseDescription =
  "Estudo de caso sobre a reconstrução de um pipeline de aquisição para uma operação nacional de educação.";

export const metadata: Metadata = {
  title: caseTitle,
  description: caseDescription,
  alternates: {
    canonical: "/casos/growth-ops-iam",
  },
  openGraph: {
    type: "article",
    title: caseTitle,
    description: caseDescription,
    url: "/casos/growth-ops-iam",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: caseTitle,
      },
    ],
  },
};

const flow = [
  ["01", "webhook_received", "Webhook recebido", "Entrada da GreatPages com os dados de origem."],
  ["02", "extract_start", "Extração e limpeza", "Nome, e-mail, telefone, UTM e cidade são interpretados e normalizados."],
  ["03", "qualificacao_ok", "Qualificação", "As regras de oferta e região determinam o próximo caminho."],
  ["04", "localiza_cidade_ok", "Evento e cidade", "A Masterclass correta é relacionada dinamicamente à cidade do lead."],
  ["05", "manychat_upsert", "ManyChat", "O contato recebe a tag regional por upsert idempotente."],
  ["06", "sheets_sync", "Credenciamento", "A planilha correspondente à região é sincronizada."],
  ["07", "hubspot_deal", "HubSpot", "O Deal é criado ou atualizado sem duplicidade."],
  ["08", "flow_end", "Rastro completo", "O resultado de cada etapa fica persistido no Supabase."],
];

const recentLeads = [
  ["24/07/2026 20:59:24", "Lead regional Sorocaba", "Sucesso com aviso", "l***@gmail.com", "SOROCABA", "1672•••"],
  ["24/07/2026 20:58:11", "Lead regional Maringá", "Corrigido", "m***@gmail.com", "MARINGA", "1671•••"],
  ["24/07/2026 20:57:03", "Lead regional Brusque", "Sucesso", "b***@hotmail.com", "BRUSQUE", "1670•••"],
];

export default function GrowthOpsCase() {
  return (
    <main className="case-page">
      <header className="case-nav">
        <Link className="brand" href="/">David Pinho</Link>
        <Link href="/#projetos"><ArrowLeft size={16}/> Voltar ao portfólio</Link>
        <a
          className="nav-cta"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar <ArrowUpRight size={15}/>
        </a>
      </header>

      <section className="case-hero">
        <p className="section-no">ESTUDO DE CASO / GROWTH OPS</p>
        <h1>20 a 30 mil leads por mês quebravam a automação. <em>Eu reconstruí o pipeline.</em></h1>
        <p className="case-lead">Substituí o fluxo em n8n Cloud por uma API em NestJS com observabilidade, tratamento híbrido de dados e processamento sem erro em produção.</p>
        <div className="case-facts">
          <div><span>Cliente</span><strong>Instituto Academy Mind</strong></div>
          <div><span>Meu papel</span><strong>Arquitetura, back-end, integrações e dashboard</strong></div>
          <div><span>Resultado</span><strong>100% de processamento sem erro</strong></div>
        </div>
        <div className="case-proof" aria-label="Principais resultados"><div><strong>20 a 30 mil</strong><span>leads processados por mês</span></div><div><strong>R$ 4,5 mil</strong><span>de economia mensal estimada</span></div><div><strong>0</strong><span>erros bloqueantes no período</span></div></div>
      </section>

      <nav className="case-index" aria-label="Índice do estudo de caso">
        <a href="#cenario">Cenário</a><a href="#desafio">Desafio</a><a href="#solucao">Solução</a><a href="#fluxo">Fluxo</a><a href="#dashboard">Dashboard</a><a href="#resultados">Resultados</a>
      </nav>

      <section className="case-section" id="cenario">
        <div><p className="section-no">01 / CENÁRIO</p><h2>Aquisição nacional em escala.</h2></div>
        <div className="case-copy"><p>O pipeline sustentava um modelo recorrente de aquisição nacional para educação em inteligência emocional e empresarial. Todos os meses, milhares de entradas precisavam chegar corretamente ao evento, à praça e ao time responsável, sem perder a origem de mídia.</p><div className="case-numbers"><div><strong>20 a 30 mil</strong><span>leads por mês</span></div><div><strong>45 a 68</strong><span>masterclasses</span></div><div><strong>2 a 4</strong><span>imersões por mês</span></div></div></div>
      </section>

      <section className="case-section case-dark" id="desafio">
        <div><p className="section-no">02 / DESAFIO</p><h2>O no-code deixou de acompanhar a escala.</h2></div>
        <div className="challenge-grid">
          <article><span>01</span><h3>Gargalo diário</h3><p>O volume contínuo de webhooks e tags regionais saturava o runtime da automação.</p></article>
          <article><span>02</span><h3>Custo por execução</h3><p>A projeção chegava a R$ 4.300 a R$ 4.500 mensais, com risco de ultrapassar R$ 5.000 em picos.</p></article>
          <article><span>03</span><h3>Dados quebrados</h3><p>Erros de digitação em e-mails interrompiam CRM, ManyChat e credenciamento.</p></article>
        </div>
      </section>

      <section className="case-section" id="solucao">
        <div><p className="section-no">03 / SOLUÇÃO</p><h2>Uma stack própria, idempotente e observável.</h2></div>
        <div className="solution-list">
          <article><span>BACK-END</span><h3>NestJS, Docker e deploy automatizado</h3><p>Desenvolvi a API proprietária em NestJS, conteinerizada e publicada em VPS pelo Easypanel, com CI/CD via GitHub Actions.</p></article>
          <article><span>PERSISTÊNCIA</span><h3>Logs granulares no Supabase</h3><p>Cada etapa do lead passou a ser persistida, permitindo rastrear do recebimento do webhook ao encerramento do fluxo.</p></article>
          <article><span>INTEGRAÇÕES</span><h3>HubSpot, ManyChat e Google Sheets</h3><p>O pipeline envia Deals estruturados, aplica tags regionais e sincroniza planilhas sem gerar registros duplicados.</p></article>
          <article><span>SUPORTE</span><h3>Data Cleansing com recuperação humana</h3><p>A equipe corrige e-mails inválidos e reprocessa o lead com um clique, sem duplicar o Deal no CRM.</p></article>
        </div>
        <div className="tech-strip"><span>NestJS</span><span>Docker</span><span>GitHub Actions</span><span>Easypanel</span><span>Supabase</span><span>HubSpot API</span><span>ManyChat API</span><span>Google Sheets API</span></div>
      </section>

      <section className="case-flow" id="fluxo">
        <p className="section-no">04 / FLUXO DO LEAD</p><h2>Cada passo deixa um rastro verificável.</h2>
        <div className="flow-list">{flow.map(([n,code,title,text])=><article key={n}><span>{n}</span><div><code>{code}</code><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="case-section dashboard-section" id="dashboard">
        <div><p className="section-no">05 / DASHBOARD</p><h2>Observabilidade para operação e suporte.</h2><p className="case-note">Reconstrução ilustrativa da interface. Dados pessoais estão mascarados.</p></div>
        <div className="dashboard-shell">
          <div className="dash-top"><div><span>Dashboard de observabilidade</span><strong>IPR / Masterclass / 01/07/26 a 24/07/26</strong><small>Último registro: 24/07/2026 20:59:24</small></div><span className="status-live">Produção</span></div>
          <div className="dash-kpis"><div><span>Sucesso</span><strong>9.414</strong></div><div><span>Com aviso</span><strong>6.780</strong></div><div><span>Erros</span><strong>0</strong></div><div><span>Total</span><strong>16.194</strong></div></div>
          <div className="dash-rate"><span>Taxa de processamento sem erro</span><strong>100%</strong><div><i style={{width:"100%"}}/></div></div>
          <p className="dash-warning"><strong>Por que existem avisos?</strong> São ocorrências não bloqueantes, como um erro de digitação no e-mail que foi corrigido antes do reprocessamento. Os 9.414 sucessos e 6.780 avisos formam os 16.194 registros processados sem erro.</p>
          <div className="dash-funnel"><div><span>Meta Ads</span><strong>R$ 243.445,90</strong><small>investimento base</small></div><div><span>GreatPages</span><strong>16.194</strong><small>100%</small></div><div><span>Sheets</span><strong>16.194</strong><small>100%</small></div><div><span>ManyChat</span><strong>16.133</strong><small>99,62%</small></div></div>
          <div className="dash-subhead"><span>Registros recentes</span><small>Dados pessoais mascarados</small></div>
          <div className="dash-table" role="table" aria-label="Registros recentes mascarados">
            {recentLeads.map(([date,name,status,email,city,id])=><div role="row" key={date}><span>{date}</span><strong>{name}</strong><span>{status}</span><span>{email}</span><span>{city}</span><span>{id}</span></div>)}
          </div>
          <div className="dash-subhead"><span>Atividade do pipeline</span><small>tempo real</small></div>
          <div className="dash-log"><p><span>20:59:24</span> [MC] Tag mc-sorocaba-22-07 aplicada <b>ok</b></p><p><span>20:58:41</span> [HS] Deal upsert sem duplicidade <b>ok</b></p><p><span>20:58:11</span> [CL] E-mail higienizado e reprocessado <b>corrigido</b></p></div>
        </div>
      </section>

      <section className="case-section case-results" id="resultados">
        <div><p className="section-no">06 / RESULTADOS</p><h2>Menos custo, mais estabilidade e controle.</h2></div>
        <div className="results-list">
          <article><CheckCircle2/><div><h3>Eficiência financeira</h3><p>O custo variável do n8n Cloud foi substituído por infraestrutura fixa mínima, reduzindo praticamente a zero o gasto com licenças de automação.</p></div></article>
          <article><CheckCircle2/><div><h3>Estabilidade</h3><p>Os gargalos de requisição foram eliminados e o pipeline atingiu 100% de processamento sem erro em produção.</p></div></article>
          <article><CheckCircle2/><div><h3>Migração e qualidade de dados</h3><p>A base histórica foi extraída, tratada e adaptada ao novo padrão da HubSpot API.</p></div></article>
        </div>
      </section>

      <section className="case-cta"><p>Busco uma oportunidade para aplicar essa combinação de mídia, dados e engenharia.</p><h2>Vamos conversar sobre o próximo desafio?</h2><a href={whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowUpRight/></a></section>
      <footer><div className="brand">David Pinho</div><p>Gestor de Tráfego Pago · MarTech e Growth Ops</p><p>© 2026 David Pinho</p></footer>
    </main>
  );
}
