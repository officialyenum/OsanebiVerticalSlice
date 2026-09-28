import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getPlatformProxy } from "wrangler";
import bcrypt from "bcryptjs";
import { D1Database } from "@cloudflare/workers-types";

const PASSWORD = "password123";
type Env = {
    OSANEBI_DB: D1Database;
};

async function main() {
    const { env } = await getPlatformProxy<Env>();

    if (!env.OSANEBI_DB) {
        throw new Error("OSANEBI_DB is not bound. Run this from the api workspace or via wrangler.");
    }

    const prisma = new PrismaClient({
        adapter: new PrismaD1(env.OSANEBI_DB),
    });

    await prisma.publisherInsight.deleteMany();
    await prisma.report.deleteMany();
    await prisma.event.deleteMany();
    await prisma.task.deleteMany();
    await prisma.feedback.deleteMany();
    await prisma.sessionPlaytester.deleteMany();
    await prisma.session.deleteMany();
    await prisma.game.deleteMany();
    await prisma.studioMember.deleteMany();
    await prisma.studio.deleteMany();
    await prisma.user.deleteMany();

    const passwordHash = await bcrypt.hash(PASSWORD, 10);

    const studioOwner = await prisma.user.upsert({
        where: { email: "studio@osanebi.dev" },
        update: {},
        create: {
            email: "studio@osanebi.dev",
            passwordHash,
            name: "Yenum (Studio)",
            role: "studio",
            bio: "Indie game studio owner and developer.",
            skills: ["game-design", "programming", "production"],
            studioName: "Scyte Studios",
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
            bio: "Experienced action-game playtester.",
            skills: ["combat", "platforming", "usability-testing"],
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
            notes: "Wave 3 internal playtest.",
            playtesters: {
                create: [{ userId: playtester.id }],
            },
        },
    });

    await prisma.event.createMany({
        data: [
            {
                sessionId: session.id,
                type: "gameplay",
                timestamp: new Date(),
                payload: { event: "checkpoint_reached", checkpoint: 2 },
            },
            {
                sessionId: session.id,
                type: "reaction",
                timestamp: new Date(),
                payload: { event: "player_reaction", reaction: "confusion", context: "parry_prompt" },
            },
            {
                sessionId: session.id,
                type: "bug",
                timestamp: new Date(),
                payload: { event: "player_fell", location: "checkpoint_2", cause: "dash" },
            },
        ],
    });

    await prisma.feedback.createMany({
        data: [
            {
                sessionId: session.id,
                authorUserId: playtester.id,
                category: "bug",
                severity: "high",
                content: "Player falls through the floor after dashing into the second checkpoint.",
                tags: ["dash", "checkpoint", "collision"],
            },
            {
                sessionId: session.id,
                authorUserId: playtester.id,
                category: "ux",
                severity: "medium",
                content: "Took a while to notice the parry prompt — it blends into the background.",
                tags: ["combat", "readability", "parry"],
            },
            {
                sessionId: session.id,
                authorUserId: playtester.id,
                category: "balance",
                severity: "low",
                content: "The second encounter feels slightly too easy after learning the parry timing.",
                tags: ["combat", "difficulty", "encounter"],
            },
        ],
    });

    await prisma.report.create({
        data: {
            sessionId: session.id,
            type: "qa_summary",
            content:
                "Wave 3 playtest identified one high-severity collision bug and one medium-severity readability issue. Combat fundamentals are performing well, but the parry prompt needs stronger visual contrast.",
        },
    });

    await prisma.task.createMany({
        data: [
            {
                gameId: game.id,
                sessionId: session.id,
                title: "Fix checkpoint floor collision",
                description:
                    "Investigate the collision failure that causes the player to fall through the floor after dashing into checkpoint two.",
                priority: "P0",
                status: "open",
                source: "feedback",
            },
            {
                gameId: game.id,
                sessionId: session.id,
                title: "Improve parry prompt readability",
                description: "Increase contrast and visual prominence of the parry prompt during combat.",
                priority: "P1",
                status: "in_progress",
                source: "feedback",
            },
            {
                gameId: game.id,
                title: "Review second encounter difficulty",
                description:
                    "Review encounter balance following playtester feedback and determine whether enemy pressure should be increased.",
                priority: "P2",
                status: "open",
                source: "manual",
            },
        ],
    });

    await prisma.publisherInsight.create({
        data: {
            gameId: game.id,
            score: 78,
            rationale:
                "Fracture Point demonstrates a strong gameplay identity and promising combat loop. Current concerns are concentrated around polish and readability rather than the core concept.",
            recommendedNextSteps:
                "Fix the checkpoint collision issue, improve parry prompt readability, and run another playtest wave focused on combat clarity and encounter balance.",
        },
    });

    console.log("Seeded Cloudflare D1 database.");
    console.log("Login as studio@osanebi.dev / password123");
    console.log("Login as playtester@osanebi.dev / password123");

    await prisma.$disconnect();
}

main().catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
});
