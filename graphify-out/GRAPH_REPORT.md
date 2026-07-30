# Graph Report - PORTFOLIO  (2026-07-30)

## Corpus Check
- 51 files · ~13,474 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 248 nodes · 391 edges · 21 communities (15 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `91733723`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- content.ts
- CaseGrowthOpsPage.tsx
- motion.ts
- compilerOptions
- Home.tsx
- package.json
- devDependencies
- main
- Portfólio · David Pinho
- Footer.tsx
- AmbientField.tsx
- BrandMarquee.tsx
- AnimatedCounter.tsx
- mcp.json
- next.config.ts
- next-env.d.ts
- containerStagger
- fadeUp

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `RevealGroup()` - 10 edges
3. `Container()` - 7 edges
4. `RevealItem()` - 7 edges
5. `Portfólio · David Pinho` - 7 edges
6. `AmbientField()` - 6 edges
7. `Section()` - 6 edges
8. `GROWTH_OPS_CASE` - 6 edges
9. `CONTACT` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Contato()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/Contato.tsx → src/lib/contact.ts
- `HeroSection()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/hero/HeroSection.tsx → src/lib/contact.ts

## Import Cycles
- None detected.

## Communities (21 total, 6 thin omitted)

### Community 0 - "content.ts"
Cohesion: 0.11
Nodes (24): Casos(), OQueFaco(), ProjetosPublicos(), base, IconExternal(), ease, Reveal(), RevealGroup() (+16 more)

### Community 1 - "CaseGrowthOpsPage.tsx"
Cohesion: 0.09
Nodes (20): metadata, display, metadata, ogImage, sans, viewport, CaseGrowthOpsPage(), LeadFlowTimeline() (+12 more)

### Community 2 - "motion.ts"
Cohesion: 0.08
Nodes (25): Contato(), OTHER_CHANNELS, HeroBackground(), HeroPortrait(), HeroSection(), BtnProps, ButtonPrimary(), ButtonSecondary() (+17 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (29): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+21 more)

### Community 4 - "Home.tsx"
Cohesion: 0.15
Nodes (14): Experiencia(), Home(), getActiveSection(), getSectionTargetY(), isNearPageBottom(), LINKS, maxScrollY(), Nav() (+6 more)

### Community 5 - "package.json"
Cohesion: 0.11
Nodes (17): framer-motion, next, dependencies, framer-motion, next, react, react-dom, name (+9 more)

### Community 6 - "devDependencies"
Cohesion: 0.13
Nodes (15): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+7 more)

### Community 7 - "main"
Cohesion: 0.39
Nodes (7): HexColor, ParagraphStyle, main(), Gera public/Curriculo_David_Pinho.pdf no visual do Docs (Calibri), com link…, resolve_fonts(), shaded_bar(), Table

### Community 8 - "Portfólio · David Pinho"
Cohesion: 0.25
Nodes (7): Build de produção, Portfólio · David Pinho, Publicar (GitHub → Vercel), Rodar localmente, SEO, Trocar a foto, Variáveis de ambiente

### Community 9 - "Footer.tsx"
Cohesion: 0.32
Nodes (5): Footer(), PrivacyPolicyModal(), Props, CONTACT, PROFILE

### Community 10 - "AmbientField.tsx"
Cohesion: 0.39
Nodes (7): AmbientField(), Block, lerp(), makeBlocks(), Pos, randSize(), readAmbientRgb()

### Community 11 - "BrandMarquee.tsx"
Cohesion: 0.33
Nodes (4): BrandMarquee(), BrandMarqueeProps, STACK_BRANDS, StackBrand

## Knowledge Gaps
- **91 isolated node(s):** `21st`, `nextConfig`, `name`, `private`, `version` (+86 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AmbientField()` connect `AmbientField.tsx` to `CaseGrowthOpsPage.tsx`, `Home.tsx`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `CONTACT` connect `Footer.tsx` to `content.ts`, `CaseGrowthOpsPage.tsx`, `motion.ts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `21st`, `nextConfig`, `name` to the rest of the system?**
  _91 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `CaseGrowthOpsPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09009009009009009 - nodes in this community are weakly interconnected._
- **Should `motion.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08412698412698413 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._