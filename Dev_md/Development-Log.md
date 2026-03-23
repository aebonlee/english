# English Pro - Development Log

## 2026-03-24: SubNav / SectionNav 프리미엄 디자인 리뉴얼

### Summary
SubNav(2차)와 SectionNav(3차)의 디자인을 전면 교체하여 시각적 위계를 명확히 하고, 모바일 스크롤 인디케이터를 추가했습니다.

### Problem
- SubNav과 SectionNav이 둘 다 흰 배경 위 pill 버튼 스타일로 시각적 구분이 약함
- 모바일에서 가로 스크롤 가능 여부를 시각적으로 알 수 없는 UX 문제
- 전체적으로 저렴해 보이는 디자인

### Changes Made

#### SubNav → Glass Underline Tab
- 글래스모피즘 배경: `backdrop-filter: blur(12px)` + 미세 `box-shadow`
- pill 버튼 제거 → 클린한 탭 스타일 (`border-radius: 0`)
- 활성 표시: 하단 2.5px 언더라인 애니메이션 (`::after` pseudo, width 0→100%)
- hover: 60% 너비 언더라인 힌트
- 패딩 14px 20px로 터치 타겟 확보

#### SectionNav → Tinted Chip Bar
- 배경색 `var(--bg-light-gray)` (#F5F7FA) 띠로 SubNav과 명확 구분
- pill 칩 유지하되, 활성 시 `border-color: var(--primary-blue)` + 흰 배경 + `box-shadow`
- hover 시 흰 배경 + 보더로 떠오르는 효과

#### 모바일 스크롤 인디케이터 (SubNav + SectionNav 공통)
- `::before`/`::after` 그라데이션 페이드로 더 보이는 콘텐츠 암시
- JS `scrollLeft` 감지로 `--fade-left`/`--fade-right` 클래스 토글
- `useRef` + scroll/resize 이벤트 리스너

#### 다크모드 대응
- SubNav: `rgba(17,24,39,0.8)` 다크 글래스 배경
- SectionNav: `var(--bg-secondary)` 배경 + 다크 칩 스타일
- 페이드 그라데이션 각각 다크 배경색 사용

### Files Changed (4개)
- `src/styles/site.css` — SubNav/SectionNav CSS 전면 교체 (glass underline + tinted chip + fade)
- `src/styles/dark-mode.css` — 다크모드 오버라이드 교체
- `src/components/SubNav.jsx` — scrollRef + checkScroll() 스크롤 감지 추가
- `src/components/SectionNav.jsx` — 동일 스크롤 감지 패턴 추가

### Build Result
- Build successful (vite v8.0.1, 896ms)
- 160.62 KB CSS (25.93 KB gzip)
- SubNav.js 2.29 KB, SectionNav.js 1.54 KB
- 423.38 KB main JS bundle (123.23 KB gzip)

### Architecture Notes
- SubNav: `position: relative` on `.container`로 페이드 pseudo-element 기준점 확보
- SectionNav: 기존 IntersectionObserver 로직 완전 보존, 스크롤 감지만 추가
- 페이드 임계값 4px — 완전 끝에 도달하면 페이드 숨김
- `{ passive: true }` scroll 리스너로 성능 최적화

---

## 2026-03-24: 전체 하위 페이지 UX 개선 (page-header 표준화 + SubNav + SectionNav)

### Summary
전체 하위 페이지의 상단 영역 디자인을 표준화하고, 2차/3차 네비게이션 시스템을 구축하여 페이지 탐색 UX를 대폭 개선했습니다.

### Problem
- 단어장(Vocab) 4개, TOEIC 3개, Writing 3개, AI Chat, Speech 등 하위 페이지들이 표준 `page-header` 패턴을 사용하지 않아 상단 타이틀/영역 간격이 제각각
- h2 폰트 크기가 `.lesson-section`(2.5rem)과 `.content-page`(1.4rem)로 불일치
- 긴 페이지에서 섹션 간 이동 시 과도한 스크롤 필요
- 카테고리 내 형제 페이지 간 네비게이션 수단 부재

### Changes Made

#### Phase 1: page-header 표준화 (커밋 2533048, 2fed0a9)
**12개 하위 페이지**에 표준 page-header 패턴 적용:
- 그래디언트 배경 + 흰색 텍스트 + FA 셰브론 브레드크럼
- SEOHead, useLanguage, useAOS 훅 추가
- 구 스타일(`vocab-header`, `content-page__header`) 제거

| 카테고리 | 적용 페이지 |
|---------|-----------|
| 단어장 | VocabBasic, VocabBusiness, VocabToeic, VocabDaily |
| TOEIC | Listening, Reading, MockTest (intro+finished) |
| 작문 | BasicSentence, Paragraph, Essay |
| 기타 | AiChatPage, SpeechPage |

#### Phase 2: SubNav 2차 메뉴 (커밋 43db808)
**SubNav.jsx** 컴포넌트 신규 생성 — 카테고리별 형제 페이지 가로 탭 네비게이션:
- 5개 카테고리 정의: conversation(6), business(5), vocabulary(4), writing(3), toeic(3)
- page-header 바로 아래 sticky 고정 (z-index: 90)
- 현재 페이지 파란색 pill 하이라이트
- 모바일 가로 스크롤 지원, 다크모드 대응
- **21개 하위 페이지** 전체 적용

#### Phase 3: 본문 폰트 크기 통일 (커밋 43db808)
site.css에 `.lesson-section` 및 `.content-page` heading 정규화 CSS 추가:

| 요소 | Before | After |
|------|--------|-------|
| `.lesson-section h2` | 2.5rem | 1.5rem |
| `.lesson-section h3` | 2rem | 1.15rem |
| `.lesson-section h4` | 1.5rem | 1.05rem |
| `.content-page h2` | 2.5rem | 1.4rem |
| `.content-page h3` | 2rem | 1.15rem |
| `.content-page h4` | 1.5rem | 1.05rem |

#### Phase 4: SectionNav 3차 메뉴 (커밋 6f262ae)
**SectionNav.jsx** 컴포넌트 신규 생성 — 페이지 내 섹션 앵커 탭 네비게이션:
- IntersectionObserver 기반 스크롤 스파이 (현재 섹션 자동 하이라이트)
- smooth scroll로 해당 섹션으로 부드럽게 이동
- SubNav 바로 아래 sticky 고정 (z-index: 89)
- **16개 페이지** 적용 (일상회화 6, 비즈니스 5, 작문 3, TOEIC 2)
- 각 페이지의 모든 h2 섹션에 id 속성 추가

### New Components
- `src/components/SubNav.jsx` — 2차 카테고리 네비게이션
- `src/components/SectionNav.jsx` — 3차 섹션 앵커 네비게이션

### Files Changed
- **신규**: SubNav.jsx, SectionNav.jsx (2개)
- **수정**: site.css, dark-mode.css (2개)
- **수정**: 하위 페이지 JSX 25개 (vocabulary 4, toeic 3, writing 3, conversation 6, business 5, ai-chat 1, speech 1)
- **총 29개 파일**, +821 lines, -260 lines

### Build Result
- Build successful (vite v8.0.1, 628ms)
- 158.97 KB CSS (25.64 KB gzip)
- SubNav.js 1.76 KB, SectionNav.js 1.02 KB
- 423.38 KB main JS bundle (123.23 KB gzip)

### Architecture Notes
- 3단계 네비게이션 시스템: Navbar(1차) → SubNav(2차: 카테고리 형제) → SectionNav(3차: 페이지 내 섹션)
- 모든 nav는 sticky 고정: Navbar top:0 → SubNav top:nav-height → SectionNav top:nav-height+47px
- SubNav은 URL pathname 비교로 active 판정, SectionNav은 IntersectionObserver로 스크롤 기반 판정
- navData는 SubNav.jsx 내부 정적 정의, sections는 각 페이지 컴포넌트 내부 정의

---

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
