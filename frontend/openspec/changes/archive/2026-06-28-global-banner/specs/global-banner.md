## ADDED Requirements

### Requirement: Global banner component
The system SHALL display a banner at the top of the page showing a global message with optional link support.

#### Scenario: Banner displays with message
- **WHEN** the page loads
- **THEN** a banner appears at the top showing the configured message

#### Scenario: Banner displays with link
- **WHEN** the page loads
- **THEN** the banner shows the message with a clickable link

### Requirement: Component styling
The global banner component SHALL use TailwindCSS for styling with a thin, minimal design.

#### Scenario: Banner has appropriate height
- **WHEN** the banner renders
- **THEN** the banner height is minimal (40-50px range)

#### Scenario: Banner uses subtle background
- **WHEN** the banner renders
- **THEN** the background is a subtle color (gray or brand color)

#### Scenario: Banner centers content
- **WHEN** the banner renders
- **THEN** the content is centered with max-width constraint

### Requirement: Hardcoded content
The global banner component SHALL use hardcoded content without API fetching.

#### Scenario: No API calls on render
- **WHEN** the banner component renders
- **THEN** no network requests are made
