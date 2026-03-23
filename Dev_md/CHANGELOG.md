# English Pro - 변경 이력 (CHANGELOG)

## v2.4.0 (2026-03-24)

### 전체 콘텐츠 페이지 사이드바 레이아웃 리뉴얼

**신규 컴포넌트 — `PageLayout.jsx`:**
- 재사용 가능한 사이드바(ToC) + 콘텐츠 박스 2단 레이아웃 래퍼
- IntersectionObserver 기반 활성 섹션 자동 추적
- 데스크톱(>1024px): 왼쪽 260px 사이드바 ToC + 오른쪽 콘텐츠 박스
- 모바일(≤1024px): 기존 SectionNav 가로 칩 UI 유지, 사이드바 숨김
- 활성 ToC 항목 자동 스크롤 (`scrollIntoView`)

**CSS 수정:**
- `.content-layout` grid: `1fr 280px` → `260px 1fr` (좌우 반전)
- `.content-main` 박스 스타일: `border-radius: 16px`, `padding: 40px`, `box-shadow`
- `.section-nav-mobile` 데스크톱/모바일 표시 분기
- 내부 래퍼 중첩 무력화: `.content-main .container`, `.content-main .content-page` 등

**다크모드:**
- `.content-sidebar` 투명 배경, `.content-main` 다크 배경 + 그림자
- `.toc`, `.toc-link`, `.toc-link.active` 다크 오버라이드

**16개 페이지 JSX 수정 (3가지 패턴):**
- 패턴 A (TOEIC/Writing 5개): `SectionNav` → `PageLayout` 래핑
- 패턴 B (Business 5개): `lesson-content > container` 제거, `PageLayout` + `lesson-body`
- 패턴 C (Conversation 6개): `SectionNav` → `PageLayout` 래핑, 내부 container CSS 무력화

**파일 변경 (19개):**
- 신규: `src/components/PageLayout.jsx`
- 수정: `src/styles/site.css`, `src/styles/dark-mode.css`
- 수정: 16개 페이지 JSX 파일

---

## v2.3.0 (2026-03-24)

### SubNav / SectionNav 프리미엄 디자인 리뉴얼

**SubNav → Glass Underline Tab:**
- 글래스모피즘 배경 (`backdrop-filter: blur(12px)`) + 미세 box-shadow
- pill 버튼 제거 → 클린한 탭 스타일, 하단 2.5px 언더라인 애니메이션
- hover 시 60% 너비 언더라인 힌트, 활성 시 100% 언더라인
- 패딩 14px 20px 터치 타겟 확보

**SectionNav → Tinted Chip Bar:**
- 배경색 `var(--bg-light-gray)` 띠로 SubNav과 시각적 구분
- 활성 칩: `border-color: var(--primary-blue)` + 흰 배경 + box-shadow
- hover 시 흰 배경 + 보더로 떠오르는 효과

**모바일 스크롤 인디케이터:**
- `::before`/`::after` 그라데이션 페이드로 스크롤 가능 콘텐츠 암시
- JS scrollLeft 감지, `--fade-left`/`--fade-right` 클래스 토글

**다크모드:**
- SubNav: `rgba(17,24,39,0.8)` 다크 글래스, SectionNav: `var(--bg-secondary)` 배경
- 페이드 그라데이션 다크 배경색 적용

**파일 변경 (4개):**
- `src/styles/site.css` — SubNav/SectionNav CSS 전면 교체
- `src/styles/dark-mode.css` — 다크모드 오버라이드 교체
- `src/components/SubNav.jsx` — 스크롤 감지 추가
- `src/components/SectionNav.jsx` — 스크롤 감지 추가

---

## v2.2.0 (2026-03-24)

### 전체 하위 페이지 UX 개선 — page-header 표준화 + 2차/3차 네비게이션

**page-header 표준화 (12개 페이지):**
- 단어장 4개, TOEIC 3개, 작문 3개, AI Chat, Speech 하위 페이지에 표준 page-header 적용
- 그래디언트 배경 + 흰색 텍스트 + FA 셰브론 브레드크럼 통일
- SEOHead 메타 태그, useLanguage 다국어, useAOS 애니메이션 추가
- 구 스타일(`vocab-header`, `content-page__header`) 제거

