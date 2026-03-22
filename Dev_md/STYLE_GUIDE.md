# English Pro - 스타일 가이드

> v2.1.0 - KoreaTech 디자인 시스템 + Font Awesome 아이콘

## 컬러 팔레트

### 라이트 모드 (기본)

| 용도 | 변수 | 색상 |
|------|------|------|
| 메인 배경 | `--bg-white` | #FFFFFF |
| 보조 배경 | `--bg-light-gray` | #F5F7FA |
| 중간 배경 | `--bg-medium-gray` | #E8EDF2 |
| 메인 텍스트 | `--text-primary` | #111827 |
| 보조 텍스트 | `--text-secondary` | #4B5563 |
| 연한 텍스트 | `--text-light` | #5B6370 |
| 흰색 텍스트 | `--text-white` | #FFFFFF |
| 메인 컬러 | `--primary-blue` | #0046C8 |
| 메인 어두운 | `--primary-blue-dark` | #002E8A |
| 메인 밝은 | `--primary-blue-light` | #4A8FE7 |
| 메인 배경색 | `--primary-blue-bg` | rgba(0, 70, 200, 0.06) |
| 메인 RGB | `--primary-blue-rgb` | 0, 70, 200 |
| 성공 | `--success` | #22C55E |
| 경고 | `--warning` | #F59E0B |
| 에러 | `--error` | #EF4444 |
| 정보 | `--info` | #3B82F6 |

### 다크 모드 (`[data-theme="dark"]`)

| 용도 | 색상 |
|------|------|
| 메인 배경 | #111827 |
| 보조 배경 | #1F2937 |
| 중간 배경 | #374151 |
| 메인 텍스트 | #F9FAFB |
| 보조 텍스트 | #D1D5DB |
| 메인 컬러 | #4A8FE7 |

### 5색 컬러 테마

| 이름 | 메인 컬러 | 적용 방법 |
|------|-----------|-----------|
| Blue (기본) | #0046C8 | 기본값 (data-color 없음) |
| Red | #C8102E | `html[data-color="red"]` |
| Green | #00855A | `html[data-color="green"]` |
| Purple | #8B1AC8 | `html[data-color="purple"]` |
| Orange | #C87200 | `html[data-color="orange"]` |

### 카테고리별 색상 (영단어)

| 카테고리 | 색상 | 용도 |
|----------|------|------|
| 기초 영단어 | #4A90D9 | 프로그레스, 필터, 버튼 |
| 비즈니스 영단어 | #E67E22 | 프로그레스, 필터, 버튼 |
| TOEIC 영단어 | #9B59B6 | 프로그레스, 필터, 버튼 |
| 일상 영단어 | #27AE60 | 프로그레스, 필터, 버튼 |

---

## 아이콘 (Font Awesome 6.5)

- **CDN**: `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- **사용 방식**: `<i className="fa-solid fa-icon-name"></i>`
- **기본 색상**: `color: var(--primary-blue)` (주컬러)
- **hover**: 배경 전환 (`--primary-blue`), 아이콘 흰색

### 커리큘럼 카드 아이콘

| 카드 | 아이콘 | 클래스 |
|------|--------|--------|
| 일상 회화 | 말풍선 | `fa-solid fa-comments` |
| 비즈니스 | 서류가방 | `fa-solid fa-briefcase` |
| 영단어 | 책 | `fa-solid fa-book` |
| 작문 | 펜 | `fa-solid fa-pen-nib` |
| TOEIC | 학사모 | `fa-solid fa-graduation-cap` |
| AI 대화 | 로봇 | `fa-solid fa-robot` |
| 발음 | 마이크 | `fa-solid fa-microphone` |

---

## 타이포그래피

### 폰트
- **기본 폰트**: `'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Google Fonts**: Noto Sans KR (400, 500, 600, 700)
- **아이콘 폰트**: Font Awesome 6.5 (CDN)
- **한글 처리**: `word-break: keep-all`

### 크기
| 요소 | 크기 |
|------|------|
| h1 (Hero) | 60px |
| h2 (Section Title) | 42px |
| h3 | 1.5rem |
| h4 | 1.25rem |
| body | 1rem (16px) |
| small | 0.875rem |
| badge | 0.75rem |

---

## 레이아웃 변수

| 변수 | 값 | 용도 |
|------|-----|------|
| `--nav-height` | 80px | 네비게이션 높이 |
| `--container-max` | 1280px | 최대 컨테이너 너비 |
| `--container-narrow` | 800px | 좁은 컨테이너 |
| `--section-padding` | 80px | 섹션 상하 패딩 |
| `--sidebar-width` | 280px | 사이드바 너비 |

