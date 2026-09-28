import { getCurrentUserAction } from "@/lib/actions/auth";
import { getSessionsOwnedAction } from "@/lib/actions/session";
import { SessionResponseList } from "@/lib/type/responses";
import StatusBadge from "@/components/StatusBadge";
import { formatActivityDate } from "@/lib/format-date";

export default async function SessionsPage() {
	const userResponse = await getCurrentUserAction();
	if (!userResponse.ok) return null;

	const sessionResponse = await getSessionsOwnedAction();
	const sessions: SessionResponseList = sessionResponse.ok ? sessionResponse.data ?? [] : [];
	return (
		<div className="space-y-8">
			<header>
				<p className="label">// playtesting</p>
				<h1 className="mt-2 font-display text-2xl font-semibold text-ink">Sessions</h1>
				<p className="mt-2 text-sm text-muted">Manage playtests and review the feedback they collect.</p>
			</header>
			{!sessionResponse.ok ? (
				<p role="alert" className="border-y border-line py-5 text-sm text-critical">Sessions could not be loaded right now.</p>
			) : sessions.length === 0 ? (
				<div className="border-y border-line py-8">
					<p className="font-medium text-ink">No sessions yet</p>
					<p className="mt-2 text-sm text-muted">Sessions will appear here when you start a playtest.</p>
				</div>
			) : (
				<ul className="divide-y divide-line border-y border-line">
				{sessions.map((session) => (
					<li key={session.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
						<div className="min-w-0">
							<p className="font-medium text-ink">{session.gameName || session.gameId}</p>
							<p className="mt-1 text-sm text-muted">{session.notes || "No notes."}</p>
							<div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
								<span>Starts {formatActivityDate(session.startTime)}</span>
								{session.endTime ? <span>Ends {formatActivityDate(session.endTime)}</span> : null}
							</div>
						</div>
						<div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted sm:justify-end">
							<span>{session.eventCount} {session.eventCount === 1 ? "event" : "events"}</span>
							<span>{session.feedbackCount} {session.feedbackCount === 1 ? "feedback item" : "feedback items"}</span>
							<StatusBadge status={session.status} />
						</div>
					</li>
				))}
				</ul>	
			)}
		</div>
	);
}
