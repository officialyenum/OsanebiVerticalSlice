const STYLES: Record<string, string> = {
  scheduled: "border-amber-200 bg-amber-50 text-amber-800",
  live: "border-emerald-200 bg-emerald-50 text-emerald-800",
  completed: "border-line bg-surface-alt text-muted",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide ${
        STYLES[status] || "border-line text-muted"
      }`}
    >
      {status}
    </span>
  );
}
