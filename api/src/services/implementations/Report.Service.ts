import { ReportEntity } from '@api/entities/Report.Entity';
import { IReportRepository } from '@api/repositories/interfaces/IReport.Repository';
import { IReportService } from '@api/services/interfaces/IReport.Service';
import { ReportDto } from '@api/types/dto.type';
import { ValidationError } from '@api/utils/errors';
import { KVNamespace } from '@cloudflare/workers-types';
import { cacheDeleteByPrefix, cacheGet, cacheSet } from '@api/utils/cache';

export class ReportService implements IReportService {
    private static readonly CACHE_TTL_SECONDS = 300;
    private static readonly CACHE_PREFIX = 'reports:';

    constructor(
        private reportRepository: IReportRepository,
        private cache: KVNamespace,
    ) { }

    async getReports(userId: string, filters?: ReportDto.ListFilters): Promise<ReportDto.Response[]> {
        const cacheKey = this.listCacheKey(userId, filters);
        const cached = await cacheGet<ReportDto.Response[]>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const reports = await this.reportRepository.findVisibleToUser(userId, filters);
        const response = reports.map((report) => this.toResponse(report));
        await cacheSet(this.cache, cacheKey, response, { ttl: ReportService.CACHE_TTL_SECONDS });
        return response;
    }

    async getReport(userId: string, reportId: string): Promise<ReportDto.Response> {
        if (!reportId) throw new ValidationError('Report ID required');
        const cacheKey = this.itemCacheKey(userId, reportId);
        const cached = await cacheGet<ReportDto.Response>(this.cache, cacheKey, { type: 'json' });
        if (cached) return cached;

        const response = this.toResponse(await this.reportRepository.findByIdVisibleToUser(userId, reportId));
        await cacheSet(this.cache, cacheKey, response, { ttl: ReportService.CACHE_TTL_SECONDS });
        return response;
    }

    async createReport(userId: string, data: ReportDto.Create): Promise<ReportDto.Response> {
        if (!data.sessionId || !data.type || !data.content) {
            throw new ValidationError('Session ID, report type, and content are required');
        }
        const report = await this.reportRepository.createForOwner(userId, data, this.generateId());
        await this.invalidateCache();
        return this.toResponse(report);
    }

    async updateReport(userId: string, reportId: string, data: ReportDto.Update): Promise<ReportDto.Response> {
        if (Object.keys(data).length === 0) throw new ValidationError('At least one report field is required');
        const report = await this.reportRepository.updateForOwner(userId, reportId, data);
        await this.invalidateCache();
        return this.toResponse(report);
    }

    async deleteReport(userId: string, reportId: string): Promise<void> {
        await this.reportRepository.deleteForOwner(userId, reportId);
        await this.invalidateCache();
    }

    private toResponse(report: ReportEntity): ReportDto.Response {
        return {
            id: report.id,
            sessionId: report.sessionId,
            type: report.type,
            content: report.content,
            createdAt: report.createdAt.toISOString(),
        };
    }

    private generateId(): string {
        return `report_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }

    private listCacheKey(userId: string, filters?: ReportDto.ListFilters): string {
        const sessionId = filters?.sessionId ?? '*';
        const type = filters?.type ?? '*';
        return `${ReportService.CACHE_PREFIX}list:${userId}:${sessionId}:${type}`;
    }

    private itemCacheKey(userId: string, reportId: string): string {
        return `${ReportService.CACHE_PREFIX}item:${userId}:${reportId}`;
    }

    private async invalidateCache(): Promise<void> {
        await cacheDeleteByPrefix(this.cache, ReportService.CACHE_PREFIX);
    }
}