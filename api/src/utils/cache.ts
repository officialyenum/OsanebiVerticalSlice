import { KVNamespace, KVNamespaceGetOptions, KVNamespaceListResult } from '@cloudflare/workers-types';

export interface CacheOptions {
    ttl?: number; // seconds
}

export async function cacheList<T>(
    kv: KVNamespace
): Promise<KVNamespaceListResult<T, string>> {
    return await kv.list<T>();
}

export async function cacheGet<T>(
    kv: KVNamespace,
    key: string,
    type: KVNamespaceGetOptions<'json'>
): Promise<T | null> {
    return await kv.get<T>(key, type);
}

export async function cacheSet<T>(
    kv: KVNamespace,
    key: string,
    value: T,
    options?: CacheOptions
): Promise<void> {
    const expirationTtl = options?.ttl ?? 3600;
    if (!Number.isInteger(expirationTtl) || expirationTtl < 60) {
        throw new Error('KV expiration TTL must be an integer of at least 60 seconds');
    }

    await kv.put(key, JSON.stringify(value), {
        expirationTtl,
    });
}

export async function cacheDelete(kv: KVNamespace, key: string): Promise<void> {
    await kv.delete(key);
}

export async function cacheDeleteByPrefix(kv: KVNamespace, prefix: string): Promise<void> {
    let cursor: string | undefined;

    do {
        const result = await kv.list({ prefix, cursor });
        await Promise.all(result.keys.map(({ name }) => kv.delete(name)));
        cursor = result.list_complete ? undefined : result.cursor;
    } while (cursor);
}