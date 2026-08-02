"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(body.error || "Something went wrong.");
      setLoading(false);
      return;
    }
    console.log("Login successful:", body);
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="font-mono text-xs text-accent">// sign in</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Osanebi</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="label">email</label>
            <input id="email" name="email" type="email" required className="input mt-1.5" />
          </div>
          <div>
            <label htmlFor="password" className="label">password</label>
            <input id="password" name="password" type="password" required className="input mt-1.5" />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {error ? <p className="font-mono text-xs text-critical">{error}</p> : null}
        </form>

        <p className="mt-6 font-mono text-xs text-faint">
          Seeded accounts (see README): studio@osanebi.dev / playtester@osanebi.dev — password: password123
        </p>
      </div>
    </main>
  );
}
