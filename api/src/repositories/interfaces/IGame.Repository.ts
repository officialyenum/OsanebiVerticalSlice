import { Game } from '@api/entities/Game.Entity';
import { GameDto } from '@api/types/dto.type';

export interface IGameRepository {
    findById(gameId: string): Promise<Game>;
    findAll(filters?: GameDto.ListFilters): Promise<Game[]>;
    createForOwner(userId: string, data: GameDto.Create, gameId: string): Promise<Game>;
    updateForOwner(userId: string, gameId: string, data: GameDto.Update): Promise<Game>;
    deleteForOwner(userId: string, gameId: string): Promise<void>;
}