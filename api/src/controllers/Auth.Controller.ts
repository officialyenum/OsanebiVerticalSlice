import { Context } from 'hono';
import { setCookie, deleteCookie } from 'hono/cookie';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { AuthDTO } from '@api/types/dto.type';
import { HonoContext } from '@api/types/bindings.type';
import { UnauthorizedError } from '@api/utils/errors';
import { isAllowedRequestOrigin } from '@api/utils/security';

/**
 * AuthController - Handle authentication requests
 */
export class AuthController {
    constructor(private authService: IAuthService) { }

    /**
     * POST /auth/login
     */
    async login(c: Context<HonoContext>): Promise<any> {
        this.assertTrustedOrigin(c);
        const body = await c.req.json();

        const data: AuthDTO.LoginRequest = {
            email: body.email,
            password: body.password,
        };

        console.log("login Controller")
        console.log(data)

        const result = await this.authService.login(data);
        this.setAuthCookie(c, result.token, result.expiresIn);
        return c.json(result);
    }

    /**
     * POST /auth/register
     */
    async register(c: Context<HonoContext>): Promise<any> {
        this.assertTrustedOrigin(c);
        const body = await c.req.json();

        const data: AuthDTO.RegisterRequest = {
            email: body.email,
            password: body.password,
            name: body.name,
        };

        const result = await this.authService.register(data);
        this.setAuthCookie(c, result.token, result.expiresIn);
        return c.json({ user: result.user, expiresIn: result.expiresIn }, { status: 201 });
    }

    /**
     * POST /auth/logout
     */
    async logout(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) {
            throw new UnauthorizedError('Authentication required');
        }

        await this.authService.logout(userId);
        const secure = new URL(c.req.url).protocol === 'https:';
        deleteCookie(c, 'token', {
            path: '/',
            httpOnly: true,
            secure,
            sameSite: secure ? 'None' : 'Lax',
        });
        return c.json({ message: 'Logged out' });
    }

    /**
     * GET /auth/me
     */
    async getMe(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) {
            throw new UnauthorizedError('Authentication required');
        }
        return c.json(await this.authService.getMe(userId));
    }

    private setAuthCookie(c: Context<HonoContext>, token: string, expiresIn: number): void {
        const secure = new URL(c.req.url).protocol === 'https:';
        setCookie(c, 'token', token, {
            httpOnly: true,
            secure,
            sameSite: secure ? 'None' : 'Lax',
            path: '/',
            maxAge: expiresIn,
        });
    }

    private assertTrustedOrigin(c: Context<HonoContext>): void {
        const origin = c.req.header('Origin');
        if (origin && !isAllowedRequestOrigin(origin, c.req.url)) {
            throw new UnauthorizedError('Untrusted request origin');
        }
    }
}