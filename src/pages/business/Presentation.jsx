import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import PageLayout from '../../components/PageLayout';

function Presentation() {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  const sections = [
    { id: 'opening', ko: '오프닝', en: 'Opening' },
    { id: 'transition', ko: '전환 표현', en: 'Transitions' },
    { id: 'data', ko: '데이터 설명', en: 'Data' },
    { id: 'qa', ko: '질의응답', en: 'Q&A' },
    { id: 'closing', ko: '마무리', en: 'Closing' },
    { id: 'script', ko: '스크립트 예시', en: 'Script Example' },
  ];

  return (
    <>
      <SEOHead
        title={t(
          '\uD504\uB808\uC820\uD14C\uC774\uC158 \uC601\uC5B4 - English Pro',
          'Presentation English - English Pro'
        )}
        description={t(
          '\uC601\uC5B4 \uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uC624\uD504\uB2DD, \uC804\uD658, \uB370\uC774\uD130 \uC124\uBA85, Q&A, \uB9C8\uBB34\uB9AC \uD575\uC2EC \uD45C\uD604\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
          'Learn key expressions for presentation openings, transitions, data description, Q&A, and closing.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('\uD648', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/business">{t('\uBE44\uC988\uB2C8\uC2A4', 'Business')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('\uD504\uB808\uC820\uD14C\uC774\uC158', 'Presentation')}</span>
          </div>
          <h1 className="page-header__title">{t('\uD504\uB808\uC820\uD14C\uC774\uC158 \uC601\uC5B4', 'Presentation Skills')}</h1>
          <p className="page-header__description">
            {t(
              '자신감 있고 프로페셔널한 영어 프레젠테이션을 위한 핵심 표현을 배워보세요.',
              'Learn key expressions for confident and professional English presentations.'
            )}
          </p>
        </div>
      </section>

      <PageLayout sections={sections} category="business">
          <div className="lesson-body">
            <div className="callout-box">
              <h3>{t('학습 목표', 'Learning Objectives')}</h3>
              <ul>
                <li>{t('프레젠테이션 오프닝에서 자기소개와 주제를 효과적으로 전달하는 표현 학습', 'Learn expressions to effectively introduce yourself and your topic in openings')}</li>
                <li>{t('자연스러운 전환 표현으로 발표 흐름을 매끄럽게 연결하기', 'Connect presentation flow smoothly with natural transition expressions')}</li>
                <li>{t('차트와 데이터를 전문적으로 설명하는 표현 익히기', 'Master expressions for professionally describing charts and data')}</li>
                <li>{t('Q&A 세션에서 질문에 프로페셔널하게 대응하기', 'Respond professionally to questions during Q&A sessions')}</li>
                <li>{t('인상적인 마무리로 프레젠테이션을 완성하는 표현 배우기', 'Learn closing expressions to complete your presentation impressively')}</li>
              </ul>
            </div>


            <h2 id="opening">{t('\uC624\uD504\uB2DD (Opening)', 'Opening')}</h2>
            <p>
              {t(
            '\uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uCCAB\uC778\uC0C1\uC740 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. \uC790\uAE30\uC18C\uAC1C, \uC8FC\uC81C \uC18C\uAC1C, \uBAA9\uCC28 \uC124\uBA85\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.',
            'First impressions in presentations are crucial. Include self-introduction, topic introduction, and outline overview.'
              )}
            </p>
            <div className="example-box">
              <h4>{t('\uC624\uD504\uB2DD \uD575\uC2EC \uD45C\uD604', 'Opening Key Expressions')}</h4>
              <ul className="expression-list">
            <li>
              <code>Good morning/afternoon, everyone. Thank you for being here today.</code>
              <span className="translation">{t(' - \uC548\uB155\uD558\uC138\uC694, \uC5EC\uB7EC\uBD84. \uC624\uB298 \uCC38\uC11D\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.', ' - Hello everyone. Thank you for being here today.')}</span>
            </li>
            <li>
              <code>My name is [name], and I'm the [position] at [company].</code>
              <span className="translation">{t(' - \uC800\uB294 [회사]\uC758 [직위] [이름]\uC785\uB2C8\uB2E4.', ' - I am [name], [position] at [company].')}</span>
            </li>
            <li>
              <code>Today, I'd like to talk about...</code>
              <span className="translation">{t(' - \uC624\uB298\uC740 ~\uC5D0 \uB300\uD574 \uB9D0\uC500\uB4DC\uB9AC\uACE0\uC790 \uD569\uB2C8\uB2E4.', ' - Today, I would like to discuss...')}</span>
            </li>
            <li>
              <code>The purpose of this presentation is to...</code>
              <span className="translation">{t(' - \uC774 \uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uBAA9\uC801\uC740 ~\uC785\uB2C8\uB2E4.', ' - The goal of this presentation is to...')}</span>
            </li>
            <li>
              <code>I've divided my presentation into three parts.</code>
              <span className="translation">{t(' - \uD504\uB808\uC820\uD14C\uC774\uC158\uC744 \uC138 \uBD80\uBD84\uC73C\uB85C \uB098\uB204\uC5C8\uC2B5\uB2C8\uB2E4.', ' - My presentation has three parts.')}</span>
            </li>
            <li>
              <code>First, I'll give you an overview of... Then, I'll move on to... Finally, I'll discuss...</code>
              <span className="translation">{t(' - \uBA3C\uC800 ~\uC5D0 \uB300\uD55C \uAC1C\uC694\uB97C \uB4DC\uB9AC\uACE0, \uADF8\uB2E4\uC74C ~\uC73C\uB85C \uB118\uC5B4\uAC00\uACE0, \uB9C8\uC9C0\uB9C9\uC73C\uB85C ~\uC744 \uB17C\uC758\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - First, I\'ll overview... Then, I\'ll cover... Finally, I\'ll discuss...')}</span>
            </li>
            <li>
              <code>Please feel free to ask questions at any time.</code>
              <span className="translation">{t(' - \uC5B8\uC81C\uB4E0\uC9C0 \uC9C8\uBB38\uD574 \uC8FC\uC138\uC694.', ' - Feel free to ask questions anytime.')}</span>
            </li>
            <li>
              <code>I'll be happy to answer any questions at the end.</code>
              <span className="translation">{t(' - \uB9C8\uC9C0\uB9C9\uC5D0 \uC9C8\uBB38\uC5D0 \uB2F5\uBCC0\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'ll take questions at the end.')}</span>
            </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uD504\uB85C \uD301', 'Pro Tip')}</h3>
              <p>
            {t(
              '\uC624\uD504\uB2DD\uC5D0\uC11C \uCCAB 30\uCD08\uAC00 \uCCAD\uC911\uC758 \uC9D1\uC911\uB825\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uD765\uBBF8\uB85C\uC6B4 \uD1B5\uACC4, \uC9C8\uBB38, \uB610\uB294 \uC9E7\uC740 \uC774\uC57C\uAE30\uB85C \uC2DC\uC791\uD558\uBA74 \uCCAD\uC911\uC758 \uAD00\uC2EC\uC744 \uC0AC\uB85C\uC7A1\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
              'The first 30 seconds of your opening determine the audience\'s attention. Starting with an interesting statistic, a question, or a short story can capture the audience\'s interest.'
            )}
              </p>
            </div>


            <h2 id="transition">{t('\uC804\uD658 \uD45C\uD604 (Transitions)', 'Transition Expressions')}</h2>
            <div className="example-box">
              <h4>{t('\uB2E4\uC74C \uC8FC\uC81C\uB85C \uC804\uD658', 'Moving to Next Topic')}</h4>
              <ul className="expression-list">
            <li>
              <code>Moving on to the next point...</code>
              <span className="translation">{t(' - \uB2E4\uC74C \uC694\uC810\uC73C\uB85C \uB118\uC5B4\uAC00\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let\'s move to the next point.')}</span>
            </li>
            <li>
              <code>Let me now turn to...</code>
              <span className="translation">{t(' - \uC774\uC81C ~\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.', ' - Now let me look at...')}</span>
            </li>
            <li>
              <code>This brings me to my next point...</code>
              <span className="translation">{t(' - \uC774\uAC83\uC774 \uB2E4\uC74C \uC694\uC810\uC73C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4.', ' - This leads to my next point...')}</span>
            </li>
            <li>
              <code>Now, let's take a look at...</code>
              <span className="translation">{t(' - \uC774\uC81C ~\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.', ' - Now, let\'s examine...')}</span>
            </li>
            <li>
              <code>I'd now like to shift our focus to...</code>
              <span className="translation">{t(' - \uC774\uC81C \uCD08\uC810\uC744 ~\uC73C\uB85C \uC62E\uAE30\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - I\'d like to redirect our focus to...')}</span>
            </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uC694\uC57D \uBC0F \uC5F0\uACB0', 'Summarizing & Connecting')}</h4>
              <ul className="expression-list">
            <li>
              <code>So, to recap what we've covered so far...</code>
              <span className="translation">{t(' - \uC9C0\uAE08\uAE4C\uC9C0 \uB2E4\uB8EC \uB0B4\uC6A9\uC744 \uC694\uC57D\uD558\uBA74...', ' - To summarize what we\'ve discussed...')}</span>
            </li>
            <li>
              <code>As I mentioned earlier...</code>
              <span className="translation">{t(' - \uC55E\uC11C \uB9D0\uC500\uB4DC\uB838\uB4EF\uC774...', ' - As I said before...')}</span>
            </li>
            <li>
              <code>Building on that point...</code>
              <span className="translation">{t(' - \uADF8 \uC694\uC810\uC744 \uBC14\uD0D5\uC73C\uB85C...', ' - Expanding on that point...')}</span>
            </li>
            <li>
              <code>In addition to that...</code>
              <span className="translation">{t(' - \uADF8\uC5D0 \uB354\uD574\uC11C...', ' - Furthermore...')}</span>
            </li>
              </ul>
            </div>


            <h2 id="data">{t('\uB370\uC774\uD130 \uC124\uBA85 (Describing Data)', 'Describing Data')}</h2>
            <div className="example-box">
              <h4>{t('\uCC28\uD2B8/\uADF8\uB798\uD504 \uC124\uBA85 \uD45C\uD604', 'Chart & Graph Expressions')}</h4>
              <ul className="expression-list">
            <li>
              <code>As you can see from this chart...</code>
              <span className="translation">{t(' - \uC774 \uCC28\uD2B8\uC5D0\uC11C \uBCF4\uC2DC\uB294 \uAC83\uCC98\uB7FC...', ' - As this chart shows...')}</span>
            </li>
            <li>
              <code>This graph shows/illustrates/demonstrates...</code>
              <span className="translation">{t(' - \uC774 \uADF8\uB798\uD504\uB294 ~\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.', ' - This graph shows/illustrates...')}</span>
            </li>
            <li>
              <code>If you look at the blue line, you'll notice that...</code>
              <span className="translation">{t(' - \uD30C\uB780\uC0C9 \uC120\uC744 \uBCF4\uC2DC\uBA74 ~\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.', ' - Looking at the blue line, you\'ll see that...')}</span>
            </li>
            <li>
              <code>The figures indicate a significant increase/decrease in...</code>
              <span className="translation">{t(' - \uC218\uCE58\uB294 ~\uC758 \uC0C1\uB2F9\uD55C \uC99D\uAC00/\uAC10\uC18C\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.', ' - The numbers show a significant rise/fall in...')}</span>
            </li>
            <li>
              <code>There has been a steady growth of [X]% over the past [period].</code>
              <span className="translation">{t(' - \uC9C0\uB09C [\uAE30\uAC04] \uB3D9\uC548 [X]%\uC758 \uAFB8\uC900\uD55C \uC131\uC7A5\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.', ' - There has been consistent growth of [X]% over the past [period].')}</span>
            </li>
            <li>
              <code>Sales peaked at [amount] in [month/year].</code>
              <span className="translation">{t(' - \uB9E4\uCD9C\uC774 [\uC2DC\uAE30]\uC5D0 [\uAE08\uC561]\uC73C\uB85C \uCD5C\uACE0\uCE58\uB97C \uAE30\uB85D\uD588\uC2B5\uB2C8\uB2E4.', ' - Sales reached their highest point at [amount] in [month/year].')}</span>
            </li>
            <li>
              <code>The data clearly shows a correlation between...</code>
              <span className="translation">{t(' - \uB370\uC774\uD130\uB294 ~ \uC0AC\uC774\uC758 \uC0C1\uAD00\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.', ' - The data clearly shows a connection between...')}</span>
            </li>
            <li>
              <code>What's particularly noteworthy is...</code>
              <span className="translation">{t(' - \uD2B9\uD788 \uC8FC\uBAA9\uD560 \uC810\uC740...', ' - What stands out is...')}</span>
            </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uB370\uC774\uD130 \uC124\uBA85 \uD301', 'Data Description Tip')}</h3>
              <p>
            {t(
              '\uB370\uC774\uD130\uB97C \uC124\uBA85\uD560 \uB54C\uB294 \uB2E8\uC21C\uD788 \uC22B\uC790\uB97C \uC77D\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uADF8 \uC22B\uC790\uAC00 \uC758\uBBF8\uD558\uB294 \uBC14\uB97C \uD574\uC11D\uD574 \uC8FC\uC138\uC694. "Sales increased by 25%" \uBCF4\uB2E4 "Sales increased by 25%, which means we exceeded our quarterly target by $2 million" \uCC98\uB7FC \uC758\uBBF8\uB97C \uB354\uD574\uC8FC\uC138\uC694.',
              'When describing data, don\'t just read numbers. Interpret what the numbers mean. Rather than just saying "Sales increased by 25%", add meaning: "Sales increased by 25%, which means we exceeded our quarterly target by $2 million."'
            )}
              </p>
            </div>


            <h2 id="qa">{t('\uC9C8\uC758\uC751\uB2F5 (Q&A)', 'Q&A Session')}</h2>
            <div className="example-box">
              <h4>{t('Q&A \uD575\uC2EC \uD45C\uD604', 'Q&A Key Expressions')}</h4>
              <ul className="expression-list">
            <li>
              <code>That's a great question. Let me address that.</code>
              <span className="translation">{t(' - \uC88B\uC740 \uC9C8\uBB38\uC785\uB2C8\uB2E4. \uB2F5\uBCC0\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.', ' - Great question. Let me answer that.')}</span>
            </li>
            <li>
              <code>Thank you for raising that point.</code>
              <span className="translation">{t(' - \uADF8 \uC810\uC744 \uC9C0\uC801\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.', ' - Thank you for bringing up that point.')}</span>
            </li>
            <li>
              <code>I'm glad you brought that up.</code>
              <span className="translation">{t(' - \uADF8 \uBD80\uBD84\uC744 \uC5B8\uAE09\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.', ' - I\'m glad you mentioned that.')}</span>
            </li>
            <li>
              <code>If I understand your question correctly, you're asking about...</code>
              <span className="translation">{t(' - \uC9C8\uBB38\uC744 \uC81C\uB300\uB85C \uC774\uD574\uD588\uB2E4\uBA74, ~\uC5D0 \uB300\uD574 \uBB3B\uACE0 \uACC4\uC2DC\uB294 \uAC70\uC8E0?', ' - If I understand correctly, you\'re asking about...')}</span>
            </li>
            <li>
              <code>That's beyond the scope of today's presentation, but I'd be happy to discuss it with you afterward.</code>
              <span className="translation">{t(' - \uC624\uB298 \uD504\uB808\uC820\uD14C\uC774\uC158 \uBC94\uC704 \uBC16\uC758 \uB0B4\uC6A9\uC774\uC9C0\uB9CC, \uB098\uC911\uC5D0 \uAE30\uAEBC\uC774 \uB17C\uC758\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - That\'s outside today\'s scope, but I\'d be happy to discuss it later.')}</span>
            </li>
            <li>
              <code>I don't have that information at hand, but I'll get back to you on that.</code>
              <span className="translation">{t(' - \uC9C0\uAE08 \uADF8 \uC815\uBCF4\uAC00 \uC5C6\uC9C0\uB9CC, \uD655\uC778 \uD6C4 \uC54C\uB824\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.', ' - I don\'t have that right now, but I\'ll follow up.')}</span>
            </li>
            <li>
              <code>Does that answer your question?</code>
              <span className="translation">{t(' - \uB2F5\uBCC0\uC774 \uB418\uC5C8\uC2B5\uB2C8\uAE4C?', ' - Does that address your question?')}</span>
            </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('Q&A \uB300\uCC98 \uD301', 'Q&A Handling Tip')}</h3>
              <p>
            {t(
              '\uBAA8\uB974\uB294 \uC9C8\uBB38\uC744 \uBC1B\uC558\uC744 \uB54C \uB2F9\uD669\uD558\uC9C0 \uB9C8\uC138\uC694. "That\'s an excellent question. I\'ll need to look into that further and get back to you." \uB77C\uACE0 \uC815\uC9C1\uD558\uAC8C \uB2F5\uBCC0\uD558\uB294 \uAC83\uC774 \uC798\uBABB\uB41C \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uB294 \uAC83\uBCF4\uB2E4 \uD6E8\uC52C \uD504\uB85C\uD398\uC154\uB110\uD569\uB2C8\uB2E4.',
              'Don\'t panic when you receive a question you can\'t answer. Saying "That\'s an excellent question. I\'ll need to look into that further and get back to you." is much more professional than providing incorrect information.'
            )}
              </p>
            </div>


            <h2 id="closing">{t('\uB9C8\uBB34\uB9AC (Closing)', 'Closing')}</h2>
            <div className="example-box">
              <h4>{t('\uB9C8\uBB34\uB9AC \uD575\uC2EC \uD45C\uD604', 'Closing Key Expressions')}</h4>
              <ul className="expression-list">
            <li>
              <code>To summarize the main points of my presentation...</code>
              <span className="translation">{t(' - \uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uC8FC\uC694 \uC694\uC810\uC744 \uC694\uC57D\uD558\uBA74...', ' - Let me summarize the key points...')}</span>
            </li>
            <li>
              <code>In conclusion, I'd like to emphasize that...</code>
              <span className="translation">{t(' - \uACB0\uB860\uC801\uC73C\uB85C, ~\uC744 \uAC15\uC870\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - In closing, I want to stress that...')}</span>
            </li>
            <li>
              <code>Let me leave you with this thought...</code>
              <span className="translation">{t(' - \uC774 \uC0DD\uAC01\uC744 \uB0A8\uAE30\uBA70 \uB9C8\uCE58\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'d like to leave you with this thought...')}</span>
            </li>
            <li>
              <code>The key takeaway from today's presentation is...</code>
              <span className="translation">{t(' - \uC624\uB298 \uD504\uB808\uC820\uD14C\uC774\uC158\uC758 \uD575\uC2EC \uC694\uC810\uC740...', ' - The main point from today\'s presentation is...')}</span>
            </li>
            <li>
              <code>Thank you for your attention. I'm happy to take any questions.</code>
              <span className="translation">{t(' - \uACBD\uCCAD\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uC9C8\uBB38 \uBC1B\uACA0\uC2B5\uB2C8\uB2E4.', ' - Thank you for listening. I\'ll take any questions.')}</span>
            </li>
              </ul>
            </div>


            <h2 id="script">{t('\uD504\uB808\uC820\uD14C\uC774\uC158 \uC2A4\uD06C\uB9BD\uD2B8 \uC608\uC2DC', 'Full Presentation Script Example')}</h2>
            <div className="example-box">
              <h4>{t('\uC8FC\uC81C: 2026\uB144 \uB514\uC9C0\uD138 \uB9C8\uCF00\uD305 \uC804\uB7B5', 'Topic: 2026 Digital Marketing Strategy')}</h4>
              <div className="dialogue">
            <p><span className="speaker a">Presenter:</span> Good morning, everyone. Thank you for taking the time to be here today. My name is Kim Minji, and I'm the Head of Digital Marketing at TechWave Solutions.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> Today, I'd like to present our digital marketing strategy for 2026. I've divided my presentation into three parts: first, a review of our 2025 performance; second, the key market trends we need to address; and third, our proposed strategy and budget for the coming year.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> Let's begin with our 2025 performance. As you can see from this chart, our digital ad spending increased by 15% compared to the previous year. More importantly, our return on ad spend improved from 3.2x to 4.1x, which demonstrates the effectiveness of our targeted approach.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> Moving on to market trends. The data clearly shows a significant shift toward short-form video content. Platforms like TikTok and Instagram Reels have seen a 40% increase in engagement rates over the past year.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> This brings me to our proposed strategy. We recommend allocating 60% of our digital budget to video content creation, with a focus on platforms where our target demographic is most active.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> To summarize, our 2025 results exceeded expectations, market trends point toward video-first content strategies, and our 2026 plan positions us to capitalize on these trends. The key takeaway is: investing in video content now will give us a competitive advantage for years to come.</p>
            <br />
            <p><span className="speaker a">Presenter:</span> Thank you for your attention. I'd be happy to take any questions.</p>
              </div>
            </div>


            <div className="exercise-box">

            <h3>{t('\uC5F0\uC2B5 \uBB38\uC81C (Practice)', 'Practice')}</h3>

            <div className="example-box">
              <h4>{t('\uC5F0\uC2B5 1: \uBE48\uCE78 \uCC44\uC6B0\uAE30', 'Exercise 1: Fill in the Blanks')}</h4>
              <p>{t('\uC801\uC808\uD55C \uD45C\uD604\uC744 \uCC44\uC6CC \uD504\uB808\uC820\uD14C\uC774\uC158\uC744 \uC644\uC131\uD558\uC138\uC694.', 'Complete the presentation with appropriate expressions.')}</p>
              <ol>
            <li>"Good afternoon, everyone. ________ for being here today." {t('(\uCC38\uC11D\uC5D0 \uB300\uD55C \uAC10\uC0AC)', '(Thank for attendance)')}</li>
            <li>"________ my presentation into four sections." {t('(\uBC1C\uD45C \uAD6C\uC870 \uC548\uB0B4)', '(Structure overview)')}</li>
            <li>"________ this graph, our revenue grew by 30%." {t('(\uADF8\uB798\uD504 \uCC38\uC870)', '(Refer to graph)')}</li>
            <li>"________ the next topic, which is our expansion plan." {t('(\uC804\uD658)', '(Transition)')}</li>
            <li>"________, our three priorities are: innovation, efficiency, and customer satisfaction." {t('(\uC694\uC57D)', '(Summary)')}</li>
              </ol>
            </div>

            <button
              className="btn btn--primary"
              onClick={() => setShowAnswers(!showAnswers)}
            >
              {showAnswers
            ? t('\uBAA8\uBC94 \uB2F5\uC548 \uC228\uAE30\uAE30', 'Hide Sample Answers')
            : t('\uBAA8\uBC94 \uB2F5\uC548 \uBCF4\uAE30', 'Show Sample Answers')
              }
            </button>

            {showAnswers && (
              <div className="example-box">
            <h4>{t('\uBAA8\uBC94 \uB2F5\uC548', 'Sample Answers')}</h4>
            <ol>
              <li><code>Thank you</code> for being here today.</li>
              <li><code>I've divided</code> my presentation into four sections.</li>
              <li><code>As you can see from</code> this graph, our revenue grew by 30%.</li>
              <li><code>Let me now turn to</code> the next topic, which is our expansion plan.</li>
              <li><code>To summarize</code>, our three priorities are: innovation, efficiency, and customer satisfaction.</li>
            </ol>
              </div>
            )}

            <div className="example-box">
              <h4>{t('\uC5F0\uC2B5 2: \uBBF8\uB2C8 \uD504\uB808\uC820\uD14C\uC774\uC158 \uC791\uC131', 'Exercise 2: Write a Mini Presentation')}</h4>
              <p>
            {t(
              '\uB2E4\uC74C \uC8FC\uC81C\uB85C 2\uBD84 \uD504\uB808\uC820\uD14C\uC774\uC158 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC791\uC131\uD574 \uBCF4\uC138\uC694: "\uC6B0\uB9AC \uD68C\uC0AC\uC758 \uC0C8\uB85C\uC6B4 \uBAA8\uBC14\uC77C \uC571 \uCD9C\uC2DC". Opening, \uC8FC\uC694 \uAE30\uB2A5 2-3\uAC00\uC9C0 \uC124\uBA85, Closing\uC744 \uD3EC\uD568\uD558\uC138\uC694.',
              'Write a 2-minute presentation script on: "Launch of Our Company\'s New Mobile App". Include an Opening, 2-3 key feature descriptions, and a Closing.'
            )}
              </p>
            </div>

            </div>


            <div className="lesson-nav">
              <Link to="/business/email" className="lesson-nav-btn prev">{t('← 이메일 작성', '← Email Writing')}</Link>
              <Link to="/business/meeting" className="lesson-nav-btn next">{t('회의 영어 →', 'Meeting English →')}</Link>
            </div>
          </div>
      </PageLayout>
    </>
  );
}

export default Presentation;
