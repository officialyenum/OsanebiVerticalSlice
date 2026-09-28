import { Context } from 'hono';
import { HonoContext } from '@api/types/bindings.type';
import { IReportService } from '@api/services/interfaces/IReport.Service';
import { ReportDto } from '@api/types/dto.type';
import { UnauthorizedError, ValidationError } from '@api/utils/errors';

export class ReportController {
    constructor(private reportService: IReportService) { }

    async listReports(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) throw new UnauthorizedError('Authentication required');
        const query = c.req.query();
        const reports = await this.reportService.getReports(userId, {
            sessionId: query.sessionId,
            type: query.type as ReportDto.ListFilters['type'],
        });
        return c.json({ data: reports });
    }

    async getReport(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const reportId = c.req.param('id');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!reportId) throw new ValidationError('Report ID required');
        return c.json({ data: await this.reportService.getReport(userId, reportId) });
    }

    async createReport(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        if (!userId) throw new UnauthorizedError('Authentication required');
        const body = await c.req.json();
        const report = await this.reportService.createReport(userId, {
            sessionId: body.sessionId,
            type: body.type,
            content: body.content,
        });
        return c.json({ data: report }, { status: 201 });
    }

    async updateReport(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const reportId = c.req.param('id');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!reportId) throw new ValidationError('Report ID required');
        const body = await c.req.json();
        const report = await this.reportService.updateReport(userId, reportId, {
            type: body.type,
            content: body.content,
        });
        return c.json({ data: report });
    }

    async deleteReport(c: Context<HonoContext>): Promise<any> {
        const userId = c.get('userId');
        const reportId = c.req.param('id');
        if (!userId) throw new UnauthorizedError('Authentication required');
        if (!reportId) throw new ValidationError('Report ID required');
        await this.reportService.deleteReport(userId, reportId);
        return c.json({ message: 'Report deleted' });
    }
}