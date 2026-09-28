import { HonoContext } from '@api/types/bindings.type';
import { Container } from '@api/container';
import { createUserRoutes } from '@api/routes/users.route';
import { createSessionRoutes } from '@api/routes/sessions.route';
import { createGameRoutes } from '@api/routes/games.route';
import { createAuthRoutes } from '@api/routes/auth.route';
import { createReportRoutes } from '@api/routes/reports.route';
import ConfigureOpenApi from '@api/utils/configure-open-api';
import { OpenAPIHono } from '@hono/zod-openapi';
import { NotFoundError } from '@api/utils/errors';
import bcrypt from 'bcryptjs';

/**
 * Register all routes
 */
export function registerRoutes(app: OpenAPIHono<HonoContext>, container: Container) {
    // Health check
    app.get('/health', (c) =>
        c.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
        })
    );

    ConfigureOpenApi(app);
    // Mount route groups
    app.route('/', createUserRoutes(container.userController, container.getAuthService()));
    app.route('/', createSessionRoutes(container.sessionController, container.getAuthService()));
    app.route('/', createGameRoutes(container.gameController, container.sessionController, container.getAuthService()));
    app.route('/auth', createAuthRoutes(container.authController, container.getAuthService()));
    app.route('/', createReportRoutes(container.reportController, container.getAuthService()));


    // 404 error handling middleware
    app.all("*", async (c) => {
        throw new NotFoundError("Not Found")
    })

    // showRoutes(app, { verbose: true })
    return app;
}