import { createRoute, z } from '@hono/zod-openapi';
import { CreateReportSchema, ReportResponseSchema, ReportsResponseSchema, ReportTypeSchema, UpdateReportSchema } from '@api/dto/report.dto';
import { ErrorSchema } from '@api/dto/error.dto';

const authSecurity = [{ bearerAuth: [] }];

export const GetReportsDocRoute = createRoute({
    method: 'get', path: '/reports', tags: ['Reports'], summary: 'List reports', security: authSecurity,
    request: { query: z.object({ sessionId: z.string().optional(), type: ReportTypeSchema.optional() }) },
    responses: { 200: { description: 'Reports found', content: { 'application/json': { schema: ReportsResponseSchema } } }, 401: { description: 'Authentication required', content: { 'application/json': { schema: ErrorSchema } } } },
});

export const GetReportDocRoute = createRoute({
    method: 'get', path: '/reports/{id}', tags: ['Reports'], summary: 'Get a report', security: authSecurity,
    request: { params: z.object({ id: z.string().min(1) }) },
    responses: { 200: { description: 'Report found', content: { 'application/json': { schema: ReportResponseSchema } } }, 401: { description: 'Authentication required', content: { 'application/json': { schema: ErrorSchema } } }, 404: { description: 'Report not found', content: { 'application/json': { schema: ErrorSchema } } } },
});

export const CreateReportDocRoute = createRoute({
    method: 'post', path: '/reports', tags: ['Reports'], summary: 'Create a report', security: authSecurity,
    request: { body: { required: true, content: { 'application/json': { schema: CreateReportSchema } } } },
    responses: { 201: { description: 'Report created', content: { 'application/json': { schema: ReportResponseSchema } } }, 400: { description: 'Invalid request', content: { 'application/json': { schema: ErrorSchema } } }, 401: { description: 'Authentication required', content: { 'application/json': { schema: ErrorSchema } } }, 403: { description: 'Session is not owned by the current user', content: { 'application/json': { schema: ErrorSchema } } } },
});

export const UpdateReportDocRoute = createRoute({
    method: 'patch', path: '/reports/{id}', tags: ['Reports'], summary: 'Update a report', security: authSecurity,
    request: { params: z.object({ id: z.string().min(1) }), body: { required: true, content: { 'application/json': { schema: UpdateReportSchema } } } },
    responses: { 200: { description: 'Report updated', content: { 'application/json': { schema: ReportResponseSchema } } }, 401: { description: 'Authentication required', content: { 'application/json': { schema: ErrorSchema } } }, 404: { description: 'Report not found', content: { 'application/json': { schema: ErrorSchema } } } },
});

export const DeleteReportDocRoute = createRoute({
    method: 'delete', path: '/reports/{id}', tags: ['Reports'], summary: 'Delete a report', security: authSecurity,
    request: { params: z.object({ id: z.string().min(1) }) },
    responses: { 200: { description: 'Report deleted', content: { 'application/json': { schema: z.object({ message: z.string() }) } } }, 401: { description: 'Authentication required', content: { 'application/json': { schema: ErrorSchema } } }, 404: { description: 'Report not found', content: { 'application/json': { schema: ErrorSchema } } } },
});