import { GameEntity } from '@api/entities/Game.Entity';
import { IGameRepository } from '@api/repositories/interfaces/IGame.Repository';
import { IGameService } from '@api/services/interfaces/IGame.Service';
import { GameDto } from '@api/types/dto.type';
import { ValidationError } from '@api/utils/errors';
import { KVNamespace } from '@cloudflare/workers-types';
import { cacheDeleteByPrefix, cacheGet, cacheSet } from '@api/utils/cache';

export class GameService implements IGameService {
    private static readonly CACHE_PREFIX = 'games:';
    private static readonly CACHE_TTL_SECONDS = 300;

    constructor(
        private gameRepository: IGameRepository,
        private cache: KVNamespace,
    ) { }

    async getAllGames(filters?: GameDto.ListFilters): Promise<GameDto.Response[]> {
        const cacheKey = `${GameService.CACHE_PREFIX}list:${filters?.search ?? '*'}:${filters?.date ?? '*'}`;
        const cached = await cacheGet<GameDto.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const games = await this.gameRepository.findAll(filters);
        const response = games.map((game) => this.toResponse(game));
        await cacheSet(this.cache, cacheKey, response, { ttl: GameService.CACHE_TTL_SECONDS });
        return response;
    }

    async createGame(userId: string, data: GameDto.Create): Promise<GameDto.Response> {
        if (!data.studioId || !data.title) {
            throw new ValidationError('Studio ID and game title are required');
        }

        const game = await this.gameRepository.createForOwner(
            userId,
            data,
            this.generateId(),
        );
        await this.invalidateCache();
        return this.toResponse(game);
    }

    async updateGame(
        userId: string,
        gameId: string,
        data: GameDto.Update,
    ): Promise<GameDto.Response> {
        if (Object.keys(data).length === 0) {
            throw new ValidationError('At least one game field is required');
        }

        const game = await this.gameRepository.updateForOwner(userId, gameId, data);
        await this.invalidateCache();
        return this.toResponse(game);
    }

    async deleteGame(userId: string, gameId: string): Promise<void> {
        await this.gameRepository.deleteForOwner(userId, gameId);
        await this.invalidateCache();
    }

    private toResponse(game: GameEntity): GameDto.Response {
        return {
            id: game.id,
            title: game.title,
            genre: game.genre,
            createdAt: game.createdAt.toISOString(),
        };
    }

    private generateId(): string {
        return `game_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }

    private async invalidateCache(): Promise<void> {
        await Promise.all([
            cacheDeleteByPrefix(this.cache, GameService.CACHE_PREFIX),
            cacheDeleteByPrefix(this.cache, 'sessions:'),
            cacheDeleteByPrefix(this.cache, 'reports:'),
        ]);
    }
}