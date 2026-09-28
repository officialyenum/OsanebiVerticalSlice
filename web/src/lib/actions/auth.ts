'use server'

import { getApiBaseUrl, getAuthToken, setAuthToken } from "@/util/auth"
import type { LoginRequest } from "@/lib/type/requests"
import type { CurrentUserResponse, ErrorResponse, LoginResponse } from "@/lib/type/responses"

export async function loginAction(
    data: LoginRequest,
): Promise<{ ok: true; data: LoginResponse } | { ok: false; error: string }> {
    const apiUrl = getApiBaseUrl()
    if (!apiUrl) {
        console.error("API_URL is not configured")
        return { ok: false, error: "Authentication API is not configured" }
    }

    try {
        const response = await fetch(`${apiUrl.replace(/\/$/, "")}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })

        const contentType = response.headers.get("content-type")
        if (!contentType?.includes("application/json")) {
            const text = await response.text()
            console.error("Auth API returned non-JSON", {
                url: `${apiUrl.replace(/\/$/, "")}/auth/login`,
                status: response.status,
                contentType,
                body: text,
            })
            return {
                ok: false,
                error: "Authentication API returned an invalid response",
            }
        }


        const payload: LoginResponse = await response.json();
        if (
            !response.ok ||
            typeof payload !== "object" ||
            payload === null ||
            typeof payload.token !== "string"
        ) {
            const body = payload as Partial<{ error?: { message?: string } }>
            console.log('body ', body)
            console.log('bodyResponse ', response)
            return {
                ok: false,
                error:
                    body.error && typeof body.error.message === "string"
                        ? body.error.message
                        : "Something went wrong during login.",
            }
        }
        await setAuthToken(payload);
        return { ok: true, data: payload }
    } catch (error) {
        console.error("Unable to reach authentication API", error)
        return {
            ok: false,
            error: "Unable to reach authentication API",
        }
    }
}

export async function registerAction() {
    // ...
}

export async function getCurrentUserAction(): Promise<{ ok: true; data: CurrentUserResponse } | { ok: false; error: string }> {
    const apiUrl = getApiBaseUrl()
    if (!apiUrl) {
        console.error("API_URL is not configured")
        return { ok: false, error: "Authentication API is not configured" }
    }
    const token = await getAuthToken();
    if (!token) return { ok: false, error: "Unauthorized" };

    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const contentType = response.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
        const text = await response.text()
        console.error("Auth API returned non-JSON", {
            url: `${apiUrl.replace(/\/$/, "")}/auth/login`,
            status: response.status,
            contentType,
            body: text,
        })
        return {
            ok: false,
            error: "Authentication API returned an invalid response",
        }
    }


    const payload: CurrentUserResponse = await response.json();
    if (
        !response.ok ||
        typeof payload !== "object" ||
        payload === null ||
        typeof payload.id !== "string"
    ) {
        const body = payload as Partial<{ error?: { message?: string } }>
        console.log('body ', body)
        console.log('bodyResponse ', response)
        return {
            ok: false,
            error:
                body.error && typeof body.error.message === "string"
                    ? body.error.message
                    : "Something went wrong during login.",
        }
    }

    return {
        ok: true,
        data: payload
    }
}