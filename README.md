# Osanebi — Real-Time QA & Playtesting

Vertical slice: **studio creates a session → playtester submits live feedback (polled) → studio generates an AI QA summary from that feedback with Llama 3.**

```
osanebi/
├── prisma/
│   ├── schema.prisma      Full domain model (users, studios, games, sessions,
│   │                      events, feedback, reports, tasks, publisher insights)
│   └── seed.ts            Demo studio + game + live session + 2 feedback items
└── src/
    ├── app/
    │   ├── page.tsx                        Landing page
    │   ├── login/page.tsx                  Login form
    │   ├── dashboard/
    │   │   ├── layout.tsx                  Auth-gated shell + nav
    │   │   ├── page.tsx                    Session list (role-aware)
    │   │   └── sessions/[id]/page.tsx      Live session: feed, form, AI report
    │   └── api/
    │       ├── auth/login, auth/logout
    │       └── sessions/, sessions/[id]/{start,feedback,report}
    ├── components/          FeedbackFeed (polling), FeedbackForm, ReportPanel, …
    ├── lib/
    │   ├── auth.ts          Password hashing + signed cookie sessions
    │   ├── access.ts        "Can this user see this session?" check
    │   ├── llm.ts            Llama 3 client (OpenAI-compatible endpoint)
    │   └── prisma.ts
    └── middleware.ts         Redirects logged-out visitors away from /dashboard
```

## What's built vs. what's modeled

Only **User, Studio, Game, Session, Feedback, Report** have working UI/API routes — that's the slice. **Event, Task, and PublisherInsight** are in `schema.prisma` and ready to build against, but have no routes yet. See "What's next" below.

Real-time is **polling** (the session view refetches feedback every 4 seconds) rather than WebSockets — simpler to reason about and swap out later without touching the data model.

## 1. Prerequisites

- Node.js 18+
- A Postgres database. Easiest: a free [Neon](https://neon.tech) project (works with any host, not just Vercel) — create one and copy the connection string.
- For local AI: [Ollama](https://ollama.com) installed, then run `ollama pull llama3` once.

## 2. Local setup

```bash
pnpm install
cp .env.example .env
```

Edit `.env`:
- `DATABASE_URL` — your Neon (or any Postgres) connection string.
- `AUTH_SECRET` — generate one with `openssl rand -base64 32`.
- `LLM_*` — defaults already target local Ollama at `http://localhost:11434/v1`.

Push the schema and seed demo data:

```bash
pnpm run db:push
pnpm run db:seed
```

In a separate terminal, start Ollama serving Llama 3 (if not already running as a service):

```bash
ollama run llama3
```

Then start the app:

```bash
pnpm run dev
```

Open http://localhost:3000 and sign in:
- **Studio:** `studio@osanebi.dev` / `password123`
- **Playtester:** `playtester@osanebi.dev` / `password123`

Try it: log in as the playtester, submit feedback on the seeded "Fracture Point" session. Then log in as the studio, open the same session, and click **Generate summary** — it calls your local Llama 3 model over the seeded feedback plus whatever you just added.

> `pnpm run db:studio` opens Prisma Studio, a GUI to browse/edit the database directly — handy while developing.

## 3. Deploying

**Database:** your Neon project is already live — no extra step.

**AI in production:** local Ollama won't be reachable from Vercel. Point `LLM_BASE_URL` / `LLM_API_KEY` at a hosted OpenAI-compatible Llama 3 endpoint instead, e.g. [Groq](https://console.groq.com) (fast, generous free tier) or [Together.ai](https://together.ai). No code changes — just env vars.

**App (Vercel):**
1. Push this repo to GitHub.
2. [vercel.com](https://vercel.com) → Add New Project → import the repo (framework auto-detected as Next.js).
3. Add environment variables: `DATABASE_URL`, `AUTH_SECRET`, `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`.
4. Deploy. Vercel runs `pnpm run build`, which runs `prisma generate` via `postinstall`.
5. Run the schema push and seed once against the production database (from your machine, with `DATABASE_URL` pointed at prod):
   ```bash
   pnpm run db:push
   pnpm run db:seed   # optional — or create real users/studios instead
   ```

## 4. What's next (not in this slice)

- **Auth signup flow** — right now users are seeded directly; add a `/signup` route with role selection.
- **Events** (`gameplay`, `bug`, `reaction`, `system`) — the schema supports structured telemetry from the Unreal plugin (position, level, action as JSON); needs an ingest route (`POST /api/sessions/[id]/events`) and a live event timeline component.
- **Tasks** — turning feedback/report findings into a tracked backlog (`P0`–`P2`, `open`/`in_progress`/`done`). Natural next step: a "Create task from this feedback" button in `FeedbackFeed`.
- **Publisher view** — `PublisherInsight` (score + rationale) per game, likely its own AI prompt in `lib/llm.ts` (`generatePublisherBrief`) plus a `/dashboard/publisher` route gated to the `publisher` role.
- **Unreal Engine plugin** — an HTTP client in C++ posting to `/api/sessions/[id]/events` and `/api/sessions/[id]/feedback` using a per-session API token instead of cookie auth (the cookie-session model in `lib/auth.ts` is for the web dashboard; the plugin will need a separate bearer-token auth path).
- **WebSockets** — if polling ever feels laggy with more playtesters, swap `FeedbackFeed`'s `setInterval` for a provider like Pusher or Ably; the component boundary is already isolated so this doesn't touch the rest of the app.
