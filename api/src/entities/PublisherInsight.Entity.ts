import type { PublisherInsight as PublisherInsightModel } from '@api/generated/prisma/browser';

export class PublisherInsight implements PublisherInsightModel {
    id: string;
    gameId: string;
    score: number;
    rationale: string;
    recommendedNextSteps: string;
    createdAt: Date;

    constructor(
        id: string,
        gameId: string,
        score: number,
        rationale: string,
        recommendedNextSteps: string,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.gameId = gameId;
        this.score = score;
        this.rationale = rationale;
        this.recommendedNextSteps = recommendedNextSteps;
        this.createdAt = createdAt;
    }
}