import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import SectionNav from '../../components/SectionNav';
import { listeningQuestions } from '../../data/toeicData';

const partOverviews = [
  {
    part: 'Part 1',
    title: '사진 묘사',
    titleEn: 'Photographs',
    questions: '6문항',
    questionsEn: '6 questions',
    desc: '사진을 보고 4개의 설명 중 가장 적절한 것을 고르는 문제입니다.',
    descEn: 'Look at a photograph and choose the most accurate description from 4 options.',
    strategies: [
      { ko: '사진을 먼저 빠르게 분석하세요 (사람, 사물, 장소, 행동).', en: 'Quickly analyze the photo first (people, objects, location, actions).' },
      { ko: '현재 진행형(~ing) 표현에 주의하세요.', en: 'Pay attention to present progressive (~ing) expressions.' },
      { ko: '사진에 없는 내용을 언급하는 보기는 소거하세요.', en: 'Eliminate options that mention things not in the photo.' },
      { ko: '비슷한 발음의 함정 단어에 주의하세요.', en: 'Watch out for trap words with similar pronunciation.' },
    ],
  },
  {
    part: 'Part 2',
    title: '질의응답',
    titleEn: 'Question-Response',
    questions: '25문항',
    questionsEn: '25 questions',
    desc: '질문을 듣고 가장 적절한 응답을 3개 보기에서 고르는 문제입니다.',
    descEn: 'Listen to a question and choose the most appropriate response from 3 options.',
    strategies: [
      { ko: '질문의 첫 단어(Who, What, When, Where, How)에 집중하세요.', en: 'Focus on the first word of the question (Who, What, When, Where, How).' },
      { ko: 'Yes/No 질문과 Wh- 질문을 구분하세요.', en: 'Distinguish between Yes/No questions and Wh- questions.' },
      { ko: '질문의 핵심 키워드와 연결되는 응답을 찾으세요.', en: 'Find the response that connects to the key words of the question.' },
      { ko: '간접적인 응답도 정답이 될 수 있음을 기억하세요.', en: 'Remember that indirect responses can also be correct answers.' },
    ],
  },
  {
    part: 'Part 3',
    title: '짧은 대화',
    titleEn: 'Short Conversations',
    questions: '39문항 (13세트 x 3문항)',
    questionsEn: '39 questions (13 sets x 3 questions)',
    desc: '두 사람 또는 세 사람의 대화를 듣고 관련 질문에 답하는 문제입니다.',
    descEn: 'Listen to conversations between 2-3 people and answer related questions.',
    strategies: [
      { ko: '대화가 시작되기 전에 질문과 보기를 미리 읽으세요.', en: 'Read the questions and options before the conversation starts.' },
      { ko: '대화의 장소, 화자의 관계, 주제를 파악하세요.', en: 'Identify the location, speakers\' relationship, and topic.' },
      { ko: '각 화자의 의도와 제안에 집중하세요.', en: 'Focus on each speaker\'s intent and suggestions.' },
      { ko: '키워드 변환(paraphrasing)에 주의하세요.', en: 'Watch out for keyword paraphrasing.' },
    ],
  },
  {
    part: 'Part 4',
    title: '설명문',
    titleEn: 'Short Talks',
    questions: '30문항 (10세트 x 3문항)',
    questionsEn: '30 questions (10 sets x 3 questions)',
    desc: '한 사람의 발표, 안내, 광고 등을 듣고 관련 질문에 답하는 문제입니다.',
    descEn: 'Listen to talks such as announcements, ads, and speeches, then answer related questions.',
    strategies: [
      { ko: '화자의 목적(안내, 광고, 뉴스 등)을 빠르게 파악하세요.', en: 'Quickly identify the speaker\'s purpose (announcement, ad, news, etc.).' },
      { ko: '숫자, 시간, 장소 등 구체적 정보를 메모하세요.', en: 'Note down specific info like numbers, times, and locations.' },
      { ko: '질문 유형(주제, 세부사항, 추론)을 구분하세요.', en: 'Distinguish question types (topic, details, inference).' },
      { ko: '마지막 부분에서 핵심 정보가 나오는 경우가 많습니다.', en: 'Key information often comes at the end of the talk.' },
    ],
  },
];

