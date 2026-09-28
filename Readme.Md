# Osanebi

Osanebi is a real-time QA and playtesting platform for game studios. This repository contains a vertical slice of the product: a studio manages a game and playtest session, playtesters submit feedback, and the studio reviews the results and generates QA reports.

## What is in this repository?

- `web/` - Next.js-style React web app powered by vinext and deployed as a Cloudflare Worker.
- `api/` - Hono API deployed as a Cloudflare Worker.
- `api/prisma/` - Prisma schema, D1 migrations, and seed data.

The API uses Cloudflare D1 for relational data and Cloudflare KV across several application services. The web app calls the API at `http://localhost:8787` during development.

## Prerequisites

- Node.js 20 or newer
- pnpm 9 or newer (the repository uses `pnpm-lock.yaml`)
- Cloudflare account access for the D1 and KV resources configured in Wrangler

Enable pnpm with Corepack if it is not already available:

```sh
corepack enable
```

## Get started

From the repository root, install dependencies, generate the Prisma client, then start both apps:

```sh
pnpm install
pnpm prisma:generate
pnpm dev
```

The root `dev` command starts the API and web workspaces together.

- Web app: <http://localhost:3000>
- API health check: <http://localhost:8787/health>
- API reference: <http://localhost:8787/doc>

The Wrangler configs currently set the D1 and KV bindings to use remote Cloudflare resources during development. You may need to authenticate Wrangler with the Cloudflare account that owns those resources. Coordinate with the project maintainer if you do not have access; do not point development commands at production data.

## Demo accounts

Both seeded accounts use the password `password123`:

| Role | Email |
| --- | --- |
| Studio | `studio@osanebi.dev` |
| Playtester | `playtester@osanebi.dev` |

## Database notes

Database commands are defined in `api/package.json`. In particular, `db:seed:remote` deletes and recreates application data in the configured remote D1 database. Do not run remote migration, seed, reset, or deploy commands unless you are authorized and have coordinated with the maintainer.

For local D1 work, use the API workspace scripts from `api/`:

```sh
cd api
pnpm db:migrate:local
pnpm db:seed:local
```

Note: the Wrangler configuration currently marks the D1 and KV bindings as remote. A fully isolated local setup may require changing those binding settings in your local working copy; keep such environment-specific changes out of commits unless the team agrees to them.

## Contributing

1. Create a focused branch from the current default branch.
2. Keep changes scoped to the relevant workspace (`web/` or `api/`) and follow the surrounding code style.
3. Run the relevant checks before opening a pull request. At present, the package manifests do not define test or lint scripts; at minimum, run the app and verify the affected flow manually.
4. Open a pull request with a short summary, the reason for the change, and the checks you ran. Include screenshots for user-facing UI changes when useful.

Never commit credentials, access tokens, or local environment files. Ask the maintainer before changing shared Cloudflare resources or deployment configuration.

## Common commands

Run these from the repository root unless noted otherwise:

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the API and web app for development |
| `pnpm build` | Build packages with a build script (currently the web app) |
| `pnpm prisma:generate` | Generate the Prisma client for the API |
| `pnpm --dir api run cf-typegen` | Generate API Cloudflare binding types |
| `pnpm --dir web run cf-typegen` | Generate web Cloudflare binding types |

Deployment commands target Cloudflare. Coordinate with the maintainer before deploying.
