import { SessionEntity } from '@api/entities/Session.Entity';
import { ISessionRepository } from '@api/repositories/interfaces/ISession.Repository';
import { ISessionService } from '@api/services/interfaces/ISession.Service';
import { EventDto, FeedbackDto, SessionDto } from '@api/types/dto.type';
import { ValidationError } from '@api/utils/errors';
import { KVNamespace } from '@cloudflare/workers-types';
import { cacheDeleteByPrefix, cacheGet, cacheSet } from '@api/utils/cache';

export class SessionService implements ISessionService {
    private static readonly CACHE_PREFIX = 'sessions:';
    private static readonly CACHE_TTL_SECONDS = 300;

    constructor(
        private sessionRepository: ISessionRepository,
        private cache: KVNamespace,
    ) { }

    async getVisibleSessions(authorUserId: string): Promise<SessionDto.Response[]> {
        const cacheKey = `${SessionService.CACHE_PREFIX}user:${authorUserId}`;
        const cached = await cacheGet<SessionDto.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const sessions = await this.sessionRepository.findVisibleSessionsToUser(authorUserId);
        const response = sessions.map((session) => this.toResponse(session));
        await cacheSet(this.cache, cacheKey, response, { ttl: SessionService.CACHE_TTL_SECONDS });
        return response;
    }

    async getSessionsByGame(userId: string, gameId: string): Promise<SessionDto.Response[]> {
        if (!gameId) {
            throw new ValidationError('Game ID required');
        }

        const cacheKey = `${SessionService.CACHE_PREFIX}game:${userId}:${gameId}`;
        const cached = await cacheGet<SessionDto.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const sessions = await this.sessionRepository.findVisibleSessionsByGame(userId, gameId);
        const response = sessions.map((session) => this.toResponse(session));
        await cacheSet(this.cache, cacheKey, response, { ttl: SessionService.CACHE_TTL_SECONDS });
        return response;
    }

    async getSessionById(sessionId: string): Promise<SessionDto.Response> {
        const cacheKey = `${SessionService.CACHE_PREFIX}session:${sessionId}`;
        const cached = await cacheGet<SessionDto.Response>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        if (!sessionId) throw new ValidationError('Session ID required');
        const session = await this.sessionRepository.findSessionById(sessionId);
        if (!session) throw new ValidationError('Session not found');
        await cacheSet(this.cache, cacheKey, session, { ttl: SessionService.CACHE_TTL_SECONDS });
        return this.toResponse(session);
    }

    async createSession(userId: string, data: SessionDto.Create): Promise<SessionDto.Response> {
        if (!data) throw new ValidationError('Session data required');
        if (!userId) throw new ValidationError('User Authentication Failed');

        const session = await this.sessionRepository.createSessionForOwner(this.generateId(), userId, data);
        await this.invalidateCache();
        return this.toResponse(session);
    }

    async updateSession(data: SessionDto.Update): Promise<SessionDto.Response> {
        if (!data) throw new ValidationError('Session data required');
        if (!data.id) throw new ValidationError('Session ID required');
        const session = await this.sessionRepository.updateSession(data);
        if (!session) throw new ValidationError('Session not updated');
        await this.invalidateCache();
        return this.toResponse(session);
    }

    async getFeedbacksBySessionId(sessionId: string): Promise<FeedbackDto.Response[]> {
        if (!sessionId) throw new ValidationError('Session ID required');
        return this.sessionRepository.getFeedbacksBySessionId(sessionId);
    }

    async findFeedbackById(feedbackId: string): Promise<FeedbackDto.Response> {
        if (!feedbackId) throw new ValidationError('Feedback ID required');
        const feedback = await this.sessionRepository.findFeedbackById(feedbackId);
        if (!feedback) throw new ValidationError('Feedback not found');
        return feedback;
    }

    async createFeedback(data: FeedbackDto.Create): Promise<FeedbackDto.Response> {
        if (!data) throw new ValidationError('Feedback data required');
        const feedback = await this.sessionRepository.createFeedback(data);
        await this.invalidateCache();
        return feedback;
    }

    async updateFeedback(data: FeedbackDto.Update): Promise<FeedbackDto.Response> {
        if (!data) throw new ValidationError('Feedback data required');
        const feedback = await this.sessionRepository.updateFeedback(data);
        if (!feedback) throw new ValidationError('Feedback not found');
        await this.invalidateCache();
        return feedback;
    }


    async getEventsBySessionId(sessionId: string): Promise<EventDto.Response[]> {
        const cacheKey = `${SessionService.CACHE_PREFIX}events:${sessionId}`;
        const cached = await cacheGet<EventDto.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;
        if (!sessionId) throw new ValidationError('Session ID required');

        const events = await this.sessionRepository.getEventsBySessionId(sessionId);
        await cacheSet(this.cache, cacheKey, events, { ttl: SessionService.CACHE_TTL_SECONDS });
        return events;
    }
    async findEventById(eventId: string): Promise<EventDto.Response> {
        const cacheKey = `${SessionService.CACHE_PREFIX}event:${eventId}`;
        const cached = await cacheGet<EventDto.Response>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        if (!eventId) throw new ValidationError('Event ID required');

        const event = await this.sessionRepository.findEventById(eventId);
        if (!event) throw new ValidationError('Event not found');

        await cacheSet(this.cache, cacheKey, event, { ttl: SessionService.CACHE_TTL_SECONDS });
        return event;
    }
    async createEvent(data: EventDto.Create): Promise<EventDto.Response> {
        if (!data) throw new ValidationError('Event data required');
        const event = await this.sessionRepository.createEvent(data);
        await this.invalidateCache();
        return event;
    }
    async updateEvent(data: EventDto.Update): Promise<EventDto.Response> {
        if (!data) throw new ValidationError('Event data required');
        if (!data.id) throw new ValidationError('Event ID required');
        const event = await this.sessionRepository.updateEvent(data);
        if (!event) throw new ValidationError('Event not found');
        await this.invalidateCache();
        return event;
    }




    private generateId(): string {
        return `ses_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }

    private toResponse(session: SessionEntity): SessionDto.Response {
        return {
            ...session.toDTO()
        };
    }

    private async invalidateCache(): Promise<void> {
        await cacheDeleteByPrefix(this.cache, SessionService.CACHE_PREFIX);
    }
}