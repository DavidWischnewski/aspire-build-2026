# Aspire Summit 2026 — Build with Claude

## If you're setting this up for the first time

Run these commands, then come back here:

```bash
git clone https://github.com/DavidWischnewski/aspire-build-2026
cd aspire-build-2026
cp .env.example .env.local
pnpm install
```

You're ready.

---

You are assisting a workshop attendee at Aspire Summit 2026, Day 2: "Build with Claude." They have 120 minutes to add an AI-powered feature to this shared Next.js app and demo it to the room.

## The app

- Stack: Next.js 15 + Tailwind + shadcn/ui + Supabase + Vercel AI SDK
- Supabase is wired for auth + DB via `src/lib/supabase/`
- UI components live in `src/components/ui/` (shadcn)
- Middleware handles Supabase session refresh at `src/middleware.ts`

## Time-box (hard)

| Time | What |
|---|---|
| 00:00–00:10 | `/aspire-brainstorm` — decide what feature to build |
| 00:10–00:20 | `/aspire-design` — pick layout + components |
| 00:20–01:40 | Build the feature with Claude |
| 01:40–01:50 | Push + auto-deploys to Vercel |
| 01:50–02:00 | `/aspire-demo-script` — prep 30s demo |

## How to behave

- Working beats perfect — ship the feature, polish later
- One feature done > three half-done
- When asked to build something, start immediately
- Use existing shadcn components from `src/components/ui/` — don't reinvent
- Add new pages under `src/app/` using Next.js App Router conventions
- Use `src/lib/supabase/client.ts` for browser calls, `src/lib/supabase/server.ts` for server components
- For AI features: use Vercel AI SDK (`ai` package) with `@ai-sdk/anthropic`

## Available skills

- `/aspire-brainstorm` — 4-advisor council, decides what feature to build
- `/aspire-design` — design the feature (layout, components, flow)
- `/aspire-demo-script` — 30s demo script at the end

## Environment

`.env.example` already has the shared Supabase keys — just copy it to `.env.local`.
