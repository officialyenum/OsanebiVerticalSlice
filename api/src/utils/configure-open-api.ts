import { Hono } from 'hono';
import { HonoContext, AppOpenAPI } from '@api/types/bindings.type';
import packageJson from '../../package.json';
import { apiReference, Scalar, } from '@scalar/hono-api-reference';

export default async function ConfigureOpenApi(app: AppOpenAPI) {
    app.openAPIRegistry.registerComponent('securitySchemes', 'bearerAuth', {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    });
    app.openAPIRegistry.registerComponent('securitySchemes', 'sessionCookie', {
        type: 'apiKey',
        in: 'cookie',
        name: 'token',
    });

    app.doc("/api-docs", {
        openapi: "3.0.0",
        info: {
            version: packageJson.version,
            title: "Osanebi API",
            description: "API documentation for Osanebi",
        },
    });

    app.get('/doc', Scalar({
        url: '/api-docs',
        persistAuth: true,
        authentication: {
            preferredSecurityScheme: 'bearerAuth',
        },
    }))
}