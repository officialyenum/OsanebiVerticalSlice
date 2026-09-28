import { Context, Next } from 'hono';
import { AppError, ErrorCode } from '@api/utils/errors';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

export function createErrorResponse(error: unknown) {
    if (error instanceof AppError) {
        return {
            status: error.statusCode as ContentfulStatusCode,
            body: {
                error: {
                    code: error.code,
                    message: error.message,
                    ...(error.details && { details: error.details }),
                },
            },
        };
    }

    const message = error instanceof Error ? error.message : 'Internal server error';

    return {
        status: 500 as ContentfulStatusCode,
        body: {
            error: {
                code: ErrorCode.INTERNAL_ERROR,
                message,
            },
        },
    };
}

/**
 * Error Handler Middleware
 * Centralized error handling - single place to manage error responses
 */
export async function errorHandler(c: Context, next: Next) {
    try {
        await next();
    } catch (error: unknown) {
        const response = createErrorResponse(error);
        console.error('Unhandled API error:', error);
        return c.json(response.body, response.status);
    }
}