---

## 그라디언트

| 변수 | 값 | 용도 |
|------|-----|------|
| `--primary-gradient` | `135deg, #0046C8 → #4A8FE7` | 버튼, 아이콘 |
| `--accent-gradient` | `135deg, #002E8A → #0046C8 → #4A8FE7` | 장식 요소 |
| `--hero-bg` | `135deg, #0046C8 → #002E8A → #1E3A5F` | 히어로, 페이지 헤더 |
| `--highlight-gradient` | `135deg, #93C5FD → #BFDBFE → #FFFFFF` | 강조 텍스트 |

---

## 컴포넌트 스타일

### 버튼
```css
.btn-primary          /* 메인 버튼 (primary-blue bg, white text) */
.btn-secondary        /* 보조 버튼 (transparent bg, border) */
.btn-primary-large    /* 큰 메인 버튼 */
.btn-link             /* 링크 스타일 버튼 */
.btn--primary         /* BEM: 그라디언트 액센트 */
.btn--outline         /* BEM: 아웃라인 */
.btn--lg / --sm       /* BEM: 크기 */
.btn--full            /* BEM: 전체 너비 */
.btn--google          /* BEM: Google 로그인 */
.btn--danger          /* BEM: 삭제/위험 */
```

### 카드
```css
.card             /* 기본 카드 (bg-white, border, shadow) */
.card-glass       /* Glassmorphism 카드 */
.card-flat        /* 플랫 카드 */
```

### 섹션 헤더
```css
.section-header     /* 섹션 헤더 래퍼 (중앙 정렬) */
.section-title      /* 섹션 제목 (42px, primary) */
.section-subtitle   /* 섹션 부제 (18px, text-secondary) */
```

---

## CSS 클래스 네이밍

### BEM 스타일
```
.page-header              /* Block */
.page-header__subtitle    /* Element */
.btn--primary             /* Modifier */
.btn--active              /* State */
```

### 주요 클래스
```css
/* 레이아웃 */
.container / .container-narrow
.site-wrapper / .site-main      /* Sticky footer */

/* 레슨 본문 */
.lesson-content / .lesson-body
.callout-box / .exercise-box / .lesson-table / .lesson-nav

/* 챗봇 / 음성 / 단어장 */
.chatbot / .chatbot__message--user / --assistant
.speech-practice / .speech-practice__mic-btn
.vocab-card / .vocab-card.flipped
```

---

## Glassmorphism 효과

### Navbar (라이트)
```css
.navbar {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
```

### Navbar (다크)
```css
[data-theme="dark"] .navbar {
  background: rgba(17, 24, 39, 0.85);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}
```

---

## Border Radius

| 변수 | 값 |
|------|-----|
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 16px |
| `--radius-xl` | 20px |
| `--radius-full` | 9999px |

---

## Shadow

| 변수 | 값 |
|------|-----|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)` |
| `--shadow-lg` | `0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)` |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)` |

---

## 애니메이션

### AOS (Animate On Scroll)
```html
<div data-aos="fade-up">              <!-- 아래에서 위로 -->
<div data-aos="fade-up" data-aos-delay="100">
<div data-aos="zoom-in">              <!-- 확대 페이드 -->
```

### 지원 방향 (5종)
- `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Travel distance: `24px` / scale `0.95`

### 키프레임
- `float-particle` - 파티클 부유
- `shape-float` - 히어로 도형
- `scroll-bounce` - 스크롤 인디케이터
- `pulseRing` - 마이크 펄스
- `spin` - 로딩 스피너

---

## 반응형 브레이크포인트

| 이름 | 크기 | 변경사항 |
|------|------|----------|
| Desktop | > 1100px | 전체 레이아웃 |
| Tablet+ | ≤ 1024px | 2컬럼 그리드, 축소 타이포 |
| Tablet | ≤ 768px | 1컬럼, 모바일 메뉴 |
| Mobile | ≤ 480px | 압축 레이아웃 |

> 네비게이션 모바일 전환: 1100px

---

## 접근성 가이드

- 색상 대비: WCAG 2.1 AA 기준 충족
- 포커스 스타일: `focus-visible` 아웃라인 (`--primary-blue`)
- 모션 제한: `prefers-reduced-motion: reduce` 지원
- 스크린 리더: ARIA 속성, 시맨틱 HTML
- 키보드 탐색: 탭 순서, 모달 포커스 트랩
