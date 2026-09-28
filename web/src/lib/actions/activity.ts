'use server';

import { getApiBaseUrl, getAuthToken } from '@/util/auth';
import type { EventResponse, FeedbackResponse } from '@/lib/type/responses';

type ListResult<T> = { ok: true; data: T[] } | { ok: false; error: string };

async function getAuthenticatedList<T>(path: string): Promise<ListResult<T>> {
    const apiUrl = getApiBaseUrl();
    if (!apiUrl) return { ok: false, error: 'API is not configured' };

    const token = await getAuthToken();
    if (!token) return { ok: false, error: 'Not logged in' };

    try {
        const response = await fetch(`${apiUrl.replace(/\/$/, '')}${path}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
        });
        const payload = await response.json() as { data?: T[]; error?: { message?: string } };
        if (!response.ok || !Array.isArray(payload.data)) {
            return { ok: false, error: payload.error?.message ?? 'Activity could not be loaded' };
        }
        return { ok: true, data: payload.data };
    } catch {
        return { ok: false, error: 'Unable to reach the API' };
    }
}

export async function getMyFeedbackAction() {
    return getAuthenticatedList<FeedbackResponse>('/feedbacks');
}

export async function getVisibleEventsAction() {
    return getAuthenticatedList<EventResponse>('/events');
}