import { useState, useRef, useCallback, useEffect } from 'react';
import { speechExamples } from '../../data/conversations';
import { useLanguage } from '../../contexts/LanguageContext';

const SpeechRecognitionAPI =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

function SpeechPractice() {
  const { t } = useLanguage();

  const [selectedLevel, setSelectedLevel] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [wordComparison, setWordComparison] = useState([]);
  const [isSupported, setIsSupported] = useState(true);

  const recognitionRef = useRef(null);

  // Check browser support
  useEffect(() => {
    if (!SpeechRecognitionAPI) {
      setIsSupported(false);
    }
  }, []);

  // Filter examples by level
  const filteredExamples =
    selectedLevel === 'all'
      ? speechExamples
      : speechExamples.filter((ex) => ex.level === selectedLevel);

  const currentExample = filteredExamples[currentIndex] || filteredExamples[0];

  // Reset state when example changes
  useEffect(() => {
    setRecognizedText('');
    setAccuracy(null);
    setWordComparison([]);
  }, [currentIndex, selectedLevel]);

  // Ensure index is within bounds when filter changes
  useEffect(() => {
    if (currentIndex >= filteredExamples.length) {
      setCurrentIndex(0);
    }
  }, [filteredExamples.length, currentIndex]);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s']/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const compareTexts = useCallback((recognized, target) => {
    const normalizedRecognized = normalizeText(recognized);
    const normalizedTarget = normalizeText(target);

    const recognizedWords = normalizedRecognized.split(' ');
    const targetWords = normalizedTarget.split(' ');

    let matchCount = 0;
    const comparison = targetWords.map((targetWord, index) => {
      const recognizedWord = recognizedWords[index] || '';
      const isMatch =
        targetWord === recognizedWord ||
        targetWord.replace(/'/g, '') === recognizedWord.replace(/'/g, '');

      if (isMatch) matchCount++;

      return {
        targetWord,
        recognizedWord,
        isMatch,
      };
    });

    const accuracyPercent =
      targetWords.length > 0 ? Math.round((matchCount / targetWords.length) * 100) : 0;

    return { comparison, accuracy: accuracyPercent };
  }, []);

  const startListening = useCallback(() => {
    if (!SpeechRecognitionAPI || !currentExample) return;

    // Clean up any existing instance
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setRecognizedText('');
      setAccuracy(null);
      setWordComparison([]);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);

      const { comparison, accuracy: acc } = compareTexts(transcript, currentExample.text);
      setAccuracy(acc);
      setWordComparison(comparison);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);

      if (event.error === 'no-speech') {
        setRecognizedText(
          t('음성이 감지되지 않았습니다. 다시 시도해주세요.', 'No speech detected. Please try again.')
        );
      } else if (event.error === 'not-allowed') {
        setRecognizedText(
          t('마이크 접근이 거부되었습니다. 브라우저 설정에서 마이크 권한을 허용해주세요.', 'Microphone access denied. Please allow microphone permission in browser settings.')
        );
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [currentExample, compareTexts, t]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredExamples.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredExamples.length - 1 ? prev + 1 : 0));
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setCurrentIndex(0);
  };

  const getAccuracyColor = (acc) => {
    if (acc >= 80) return '#22C55E';
    if (acc >= 50) return '#F59E0B';
    return '#EF4444';
  };

  const getAccuracyLabel = (acc) => {
    if (acc >= 90) return t('훌륭합니다!', 'Excellent!');
    if (acc >= 70) return t('잘하고 있어요!', 'Good job!');
    if (acc >= 50) return t('조금 더 연습해보세요.', 'Keep practicing.');
    return t('다시 도전해보세요!', 'Try again!');
  };

  const getLevelLabel = (level) => {
    switch (level) {
      case 'beginner':
        return t('초급', 'Beginner');
      case 'intermediate':
        return t('중급', 'Intermediate');
      case 'advanced':
        return t('고급', 'Advanced');
      case 'business':
        return t('비즈니스', 'Business');
      case 'practical':
        return t('실전', 'Practical');
      default:
        return level;
    }
  };

  // Browser not supported
  if (!isSupported) {
    return (
      <div className="speech-practice">
        <div className="speech-practice__unsupported">
          <div className="speech-practice__unsupported-icon">🎙️</div>
          <h3>{t('브라우저 미지원', 'Browser Not Supported')}</h3>
          <p>
            {t(
              '현재 브라우저에서는 음성 인식 기능을 지원하지 않습니다. Chrome, Edge, 또는 Safari 브라우저를 사용해주세요.',
              'Speech recognition is not supported in your current browser. Please use Chrome, Edge, or Safari.'
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="speech-practice">
      {/* Level Filter */}
      <div className="speech-practice__filters">
        <span className="speech-practice__filter-label">
          {t('레벨', 'Level')}:
        </span>
        <div className="speech-practice__filter-buttons">
          {[
            { value: 'all', label: t('전체', 'All') },
            { value: 'beginner', label: t('초급', 'Beginner') },
            { value: 'intermediate', label: t('중급', 'Intermediate') },
            { value: 'advanced', label: t('고급', 'Advanced') },
            { value: 'business', label: t('비즈니스', 'Business') },
            { value: 'practical', label: t('실전', 'Practical') },
          ].map((level) => (
            <button
              key={level.value}
              className={`speech-practice__filter-btn ${selectedLevel === level.value ? 'speech-practice__filter-btn--active' : ''}`}
              onClick={() => handleLevelChange(level.value)}
            >
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Sentence */}
      {currentExample && (
        <div className="speech-practice__sentence">
          <div className="speech-practice__sentence-header">
            <span className={`speech-practice__level-badge speech-practice__level-badge--${currentExample.level}`}>
              {getLevelLabel(currentExample.level)}
            </span>
            <span className="speech-practice__counter">
              {currentIndex + 1} / {filteredExamples.length}
            </span>
          </div>
          <p className="speech-practice__target-text">{currentExample.text}</p>
          <p className="speech-practice__translation">{currentExample.translation}</p>
        </div>
      )}

      {/* Microphone Button */}
      <div className="speech-practice__mic-area">
        <button
          className={`speech-practice__mic-btn ${isListening ? 'speech-practice__mic-btn--active' : ''}`}
          onClick={isListening ? stopListening : startListening}
          aria-label={isListening ? t('듣기 중지', 'Stop listening') : t('말하기 시작', 'Start speaking')}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <p className="speech-practice__mic-label">
          {isListening
            ? t('듣고 있습니다... 말해보세요!', 'Listening... Speak now!')
            : t('마이크를 눌러 시작하세요', 'Tap the microphone to start')}
        </p>
      </div>

      {/* Recognized Text */}
      {recognizedText && (
        <div className="speech-practice__result">
          <h3 className="speech-practice__result-title">
            {t('인식된 텍스트', 'Recognized Text')}
          </h3>
          <p className="speech-practice__recognized-text">{recognizedText}</p>
        </div>
      )}

      {/* Accuracy & Comparison */}
      {accuracy !== null && (
        <div className="speech-practice__accuracy">
          <div className="speech-practice__accuracy-header">
            <div
              className="speech-practice__accuracy-circle"
              style={{ borderColor: getAccuracyColor(accuracy) }}
            >
              <span
                className="speech-practice__accuracy-value"
                style={{ color: getAccuracyColor(accuracy) }}
              >
                {accuracy}%
              </span>
            </div>
            <div className="speech-practice__accuracy-info">
              <p
                className="speech-practice__accuracy-label"
                style={{ color: getAccuracyColor(accuracy) }}
              >
                {getAccuracyLabel(accuracy)}
              </p>
              <p className="speech-practice__accuracy-desc">
                {t('정확도', 'Accuracy')}
              </p>
            </div>
          </div>

          {/* Word-by-word comparison */}
          {wordComparison.length > 0 && (
            <div className="speech-practice__comparison">
              <h4>{t('단어별 비교', 'Word-by-Word Comparison')}</h4>
              <div className="speech-practice__words">
                {wordComparison.map((item, index) => (
                  <span
                    key={index}
                    className={`speech-practice__word ${item.isMatch ? 'speech-practice__word--match' : 'speech-practice__word--mismatch'}`}
                    title={
                      item.isMatch
                        ? t('정확', 'Correct')
                        : `${t('인식', 'Recognized')}: "${item.recognizedWord || t('(없음)', '(none)')}" → ${t('정답', 'Target')}: "${item.targetWord}"`
                    }
                  >
                    {item.targetWord}
                  </span>
                ))}
              </div>
              <p className="speech-practice__comparison-legend">
                <span className="speech-practice__legend-item speech-practice__legend-item--match">
                  {t('일치', 'Match')}
                </span>
                <span className="speech-practice__legend-item speech-practice__legend-item--mismatch">
                  {t('불일치', 'Mismatch')}
                </span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="speech-practice__nav">
        <button
          className="btn btn--outline"
          onClick={handlePrev}
          disabled={filteredExamples.length <= 1}
        >
          ← {t('이전', 'Previous')}
        </button>
        <button
          className="btn btn--outline"
          onClick={handleNext}
          disabled={filteredExamples.length <= 1}
        >
          {t('다음', 'Next')} →
        </button>
      </div>
    </div>
  );
}

export default SpeechPractice;
