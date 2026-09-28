import { ReportEntity } from '@api/entities/Report.Entity';
import { ReportDto } from '@api/types/dto.type';

export interface IReportRepository {
    findVisibleToUser(userId: string, filters?: ReportDto.ListFilters): Promise<ReportEntity[]>;
    findByIdVisibleToUser(userId: string, reportId: string): Promise<ReportEntity>;
    createForOwner(userId: string, data: ReportDto.Create, reportId: string): Promise<ReportEntity>;
    updateForOwner(userId: string, reportId: string, data: ReportDto.Update): Promise<ReportEntity>;
    deleteForOwner(userId: string, reportId: string): Promise<void>;
}