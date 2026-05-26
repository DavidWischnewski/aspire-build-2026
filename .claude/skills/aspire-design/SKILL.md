---
name: aspire-design
description: Design the feature before writing code. Reads the build brief from /aspire-brainstorm, outputs a 5-line ASCII wireframe, lists the exact shadcn components to use, and gives Claude a clear visual brief. Run at minute 10, after brainstorm, before building.
---

# /aspire-design

Run at minute 10. Takes 10 minutes. Gives Claude a visual brief so the first iteration of code is close to right.

## Input

Ask for the feature brief from `/aspire-brainstorm`. If they don't have it, ask them to describe in one sentence what they're building and for whom.

## Design output

Produce all four sections:

### 1. Page structure
Where does this feature live in the app?
- New page (give the route: e.g. `/app/feature-name/page.tsx`)
- Or: addition to existing page

### 2. ASCII wireframe
Max 8 lines. Show the layout — not beauty, just structure.

```
┌─────────────────────────────────┐
│ Header                          │
├─────────────────────────────────┤
│ [Input field]        [Button]   │
├─────────────────────────────────┤
│ Result card                     │
│ Result card                     │
└─────────────────────────────────┘
```

### 3. shadcn components
List by name from `src/components/ui/`. Only use what's already installed:
- button, card, input, label, badge, separator

If the feature needs something not installed, add: `pnpm dlx shadcn@4.7.0 add [name]`

### 4. Build brief for Claude
One paragraph Claude can use as a direct instruction to build the feature. Include: route, layout, components, behavior, data flow (Supabase table if needed, AI SDK stream if needed).

## Hand off

End with: "Now tell Claude: 'Build this feature:' and paste the build brief. You have ~90 minutes."
