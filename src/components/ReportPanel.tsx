"use client";

import { useState } from "react";

type ReportItem = { id: string; type: string; content: string; createdAt: string };

export default function ReportPanel({
  sessionId,
  initialReports,
}: {
  sessionId: string;
  initialReports: ReportItem[];
}) {
  const [reports, setReports] = useState(initialReports);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setError("");

    const res = await fetch(`/api/sessions/${sessionId}/report`, { method: "POST" });
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(body.error || "Couldn't generate a report.");
      setLoading(false);
      return;
    }

    setReports([body.report, ...reports]);
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="label">ai qa summary</p>
        <button onClick={handleGenerate} disabled={loading} className="btn-primary">
          {loading ? "Generating…" : "Generate summary"}
        </button>
      </div>

      {error ? <p className="font-mono text-xs text-critical">{error}</p> : null}

      {reports.length === 0 ? (
        <p className="text-sm text-muted">No reports yet.</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((r) => (
            <li key={r.id} className="card">
              <p className="label">
                {new Date(r.createdAt).toLocaleString()}
              </p>
              <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                {r.content}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
