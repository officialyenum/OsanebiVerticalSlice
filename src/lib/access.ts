import { prisma } from "./prisma";
import type { User } from "@prisma/client";

/**
 * Loads a session and confirms the given user may view it: either they
 * own the studio behind the game, or they're an assigned playtester.
 * Returns null if the session doesn't exist or the user has no access.
 */
export async function getAccessibleSession(sessionId: string, user: User) {
  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: {
      game: { include: { studio: true } },
      playtesters: { include: { user: { select: { id: true, name: true, email: true } } } },
    },
  });

  console.log("getAccessibleSession:", { sessionId, userId: user.id, session });
  if (!session) return null;

  const isOwner = session.game.studio.ownerUserId === user.id;
  const isAssignedPlaytester = session.playtesters.some((p: { userId: any; }) => p.userId === user.id);

  if (!isOwner && !isAssignedPlaytester) return null;

  return { session, isOwner, isAssignedPlaytester };
}
