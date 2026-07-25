---
name: project-management
description: >
  Planejamento e quebra de tarefas para o portfólio. Use ao iniciar features,
  estudos de caso, ajustes de CV/SEO ou deploys. Complementa planning-and-task-breakdown.
---

# Project Management (Portfólio)

## Quando usar

- Nova feature ou página (ex.: estudo de caso)
- Batch de ajustes (CV + site + Vercel)
- Priorizar o que publicar agora vs depois

## Fluxo curto

1. **Objetivo em 1 frase** (ex.: "publicar case MarTech com dashboard simulado").
2. **Escopo mínimo** que dá valor sozinho (MVP).
3. **Lista ordenada** de tarefas (conteúdo → UI → SEO → build → deploy).
4. **Validação**: `npm run build` + checagem visual local + URL de produção.
5. **Só então** commit/push (quando o usuário pedir).

## Prioridades deste projeto

1. Posicionamento: **Gestor de Tráfego Pago** na frente; MarTech como diferencial.
2. CV PDF e site alinhados (mesmo cargo, mesmos números, sem travessões).
3. Case `/casos/growth-ops-iam` com dados mascarados (sem PII).
4. Deploy Vercel na conta David (`portfolio-david-pinho`).

## Anti-padrões

- Não misturar email Infinity no Git deste repo
- Não deployar sem o usuário pedir
- Não expandir escopo (LGPD, TDD, etc.) se o pedido for só copy/UI

Para breakdown genérico detalhado, use também `planning-and-task-breakdown`.
