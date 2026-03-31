interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  github: string;
  version: string;
}

interface NavMenuItem {
  label: string;
  labelEn: string;
  path: string;
  icon?: string;
  children?: NavMenuItem[];
}

interface CurriculumCard {
  title: string;
  titleEn: string;
  desc: string;
  path: string;
  color: string;
  icon: string;
}

interface FamilySite {
  name: string;
  url: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'English Pro',
  tagline: '\uc2e4\uc6a9 \uc601\uc5b4 \ub9c8\uc2a4\ud130',
  description: '\ube44\uc988\ub2c8\uc2a4 \ubc0f \uc77c\uc0c1\uc5d0\uc11c \ud65c\uc6a9 \uac00\ub2a5\ud55c \uc2e4\uc6a9 \uc601\uc5b4 \ud68c\ud654\xb7\uc791\ubb38 \ud559\uc2b5',
  url: 'https://english.dreamitbiz.com/',
  ogImage: 'https://english.dreamitbiz.com/og-image.png',
  github: 'https://github.com/aebonlee/english',
  version: '1.0.0'
};

export const NAV_MENU: NavMenuItem[] = [
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

export const CURRICULUM_CARDS: CurriculumCard[] = [
  { title: '\uc77c\uc0c1 \uc601\uc5b4 \ud68c\ud654', titleEn: 'Daily Conversation', desc: '\uc778\uc0ac, \uc1fc\ud551, \uc5ec\ud589 \ub4f1 \uc2e4\uc0dd\ud65c \ud544\uc218 \uc601\uc5b4 \ud45c\ud604', path: '/conversation', color: '#4A8FE7', icon: 'fa-solid fa-comments' },
  { title: '\ube44\uc988\ub2c8\uc2a4 \uc601\uc5b4', titleEn: 'Business English', desc: '\uc774\uba54\uc77c, \ud68c\uc758, \ud504\ub808\uc820\ud14c\uc774\uc158 \ud575\uc2ec \ube44\uc988\ub2c8\uc2a4 \ud45c\ud604', path: '/business', color: '#22C55E', icon: 'fa-solid fa-briefcase' },
  { title: '\ud544\uc218 \uc601\ub2e8\uc5b4', titleEn: 'Vocabulary', desc: '\uae30\ucd08\xb7\ube44\uc988\ub2c8\uc2a4\xb7TOEIC\xb7\uc77c\uc0c1 \ud544\uc218 2,300+ \ub2e8\uc5b4', path: '/vocabulary', color: '#F59E0B', icon: 'fa-solid fa-book' },
  { title: '\uc601\uc5b4 \uc791\ubb38', titleEn: 'Writing', desc: '\ubb38\uc7a5 \uad6c\uc870\ubd80\ud130 \uc5d0\uc138\uc774\uae4c\uc9c0 \uccb4\uacc4\uc801 \uc791\ubb38 \uc5f0\uc2b5', path: '/writing', color: '#A855F7', icon: 'fa-solid fa-pen-nib' },
  { title: 'TOEIC \ub300\ube44', titleEn: 'TOEIC Prep', desc: '\ub4e3\uae30\xb7\ub3c5\ud574 \ud30c\ud2b8\ubcc4 \uc804\ub7b5\uacfc \ubaa8\uc758 \ud14c\uc2a4\ud2b8', path: '/toeic', color: '#EF4444', icon: 'fa-solid fa-graduation-cap' },
  { title: '\uc601\ubb38\ud559 TTS', titleEn: 'Literature TTS', desc: '\uba85\uc2dc\xb7\ub2e8\ud3b8\xb7\uba85\uc5f0\uc124 \uc6d0\ubb38 + \ubc88\uc5ed + TTS \uc74c\uc131 \ud559\uc2b5', path: '/literature', color: '#8B5CF6', icon: 'fa-solid fa-feather-pointed' },
  { title: 'AI \uc601\uc5b4 \ub300\ud654', titleEn: 'AI Chat', desc: 'AI\uc640 \uc2e4\uc2dc\uac04 \uc601\uc5b4 \ub300\ud654 \uc5f0\uc2b5', path: '/ai-chat', color: '#06B6D4', icon: 'fa-solid fa-robot' },
  { title: '\ubc1c\uc74c \uc5f0\uc2b5', titleEn: 'Speech Practice', desc: '\uc74c\uc131 \uc778\uc2dd\uc73c\ub85c \ubc1c\uc74c \uc815\ud655\ub3c4 \ud655\uc778', path: '/speech', color: '#EC4899', icon: 'fa-solid fa-microphone' }
];

export const FAMILY_SITES: FamilySite[] = [
  { name: 'DreamIT Biz (\ubcf8\uc0ac\uc774\ud2b8)', url: 'https://www.dreamitbiz.com' },
  { name: 'KoreaTech \ucef4\ud4e8\ud305 \uc0ac\uace0', url: 'https://koreatech.dreamitbiz.com' },
  { name: 'DB Study \ub370\uc774\ud130\ubca0\uc774\uc2a4', url: 'https://db-study.dreamitbiz.com' },
  { name: 'English Pro \uc601\uc5b4 \ud559\uc2b5', url: 'https://english.dreamitbiz.com' }
];
