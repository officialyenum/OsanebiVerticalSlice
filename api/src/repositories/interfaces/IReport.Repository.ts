import { Report } from '@api/entities/Report.Entity';
import { ReportDto } from '@api/types/dto.type';

export interface IReportRepository {
    findVisibleToUser(userId: string, filters?: ReportDto.ListFilters): Promise<Report[]>;
    findByIdVisibleToUser(userId: string, reportId: string): Promise<Report>;
    createForOwner(userId: string, data: ReportDto.Create, reportId: string): Promise<Report>;
    updateForOwner(userId: string, reportId: string, data: ReportDto.Update): Promise<Report>;
    deleteForOwner(userId: string, reportId: string): Promise<void>;
}