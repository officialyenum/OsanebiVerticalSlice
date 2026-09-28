import { UserDTO } from '@api/types/dto.type';
import bcrypt from 'bcryptjs';
import { UserRole } from '@api/generated/prisma/enums';
import type { User as UserModel } from '@api/generated/prisma/browser';
/**
 * User Entity - Represents the core User domain model
 * Contains only business logic and validation related to users
 * 
 * Single Responsibility: Encapsulate User business rules
 */
export class User implements UserModel {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: UserRole;
    bio: string | null;
    skills: UserModel['skills'];
    studioName: string | null;
    tokenVersion: number;
    createdAt: Date;

    constructor(
        id: string,
        email: string,
        passwordHash: string,
        name: string = '',
        createdAt: Date = new Date(),
        role: UserRole = UserRole.playtester,
        bio: string | null = null,
        skills: UserModel['skills'] = null,
        studioName: string | null = null,
        tokenVersion: number = 0
    ) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.name = name;
        this.role = role;
        this.bio = bio;
        this.skills = skills;
        this.studioName = studioName;
        this.tokenVersion = tokenVersion;
        this.createdAt = createdAt;
    }

    /**
     * Domain logic: Verify password
     * Encapsulate business rule here
     */
    async verifyPassword(plainPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, this.passwordHash);
    }

    /**
     * Domain logic: Check if user can be updated
     */
    canUpdate(userId: string): boolean {
        return this.id === userId;
    }
    /**
     * Transform to DTO - what the API returns
     */
    toDTO(): UserDTO.Response {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
        };
    }
}