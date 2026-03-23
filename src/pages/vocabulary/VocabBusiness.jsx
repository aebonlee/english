import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import { businessWords } from '../../data/vocabulary';

const ITEMS_PER_PAGE = 20;
const TOTAL_LABEL = 500;
const ACCENT_COLOR = '#E67E22';
const ACCENT_BG = '#fef5ee';
const ACCENT_BORDER = '#f5d5b0';

export default function VocabBusiness() {
  const { t } = useLanguage();
  useAOS();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showMeaning, setShowMeaning] = useState(true);
  const [flipped, setFlipped] = useState({});
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [learned, setLearned] = useState({});

  const toggleFlip = (id) => {
    if (!showMeaning) return;
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLearned = (e, id) => {
    e.stopPropagation();
    setLearned((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredWords = useMemo(() => {
    let words = businessWords;
    if (categoryFilter !== 'all') {
      words = words.filter((w) => w.category === categoryFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      words = words.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.includes(q) ||
          w.example.toLowerCase().includes(q)
      );
    }
    return words;
  }, [search, categoryFilter]);

  const visibleWords = filteredWords.slice(0, visibleCount);
  const hasMore = visibleCount < filteredWords.length;
  const learnedCount = Object.values(learned).filter(Boolean).length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const categoryOptions = [
    { value: 'all', label: '전체' },
    { value: 'noun', label: 'Noun (명사)' },
    { value: 'verb', label: 'Verb (동사)' },
    { value: 'adjective', label: 'Adjective (형용사)' },
    { value: 'adverb', label: 'Adverb (부사)' },
  ];

  return (
    <>
      <SEOHead
        title={t('비즈니스 필수 단어 500 - English Pro', 'Business Essential 500 - English Pro')}
        description={t(
          '직장 생활과 비즈니스 환경에서 자주 사용되는 전문 어휘 500개를 학습하세요.',
          'Study 500 essential business vocabulary words for the workplace.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/vocabulary">{t('필수 영단어', 'Vocabulary')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('비즈니스 필수 단어', 'Business Essential')}</span>
          </div>
          <h1 className="page-header__title">
            {t('비즈니스 필수 단어 500', 'Business Essential 500')}
          </h1>
          <p className="page-header__description">
            {t(
              '직장 생활과 비즈니스 환경에서 자주 사용되는 전문 어휘 500개를 학습하세요.',
              'Study 500 essential business vocabulary words for the workplace.'
            )}
          </p>
        </div>
      </section>

      <div className="vocab-container">
        <div className="vocab-progress-wrap">
          <div className="vocab-progress">
            <div className="vocab-progress-bar">
              <div
                className="vocab-progress-fill"
                style={{ width: `${(learnedCount / TOTAL_LABEL) * 100}%`, background: `linear-gradient(90deg, ${ACCENT_COLOR}, #d35400)` }}
              />
            </div>
            <span className="vocab-progress-text">
              {learnedCount} / {TOTAL_LABEL} {t('학습 완료', 'completed')}
            </span>
          </div>
        </div>

      <div className="vocab-controls">
        <div className="vocab-search-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="단어 검색..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
          />
          {search && <button className="search-clear-btn" onClick={() => setSearch('')}>&times;</button>}
        </div>

        <div className="vocab-filters">
          <div className="vocab-category-filters">
            {categoryOptions.map((opt) => (
              <button
                key={opt.value}
                className={`filter-btn ${categoryFilter === opt.value ? 'active' : ''}`}
                onClick={() => { setCategoryFilter(opt.value); setVisibleCount(ITEMS_PER_PAGE); }}
                style={categoryFilter === opt.value ? { background: ACCENT_COLOR, borderColor: ACCENT_COLOR } : {}}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            className={`meaning-toggle ${!showMeaning ? 'hidden-mode' : ''}`}
            onClick={() => { setShowMeaning((prev) => !prev); setFlipped({}); }}
            style={{ borderColor: ACCENT_COLOR, color: !showMeaning ? '#fff' : ACCENT_COLOR, background: !showMeaning ? ACCENT_COLOR : '#fff' }}
          >
            {showMeaning ? '뜻 가리기' : '뜻 보이기'}
          </button>
        </div>

        <div className="vocab-result-count">검색 결과: {filteredWords.length}개</div>
      </div>

      <div className="vocab-grid">
        {visibleWords.map((word) => (
          <div
            key={word.id}
            className={`vocab-card ${flipped[word.id] ? 'flipped' : ''} ${learned[word.id] ? 'learned' : ''}`}
            onClick={() => toggleFlip(word.id)}
          >
            <div className="vocab-card-inner">
              <div className="vocab-card-front">
                <div className="card-top-row">
                  <span className="category-badge">{word.category}</span>
                  <button className={`learn-check ${learned[word.id] ? 'checked' : ''}`} onClick={(e) => toggleLearned(e, word.id)} title={learned[word.id] ? '학습 완료 취소' : '학습 완료'} style={learned[word.id] ? { background: ACCENT_COLOR, borderColor: ACCENT_COLOR } : {}}>
                    {learned[word.id] ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="card-word">{word.word}</h3>
                <span className="pronunciation">{word.pronunciation}</span>
                {!showMeaning && <p className="card-hint">클릭하여 뜻 확인</p>}
              </div>
              <div className="vocab-card-back" style={{ background: ACCENT_BG, borderColor: ACCENT_BORDER }}>
                <div className="card-top-row">
                  <span className="category-badge">{word.category}</span>
                  <button className={`learn-check ${learned[word.id] ? 'checked' : ''}`} onClick={(e) => toggleLearned(e, word.id)} style={learned[word.id] ? { background: ACCENT_COLOR, borderColor: ACCENT_COLOR } : {}}>
                    {learned[word.id] ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="card-meaning">{word.meaning}</h3>
                <p className="example">{word.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleWords.length === 0 && (
        <div className="vocab-empty"><p>검색 결과가 없습니다.</p></div>
      )}

      {hasMore && (
        <div className="vocab-load-more">
          <button onClick={handleShowMore} style={{ borderColor: ACCENT_COLOR, color: ACCENT_COLOR }} onMouseEnter={(e) => { e.target.style.background = ACCENT_COLOR; e.target.style.color = '#fff'; }} onMouseLeave={(e) => { e.target.style.background = '#fff'; e.target.style.color = ACCENT_COLOR; }}>
            더 보기 ({filteredWords.length - visibleCount}개 남음)
          </button>
        </div>
      )}

      <style>{`
        .vocab-container { max-width: 1100px; margin: 0 auto; padding: 32px 20px 80px; }
        .vocab-progress-wrap { text-align: center; margin-bottom: 28px; }
        .vocab-progress { max-width: 400px; margin: 0 auto; }
        .vocab-progress-bar { height: 8px; background: #e8e8e8; border-radius: 4px; overflow: hidden; margin-bottom: 6px; }
        .vocab-progress-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; min-width: 0; }
        .vocab-progress-text { font-size: 0.85rem; color: #666; font-weight: 500; }
        .vocab-controls { margin-bottom: 24px; }
        .vocab-search-bar { position: relative; display: flex; align-items: center; max-width: 480px; margin: 0 auto 16px; }
        .vocab-search-bar svg { position: absolute; left: 14px; color: #aaa; pointer-events: none; }
        .vocab-search-bar input { width: 100%; padding: 12px 40px 12px 42px; border: 2px solid #e0e0e0; border-radius: 10px; font-size: 0.95rem; outline: none; transition: border-color 0.2s; background: #fff; }
        .vocab-search-bar input:focus { border-color: ${ACCENT_COLOR}; }
        .search-clear-btn { position: absolute; right: 10px; background: #e0e0e0; border: none; border-radius: 50%; width: 26px; height: 26px; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #555; }
        .search-clear-btn:hover { background: #ccc; }
        .vocab-filters { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 10px; }
        .vocab-category-filters { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
        .filter-btn { padding: 7px 16px; border: 1px solid #ddd; border-radius: 20px; background: #fff; color: #555; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; font-weight: 500; }
        .filter-btn:hover { border-color: ${ACCENT_COLOR}; color: ${ACCENT_COLOR}; }
        .filter-btn.active { color: #fff; }
        .meaning-toggle { padding: 7px 18px; border: 2px solid; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
        .vocab-result-count { text-align: center; font-size: 0.85rem; color: #999; }
        .vocab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        @media (max-width: 600px) { .vocab-grid { grid-template-columns: 1fr; } }
        .vocab-card { perspective: 800px; height: 200px; cursor: pointer; }
        .vocab-card.learned { opacity: 0.7; }
        .vocab-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s ease; transform-style: preserve-3d; }
        .vocab-card.flipped .vocab-card-inner { transform: rotateY(180deg); }
        .vocab-card-front, .vocab-card-back { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 14px; padding: 20px; display: flex; flex-direction: column; border: 1px solid #e8e8e8; background: #fff; overflow: hidden; align-items: center; justify-content: center; text-align: center; }
        .vocab-card-back { transform: rotateY(180deg); }
        .card-top-row { position: absolute; top: 12px; left: 14px; right: 14px; display: flex; justify-content: space-between; align-items: center; }
        .category-badge { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; background: #eef2f7; color: #6b7c93; padding: 3px 10px; border-radius: 10px; letter-spacing: 0.5px; }
        .learn-check { background: none; border: 2px solid #ccc; border-radius: 50%; width: 28px; height: 28px; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #ccc; transition: all 0.2s; padding: 0; line-height: 1; }
        .learn-check:hover { border-color: ${ACCENT_COLOR}; color: ${ACCENT_COLOR}; }
        .learn-check.checked { color: #fff; }
        .card-word { font-size: 1.5rem; font-weight: 700; color: #1a1a2e; margin: 0 0 6px; }
        .pronunciation { font-size: 0.85rem; color: #888; margin-bottom: 4px; }
        .card-hint { font-size: 0.78rem; color: #bbb; margin: 8px 0 0; }
        .card-meaning { font-size: 1.3rem; font-weight: 700; color: #2c3e50; margin: 0 0 12px; }
        .example { font-size: 0.85rem; color: #666; font-style: italic; line-height: 1.4; margin: 0; }
        .vocab-empty { text-align: center; padding: 60px 0; color: #999; font-size: 1rem; }
        .vocab-load-more { text-align: center; margin-top: 32px; }
        .vocab-load-more button { padding: 12px 36px; border: 2px solid; border-radius: 10px; background: #fff; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
      `}</style>
    </div>
    </>
  );
}
