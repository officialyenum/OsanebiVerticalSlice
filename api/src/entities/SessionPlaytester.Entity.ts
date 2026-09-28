import type { SessionPlaytester as SessionPlaytesterModel } from '@api/generated/prisma/browser';

export class SessionPlaytesterEntity implements SessionPlaytesterModel {
    id: string;
    sessionId: string;
    userId: string;

    constructor(id: string, sessionId: string, userId: string) {
        this.id = id;
        this.sessionId = sessionId;
        this.userId = userId;
    }
}