# Research Wiki

## Who I Am

This is Mortis's personal research knowledge base. Domains: **math, code algorithm, meta-learning, test**, etc. Each domain has its own flavor and emphasis. For domain-specific details, read `MDclaude.md` inside the domain.

---

## Workflow:
1. Start a session → read `system.md` + `progress.md`
2. Ask: new source to ingest , or continue textbook , or review?
3. Teach via Socratic dialogue, updating concept pages in real time
4. End session → update `progress.md`, `revision_notes.md`, `index.md`, `log.md`
5. If tree structure changed → regenerate `tree.md`

### Workflow detail

| Source type | Real-time updates (during dialogue) | Batch updates (session end) |
|---|---|---|
| Textbook chapter (`processed/`) | **Tree track** — tree position, core intuition, key theorems, exercises, mastery | **Network track** — network connections, paper cross-links, index.md, questions |
| Article / clip (`raw/`) | **Network track** — paper summary, concept pages (definition + connections), index.md | **Tree track** — tree positions, core intuition, key theorems, mastery |

**End result**: Every concept page should eventually have BOTH full tree metadata AND full network connections, regardless of which track initiated it.

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

The wiki runs two tracks **simultaneously in every session**. They share the same `concepts/` pool. The distinction is only about **update timing** — which track gets updated in real-time during dialogue vs. batch-updated at session end.

> **关键规则：每个 session 两轨都跑。区别只在更新时机。绝不允许"这次只跑网络轨"或"只跑树轨"。**

| Source type | Real-time updates (during dialogue) | Batch updates (session end) |
|---|---|---|
| Textbook chapter (`processed/`) | **Tree track** — tree position, core intuition, key theorems, exercises, mastery | **Network track** — network connections, paper cross-links, index.md, questions |
| Article / clip (`raw/`) | **Network track** — paper summary, concept pages (definition + connections), index.md | **Tree track** — tree positions, core intuition, key theorems, mastery |

**End result**: Every concept page should eventually have BOTH full tree metadata AND full network connections, regardless of which track initiated it.

### Track A: Knowledge Network

**When**: You find a paper, article, or note worth keeping.
**Input**: Any file → `raw/papers/` or `raw/clips/`

```
raw/papers/smith2024.pdf  ──ingest──►  wiki/papers/smith2024.md
                                       wiki/concepts/特征值.md  (definition + connections)
                                       wiki/index.md  (updated)
                                       wiki/log.md  (appended)
                                       ... at session end → add tree positions, theorems, mastery
```

**Productivity trick**: Copy-paste the full text into `raw/papers/`. AI will auto-extract and categorize.

### Track B: Knowledge Tree

**When**: You want to learn a thick textbook from cover to cover.
**Input**: Textbook PDF → `raw/textbooks/` → external tool → `processed/textbooks/{book}/chXX.md`

```
raw/textbooks/线性代数.pdf
    ↓ (external tool: MinerU / PyMuPDF4LLM)
processed/textbooks/线性代数/
    ├── ch01-行列式.md
    ├── ch02-矩阵.md
    └── ...
    ↓ (AI session-by-session)
wiki/concepts/行列式.md    (tree pos, theorems, exercises — updated live)
wiki/concepts/矩阵.md      (tree pos, prerequisites, practice — updated live)
wiki/tree.md              (auto-generated hierarchy, updated live)
wiki/progress.md          (chapter-by-chapter progress)
... at session end → add network connections, paper cross-links, questions
```

---

## Knowledge Tree (tree.md)

Auto-generated from concept pages that have a **tree position** section. After session-end batch processing, **all concept pages should eventually have tree positions** — even those first created via the network track. A concept that still lacks tree position is a signal that tree-track batch processing hasn't run yet or the concept's place in the tree hasn't been determined.

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
- **Every tree node** (internal or leaf) corresponds 1:1 to a `concepts/{concept}.md` page
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

