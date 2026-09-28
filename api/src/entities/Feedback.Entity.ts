import { FeedbackCategory, FeedbackSeverity } from '@api/generated/prisma/enums';
import type { Feedback as FeedbackModel } from '@api/generated/prisma/browser';

export class FeedbackEntity implements FeedbackModel {
    id: string;
    sessionId: string;
    authorUserId: string;
    category: FeedbackCategory;
    severity: FeedbackSeverity;
    content: string;
    tags: FeedbackModel['tags'];
    createdAt: Date;

    constructor(
        id: string,
        sessionId: string,
        authorUserId: string,
        category: FeedbackCategory,
        severity: FeedbackSeverity,
        content: string,
        tags: FeedbackModel['tags'] = null,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.sessionId = sessionId;
        this.authorUserId = authorUserId;
        this.category = category;
        this.severity = severity;
        this.content = content;
        this.tags = tags;
        this.createdAt = createdAt;
    }
}