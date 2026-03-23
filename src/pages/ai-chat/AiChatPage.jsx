import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import ChatBot from '../../components/ai/ChatBot';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

function AiChatPage() {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('AI 영어 대화 - English Pro', 'AI English Chat - English Pro')}
        description={t(
          'AI 챗봇과 함께 실시간 영어 대화 연습. 상황별 맞춤 피드백으로 영어 실력을 향상시키세요.',
          'Practice real-time English conversation with an AI chatbot. Improve your skills with contextual feedback.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('AI 영어 대화', 'AI English Chat')}</span>
          </div>
          <h1 className="page-header__title">
            {t('AI 영어 대화', 'AI English Chat')}
          </h1>
          <p className="page-header__description">
            {t(
              'AI 튜터와 함께 다양한 상황에서 영어 대화를 연습하세요. 문법 교정과 표현 제안을 받을 수 있습니다.',
              'Practice English conversation in various scenarios with an AI tutor. Get grammar corrections and expression suggestions.'
            )}
          </p>
        </div>
      </section>

      <div className="content-page">
        {/* API Note */}
        <section className="content-section" data-aos="fade-up" style={{ textAlign: 'center', padding: '12px 20px', fontSize: '0.9rem', color: '#888' }}>
          {t(
            '※ 이 기능을 사용하려면 OpenAI API 키가 필요합니다. 설정 페이지에서 API 키를 등록해주세요.',
            '※ This feature requires an OpenAI API key. Please register your API key in the Settings page.'
          )}
        </section>

        {/* ChatBot */}
        <section className="content-section" data-aos="fade-up">
          <ChatBot />
        </section>
      </div>
    </>
  );
}

export default AiChatPage;
