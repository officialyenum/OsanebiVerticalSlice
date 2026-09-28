import { OpenAPIHono } from '@hono/zod-openapi';
import { HonoContext } from '@api/types/bindings.type';
import { ReportController } from '@api/controllers/Report.Controller';
import { IAuthService } from '@api/services/interfaces/IAuth.Service';
import { authMiddleware } from '@api/middleware/auth';
import { createApiRouter } from '@api/utils/api';
import { CreateReportDocRoute, DeleteReportDocRoute, GetReportDocRoute, GetReportsDocRoute, UpdateReportDocRoute } from '@api/doc/Report.doc';

export function createReportRoutes(controller: ReportController, authService: IAuthService): OpenAPIHono<HonoContext> {
    const router = createApiRouter();
    router.use('/reports', authMiddleware(authService));
    router.use('/reports/*', authMiddleware(authService));
    router.openapi(GetReportsDocRoute, (c) => controller.listReports(c));
    router.openapi(GetReportDocRoute, (c) => controller.getReport(c));
    router.openapi(CreateReportDocRoute, (c) => controller.createReport(c));
    router.openapi(UpdateReportDocRoute, (c) => controller.updateReport(c));
    router.openapi(DeleteReportDocRoute, (c) => controller.deleteReport(c));
    return router;
}