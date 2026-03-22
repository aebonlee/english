# English Pro - 아키텍처 문서

> v2.0.0 - KoreaTech 디자인 시스템 적용

## 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| Frontend | React | 19.2.4 |
| Build Tool | Vite | 8.0.1 |
| Routing | React Router DOM | 7.13.1 |
| Auth/DB | Supabase | 2.99.3 |
| AI Chat | OpenAI API | GPT-3.5/4 |
| Speech | Web Speech API | Browser Built-in |
| Deploy | GitHub Pages | gh-pages |
| Font | Noto Sans KR | Google Fonts |

## 디렉토리 구조

```
src/
├── config/          # 사이트 설정 (site.js)
├── lib/             # 외부 라이브러리 초기화 (supabase.js)
├── contexts/        # React Context (Theme, Language, Auth)
├── hooks/           # 커스텀 훅 (useAOS, useCodeCopy, useTableScroller)
├── utils/           # 유틸리티 (translations.js)
├── components/      # 재사용 컴포넌트
│   ├── layout/      # Navbar, Footer
│   ├── auth/        # LoginModal, ProtectedRoute, UserMenu
│   ├── ai/          # ChatBot, ApiKeySetup
│   └── speech/      # SpeechPractice
├── layouts/         # 페이지 레이아웃 (PublicLayout)
├── pages/           # 라우트별 페이지 컴포넌트
│   ├── conversation/  # 일상 회화 (7페이지)
│   ├── business/      # 비즈니스 영어 (6페이지)
│   ├── vocabulary/    # 영단어 (5페이지)
│   ├── writing/       # 영작문 (4페이지)
│   ├── toeic/         # TOEIC (4페이지)
│   ├── ai-chat/       # AI 챗봇 (1페이지)
│   └── speech/        # 음성 인식 (1페이지)
├── data/            # 학습 콘텐츠 데이터
└── styles/          # CSS 모듈 (12개 파일)
```

## 컴포넌트 계층 구조

```
<StrictMode>
  <App>
    <ThemeProvider>          ← 다크/라이트/자동 테마 + 5색 컬러 테마
      <LanguageProvider>     ← KO/EN 언어 전환
        <AuthProvider>       ← Supabase 인증 상태
          <BrowserRouter>
            <PublicLayout>   ← Navbar + Routes + Footer
              <Suspense>     ← 코드 스플리팅 로딩
                <Routes>     ← 32개 라우트
              </Suspense>
            </PublicLayout>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </App>
</StrictMode>
```

## Context 설계

### ThemeContext
- **상태**: `theme` (auto/light/dark), `resolvedTheme`, `isDark`, `colorTheme` (blue/red/green/purple/orange)
- **동작**:
  - localStorage 저장 (`english-pro-theme`, `english-pro-color`)
  - `data-theme` 속성 설정 (light/dark)
  - `data-color` 속성 설정 (red/green/purple/orange, blue는 기본값이므로 제거)
  - 탭 간 동기화 (storage 이벤트)
- **테마 순서**: auto → light → dark (라이트 우선)
- **자동 모드**: JS로 `prefers-color-scheme` 감지 (CSS @media 미사용)

### LanguageContext
- **상태**: `language` (ko/en), `isKo`, `isEn`
- **헬퍼**: `t(korean, english)` - 현재 언어에 맞는 텍스트 반환
- **동작**: localStorage 저장, `lang` 속성 설정, 탭 간 동기화

### AuthContext
- **상태**: `user`, `session`, `loading`, `isAuthenticated`
- **메서드**: `login()`, `signup()`, `loginWithGoogle()`, `logout()`, `resetPassword()`
- **Supabase 미설정 시**: graceful fallback (null 클라이언트 처리)

## 코드 스플리팅

모든 페이지 컴포넌트는 `React.lazy()`로 동적 임포트:

```jsx
const Home = React.lazy(() => import('../pages/Home'));
const Greetings = React.lazy(() => import('../pages/conversation/Greetings'));
// ... 32개 라우트 모두 lazy loading
```

