// Entry for make.fun bounty u-zeroxfive-funniest-autocorrect-fail-ddf82154.
// The entry line is 102 characters (under the 200-character gate).
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I texted my boss 'Sorry, I'm stuck in traffic' — autocorrect sent 'Sorry, I'm stuck with traffickers'.";

if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry is ${entry.length} characters; gate requires 1-199`);
}
if (!entry.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
// The joke is the swap: "traffic" must become "traffickers".
if (!entry.includes("traffic") || !entry.includes("traffickers")) {
  throw new Error("entry must contain the autocorrect swap (traffic -> traffickers)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length}-character entry to ${join(outDir, "entry.txt")}`);
