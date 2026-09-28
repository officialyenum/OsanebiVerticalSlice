import { Report } from '@api/entities/Report.Entity';
import { PrismaClient, ReportType, UserRole } from '@api/generated/prisma/client';
import { ReportDto } from '@api/types/dto.type';
import { ForbiddenError, NotFoundError } from '@api/utils/errors';
import { IReportRepository } from '../interfaces/IReport.Repository';

export class PrismaReportRepository implements IReportRepository {
    constructor(private prisma: PrismaClient) { }

    async findVisibleToUser(userId: string, filters: ReportDto.ListFilters = {}): Promise<Report[]> {
        const visibility = await this.visibilityForUser(userId);
        const reports = await this.prisma.report.findMany({
            where: {
                ...visibility,
                sessionId: filters.sessionId,
                type: filters.type as ReportType | undefined,
            },
            orderBy: { createdAt: 'desc' },
        });
        return reports.map((report) => this.toDomain(report));
    }

    async findByIdVisibleToUser(userId: string, reportId: string): Promise<Report> {
        const visibility = await this.visibilityForUser(userId);
        const report = await this.prisma.report.findFirst({
            where: { id: reportId, ...visibility },
        });
        if (!report) throw new NotFoundError(`Report with id ${reportId} not found`);
        return this.toDomain(report);
    }

    async createForOwner(userId: string, data: ReportDto.Create, reportId: string): Promise<Report> {
        await this.assertOwnedSession(userId, data.sessionId);
        const report = await this.prisma.report.create({
            data: {
                id: reportId,
                sessionId: data.sessionId,
                type: data.type as ReportType,
                content: data.content,
            },
        });
        return this.toDomain(report);
    }

    async updateForOwner(userId: string, reportId: string, data: ReportDto.Update): Promise<Report> {
        const report = await this.prisma.report.findFirst({
            where: { id: reportId, session: { game: { studio: { ownerUserId: userId } } } },
        });
        if (!report) throw new NotFoundError(`Report with id ${reportId} not found`);

        const updated = await this.prisma.report.update({
            where: { id: reportId },
            data: { type: data.type as ReportType | undefined, content: data.content },
        });
        return this.toDomain(updated);
    }

    async deleteForOwner(userId: string, reportId: string): Promise<void> {
        const report = await this.prisma.report.findFirst({
            where: { id: reportId, session: { game: { studio: { ownerUserId: userId } } } },
            select: { id: true },
        });
        if (!report) throw new NotFoundError(`Report with id ${reportId} not found`);
        await this.prisma.report.delete({ where: { id: reportId } });
    }

    private async visibilityForUser(userId: string) {
        const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { role: true } });
        if (!user) return { id: '__no_reports__' };
        if (user.role === UserRole.studio) {
            return { session: { game: { studio: { ownerUserId: userId } } } };
        }
        if (user.role === UserRole.playtester) {
            return { session: { playtesters: { some: { userId } } } };
        }
        return {
            OR: [
                { session: { game: { studio: { ownerUserId: userId } } } },
                { session: { playtesters: { some: { userId } } } },
            ],
        };
    }

    private async assertOwnedSession(userId: string, sessionId: string): Promise<void> {
        const session = await this.prisma.session.findFirst({
            where: { id: sessionId, game: { studio: { ownerUserId: userId } } },
            select: { id: true },
        });
        if (!session) throw new ForbiddenError('You can only manage reports for sessions tied to games you own');
    }

    private toDomain(raw: any): Report {
        return new Report(raw.id, raw.sessionId, raw.type, raw.content, raw.createdAt);
    }
}