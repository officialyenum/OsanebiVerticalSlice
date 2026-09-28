import { FeedbackDto, SessionDto } from '@api/types/dto.type';

export interface ISessionService {
    getVisibleSessions(authorUserId: string): Promise<SessionDto.Response[]>;
    getSessionsByGame(userId: string, gameId: string): Promise<SessionDto.Response[]>;
    getSessionById(sessionId: string): Promise<SessionDto.Response>;
    createSession(userId: string, data: SessionDto.Create): Promise<SessionDto.Response>;
    updateSession(data: SessionDto.Update): Promise<SessionDto.Response>;
    
    
    getFeedbacksBySessionId(sessionId: string): Promise<FeedbackDto.Response[]>;
    findFeedbackById(feedbackId: string): Promise<FeedbackDto.Response>;
    createFeedback(data: FeedbackDto.Create): Promise<FeedbackDto.Response>;
    updateFeedback(data: FeedbackDto.Update): Promise<FeedbackDto.Response>;
}