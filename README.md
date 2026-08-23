# Portfólio · David Pinho

Portfólio em **Next.js + React + TypeScript + Tailwind**, hospedado na **Vercel**.

**URL:** https://portfolio-davidpinho.vercel.app

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (roda `prebuild` antes) |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |
| `npm run qr:build` | Regera `public/qr-whatsapp.png` e o lock |
| `npm run qr:check` | Confere se o QR bate com `src/lib/contact.ts` |
| `npm run cv:pdf` | Gera o PDF do currículo a partir da rota `/cv` |

## Onde fica o conteúdo

Todo o texto do site sai de arquivos únicos, para o site, o currículo e o PDF nunca divergirem:

- `src/lib/content.ts`: hero, KPIs, operação, experiência, casos, stack, contato
- `src/lib/cv.ts`: resumo, projetos e formação do currículo
- `src/lib/site.ts`: título, meta description e keywords
- `src/lib/case-growth-ops.ts`: estudo de caso do IAM
- `src/lib/legacy-dashboard.ts`: painel do Legacy Growth Dashboard
- `src/lib/contact.ts`: WhatsApp (número e mensagem pré-preenchida)

A foto do hero fica em `public/david.png`.

## Assets gerados

Dois arquivos em `public/` não são escritos à mão e podem ficar defasados:

**`qr-whatsapp.png`.** Antes o QR era montado em runtime por `api.qrserver.com`, o que colocava um terceiro no caminho de toda visita. Hoje é asset local. Se `WHATSAPP_NUMBER` ou `WHATSAPP_MESSAGE` mudarem em `src/lib/contact.ts`, o PNG continua apontando para o conteúdo antigo. O `prebuild` roda `scripts/check-qr.mjs` e **quebra o build** nesse caso. A correção é:

```bash
npm run qr:build   # e commite o PNG e o lock
```

**`Curriculo_DavidPinho.pdf`.** Hoje é mantido à mão. O caminho vem de `CV_PDF_URL` em `src/lib/cv.ts`, que é a fonte única: nunca escreva o nome do arquivo direto num componente. Rodar `npm run cv:pdf` **sobrescreve** esse PDF com a versão gerada da rota `/cv`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e defina:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Isso alimenta canonical, Open Graph, Twitter Card, `sitemap.xml` e `robots.txt`. Em produção o valor vem de `.env.production`, que está versionado por conter só a URL pública.

## Build de produção

```bash
npm run build
npm run start
```

## Publicar

O projeto na Vercel está conectado a este repositório: **todo push na `main` dispara build e deploy automáticos**.

Conectar a integração não republica o que já estava no ar, ela só passa a valer para os pushes seguintes. Para publicar um commit anterior à conexão, use **Redeploy** no painel da Vercel ou empurre um commit novo.

Deploy manual, sem depender da integração:

```bash
npx vercel login
npx vercel --prod
```

## SEO

Metadata (title, description, Open Graph, Twitter, robots) e JSON-LD saem no HTML do servidor via App Router, indexáveis pelos buscadores sem depender de JavaScript no cliente.

## Acessibilidade

Texto sobre o ciano da marca usa o token `--on-accent`, não branco: branco sobre `#06b6d4` dá 2,43:1 e reprova em WCAG AA. O token dá 7,9:1.
