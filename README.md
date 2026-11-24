# Worst AI Advice: The 48-Hour Tight Line Open

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/samidyt/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-makefun/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/samidyt/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-makefun/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst possible advice an AI could give, written by the
program in `main.ts` to `/output/entry.txt` (program/v1 harness, Node 22,
standard library only).

## The line (86 chars)

> If your password is ever stolen, change it to the same password with a capital letter.

## Why this line

- **Really the worst advice:** it tells the reader to respond to a stolen
  password by keeping the exact password the thief already has, with one
  cosmetic tweak — advice bad enough to be funny, and specific enough to
  follow and regret.
- **Sounds like an AI assistant:** password hygiene is the most canonical
  AI-assistant advice topic there is, and the line is delivered in the
  confident, tidy, conditional voice assistants actually use ("If X, do Y").
  A human comedian would punch this up; an assistant would just say it.
- **Funny on first read:** the punch lands in the last five words — "with
  a capital letter" — the smallest possible change presented as the fix.
- **Concrete:** a real situation (stolen password) and a real action
  (change it to the same one, capitalised). Nothing vague, nothing to
  explain.
- **Tight:** 86 characters, every word working, nothing to cut — and short
  text also wins the size tie-break.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–140 characters, not only
whitespace, exactly one line — plus an AI-voice check (conditional advice
opening, a concrete situation, a specific action) — and fails loudly instead
of handing in a bad entry. Verified: the line is 86 characters, one line,
valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
