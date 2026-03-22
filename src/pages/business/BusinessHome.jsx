import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';

const TOPIC_CARDS = [
  {
    id: 'email',
    icon: '\u2709\uFE0F',
    title: '\uC774\uBA54\uC77C \uC791\uC131',
    titleEn: 'Email Writing',
    description: '\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C\uC758 \uAD6C\uC870, \uD575\uC2EC \uD45C\uD604, \uD15C\uD50C\uB9BF\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
    descriptionEn: 'Learn business email structure, key expressions, and templates.',
    link: '/business/email'
  },
  {
    id: 'presentation',
    icon: '\uD83D\uDCCA',
    title: '\uD504\uB808\uC820\uD14C\uC774\uC158',
    titleEn: 'Presentation',
    description: '\uC601\uC5B4 \uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uC624\uD504\uB2DD\uBD80\uD130 Q&A\uAE4C\uC9C0 \uB9C8\uC2A4\uD130\uD569\uB2C8\uB2E4.',
    descriptionEn: 'Master English presentations from opening to Q&A.',
    link: '/business/presentation'
  },
  {
    id: 'meeting',
    icon: '\uD83E\uDD1D',
    title: '\uD68C\uC758 \uC601\uC5B4',
    titleEn: 'Meeting English',
    description: '\uD68C\uC758 \uC9C4\uD589, \uC758\uACAC \uC81C\uC2DC, \uD569\uC758 \uB3C4\uCD9C\uC744 \uC704\uD55C \uD575\uC2EC \uD45C\uD604\uC744 \uBC30\uC6C1\uB2C8\uB2E4.',
    descriptionEn: 'Learn key expressions for running meetings, giving opinions, and reaching consensus.',
    link: '/business/meeting'
  },
  {
    id: 'negotiation',
    icon: '\uD83D\uDCB0',
    title: '\uD611\uC0C1 & \uC124\uB4DD',
    titleEn: 'Negotiation & Persuasion',
    description: '\uBE44\uC988\uB2C8\uC2A4 \uD611\uC0C1\uACFC \uC124\uB4DD\uC744 \uC704\uD55C \uC804\uB7B5\uC801 \uC601\uC5B4 \uD45C\uD604\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
    descriptionEn: 'Learn strategic English expressions for business negotiation and persuasion.',
    link: '/business/negotiation'
  },
  {
    id: 'interview',
    icon: '\uD83D\uDC54',
    title: '\uBA74\uC811 \uC601\uC5B4',
    titleEn: 'Job Interview',
    description: '\uC601\uC5B4 \uBA74\uC811\uC758 \uC790\uAE30\uC18C\uAC1C, \uACBD\uB825 \uC124\uBA85, \uC5F0\uBD09 \uD611\uC0C1\uAE4C\uC9C0 \uC900\uBE44\uD569\uB2C8\uB2E4.',
    descriptionEn: 'Prepare for English interviews: self-introduction, experience, and salary negotiation.',
    link: '/business/interview'
  }
];

function BusinessHome() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t(
          '\uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4 - English Pro',
          'Business English - English Pro'
        )}
        description={t(
          '\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C, \uD504\uB808\uC820\uD14C\uC774\uC158, \uD68C\uC758, \uD611\uC0C1, \uBA74\uC811 \uC601\uC5B4\uB97C \uD559\uC2B5\uD569\uB2C8\uB2E4.',
          'Learn business email, presentation, meeting, negotiation, and interview English.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <h1>{t('\uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4', 'Business English')}</h1>
        <p className="page-header__subtitle">
          {t(
            '\uC9C1\uC7A5\uC5D0\uC11C \uBC14\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 \uC2E4\uC804 \uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4\uB97C \uBC30\uC6CC\uBCF4\uC138\uC694.',
            'Learn practical business English you can use at work right away.'
          )}
        </p>
      </section>

      <section className="lesson-section" data-aos="fade-up" data-aos-delay="100">
        <div className="topic-grid">
          {TOPIC_CARDS.map((card, index) => (
            <Link
              to={card.link}
              key={card.id}
              className="topic-card"
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className="topic-card__icon">{card.icon}</div>
              <h3 className="topic-card__title">
                {t(card.title, card.titleEn)}
              </h3>
              <p className="topic-card__description">
                {t(card.description, card.descriptionEn)}
              </p>
              <span className="topic-card__cta">
                {t('\uD559\uC2B5\uD558\uAE30 \u2192', 'Start Learning \u2192')}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="lesson-section" data-aos="fade-up" data-aos-delay="200">
        <div className="tip-box">
          <h3>{t('\uD559\uC2B5 \uD301', 'Study Tip')}</h3>
          <p>
            {t(
              '\uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4\uB294 \uC77C\uC0C1 \uD68C\uD654\uC640 \uB2EC\uB9AC \uACA9\uC2DD\uACFC \uC815\uD655\uC131\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uAC01 \uC0C1\uD669\uC5D0 \uB9DE\uB294 \uD45C\uD604\uC744 \uC678\uC6B0\uAE30\uBCF4\uB2E4 \uC774\uD574\uD558\uACE0, \uC2E4\uC81C \uC5C5\uBB34\uC5D0\uC11C \uBC14\uB85C \uC0AC\uC6A9\uD574 \uBCF4\uC138\uC694. \uBC18\uBCF5\uC801\uC778 \uC0AC\uC6A9\uC774 \uAC00\uC7A5 \uD6A8\uACFC\uC801\uC778 \uD559\uC2B5\uBC95\uC785\uB2C8\uB2E4.',
              'Business English differs from casual conversation in its formality and precision. Rather than just memorizing expressions, understand when and how to use them, then practice in real work situations. Repeated use is the most effective learning method.'
            )}
          </p>
        </div>
      </section>

      <section className="lesson-section" data-aos="fade-up" data-aos-delay="300">
        <h2>{t('\uCD94\uCC9C \uD559\uC2B5 \uC21C\uC11C', 'Recommended Learning Order')}</h2>
        <div className="example-box">
          <ol>
            <li>
              <strong>{t('\uC774\uBA54\uC77C \uC791\uC131', 'Email Writing')}</strong> - {t('\uAC00\uC7A5 \uBE48\uBC88\uD558\uAC8C \uC0AC\uC6A9\uB418\uB294 \uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4', 'The most frequently used business English')}
            </li>
            <li>
              <strong>{t('\uD68C\uC758 \uC601\uC5B4', 'Meeting English')}</strong> - {t('\uB9E4\uC77C \uC5C5\uBB34\uC5D0\uC11C \uD544\uC694\uD55C \uD575\uC2EC \uD45C\uD604', 'Core expressions needed for daily work')}
            </li>
            <li>
              <strong>{t('\uD504\uB808\uC820\uD14C\uC774\uC158', 'Presentation')}</strong> - {t('\uCCB4\uACC4\uC801\uC778 \uBC1C\uD45C \uAE30\uC220', 'Structured presentation skills')}
            </li>
            <li>
              <strong>{t('\uD611\uC0C1 & \uC124\uB4DD', 'Negotiation & Persuasion')}</strong> - {t('\uACE0\uAE09 \uBE44\uC988\uB2C8\uC2A4 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158', 'Advanced business communication')}
            </li>
            <li>
              <strong>{t('\uBA74\uC811 \uC601\uC5B4', 'Interview English')}</strong> - {t('\uCDE8\uC5C5/\uC774\uC9C1 \uC900\uBE44', 'Job search / career change preparation')}
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default BusinessHome;
