import { FeedbackCategory, FeedbackSeverity } from '@api/generated/prisma/enums';
import { z } from '@hono/zod-openapi';

export const FeedbackSchema = z.object({
    id: z.string(),
    sessionId: z.string(),
    authorUserId: z.string(),
    category: z.enum([
        FeedbackCategory.balance,
        FeedbackCategory.bug,
        FeedbackCategory.narrative,
        FeedbackCategory.performance,
        FeedbackCategory.ux]),
    severity: z.enum([
        FeedbackSeverity.low,
        FeedbackSeverity.medium,
        FeedbackSeverity.high,
        FeedbackSeverity.critical
    ]),
    content: z.string().nullable(),
    tags: z.array(z.string()),
    createdAt: z.string(),
    gameName: z.string().optional(),
});

export const CreateFeedbackSchema = z.object({
    sessionId: z.string().min(1, "Session Id Required"),
    category: z.enum([
        FeedbackCategory.balance,
        FeedbackCategory.bug,
        FeedbackCategory.narrative,
        FeedbackCategory.performance,
        FeedbackCategory.ux], "Category Required"),
    severity: z.enum([
        FeedbackSeverity.low,
        FeedbackSeverity.medium,
        FeedbackSeverity.high,
        FeedbackSeverity.critical
    ], "Severity Required"),
    content: z.string().nullable().optional(),
    tags: z.array(z.string()).optional(),
});

export const UpdateFeedbackSchema = z.object({
    sessionId: z.string().min(1, "Session Id Required"),
    category: z.enum([
        FeedbackCategory.balance,
        FeedbackCategory.bug,
        FeedbackCategory.narrative,
        FeedbackCategory.performance,
        FeedbackCategory.ux]).optional(),
    severity: z.enum([
        FeedbackSeverity.low,
        FeedbackSeverity.medium,
        FeedbackSeverity.high,
        FeedbackSeverity.critical
    ]).optional(),
    content: z.string().nullable().optional(),
    tags: z.array(z.string()).optional(),
});

export const FeedbackListResponseSchema = z.object({
    data: z.array(FeedbackSchema),
});

export const FeedbackResponseSchema = z.object({
    data: FeedbackSchema,
});