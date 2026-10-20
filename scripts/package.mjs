// The released package, packages/signal-forms: its name, version and folder (ADR 0001).
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const url = new URL('../packages/signal-forms/', import.meta.url);

export const dir = fileURLToPath(url);
export const { name, version } = JSON.parse(readFileSync(new URL('package.json', url), 'utf8'));
