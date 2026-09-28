import { z } from '@hono/zod-openapi';

export const GameSchema = z.object({
    id: z.string(),
    studioId: z.string(),
    title: z.string(),
    genre: z.string().nullable(),
    platform: z.string().nullable(),
    buildVersion: z.string().nullable(),
    buildBranch: z.string().nullable(),
    pitchSummary: z.string().nullable(),
    createdAt: z.string(),
});

export const CreateGameSchema = z.object({
    title: z.string().min(1, "Game Title is Required"),
    genre: z.string().optional(),
    platform: z.string().optional(),
    buildVersion: z.string().optional(),
    buildBranch: z.string().optional(),
    pitchSummary: z.string().optional(),
});

export const UpdateGameSchema = z.object({
    id: z.string().min(1, "Game Id is Required"),
    title: z.string().min(1).optional(),
    genre: z.string().nullable().optional(),
    platform: z.string().nullable().optional(),
    buildVersion: z.string().nullable().optional(),
    buildBranch: z.string().nullable().optional(),
    pitchSummary: z.string().nullable().optional(),
});

export const GameResponseSchema = z.object({ data: GameSchema });
export const GamesResponseSchema = z.object({ data: z.array(GameSchema) });