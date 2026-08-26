# Graph Report - PORTFOLIO  (2026-08-26)

## Corpus Check
- 29 files · ~6,151 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 148 nodes · 130 edges · 25 communities (16 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2a4c7b67`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- check-qr.mjs
- layout.tsx
- package.json
- compilerOptions
- measure-fixes.mjs
- dependencies
- devDependencies
- build-cv-pdf.mjs
- Portfólio · David Pinho
- include
- shots.mjs
- cv/page.tsx
- growth-ops-iam/page.tsx
- mcp.json
- next.config.ts
- next-env.d.ts
- eslint.config.mjs
- opengraph-image.tsx
- app/page.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `Portfólio · David Pinho` - 10 edges
3. `scripts` - 6 edges
4. `qrPayload()` - 5 edges
5. `include` - 5 edges
6. `lib` - 4 edges
7. `framer-motion` - 2 edges
8. `lucide-react` - 2 edges
9. `next` - 2 edges
10. `react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (25 total, 9 thin omitted)

### Community 0 - "check-qr.mjs"
Cohesion: 0.17
Nodes (10): buf, out, atual, lock, lockPath, pngPath, constString(), qrPayload() (+2 more)

### Community 2 - "package.json"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, cv:pdf, dev, lint, start (+1 more)

### Community 3 - "compilerOptions"
Cohesion: 0.09
Nodes (22): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+14 more)

### Community 5 - "dependencies"
Cohesion: 0.18
Nodes (11): framer-motion, lucide-react, next, dependencies, framer-motion, lucide-react, next, react (+3 more)

### Community 6 - "devDependencies"
Cohesion: 0.10
Nodes (21): autoprefixer, eslint, eslint-config-next, devDependencies, autoprefixer, eslint, eslint-config-next, playwright (+13 more)

### Community 8 - "Portfólio · David Pinho"
Cohesion: 0.18
Nodes (10): Acessibilidade, Assets gerados, Build de produção, Onde fica o conteúdo, Portfólio · David Pinho, Publicar, Rodar localmente, Scripts (+2 more)

### Community 9 - "include"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 10 - "shots.mjs"
Cohesion: 0.40
Nodes (4): height, out, quadros, width

### Community 11 - "cv/page.tsx"
Cohesion: 0.40
Nodes (3): experience, metadata, projects

### Community 12 - "growth-ops-iam/page.tsx"
Cohesion: 0.40
Nodes (3): flow, metadata, recentLeads

## Knowledge Gaps
- **86 isolated node(s):** `21st`, `compat`, `config`, `nextConfig`, `name` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `21st`, `compat`, `config` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._