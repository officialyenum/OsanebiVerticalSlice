import { OpenAPIHono } from '@hono/zod-openapi';
import { HonoContext } from '@api/types/bindings.type';
import { SessionController } from '@api/controllers/Session.Controller';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { authMiddleware } from '@api/middleware/auth';
import { createApiRouter } from '@api/utils/api';
import { CreateSessionDocRoute, GetSessionsDocRoute } from '@api/doc/Session.doc';
import { GetFeedbacksBySessionDocRoute } from '@api/doc/Feedback.doc';

export function createSessionRoutes(
    controller: SessionController,
    authService: IAuthService,
): OpenAPIHono<HonoContext> {
    const router = createApiRouter();
    router.use('/sessions', authMiddleware(authService));
    router.use('/sessions/*', authMiddleware(authService));
    // session routes
    router.openapi(GetSessionsDocRoute, (c) => controller.listSessions(c));
    router.openapi(CreateSessionDocRoute, (c) => controller.createSession(c));

    // feedbacks routes
    router.openapi(GetFeedbacksBySessionDocRoute, (c) => controller.listFeedbackBySession(c));
    return router;
}