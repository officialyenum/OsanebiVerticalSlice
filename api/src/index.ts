import { cors } from 'hono/cors';
import { getPrismaClient } from './utils/db';
import { OpenAPIHono } from '@hono/zod-openapi'
import { Bindings, HonoContext } from '@api/types/bindings.type';
import { Container } from '@api/container';
import { registerRoutes } from '@api/routes/index.route';
import { createErrorResponse, errorHandler } from '@api/middleware/errorHandler';
import ConfigureOpenApi from './utils/configure-open-api';
import { TRUSTED_WEB_ORIGINS } from '@api/utils/security';

/**
 * Export handler function for Workers
 */
export default {
  async fetch(request: Request, env: Bindings, ctx: any) {
    const app = new OpenAPIHono<HonoContext>();

    /**
     * CORS
     */
    app.use(
      '*',
      cors({
        origin: [...TRUSTED_WEB_ORIGINS],
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      })
    );
    /**
     * Dependencies
     */
    const prisma = getPrismaClient(env.OSANEBI_DB);
    const container = new Container(env, prisma);

    /**
     * Global catch-all for OpenAPI validation and service errors.
     * This is the hook Hono uses for exceptions thrown outside the route middleware chain.
     */
    app.onError((err, c) => {
      const response = createErrorResponse(err);
      console.error('Global API error:', err);
      return c.json(response.body, response.status as any);
    });

    app.use('*', errorHandler);


    /**
     * Routes
     */
    registerRoutes(app, container);

    return app.fetch(request, env, ctx);
  },
};