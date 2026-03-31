import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import PageLayout from '../../components/PageLayout';

const essayStructure = [
  {
    id: 'intro',
    title: '서론 (Introduction)',
    titleEn: 'Introduction',
    icon: '🚀',
    elements: [
      { ko: 'Hook: 독자의 관심을 끄는 문장 (질문, 통계, 인용문 등)', en: 'Hook: A sentence to grab the reader\'s attention (question, statistic, quote, etc.)' },
      { ko: 'Background: 주제에 대한 배경 정보 제공', en: 'Background: Provide context about the topic' },
      { ko: 'Thesis Statement: 에세이의 핵심 주장 (가장 중요!)', en: 'Thesis Statement: The main argument of the essay (most important!)' },
    ],
    example: {
      en: 'In today\'s rapidly changing world, the ability to speak more than one language has become increasingly valuable. As globalization connects economies and cultures, bilingual and multilingual individuals enjoy significant advantages in both their personal and professional lives. Learning a second language not only enhances career opportunities but also improves cognitive abilities and fosters cultural understanding.',
      ko: '빠르게 변화하는 오늘날의 세계에서 하나 이상의 언어를 구사할 수 있는 능력은 점점 더 가치 있어지고 있습니다. 세계화가 경제와 문화를 연결함에 따라, 이중 언어 및 다국어 사용자는 개인 생활과 직업 생활 모두에서 상당한 이점을 누립니다. 제2외국어를 배우는 것은 직업 기회를 향상시킬 뿐만 아니라 인지 능력을 개선하고 문화적 이해를 촉진합니다.',
    },
  },
  {
    id: 'body',
    title: '본론 (Body Paragraphs)',
    titleEn: 'Body Paragraphs',
    icon: '📝',
    elements: [
      { ko: 'Topic Sentence: 각 문단의 핵심 아이디어', en: 'Topic Sentence: The main idea of each paragraph' },
      { ko: 'Evidence/Examples: 구체적인 증거와 예시', en: 'Evidence/Examples: Specific evidence and examples' },
      { ko: 'Analysis: 증거를 분석하고 주장과 연결', en: 'Analysis: Analyze evidence and connect to the argument' },
      { ko: 'Transition: 다음 문단으로의 자연스러운 전환', en: 'Transition: Smooth transition to the next paragraph' },
    ],
    example: {
      en: 'First and foremost, learning a second language significantly expands career opportunities. According to a study by the American Council on the Teaching of Foreign Languages, bilingual employees earn 5 to 20 percent more per hour than monolingual workers. In multinational companies, employees who can communicate with international clients and partners are highly valued. For instance, a marketing professional who speaks both English and Mandarin can effectively manage campaigns across Asian markets, making them an indispensable asset to their organization.',
      ko: '무엇보다도, 제2외국어를 배우는 것은 직업 기회를 크게 확장시킵니다. 미국 외국어 교육 협의회의 연구에 따르면, 이중 언어 직원은 단일 언어 근로자보다 시간당 5~20% 더 많은 수입을 올립니다. 다국적 기업에서는 국제 고객 및 파트너와 소통할 수 있는 직원이 높이 평가됩니다. 예를 들어, 영어와 중국어를 모두 구사하는 마케팅 전문가는 아시아 시장 전반에 걸쳐 캠페인을 효과적으로 관리할 수 있어 조직에 없어서는 안 될 자산이 됩니다.',
    },
  },
  {
    id: 'conclusion',
    title: '결론 (Conclusion)',
    titleEn: 'Conclusion',
    icon: '🏁',
    elements: [
      { ko: 'Restate Thesis: 주장을 다른 말로 다시 표현', en: 'Restate Thesis: Rephrase the main argument' },
      { ko: 'Summarize: 본론의 핵심 포인트 요약', en: 'Summarize: Recap the key points from body paragraphs' },
      { ko: 'Final Thought: 독자에게 남기는 인상적인 마무리', en: 'Final Thought: Leave the reader with a memorable closing' },
    ],
    example: {
      en: 'In conclusion, learning a second language is a worthwhile investment that pays dividends in multiple areas of life. From expanding career prospects and sharpening cognitive skills to building bridges between cultures, the benefits of bilingualism are both profound and far-reaching. As our world continues to become more interconnected, those who take the initiative to learn another language will be better prepared to thrive in the global community. The question is not whether we can afford to learn a new language, but whether we can afford not to.',
      ko: '결론적으로, 제2외국어를 배우는 것은 삶의 여러 영역에서 보상을 주는 가치 있는 투자입니다. 직업 전망 확대와 인지 능력 향상에서 문화 간 다리를 놓는 것까지, 이중 언어 사용의 이점은 깊고 광범위합니다. 우리 세계가 점점 더 상호 연결됨에 따라, 다른 언어를 배우려는 주도성을 발휘하는 사람들은 글로벌 커뮤니티에서 성공할 준비가 더 잘 되어 있을 것입니다. 문제는 우리가 새로운 언어를 배울 여유가 있느냐가 아니라, 배우지 않을 여유가 있느냐입니다.',
    },
  },
];

