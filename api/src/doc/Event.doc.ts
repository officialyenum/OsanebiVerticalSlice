import { createRoute, z } from '@hono/zod-openapi';
import { ErrorSchema } from '@api/dto/error.dto';
import { CreateEventSchema, EventListResponseSchema, EventResponseSchema } from '@api/dto/event.dto';

const authSecurity = [{ bearerAuth: [] }];

export const GetEventsBySessionDocRoute = createRoute({
    method: 'get',
    path: 'sessions/{sessionId}/events',
    tags: ['Events'],
    summary: 'List events for a session',
    description: 'Lists Events owned by the current studio for the session.',
    security: authSecurity,
    request: {
        params: z.object({ sessionId: z.string().min(1) }),
    },
    responses: {
        200: {
            description: 'Events found',
            content: { 'application/json': { schema: EventListResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const GetEventsDocRoute = createRoute({
    method: 'get',
    path: '/events',
    tags: ['Events'],
    summary: 'List visible Events',
    description: 'Lists events from sessions owned by the authenticated studio.',
    security: authSecurity,
    responses: {
        200: {
            description: 'Events found',
            content: { 'application/json': { schema: EventListResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const CreateEventDocRoute = createRoute({
    method: 'post',
    path: '/events',
    tags: ['Events'],
    summary: 'Create an Event',
    description: 'Creates an Event for a session.',
    security: authSecurity,
    request: {
        body: {
            required: true,
            content: { 'application/json': { schema: CreateEventSchema } },
        },
    },
    responses: {
        201: {
            description: 'Event created',
            content: { 'application/json': { schema: EventResponseSchema } },
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