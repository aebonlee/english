# English Pro - API & 외부 서비스 가이드

> v2.0.0 - KoreaTech 디자인 시스템 적용

## 1. OpenAI API (AI 챗봇)

### 개요
AI 챗봇 기능은 OpenAI의 Chat Completions API를 사용합니다.
사용자가 직접 API 키를 등록하는 방식으로, 서버 비용 없이 운영됩니다.

### API 키 발급
1. https://platform.openai.com 에 로그인
2. API Keys 메뉴 → "Create new secret key" 클릭
3. 키 이름 입력 → 생성
4. `sk-` 로 시작하는 키 복사

### 키 등록 방법
1. 사이트 접속 → Settings (`/settings`) 페이지 이동
2. "OpenAI API Key" 입력란에 키 붙여넣기
3. "저장" 버튼 클릭

### 키 저장 위치
- **localStorage**: `englishpro_openai_api_key`
- 서버에 전송되지 않음 (클라이언트 전용)
- 브라우저별 별도 저장

### API 호출 방식
```javascript
// ChatBot.jsx 내부
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: '영어 학습 도우미...' },
      ...messageHistory
    ],
    temperature: 0.7,
    max_tokens: 500
  })
});
```

### 시나리오
| 시나리오 | 설명 |
|----------|------|
| Free Talk | 자유 영어 대화 |
| Cafe | 카페에서 주문하기 |
| Hotel | 호텔 체크인/문의 |
| Interview | 영어 면접 연습 |
| Restaurant | 레스토랑 주문 |
| Travel | 여행 중 대화 |

### 비용
- GPT-3.5-turbo: ~$0.002 / 1K 토큰 (매우 저렴)
- GPT-4: ~$0.03 / 1K 토큰
- 일반적인 대화 1회: ~500-1000 토큰 = $0.001-$0.002

---

## 2. Web Speech API (음성 인식)

### 개요
브라우저 내장 음성 인식 API를 사용합니다.
별도의 API 키나 비용이 필요하지 않습니다.

### 사용 방법
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';           // 영어 인식
recognition.interimResults = false;    // 최종 결과만
recognition.maxAlternatives = 1;       // 최상위 결과 1개

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  // 원문과 비교하여 정확도 계산
};

recognition.start();  // 마이크 시작
recognition.stop();   // 마이크 중지
```

### 브라우저 지원

| 브라우저 | 지원 | 비고 |
|----------|------|------|
| Chrome | ✅ 완전 지원 | 권장 |
| Edge | ✅ 완전 지원 | Chromium 기반 |
| Safari | ⚠️ 부분 지원 | webkit 접두사 필요 |
| Firefox | ❌ 미지원 | 안내 메시지 표시 |
| Mobile Chrome | ✅ 지원 | 마이크 권한 필요 |
| Mobile Safari | ⚠️ 부분 지원 | iOS 14.5+ |

### 정확도 계산
```
원문 단어: ["Hello", "how", "are", "you"]
인식 단어: ["Hello", "how", "our", "you"]
매칭: ✅ ✅ ❌ ✅
정확도: 3/4 = 75%
```

### 권한 요청
- 첫 사용 시 마이크 권한 팝업이 표시됩니다
- "허용"을 클릭해야 음성 인식이 작동합니다
- HTTPS 환경에서만 작동합니다

---

## 3. Supabase (인증/데이터베이스)

### 개요
이메일/비밀번호 및 소셜 로그인 인증을 제공합니다.

### 환경 변수
```
VITE_SUPABASE_URL=https://[프로젝트ID].supabase.co
VITE_SUPABASE_ANON_KEY=[anon/public 키]
```

### 클라이언트 초기화
```javascript
// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
```

### 인증 메서드

| 메서드 | 설명 |
|--------|------|
| `login(email, password)` | 이메일 로그인 |
| `signup(email, password)` | 이메일 회원가입 |
| `loginWithGoogle()` | Google OAuth 로그인 |
| `logout()` | 로그아웃 |
| `resetPassword(email)` | 비밀번호 재설정 이메일 발송 |

### Supabase 미설정 시
- `supabase` 변수가 `null`
- AuthContext에서 graceful fallback
- 인증 관련 기능 비활성화
- 콘텐츠 학습은 정상 작동

---

## 4. localStorage 키 목록

| 키 | 용도 | 값 예시 |
|----|------|---------|
| `english-pro-theme` | 테마 설정 | `dark`, `light`, `auto` |
| `english-pro-color` | 컬러 테마 (v2.0 신규) | `blue`, `red`, `green`, `purple`, `orange` |
| `english-pro-lang` | 언어 설정 | `ko`, `en` |
| `englishpro_openai_key` | OpenAI API 키 (ChatBot/ApiKeySetup) | `sk-...` |
| `englishpro_openai_api_key` | OpenAI API 키 (Settings) | `sk-...` |
| `englishpro_progress` | 학습 진도 | `{ conversation: 30, ... }` |
| `englishpro_activity` | 최근 활동 | `[{ type, date, ... }]` |
