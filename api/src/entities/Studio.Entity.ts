import type { Studio as StudioModel } from '@api/generated/prisma/browser';

export class Studio implements StudioModel {
    id: string;
    ownerUserId: string;
    name: string;
    description: string | null;
    createdAt: Date;

    constructor(
        id: string,
        ownerUserId: string,
        name: string,
        description: string | null = null,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.ownerUserId = ownerUserId;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
    }

    canUpdate(userId: string): boolean {
        return this.ownerUserId === userId;
    }
}