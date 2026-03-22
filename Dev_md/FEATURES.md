# English Pro - 기능 명세서

> v2.0.0 - KoreaTech 디자인 시스템 적용

## 1. 학습 콘텐츠

### 1.1 일상 영어 회화 (6개 주제)

| 주제 | 경로 | 핵심 내용 |
|------|------|-----------|
| 인사 & 소개 | `/conversation/greetings` | 기본 인사, 자기소개 패턴, 실전 대화, 연습 문제 |
| 일상생활 표현 | `/conversation/daily-life` | 아침 루틴, 날씨, 약속 잡기, 가정생활 |
| 쇼핑 & 주문 | `/conversation/shopping` | 매장 쇼핑, 결제, 온라인 쇼핑, 반품/교환 |
| 여행 영어 | `/conversation/travel` | 공항, 입국심사, 호텔, 길 찾기, 응급상황 |
| 음식점 영어 | `/conversation/restaurant` | 예약, 주문, 특별 요청, 불만, 계산 |
| 전화 영어 | `/conversation/phone` | 전화 받기/걸기, 메시지, 비즈니스 전화 |

### 1.2 비즈니스 영어 (5개 주제)

| 주제 | 경로 | 핵심 내용 |
|------|------|-----------|
| 이메일 작성 | `/business/email` | 이메일 구조, 오프닝/클로징, 템플릿, 톤 비교 |
| 프레젠테이션 | `/business/presentation` | 오프닝, 전환어, 데이터 설명, Q&A, 마무리 |
| 회의 영어 | `/business/meeting` | 시작, 의견 제시, 동의/반대, 액션 아이템 |
| 협상 & 설득 | `/business/negotiation` | 포지션 제시, 제안, 반대 제안, 타협 |
| 면접 영어 | `/business/interview` | 자기소개, 강점/약점, STAR 방법, 연봉 협상 |

### 1.3 필수 영단어 (2,300+ 단어)

| 카테고리 | 경로 | 단어 수 |
|----------|------|---------|
| 기초 필수 | `/vocabulary/basic` | 500 |
| 비즈니스 | `/vocabulary/business` | 500 |
| TOEIC | `/vocabulary/toeic` | 800 |
| 일상 | `/vocabulary/daily` | 500 |

**기능:** 카드 플립 UI, 뜻 가리기, 품사 필터, 검색, 학습 완료 체크, 페이지네이션

### 1.4 영어 작문 (3단계)

| 단계 | 경로 | 내용 |
|------|------|------|
| 기초 문장 | `/writing/basic` | 5가지 기본 문형 |
| 문단 작성 | `/writing/paragraph` | 주제문, 뒷받침, 결론, 연습 |
| 에세이 | `/writing/essay` | 서론/본론/결론, 전환어, 샘플 |

### 1.5 TOEIC 대비 (3개 영역)

| 영역 | 경로 | 내용 |
|------|------|------|
| 듣기 | `/toeic/listening` | Part 1-4 전략, 핵심 팁, 연습 |
| 독해 | `/toeic/reading` | Part 5-7 전략, 문법/어휘 팁 |
| 모의테스트 | `/toeic/mock-test` | 15문제, 30분 타이머, 점수 계산 |

---

## 2. AI 챗봇

- OpenAI API (GPT-3.5/4) 기반 영어 대화 연습
- 6개 시나리오 (자유 대화, 카페, 호텔, 면접, 레스토랑, 여행)
- 사용자 API 키 등록 방식 (localStorage 저장)
- 문법 교정 + 영어 답변

---

## 3. 음성 인식

- Web Speech API (무료, API 키 불필요)
- 난이도별 예문 (초급/중급/고급)
- 단어별 정확도 비교 + 전체 정확도 %
- 지원: Chrome, Edge, Safari (부분)

---

## 4. 인증 시스템 (Supabase)

- 이메일/비밀번호 회원가입 & 로그인
- Google OAuth 소셜 로그인
- 비밀번호 재설정, 세션 유지
- 보호 라우트 (Dashboard, Settings)
- Supabase 미설정 시 graceful fallback

---

## 5. UI/UX 기능

### 테마
- 라이트 모드 (기본): KoreaTech 디자인 (#FFFFFF 배경)
- 다크 모드: (#111827 배경)
- 자동 모드: 시스템 설정 따름
- 테마 순서: auto → light → dark

### 컬러 테마 (v2.0 신규)
- 5색 선택: Blue (기본), Red, Green, Purple, Orange
- Navbar 컬러 피커로 전환
- 다크 모드에서도 컬러 테마 유지

### 다국어
- 한국어 (기본), English
- `t(ko, en)` 헬퍼 함수

### 반응형 디자인
- 데스크톱 (>1100px): 전체 네비게이션
- 태블릿 (≤1024px): 2컬럼, 축소 타이포
- 모바일 (≤768px): 1컬럼, 슬라이드인 메뉴
- 소형 모바일 (≤480px): 압축 레이아웃

### 애니메이션
- AOS: fade-up/down/left/right, zoom-in
- 라이트 글래스모피즘 네비게이션
- 히어로 파티클 + 스크롤 인디케이터
- 카드 호버, 단어 카드 3D 플립
- 마이크 버튼 펄스, 타이핑 인디케이터

### 접근성
- 시맨틱 HTML, ARIA 속성
- 키보드 네비게이션, 포커스 트랩
- `prefers-reduced-motion` 지원
- `focus-visible` 아웃라인

---

## 6. 설정 페이지 (`/settings`)

- OpenAI API 키 등록/삭제/테스트
- 테마 설정 (Light/Dark/System)
- 언어 설정 (한국어/English)

---

## 7. 대시보드 (`/dashboard`, 로그인 필요)

- 4개 학습 진도 카드
- 진도 바 (%) + localStorage 연동
- 빠른 액션 버튼
- 최근 활동 목록
