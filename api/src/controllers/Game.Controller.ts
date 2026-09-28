import { Context } from 'hono';
import { HonoContext } from '@api/types/bindings.type';
import { IGameService } from '@api/services/interfaces/IGame.Service';
import { GameDto } from '@api/types/dto.type';
import { UnauthorizedError, ValidationError } from '@api/utils/errors';

export class GameController {
    constructor(private gameService: IGameService) { }

    async listGames(c: Context<HonoContext>): Promise<any> {
        const query = c.req.query();
        const games = await this.gameService.getAllGames({
            search: query.search,
            date: query.date,
        });
        return c.json({ data: games });
    }

    async createGame(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) throw new UnauthorizedError('Authentication required');

        const body = await c.req.json();
        const data: GameDto.Create = {
            studioId: body.studioId,
            title: body.title,
            genre: body.genre,
            platform: body.platform,
            buildVersion: body.buildVersion,
            buildBranch: body.buildBranch,
            pitchSummary: body.pitchSummary,
        };

        const game = await this.gameService.createGame(userId, data);
        return c.json({ data: game }, { status: 201 });
    }

    async updateGame(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const gameId = c.req.param('id');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!gameId) throw new ValidationError('Game ID required');

        const body = await c.req.json();
        const data: GameDto.Update = {
            title: body.title,
            genre: body.genre,
            platform: body.platform,
            buildVersion: body.buildVersion,
            buildBranch: body.buildBranch,
            pitchSummary: body.pitchSummary,
        };

        const game = await this.gameService.updateGame(userId, gameId, data);
        return c.json({ data: game });
    }

    async deleteGame(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const gameId = c.req.param('id');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!gameId) throw new ValidationError('Game ID required');

        await this.gameService.deleteGame(userId, gameId);
        return c.json({ message: 'Game deleted' });
    }
}