# Graph Report - PORTFOLIO  (2026-08-07)

## Corpus Check
- 53 files · ~15,749 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 282 nodes · 431 edges · 26 communities (16 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f6711a98`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- KpiStrip.tsx
- CaseGrowthOpsPage.tsx
- motion.ts
- compilerOptions
- Home.tsx
- package.json
- devDependencies
- main
- Portfólio · David Pinho
- content.ts
- ambient-intensity.ts
- stack-brands.ts
- AnimatedCounter.tsx
- mcp.json
- next.config.ts
- next-env.d.ts
- containerStagger
- fadeUp
- icons.tsx
- Casos.tsx
- opengraph-image.tsx
- HeroSection.tsx
- staggerContainer

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `AmbientField()` - 10 edges
3. `Container()` - 8 edges
4. `useAmbientMode()` - 8 edges
5. `RevealGroup()` - 7 edges
6. `Portfólio · David Pinho` - 7 edges
7. `RevealItem()` - 6 edges
8. `GROWTH_OPS_CASE` - 6 edges
9. `CONTACT` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Contato()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/Contato.tsx → src/lib/contact.ts
- `HeroSection()` --calls--> `useAmbientMode()`  [EXTRACTED]
  src/components/hero/HeroSection.tsx → src/lib/ambient-intensity.ts
- `Casos()` --references--> `CASES`  [EXTRACTED]
  src/components/Casos.tsx → src/lib/content.ts
- `Experiencia()` --calls--> `useAmbientMode()`  [EXTRACTED]
  src/components/Experiencia.tsx → src/lib/ambient-intensity.ts
- `HeroSection()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/hero/HeroSection.tsx → src/lib/contact.ts

## Import Cycles
- None detected.

## Communities (26 total, 10 thin omitted)

### Community 0 - "KpiStrip.tsx"
Cohesion: 0.38
Nodes (5): KpiStrip(), CountUp(), CountUpProps, formatValue(), KPIS

### Community 1 - "CaseGrowthOpsPage.tsx"
Cohesion: 0.09
Nodes (19): metadata, display, metadata, ogImage, sans, viewport, CaseGrowthOpsPage(), CaseReadingNav() (+11 more)

### Community 2 - "motion.ts"
Cohesion: 0.13
Nodes (14): blockIn, blockStack, easeCinematic, easeFast, easeOut, fadeIn, heroContainer, heroHeadline (+6 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (29): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+21 more)

### Community 4 - "Home.tsx"
Cohesion: 0.15
Nodes (14): Experiencia(), Home(), EASE_ACTIVE, EASE_SLIDE, OperationSlider(), OperationSliderProps, pad(), CursorFollower() (+6 more)

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

### Community 9 - "content.ts"
Cohesion: 0.09
Nodes (27): Contato(), OTHER_CHANNELS, Footer(), PrivacyPolicyModal(), Props, getActiveSection(), getSectionTargetY(), isNearPageBottom() (+19 more)

### Community 10 - "ambient-intensity.ts"
Cohesion: 0.13
Nodes (26): AmbientField(), Block, lerp(), makeBlocks(), Pos, randSize(), readAmbientRgb(), shiftRgb() (+18 more)

### Community 22 - "Casos.tsx"
Cohesion: 0.24
Nodes (12): Casos(), ease, Reveal(), RevealGroup(), RevealItem(), RevealProps, useMobileMotion(), useRevealGate() (+4 more)

### Community 24 - "HeroSection.tsx"
Cohesion: 0.19
Nodes (9): HeroBackground(), HeroPortrait(), HeroSection(), BtnProps, ButtonPrimary(), ButtonSecondary(), whatsappUrl(), HERO (+1 more)

## Knowledge Gaps
- **112 isolated node(s):** `21st`, `nextConfig`, `name`, `private`, `version` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AmbientField()` connect `ambient-intensity.ts` to `CaseGrowthOpsPage.tsx`, `Home.tsx`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `21st`, `nextConfig`, `name` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CaseGrowthOpsPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08888888888888889 - nodes in this community are weakly interconnected._
- **Should `motion.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Home.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._