import { OpenAPIHono } from '@hono/zod-openapi';
import { HonoContext } from '@api/types/bindings.type';
import { SessionController } from '@api/controllers/Session.Controller';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { authMiddleware } from '@api/middleware/auth';
import { createApiRouter } from '@api/utils/api';
import { CreateSessionDocRoute, GetSessionsDocRoute } from '@api/doc/Session.doc';
import { CreateFeedbackDocRoute, GetFeedbacksBySessionDocRoute, GetFeedbacksDocRoute } from '@api/doc/Feedback.doc';
import { CreateEventDocRoute, GetEventsBySessionDocRoute, GetEventsDocRoute } from '@api/doc/Event.doc';

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

    router.use('/feedbacks', authMiddleware(authService));
    // feedback routes
    router.openapi(GetFeedbacksDocRoute, (c) => controller.listFeedbacksByUser(c));
    router.openapi(GetFeedbacksBySessionDocRoute, (c) => controller.listFeedbackBySession(c));
    router.openapi(CreateFeedbackDocRoute, (c) => controller.submitFeedback(c));

    // events routes
    router.use('/events', authMiddleware(authService));
    router.openapi(GetEventsDocRoute, (c) => controller.listEventsVisibleToUser(c));
    router.openapi(GetEventsBySessionDocRoute, (c) => controller.listEventsBySession(c));
    router.openapi(CreateEventDocRoute, (c) => controller.submitEvent(c));
    return router;
}