function Listening() {
  const { t } = useLanguage();
  useAOS();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const practiceQuestions = listeningQuestions.slice(0, 8);

  const handleSelectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleRevealAnswer = (questionId) => {
    setRevealedAnswers((prev) => ({ ...prev, [questionId]: true }));
  };

  const sections = [
    { id: 'parts', ko: 'Part 1-4', en: 'Parts 1-4' },
    { id: 'tips', ko: '핵심 팁', en: 'Key Tips' },
    { id: 'practice', ko: '연습 문제', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('TOEIC 듣기 - English Pro', 'TOEIC Listening - English Pro')}
        description={t(
          'TOEIC 듣기 Part 1-4 전략과 연습 문제',
          'TOEIC Listening Part 1-4 strategies and practice questions'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/toeic">{t('TOEIC 대비', 'TOEIC Preparation')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('듣기', 'Listening')}</span>
          </div>
          <h1 className="page-header__title">
            {t('TOEIC 듣기 (Listening)', 'TOEIC Listening')}
          </h1>
          <p className="page-header__description">
            {t('Part 1-4 전략과 핵심 팁', 'Part 1-4 strategies and key tips')}
          </p>
        </div>
      </section>

      <SubNav category="toeic" />
      <SectionNav sections={sections} />

      <div className="content-page">

        {/* Part Overviews */}
        <div id="parts">
        {partOverviews.map((part, index) => (
          <section
            key={part.part}
            className="content-section"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="part-card">
              <div className="part-card__header">
                <h2 className="part-card__title">
                  {part.part}: {t(part.title, part.titleEn)}
                </h2>
                <span className="part-card__badge">
                  {t(part.questions, part.questionsEn)}
                </span>
              </div>
              <p className="part-card__desc">{t(part.desc, part.descEn)}</p>
              <div className="part-card__strategies">
                <h3 className="part-card__strategies-title">
                  {t('💡 전략', '💡 Strategies')}
                </h3>
                <ul className="part-card__strategies-list">
                  {part.strategies.map((strategy, i) => (
                    <li key={i}>{t(strategy.ko, strategy.en)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
        </div>

        {/* Key Listening Tips */}
        <section id="tips" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('🎯 핵심 듣기 팁', '🎯 Key Listening Tips')}
          </h2>
          <div className="tips-grid">
            <div className="tip-item">
              <h3>{t('선택지 미리 읽기', 'Pre-read Options')}</h3>
              <p>{t(
                '음원이 나오기 전에 질문과 선택지를 먼저 읽어 핵심 키워드를 파악하세요.',
                'Read questions and options before the audio plays to identify key words.'
              )}</p>
            </div>
            <div className="tip-item">
              <h3>{t('Paraphrasing 주의', 'Watch for Paraphrasing')}</h3>
              <p>{t(
                '정답은 음원의 표현을 다르게 바꿔서 나옵니다. 동의어와 유사 표현을 익히세요.',
                'Correct answers often rephrase what was said. Learn synonyms and similar expressions.'
              )}</p>
            </div>
            <div className="tip-item">
              <h3>{t('소거법 활용', 'Use Elimination')}</h3>
              <p>{t(
                '확실히 틀린 보기를 먼저 제거하고, 남은 보기 중에서 선택하세요.',
                'First eliminate clearly wrong options, then choose from the remaining ones.'
              )}</p>
            </div>
            <div className="tip-item">
              <h3>{t('끝까지 듣기', 'Listen Completely')}</h3>
              <p>{t(
                '음원이 끝나기 전에 답을 고르지 마세요. 마지막 부분에 중요한 정보가 나올 수 있습니다.',
                'Do not choose an answer before the audio ends. Important info may come at the end.'
              )}</p>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section id="practice" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('📝 연습 문제', '📝 Practice Exercises')}
          </h2>
          <div className="practice-list">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="practice-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="practice-item__header">
                  <span className="practice-item__badge">
                    {q.type} - {q.part === 1 || q.part === 2 ? `Part ${q.part}` : `Part ${q.part}`}
                  </span>
                  <span className="practice-item__number">Q{index + 1}</span>
                </div>

                {q.imageDesc && (
                  <div className="practice-item__context practice-item__context--image">
                    <p><em>📷 {t('사진 설명', 'Photo Description')}: {q.imageDesc}</em></p>
                  </div>
                )}

                {q.context && (
                  <div className="practice-item__context">
                    <pre className="practice-item__passage">{q.context}</pre>
                  </div>
                )}

                <p className="practice-item__question">{q.question}</p>

                <div className="practice-item__options">
                  {q.options.map((option, i) => {
                    const isSelected = selectedAnswers[q.id] === i;
                    const isRevealed = revealedAnswers[q.id];
                    const isCorrect = i === q.answer;
                    let optionClass = 'practice-option';
                    if (isSelected) optionClass += ' practice-option--selected';
                    if (isRevealed && isCorrect) optionClass += ' practice-option--correct';
                    if (isRevealed && isSelected && !isCorrect) optionClass += ' practice-option--wrong';

                    return (
                      <button
                        key={i}
                        className={optionClass}
                        onClick={() => handleSelectAnswer(q.id, i)}
                        disabled={isRevealed}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswers[q.id] !== undefined && !revealedAnswers[q.id] && (
                  <button
                    className="btn btn--primary btn--sm"
                    onClick={() => handleRevealAnswer(q.id)}
                  >
                    {t('정답 확인', 'Check Answer')}
                  </button>
                )}

                {revealedAnswers[q.id] && (
                  <div className="practice-item__explanation">
                    <p className="practice-item__result">
                      {selectedAnswers[q.id] === q.answer
                        ? t('✅ 정답입니다!', '✅ Correct!')
                        : t('❌ 틀렸습니다.', '❌ Incorrect.')}
                    </p>
                    <p className="practice-item__explanation-text">
                      <strong>{t('해설', 'Explanation')}:</strong> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Listening;
