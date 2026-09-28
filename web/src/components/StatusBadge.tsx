const STYLES: Record<string, string> = {
  scheduled: "border-line text-muted",
  live: "border-accent text-accent",
  completed: "border-line text-faint",
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
