import type { StudioMember as StudioMemberModel } from '@api/generated/prisma/browser';

export class StudioMember implements StudioMemberModel {
    id: string;
    studioId: string;
    userId: string;

    constructor(id: string, studioId: string, userId: string) {
        this.id = id;
        this.studioId = studioId;
        this.userId = userId;
    }
}