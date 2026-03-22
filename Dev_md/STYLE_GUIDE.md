# English Pro - 스타일 가이드

## 컬러 팔레트

### 다크 모드 (기본)

| 용도 | 변수 | 색상 |
|------|------|------|
| 메인 배경 | `--bg-primary` | #0A1628 |
| 보조 배경 | `--bg-secondary` | #0F1D32 |
| 카드 배경 | `--bg-card` | #132238 |
| 메인 텍스트 | `--text-primary` | #E8ECF1 |
| 보조 텍스트 | `--text-secondary` | #8899AA |
| 메인 액센트 | `--accent-primary` | #4A8FE7 |
| 보조 액센트 | `--accent-secondary` | #1E3A5F |
| 성공 | `--success` | #22C55E |
| 경고 | `--warning` | #F59E0B |
| 에러 | `--danger` | #EF4444 |

### 라이트 모드

| 용도 | 색상 |
|------|------|
| 메인 배경 | #F8FAFC |
| 보조 배경 | #F1F5F9 |
| 카드 배경 | #FFFFFF |
| 메인 텍스트 | #1E293B |
| 메인 액센트 | #2563EB |

### 카테고리별 색상

| 카테고리 | 색상 | 용도 |
|----------|------|------|
| 기초 영단어 | #4A90D9 | 프로그레스, 필터, 버튼 |
| 비즈니스 영단어 | #E67E22 | 프로그레스, 필터, 버튼 |
| TOEIC 영단어 | #9B59B6 | 프로그레스, 필터, 버튼 |
| 일상 영단어 | #27AE60 | 프로그레스, 필터, 버튼 |

---

## 타이포그래피

### 폰트
- 시스템 폰트 스택 사용 (별도 웹폰트 미사용)
- `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### 크기
| 요소 | 크기 |
|------|------|
| h1 | 2.5rem (clamp 사용) |
| h2 | 2rem |
| h3 | 1.5rem |
| h4 | 1.25rem |
| body | 1rem (16px) |
| small | 0.875rem |
| badge | 0.75rem |

---

## 컴포넌트 스타일

### 버튼
```css
.btn              /* 기본 버튼 */
.btn-primary      /* 그라디언트 액센트 */
.btn-secondary    /* 아웃라인 */
.btn-ghost        /* 배경 없음 */
.btn-sm           /* 작은 크기 */
.btn-lg           /* 큰 크기 */
.btn-icon         /* 아이콘 전용 */
```

### 카드
```css
.card             /* 기본 카드 */
.card-glass       /* Glassmorphism 카드 */
.card-flat        /* 플랫 카드 */
```

### 레이아웃
```css
.container        /* 최대 1200px */
.container-narrow /* 최대 800px */
```

---

## CSS 클래스 네이밍 규칙

### BEM 스타일
```
.page-header              /* Block */
.page-header__subtitle    /* Element */
.btn--primary             /* Modifier */
.btn--active              /* State Modifier */
```

### 페이지별 클래스
```css
/* 콘텐츠 페이지 */
.lesson-section           /* 레슨 섹션 */
.example-box              /* 예시 박스 */
.tip-box                  /* 팁 박스 */
.practice-section         /* 연습 문제 */
.dialogue                 /* 대화 예시 */
.speaker.a / .speaker.b   /* 화자 구분 */

/* 단어장 */
.vocab-container          /* 단어장 컨테이너 */
.vocab-card               /* 단어 카드 */
.vocab-card.flipped       /* 뒤집힌 카드 */
.vocab-card-front         /* 카드 앞면 */
.vocab-card-back          /* 카드 뒷면 */

/* 챗봇 */
.chat-container           /* 채팅 컨테이너 */
.chat-message             /* 메시지 */
.chat-bubble              /* 말풍선 */
.typing-indicator         /* 타이핑 표시 */

/* 음성 */
.mic-button               /* 마이크 버튼 */
.mic-button.recording     /* 녹음 중 */
.speech-result            /* 결과 표시 */
.accuracy-meter           /* 정확도 미터 */
```

---

## 애니메이션

### AOS (Animate On Scroll)
```html
<div data-aos="fade-up">              <!-- 아래에서 위로 페이드 -->
<div data-aos="fade-up" data-aos-delay="100">  <!-- 100ms 지연 -->
<div data-aos="zoom-in">              <!-- 확대 페이드 -->
```

### 지원 방향
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`, `zoom-in-up`
- `flip-up`, `slide-up`
- 지연: 100ms ~ 800ms (100ms 단위)

### 키프레임 애니메이션
- `heroGradient` - 배경 그라디언트 이동
- `particleFloat` - 파티클 부유
- `pulseRing` - 마이크 펄스
- `shimmer` - 스켈레톤 로딩
- `typingDot` - 타이핑 인디케이터

---

## 반응형 브레이크포인트

| 이름 | 크기 | 변경사항 |
|------|------|----------|
| Desktop | > 1024px | 전체 레이아웃 |
| Tablet | ≤ 1024px | 햄버거 메뉴, 2컬럼 |
| Mobile | ≤ 768px | 1컬럼, 모바일 메뉴 |
| Small | ≤ 480px | 압축 레이아웃 |
| Large | ≥ 1400px | 확장 컨테이너 |

---

## Glassmorphism 효과

### Navbar
```css
.navbar {
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(74, 143, 231, 0.1);
}
```

### Auth Card
```css
.auth-card {
  background: rgba(15, 29, 50, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 143, 231, 0.15);
}
```

---

## 접근성 가이드

- 색상 대비: WCAG 2.1 AA 기준 충족
- 포커스 스타일: `focus-visible` 아웃라인
- 모션 제한: `prefers-reduced-motion: reduce` 지원
- 스크린 리더: ARIA 속성, 시맨틱 HTML
- 키보드 탐색: 탭 순서, 모달 포커스 트랩
