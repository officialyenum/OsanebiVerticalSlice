"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardNav({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/dashboard" className="font-display text-sm font-semibold text-ink">
          Osanebi<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <span>
            {name} · {role}
          </span>
          <button onClick={handleLogout} className="transition-colors hover:text-accent">
            sign out
          </button>
        </div>
      </div>
    </header>
  );
}
