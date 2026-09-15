---
name: Nordic Nocturne
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#363a3e'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#262a2f'
  surface-container-highest: '#313539'
  on-surface: '#e0e3e8'
  on-surface-variant: '#c3c7cc'
  inverse-surface: '#e0e3e8'
  inverse-on-surface: '#2d3135'
  outline: '#8d9196'
  outline-variant: '#43474c'
  surface-tint: '#b5c9dc'
  primary: '#b5c9dc'
  on-primary: '#1f3241'
  primary-container: '#8fa3b5'
  on-primary-container: '#263948'
  inverse-primary: '#4d6171'
  secondary: '#e7c17e'
  on-secondary: '#412d00'
  secondary-container: '#5c420a'
  on-secondary-container: '#d5b06f'
  tertiary: '#cdc5bc'
  on-tertiary: '#343029'
  tertiary-container: '#a69f97'
  on-tertiary-container: '#3b3630'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0e5f8'
  primary-fixed-dim: '#b5c9dc'
  on-primary-fixed: '#081d2b'
  on-primary-fixed-variant: '#364958'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#e7c17e'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5c420a'
  tertiary-fixed: '#eae1d8'
  tertiary-fixed-dim: '#cdc5bc'
  on-tertiary-fixed: '#1f1b15'
  on-tertiary-fixed-variant: '#4b463f'
  background: '#101418'
  on-background: '#e0e3e8'
  surface-variant: '#313539'
typography:
  display:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: 3.25rem
    letterSpacing: -0.01em
  display-mobile:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
  headline-lg:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
  headline-lg-mobile:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: 2rem
  headline-md:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 1.5rem
    fontWeight: '400'
    lineHeight: 2rem
  headline-sm:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
  quote:
    fontFamily: Newsreader, Palatino, Georgia, serif
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Source Sans 3, Segoe UI, system-ui, -apple-system, sans-serif
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Source Sans 3, Segoe UI, system-ui, -apple-system, sans-serif
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Source Sans 3, Segoe UI, system-ui, -apple-system, sans-serif
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Source Sans 3, Segoe UI, system-ui, -apple-system, sans-serif
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Source Sans 3, Segoe UI, system-ui, -apple-system, sans-serif
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Screens
- [Books Catalog (Light Theme)](pages/books-catalog/ux-design.md)

## Brand & Style
The design system embodies the hushed, contemplative atmosphere of a Nordic research archive at midnight. It balances scholarly discipline with tactile warmth, evoking the sensory qualities of heavy paper, patinated brass fittings, slate tables, and aged linen bindings. 

The aesthetic is grounded in restrained editorial minimalism. It rejects superficial visual novelties—such as glassmorphic blurs, saturated linear gradients, and aggressive elevations—in favor of structural clarity, precise typographic rhythm, and deliberate, low-strain contrast. The emotional target is calm focus, intellectual immersion, and lasting visual comfort during long hours of deep reading.

## Colors
The palette is built strictly around muted cool stone, warm paper ink, and radiant brass accents.

- **Primary Canvas & Surfaces**: `#181C20` anchors the application as the base page background. Card and elevated structural surfaces use `#21272D`.
- **Primary Text & Accents**: `#F1ECE1` (Ink) serves as the primary high-readability foreground token, paired with `#9CA3AF` for subdued bibliographic metadata, tertiary hints, and inactive UI states.
- **Accents**: `#8FA3B5` (Slate) directs secondary actions, structural tabs, and functional utilities. `#D4AF6E` (Brass) highlights key editorial interventions, active links, pull quote marks, reading progress indicators, and primary callouts. `#2A2620` (Accent Subtle) provides a warm, tinted ground explicitly designated for pull quotes and highlighted annotations.
- **Borders & Dividers**: All structural framing is defined by `#3A434B`.
- **System States**: Semantic feedback utilizes muted botanical and natural mineral tones: Success `#7FB08D`, Danger `#D07A6F`, and Warning `#D9A441`.

## Typography
Typographic treatment separates literary presentation from utilitarian interaction:

1. **Editorial & Literary Layer**: All titles, chapter headings, volume designations, and quotes use the system serif font stack anchored by classical proportions. Italics are reserved for book titles, citations, and emphasis within quotes.
2. **Functional & Interface Layer**: Navigation, controls, body copy, metadata, and data tables use the clean, neutral sans-serif stack.
3. **Leading & Measure**: Long-form body and reading sections must preserve an optimal reading length of 60–75 characters per line, supported by generous line heights to preserve eye comfort in dark environments.

