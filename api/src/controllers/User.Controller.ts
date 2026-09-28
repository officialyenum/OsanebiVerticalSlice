import { Context } from 'hono';
import { IUserService } from '@api/services/interfaces/IUser.Service';
import { UserDTO } from '@api/types/dto.type';
import { HonoContext } from '@api/types/bindings.type';
import { ValidationError, UnauthorizedError } from '@api/utils/errors';
import { ErrorSchema } from '@api/dto/error.dto';
import { UsersResponseSchema, UserResponseSchema } from '@api/dto/user.dto';

/**
 * UserController - Handle HTTP requests/responses
 * 
 * Single Responsibility: Translate HTTP to service calls
 * No business logic here - that's in the service
 */
export class UserController {
    constructor(private userService: IUserService) { }

    /**
     * GET /users
     */
    async listUsers(c: Context<HonoContext>): Promise<any> {
        const users = await this.userService.getAllUsers();
        return c.json({ data: users });
    }

    /**
     * GET /users/:id
     */
    async getUser(c: Context<HonoContext>): Promise<any> {
        const { id } = c.req.param();

        if (!id) {
            throw new ValidationError('User ID required');
        }

        const user = await this.userService.getUserById(id);
        return c.json({ data: user });
    }

    /**
     * POST /users
     */
    async createUser(c: Context<HonoContext>): Promise<any> {
        const body = await c.req.json();

        const data: UserDTO.Create = {
            email: body.email,
            password: body.password,
            name: body.name,
        };

        const user = await this.userService.createUser(data);
        return c.json({ data: user }, { status: 201 });
    }

    /**
     * PATCH /users/:id
     */
    async updateUser(c: Context<HonoContext>): Promise<any> {
        const { id } = c.req.param();
        const userId = c.get('userId');

        // Authorization: Users can only update themselves
        if (userId !== id) {
            throw new UnauthorizedError('Cannot update another user');
        }

        const body = await c.req.json();
        const data: UserDTO.Update = {
            email: body.email,
            name: body.name,
        };

        const user = await this.userService.updateUser(id, data);
        return c.json({ data: user });
    }

    /**
     * DELETE /users/:id
     */
    async deleteUser(c: Context<HonoContext>): Promise<any> {
        const { id } = c.req.param();
        const userId = c.get('userId');

        // Authorization
        if (userId !== id) {
            throw new UnauthorizedError('Cannot delete another user');
        }

        await this.userService.deleteUser(id);
        return c.json({ message: 'User deleted' });
    }
    /**
     * Seed DB /users/:id
     */
    async seedDB(c: Context<HonoContext>): Promise<any> {
        const submittedPassword = c.req.param('password');
        const expectedPassword = c.env.SEED_DB_PASSWORD ?? process.env.SEED_DB_PASSWORD ?? 'password123';

        if (submittedPassword !== expectedPassword) {
            return c.json({ ok: false, error: 'Invalid seed password' }, 401);
        }

        const resp = await this.userService.clearDb(submittedPassword);
        return c.json(resp);
    }
}