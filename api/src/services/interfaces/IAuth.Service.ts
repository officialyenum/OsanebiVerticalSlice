import { AuthDTO } from '@api/types/dto.type';

export interface IAuthService {
    login(data: AuthDTO.LoginRequest): Promise<AuthDTO.SessionResult>;
    register(data: AuthDTO.RegisterRequest): Promise<AuthDTO.SessionResult>;
    logout(userId: string): Promise<void>;
    validateSession(token: string): Promise<string>;
    getMe(userId: string): Promise<AuthDTO.MeResponse>;
}