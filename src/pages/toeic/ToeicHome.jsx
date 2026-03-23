import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

const topicCards = [
  {
    id: 'listening',
    title: '듣기 (Listening)',
    titleEn: 'Listening',
    desc: 'Part 1-4 전략 및 연습',
    descEn: 'Part 1-4 strategies and practice',
    icon: '🎧',
    link: '/toeic/listening',
    color: '#4A8FE7',
  },
  {
    id: 'reading',
    title: '독해 (Reading)',
    titleEn: 'Reading',
    desc: 'Part 5-7 전략 및 연습',
    descEn: 'Part 5-7 strategies and practice',
    icon: '📖',
    link: '/toeic/reading',
    color: '#22C55E',
  },
  {
    id: 'mock-test',
    title: '모의 테스트 (Mock Test)',
    titleEn: 'Mock Test',
    desc: '실전처럼 시간 제한 테스트',
    descEn: 'Timed practice test',
    icon: '📝',
    link: '/toeic/mock-test',
    color: '#EF4444',
  },
];

const studyTips = [
  {
    title: '매일 꾸준히',
    titleEn: 'Study Daily',
    desc: '하루 30분씩 매일 꾸준히 공부하는 것이 벼락치기보다 효과적입니다.',
    descEn: 'Studying 30 minutes daily is more effective than cramming.',
    icon: '📅',
  },
  {
    title: '오답 노트 작성',
    titleEn: 'Review Mistakes',
    desc: '틀린 문제를 기록하고 반복적으로 복습하세요.',
    descEn: 'Record wrong answers and review them repeatedly.',
    icon: '📓',
  },
  {
    title: '시간 관리 연습',
    titleEn: 'Time Management',
    desc: '실제 시험처럼 시간을 재며 연습하세요.',
    descEn: 'Practice with a timer to simulate real test conditions.',
    icon: '⏱️',
  },
  {
    title: '영어 환경 만들기',
    titleEn: 'Immerse Yourself',
    desc: '영어 뉴스, 팟캐스트, 영화 등을 통해 영어에 자주 노출되세요.',
    descEn: 'Expose yourself to English through news, podcasts, and movies.',
    icon: '🌍',
  },
];

function ToeicHome() {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('TOEIC 대비 - English Pro', 'TOEIC Preparation - English Pro')}
        description={t(
          'TOEIC 듣기, 독해, 모의 테스트로 목표 점수를 달성하세요.',
          'Achieve your target score with TOEIC listening, reading, and mock tests.'
        )}
      />

      <div className="content-page">
        {/* Header */}
        <section className="page-header" data-aos="fade-up">
          <div className="container">
            <div className="page-header__breadcrumb">
              <Link to="/">{t('홈', 'Home')}</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{t('TOEIC 대비', 'TOEIC')}</span>
            </div>
            <h1 className="page-header__title">
              {t('TOEIC 대비', 'TOEIC Preparation')}
            </h1>
            <p className="page-header__description">
              {t(
                '체계적인 전략과 연습으로 목표 점수를 달성하세요',
                'Achieve your target score with systematic strategies and practice'
              )}
            </p>
          </div>
        </section>

        {/* TOEIC Structure Overview */}
        <section className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('TOEIC 시험 구조', 'TOEIC Test Structure')}
          </h2>
          <div className="info-box">
            <div className="info-box__row">
              <div className="info-box__col">
                <h3 className="info-box__heading">🎧 Listening Comprehension</h3>
                <ul className="info-box__list">
                  <li><strong>Part 1:</strong> {t('사진 묘사 (6문항)', 'Photographs (6 questions)')}</li>
                  <li><strong>Part 2:</strong> {t('질의응답 (25문항)', 'Question-Response (25 questions)')}</li>
                  <li><strong>Part 3:</strong> {t('짧은 대화 (39문항)', 'Short Conversations (39 questions)')}</li>
                  <li><strong>Part 4:</strong> {t('설명문 (30문항)', 'Short Talks (30 questions)')}</li>
                </ul>
                <p className="info-box__summary">
                  <strong>{t('총 100문항 / 약 45분 / 495점', 'Total 100 questions / ~45 min / 495 points')}</strong>
                </p>
              </div>
              <div className="info-box__col">
                <h3 className="info-box__heading">📖 Reading Comprehension</h3>
                <ul className="info-box__list">
                  <li><strong>Part 5:</strong> {t('단문 빈칸 채우기 (30문항)', 'Incomplete Sentences (30 questions)')}</li>
                  <li><strong>Part 6:</strong> {t('장문 빈칸 채우기 (16문항)', 'Text Completion (16 questions)')}</li>
                  <li><strong>Part 7:</strong> {t('독해 (54문항)', 'Reading Comprehension (54 questions)')}</li>
                </ul>
                <p className="info-box__summary">
                  <strong>{t('총 100문항 / 75분 / 495점', 'Total 100 questions / 75 min / 495 points')}</strong>
                </p>
              </div>
            </div>
            <div className="info-box__footer">
              <p className="info-box__total">
                {t(
                  '📊 총 200문항 / 약 2시간 / 만점 990점',
                  '📊 Total 200 questions / ~2 hours / Perfect score 990 points'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('학습 영역', 'Study Areas')}
          </h2>
          <div className="card-grid card-grid--3">
            {topicCards.map((card, index) => (
              <Link
                to={card.link}
                key={card.id}
                className="topic-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="topic-card__icon"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className="topic-card__title">{t(card.title, card.titleEn)}</h3>
                <p className="topic-card__desc">{t(card.desc, card.descEn)}</p>
                <span className="topic-card__cta">
                  {t('학습하기 →', 'Start →')}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('학습 팁', 'Study Tips')}
          </h2>
          <div className="card-grid card-grid--2">
            {studyTips.map((tip, index) => (
              <div
                key={index}
                className="tip-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="tip-card__icon">{tip.icon}</span>
                <div className="tip-card__content">
                  <h3 className="tip-card__title">{t(tip.title, tip.titleEn)}</h3>
                  <p className="tip-card__desc">{t(tip.desc, tip.descEn)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default ToeicHome;
