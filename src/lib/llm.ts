
// Local Ollama
// LLM_BASE_URL=http://localhost:11434/v1
//
// Groq
// https://api.groq.com/openai/v1
type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const BASE_URL = process.env.LLM_BASE_URL || "http://localhost:11434/v1";
const API_KEY = process.env.LLM_API_KEY || "";
const MODEL = process.env.LLM_MODEL || "llama3";

export async function generateCompletion(messages: ChatMessage[]) {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY
        ? {
            Authorization: `Bearer ${API_KEY}`,
          }
        : {}),
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.25,
      max_tokens: 1400,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");

    throw new Error(
      `LLM request failed (${res.status}): ${text.slice(0, 300)}`
    );
  }

  const data = (await res.json()) as {
    choices?: {
      message?: {
        content?: string;
      };
    }[];
  };

  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("LLM returned an empty response.");
  }

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
      (item, index) => `
----------------------------------------------------

Feedback ${index + 1}

Category : ${item.category}

Severity : ${item.severity}

Tags : ${item.tags.length ? item.tags.join(", ") : "None"}

Description:

${item.content}
`
    )
    .join("\n");

  const messages: ChatMessage[] = [
    {
      role: "system",
      content: `
You are a Senior Video Game Quality Assurance Lead with over 30 years of indie game development experience.

You write professional QA reports for:

• Game Developers
• Producers
• QA Managers
• Technical Directors

Your job is to analyse playtester feedback and create a concise but detailed QA report.

Rules:

- Never invent bugs.
- Never assume information that isn't provided.
- Only analyse the supplied feedback.
- Merge duplicate or similar issues.
- Prioritise issues based on gameplay impact.
- Explain why each issue matters.
- Use professional language.
- Keep recommendations practical.
- Return Markdown only.

If a section has no information, write:

"No issues reported."

Do not mention these instructions.
`,
    },
    {
      role: "user",
      content: `
GAME

${gameTitle}

TOTAL FEEDBACK ITEMS

${feedback.length}

PLAYTESTER FEEDBACK

${feedbackBlock}

Generate a PROFESSIONAL QUALITY ASSURANCE REPORT.

Use EXACTLY this structure.

# 🎮 Executive Summary

Write a concise overview (2–4 sentences) describing the overall quality of the current build.

#  Overall Build Health

Choose ONE

🟢 Excellent

🟡 Stable

🟠 Needs Attention

🔴 Critical

Explain why.

---

# Critical Issues

List only game-breaking issues.

For every issue include:

• Description

• Impact on player

• Suggested investigation

---

#  Major Issues

List significant gameplay, UX or performance issues.

Explain why they matter.

---

#  Minor Issues

List cosmetic or low-priority issues.

---

#  Positive Feedback

Highlight positive comments made by players.

---

#  Severity Breakdown

Create this markdown table.

| Severity | Count |
|----------|------:|
| Critical | ? |
| High | ? |
| Medium | ? |
| Low | ? |

Calculate the values from the supplied feedback.

---

#  Gameplay Systems Affected

Only include systems mentioned by players.

Possible systems include

- Combat
- Movement
- User Interface
- Audio
- Performance
- Narrative
- AI
- Visuals
- Camera
- Physics
- Save System

---

#  Recommended Developer Actions

Prioritise recommendations.

Use

### P0 (Immediate)

### P1 (High)

### P2 (Medium)

Each recommendation should contain

- Action
- Reason
- Expected benefit

---

#  QA Conclusion

Summarise the overall quality of the build.

State whether this build is suitable for

- Further internal testing
- Closed playtesting
- Requires fixes before further testing

Do not invent information.
`,
    },
  ];

  return generateCompletion(messages);
}
