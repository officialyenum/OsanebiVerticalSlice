"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardNav({ name, role,} : {
    name: string;
    role: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const links = [
        { href: "/dashboard", label: "Overview" },
        { href: "/dashboard/games", label: "Games" },
        { href: "/dashboard/sessions", label: "Sessions" },
        { href: "/dashboard/feedback", label: "Feedback" },
        ...(role === "studio" ? [{ href: "/dashboard/events", label: "Events" }] : []),
        { href: "/dashboard/Tasks", label: "Tasks" },
    ];

    async function handleLogout() {
        await fetch("/api/logout", { method: "POST" });
        router.push("/login");
        router.refresh();
    }

    return (
        <aside className="border-b border-line bg-surface md:min-h-screen md:w-60 md:shrink-0 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:block md:px-6 md:py-7">
            <div>
                <Link href="/dashboard" className="font-display text-base font-semibold text-ink">
                    Osanebi<span className="text-accent">.</span>
                </Link>
                <p className="mt-1 hidden truncate font-mono text-xs text-muted md:block">{name} · {role}</p>
            </div>
            <button onClick={handleLogout} className="font-mono text-xs text-muted transition-colors hover:text-accent md:hidden">
                sign out
            </button>
        </div>
        <nav aria-label="Dashboard" className="flex gap-1 overflow-x-auto px-3 pb-3 md:block md:px-3 md:py-5">
            {links.map(({ href, label }) => {
                const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={`whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors md:mb-1 md:block ${active ? "bg-accent-tint font-medium text-accent-dark" : "text-muted hover:bg-surface-alt hover:text-ink"}`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
        <div className="hidden border-t border-line px-6 py-4 font-mono text-xs text-muted md:block">
            <button onClick={handleLogout} className="transition-colors hover:text-accent">sign out</button>
        </div>
        </aside>
    );
}
