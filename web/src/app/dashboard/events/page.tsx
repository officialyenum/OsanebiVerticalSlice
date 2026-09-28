import { getCurrentUserAction } from '@/lib/actions/auth';
import { getVisibleEventsAction } from '@/lib/actions/activity';
import { getSessionsOwnedAction } from '@/lib/actions/session';
import { formatActivityDate } from '@/lib/format-date';

export default async function EventsPage() {
    const userResponse = await getCurrentUserAction();
    if (!userResponse.ok) return null;
    if (userResponse.data.role !== 'studio') {
        return (
            <div className="space-y-8">
                <header>
                    <p className="label">// playtesting</p>
                    <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Events</h1>
                </header>
                <p role="status" className="border-y border-line py-5 text-sm text-muted">Events are available to studio accounts.</p>
            </div>
        );
    }

    const [eventResponse, sessionResponse] = await Promise.all([
        getVisibleEventsAction(),
        getSessionsOwnedAction(),
    ]);
    const events = eventResponse.ok ? eventResponse.data : [];
    const sessionNames = new Map(
        (sessionResponse.ok ? sessionResponse.data ?? [] : []).map((session) => [session.id, session.gameName]),
    );

    return (
        <div className="space-y-8">
            <header>
                <p className="label">// playtesting</p>
                <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Events</h1>
                <p className="mt-2 text-sm text-muted">Game events recorded in sessions you can access.</p>
            </header>

            {!eventResponse.ok ? (
                <p role="alert" className="border-y border-line py-5 text-sm text-critical">Events could not be loaded right now.</p>
            ) : events.length === 0 ? (
                <div className="border-y border-line py-8">
                    <p className="font-medium text-ink">No events yet</p>
                    <p className="mt-2 text-sm text-muted">Events from your visible sessions will appear here.</p>
                </div>
            ) : (
                <ul className="divide-y divide-line border-y border-line">
                    {events.map((event) => (
                        <li key={event.id} className="py-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="rounded border border-line bg-surface-alt px-2 py-1 font-mono text-xs uppercase text-muted">
                                    {event.type}
                                </span>
                                <time className="font-mono text-xs text-faint" dateTime={event.timestamp}>
                                    {formatActivityDate(event.timestamp)}
                                </time>
                            </div>
                            <p className="mt-2 text-sm font-medium text-ink">
                                {sessionNames.get(event.sessionId) ?? `Session ${event.sessionId}`}
                            </p>
                            <pre className="mt-2 max-w-full overflow-x-auto whitespace-pre-wrap wrap-break-word rounded border border-line bg-surface px-3 py-2 font-mono text-xs text-muted">
                                {JSON.stringify(event.payload, null, 2) ?? 'No event details.'}
                            </pre>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}