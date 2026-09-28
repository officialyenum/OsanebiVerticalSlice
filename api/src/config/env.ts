import "dotenv/config";

export const JWT_SECRET = process.env.JWT_SECRET;
export const DATABASE_URL = process.env.DATABASE_URL;
const configuredSessionDuration = Number(process.env.SESSION_DURATION);
export const SESSION_DURATION: number =
    Number.isFinite(configuredSessionDuration) && configuredSessionDuration > 0
        ? configuredSessionDuration * 1000
        : 24 * 60 * 60 * 1000;