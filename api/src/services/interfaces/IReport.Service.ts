import { ReportDto } from '@api/types/dto.type';

export interface IReportService {
    getReports(userId: string, filters?: ReportDto.ListFilters): Promise<ReportDto.Response[]>;
    getReport(userId: string, reportId: string): Promise<ReportDto.Response>;
    createReport(userId: string, data: ReportDto.Create): Promise<ReportDto.Response>;
    updateReport(userId: string, reportId: string, data: ReportDto.Update): Promise<ReportDto.Response>;
    deleteReport(userId: string, reportId: string): Promise<void>;
}