import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

const topicCards = [
  {
    id: 'basic',
    title: '기초 문장 (Basic Sentence)',
    titleEn: 'Basic Sentence',
    desc: '5가지 기본 문형으로 영어 문장 구조를 익히세요',
    descEn: 'Learn English sentence structure with 5 basic patterns',
    icon: '📝',
    link: '/writing/basic',
    color: '#4A8FE7',
  },
  {
    id: 'paragraph',
    title: '문단 작성 (Paragraph)',
    titleEn: 'Paragraph Writing',
    desc: '주제문, 뒷받침 문장, 결론 문장으로 문단 구성하기',
    descEn: 'Compose paragraphs with topic, supporting, and concluding sentences',
    icon: '📄',
    link: '/writing/paragraph',
    color: '#22C55E',
  },
  {
    id: 'essay',
    title: '에세이 (Essay)',
    titleEn: 'Essay Writing',
    desc: '서론, 본론, 결론의 구조로 에세이 쓰기',
    descEn: 'Write essays with introduction, body, and conclusion',
    icon: '📑',
    link: '/writing/essay',
    color: '#A855F7',
  },
];

function WritingHome(): React.ReactElement {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('영어 작문 - English Pro', 'English Writing - English Pro')}
        description={t(
          '기초 문장부터 에세이까지 체계적인 영어 작문 학습',
          'Systematic English writing from basic sentences to essays'
        )}
      />

      <div className="content-page">
        {/* Header */}
        <section className="page-header" data-aos="fade-up">
          <div className="container">
            <div className="page-header__breadcrumb">
              <Link to="/">{t('홈', 'Home')}</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{t('영어 작문', 'Writing')}</span>
            </div>
            <h1 className="page-header__title">
              {t('영어 작문', 'English Writing')}
            </h1>
            <p className="page-header__description">
              {t(
                '기초 문장 구조부터 에세이까지 단계별로 작문 실력을 향상시키세요',
                'Improve your writing skills step by step, from basic sentences to essays'
              )}
            </p>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('학습 과정', 'Learning Path')}
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

        {/* Writing Process */}
        <section className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('영어 작문의 핵심', 'Keys to English Writing')}
          </h2>
          <div className="card-grid card-grid--2">
            <div className="tip-card">
              <span className="tip-card__icon">✍️</span>
              <div className="tip-card__content">
                <h3 className="tip-card__title">{t('명확하게 쓰기', 'Write Clearly')}</h3>
                <p className="tip-card__desc">
                  {t(
                    '복잡한 문장보다 명확하고 간결한 문장이 좋습니다. 하나의 문장에 하나의 생각을 담으세요.',
                    'Clear and concise sentences are better than complex ones. Put one idea per sentence.'
                  )}
                </p>
              </div>
            </div>
            <div className="tip-card">
              <span className="tip-card__icon">🔗</span>
              <div className="tip-card__content">
                <h3 className="tip-card__title">{t('연결어 사용하기', 'Use Transitions')}</h3>
                <p className="tip-card__desc">
                  {t(
                    '문장과 문장, 문단과 문단을 자연스럽게 연결하는 연결어를 활용하세요.',
                    'Use transition words to naturally connect sentences and paragraphs.'
                  )}
                </p>
              </div>
            </div>
            <div className="tip-card">
              <span className="tip-card__icon">📋</span>
              <div className="tip-card__content">
                <h3 className="tip-card__title">{t('구조 잡기', 'Structure First')}</h3>
                <p className="tip-card__desc">
                  {t(
                    '글을 쓰기 전에 개요를 먼저 작성하세요. 서론-본론-결론의 구조를 갖추면 논리적인 글이 됩니다.',
                    'Create an outline before writing. Having an intro-body-conclusion structure makes your writing logical.'
                  )}
                </p>
              </div>
            </div>
            <div className="tip-card">
              <span className="tip-card__icon">🔍</span>
              <div className="tip-card__content">
                <h3 className="tip-card__title">{t('교정하기', 'Proofread')}</h3>
                <p className="tip-card__desc">
                  {t(
                    '작성 후 반드시 문법, 철자, 구두점을 확인하세요. 소리 내어 읽으면 자연스러움을 확인할 수 있습니다.',
                    'Always check grammar, spelling, and punctuation after writing. Reading aloud helps verify naturalness.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WritingHome;
