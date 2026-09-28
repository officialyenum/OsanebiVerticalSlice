import { OpenAPIHono } from '@hono/zod-openapi';
import { HonoContext } from '@api/types/bindings.type';
import { GameController } from '@api/controllers/Game.Controller';
import { authMiddleware } from '@api/middleware/auth';
import { createApiRouter } from '@api/utils/api';
import { CreateGameDocRoute, DeleteGameDocRoute, GetGamesDocRoute, UpdateGameDocRoute } from '@api/doc/Game.doc';
import { SessionController } from '@api/controllers/Session.Controller';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { GetSessionsByGameDocRoute } from '@api/doc/Session.doc';

export function createGameRoutes(
    controller: GameController,
    sessionController: SessionController,
    authService: IAuthService,
): OpenAPIHono<HonoContext> {
    const router = createApiRouter();
    router.use('/games', authMiddleware(authService));
    router.use('/games/*', authMiddleware(authService));
    router.use('/:gameId/sessions', authMiddleware(authService));
    router.openapi(GetGamesDocRoute, (c) => controller.listGames(c));
    router.openapi(GetSessionsByGameDocRoute, (c) => sessionController.listSessionsByGame(c));
    router.openapi(CreateGameDocRoute, (c) => controller.createGame(c));
    router.openapi(UpdateGameDocRoute, (c) => controller.updateGame(c));
    router.openapi(DeleteGameDocRoute, (c) => controller.deleteGame(c));
    return router;
}