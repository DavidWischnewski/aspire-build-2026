# Aspire Summit 2026 — Build with Claude

## First-run setup — run this one command, then stop

Run this **exact** command unconditionally. Do not check whether anything is already in place — both halves are idempotent (`cp -n` won't overwrite, `pnpm install` is a no-op when deps are current). One shell roundtrip, every time:

```bash
cp -n .env.example .env.local && pnpm install
```

Then reply with exactly: **Ready. Run `pnpm dev`.**

Do not read other files. Do not run `ls`, `pwd`, `cat`, or any verification command. Do not start the dev server. Do not run lint/build/tests. Do not summarize the repo or the workshop. Do not split the chained command. The attendee engages the workshop content below only when they run a skill or ask to build.

---

## Workshop context (use only after setup, when the attendee starts working)

You are assisting a workshop attendee at Aspire Summit 2026, Day 2: "Build with Claude." They have 120 minutes to add a feature to this shared Next.js app and demo it to the room.

### Stack reality (read before brainstorm)

- AI calls in the built app hit `/api/chat`, which is **mocked** — it streams canned text in real Claude's response shape. No API key is needed and none should be requested.
- The mock works end-to-end: streaming UIs, message history, demos all feel real. Six intents are auto-picked from the prompt (summarize / classify / generate / code / chat / default).
- Real-Claude swap is documented at the top of `src/app/api/chat/route.ts` — 2 lines, set `ANTHROPIC_API_KEY`. Mention this once if asked; do not push the attendee to do it during the workshop.
- Brainstorm fits: chat UIs, summarizers, classifiers, code-gen — anything where canned-looking text reads as real for 30 seconds.
- Brainstorm misfits: features requiring genuine reasoning over attendee-supplied data, math, or code that actually has to run.

### The app

- Stack: Next.js 15 + Tailwind + shadcn/ui + Supabase + Vercel AI SDK (mocked)
- Supabase wired for auth + DB via `src/lib/supabase/`
- shadcn components in `src/components/ui/`
- Middleware handles Supabase session refresh at `src/middleware.ts`
- Mocked AI at `src/app/api/chat/route.ts` (uses `src/lib/mock-ai.ts`)

### Time-box (hard)

| Time | What |
|---|---|
| 00:00–00:10 | `/aspire-brainstorm` — decide what to build |
| 00:10–00:20 | `/aspire-design` — pick layout + components |
| 00:20–01:40 | Build the feature with Claude |
| 01:40–01:50 | Push → auto-deploys to Vercel |
| 01:50–02:00 | `/aspire-demo-script` — 30s demo prep |

### How to behave

- Working beats perfect — ship the feature, polish later
- One feature done > three half-done
- When asked to build something, start immediately
- Reuse existing shadcn components — don't reinvent
- New pages under `src/app/` (App Router)
- `src/lib/supabase/client.ts` for browser, `src/lib/supabase/server.ts` for server components
- AI features: POST to `/api/chat` (the mock); read the streamed text body. Don't import `@ai-sdk/anthropic` directly in attendee code — keep all model concerns inside the route so the real-Claude swap stays local.

### Skills

- `/aspire-brainstorm` — 4-advisor council, picks the feature (constrained to mock-friendly ideas)
- `/aspire-design` — layout, components, flow
- `/aspire-demo-script` — 30s demo at the end
