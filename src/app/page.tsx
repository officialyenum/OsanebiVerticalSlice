import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs text-accent">// real-time qa &amp; playtesting</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Osanebi
      </h1>
      <p className="max-w-md text-muted">
        Connects studios and playtesters for real-time feedback, structured
        QA signal, and AI-powered summaries.
      </p>
      <Link href="/login" className="btn-primary">
        Sign in
      </Link>
    </main>
  );
}
