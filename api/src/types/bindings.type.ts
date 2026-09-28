// Hono context bindings



import { D1Database, KVNamespace } from '@cloudflare/workers-types'
import { OpenAPIHono } from '@hono/zod-openapi'
import Logger from '@api/utils/logger'

export type Bindings = {
    OSANEBI_DB: D1Database
    OSANEBI_KV: KVNamespace
    ENVIRONMENT: string
    DATABASE_URL: string
    JWT_SECRET: string
    SEED_DB_PASSWORD?: string
}

export type HonoContext = {
    Bindings: Bindings;
    Variables: {
        userId?: string;
        token?: string;
        logger?: Logger;
    };
};

export type AppOpenAPI = OpenAPIHono<HonoContext>