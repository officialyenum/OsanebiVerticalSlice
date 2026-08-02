import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import{ prisma }from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// GET: sessions visible to the current user.
//   studio     -> sessions for games under studios they own
//   playtester -> sessions they're assigned to
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

  if (user.role === "studio") {
    const sessions = await prisma.session.findMany({
      where: { game: { studio: { ownerUserId: user.id } } },
      include: {
        game: { select: { id: true, title: true } },
        playtesters: { include: { user: { select: { id: true, name: true } } } },
        _count: { select: { feedback: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ sessions });
  }

  const sessions = await prisma.session.findMany({
    where: { playtesters: { some: { userId: user.id } } },
    include: {
      game: { select: { id: true, title: true } },
      _count: { select: { feedback: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ sessions });
}

const createSchema = z.object({
  gameId: z.string().min(1),
  playtesterEmails: z.array(z.string().email()).default([]),
});

// POST: studio creates a new scheduled session for one of their games,
// optionally assigning playtesters by email (must already have accounts).
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  if (user.role !== "studio") {
    return NextResponse.json({ error: "Only studios can create sessions." }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Provide a valid gameId." }, { status: 400 });
  }

  const game = await prisma.game.findFirst({
    where: { id: parsed.data.gameId, studio: { ownerUserId: user.id } },
  });
  if (!game) {
    return NextResponse.json({ error: "Game not found." }, { status: 404 });
  }

  const playtesters = parsed.data.playtesterEmails.length
    ? await prisma.user.findMany({
        where: { email: { in: parsed.data.playtesterEmails }, role: "playtester" },
      })
    : [];

  const session = await prisma.session.create({
    data: {
      gameId: game.id,
      status: "scheduled",
      playtesters: {
        create: playtesters.map((p) => ({ userId: p.id })),
      },
    },
  });

  return NextResponse.json({ session }, { status: 201 });
}
