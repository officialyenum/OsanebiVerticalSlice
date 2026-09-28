import { z } from '@hono/zod-openapi';

export const ErrorSchema = z.object({
    error: z.object({
        code: z.string(),
        message: z.string(),
        details: z.record(z.string(), z.any()).optional(),
    }),
});