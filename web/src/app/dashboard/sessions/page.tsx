export default function SessionsPage() {
	return (
		<div className="space-y-8">
			<header>
				<p className="label">// playtesting</p>
				<h1 className="mt-2 font-display text-2xl font-semibold text-ink">Sessions</h1>
				<p className="mt-2 text-sm text-muted">Manage playtests and review the feedback they collect.</p>
			</header>
			<div className="border-y border-line py-8">
				<p className="font-medium text-ink">No sessions yet</p>
				<p className="mt-2 text-sm text-muted">Sessions will appear here when you start a playtest.</p>
			</div>
		</div>
	);
}
