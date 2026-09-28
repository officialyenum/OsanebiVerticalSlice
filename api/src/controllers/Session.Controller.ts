import { Context } from 'hono';
import { HonoContext } from '@api/types/bindings.type';
import { ISessionService } from '@api/services/interfaces/ISession.Service';
import { SessionDto } from '@api/types/dto.type';
import { UnauthorizedError } from '@api/utils/errors';

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

        const feedbacks = await this.sessionService.getFeedbacksBySessionId(sessionId);
        return c.json({ data: feedbacks });
    }
}