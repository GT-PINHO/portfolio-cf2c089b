# Portfólio · David Pinho

Portfólio em **Next.js + React + TypeScript + Tailwind**, hospedado na **Vercel**.

**URL:** https://portfolio-davidpinho.vercel.app

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e defina:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Isso alimenta canonical, Open Graph, Twitter Card, `sitemap.xml` e `robots.txt`.

## Trocar a foto

A foto fica em `public/david.png` (card do Hero).

## Build de produção

```bash
npm run build
npm run start
```

## Publicar (GitHub → Vercel)

1. Faça push deste repositório no GitHub.
2. Na Vercel: **Add New Project** → importe o repo.
3. Framework: Next.js (detectado automaticamente).
4. Em Environment Variables, adicione `NEXT_PUBLIC_SITE_URL` com a URL final.
5. Deploy. A cada `git push` na branch de produção, a Vercel rebuilda sozinha.

## SEO

Metadata (title, description, Open Graph, Twitter, robots) e JSON-LD saem no HTML do servidor via App Router, indexáveis pelos buscadores sem depender de JavaScript no cliente.
