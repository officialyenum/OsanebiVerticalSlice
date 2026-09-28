import { getCurrentUserAction } from "@/lib/actions/auth";
import { getGamesOwnedAction } from "@/lib/actions/game";
import type { GameResponseList } from "@/lib/type/responses";
import NewGameForm from "@/components/game/NewGameForm";

function isStudioOwner(role: string) {
	return ["owner", "studio_owner"].includes(role.trim().toLowerCase().replace(/[ -]+/g, "_"));
}

export default async function GamesPage() {
	const userResponse = await getCurrentUserAction();
	if (!userResponse.ok) return null;

	const gamesResponse = await getGamesOwnedAction(userResponse.data.id);
	const games: GameResponseList = gamesResponse.ok ? gamesResponse.data ?? [] : [];
	const canCreate = isStudioOwner(userResponse.data.role);

	return (
		<div className="space-y-8">
			<header>
				<p className="label">// library</p>
				<div className="mt-2 flex flex-wrap items-end justify-between gap-4">
					<div>
						<h1 className="font-display text-2xl font-semibold text-ink">Games</h1>
						<p className="mt-2 text-sm text-muted">All games in your studio workspace.</p>
					</div>
					{canCreate ? <NewGameForm /> : null}
				</div>
			</header>

			{!gamesResponse.ok ? (
				<p role="alert" className="border-y border-line py-5 text-sm text-critical">Games could not be loaded right now.</p>
			) : games.length === 0 ? (
				<div className="border-y border-line py-8">
					<p className="font-medium text-ink">No games yet</p>
					<p className="mt-2 text-sm text-muted">{canCreate ? "Add a game to start organizing playtests." : "Games will appear here when your studio adds them."}</p>
				</div>
			) : (
				<ul className="divide-y divide-line border-y border-line">
					{games.map((game) => (
						<li key={game.id} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="font-medium text-ink">{game.title}</p>
									<p className="mt-1 text-sm text-muted">{game.pitchSummary || "No description provided."}</p>
								</div>
								<div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint">
									<span>{game.genre || "Uncategorized"}</span>
									{game.platform ? <span>{game.platform}</span> : null}
									{game.buildVersion ? <span>v{game.buildVersion}</span> : null}
								</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
