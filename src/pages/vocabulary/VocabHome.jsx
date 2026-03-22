import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import { basicWords, businessWords, toeicWords, dailyWords } from '../../data/vocabulary';

const categories = [
  {
    title: '기초 필수 단어 500',
    subtitle: 'Basic Essential 500',
    description: '영어 학습의 기본이 되는 필수 단어 500개. 일상 회화와 기초 독해에 꼭 필요한 핵심 어휘를 학습하세요.',
    words: basicWords,
    path: '/vocabulary/basic',
    icon: '📖',
    color: '#4A90D9',
    bgColor: '#EBF3FB',
  },
  {
    title: '비즈니스 필수 단어 500',
    subtitle: 'Business Essential 500',
    description: '직장 생활과 비즈니스 환경에서 자주 사용되는 전문 어휘 500개. 회의, 보고서, 이메일에 필수적인 단어들입니다.',
    words: businessWords,
    path: '/vocabulary/business',
    icon: '💼',
    color: '#E67E22',
    bgColor: '#FDF2E9',
  },
  {
    title: 'TOEIC 필수 단어 800',
    subtitle: 'TOEIC Essential 800',
    description: 'TOEIC 시험에 자주 출제되는 핵심 어휘 800개. 고득점을 위해 반드시 알아야 할 단어들을 정리했습니다.',
    words: toeicWords,
    path: '/vocabulary/toeic',
    icon: '🎯',
    color: '#8E44AD',
    bgColor: '#F4ECF7',
  },
  {
    title: '일상 필수 단어 500',
    subtitle: 'Daily Essential 500',
    description: '일상생활에서 매일 사용하는 실용적인 어휘 500개. 쇼핑, 요리, 여행 등 생활 속 영어를 마스터하세요.',
    words: dailyWords,
    path: '/vocabulary/daily',
    icon: '🏠',
    color: '#27AE60',
    bgColor: '#EAFAF1',
  },
];