const transitionWords = [
  {
    category: '추가 (Addition)',
    categoryEn: 'Addition',
    words: ['Furthermore', 'Moreover', 'In addition', 'Additionally', 'Also', 'Besides'],
  },
  {
    category: '대조 (Contrast)',
    categoryEn: 'Contrast',
    words: ['However', 'On the other hand', 'Nevertheless', 'In contrast', 'Although', 'Despite'],
  },
  {
    category: '원인/결과 (Cause/Effect)',
    categoryEn: 'Cause/Effect',
    words: ['Therefore', 'Consequently', 'As a result', 'Because of this', 'Thus', 'Hence'],
  },
  {
    category: '예시 (Examples)',
    categoryEn: 'Examples',
    words: ['For example', 'For instance', 'Such as', 'To illustrate', 'Specifically', 'In particular'],
  },
  {
    category: '순서 (Sequence)',
    categoryEn: 'Sequence',
    words: ['First', 'Second', 'Next', 'Then', 'Finally', 'Subsequently'],
  },
  {
    category: '결론 (Conclusion)',
    categoryEn: 'Conclusion',
    words: ['In conclusion', 'To summarize', 'Overall', 'In short', 'To sum up', 'All in all'],
  },
];

const writingPrompts = [
  {
    title: 'Technology in Education',
    titleKo: '교육에서의 기술',
    prompt: 'Do you think technology has a positive or negative impact on education? Provide reasons and examples to support your opinion.',
    promptKo: '기술이 교육에 긍정적인 영향을 미치는지 부정적인 영향을 미치는지 의견을 제시하고, 이유와 예시를 들어 뒷받침하세요.',
  },
  {
    title: 'Environmental Responsibility',
    titleKo: '환경 책임',
    prompt: 'What can individuals do to help protect the environment? Discuss at least three specific actions people can take.',
    promptKo: '개인이 환경 보호를 위해 할 수 있는 일은 무엇인가요? 사람들이 취할 수 있는 구체적인 행동을 최소 세 가지 이상 논의하세요.',
  },
  {
    title: 'Work-Life Balance',
    titleKo: '일과 삶의 균형',
    prompt: 'Is work-life balance achievable in modern society? Discuss the challenges and suggest possible solutions.',
    promptKo: '현대 사회에서 일과 삶의 균형은 달성 가능한가요? 과제를 논의하고 가능한 해결책을 제안하세요.',
  },
];

