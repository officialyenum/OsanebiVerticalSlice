import { NextResponse } from "next/server";
import{ prisma }from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getAccessibleSession } from "@/lib/access";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

  const access = await getAccessibleSession(params.id, user);
  if (!access) return NextResponse.json({ error: "Session not found." }, { status: 404 });

  const reports = await prisma.report.findMany({
    where: { sessionId: params.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    session: access.session,
    isOwner: access.isOwner,
    reports,
  });
}
