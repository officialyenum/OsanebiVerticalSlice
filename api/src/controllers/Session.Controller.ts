import { Context } from 'hono';
import { HonoContext } from '@api/types/bindings.type';
import { ISessionService } from '@api/services/interfaces/ISession.Service';
import { EventDto, FeedbackDto, SessionDto } from '@api/types/dto.type';
import { UnauthorizedError } from '@api/utils/errors';
import { Feedback } from '@api/generated/prisma/client';

export class SessionController {
    constructor(private sessionService: ISessionService) { }

    async listSessions(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) {
            throw new UnauthorizedError('Authentication required');
        }

        const sessions = await this.sessionService.getVisibleSessions(userId);
        return c.json({ data: sessions });
    }

    async createSession(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) {
            throw new UnauthorizedError('Authentication required');
        }

        const body = await c.req.json();
        const data: SessionDto.Create = {
            gameId: body.gameId,
            startTime: body.startTime,
            endTime: body.endTime,
            notes: body.notes,
            playtesterEmails: body.playtesterEmails,
        };

        const session = await this.sessionService.createSession(userId, data);
        return c.json({ data: session }, { status: 201 });
    }

    async listSessionsByGame(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const gameId = c.req.param('gameId');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!gameId) throw new UnauthorizedError('Game ID required');

        const sessions = await this.sessionService.getSessionsByGame(userId, gameId);
        return c.json({ data: sessions });
    }

    async listFeedbackBySession(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const sessionId = c.req.param('sessionId');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!sessionId) throw new UnauthorizedError('session ID required');

        const feedbacks = await this.sessionService.getFeedbacksBySessionId(sessionId, userId);
        return c.json({ data: feedbacks });
    }

    async listFeedbacksByUser(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) throw new UnauthorizedError('Authentication required');

        const feedbacks = await this.sessionService.getFeedbacksVisibleToUser(userId);
        return c.json({ data: feedbacks });
    }

    async submitFeedback(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) {
            throw new UnauthorizedError('Authentication required');
        }

        const body = await c.req.json();
        const data: FeedbackDto.Create = {
            sessionId: body.sessionId,
            authorUserId: userId,
            category: body.category,
            severity: body.severity,
            content: body.content,
            tags: body.tags,
        };

        const feedback = await this.sessionService.createFeedback(data);
        return c.json({ data: feedback }, { status: 201 });
    }

    async listEventsBySession(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const sessionId = c.req.param('sessionId');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!sessionId) throw new UnauthorizedError('session ID required');

        const events = await this.sessionService.getEventsBySessionId(sessionId, userId);
        return c.json({ data: events });
    }

    async listEventsVisibleToUser(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) throw new UnauthorizedError('Authentication required');

        const events = await this.sessionService.getEventsVisibleToUser(userId);
        return c.json({ data: events });
    }

    async submitEvent(c: Context<HonoContext>): Promise<any> {
        const body = await c.req.json();
        const data: EventDto.Create = {
            sessionId: body.sessionId,
            type: body.type,
            timestamp: body.timestamp,
            payload: body.payload,
        };

        const event = await this.sessionService.createEvent(data);
        return c.json({ data: event }, { status: 201 });
    }
}