**SubNav 2차 메뉴 (신규 컴포넌트):**
- `src/components/SubNav.jsx` 신규 생성
- 5개 카테고리(conversation, business, vocabulary, writing, toeic) 형제 페이지 탭
- 21개 하위 페이지 적용, sticky 고정, 현재 페이지 하이라이트
- 다크모드 대응, 모바일 가로 스크롤 지원

**SectionNav 3차 메뉴 (신규 컴포넌트):**
- `src/components/SectionNav.jsx` 신규 생성
- IntersectionObserver 기반 스크롤 스파이
- 16개 페이지에 페이지 내 섹션 앵커 탭 적용
- 클릭 시 smooth scroll, 현재 섹션 자동 하이라이트

**본문 폰트 크기 통일:**
- `.lesson-section h2` 2.5rem → 1.5rem
- `.content-page h2` 2.5rem → 1.4rem
- h3, h4, p 등 전체 heading 정규화

**파일 변경 (29개):**
- 신규: `SubNav.jsx`, `SectionNav.jsx`
- 수정: `site.css`, `dark-mode.css`
- 수정: 하위 페이지 JSX 25개

---

## v2.1.0 (2026-03-23)

### Font Awesome 아이콘 + 푸터 리뉴얼 + OG/SEO 개선

**아이콘 시스템 교체:**
- Font Awesome 6.5 CDN 추가
- 메인 페이지 이모지 10개를 FA 아이콘으로 교체 (주컬러 스타일)
- 커리큘럼 카드: `fa-comments`, `fa-briefcase`, `fa-book`, `fa-pen-nib`, `fa-graduation-cap`, `fa-robot`, `fa-microphone`
- 피처 카드: `fa-robot`, `fa-microphone-lines`, `fa-book-open`
- `CURRICULUM_CARDS`에 `icon` 필드 추가 (FA 클래스명)

**푸터 리뉴얼 (db-study 패턴 적용):**
- GitHub/Twitter/YouTube 소셜 링크 제거
- 연락처 추가: 이메일, 전화, 카카오톡, 영업시간 (SVG 아이콘)
- 사업자 정보: 대표이사, 사업자등록번호, 통신판매신고번호, 출판사 신고번호
- Family Site 드롭다운 추가 (`FAMILY_SITES` 설정)

**OG/SEO 개선:**
- `og:site_name` 메타 태그 추가 (index.html + SEOHead.jsx)
- `og-image.svg` 생성 (브랜드 디자인)

**CSS 보완:**
- `.page-header h1` 스타일 추가 (클래스 없는 bare h1 지원)
- `.page-header__subtitle` 별칭 추가
- 다크 모드 `page-header h1`/`__subtitle` 색상 오버라이드
- `--primary-blue-rgb: 0, 70, 200` 변수 추가

**파일 변경 (11개):**
- `index.html` - Font Awesome CDN, og:site_name, og:image 경로
- `src/config/site.js` - CURRICULUM_CARDS icon 필드, FAMILY_SITES 추가
- `src/pages/Home.jsx` - FA 아이콘 적용, 필드명 수정
- `src/components/layout/Footer.jsx` - 전면 리뉴얼
- `src/components/SEOHead.jsx` - og:image 경로 업데이트
- `src/styles/base.css` - --primary-blue-rgb 추가
- `src/styles/hero.css` - 아이콘 color: var(--primary-blue)
- `src/styles/footer.css` - Family Site, 연락처, 메타 스타일
- `src/styles/site.css` - page-header h1, __subtitle
- `src/styles/dark-mode.css` - page-header 다크 오버라이드
- `public/og-image.svg` - OG 이미지 신규

---

## v2.0.0 (2026-03-23)

### KoreaTech 디자인 시스템 100% 적용

**디자인 철학 전환: Dark-First → Light-First**

전체 CSS 변수 시스템을 KoreaTech 라이트 우선 디자인으로 전면 교체.

**핵심 변경사항:**

