"use client";

import { useState, type FormEvent } from "react";

const CATEGORIES = ["bug", "ux", "balance", "narrative", "performance"] as const;
const SEVERITIES = ["low", "medium", "high", "critical"] as const;

export default function FeedbackForm({ sessionId }: { sessionId: string }) {
  console.log("FeedbackForm sessionId:", { sessionId });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const category = (form.elements.namedItem("category") as HTMLSelectElement).value;
    const severity = (form.elements.namedItem("severity") as HTMLSelectElement).value;
    const content = (form.elements.namedItem("content") as HTMLTextAreaElement).value;
    const tagsRaw = (form.elements.namedItem("tags") as HTMLInputElement).value;
    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);

    const res = await fetch(`/api/sessions/${sessionId}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, severity, content, tags }),
    });
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(body.error || "Couldn't submit feedback.");
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("idle");
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <p className="label">submit feedback</p>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="category" className="label">category</label>
          <select id="category" name="category" className="input mt-1.5">
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="severity" className="label">severity</label>
          <select id="severity" name="severity" className="input mt-1.5">
            {SEVERITIES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="content" className="label">what happened</label>
        <textarea
          id="content"
          name="content"
          required
          minLength={3}
          maxLength={2000}
          rows={3}
          className="input mt-1.5 resize-none"
        />
      </div>

      <div>
        <label htmlFor="tags" className="label">tags (comma separated, optional)</label>
        <input id="tags" name="tags" type="text" placeholder="combat, tutorial" className="input mt-1.5" />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary">
        {status === "submitting" ? "Sending…" : "Submit feedback"}
      </button>

      {status === "error" ? <p className="font-mono text-xs text-critical">{error}</p> : null}
    </form>
  );
}
