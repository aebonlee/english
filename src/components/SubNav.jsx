import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const categoryTitles = {
  conversation: { ko: '일상 회화', en: 'Conversation' },
  business: { ko: '비즈니스 영어', en: 'Business English' },
  vocabulary: { ko: '단어 학습', en: 'Vocabulary' },
  writing: { ko: '영어 작문', en: 'Writing' },
  toeic: { ko: 'TOEIC', en: 'TOEIC' },
  literature: { ko: '영문학 TTS', en: 'Literature TTS' },
};

export const navData = {
  conversation: [
    { path: '/conversation/greetings', ko: '인사 & 소개', en: 'Greetings' },
    { path: '/conversation/daily-life', ko: '일상생활', en: 'Daily Life' },
    { path: '/conversation/shopping', ko: '쇼핑', en: 'Shopping' },
    { path: '/conversation/travel', ko: '여행', en: 'Travel' },
    { path: '/conversation/restaurant', ko: '레스토랑', en: 'Restaurant' },
    { path: '/conversation/phone', ko: '전화', en: 'Phone' },
  ],
  business: [
    { path: '/business/meeting', ko: '회의', en: 'Meeting' },
    { path: '/business/presentation', ko: '프레젠테이션', en: 'Presentation' },
    { path: '/business/email', ko: '이메일', en: 'Email' },
    { path: '/business/negotiation', ko: '협상', en: 'Negotiation' },
    { path: '/business/interview', ko: '면접', en: 'Interview' },
  ],
  vocabulary: [
    { path: '/vocabulary/basic', ko: '기초 필수', en: 'Basic' },
    { path: '/vocabulary/business', ko: '비즈니스', en: 'Business' },
    { path: '/vocabulary/toeic', ko: 'TOEIC', en: 'TOEIC' },
    { path: '/vocabulary/daily', ko: '일상', en: 'Daily' },
  ],
  writing: [
    { path: '/writing/basic', ko: '기초 문장', en: 'Basic Sentence' },
    { path: '/writing/paragraph', ko: '문단 작성', en: 'Paragraph' },
    { path: '/writing/essay', ko: '에세이', en: 'Essay' },
  ],
  toeic: [
    { path: '/toeic/listening', ko: '듣기', en: 'Listening' },
    { path: '/toeic/reading', ko: '독해', en: 'Reading' },
    { path: '/toeic/mock-test', ko: '모의 테스트', en: 'Mock Test' },
  ],
  literature: [
    { path: '/literature/poetry', ko: '영미시', en: 'Poetry' },
    { path: '/literature/short-stories', ko: '단편 & 명연설', en: 'Stories & Speeches' },
  ],
};

export default function SubNav({ category }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const items = navData[category];
  const scrollRef = useRef(null);
  const [fadeLeft, setFadeLeft] = useState(false);
  const [fadeRight, setFadeRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setFadeLeft(el.scrollLeft > 4);
    setFadeRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  if (!items) return null;

  const cls = ['sub-nav'];
  if (fadeLeft) cls.push('sub-nav--fade-left');
  if (fadeRight) cls.push('sub-nav--fade-right');

  return (
    <nav className={cls.join(' ')}>
      <div className="container" ref={scrollRef}>
        <div className="sub-nav__list">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sub-nav__item${pathname === item.path ? ' sub-nav__item--active' : ''}`}
            >
              {t(item.ko, item.en)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
