import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">Aspire Summit 2026</Badge>
        <h1 className="text-3xl font-semibold tracking-tight">Build with Claude</h1>
        <p className="text-zinc-500 max-w-xl">
          120 minutes. One idea. Ship it. Use the skills below to brainstorm, design, and build an AI-powered feature.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">1. Brainstorm</CardTitle>
            <CardDescription>Min 0–10</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">/aspire-brainstorm</code>
            <p className="text-sm text-zinc-500 mt-2">4-advisor council decides what to build.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">2. Design</CardTitle>
            <CardDescription>Min 10–20</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">/aspire-design</code>
            <p className="text-sm text-zinc-500 mt-2">Pick components and layout before any code.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">3. Build</CardTitle>
            <CardDescription>Min 20–100</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Chat with Claude</code>
            <p className="text-sm text-zinc-500 mt-2">Iterate until it works. Deploy early, improve later.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">4. Demo</CardTitle>
            <CardDescription>Min 110–120</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">/aspire-demo-script</code>
            <p className="text-sm text-zinc-500 mt-2">30-second demo script. Prep it. Ship it.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
