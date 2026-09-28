import { createRoute } from '@hono/zod-openapi';
import { z } from 'zod';
import {
    LoginRequestSchema,
    LoginResponseSchema,
    LogoutResponseSchema,
    RegisterRequestSchema,
    RegisterResponseSchema,
    MeResponseSchema
} from '@api/dto/auth.dto';
import { ErrorSchema } from '@api/dto/error.dto';

const authSecurity = [{ bearerAuth: [] }];

export const LoginDocRoute = createRoute({
    method: 'post',
    path: '/login',

    tags: ['Authentication'],

    summary: 'Login',
    description: 'Authenticates a user and sets an HttpOnly authentication cookie.',

    request: {
        body: {
            required: true,
            content: {
                'application/json': {
                    schema: LoginRequestSchema,
                },
            },
        },
    },

    responses: {
        200: {
            description: 'Login successful',
            headers: {
                'Set-Cookie': {
                    description: 'Authentication session cookie',
                    schema: z.stringFormat
                },
            },
            content: {
                'application/json': {
                    schema: LoginResponseSchema,
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

        401: {
            description: 'Invalid email or password',
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

export const RegisterDocRoute = createRoute({
    method: 'post',
    path: '/register',

    tags: ['Authentication'],

    summary: 'Register',
    description: 'Creates a user account and sets an HttpOnly authentication cookie.',

    request: {
        body: {
            required: true,
            content: {
                'application/json': {
                    schema: RegisterRequestSchema,
                },
            },
        },
    },

    responses: {
        201: {
            description: 'User registered successfully',
            content: {
                'application/json': {
                    schema: RegisterResponseSchema,
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

export const LogoutDocRoute = createRoute({
    method: 'post',
    path: '/logout',

    tags: ['Authentication'],

    summary: 'Logout',
    description: 'Logs out the currently authenticated user and invalidates their session.',

    security: [
        {
            sessionCookie: [],
        },
    ],

    responses: {
        200: {
            description: 'Successfully logged out',
            content: {
                'application/json': {
                    schema: LogoutResponseSchema,
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

export const GetMeDocRoute = createRoute({
    method: 'get',
    path: '/me',

    tags: ['Authentication'],

    summary: 'Get current user',
    description: 'Returns information about the currently authenticated user.',

    security: authSecurity,

    responses: {
        200: {
            description: 'Current user',
            content: {
                'application/json': {
                    schema: MeResponseSchema,
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