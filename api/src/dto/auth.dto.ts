import { z } from 'zod';

export const LoginRequestSchema = z.object({
    email: z.email({
        pattern: z.regexes.rfc5322Email,
        error: 'Invalid email address',
    }),

    password: z.string()
        .min(8, 'Password must be at least 8 characters'),
});

export const RegisterRequestSchema = z.object({
    email: z.email('Invalid email address'),

    password: z.string()
        .min(8, 'Password must be at least 8 characters'),

    name: z.string()
        .min(1, 'Name is required'),
});

export const RegisterProdRequestSchema = z.object({
    email: z.email('Invalid email address'),

    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/,
            'Password must include an uppercase letter, a number, and a special character',
        ),

    name: z.string()
        .min(1, 'Name is required'),
});

export const LoginResponseSchema = z.object({
    user: z.object({ id: z.string(), email: z.string(), name: z.string() }),
    expiresIn: z.number(),
});

export const RegisterResponseSchema = z.object({
    user: z.object({ id: z.string(), email: z.string(), name: z.string() }),
    expiresIn: z.number(),
});

export const LogoutResponseSchema = z.object({
    message: z.string(),
});

export const MeResponseSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    role: z.string(),
});