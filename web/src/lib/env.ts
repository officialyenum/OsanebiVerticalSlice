import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_API_URL: z.url(),
    API_URL: z.url(),
});

export type Bindings = {
    OSANEBI_DB: D1Database
    OSANEBI_KV: KVNamespace
    NODE_ENV: string
}

export const env = envSchema.parse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_URL: process.env.API_URL,
});

export default env;