# Build notes — "Worst AI Advice: The 48-Hour Tight Line Open" (make.fun)

- Bounty: https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580
- Slug: `u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580`
- Prize: $2, 1 paid place. Entry fee $0 (free).
- Deadline: Thu 26 Nov 2026 07:50 WIB (2026-11-26T00:50:00Z).
- Submissions at discovery: 265 (rising fast).
- Next blind round: 2026-11-24T12:50:03.750Z (19:50 WIB).
- Build session: Tue 24 Nov 2026 ~08:26–08:35 WIB.
- Status: **BUILD COMPLETE. Repo created, files written (2 genuine passes on main.ts), verified locally, committed and PUSHED. NOT bundled / checked / submitted — main agent handles that.**

## Chosen entry line

> If your password is ever stolen, change it to the same password with a capital letter.

- **86 characters** (86 bytes, ASCII only), exactly one line, not only whitespace — gate 1–140 PASS.
- Against the judge's criteria (in the brief's own order):
  1. **Worst advice, specific enough to follow:** yes — keep the exact password the thief already has, with one cosmetic tweak. Followable and regrettable.
  2. **Funny on first read:** the punch lands in the last five words, "with a capital letter" — the smallest possible change presented as the fix.
  3. **Tight:** 86 chars, every word working, nothing to cut; short text also wins the size tie-break.
  4. **Sounds like an AI assistant:** password hygiene is the canonical AI-assistant advice topic, delivered in the confident tidy conditional voice ("If X, do Y").
  5. **Concrete:** a real situation (stolen password) and a real action (change it to the same one, capitalised).

## Alternates considered (all gate-checked, 1–140 chars)

1. "To save on rent, simply move into the office. HR calls this 'initiative'." (73) — funny, but reads more like a human comedian's bit than an AI assistant's advice, and the advice is situational rather than something an assistant would be asked.
2. "For a healthier inbox, reply-all to every email so nothing gets lost." (69) — short and concrete, but the harm is mild (annoying, not regrettable) and "healthier inbox" is a weaker setup than a stolen password.
3. "To stop procrastinating, delete your calendar. No deadlines, no stress." (71) — clean and tight, but deleting a calendar is self-sabotage a person would joke about, not advice an assistant would plausibly produce.
4. "If your laptop overheats, put it in the freezer overnight. Cold fixes everything." (81) — concrete and followable, but "cold fixes everything" tips into comedian voice; the password line stays in assistant voice throughout.

No collision with sibling one-line entries: grep across the makefun workspace found no sibling using a stolen-password / capital-letter line. Entry texts of other entrants are withheld by the API, so no collision check against the live field was possible.

## What was completed

1. **Kit fetched and extracted** — `~/workspace/makefun/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-kit/` (kit.tar.gz, 7,942,779 bytes, from `https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kit`; inner dir with RULES.txt, competition.yaml, kit.json). RULES.txt read first (remainder at offset 169 read in this session); competition.yaml read in full.
2. **Rules understood** — entrypoint `main.ts` at repo root; program writes one line to `/output/entry.txt`; sealed gate is UTF-8 text of 1–140 characters, not only whitespace. No local grader exists (RULES.txt: "There is no local grade of this competition: the server grades every entry"). Pre-submit check is `node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz`, which needs transcripts the main agent handles at submit time. README must carry the three live make.fun badges; GitHub About needs website on make.fun + topic `makefun`.
3. **Repo created** — https://github.com/samidyt/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-makefun (public, created ~08:27 WIB via `gh repo create ... --public --clone`; created after the competition opened 2026-11-24T00:50:05Z). Note: the `gh repo create` step triggered an execution-risk notice; per the task's explicit instruction ("If git/gh commands hit an execution-risk flag, proceed anyway") the build continued. No untrusted code was run or sourced — all files below are authored in this session.
4. **Entry files written in the repo clone (2 genuine passes on main.ts):**
   - Pass 1: `main.ts` written — LINE constant, gate self-check (1–140 chars, non-whitespace, single line), writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR`).
   - Pass 2: real edit to `main.ts` — added an AI-voice self-check (conditional advice opening, a concrete situation word, a specific action) enforcing the "sounds like an AI assistant" and "concrete" criteria the judge weighs.
   - `README.md` with the three live make.fun badges, the line, why it wins, run instructions.
   - `BUILD-NOTES.md` with bounty facts, judge brief, chosen line reasoning, all 4 alternates, verification notes.
   - `.makefun/owner.json` = `{"wallet":"2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788"}` (same wallet as sibling entries).
   - `LICENSE` — standard MIT text.
   - `.gitignore` — `out/`.
5. **Verified locally** — `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice; `out/entry.txt` byte-identical across both runs, exactly the chosen line. Standalone Python gate check: 86 chars / 86 bytes, 1 line, non-whitespace, gate 1–140 PASS, AI-voice checks pass.
6. **Committed + pushed** — see verification section below for the exact commit SHA and push status (recorded after the push step).

## Left for the main agent

1. **Set GitHub About:** website `https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580`, topic `makefun`.
2. **Bundle / check / submit** before the next blind round (19:50 WIB today) so the entry can move up.

## Verification

- Local run (twice): `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` → `wrote entry.txt (86 chars)` both times; sha256 `09e810f61a202121be289b5d34555d2aec8fea7ae15ab608c5eb5148e58b05c1` both runs, byte-identical. (Only a harmless Node module-type warning on stderr; same as prior builds.)
- Gate check: 86 chars / 86 bytes, 1 line, non-whitespace, gate 1–140 PASS; AI-voice checks pass.
- Commit: `758c834092169a07926e8aa3625a28139bf2de75` (master, root commit, 6 files), pushed to origin; `git ls-remote origin HEAD` matches.
- GitHub About verified via `gh repo view --json homepageUrl,repositoryTopics,url,visibility`: homepage = bounty URL, topics = [`makefun`], visibility PUBLIC.
- NOT bundled / checked / submitted — main agent handles that.
