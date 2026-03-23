import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import { poetryWorks, levelLabels } from '../../data/literatureData';

function useTTS() {
  const utterRef = useRef(null);
  const [playing, setPlaying] = useState(null);   // work id
  const [paraIdx, setParaIdx] = useState(-1);
  const [rate, setRate] = useState(1);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(null);
    setParaIdx(-1);
  }, []);

  const speak = useCallback((paragraphs, workId) => {
    stop();
    setPlaying(workId);

    let idx = 0;
    const next = () => {
      if (idx >= paragraphs.length) { stop(); return; }
      setParaIdx(idx);
      const u = new SpeechSynthesisUtterance(paragraphs[idx]);
      u.lang = 'en-US';
      u.rate = rate;
      u.onend = () => { idx++; next(); };
      u.onerror = () => stop();
      utterRef.current = u;
      window.speechSynthesis.speak(u);
    };
    next();
  }, [rate, stop]);

  const pause = useCallback(() => {
    window.speechSynthesis.pause();
  }, []);

  const resume = useCallback(() => {
    window.speechSynthesis.resume();
  }, []);

  useEffect(() => () => window.speechSynthesis.cancel(), []);

  return { playing, paraIdx, rate, setRate, speak, pause, resume, stop };
}

function LiteratureCard({ work, tts, t, language }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const isPlaying = tts.playing === work.id;
  const level = levelLabels[work.level];

  return (
    <article className="literature-card" id={work.id}>
      {/* Header */}
      <div className="literature-card__header">
        <div>
          <h3 className="literature-card__title">{work.title}</h3>
          <p className="literature-card__meta">
            {work.author} · {work.year > 0 ? work.year : `c. ${Math.abs(work.year)} BC`}
            <span
              className="literature-card__level"
              style={{ background: level.color + '20', color: level.color }}
            >
              {language === 'ko' ? level.ko : level.en}
            </span>
          </p>
        </div>
      </div>

      {/* TTS Controls */}
      <div className="literature-controls">
        {!isPlaying ? (
          <button className="btn btn-primary btn--sm" onClick={() => tts.speak(work.paragraphs, work.id)}>
            <i className="fas fa-play"></i> {t('듣기', 'Play')}
          </button>
        ) : (
          <>
            <button className="btn btn--sm btn--outline" onClick={tts.pause}>
              <i className="fas fa-pause"></i>
            </button>
            <button className="btn btn--sm btn--outline" onClick={tts.resume}>
              <i className="fas fa-play"></i>
            </button>
            <button className="btn btn--sm btn--outline" onClick={tts.stop}>
              <i className="fas fa-stop"></i>
            </button>
          </>
        )}
        <select
          className="literature-controls__speed"
          value={tts.rate}
          onChange={e => tts.setRate(Number(e.target.value))}
        >
          <option value={0.7}>0.7x</option>
          <option value={0.85}>0.85x</option>
          <option value={1}>1.0x</option>
        </select>
      </div>

      {/* Original Text */}
      <div className="literature-text">
        {work.paragraphs.map((p, i) => (
          <p
            key={i}
            className={isPlaying && tts.paraIdx === i ? 'reading-highlight' : ''}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Toggle Buttons */}
      <div className="literature-toggles">
        <button
          className={`btn btn--sm ${showTranslation ? 'btn-primary' : 'btn--outline'}`}
          onClick={() => setShowTranslation(v => !v)}
        >
          <i className="fas fa-language"></i> {t('번역', 'Translation')}
        </button>
        <button
          className={`btn btn--sm ${showVocab ? 'btn-primary' : 'btn--outline'}`}
          onClick={() => setShowVocab(v => !v)}
        >
          <i className="fas fa-book"></i> {t('어휘', 'Vocabulary')}
        </button>
        <button
          className={`btn btn--sm ${showAnalysis ? 'btn-primary' : 'btn--outline'}`}
          onClick={() => setShowAnalysis(v => !v)}
        >
          <i className="fas fa-lightbulb"></i> {t('해설', 'Analysis')}
        </button>
      </div>

      {/* Translation */}
      {showTranslation && (
        <div className="literature-translation">
          <h4>{t('한국어 번역', 'Korean Translation')}</h4>
          <p>{work.translation}</p>
        </div>
      )}

      {/* Vocabulary */}
      {showVocab && (
        <div className="literature-vocab">
          <h4>{t('핵심 어휘', 'Key Vocabulary')}</h4>
          <ul>
            {work.vocabulary.map((v, i) => (
              <li key={i}>
                <strong>{v.word}</strong> — {v.meaning}
                <span className="literature-vocab__example">"{v.example}"</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Analysis */}
      {showAnalysis && (
        <div className="literature-analysis">
          <h4>{t('작품 해설', 'Analysis')}</h4>
          <p>{work.analysis}</p>
        </div>
      )}
    </article>
  );
}

export default function Poetry() {
  const { language, t } = useLanguage();
  const tts = useTTS();

  return (
    <>
      <SEOHead
        title={t('영미시 - 영문학 TTS - English Pro', 'Poetry - Literature TTS - English Pro')}
        description={t(
          '프로스트, 셰익스피어, 디킨슨 등 영미 명시를 원문·번역·TTS로 학습하세요.',
          'Study classic English poetry by Frost, Shakespeare, Dickinson and more with text, translation, and TTS.'
        )}
      />

      <section className="page-header">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/literature">{t('영문학 TTS', 'Literature TTS')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('영미시', 'Poetry')}</span>
          </div>
          <h1 className="page-header__title">
            {language === 'ko'
              ? <>영미시 <span className="page-header__en">(Poetry)</span></>
              : 'Poetry'}
          </h1>
          <p className="page-header__description">
            {t(
              '저작권이 풀린 영미 명시 9편을 원문과 번역, TTS 음성으로 감상하세요.',
              'Enjoy 9 classic public-domain poems with original text, translation, and TTS audio.'
            )}
          </p>
        </div>
      </section>

      <PageLayout category="literature">
        <div className="content-page">
          <div className="literature-list">
            {poetryWorks.map(work => (
              <LiteratureCard
                key={work.id}
                work={work}
                tts={tts}
                t={t}
                language={language}
              />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
