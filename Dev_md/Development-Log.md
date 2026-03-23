# English Pro - Development Log

## 2026-03-24: 대화 번역 줄바꿈 처리 (전체 5개 페이지, 23개 대화)

### Summary
일상 회화 페이지의 대화 번역문에서 화자별 구분이 ` / `로 이어져 있던 것을 `\n` 줄바꿈으로 변경하여 가독성을 대폭 개선했습니다.

### Problem
- 대화 번역이 한 줄에 모든 화자의 대사가 ` / `로 구분되어 길게 나열
- 화자 구분이 어렵고 영어 원문 대화와 대조하기 힘듦

### Changes Made
- 5개 대화 페이지의 23개 대화 번역에서 ` / ` → `\n` 줄바꿈 처리
- `className="translation"` → `className="translation dialogue-translation"` 변경
- 기존 `dialogue-translation { white-space: pre-line }` CSS로 줄바꿈 표시

### Files Changed (5개)
- **수정:** `Shopping.jsx` (4개 대화), `DailyLife.jsx` (5개 대화)
- **수정:** `Restaurant.jsx` (4개 대화), `Phone.jsx` (5개 대화), `Travel.jsx` (5개 대화)

---

## 2026-03-24: TOEIC UI 개선 + 발음 연습 확대 + MockTest CSS 수정

### Summary
TOEIC 학습 페이지의 UI를 대폭 개선하고, 발음 연습 예제를 3배 가까이 확대하며 비즈니스/실전 카테고리를 추가했습니다. MockTest 페이지의 누락된 CSS도 보완했습니다.

### Problem
- TOEIC Listening 페이지의 학습 팁이 세로 목록으로 나열되어 비효율적
- Reading 페이지의 혼동 어휘가 단순 텍스트로 구분이 어려움
- MockTest 페이지에 CSS가 전혀 적용되지 않아 레이아웃이 깨짐
- 발음 연습 예제가 12개로 제한적, 비즈니스/실전 상황 예제 부재

### Changes Made

#### 1. TOEIC 학습 팁 2×2 그리드 (`site.css`)
- `.tips-grid`: `auto-fill` → `repeat(2, 1fr)` 2×2 그리드 레이아웃
- `.tip-item`: `flex-direction: column`, 좌측 블루 보더 강조
- 모바일(≤768px): 1열 폴백

#### 2. 혼동 어휘 카드 UI (`Reading.jsx` + `site.css`)
- 데이터 구조 변경: 단순 텍스트 → `{wordA, descA, wordB, descB}` 객체
- `.confused-words-grid`: 2열 카드 그리드 레이아웃
- `.confused-card`: 블루(A) / 오렌지(B) 색상 코딩 + VS 구분자
- 다크모드 지원

#### 3. MockTest CSS 보완 (~300줄)
- `.mock-timer`: sticky 타이머, 경고 애니메이션 (`@keyframes warningPulse`)
- `.mock-question`: 문항 카드, 진행 표시줄
- `.mock-indicator`: 문항 번호 네비게이션 (answered/skipped/current 상태)
- `.mock-result`: 점수 카드, 파트별 분석 차트
- `.mock-review`: 복습 아이템, correct/incorrect 배지
- 반응형 + 다크모드 전체 지원

#### 4. 발음 연습 예제 확대 (`conversations.js` + `SpeechPractice.jsx`)
- 예제 수: 12개 → 34개 (약 3배)
- 기존 레벨: beginner(4→8), intermediate(5→8), advanced(3→6)
- 신규 카테고리: business(6개) — 회의, 마케팅, 파트너십 등
- 신규 카테고리: practical(6개) — 체크인, 환불, 병원, 식당 추천 등
- `SpeechPractice.jsx`: 레벨 필터에 비즈니스/실전 버튼 추가
- `speech.css`: 비즈니스(블루)/실전(퍼플) 배지 색상 추가 + 다크모드

