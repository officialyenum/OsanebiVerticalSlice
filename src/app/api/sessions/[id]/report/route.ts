import { NextResponse } from "next/server";
import{ prisma }from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getAccessibleSession } from "@/lib/access";
import { generateQaSummary } from "@/lib/llm";

export async function POST(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

  const access = await getAccessibleSession(id, user);
  if (!access || !access.isOwner) {
    return NextResponse.json(
      { error: "Only the studio can generate a report." },
      { status: 403 }
    );
  }

  const feedback = await prisma.feedback.findMany({
    where: { sessionId: id },
    orderBy: { createdAt: "asc" },
  });

  if (feedback.length === 0) {
    return NextResponse.json(
      { error: "No feedback yet — nothing to summarize." },
      { status: 400 }
    );
  }

  let content: string;
  try {
    content = await generateQaSummary(access.session.game.title, feedback);
  } catch (err) {
    console.error("LLM summary generation failed", err);
    return NextResponse.json(
      {
        error:
          "Couldn't reach the AI model. Check LLM_BASE_URL / LLM_API_KEY in your .env.",
      },
      { status: 502 }
    );
  }

  const report = await prisma.report.create({
    data: { sessionId: id, type: "qa_summary", content },
  });

  return NextResponse.json({ report }, { status: 201 });
}
