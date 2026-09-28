import { NotFoundError, ConflictError } from '@api/utils/errors';
import { IUserRepository } from '../interfaces/IUser.Respository';
import { User } from '@api/entities/User.Entity';
import { Prisma, PrismaClient } from "@api/generated/prisma/client";
import type { User as UserModel } from '@api/generated/prisma/browser';
import bcrypt from 'bcryptjs';

export class PrismaUserRepository implements IUserRepository {
    private prisma: PrismaClient;

    constructor(prismaDb: PrismaClient) {
        this.prisma = prismaDb;
    }

    async create(user: User): Promise<User> {
        try {
            const created = await this.prisma.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    passwordHash: user.passwordHash,
                    role: user.role,
                    bio: user.bio,
                    skills: user.skills === null
                        ? Prisma.DbNull
                        : user.skills as Prisma.InputJsonValue,
                    studioName: user.studioName,
                    tokenVersion: user.tokenVersion,
                    createdAt: user.createdAt,
                },
            });
            return this.toDomain(created);
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new ConflictError('Email already exists', { email: user.email });
            }
            throw error;
        }
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user ? this.toDomain(user) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        console.log("user find by email repository")
        console.log(user)
        return user ? this.toDomain(user) : null;
    }

    async incrementTokenVersion(id: string): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: { tokenVersion: { increment: 1 } },
        });
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map((u) => this.toDomain(u));
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        try {
            const updated = await this.prisma.user.update({
                where: { id },
                data: {
                    email: data.email,
                    name: data.name ?? undefined,
                    passwordHash: data.passwordHash,
                },
            });
            return this.toDomain(updated);
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new NotFoundError(`User with id ${id} not found`);
            }
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.prisma.user.delete({ where: { id } });
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new NotFoundError(`User with id ${id} not found`);
            }
            throw error;
        }
    }

    async emailExists(email: string): Promise<boolean> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return !!user;
    }

    async clearDb(pass: string): Promise<any> {
        const submittedPassword = pass;
        const expectedPassword = pass ?? process.env.SEED_DB_PASSWORD ?? 'password123';

        if (submittedPassword !== expectedPassword) {
            return { ok: false, error: 'Invalid seed password' };
        }
        const prisma = this.prisma;
        const seedPassword = 'password123';
        const passwordHash = await bcrypt.hash(seedPassword, 10);

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

        const studioOwner = await prisma.user.upsert({
            where: { email: 'studio@osanebi.dev' },
            update: {},
            create: {
                email: 'studio@osanebi.dev',
                passwordHash,
                name: 'Yenum (Studio)',
                role: 'studio',
                bio: 'Indie game studio owner and developer.',
                skills: ['game-design', 'programming', 'production'],
                studioName: 'Scyte Studios',
            },
        });
        const playtester = await prisma.user.upsert({
            where: { email: 'playtester@osanebi.dev' },
            update: {},
            create: {
                email: 'playtester@osanebi.dev',
                passwordHash,
                name: 'Alex (Playtester)',
                role: 'playtester',
                bio: 'Experienced action-game playtester.',
                skills: ['combat', 'platforming', 'usability-testing'],
            },
        });
        const studio = await prisma.studio.upsert({
            where: { id: 'seed-studio-1' },
            update: {},
            create: {
                id: 'seed-studio-1',
                ownerUserId: studioOwner.id,
                name: 'Scyte Studios',
                description: 'Indie studio building narrative action games.',
            },
        });
        const game = await prisma.game.upsert({
            where: { id: 'seed-game-1' },
            update: {},
            create: {
                id: 'seed-game-1',
                studioId: studio.id,
                title: 'Fracture Point',
                genre: 'Action-Adventure',
                platform: 'PC',
                buildVersion: '0.4.2',
                buildBranch: 'playtest/wave-3',
                pitchSummary: 'A fast, precise 2.5D action game about breaking and rebuilding time.',
            },
        });
        const session = await prisma.session.upsert({
            where: { id: 'seed-session-1' },
            update: {},
            create: {
                id: 'seed-session-1',
                gameId: game.id,
                status: 'live',
                startTime: new Date(),
                notes: 'Wave 3 internal playtest.',
                playtesters: {
                    create: [{ userId: playtester.id }],
                },
            },
        });
        await prisma.event.createMany({
            data: [
                {
                    sessionId: session.id,
                    type: 'gameplay',
                    timestamp: new Date(),
                    payload: { event: 'checkpoint_reached', checkpoint: 2 },
                },
                {
                    sessionId: session.id,
                    type: 'reaction',
                    timestamp: new Date(),
                    payload: { event: 'player_reaction', reaction: 'confusion', context: 'parry_prompt' },
                },
                {
                    sessionId: session.id,
                    type: 'bug',
                    timestamp: new Date(),
                    payload: { event: 'player_fell', location: 'checkpoint_2', cause: 'dash' },
                },
            ]
        });
        await prisma.feedback.createMany({
            data: [
                {
                    sessionId: session.id,
                    authorUserId: playtester.id,
                    category: 'bug',
                    severity: 'high',
                    content: 'Player falls through the floor after dashing into the second checkpoint.',
                    tags: ['dash', 'checkpoint', 'collision'],
                },
                {
                    sessionId: session.id,
                    authorUserId: playtester.id,
                    category: 'ux',
                    severity: 'medium',
                    content: 'Took a while to notice the parry prompt — it blends into the background.',
                    tags: ['combat', 'readability', 'parry'],
                },
                {
                    sessionId: session.id,
                    authorUserId: playtester.id,
                    category: 'balance',
                    severity: 'low',
                    content: 'The second encounter feels slightly too easy after learning the parry timing.',
                    tags: ['combat', 'difficulty', 'encounter'],
                },
            ],
        });
        await prisma.report.create({
            data: {
                sessionId: session.id,
                type: 'qa_summary',
                content:
                    'Wave 3 playtest identified one high-severity collision bug and one medium-severity readability issue. Combat fundamentals are performing well, but the parry prompt needs stronger visual contrast.',
            },
        });
        await prisma.task.createMany({
            data: [
                {
                    gameId: game.id,
                    sessionId: session.id,
                    title: 'Fix checkpoint floor collision',
                    description: 'Investigate the collision failure that causes the player to fall through the floor after dashing into checkpoint two.',
                    priority: 'P0',
                    status: 'open',
                    source: 'feedback',
                },
                {
                    gameId: game.id,
                    sessionId: session.id,
                    title: 'Improve parry prompt readability',
                    description: 'Increase contrast and visual prominence of the parry prompt during combat.',
                    priority: 'P1',
                    status: 'in_progress',
                    source: 'feedback',
                },
                {
                    gameId: game.id,
                    title: 'Review second encounter difficulty',
                    description: 'Review encounter balance following playtester feedback and determine whether enemy pressure should be increased.',
                    priority: 'P2',
                    status: 'open',
                    source: 'manual',
                },
            ],
        });
        await prisma.publisherInsight.create({
            data: {
                gameId: game.id,
                score: 78,
                rationale: 'Fracture Point demonstrates a strong gameplay identity and promising combat loop. Current concerns are concentrated around polish and readability rather than the core concept.',
                recommendedNextSteps: 'Fix the checkpoint collision issue, improve parry prompt readability, and run another playtest wave focused on combat clarity and encounter balance.',
            },
        });

        return {
            ok: true,
            message: 'Database was cleaned and seeded.',
            users: [
                'studio@osanebi.dev',
                'playtester@osanebi.dev',
            ],
            password: 'hidden',
        };
    }

    /**
   * Private helper: Transform Prisma model to domain entity
   */
    private toDomain(raw: UserModel): User {
        return new User(
            raw.id,
            raw.email,
            raw.passwordHash,
            raw.name,
            raw.createdAt,
            raw.role,
            raw.bio,
            raw.skills,
            raw.studioName,
            raw.tokenVersion,
        );
    }
}