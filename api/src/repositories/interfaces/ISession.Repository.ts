import { FeedbackEntity } from '@api/entities/Feedback.Entity';
import { SessionEntity } from '@api/entities/Session.Entity';
import { EventEntity } from '@api/entities/Event.Entity';
import { EventDto, FeedbackDto, SessionDto } from '@api/types/dto.type';

export interface ISessionRepository {
    // Session
    findVisibleSessionsToUser(userId: string): Promise<SessionEntity[]>;
    findVisibleSessionsByGame(userId: string, gameId: string): Promise<SessionEntity[]>;
    createSessionForOwner(sessionId: string, ownerUserId: string, data: SessionDto.Create): Promise<SessionEntity>;
    findSessionById(sessionId: string): Promise<SessionEntity>;
    updateSession(data: SessionDto.Update): Promise<SessionEntity>;

    // Session Feedbacks
    getFeedbacksBySessionId(sessionId: string): Promise<FeedbackEntity[]>;
    findFeedbackById(feedbackId: string): Promise<FeedbackEntity>;
    createFeedback(data: FeedbackDto.Create): Promise<FeedbackEntity>;
    updateFeedback(data: FeedbackDto.Update): Promise<FeedbackEntity>;

    // Session Events
    getEventsBySessionId(sessionId: string): Promise<EventEntity[]>;
    findEventById(eventId: string): Promise<EventEntity>;
    createEvent(data: EventDto.Create): Promise<EventEntity>;
    updateEvent(data: EventDto.Update): Promise<EventEntity>;
}