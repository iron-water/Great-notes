# Great-notes Agent Instructions

Read `README.md` first.

Each domain has three layers:

- `raw/`: input material, including human-added and tool-converted files,
  organized by `papers/`, `textbooks/`, and `clips/`.
- `progress/`: shared human-AI workbench.
- `wiki/`: AI-retained durable knowledge state.

Primary objects:

- `progress/learning_log.md`: complete learning history, editable by human and AI.
- `wiki/concepts/`: Knowledge Nodes, maintained by AI.

Do not treat `wiki/index.md`, `wiki/tree.md`, or `wiki/progress.md` as source of
truth. They are future generated-view placeholders until Mortis defines them.

Do not choose workflow by source type. Source type is metadata only.

Every learning session must:

- append an event to `progress/learning_log.md`
- create or update relevant Knowledge Nodes in `wiki/concepts/`
- record mastery evidence
- record relation changes with reasons
- record prerequisite debt when Mortis jumps ahead
- record next local actions

Do not edit `raw/`. Tool-converted textbook files belong in `raw/textbooks/`.
