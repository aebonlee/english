import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

const TOPIC_CARDS = [
  {
    icon: '👋',
    titleKo: '인사 & 소개',
    titleEn: 'Greetings & Introductions',
    descKo: '영어로 자연스럽게 인사하고 자기소개하는 법을 배웁니다.',
    descEn: 'Learn how to greet and introduce yourself naturally in English.',
    lessons: 5,
    path: '/conversation/greetings',
  },
  {
    icon: '☀️',
    titleKo: '일상생활 표현',
    titleEn: 'Daily Life',
    descKo: '아침 루틴, 날씨, 약속 잡기 등 일상에서 쓰는 표현을 익힙니다.',
    descEn: 'Learn everyday expressions for routines, weather, and making plans.',
    lessons: 6,
    path: '/conversation/daily-life',
  },
  {
    icon: '🛍️',
    titleKo: '쇼핑 & 주문',
    titleEn: 'Shopping & Ordering',
    descKo: '매장, 온라인 쇼핑, 반품/교환 시 필요한 영어 표현을 배웁니다.',
    descEn: 'Master essential English for stores, online shopping, and returns.',
    lessons: 5,
    path: '/conversation/shopping',
  },
  {
    icon: '✈️',
    titleKo: '여행 영어',
    titleEn: 'Travel English',
    descKo: '공항, 호텔, 길 찾기 등 해외여행 필수 표현을 배웁니다.',
    descEn: 'Learn must-know phrases for airports, hotels, and directions.',
    lessons: 6,
    path: '/conversation/travel',
  },
  {
    icon: '🍽️',
    titleKo: '음식점 영어',
    titleEn: 'At the Restaurant',
    descKo: '예약, 주문, 계산 등 레스토랑에서 필요한 표현을 익힙니다.',
    descEn: 'Practice reservations, ordering, and paying at restaurants.',
    lessons: 5,
    path: '/conversation/restaurant',
  },
  {
    icon: '📞',
    titleKo: '전화 영어',
    titleEn: 'Phone English',
    descKo: '전화 받기, 걸기, 메시지 남기기 등 전화 영어를 배웁니다.',
    descEn: 'Learn to answer calls, leave messages, and handle phone conversations.',
    lessons: 5,
    path: '/conversation/phone',
  },
];

export default function ConversationHome(): React.ReactElement {
  const { language, t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('일상 영어 회화 - English Pro', 'Daily English Conversation - English Pro')}
        description={t(
          '인사, 쇼핑, 여행, 음식점 등 실생활에서 바로 쓸 수 있는 영어 회화를 배워보세요.',
          'Learn practical English conversation for greetings, shopping, travel, restaurants, and more.'
        )}
      />

      {/* Page Header */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('일상 회화', 'Conversation')}</span>
          </div>
          <h1 className="page-header__title">{t('일상 영어 회화', 'Daily English Conversation')}</h1>
          <p className="page-header__description">
            {t(
              '실생활에서 바로 활용할 수 있는 영어 회화를 상황별로 배워보세요. 인사부터 여행, 쇼핑, 전화까지 다양한 상황에서 자신 있게 영어로 대화할 수 있도록 도와드립니다.',
              'Learn practical English conversation organized by real-life situations. From greetings to travel, shopping, and phone calls, build confidence in speaking English for every occasion.'
            )}
          </p>
        </div>
      </section>

      {/* Topic Grid */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <div className="topic-grid">
            {TOPIC_CARDS.map((card, index) => (
              <Link
                to={card.path}
                key={card.path}
                className="topic-card card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="topic-card__icon">{card.icon}</div>
                <h3 className="topic-card__title">
                  {language === 'ko' ? card.titleKo : card.titleEn}
                </h3>
                <p className="topic-card__desc">
                  {language === 'ko' ? card.descKo : card.descEn}
                </p>
                <div className="topic-card__meta">
                  <span className="badge">
                    {card.lessons} {t('레슨', 'Lessons')}
                  </span>
                </div>
                <span className="topic-card__cta">
                  {t('학습하기 →', 'Start Learning →')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <div className="tip-box">
            <h4>{t('💡 학습 팁', '💡 Study Tips')}</h4>
            <p>
              {t(
                '각 주제별로 핵심 표현을 먼저 익힌 후, 실전 대화 예시를 소리 내어 읽어보세요. 반복 연습이 자연스러운 영어 대화의 비결입니다!',
                'First learn the key expressions for each topic, then read the example dialogues aloud. Repeated practice is the secret to natural English conversation!'
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