| 항목 | v1.x | v2.0 |
|------|------|------|
| 기본 테마 | Dark (#0A1628) | Light (#FFFFFF) |
| 메인 컬러 | --accent: #4A8FE7 | --primary-blue: #0046C8 |
| 폰트 | 시스템 폰트 | Noto Sans KR |
| 컨테이너 | 1200px | 1280px |
| Nav 높이 | 70px | 80px |
| 글래스모피즘 | rgba(10,22,40,0.85) | rgba(255,255,255,0.85) |
| 다크모드 | `[data-theme="light"]` 오버라이드 | `[data-theme="dark"]` 오버라이드 |
| 컬러 테마 | 없음 | 5개 (blue/red/green/purple/orange) |

**CSS 파일 변경 (12개):**
- `base.css` - 전면 교체: 라이트 우선 변수 시스템, 5색 컬러 테마
- `navbar.css` - 전면 교체: 라이트 글래스모피즘, 컬러 피커
- `hero.css` - 전면 교체: 파티클, 스크롤 인디케이터, 캐러셀
- `footer.css` - 전면 교체: 다크 그라디언트 (#111827 → #0A0F1A)
- `dark-mode.css` - 전면 교체: `[data-theme="dark"]` 오버라이드
- `animations.css` - 전면 교체: 5종 AOS, cubic-bezier easing
- `responsive.css` - 전면 교체: 1100/1024/768/480px 브레이크포인트
- `auth.css` - 전면 교체: KoreaTech 카드형 로그인
- `site.css` - 변수명 업데이트
- `chatbot.css` - 변수명 업데이트
- `speech.css` - 변수명 업데이트
- `vocabulary.css` - 변수명 업데이트

**JSX 변경 (2개):**
- `ThemeContext.jsx` - 컬러 테마 상태 추가 (`colorTheme`, `setColorTheme`)
- `Navbar.jsx` - 5색 컬러 피커 UI 추가

**HTML 변경 (1개):**
- `index.html` - Noto Sans KR Google Fonts 추가

---

## v1.3.0 (2026-03-23)

### 비즈니스 영어 페이지 전면 개선

**디자인 패턴 변경 (db-study 참조 적용):**
- 모든 비즈니스 하위 페이지를 `lesson-content > lesson-body` 패턴으로 전면 재구성
- 기존 `lesson-section` 카드 분리 방식 → 하나의 연속된 레슨 본문 흐름으로 변경
- `max-width: 800px` lesson-body 타이포그래피 시스템 적용

**신규 CSS 컴포넌트 추가 (site.css):**
- `.lesson-content`, `.lesson-body` - 레슨 본문 레이아웃 + 타이포그래피
- `.callout-box` - 학습 목표 박스
- `.exercise-box` - 연습 문제 박스
- `.lesson-table` - 레슨 테이블
- `.lesson-nav`, `.lesson-nav-btn` - 이전/다음 레슨 네비게이션
- `.email-template` - 이메일 템플릿 박스

**페이지별 변경:**
- `BusinessHome.jsx` - callout-box 학습 목표, 추천 학습 순서 추가
- `EmailWriting.jsx` - 4단계 이메일 구조, 3개 템플릿, 톤 구별 표
- `Presentation.jsx` - 오프닝/전환/데이터/Q&A/마무리 5단계
- `Meeting.jsx` - 시작/의견/동의·반대/행동항목/마무리 + 대화 예시
- `Negotiation.jsx` - 시작/제안/반대제안/타협/체결
- `Interview.jsx` - 자기소개/장단점/경력/STAR/Q&A/연봉

---

## v1.2.0 (2025-03-23)

### 누락 CSS 클래스 대량 추가 (site.css +1,000줄)

**공통 컴포넌트:**
- `content-page` 레이아웃, `card-grid` 반응형 그리드
- `topic-card`, `tip-card`, `info-box`, `part-card` 등

**페이지별:**
- `dashboard` 전체 (progress-card, action-card, activity-list)
- `settings` 전체 (API키 관리, 테마/언어 옵션)
- `dialogue`, `speaker`, `translation` 대화 예시

---

## v1.1.0 (2025-03-23)

### CSS BEM 클래스명 전면 수정
- 모든 CSS 파일 BEM 네이밍 전환
- `vite.config.js`: `base: '/'` 변경 (커스텀 도메인)
- CNAME 자동 복사 플러그인 추가

---

## v1.0.0 (2025-03-22)

### 초기 구현
- React 19 + Vite 8 프로젝트
- 6개 학습 섹션 (회화, 비즈니스, 단어, 작문, TOEIC, AI)
- Supabase 인증, OpenAI API 챗봇, Web Speech API 음성 인식
- Glassmorphism UI, AOS 애니메이션
- GitHub Pages 배포 (english.dreamitbiz.com)
