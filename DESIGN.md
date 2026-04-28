# Academic Portfolio Design System

## Visual Identity

This portfolio uses a premium academic manuscript language: restrained color, thin rules, sharp edges, editorial typography, and a two-column layout on desktop. The interface should feel like a carefully typeset CV rather than a marketing landing page.

## Light Mode

The light theme is the existing canonical design and should remain visually stable.

- Primary background: `#fdfcf8`
- Main surface: `#faf9f5`
- Raised/card surface: `#ffffff`
- Primary text: `#1b1c1a`
- Secondary text: Tailwind `stone-600`
- Dividers and hard rules: Tailwind `stone-950` or low-opacity `stone-950`
- Typography: `Inter` for body, `Noto Serif` for headings/editorial labels
- Layout: fixed left sidebar on desktop, fluid content column on the right
- Roundness: minimal, generally `4px` or less
- Elevation: flat; structure comes from rules, spacing, and surface changes

## Dark Mode

Dark mode is the same academic portfolio translated into a high-contrast dark environment. It must keep the exact same typography, sizing, layout, and information density as light mode. Only color, border, divider, and surface treatments change.

### Typography

Dark mode uses the same fonts as light mode.

- Body: `Inter`
- Headings/editorial labels: `Noto Serif`
- No theme-specific font, weight, size, or spacing changes are allowed.

### Color Palette

The dark theme avoids pure black. It uses warm, deep charcoals to reduce eye strain while preserving the paper-like academic tone.

- Primary background: `#1A1A1A`
- Surface/cards: `#242424`
- Primary text: `#FFFFFF`
- Secondary text: `#A0A0A0`
- Accents/dividers: `#333333`

### Layout & Structure

- Desktop layout remains a two-column grid.
- Left sidebar scales to a fixed navigation rail and identity area.
- Main content holds experience, selected projects, skills, and education.
- Thin `1px` dividers separate sections, mirroring LaTeX-like structural precision.
- Layout, typography scale, and spacing must match light mode.

## Design Tokens

- Roundness: `4px`
- Major section spacing: `32px` to `48px`
- Elevation: flat; depth comes from color shifts rather than heavy shadows
- Interaction: subtle color changes only, no heavy animation
