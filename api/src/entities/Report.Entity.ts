import { ReportType } from '@api/generated/prisma/enums';
import { ReportDto } from '@api/types/dto.type';
import type { Report as ReportModel } from '@api/generated/prisma/browser';

export class Report implements ReportModel {
    id: string;
    sessionId: string;
    type: ReportType;
    content: string;
    createdAt: Date;

    constructor(
        id: string,
        sessionId: string,
        type: ReportType,
        content: string,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.sessionId = sessionId;
        this.type = type;
        this.content = content;
        this.createdAt = createdAt;
    }

    /**
     * Transform to DTO - what the API returns
     */
    toDTO(): ReportDto.Response {
        return {
            id: this.id,
            sessionId: this.sessionId,
            type: this.type,
            content: this.content,
            createdAt: this.createdAt.toISOString(),
        };
    }
}