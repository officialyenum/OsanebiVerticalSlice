import { LoginResponse } from '@/lib/type/responses';
import { SESSION_COOKIE } from '@/lib/constants';
import { cookies } from 'next/headers';

export async function setAuthToken(payload: LoginResponse) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, payload.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: payload.expiresIn,
    });
}

export async function getAuthToken(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}


export function getApiBaseUrl(): string | undefined {
    const apiUrl = process.env.API_URL;
    return apiUrl;
}