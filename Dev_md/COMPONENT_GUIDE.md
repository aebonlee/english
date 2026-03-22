# English Pro - 컴포넌트 가이드

> v2.1.0 - KoreaTech 디자인 시스템 + Font Awesome 아이콘

## 컴포넌트 총 48개

---

## 레이아웃 컴포넌트

### Navbar (`src/components/layout/Navbar.jsx`)
- **역할**: 반응형 네비게이션 바 (라이트 글래스모피즘)
- **주요 기능**:
  - 데스크톱: 드롭다운 메뉴 (일상회화, 비즈니스, 영단어, 영작문, TOEIC)
  - 모바일: 햄버거 메뉴 + 슬라이드 패널
  - 테마 토글 (auto/light/dark 3단계)
  - **컬러 피커** (5색: blue/red/green/purple/orange)
  - 언어 토글 (KO/EN)
  - 로그인 버튼 / 사용자 메뉴
  - 스크롤 시 배경 변경 (`scrolled` 클래스)
- **CSS**: `navbar.css`
- **Context 사용**: ThemeContext (`colorTheme`, `setColorTheme`), LanguageContext, AuthContext

### Footer (`src/components/layout/Footer.jsx`)
- **역할**: 다크 그라디언트 푸터 (3컬럼)
- **주요 기능**:
  - 브랜드 로고 + 설명 + Family Site 드롭다운
  - 바로가기 링크 (6개 주요 메뉴)
  - 연락처: 이메일 (aebon@dreamitbiz.com), 전화, 카카오톡, 영업시간
  - 사업자 정보: 대표이사, 사업자등록번호, 통신판매신고번호, 출판사 신고번호
- **CSS**: `footer.css`
- **디자인**: `background: linear-gradient(180deg, #111827, #0A0F1A)`, white text
- **설정 import**: `FAMILY_SITES` (site.js)

### PublicLayout (`src/layouts/PublicLayout.jsx`)
- **역할**: 메인 레이아웃 (Navbar + Routes + Footer)
- **주요 기능**:
  - 32개 라우트 정의
  - `React.lazy()` + `Suspense`로 코드 스플리팅
  - AOS 스크롤 애니메이션 초기화
  - `PageLoader` 로딩 UI
  - `.site-wrapper` / `.site-main` sticky footer 레이아웃

---

## 인증 컴포넌트

### LoginModal (`src/components/auth/LoginModal.jsx`)
- **역할**: 로그인/회원가입 모달
- **Props**: `isOpen`, `onClose`
- **주요 기능**:
  - 이메일/비밀번호 로그인 & 회원가입 탭 전환
  - Google 소셜 로그인
  - 폼 유효성 검사
  - 로딩 상태 (스피너)
  - 에러 메시지 표시
- **CSS**: `auth.css` (KoreaTech 카드형 디자인)
- **Context 사용**: AuthContext

### ProtectedRoute (`src/components/auth/ProtectedRoute.jsx`)
- **역할**: 인증 필요 라우트 가드
- **Props**: `children`
- **동작**: 미인증 시 로그인 페이지로 리다이렉트

### UserMenu (`src/components/auth/UserMenu.jsx`)
- **역할**: 로그인 후 사용자 드롭다운 메뉴
- **주요 기능**: 프로필, 대시보드, 설정, 로그아웃

---

## AI 컴포넌트

### ChatBot (`src/components/ai/ChatBot.jsx`)
- **역할**: AI 영어 대화 챗봇
- **주요 기능**:
  - 6개 시나리오 선택 (자유대화, 카페, 호텔, 면접, 레스토랑, 여행)
  - OpenAI API 호출 (GPT-3.5-turbo)
  - 실시간 메시지 렌더링 (사용자/AI 아바타 구분)
  - 타이핑 인디케이터 (3dot 애니메이션)
  - 대화 초기화 버튼
  - API 키 미등록 시 안내 화면
- **CSS**: `chatbot.css`

### ApiKeySetup (`src/components/ai/ApiKeySetup.jsx`)
- **역할**: OpenAI API 키 등록 안내 가이드

---

## 음성 인식 컴포넌트

### SpeechPractice (`src/components/speech/SpeechPractice.jsx`)
- **역할**: 음성 인식 발음 연습
- **주요 기능**:
  - 난이도별 필터 (Beginner, Intermediate, Advanced)
  - 마이크 버튼 (녹음 시작/중지)
  - 음성 → 텍스트 변환 (Web Speech API)
  - 정확도 퍼센트 + 단어별 하이라이팅
  - 이전/다음 문장 네비게이션
