import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import PageLayout from '../../components/PageLayout';

const paragraphParts = [
  {
    id: 'topic',
    title: '주제문 (Topic Sentence)',
    titleEn: 'Topic Sentence',
    icon: '🎯',
    desc: '문단의 핵심 아이디어를 한 문장으로 표현합니다. 보통 문단의 첫 번째 문장입니다.',
    descEn: 'Expresses the main idea of the paragraph in one sentence. Usually the first sentence.',
    tips: [
      { ko: '너무 넓거나 좁지 않은 적절한 범위의 주제를 선택하세요.', en: 'Choose a topic that is neither too broad nor too narrow.' },
      { ko: '명확한 주장이나 관점을 포함하세요.', en: 'Include a clear claim or perspective.' },
      { ko: '뒷받침 문장으로 설명할 수 있는 내용이어야 합니다.', en: 'It should be something you can support with additional sentences.' },
    ],
    example: {
      en: 'Regular exercise provides numerous health benefits.',
      ko: '규칙적인 운동은 수많은 건강상의 이점을 제공합니다.',
    },
  },
  {
    id: 'supporting',
    title: '뒷받침 문장 (Supporting Sentences)',
    titleEn: 'Supporting Sentences',
    icon: '📋',
    desc: '주제문의 아이디어를 구체적인 예시, 사실, 설명으로 뒷받침합니다.',
    descEn: 'Support the topic sentence with specific examples, facts, and explanations.',
    tips: [
      { ko: '구체적인 예시와 데이터를 사용하세요.', en: 'Use specific examples and data.' },
      { ko: '연결어를 활용하여 문장 간 흐름을 유지하세요.', en: 'Use transition words to maintain flow between sentences.' },
      { ko: '주제에서 벗어나지 않도록 주의하세요.', en: 'Be careful not to deviate from the topic.' },
    ],
    example: {
      en: 'First, it strengthens the cardiovascular system, reducing the risk of heart disease. Additionally, exercise helps maintain a healthy weight by burning calories. Furthermore, physical activity releases endorphins, which improve mood and reduce stress.',
      ko: '첫째, 심혈관 시스템을 강화하여 심장 질환의 위험을 줄여줍니다. 또한, 운동은 칼로리를 소모하여 건강한 체중을 유지하는 데 도움이 됩니다. 더불어, 신체 활동은 기분을 개선하고 스트레스를 줄이는 엔도르핀을 분비합니다.',
    },
  },
  {
    id: 'concluding',
    title: '결론 문장 (Concluding Sentence)',
    titleEn: 'Concluding Sentence',
    icon: '🏁',
    desc: '문단을 마무리하며 주제문을 다시 한번 강조하거나 요약합니다.',
    descEn: 'Wraps up the paragraph by restating or summarizing the topic sentence.',
    tips: [
      { ko: '주제문을 다른 말로 바꿔 표현하세요.', en: 'Restate the topic sentence in different words.' },
      { ko: '새로운 정보를 추가하지 마세요.', en: 'Do not add new information.' },
      { ko: '"In conclusion", "Therefore", "For these reasons" 등의 표현을 활용하세요.', en: 'Use expressions like "In conclusion," "Therefore," "For these reasons."' },
    ],
    example: {
      en: 'Therefore, incorporating regular exercise into daily life is one of the best decisions a person can make for their overall well-being.',
      ko: '따라서, 일상생활에 규칙적인 운동을 포함시키는 것은 전반적인 건강을 위해 할 수 있는 최선의 결정 중 하나입니다.',
    },
  },
];

const exampleParagraphs = [
  {
    title: '여행의 가치 (The Value of Travel)',
    topic: 'Traveling to different countries is one of the most enriching experiences a person can have.',
    supporting: 'First, it exposes individuals to diverse cultures, broadening their worldview and fostering empathy. For example, visiting Japan can teach visitors about the importance of respect and attention to detail. Second, travel challenges people to step outside their comfort zones, whether it is trying new foods, learning basic phrases in a foreign language, or navigating unfamiliar cities. Moreover, travel creates lasting memories and strengthens relationships when shared with family or friends.',
    concluding: 'In short, traveling is not just a leisure activity but a powerful tool for personal growth and cultural understanding.',
  },
  {
    title: '재택근무의 장점 (Benefits of Remote Work)',
    topic: 'Working from home has become increasingly popular and offers several significant advantages.',
    supporting: 'One of the main benefits is the elimination of commuting time, which allows employees to spend more time on productive work or personal activities. Additionally, remote workers often report higher job satisfaction because they can create a personalized workspace that suits their needs. Studies have also shown that remote workers tend to take fewer sick days, as they can manage minor illnesses without losing a full workday.',
    concluding: 'For these reasons, remote work is not merely a trend but a sustainable model that benefits both employees and employers.',
  },
];

const practicePrompts = [
  {
    prompt: 'The importance of learning a second language',
    promptKo: '제2외국어 학습의 중요성',
    hint: 'Think about career benefits, cultural understanding, and cognitive advantages.',
    hintKo: '직업적 이점, 문화 이해, 인지적 장점에 대해 생각해 보세요.',
  },
  {
    prompt: 'Benefits of reading books regularly',
    promptKo: '정기적인 독서의 이점',
    hint: 'Consider vocabulary improvement, stress reduction, and knowledge expansion.',
    hintKo: '어휘력 향상, 스트레스 감소, 지식 확장에 대해 생각해 보세요.',
  },
  {
    prompt: 'Why time management is important for students',
    promptKo: '학생들에게 시간 관리가 중요한 이유',
    hint: 'Think about academic performance, stress levels, and personal development.',
    hintKo: '학업 성적, 스트레스 수준, 개인 발전에 대해 생각해 보세요.',
  },
];

