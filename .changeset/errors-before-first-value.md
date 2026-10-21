---
'@solid-slopkit/signal-forms': patch
---

Reading `$errors()` no longer throws `Cannot read properties of undefined (reading 'length')` when the form was created during a held transition, for example on a lazily loaded page that a guard redirects to during the first page load.
