import bcrypt from "bcryptjs";
import { z } from "zod";

export const TRUSTED_WEB_ORIGINS = [
    'http://localhost:3000',
    'https://web.oponechukwuyenum.workers.dev',
] as const;

export const isTrustedOrigin = (origin: string): boolean =>
    TRUSTED_WEB_ORIGINS.includes(origin as (typeof TRUSTED_WEB_ORIGINS)[number]);

export const isAllowedRequestOrigin = (origin: string, requestUrl: string): boolean =>
    origin === new URL(requestUrl).origin || isTrustedOrigin(origin);


export const validateEmail = (email: string) => {
    return z.email().parse(email);
}

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const verifyPassword = async (password: string, hashed: string) => {
    return await bcrypt.compare(password, hashed);
}