# Great-notes Agent Instructions

Read and follow `CLAUDE.md` in this directory. It is the source of truth for all
agents working in Great-notes.

Great-notes is a queryable learning-state repository. Its core questions are:

1. Where is Mortis now in learning?
2. How well does Mortis understand a specific knowledge node?
3. How are knowledge nodes related?

Do not classify a session by source type first. Textbook, paper, article, clip,
and conversation are metadata only.

Every meaningful session must update:

- current learning position
- knowledge node mastery with evidence
- node relations
- prerequisite debt when Mortis jumps ahead
- next actions

Never hide uncertainty. If a node's tree position is unclear, mark it as
`floating` or `unresolved`. If prerequisites are missing, mark
`skipped_ahead` and record prerequisite debt.

Do not edit `raw/` or `processed/`. Write only under `wiki/`, unless Mortis
explicitly instructs otherwise.