| Rule	                                                        | Example	                             |
| ------------------------------------------------------------ | ------------------------------------ |
| Key followed by colon                                        | `sources:`	; `tags`...               |
| Each item on new line with `- ` prefix                       | 	`- "value"`	                        |
| Quote values containing special chars, spaces, or non-ASCII	 | `- "path with (parens) or 中文.md"`	 |
| No commas between items	                                     | (line break + `- ` instead)	         |


### Concept Pages (dual-track)

All concept pages should eventually have **both** tree metadata and network connections, regardless of which track created them first. The difference is only in timing:

| Section               | Textbook session (tree first)           | Article session (network first)         |
| --------------------- | --------------------------------------- | --------------------------------------- |
| `sources`             | `processed/textbooks/xxx/chXX.md`       | `raw/papers/xxx.md` (or `raw/clips/`)   |
| Tree position         | **Live** — filled during dialogue       | **Batch** — added at session end        |
| Core intuition        | **Live** — AI-generated during teaching | **Batch** — AI-generated at session end |
| Key theorems          | **Live** — extracted from chapter       | **Batch** — extracted from article      |
| Network connections   | **Batch** — added at session end        | **Live** — created during dialogue      |
| Common misconceptions | **Live** — discovered during dialogue   | **Live** — discovered during dialogue   |
<!-- misconceptions surface during any Socratic dialogue regardless of source type, hence both are Live -->
| Exercises | **Live** — AI-generated during teaching | **Batch** — AI-generated at session end |
| Mastery | **Live** — updated as learner progresses | **Batch** — set based on article depth |

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

## Two tracks at the same time

Every session runs both tracks. The **source type** determines which track updates live and which at end:

| Start from | Live track | Batch track |
|---|---|---|
| Textbook chapter (`processed/`) | Tree — tree positions, theorems, mastery, tree.md | Network — network connections, paper cross-links |
| Article / clip (`raw/`) | Network — paper summary, concept defs, network connections, index.md | Tree — tree positions, core intuition, theorems, tree.md |

### Textbook session (tree live, network batch)

When learning starts from a `processed/` chapter:

**During dialogue (tree track — live):**
1. Read `progress.md` to find current chapter
2. Load the corresponding `.md` from `processed/textbooks/{book}/`
3. For each key concept in the chapter:
   - Create or update concept page with full tree metadata
   - Set tree position (branch, parent, children, prerequisites)
   - Generate core intuition, extract key theorems
   - Update mastery level as learner progresses
4. Record misconceptions, generate practice problems
5. Regenerate `wiki/tree.md` as tree positions change

**At session end (network track — batch):**
6. **For the main-thread concepts only** (tangents and digressions are excluded): add network connections — link to related papers, concepts, questions
7. Check if any main concepts connect to raw/ articles → add cross-references
8. Update `wiki/index.md`, `wiki/log.md`
9. Update `wiki/progress.md` with session record

### Article session (network live, tree batch)

When learning starts from a `raw/` file:

**During dialogue (network track — live):**
1. Read the full source from `raw/papers/` or `raw/clips/`
2. Discuss key takeaways with Mortis (Socratic dialogue)
3. Create or update a paper summary page in `wiki/papers/`
4. For each key concept:
   - If concept page exists → update with new info, note the source
   - If not → create concept page (definition + network connections)
5. Check for new cross-concept connections → optionally create `wiki/connections/`
6. Update `wiki/index.md`

**At session end (tree track — batch):**
7. **For the main-thread concepts only** (tangents and digressions are excluded): add tree position, generate core intuition, extract key theorems
8. Set mastery level based on depth of article discussion
9. Regenerate `wiki/tree.md`
10. Append entry to `wiki/log.md`
11. Update `wiki/progress.md` with session record

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

## Session Discipline

**一次只讨论一个主题。对话中的发散追问题不计入 batch 处理范围——batch 只更新主线概念。**

- Batch steps at session end **MUST be completed** before the session is considered closed. A concept page missing its batch-side content is incomplete.
- When the learner explicitly ends the session or the main topic is exhausted: trigger batch processing.
- If the learner switches topics mid-session without closure: treat it as a new session (close previous topic's batch first).

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



