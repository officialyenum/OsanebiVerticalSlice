// Talks to any OpenAI-compatible chat-completions endpoint, which covers:
//   - Local Ollama:        LLM_BASE_URL=http://localhost:11434/v1  (no key needed)
//   - Groq (hosted Llama): LLM_BASE_URL=https://api.groq.com/openai/v1
//   - Together.ai:         LLM_BASE_URL=https://api.together.xyz/v1
// Swapping providers is just an env var change — no code change.

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

const BASE_URL = process.env.LLM_BASE_URL || "http://localhost:11434/v1";
const API_KEY = process.env.LLM_API_KEY || "";
const MODEL = process.env.LLM_MODEL || "llama3";

export async function generateCompletion(messages: ChatMessage[]) {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.4,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`LLM request failed (${res.status}): ${text.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("LLM returned an empty response.");
  return content;
}

type FeedbackForPrompt = {
  category: string;
  severity: string;
  content: string;
  tags: string[];
};

export async function generateQaSummary(
  gameTitle: string,
  feedback: FeedbackForPrompt[]
) {
  const feedbackBlock = feedback
    .map(
      (f, i) =>
        `${i + 1}. [${f.severity.toUpperCase()} / ${f.category}] ${f.content}${
          f.tags.length ? ` (tags: ${f.tags.join(", ")})` : ""
        }`
    )
    .join("\n");

  const messages: ChatMessage[] = [
    {
      role: "system",
      content:
        "You are a QA lead summarizing playtest feedback for a game studio. " +
        "Write a concise, structured markdown report. Be specific and actionable, " +
        "not generic. Do not invent issues that weren't reported.",
    },
    {
      role: "user",
      content:
        `Game: ${gameTitle}\n\nRaw playtester feedback (${feedback.length} items):\n${feedbackBlock}\n\n` +
        "Produce a markdown report with these sections:\n" +
        "## Summary\nA 2-3 sentence overview of session health.\n\n" +
        "## Top Issues\nRanked bullet list of the most important issues, grouped by theme where feedback overlaps.\n\n" +
        "## Severity Breakdown\nCounts by severity.\n\n" +
        "## Recommendations\n3-5 concrete next steps for the team, prioritized.",
    },
  ];

  return generateCompletion(messages);
}
