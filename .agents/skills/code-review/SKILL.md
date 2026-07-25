---
name: code-review
description: >
  Code review do portfólio Next.js. Use ao revisar PRs, diffs ou antes de publicar.
  Alias prático de code-review-and-quality focado neste site.
---

# Code Review (Portfólio)

## Quando usar

- "revisa o código", "review", "antes de subir"
- Diff grande (case, CV, nav, motion)

## Checklist deste site

1. **Posicionamento**: tráfego pago primeiro; MarTech como diferencial.
2. **Copy**: sem travessões (`—`/`–`); números consistentes (R$ 4.300 a 4.500, 20 a 30k).
3. **UI**: tokens (`accent`, `ink`, `soft`); sem cards decorativos desnecessários.
4. **Motion**: Reveal mobile-safe; sem scroll lock quebrado.
5. **SEO**: `metadata`, sitemap com páginas novas.
6. **Privacidade**: dashboards/cases sem e-mails/nomes reais.
7. **Build**: `npm run build` ok.

## Severidade

- **Bloqueante**: build quebrado, PII, link de login Vercel, email Infinity no commit
- **Importante**: copy desalinhada, mobile quebrado, SEO faltando
- **Sugestão**: polish visual, microcopy

Para review genérico aprofundado, use `code-review-and-quality`.
