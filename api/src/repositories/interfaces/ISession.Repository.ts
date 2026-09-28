import { Feedback } from '@api/entities/Feedback.Entity';
import { Session } from '@api/entities/Session.Entity';
import { FeedbackDto, SessionDto } from '@api/types/dto.type';

export interface ISessionRepository {
    // Session
    findVisibleSessionsToUser(userId: string): Promise<Session[]>;
    findVisibleSessionsByGame(userId: string, gameId: string): Promise<Session[]>;
    createSessionForOwner(sessionId: string, ownerUserId: string, data: SessionDto.Create): Promise<Session>;
    findSessionById(sessionId: string): Promise<Session>;
    updateSession(data: SessionDto.Update): Promise<Session>;

    // Session Feedbacks
    getFeedbacksBySessionId(sessionId: string): Promise<Feedback[]>;
    findFeedbackById(feedbackId: string): Promise<Feedback>;
    createFeedback(data: FeedbackDto.Create): Promise<Feedback>;
    updateFeedback(data: FeedbackDto.Update): Promise<Feedback>;
}