import { PrismaClient } from '../src/app/generated/prisma';
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";
dotenv.config();

console.log(`Seeding database... ${process.env.DATABASE_URL}`);
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);

  const studioOwner = await prisma.user.upsert({
    where: { email: "studio@osanebi.dev" },
    update: {},
    create: {
      email: "studio@osanebi.dev",
      passwordHash,
      name: "Yenum (Studio)",
      role: "studio",
    },
  });

  const playtester = await prisma.user.upsert({
    where: { email: "playtester@osanebi.dev" },
    update: {},
    create: {
      email: "playtester@osanebi.dev",
      passwordHash,
      name: "Alex (Playtester)",
      role: "playtester",
    },
  });

  const studio = await prisma.studio.upsert({
    where: { id: "seed-studio-1" },
    update: {},
    create: {
      id: "seed-studio-1",
      ownerUserId: studioOwner.id,
      name: "Scyte Studios",
      description: "Indie studio building narrative action games.",
    },
  });

  const game = await prisma.game.upsert({
    where: { id: "seed-game-1" },
    update: {},
    create: {
      id: "seed-game-1",
      studioId: studio.id,
      title: "Fracture Point",
      genre: "Action-Adventure",
      platform: "PC",
      buildVersion: "0.4.2",
      buildBranch: "playtest/wave-3",
      pitchSummary: "A fast, precise 2.5D action game about breaking and rebuilding time.",
    },
  });

  const session = await prisma.session.upsert({
    where: { id: "seed-session-1" },
    update: {},
    create: {
      id: "seed-session-1",
      gameId: game.id,
      status: "live",
      startTime: new Date(),
      playtesters: { create: [{ userId: playtester.id }] },
    },
  });

  await prisma.feedback.createMany({
    data: [
      {
        sessionId: session.id,
        authorUserId: playtester.id,
        category: "bug",
        severity: "high",
        content: "Player falls through the floor after dashing into the second checkpoint.",
        tags: ["dash", "checkpoint"],
      },
      {
        sessionId: session.id,
        authorUserId: playtester.id,
        category: "ux",
        severity: "medium",
        content: "Took a while to notice the parry prompt — it blends into the background.",
        tags: ["combat", "readability"],
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeded:", { studio: studio.name, game: game.title, session: session.id });
  console.log("Login as studio@osanebi.dev / password123");
  console.log("Login as playtester@osanebi.dev / password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
