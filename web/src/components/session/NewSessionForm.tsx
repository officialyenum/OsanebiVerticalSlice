"use client";

import { GameResponseList } from "@/lib/type/responses";
import { useState } from "react";

export default function NewSessionForm({ games }: { games: GameResponseList | undefined }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSubmit(formData: FormData) {
    'use server'
    setLoading(true);
    setError("");

    let rawFormData = {
      gameId: formData.get('gameId'),
      emailsRaw: formData.get('playtesterEmails'),
    }
  }

  if (games == undefined || games.length === 0) {
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
    <form action={handleSubmit} className="card space-y-4">
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
