import { GameDto } from "@api/types/dto.type";
import type { Game as GameModel } from '@api/generated/prisma/browser';

export class GameEntity implements GameModel {
    id: string;
    studioId: string;
    title: string;
    genre: string | null;
    platform: string | null;
    buildVersion: string | null;
    buildBranch: string | null;
    pitchSummary: string | null;
    createdAt: Date;

    constructor(
        id: string,
        studioId: string,
        title: string,
        genre: string | null = null,
        platform: string | null = null,
        buildVersion: string | null = null,
        buildBranch: string | null = null,
        pitchSummary: string | null = null,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.studioId = studioId;
        this.title = title;
        this.genre = genre;
        this.platform = platform;
        this.buildVersion = buildVersion;
        this.buildBranch = buildBranch;
        this.pitchSummary = pitchSummary;
        this.createdAt = createdAt;
    }

    canUpdate(userId: string, ownerUserId: string): boolean {
        return ownerUserId === userId;
    }

    /**
     * Transform to DTO - what the API returns
     */
    toDTO(): GameDto.Response {
        return {
            id: this.id,
            title: this.title,
            genre: this.genre,
            createdAt: this.createdAt.toISOString(),
        };
    }
}