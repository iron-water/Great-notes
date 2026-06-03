# Great-notes Learning State Protocol

Great-notes is Mortis's personal knowledge-state repository. Its purpose is not
to maintain a beautiful wiki for its own sake. Its purpose is to answer three
questions accurately:

1. Where am I now in learning?
2. How well do I understand a specific knowledge node?
3. How are knowledge nodes related?

The knowledge tree and the association star map are views over the same learning
state. They are not two separate workflows.

---

## Core Principle

Do not start by classifying a source as a textbook, paper, article, or clip.
Source type is metadata only. It must not decide the workflow.

Every learning session follows the same protocol:

```text
Input material or dialogue
-> identify main knowledge nodes
-> update each node's position
-> update each node's mastery state
-> update each node's relations
-> record evidence and prerequisite debt
-> update current learning position and next actions
```

The minimum successful output of a session is a queryable learning state.

---

## Repository Roles

```text
Great-notes/
├── CLAUDE.md                  top-level protocol
├── AGENTS.md                  agent-facing pointer to this protocol
├── {domain}/                  one subject domain, e.g. Math, Physics, Code
│   ├── MDclaude.md            optional domain-specific guidance
│   ├── raw/                   human-owned source material, never edit
│   ├── processed/             tool-generated source material, never edit
│   └── wiki/                  AI-maintained learning state
│       ├── progress.md        current position, active nodes, gaps, next steps
│       ├── index.md           catalog of known nodes/pages
│       ├── tree.md            tree view of node positions
│       ├── log.md             chronological update log
│       ├── revision_notes.md  repair queue and source/wiki quality issues
│       ├── learner_profile.md learner background and preferences
│       ├── system.md          domain-specific tutoring rules
│       └── concepts/          one page per knowledge node
```

Rules:

- `raw/` is immutable human input.
- `processed/` is regeneratable tool output.
- `wiki/` is AI-maintained state.
- AI may read `raw/` and `processed/`, but should only write `wiki/`.
- If a write is uncertain, write a repair note instead of pretending certainty.

---

## Knowledge Node

The central unit is the knowledge node. A node may be a concept, method,
theorem, skill, misconception, exercise type, or recurring question.

Every important node should eventually answer:

```text
What is it?
Where does it sit?
How well do I understand it?
What evidence supports that judgment?
What nodes does it depend on?
What nodes is it related to?
What should happen next?
```

Recommended concept page structure:

```markdown
---
title: "Node Title"
type: concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - "raw/..."
  - "processed/..."
slug: /domain/path/node
status: active
---

# Node Title

## Position
- Path: Domain > Topic > Subtopic > Node
- Parent:
- Children:
- Position confidence: high / medium / low / unresolved
- Position status: anchored / floating / skipped_ahead / prerequisite_gap

## Mastery
- Level: unlearned / seen / confused / practicing / usable / fluent
- Confidence: high / medium / low

## Evidence
- YYYY-MM-DD | explanation / exercise / recall / application / failure:
  [short evidence]

## Relations
### Prerequisites
- [Node](slug-or-file)

### Depends On Me
- [Node](slug-or-file)

### Related / Contrast / Analogy / Application
- [Node](slug-or-file): relationship description

## Prerequisite Debt
- [ ] [Node](slug-or-file): why it is needed

## Core Understanding
[The shortest faithful explanation currently available.]

## Common Misconceptions
- Misconception:
  Correction:
  Evidence:

## Open Questions
- [ ] Question

## Next Actions
- [ ] Next action
```

Do not leave an important node outside the tree merely because it came from a
network-like source. If the exact position is unknown, set:

```text
Position confidence: low
Position status: floating
```

If the learner reached a node before its prerequisites, set:

```text
Position status: skipped_ahead
Prerequisite Debt: [...]
```

Skipping ahead is allowed. Hiding the skip is not.

---

## Three Required Views

### 1. Current Position

`wiki/progress.md` answers:

```text
What domain is active?
What node/topic am I currently learning?
What did I just learn?
What nodes are active?
What nodes are blocked by prerequisite debt?
What should happen next?
```

### 2. Node Mastery

Mastery is not a vibe. It requires evidence.

Allowed mastery levels:

```text
unlearned  not started
seen       encountered but not explained or practiced
confused   exposed, but learner has explicit confusion or errors
practicing can follow examples, still needs guided work
usable     can solve/explain in ordinary cases
fluent     can transfer, connect, and teach the node
```

Evidence types:

```text
explanation  learner explained it
exercise     learner solved or failed a problem
recall       learner recalled without notes
application  learner used it in a new context
failure      learner exposed a misconception or inability
question     learner asked a meaningful unresolved question
```

If evidence is weak, lower confidence instead of inflating mastery.

### 3. Node Relations

Relations form the association star map. Use clear relationship types:

```text
prerequisite
parent_child
contains
depends_on
related
contrast
analogy
application
generalization
special_case
misconception
source_of
```

The star map does not need to be complete. It needs to be honest and useful.

---

## Session Protocol

At session start:

1. Read this protocol.
2. Read the domain's `MDclaude.md` if present.
3. Read `wiki/progress.md`.
4. Ask or infer the session goal.
5. Identify the likely domain and active node.

During the session:

1. Keep one main thread.
2. Tangents are allowed, but mark them as tangential.
3. Create/update concept pages for main-thread nodes.
4. Record mastery evidence as it appears.
5. Record prerequisite debt when the learner jumps ahead.
6. Add relations when they are useful, not decorative.

At session close, complete the checklist below. A session is not closed until the
checklist is satisfied or each missing item has an explicit reason.

```text
[ ] Main nodes identified
[ ] Current position updated in progress.md
[ ] Each main node has a Position section
[ ] Each main node has a Mastery section
[ ] Each mastery judgment has evidence
[ ] Important relations were recorded
[ ] Jump-ahead / prerequisite debt was recorded if present
[ ] Next actions were recorded
[ ] index.md updated if pages changed
[ ] tree.md updated if positions changed
[ ] log.md appended
[ ] revision_notes.md updated for unresolved repairs
```

Never write "done" if the learning state is not queryable.

---

## Progress File Contract

`progress.md` should be concise and current. It is not a diary dump.

Recommended structure:

```markdown
# {Domain} Learning State

## Current Position
- Active node:
- Active path:
- Status:
- Last updated:

## Active Nodes
| Node | Mastery | Confidence | Evidence | Next action |
|---|---|---|---|---|

## Prerequisite Debt
| Needed node | Blocks | Reason | Next action |
|---|---|---|---|

## Recent Evidence
- YYYY-MM-DD | Node | Evidence type | Summary

## Next Actions
- [ ] ...
```

Old progress entries should be archived only when useful. Otherwise keep
`progress.md` focused on the current state.

---

## Tree View Contract

`tree.md` is generated or maintained from node positions. It answers "where am I
in the structure?"

Rules:

- Include anchored nodes.
- Include skipped-ahead nodes with a marker.
- Include floating nodes in a separate "Unresolved Position" section.
- Do not exclude nodes simply because they came from a paper, article, or clip.

Example:

```text
Math
└── Algebra
    └── Representation [confused, skipped_ahead]
        prerequisite debt: Homomorphism, Group

Unresolved Position
└── Some New Node [floating, position confidence: low]
```

---

## Index Contract

`index.md` is a catalog, not a narrative.

Each entry should include:

```text
Node title
Path or unresolved position
Mastery level
One-line summary
Slug/file path
```

---

## Revision Notes Contract

Use `revision_notes.md` for repair work:

- unresolved node positions
- missing concept pages
- inconsistent slugs
- weak evidence
- contradictory sources
- tree/index mismatch
- concepts with relations but no mastery evidence
- mastery claims with no evidence

Do not silently fix uncertain structure by inventing confidence.

---

## Query Protocol

When asked a question:

1. Read `index.md` and relevant concept pages.
2. Answer using existing learning state when possible.
3. If the answer changes a node's mastery, relations, or open questions, offer
   to update the wiki.
4. Do not overwrite learning state unless the session goal includes maintenance.

---

## Momentum Integration

Momentum may use Great-notes as a read-only knowledge network.

Momentum primarily needs:

```text
getCurrentLearningPosition(domain)
getNodeMastery(node)
getNodeRelations(node)
getPrerequisiteDebt(domain or node)
getNextActions(domain)
```

Therefore Great-notes must optimize for accurate state, not pretty prose.

If Momentum or an internal AI wants Great-notes updates, prefer generating a
suggested patch or maintenance note first. Direct writes should remain scoped to
`wiki/` and should follow this protocol.

---

## Style

- Be precise rather than comprehensive.
- Prefer explicit uncertainty over fake structure.
- Use Chinese, English, or both, depending on the clearest expression.
- Preserve mathematical and technical notation.
- Do not dumb down content, but always record the learner's actual state.

Final maxim:

```text
The tree says where the node sits.
The star map says how it connects.
The learning state says what Mortis can actually do with it.
```
