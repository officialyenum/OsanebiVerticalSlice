
/**
 * REQUESTS
 */
export type LoginRequest = {
    email?: unknown
    password?: unknown
}

export type RegisterRequest = {
    email?: string
    password?: string
    name: string
}

export type GameRequest = {
    id?: string
}

export type GamesFilterRequest = {
    studioId?: string
}