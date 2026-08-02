"use client";

import { useEffect, useState } from "react";

type FeedbackItem = {
  id: string;
  category: string;
  severity: string;
  content: string;
  tags: string[];
  createdAt: string;
  author: { name: string };
};

const SEVERITY_STYLES: Record<string, string> = {
  critical: "border-critical text-critical",
  high: "border-high text-high",
  medium: "border-medium text-medium",
  low: "border-line text-muted",
};

const POLL_INTERVAL_MS = 4000;

export default function FeedbackFeed({
  sessionId,
  initialFeedback,
}: {
  sessionId: string;
  initialFeedback: FeedbackItem[];
}) {
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(`/api/sessions/${sessionId}/feedback`);
        if (!res.ok || cancelled) return;
        const body = await res.json();
        if (!cancelled) setFeedback(body.feedback);
      } catch {
        // Silently retry on next interval — a dropped poll isn't worth surfacing.
      }
    }

    // const interval = setInterval(poll, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      // clearInterval(interval);
    };
  }, [sessionId]);

  if (feedback.length === 0) {
    return <p className="text-sm text-muted">No feedback submitted yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {feedback.map((f) => (
        <li key={f.id} className={`card border-l-4 ${SEVERITY_STYLES[f.severity] || ""}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide">
              <span className={SEVERITY_STYLES[f.severity]}>{f.severity}</span>
              <span className="text-faint">· {f.category}</span>
            </div>
            <span className="font-mono text-[11px] text-faint">{f.author.name}</span>
          </div>
          <p className="mt-2 text-sm text-ink">{f.content}</p>
          {f.tags.length > 0 ? (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {f.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-line bg-surface-alt px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
