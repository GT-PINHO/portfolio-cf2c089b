# Graph Report - PORTFOLIO  (2026-08-07)

## Corpus Check
- 59 files · ~15,970 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 293 nodes · 447 edges · 29 communities (18 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0f6ee97e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ObservabilityDashboard.tsx
- layout.tsx
- motion.ts
- compilerOptions
- measure-fixes.mjs
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
- Contato.tsx
- CaseGrowthOpsPage.tsx
- opengraph-image.tsx
- staggerContainer
- staggerItem
- Nav.tsx
- Home.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `AmbientField()` - 10 edges
3. `Container()` - 8 edges
4. `RevealItem()` - 8 edges
5. `useAmbientMode()` - 8 edges
6. `RevealGroup()` - 7 edges
7. `Portfólio · David Pinho` - 7 edges
8. `GROWTH_OPS_CASE` - 6 edges
9. `PROFILE` - 6 edges
10. `CONTACT` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Casos()` --references--> `CASES`  [EXTRACTED]
  src/components/Casos.tsx → src/lib/content.ts
- `Contato()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/Contato.tsx → src/lib/contact.ts
- `Experiencia()` --calls--> `useAmbientMode()`  [EXTRACTED]
  src/components/Experiencia.tsx → src/lib/ambient-intensity.ts
- `HeroPortrait()` --calls--> `useParallaxOffset()`  [EXTRACTED]
  src/components/hero/HeroPortrait.tsx → src/hooks/useParallaxOffset.ts
- `HeroSection()` --calls--> `useAmbientMode()`  [EXTRACTED]
  src/components/hero/HeroSection.tsx → src/lib/ambient-intensity.ts

## Import Cycles
- None detected.

## Communities (29 total, 11 thin omitted)

### Community 0 - "ObservabilityDashboard.tsx"
Cohesion: 0.28
Nodes (6): ObservabilityDashboard(), statusBadge, toneClass, CountUp(), CountUpProps, formatValue()

### Community 1 - "layout.tsx"
Cohesion: 0.10
Nodes (15): metadata, display, metadata, ogImage, sans, viewport, CaseGrowthOpsPage(), EnableJsReveal() (+7 more)

### Community 2 - "motion.ts"
Cohesion: 0.12
Nodes (15): blockIn, blockStack, easeCinematic, easeFast, easeOut, fadeIn, heroContainer, heroHeadline (+7 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (29): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+21 more)

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
Cohesion: 0.11
Nodes (21): Footer(), PrivacyPolicyModal(), Props, KpiStrip(), ProofStrip(), Container(), ContainerProps, CaseItem (+13 more)

### Community 10 - "ambient-intensity.ts"
Cohesion: 0.13
Nodes (27): AmbientField(), Block, lerp(), makeBlocks(), Pos, randSize(), readAmbientRgb(), shiftRgb() (+19 more)

### Community 21 - "Contato.tsx"
Cohesion: 0.18
Nodes (5): OTHER_CHANNELS, base, IconInstagram(), IconLinkedIn(), IconMail()

### Community 22 - "CaseGrowthOpsPage.tsx"
Cohesion: 0.17
Nodes (16): CaseReadingNav(), TOC, LeadFlowTimeline(), Casos(), BtnProps, ButtonPrimary(), ButtonSecondary(), Reveal() (+8 more)

### Community 27 - "Nav.tsx"
Cohesion: 0.29
Nodes (9): getActiveSection(), getSectionTargetY(), heroPastThreshold(), isNearPageBottom(), LINKS, maxScrollY(), Nav(), scrollToSection() (+1 more)

### Community 28 - "Home.tsx"
Cohesion: 0.13
Nodes (14): Contato(), Experiencia(), HeroBackground(), HeroPortrait(), HeroSection(), Home(), OperationPillars(), CursorFollower() (+6 more)

## Knowledge Gaps
- **112 isolated node(s):** `21st`, `nextConfig`, `name`, `private`, `version` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AmbientField()` connect `ambient-intensity.ts` to `Home.tsx`, `CaseGrowthOpsPage.tsx`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `CONTACT` connect `content.ts` to `layout.tsx`, `Contato.tsx`, `CaseGrowthOpsPage.tsx`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `PROFILE` connect `Home.tsx` to `layout.tsx`, `Nav.tsx`, `content.ts`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `21st`, `nextConfig`, `name` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10098522167487685 - nodes in this community are weakly interconnected._
- **Should `motion.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._