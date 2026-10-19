# Context Map

slopkit is a family of packages for SolidJS 2.x. Each package is its own context with its own vocabulary and decisions, and lives in its own repository. This repository holds one of them: signal forms. Read this file, then [packages/signal-forms/CONTEXT.md](./packages/signal-forms/CONTEXT.md).

## Contexts

- [Signal forms](./packages/signal-forms/CONTEXT.md) (`@solid-slopkit/signal-forms`): schema-driven form state over a Solid store. Decisions in [packages/signal-forms/docs/adr](./packages/signal-forms/docs/adr).
- Components (`@solid-slopkit/components`): components, their look, theming and the provider. In [solid-slopkit/components](https://github.com/solid-slopkit/components).
- i18n (`@solid-slopkit/i18n`): translation files next to the code that uses them, and the active locale. In another repository.
- threejs (`@solid-slopkit/threejs`): three.js scenes described with Solid components inside a **Canvas**. In another repository.

Decisions that bind the whole family live in [docs/adr](./docs/adr): distribution (0001), dependencies (0002), browser baseline (0010), agent docs in the package (0012), no right-to-left support (0014) and package independence (0016). ADR numbers are unique across the family, so "ADR 0013" names one decision wherever it lives. A new ADR goes in `docs/adr` when it binds every package, otherwise in `packages/signal-forms/docs/adr`.

## Relationships

No package depends on another at runtime; they meet through props (ADR 0016).

- **Signal forms → Components**: a **Binding** (`bind(field)`) returns exactly the props a components input takes. Components is a dev-only dependency of signal forms, installed from npm for tests and docs demos.
- **Signal forms ↔ i18n**: none. A **Validation Error**'s message can come from a translation file like any other text.
- **Signal forms ↔ threejs**: none.

## Shared language

**Skill**:
A task-oriented guide for coding agents (`skills/<area>/SKILL.md`), shipped in the package.
_Avoid_: guide, recipe

**LLM reference**:
Handwritten Markdown for agents next to the source, shipped in the package: one guide per topic. `llms.md` is the package's index.
_Avoid_: llms.txt (that is only the index), API docs