function Essay(): React.ReactElement {
  const { language, t } = useLanguage();
  useAOS();

  const [expandedStructure, setExpandedStructure] = useState('intro');
  const [userEssay, setUserEssay] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const sections = [
    { id: 'structure', ko: '에세이 구조', en: 'Structure' },
    { id: 'transitions', ko: '연결어', en: 'Transitions' },
    { id: 'sample', ko: '샘플 에세이', en: 'Sample' },
    { id: 'practice', ko: '에세이 연습', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('에세이 작성 - English Pro', 'Essay Writing - English Pro')}
        description={t(
          '서론, 본론, 결론의 구조로 영어 에세이 쓰기',
          'Write English essays with introduction, body, and conclusion'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/writing">{t('영어 작문', 'Writing')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('에세이 작성', 'Essay')}</span>
          </div>
          <h1 className="page-header__title">
            {language === 'ko'
              ? <>에세이 작성 <span className="page-header__en">(Essay Writing)</span></>
              : 'Essay Writing'}
          </h1>
          <p className="page-header__description">
            {t(
              '논리적이고 설득력 있는 에세이를 작성하는 방법을 배우세요',
              'Learn how to write logical and persuasive essays'
            )}
          </p>
        </div>
      </section>

      <PageLayout sections={sections} category="writing">
        <div className="content-page">

        {/* Essay Structure */}
        <section id="structure" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('에세이 구조', 'Essay Structure')}
          </h2>

          {/* Flow buttons */}
          <div className="essay-flow">
            {essayStructure.map((section, idx) => (
              <div key={section.id} className="essay-flow__item">
                <button
                  className={`essay-flow__btn essay-flow__btn--${section.id} ${expandedStructure === section.id ? 'essay-flow__btn--active' : ''}`}
                  onClick={() => setExpandedStructure(expandedStructure === section.id ? '' : section.id)}
                >
                  <span className="essay-flow__icon">{section.icon}</span>
                  <span className="essay-flow__label">{t(section.title, section.titleEn)}</span>
                  <span className={`essay-flow__chevron ${expandedStructure === section.id ? 'essay-flow__chevron--open' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                {idx < essayStructure.length - 1 && (
                  <span className="essay-flow__arrow">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Expanded content */}
          {essayStructure.map((section) => (
            expandedStructure === section.id && (
              <div key={section.id} className={`essay-detail essay-detail--${section.id}`} data-aos="fade-up">
                <div className="essay-detail__elements">
                  <h4 className="essay-detail__subtitle">
                    <i className="fas fa-list-check"></i>
                    {t('구성 요소', 'Key Elements')}
                  </h4>
                  <ul className="essay-detail__list">
                    {section.elements.map((el, i) => (
                      <li key={i} className="essay-detail__item">
                        <span className="essay-detail__bullet">{i + 1}</span>
                        <span>{t(el.ko, el.en)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="essay-detail__example">
                  <h4 className="essay-detail__subtitle">
                    <i className="fas fa-quote-left"></i>
                    {t('예시', 'Example')}
                  </h4>
                  <blockquote className="essay-detail__quote">
                    <p className="essay-detail__quote-en">{section.example.en}</p>
                    <p className="essay-detail__quote-ko">{section.example.ko}</p>
                  </blockquote>
                </div>
              </div>
            )
          ))}
        </section>

        {/* Transition Words */}
        <section id="transitions" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('🔗 연결어 (Transition Words)', '🔗 Transition Words')}
          </h2>
          <p className="content-section__desc">
            {t(
              '연결어를 사용하면 문장과 문단 사이의 흐름이 자연스러워집니다.',
              'Using transition words makes the flow between sentences and paragraphs smoother.'
            )}
          </p>
          <div className="transition-grid">
            {transitionWords.map((group, index) => (
              <div
                key={index}
                className="transition-card"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <h3 className="transition-card__title">
                  {t(group.category, group.categoryEn)}
                </h3>
                <div className="transition-card__words">
                  {group.words.map((word, i) => (
                    <span key={i} className="transition-tag">{word}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Essay */}
        <section id="sample" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('📄 샘플 에세이', '📄 Sample Essay')}
          </h2>
          <div className="sample-essay">
            <h3 className="sample-essay__title">
              {t('제2외국어 학습의 이점', 'The Benefits of Learning a Second Language')}
            </h3>
            <div className="sample-essay__body">
              <div className="sample-essay__section">
                <span className="label label--intro">{t('서론', 'Introduction')}</span>
                <p>{essayStructure[0].example.en}</p>
              </div>
              <div className="sample-essay__section">
                <span className="label label--body">{t('본론 1', 'Body 1')}</span>
                <p>{essayStructure[1].example.en}</p>
              </div>
              <div className="sample-essay__section">
                <span className="label label--body">{t('본론 2', 'Body 2')}</span>
                <p>In addition to professional advantages, learning a new language has remarkable cognitive benefits. Research from the University of Edinburgh found that bilingual individuals show improved memory, better multitasking abilities, and enhanced problem-solving skills. The mental exercise of switching between languages strengthens the brain, much like physical exercise strengthens muscles. Some studies even suggest that bilingualism may delay the onset of age-related cognitive decline by several years.</p>
              </div>
              <div className="sample-essay__section">
                <span className="label label--conclusion">{t('결론', 'Conclusion')}</span>
                <p>{essayStructure[2].example.en}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Prompts */}
        <section id="practice" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('✍️ 에세이 연습', '✍️ Essay Practice')}
          </h2>
          <div className="writing-prompts">
            <div className="writing-prompts__tabs">
              {writingPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className={`writing-prompts__tab ${selectedPrompt === index ? 'writing-prompts__tab--active' : ''}`}
                  onClick={() => setSelectedPrompt(index)}
                >
                  {t(prompt.titleKo, prompt.title)}
                </button>
              ))}
            </div>
            <div className="writing-prompts__content">
              <div className="writing-prompts__prompt">
                <h3>{t(writingPrompts[selectedPrompt].titleKo, writingPrompts[selectedPrompt].title)}</h3>
                <p>{t(writingPrompts[selectedPrompt].promptKo, writingPrompts[selectedPrompt].prompt)}</p>
              </div>
              <textarea
                className="writing-prompts__textarea"
                placeholder={t(
                  '여기에 에세이를 작성하세요...\n\n서론 (Introduction):\n- Hook\n- Background\n- Thesis statement\n\n본론 (Body):\n- Topic sentence + Evidence + Analysis\n\n결론 (Conclusion):\n- Restate thesis + Summary + Final thought',
                  'Write your essay here...\n\nIntroduction:\n- Hook\n- Background\n- Thesis statement\n\nBody:\n- Topic sentence + Evidence + Analysis\n\nConclusion:\n- Restate thesis + Summary + Final thought'
                )}
                rows={15}
                value={userEssay}
                onChange={(e) => setUserEssay(e.target.value)}
              />
              <div className="writing-prompts__footer">
                <span className="writing-prompts__count">
                  {userEssay.split(/\s+/).filter(Boolean).length} {t('단어', 'words')} / {userEssay.length} {t('자', 'characters')}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      </PageLayout>
    </>
  );
}

export default Essay;
