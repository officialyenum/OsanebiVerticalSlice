"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createGameAction } from "@/lib/actions/game";

export default function NewGameForm() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError("");
        const result = await createGameAction(formData);
        setLoading(false);

        if (!result.ok) {
            setError(result.error || "Could not create the game.");
            return;
        }

        setOpen(false);
        router.refresh();
    }

    if (!open) {
        return <button type="button" onClick={() => setOpen(true)} className="btn-primary">New game</button>;
    }

    return (
        <form action={handleSubmit} className="w-full space-y-4 border-y border-line bg-surface py-5 sm:max-w-xl">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="game-title" className="label">title</label>
                    <input id="game-title" name="title" required maxLength={120} className="input mt-1.5" />
                </div>
                <div>
                    <label htmlFor="game-genre" className="label">genre</label>
                    <input id="game-genre" name="genre" required maxLength={80} className="input mt-1.5" />
                </div>
                <div>
                    <label htmlFor="game-platform" className="label">platform</label>
                    <input id="game-platform" name="platform" maxLength={80} placeholder="PC, console, mobile" className="input mt-1.5" />
                </div>
                <div>
                    <label htmlFor="game-version" className="label">build version</label>
                    <input id="game-version" name="buildVersion" maxLength={40} placeholder="0.1.0" className="input mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="game-summary" className="label">pitch summary</label>
                    <textarea id="game-summary" name="pitchSummary" rows={3} maxLength={1000} className="input mt-1.5 resize-y" />
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <button type="submit" disabled={loading} className="btn-primary">{loading ? "Creating..." : "Create game"}</button>
                <button type="button" onClick={() => setOpen(false)} className="btn-secondary">Cancel</button>
                {error ? <p role="alert" className="text-sm text-critical">{error}</p> : null}
            </div>
        </form>
    );
}