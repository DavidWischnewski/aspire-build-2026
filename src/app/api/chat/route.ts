// Mocked /api/chat for the Aspire 2026 workshop.
// Streams canned text — no API key needed, no inference cost.
// Accepts either { messages: [{ role, content }, ...] } (Vercel AI SDK shape)
// or { prompt: string } and picks a canned response by keyword.
//
// To swap in real Claude post-workshop:
//   1. Set ANTHROPIC_API_KEY in .env.local
//   2. Replace the body of POST with:
//        import { streamText } from "ai";
//        import { anthropic } from "@ai-sdk/anthropic";
//        const { messages } = await req.json();
//        return streamText({ model: anthropic("claude-sonnet-4-6"), messages })
//          .toUIMessageStreamResponse();

import { streamMockResponse } from "@/lib/mock-ai";

export const runtime = "nodejs";

type Message = { role: string; content: string };

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    messages?: Message[];
    prompt?: string;
  };

  const lastUser =
    body.messages?.filter((m) => m.role === "user").pop()?.content ??
    (typeof body.prompt === "string" ? body.prompt : "") ??
    "";

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      for await (const chunk of streamMockResponse(lastUser)) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
