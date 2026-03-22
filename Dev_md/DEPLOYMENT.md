# English Pro - 배포 가이드

## 배포 정보

| 항목 | 값 |
|------|-----|
| 배포 URL | https://english.dreamitbiz.com |
| GitHub Pages | https://aebonlee.github.io/english/ |
| 저장소 | https://github.com/aebonlee/english |
| 브랜치 (소스) | `main` |
| 브랜치 (배포) | `gh-pages` |
| 빌드 도구 | Vite 8.0.1 |
| 커스텀 도메인 | english.dreamitbiz.com (CNAME) |

---

## 로컬 개발

### 1. 프로젝트 클론
```bash
git clone https://github.com/aebonlee/english.git
cd english
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일 생성:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> Supabase 키가 없어도 앱은 작동합니다 (인증 기능만 비활성화).

### 4. 개발 서버 실행
```bash
npm run dev
```
→ http://localhost:5173/english/ 에서 확인

---

## 빌드 & 배포

### 수동 배포

```bash
# 1. 프로덕션 빌드
npm run build

# 2. 빌드 확인 (선택)
npm run preview

# 3. GitHub Pages 배포
npx gh-pages -d dist
```

### 빌드 결과

빌드 시 다음이 자동 수행됩니다:
- `dist/` 폴더에 최적화된 정적 파일 생성
- 코드 스플리팅 (React.lazy → 32개 별도 chunk)
- CSS 번들링 (12개 CSS → 1개 파일)
- 해시 파일명 (캐시 무효화)
- `404.html` = `index.html` 복사 (SPA 라우팅)
- CNAME 파일 포함

### 빌드 사이즈
- **메인 번들**: ~423KB (gzip: ~123KB)
- **CSS**: ~96KB (gzip: ~16KB)
- **페이지 chunks**: 1-50KB 각각
- **총 파일 수**: ~45개

---

## Vite 설정

```js
// vite.config.js
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/english/',        // GitHub Pages 서브패스
  build: {
    outDir: 'dist',
    sourcemap: false        // 프로덕션 소스맵 비활성화
  }
})
```

### copy404Plugin
SPA 라우팅을 위해 `index.html`을 `404.html`로 복사합니다.
GitHub Pages는 존재하지 않는 경로에 404.html을 서빙하므로,
이를 통해 React Router가 클라이언트에서 라우팅을 처리합니다.

---

## GitHub Pages 설정

### 저장소 Settings → Pages
1. **Source**: Deploy from a branch
2. **Branch**: `gh-pages` / `/ (root)`
3. **Custom domain**: `english.dreamitbiz.com`

### DNS 설정 (커스텀 도메인)
CNAME 레코드:
```
english.dreamitbiz.com → aebonlee.github.io
```

---

## Supabase 설정

### 1. Supabase 프로젝트 생성
1. https://supabase.com 에서 프로젝트 생성
2. Project Settings → API에서 키 복사

### 2. 환경 변수 설정
```
VITE_SUPABASE_URL=https://[프로젝트ID].supabase.co
VITE_SUPABASE_ANON_KEY=[anon/public 키]
```

### 3. Authentication 설정
1. Authentication → Providers → Email 활성화
2. (선택) Google OAuth 설정:
   - Google Cloud Console에서 OAuth 2.0 클라이언트 생성
   - Supabase에 Client ID/Secret 등록
   - Redirect URL 설정

---

## 트러블슈팅

### 페이지 새로고침 시 404
→ `404.html`이 배포에 포함되었는지 확인
→ Vite의 `copy404Plugin`이 정상 작동하는지 확인

### 라우팅이 작동하지 않음
→ `BrowserRouter`의 `basename="/english"` 확인
→ `vite.config.js`의 `base: '/english/'` 확인

### Supabase 인증 오류
→ `.env` 파일의 키가 올바른지 확인
→ Supabase 대시보드에서 URL과 anon key 재확인
→ CORS 설정 확인

### 빌드 에러
```bash
# node_modules 초기화
rm -rf node_modules package-lock.json
npm install

# 빌드 재시도
npm run build
```
