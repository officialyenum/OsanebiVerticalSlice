import { EventType } from '@api/generated/prisma/enums';
import { z } from '@hono/zod-openapi';

export const EventSchema = z.object({
    id: z.string(),
    sessionId: z.string(),
    type: z.enum([EventType.bug, EventType.gameplay, EventType.reaction, EventType.system]),
    timestamp: z.date(),
    payload: z.object(),
});

export const CreateEventSchema = z.object({
    sessionId: z.string().min(1, "Session Id Required"),
    type: z.enum([EventType.bug, EventType.gameplay, EventType.reaction, EventType.system]),
    timestamp: z.date(),
    payload: z.object(),
});

export const UpdateEventSchema = z.object({
    id: z.string().min(1, "Event Id Required"),
    sessionId: z.string().min(1, "Session Id Required"),
    type: z.enum([EventType.bug, EventType.gameplay, EventType.reaction, EventType.system]).optional(),
    timestamp: z.date(),
    payload: z.object().optional(),
});

export const EventListResponseSchema = z.object({
    data: z.array(EventSchema),
});

export const EventResponseSchema = z.object({
    data: EventSchema,
});