# site - frontend

## Project Overview
This is a single page SveltKit website. It's purpose is to support my personal leadership brand and
be a way for people to get to know who I am.

A static single-page SvelteKit website for personal website, featuring four main pages: Home,
Blog, Drip and About. The site is set up with GitHub Actions CI/CD automation and hosted on
Cloudflare Pages.

## Technical Stack
- **Framework**: SvelteKit (static site generation)
- **Hosting**: Cloudflare Pages
- **CI/CD**: GitHub Actions (or Cloudflare's built-in CI/CD)
- **Styling**: TailwindCSS (recommended for rapid development)

## Configuration

There are two configuration files used: `.env` and `.env.production`. Vite automatically uses `.env` when running `vite
dev` and uses `.env.production` when running `vite build`.

### Environment Variables

| Name | Supported Values | Description |
| ---- | ---------------- | ----------- |
| `PUBLIC_DATASOURCE_TYPE` | `network_static`, `network_dynamic` | The datasource type
teslls the `$lib/helper.js:getPosts()` where to load posts from. It is helpful to load posts from the local machine
while writing the article to make sure the formatting is as intended |
| `PUBLIC_DATASOURCE` | `$string` | Where to load the data from with the given type. For `network_*`, an URL is
expected. for `local`, the post.json filepath is hard coded because of a constraint with the JS `import()` function |
| `PUBLIC_LOGGING_ENABLED` | `true`, `false` | Enables verbose console logging throughout the app. Anything other than
`true` will evaluate to `false`|


## Development
### Code style
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')

### Workflow
- PLAN.md is the current working state of the project's collaborative plan
- For any new code, we prioritize creating reusable components to follow DRY software engineering practices. New components are created in `./src/lib`
- For any new components, we use Atomic Design philosophy
- After task is finished, commit the work (skipping the GPG signing if you are an AI agent)

### Environment
```bash
cd ../
nix develop
cd frontend
vite dev  # Run a local development instance at http://localhost:5173


# Run a local development instance across all networking interfaces on port 5173. 
# This is used to expose via Tailscale or the VLAN the computer is on. Mostly used
# for confirming mobile UX
vite dev --host 0.0.0.0  
```

### Project Structure
```
src
├── app.css
├── app.d.ts
├── app.html
├── lib
│   ├── assets
│   │   ├── cv-download-icon.svg
│   │   ├── github-brands-solid.svg
│   │   ├── jf-icon.svg
│   │   └── linkedin-brands-solid.svg
│   ├── components
│   │   ├── Card.svelte
│   │   ├── Footer.svelte
│   │   ├── HorizontalNav.svelte
│   │   ├── Mermaid.svelte
│   │   ├── PageTitle.svelte
│   │   ├── Socials.svelte
│   │   ├── TailwindSvelteMarkdown.svelte
│   │   └── UnderConstruction.svelte
│   ├── config.js
│   ├── env.js
│   ├── layouts
│   │   ├── mdsvex
│   │   │   └── blog-layout.svelte
│   │   └── svelte
│   │       └── CentralColumn.svelte
│   ├── posts.js
│   ├── preprocessors
│   │   └── readingTime.js
│   ├── renderers
│   │   ├── CodeDiagramRenderer.svelte
│   │   ├── CodeRenderer.svelte
│   │   ├── ImageRenderer.svelte
│   │   ├── ParagraphRenderer.svelte
│   │   ├── QuoteRenderer.svelte
│   │   ├── remark-plugins.js
│   │   ├── TableBodyRenderer.svelte
│   │   ├── TableCellRenderer.svelte
│   │   ├── TableHeadRenderer.svelte
│   │   ├── TableRenderer.svelte
│   │   └── TableRowRenderer.svelte
│   ├── store.js
│   └── utils
│       ├── date.js
│       ├── loader.js
│       └── logger.js
└── routes
    ├── about
    │   ├── +layout.js
    │   └── +page.svelte
    ├── api
    │   ├── posts
    │   │   └── +server.js
    │   └── rss.xml
    │       └── +server.js
    ├── drip
    │   ├── +layout.js
    │   ├── +page.js
    │   └── +page.svelte
    ├── +error.svelte
    ├── +layout.js
    ├── +layout.svelte
    ├── +page.svelte
    └── posts
        ├── +layout.js
        ├── +page.js
        ├── +page.svelte
        └── [post]
            ├── +page.js
            └── +page.svelte

```

## Deployment
Every push to `main` will auto deploy to `joseph-flinn.github.io/site`
