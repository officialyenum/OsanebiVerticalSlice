import { createRoute, z } from '@hono/zod-openapi';
import { CreateSessionSchema, SessionResponseSchema, SessionsResponseSchema } from '@api/dto/session.dto';
import { ErrorSchema } from '@api/dto/error.dto';
import { CreateFeedbackSchema, FeedbackListResponseSchema, FeedbackResponseSchema } from '@api/dto/feedback.dto';

const authSecurity = [{ bearerAuth: [] }];

export const GetFeedbacksBySessionDocRoute = createRoute({
    method: 'get',
    path: 'sessions/{sessionId}/feedbacks',
    tags: ['Feedbacks'],
    summary: 'List feedbacks for a session',
    description: 'Lists feedbacks the authenticated user can view for a session.',
    security: authSecurity,
    request: {
        params: z.object({ sessionId: z.string().min(1) }),
    },
    responses: {
        200: {
            description: 'Feedbacks found',
            content: { 'application/json': { schema: FeedbackListResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const GetFeedbacksDocRoute = createRoute({
    method: 'get',
    path: '/feedbacks',
    tags: ['Feedbacks'],
    summary: 'List visible Feedbacks',
    description: 'Lists Feedbacks owned by the current user.',
    security: authSecurity,
    responses: {
        200: {
            description: 'Feedbacks found',
            content: { 'application/json': { schema: FeedbackListResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const CreateFeedbackDocRoute = createRoute({
    method: 'post',
    path: '/feedbacks',
    tags: ['Feedbacks'],
    summary: 'Create a Feedback',
    description: 'Creates a Feedback for a session.',
    security: authSecurity,
    request: {
        body: {
            required: true,
            content: { 'application/json': { schema: CreateFeedbackSchema } },
        },
    },
    responses: {
        201: {
            description: 'Feedback created',
            content: { 'application/json': { schema: FeedbackResponseSchema } },
        },
        400: {
            description: 'Invalid request',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});