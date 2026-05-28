# Aspire Summit 2026 — Build with Claude

## Before the workshop (5 min, one time)

1. Install **Claude Code desktop**: <https://claude.com/download>
2. Sign in with your Claude Pro or Max account
3. Create an empty folder somewhere (e.g. `~/aspire-2026`)
4. In Claude Code, open the **Code** tab → **Select folder** → pick that empty folder

## At the workshop, paste this:

```
Clone https://github.com/DavidWischnewski/aspire-build-2026 into this folder (use `git clone <url> .` so contents land here, not in a subfolder), then set it up. Stop when ready to run pnpm dev.
```

When Claude replies "Ready," run `pnpm dev` in a terminal, then start with `/aspire-brainstorm`.

> Note: the workshop app's AI calls hit a mocked `/api/chat` — no API key needed. Swap to real Claude post-workshop with a 2-line change in `src/app/api/chat/route.ts`.
