# UX Design & Overall Theme: Books Catalog (Light Theme)

## Overview
The Books Catalog screen provides a comprehensive, searchable index of the library's collection. The Light Theme variant is designed to evoke the feeling of reading a physical archive catalog on high-quality, off-white cream paper under natural daylight.

## User Experience (UX)
- **Discoverability**: A prominent search interface allows users to quickly locate titles, authors, or ISBNs.
- **Filtering**: Side-panel or top-bar filters enable narrowing down the catalog by genre, publication date, or availability.
- **Scanning**: The catalog uses a responsive grid of book cards, allowing users to visually scan covers and essential metadata.
- **Clarity**: High contrast between the cream background and dark ink text ensures maximum readability for bibliographic data.

## Visual Theme
- **Palette**: Transition from the "Nordic Nocturne" dark surfaces to a light-mode counterpart.
    - **Base**: Warm off-white / Cream tones to mimic archival paper.
    - **Text**: Deep charcoal / Ink tones for high legibility.
    - **Accents**: Maintains the "Brass" and "Slate" accents from the core design system, adjusted for contrast against light backgrounds to highlight primary actions and active states.
- **Typography**: Continues the use of the editorial serif stack for book titles and a clean sans-serif for metadata and interface controls, preserving the scholarly aesthetic.
- **Atmosphere**: Airy, clean, and academic. It replaces the "midnight archive" mood with a "bright reading room" atmosphere, prioritizing clarity and openness.

## Components

### Search Bar
The search interface is designed for maximum accessibility and minimal distraction.
- **Visuals**: A wide input field with a warm cream background, framed by a fine 1px border in muted slate.
- **Typography**: Uses a clean sans-serif (Source Sans 3) for input text in deep charcoal, with placeholders in a subdued slate tone.
- **Interaction**: Upon focus, the border shifts to a distinct Brass accent, avoiding glowing effects to maintain the scholarly aesthetic.
- **Geometry**: 8px corner radius with a generous internal padding of `0.75rem 1rem` to ensure a breathable touch target.

### Book Cards
Book cards serve as the primary unit of the catalog, balancing visual appeal with bibliographic precision.
- **Container**: A elevated surface on the cream base, defined by a fine 1px slate border and a very subtle, low-contrast shadow to create a sense of physical layers.
- **Geometry**: 8px corner radius and a standardized internal padding of `20px` (`1.25rem`).
- **Content Layout**:
    - **Cover**: High-resolution image of the book cover.
    - **Title**: Rendered in the editorial serif stack (Newsreader) in deep charcoal, creating a literary focal point.
    - **Author**: Displayed in a clean sans-serif (Source Sans 3) in muted slate, providing a clear hierarchical distinction from the title.
    - **Badge**: Positioned prominently to indicate current status at a glance.

### Status Badges
Badges provide immediate semantic feedback on book availability using a muted, archival color palette.
- **Visuals**: Small pill-shaped containers with 8px corner radius.
- **Color Coding**:
    - **Available**: Pale botanical green background with deep green text.
    - **Reserved**: Pale amber/brass background with deep amber text.
    - **Archived**: Pale slate-grey background with deep grey text.
- **Styling**: Utilizes muted semantic versions of the core system colors to avoid visual aggression against the cream background, ensuring the badge informs without distracting from the book's metadata.
