# Research Wiki

## Who I Am

This is Mortis's personal research knowledge base. Domains: **math, code algorithm, meta-learning, test**, etc. Each domain has its own flavor and emphasis. For domain-specific details, read `MDclaude.md` inside the domain.

---

## Architecture

```
Great-notes/
├── Claude.md                   ← you are here: top-level architecture
├── {domain}/                  ← one domain directory per subject
│   ├── MDclaude.md            ← domain-specific description
│   ├── raw/                   ← IMMUTABLE: human input only
│   │   ├── papers/            ←   papers & articles (PDF/MD)
│   │   │   └── images/        ←   images extracted from papers
│   │   ├── textbooks/         ←   large textbooks (PDF)
│   │   └── clips/             ←   lecture notes, handwritten notes, excerpts
│   ├── processed/             ← CONVERTIBLE: tool output, AI never edits
│   │   └── textbooks/
│   │       └── {book}/
│   │           ├── ch01-{title}.md
│   │           └── ch02-{title}.md
│   └── wiki/                  ← AI-OWNED: all knowledge maintained by LLM
│       ├── system.md          ←   tutoring rules & domain conventions
│       ├── learner_profile.md ←   learner background & preferences
│       ├── progress.md        ←   session log, mastery tracking, next steps
│       ├── revision_notes.md  ←   material improvement suggestions
│       ├── index.md           ←   catalog of ALL wiki pages (one-line summary each)
│       ├── log.md             ←   chronological record of ingest / learn / lint
│       ├── tree.md            ←   knowledge tree (auto-generated from concepts/)
│       ├── session_archive.md ←   archived progress entries
│       ├── concepts/          ←   concept pages (one per key idea)
│       │   ├── _template.md
│       │   └── {concept}.md
│       ├── papers/            ←   paper summary pages (network track)
│       ├── questions/         ←   open research questions
│       └── connections/       ←   cross-cutting connection pages
```

### Layer Roles

| Layer | Who owns it | Rules |
|-------|-------------|-------|
| `raw/` | Human | Immutable. Copy-paste papers, drop PDFs, dump notes. Never edit. |
| `processed/` | External tools | Regeneratable cache. PDF → Markdown/LaTeX chapter splits. AI reads but never writes. |
| `wiki/` | AI (LLM) | AI creates, updates, and maintains everything here. Mortis reads and browses. |

---

## Dual-Track System

The wiki supports two parallel knowledge-building strategies. They share the same `concepts/` pool — a concept discovered through the network track gets deepened when the tree track reaches it.

### Track A: Knowledge Network (existing, enhanced)

**When**: You find a paper, article, or note worth keeping. Quick, shallow ingestion.
**Input**: Any file → `raw/papers/` or `raw/clips/`
**Output**: Paper summary + concept page (sparse, links only)

```
raw/papers/smith2024.pdf  ──ingest──►  wiki/papers/smith2024.md
                                       wiki/concepts/特征值.md  (sparse: def + links)
                                       wiki/index.md  (updated)
                                       wiki/log.md  (appended)
```

**Productivity trick**: Copy-paste the full text into `raw/papers/`. AI will auto-extract and categorize.

### Track B: Knowledge Tree (new, systematic)

**When**: You want to learn a thick textbook from cover to cover.
**Input**: Textbook PDF → `raw/textbooks/` → external tool → `processed/textbooks/{book}/chXX.md`
**Output**: Full concept pages with tree position + Socratic teaching + exercises

```
raw/textbooks/线性代数.pdf
    ↓ (external tool: MinerU / PyMuPDF4LLM)
processed/textbooks/线性代数/
    ├── ch01-行列式.md
    ├── ch02-矩阵.md
    └── ...
    ↓ (AI session-by-session)
wiki/concepts/行列式.md    (full: tree pos, theorems, exercises)
wiki/concepts/矩阵.md      (full: tree pos, prerequisites, practice)
wiki/tree.md              (auto-generated hierarchy)
wiki/progress.md          (chapter-by-chapter progress)
```

---

## Knowledge Tree (tree.md)

Auto-generated from concept pages that have a **tree position** section. Concepts created by the network track (sparse, no tree position) do NOT appear in the tree — they live in `index.md` only.

