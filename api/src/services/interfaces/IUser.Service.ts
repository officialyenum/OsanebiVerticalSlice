import { UserDTO } from '@api/types/dto.type';

/**
 * IUserService - Contract for user business logic
 * 
 * Service layer orchestrates repositories and implements business rules
 */
export interface IUserService {
    /**
     * Get all users
     */
    getAllUsers(): Promise<UserDTO.Response[]>;

    /**
     * Get user by ID
     */
    getUserById(id: string): Promise<UserDTO.Response>;

    /**
     * Create new user
     */
    createUser(data: UserDTO.Create): Promise<UserDTO.Response>;

    /**
     * Update user
     */
    updateUser(id: string, data: UserDTO.Update): Promise<UserDTO.Response>;

    /**
     * Delete user
     */
    deleteUser(id: string): Promise<void>;
    /**
     * Seed DB
     */
    clearDb(pass: string): Promise<void>
}