import { z } from '@hono/zod-openapi';

export const FeedbackSchema = z.object({
    id: z.string(),
    sessionId: z.string(),
    authorUserId: z.string(),
    category: z.enum(['low', 'medium', 'high', 'critical']),
    severity: z.enum(['bug', 'ux', 'balance', 'narrative', 'performance']),
    content: z.string().nullable(),
    tags: z.array(z.string()),
    createdAt: z.string(),
});

export const CreateFeedbackSchema = z.object({
    sessionId: z.string(),
    authorUserId: z.string(),
    category: z.enum(['low', 'medium', 'high', 'critical']),
    severity: z.enum(['bug', 'ux', 'balance', 'narrative', 'performance']),
    content: z.string().nullable(),
    tags: z.array(z.string()),
});

export const UpdateFeedbackSchema = z.object({
    sessionId: z.string(),
    authorUserId: z.string(),
    category: z.enum(['low', 'medium', 'high', 'critical']),
    severity: z.enum(['bug', 'ux', 'balance', 'narrative', 'performance']),
    content: z.string().nullable(),
    tags: z.array(z.string()),
});

export const FeedbackListResponseSchema = z.object({
    data: z.array(FeedbackSchema),
});

export const FeedbackResponseSchema = z.object({
    data: FeedbackSchema,
});