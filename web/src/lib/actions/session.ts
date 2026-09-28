'use server'
import { getApiBaseUrl, getAuthToken } from "@/util/auth"
import { GameResponse, SessionResponse, SessionResponseList } from "../type/responses"

export async function getSessionsOwnedAction() {
    // Create a new game
    const apiUrl = getApiBaseUrl()
    if (!apiUrl) {
        console.error("API_URL is not configured")
        return { ok: false, error: "Authentication API is not configured" }
    }

    try {
        const token = await getAuthToken();
        if (!token) return {
            ok: false,
            error: "Not Logged In",
        }
        const response = await fetch(`${apiUrl.replace(/\/$/, "")}/sessions`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const contentType = response.headers.get("content-type")
        if (!contentType?.includes("application/json")) {
            const text = await response.text()
            console.error("Auth API returned non-JSON", {
                url: `${apiUrl.replace(/\/$/, "")}/sessions`,
                status: response.status,
                contentType,
                body: text,
            })
            return {
                ok: false,
                error: "Authentication API returned an invalid response",
            }
        }


        const payload: { data: SessionResponseList } = await response.json();
        if (
            !response.ok ||
            typeof payload !== "object" ||
            payload === null
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


        return { ok: true, data: payload.data }
    } catch (error) {
        console.error("Unable to reach authentication API", error)
        return {
            ok: false,
            error: "Unable to reach authentication API",
        }
    }
}

export async function getSessionsByGameAction(gameId: string) {
    // Create a new game
    const apiUrl = getApiBaseUrl()
    if (!apiUrl) {
        console.error("API_URL is not configured")
        return { ok: false, error: "Authentication API is not configured" }
    }

    try {
        const token = await getAuthToken();
        if (!token) return {
            ok: false,
            error: "Not Logged In",
        }
        const response = await fetch(`${apiUrl.replace(/\/$/, "")}/${gameId}/sessions`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const contentType = response.headers.get("content-type")
        if (!contentType?.includes("application/json")) {
            const text = await response.text()
            console.error("Auth API returned non-JSON", {
                url: `${apiUrl.replace(/\/$/, "")}/${gameId}/sessions`,
                status: response.status,
                contentType,
                body: text,
            })
            return {
                ok: false,
                error: "Authentication API returned an invalid response",
            }
        }


        const payload: { data: SessionResponseList } = await response.json();
        if (
            !response.ok ||
            typeof payload !== "object" ||
            payload === null
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


        return { ok: true, data: payload.data }
    } catch (error) {
        console.error("Unable to reach authentication API", error)
        return {
            ok: false,
            error: "Unable to reach authentication API",
        }
    }
}
export async function createSessionAction(formData: FormData) {
    // Create a new game
    const apiUrl = getApiBaseUrl()
    if (!apiUrl) {
        console.error("API_URL is not configured")
        return { ok: false, error: "Authentication API is not configured" }
    }

    try {
        const token = await getAuthToken();
        if (!token) return {
            ok: false,
            error: "Not Logged In",
        }
        const response = await fetch(`${apiUrl.replace(/\/$/, "")}/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
        })

        const contentType = response.headers.get("content-type")
        if (!contentType?.includes("application/json")) {
            const text = await response.text()
            console.error("Auth API returned non-JSON", {
                url: `${apiUrl.replace(/\/$/, "")}/games`,
                status: response.status,
                contentType,
                body: text,
            })
            return {
                ok: false,
                error: "Authentication API returned an invalid response",
            }
        }


        const payload: GameResponse = await response.json();
        if (
            !response.ok ||
            typeof payload !== "object" ||
            payload === null
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


        return { ok: true, ...payload }
    } catch (error) {
        console.error("Unable to reach authentication API", error)
        return {
            ok: false,
            error: "Unable to reach authentication API",
        }
    }
}