### Example

```
数学
├── 高等代数
│   ├── 行列式
│   │   ├── 排列与逆序数
│   │   ├── n阶行列式定义
│   │   └── 展开定理
│   ├── 矩阵
│   │   ├── 矩阵运算
│   │   └── 逆矩阵
│   └── 线性方程组
├── 数学分析
│   ├── 极限
│   ├── 连续
│   └── 微分
└── 符号计算
```

### Rules

- **Parent-child**: hierarchical decomposition (big topic → sub-topic → specific concept)
- **Prerequisite edges**: learning order — you must understand parent before child
- **Leaf nodes**: correspond 1:1 to `concepts/{concept}.md`
- **Regeneration**: run after any concept page's tree position changes

---

## Page Conventions

### Page Format

All wiki pages use YAML frontmatter:

```yaml
---
title: "Page Title"
type: concept | paper | question | connection
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: "raw/papers/xxx.md" | "processed/textbooks/xxx/chXX.md"
tags: tag1, tag2
slug: /domain/branch/page-name
---
```

### Concept Pages (dual-track)

A concept page can be populated at two depths:

| Section | Network track (sparse) | Tree track (full) |
|---------|----------------------|-------------------|
| `sources` | `raw/papers/xxx.md` | `processed/textbooks/xxx/chXX.md` |
| Tree position | absent → not in tree.md | filled → appears in tree.md |
| Core intuition | empty | AI-generated one-liner |
| Key theorems | empty | extracted from textbook |
| Network connections | present (links to papers, related concepts) | same + tree-internal links |
| Common misconceptions | empty | discovered during dialogue |
| Exercises | empty | AI-generated, with hints |
| Mastery | 未学习 / 初步了解 | 理解中 / 掌握 |

The template lives at `concepts/_template.md`.

### Linking Grammar

Internal links must follow these formatting conventions:

**1. Metadata Slug Requirement**: Every page must have a unique `slug` in its YAML frontmatter. This slug acts as the internal URL (e.g., `/papers/smith-2024`, `/math/linear-algebra/determinant`).

**2. Page-Level Linking**: Standard Markdown syntax with the target slug.

   Format: `[Link Text](/slug/of/target/page)`

   Example: `[See detailed proof](/math/linear-algebra/determinant)`

**3. Block-Level Linking (Anchor Tags)**: To link to a specific section.

   Step A — Add an HTML comment anchor at the destination:
   ```
   This is the target passage<!-- {#determinant-expansion#} -->
   ```

   Step B — Append `#hashTag` to the target slug:
   ```
   [Review the expansion](/math/linear-algebra/determinant#determinant-expansion)
   ```

### Naming Conventions

| Page type | Filename pattern | Example |
|-----------|-----------------|---------|
| Concept | `lowercase-with-hyphens.md` | `eigenvalue-decomposition.md` |
| Paper | `AuthorYear-short-title.md` | `Ramsauer2020-hopfield-attention.md` |
| Question | `q-short-description.md` | `q-rate-reduction-as-energy.md` |
| Connection | `conn-topic.md` | `conn-mcr2-meets-eqprop.md` |

---

## Operations

### Network Track: Ingest

When told to ingest a paper or clipped article:

1. Read the full source from `raw/papers/` or `raw/clips/`
2. (Interactive mode) Discuss key takeaways with Mortis
3. Create or update a paper summary page in `wiki/papers/`
4. For each key concept:
   - If concept page exists → update with new info, note the source
   - If not → create concept page (sparse: definition + connections)
5. Check if this source creates new connections → optionally create `wiki/connections/`
6. Tag which questions this source speaks to
7. Update `wiki/index.md`
8. Append entry to `wiki/log.md` (format: `## [YYYY-MM-DD] ingest | Title`)

### Tree Track: Learn

When asked to start or continue a textbook:

1. Read `progress.md` to find current chapter
2. Load the corresponding `.md` from `processed/textbooks/{book}/`
3. For each key concept in the chapter:
   - Create or update concept page with full tree metadata
   - Set tree position (branch, parent, children, prerequisites)
   - Generate core intuition, extract key theorems
