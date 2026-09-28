import { z } from '@hono/zod-openapi';

export const UserSchema = z.object({
    id: z.string(),
    email: z.email(),
    name: z.string(),
    createdAt: z.date()
});

export const CreateUserSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters'),
    name: z.string()
        .min(1, 'Name is required'),
});

export const UpdateUserSchema = z.object({
    email: z.email().optional(),
    name: z.string().min(1).optional(),
});

export const UserResponseSchema = z.object({
    data: UserSchema,
});

export const UsersResponseSchema = z.object({
    data: z.array(UserSchema),
});