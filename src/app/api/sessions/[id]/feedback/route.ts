import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getAccessibleSession } from "@/lib/access";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  console.log("GET feedback for session:", { sessionId: id, userId: user.id });
  const access = await getAccessibleSession(id, user);
  if (!access) return NextResponse.json({ error: "Session not found." }, { status: 404 });
  console.log("GET feedback for session:", { sessionId: id, userId: user.id });

  const feedback = await prisma.feedback.findMany({
    where: { sessionId: id },
    include: { author: { select: { id: true, name: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ feedback });
}

const feedbackSchema = z.object({
  category: z.enum(["bug", "ux", "balance", "narrative", "performance"]),
  severity: z.enum(["low", "medium", "high", "critical"]),
  content: z.string().min(3).max(2000),
  tags: z.array(z.string().min(1).max(30)).max(10).default([]),
});

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  if (!id) return NextResponse.json({ error: "Missing session ID.", message: req.body }, { status: 400 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

  console.log("SessionDetailPage access:", { sessionId: id, userId: user.id });
  const access = await getAccessibleSession(id, user);
  if (!access || !access.isAssignedPlaytester) {
    return NextResponse.json(
      { error: "Only assigned playtesters can submit feedback." },
      { status: 403 }
    );
  }
  if (access.session.status !== "live") {
    return NextResponse.json(
      { error: "Feedback can only be submitted while the session is live." },
      { status: 400 }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
  }

  const feedback = await prisma.feedback.create({
    data: {
      sessionId: id,
      authorUserId: user.id,
      ...parsed.data,
    },
    include: { author: { select: { id: true, name: true } } },
  });

  return NextResponse.json({ feedback }, { status: 201 });
}
