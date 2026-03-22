# English Pro - 변경 이력 (CHANGELOG)

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
