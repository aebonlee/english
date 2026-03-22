# English Pro - 실용 영어 학습 사이트 구현 계획

> v2.1.0 - KoreaTech 디자인 시스템 + Font Awesome 아이콘

## Context
비즈니스 및 일상에서 활용 가능한 실용 영어 회화·작문을 학습하는 사이트.
- KoreaTech 디자인 시스템 100% 적용 (Light-First)
- Font Awesome 6.5 아이콘 시스템
- Supabase 로그인/인증 기능 포함
- AI 챗봇(사용자 API키 등록 방식) + 음성 인식 학습 기능
- GitHub Pages + 커스텀 도메인 (english.dreamitbiz.com)으로 배포

## Tech Stack
- **Frontend**: React 19 + Vite 8
- **Auth/DB**: Supabase
- **Styling**: CSS Variables + KoreaTech Light-First Design System
- **기본 테마**: 라이트 (#FFFFFF 배경, #0046C8 메인 컬러)
- **폰트**: Noto Sans KR (Google Fonts)
- **아이콘**: Font Awesome 6.5 (CDN)
- **컬러 테마**: 5색 (Blue/Red/Green/Purple/Orange)
- **Routing**: React Router DOM v7
- **AI Chat**: OpenAI API (사용자 API키 등록 방식)
- **음성**: Web Speech API (브라우저 내장)
- **배포**: GitHub Pages

## 프로젝트 구조
```
D:\english/
├── Dev_md/                          # 개발 문서
├── public/
│   └── og-image.png
├── src/
│   ├── main.jsx                     # 엔트리 포인트
│   ├── App.jsx                      # 루트 (ThemeProvider + AuthProvider + Router)
│   ├── index.css                    # 전역 CSS import
│   ├── config/site.js               # 사이트 설정, 메뉴 구조
│   ├── lib/supabase.js              # Supabase 클라이언트
│   ├── contexts/
│   │   ├── ThemeContext.jsx          # 다크/라이트/자동 + 5색 컬러 테마
│   │   ├── LanguageContext.jsx       # KO/EN 전환
│   │   └── AuthContext.jsx           # Supabase 인증
│   ├── components/
│   │   ├── layout/Navbar.jsx         # 네비게이션 + 컬러 피커
│   │   ├── layout/Footer.jsx         # 다크 그라디언트 푸터
│   │   ├── auth/LoginModal.jsx       # 로그인 모달
│   │   ├── auth/ProtectedRoute.jsx   # 인증 가드
│   │   ├── auth/UserMenu.jsx         # 사용자 메뉴
│   │   ├── ai/ChatBot.jsx            # AI 챗봇
│   │   ├── ai/ApiKeySetup.jsx        # API 키 설정
│   │   ├── speech/SpeechPractice.jsx  # 음성 인식
│   │   └── SEOHead.jsx               # OG 메타 태그
│   ├── hooks/
│   │   ├── useAOS.js                 # 스크롤 애니메이션
│   │   ├── useCodeCopy.js            # 코드 복사
│   │   └── useTableScroller.js       # 테이블 스크롤
│   ├── layouts/PublicLayout.jsx       # 메인 레이아웃 + 라우팅
│   ├── pages/                        # 32개 페이지
│   ├── data/                         # 학습 콘텐츠 데이터
│   └── styles/                       # CSS 모듈 (12개)
│       ├── base.css                  # KoreaTech 라이트 우선 변수 시스템
│       ├── navbar.css                # 라이트 글래스모피즘
│       ├── hero.css                  # 히어로 + 파티클 + 캐러셀
│       ├── footer.css                # 다크 그라디언트 푸터
│       ├── dark-mode.css             # [data-theme="dark"] 오버라이드
│       ├── animations.css            # AOS 5종
│       ├── responsive.css            # 1100/1024/768/480px
│       ├── site.css                  # 콘텐츠 페이지
│       ├── auth.css                  # 인증 UI
│       ├── chatbot.css               # AI 챗봇
│       ├── vocabulary.css            # 단어장
│       └── speech.css                # 음성 인식
├── .env                              # Supabase 키
├── index.html                        # HTML + Noto Sans KR
├── package.json
└── vite.config.js
```

## 라우트 구조 (32개)

| 경로 | 페이지 |
|------|--------|
| `/` | Home |
| `/login` | 로그인/회원가입 |
| `/dashboard` | 학습 대시보드 |
| `/settings` | API 키 설정 |
| `/conversation` | 회화 홈 |
| `/conversation/greetings` | 인사 & 소개 |
| `/conversation/daily-life` | 일상생활 |
| `/conversation/shopping` | 쇼핑 & 주문 |
| `/conversation/travel` | 여행 영어 |
| `/conversation/restaurant` | 음식점 영어 |
| `/conversation/phone` | 전화 영어 |
| `/business` | 비즈니스 홈 |
| `/business/email` | 이메일 작성 |
| `/business/presentation` | 프레젠테이션 |
| `/business/meeting` | 회의 영어 |
| `/business/negotiation` | 협상 & 설득 |
| `/business/interview` | 면접 영어 |
| `/vocabulary` | 단어장 홈 |
| `/vocabulary/basic` | 기초 500 |
| `/vocabulary/business` | 비즈니스 500 |
| `/vocabulary/toeic` | TOEIC 800 |
| `/vocabulary/daily` | 일상 500 |
| `/writing` | 작문 홈 |
| `/writing/basic` | 기초 문장 |
| `/writing/paragraph` | 문단 작성 |
| `/writing/essay` | 에세이 |
| `/toeic` | TOEIC 홈 |
| `/toeic/listening` | 듣기 |
| `/toeic/reading` | 독해 |
| `/toeic/mock-test` | 모의테스트 |
| `/ai-chat` | AI 챗봇 |
| `/speech` | 발음 연습 |

## 배포
- **URL**: https://english.dreamitbiz.com/
- **GitHub Pages**: gh-pages 브랜치
- **빌드**: `npm run build` → `npx gh-pages -d dist`
- **SPA 라우팅**: 404.html = index.html