export default function VocabHome() {
  const { t } = useLanguage();
  useAOS();
  const [search, setSearch] = useState('');

  const allWords = useMemo(
    () => [
      ...basicWords.map((w) => ({ ...w, source: '기초' })),
      ...businessWords.map((w) => ({ ...w, source: '비즈니스' })),
      ...toeicWords.map((w) => ({ ...w, source: 'TOEIC' })),
      ...dailyWords.map((w) => ({ ...w, source: '일상' })),
    ],
    []
  );

  const totalCount = allWords.length;

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase().trim();
    return allWords
      .filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.includes(q) ||
          w.example.toLowerCase().includes(q)
      )
      .slice(0, 30);
  }, [search, allWords]);

  return (
    <div className="vocab-home">
      <SEOHead
        title={t('필수 영단어 - English Pro', 'Essential Vocabulary - English Pro')}
        description={t(
          '기초, 비즈니스, TOEIC, 일상 필수 영단어 2,300+개를 학습하세요.',
          'Study 2,300+ essential vocabulary words across basic, business, TOEIC, and daily categories.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{t('필수 영단어', 'Vocabulary')}</span>
          </div>
          <h1 className="page-header__title">{t('필수 영단어', 'Essential Vocabulary')}</h1>
          <p className="page-header__description">
            {t(
              `총 ${totalCount.toLocaleString()}개의 필수 영단어를 학습하세요`,
              `Study ${totalCount.toLocaleString()} essential vocabulary words`
            )}
          </p>
        </div>
      </section>

      <div className="vocab-home-search">
        <div className="search-input-wrapper">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="모든 카테고리에서 단어 검색... (영어 또는 한국어)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>
              &times;
            </button>
          )}
        </div>
      </div>

      {search.trim() && (
        <div className="vocab-search-results">
          <h3>
            검색 결과: {searchResults.length}개
            {searchResults.length === 30 && ' (최대 30개 표시)'}
          </h3>
          {searchResults.length === 0 ? (
            <p className="no-results">검색 결과가 없습니다.</p>
          ) : (
            <div className="search-results-list">
              {searchResults.map((w, idx) => (
                <div key={`${w.source}-${w.id}-${idx}`} className="search-result-item">
                  <div className="search-result-top">
                    <span className="search-result-word">{w.word}</span>
                    <span className="search-result-pron">{w.pronunciation}</span>
                    <span
                      className="search-result-source"
                      style={{
                        background:
                          w.source === '기초'
                            ? '#EBF3FB'
                            : w.source === '비즈니스'
                            ? '#FDF2E9'
                            : w.source === 'TOEIC'
                            ? '#F4ECF7'
                            : '#EAFAF1',
                        color:
                          w.source === '기초'
                            ? '#4A90D9'
                            : w.source === '비즈니스'
                            ? '#E67E22'
                            : w.source === 'TOEIC'
                            ? '#8E44AD'
                            : '#27AE60',
                      }}
                    >
                      {w.source}
                    </span>
                  </div>
                  <div className="search-result-meaning">{w.meaning}</div>
                  <div className="search-result-example">{w.example}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!search.trim() && (
        <div className="vocab-category-grid">
          {categories.map((cat) => (
            <Link to={cat.path} key={cat.path} className="vocab-category-card" style={{ borderTopColor: cat.color }}>
              <div className="vocab-category-icon" style={{ background: cat.bgColor }}>
                <span>{cat.icon}</span>
              </div>
              <h2>{cat.title}</h2>
              <p className="vocab-category-subtitle">{cat.subtitle}</p>
              <p className="vocab-category-desc">{cat.description}</p>
              <div className="vocab-category-count" style={{ color: cat.color }}>
                {cat.words.length}개 단어
              </div>
              <div className="vocab-category-enter" style={{ background: cat.color }}>
                학습 시작
              </div>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .vocab-home {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }

        .vocab-home-search {
          max-width: 600px;
          margin: 0 auto 36px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--text-light);
          pointer-events: none;
        }

        .search-input-wrapper input {
          width: 100%;
          padding: 14px 44px 14px 48px;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          background: var(--bg-white);
          color: var(--text-primary);
        }

        .search-input-wrapper input:focus {
          border-color: var(--primary-blue);
        }

        .search-clear {
          position: absolute;
          right: 12px;
          background: var(--bg-light-gray);
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          line-height: 1;
        }

        .search-clear:hover {
          background: var(--primary-blue-bg);
          color: var(--primary-blue);
        }

        .vocab-search-results {
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .vocab-search-results h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0 0 16px;
        }

        .no-results {
          text-align: center;
          color: var(--text-light);
          padding: 40px 0;
        }

        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-result-item {
          background: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 16px 20px;
          transition: box-shadow 0.2s;
        }

        .search-result-item:hover {
          box-shadow: var(--shadow-sm);
        }

        .search-result-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .search-result-word {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .search-result-pron {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .search-result-source {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 6px;
          margin-left: auto;
        }

        .search-result-meaning {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .search-result-example {
          font-size: 0.85rem;
          color: var(--text-light);
          font-style: italic;
        }

        .vocab-category-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 700px) {
          .vocab-category-grid {
            grid-template-columns: 1fr;
          }
        }

        .vocab-category-card {
          background: var(--bg-white);
          border: 1px solid var(--border-light);
          border-top: 4px solid;
          border-radius: 14px;
          padding: 28px 24px 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .vocab-category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .vocab-category-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        .vocab-category-card h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px;
        }

        .vocab-category-subtitle {
          font-size: 0.85rem;
          color: var(--text-light);
          margin: 0 0 12px;
        }

        .vocab-category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0 0 16px;
          flex: 1;
        }

        .vocab-category-count {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .vocab-category-enter {
          display: inline-block;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 10px 0;
          border-radius: 8px;
          text-align: center;
          transition: opacity 0.2s;
        }

        .vocab-category-card:hover .vocab-category-enter {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