4. Begin Socratic dialogue to guide understanding
5. During dialogue: record misconceptions, generate practice problems
6. After mastering: update mastery level
7. Regenerate `wiki/tree.md`
8. Update `wiki/progress.md`, `wiki/index.md`, `wiki/log.md`

### Query

When asked a question:

1. Read `wiki/index.md` to find relevant pages
2. Load and read those pages
3. Synthesize an answer with `[[wikilinks]]` to source pages
4. If the answer reveals a genuinely new insight, offer to save it as a `wiki/questions/` or `wiki/connections/` page

### Lint

When asked to audit the wiki:

1. Orphan pages (no inbound links)
2. Concepts mentioned but lacking their own page
3. Stale claims contradicted by newer sources
4. Core questions with thin coverage
5. Concepts in the tree whose prerequisites aren't yet mastered
6. Suggest specific papers or topics to fill gaps
7. Report in a structured format

---

## Templates

### Paper Summary

```yaml
---
title: "Paper Title"
type: paper
authors: Author1, Author2
year: YYYY
venue: NeurIPS/ICML/ICLR/arXiv/etc.
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: "raw/papers/filename.md"
tags:
slug: /papers/short-name
---

## Core Contribution
[1-2 sentences: what is the single main claim or result?]

## Method
[How they achieve it. Key equations/algorithms if relevant.]

## Key Results
[What did they show? Quantitative if possible.]

## Limitations & Open Questions
[What doesn't it do? What assumptions does it make?]

## Connections
- [[concept-1]]: how this paper relates
- [[concept-2]]: how this paper relates

## Raw Source
- [[raw/papers/filename.md]]
```

### Concept (dual-track)

See `concepts/_template.md` in each domain's wiki. The unified structure:

```yaml
---
title: "Concept Name"
type: concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: "raw/..." | "processed/..."
tags:
slug: /domain/branch/concept
---

## Tree Position (tree track only)
- Branch: Math > Linear Algebra > Determinant
- Parent: [parent](parent.md)
- Children: [child1](child1.md), [child2](child2.md)
- Prerequisites: [pre-req](pre-req.md)
- Mastery: unlearned / basic / learning / mastered

## Core Intuition
(one-sentence essence, AI-generated during teaching)

## Key Theorems
(from source, restated for understanding)

## Network Connections
| Related concept | Relationship | Description |
|----------------|-------------|-------------|

## Common Misconceptions
(discovered during Socratic dialogue)

## Exercises
(AI-generated, with hints)

## Open Questions
```

---

## Style Notes

- Write for a reader with strong math/CS background (Mortis herself)
- Don't dumb things down; use proper notation
- When in doubt, preserve the mathematical formulation, not just the prose description
- Flag genuine contradictions between sources explicitly rather than smoothing them over
- 中英文混用 is fine — use whatever is clearest for the concept

---

## Socrates System

Each domain's `wiki/` has five Socrates files:

| File | Purpose |
|------|---------|
| `learner_profile.md` | Learner's knowledge background and learning style |
| `progress.md` | Mastery tracking, session log, knowledge gaps |
| `revision_notes.md` | Weak points and material improvement suggestions |
| `system.md` | Socratic teaching rules (domain-specific instantiation) |
| `session_archive.md` | Archived old session records (only when `progress.md` exceeds 200 lines) |

**Workflow**:
1. Start a session → read `system.md` + `progress.md`
2. Ask: new source to ingest (network), or continue textbook (tree), or review?
3. Teach via Socratic dialogue, updating concept pages in real time
4. End session → update `progress.md`, `revision_notes.md`, `index.md`, `log.md`
5. If tree structure changed → regenerate `tree.md`

---

## External Tools (recommended)

For processing large PDFs into `processed/textbooks/{book}/` chapter splits:

| Tool | Description |
|------|-------------|
| [MinerU](https://github.com/opendatalab/MinerU) | Complex PDF → Markdown/JSON, best for academic papers & textbooks |
| [PyMuPDF4LLM](https://github.com/pymupdf/PyMuPDF4LLM) | Lightweight PDF → Markdown for LLM consumption |
| [Marker](https://github.com/VikParuchuri/marker) | PDF → Markdown, fast and accurate (via Surya OCR) |
