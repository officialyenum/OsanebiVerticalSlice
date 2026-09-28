"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-600">
          error
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">Something went wrong.</h1>
        <p className="mt-3 text-sm text-muted">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="btn-primary mt-6"
        >
          Try again
        </button>
      </div>
    </main>
  );
}