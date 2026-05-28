// Mocked AI for the Aspire 2026 workshop.
// Returns canned, varied responses streamed in small chunks so the UI feels real.
// Six intents are picked by keyword match on the last user message:
//   summarize | classify | generate | code | chat | default
// Swap for real Claude post-workshop by replacing the consumer in
// src/app/api/chat/route.ts — see the comment there.

export type Intent = "summarize" | "classify" | "generate" | "code" | "chat" | "default";

const RESPONSES: Record<Intent, string> = {
  summarize:
    "Here's the gist in three points. First, the original argument hinges on a single assumption that doesn't fully survive contact with real data. Second, the supporting evidence is strong but narrow — useful for the headline, less so at the edges. Third, there's a follow-up worth pulling on: what happens when scale doubles? That's where I'd look next.",

  classify:
    "Best fit: positive sentiment, confidence 0.87. The tone is appreciative without being sycophantic, the structure is goal-oriented, and there's a forward-looking ask in the final clause. If you're routing this to a team, send it to the engagement bucket — not support.",

  generate:
    "Draft below — push back on the framing if it's off. Subject: A fifteen-minute experiment worth running. Hi — I noticed you've been chewing on similar problems and wanted to share what we tried. Short version: we measured before and after, the numbers moved, and the team learned something useful about user intent. Happy to share the full write-up if it lands.",

  code:
    "```ts\nexport async function processItem(input: Item): Promise<Result> {\n  const normalized = normalize(input);\n  if (!normalized.valid) {\n    return { ok: false, reason: 'invalid input' };\n  }\n  const result = await pipeline.run(normalized);\n  return { ok: true, value: result };\n}\n```\n\nA few notes on the shape: `pipeline` is injected at the module level here. If you want this testable, accept it as a second argument. The early return on invalid input keeps the happy path uncluttered.",

  chat:
    "Happy to help — that's a good place to start. The way I'd think about it: there are usually three or four ways to approach this kind of question, and the cheapest one to try first is the one you can run end-to-end in under an hour. What's the most uncertain part of what you're trying to do? Knowing that usually points to the right first experiment.",

  default:
    "Got it. Here's how I'd think about that: the question sits at the intersection of two things — what you can build quickly, and what's actually going to be useful once it's built. Most people overweight the first and underweight the second. If you can name one specific outcome you're chasing, I can be much more concrete.",
};

export function pickIntent(text: string): Intent {
  const t = text.toLowerCase();
  if (/\b(summari[sz]e|tldr|recap|brief)\b/.test(t)) return "summarize";
  if (/\b(classify|categori[sz]e|label|sentiment|tag)\b/.test(t)) return "classify";
  if (/\b(code|function|implement|typescript|javascript|python|refactor)\b/.test(t)) return "code";
  if (/\b(generate|draft|write|compose|create)\b/.test(t)) return "generate";
  if (/\b(hi|hello|hey|talk|chat)\b/.test(t)) return "chat";
  return "default";
}

// Yields the chosen response in small, realistically-paced chunks.
export async function* streamMockResponse(userText: string): AsyncGenerator<string> {
  const response = RESPONSES[pickIntent(userText)];
  const tokens = response.split(/(\s+)/); // preserve whitespace
  let buffer = "";
  for (const token of tokens) {
    buffer += token;
    if (buffer.length >= 12) {
      yield buffer;
      buffer = "";
      // 50–100ms per chunk feels like real Claude streaming
      await new Promise((r) => setTimeout(r, 50 + Math.random() * 50));
    }
  }
  if (buffer) yield buffer;
}
