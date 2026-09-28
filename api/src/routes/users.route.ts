import {
    GetUsersDocRoute,
    GetUserDocRoute,
    CreateUserDocRoute,
    UpdateUserDocRoute,
    DeleteUserDocRoute,
} from '@api/doc/User.doc';


import { HonoContext } from '@api/types/bindings.type';
import { UserController } from '@api/controllers/User.Controller';
import { authMiddleware } from '@api/middleware/auth';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { OpenAPIHono } from '@hono/zod-openapi'
import { createApiRouter } from '@api/utils/api';

/**
 * Create user routes
 * Routes are thin - just map HTTP to controller methods
 */
export function createUserRoutes(
    controller: UserController,
    authService: IAuthService,
): OpenAPIHono<HonoContext> {
    const router = createApiRouter();
    router.use('/users', authMiddleware(authService));
    router.use('/users/*', authMiddleware(authService));
    router.openapi(GetUsersDocRoute, (c) => controller.listUsers(c));
    router.openapi(GetUserDocRoute, (c) => controller.getUser(c));
    router.openapi(CreateUserDocRoute, (c) => controller.createUser(c));
    router.openapi(UpdateUserDocRoute, (c) => controller.updateUser(c));
    router.openapi(DeleteUserDocRoute, (c) => controller.deleteUser(c));
    return router;
}