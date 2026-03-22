import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import { CURRICULUM_CARDS } from '../config/site';

function Home() {
  const { lang } = useLanguage();
  useAOS();

  const scrollToCurriculum = (e) => {
    e.preventDefault();
    const section = document.getElementById('curriculum');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title={lang === 'ko' ? 'English Pro - 실용 영어 학습' : 'English Pro - Practical English Learning'}
        description={
          lang === 'ko'
            ? '비즈니스 영어, 일상 회화, TOEIC 준비까지. AI 기반 맞춤형 영어 학습 플랫폼'
            : 'Business English, daily conversation, TOEIC prep. AI-powered personalized English learning platform'
        }
      />

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero__content">
          <h1 className="hero__title">
            {lang === 'ko' ? '실용 영어 마스터' : 'Master Practical English'}
          </h1>
          <p className="hero__subtitle">
            {lang === 'ko'
              ? '비즈니스 영어부터 일상 회화까지, AI와 함께하는 체계적인 영어 학습'
              : 'From business English to daily conversation, systematic English learning with AI'}
          </p>
          <div className="hero__actions">
            <Link to="/conversation" className="btn btn--primary btn--lg">
              {lang === 'ko' ? '학습 시작하기' : 'Start Learning'}
            </Link>
            <a
              href="#curriculum"
              className="btn btn--outline btn--lg"
              onClick={scrollToCurriculum}
            >
              {lang === 'ko' ? '커리큘럼 보기' : 'View Curriculum'}
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">2,300+</span>
              <span className="hero__stat-label">
                {lang === 'ko' ? '단어' : 'Words'}
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">40+</span>
              <span className="hero__stat-label">
                {lang === 'ko' ? '레슨' : 'Lessons'}
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">6</span>
              <span className="hero__stat-label">
                {lang === 'ko' ? '개 카테고리' : 'Categories'}
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">AI</span>
              <span className="hero__stat-label">
                {lang === 'ko' ? '학습' : 'Learning'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section" id="curriculum" data-aos="fade-up">
        <div className="curriculum-section__header">
          <h2 className="curriculum-section__title">
            {lang === 'ko' ? '커리큘럼' : 'Curriculum'}
          </h2>
          <p className="curriculum-section__subtitle">
            {lang === 'ko'
              ? '체계적으로 구성된 학습 과정을 확인하세요'
              : 'Explore our systematically structured learning courses'}
          </p>
        </div>
        <div className="curriculum-section__grid">
          {CURRICULUM_CARDS.map((card, index) => (
            <Link
              to={card.link}
              key={card.id || index}
              className="curriculum-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="curriculum-card__icon">{card.icon}</div>
              <h3 className="curriculum-card__title">{card.title}</h3>
              <p className="curriculum-card__description">{card.description}</p>
              <span className="curriculum-card__cta">
                {lang === 'ko' ? '학습하기 →' : 'Learn →'}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" data-aos="fade-up">
        <div className="features-section__header">
          <h2 className="features-section__title">
            {lang === 'ko' ? 'Why English Pro?' : 'Why English Pro?'}
          </h2>
          <p className="features-section__subtitle">
            {lang === 'ko'
              ? '영어 학습을 더 효과적으로 만드는 핵심 기능들'
              : 'Core features that make English learning more effective'}
          </p>
        </div>
        <div className="features-section__grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
            <div className="feature-card__icon">🤖</div>
            <h3 className="feature-card__title">
              {lang === 'ko' ? 'AI 챗봇' : 'AI Chatbot'}
            </h3>
            <p className="feature-card__description">
              {lang === 'ko'
                ? 'OpenAI 기반 AI 챗봇과 실시간 영어 대화 연습. 상황별 맞춤 피드백을 받으세요.'
                : 'Practice real-time English conversation with an OpenAI-powered AI chatbot. Get contextual feedback.'}
            </p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-card__icon">🎙️</div>
            <h3 className="feature-card__title">
              {lang === 'ko' ? '음성 인식' : 'Speech Recognition'}
            </h3>
            <p className="feature-card__description">
              {lang === 'ko'
                ? 'Web Speech API를 활용한 발음 연습. 실시간으로 발음을 분석하고 교정받으세요.'
                : 'Practice pronunciation with Web Speech API. Get real-time pronunciation analysis and correction.'}
            </p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card__icon">📚</div>
            <h3 className="feature-card__title">
              {lang === 'ko' ? '체계적 커리큘럼' : 'Structured Curriculum'}
            </h3>
            <p className="feature-card__description">
              {lang === 'ko'
                ? '일상 회화, 비즈니스 영어, TOEIC까지 단계별로 구성된 학습 커리큘럼으로 효율적으로 학습하세요.'
                : 'Learn efficiently with a step-by-step curriculum covering daily conversation, business English, and TOEIC.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
