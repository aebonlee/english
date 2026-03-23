import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import SpeechPractice from '../../components/speech/SpeechPractice';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

function SpeechPage() {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={t('발음 연습 - English Pro', 'Speech Practice - English Pro')}
        description={t(
          '음성 인식 기술을 활용한 영어 발음 연습. 실시간으로 발음 정확도를 확인하세요.',
          'Practice English pronunciation with speech recognition technology. Check pronunciation accuracy in real-time.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('발음 연습', 'Speech Practice')}</span>
          </div>
          <h1 className="page-header__title">
            {t('발음 연습', 'Speech Practice')}
          </h1>
          <p className="page-header__description">
            {t(
              '문장을 읽고 마이크 버튼을 눌러 발음을 녹음하세요. 음성 인식 기술이 정확도를 분석해줍니다.',
              'Read the sentence and press the microphone button to record your pronunciation. Speech recognition technology will analyze your accuracy.'
            )}
          </p>
        </div>
      </section>

      <div className="content-page">

        {/* Speech Practice Component */}
        <section className="content-section" data-aos="fade-up">
          <SpeechPractice />
        </section>
      </div>
    </>
  );
}

export default SpeechPage;
