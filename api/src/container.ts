
import { Bindings } from '@api/types/bindings.type';
import { PrismaClient } from './generated/prisma/client';

// Repositories
import { IUserRepository } from '@api/repositories/interfaces/IUser.Respository';
import { PrismaUserRepository } from '@api/repositories/implementations/PrismaUser.Repository';
import { ISessionRepository } from '@api/repositories/interfaces/ISession.Repository';
import { PrismaSessionRepository } from '@api/repositories/implementations/PrismaSession.Repository';
import { IGameRepository } from '@api/repositories/interfaces/IGame.Repository';
import { PrismaGameRepository } from '@api/repositories/implementations/PrismaGame.Repository';
import { IReportRepository } from '@api/repositories/interfaces/IReport.Repository';
import { PrismaReportRepository } from '@api/repositories/implementations/PrismaReport.Repository';

// Services
import { IUserService } from '@api/services/interfaces/IUser.Service';
import { UserService } from '@api/services/implementations/User.Service';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { AuthService } from '@api/services/implementations/Auth.Service';
import { ISessionService } from '@api/services/interfaces/ISession.Service';
import { SessionService } from '@api/services/implementations/Session.Service';
import { IGameService } from '@api/services/interfaces/IGame.Service';
import { GameService } from '@api/services/implementations/Game.Service';
import { IReportService } from '@api/services/interfaces/IReport.Service';
import { ReportService } from '@api/services/implementations/Report.Service';

// Controllers
import { UserController } from '@api/controllers/User.Controller';
import { AuthController } from '@api/controllers/Auth.Controller';
import { SessionController } from '@api/controllers/Session.Controller';
import { GameController } from '@api/controllers/Game.Controller';
import { ReportController } from '@api/controllers/Report.Controller';

/**
 * Service Container (Dependency Injection)
 * 
 * Manages object creation and dependency injection
 * Benefit: Easy to swap implementations, testable with mocks
 */
export class Container {
    private userRepository: IUserRepository;
    private sessionRepository: ISessionRepository;
    private gameRepository: IGameRepository;
    private reportRepository: IReportRepository;
    
    private userService: IUserService;
    private authService: IAuthService;
    private sessionService: ISessionService;
    private gameService: IGameService;
    private reportService: IReportService;

    public userController: UserController;
    public authController: AuthController;
    public sessionController: SessionController;
    public gameController: GameController;
    public reportController: ReportController;

    constructor(bindings: Bindings, prisma: PrismaClient) {
        // Create repositories

        this.userRepository = new PrismaUserRepository(prisma);
        this.sessionRepository = new PrismaSessionRepository(prisma);
        this.gameRepository = new PrismaGameRepository(prisma);
        this.reportRepository = new PrismaReportRepository(prisma);

        // Create services (inject repositories)
        this.userService = new UserService(this.userRepository, bindings.OSANEBI_KV);
        this.authService = new AuthService(this.userRepository, bindings.JWT_SECRET);
        this.sessionService = new SessionService(this.sessionRepository, bindings.OSANEBI_KV);
        this.gameService = new GameService(this.gameRepository, bindings.OSANEBI_KV);
        this.reportService = new ReportService(this.reportRepository, bindings.OSANEBI_KV);

        // Create controllers (inject services)
        this.userController = new UserController(this.userService);
        this.authController = new AuthController(this.authService);
        this.sessionController = new SessionController(this.sessionService);
        this.gameController = new GameController(this.gameService);
        this.reportController = new ReportController(this.reportService);
    }

    // Getters for easy access
    getUserRepository(): IUserRepository {
        return this.userRepository;
    }

    getUserService(): IUserService {
        return this.userService;
    }

    getAuthService(): IAuthService {
        return this.authService;
    }
}