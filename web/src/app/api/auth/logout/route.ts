type LoginRequest = {
    email?: unknown
    password?: unknown
}

export async function POST(request: Request) {
    let body: LoginRequest

    try {
        body = (await request.json()) as LoginRequest
    } catch {
        return Response.json(
            {
                error: {
                    code: "BAD_REQUEST",
                    message: "Request body must be valid JSON",
                    details: {},
                },
            },
            { status: 400 },
        )
    }

    const apiUrl = process.env.API_URL

    if (!apiUrl) {
        console.error("API_URL is not configured")

        return Response.json(
            {
                error: {
                    code: "INTERNAL_ERROR",
                    message: "Authentication API is not configured",
                    details: {},
                },
            },
            { status: 500 },
        )
    }

    try {
        const response = await fetch(
            `${apiUrl.replace(/\/$/, "")}/auth/logout`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            },
        )

        const contentType = response.headers.get("content-type")

        if (!contentType?.includes("application/json")) {
            const text = await response.text()

            console.error("Auth API returned non-JSON", {
                url: `${apiUrl.replace(/\/$/, "")}/auth/login`,
                status: response.status,
                contentType,
                body: text,
            })

            return Response.json(
                {
                    error: {
                        code: "UPSTREAM_ERROR",
                        message: "Authentication API returned an invalid response",
                        details: {},
                    },
                },
                { status: 502 },
            )
        }

        const payload: unknown = await response.json()

        const headers = new Headers()

        if (
            response.ok &&
            typeof payload === "object" &&
            payload !== null &&
            "sessionId" in payload &&
            typeof payload.sessionId === "string"
        ) {
            headers.set(
                "Set-Cookie",
                `osanebi_session=${encodeURIComponent(
                    payload.sessionId,
                )}; Path=/; HttpOnly; SameSite=Lax${process.env.NODE_ENV === "production" ? "; Secure" : ""
                }`,
            )
        }

        return Response.json(payload, {
            status: response.status,
            headers,
        })
    } catch (error) {
        console.error("Unable to reach authentication API", error)

        return Response.json(
            {
                error: {
                    code: "INTERNAL_ERROR",
                    message: "Unable to reach authentication API",
                    details: {},
                },
            },
            { status: 502 },
        )
    }
}