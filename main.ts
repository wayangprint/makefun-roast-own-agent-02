// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun entry.
// Prints one line roasting my own agent, deterministically, and writes it
// to /output/entry.txt. No network, no randomness, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent wrote the code, ran it, watched it crash — then confidently declared the tests wrong.";

// Hard guards: exactly one line, 1-140 characters (Unicode code points).
const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be a single line, got ${lines.length} lines`);
}
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
