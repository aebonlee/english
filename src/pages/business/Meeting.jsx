import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';
import SectionNav from '../../components/SectionNav';

function Meeting() {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  const sections = [
    { id: 'start', ko: '회의 시작', en: 'Starting' },
    { id: 'opinions', ko: '의견 제시', en: 'Opinions' },
    { id: 'agree', ko: '동의 & 반대', en: 'Agree/Disagree' },
    { id: 'action', ko: '행동 항목', en: 'Action Items' },
    { id: 'wrap', ko: '마무리', en: 'Wrapping Up' },
    { id: 'dialogue', ko: '대화 예시', en: 'Dialogue' },
    { id: 'summary', ko: '필수 표현', en: 'Key Phrases' },
  ];

  return (
    <>
      <SEOHead
        title={t(
          '\uD68C\uC758 \uC601\uC5B4 - English Pro',
          'Meeting English - English Pro'
        )}
        description={t(
          '\uD68C\uC758 \uC9C4\uD589, \uC758\uACAC \uC81C\uC2DC, \uB3D9\uC758/\uBC18\uB300, \uD589\uB3D9 \uD56D\uBAA9 \uC815\uB9AC \uD575\uC2EC \uD45C\uD604\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
          'Learn key expressions for running meetings, giving opinions, agreeing/disagreeing, and action items.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('\uD648', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/business">{t('\uBE44\uC988\uB2C8\uC2A4', 'Business')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('\uD68C\uC758 \uC601\uC5B4', 'Meeting')}</span>
          </div>
          <h1 className="page-header__title">{t('\uD68C\uC758 \uC601\uC5B4', 'Meeting English')}</h1>
          <p className="page-header__description">
            {t(
              '\uD68C\uC758\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uC9C4\uD589\uD558\uACE0 \uCC38\uC5EC\uD558\uAE30 \uC704\uD55C \uD575\uC2EC \uD45C\uD604\uC744 \uBC30\uC6CC\uBCF4\uC138\uC694.',
            'Learn key expressions to run and participate in meetings effectively.'
            )}
          </p>
        </div>
      </section>

      <SubNav category="business" />
      <SectionNav sections={sections} />

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('\uD559\uC2B5 \uBAA9\uD45C', 'Learning Objectives')}</h3>
              <ul>
                <li>{t('\uD68C\uC758\uB97C \uC2DC\uC791\uD558\uACE0 \uC548\uAC74\uC744 \uC18C\uAC1C\uD558\uB294 \uD45C\uD604 \uC775\uD788\uAE30', 'Learn expressions for opening meetings and introducing the agenda')}</li>
                <li>{t('\uC758\uACAC\uC744 \uC804\uBB38\uC801\uC73C\uB85C \uC81C\uC2DC\uD558\uB294 \uBC29\uBC95 \uBC30\uC6B0\uAE30', 'Master how to give opinions professionally')}</li>
                <li>{t('\uB3D9\uC758 \uBC0F \uC815\uC911\uD55C \uBC18\uB300 \uD45C\uD604 \uC0AC\uC6A9\uD558\uAE30', 'Use agreeing and polite disagreeing expressions')}</li>
                <li>{t('\uD589\uB3D9 \uD56D\uBAA9\uC744 \uBC30\uC815\uD558\uACE0 \uD68C\uC758\uB97C \uB9C8\uBB34\uB9AC\uD558\uAE30', 'Assign action items and close meetings effectively')}</li>
              </ul>
            </div>

            <h2 id="start">{t('\uD68C\uC758 \uC2DC\uC791\uD558\uAE30 (Starting a Meeting)', 'Starting a Meeting')}</h2>
            <div className="example-box">
              <h4>{t('\uD68C\uC758 \uC2DC\uC791 \uD45C\uD604', 'Meeting Opening Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Let's get started. Thank you all for coming.</code>
                  <span className="translation">{t(' - \uC2DC\uC791\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uBAA8\uB450 \uCC38\uC11D\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.', ' - Let\'s begin. Thank you all for attending.')}</span>
                </li>
                <li>
                  <code>Shall we begin? I think everyone's here.</code>
                  <span className="translation">{t(' - \uC2DC\uC791\uD560\uAE4C\uC694? \uBAA8\uB450 \uBAA8\uC778 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.', ' - Shall we start? I think everyone is here.')}</span>
                </li>
                <li>
                  <code>The purpose of today's meeting is to...</code>
                  <span className="translation">{t(' - \uC624\uB298 \uD68C\uC758\uC758 \uBAA9\uC801\uC740 ~\uC785\uB2C8\uB2E4.', ' - The goal of today\'s meeting is to...')}</span>
                </li>
                <li>
                  <code>We have a lot to cover today, so let's get right into it.</code>
                  <span className="translation">{t(' - \uC624\uB298 \uB2E4\uB8F0 \uB0B4\uC6A9\uC774 \uB9CE\uC73C\uB2C8 \uBC14\uB85C \uC2DC\uC791\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - We have a lot to discuss, so let\'s jump right in.')}</span>
                </li>
                <li>
                  <code>I'd like to start by reviewing the agenda.</code>
                  <span className="translation">{t(' - \uBA3C\uC800 \uC548\uAC74\uC744 \uAC80\uD1A0\uD558\uACE0 \uC2DC\uC791\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me begin by reviewing the agenda.')}</span>
                </li>
                <li>
                  <code>Before we start, does anyone have anything to add to the agenda?</code>
                  <span className="translation">{t(' - \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0, \uC548\uAC74\uC5D0 \uCD94\uAC00\uD560 \uB0B4\uC6A9\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?', ' - Before we begin, does anyone want to add to the agenda?')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>Meeting Opening Example</h4>
              <div className="dialogue">
                <p><span className="speaker a">Chair:</span> Good morning, everyone. Let's get started. Thank you all for coming on such short notice.</p>
                <p><span className="speaker a">Chair:</span> The purpose of today's meeting is to discuss the timeline for our product launch next quarter.</p>
                <p><span className="speaker a">Chair:</span> I'd like to start by reviewing the agenda. First, we'll look at the current status of development. Then, we'll discuss marketing and sales readiness. Finally, we'll set key milestones and deadlines.</p>
                <p><span className="speaker a">Chair:</span> Before we start, does anyone have anything to add?</p>
                <p><span className="speaker b">Team Member:</span> I'd like to add a brief update on the QA testing results, if that's okay.</p>
                <p><span className="speaker a">Chair:</span> Absolutely. We'll include that after the development update. Let's begin.</p>
              </div>
            </div>
          
            <h2 id="opinions">{t('\uC758\uACAC \uC81C\uC2DC\uD558\uAE30 (Giving Opinions)', 'Giving Opinions')}</h2>
            <div className="example-box">
              <h4>{t('\uC758\uACAC \uC81C\uC2DC \uD45C\uD604', 'Opinion Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I think we should consider...</code>
                  <span className="translation">{t(' - ~\uC744 \uACE0\uB824\uD574\uC57C \uD55C\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.', ' - I believe we should consider...')}</span>
                </li>
                <li>
                  <code>In my view, the best approach would be...</code>
                  <span className="translation">{t(' - \uC81C \uAD00\uC810\uC5D0\uC11C\uB294 \uAC00\uC7A5 \uC88B\uC740 \uBC29\uBC95\uC740 ~\uC785\uB2C8\uB2E4.', ' - From my perspective, the best approach is...')}</span>
                </li>
                <li>
                  <code>From my experience, I'd suggest...</code>
                  <span className="translation">{t(' - \uC81C \uACBD\uD5D8\uC0C1, ~\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4.', ' - Based on my experience, I\'d recommend...')}</span>
                </li>
                <li>
                  <code>I'd like to point out that...</code>
                  <span className="translation">{t(' - ~\uC744 \uC9C0\uC801\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - I\'d like to note that...')}</span>
                </li>
                <li>
                  <code>One concern I have is...</code>
                  <span className="translation">{t(' - \uC81C\uAC00 \uC6B0\uB824\uD558\uB294 \uBD80\uBD84\uC740 ~\uC785\uB2C8\uB2E4.', ' - One thing that concerns me is...')}</span>
                </li>
                <li>
                  <code>If I may add something here...</code>
                  <span className="translation">{t(' - \uD55C \uAC00\uC9C0 \uB367\uBD99\uC774\uC790\uBA74...', ' - If I might add...')}</span>
                </li>
                <li>
                  <code>Based on the data we have...</code>
                  <span className="translation">{t(' - \uC6B0\uB9AC\uAC00 \uAC00\uC9C4 \uB370\uC774\uD130\uC5D0 \uAE30\uBC18\uD558\uBA74...', ' - According to our data...')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uC758\uACAC \uC81C\uC2DC \uD301', 'Opinion Tip')}</h3>
              <p>
                  {t(
                    '\uC601\uC5B4 \uD68C\uC758\uC5D0\uC11C\uB294 \uC801\uADF9\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC81C\uC2DC\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD55C\uAD6D \uBB38\uD654\uC640 \uB2EC\uB9AC \uC11C\uC591 \uBE44\uC988\uB2C8\uC2A4 \uBB38\uD654\uC5D0\uC11C\uB294 \uCE68\uBB35\uC774 \uB3D9\uC758\uB85C \uD574\uC11D\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC790\uC2E0\uC758 \uC0DD\uAC01\uC744 \uBA85\uD655\uD788 \uD45C\uD604\uD558\uC138\uC694.',
                  'In English meetings, actively sharing opinions is important. Unlike Korean business culture, silence is not interpreted as agreement in Western business culture. Express your thoughts clearly.'
                )}
              </p>
            </div>
          
            <h2 id="agree">{t('\uB3D9\uC758 & \uC815\uC911\uD55C \uBC18\uB300 (Agreeing & Disagreeing)', 'Agreeing & Disagreeing Politely')}</h2>

            <div className="example-box">
              <h4>{t('\uB3D9\uC758 \uD45C\uD604', 'Agreeing Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I completely agree with you on that.</code>
                  <span className="translation">{t(' - \uADF8 \uC810\uC5D0 \uC644\uC804\uD788 \uB3D9\uC758\uD569\uB2C8\uB2E4.', ' - I fully agree with that.')}</span>
                </li>
                <li>
                  <code>That's a great point.</code>
                  <span className="translation">{t(' - \uC88B\uC740 \uC9C0\uC801\uC785\uB2C8\uB2E4.', ' - That\'s an excellent point.')}</span>
                </li>
                <li>
                  <code>I think you're absolutely right.</code>
                  <span className="translation">{t(' - \uC644\uC804\uD788 \uB9DE\uB294 \uB9D0\uC500\uC774\uC2DC\uB124\uC694.', ' - You\'re absolutely correct.')}</span>
                </li>
                <li>
                  <code>I'm on board with that idea.</code>
                  <span className="translation">{t(' - \uADF8 \uC544\uC774\uB514\uC5B4\uC5D0 \uCC2C\uC131\uD569\uB2C8\uB2E4.', ' - I support that idea.')}</span>
                </li>
                <li>
                  <code>That aligns with what I was thinking.</code>
                  <span className="translation">{t(' - \uC81C \uC0DD\uAC01\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4.', ' - That matches my thinking.')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uC815\uC911\uD55C \uBC18\uB300 \uD45C\uD604', 'Polite Disagreement Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I see your point, but I think we should also consider...</code>
                  <span className="translation">{t(' - \uB9D0\uC500\uC740 \uC774\uD574\uD558\uC9C0\uB9CC, ~\uB3C4 \uACE0\uB824\uD574\uC57C \uD55C\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.', ' - I understand, but we should also consider...')}</span>
                </li>
                <li>
                  <code>I understand where you're coming from, however...</code>
                  <span className="translation">{t(' - \uC758\uACAC\uC740 \uC774\uD574\uD558\uC9C0\uB9CC, \uADF8\uB7EC\uB098...', ' - I see your perspective, but...')}</span>
                </li>
                <li>
                  <code>That's a valid point, but have you considered...?</code>
                  <span className="translation">{t(' - \uD0C0\uB2F9\uD55C \uC9C0\uC801\uC774\uC9C0\uB9CC, ~\uC740 \uACE0\uB824\uD574 \uBCF4\uC168\uB098\uC694?', ' - Good point, but have you thought about...?')}</span>
                </li>
                <li>
                  <code>I'm not sure I agree entirely. My concern is...</code>
                  <span className="translation">{t(' - \uC804\uC801\uC73C\uB85C \uB3D9\uC758\uD558\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uC81C \uC6B0\uB824\uB294...', ' - I don\'t fully agree. My worry is...')}</span>
                </li>
                <li>
                  <code>I respectfully disagree. I believe that...</code>
                  <span className="translation">{t(' - \uC815\uC911\uD788 \uBC18\uB300\uC758\uACAC\uC744 \uB4DC\uB9BD\uB2C8\uB2E4. \uC81C \uC0DD\uAC01\uC5D0\uB294...', ' - I respectfully disagree. I think that...')}</span>
                </li>
                <li>
                  <code>I take a slightly different view on this.</code>
                  <span className="translation">{t(' - \uC800\uB294 \uC57D\uAC04 \uB2E4\uB978 \uAD00\uC810\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.', ' - I have a somewhat different perspective.')}</span>
                </li>
                <li>
                  <code>While I appreciate the suggestion, I think there might be a better approach.</code>
                  <span className="translation">{t(' - \uC81C\uC548\uC5D0 \uAC10\uC0AC\uD558\uC9C0\uB9CC, \uB354 \uB098\uC740 \uBC29\uBC95\uC774 \uC788\uC744 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.', ' - I appreciate the idea, but there may be a better way.')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uBB38\uD654\uC801 \uD301', 'Cultural Tip')}</h3>
              <p>
                  {t(
                    '\uBC18\uB300 \uC758\uACAC\uC744 \uB9D0\uD560 \uB54C\uB294 \uBC18\uB4DC\uC2DC \uC0C1\uB300\uBC29\uC758 \uC758\uACAC\uC744 \uBA3C\uC800 \uC778\uC815\uD55C \uD6C4\uC5D0 \uC790\uC2E0\uC758 \uC0DD\uAC01\uC744 \uB9D0\uD558\uC138\uC694. "Yes, but..." \uD328\uD134\uBCF4\uB2E4 "I see your point, and I\'d like to add..." \uD328\uD134\uC774 \uB354 \uC804\uBB38\uC801\uC785\uB2C8\uB2E4. \uC808\uB300 "You\'re wrong" \uAC19\uC740 \uC9C1\uC811\uC801\uC778 \uBD80\uC815\uC740 \uD53C\uD558\uC138\uC694.',
                  'When disagreeing, always acknowledge the other person\'s opinion first. The pattern "I see your point, and I\'d like to add..." is more professional than "Yes, but...". Never use direct negations like "You\'re wrong".'
                )}
              </p>
            </div>
          
            <h2 id="action">{t('\uD589\uB3D9 \uD56D\uBAA9 \uC815\uB9AC (Action Items)', 'Action Items')}</h2>
            <div className="example-box">
              <h4>{t('\uD589\uB3D9 \uD56D\uBAA9 \uAD00\uB828 \uD45C\uD604', 'Action Item Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Let me assign the action items from today's meeting.</code>
                  <span className="translation">{t(' - \uC624\uB298 \uD68C\uC758\uC758 \uD589\uB3D9 \uD56D\uBAA9\uC744 \uBC30\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me assign today\'s action items.')}</span>
                </li>
                <li>
                  <code>[Name], could you take the lead on this?</code>
                  <span className="translation">{t(' - [?대쫫]\uB2D8, \uC774 \uAC74\uC744 \uB2F4\uB2F9\uD574 \uC8FC\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?', ' - [Name], could you handle this?')}</span>
                </li>
                <li>
                  <code>I'll take responsibility for...</code>
                  <span className="translation">{t(' - \uC81C\uAC00 ~\uC744 \uB2F4\uB2F9\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'ll be responsible for...')}</span>
                </li>
                <li>
                  <code>We need this completed by [date].</code>
                  <span className="translation">{t(' - [?좎쭨]\uAE4C\uC9C0 \uC644\uB8CC\uD574\uC57C \uD569\uB2C8\uB2E4.', ' - This needs to be done by [date].')}</span>
                </li>
                <li>
                  <code>Can we set a deadline for this?</code>
                  <span className="translation">{t(' - \uC774\uAC74\uC5D0 \uB300\uD55C \uB9C8\uAC10\uC77C\uC744 \uC815\uD560 \uC218 \uC788\uC744\uAE4C\uC694?', ' - Can we set a due date for this?')}</span>
                </li>
                <li>
                  <code>Let's make sure we follow up on this by next week.</code>
                  <span className="translation">{t(' - \uB2E4\uC74C \uC8FC\uAE4C\uC9C0 \uD6C4\uC18D \uC870\uCE58\uD569\uC2DC\uB2E4.', ' - Let\'s follow up on this by next week.')}</span>
                </li>
              </ul>
            </div>
          
            <h2 id="wrap">{t('\uD68C\uC758 \uB9C8\uBB34\uB9AC (Wrapping Up)', 'Wrapping Up a Meeting')}</h2>
            <div className="example-box">
              <h4>{t('\uD68C\uC758 \uB9C8\uBB34\uB9AC \uD45C\uD604', 'Meeting Closing Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Let me quickly summarize what we've discussed today.</code>
                  <span className="translation">{t(' - \uC624\uB298 \uB17C\uC758\uD55C \uB0B4\uC6A9\uC744 \uBE60\uB974\uAC8C \uC694\uC57D\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me briefly recap today\'s discussion.')}</span>
                </li>
                <li>
                  <code>Does anyone have any other business to discuss?</code>
                  <span className="translation">{t(' - \uB2E4\uB978 \uB17C\uC758\uD560 \uC0AC\uD56D\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?', ' - Is there anything else to discuss?')}</span>
                </li>
                <li>
                  <code>If there are no further questions, let's wrap up.</code>
                  <span className="translation">{t(' - \uCD94\uAC00 \uC9C8\uBB38\uC774 \uC5C6\uC73C\uBA74 \uB9C8\uBB34\uB9AC\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - If there are no more questions, let\'s conclude.')}</span>
                </li>
                <li>
                  <code>I'll send out the meeting minutes by end of day.</code>
                  <span className="translation">{t(' - \uC624\uB298 \uC911\uC73C\uB85C \uD68C\uC758\uB85D\uC744 \uBCF4\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'ll distribute the meeting notes by EOD.')}</span>
                </li>
                <li>
                  <code>Our next meeting will be on [date] at [time].</code>
                  <span className="translation">{t(' - \uB2E4\uC74C \uD68C\uC758\uB294 [?좎쭨] [?쒓컙]\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.', ' - Our next meeting is on [date] at [time].')}</span>
                </li>
                <li>
                  <code>Thank you all for your time and input today.</code>
                  <span className="translation">{t(' - \uC624\uB298 \uC2DC\uAC04\uACFC \uC758\uACAC\uC5D0 \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.', ' - Thank you for your time and contributions today.')}</span>
                </li>
              </ul>
            </div>
          
            <h2 id="dialogue">{t('\uD68C\uC758 \uB300\uD654 \uC608\uC2DC', 'Example Meeting Dialogue')}</h2>
            <div className="example-box">
              <h4>{t('\uC2E0\uC81C\uD488 \uCD9C\uC2DC \uD0C0\uC784\uB77C\uC778 \uD68C\uC758', 'New Product Launch Timeline Meeting')}</h4>
              <div className="dialogue">
                <p><span className="speaker a">Chair (Sarah):</span> Good morning, everyone. Let's get started. The purpose of today's meeting is to finalize the timeline for our new product launch.</p>
                <p><span className="speaker b">David:</span> Before we begin, I'd like to mention that the engineering team has completed the beta testing phase ahead of schedule.</p>
                <p><span className="speaker a">Sarah:</span> That's great news. Let's start with the marketing timeline. Jimin, could you give us an update?</p>
                <p><span className="speaker c">Jimin:</span> Sure. In my view, we should launch the digital campaign two weeks before the product release. Based on our data, early buzz generates 30% more pre-orders.</p>
                <p><span className="speaker b">David:</span> I see your point, but I think we should also consider the risk of launching too early. If there are any last-minute changes, the messaging might not align with the final product.</p>
                <p><span className="speaker c">Jimin:</span> That's a valid point. What if we launch a teaser campaign first, and the full campaign one week before?</p>
                <p><span className="speaker a">Sarah:</span> I think that's a great compromise. I'm on board with that approach. David, any concerns?</p>
                <p><span className="speaker b">David:</span> No, I think that works well. I'll coordinate with the engineering team to make sure the final specs are confirmed before the full campaign starts.</p>
                <p><span className="speaker a">Sarah:</span> Perfect. Let me assign the action items. Jimin, you'll prepare the teaser campaign by April 5. David, please confirm the final product specs by April 1. I'll schedule a follow-up meeting for April 8.</p>
                <p><span className="speaker a">Sarah:</span> Does anyone have any other business? No? Then let's wrap up. Thank you all for your time today. I'll send out the meeting minutes by end of day.</p>
              </div>
            </div>
          
            <h2 id="summary">{t('\uD68C\uC758 \uD544\uC218 \uD45C\uD604 \uC815\uB9AC', 'Essential Meeting Phrases Summary')}</h2>
            <div className="example-box">
              <h4>{t('\uC0C1\uD669\uBCC4 \uD575\uC2EC \uD45C\uD604', 'Key Phrases by Situation')}</h4>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>{t('\uC0C1\uD669', 'Situation')}</th>
                    <th>{t('\uD45C\uD604', 'Expression')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('\uBC1C\uC5B8\uAD8C \uC694\uCCAD', 'Asking to speak')}</td>
                    <td><code>May I jump in here?</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uD655\uC778 \uC694\uCCAD', 'Asking for clarification')}</td>
                    <td><code>Could you elaborate on that?</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC8FC\uC81C \uBCF5\uADC0', 'Getting back on topic')}</td>
                    <td><code>Let's get back on track.</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC2DC\uAC04 \uAD00\uB9AC', 'Time management')}</td>
                    <td><code>We're running short on time.</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC758\uACAC \uC694\uCCAD', 'Asking for opinion')}</td>
                    <td><code>What are your thoughts on this?</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uD22C\uD45C \uC81C\uC548', 'Suggesting a vote')}</td>
                    <td><code>Shall we put it to a vote?</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC5F0\uAE30 \uC81C\uC548', 'Suggesting postponement')}</td>
                    <td><code>Can we table this for now?</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="exercise-box">
              <h3>{t('\uC5F0\uC2B5 \uBB38\uC81C', 'Practice')}</h3>

            <div className="example-box">
              <h4>{t('\uC5F0\uC2B5 1: \uC801\uC808\uD55C \uD45C\uD604 \uC120\uD0DD', 'Exercise 1: Choose the Right Expression')}</h4>
              <p>{t('\uAC01 \uC0C1\uD669\uC5D0 \uAC00\uC7A5 \uC801\uC808\uD55C \uD45C\uD604\uC744 \uC120\uD0DD\uD558\uC138\uC694.', 'Choose the most appropriate expression for each situation.')}</p>
              <ol>
                <li>
                  {t('\uB3D9\uB8CC\uC758 \uC758\uACAC\uC5D0 \uC815\uC911\uD558\uAC8C \uBC18\uB300\uD560 \uB54C:', 'When politely disagreeing with a colleague:')}
                  <br />a) "You're wrong about that."
                  <br />b) "I see your point, but I think we should also consider..."
                  <br />c) "No, I disagree."
                </li>
                <li>
                  {t('\uD68C\uC758\uB97C \uB9C8\uBB34\uB9AC\uD560 \uB54C:', 'When wrapping up a meeting:')}
                  <br />a) "OK, we're done."
                  <br />b) "Let me quickly summarize what we've discussed today."
                  <br />c) "Meeting over."
                </li>
                <li>
                  {t('\uD589\uB3D9 \uD56D\uBAA9\uC744 \uBC30\uC815\uD560 \uB54C:', 'When assigning action items:')}
                  <br />a) "You have to do this."
                  <br />b) "Could you take the lead on this?"
                  <br />c) "Just do it."
                </li>
              </ol>
            </div>

            <button
              className="btn btn--primary"
              onClick={() => setShowAnswers(!showAnswers)}
            >
              {showAnswers
                ? t('\uBAA8\uBC94 \uB2F5\uC548 \uC228\uAE30\uAE30', 'Hide Answers')
                : t('\uBAA8\uBC94 \uB2F5\uC548 \uBCF4\uAE30', 'Show Answers')
              }
            </button>

            {showAnswers && (
              <div className="example-box">
                <h4>{t('\uBAA8\uBC94 \uB2F5\uC548', 'Answers')}</h4>
                <ol>
                  <li><strong>b)</strong> "I see your point, but I think we should also consider..." - {t('\uC0C1\uB300\uBC29\uC758 \uC758\uACAC\uC744 \uC778\uC815\uD55C \uD6C4 \uC790\uC2E0\uC758 \uAD00\uC810\uC744 \uC81C\uC2DC\uD558\uB294 \uAC00\uC7A5 \uC804\uBB38\uC801\uC778 \uBC29\uBC95\uC785\uB2C8\uB2E4.', 'Acknowledging the other person\'s view before presenting yours is the most professional approach.')}</li>
                  <li><strong>b)</strong> "Let me quickly summarize what we've discussed today." - {t('\uD68C\uC758 \uB0B4\uC6A9\uC744 \uC694\uC57D\uD558\uBA70 \uB9C8\uBB34\uB9AC\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uD504\uB85C\uD398\uC154\uB110\uD569\uB2C8\uB2E4.', 'Summarizing the discussion is the most professional way to close.')}</li>
                  <li><strong>b)</strong> "Could you take the lead on this?" - {t('\uC815\uC911\uD55C \uC694\uCCAD \uD615\uD0DC\uAC00 \uAC00\uC7A5 \uC801\uC808\uD569\uB2C8\uB2E4.', 'A polite request form is most appropriate.')}</li>
                </ol>
              </div>
            )}

            <div className="example-box">
              <h4>{t('\uC5F0\uC2B5 2: \uD68C\uC758 \uB864\uD50C\uB808\uC774', 'Exercise 2: Meeting Role-Play')}</h4>
              <p>
                  {t(
                    '\uB2E4\uC74C \uC2DC\uB098\uB9AC\uC624\uB85C \uD68C\uC758\uB97C \uC9C4\uD589\uD574 \uBCF4\uC138\uC694: "\uD300 \uBE4C\uB529 \uD589\uC0AC \uAE30\uD68D \uD68C\uC758". \uD68C\uC758 \uC2DC\uC791, \uC758\uACAC 2\uAC1C \uC81C\uC2DC, \uD558\uB098\uC5D0 \uB3D9\uC758, \uD558\uB098\uC5D0 \uC815\uC911\uD558\uAC8C \uBC18\uB300, \uD589\uB3D9 \uD56D\uBAA9 \uBC30\uC815, \uB9C8\uBB34\uB9AC\uB97C \uD3EC\uD568\uD558\uC138\uC694.',
                  'Practice a meeting with this scenario: "Team Building Event Planning Meeting". Include opening, giving 2 opinions, agreeing with one, politely disagreeing with another, assigning action items, and closing.'
                )}
              </p>
            </div>
            </div>

            <div className="lesson-nav">
              <Link to="/business/presentation" className="lesson-nav-btn prev">&larr; {t('\uD504\uB808\uC820\uD14C\uC774\uC158', 'Presentation')}</Link>
              <Link to="/business/negotiation" className="lesson-nav-btn next">{t('\uD611\uC0C1 & \uC124\uB4DD', 'Negotiation & Persuasion')} &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Meeting;