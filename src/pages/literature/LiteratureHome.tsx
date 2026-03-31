import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

const TOPIC_CARDS = [
  {
    icon: '\uD83D\uDCDC',
    titleKo: '영미시 (Poetry)',
    titleEn: 'Poetry',
    descKo: '프로스트, 셰익스피어, 디킨슨 등 저작권 해제된 명시의 원문·번역·TTS 듣기',
    descEn: 'Read, listen, and study classic poems by Frost, Shakespeare, Dickinson and more.',
    count: 9,
    path: '/literature/poetry',
  },
  {
    icon: '\uD83D\uDCD6',
    titleKo: '단편 & 명연설',
    titleEn: 'Short Stories & Speeches',
    descKo: '이솝 우화, O. 헨리, 링컨·처칠 연설 등 명문의 원문·번역·TTS 듣기',
    descEn: 'Classic fables, short stories, and iconic speeches with translation & TTS.',
    count: 5,
    path: '/literature/short-stories',
  },
];

export default function LiteratureHome(): React.ReactElement {
  const { language, t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('영문학 TTS - English Pro', 'Literature TTS - English Pro')}
        description={t(
          '저작권 해제된 영미 명시·단편·명연설을 원문과 번역, TTS 음성으로 학습하세요.',
          'Study classic public-domain poetry, stories, and speeches with original text, translation, and TTS audio.'
        )}
      />

      {/* Page Header */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('영문학 TTS', 'Literature TTS')}</span>
          </div>
          <h1 className="page-header__title">
            {t('영문학 TTS', 'Literature TTS')}
          </h1>
          <p className="page-header__description">
            {t(
              '저작권이 풀린 영미 문학 명작을 원문과 한국어 번역으로 읽고, TTS 음성으로 들으며 영어 실력을 키우세요. 귀도 열려야 영어를 잘합니다!',
              'Read classic public-domain literature with original text and Korean translation, and listen with TTS to improve your English. Listening is the key to mastering English!'
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
                    {card.count} {t('작품', 'Works')}
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

      {/* Tips */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <div className="tip-box">
            <h4>{t('💡 학습 팁', '💡 Study Tips')}</h4>
            <p>
              {t(
                '먼저 TTS로 원문을 들으며 리듬과 발음에 익숙해지세요. 그다음 번역과 어휘를 확인하고, 마지막으로 소리 내어 따라 읽으면 듣기·독해·발음을 동시에 훈련할 수 있습니다.',
                'First listen to the original text via TTS to get familiar with rhythm and pronunciation. Then check the translation and vocabulary, and finally read aloud to train listening, reading, and pronunciation simultaneously.'
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
