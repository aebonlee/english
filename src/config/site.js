export const SITE_CONFIG = {
  name: 'English Pro',
  tagline: '\uc2e4\uc6a9 \uc601\uc5b4 \ub9c8\uc2a4\ud130',
  description: '\ube44\uc988\ub2c8\uc2a4 \ubc0f \uc77c\uc0c1\uc5d0\uc11c \ud65c\uc6a9 \uac00\ub2a5\ud55c \uc2e4\uc6a9 \uc601\uc5b4 \ud68c\ud654\xb7\uc791\ubb38 \ud559\uc2b5',
  url: 'https://english.dreamitbiz.com/',
  ogImage: 'https://english.dreamitbiz.com/og-image.png',
  github: 'https://github.com/aebonlee/english',
  version: '1.0.0'
};

export const NAV_MENU = [
  {
    label: '\uc77c\uc0c1 \ud68c\ud654',
    labelEn: 'Conversation',
    path: '/conversation',
    children: [
      { label: '\uc778\uc0ac & \uc18c\uac1c', labelEn: 'Greetings', path: '/conversation/greetings' },
      { label: '\uc77c\uc0c1\uc0dd\ud65c', labelEn: 'Daily Life', path: '/conversation/daily-life' },
      { label: '\uc1fc\ud551 & \uc8fc\ubb38', labelEn: 'Shopping', path: '/conversation/shopping' },
      { label: '\uc5ec\ud589 \uc601\uc5b4', labelEn: 'Travel', path: '/conversation/travel' },
      { label: '\uc74c\uc2dd\uc810', labelEn: 'Restaurant', path: '/conversation/restaurant' },
      { label: '\uc804\ud654 \uc601\uc5b4', labelEn: 'Phone', path: '/conversation/phone' }
    ]
  },
  {
    label: '\ube44\uc988\ub2c8\uc2a4',
    labelEn: 'Business',
    path: '/business',
    children: [
      { label: '\uc774\uba54\uc77c \uc791\uc131', labelEn: 'Email Writing', path: '/business/email' },
      { label: '\ud504\ub808\uc820\ud14c\uc774\uc158', labelEn: 'Presentation', path: '/business/presentation' },
      { label: '\ud68c\uc758 \uc601\uc5b4', labelEn: 'Meeting', path: '/business/meeting' },
      { label: '\ud611\uc0c1 & \uc124\ub4dd', labelEn: 'Negotiation', path: '/business/negotiation' },
      { label: '\uba74\uc811 \uc601\uc5b4', labelEn: 'Interview', path: '/business/interview' }
    ]
  },
  {
    label: '\uc601\ub2e8\uc5b4',
    labelEn: 'Vocabulary',
    path: '/vocabulary',
    children: [
      { label: '\uae30\ucd08 \ud544\uc218 500', labelEn: 'Basic 500', path: '/vocabulary/basic' },
      { label: '\ube44\uc988\ub2c8\uc2a4 500', labelEn: 'Business 500', path: '/vocabulary/business' },
      { label: 'TOEIC 800', labelEn: 'TOEIC 800', path: '/vocabulary/toeic' },
      { label: '\uc77c\uc0c1 500', labelEn: 'Daily 500', path: '/vocabulary/daily' }
    ]
  },
  {
    label: '\uc791\ubb38',
    labelEn: 'Writing',
    path: '/writing',
    children: [
      { label: '\uae30\ucd08 \ubb38\uc7a5', labelEn: 'Basic Sentence', path: '/writing/basic' },
      { label: '\ubb38\ub2e8 \uc791\uc131', labelEn: 'Paragraph', path: '/writing/paragraph' },
      { label: '\uc5d0\uc138\uc774', labelEn: 'Essay', path: '/writing/essay' }
    ]
  },
  {
    label: 'TOEIC',
    labelEn: 'TOEIC',
    path: '/toeic',
    children: [
      { label: '\ub4e3\uae30', labelEn: 'Listening', path: '/toeic/listening' },
      { label: '\ub3c5\ud574', labelEn: 'Reading', path: '/toeic/reading' },
      { label: '\ubaa8\uc758 \ud14c\uc2a4\ud2b8', labelEn: 'Mock Test', path: '/toeic/mock-test' }
    ]
  },
  {
    label: '\uc601\ubb38\ud559 TTS',
    labelEn: 'Literature',
    path: '/literature',
    children: [
      { label: '\uc601\ubbf8\uc2dc', labelEn: 'Poetry', path: '/literature/poetry' },
      { label: '\ub2e8\ud3b8 & \uba85\uc5f0\uc124', labelEn: 'Stories & Speeches', path: '/literature/short-stories' }
    ]
  },
  { label: 'AI \ud559\uc2b5', labelEn: 'AI Chat', path: '/ai-chat' },
  { label: '\ubc1c\uc74c \uc5f0\uc2b5', labelEn: 'Speech', path: '/speech' }
];

export const CURRICULUM_CARDS = [
  { title: '일상 영어 회화', titleEn: 'Daily Conversation', desc: '인사, 쇼핑, 여행 등 실생활 필수 영어 표현', path: '/conversation', color: '#4A8FE7', icon: 'fa-solid fa-comments' },
  { title: '비즈니스 영어', titleEn: 'Business English', desc: '이메일, 회의, 프레젠테이션 핵심 비즈니스 표현', path: '/business', color: '#22C55E', icon: 'fa-solid fa-briefcase' },
  { title: '필수 영단어', titleEn: 'Vocabulary', desc: '기초·비즈니스·TOEIC·일상 필수 2,300+ 단어', path: '/vocabulary', color: '#F59E0B', icon: 'fa-solid fa-book' },
  { title: '영어 작문', titleEn: 'Writing', desc: '문장 구조부터 에세이까지 체계적 작문 연습', path: '/writing', color: '#A855F7', icon: 'fa-solid fa-pen-nib' },
  { title: 'TOEIC 대비', titleEn: 'TOEIC Prep', desc: '듣기·독해 파트별 전략과 모의 테스트', path: '/toeic', color: '#EF4444', icon: 'fa-solid fa-graduation-cap' },
  { title: '영문학 TTS', titleEn: 'Literature TTS', desc: '명시·단편·명연설 원문 + 번역 + TTS 음성 학습', path: '/literature', color: '#8B5CF6', icon: 'fa-solid fa-feather-pointed' },
  { title: 'AI 영어 대화', titleEn: 'AI Chat', desc: 'AI와 실시간 영어 대화 연습', path: '/ai-chat', color: '#06B6D4', icon: 'fa-solid fa-robot' },
  { title: '발음 연습', titleEn: 'Speech Practice', desc: '음성 인식으로 발음 정확도 확인', path: '/speech', color: '#EC4899', icon: 'fa-solid fa-microphone' }
];

export const FAMILY_SITES = [
  { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
  { name: 'KoreaTech 컴퓨팅 사고', url: 'https://koreatech.dreamitbiz.com' },
  { name: 'DB Study 데이터베이스', url: 'https://db-study.dreamitbiz.com' },
  { name: 'English Pro 영어 학습', url: 'https://english.dreamitbiz.com' }
];
