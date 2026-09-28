import { createRoute, z } from '@hono/zod-openapi';
import { UserSchema, UserResponseSchema, CreateUserSchema, UpdateUserSchema } from '@api/dto/user.dto';
import { ErrorSchema } from '@api/dto/error.dto';


export const GetUsersDocRoute = createRoute({
    method: 'get',
    path: '/users',
    tags: ['Users'],
    summary: 'List users',
    description: 'Returns a list of all users.',
    responses: {
        200: {
            description: 'List of users',
            content: {
                'application/json': {
                    schema: UserResponseSchema,
                },
            },
        },
        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },
    },
});
export const GetUserDocRoute = createRoute({
    method: 'get',
    path: '/users/{id}',
    tags: ['Users'],
    summary: 'Get a user',
    description: 'Returns a user by their ID.',

    request: {
        params: z.object({
            id: z.string().min(1).openapi({
                param: {
                    name: 'id',
                    in: 'path',
                },
                example: 'usr_123',
            }),
        }),
    },

    responses: {
        200: {
            description: 'User found',
            content: {
                'application/json': {
                    schema: UserResponseSchema,
                },
            },
        },

        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },
    },
});
export const CreateUserDocRoute = createRoute({
    method: 'post',
    path: '/users',
    tags: ['Users'],
    summary: 'Create a user',
    description: 'Creates a new user account.',

    request: {
        body: {
            required: true,
            content: {
                'application/json': {
                    schema: CreateUserSchema,
                },
            },
        },
    },

    responses: {
        201: {
            description: 'User created successfully',
            content: {
                'application/json': {
                    schema: UserResponseSchema,
                },
            },
        },

        400: {
            description: 'Invalid request',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        409: {
            description: 'User already exists',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },
    },
});
export const UpdateUserDocRoute = createRoute({
    method: 'patch',
    path: '/users/{id}',
    tags: ['Users'],
    summary: 'Update a user',
    description: 'Updates the authenticated user.',

    security: [
        {
            bearerAuth: [],
        },
    ],

    request: {
        params: z.object({
            id: z.string().min(1).openapi({
                param: {
                    name: 'id',
                    in: 'path',
                },
                example: 'usr_123',
            }),
        }),

        body: {
            required: true,
            content: {
                'application/json': {
                    schema: UpdateUserSchema,
                },
            },
        },
    },

    responses: {
        200: {
            description: 'User updated successfully',
            content: {
                'application/json': {
                    schema: UserResponseSchema,
                },
            },
        },

        401: {
            description: 'Authentication required',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        403: {
            description: 'User is not authorized to update this account',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },
    },
});
export const DeleteUserDocRoute = createRoute({
    method: 'delete',
    path: '/users/{id}',
    tags: ['Users'],
    summary: 'Delete a user',
    description: 'Deletes the authenticated user.',

    security: [
        {
            bearerAuth: [],
        },
    ],

    request: {
        params: z.object({
            id: z.string().min(1).openapi({
                param: {
                    name: 'id',
                    in: 'path',
                },
                example: 'usr_123',
            }),
        }),
    },

    responses: {
        200: {
            description: 'User deleted successfully',
            content: {
                'application/json': {
                    schema: z.object({
                        message: z.string(),
                    }),
                },
            },
        },

        401: {
            description: 'Authentication required',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        403: {
            description: 'User is not authorized to delete this account',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },

        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorSchema,
                },
            },
        },
    },
});