# Zapp Interview

A monorepo for technical interviews, built with pnpm workspaces and Turborepo.

## Tech Stack

| App / Package | Tech |
| --- | --- |
| `apps/api` | NestJS, SQLite (better-sqlite3), raw SQL queries |
| `apps/services` | Hono on Node.js |
| `apps/web` | Next.js (App Router), Tailwind CSS v4, shadcn/ui |
| `apps/app` | Expo, React Native, Tamagui |
| `packages/utils` | Shared TypeScript utilities |
| `packages/typescript-config` | Shared tsconfig files |

## Prerequisites

- [Node.js](https://nodejs.org/) v22+
- [pnpm](https://pnpm.io/) v10+

## Getting Started

```bash
# Install dependencies
pnpm install

# Seed the database (idempotent — safe to run multiple times)
pnpm seed

# Start all apps in development mode
pnpm dev
```

## Ports

| App | URL |
| --- | --- |
| Web (Next.js) | http://localhost:4991 |
| API (NestJS) | http://localhost:4992 |
| Services (Hono) | http://localhost:4993 |
| App (Expo) | http://localhost:4994 |

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm test` | Run all tests |
| `pnpm lint` | Lint all packages with Biome |
| `pnpm format` | Format all packages with Biome |
| `pnpm seed` | Seed the SQLite database |
| `pnpm storybook` | Start Storybook for the web app |

## Project Structure

```
├── apps/
│   ├── api/          NestJS REST API with SQLite
│   ├── services/     Hono microservice
│   ├── web/          Next.js web application
│   └── app/          Expo mobile application
├── packages/
│   ├── utils/              Shared utility functions
│   └── typescript-config/  Shared TypeScript configurations
├── turbo.json        Turborepo pipeline configuration
├── biome.json        Biome linter/formatter configuration
└── pnpm-workspace.yaml
```

## API Endpoints

### NestJS API (`:4992`)

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/users` | List all users |
| `GET` | `/users/:id` | Get user by ID |
| `POST` | `/users` | Create a new user |
| `GET` | `/products` | List all products |
| `GET` | `/products/:id` | Get product by ID |
| `POST` | `/products` | Create a new product |

### Hono Services (`:4993`)

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Service info and health status |

## Testing

```bash
# Run all unit tests
pnpm test

# Run web e2e tests (requires web app running)
pnpm --filter @zapp/web test:e2e

# Run Storybook
pnpm storybook
```

## Database

SQLite database stored at `apps/api/data.db`. The seed script creates:

- **20 users** with varied roles (admin, customer) and statuses
- **50 products** across multiple categories with realistic data

Tables: `users`, `products` — see `apps/api/src/database/seed.ts` for schema.
