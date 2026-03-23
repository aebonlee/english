import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import PageLayout from '../../components/PageLayout';
import { readingQuestions } from '../../data/toeicData';

const partOverviews = [
  {
    part: 'Part 5',
    title: '단문 빈칸 채우기',
    titleEn: 'Incomplete Sentences',
    questions: '30문항',
    questionsEn: '30 questions',
    desc: '짧은 문장의 빈칸에 적절한 어휘나 문법 표현을 넣는 문제입니다.',
    descEn: 'Fill in the blank in a short sentence with the appropriate word or grammar form.',
    strategies: [
      { ko: '빈칸 앞뒤의 품사를 확인하세요 (명사, 형용사, 부사, 동사).', en: 'Check the part of speech before and after the blank (noun, adjective, adverb, verb).' },
      { ko: '주어-동사 수일치를 확인하세요.', en: 'Check subject-verb agreement.' },
      { ko: '시제 관련 키워드 (since, for, last, next)에 주의하세요.', en: 'Pay attention to tense keywords (since, for, last, next).' },
      { ko: '고정 표현(collocation)을 많이 외우세요.', en: 'Memorize many collocations (fixed expressions).' },
    ],
    grammarTips: [
      { ko: '명사 자리: 관사(a/the) 뒤, 소유격 뒤, 형용사 뒤', en: 'Noun position: after articles (a/the), possessives, adjectives' },
      { ko: '형용사 자리: 명사 앞, be동사 뒤', en: 'Adjective position: before nouns, after be verbs' },
      { ko: '부사 자리: 동사/형용사/부사 수식', en: 'Adverb position: modifies verbs, adjectives, other adverbs' },
      { ko: '동사 시제: 시간 표현과 맞추기', en: 'Verb tense: match with time expressions' },
    ],
  },
  {
    part: 'Part 6',
    title: '장문 빈칸 채우기',
    titleEn: 'Text Completion',
    questions: '16문항 (4세트 x 4문항)',
    questionsEn: '16 questions (4 sets x 4 questions)',
    desc: '이메일, 공지 등의 텍스트에서 빈칸에 적절한 단어나 문장을 넣는 문제입니다.',
    descEn: 'Fill in blanks in texts like emails and notices with appropriate words or sentences.',
    strategies: [
      { ko: '전체 글의 흐름을 먼저 파악하세요.', en: 'First understand the overall flow of the text.' },
      { ko: '빈칸 앞뒤 문장의 맥락을 확인하세요.', en: 'Check the context of sentences before and after the blank.' },
      { ko: '문장 삽입 문제는 접속사와 지시어를 단서로 활용하세요.', en: 'For sentence insertion, use conjunctions and referencing words as clues.' },
      { ko: '글의 형식(이메일, 공지, 기사)에 맞는 표현을 고르세요.', en: 'Choose expressions appropriate for the text format (email, notice, article).' },
    ],
  },
  {
    part: 'Part 7',
    title: '독해',
    titleEn: 'Reading Comprehension',
    questions: '54문항 (단일/이중/삼중 지문)',
    questionsEn: '54 questions (single/double/triple passages)',
    desc: '다양한 유형의 지문을 읽고 관련 질문에 답하는 문제입니다.',
    descEn: 'Read various types of passages and answer related questions.',
    strategies: [
      { ko: '질문을 먼저 읽고 필요한 정보를 지문에서 찾으세요.', en: 'Read questions first, then find the needed information in the passage.' },
      { ko: '지문의 유형(이메일, 광고, 기사, 양식)을 파악하세요.', en: 'Identify the passage type (email, ad, article, form).' },
      { ko: '주제문(topic sentence)은 보통 각 문단의 첫 문장입니다.', en: 'Topic sentences are usually the first sentence of each paragraph.' },
      { ko: 'NOT/TRUE 문제는 선택지를 하나씩 지문에서 확인하세요.', en: 'For NOT/TRUE questions, check each option against the passage one by one.' },
    ],
  },
];

const vocabularyTips = [
  { en: 'effect / affect', ko: 'effect(명사: 효과) / affect(동사: 영향을 미치다)' },
  { en: 'compliment / complement', ko: 'compliment(칭찬) / complement(보완)' },
  { en: 'personnel / personal', ko: 'personnel(직원, 인사부) / personal(개인의)' },
  { en: 'adopt / adapt', ko: 'adopt(채택하다) / adapt(적응하다)' },
  { en: 'eligible / illegible', ko: 'eligible(자격이 있는) / illegible(읽을 수 없는)' },
  { en: 'ensure / insure', ko: 'ensure(보장하다) / insure(보험에 가입하다)' },
];

function Reading() {
  const { t } = useLanguage();
  useAOS();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const practiceQuestions = readingQuestions.slice(0, 8);

  const handleSelectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleRevealAnswer = (questionId) => {
    setRevealedAnswers((prev) => ({ ...prev, [questionId]: true }));
  };

  const sections = [
    { id: 'parts', ko: 'Part 5-7', en: 'Parts 5-7' },
    { id: 'confused', ko: '혼동 어휘', en: 'Confused Words' },
    { id: 'practice', ko: '연습 문제', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('TOEIC 독해 - English Pro', 'TOEIC Reading - English Pro')}
        description={t(
          'TOEIC 독해 Part 5-7 전략과 연습 문제',
          'TOEIC Reading Part 5-7 strategies and practice questions'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/toeic">{t('TOEIC 대비', 'TOEIC Preparation')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('독해', 'Reading')}</span>
          </div>
          <h1 className="page-header__title">
            {t('TOEIC 독해 (Reading)', 'TOEIC Reading')}
          </h1>
          <p className="page-header__description">
            {t('Part 5-7 전략과 핵심 팁', 'Part 5-7 strategies and key tips')}
          </p>
        </div>
      </section>

      <SubNav category="toeic" />
      <PageLayout sections={sections}>
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
              {part.grammarTips && (
                <div className="part-card__grammar">
                  <h3 className="part-card__strategies-title">
                    {t('📌 문법/어휘 팁', '📌 Grammar/Vocabulary Tips')}
                  </h3>
                  <ul className="part-card__strategies-list">
                    {part.grammarTips.map((tip, i) => (
                      <li key={i}>{t(tip.ko, tip.en)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}
        </div>

        {/* Vocabulary Tips */}
        <section id="confused" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('📚 자주 혼동되는 어휘', '📚 Commonly Confused Words')}
          </h2>
          <div className="vocab-table">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('구분', 'Distinction')}</th>
                </tr>
              </thead>
              <tbody>
                {vocabularyTips.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.en}</strong></td>
                    <td>{item.ko}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    {q.type} - Part {q.part}
                  </span>
                  <span className="practice-item__number">Q{index + 1}</span>
                </div>

                {q.passage && (
                  <div className="practice-item__context">
                    <pre className="practice-item__passage">{q.passage}</pre>
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
      </PageLayout>
    </>
  );
}

export default Reading;
