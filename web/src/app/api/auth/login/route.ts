import { loginAction } from "@/lib/actions/auth"

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
  return await loginAction(body);
}