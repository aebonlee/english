# English Pro

> 비즈니스 및 일상에서 활용 가능한 실용 영어 회화·작문·단어·TOEIC·영문학 TTS 학습 플랫폼

## 배포 URL

**https://english.dreamitbiz.com**

## 주요 기능

| 섹션 | 설명 |
|------|------|
| **일상 회화** | 인사, 쇼핑, 여행, 음식점, 전화 등 상황별 회화 |
| **비즈니스 영어** | 이메일, 프레젠테이션, 회의, 협상, 면접 |
| **필수 영단어** | 기초 500 / 비즈니스 500 / TOEIC 800 / 일상 500 |
| **영어 작문** | 기초 문장, 문단 작성, 에세이 |
| **TOEIC 대비** | 듣기·독해 파트별 전략 + 모의 테스트 |
| **영문학 TTS** | 명시·단편·명연설 원문 + 한국어 번역 + TTS 음성 |
| **AI 영어 대화** | AI와 실시간 영어 대화 연습 |
| **발음 연습** | 음성 인식 기술로 발음 정확도 분석 |

## 기술 스택

- **Frontend**: React 19, React Router 7, Vite 8
- **Backend / Auth**: Supabase
- **TTS**: Web Speech API (SpeechSynthesis)
- **음성 인식**: Web Speech API (SpeechRecognition)
- **Styling**: Custom CSS (CSS Variables, Dark Mode)
- **Deployment**: Cloudflare Pages

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/       # 공통 컴포넌트 (Navbar, Footer, SubNav, PageLayout 등)
├── config/           # 사이트 설정 (NAV_MENU, CURRICULUM_CARDS)
├── contexts/         # React Context (Language, Auth, Theme)
├── data/             # 정적 데이터 (단어, 문학 작품 등)
├── hooks/            # 커스텀 훅
├── layouts/          # 레이아웃 (PublicLayout)
├── pages/
│   ├── conversation/ # 일상 회화 페이지
│   ├── business/     # 비즈니스 영어 페이지
│   ├── vocabulary/   # 영단어 페이지
│   ├── writing/      # 작문 페이지
│   ├── toeic/        # TOEIC 페이지
│   ├── literature/   # 영문학 TTS 페이지
│   ├── ai-chat/      # AI 대화 페이지
│   └── speech/       # 발음 연습 페이지
├── styles/           # CSS (base, site, dark-mode 등)
└── main.jsx          # 앱 진입점
```

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다. 문학 작품은 저작권이 만료된 Public Domain 작품만 사용합니다.


## License / 라이선스

**저작권 (c) 2025-2026 드림아이티비즈(DreamIT Biz). 모든 권리 보유.**

본 소프트웨어는 저작권법 및 지적재산권법에 의해 보호되는 독점 소프트웨어입니다. 본 프로젝트는 소프트웨어 저작권 등록이 완료되어 법적 보호를 받습니다.

- 본 소프트웨어의 무단 복제, 수정, 배포 또는 사용은 엄격히 금지됩니다.
- 저작권자의 사전 서면 허가 없이 본 소프트웨어의 어떠한 부분도 복제하거나 전송할 수 없습니다.
- 본 소프트웨어는 DreamIT Biz(https://www.dreamitbiz.com) 교육 플랫폼의 일부로 제공됩니다.

라이선스 문의: aebon@dreamitbiz.com

---

**Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.**

This software is proprietary and protected under applicable copyright and intellectual property laws. This project has been registered for software copyright protection.

- Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
- No part of this software may be reproduced or transmitted in any form without prior written permission from the copyright holder.
- This software is provided as part of the DreamIT Biz (https://www.dreamitbiz.com) educational platform.

For licensing inquiries, contact: aebon@dreamitbiz.com

---

**Designed & Developed by Ph.D Aebon Lee**

DreamIT Biz | https://www.dreamitbiz.com

