import { z } from '@hono/zod-openapi';

export const SessionSchema = z.object({
    id: z.string(),
    gameId: z.string(),
    status: z.enum(['scheduled', 'live', 'completed']),
    startTime: z.string().nullable(),
    endTime: z.string().nullable(),
    notes: z.string().nullable(),
    playtesterIds: z.array(z.string()),
    createdAt: z.string(),
});

export const CreateSessionSchema = z.object({
    gameId: z.string().min(1),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
    notes: z.string().optional(),
    playtesterEmails: z.array(z.email()).optional(),
});

export const SessionsResponseSchema = z.object({
    data: z.array(SessionSchema),
});

export const SessionResponseSchema = z.object({
    data: SessionSchema,
});