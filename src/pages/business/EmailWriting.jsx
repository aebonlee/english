import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';

function EmailWriting() {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <>
      <SEOHead
        title={t(
          '\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C \uC791\uC131 - English Pro',
          'Business Email Writing - English Pro'
        )}
        description={t(
          '\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C\uC758 \uAD6C\uC870, \uD575\uC2EC \uD45C\uD604, \uD15C\uD50C\uB9BF\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
          'Learn business email structure, key expressions, and templates.'
        )}
      />

      <section className="page-header">
        <div className="container">
          <h1>{t('\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C \uC791\uC131', 'Business Email Writing')}</h1>
          <p className="page-header__subtitle">
            {t(
              '프로페셔널한 비즈니스 이메일을 작성하는 방법을 배워보세요.',
              'Learn how to write professional business emails.'
            )}
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('학습 목표 / Learning Objectives', 'Learning Objectives')}</h3>
              <ul>
                <li>{t('비즈니스 이메일의 4단계 구조를 이해할 수 있다', 'Understand the 4-part structure of a business email')}</li>
                <li>{t('상황에 맞는 시작과 마무리 표현을 사용할 수 있다', 'Use appropriate opening and closing expressions for different situations')}</li>
                <li>{t('Formal과 Semi-Formal 톤을 구별하여 적절히 사용할 수 있다', 'Distinguish and properly use Formal vs. Semi-Formal tone')}</li>
                <li>{t('실제 비즈니스 이메일 템플릿을 활용할 수 있다', 'Apply real business email templates in practice')}</li>
              </ul>
            </div>

            {/* Section 1: Email Structure */}
            <h2>{t('\uC774\uBA54\uC77C \uAD6C\uC870 (Email Structure)', 'Email Structure')}</h2>
            <p>
              {t(
                '\uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C\uC740 \uBA85\uD655\uD55C \uAD6C\uC870\uB97C \uB530\uB985\uB2C8\uB2E4. \uAC01 \uBD80\uBD84\uC758 \uC5ED\uD560\uC744 \uC774\uD574\uD558\uBA74 \uD6A8\uACFC\uC801\uC778 \uC774\uBA54\uC77C\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
                'Business emails follow a clear structure. Understanding the role of each part helps you write effective emails.'
              )}
            </p>
            <div className="example-box">
              <h4>{t('\uC774\uBA54\uC77C \uAD6C\uC870 4\uB2E8\uACC4', '4 Parts of an Email')}</h4>
              <div className="structure-list">
                <div className="structure-item">
                  <strong>1. Subject Line ({t('\uC81C\uBAA9', 'Subject')})</strong>
                  <p>{t('\uBA85\uD655\uD558\uACE0 \uAC04\uACB0\uD558\uAC8C \uC791\uC131\uD569\uB2C8\uB2E4.', 'Keep it clear and concise.')}</p>
                  <ul>
                    <li><code>Meeting Request: Q1 Budget Review</code> - {t('\uD68C\uC758 \uC694\uCCAD: 1\uBD84\uAE30 \uC608\uC0B0 \uAC80\uD1A0', 'Meeting request: Q1 budget review')}</li>
                    <li><code>Follow-up: Partnership Discussion</code> - {t('\uD6C4\uC18D \uC870\uCE58: \uD30C\uD2B8\uB108\uC2ED \uB17C\uC758', 'Follow-up: Partnership discussion')}</li>
                    <li><code>Action Required: Project Deadline Update</code> - {t('\uC870\uCE58 \uD544\uC694: \uD504\uB85C\uC81D\uD2B8 \uB9C8\uAC10\uC77C \uC5C5\uB370\uC774\uD2B8', 'Action needed: Project deadline update')}</li>
                  </ul>
                </div>
                <div className="structure-item">
                  <strong>2. Greeting ({t('\uC778\uC0AC', 'Greeting')})</strong>
                  <p>{t('\uC0C1\uD669\uC5D0 \uB9DE\uB294 \uC778\uC0AC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.', 'Use the appropriate greeting for the situation.')}</p>
                  <ul>
                    <li><code>Dear Mr./Ms. [Last Name],</code> - {t('\uACF5\uC2DD\uC801 (\uCC98\uC74C \uC5F0\uB77D \uC2DC)', 'Formal (first contact)')}</li>
                    <li><code>Dear [First Name],</code> - {t('\uBC18\uACF5\uC2DD\uC801 (\uAD00\uACC4 \uD615\uC131 \uD6C4)', 'Semi-formal (after relationship is established)')}</li>
                    <li><code>Hi [First Name],</code> - {t('\uBE44\uACF5\uC2DD\uC801 (\uCE5C\uBC00\uD55C \uB3D9\uB8CC)', 'Informal (close colleagues)')}</li>
                    <li><code>Dear Hiring Manager,</code> - {t('\uBC1B\uB294 \uC0AC\uB78C \uC774\uB984 \uBAA8\uB97C \uB54C', 'When you don\'t know the recipient\'s name')}</li>
                  </ul>
                </div>
                <div className="structure-item">
                  <strong>3. Body ({t('\uBCF8\uBB38', 'Body')})</strong>
                  <p>{t('\uD55C \uB2E8\uB77D\uC5D0 \uD55C \uAC00\uC9C0 \uC8FC\uC81C\uB97C \uB2E4\uB8F9\uB2C8\uB2E4.', 'Address one topic per paragraph.')}</p>
                  <ul>
                    <li>{t('\uCCAB \uBB38\uC7A5: \uC774\uBA54\uC77C\uC758 \uBAA9\uC801', 'First sentence: Purpose of the email')}</li>
                    <li>{t('\uC911\uAC04: \uC138\uBD80 \uB0B4\uC6A9 \uC124\uBA85', 'Middle: Detailed explanation')}</li>
                    <li>{t('\uB9C8\uC9C0\uB9C9: \uC694\uCCAD \uC0AC\uD56D \uB610\uB294 \uB2E4\uC74C \uB2E8\uACC4', 'Last: Request or next steps')}</li>
                  </ul>
                </div>
                <div className="structure-item">
                  <strong>4. Closing ({t('\uB9C8\uBB34\uB9AC', 'Closing')})</strong>
                  <p>{t('\uC0C1\uD669\uC5D0 \uB9DE\uB294 \uB9C8\uBB34\uB9AC \uC778\uC0AC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.', 'Use an appropriate closing.')}</p>
                  <ul>
                    <li><code>Best regards,</code> - {t('\uAC00\uC7A5 \uBCF4\uD3B8\uC801\uC778 \uB9C8\uBB34\uB9AC (\uCD94\uCC9C)', 'Most versatile closing (recommended)')}</li>
                    <li><code>Sincerely,</code> - {t('\uACF5\uC2DD\uC801\uC778 \uB9C8\uBB34\uB9AC', 'Formal closing')}</li>
                    <li><code>Kind regards,</code> - {t('\uC815\uC911\uD558\uBA74\uC11C\uB3C4 \uB530\uB73B\uD55C \uB9C8\uBB34\uB9AC', 'Polite yet warm closing')}</li>
                    <li><code>Thanks,</code> / <code>Thank you,</code> - {t('\uBE44\uACF5\uC2DD\uC801 \uB9C8\uBB34\uB9AC', 'Informal closing')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Opening Expressions */}
            <h2>{t('\uC774\uBA54\uC77C \uC2DC\uC791 \uD45C\uD604 (Opening Expressions)', 'Opening Expressions')}</h2>
            <div className="example-box">
              <h4>{t('\uBAA9\uC801 \uC804\uB2EC', 'Stating Purpose')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I am writing to inquire about...</code>
                  <span className="translation">{t(' - ~\uC5D0 \uB300\uD574 \uBB38\uC758\uB4DC\uB9AC\uACE0\uC790 \uC774\uBA54\uC77C \uB4DC\uB9BD\uB2C8\uB2E4', ' - I\'m emailing to ask about...')}</span>
                </li>
                <li>
                  <code>I am writing to inform you that...</code>
                  <span className="translation">{t(' - ~\uC744 \uC54C\uB824\uB4DC\uB9AC\uACE0\uC790 \uC774\uBA54\uC77C \uB4DC\uB9BD\uB2C8\uB2E4', ' - I\'m emailing to let you know that...')}</span>
                </li>
                <li>
                  <code>I am writing to request...</code>
                  <span className="translation">{t(' - ~\uC744 \uC694\uCCAD\uB4DC\uB9AC\uACE0\uC790 \uC774\uBA54\uC77C \uB4DC\uB9BD\uB2C8\uB2E4', ' - I\'m emailing to request...')}</span>
                </li>
                <li>
                  <code>I am writing to confirm...</code>
                  <span className="translation">{t(' - ~\uC744 \uD655\uC778\uD558\uACE0\uC790 \uC774\uBA54\uC77C \uB4DC\uB9BD\uB2C8\uB2E4', ' - I\'m emailing to confirm...')}</span>
                </li>
                <li>
                  <code>I would like to follow up on...</code>
                  <span className="translation">{t(' - ~\uC5D0 \uB300\uD574 \uD6C4\uC18D \uC870\uCE58\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4', ' - I\'d like to follow up on...')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uCC38\uC870/\uD6C4\uC18D', 'Reference / Follow-up')}</h4>
              <ul className="expression-list">
                <li>
                  <code>With reference to your email dated...</code>
                  <span className="translation">{t(' - \uADC0\uD558\uC758 ~\uC77C\uC790 \uC774\uBA54\uC77C\uACFC \uAD00\uB828\uD558\uC5EC', ' - Regarding your email dated...')}</span>
                </li>
                <li>
                  <code>Further to our conversation...</code>
                  <span className="translation">{t(' - \uC6B0\uB9AC\uC758 \uB300\uD654\uC5D0 \uC774\uC5B4\uC11C', ' - Following our conversation...')}</span>
                </li>
                <li>
                  <code>Following up on our meeting last week...</code>
                  <span className="translation">{t(' - \uC9C0\uB09C\uC8FC \uD68C\uC758\uC5D0 \uB300\uD55C \uD6C4\uC18D \uC870\uCE58\uB85C', ' - As a follow-up to our meeting last week...')}</span>
                </li>
                <li>
                  <code>As per our discussion...</code>
                  <span className="translation">{t(' - \uC6B0\uB9AC\uAC00 \uB17C\uC758\uD55C \uB300\uB85C', ' - As we discussed...')}</span>
                </li>
                <li>
                  <code>Thank you for your email regarding...</code>
                  <span className="translation">{t(' - ~\uC5D0 \uB300\uD55C \uC774\uBA54\uC77C \uAC10\uC0AC\uD569\uB2C8\uB2E4', ' - Thank you for your email about...')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('\uD45C\uD604 \uD301', 'Expression Tip')}</h3>
              <p>
                {t(
                  '"I am writing to..." \uD328\uD134\uC740 \uAC00\uC7A5 \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uC774\uBA54\uC77C \uC2DC\uC791 \uD45C\uD604\uC785\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC758 \uBAA9\uC801\uC744 \uBA85\uD655\uD558\uAC8C \uC804\uB2EC\uD560 \uC218 \uC788\uC5B4 \uBC1B\uB294 \uC0AC\uB78C\uC774 \uBE60\uB974\uAC8C \uB0B4\uC6A9\uC744 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
                  'The "I am writing to..." pattern is the most widely used email opening. It clearly communicates the purpose of your email, allowing the recipient to quickly understand the content.'
                )}
              </p>
            </div>

            {/* Section 3: Closing Expressions */}
            <h2>{t('\uC774\uBA54\uC77C \uB9C8\uBB34\uB9AC \uD45C\uD604 (Closing Expressions)', 'Closing Expressions')}</h2>
            <div className="example-box">
              <h4>{t('\uC694\uCCAD/\uD589\uB3D9 \uC720\uB3C4', 'Requesting / Prompting Action')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Please don't hesitate to contact me if you have any questions.</code>
                  <span className="translation">{t(' - \uBB38\uC758 \uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uC5F0\uB77D \uC8FC\uC138\uC694.', ' - Feel free to reach out with any questions.')}</span>
                </li>
                <li>
                  <code>I look forward to hearing from you.</code>
                  <span className="translation">{t(' - \uB2F5\uBCC0 \uAE30\uB2E4\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.', ' - I await your reply.')}</span>
                </li>
                <li>
                  <code>I would appreciate your prompt response.</code>
                  <span className="translation">{t(' - \uBE60\uB978 \uB2F5\uBCC0\uC744 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.', ' - I\'d appreciate a quick response.')}</span>
                </li>
                <li>
                  <code>Please let me know if you need any further information.</code>
                  <span className="translation">{t(' - \uCD94\uAC00 \uC815\uBCF4\uAC00 \uD544\uC694\uD558\uC2DC\uBA74 \uC54C\uB824\uC8FC\uC138\uC694.', ' - Let me know if you need more information.')}</span>
                </li>
                <li>
                  <code>Could you please confirm by [date]?</code>
                  <span className="translation">{t(' - [날짜]\uAE4C\uC9C0 \uD655\uC778\uD574 \uC8FC\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?', ' - Could you confirm by [date]?')}</span>
                </li>
              </ul>
            </div>

            <div className="example-box">
              <h4>{t('\uAC10\uC0AC/\uC815\uC911\uD55C \uB9C8\uBB34\uB9AC', 'Thankful / Polite Closing')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Thank you for your time and consideration.</code>
                  <span className="translation">{t(' - \uC2DC\uAC04 \uB0B4\uC8FC\uC2DC\uACE0 \uACE0\uB824\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.', ' - Thanks for your time and consideration.')}</span>
                </li>
                <li>
                  <code>I appreciate your cooperation in this matter.</code>
                  <span className="translation">{t(' - \uC774 \uAC74\uC5D0 \uB300\uD55C \uD611\uC870\uC5D0 \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.', ' - Thanks for your cooperation on this matter.')}</span>
                </li>
                <li>
                  <code>Thank you in advance for your assistance.</code>
                  <span className="translation">{t(' - \uBBF8\uB9AC \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.', ' - Thanks in advance for your help.')}</span>
                </li>
                <li>
                  <code>I look forward to your favorable reply.</code>
                  <span className="translation">{t(' - \uAE0D\uC815\uC801\uC778 \uB2F5\uBCC0\uC744 \uAE30\uB300\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - I hope for a positive response.')}</span>
                </li>
                <li>
                  <code>I look forward to working with you.</code>
                  <span className="translation">{t(' - \uD568\uAED8 \uC77C\uD558\uAC8C \uB418\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4.', ' - I look forward to our collaboration.')}</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Email Templates */}
            <h2>{t('\uC774\uBA54\uC77C \uD15C\uD50C\uB9BF (Email Templates)', 'Email Templates')}</h2>

            {/* Template 1: Meeting Request */}
            <div className="example-box">
              <h4>{t('\uD15C\uD50C\uB9BF 1: \uD68C\uC758 \uC694\uCCAD \uC774\uBA54\uC77C', 'Template 1: Meeting Request Email')}</h4>
              <div className="email-template">
                <p><strong>Subject:</strong> Meeting Request: Q2 Marketing Strategy Discussion</p>
                <br />
                <p>Dear Ms. Johnson,</p>
                <br />
                <p>I hope this email finds you well.</p>
                <br />
                <p>I am writing to request a meeting to discuss our Q2 marketing strategy. As we are approaching the end of Q1, I believe it would be beneficial for our teams to align on the upcoming quarter's priorities and budget allocation.</p>
                <br />
                <p>Would you be available for a 30-minute meeting sometime next week? I am flexible with timing, but Tuesday or Wednesday afternoon would work best on my end.</p>
                <br />
                <p>Please let me know your availability, and I will send a calendar invitation accordingly.</p>
                <br />
                <p>Thank you for your time.</p>
                <br />
                <p>Best regards,<br />
                Park Jimin<br />
                Marketing Manager<br />
                GlobalTech Inc.</p>
              </div>
              <div className="tip-box">
                <h3>{t('\uD575\uC2EC \uD3EC\uC778\uD2B8', 'Key Points')}</h3>
                <ul>
                  <li>{t('"I hope this email finds you well." - \uAC00\uC7A5 \uBCF4\uD3B8\uC801\uC778 \uC778\uC0AC \uBB38\uAD6C', '"I hope this email finds you well." - Most common greeting phrase')}</li>
                  <li>{t('\uD68C\uC758 \uBAA9\uC801\uC744 \uBA85\uD655\uD558\uAC8C \uC124\uBA85', 'Clearly state the purpose of the meeting')}</li>
                  <li>{t('\uAD6C\uCCB4\uC801\uC778 \uC2DC\uAC04\uC744 \uC81C\uC548\uD558\uBA74\uC11C\uB3C4 \uC720\uC5F0\uC131\uC744 \uBCF4\uC5EC\uC90C', 'Suggest specific times while showing flexibility')}</li>
                </ul>
              </div>
            </div>

            {/* Template 2: Thank You / Follow-up */}
            <div className="example-box">
              <h4>{t('\uD15C\uD50C\uB9BF 2: \uAC10\uC0AC / \uD6C4\uC18D \uC870\uCE58 \uC774\uBA54\uC77C', 'Template 2: Thank You / Follow-up Email')}</h4>
              <div className="email-template">
                <p><strong>Subject:</strong> Thank You - Follow-up from Our Meeting on March 15</p>
                <br />
                <p>Dear David,</p>
                <br />
                <p>Thank you for taking the time to meet with me earlier today. I truly appreciate the insights you shared regarding the new product launch timeline.</p>
                <br />
                <p>As discussed, I have summarized the key action items below:</p>
                <br />
                <ul>
                  <li>Finalize the product specifications by March 25</li>
                  <li>Schedule a follow-up meeting with the design team by end of this week</li>
                  <li>Share the revised budget proposal by April 1</li>
                </ul>
                <br />
                <p>I will take the lead on items 1 and 3, and I understand you will coordinate with the design team for item 2.</p>
                <br />
                <p>Please don't hesitate to reach out if anything needs to be adjusted.</p>
                <br />
                <p>Best regards,<br />
                Lee Soyeon<br />
                Product Development Team</p>
              </div>
              <div className="tip-box">
                <h3>{t('\uD575\uC2EC \uD3EC\uC778\uD2B8', 'Key Points')}</h3>
                <ul>
                  <li>{t('\uD68C\uC758 \uD6C4 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uD6C4\uC18D \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4', 'Send follow-up emails within 24 hours of the meeting')}</li>
                  <li>{t('\uD589\uB3D9 \uD56D\uBAA9(Action Items)\uC744 \uBA85\uD655\uD558\uAC8C \uC815\uB9AC\uD569\uB2C8\uB2E4', 'Clearly list action items')}</li>
                  <li>{t('\uAC01 \uD56D\uBAA9\uC758 \uB2F4\uB2F9\uC790\uC640 \uAE30\uD55C\uC744 \uBA85\uC2DC\uD569\uB2C8\uB2E4', 'Specify responsible person and deadline for each item')}</li>
                </ul>
              </div>
            </div>

            {/* Template 3: Complaint / Issue */}
            <div className="example-box">
              <h4>{t('\uD15C\uD50C\uB9BF 3: \uBD88\uB9CC / \uBB38\uC81C \uC81C\uAE30 \uC774\uBA54\uC77C', 'Template 3: Complaint / Issue Email')}</h4>
              <div className="email-template">
                <p><strong>Subject:</strong> Issue with Order #45892 - Incorrect Items Received</p>
                <br />
                <p>Dear Customer Service Team,</p>
                <br />
                <p>I am writing to bring to your attention an issue with our recent order (Order #45892, placed on March 10, 2026).</p>
                <br />
                <p>Upon receiving the shipment yesterday, we discovered that several items do not match our original order. Specifically:</p>
                <br />
                <ul>
                  <li>We ordered 50 units of Product A (SKU: PA-100), but received Product B (SKU: PB-200) instead</li>
                  <li>The quantity of Product C was 30 units instead of the 50 units ordered</li>
                </ul>
                <br />
                <p>This discrepancy has impacted our production schedule, and we would appreciate a prompt resolution. Could you please arrange for the correct items to be shipped as soon as possible?</p>
                <br />
                <p>I have attached photos of the received items for your reference.</p>
                <br />
                <p>I would appreciate your response within 2 business days. Please feel free to contact me directly at 010-1234-5678 if you need any additional information.</p>
                <br />
                <p>Thank you for your prompt attention to this matter.</p>
                <br />
                <p>Sincerely,<br />
                Kim Taehyung<br />
                Procurement Manager<br />
                Korea Manufacturing Co., Ltd.</p>
              </div>
              <div className="tip-box">
                <h3>{t('\uD575\uC2EC \uD3EC\uC778\uD2B8', 'Key Points')}</h3>
                <ul>
                  <li>{t('\uBD88\uB9CC \uC774\uBA54\uC77C\uC5D0\uC11C\uB3C4 \uC815\uC911\uD558\uACE0 \uC804\uBB38\uC801\uC778 \uD1A4\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4', 'Maintain a polite and professional tone even in complaint emails')}</li>
                  <li>{t('\uAD6C\uCCB4\uC801\uC778 \uC0AC\uC2E4\uACFC \uC218\uCE58\uB97C \uBA85\uD655\uD558\uAC8C \uC81C\uC2DC\uD569\uB2C8\uB2E4', 'Clearly present specific facts and figures')}</li>
                  <li>{t('\uC6D0\uD558\uB294 \uD574\uACB0 \uBC29\uBC95\uACFC \uAE30\uD55C\uC744 \uC81C\uC2DC\uD569\uB2C8\uB2E4', 'State the desired resolution and timeline')}</li>
                  <li>{t('"bring to your attention" \uC740 \uBD88\uB9CC\uC744 \uC815\uC911\uD558\uAC8C \uC804\uB2EC\uD558\uB294 \uD45C\uD604\uC785\uB2C8\uB2E4', '"bring to your attention" is a polite way to raise a complaint')}</li>
                </ul>
              </div>
            </div>

            {/* Section 5: Tone Tips */}
            <h2>{t('\uD1A4 \uAD6C\uBCC4 (Formal vs. Semi-Formal)', 'Tone Guide (Formal vs. Semi-Formal)')}</h2>
            <div className="example-box">
              <h4>{t('\uAC19\uC740 \uC758\uBBF8, \uB2E4\uB978 \uD1A4', 'Same Meaning, Different Tone')}</h4>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>{t('\uC0C1\uD669', 'Situation')}</th>
                    <th>Formal</th>
                    <th>Semi-Formal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('\uC694\uCCAD', 'Request')}</td>
                    <td><code>I would appreciate it if you could...</code></td>
                    <td><code>Could you please...?</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC54C\uB9BC', 'Inform')}</td>
                    <td><code>I wish to inform you that...</code></td>
                    <td><code>Just wanted to let you know...</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uC0AC\uACFC', 'Apologize')}</td>
                    <td><code>I sincerely apologize for...</code></td>
                    <td><code>Sorry about...</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uB3D9\uC758', 'Agree')}</td>
                    <td><code>I am in agreement with...</code></td>
                    <td><code>Sounds good to me.</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uAC70\uC808', 'Decline')}</td>
                    <td><code>I regret to inform you that we are unable to...</code></td>
                    <td><code>Unfortunately, we can't...</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uCCA8\uBD80', 'Attachment')}</td>
                    <td><code>Please find attached...</code></td>
                    <td><code>I've attached...</code></td>
                  </tr>
                  <tr>
                    <td>{t('\uD6C4\uC18D', 'Follow-up')}</td>
                    <td><code>I am writing to follow up on...</code></td>
                    <td><code>Just checking in on...</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tip-box">
              <h3>{t('\uBB38\uD654\uC801 \uD301', 'Cultural Tip')}</h3>
              <p>
                {t(
                  '\uD55C\uAD6D \uBE44\uC988\uB2C8\uC2A4 \uBB38\uD654\uC5D0\uC11C\uB294 \uB192\uC784\uB9D0\uC774 \uC911\uC694\uD558\uB4EF\uC774, \uC601\uC5B4 \uBE44\uC988\uB2C8\uC2A4 \uC774\uBA54\uC77C\uC5D0\uC11C\uB3C4 \uC0C1\uD669\uC5D0 \uB9DE\uB294 \uD1A4\uC744 \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uCC98\uC74C \uC5F0\uB77D\uD558\uB294 \uC0AC\uB78C\uC5D0\uAC8C\uB294 Formal, \uC774\uBBF8 \uAD00\uACC4\uAC00 \uD615\uC131\uB41C \uB3D9\uB8CC\uC5D0\uAC8C\uB294 Semi-Formal\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. \uD574\uC678 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uAC8C\uB294 \uD56D\uC0C1 Formal\uC744 \uC720\uC9C0\uD558\uB294 \uAC83\uC774 \uC548\uC804\uD569\uB2C8\uB2E4.',
                  'Just as honorifics matter in Korean business culture, choosing the right tone in English business emails is equally important. Use Formal for first contacts, Semi-Formal for colleagues you already know. It\'s always safe to stay Formal with international clients.'
                )}
              </p>
            </div>

            <div className="tip-box">
              <h3>{t('\uD55C\uAD6D\uC778\uC774 \uC790\uC8FC \uD558\uB294 \uC2E4\uC218', 'Common Mistakes by Korean Speakers')}</h3>
              <ul>
                <li>
                  <strong>{t('\uC9C1\uC5ED \uC8FC\uC758', 'Avoid Direct Translation')}</strong>:
                  {t(
                    ' "\uC218\uACE0\uD558\uC2ED\uB2C8\uB2E4" \u2192 "Thank you for your hard work" (X) \u2192 \uC601\uC5B4\uC5D0\uC11C\uB294 \uC790\uC5F0\uC2A4\uB7FD\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 "Thank you for your help with this." \uC0AC\uC6A9',
                    ' "\uC218\uACE0\uD558\uC2ED\uB2C8\uB2E4" \u2192 "Thank you for your hard work" (X) \u2192 This sounds unnatural in English. Use "Thank you for your help with this." instead'
                  )}
                </li>
                <li>
                  <strong>{t('\uACFC\uB3C4\uD55C \uC0AC\uACFC', 'Excessive Apologies')}</strong>:
                  {t(
                    ' \uD55C\uAD6D\uC5B4\uCC98\uB7FC \uC790\uC8FC \uC0AC\uACFC\uD558\uBA74 \uC790\uC2E0\uAC10 \uC5C6\uC5B4 \uBCF4\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uACFC\uD558\uC138\uC694.',
                    ' Apologizing too frequently (as is common in Korean) can come across as lacking confidence. Only apologize when truly necessary.'
                  )}
                </li>
                <li>
                  <strong>{t('\uBAA8\uD638\uD55C \uC81C\uBAA9', 'Vague Subject Lines')}</strong>:
                  {t(
                    ' "Hello" \uB610\uB294 "Question" \uAC19\uC740 \uBAA8\uD638\uD55C \uC81C\uBAA9 \uB300\uC2E0 \uAD6C\uCCB4\uC801\uC778 \uC81C\uBAA9\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.',
                    ' Instead of vague subjects like "Hello" or "Question", use specific subject lines.'
                  )}
                </li>
              </ul>
            </div>

            {/* Section 6: Practice */}
            <div className="exercise-box">
              <h3>{t('연습 문제 / Practice', 'Practice')}</h3>
              <div className="example-box">
                <h4>{t('시나리오', 'Scenario')}</h4>
                <p>
                  {t(
                    '당신은 ABC Corp.의 마케팅 팀장입니다. 새로운 파트너사 XYZ Inc.의 담당자 Sarah Williams에게 다음 내용으로 이메일을 작성하세요:',
                    'You are the Marketing Team Lead at ABC Corp. Write an email to Sarah Williams at your new partner company XYZ Inc. with the following details:'
                  )}
                </p>
                <ul>
                  <li>{t('공동 마케팅 칠페인 논의를 위한 회의 요ೋ', 'Request a meeting to discuss a joint marketing campaign')}</li>
                  <li>{t('다음 주 화요일 또는 수요일 오후 제안', 'Suggest next Tuesday or Wednesday afternoon')}</li>
                  <li>{t('화상회의 또는 대면회의 가능', 'Offer virtual or in-person meeting options')}</li>
                </ul>
              </div>

              <button
                className="btn btn--primary"
                onClick={() => setShowAnswers(!showAnswers)}
              >
                {showAnswers
                  ? t('모범 답안 숨기기', 'Hide Sample Answer')
                  : t('모범 답안 보기', 'Show Sample Answer')
                }
              </button>

              {showAnswers && (
                <div className="example-box">
                  <h4>{t('모범 답안', 'Sample Answer')}</h4>
                  <div className="email-template">
                    <p><strong>Subject:</strong> Meeting Request: Joint Marketing Campaign Discussion</p>
                    <br />
                    <p>Dear Ms. Williams,</p>
                    <br />
                    <p>I hope this email finds you well. My name is [Your Name], and I am the Marketing Team Lead at ABC Corp.</p>
                    <br />
                    <p>I am writing to request a meeting to discuss a potential joint marketing campaign between our companies. Given the synergies between our brands, I believe a collaborative approach could benefit both parties significantly.</p>
                    <br />
                    <p>Would you be available for a meeting next Tuesday or Wednesday afternoon? We can arrange either a video conference call or an in-person meeting at your office, whichever is more convenient for you.</p>
                    <br />
                    <p>I look forward to hearing from you.</p>
                    <br />
                    <p>Best regards,<br />
                    [Your Name]<br />
                    Marketing Team Lead<br />
                    ABC Corp.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="lesson-nav">
              <Link to="/business" className="lesson-nav-btn prev">&larr; {t('비즈니스 영어 홈', 'Business English Home')}</Link>
              <Link to="/business/presentation" className="lesson-nav-btn next">{t('프레젠테이션', 'Presentation')} &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default EmailWriting;
