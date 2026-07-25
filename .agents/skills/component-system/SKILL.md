---
name: component-system
description: >
  Sistema de componentes do portfólio David Pinho (Next.js + Tailwind).
  Use ao criar/editar seções, botões, reveals, containers ou páginas de case.
  Garante consistência visual com Nav, Section, Reveal, Button e tokens CSS.
---

# Component System (Portfólio)

## Quando usar

- Nova seção na home ou página de case
- Novo botão, card, lista ou timeline
- Ajustes de spacing, tipografia ou tokens
- Dúvida sobre onde colocar um componente

## Stack do projeto

- Next.js App Router (`src/app`)
- Componentes client em `src/components`
- Tokens em `src/app/globals.css` + `tailwind.config.ts`
- Motion: Framer Motion via `src/lib/motion.ts` e `ui/Reveal.tsx`
- Conteúdo editável em `src/lib/content.ts` e `src/lib/case-growth-ops.ts`

## Primitivos obrigatórios

| Peça | Arquivo | Uso |
|------|---------|-----|
| `Container` | `ui/Container.tsx` | Largura máxima + gutters |
| `Section` | `ui/Section.tsx` | Seção com índice, kicker, título, lead |
| `Reveal` / `RevealGroup` / `RevealItem` | `ui/Reveal.tsx` | Entrada no scroll (mobile-safe) |
| `ButtonPrimary` / `ButtonSecondary` | `ui/Button.tsx` | CTAs |
| `AmbientField` | `ui/AmbientField.tsx` | Atmosfera global (não duplicar por página) |

## Regras

1. **Não inventar cards decorativos** se o conteúdo não exige interação.
2. **Não usar Inter/Roboto/Arial**; tipografia já vem de `--font-display` / `--font-sans`.
3. **Cores só via tokens**: `ink`, `soft`, `muted`, `accent`, `surface`, `surface-line`.
4. **Uma job por seção**: um título, um lead curto, um bloco principal.
5. **Conteúdo fora do JSX**: textos longos em `src/lib/*`, não hardcoded em componentes.
6. **Páginas de case**: header próprio + `AmbientField`; não reutilizar a Nav completa da home.
7. Para composição React avançada (compound components, context), leia também `vercel-composition-patterns`.

## Checklist rápido

- [ ] Responsivo mobile (botões full-width quando fizer sentido)
- [ ] `Reveal`/`RevealGroup` sem quebrar HTML (não wrap `li` inválido)
- [ ] Sem travessões (`—` / `–`) em copy
- [ ] Links externos com `rel="noopener noreferrer"`
- [ ] Build `npm run build` ok
