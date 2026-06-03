# Great-notes Core Protocol

Great-notes is Mortis's learning knowledge base. Each domain is organized into
three layers:

1. `raw/`: input material, including human-added files and tool-converted files.
2. `progress/`: shared human-AI interaction workspace.
3. `wiki/`: AI-retained durable knowledge state.

The core objects are:

- `progress/learning_log.md`: complete learning log, editable by human and AI.
- `wiki/concepts/`: Knowledge Nodes, maintained by AI.

Everything else is a later abstraction or generated view.

---

## Domain Layout

```text
{domain}/
├── raw/
│   ├── papers/       human-added papers and articles
│   ├── textbooks/    books, textbook sources, and converted textbook text
│   └── clips/        notes, excerpts, screenshots, fragments
├── progress/
│   ├── README.md
│   └── learning_log.md
├── wiki/
│   ├── README.md
│   ├── concepts/     Knowledge Nodes
│   ├── archive/      archived old records
│   ├── index.md      future generated view placeholder
│   ├── tree.md       future generated view placeholder
│   └── progress.md   future generated view placeholder
```

Tool-converted material is input material. Put it under `raw/`, usually
`raw/textbooks/`, unless Mortis explicitly defines a separate staging process.

---

## Layer Responsibilities

### raw/

Input layer.

- Humans place materials here.
- Tools may also place converted materials here when Mortis treats them as
  readable inputs.
- Humans may organize by `papers/`, `textbooks/`, and `clips/`.
- AI may read raw materials.
- AI must not rewrite raw materials.
- Source type is metadata only; it must not determine the learning workflow.

### progress/

Shared human-AI workbench.

- Humans may write here.
- AI may write here.
- `learning_log.md` is the complete chronological learning record.
- Use this layer for session notes, direct interaction records, corrections,
  user intent, and full learning history.
- Do not summarize away history unless Mortis explicitly requests an archive.

### wiki/

AI-retained durable knowledge state.

- AI maintains this layer.
- Humans normally do not need to edit it.
- `wiki/concepts/` stores Knowledge Nodes.
- AI distills durable state from `progress/learning_log.md` and relevant raw
  materials into Knowledge Nodes.
- `index.md`, `tree.md`, and `progress.md` are placeholders for future derived
  views until Mortis defines them.

---

## Primary Object 1: Learning Log

Path:

```text
{domain}/progress/learning_log.md
```

This is the complete interaction and learning history. It is primary storage.
Append events; do not overwrite old events.

Recommended event structure:

```markdown
## Event YYYY-MM-DD-001
- Time:
- Trigger: user_requested / task_started / task_completed / review / import / correction
- Input:
- User intent:
- Main nodes:
- Secondary nodes:
- What happened:
- Evidence created:
- Mastery changes:
- Relation changes:
- Prerequisite debt discovered:
- Open questions:
- Next actions:
- Source references:
- Momentum references:
```

The log should preserve:

- what material was studied
- what Mortis asked, said, rejected, or corrected
- what the AI inferred
- what evidence appeared
- what changed in mastery or relations
- where Mortis jumped ahead
- what uncertainty remains
- what should happen next

---

## Primary Object 2: Knowledge Node

Path:

```text
{domain}/wiki/concepts/{node}.md
```

A Knowledge Node is a learnable unit: concept, theorem, method, skill, exercise
type, misconception, open question, or recurring difficulty.

Required structure:

```markdown
---
title: "Node Title"
type: knowledge_node
domain: Domain
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: active
slug: /domain/path/node
sources:
  - "raw/..."
---

# Node Title

## Node Identity
- Kind:
- One-line meaning:
- Current role in learning:

## Position State
- Path hypothesis:
- Position confidence: high / medium / low / unresolved
- Position status: anchored / floating / skipped_ahead / prerequisite_gap
- Notes:

## Mastery State
- Level: unlearned / seen / confused / practicing / usable / fluent
- Confidence: high / medium / low
- Last evidence:
- Last updated:

## Evidence Ledger
- YYYY-MM-DD | event-id | evidence-type: summary

## Relations
### Prerequisites
- Node:
  relation confidence:
  why:

### Depends On Me
- Node:
  relation confidence:
  why:

### Related / Contrast / Analogy / Application
- Node:
  relation type:
  relation confidence:
  why:

## Prerequisite Debt
- [ ] Node:
  why it matters:
  discovered at event-id:

## Open Questions
- [ ] Question:
  discovered at event-id:

## Next Local Actions
- [ ] Action:
  reason:
```

Uncertainty rules:

- A node may be `floating`.
- A node may be `skipped_ahead`.
- A relation may have low confidence.
- Hiding uncertainty is worse than leaving a field unresolved.

---

## Session Protocol

At session start:

1. Read this protocol.
2. Read domain `MDclaude.md` if present.
3. Read `{domain}/progress/learning_log.md`.
4. Read relevant Knowledge Nodes from `{domain}/wiki/concepts/`.
5. Ask or infer the learning intent.

During the session:

1. Keep the main learning thread visible.
2. Append meaningful events to `progress/learning_log.md`.
3. Create or update Knowledge Nodes for durable knowledge state.
4. Record mastery evidence when it appears.
5. Record relation changes with reasons.
6. Record jump-ahead and prerequisite debt immediately.
7. Keep tangents separate from the main thread.

At session close:

```text
[ ] learning_log.md has a new event
[ ] Main Knowledge Nodes were created or updated
[ ] Mastery changes have evidence
[ ] Relation changes have reasons
[ ] Jump-ahead / prerequisite debt recorded if present
[ ] Open questions recorded if present
[ ] Next local actions recorded
```

The session is not complete unless the log can reconstruct what happened and the
nodes can answer current state questions.

---

## Derived Views

Do not maintain derived views unless Mortis asks.

Current placeholder views:

- `wiki/index.md`
- `wiki/tree.md`
- `wiki/progress.md`
- future graphs and dashboards

These must not be treated as source of truth. Later, Mortis may define how to
generate them from:

```text
progress/learning_log.md
wiki/concepts/
```

---

## Momentum Integration

Momentum should read:

```text
{domain}/progress/learning_log.md
{domain}/wiki/concepts/
```

Useful future queries:

```text
getRecentLearningEvents(domain)
getNodeMastery(node)
getNodeRelations(node)
getPrerequisiteDebt(node or domain)
getCandidateNextActions(domain)
```

Momentum should not depend on `wiki/index.md`, `wiki/tree.md`, or
`wiki/progress.md` until their rules are explicitly defined.

---

## Style

- Preserve complete learning history in `progress/learning_log.md`.
- Preserve durable state in Knowledge Nodes.
- Prefer explicit uncertainty over invented structure.
- Use source type as metadata, not workflow control.
- Use Chinese, English, or both as clarity requires.

Final maxim:

```text
raw is what Mortis gives the system, including tool-converted input.
progress is where Mortis and AI work together.
wiki is what AI keeps after distillation.
```
