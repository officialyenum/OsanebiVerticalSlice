import { UserEntity } from '@api/entities/User.Entity';

export interface IUserRepository {
    /**
   * Create new user
   * @throws ConflictError if email exists
   */
    create(user: UserEntity): Promise<UserEntity>;
    /**
   * Find user by ID
   * @throws NotFoundError if user doesn't exist
   */
    findById(id: string): Promise<UserEntity | null>;
    /**
   * Find user by email
   * @returns User or null
   * @throws NotFoundError if user doesn't exist
   */
    findByEmail(email: string): Promise<UserEntity | null>;
    incrementTokenVersion(id: string): Promise<void>;
    /**
   * Find all User
   * @returns User[]
   */
    findAll(): Promise<UserEntity[]>
    /**
   * Update existing user
   * @throws NotFoundError if user doesn't exist
   */
    update(id: string, data: Partial<UserEntity>): Promise<UserEntity>;
    /**
   * Delete user
   */
    delete(id: string): Promise<void>;
    /**
     * Check if email exists
     */
    emailExists(email: string): Promise<boolean>
    /**
     * Clears DB - Development Only
     */
    clearDb(pass: string): Promise<any>
}