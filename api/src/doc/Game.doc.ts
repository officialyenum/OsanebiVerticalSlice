import { createRoute, z } from '@hono/zod-openapi';
import { CreateGameSchema, GameResponseSchema, GamesResponseSchema, UpdateGameSchema } from '@api/dto/game.dto';
import { ErrorSchema } from '@api/dto/error.dto';

const authSecurity = [{ bearerAuth: [] }];

export const GetGamesDocRoute = createRoute({
    method: 'get',
    path: '/games',
    tags: ['Games'],
    summary: 'List games',
    request: {
        query: z.object({
            ownerId: z.string().optional().openapi({
                description: 'Search game ownerId',
                example: '1',
            }),
            search: z.string().optional().openapi({
                description: 'Search game titles',
                example: 'Nebula',
            }),
            date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().openapi({
                description: 'Filter games created on this UTC date',
                example: '2026-09-08',
            }),
        }),
    },
    responses: {
        200: {
            description: 'Games found',
            content: { 'application/json': { schema: GamesResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const CreateGameDocRoute = createRoute({
    method: 'post',
    path: '/games',
    tags: ['Games'],
    summary: 'Create a game',
    security: authSecurity,
    request: {
        body: {
            required: true,
            content: { 'application/json': { schema: CreateGameSchema } },
        },
    },
    responses: {
        201: {
            description: 'Game created',
            content: { 'application/json': { schema: GameResponseSchema } },
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
            description: 'Studio is not owned by the current user',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const UpdateGameDocRoute = createRoute({
    method: 'patch',
    path: '/games/{id}',
    tags: ['Games'],
    summary: 'Update a game',
    security: authSecurity,
    request: {
        params: z.object({ id: z.string().min(1) }),
        body: {
            required: true,
            content: { 'application/json': { schema: UpdateGameSchema } },
        },
    },
    responses: {
        200: {
            description: 'Game updated',
            content: { 'application/json': { schema: GameResponseSchema } },
        },
        401: {
            description: 'Authentication required',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        404: {
            description: 'Game not found',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});

export const DeleteGameDocRoute = createRoute({
    method: 'delete',
    path: '/games/{id}',
    tags: ['Games'],
    summary: 'Delete a game',
    security: authSecurity,
    request: { params: z.object({ id: z.string().min(1) }) },
    responses: {
        200: {
            description: 'Game deleted',
            content: {
                'application/json': {
                    schema: z.object({ message: z.string() }),
                },
            },
        },
        404: {
            description: 'Game not found',
            content: { 'application/json': { schema: ErrorSchema } },
        },
        409: {
            description: 'Game has linked sessions',
            content: { 'application/json': { schema: ErrorSchema } },
        },
    },
});