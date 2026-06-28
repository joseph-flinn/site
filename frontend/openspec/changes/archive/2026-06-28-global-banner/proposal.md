## Why

We need a simple global message banner at the top of the site to display important announcements or notifications. The component should be lightweight, support a link, and use hardcoded content without requiring dynamic data fetching.

## What Changes

- Add a new global banner component at the top of the site
- Support displaying a message with an optional link
- Component is static/hardcoded - no API fetching required
- Minimal design: thin banner, simple styling

## Capabilities

### New Capabilities
- `global-banner`: A reusable header component that displays a static global message with optional link support

### Modified Capabilities
- None

## Impact

- New `src/components/GlobalBanner.svelte` component
- Integration into the main layout/header
- No breaking changes
- Minimal dependency footprint
