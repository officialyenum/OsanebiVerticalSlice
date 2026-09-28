import { Feedback } from "./models";

/**
 * PARAMETERS
 */


export type FeedbackParam = {
    sessionId: string;
    initialFeedback: Feedback[];
}