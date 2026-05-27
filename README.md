# Aspire Summit 2026 — Build with Claude

Day 2 workshop. 120 minutes. One idea. Ship it.

Live app: **https://aspire-build-2026-1jdj.vercel.app**

---

## Setup (do this before the day — 5 min)

**1. Clone the repo**
```bash
git clone https://github.com/DavidWischnewski/aspire-build-2026
cd aspire-build-2026
```

**2. Copy the env file**
```bash
cp .env.example .env.local
```
Supabase keys are already filled in — nothing to change.

**3. Install dependencies**
```bash
pnpm install
```
Don't have pnpm? Run `npm install -g pnpm` first.

**4. Open Claude Code**
```bash
claude
```

**5. Auth the two tools**
Type `/mcp` → authenticate **Vercel** and **Supabase** (30 seconds, browser OAuth).

You're ready.

---

## On the day

```
/aspire-brainstorm   min 0–10    decide what to build
/aspire-design       min 10–20   pick layout + components  
[build with Claude]  min 20–100  ship the feature
git push             min 100     auto-deploys to Vercel
/aspire-demo-script  min 110     prep your 30s demo
```

---

## Questions?

Ask David — or open Claude Code in this folder and ask Claude directly.
