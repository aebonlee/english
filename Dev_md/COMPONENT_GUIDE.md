# English Pro - 컴포넌트 가이드

## 컴포넌트 총 48개

---

## 레이아웃 컴포넌트

### Navbar (`src/components/layout/Navbar.jsx`)
- **역할**: 반응형 네비게이션 바 (Glassmorphism 효과)
- **주요 기능**:
  - 데스크톱: 드롭다운 메뉴 (일상회화, 비즈니스, 영단어, 영작문, TOEIC)
  - 모바일: 햄버거 메뉴 + 슬라이드 패널
  - 테마 토글 (다크/라이트)
  - 언어 토글 (KO/EN)
  - 로그인 버튼 / 사용자 메뉴
  - 스크롤 시 배경 변경 (`scrolled` 클래스)
- **CSS**: `navbar.css`
- **Context 사용**: ThemeContext, LanguageContext, AuthContext

### Footer (`src/components/layout/Footer.jsx`)
- **역할**: 3컬럼 푸터 (브랜드, 학습 메뉴, 리소스, 소셜)
- **주요 기능**:
  - 사이트맵 링크
  - 소셜 미디어 아이콘 (GitHub, Twitter, LinkedIn)
  - Back-to-top 버튼
  - 저작권 / 법적 고지
- **CSS**: `footer.css`

### PublicLayout (`src/layouts/PublicLayout.jsx`)
- **역할**: 메인 레이아웃 (Navbar + Routes + Footer)
- **주요 기능**:
  - 32개 라우트 정의
  - `React.lazy()` + `Suspense`로 코드 스플리팅
  - AOS 스크롤 애니메이션 초기화
  - `PageLoader` 로딩 UI

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
- **CSS**: `auth.css`
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
  - 에러 핸들링 (에러 배너)
- **CSS**: `chatbot.css`
- **데이터 소스**: `localStorage` (API 키)

### ApiKeySetup (`src/components/ai/ApiKeySetup.jsx`)
- **역할**: OpenAI API 키 등록 안내 가이드
- **주요 기능**: 단계별 안내, 키 입력 폼, 유효성 검사

---

## 음성 인식 컴포넌트

### SpeechPractice (`src/components/speech/SpeechPractice.jsx`)
- **역할**: 음성 인식 발음 연습
- **주요 기능**:
  - 난이도별 필터 (Beginner, Intermediate, Advanced)
  - 예문 표시 + 한국어 번역
  - 마이크 버튼 (녹음 시작/중지)
  - 음성 → 텍스트 변환 (Web Speech API)
  - 정확도 퍼센트 계산 + 시각적 피드백
  - 단어별 비교 (일치/불일치 하이라이팅)
  - 이전/다음 문장 네비게이션
  - 브라우저 미지원 시 안내
- **CSS**: `speech.css`
- **API**: Web Speech API (`SpeechRecognition`, `lang: 'en-US'`)

---

## SEO 컴포넌트

### SEOHead (`src/components/SEOHead.jsx`)
- **역할**: 동적 OG 메타 태그 관리
- **Props**: `title`, `description`, `image`, `url`, `type`
- **주요 기능**:
  - `document.title` 동적 설정
  - Open Graph 태그 (og:title, og:description, og:image, og:url, og:type)
  - Twitter Card 태그
  - 언마운트 시 이전 타이틀 복원

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
| Greetings | `/conversation/greetings` | 인사 & 소개 패턴 + 대화 예문 |
| DailyLife | `/conversation/daily-life` | 일상생활 표현 |
| Shopping | `/conversation/shopping` | 쇼핑 & 주문 표현 |
| Travel | `/conversation/travel` | 여행 영어 |
| Restaurant | `/conversation/restaurant` | 음식점 영어 |
| Phone | `/conversation/phone` | 전화 영어 |

### 비즈니스 영어 (6개)

| 컴포넌트 | 경로 | 내용 |
|----------|------|------|
| BusinessHome | `/business` | 비즈니스 주제 카드 목록 |
| EmailWriting | `/business/email` | 이메일 작성 템플릿 |
| Presentation | `/business/presentation` | 프레젠테이션 표현 |
| Meeting | `/business/meeting` | 회의 영어 |
| Negotiation | `/business/negotiation` | 협상 & 설득 |
| Interview | `/business/interview` | 면접 영어 |

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
- **상태**: `theme` (dark/light/auto), `resolvedTheme`, `isDark`
- **동작**: localStorage 저장, `data-theme` 속성 설정, 탭 간 동기화
- **자동 모드**: `prefers-color-scheme` 미디어 쿼리 감지

### LanguageContext (`src/contexts/LanguageContext.jsx`)
- **상태**: `language` (ko/en), `isKo`, `isEn`
- **헬퍼**: `t(korean, english)` - 현재 언어에 맞는 텍스트 반환
- **동작**: localStorage 저장, `lang` 속성 설정

### AuthContext (`src/contexts/AuthContext.jsx`)
- **상태**: `user`, `session`, `loading`, `isAuthenticated`
- **메서드**: `login()`, `signup()`, `loginWithGoogle()`, `logout()`, `resetPassword()`
- **Supabase 미설정 시**: graceful fallback (null 클라이언트 처리)

---

## 커스텀 훅

| 훅 | 파일 | 용도 |
|----|------|------|
| `useAOS` | `hooks/useAOS.js` | IntersectionObserver 기반 스크롤 애니메이션 |
| `useCodeCopy` | `hooks/useCodeCopy.js` | 코드 블록 복사 버튼 자동 부착 |
| `useTableScroller` | `hooks/useTableScroller.js` | 테이블 수평 스크롤 래퍼 |
