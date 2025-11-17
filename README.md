# WMATA Design System - Storybook Edition

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run Storybook (dev)
```bash
npm run storybook
```

Storybook will run at http://localhost:6006

3. Build the CSS for ServiceNow
```bash
npm run build
```
This outputs `dist/wmata-theme.css` which you can upload to ServiceNow as a UI Script or Theme CSS include.

Notes:
- Storybook imports `src/index.scss` so it compiles the design system styles on the fly.
- Helvetica Now is referenced in tokens but not bundled. Add licensed font files into `public/fonts/` and update `_typography.scss` with `@font-face` if you have them.
