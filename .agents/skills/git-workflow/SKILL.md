---
name: git-workflow
description: >
  Fluxo Git deste portfólio (repo GT-PINHO). Use em commits, pushes e deploys.
  Alias prático de git-workflow-and-versioning adaptado ao projeto.
---

# Git Workflow (Portfólio)

## Identidade neste repo

- Autor: **David Pinho** `<davidpinho.st@gmail.com>` (local do repo, não global)
- Remote: `GT-PINHO/portfolio-cf2c089b`
- Branch principal: `main`
- Deploy: push em `main` → Vercel (`davidpinhointencional-5821`)

## Regras

1. Commit **só** quando o usuário pedir.
2. Push para `main` **só** com confirmação explícita.
3. Nunca `--force` em `main`, nunca alterar git config global.
4. Mensagens curtas, em português, focadas no *porquê*.
5. Não commitar `.env`, secrets, nem PII.

## Checklist pré-push

- [ ] `git log -1 --format="%an <%ae>"` mostra email do David
- [ ] `npm run build` passou
- [ ] PDF do CV regenerado se o conteúdo mudou
- [ ] Sem arquivos `.agents` sensíveis? (skills ok; secrets não)

Detalhes gerais: leia `git-workflow-and-versioning`.
