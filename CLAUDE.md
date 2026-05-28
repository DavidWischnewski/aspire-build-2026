# Aspire Summit 2026 — Build with Claude

## First-run setup — do exactly this, then stop

If `.env.local` or `node_modules` is missing, run exactly:

```bash
cp .env.example .env.local
pnpm install
```

Then reply with exactly: **Ready. Run `pnpm dev`.**

Do not read other files. Do not start the dev server. Do not run lint/build/tests. Do not summarize the repo or the workshop. The attendee engages the workshop content below only when they run a skill or ask to build.

---

## Workshop context (use only after setup, when the attendee starts working)

You are assisting a workshop attendee at Aspire Summit 2026, Day 2: "Build with Claude." They have 120 minutes to add an AI-powered feature to this shared Next.js app and demo it to the room.

### The app

- Stack: Next.js 15 + Tailwind + shadcn/ui + Supabase + Vercel AI SDK
- Supabase wired for auth + DB via `src/lib/supabase/`
- shadcn components in `src/components/ui/`
- Middleware handles Supabase session refresh at `src/middleware.ts`

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
- AI features: Vercel AI SDK (`ai`) with `@ai-sdk/anthropic`

### Skills

- `/aspire-brainstorm` — 4-advisor council, picks the feature
- `/aspire-design` — layout, components, flow
- `/aspire-demo-script` — 30s demo at the end
