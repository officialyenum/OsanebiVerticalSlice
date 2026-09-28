import Link from "next/link";
import { getCurrentUserAction } from "@/lib/actions/auth";
import type { CurrentUserResponse, GameResponse } from "@/lib/type/responses";
import { getGamesOwnedAction } from "@/lib/actions/game";

export default async function DashboardPage() {
    const resp = await getCurrentUserAction();
    if (!resp.ok) return null;
    const user: CurrentUserResponse = resp.data;
    const gamesResponse = await getGamesOwnedAction(user.id);
    const games: GameResponse[] = gamesResponse.ok ? gamesResponse.data ?? [] : [];
    console.log(games);

    return (
        <div className="space-y-8">
            <header>
                <p className="label">// overview</p>
                <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Welcome back, {user.name}</h1>
                <p className="mt-2 text-sm text-muted">Your {user.role} workspace at a glance.</p>
            </header>

            <section aria-label="Workspace summary" className="grid gap-4 sm:grid-cols-2">
                <div className="border-y border-line py-5">
                    <p className="label">games</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-ink">{games.length}</p>
                    <Link href="/dashboard/games" className="mt-3 inline-block text-sm text-accent-dark hover:underline">View games</Link>
                </div>
                <div className="border-y border-line py-5">
                    <p className="label">sessions</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-ink">—</p>
                    <Link href="/dashboard/sessions" className="mt-3 inline-block text-sm text-accent-dark hover:underline">View sessions</Link>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="label">// your library</p>
                        <h2 className="mt-2 font-display text-lg font-semibold text-ink">Games</h2>
                    </div>
                    <Link href="/dashboard/games" className="text-sm text-accent-dark hover:underline">Browse all</Link>
                </div>
                {games.length ? (
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                        {games.slice(0, 3).map((game) => (
                            <li key={game.id} className="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p className="font-medium text-ink">{game.title}</p>
                                    <p className="mt-1 font-mono text-xs text-faint">{game.genre || "Uncategorized"}</p>
                                </div>
                                {game.platform ? <span className="font-mono text-xs text-muted">{game.platform}</span> : null}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4 border-y border-line py-5 text-sm text-muted">No games yet. Visit Games to add your first title.</p>
                )}
            </section>
        </div>
    );
}
