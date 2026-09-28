import { SessionEntity } from '@api/entities/Session.Entity';
import { Prisma, PrismaClient, UserRole } from '@api/generated/prisma/client';
import { EventDto, FeedbackDto, SessionDto } from '@api/types/dto.type';
import { ForbiddenError, NotFoundError } from '@api/utils/errors';
import { ISessionRepository } from '../interfaces/ISession.Repository';
import { FeedbackEntity } from '@api/entities/Feedback.Entity';
import { EventEntity } from '@api/entities/Event.Entity';

export class PrismaSessionRepository implements ISessionRepository {
    constructor(private prisma: PrismaClient) { }

    async findVisibleSessionsToUser(userId: string): Promise<SessionEntity[]> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true },
        });
        if (!user) return [];

        const visibility = user.role === UserRole.studio
            ? { game: { studio: { ownerUserId: userId } } }
            : user.role === UserRole.playtester
                ? { playtesters: { some: { userId } } }
                : {
                    OR: [
                        { game: { studio: { ownerUserId: userId } } },
                        { playtesters: { some: { userId } } },
                    ],
                };

        const sessions = await this.prisma.session.findMany({
            where: visibility,
            include: { playtesters: { select: { userId: true } } },
            orderBy: { createdAt: 'desc' },
        });

        return sessions.map((session) => this.toDomain(session));
    };

    async findVisibleSessionsByGame(userId: string, gameId: string): Promise<SessionEntity[]> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true },
        });
        if (!user) return [];

        const visibility = user.role === UserRole.studio
            ? { gameId, game: { studio: { ownerUserId: userId } } }
            : user.role === UserRole.playtester
                ? { gameId, status: 'scheduled' as const }
                : { gameId };

        const sessions = await this.prisma.session.findMany({
            where: visibility,
            include: { playtesters: { select: { userId: true } } },
            orderBy: { startTime: 'asc' },
        });

        return sessions.map((session) => this.toDomain(session));
    }

    async createSessionForOwner(sessionId: string, ownerUserId: string, data: SessionDto.Create): Promise<SessionEntity> {
        const owner = await this.prisma.user.findUnique({
            where: { id: ownerUserId },
            select: { role: true },
        });
        if (!owner || owner.role !== 'studio') {
            throw new ForbiddenError('Only studio users can create sessions');
        }

        const game = await this.prisma.game.findFirst({
            where: { id: data.gameId, studio: { ownerUserId } },
        });
        if (!game) {
            throw new ForbiddenError('You can only create sessions for games you own');
        }

        const emails = [...new Set(data.playtesterEmails ?? [])];
        const users = emails.length === 0
            ? []
            : await this.prisma.user.findMany({
                where: { email: { in: emails }, role: 'playtester' },
                select: { id: true, email: true },
            });
        const foundEmails = new Set(users.map((user) => user.email));
        const missingEmail = emails.find((email) => !foundEmails.has(email));
        if (missingEmail) {
            throw new NotFoundError(`Playtester account not found for ${missingEmail}`);
        }

        const session = await this.prisma.session.create({
            data: {
                id: sessionId,
                gameId: data.gameId,
                startTime: data.startTime ? new Date(data.startTime) : undefined,
                endTime: data.endTime ? new Date(data.endTime) : undefined,
                notes: data.notes,
                playtesters: {
                    create: users.map((user) => ({ userId: user.id })),
                },
            },
            include: { playtesters: { select: { userId: true } } },
        });

        return this.toDomain(session);
    }

    async findSessionById(sessionId: string): Promise<SessionEntity> {
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
            include: { playtesters: { select: { userId: true } } },
        });
        if (!session) throw new NotFoundError('Session not Found');
        return this.toDomain(session);
    }

    async updateSession(data: SessionDto.Update): Promise<SessionEntity> {
        const { id, ...updates } = data;
        const session = await this.prisma.session.update({
            where: { id },
            data: {
                ...updates,
                startTime: updates.startTime ? new Date(updates.startTime) : undefined,
                endTime: updates.endTime ? new Date(updates.endTime) : undefined,
            },
            include: { playtesters: { select: { userId: true } } },
        });
        return this.toDomain(session);
    }



    async getFeedbacksBySessionId(sessionId: string): Promise<FeedbackEntity[]> {
        const feedbacks = await this.prisma.feedback.findMany({
            where: { sessionId },
            orderBy: { createdAt: 'desc' },
        });
        return feedbacks.map((feedback) => this.feedbackToDomain(feedback));
    }

    async findFeedbackById(feedbackId: string): Promise<FeedbackEntity> {
        const feedback = await this.prisma.feedback.findUnique({ where: { id: feedbackId } });
        if (!feedback) throw new NotFoundError('Feedback not Found');
        return this.feedbackToDomain(feedback);
    }

    async createFeedback(data: FeedbackDto.Create): Promise<FeedbackEntity> {
        const feedback = await this.prisma.feedback.create({
            data: {
                ...data,
                tags: data.tags === null ? Prisma.JsonNull : data.tags as Prisma.InputJsonValue,
            },
        });
        return this.feedbackToDomain(feedback);
    }
    async updateFeedback(data: FeedbackDto.Update): Promise<FeedbackEntity> {
        const { id, ...updates } = data;
        const feedback = await this.prisma.feedback.update({
            where: { id },
            data: {
                ...updates,
                tags: updates.tags === null ? Prisma.JsonNull : updates.tags,
            },
        });
        return this.feedbackToDomain(feedback);
    }

    async getEventsBySessionId(sessionId: string): Promise<EventEntity[]> {
        const events = await this.prisma.event.findMany({
            where: { sessionId },
            orderBy: { timestamp: 'asc' },
        });

        return events.map((event) => this.eventToDomain(event));
    }
    async findEventById(eventId: string): Promise<EventEntity> {
        const event = await this.prisma.event.findUnique({ where: { id: eventId } });
        if (!event) throw new NotFoundError('Event not Found');
        return this.eventToDomain(event);
    }

    async createEvent(data: EventDto.Create): Promise<EventEntity> {
        const event = await this.prisma.event.create({
            data: {
                ...data,
                payload: data.payload as Prisma.InputJsonValue,
            },
        });

        return this.eventToDomain(event);
    }
    
    async updateEvent(data: EventDto.Update): Promise<EventEntity> {
        const { id, ...updates } = data;
        const event = await this.prisma.event.update({ where: { id }, data: {
            ...updates,
            payload: updates.payload as Prisma.InputJsonValue,
        } });
        return this.eventToDomain(event);
    }

    private toDomain(raw: any): SessionEntity {
        return new SessionEntity(
            raw.id,
            raw.gameId,
            raw.status,
            raw.startTime,
            raw.endTime,
            raw.notes,
            raw.playtesters?.map((playtester: { userId: string }) => playtester.userId) ?? [],
            raw.createdAt,
        );
    }

    private feedbackToDomain(raw: any): FeedbackEntity {
        return new FeedbackEntity(
            raw.id,
            raw.sessionId,
            raw.authorUserId,
            raw.category,
            raw.severity,
            raw.content,
            raw.tags,
            raw.createdAt,
        );
    }

    private eventToDomain(raw: any): EventEntity {
        return new EventEntity(
            raw.id,
            raw.sessionId,
            raw.type,
            raw.timestamp,
            raw.payload,
        );
    }
}