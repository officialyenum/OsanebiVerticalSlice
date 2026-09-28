# Osanebi — Real-Time QA & Playtesting

Vertical slice: **studio creates a session → playtester submits live feedback (polled) → studio generates an AI QA summary from that feedback with Llama 3.**

## Scripts

- `pnpm run dev` starts the vinext dev server.
- `pnpm run build` builds the Cloudflare Worker output.
- `pnpm run start` starts the built Worker locally with Wrangler.
- `pnpm run deploy` deploys the Cloudflare Worker.

