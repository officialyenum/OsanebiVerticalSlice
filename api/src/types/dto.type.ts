// Data Transfer Objects - Define what data flows between layers

import { EventType, FeedbackCategory, FeedbackSeverity, UserRole } from "@api/generated/prisma/enums";
import { EventModel, FeedbackModel, UserModel } from "@api/generated/prisma/models";

export namespace UserDTO {
    export interface Create {
        email: string;
        password: string;
        name: string;
        role?: UserRole;
        bio?: string | null;
        skills?: UserModel['skills'];
        studioName?: string | null;
    }

    export interface Update {
        id: string;
        email?: string;
        password?: string;
        name?: string;
        role?: UserRole;
        bio?: string | null;
        skills?: UserModel['skills'];
        studioName?: string | null;
    }

    export interface Response {
        id: string;
        email: string;
        name: string | null;
    }

    export interface WithPassword extends Response {
        password: string;
    }
}

export namespace AuthDTO {
    export interface LoginRequest {
        email: string;
        password: string;
    }

    export interface LoginResponse {
        user: UserDTO.Response;
        expiresIn: number;
    }

    export interface RegisterRequest {
        email: string;
        password: string;
        name?: string;
    }

    export interface RegisterResponse {
        user: UserDTO.Response;
        expiresIn: number;
    }

    export interface SessionResult {
        token: string;
        user: UserDTO.Response;
        expiresIn: number;
    }

    export interface MeResponse {
        id: string;
        email: string;
        name: string;
        role: string;
    }
}

export namespace SessionDto {
    export interface Create {
        gameId: string;
        startTime?: string;
        endTime?: string;
        notes?: string;
        playtesterEmails?: string[];
    }

    export interface Update {
        id: string;
        gameId: string;
        startTime?: string;
        endTime?: string;
        notes?: string;
        playtesterEmails?: string[];
    }

    export interface Response {
        id: string;
        gameId: string;
        status: 'scheduled' | 'live' | 'completed';
        startTime: Date | null;
        endTime: Date | null;
        notes: string | null;
        playtesterIds: string[];
        createdAt: Date | null;
        gameName: string;
        eventCount: number;
        feedbackCount: number;
    }
}

export namespace FeedbackDto {
    export interface ListFilters {
        sessionId?: string;
        authorUserId?: string;
        category?: FeedbackCategory;
        severity?: FeedbackSeverity;
    }

    export interface Create {
        sessionId: string;
        authorUserId: string;
        category: FeedbackCategory;
        severity: FeedbackSeverity;
        content: string;
        tags: FeedbackModel['tags'];
    }

    export interface Update {
        id: string;
        sessionId: string;
        authorUserId: string;
        category: FeedbackCategory;
        severity: FeedbackSeverity;
        content: string;
        tags: FeedbackModel['tags'];
    }

    export interface Response {
        id: string;
        sessionId: string;
        authorUserId: string;
        category: FeedbackCategory;
        severity: FeedbackSeverity;
        content: string;
        tags: FeedbackModel['tags'];
        createdAt: Date;
        gameName?: string;
    }
}

export namespace EventDto {
    export interface ListFilters {
        sessionId?: string;
        type?: EventType;
        timestamp?: Date;
    }

    export interface Create {
        sessionId: string;
        type: EventType;
        timestamp: Date;
        payload: EventModel['payload'];
    }

    export interface Update {
        id: string;
        sessionId: string;
        type: EventType;
        timestamp: Date;
        payload: EventModel['payload'];
    }

    export interface Response {
        id: string;
        sessionId?: string;
        type?: EventType;
        timestamp?: Date;
        payload?: EventModel['payload'];
    }
}

export namespace GameDto {
    export interface ListFilters {
        search?: string;
        date?: string;
    }

    export interface Create {
        studioId: string;
        title: string;
        genre?: string;
        platform?: string;
        buildVersion?: string;
        buildBranch?: string;
        pitchSummary?: string;
    }

    export interface Update {
        title?: string;
        genre?: string | null;
        platform?: string | null;
        buildVersion?: string | null;
        buildBranch?: string | null;
        pitchSummary?: string | null;
    }

    export interface Response {
        id: string;
        title: string;
        genre: string | null;
        createdAt: string;
    }

    export interface AllResponse extends Response {
        platform: string | null;
        buildVersion: string | null;
        buildBranch: string | null;
        studioId: string;
        pitchSummary: string | null;
    }
}

export namespace ReportDto {
    export interface ListFilters {
        sessionId?: string;
        type?: 'qa_summary' | 'pitch_report' | 'publisher_brief';
    }

    export interface Create {
        sessionId: string;
        type: 'qa_summary' | 'pitch_report' | 'publisher_brief';
        content: string;
    }

    export interface Update {
        type?: 'qa_summary' | 'pitch_report' | 'publisher_brief';
        content?: string;
    }

    export interface Response {
        id: string;
        sessionId: string;
        type: 'qa_summary' | 'pitch_report' | 'publisher_brief';
        content: string;
        createdAt: string;
    }
}