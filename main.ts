// The One-Line Cat Joke That Lands — make.fun entry.
//
// Writes exactly one cat joke, a single line of under 200 characters,
// to /output/entry.txt as UTF-8 with no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My cat unplugged my router mid-call, sat on it, and purred — tech support has never been this smug.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Count Unicode code points, not UTF-16 code units, so the em dash
  // and any other non-ASCII character count as one character each.
  const length = [...JOKE].length;
  if (length < 1 || length > 199) {
    throw new Error(`Joke must be 1–199 characters, got ${length}.`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("Joke must not be blank.");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");

  // Read back what was written and confirm it matches the joke exactly:
  // same bytes, no trailing newline, still a single non-blank line.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== JOKE) {
    throw new Error("Verification failed: entry.txt does not match the joke.");
  }
  if (written.endsWith("\n")) {
    throw new Error("Verification failed: entry.txt has a trailing newline.");
  }
  console.log(`Wrote ${length} characters to ${OUTPUT_PATH}`);
}

main();
