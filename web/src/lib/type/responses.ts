import {
    User,
    Game,
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

export type SessionResponse = Session;
export type SessionResponseList = Session[];

export type SessionPlaytesterResponse = SessionPlaytester;
export type SessionPlaytesterResponseList = SessionPlaytester[];

export type EventResponse = Event;
export type EventResponseList = Event[];

export type FeedbackResponse = Feedback;
export type FeedbackResponseList = Feedback[];

export type ReportResponse = Report;
export type ReportResponseList = Report[];

export type TaskResponse = Task;
export type TaskResponseList = Task[];

export type PublisherInsightResponse = PublisherInsight;
export type PublisherInsightResponseList =  PublisherInsight[];