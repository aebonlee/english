# English Pro - Development Log

## 2026-03-23: KoreaTech Design System Migration

### Summary
Completed 100% migration from English Pro's dark-first design to KoreaTech's light-first design system. All 15 files (12 CSS, 2 JSX, 1 HTML) were updated.

### Changes Made

#### Phase 1: Foundation
- **index.html**: Added Google Fonts (Noto Sans KR 400/500/600/700)
- **base.css**: Complete rewrite with KoreaTech light-first CSS custom properties
  - New variable naming: `--primary-blue`, `--bg-white`, `--bg-light-gray`, etc.
  - 5 color theme overrides via `html[data-color]`
  - KoreaTech button styles, section headers, utility classes

#### Phase 2: Core Components
- **navbar.css**: Light glassmorphism navigation with color picker styles
- **hero.css**: KoreaTech hero with particles, gradient background, scroll indicator
- **footer.css**: Dark gradient footer (linear-gradient #111827 -> #0A0F1A)
- **auth.css**: Clean card-based login/register with KoreaTech variables

#### Phase 3: Theme System
- **dark-mode.css**: Reversed from `[data-theme="light"]` to `[data-theme="dark"]` overrides
  - Dark mode covers all components: navbar, hero, footer, auth, chatbot, speech, vocabulary, dashboard, lessons
  - Dark color theme variants for all 5 colors
- **animations.css**: Simplified to 5 clean AOS animations (fade-up/right/left/down, zoom-in)

#### Phase 4: Page Styles
- **site.css**: All variable references updated to KoreaTech names
- **chatbot.css**: Variable name migration
- **speech.css**: Variable name migration
- **vocabulary.css**: Variable name migration

#### Phase 5: Responsive
- **responsive.css**: KoreaTech breakpoints (1100/1024/768/480px)

#### Phase 6: React Components
- **ThemeContext.jsx**: Added `colorTheme` state, `setColorTheme`, `applyColor`
  - Theme cycle: auto -> light -> dark
  - Color stored in localStorage (`english-pro-color`)
- **Navbar.jsx**: Added color picker UI with 5 color dots
  - Desktop: tooltip dropdown
  - Mobile: inline dots in footer

### Build Result
- Build successful (vite v8.0.1)
- 155.13 KB CSS (25.00 KB gzip)
- 425.03 KB main JS bundle (123.54 KB gzip)

### Architecture Notes
- Light-first design: `:root` defines light theme, `[data-theme="dark"]` overrides
- Color themes via `html[data-color="red|green|purple|orange"]`
- Glass effect: `rgba(255,255,255,0.85)` in light, `rgba(17,24,39,0.85)` in dark
- No `@media (prefers-color-scheme)` - handled by ThemeContext JS
