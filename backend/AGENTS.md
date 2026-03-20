# AGENTS.md

This repository contains a Cloudflare Workers blog backend built with Hono.

## Build & Deploy Commands

```bash
# Development server
npm run dev

# Run tests (dev environment)
npm test

# Run tests (staging environment)
npm run test:staging

# Deploy to staging
npm run deploy:staging
```

**Running a single test**: Use k6 with environment variables:
```bash
export TOKEN=<token>
k6 -e ENV=dev -e PSK=${TOKEN} run test/script.js
```

## Code Style Guidelines

### Imports
- External libraries first, no grouping
- Format: `import { named } from 'module'` or `import defaultExport from 'module'`
- Single blank line after imports before code

### Naming Conventions
- **Variables**: `camelCase` (e.g., `rssBlob`, `newDripId`)
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `SLEEP_TIME`, `BASE_URL`)
- **Routes**: `kebab-case` in paths (e.g., `/posts/:slug`)
- **Functions**: `camelCase` for arrow functions (`async c => {}`)

### Formatting
- **Indentation**: 2 spaces
- **Semicolons**: Optional (not used consistently)
- **Quotes**: Double for headers/JSON, template literals for SQL
- **Line width**: Max 140 characters (configured in `.prettierrc`)
- **Single quotes**: Enabled in prettier config

### Error Handling
- 404: `c.text('Object not found', 404)` or `new Response('Not Found', { status: 404 })`
- 400/401: `c.text('error', status)` with appropriate messages
- 403: Unauthorized errors include "Unauthorized" in response
- 500: `c.text(JSON.stringify({ message: 'something went wrong'}), 500)`
- Validation errors return early with `c.text('Invalid ...', 400)`

### Response Format
- JSON wrapped in `{data: ...}` structure
- ETag headers from R2 bucket objects
- Status 201 for successful create/update/delete
- Status 200 for successful reads
- Content-Type headers for RSS (`application/rss+xml`) and JSON (`application/json`)

### Authentication
- Bearer token required for `/drip` POST and DELETE endpoints
- Token from `c.env.TOKEN` environment variable
- Format: `Authorization: Bearer <TOKEN>`

### Database
- Use Cloudflare D1 with prepared statements
- Parameterized queries with `.bind()` for security
- Check `success` property on query results

### Testing
- k6 for load/performance testing
- Test groups organized by endpoint (rss, post, drip)
- Validation checks for status codes and response structure
- Sleep 0.5s between requests in test script

## Configuration Files

- **Build**: `wrangler.toml` - Cloudflare Workers configuration
- **Formatting**: `.prettierrc` - printWidth: 140, singleQuote: true, semi: true, useTabs: true
- **Dependencies**: `package.json` - Hono framework, k6 for testing
- **Environment**: `.dev.vars` - token stored here (not committed)

## API Endpoints

- `GET /rss.xml` - RSS feed (no auth)
- `GET /posts` - List all posts (no auth)
- `GET /posts/:slug` - Single post (no auth)
- `POST /drip` - Create/update drip (bearer auth required)
- `GET /drip` - Get recent drips (no auth)
- `DELETE /drip/:id` - Delete drip (bearer auth required)