## CSS 아키텍처

### CSS Variables 시스템 (KoreaTech Light-First)

```css
:root {
  /* Primary */
  --primary-blue: #0046C8;
  --primary-blue-dark: #002E8A;
  --primary-blue-light: #4A8FE7;

  /* Background */
  --bg-white: #FFFFFF;
  --bg-light-gray: #F5F7FA;
  --bg-medium-gray: #E8EDF2;

  /* Text */
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-light: #5B6370;

  /* Layout */
  --nav-height: 80px;
  --container-max: 1280px;
}
```

### 5색 컬러 테마 시스템

```css
html[data-color="red"]    { --primary-blue: #C8102E; ... }
html[data-color="green"]  { --primary-blue: #00855A; ... }
html[data-color="purple"] { --primary-blue: #8B1AC8; ... }
html[data-color="orange"] { --primary-blue: #C87200; ... }
```

### 다크 모드

```css
html[data-theme="dark"] {
  --bg-white: #111827;
  --bg-light-gray: #1F2937;
  --text-primary: #F9FAFB;
  --glass-bg: rgba(17, 24, 39, 0.85);
  /* ... */
}
```

### 스타일 모듈 로딩 순서 (index.css)
1. base.css → 변수, 리셋, 버튼, 카드, 폼, 유틸리티
2. animations.css → AOS 스크롤 애니메이션 (5종)
3. dark-mode.css → `[data-theme="dark"]` 변수 오버라이드
4. navbar.css → 라이트 글래스모피즘 네비게이션
5. hero.css → 히어로 섹션 + 파티클 + 캐러셀
6. footer.css → 다크 그라디언트 푸터 + sticky layout
7. site.css → 콘텐츠 페이지 공통
8. auth.css → 인증 UI (카드형)
9. chatbot.css → AI 챗봇
10. vocabulary.css → 단어장
11. speech.css → 음성 인식
12. responsive.css → 반응형 (1100/1024/768/480px)

## 데이터 흐름

### AI 챗봇
```
사용자 API 키 입력
  → localStorage 저장 (englishpro_openai_api_key)
  → ChatBot 컴포넌트에서 읽기
  → OpenAI API 직접 호출
  → 응답 렌더링
```

### 음성 인식
```
마이크 버튼 클릭
  → SpeechRecognition API 시작 (lang: 'en-US')
  → 음성 → 텍스트 변환
  → 원문과 단어별 비교
  → 정확도 % 계산 및 피드백
```

### 테마 전환
```
Navbar 테마 토글 클릭
  → ThemeContext.toggleTheme()
  → auto → light → dark 순환
  → localStorage 저장 + data-theme 속성 설정
  → CSS 변수 자동 전환
```

### 컬러 테마 전환
```
Navbar 컬러 피커 dot 클릭
  → ThemeContext.setColorTheme(color)
  → localStorage 저장 + data-color 속성 설정
  → CSS 변수 자동 전환 (해당 컬러 팔레트)
```

## 배포 설정

### Vite Config
- `base: '/'` → 커스텀 도메인 루트 서빙
- `postBuildPlugin` → `dist/index.html` → `dist/404.html` 복사 + CNAME 복사

### GitHub Pages
- `gh-pages` 브랜치에 `dist/` 배포
- CNAME: `english.dreamitbiz.com`
- SPA 라우팅: 404.html = index.html

## 성능 최적화

| 전략 | 구현 |
|------|------|
| 코드 스플리팅 | React.lazy() + Suspense (32개 라우트) |
| CSS 최적화 | 12개 모듈 → 1개 번들 (155KB / 25KB gzip) |
| 이미지 최적화 | SVG favicon/icons, 최소한 이미지 |
| 번들 크기 | 425KB (gzip: 123KB) |
| 캐싱 | 해시 파일명 (content-based) |
| 폰트 | preconnect + display=swap |
