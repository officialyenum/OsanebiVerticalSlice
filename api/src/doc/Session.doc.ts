import { createRoute, z } from '@hono/zod-openapi';
import { CreateSessionSchema, SessionResponseSchema, SessionsResponseSchema } from '@api/dto/session.dto';
import { ErrorSchema } from '@api/dto/error.dto';

const authSecurity = [{ bearerAuth: [] }];

export const GetSessionsByGameDocRoute = createRoute({
    method: 'get',
    path: '/{gameId}/sessions',
    tags: ['Sessions'],
    summary: 'List sessions for a game',
    description: 'Lists sessions the authenticated user can view for a game.',
    security: authSecurity,
    request: {
        params: z.object({ gameId: z.string().min(1) }),
    },
    responses: {
        200: {
            description: 'Sessions found',
            content: { 'application/json': { schema: SessionsResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const GetSessionsDocRoute = createRoute({
    method: 'get',
    path: '/sessions',
    tags: ['Sessions'],
    summary: 'List visible sessions',
    description: 'Lists sessions owned by the current user or assigned to them.',
    security: authSecurity,
    responses: {
        200: {
            description: 'Sessions found',
            content: { 'application/json': { schema: SessionsResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const CreateSessionDocRoute = createRoute({
    method: 'post',
    path: '/sessions',
    tags: ['Sessions'],
    summary: 'Create a session',
    description: 'Creates a scheduled session for a game owned by the current user.',
    security: authSecurity,
    request: {
        body: {
            required: true,
            content: { 'application/json': { schema: CreateSessionSchema } },
        },
    },
    responses: {
        201: {
            description: 'Session created',
            content: { 'application/json': { schema: SessionResponseSchema } },
        },
        400: {
            description: 'Invalid request',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        403: {
            description: 'Game is not owned by the current user',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        404: {
            description: 'Playtester account not found',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});