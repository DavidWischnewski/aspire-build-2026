---
name: aspire-brainstorm
description: Run a 4-advisor council to decide what AI feature to build in the Aspire Summit workshop. Each advisor gives one idea and one risk. Council votes. Outputs a one-sentence feature brief, stack decisions, and 3 explicit out-of-scope items. Run this first, at minute 0.
---

# /aspire-brainstorm

Run this at minute 0. Takes 10 minutes. Do not skip it — scope clarity saves an hour.

## Input

Ask the user:
1. **Seed** — a rough idea, or type "blank" for fully open
2. **Context** — their role + the one pain they'd solve if they could

If they say "blank", use: "Something I'd actually use in my job next Monday."

## Constraint (tell the attendee upfront, one line)

The built app calls a mocked `/api/chat` that streams canned text — no real LLM inference, no API key. Council ideas must demo end-to-end against that. Steer toward chat UIs, summarizers, classifiers, code-gen, draft-writers — features where canned-looking streamed text reads as real for a 30-second demo. Steer away from features that need genuine reasoning over attendee-supplied data, math, or code that actually has to run.

## Run the council

Read each advisor's voice file from `council/`. In their voice, output:

**[Advisor name]'s idea:** one short paragraph — concrete, specific to this person's context.
**[Advisor name]'s risk:** one sentence.

Order: Graham → Cagan → Karpathy → Bezos

## Vote

Each advisor votes for one OTHER person's idea — the one that best matches their lens. Tiebreak: most shippable in 90 minutes wins.

## Output the brief

**Winner:** [Advisor]'s idea
**Feature brief:** A [type] that helps [who] do [outcome] — one sentence, no jargon.
**Stack:** pick from: Next.js page / API route / Supabase table / Vercel AI SDK stream / shadcn UI
**NOT in scope (3 things):**
1. ...
2. ...
3. ...

## Hand off

End with: "Run `/aspire-design` to design the feature before writing any code."
