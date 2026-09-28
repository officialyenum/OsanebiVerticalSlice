import { Context, MiddlewareHandler, Next } from 'hono';
import { UnauthorizedError } from '@api/utils/errors';
import { getCookie } from 'hono/cookie';
import { HonoContext } from '@api/types/bindings.type';
import { sign, verify } from 'hono/jwt';
import { JWTPayload } from 'hono/utils/jwt/types';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { isAllowedRequestOrigin } from '@api/utils/security';

/**
 * Authentication Middleware
 * Validates session and extracts user info
 */

export function authMiddleware(authService: IAuthService): MiddlewareHandler<HonoContext> {
    return async (c: Context<HonoContext>, next: Next) => {
        const authHeader = c.req.header('Authorization');
        const token = authHeader
            ? (authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined)
            : getCookie(c, 'token');
        if (!token) {
            throw new UnauthorizedError('Authentication required');
        }

        if (!authHeader && !['GET', 'HEAD', 'OPTIONS'].includes(c.req.method)) {
            const origin = c.req.header('Origin');
            if (!origin || !isAllowedRequestOrigin(origin, c.req.url)) {
                throw new UnauthorizedError('Untrusted request origin');
            }
        }

        const userId = await authService.validateSession(token);
        c.set('token', token);
        c.set('userId', userId);
        await next();
    };
}

/**
 * 
 * JWT Section Starts
 * 
 */
export async function JwtSign(
    userId: string,
    tokenVersion: number,
    expiresAt: Date,
    secret: string,
    issuer: string,
    audience: string,
): Promise<string> {
    const payload = {
        sub: userId,
        ver: tokenVersion,
        exp: Math.floor(expiresAt.getTime() / 1000),
        iat: Math.floor(Date.now() / 1000),
        iss: issuer,
        aud: audience,
    };

    return await sign(payload, secret);
}

export async function JwtVerify(token: string, secret: string): Promise<JWTPayload> {
    const decodedPayload = await verify(token, secret, "HS256");
    return decodedPayload;
}

/**
 * 
 * JWT Section Ends
 * 
 */