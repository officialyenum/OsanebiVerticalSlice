import { OpenAPIHono } from '@hono/zod-openapi';
import type { HonoContext } from '@api/types/bindings.type';

import { AuthController } from '@api/controllers/Auth.Controller';
import { authMiddleware } from '@api/middleware/auth';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';

import {
    LoginDocRoute,
    RegisterDocRoute,
    LogoutDocRoute,
    GetMeDocRoute,
} from '@api/doc/Auth.doc';
import { createApiRouter } from '@api/utils/api';

export function createAuthRoutes(
    controller: AuthController,
    authService: IAuthService,
): OpenAPIHono<HonoContext> {
    const router = createApiRouter();
    router.use('/logout', authMiddleware(authService));
    router.use('/me', authMiddleware(authService));

    router.openapi(LoginDocRoute, (c) => controller.login(c));
    router.openapi(RegisterDocRoute, (c) => controller.register(c));
    router.openapi(LogoutDocRoute, (c) => controller.logout(c));
    router.openapi(GetMeDocRoute, (c) => controller.getMe(c));

    return router;
}