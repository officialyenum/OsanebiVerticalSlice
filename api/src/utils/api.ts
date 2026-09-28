// api.ts

import { OpenAPIHono } from '@hono/zod-openapi';
import type { HonoContext } from '@api/types/bindings.type';
import { ValidationError } from '@api/utils/errors';

export function createApiRouter() {
    return new OpenAPIHono<HonoContext>({
        defaultHook: (result) => {
            if (!result.success) {
                throw new ValidationError(
                    'Validation failed',
                    {
                        issues: result.error.issues.map((issue) => ({
                            field: issue.path.join('.'),
                            code: issue.code,
                            message: issue.message,
                        })),
                    },
                );
            }
        },
    });
}