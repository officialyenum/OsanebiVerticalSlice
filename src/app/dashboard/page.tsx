import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import{ prisma }from "@/lib/prisma";
import NewSessionForm from "@/components/NewSessionForm";
import StatusBadge from "@/components/StatusBadge";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) return null; // layout already redirects

  if (user.role === "studio") {
    const games = await prisma.game.findMany({
      where: { studio: { ownerUserId: user.id } },
      orderBy: { createdAt: "asc" },
    });
    const sessions = await prisma.session.findMany({
      where: { game: { studio: { ownerUserId: user.id } } },
      include: {
        game: { select: { title: true } },
        _count: { select: { feedback: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return (
      <div className="space-y-10">
        <div>
          <p className="label">// sessions</p>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="font-display text-2xl font-semibold text-ink">Your sessions</h1>
            <NewSessionForm games={games.map((g) => ({ id: g.id, title: g.title }))} />
          </div>
        </div>

        {sessions.length === 0 ? (
          <p className="text-sm text-muted">No sessions yet — create one above.</p>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {sessions.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/dashboard/sessions/${s.id}`}
                  className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
                >
                  <div>
                    <p className="font-medium text-ink">{s.game.title}</p>
                    <p className="font-mono text-xs text-faint">
                      {s._count.feedback} feedback item{s._count.feedback === 1 ? "" : "s"}
                    </p>
                  </div>
                  <StatusBadge status={s.status} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // playtester view
  const sessions = await prisma.session.findMany({
    where: { playtesters: { some: { userId: user.id } } },
    include: { game: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="label">// your playtests</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
          Sessions you're invited to
        </h1>
      </div>

      {sessions.length === 0 ? (
        <p className="text-sm text-muted">No sessions yet. Check back once a studio invites you.</p>
      ) : (
        <ul className="divide-y divide-line border-y border-line">
          {sessions.map((s) => (
            <li key={s.id}>
              <Link
                href={`/dashboard/sessions/${s.id}`}
                className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
              >
                <p className="font-medium text-ink">{s.game.title}</p>
                <StatusBadge status={s.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
