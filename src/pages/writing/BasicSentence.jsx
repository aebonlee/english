import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import PageLayout from '../../components/PageLayout';

const sentenceStructures = [
  {
    id: 'sv',
    pattern: 'S + V',
    name: '1형식 (주어 + 동사)',
    nameEn: 'Pattern 1 (Subject + Verb)',
    desc: '주어가 동사의 동작을 수행합니다. 보어나 목적어 없이 문장이 완성됩니다.',
    descEn: 'The subject performs the action of the verb. The sentence is complete without a complement or object.',
    examples: [
      { en: 'The sun rises.', ko: '해가 뜬다.' },
      { en: 'She smiled.', ko: '그녀가 미소지었다.' },
      { en: 'The baby cried loudly.', ko: '아기가 크게 울었다.' },
      { en: 'Birds fly in the sky.', ko: '새들이 하늘을 난다.' },
      { en: 'Time passes quickly.', ko: '시간이 빠르게 지나간다.' },
    ],
  },
  {
    id: 'svc',
    pattern: 'S + V + C',
    name: '2형식 (주어 + 동사 + 보어)',
    nameEn: 'Pattern 2 (Subject + Verb + Complement)',
    desc: '주어의 상태나 성질을 보어가 설명합니다. be동사, become, seem, look 등이 사용됩니다.',
    descEn: 'The complement describes the state or quality of the subject. Uses be, become, seem, look, etc.',
    examples: [
      { en: 'She is a teacher.', ko: '그녀는 선생님이다.' },
      { en: 'The food tastes delicious.', ko: '음식이 맛있다.' },
      { en: 'He became a doctor.', ko: '그는 의사가 되었다.' },
      { en: 'The weather looks nice today.', ko: '오늘 날씨가 좋아 보인다.' },
      { en: 'This seems impossible.', ko: '이것은 불가능해 보인다.' },
    ],
  },
  {
    id: 'svo',
    pattern: 'S + V + O',
    name: '3형식 (주어 + 동사 + 목적어)',
    nameEn: 'Pattern 3 (Subject + Verb + Object)',
    desc: '주어가 목적어에 대해 동작을 수행합니다. 가장 많이 사용되는 문형입니다.',
    descEn: 'The subject performs an action on the object. This is the most commonly used sentence pattern.',
    examples: [
      { en: 'I read a book.', ko: '나는 책을 읽는다.' },
      { en: 'She plays the piano.', ko: '그녀는 피아노를 친다.' },
      { en: 'We finished the project.', ko: '우리는 프로젝트를 끝냈다.' },
      { en: 'He studies English every day.', ko: '그는 매일 영어를 공부한다.' },
      { en: 'They built a new office.', ko: '그들은 새 사무실을 지었다.' },
    ],
  },
  {
    id: 'svoo',
    pattern: 'S + V + O + O',
    name: '4형식 (주어 + 동사 + 간접목적어 + 직접목적어)',
    nameEn: 'Pattern 4 (Subject + Verb + Indirect Object + Direct Object)',
    desc: '동사가 두 개의 목적어를 가집니다. "~에게 ~을 주다/보내다" 등의 의미입니다.',
    descEn: 'The verb takes two objects. Means "give/send something to someone," etc.',
    examples: [
      { en: 'She gave me a gift.', ko: '그녀가 나에게 선물을 주었다.' },
      { en: 'I sent him an email.', ko: '나는 그에게 이메일을 보냈다.' },
      { en: 'The teacher taught us English.', ko: '선생님이 우리에게 영어를 가르쳤다.' },
      { en: 'He told me the truth.', ko: '그가 나에게 진실을 말했다.' },
      { en: 'She showed them the report.', ko: '그녀가 그들에게 보고서를 보여주었다.' },
    ],
  },
  {
    id: 'svoc',
    pattern: 'S + V + O + C',
    name: '5형식 (주어 + 동사 + 목적어 + 목적보어)',
    nameEn: 'Pattern 5 (Subject + Verb + Object + Object Complement)',
    desc: '목적어의 상태나 행위를 목적보어가 설명합니다. make, call, find, keep 등이 사용됩니다.',
    descEn: 'The object complement describes the state or action of the object. Uses make, call, find, keep, etc.',
    examples: [
      { en: 'They made her captain.', ko: '그들은 그녀를 주장으로 만들었다.' },
      { en: 'We call him Tom.', ko: '우리는 그를 톰이라 부른다.' },
      { en: 'I found the book interesting.', ko: '나는 그 책이 흥미롭다고 생각했다.' },
      { en: 'She kept the room clean.', ko: '그녀는 방을 깨끗하게 유지했다.' },
      { en: 'The news made everyone happy.', ko: '그 소식이 모두를 행복하게 했다.' },
    ],
  },
];

