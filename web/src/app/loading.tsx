export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-label="Loading"
      aria-busy="true"
    >
      <div
        className="size-12 animate-spin rounded-full border-4 border-white/40 border-t-white"
        aria-hidden="true"
      />
    </div>
  )
}