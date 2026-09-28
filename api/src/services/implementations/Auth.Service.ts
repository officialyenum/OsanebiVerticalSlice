import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { IUserRepository } from '@api/repositories/interfaces/IUser.Respository';
import { AuthDTO, UserDTO } from '@api/types/dto.type';
import { ConflictError, UnauthorizedError, ValidationError } from '@api/utils/errors';
import { hashPassword, validateEmail } from '@api/utils/security';
import { UserEntity } from '@api/entities/User.Entity';
import { JwtSign, JwtVerify } from '@api/middleware/auth';

const TOKEN_TTL_SECONDS = 15 * 60;
const TOKEN_TTL_MILLISECONDS = TOKEN_TTL_SECONDS * 1000;
const JWT_ISSUER = 'osanebi-api';
const JWT_AUDIENCE = 'osanebi-web';

/**
 * AuthService - Authentication business logic
 * 
 * Orchestrates user and session repositories
 * Implements auth-specific business rules
 */
export class AuthService implements IAuthService {
    constructor(
        private userRepository: IUserRepository,
        private jwtSecret: string,
    ) { }

    async login(data: AuthDTO.LoginRequest): Promise<AuthDTO.SessionResult> {
        if (new TextEncoder().encode(data.password).length > 72) {
            throw new UnauthorizedError('Invalid credentials');
        }
        const email = data.email.trim().toLowerCase();
        const user = await this.userRepository.findByEmail(email);
        if (!user || !(await user.verifyPassword(data.password))) {
            throw new UnauthorizedError('Invalid credentials');
        }

        console.log("login service")
        console.log(data)
        const token = await this.createToken(user.id, user.tokenVersion);
        return {
            token,
            user: user.toDTO(),
            expiresIn: TOKEN_TTL_SECONDS,
        };
    }

    async register(data: AuthDTO.RegisterRequest): Promise<AuthDTO.SessionResult> {
        const email = data.email.trim().toLowerCase();
        const name = data.name?.trim();
        try {
            validateEmail(email);
        } catch {
            throw new ValidationError('Invalid email address');
        }
        if (!name) {
            throw new ValidationError('Name is required');
        }
        if (new TextEncoder().encode(data.password).length > 72) {
            throw new ValidationError('Password must be at most 72 bytes');
        }
        const hashedPassword = await hashPassword(data.password);
        let user: UserEntity;
        try {
            user = await this.userRepository.create(new UserEntity(
                `usr_${crypto.randomUUID()}`,
                email,
                hashedPassword,
                name,
            ));
        } catch (error) {
            if (error instanceof ConflictError) {
                throw new ConflictError('Email already registered');
            }
            throw error;
        }

        const token = await this.createToken(user.id, user.tokenVersion);
        return {
            token,
            user: user.toDTO(),
            expiresIn: TOKEN_TTL_SECONDS,
        };
    }

    async logout(userId: string): Promise<void> {
        await this.userRepository.incrementTokenVersion(userId);
    }

    async validateSession(token: string): Promise<string> {
        if (!this.jwtSecret || this.jwtSecret.length < 32) {
            throw new Error('JWT_SECRET must be configured with at least 32 characters');
        }

        let payload;
        try {
            payload = await JwtVerify(token, this.jwtSecret);
        } catch {
            throw new UnauthorizedError('Invalid or expired session');
        }

        const userId = typeof payload.sub === 'string' ? payload.sub : undefined;
        const tokenVersion = typeof payload.ver === 'number' ? payload.ver : undefined;
        if (
            !userId ||
            tokenVersion === undefined ||
            typeof payload.exp !== 'number' ||
            payload.exp <= Math.floor(Date.now() / 1000) ||
            payload.iss !== JWT_ISSUER ||
            payload.aud !== JWT_AUDIENCE
        ) {
            throw new UnauthorizedError('Invalid or expired session');
        }

        const user = await this.userRepository.findById(userId);
        if (!user || user.tokenVersion !== tokenVersion) {
            throw new UnauthorizedError('Invalid or expired session');
        }

        return userId;
    }

    async getMe(userId: string): Promise<AuthDTO.MeResponse> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new UnauthorizedError('Invalid or expired session');
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
    }

    private async createToken(userId: string, tokenVersion: number): Promise<string> {
        if (!this.jwtSecret || this.jwtSecret.length < 32) {
            throw new Error('JWT_SECRET must be configured with at least 32 characters');
        }
        return JwtSign(userId, tokenVersion, new Date(Date.now() + TOKEN_TTL_MILLISECONDS), this.jwtSecret, JWT_ISSUER, JWT_AUDIENCE);
    }
}