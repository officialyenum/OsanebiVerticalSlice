import { SessionStatus } from '@api/generated/prisma/enums';
import { SessionDto } from '@api/types/dto.type';
import type { Session as SessionModel } from '@api/generated/prisma/browser';

export class SessionEntity implements SessionModel {
    id: string;
    gameId: string;
    status: SessionStatus;
    startTime: Date | null;
    endTime: Date | null;
    notes: string | null;
    playtesterIds: string[];
    createdAt: Date;
    gameName: string;
    eventCount: number;
    feedbackCount: number;

    constructor(
        id: string,
        gameId: string,
        status: SessionStatus = SessionStatus.scheduled,
        startTime: Date | null = null,
        endTime: Date | null = null,
        notes: string | null = null,
        playtesterIds: string[] = [],
        createdAt: Date = new Date(),
        gameName: string = '',
        eventCount: number = 0,
        feedbackCount: number = 0,
    ) {
        this.id = id;
        this.gameId = gameId;
        this.status = status;
        this.startTime = startTime;
        this.endTime = endTime;
        this.notes = notes;
        this.playtesterIds = playtesterIds;
        this.createdAt = createdAt;
        this.gameName = gameName;
        this.eventCount = eventCount;
        this.feedbackCount = feedbackCount;
    }

    start(): void {
        this.status = SessionStatus.live;
        this.startTime = this.startTime ?? new Date();
    }

    complete(): void {
        this.status = SessionStatus.completed;
        this.endTime = this.endTime ?? new Date();
    }

    /**
     * Transform to DTO - what the API returns
     */
    toDTO(): SessionDto.Response {
        return {
            id: this.id,
            gameId: this.gameId,
            status: this.status,
            startTime: this.startTime,
            endTime: this.endTime,
            notes: this.notes,
            playtesterIds: this.playtesterIds,
            createdAt: this.createdAt,
            gameName: this.gameName,
            eventCount: this.eventCount,
            feedbackCount: this.feedbackCount,
        };
    }
}