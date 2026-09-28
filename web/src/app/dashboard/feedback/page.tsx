import { getMyFeedbackAction } from '@/lib/actions/activity';
import { getSessionsOwnedAction } from '@/lib/actions/session';
import { formatActivityDate } from '@/lib/format-date';

const severityStyles: Record<string, string> = {
    critical: 'border-critical text-critical',
    high: 'border-high text-high',
    medium: 'border-medium text-medium',
    low: 'border-line text-muted',
};

export default async function FeedbackPage() {
    const [feedbackResponse, sessionResponse] = await Promise.all([
        getMyFeedbackAction(),
        getSessionsOwnedAction(),
    ]);

    const feedbacks = feedbackResponse.ok ? feedbackResponse.data : [];
    const sessionNames = new Map(
        (sessionResponse.ok ? sessionResponse.data ?? [] : []).map((session) => [session.id, session.gameName]),
    );

    return (
        <div className="space-y-8">
            <header>
                <p className="label">// playtesting</p>
                <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Feedback</h1>
                <p className="mt-2 text-sm text-muted">Feedback you have submitted during playtests.</p>
            </header>

            {!feedbackResponse.ok ? (
                <p role="alert" className="border-y border-line py-5 text-sm text-critical">Feedback could not be loaded right now.</p>
            ) : feedbacks.length === 0 ? (
                <div className="border-y border-line py-8">
                    <p className="font-medium text-ink">No feedback yet</p>
                    <p className="mt-2 text-sm text-muted">Feedback you submit will appear here.</p>
                </div>
            ) : (
                <ul className="divide-y divide-line border-y border-line">
                    {feedbacks.map((feedback) => (
                        <li key={feedback.id} className="py-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase">
                                    <span className={`rounded border px-2 py-1 ${severityStyles[feedback.severity] ?? severityStyles.low}`}>
                                        {feedback.severity}
                                    </span>
                                    <span className="text-muted">{feedback.category}</span>
                                </div>
                                <time className="font-mono text-xs text-faint" dateTime={feedback.createdAt}>
                                    {formatActivityDate(feedback.createdAt)}
                                </time>
                            </div>
                            <p className="mt-2 text-sm font-medium text-ink">
                                {feedback.gameName ?? sessionNames.get(feedback.sessionId) ?? `Session ${feedback.sessionId}`}
                            </p>
                            <p className="mt-1 font-mono text-xs text-faint">Session {feedback.sessionId}</p>
                            <p className="mt-1 whitespace-pre-wrap text-sm text-muted">{feedback.content || 'No details provided.'}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}