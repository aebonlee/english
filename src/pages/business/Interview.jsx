import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import PageLayout from '../../components/PageLayout';

function Interview() {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  const sections = [
    { id: 'selfintro', ko: '자기소개', en: 'Self-Intro' },
    { id: 'strengths', ko: '장단점', en: 'Strengths' },
    { id: 'experience', ko: '경력 설명', en: 'Experience' },
    { id: 'star', ko: 'STAR 방법', en: 'STAR Method' },
    { id: 'questions', ko: '면접관 질문', en: 'Questions' },
    { id: 'salary', ko: '연봉 협상', en: 'Salary' },
    { id: 'examples', ko: 'Q&A 예시', en: 'Q&A Examples' },
  ];

  return (
    <>
      <SEOHead
        title={t(
          '면접 영어 - English Pro',
          'Job Interview English - English Pro'
        )}
        description={t(
          '영어 면접의 자기소개, 경력 설명, 장단점, 연봉 협상 핵심 표현을 학습합니다.',
          'Learn key expressions for English interviews: self-introduction, experience, strengths/weaknesses, and salary negotiation.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/business">{t('비즈니스', 'Business')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('면접 영어', 'Interview')}</span>
          </div>
          <h1 className="page-header__title">{t('면접 영어', 'Job Interview')}</h1>
          <p className="page-header__description">
            {t(
              '영어 면접을 자신 있게 준비하기 위한 핵심 표현과 전략을 배워보세요.',
              'Learn key expressions and strategies to confidently prepare for English interviews.'
            )}
          </p>
        </div>
      </section>

      <SubNav category="business" />
      <PageLayout sections={sections}>
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('학습 목표', 'Learning Objectives')}</h3>
              <ul>
                <li>{t('면접 자기소개를 간결하고 인상적으로 준비하는 방법을 배웁니다.', 'Learn how to prepare a concise and impressive self-introduction.')}</li>
                <li>{t('장점과 단점을 전략적으로 표현하는 방법을 익힙니다.', 'Learn strategic ways to express strengths and weaknesses.')}</li>
                <li>{t('경력을 구체적인 성과와 함께 설명하는 표현을 학습합니다.', 'Learn expressions to describe your experience with specific achievements.')}</li>
                <li>{t('STAR 방법을 활용한 행동 기반 질문 답변법을 배웁니다.', 'Learn how to answer behavioral questions using the STAR method.')}</li>
                <li>{t('면접관에게 할 질문과 연봉 협상 표현을 습득합니다.', 'Master questions to ask interviewers and salary negotiation expressions.')}</li>
              </ul>
            </div>
    {/* Section 1: Self-Introduction */}

            <h2 id="selfintro">{t('\uC790\uAE30\uC18C\uAC1C (Self-Introduction)', 'Self-Introduction')}</h2>
            <p>
              {t(
                '\uBA74\uC811\uC758 \uCCAB \uC778\uC0C1\uC744 \uACB0\uC815\uD558\uB294 \uC790\uAE30\uC18C\uAC1C\uB294 \uAC04\uACB0\uD558\uBA74\uC11C\uB3C4 \uC778\uC0C1 \uAE4A\uAC8C \uC900\uBE44\uD574\uC57C \uD569\uB2C8\uB2E4. 1-2\uBD84 \uB0B4\uB85C \uC815\uB9AC\uD558\uC138\uC694.',
                'Your self-introduction determines the first impression. Keep it concise yet impactful, within 1-2 minutes.'
              )}
            </p>
            <div className="example-box">
              <h4>{t('\uC790\uAE30\uC18C\uAC1C \uD575\uC2EC \uD45C\uD604', 'Self-Introduction Key Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Thank you for this opportunity. Let me tell you a little about myself.</code>
                  <span className="translation">{t(' - \uC774\uB7F0 \uAE30\uD68C\uB97C \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uC81C \uC18C\uAC1C\uB97C \uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Thank you for this chance. Let me introduce myself.')}</span>
                </li>
                <li>
                  <code>I have [X] years of experience in [field].</code>
                  <span className="translation">{t(' - [\uBD84\uC57C]\uC5D0\uC11C [X]\uB144\uC758 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.', ' - I have [X] years of experience in [field].')}</span>
                </li>
                <li>
                  <code>I graduated from [university] with a degree in [major].</code>
                  <span className="translation">{t(' - [\uB300\uD559\uAD50]\uC5D0\uC11C [\uC804\uACF5] \uD559\uC704\uB97C \uCDE8\uB4DD\uD588\uC2B5\uB2C8\uB2E4.', ' - I earned a degree in [major] from [university].')}</span>
                </li>
                <li>
                  <code>Currently, I work as a [position] at [company].</code>
                  <span className="translation">{t(' - \uD604\uC7AC [\uD68C\uC0AC]\uC5D0\uC11C [\uC9C1\uC704]\uB85C \uADFC\uBB34\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.', ' - I currently work as a [position] at [company].')}</span>
                </li>
                <li>
                  <code>What excites me about this role is...</code>
                  <span className="translation">{t(' - \uC774 \uC9C1\uBB34\uC5D0 \uB300\uD574 \uD2B9\uD788 \uD765\uBBF8\uB85C\uC6B4 \uC810\uC740...', ' - What appeals to me about this position is...')}</span>
                </li>
                <li>
                  <code>I'm particularly drawn to your company because...</code>
                  <span className="translation">{t(' - \uADC0\uC0AC\uC5D0 \uD2B9\uD788 \uB04C\uB9AC\uB294 \uC774\uC720\uB294...', ' - I\'m especially interested in your company because...')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uC790\uAE30\uC18C\uAC1C \uC608\uC2DC', 'Self-Introduction Example')}</h4>
              <div className="dialogue">
                <p><span className="speaker a">Candidate:</span> Thank you for this opportunity. Let me tell you a little about myself. My name is Lee Jihye, and I have 5 years of experience in digital marketing, specializing in social media strategy and content creation.</p>
                <p><span className="speaker a">Candidate:</span> I graduated from Yonsei University with a degree in Business Administration, and I also hold a Google Analytics certification. Currently, I work as a Senior Marketing Specialist at TechStart Korea, where I've led campaigns that increased our social media engagement by 150% over the past two years.</p>
                <p><span className="speaker a">Candidate:</span> What excites me about this role at your company is the opportunity to work on global campaigns. I'm particularly drawn to your company because of your commitment to innovation and your impressive track record in the APAC market.</p>
              </div>
            </div>

            <div className="tip-box">
              <h3>{t('\uC790\uAE30\uC18C\uAC1C \uD301', 'Self-Introduction Tip')}</h3>
              <p>
                {t(
                  '\uC790\uAE30\uC18C\uAC1C\uB294 "\uD604\uC7AC - \uACFC\uAC70 - \uBBF8\uB798" \uAD6C\uC870\uB85C \uC900\uBE44\uD558\uC138\uC694. \uD604\uC7AC \uD558\uACE0 \uC788\uB294 \uC77C, \uACFC\uAC70 \uACBD\uD5D8\uACFC \uC131\uACFC, \uADF8\uB9AC\uACE0 \uC774 \uD68C\uC0AC\uC5D0\uC11C \uC774\uB8E8\uACE0 \uC2F6\uC740 \uBAA9\uD45C\uB97C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC5F0\uACB0\uD558\uC138\uC694. \uAD6C\uCCB4\uC801\uC778 \uC22B\uC790\uC640 \uC131\uACFC\uB97C \uD3EC\uD568\uD558\uBA74 \uB354\uC6B1 \uC778\uC0C1\uC801\uC785\uB2C8\uB2E4.',
                  'Structure your self-introduction as "Present - Past - Future." Connect what you do now, your past experience and achievements, and your goals at this company. Including specific numbers and results makes it more impressive.'
                )}
              </p>
            </div>

          {/* Section 2: Strengths & Weaknesses */}

            <h2 id="strengths">{t('\uC7A5\uC810 & \uB2E8\uC810 (Strengths & Weaknesses)', 'Strengths & Weaknesses')}</h2>
            <div className="example-box">
              <h4>{t('\uC7A5\uC810 \uD45C\uD604', 'Expressing Strengths')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I'd say my greatest strength is my ability to...</code>
                  <span className="translation">{t(' - \uC81C \uAC00\uC7A5 \uD070 \uC7A5\uC810\uC740 ~\uD558\uB294 \uB2A5\uB825\uC774\uB77C\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.', ' - I think my biggest strength is my ability to...')}</span>
                </li>
                <li>
                  <code>I'm known for being detail-oriented and organized.</code>
                  <span className="translation">{t(' - \uC800\uB294 \uC138\uC2EC\uD558\uACE0 \uCCB4\uACC4\uC801\uC778 \uAC83\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4.', ' - I\'m recognized for being meticulous and well-organized.')}</span>
                </li>
                <li>
                  <code>One of my key strengths is my adaptability.</code>
                  <span className="translation">{t(' - \uC81C \uC8FC\uC694 \uC7A5\uC810 \uC911 \uD558\uB098\uB294 \uC801\uC751\uB825\uC785\uB2C8\uB2E4.', ' - A key strength of mine is adaptability.')}</span>
                </li>
                <li>
                  <code>I thrive under pressure and enjoy meeting tight deadlines.</code>
                  <span className="translation">{t(' - \uC555\uBC15 \uC18D\uC5D0\uC11C \uB2A5\uB825\uC744 \uBC1C\uD718\uD558\uBA70 \uBE61\uBE61\uD55C \uB9C8\uAC10\uC77C\uC744 \uB9DE\uCD94\uB294 \uAC83\uC744 \uC990\uAE41\uB2C8\uB2E4.', ' - I perform well under pressure and enjoy tight deadlines.')}</span>
                </li>
                <li>
                  <code>Colleagues often describe me as a strong communicator and team player.</code>
                  <span className="translation">{t(' - \uB3D9\uB8CC\uB4E4\uC740 \uC800\uB97C \uB6F0\uC5B4\uB09C \uCEE4\uBBA4\uB2C8\uCF00\uC774\uD130\uC774\uC790 \uD300 \uD50C\uB808\uC774\uC5B4\uB77C\uACE0 \uD3C9\uAC00\uD569\uB2C8\uB2E4.', ' - My colleagues see me as a strong communicator and team player.')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uB2E8\uC810 \uD45C\uD604 (\uAC1C\uC120 \uC911\uC2EC\uC73C\uB85C)', 'Expressing Weaknesses (Focus on Improvement)')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I used to struggle with [weakness], but I've been working on it by...</code>
                  <span className="translation">{t(' - \uC608\uC804\uC5D0\uB294 ~\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uC5C8\uC9C0\uB9CC, ~\uD558\uBA70 \uAC1C\uC120\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.', ' - I used to have difficulty with..., but I\'ve been improving by...')}</span>
                </li>
                <li>
                  <code>One area I'm actively working to improve is...</code>
                  <span className="translation">{t(' - \uC801\uADF9\uC801\uC73C\uB85C \uAC1C\uC120\uD558\uACE0 \uC788\uB294 \uBD80\uBD84\uC740...', ' - An area I\'m actively improving is...')}</span>
                </li>
                <li>
                  <code>I tend to be a perfectionist, which means I sometimes spend too much time on details. I've learned to set time limits for tasks to manage this.</code>
                  <span className="translation">{t(' - \uC644\uBCBD\uC8FC\uC758\uC801 \uC131\uD5A5\uC774 \uC788\uC5B4 \uC138\uBD80 \uC0AC\uD56D\uC5D0 \uC2DC\uAC04\uC744 \uB9CE\uC774 \uC4F0\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC774\uB97C \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 \uC5C5\uBB34\uC5D0 \uC2DC\uAC04 \uC81C\uD55C\uC744 \uB450\uB294 \uBC29\uBC95\uC744 \uBC30\uC6E0\uC2B5\uB2C8\uB2E4.', ' - I can be a perfectionist, spending too much time on details. I\'ve learned to set time limits to manage this.')}</span>
                </li>
                <li>
                  <code>Public speaking was a challenge for me, so I joined Toastmasters and have significantly improved my presentation skills.</code>
                  <span className="translation">{t(' - \uB300\uC911 \uC55E\uC5D0\uC11C \uBC1C\uD45C\uD558\uB294 \uAC83\uC774 \uC5B4\uB824\uC6E0\uC9C0\uB9CC, Toastmasters\uC5D0 \uAC00\uC785\uD558\uC5EC \uD504\uB808\uC820\uD14C\uC774\uC158 \uC2A4\uD0AC\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uCF30\uC2B5\uB2C8\uB2E4.', ' - Public speaking was hard for me, so I joined Toastmasters and greatly improved.')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uB2E8\uC810 \uB2F5\uBCC0 \uD301', 'Weakness Answer Tip')}</h3>
              <p>
                {t(
                  '\uB2E8\uC810\uC744 \uB9D0\uD560 \uB54C\uB294 \uBC18\uB4DC\uC2DC \uAC1C\uC120 \uB178\uB825\uC744 \uD568\uAED8 \uC5B8\uAE09\uD558\uC138\uC694. "I have no weaknesses" \uAC19\uC740 \uB2F5\uBCC0\uC740 \uC790\uAE30 \uC778\uC2DD\uC774 \uBD80\uC871\uD558\uB2E4\uB294 \uC778\uC0C1\uC744 \uC90D\uB2C8\uB2E4. \uB610\uD55C "\uC9C0\uAC01\uC744 \uC790\uC8FC \uD569\uB2C8\uB2E4" \uAC19\uC740 \uC5C5\uBB34 \uD0DC\uB3C4 \uAD00\uB828 \uB2E8\uC810\uC740 \uD53C\uD558\uC138\uC694.',
                  'When discussing weaknesses, always mention improvement efforts. Answers like "I have no weaknesses" suggest poor self-awareness. Also avoid mentioning work ethic issues like "I\'m often late."'
                )}
              </p>
            </div>

          {/* Section 3: Experience Description */}

            <h2 id="experience">{t('\uACBD\uB825 \uC124\uBA85 (Experience Description)', 'Experience Description')}</h2>
            <div className="example-box">
              <h4>{t('\uACBD\uB825 \uC124\uBA85 \uD45C\uD604', 'Experience Description Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>In my previous role, I was responsible for...</code>
                  <span className="translation">{t(' - \uC774\uC804 \uC9C1\uC7A5\uC5D0\uC11C \uC800\uB294 ~\uC744 \uB2F4\uB2F9\uD588\uC2B5\uB2C8\uB2E4.', ' - In my last position, I was in charge of...')}</span>
                </li>
                <li>
                  <code>I managed a team of [X] people.</code>
                  <span className="translation">{t(' - [X]\uBA85\uC758 \uD300\uC744 \uAD00\uB9AC\uD588\uC2B5\uB2C8\uB2E4.', ' - I led a team of [X] people.')}</span>
                </li>
                <li>
                  <code>I successfully delivered a project that resulted in...</code>
                  <span className="translation">{t(' - ~\uC758 \uACB0\uACFC\uB97C \uAC00\uC838\uC628 \uD504\uB85C\uC81D\uD2B8\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC218\uD589\uD588\uC2B5\uB2C8\uB2E4.', ' - I completed a project that led to...')}</span>
                </li>
                <li>
                  <code>One of my key achievements was increasing [metric] by [X]%.</code>
                  <span className="translation">{t(' - \uC8FC\uC694 \uC131\uACFC \uC911 \uD558\uB098\uB294 [\uC9C0\uD45C]\uB97C [X]% \uD5A5\uC0C1\uC2DC\uD0A8 \uAC83\uC785\uB2C8\uB2E4.', ' - A key achievement was improving [metric] by [X]%.')}</span>
                </li>
                <li>
                  <code>I played a key role in developing/launching...</code>
                  <span className="translation">{t(' - ~\uC758 \uAC1C\uBC1C/\uCD9C\uC2DC\uC5D0 \uD575\uC2EC\uC801\uC778 \uC5ED\uD560\uC744 \uD588\uC2B5\uB2C8\uB2E4.', ' - I played a central role in developing/launching...')}</span>
                </li>
                <li>
                  <code>I collaborated with cross-functional teams to deliver...</code>
                  <span className="translation">{t(' - \uD0C0 \uBD80\uC11C \uD300\uACFC \uD611\uC5C5\uD558\uC5EC ~\uC744 \uB2EC\uC131\uD588\uC2B5\uB2C8\uB2E4.', ' - I worked with cross-functional teams to achieve...')}</span>
                </li>
              </ul>
            </div>

          {/* Section 4: STAR Method */}

            <h2 id="star">{t('STAR 방법 (Tell me about a time when...)', 'STAR Method (Tell me about a time when...)')}</h2>
            <p>
              {t(
                '\uD589\uB3D9 \uAE30\uBC18 \uC9C8\uBB38\uC5D0\uB294 STAR \uBC29\uBC95\uC73C\uB85C \uB2F5\uBCC0\uD558\uC138\uC694: Situation(\uC0C1\uD669), Task(\uACFC\uC81C), Action(\uD589\uB3D9), Result(\uACB0\uACFC)',
                'Answer behavioral questions using the STAR method: Situation, Task, Action, Result'
              )}
            </p>
            <div className="example-box">
              <h4>{t('STAR \uBC29\uBC95 \uD45C\uD604', 'STAR Method Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code><strong>Situation:</strong> In my previous role at [company], we faced a situation where...</code>
                  <span className="translation">{t(' - \uC774\uC804 \uC9C1\uC7A5\uC5D0\uC11C ~\uD55C \uC0C1\uD669\uC5D0 \uCC98\uD588\uC2B5\uB2C8\uB2E4.', ' - At my previous company, we encountered a situation where...')}</span>
                </li>
                <li>
                  <code><strong>Task:</strong> My responsibility was to...</code>
                  <span className="translation">{t(' - \uC81C \uC5ED\uD560\uC740 ~\uD558\uB294 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4.', ' - My job was to...')}</span>
                </li>
                <li>
                  <code><strong>Action:</strong> I took the initiative to... / I decided to...</code>
                  <span className="translation">{t(' - \uC800\uB294 \uC8FC\uB3C4\uC801\uC73C\uB85C ~\uD588\uC2B5\uB2C8\uB2E4. / ~\uD558\uAE30\uB85C \uACB0\uC815\uD588\uC2B5\uB2C8\uB2E4.', ' - I proactively... / I decided to...')}</span>
                </li>
                <li>
                  <code><strong>Result:</strong> As a result, we achieved... / This led to a [X]% improvement in...</code>
                  <span className="translation">{t(' - \uADF8 \uACB0\uACFC, ~\uC744 \uB2EC\uC131\uD588\uC2B5\uB2C8\uB2E4. / ~\uC5D0\uC11C [X]%\uC758 \uAC1C\uC120\uC744 \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4.', ' - As a result, we achieved... / This resulted in [X]% improvement in...')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('STAR \uBC29\uBC95 \uC608\uC2DC \uB2F5\uBCC0', 'STAR Method Example Answer')}</h4>
              <p><strong>Q: "Tell me about a time when you had to deal with a difficult team member."</strong></p>
              <div className="dialogue">
                <p><span className="speaker a">Candidate:</span> <strong>(Situation)</strong> In my previous role at TechStart, I was leading a cross-functional project, and one team member consistently missed deadlines, which was affecting the entire team's progress.</p>
                <p><span className="speaker a">Candidate:</span> <strong>(Task)</strong> As the project lead, it was my responsibility to address the issue while maintaining team morale.</p>
                <p><span className="speaker a">Candidate:</span> <strong>(Action)</strong> I scheduled a private one-on-one meeting with the team member to understand the root cause. I discovered they were overwhelmed with multiple projects. I worked with their direct manager to redistribute some of their workload and set up weekly check-ins to provide support.</p>
                <p><span className="speaker a">Candidate:</span> <strong>(Result)</strong> As a result, the team member's performance improved significantly, and we completed the project on time. The approach also strengthened trust within the team.</p>
              </div>
            </div>

          {/* Section 5: Questions to Ask */}

            <h2 id="questions">{t('\uBA74\uC811\uAD00\uC5D0\uAC8C \uD560 \uC9C8\uBB38 (Questions to Ask)', 'Questions to Ask the Interviewer')}</h2>
            <div className="example-box">
              <h4>{t('\uCD94\uCC9C \uC9C8\uBB38 \uBAA9\uB85D', 'Recommended Questions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>What does a typical day look like in this role?</code>
                  <span className="translation">{t(' - \uC774 \uC9C1\uBB34\uC758 \uC77C\uBC18\uC801\uC778 \uD558\uB8E8\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?', ' - What does a normal day in this role look like?')}</span>
                </li>
                <li>
                  <code>What are the biggest challenges facing the team right now?</code>
                  <span className="translation">{t(' - \uD604\uC7AC \uD300\uC774 \uC9C1\uBA74\uD55C \uAC00\uC7A5 \uD070 \uACFC\uC81C\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?', ' - What major challenges does the team face currently?')}</span>
                </li>
                <li>
                  <code>How do you measure success in this position?</code>
                  <span className="translation">{t(' - \uC774 \uC9C1\uBB34\uC758 \uC131\uACF5\uC744 \uC5B4\uB5BB\uAC8C \uCE21\uC815\uD558\uB098\uC694?', ' - How is success measured for this position?')}</span>
                </li>
                <li>
                  <code>What opportunities for professional development does the company offer?</code>
                  <span className="translation">{t(' - \uD68C\uC0AC\uC5D0\uC11C \uC5B4\uB5A4 \uC804\uBB38\uC131 \uAC1C\uBC1C \uAE30\uD68C\uB97C \uC81C\uACF5\uD558\uB098\uC694?', ' - What professional growth opportunities are available?')}</span>
                </li>
                <li>
                  <code>Can you tell me about the team I'd be working with?</code>
                  <span className="translation">{t(' - \uD568\uAED8 \uC77C\uD558\uAC8C \uB420 \uD300\uC5D0 \uB300\uD574 \uC54C\uB824\uC8FC\uC2E4 \uC218 \uC788\uB098\uC694?', ' - Could you tell me about the team I\'d join?')}</span>
                </li>
                <li>
                  <code>What is the company culture like here?</code>
                  <span className="translation">{t(' - \uC774 \uD68C\uC0AC\uC758 \uBB38\uD654\uB294 \uC5B4\uB5A4\uAC00\uC694?', ' - What\'s the company culture like?')}</span>
                </li>
                <li>
                  <code>What are the next steps in the interview process?</code>
                  <span className="translation">{t(' - \uBA74\uC811 \uD504\uB85C\uC138\uC2A4\uC758 \uB2E4\uC74C \uB2E8\uACC4\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?', ' - What comes next in the hiring process?')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uC9C8\uBB38 \uD301', 'Question Tip')}</h3>
              <p>
                {t(
                  '\uBA74\uC811\uAD00\uC5D0\uAC8C \uC9C8\uBB38\uD558\uB294 \uAC83\uC740 \uD574\uB2F9 \uC9C1\uBB34\uC640 \uD68C\uC0AC\uC5D0 \uB300\uD55C \uC9C4\uC9C0\uD55C \uAD00\uC2EC\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uCD5C\uC18C 2-3\uAC1C\uC758 \uC9C8\uBB38\uC744 \uC900\uBE44\uD558\uC138\uC694. \uB2E8, \uAE09\uC5EC, \uD734\uAC00, \uBCF5\uB9AC\uD6C4\uC0DD \uAC19\uC740 \uC9C8\uBB38\uC740 \uCCAB \uBA74\uC811\uC5D0\uC11C\uB294 \uD53C\uD558\uC138\uC694.',
                  'Asking the interviewer questions shows genuine interest in the role and company. Prepare at least 2-3 questions. However, avoid asking about salary, vacation, or benefits in the first interview.'
                )}
              </p>
            </div>

          {/* Section 6: Salary Negotiation */}

            <h2 id="salary">{t('\uC5F0\uBD09 \uD611\uC0C1 (Salary Negotiation)', 'Salary Negotiation')}</h2>
            <div className="example-box">
              <h4>{t('\uC5F0\uBD09 \uD611\uC0C1 \uD45C\uD604', 'Salary Negotiation Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Based on my experience and market research, I'm looking for a salary in the range of...</code>
                  <span className="translation">{t(' - \uC81C \uACBD\uD5D8\uACFC \uC2DC\uC7A5 \uC870\uC0AC\uB97C \uBC14\uD0D5\uC73C\uB85C ~ \uBC94\uC704\uC758 \uC5F0\uBD09\uC744 \uD76C\uB9DD\uD569\uB2C8\uB2E4.', ' - Based on my experience and research, I\'m targeting a salary range of...')}</span>
                </li>
                <li>
                  <code>I'd prefer to discuss the total compensation package rather than just the base salary.</code>
                  <span className="translation">{t(' - \uAE30\uBCF8 \uAE09\uC5EC\uBCF4\uB2E4\uB294 \uCD1D \uBCF4\uC0C1 \uD328\uD0A4\uC9C0\uB97C \uB17C\uC758\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - I\'d like to discuss total compensation, not just base salary.')}</span>
                </li>
                <li>
                  <code>Is there room for negotiation on the salary?</code>
                  <span className="translation">{t(' - \uC5F0\uBD09 \uD611\uC0C1\uC758 \uC5EC\uC9C0\uAC00 \uC788\uB098\uC694?', ' - Is there flexibility on the salary?')}</span>
                </li>
                <li>
                  <code>I'm very excited about this opportunity. Given my qualifications, I believe [amount] would be appropriate.</code>
                  <span className="translation">{t(' - \uC774 \uAE30\uD68C\uC5D0 \uB9E4\uC6B0 \uAE30\uBED0\uB2C8\uB2E4. \uC81C \uC790\uACA9\uC744 \uACE0\uB824\uD558\uBA74 [\uAE08\uC561]\uC774 \uC801\uC808\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.', ' - I\'m thrilled about this role. Given my qualifications, I believe [amount] is fair.')}</span>
                </li>
                <li>
                  <code>What is the salary range budgeted for this position?</code>
                  <span className="translation">{t(' - \uC774 \uC9C1\uBB34\uC5D0 \uCC45\uC815\uB41C \uC5F0\uBD09 \uBC94\uC704\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?', ' - What\'s the budgeted salary range for this role?')}</span>
                </li>
                <li>
                  <code>I'm confident I can bring significant value to this role, and I'd like the compensation to reflect that.</code>
                  <span className="translation">{t(' - \uC774 \uC9C1\uBB34\uC5D0 \uC0C1\uB2F9\uD55C \uAC00\uCE58\uB97C \uAC00\uC838\uB2E4 \uC904 \uC218 \uC788\uB2E4\uACE0 \uD655\uC2E0\uD558\uBA70, \uBCF4\uC0C1\uC5D0 \uC774\uB97C \uBC18\uC601\uD574 \uC8FC\uC2DC\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'m sure I can add great value, and I\'d like the compensation to reflect that.')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uC5F0\uBD09 \uD611\uC0C1 \uD301', 'Salary Negotiation Tip')}</h3>
              <p>
                {t(
                  '\uC5F0\uBD09 \uC9C8\uBB38\uC744 \uBC1B\uC73C\uBA74 \uBC14\uB85C \uC22B\uC790\uB97C \uB9D0\uD558\uAE30\uBCF4\uB2E4 \uBC94\uC704\uB97C \uC81C\uC2DC\uD558\uC138\uC694. \uC0AC\uC804\uC5D0 \uC2DC\uC7A5 \uC870\uC0AC\uB97C \uD558\uACE0, \uC790\uC2E0\uC758 \uACBD\uD5D8\uACFC \uB2A5\uB825\uC744 \uADFC\uAC70\uB85C \uC81C\uC2DC\uD558\uC138\uC694. \uD574\uC678 \uAE30\uC5C5\uC758 \uACBD\uC6B0 \uAE30\uBCF8\uAE09 \uC678\uC5D0 \uBCF4\uB108\uC2A4, \uC2A4\uD1A1\uC635\uC158, \uBCF5\uB9AC\uD6C4\uC0DD \uB4F1 \uCD1D \uBCF4\uC0C1 \uD328\uD0A4\uC9C0\uB97C \uD568\uAED8 \uACE0\uB824\uD558\uC138\uC694.',
                  'When asked about salary, give a range rather than a specific number. Do market research beforehand and justify with your experience and skills. For international companies, consider the total compensation package including bonus, stock options, and benefits, not just base salary.'
                )}
              </p>
            </div>

          {/* Section 7: Example Interview Q&A */}

            <h2 id="examples">{t('\uBA74\uC811 Q&A \uC608\uC2DC (10+ \uC9C8\uBB38)', 'Interview Q&A Examples (10+ Questions)')}</h2>

            <div className="example-box">
              <h4>Q1: "Tell me about yourself."</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> Thank you for asking. I'm a marketing professional with 6 years of experience in B2B tech companies. I specialize in content marketing and demand generation. In my current role at Digital Solutions Inc., I've helped grow our pipeline by 200% through strategic content initiatives. I'm excited about this opportunity because your company is at the forefront of AI technology, which aligns perfectly with my passion for innovative tech marketing.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q2: "Why do you want to work here?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I've been following your company's growth for the past two years, and I'm genuinely impressed by your commitment to sustainability and innovation. Your recent expansion into the Asian market is particularly exciting to me because I have extensive experience in cross-cultural marketing. I believe my skills in market localization would be a great fit for your team's goals.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q3: "What is your greatest strength?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I'd say my greatest strength is my ability to build strong relationships with clients and stakeholders. In my current role, I've maintained a 95% client retention rate over three years by consistently delivering results and proactively addressing concerns. I believe this skill would be valuable in this client-facing position.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q4: "What is your greatest weakness?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> One area I've been actively working to improve is public speaking. Early in my career, I found it challenging to present to large groups. To address this, I enrolled in a public speaking course and began volunteering for internal presentations. I've now presented at two industry conferences, and while I still get nervous, I've become much more confident and effective.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q5: "Where do you see yourself in 5 years?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> In five years, I see myself in a leadership position where I can drive strategic marketing initiatives and mentor junior team members. I'm committed to continuous learning, and I hope to develop expertise in emerging technologies like AI-powered marketing. Ultimately, I want to make a meaningful impact on the company's growth while developing my management skills.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q6: "Why are you leaving your current job?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I've had a great experience at my current company and learned a tremendous amount. However, I feel I've reached a point where I'm looking for new challenges and growth opportunities. Your company's focus on international expansion particularly appeals to me, as it aligns with my goal to work in a more global environment. I'm looking for a role where I can leverage my existing skills while taking on new responsibilities.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q7: "Tell me about a time when you failed."</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> In my second year at the company, I led a product launch campaign that didn't meet our expected targets. We achieved only 60% of our goal. The issue was that I relied too heavily on digital channels without considering that our target audience preferred in-person events and trade shows. I took full responsibility, analyzed the data, and developed a revised strategy that combined digital and offline channels. The second campaign exceeded our target by 20%. That experience taught me the importance of understanding your audience's preferences before planning a campaign.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q8: "How do you handle stress and pressure?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I actually find that I work quite well under pressure. I prioritize my tasks using the Eisenhower Matrix to focus on what's both urgent and important. For example, during a recent product launch, we faced an unexpected issue two days before the deadline. I stayed calm, gathered the team, and we created a prioritized action plan. By breaking the problem into manageable tasks, we resolved the issue and launched on schedule. I also maintain work-life balance through regular exercise, which helps me manage stress effectively.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q9: "Do you have any questions for us?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> Yes, thank you. I have a couple of questions. First, what does success look like for this position in the first 90 days? And second, can you tell me about the team dynamics? I'd love to understand how the marketing and product teams collaborate here.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q10: "What makes you the best candidate for this position?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I believe I'm a strong fit for three reasons. First, my 6 years of experience in B2B tech marketing directly aligns with your company's needs. Second, my track record of growing pipeline by 200% demonstrates my ability to deliver measurable results. And third, my experience working with cross-cultural teams in the APAC region gives me a unique perspective that would be valuable as you expand into Asian markets. I'm confident that I can make an immediate impact in this role.</p>
              </div>
            </div>

            <div className="example-box">
              <h4>Q11: "How do you handle conflict with coworkers?"</h4>
              <div className="dialogue">
                <p><span className="speaker a">A:</span> I believe open communication is key to resolving conflicts. When I encounter a disagreement, I first try to understand the other person's perspective by listening actively. Then, I focus on finding common ground and working toward a solution that benefits the team as a whole. For instance, I once disagreed with a colleague about the direction of a campaign. Instead of escalating the issue, I suggested we test both approaches with a small audience and let the data guide our decision. The data clearly supported one approach, and we moved forward without any hard feelings.</p>
              </div>
            </div>

            {/* Exercise Section */}
            <div className="exercise-box">
              <h3>{t('연습 문제', 'Practice Exercises')}</h3>

              <div className="example-box">
                <h4>{t('\uC5F0\uC2B5 1: \uC790\uAE30\uC18C\uAC1C \uC791\uC131', 'Exercise 1: Write Your Self-Introduction')}</h4>
                <p>
                  {t(
                    '\uB2E4\uC74C \uAD6C\uC870\uB85C \uC790\uC2E0\uC758 \uC790\uAE30\uC18C\uAC1C\uB97C \uC601\uC5B4\uB85C \uC791\uC131\uD574 \uBCF4\uC138\uC694 (1-2\uBD84 \uBD84\uB7C9):',
                    'Write your own self-introduction in English using this structure (1-2 minutes):'
                  )}
                </p>
                <ol>
                  <li>{t('\uC774\uB984\uACFC \uD604\uC7AC \uC9C1\uBB34 (1-2\uBB38\uC7A5)', 'Name and current role (1-2 sentences)')}</li>
                  <li>{t('\uD575\uC2EC \uACBD\uD5D8\uACFC \uC131\uACFC (2-3\uBB38\uC7A5)', 'Key experience and achievements (2-3 sentences)')}</li>
                  <li>{t('\uC9C0\uC6D0 \uB3D9\uAE30\uC640 \uC5F4\uC815 (1-2\uBB38\uC7A5)', 'Motivation for applying and enthusiasm (1-2 sentences)')}</li>
                </ol>
              </div>

              <div className="example-box">
                <h4>{t('\uC5F0\uC2B5 2: STAR \uBC29\uBC95\uC73C\uB85C \uB2F5\uBCC0 \uC900\uBE44', 'Exercise 2: Prepare STAR Method Answers')}</h4>
                <p>
                  {t(
                    '\uB2E4\uC74C \uC9C8\uBB38\uC5D0 STAR \uBC29\uBC95\uC73C\uB85C \uB2F5\uBCC0\uC744 \uC900\uBE44\uD574 \uBCF4\uC138\uC694:',
                    'Prepare STAR method answers for the following questions:'
                  )}
                </p>
                <ol>
                  <li>"Tell me about a time when you had to meet a tight deadline."</li>
                  <li>"Describe a situation where you had to learn something new quickly."</li>
                  <li>"Give me an example of how you showed leadership."</li>
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
                  <h4>{t('\uBAA8\uBC94 \uB2F5\uC548 - \uC9C8\uBB38 1', 'Sample Answer - Question 1')}</h4>
                  <p><strong>"Tell me about a time when you had to meet a tight deadline."</strong></p>
                  <div className="dialogue">
                    <p><span className="speaker a">A:</span> <strong>(S)</strong> Last year, our client requested a complete brand refresh to be delivered in just two weeks, which would normally take four to six weeks. <strong>(T)</strong> As the project manager, I needed to deliver high-quality work within this compressed timeline. <strong>(A)</strong> I immediately assembled a dedicated team, created a detailed daily schedule with milestones, and held brief daily check-ins to track progress and remove blockers. I also negotiated with the client to prioritize the most critical deliverables. <strong>(R)</strong> We delivered the core brand assets on time, and the client was so impressed that they extended the contract for an additional year. This experience reinforced my ability to stay organized and lead effectively under pressure.</p>
                  </div>

                  <h4>{t('\uBAA8\uBC94 \uB2F5\uC548 - \uC9C8\uBB38 2', 'Sample Answer - Question 2')}</h4>
                  <p><strong>"Describe a situation where you had to learn something new quickly."</strong></p>
                  <div className="dialogue">
                    <p><span className="speaker a">A:</span> <strong>(S)</strong> When our company decided to migrate to a new CRM platform, I was assigned to lead the transition even though I had no prior experience with the system. <strong>(T)</strong> I needed to become proficient within three weeks to train the rest of the team. <strong>(A)</strong> I dedicated extra hours to completing online certification courses, connected with the vendor's support team for best practices, and created a sandbox environment to practice. <strong>(R)</strong> I became certified ahead of schedule, successfully trained 25 team members, and the migration was completed with zero data loss. Our team productivity actually increased by 15% with the new system.</p>
                  </div>

                  <h4>{t('\uBAA8\uBC94 \uB2F5\uC548 - \uC9C8\uBB38 3', 'Sample Answer - Question 3')}</h4>
                  <p><strong>"Give me an example of how you showed leadership."</strong></p>
                  <div className="dialogue">
                    <p><span className="speaker a">A:</span> <strong>(S)</strong> During a company restructuring, our department lost two senior members, and team morale was low. <strong>(T)</strong> Although I wasn't in a management position, I felt it was important to step up and help the team navigate this challenging period. <strong>(A)</strong> I organized weekly team lunches to maintain camaraderie, proposed a mentorship pairing system so junior members could learn from remaining seniors, and volunteered to take on some of the departed colleagues' responsibilities. <strong>(R)</strong> Team productivity recovered within two months, and our manager credited the initiatives I started with helping retain all remaining team members. This experience was eventually recognized, and I was promoted to team lead six months later.</p>
                  </div>
                </div>
              )}

              <div className="tip-box">
                <h3>{t('\uBA74\uC811 \uCD5C\uC885 \uD301', 'Final Interview Tips')}</h3>
                <ul>
                  <li>{t('\uBA74\uC811 \uC804 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uCDA9\uBD84\uD788 \uC870\uC0AC\uD558\uC138\uC694 (recent news, products, culture)', 'Research the company thoroughly before the interview (recent news, products, culture)')}</li>
                  <li>{t('\uAD6C\uCCB4\uC801\uC778 \uC22B\uC790\uC640 \uC131\uACFC\uB85C \uB2F5\uBCC0\uC744 \uBC31\uC5C5\uD558\uC138\uC694', 'Back up your answers with specific numbers and achievements')}</li>
                  <li>{t('\uC5F0\uC2B5\uC740 \uCDA9\uBD84\uD788 \uD558\uB418, \uC678\uC6B4 \uB4EF\uD55C \uB2F5\uBCC0\uC740 \uD53C\uD558\uC138\uC694', 'Practice thoroughly, but avoid sounding rehearsed')}</li>
                  <li>{t('\uBD80\uC815\uC801\uC778 \uBC1C\uC5B8\uC744 \uD53C\uD558\uACE0, \uD56D\uC0C1 \uAE0D\uC815\uC801\uC73C\uB85C \uC7AC\uAD6C\uC131\uD558\uC138\uC694', 'Avoid negative statements; always reframe positively')}</li>
                  <li>{t('\uC804 \uC9C1\uC7A5\uC774\uB098 \uC0C1\uC0AC\uB97C \uBE44\uD310\uD558\uC9C0 \uB9C8\uC138\uC694', 'Never criticize former employers or managers')}</li>
                  <li>{t('\uBA74\uC811 \uD6C4 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uAC10\uC0AC \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC138\uC694', 'Send a thank-you email within 24 hours of the interview')}</li>
                </ul>
              </div>

            </div>

            <div className="lesson-nav">
              <Link to="/business/negotiation" className="lesson-nav-btn prev">&larr; {t('협상 & 설득', 'Negotiation & Persuasion')}</Link>
              <Link to="/business" className="lesson-nav-btn next">{t('비즈니스 영어 홈', 'Business English Home')} &rarr;</Link>
            </div>

          </div>
      </PageLayout>
    </>
  );
}

export default Interview;
