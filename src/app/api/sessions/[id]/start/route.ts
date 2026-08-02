import { NextResponse } from "next/server";
import{ prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getAccessibleSession } from "@/lib/access";

export async function POST(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

  const access = await getAccessibleSession(id, user);
  if (!access || !access.isOwner) {
    return NextResponse.json({ error: "Only the studio can start a session." }, { status: 403 });
  }
  if (access.session.status !== "scheduled") {
    return NextResponse.json({ error: "Session already started." }, { status: 400 });
  }

  const session = await prisma.session.update({
    where: { id: id },
    data: { status: "live", startTime: new Date() },
  });

  return NextResponse.json({ session });
}
