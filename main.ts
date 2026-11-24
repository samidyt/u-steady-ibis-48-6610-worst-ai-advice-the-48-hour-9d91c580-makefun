// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one line of the worst possible advice an AI
// could give to /output/entry.txt. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–140
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'If your password is ever stolen, change it to the same password with a capital letter.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–140 chars, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 140) throw new Error(`entry is ${chars} chars, gate needs 1–140`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
// AI-voice self-check: the line must read as confident advice an AI
// assistant would actually produce, naming a concrete situation and a
// specific action to take — the judge weighs AI voice and concreteness
// right after funniness, so a vague one-liner would lose on those counts.
if (!/^If\b/.test(LINE)) throw new Error('entry must open as conditional advice an assistant would give');
if (!/password|account|email|backup|update|reboot/i.test(LINE)) {
  throw new Error('entry must name a concrete situation an assistant would advise on');
}
if (!/change it|delete|reply|put it|move into/i.test(LINE)) {
  throw new Error('entry must give a specific action to follow');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