## Layout & Spacing
The layout follows a disciplined, symmetrical 12-column grid system on desktop screens (max-width `1200px`), transitioning to a 6-column layout on tablets and a 4-column layout on mobile devices.

- **Content Padding**: Standard cards, search filters, and catalog rows observe an internal padding standard of `1.25rem` (`20px`).
- **Rhythm**: Vertical margins between editorial sections scale strictly by geometric increments (`space-lg` to `space-xl`).
- **Reflow**: On mobile viewports, complex multi-column index lists flatten into single-column vertical stacks, maintaining a consistent `1.25rem` edge margin to keep text comfortable on compact screens.

## Elevation & Depth
Depth is constructed purely through low-contrast tonal layering and 1px borders. 

- **No Dropshadows**: Heavy dropshadows, blurred atmospheric projections, and neon glowing halos are strictly prohibited.
- **Tonal Planes**:
  - Base Plane: `#181C20` (Page canvas).
  - Raised Plane: `#21272D` bordered with 1px solid `#3A434B` (Standard content cards, utility toolbars, reading sidebars).
  - Overlay Plane: Modals and dropdown menus sit on `#21272D` with a crisp 1px `#3A434B` edge and a backdrop veil of `#181C20` at 70% opacity.
- **Accent Framing**: Quote components do not stack using standard borders; they delineate presence exclusively through the warm-tinted plane of `#2A2620`.

## Shapes
The system employs an intentional dual-shape rule to distinguish mechanical interface containers from literary excerpts:

- **Standard UI & Cards**: `roundedness: 2` (equivalent to `8px` or `0.5rem`). Applied to content cards, modal windows, text fields, search bars, buttons, and popovers.
- **Quote Cards**: Deliberate square corners (`0px` border radius). Pull quotes and annotated reader passages bypass standard corner rounding to mimic the architectural cut of fine bookplates.

## Components

### Buttons
- **Primary (Brass)**: Background `#D4AF6E`, text `#181C20`, radius `8px`, font `label-md`. Hover shifts text contrast with subtle opacity drop without adding dropshadows.
- **Secondary (Slate Outline)**: Background transparent, border 1px solid `#3A434B`, text `#8FA3B5`, radius `8px`. Hover shifts border to `#8FA3B5` and surface tint to `#21272D`.
- **Tertiary / Ghost**: Borderless, text `#F1ECE1`. Hover underlines in `#D4AF6E`.

### Cards
- **Standard Card**: Background `#21272D`, border 1px solid `#3A434B`, corner radius `8px`, internal padding `20px` (`1.25rem`). Used for book entries, metadata blocks, and administrative panels.
- **Quote Card**: Background `#2A2620`, border `none`, corner radius `0px`, internal padding `20px` (`1.25rem`). Features an oversized decorative serif quote-mark (`“`) positioned top-left rendered in `#D4AF6E`. Body text inside uses typography token `quote` colored in `#F1ECE1`.

### Inputs & Search Bars
- Background `#181C20`, border 1px solid `#3A434B`, radius `8px`, padding `0.75rem 1rem`.
- Text color `#F1ECE1`, placeholder color `#9CA3AF`.
- Focus state: Border transitions to `#8FA3B5` with zero glow/shadow.

### Checkboxes & Radio Buttons
- Square (`4px` radius) for checkboxes, circular for radio inputs.
- Unchecked: Border 1px solid `#3A434B`, background `#181C20`.
- Checked: Background `#D4AF6E`, glyph icon `#181C20`.

### Chips & Badges
- Genre/Tag Badges: Background `#181C20`, border 1px solid `#3A434B`, text `#9CA3AF`, radius `8px`, typography `label-sm`.
- Status Tags (e.g., \"Available\", \"Archived\"): Background `#21272D`, border color matched to semantic tokens (`#7FB08D` for Available, `#D9A441` for Reserved), text matching the respective semantic token.

### Lists & Catalog Rows
- Flat structure separated by 1px solid `#3A434B` horizontal rules.
- Hover feedback utilizes a subtle surface shift to `#21272D`.
