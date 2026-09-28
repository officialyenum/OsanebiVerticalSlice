import { z } from '@hono/zod-openapi';

export const ReportTypeSchema = z.enum(['qa_summary', 'pitch_report', 'publisher_brief']);
export const ReportSchema = z.object({
    id: z.string(),
    sessionId: z.string(),
    type: ReportTypeSchema,
    content: z.string(),
    createdAt: z.string(),
});
export const CreateReportSchema = z.object({
    sessionId: z.string().min(1),
    type: ReportTypeSchema,
    content: z.string().min(1),
});
export const UpdateReportSchema = z.object({
    type: ReportTypeSchema.optional(),
    content: z.string().min(1).optional(),
});
export const ReportResponseSchema = z.object({ data: ReportSchema });
export const ReportsResponseSchema = z.object({ data: z.array(ReportSchema) });