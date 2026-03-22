# English Pro - KoreaTech Design 100% Migration Plan

## Overview
English Pro site redesign: migrating from dark-first to KoreaTech's light-first design system.

## Key Changes

| Item | Before (English Pro) | After (KoreaTech) |
|------|---------------------|---------------------|
| Default Theme | Dark (#0A1628) | Light (#FFFFFF) |
| Primary Color | --accent: #4A8FE7 | --primary-blue: #0046C8 |
| Font | Segoe UI, system-ui | Noto Sans KR + system |
| Container | max-width: 1200px | max-width: 1280px |
| Nav Height | 70px | 80px |
| Glass Effect | rgba(10,22,40,0.8) | rgba(255,255,255,0.85) |
| Dark Mode | `[data-theme="light"]` override | `[data-theme="dark"]` override |
| Color Themes | None | 5 (blue/red/green/purple/orange) |
| Breakpoints | 1024/768/480/1400 | 1100/1024/768/480 |
| Border Radius | 8/12/16/24 | 8/12/16/20/9999 |

## CSS Variable Mapping

| Old (English Pro) | New (KoreaTech) |
|-------------------|-----------------|
| `--bg-primary` | `--bg-white` |
| `--bg-secondary` | `--bg-light-gray` |
| `--bg-card` | `--bg-white` |
| `--bg-elevated` | `--bg-medium-gray` |
| `--text-muted` | `--text-light` |
| `--accent` | `--primary-blue` |
| `--accent-hover` | `--primary-blue-dark` |
| `--accent-light` | `--primary-blue-bg` |
| `--accent-dark` | `--primary-blue-dark` |
| `--border` | `--border-light` |
| `--glass` | `--glass-bg` |
| `--radius` | `--radius-md` |
| `--shadow` | `--shadow-md` |

## Files Modified (15 total)

### CSS (12)
1. `src/styles/base.css` - Full rewrite: light-first variable system
2. `src/styles/navbar.css` - Full rewrite: light glassmorphism
3. `src/styles/hero.css` - Full rewrite: KoreaTech hero design
4. `src/styles/footer.css` - Full rewrite: dark gradient footer
5. `src/styles/dark-mode.css` - Full rewrite: `[data-theme="dark"]` overrides
6. `src/styles/animations.css` - Full rewrite: clean 5-animation set
7. `src/styles/responsive.css` - Full rewrite: KoreaTech breakpoints
8. `src/styles/site.css` - Variable name updates
9. `src/styles/auth.css` - Full rewrite: KoreaTech auth styles
10. `src/styles/chatbot.css` - Variable name updates
11. `src/styles/speech.css` - Variable name updates
12. `src/styles/vocabulary.css` - Variable name updates

### JSX (2)
13. `src/contexts/ThemeContext.jsx` - Color theme support added
14. `src/components/layout/Navbar.jsx` - Color picker added

### HTML (1)
15. `index.html` - Noto Sans KR font added

## Color Theme System
- Default: Blue (#0046C8)
- Red: #C8102E
- Green: #00855A
- Purple: #8B1AC8
- Orange: #C87200

Applied via `html[data-color="<name>"]` attribute.
Stored in localStorage: `english-pro-color`.

## Theme Toggle Order
`auto` -> `light` -> `dark` (light-first cycle)
