# English Pro 개발일지

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | English Pro |
| 도메인 | https://english.dreamitbiz.com |
| 기술 스택 | React 19 + Vite 8 + Supabase Auth |
| 기본 컬러 | Blue #0046C8 |
| 폰트 | Noto Sans KR |
| 인증 | Google OAuth + Kakao OAuth (Supabase) |

---

## 2026-03-26 — 모바일 메뉴 드롭다운 링크 동작 불가 버그 수정

### 문제
모바일 메뉴에서 드롭다운 하위 링크(NavLink)를 탭하면 페이지 이동이 되지 않는 버그.
직접 링크(AI Chat, Speech 등)는 정상 동작하나, 드롭다운 내부 링크(Greetings, Email Writing 등)만 동작하지 않음.

### 원인 분석 (3가지 복합 버그)

#### 1. 핵심 버그: mousedown click-outside 핸들러가 모바일 드롭다운을 닫음 (`Navbar.jsx`)

`document.addEventListener('mousedown')` click-outside 핸들러가 데스크톱 네비게이션(`dropdownRef`)만 기준으로 판단.
모바일 메뉴 내부 클릭도 "외부 클릭"으로 인식하여 `setOpenDropdown(null)` 호출.

**이벤트 순서 문제**:
1. `mousedown` 발생 → click-outside 핸들러 → `setOpenDropdown(null)` → React 리렌더링
2. 드롭다운 `<ul>`이 조건부 렌더링(`openDropdown === item.path`)으로 DOM에서 제거됨
3. `click` 이벤트 발생 시점에 NavLink가 이미 DOM에 존재하지 않음
4. React Router 네비게이션이 실행되지 않음

#### 2. CSS `display` 충돌: `responsive.css` vs `navbar.css`

CSS 로드 순서: `navbar.css` → `responsive.css` (마지막)

| 파일 | 브레이크포인트 | 규칙 |
|------|---------------|------|
| `navbar.css` | `@768px` | `.mobile-menu { display: flex; }` |
| `responsive.css` | `@1024px` | `.mobile-menu { display: block; }` |

`responsive.css`가 나중에 로드되므로 모든 모바일 뷰포트(≤1024px)에서 `display: block`이 적용됨.
→ `flex-direction: column`, `flex: 1` 등 flex 속성이 무시되어 메뉴 내부 레이아웃 깨짐.

#### 3. 오버레이 `pointer-events` 누락 (768px~1024px 구간)

| 뷰포트 | `responsive.css` | `navbar.css` | 결과 |
|---------|------------------|--------------|------|
| 768px~1024px | `display: block` (pointer-events 미설정) | 미적용 | 투명 오버레이가 클릭 차단 |
| <768px | `display: block` | `pointer-events: none` | 정상 |

### 수정 내용

#### `src/components/layout/Navbar.jsx`
- `mobileMenuRef` ref 추가 → `<aside>` 모바일 메뉴에 연결
- mousedown click-outside 핸들러에 모바일 메뉴 내부 클릭 시 early return 추가:
  ```javascript
  if (mobileMenuRef.current && mobileMenuRef.current.contains(e.target)) return;
  ```

#### `src/styles/responsive.css` (`@1024px`)
- `.mobile-menu { display: block }` → `display: flex` 변경
- `.mobile-overlay`에 `pointer-events: none` 추가
- `.mobile-overlay.visible`에 `pointer-events: auto` 추가

#### `src/styles/navbar.css`
- `@1024px` 브레이크포인트에 모바일 메뉴/오버레이 활성화 규칙 통합
- `@768px` 브레이크포인트에서 중복 mobile-menu/overlay 규칙 제거

### 영향 파일
- `src/components/layout/Navbar.jsx` — click-outside 핸들러 수정 + mobileMenuRef 추가
- `src/styles/navbar.css` — 모바일 메뉴 브레이크포인트 통합 (@1024px)
- `src/styles/responsive.css` — display: flex + pointer-events 수정
