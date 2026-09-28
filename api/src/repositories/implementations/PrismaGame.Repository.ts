import { Game } from '@api/entities/Game.Entity';
import { PrismaClient } from '@api/generated/prisma/client';
import { GameDto } from '@api/types/dto.type';
import { ConflictError, ForbiddenError, NotFoundError, ValidationError } from '@api/utils/errors';
import { IGameRepository } from '../interfaces/IGame.Repository';

export class PrismaGameRepository implements IGameRepository {
    constructor(private prisma: PrismaClient) { }

    async findById(gameId: string): Promise<Game> {
        const game = await this.prisma.game.findFirst({
            where: { id: gameId },
        });
        if (!game) {
            throw new NotFoundError('Game not Found');
        }
        return this.toDomain(game);
    };

    async findAll(filters: GameDto.ListFilters = {}): Promise<Game[]> {
        const createdAt = filters.date ? this.dateFilter(filters.date) : undefined;
        const games = await this.prisma.game.findMany({
            where: {
                title: filters.search ? { contains: filters.search } : undefined,
                createdAt,
            },
            orderBy: { createdAt: 'desc' },
        });

        return games.map((game) => this.toDomain(game));
    }

    private dateFilter(date: string): { gte: Date; lt: Date } {
        const start = new Date(`${date}T00:00:00.000Z`);
        if (Number.isNaN(start.getTime()) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            throw new ValidationError('Date filter must use YYYY-MM-DD format');
        }

        const end = new Date(start);
        end.setUTCDate(end.getUTCDate() + 1);
        return { gte: start, lt: end };
    }

    async createForOwner(
        userId: string,
        data: GameDto.Create,
        gameId: string,
    ): Promise<Game> {
        const studio = await this.prisma.studio.findFirst({
            where: { id: data.studioId, ownerUserId: userId },
        });
        if (!studio) {
            throw new ForbiddenError('You can only create games for studios you own');
        }

        const game = await this.prisma.game.create({
            data: {
                id: gameId,
                studioId: data.studioId,
                title: data.title,
                genre: data.genre,
                platform: data.platform,
                buildVersion: data.buildVersion,
                buildBranch: data.buildBranch,
                pitchSummary: data.pitchSummary,
            },
        });

        return this.toDomain(game);
    }

    async updateForOwner(
        userId: string,
        gameId: string,
        data: GameDto.Update,
    ): Promise<Game> {
        const ownedGame = await this.prisma.game.findFirst({
            where: { id: gameId, studio: { ownerUserId: userId } },
        });
        if (!ownedGame) {
            throw new NotFoundError(`Game with id ${gameId} not found`);
        }

        const game = await this.prisma.game.update({
            where: { id: gameId },
            data: {
                title: data.title,
                genre: data.genre,
                platform: data.platform,
                buildVersion: data.buildVersion,
                buildBranch: data.buildBranch,
                pitchSummary: data.pitchSummary,
            },
        });

        return this.toDomain(game);
    }

    async deleteForOwner(userId: string, gameId: string): Promise<void> {
        const ownedGame = await this.prisma.game.findFirst({
            where: { id: gameId, studio: { ownerUserId: userId } },
            select: { id: true },
        });
        if (!ownedGame) {
            throw new NotFoundError(`Game with id ${gameId} not found`);
        }

        const sessionCount = await this.prisma.session.count({
            where: { gameId },
        });
        if (sessionCount > 0) {
            throw new ConflictError(
                'Game cannot be deleted while it has linked sessions',
                { sessionCount },
            );
        }

        await this.prisma.game.delete({ where: { id: gameId } });
    }

    private toDomain(raw: any): Game {
        return new Game(
            raw.id,
            raw.studioId,
            raw.title,
            raw.genre,
            raw.platform,
            raw.buildVersion,
            raw.buildBranch,
            raw.pitchSummary,
            raw.createdAt,
        );
    }
}