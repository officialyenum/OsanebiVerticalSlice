import { EventType } from '@api/generated/prisma/enums';
import type { Event as EventModel } from '@api/generated/prisma/browser';

export class EventEntity implements EventModel {
    id: string;
    sessionId: string;
    type: EventType;
    timestamp: Date;
    payload: EventModel['payload'];

    constructor(
        id: string,
        sessionId: string,
        type: EventType,
        timestamp: Date = new Date(),
        payload: EventModel['payload']
    ) {
        this.id = id;
        this.sessionId = sessionId;
        this.type = type;
        this.timestamp = timestamp;
        this.payload = payload;
    }


}