import { TaskPriority, TaskSource, TaskStatus } from '@api/generated/prisma/enums';
import type { Task as TaskModel } from '@api/generated/prisma/browser';

export class TaskEntity implements TaskModel {
    id: string;
    gameId: string | null;
    sessionId: string | null;
    title: string;
    description: string | null;
    priority: TaskPriority;
    status: TaskStatus;
    source: TaskSource;
    createdAt: Date;

    constructor(
        id: string,
        title: string,
        priority: TaskPriority,
        source: TaskSource,
        gameId: string | null = null,
        sessionId: string | null = null,
        description: string | null = null,
        status: TaskStatus = TaskStatus.open,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.gameId = gameId;
        this.sessionId = sessionId;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.source = source;
        this.createdAt = createdAt;
    }

    complete(): void {
        this.status = TaskStatus.done;
    }
}