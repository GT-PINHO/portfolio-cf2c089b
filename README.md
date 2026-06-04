# Portfólio — David Pinho

Portfólio em **Vite + React + TypeScript + Tailwind** (stack nativo da Lovable).

## Rodar localmente (no Cursor)

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Trocar a foto

A foto fica em `public/david.jpg`. Substitua o placeholder pela sua foto real
(pode manter o nome `david.jpg` ou ajustar o `src` em `src/components/Hero.tsx`).

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Publicar (Cursor → GitHub → Lovable)

1. No Cursor, inicialize o git e suba para um repositório no GitHub:
   ```bash
   git init
   git add .
   git commit -m "portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
2. Na **Lovable**: crie/abra um projeto, conecte o GitHub e aponte para esse repo.
   Como já é um projeto Vite/React, o build roda direto e você ganha hospedagem
   grátis + editor visual.
3. Daí em diante: edita no Cursor → `commit` → `push` → a Lovable rebuilda sozinha.

## Estrutura

```
src/
├── App.tsx               # monta as seções + animações de scroll
├── main.tsx              # entrada
├── index.css            # estilos (tema escuro azul+violeta)
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── Sobre.tsx
    ├── Servicos.tsx
    ├── Projetos.tsx
    ├── Experiencia.tsx
    ├── Formacao.tsx
    ├── Skills.tsx
    ├── Contato.tsx
    └── Footer.tsx
```

## Pendência a confirmar

No `src/components/Projetos.tsx` (Projeto 05) o link do GitHub está como
`GT-PINHO/agent-skills`. Confirme no seu GitHub se o repo público é esse ou
`pinho-agent-skills` e ajuste o `href`.
