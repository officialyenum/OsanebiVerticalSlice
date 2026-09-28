import { GameDto } from '@api/types/dto.type';

export interface IGameService {
    getAllGames(filters?: GameDto.ListFilters): Promise<GameDto.Response[]>;
    createGame(userId: string, data: GameDto.Create): Promise<GameDto.Response>;
    updateGame(userId: string, gameId: string, data: GameDto.Update): Promise<GameDto.Response>;
    deleteGame(userId: string, gameId: string): Promise<void>;
}