const exercises = [
  {
    id: 'ex1',
    instruction: '다음 문장의 문형을 고르세요.',
    instructionEn: 'Choose the sentence pattern.',
    sentence: 'She bought him a new watch.',
    options: ['S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'],
    answer: 3,
    explanation: '"She(S) bought(V) him(IO) a new watch(DO)" - 간접목적어(him)와 직접목적어(a new watch)가 있으므로 4형식입니다.',
    explanationEn: '"She(S) bought(V) him(IO) a new watch(DO)" - Has an indirect object (him) and direct object (a new watch), so it\'s Pattern 4.',
  },
  {
    id: 'ex2',
    instruction: '다음 문장의 문형을 고르세요.',
    instructionEn: 'Choose the sentence pattern.',
    sentence: 'The movie was exciting.',
    options: ['S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'],
    answer: 1,
    explanation: '"The movie(S) was(V) exciting(C)" - 보어(exciting)가 주어(movie)의 상태를 설명하므로 2형식입니다.',
    explanationEn: '"The movie(S) was(V) exciting(C)" - The complement (exciting) describes the subject (movie), so it\'s Pattern 2.',
  },
  {
    id: 'ex3',
    instruction: '다음 문장의 문형을 고르세요.',
    instructionEn: 'Choose the sentence pattern.',
    sentence: 'The children are sleeping.',
    options: ['S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'],
    answer: 0,
    explanation: '"The children(S) are sleeping(V)" - 주어와 동사만으로 문장이 완성되므로 1형식입니다.',
    explanationEn: '"The children(S) are sleeping(V)" - Complete with just subject and verb, so it\'s Pattern 1.',
  },
  {
    id: 'ex4',
    instruction: '다음 문장의 문형을 고르세요.',
    instructionEn: 'Choose the sentence pattern.',
    sentence: 'The manager considers the plan effective.',
    options: ['S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'],
    answer: 4,
    explanation: '"The manager(S) considers(V) the plan(O) effective(OC)" - 목적보어(effective)가 목적어(the plan)를 설명하므로 5형식입니다.',
    explanationEn: '"The manager(S) considers(V) the plan(O) effective(OC)" - Object complement (effective) describes the object (the plan), so it\'s Pattern 5.',
  },
  {
    id: 'ex5',
    instruction: '다음 문장의 문형을 고르세요.',
    instructionEn: 'Choose the sentence pattern.',
    sentence: 'We enjoyed the concert very much.',
    options: ['S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'],
    answer: 2,
    explanation: '"We(S) enjoyed(V) the concert(O)" - "very much"는 부사이므로 3형식입니다.',
    explanationEn: '"We(S) enjoyed(V) the concert(O)" - "very much" is an adverb, so it\'s Pattern 3.',
  },
];