### Files Changed (6개)
- **수정:** `src/styles/site.css` (tips-grid, confused-words, mock-test CSS)
- **수정:** `src/styles/dark-mode.css` (mock-test, confused-words, speech 다크모드)
- **수정:** `src/styles/speech.css` (business/practical 배지 색상)
- **수정:** `src/pages/toeic/Reading.jsx` (혼동 어휘 카드 레이아웃)
- **수정:** `src/data/conversations.js` (speechExamples 12→34개)
- **수정:** `src/components/speech/SpeechPractice.jsx` (비즈니스/실전 필터)

---

## 2026-03-24: 영단어 카드 컴팩트 레이아웃 + TTS 발음 듣기 + 예시 텍스트 개선

### Summary
영단어 카드 그리드를 3열에서 5열 컴팩트 레이아웃으로 변경하고, 영단어 카드와 모든 콘텐츠 페이지 영어 예시 문장에 Web Speech API 기반 TTS(발음 듣기) 기능을 추가했습니다. 또한 예시 텍스트의 폰트 크기를 조정하고 영한 번역을 줄바꿈 표시로 개선했습니다.

### Problem
- 영단어 카드가 3×3 배치로 개별 카드가 너무 커 한눈에 보기 어려움
- 영단어 발음을 듣는 기능이 없어 학습 효과가 제한적
- 콘텐츠 페이지 예시 문장(expression-list, dialogue)에도 발음 듣기 필요
- 예시 텍스트 폰트가 너무 작고, 영어/한글 번역이 같은 줄에 표시되어 가독성 저하
- Meeting 페이지에 깨진 한글 텍스트(인코딩 오류) 존재

### Changes Made

#### 1. 영단어 카드 컴팩트 레이아웃 (4개 Vocab 페이지)
- 그리드: `minmax(260px)` → `minmax(170px)`, 5열+ 레이아웃
- 카드 높이: `200px` → `140px`, 패딩: `20px` → `12px`
- 폰트 축소: card-word `1.5rem` → `1.15rem`, card-meaning `1.3rem` → `1.05rem`
- 모바일: 1열 → 2열 그리드로 변경
- gap: `16px` → `10px`

#### 2. 영단어 카드 발음 듣기 (4개 Vocab 페이지)
- Web Speech API (`SpeechSynthesis`) 기반 TTS 기능 추가
- 카드 앞면 발음 기호 옆에 스피커 버튼 배치
- Font Awesome `fa-volume-up` 아이콘 + 각 페이지 주컬러 적용
  - Basic: `#4A90D9`, Daily: `#27AE60`, Business: `#E67E22`, TOEIC: `#8E44AD`
- `stopPropagation`으로 카드 플립과 독립 동작

#### 3. 글로벌 TTS 스피커 자동 삽입 (`PageLayout.jsx`)
- `useEffect`로 콘텐츠 영역 내 영어 문장에 스피커 버튼 자동 삽입
- `.expression-list li code` 옆 + `.dialogue p` 끝에 자동 배치
- 개별 페이지 수정 없이 16개 콘텐츠 페이지 전체 적용
- CSS: `.tts-btn` 스타일 + 다크모드 지원

#### 4. 예시 텍스트 크기 조정 + 줄바꿈 (`site.css`)
- `.expression-list li`: `0.9rem` → `1.2rem` (확대 후 0.9배 조정)
- `.translation`: `0.85rem` → `1.15rem`, `display: block` + `margin-top: 4px`로 줄바꿈
- 영어 문장과 한글 번역이 별도 줄에 표시

#### 5. 버그 수정
- Meeting 페이지 깨진 한글 `[?좎쭨] [?쒓컙]` → `[날짜] [시간]` 수정

### Files Changed (10개)
- **수정:** `src/components/PageLayout.jsx` (글로벌 TTS)
- **수정:** `src/styles/site.css` (tts-btn, expression-list, translation)
- **수정:** `src/styles/dark-mode.css` (tts-btn 다크모드)
- **수정:** `src/styles/vocabulary.css` (그리드/카드 크기)
- **수정:** `src/pages/vocabulary/VocabBasic.jsx`, `VocabDaily.jsx`, `VocabBusiness.jsx`, `VocabToeic.jsx`
- **수정:** `src/pages/business/Meeting.jsx` (텍스트 오류)

---