function Paragraph() {
  const { t } = useLanguage();
  useAOS();

  const [userWriting, setUserWriting] = useState({});
  const [expandedExample, setExpandedExample] = useState(null);

  const sections = [
    { id: 'structure', ko: '문단 구조', en: 'Structure' },
    { id: 'examples', ko: '예시 문단', en: 'Examples' },
    { id: 'practice', ko: '작문 연습', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('문단 작성 - English Pro', 'Paragraph Writing - English Pro')}
        description={t(
          '주제문, 뒷받침 문장, 결론 문장으로 문단 구성하기',
          'Compose paragraphs with topic, supporting, and concluding sentences'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/writing">{t('영어 작문', 'Writing')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('문단 작성', 'Paragraph')}</span>
          </div>
          <h1 className="page-header__title">
            {t('문단 작성 (Paragraph Writing)', 'Paragraph Writing')}
          </h1>
          <p className="page-header__description">
            {t(
              '좋은 문단을 구성하는 세 가지 요소를 학습하세요',
              'Learn the three elements that make a good paragraph'
            )}
          </p>
        </div>
      </section>

      <SubNav category="writing" />
      <PageLayout sections={sections}>
        <div className="content-page">

        {/* Paragraph Structure */}
        <section id="structure" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('문단의 구조', 'Paragraph Structure')}
          </h2>
          <div className="paragraph-structure">
            {paragraphParts.map((part, index) => (
              <div
                key={part.id}
                className="paragraph-part"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="paragraph-part__header">
                  <span className="paragraph-part__icon">{part.icon}</span>
                  <h3 className="paragraph-part__title">
                    {t(part.title, part.titleEn)}
                  </h3>
                </div>
                <p className="paragraph-part__desc">
                  {t(part.desc, part.descEn)}
                </p>
                <div className="paragraph-part__tips">
                  <h4>{t('작성 팁', 'Writing Tips')}</h4>
                  <ul>
                    {part.tips.map((tip, i) => (
                      <li key={i}>{t(tip.ko, tip.en)}</li>
                    ))}
                  </ul>
                </div>
                <div className="paragraph-part__example">
                  <h4>{t('예시', 'Example')}</h4>
                  <blockquote className="example-quote">
                    <p className="example-quote__en">{part.example.en}</p>
                    <p className="example-quote__ko">{part.example.ko}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Paragraphs */}
        <section id="examples" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('📚 예시 문단', '📚 Example Paragraphs')}
          </h2>
          <div className="example-paragraphs">
            {exampleParagraphs.map((para, index) => (
              <div key={index} className="example-paragraph" data-aos="fade-up" data-aos-delay={index * 100}>
                <button
                  className="example-paragraph__toggle"
                  onClick={() => setExpandedExample(expandedExample === index ? null : index)}
                >
                  <h3>{para.title}</h3>
                  <span>{expandedExample === index ? '−' : '+'}</span>
                </button>
                {expandedExample === index && (
                  <div className="example-paragraph__content">
                    <p>
                      <span className="label label--topic">{t('주제문', 'Topic')}</span>
                      {para.topic}
                    </p>
                    <p>
                      <span className="label label--supporting">{t('뒷받침 문장', 'Supporting')}</span>
                      {para.supporting}
                    </p>
                    <p>
                      <span className="label label--concluding">{t('결론 문장', 'Concluding')}</span>
                      {para.concluding}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Practice Prompts */}
        <section id="practice" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('✍️ 작문 연습', '✍️ Writing Practice')}
          </h2>
          <p className="content-section__desc">
            {t(
              '아래 주제 중 하나를 선택하여 주제문, 뒷받침 문장(2-3개), 결론 문장으로 구성된 문단을 작성해 보세요.',
              'Choose one of the topics below and write a paragraph with a topic sentence, 2-3 supporting sentences, and a concluding sentence.'
            )}
          </p>
          <div className="practice-prompts">
            {practicePrompts.map((item, index) => (
              <div key={index} className="practice-prompt" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="practice-prompt__header">
                  <h3 className="practice-prompt__title">
                    {t(item.promptKo, item.prompt)}
                  </h3>
                  <p className="practice-prompt__hint">
                    💡 {t(item.hintKo, item.hint)}
                  </p>
                </div>
                <textarea
                  className="practice-prompt__textarea"
                  placeholder={t(
                    '여기에 영어 문단을 작성하세요...',
                    'Write your English paragraph here...'
                  )}
                  rows={6}
                  value={userWriting[index] || ''}
                  onChange={(e) =>
                    setUserWriting((prev) => ({ ...prev, [index]: e.target.value }))
                  }
                />
                <div className="practice-prompt__footer">
                  <span className="practice-prompt__count">
                    {(userWriting[index] || '').length} {t('자', 'characters')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </PageLayout>
    </>
  );
}

export default Paragraph;