function BasicSentence() {
  const { t } = useLanguage();
  useAOS();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const handleSelectAnswer = (exerciseId, answerIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [exerciseId]: answerIndex }));
  };

  const handleRevealAnswer = (exerciseId) => {
    setRevealedAnswers((prev) => ({ ...prev, [exerciseId]: true }));
  };

  const sections = [
    { id: 'sv', ko: '1형식 S+V', en: 'S+V' },
    { id: 'svc', ko: '2형식 S+V+C', en: 'S+V+C' },
    { id: 'svo', ko: '3형식 S+V+O', en: 'S+V+O' },
    { id: 'svoo', ko: '4형식 S+V+O+O', en: 'S+V+O+O' },
    { id: 'svoc', ko: '5형식 S+V+O+C', en: 'S+V+O+C' },
    { id: 'practice', ko: '연습 문제', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('기초 문장 - English Pro', 'Basic Sentence - English Pro')}
        description={t(
          '영어 5가지 기본 문형을 학습하세요',
          'Learn the 5 basic English sentence patterns'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/writing">{t('영어 작문', 'Writing')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('기초 문장', 'Basic Sentence')}</span>
          </div>
          <h1 className="page-header__title">
            {t('기초 문장 구조', 'Basic Sentence Structures')}
          </h1>
          <p className="page-header__description">
            {t(
              '영어의 5가지 기본 문형을 이해하고 활용하세요',
              'Understand and use the 5 basic English sentence patterns'
            )}
          </p>
        </div>
      </section>

      <SubNav category="writing" />
      <PageLayout sections={sections}>
        <div className="content-page">

        {/* Sentence Structures */}
        {sentenceStructures.map((structure, index) => (
          <section
            id={structure.id}
            key={structure.id}
            className="content-section"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="structure-card">
              <div className="structure-card__header">
                <span className="structure-card__pattern">{structure.pattern}</span>
                <h2 className="structure-card__title">
                  {t(structure.name, structure.nameEn)}
                </h2>
              </div>
              <p className="structure-card__desc">
                {t(structure.desc, structure.descEn)}
              </p>
              <div className="structure-card__examples">
                <h3>{t('예문', 'Examples')}</h3>
                <ul className="example-list">
                  {structure.examples.map((example, i) => (
                    <li key={i} className="example-list__item">
                      <span className="example-list__en">{example.en}</span>
                      <span className="example-list__ko">{example.ko}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* Practice Exercises */}
        <section id="practice" className="content-section" data-aos="fade-up">
          <h2 className="content-section__title">
            {t('📝 연습 문제', '📝 Practice Exercises')}
          </h2>
          <div className="practice-list">
            {exercises.map((ex, index) => (
              <div key={ex.id} className="practice-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <p className="practice-item__instruction">
                  {t(ex.instruction, ex.instructionEn)}
                </p>
                <p className="practice-item__question">
                  <strong>&quot;{ex.sentence}&quot;</strong>
                </p>
                <div className="practice-item__options">
                  {ex.options.map((option, i) => {
                    const isSelected = selectedAnswers[ex.id] === i;
                    const isRevealed = revealedAnswers[ex.id];
                    const isCorrect = i === ex.answer;
                    let optionClass = 'practice-option';
                    if (isSelected) optionClass += ' practice-option--selected';
                    if (isRevealed && isCorrect) optionClass += ' practice-option--correct';
                    if (isRevealed && isSelected && !isCorrect) optionClass += ' practice-option--wrong';

                    return (
                      <button
                        key={i}
                        className={optionClass}
                        onClick={() => handleSelectAnswer(ex.id, i)}
                        disabled={isRevealed}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswers[ex.id] !== undefined && !revealedAnswers[ex.id] && (
                  <button
                    className="btn btn--primary btn--sm"
                    onClick={() => handleRevealAnswer(ex.id)}
                  >
                    {t('정답 확인', 'Check Answer')}
                  </button>
                )}

                {revealedAnswers[ex.id] && (
                  <div className="practice-item__explanation">
                    <p className="practice-item__result">
                      {selectedAnswers[ex.id] === ex.answer
                        ? t('✅ 정답입니다!', '✅ Correct!')
                        : t('❌ 틀렸습니다.', '❌ Incorrect.')}
                    </p>
                    <p className="practice-item__explanation-text">
                      <strong>{t('해설', 'Explanation')}:</strong> {t(ex.explanation, ex.explanationEn)}
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

export default BasicSentence;
