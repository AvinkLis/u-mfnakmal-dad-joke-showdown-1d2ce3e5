// Dad Joke Showdown entrypoint.
// Writes one dad joke (at most 200 characters) to entry.txt in the
// output directory: $MAKEFUN_OUTPUT_DIR, or /output by default.
// Node 22 standard library only; deterministic — every run writes
// exactly the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke: string =
  "My kids asked for a trampoline for Christmas, so I told them to lower their expectations — then raise them, then lower them again.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
