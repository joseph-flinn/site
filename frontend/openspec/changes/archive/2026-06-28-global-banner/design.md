## Context

Currently the site has no global announcement banner. Important messages or notifications have no dedicated space at the top of the page. Users may miss critical information without a prominent, persistent banner area.

## Goals / Non-Goals

**Goals:**
- Add a thin, non-intrusive banner at the top of the site
- Support displaying a hardcoded message with optional link
- Minimal implementation with no external dependencies
- Reusable component that can be easily updated
- Follow existing TailwindCSS styling patterns

**Non-Goals:**
- Dynamic data fetching or API integration
- User-specific messages or targeting
- Dismissible/closable banner functionality
- Multiple concurrent banners
- Analytics tracking for banner interactions

## Decisions

**Component Structure:**
- Single `GlobalBanner.svelte` component in `src/components/`
- Hardcoded content directly in component (simple string with optional link)
- No props or external data source required

**Styling:**
- Use TailwindCSS for all styling
- Thin banner (approx 40-50px height)
- Subtle background color (gray or brand color)
- Centered content with max-width constraint
- Link styled consistently with existing site styles

**Integration:**
- Add to main layout/header component
- Positioned at top of page, above main content
- No configuration required for basic use

## Risks / Trade-offs

- **Hardcoded content means updates require code changes** → Simple content is intentional; for frequent updates, consider a static data file in `src/lib/data/` instead
- **No dismiss functionality** → Keeps component simple; can add later if needed
- **Single banner only** → Can be extended later if multiple banners are required
