import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import { mockTestQuestions } from '../../data/toeicData';

const TOTAL_TIME_SECONDS = 30 * 60; // 30 minutes for mini mock test

function MockTest(): React.ReactElement {
  const { t } = useLanguage();
  useAOS();

  const [testState, setTestState] = useState<'intro' | 'running' | 'finished'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME_SECONDS);
  const [showReview, setShowReview] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalQuestions = mockTestQuestions.length;
  const currentQuestion = mockTestQuestions[currentIndex];

  // Timer
  useEffect(() => {
    if (testState !== 'running') return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setTestState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testState]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleStartTest = () => {
    setTestState('running');
    setCurrentIndex(0);
    setSelectedAnswers({});
    setTimeRemaining(TOTAL_TIME_SECONDS);
    setShowReview(false);
  };

  const handleSelectAnswer = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinishTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTestState('finished');
  };

  const handleRetakeTest = () => {
    setTestState('intro');
    setCurrentIndex(0);
    setSelectedAnswers({});
    setTimeRemaining(TOTAL_TIME_SECONDS);
    setShowReview(false);
  };

  // Calculate score
  const calculateScore = useCallback(() => {
    let correct = 0;
    mockTestQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    return correct;
  }, [selectedAnswers]);

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = calculateScore();
  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const estimatedToeicScore = Math.round((correctCount / totalQuestions) * 990);

  // Intro Screen
  if (testState === 'intro') {
    return (
      <>
        <SEOHead
          title={t('TOEIC 모의 테스트 - English Pro', 'TOEIC Mock Test - English Pro')}
          description={t(
            'TOEIC 모의 테스트로 실전 감각을 키우세요',
            'Build test-taking skills with TOEIC mock tests'
          )}
        />
        <section className="page-header" data-aos="fade-up">
          <div className="container">
            <div className="page-header__breadcrumb">
              <Link to="/">{t('홈', 'Home')}</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/toeic">{t('TOEIC 대비', 'TOEIC Preparation')}</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{t('모의 테스트', 'Mock Test')}</span>
            </div>
            <h1 className="page-header__title">
              {t('TOEIC 모의 테스트', 'TOEIC Mock Test')}
            </h1>
            <p className="page-header__description">
              {t(
                '실전처럼 시간을 재며 문제를 풀어보세요',
                'Practice solving questions under timed conditions'
              )}
            </p>
          </div>
        </section>

        <SubNav category="toeic" />

        <div className="content-page">

          <section className="content-section">
            <div className="mock-intro">
              <div className="mock-intro__info">
                <h2>{t('시험 정보', 'Test Information')}</h2>
                <ul className="mock-intro__details">
                  <li>
                    <strong>{t('문항 수', 'Questions')}:</strong> {totalQuestions}{t('문항', ' questions')}
                  </li>
                  <li>
                    <strong>{t('제한 시간', 'Time Limit')}:</strong> {formatTime(TOTAL_TIME_SECONDS)}
                  </li>
                  <li>
                    <strong>{t('구성', 'Sections')}:</strong> {t('Listening + Reading', 'Listening + Reading')}
                  </li>
                  <li>
                    <strong>{t('형식', 'Format')}:</strong> {t('객관식', 'Multiple Choice')}
                  </li>
                </ul>
              </div>
              <div className="mock-intro__rules">
                <h3>{t('안내 사항', 'Instructions')}</h3>
                <ul>
                  <li>{t('시작 버튼을 누르면 타이머가 시작됩니다.', 'The timer starts when you click the start button.')}</li>
                  <li>{t('문제 간 자유롭게 이동할 수 있습니다.', 'You can navigate freely between questions.')}</li>
                  <li>{t('시간이 끝나면 자동으로 채점됩니다.', 'When time runs out, the test is automatically scored.')}</li>
                  <li>{t('제출 후 정답과 해설을 확인할 수 있습니다.', 'After submission, you can review answers and explanations.')}</li>
                </ul>
              </div>
              <button className="btn btn--primary btn--lg" onClick={handleStartTest}>
                {t('시험 시작하기', 'Start Test')}
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Finished Screen
  if (testState === 'finished') {
    return (
      <>
        <SEOHead
          title={t('모의 테스트 결과 - English Pro', 'Mock Test Results - English Pro')}
          description={t('TOEIC 모의 테스트 결과를 확인하세요', 'View your TOEIC mock test results')}
        />
        <section className="page-header" data-aos="fade-up">
          <div className="container">
            <div className="page-header__breadcrumb">
              <Link to="/">{t('홈', 'Home')}</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/toeic">{t('TOEIC 대비', 'TOEIC Preparation')}</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{t('테스트 결과', 'Test Results')}</span>
            </div>
            <h1 className="page-header__title">
              {t('테스트 결과', 'Test Results')}
            </h1>
          </div>
        </section>

        <SubNav category="toeic" />

        <div className="content-page">

          <section className="content-section">
            <div className="mock-result">
              <div className="mock-result__score-card">
                <div className="mock-result__circle">
                  <span className="mock-result__percentage">{scorePercentage}%</span>
                </div>
                <div className="mock-result__details">
                  <p className="mock-result__stat">
                    <strong>{t('정답', 'Correct')}:</strong> {correctCount} / {totalQuestions}
                  </p>
                  <p className="mock-result__stat">
                    <strong>{t('예상 TOEIC 점수', 'Estimated TOEIC Score')}:</strong> {estimatedToeicScore} / 990
                  </p>
                  <p className="mock-result__stat">
                    <strong>{t('소요 시간', 'Time Spent')}:</strong> {formatTime(TOTAL_TIME_SECONDS - timeRemaining)}
                  </p>
                  <p className="mock-result__stat">
                    <strong>{t('미응답', 'Unanswered')}:</strong> {totalQuestions - answeredCount}{t('문항', ' questions')}
                  </p>
                </div>
              </div>

              <div className="mock-result__actions">
                <button
                  className="btn btn--primary"
                  onClick={() => setShowReview(!showReview)}
                >
                  {showReview
                    ? t('해설 숨기기', 'Hide Review')
                    : t('정답 및 해설 보기', 'Review Answers')}
                </button>
                <button className="btn btn--outline" onClick={handleRetakeTest}>
                  {t('다시 풀기', 'Retake Test')}
                </button>
                <Link to="/toeic" className="btn btn--outline">
                  {t('TOEIC 홈으로', 'Back to TOEIC')}
                </Link>
              </div>

              {showReview && (
                <div className="mock-review">
                  <h2 className="mock-review__title">
                    {t('📝 문제 해설', '📝 Answer Review')}
                  </h2>
                  {mockTestQuestions.map((q, index) => {
                    const userAnswer = selectedAnswers[q.id];
                    const isCorrect = userAnswer === q.answer;
                    const isUnanswered = userAnswer === undefined;

                    return (
                      <div key={q.id} className={`mock-review__item ${isCorrect ? 'mock-review__item--correct' : 'mock-review__item--wrong'}`}>
                        <div className="mock-review__header">
                          <span className="mock-review__number">Q{index + 1}</span>
                          <span className={`mock-review__badge ${isCorrect ? 'mock-review__badge--correct' : 'mock-review__badge--wrong'}`}>
                            {isUnanswered
                              ? t('미응답', 'Unanswered')
                              : isCorrect
                                ? t('정답', 'Correct')
                                : t('오답', 'Wrong')}
                          </span>
                          <span className="mock-review__part">
                            {q.section === 'listening' ? 'Listening' : 'Reading'} - Part {q.part}
                          </span>
                        </div>

                        {q.context && (
                          <div className="practice-item__context">
                            <pre className="practice-item__passage">{q.context}</pre>
                          </div>
                        )}

                        {q.passage && (
                          <div className="practice-item__context">
                            <pre className="practice-item__passage">{q.passage}</pre>
                          </div>
                        )}

                        <p className="practice-item__question">{q.question}</p>

                        <div className="practice-item__options">
                          {q.options.map((option, i) => {
                            let optionClass = 'practice-option practice-option--review';
                            if (i === q.answer) optionClass += ' practice-option--correct';
                            if (userAnswer === i && i !== q.answer) optionClass += ' practice-option--wrong';

                            return (
                              <div key={i} className={optionClass}>
                                {option}
                                {i === q.answer && <span className="practice-option__label"> ← {t('정답', 'Answer')}</span>}
                                {userAnswer === i && i !== q.answer && <span className="practice-option__label"> ← {t('선택', 'Your choice')}</span>}
                              </div>
                            );
                          })}
                        </div>

                        <div className="practice-item__explanation">
                          <p className="practice-item__explanation-text">
                            <strong>{t('해설', 'Explanation')}:</strong> {q.explanation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </>
    );
  }

  // Running State - Test In Progress
  return (
    <>
      <SEOHead
        title={t('모의 테스트 진행 중 - English Pro', 'Mock Test In Progress - English Pro')}
        description={t('TOEIC 모의 테스트', 'TOEIC Mock Test')}
      />
      <div className="content-page">
        {/* Timer Bar */}
        <div className="mock-timer">
          <div className="mock-timer__info">
            <span className="mock-timer__label">
              {t('남은 시간', 'Time Remaining')}
            </span>
            <span className={`mock-timer__time ${timeRemaining < 300 ? 'mock-timer__time--warning' : ''}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
          <div className="mock-timer__progress">
            <div
              className="mock-timer__bar"
              style={{ width: `${(timeRemaining / TOTAL_TIME_SECONDS) * 100}%` }}
            />
          </div>
          <div className="mock-timer__count">
            {t(`${answeredCount}/${totalQuestions} 응답`, `${answeredCount}/${totalQuestions} answered`)}
          </div>
        </div>

        {/* Question */}
        <section className="content-section">
          <div className="mock-question">
            <div className="mock-question__header">
              <span className="mock-question__number">
                {t(`문제 ${currentIndex + 1} / ${totalQuestions}`, `Question ${currentIndex + 1} / ${totalQuestions}`)}
              </span>
              <span className="mock-question__section">
                {currentQuestion.section === 'listening' ? '🎧 Listening' : '📖 Reading'} - Part {currentQuestion.part}
              </span>
            </div>

            {currentQuestion.imageDesc && (
              <div className="practice-item__context practice-item__context--image">
                <p><em>📷 {currentQuestion.imageDesc}</em></p>
              </div>
            )}

            {currentQuestion.context && (
              <div className="practice-item__context">
                <pre className="practice-item__passage">{currentQuestion.context}</pre>
              </div>
            )}

            {currentQuestion.passage && (
              <div className="practice-item__context">
                <pre className="practice-item__passage">{currentQuestion.passage}</pre>
              </div>
            )}

            <p className="mock-question__text">{currentQuestion.question}</p>

            <div className="practice-item__options">
              {currentQuestion.options.map((option, i) => {
                const isSelected = selectedAnswers[currentQuestion.id] === i;
                let optionClass = 'practice-option';
                if (isSelected) optionClass += ' practice-option--selected';

                return (
                  <button
                    key={i}
                    className={optionClass}
                    onClick={() => handleSelectAnswer(currentQuestion.id, i)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mock-question__nav">
              <button
                className="btn btn--outline"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                ← {t('이전', 'Previous')}
              </button>

              <div className="mock-question__indicators">
                {mockTestQuestions.map((q, i) => (
                  <button
                    key={q.id}
                    className={`mock-indicator ${i === currentIndex ? 'mock-indicator--active' : ''} ${selectedAnswers[q.id] !== undefined ? 'mock-indicator--answered' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                    title={`Q${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {currentIndex < totalQuestions - 1 ? (
                <button className="btn btn--primary" onClick={handleNext}>
                  {t('다음', 'Next')} →
                </button>
              ) : (
                <button className="btn btn--primary" onClick={handleFinishTest}>
                  {t('제출하기', 'Submit')}
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MockTest;
