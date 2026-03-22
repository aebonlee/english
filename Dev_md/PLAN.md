# English Pro - 실용 영어 학습 사이트 구현 계획

## Context
비즈니스 및 일상에서 활용 가능한 실용 영어 회화·작문을 학습하는 사이트를 제작합니다.
- D:\db-study의 디자인 패턴과 구조를 참고하여 동일한 품질의 UI를 구현
- Supabase 로그인/인증 기능 포함
- AI 챗봇(사용자 API키 등록 방식) + 음성 인식 학습 기능
- GitHub Pages (aebonlee.github.io/english)로 배포

## Tech Stack
- **Frontend**: React 19 + Vite 8 (최신)
- **Auth/DB**: Supabase (제공된 키 사용)
- **Styling**: CSS Variables + Dark Mode + Color Themes
- **기본 테마 컬러**: 다크 블루/딥 블루 (#0A1628 배경, #1E3A5F 메인, #4A8FE7 액센트)
- **Routing**: React Router DOM v7
- **AI Chat**: OpenAI API (사용자 API키 등록 방식)
- **음성**: Web Speech API (브라우저 내장)
- **배포**: GitHub Pages

## 프로젝트 구조
```
D:\english/
├── Dev_md/                          # 개발 문서
│   └── PLAN.md                      # 이 계획서
├── public/
│   └── og-image.png                 # OG 미리보기 이미지
├── src/
│   ├── main.jsx                     # 엔트리 포인트
│   ├── App.jsx                      # 루트 (ThemeProvider + AuthProvider + Router)
│   ├── index.css                    # 전역 CSS import
│   ├── config/
│   │   └── site.js                  # 사이트 설정, 메뉴 구조, 브랜드
│   ├── lib/
│   │   └── supabase.js              # Supabase 클라이언트 초기화
│   ├── contexts/
│   │   ├── ThemeContext.jsx          # 다크/라이트/자동 테마
│   │   ├── LanguageContext.jsx       # KO/EN 전환
│   │   └── AuthContext.jsx           # Supabase 인증 상태 관리
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # 반응형 네비게이션
│   │   │   └── Footer.jsx           # 푸터
│   │   ├── auth/
│   │   │   ├── LoginModal.jsx       # 로그인/회원가입 모달
│   │   │   ├── ProtectedRoute.jsx   # 인증 필요 라우트 가드
│   │   │   └── UserMenu.jsx         # 로그인 후 사용자 메뉴
│   │   ├── ai/
│   │   │   ├── ChatBot.jsx          # AI 영어 대화 챗봇
│   │   │   └── ApiKeySetup.jsx      # API 키 등록 안내/설정
│   │   ├── speech/
│   │   │   └── SpeechPractice.jsx   # 음성 인식 연습 컴포넌트
│   │   └── SEOHead.jsx              # OG 메타 태그
│   ├── hooks/
│   │   ├── useAOS.js                # 스크롤 애니메이션
│   │   ├── useCodeCopy.js           # 코드 복사
│   │   └── useTableScroller.js      # 테이블 스크롤
│   ├── layouts/
│   │   └── PublicLayout.jsx         # 메인 레이아웃 + 라우팅
│   ├── pages/
│   │   ├── Home.jsx                 # 랜딩 페이지
│   │   ├── Login.jsx                # 로그인/회원가입 페이지
│   │   ├── Dashboard.jsx            # 로그인 후 대시보드 (학습 현황)
│   │   ├── conversation/            # 일상 영어 회화
│   │   │   ├── ConversationHome.jsx # 회화 개요
│   │   │   ├── Greetings.jsx        # 인사 & 소개
│   │   │   ├── DailyLife.jsx        # 일상생활 표현
│   │   │   ├── Shopping.jsx         # 쇼핑 & 주문
│   │   │   ├── Travel.jsx           # 여행 영어
│   │   │   ├── Restaurant.jsx       # 음식점 영어
│   │   │   └── Phone.jsx            # 전화 영어
│   │   ├── business/                # 비즈니스 영어
│   │   │   ├── BusinessHome.jsx     # 비즈니스 영어 개요
│   │   │   ├── EmailWriting.jsx     # 이메일 작성
│   │   │   ├── Presentation.jsx     # 프레젠테이션
│   │   │   ├── Meeting.jsx          # 회의 영어
│   │   │   ├── Negotiation.jsx      # 협상 & 설득
│   │   │   └── Interview.jsx        # 면접 영어
│   │   ├── vocabulary/              # 필수 영단어
│   │   │   ├── VocabHome.jsx        # 단어장 메인
│   │   │   ├── VocabBasic.jsx       # 기초 필수 단어 500
│   │   │   ├── VocabBusiness.jsx    # 비즈니스 필수 단어 500
│   │   │   ├── VocabToeic.jsx       # TOEIC 필수 단어 800
│   │   │   └── VocabDaily.jsx       # 일상 필수 단어 500
│   │   ├── writing/                 # 영어 작문
│   │   │   ├── WritingHome.jsx      # 작문 개요
│   │   │   ├── BasicSentence.jsx    # 기초 문장 구조
│   │   │   ├── Paragraph.jsx        # 문단 작성
│   │   │   └── Essay.jsx            # 에세이 작성
│   │   ├── toeic/                   # TOEIC 대비
│   │   │   ├── ToeicHome.jsx        # TOEIC 개요
│   │   │   ├── Listening.jsx        # 듣기 파트
│   │   │   ├── Reading.jsx          # 독해 파트
│   │   │   └── MockTest.jsx         # 모의 테스트
│   │   ├── ai-chat/                 # AI 학습
│   │   │   └── AiChatPage.jsx       # AI 채팅 학습 페이지
│   │   ├── speech/                  # 발음 연습
│   │   │   └── SpeechPage.jsx       # 음성 인식 연습 페이지
│   │   ├── Settings.jsx             # API 키 등록 & 설정
│   │   └── NotFound.jsx             # 404
│   ├── data/                        # 학습 콘텐츠 데이터
│   │   ├── vocabulary.js            # 영단어 데이터 (카테고리별 2300+ 단어)
│   │   ├── conversations.js         # 회화 예문 데이터
│   │   ├── businessPhrases.js       # 비즈니스 핵심 표현
│   │   └── toeicData.js             # TOEIC 문제/예문 데이터
│   ├── styles/
│   │   ├── base.css                 # 기본 변수, 버튼, 유틸리티
│   │   ├── navbar.css               # 네비게이션
│   │   ├── hero.css                 # 히어로 섹션
│   │   ├── footer.css               # 푸터
│   │   ├── animations.css           # AOS 애니메이션
│   │   ├── dark-mode.css            # 다크 모드
│   │   ├── responsive.css           # 반응형
│   │   ├── site.css                 # 페이지 헤더, 레슨, 코드블록
│   │   ├── auth.css                 # 로그인/회원가입
│   │   ├── chatbot.css              # AI 챗봇
│   │   ├── vocabulary.css           # 단어장
│   │   └── speech.css               # 음성 인식
│   └── utils/
│       └── translations.js          # KO/EN 번역 사전
├── .env                             # Supabase 키 (gitignore)
├── .gitignore
├── index.html                       # HTML 엔트리
├── package.json
└── vite.config.js                   # Vite 설정
```

## 핵심 기능

### 로그인 시스템 (Supabase)
- 이메일/비밀번호 회원가입 + 로그인
- Google 소셜 로그인 (선택)
- 로그인 상태 유지 (세션)
- 보호 라우트: AI 챗봇, 대시보드 등

### AI 챗봇 (사용자 API키 방식)
- 사용자가 Settings에서 OpenAI API 키를 등록
- 키는 localStorage에 저장 (서버 미전송)
- 영어 대화 연습: AI가 영어로 답변 + 교정
- 주제별 대화 시나리오 선택
- API 키 미등록 시 → 등록 안내 가이드 표시

### 음성 인식 (Web Speech API)
- 브라우저 내장 음성 인식 (무료, API키 불필요)
- 영어 문장 읽기 → 발음 정확도 피드백
- 예문 제공 → 따라 읽기 연습

### 영단어 시스템
- 총 2300+ 단어 (카테고리 4개: 기초, 비즈니스, TOEIC, 일상)
- 단어 카드 플립 UI
- 뜻 가리기/보이기 토글
- 카테고리 필터 + 검색
- 학습 진도 표시

### 콘텐츠 영역
- **일상 회화** (6개 주제): 인사, 일상생활, 쇼핑, 여행, 음식점, 전화
- **비즈니스 영어** (5개 주제): 이메일, 프레젠테이션, 회의, 협상, 면접
- **영어 작문** (3단계): 기초 문장, 문단, 에세이
- **TOEIC 대비** (3개): 듣기, 독해, 모의테스트

## 라우트 구조
| 경로 | 페이지 |
|------|--------|
| `/` | Home (랜딩) |
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
- **URL**: https://aebonlee.github.io/english/
- **방식**: GitHub Pages (gh-pages 브랜치)
- **빌드**: `npm run build` → dist/ 폴더 생성
- **SPA 라우팅**: 404.html = index.html (Vite 플러그인)
