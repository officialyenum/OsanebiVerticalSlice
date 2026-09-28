import { EventDto, FeedbackDto, SessionDto } from '@api/types/dto.type';

export interface ISessionService {
    getVisibleSessions(authorUserId: string): Promise<SessionDto.Response[]>;
    getSessionsByGame(userId: string, gameId: string): Promise<SessionDto.Response[]>;
    getSessionById(sessionId: string): Promise<SessionDto.Response>;
    createSession(userId: string, data: SessionDto.Create): Promise<SessionDto.Response>;
    updateSession(data: SessionDto.Update): Promise<SessionDto.Response>;


    getFeedbacksBySessionId(sessionId: string, userId: string): Promise<FeedbackDto.Response[]>;
    getFeedbacksVisibleToUser(userId: string): Promise<FeedbackDto.Response[]>;
    findFeedbackById(feedbackId: string): Promise<FeedbackDto.Response>;
    createFeedback(data: FeedbackDto.Create): Promise<FeedbackDto.Response>;
    updateFeedback(data: FeedbackDto.Update): Promise<FeedbackDto.Response>;


    getEventsBySessionId(sessionId: string, userId: string): Promise<EventDto.Response[]>;
    getEventsVisibleToUser(userId: string): Promise<EventDto.Response[]>;
    findEventById(eventId: string): Promise<EventDto.Response>;
    createEvent(data: EventDto.Create): Promise<EventDto.Response>;
    updateEvent(data: EventDto.Update): Promise<EventDto.Response>;
}