## 2026-03-24: 사이드바 트리 네비게이션 통합 + ToC 가독성 개선 + 타이틀 영문 축소

### Summary
데스크톱 사이드바에 2차 메뉴(SubNav)와 3차 메뉴(섹션 앵커)를 통합 트리 네비게이션으로 구현했습니다. 현재 페이지의 2차 메뉴 항목 아래에 3차 메뉴(페이지 내 섹션)가 드롭다운으로 표시됩니다. 또한 ToC 줄간격 가독성을 개선하고, 페이지 타이틀의 영문 괄호 부분을 0.7em으로 축소했습니다.

### Problem
- SubNav가 page-header 아래 독립적 가로 바로 표시되어 사이드바와의 연결성이 약함
- ToC와 카테고리 네비게이션이 분리되어 시각적 통일성이 부족함
- ToC 항목 간 줄간격이 좁아 가독성이 떨어짐
- 한글 타이틀에 포함된 영문 괄호 부분이 너무 커서 시각적 비중이 과함

### Changes Made

#### 1. 통합 트리 네비게이션 (`PageLayout.jsx`)
- `category` prop 추가, `navData`/`categoryTitles`를 SubNav에서 import
- 데스크톱: 2차 메뉴 + 3차 메뉴를 하나의 통합 트리로 구성
  - 카테고리 헤더 토글(접기/펼치기) → 2차 메뉴 항목 나열
  - 현재 페이지(활성 항목)는 `sidebar-nav__link--active`로 하이라이트
  - 현재 페이지 아래에 3차 메뉴(섹션 앵커) 드롭다운 표시
  - 비활성 항목은 `<Link>`로 다른 페이지 이동
- 모바일: `.sub-nav-mobile`로 기존 SubNav 가로 바 유지
- `category` 없는 페이지는 기존 ToC 목차 표시 (fallback)
- IntersectionObserver로 활성 섹션 자동 추적, 활성 항목 자동 스크롤

```
┌───────────────────────┐
│ 일상 회화            ▾ │  ← 카테고리 헤더 (토글)
│   인사 & 소개          │  ← 현재 페이지 (하이라이트)
│   ├ 기본 인사          │  ← 3차 메뉴 (섹션 앵커)
│   ├ 자기소개           │
│   ├ 실전 대화          │
│   └ 핵심 표현          │
│   일상생활             │  ← 다른 페이지 (Link)
│   쇼핑                │
│   여행                │
└───────────────────────┘
```

#### 2. SubNav.jsx 수정
- `navData`, `categoryTitles` export 추가 (PageLayout에서 import용)

#### 3. CSS 수정 (`site.css`)
- `.sidebar-nav` 카테고리 네비게이션 스타일 신규 추가
- `.sidebar-nav__sections` 3차 메뉴 스타일 (좌측 border-left 라인, 들여쓰기)
- `.sidebar-nav__section-link` 섹션 링크 스타일 (0.8rem, active 하이라이트)
- `.toc-list` gap: `var(--space-xs)` → `4px`, `.toc-link` padding: `10px 14px`, `line-height: 1.5`
- `.sub-nav-mobile` 데스크톱 숨김 / 모바일 표시 규칙 추가
- `.page-header__en` 영문 스타일 추가 (`font-size: 0.7em`, `font-weight: 400`, `opacity: 0.85`)

#### 4. 다크모드 (`dark-mode.css`)
- `.sidebar-nav`, `.sidebar-nav__toggle`, `.sidebar-nav__link` 다크모드 오버라이드
- `.sidebar-nav__sections`, `.sidebar-nav__section-link` 다크모드 오버라이드

#### 5. 16개 PageLayout 페이지 수정
- SubNav import 제거, `category` prop을 PageLayout에 전달
- 대상: Greetings, DailyLife, Shopping, Travel, Restaurant, Phone, Meeting, Presentation, EmailWriting, Negotiation, Interview, Listening, Reading, BasicSentence, Paragraph, Essay

