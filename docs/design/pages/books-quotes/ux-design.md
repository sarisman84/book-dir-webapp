# UX Design & Overall Theme: My Quotes (Dark Theme)

## Overview
The My Quotes screen provides a personalized repository of the user's favorite quotations saved from their reading history. Designed in the Nordic Nocturne dark theme, the interface evokes the intimate atmosphere of a scholar's private journal—where cherished lines from beloved books are collected, organized, and revisited with contemplative calm.

## User Experience (UX)
- **Personalization**: The screen surfaces the user's own saved quotes, creating a curated reading diary that reflects their unique literary journey.
- **Organization**: Quotes are grouped by source book, enabling users to trace thematic connections across different volumes and authors.
- **Contextual Depth**: Each quote is displayed with its originating book title and author, providing immediate context without breaking the reading flow.
- **Reflection**: The layout encourages slow, deliberate revisiting of saved passages—prioritizing emotional resonance over rapid scanning.
- **Accessibility**: High-contrast pairing of warm ink on dark stone surfaces ensures comfortable extended reading sessions.

## Visual Theme
- **Palette**: Built strictly on the Nordic Nocturne dark theme tokens.
    - **Base**: `#181C20` anchors the page canvas, with elevated quote cards resting on `#2A2620`—the warm-tinted accent plane designated specifically for quotations.
    - **Text**: `#F1ECE1` (Ink) serves as the primary foreground for quote body text, paired with `#9CA3AF` for muted bibliographic metadata and author attributions.
    - **Accents**: `#D4AF6E` (Brass) highlights the decorative opening quote mark, active links, and reading progress indicators. `#8FA3B5` (Slate) directs secondary actions and structural tabs.
    - **Borders**: `#3A434B` defines all structural framing.
- **Typography**: The editorial serif stack (Newsreader) dominates all quote text and headings, reinforcing the literary character of the page. The functional sans-serif stack (Source Sans 3) handles metadata, navigation, and interface controls.
- **Atmosphere**: Intimate, contemplative, and personal. The quote cards' square corners and warm-tinted backgrounds distinguish them from standard content cards, evoking the architectural cut of fine bookplates marking passages worth remembering.

## Components

### Quote Cards
The central component of the My Quotes screen, designed for maximum readability and emotional impact.
- **Container**: Background `#2A2620` (Accent Subtle warm-tinted plane), no border, `0px` border radius—deliberately square to mimic the architectural cut of fine bookplates.
- **Geometry**: Internal padding `20px` (`1.25rem`), full-width within the content container.
- **Decorative Quote Mark**: An oversized decorative serif opening quote mark (`"`) positioned top-left, rendered in `#D4AF6E` (Brass), serving as a visual anchor for each quotation.
- **Content Layout**:
    - **Quote Text**: Rendered in the `quote` typography token (Newsreader, 1.25rem, 400 weight, 1.875rem line-height, 0.01em letter-spacing) colored in `#F1ECE1`.
    - **Source Attribution**: Displayed below the quote in the `body-sm` typography token (Source Sans 3, 0.875rem) colored in `#9CA3AF`, identifying the book title and author.
- **Grouping**: Quotes are organized under their originating book headings, using the `headline-sm` serif token to delineate source volumes.

### Navigation & Header
- **Header**: Maintains the standard Nordic Nocturne header structure with the site logo, navigation tabs (including an active "Quotes" state highlighted in Brass), and user profile controls.
- **Tabs**: Structural tabs for filtering quotes by book or category, using `#8FA3B5` (Slate) for inactive states with Brass accents for the active tab.
- **Back/Return**: Tertiary/Ghost button style—borderless, text `#F1ECE1`, with hover underline in `#D4AF6E`.

### Empty State
When no quotes have been saved:
- **Visuals**: A centered, contemplative layout on the `#181C20` base with muted `#9CA3AF` instructional text.
- **Typography**: Uses the `body-lg` token for the primary message and `body-sm` for supplementary guidance.
- **Action**: A Primary (Brass) button inviting the user to begin saving quotes from their reading.

### Inputs & Search Bars
- **Search**: Background `#181C20`, border 1px solid `#3A434B`, radius `8px`, padding `0.75rem 1rem`. Text color `#F1ECE1`, placeholder `#9CA3AF`. Focus border transitions to `#8FA3B5` with zero glow/shadow.
- **Function**: Allows users to search through their saved quotes by keyword, author, or book title.

### Status Indicators
- **Quote Count Badge**: Displays the total number of saved quotes using `label-md` typography on a `#21272D` surface with a 1px `#3A434B` border.
- **Filter Tags**: Genre/Tag badges with `#181C20` background, 1px `#3A434B` border, and `#9CA3AF` text using `label-sm` typography.

### Buttons
- **Primary (Brass)**: Background `#D4AF6E`, text `#181C20`, radius `8px`, font `label-md`. Used for primary actions like adding a new note to a quote.
- **Secondary (Slate Outline)**: Background transparent, border 1px solid `#3A434B`, text `#8FA3B5`, radius `8px`. Hover shifts border to `#8FA3B5` and surface tint to `#21272D`.
- **Tertiary / Ghost**: Borderless, text `#F1ECE1`. Hover underlines in `#D4AF6E`. Used for navigation and dismissive actions.

### Lists & Catalog Rows
- **Book Group Headers**: Flat separators using 1px solid `#3A434B` horizontal rules between book groups, with the book title rendered in the editorial serif stack at `headline-sm` weight.
- **Quote Rows**: Each quote within a book group is separated by subtle spacing (`space-md` to `space-lg`), maintaining visual rhythm without heavy dividers. Hover feedback utilizes a subtle surface shift to `#21272D`.