- **CSS**: `speech.css`

---

## SEO 컴포넌트

### SEOHead (`src/components/SEOHead.jsx`)
- **역할**: 동적 OG 메타 태그 관리
- **Props**: `title`, `description`, `image`, `url`, `type`

---

## 페이지 컴포넌트

### 메인 페이지

| 컴포넌트 | 경로 | 파일 |
|----------|------|------|
| Home | `/` | `pages/Home.jsx` |
| Login | `/login` | `pages/Login.jsx` |
| Dashboard | `/dashboard` | `pages/Dashboard.jsx` |
| Settings | `/settings` | `pages/Settings.jsx` |
| NotFound | `*` | `pages/NotFound.jsx` |

### 일상 영어 회화 (7개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| ConversationHome | `/conversation` | 회화 주제 카드 목록 |
| Greetings | `/conversation/greetings` | 인사 & 소개 |
| DailyLife | `/conversation/daily-life` | 일상생활 표현 |
| Shopping | `/conversation/shopping` | 쇼핑 & 주문 |
| Travel | `/conversation/travel` | 여행 영어 |
| Restaurant | `/conversation/restaurant` | 음식점 영어 |
| Phone | `/conversation/phone` | 전화 영어 |

### 비즈니스 영어 (6개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| BusinessHome | `/business` | 비즈니스 주제 카드 |
| EmailWriting | `/business/email` | 이메일 4단계 + 3개 템플릿 |
| Presentation | `/business/presentation` | 오프닝/전환/데이터/Q&A/마무리 |
| Meeting | `/business/meeting` | 시작/의견/동의·반대/행동항목/마무리 |
| Negotiation | `/business/negotiation` | 시작/제안/반대제안/타협/체결 |
| Interview | `/business/interview` | 자기소개/장단점/경력/STAR/Q&A/연봉 |

### 필수 영단어 (5개)

| 컴포넌트 | 경로 | 단어 수 |
|----------|------|---------|
| VocabHome | `/vocabulary` | 전체 통합 검색 (2,300+) |
| VocabBasic | `/vocabulary/basic` | 기초 500 |
| VocabBusiness | `/vocabulary/business` | 비즈니스 500 |
| VocabToeic | `/vocabulary/toeic` | TOEIC 800 |
| VocabDaily | `/vocabulary/daily` | 일상 500 |

### 영어 작문 (4개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| WritingHome | `/writing` | 작문 주제 목록 |
| BasicSentence | `/writing/basic` | 기초 문장 구조 |
| Paragraph | `/writing/paragraph` | 문단 작성 |
| Essay | `/writing/essay` | 에세이 작성 |

### TOEIC (4개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| ToeicHome | `/toeic` | TOEIC 개요 |
| Listening | `/toeic/listening` | 듣기 전략 + 연습 |
| Reading | `/toeic/reading` | 독해 전략 + 연습 |
| MockTest | `/toeic/mock-test` | 모의테스트 (15문제, 30분) |

### AI & 음성 (2개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| AiChatPage | `/ai-chat` | AI 챗봇 래퍼 페이지 |
| SpeechPage | `/speech` | 발음 연습 래퍼 페이지 |

---

## Context

### ThemeContext (`src/contexts/ThemeContext.jsx`)
- **상태**: `theme` (auto/light/dark), `resolvedTheme`, `isDark`, `colorTheme` (blue/red/green/purple/orange)
- **메서드**: `setTheme()`, `toggleTheme()`, `setColorTheme()`
- **저장**: localStorage (`english-pro-theme`, `english-pro-color`)
- **HTML 속성**: `data-theme`, `data-color`
- **테마 순서**: auto → light → dark

### LanguageContext (`src/contexts/LanguageContext.jsx`)
- **상태**: `language` (ko/en), `isKo`, `isEn`
- **헬퍼**: `t(korean, english)`

### AuthContext (`src/contexts/AuthContext.jsx`)
- **상태**: `user`, `session`, `loading`, `isAuthenticated`
- **메서드**: `login()`, `signup()`, `loginWithGoogle()`, `logout()`, `resetPassword()`

---

## 커스텀 훅

| 훅 | 파일 | 용도 |
|----|------|------|
| `useAOS` | `hooks/useAOS.js` | IntersectionObserver 기반 스크롤 애니메이션 |
| `useCodeCopy` | `hooks/useCodeCopy.js` | 코드 블록 복사 버튼 자동 부착 |
| `useTableScroller` | `hooks/useTableScroller.js` | 테이블 수평 스크롤 래퍼 |
