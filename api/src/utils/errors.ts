import { ContentfulStatusCode } from "hono/utils/http-status";

// Custom error types for dependency inversion
export enum ErrorCode {
    NOT_FOUND = 'NOT_FOUND',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    BAD_REQUEST = 'BAD_REQUEST',
    CONFLICT = 'CONFLICT',
    INTERNAL_ERROR = 'INTERNAL_ERROR',
    VALIDATION_ERROR = 'VALIDATION_ERROR',
}


export type ErrorDetails = Record<string, unknown>;

export class AppError extends Error {
    constructor(
        public code: ErrorCode,
        public message: string,
        public statusCode: ContentfulStatusCode,
        public details?: ErrorDetails,
    ) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = new.target.name;
    }
}

export class NotFoundError extends AppError {
    constructor(message: string, details?: ErrorDetails) {
        super(ErrorCode.NOT_FOUND, message, 404, details);
    }
}

export class ConflictError extends AppError {
    constructor(message: string, details?: ErrorDetails) {
        super(ErrorCode.CONFLICT, message, 409, details);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message: string = 'Unauthorized', details?: ErrorDetails) {
        super(ErrorCode.UNAUTHORIZED, message, 401, details);
    }
}

export class ForbiddenError extends AppError {
    constructor(message: string = 'Forbidden', details?: ErrorDetails) {
        super(ErrorCode.FORBIDDEN, message, 403, details);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: ErrorDetails) {
        super(ErrorCode.VALIDATION_ERROR, message, 400, details);
    }
}