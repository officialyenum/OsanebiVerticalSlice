import { EventType } from '@api/generated/prisma/enums';
import type { Event as EventModel } from '@api/generated/prisma/browser';

export class Event implements EventModel {
    id: string;
    sessionId: string;
    type: EventType;
    timestamp: Date;
    payload: EventModel['payload'];

    constructor(
        id: string,
        sessionId: string,
        type: EventType,
        payload: EventModel['payload'],
        timestamp: Date = new Date()
    ) {
        this.id = id;
        this.sessionId = sessionId;
        this.type = type;
        this.payload = payload;
        this.timestamp = timestamp;
    }


}