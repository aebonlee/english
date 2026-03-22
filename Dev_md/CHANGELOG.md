# English Pro - 변경 이력 (CHANGELOG)

## v1.2.0 (2025-03-23)

### 누락 CSS 클래스 대량 추가 (site.css +1,000줄)

**공통 컴포넌트:**
- `content-page` 레이아웃 (WritingHome, ToeicHome, AiChatPage, SpeechPage, Listening, MockTest)
- `content-section` 섹션 래퍼
- `card-grid` 반응형 그리드 (--2, --3 variant)
- `topic-card` 주제 카드 (ConversationHome, BusinessHome, WritingHome, ToeicHome)
- `tip-card` 학습 팁 카드
- `info-box` 정보 박스 (ToeicHome)
- `part-card` 파트별 카드 (Listening, Reading)
- `tips-grid`, `tip-item` 팁 그리드
- `mock-intro` 모의테스트 인트로

**페이지별:**
- `dashboard` 전체 (progress-card, action-card, activity-list)
- `settings` 전체 (API키 관리, 테마/언어 옵션)
- `dialogue`, `speaker`, `translation` 대화 예시
- `structure-list`, `expression-list` 구조/표현 목록
- `dropdown-link-title` Navbar 드롭다운
- `btn--danger` 삭제 버튼

### 개발 문서 추가
- CHANGELOG.md, COMPONENT_GUIDE.md, DATA_STRUCTURE.md 신규 작성
- PLAN.md, ROUTES.md, DEPLOYMENT.md, ARCHITECTURE.md 업데이트 (base: '/' 반영)

---

## v1.1.0 (2025-03-23)

### CSS BEM 클래스명 전면 수정
- **navbar.css**: `.nav-brand` → `.navbar-brand` 등 BEM 네이밍 전환
- **hero.css**: `.hero-content` → `.hero__content`, curriculum/features 섹션 추가
- **footer.css**: `.footer-main` → `.footer-inner` 등 BEM 전환
- **auth.css**: Login.jsx + LoginModal.jsx BEM 클래스 전면 추가
- **chatbot.css**: `.chat-container` → `.chatbot` BEM 네이밍 전환
- **speech.css**: `.speech-container` → `.speech-practice` BEM 전환
- **site.css**: BEM alias 추가 + `.expression-table` 스타일
- **base.css**: BEM 버튼 variant 추가 (`.btn--primary`, `.btn--outline` 등)
- **responsive.css**: 모든 breakpoint에 BEM alias 추가
- **dark-mode.css**: BEM alias 추가
- **VocabHome.jsx**: 인라인 색상을 CSS 변수로 변경

### 배포 설정 변경
- `vite.config.js`: `base: '/'`로 변경 (커스텀 도메인 사용)
- `BrowserRouter`: basename 제거 (루트 경로 서빙)
- CNAME 자동 복사 플러그인 추가

---

## v1.0.0 (2025-03-22)

### 초기 구현
프로젝트 전체 기능 구현 및 최초 배포.

### 핵심 기능
- **일상 영어 회화** (6개 주제): 인사, 일상생활, 쇼핑, 여행, 음식점, 전화
- **비즈니스 영어** (5개 주제): 이메일, 프레젠테이션, 회의, 협상, 면접
- **필수 영단어** (2,300+): 기초 500, 비즈니스 500, TOEIC 800, 일상 500
- **영어 작문** (3단계): 기초 문장, 문단 작성, 에세이
- **TOEIC 대비** (3개 섹션): 듣기, 독해, 모의테스트
- **AI 챗봇**: OpenAI API 연동 (사용자 API 키 방식)
- **발음 연습**: Web Speech API 음성 인식

### 인프라
- React 19 + Vite 8 프로젝트 생성
- Supabase 인증 (이메일/비밀번호 + Google OAuth)
- React Router DOM v7 (32개 라우트, 코드 스플리팅)
- CSS Variables 시스템 (12개 CSS 모듈)
- 다크/라이트/자동 테마
- 한국어/영어 전환
- GitHub Pages 배포 (english.dreamitbiz.com)

### UI/UX
- Glassmorphism 네비게이션 바
- 히어로 섹션 + 파티클 애니메이션
- AOS 스크롤 애니메이션
- 반응형 디자인 (4개 breakpoint)
- SEO 메타 태그 (OG, Twitter Card)