#### 6. 10개 타이틀 영문 0.7em 축소
- `{t('Korean (English)', ...)}` → `{language === 'ko' ? <>Korean <span className="page-header__en">(English)</span></> : 'English'}`
- 대상: Greetings, DailyLife, Shopping, Travel, Restaurant, Phone, Listening, Reading, Paragraph, Essay

### Files Changed (20개)
- **수정:** `src/components/PageLayout.jsx`, `src/components/SubNav.jsx`
- **수정:** `src/styles/site.css`, `src/styles/dark-mode.css`
- **수정:** 16개 페이지 JSX 파일

---

## 2026-03-24: 전체 콘텐츠 페이지 사이드바 레이아웃 리뉴얼

### Summary
16개 콘텐츠 페이지에 왼쪽 사이드바(목차) + 오른쪽 콘텐츠 박스 2단 레이아웃을 적용하여 시각적 구조를 강화했습니다. 모바일에서는 기존 SectionNav 가로 칩 UI를 유지합니다.

### Problem
- 페이지마다 너비가 달라 (1100px / 800px / 제한없음) 일관성이 없음
- 콘텐츠가 단일 컬럼으로 나열되어 시각적 구조가 약함
- 긴 페이지에서 현재 위치를 파악하기 어려움

### Changes Made

#### 신규 컴포넌트: `PageLayout.jsx`
- 재사용 가능한 사이드바 + 콘텐츠 래퍼 컴포넌트
- IntersectionObserver로 활성 섹션 자동 추적 (SectionNav과 동일 로직)
- 데스크톱(>1024px): 왼쪽 260px 사이드바 ToC + 오른쪽 콘텐츠 박스
- 모바일(≤1024px): SectionNav 가로 칩 표시, 사이드바 숨김
- 활성 ToC 항목 자동 스크롤 (`scrollIntoView`)

#### CSS 수정: `site.css`
- `.content-layout` grid: `1fr 280px` → `260px 1fr` (좌우 반전)
- `.content-main` 박스 스타일: `border-radius: 16px`, `padding: 40px`, `box-shadow`
- `.section-nav-mobile` 데스크톱/모바일 표시 분기
- 내부 래퍼 중첩 무력화: `.content-main .container`, `.content-main .content-page`, `.content-main .lesson-body`, `.content-main .lesson-content`

#### 다크모드: `dark-mode.css`
- `.content-sidebar`: 투명 배경
- `.content-main`: `var(--bg-light-gray)` 배경 + 다크 보더/그림자
- `.toc`, `.toc-link`, `.toc-link.active` 다크 오버라이드

#### 16개 페이지 JSX 수정 (3가지 패턴)
**패턴 A — TOEIC/Writing (5개):** `SectionNav` → `PageLayout` 래핑, `content-page` div 유지
- Listening, Reading, Essay, Paragraph, BasicSentence

**패턴 B — Business (5개):** `section.lesson-content > .container` 제거, `PageLayout` + `lesson-body`만 유지
- Meeting, Interview, EmailWriting, Negotiation, Presentation

**패턴 C — Conversation (6개):** `SectionNav` → `PageLayout` 래핑, 내부 `.container` CSS로 무력화
- Phone, Restaurant, Travel, Shopping, DailyLife, Greetings

### Files Changed (19개)
- **신규:** `src/components/PageLayout.jsx`
- **수정:** `src/styles/site.css`, `src/styles/dark-mode.css`
- **수정:** 16개 페이지 JSX 파일

### Build Result
- Build successful (vite v8.0.1, 635ms)
- 165.90 KB CSS (26.65 KB gzip)
- PageLayout.js 3.04 KB (1.09 KB gzip)
- 423.38 KB main JS bundle (123.24 KB gzip)

### Architecture Notes
- `PageLayout`은 `SectionNav`을 내부적으로 임포트하여 모바일에서 재사용
- IntersectionObserver `rootMargin: '-150px 0px -60% 0px'`으로 SectionNav과 동일한 감지 로직
- CSS `.content-main .container { max-width: none; padding: 0; }`로 중첩 컨테이너 무력화하여 JSX 변경 최소화
- 사이드바 `position: sticky`, `max-height: calc(100vh - nav)`, `overflow-y: auto`로 긴 목차 스크롤 지원

---

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
