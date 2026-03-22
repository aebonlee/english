# English Pro - 라우트 맵

## 전체 라우트 (32개)

모든 경로는 `basename="/english"` 기준입니다.
실제 URL: `https://english.dreamitbiz.com/english/[경로]`

---

## 메인 페이지

| 경로 | 컴포넌트 | 설명 | 인증 |
|------|----------|------|------|
| `/` | Home | 랜딩 페이지 (히어로 + 커리큘럼) | - |
| `/login` | Login | 로그인/회원가입 | - |
| `/dashboard` | Dashboard | 학습 대시보드 | 필요 |
| `/settings` | Settings | API 키/테마/언어 설정 | - |

---

## 일상 영어 회화 (7개)

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/conversation` | ConversationHome | 회화 주제 목록 |
| `/conversation/greetings` | Greetings | 인사 & 소개 |
| `/conversation/daily-life` | DailyLife | 일상생활 표현 |
| `/conversation/shopping` | Shopping | 쇼핑 & 주문 |
| `/conversation/travel` | Travel | 여행 영어 |
| `/conversation/restaurant` | Restaurant | 음식점 영어 |
| `/conversation/phone` | Phone | 전화 영어 |

---

## 비즈니스 영어 (6개)

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/business` | BusinessHome | 비즈니스 주제 목록 |
| `/business/email` | EmailWriting | 이메일 작성 |
| `/business/presentation` | Presentation | 프레젠테이션 |
| `/business/meeting` | Meeting | 회의 영어 |
| `/business/negotiation` | Negotiation | 협상 & 설득 |
| `/business/interview` | Interview | 면접 영어 |

---

## 필수 영단어 (5개)

| 경로 | 컴포넌트 | 단어 수 |
|------|----------|---------|
| `/vocabulary` | VocabHome | 전체 통합 검색 |
| `/vocabulary/basic` | VocabBasic | 기초 500 |
| `/vocabulary/business` | VocabBusiness | 비즈니스 500 |
| `/vocabulary/toeic` | VocabToeic | TOEIC 800 |
| `/vocabulary/daily` | VocabDaily | 일상 500 |

---

## 영어 작문 (4개)

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/writing` | WritingHome | 작문 주제 목록 |
| `/writing/basic` | BasicSentence | 기초 문장 구조 |
| `/writing/paragraph` | Paragraph | 문단 작성 |
| `/writing/essay` | Essay | 에세이 작성 |

---

## TOEIC 대비 (4개)

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/toeic` | ToeicHome | TOEIC 개요 |
| `/toeic/listening` | Listening | 듣기 전략 + 연습 |
| `/toeic/reading` | Reading | 독해 전략 + 연습 |
| `/toeic/mock-test` | MockTest | 모의테스트 (15문제, 30분) |

---

## AI & 음성 (2개)

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/ai-chat` | AiChatPage | AI 영어 대화 챗봇 |
| `/speech` | SpeechPage | 발음 연습 (음성 인식) |

---

## 에러

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `*` | NotFound | 404 페이지 |

---

## 네비게이션 메뉴 구조

```
English Pro
├── 일상 회화 ▼
│   ├── 인사 & 소개
│   ├── 일상생활
│   ├── 쇼핑 & 주문
│   ├── 여행 영어
│   ├── 음식점
│   └── 전화 영어
├── 비즈니스 ▼
│   ├── 이메일 작성
│   ├── 프레젠테이션
│   ├── 회의 영어
│   ├── 협상 & 설득
│   └── 면접 영어
├── 영단어 ▼
│   ├── 기초 500
│   ├── 비즈니스 500
│   ├── TOEIC 800
│   └── 일상 500
├── 영작문 ▼
│   ├── 기초 문장
│   ├── 문단 작성
│   └── 에세이
├── TOEIC ▼
│   ├── 듣기
│   ├── 독해
│   └── 모의테스트
├── AI 채팅
└── 발음 연습
```
