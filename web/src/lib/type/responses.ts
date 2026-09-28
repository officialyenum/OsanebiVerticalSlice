import {
    User,
    Game,
    Event as EventModel,
    Feedback,
    Studio,
    StudioMember,
    Task,
    PublisherInsight,
    Session,
    SessionPlaytester
} from "./models"

/**
 * RESPONSES
 */
export type ErrorResponse = {
    error: {
        code: string,
        message: string,
        details: {}
    }
}

export type LoginResponse = {
    token: string,
    user: {
        id: string,
        email: string,
        name: string
    },
    expiresIn: number
}

export type CurrentUserResponse = {
    id: string
    email: string,
    name: string,
    role: string,
}



export type MessageResponse = {
    message?: string
}


export type UserResponse = User
export type UserResponseList = User[]

export type StudioResponse = Studio;
export type StudioResponseList = Studio[];

export type StudioMemberResponse = StudioMember;
export type StudioMemberResponseList = StudioMember[];

export type GameResponse = Game;
export type GameResponseList = Game[];

export type SessionResponse = Omit<Session, "startTime" | "endTime" | "createdAt"> & {
    startTime: string | null;
    endTime: string | null;
    createdAt: string;
};
export type SessionListItem = SessionResponse & {
    gameName: string;
    eventCount: number;
    feedbackCount: number;
};
export type SessionResponseList = SessionListItem[];

export type SessionPlaytesterResponse = SessionPlaytester;
export type SessionPlaytesterResponseList = SessionPlaytester[];

export type EventResponse = Omit<EventModel, "timestamp"> & { timestamp: string };
export type EventResponseList = EventResponse[];

export type FeedbackResponse = Omit<Feedback, "createdAt"> & {
    createdAt: string;
    gameName?: string;
};
export type FeedbackResponseList = FeedbackResponse[];

export type ReportResponse = Report;
export type ReportResponseList = Report[];

export type TaskResponse = Task;
export type TaskResponseList = Task[];

export type PublisherInsightResponse = PublisherInsight;
export type PublisherInsightResponseList = PublisherInsight[];