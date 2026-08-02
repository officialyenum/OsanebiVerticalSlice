"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartSessionButton({ sessionId }: { sessionId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStart() {
    setLoading(true);
    setError("");

    const res = await fetch(`/api/sessions/${sessionId}/start`, { method: "POST" });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "Couldn't start session.");
      setLoading(false);
      return;
    }

    router.refresh();
  }

  return (
    <div className="flex items-center gap-3">
      <button onClick={handleStart} disabled={loading} className="btn-primary">
        {loading ? "Starting…" : "Start session"}
      </button>
      {error ? <p className="font-mono text-xs text-critical">{error}</p> : null}
    </div>
  );
}
