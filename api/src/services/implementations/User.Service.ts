import { IUserRepository } from '@api/repositories/interfaces/IUser.Respository';
import { IUserService } from '@api/services/interfaces/IUser.Service';
import { User } from '@api/entities/User.Entity';
import { UserDTO } from '@api/types/dto.type';
import { ValidationError } from '@api/utils/errors';
import { validateEmail, hashPassword } from '@api/utils/security';
import { KVNamespace } from '@cloudflare/workers-types';
import { cacheDeleteByPrefix, cacheGet, cacheSet } from '@api/utils/cache';

/**
 * UserService - Business logic for user operations
 * 
 * Single Responsibility: Implement user business rules
 * Dependency Inversion: Depends on IUserRepository, not concrete Prisma
 */
export class UserService implements IUserService {
    private static readonly CACHE_PREFIX = 'users:';
    private static readonly CACHE_TTL_SECONDS = 300;

    constructor(
        private userRepository: IUserRepository,
        private cache: KVNamespace,
    ) { }

    async getAllUsers(): Promise<UserDTO.Response[]> {
        const cacheKey = `${UserService.CACHE_PREFIX}list`;
        const cached = await cacheGet<UserDTO.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const users = await this.userRepository.findAll();
        const response = users.map((u) => u.toDTO());
        await cacheSet(this.cache, cacheKey, response, { ttl: UserService.CACHE_TTL_SECONDS });
        return response;
    }

    async getUserById(id: string): Promise<UserDTO.Response> {
        const cacheKey = `${UserService.CACHE_PREFIX}item:${id}`;
        const cached = await cacheGet<UserDTO.Response>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new ValidationError('User not found');
        }
        const response = user.toDTO();
        await cacheSet(this.cache, cacheKey, response, { ttl: UserService.CACHE_TTL_SECONDS });
        return response;
    }

    async createUser(data: UserDTO.Create): Promise<UserDTO.Response> {
        // Business rule: Validate input
        this.validateCreateUserInput(data);

        // Business rule: Hash password
        const hashedPassword = await hashPassword(data.password);

        // Business rule: Create entity
        const user = new User(
            this.generateId(),
            data.email,
            hashedPassword,
            data.name ?? ''
        );

        // Persist via repository
        const created = await this.userRepository.create(user);
        await this.invalidateCache();
        return created.toDTO();
    }

    async updateUser(
        id: string,
        data: UserDTO.Update
    ): Promise<UserDTO.Response> {
        // Fetch existing user
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new ValidationError('User not found');
        }

        // Apply business rules for updates
        if (data.email && data.email !== user.email) {
            validateEmail(data.email);
            const exists = await this.userRepository.emailExists(data.email);
            if (exists) {
                throw new ValidationError('Email already in use');
            }
        }

        // Update entity
        const updated = await this.userRepository.update(id, data);
        await this.invalidateCache();
        return updated.toDTO();
    }

    async deleteUser(id: string): Promise<void> {
        // Could add business rules here (e.g., check permissions)
        await this.userRepository.delete(id);
        await this.invalidateCache();
    }

    async clearDb(pass: string): Promise<void> {
        // Could add business rules here (e.g., check permissions)
        const result = await this.userRepository.clearDb(pass);
        await this.invalidateCache();
        return result;
    }

    private validateCreateUserInput(data: UserDTO.Create): void {
        if (!data.email || !data.password) {
            throw new ValidationError('Email and password required');
        }

        validateEmail(data.email);

        if (data.password.length < 8) {
            throw new ValidationError('Password must be at least 8 characters');
        }
    }

    private generateId(): string {
        return `usr_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }

    private async invalidateCache(): Promise<void> {
        await Promise.all([
            cacheDeleteByPrefix(this.cache, 'users:'),
            cacheDeleteByPrefix(this.cache, 'games:'),
            cacheDeleteByPrefix(this.cache, 'sessions:'),
            cacheDeleteByPrefix(this.cache, 'reports:'),
        ]);
    }
}