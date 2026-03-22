# English Pro - 데이터 구조 문서

> v2.0.0 - KoreaTech 디자인 시스템 적용

## 데이터 파일 목록

| 파일 | 경로 | 내용 |
|------|------|------|
| vocabulary.js | `src/data/vocabulary.js` | 영단어 2,300+ (4개 카테고리) |
| conversations.js | `src/data/conversations.js` | 회화 시나리오 + 음성 예문 |
| businessPhrases.js | `src/data/businessPhrases.js` | 비즈니스 핵심 표현 |
| toeicData.js | `src/data/toeicData.js` | TOEIC 문제/예문 |

---

## vocabulary.js

### Export 목록

| 변수명 | 카테고리 | 단어 수 |
|--------|----------|---------|
| `basicWords` | 기초 필수 | 500 |
| `businessWords` | 비즈니스 필수 | 500 |
| `toeicWords` | TOEIC 필수 | 800 |
| `dailyWords` | 일상 필수 | 500 |
| **합계** | | **2,300** |

### 단어 객체 스키마

```js
{
  id: 1,                      // number - 고유 ID (카테고리 내)
  word: "achieve",             // string - 영단어
  pronunciation: "[əˈtʃiːv]",  // string - 발음 기호
  meaning: "달성하다, 성취하다",  // string - 한국어 뜻
  example: "She achieved her goal.", // string - 영어 예문
  category: "verb"             // string - 품사 (noun/verb/adjective/adverb)
}
```

### 품사 (category) 값

| 값 | 의미 |
|----|------|
| `noun` | 명사 |
| `verb` | 동사 |
| `adjective` | 형용사 |
| `adverb` | 부사 |

### 사용처

- **VocabHome.jsx**: 4개 카테고리 통합 검색 (`allWords` 배열 합치기, `source` 필드 추가)
- **VocabBasic.jsx**: `basicWords` → 카드 플립, 뜻 가리기, 품사 필터, 페이지네이션
- **VocabBusiness.jsx**: `businessWords` → 동일 UI
- **VocabToeic.jsx**: `toeicWords` → 동일 UI
- **VocabDaily.jsx**: `dailyWords` → 동일 UI

---

## conversations.js

### Export 목록

| 변수명 | 설명 | 항목 수 |
|--------|------|---------|
| `chatScenarios` | AI 챗봇 시나리오 | 6 |
| `speechExamples` | 발음 연습 예문 | 12 |

### chatScenarios 스키마

```js
{
  id: "free-talk",              // string - 시나리오 ID
  title: "자유 대화",            // string - 한국어 제목
  titleEn: "Free Talk",         // string - 영어 제목
  description: "자유롭게 영어로 대화하세요.", // string - 설명
  systemPrompt: "You are a friendly English tutor..." // string - OpenAI system prompt
}
```

### 시나리오 목록

| ID | 제목 | 설명 |
|----|------|------|
| `free-talk` | 자유 대화 | 자유 주제 영어 대화 |
| `cafe-order` | 카페 주문 | 카페에서 음료 주문 |
| `hotel-checkin` | 호텔 체크인 | 호텔 예약 확인 |
| `job-interview` | 취업 면접 | 영어 면접 연습 |
| `restaurant` | 레스토랑 | 식당 주문 & 대화 |
| `travel-guide` | 여행 가이드 | 여행 중 영어 대화 |

### speechExamples 스키마

```js
{
  id: 1,                        // number - 고유 ID
  text: "How are you doing today?", // string - 연습할 영어 문장
  translation: "오늘 어떠세요?",   // string - 한국어 번역
  level: "beginner"              // string - 난이도
}
```

### 난이도 (level) 값

| 값 | 의미 | 문장 수 |
|----|------|---------|
| `beginner` | 초급 | 4 |
| `intermediate` | 중급 | 4 |
| `advanced` | 고급 | 4 |

---

## businessPhrases.js

### Export 목록

| 변수명 | 설명 | 카테고리 수 |
|--------|------|-------------|
| `emailPhrases` | 이메일 작성 표현 | 3 |
| `meetingPhrases` | 회의 영어 표현 | 3 |
| `presentationPhrases` | 프레젠테이션 표현 | 3 |
| `negotiationPhrases` | 협상 표현 | 3 |

### 표현 객체 스키마

```js
{
  category: "Opening",           // string - 표현 카테고리
  phrases: [
    {
      english: "I'm writing to inquire about...", // string - 영어 표현
      korean: "~에 대해 문의드리고자 합니다.",       // string - 한국어 번역
      usage: "formal"              // string - 사용 상황 (formal/informal/neutral)
    }
  ]
}
```

---

## toeicData.js

### Export 목록

| 변수명 | 설명 |
|--------|------|
| `listeningQuestions` | 듣기 파트 연습 문제 |
| `readingQuestions` | 독해 파트 연습 문제 |
| `mockTestQuestions` | 모의테스트 문제 (15문제) |

### 문제 객체 스키마

```js
{
  id: 1,                         // number - 문제 번호
  part: 1,                       // number - TOEIC 파트 (1-7)
  type: "photographs",           // string - 문제 유형
  question: "What is the man doing?", // string - 질문
  options: ["A. Reading", "B. Writing", "C. Walking", "D. Eating"], // string[] - 보기
  answer: 0,                     // number - 정답 인덱스 (0-based)
  explanation: "The man is clearly reading a book.", // string - 해설
  audioScript: "Look at the photograph..." // string - 스크립트 (듣기용)
}
```

---

## localStorage 키

앱에서 사용하는 `localStorage` 키 목록:

| 키 | 타입 | 설명 | 예시 |
|----|------|------|------|
| `english-pro-theme` | string | 테마 설정 | `"dark"`, `"light"`, `"auto"` |
| `english-pro-color` | string | 컬러 테마 (v2.0 신규) | `"blue"`, `"red"`, `"green"`, `"purple"`, `"orange"` |
| `english-pro-lang` | string | 언어 설정 | `"ko"`, `"en"` |
| `englishpro_openai_key` | string | OpenAI API 키 (ChatBot/ApiKeySetup) | `"sk-..."` |
| `englishpro_openai_api_key` | string | OpenAI API 키 (Settings) | `"sk-..."` |
| `englishpro_progress` | JSON | 학습 진도 | `{"basic": 45, "business": 12}` |
| `englishpro_activity` | JSON | 최근 활동 | `[{"page": "/vocabulary/basic", "date": "..."}]` |

---

## 데이터 흐름

```
vocabulary.js ─────→ VocabHome (통합 검색)
                  ├→ VocabBasic (기초 500)
                  ├→ VocabBusiness (비즈니스 500)
                  ├→ VocabToeic (TOEIC 800)
                  └→ VocabDaily (일상 500)

conversations.js ──→ ChatBot (시나리오 선택 + systemPrompt)
                  └→ SpeechPractice (예문 + 난이도 필터)

businessPhrases.js → EmailWriting, Presentation, Meeting, Negotiation

toeicData.js ──────→ Listening (듣기 연습)
                  ├→ Reading (독해 연습)
                  └→ MockTest (모의테스트)
```
