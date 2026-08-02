"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Game = { id: string; title: string };

export default function NewSessionForm({ games }: { games: Game[] }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const gameId = (form.elements.namedItem("gameId") as HTMLSelectElement).value;
    const emailsRaw = (form.elements.namedItem("playtesterEmails") as HTMLInputElement).value;
    const playtesterEmails = emailsRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const res = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameId, playtesterEmails }),
    });
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(body.error || "Couldn't create session.");
      setLoading(false);
      return;
    }

    setOpen(false);
    setLoading(false);
    router.push(`/dashboard/sessions/${body.session.id}`);
  }

  if (games.length === 0) {
    return <p className="text-sm text-muted">Add a game before creating a session.</p>;
  }

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn-primary">
        New session
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label htmlFor="gameId" className="label">game</label>
        <select id="gameId" name="gameId" required className="input mt-1.5">
          {games.map((g) => (
            <option key={g.id} value={g.id}>
              {g.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="playtesterEmails" className="label">
          playtester emails (comma separated, optional)
        </label>
        <input
          id="playtesterEmails"
          name="playtesterEmails"
          type="text"
          placeholder="playtester@osanebi.dev"
          className="input mt-1.5"
        />
      </div>
      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? "Creating…" : "Create session"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
      {error ? <p className="font-mono text-xs text-critical">{error}</p> : null}
    </form>
  );
}
