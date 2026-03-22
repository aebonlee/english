import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';

function Negotiation() {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <>
      <SEOHead
        title={t(
          '\uD611\uC0C1 & \uC124\uB4DD \uC601\uC5B4 - English Pro',
          'Negotiation & Persuasion English - English Pro'
        )}
        description={t(
          '\uBE44\uC988\uB2C8\uC2A4 \uD611\uC0C1, \uC81C\uC548, \uBC18\uB300 \uC81C\uC548, \uD0C0\uD611, \uACC4\uC57D \uCCB4\uACB0\uC744 \uC704\uD55C \uD575\uC2EC \uC601\uC5B4 \uD45C\uD604\uC744 \uD559\uC2B5\uD569\uB2C8\uB2E4.',
          'Learn key English expressions for business negotiation, proposals, counter-offers, compromise, and closing deals.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <nav className="breadcrumb">
          <Link to="/business">{t('\uBE44\uC988\uB2C8\uC2A4 \uC601\uC5B4', 'Business English')}</Link>
          <span> / </span>
          <span>{t('\uD611\uC0C1 & \uC124\uB4DD', 'Negotiation & Persuasion')}</span>
        </nav>
        <h1>{t('\uD611\uC0C1 & \uC124\uB4DD', 'Negotiation & Persuasion')}</h1>
        <p className="page-header__subtitle">
          {t(
            '\uBE44\uC988\uB2C8\uC2A4 \uD611\uC0C1\uC5D0\uC11C \uC6D0\uD558\uB294 \uACB0\uACFC\uB97C \uC5BB\uAE30 \uC704\uD55C \uC804\uB7B5\uC801 \uC601\uC5B4 \uD45C\uD604\uC744 \uBC30\uC6CC\uBCF4\uC138\uC694.',
            'Learn strategic English expressions to achieve desired results in business negotiations.'
          )}
        </p>
      </section>

      {/* Section 1: Opening Positions */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="100">
        <h2>{t('\uD611\uC0C1 \uC2DC\uC791 (Opening Positions)', 'Opening Positions')}</h2>
        <p>
          {t(
            '\uD611\uC0C1\uC758 \uCCAB \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC790\uC2E0\uC758 \uC785\uC7A5\uC744 \uBA85\uD655\uD558\uAC8C \uC804\uB2EC\uD558\uBA74\uC11C\uB3C4 \uC720\uC5F0\uC131\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.',
            'In the opening phase, it\'s important to clearly state your position while showing flexibility.'
          )}
        </p>
        <div className="example-box" data-aos="fade-up">
          <h4>{t('\uD611\uC0C1 \uC2DC\uC791 \uD45C\uD604', 'Opening Negotiation Expressions')}</h4>
          <ul className="expression-list">
            <li>
              <code>Let me start by outlining our position.</code>
              <span className="translation">{t(' - \uC800\uD76C\uC758 \uC785\uC7A5\uC744 \uBA3C\uC800 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me begin by explaining our stance.')}</span>
            </li>
            <li>
              <code>We're here today to discuss the terms of...</code>
              <span className="translation">{t(' - \uC624\uB298 ~\uC758 \uC870\uAC74\uC5D0 \uB300\uD574 \uB17C\uC758\uD558\uAE30 \uC704\uD574 \uBAA8\uC600\uC2B5\uB2C8\uB2E4.', ' - We\'re here to discuss the terms of...')}</span>
            </li>
            <li>
              <code>Our primary objective is to find a mutually beneficial agreement.</code>
              <span className="translation">{t(' - \uC6B0\uB9AC\uC758 \uC8FC\uC694 \uBAA9\uD45C\uB294 \uC0C1\uD638 \uC774\uC775\uC774 \uB418\uB294 \uD569\uC758\uB97C \uCC3E\uB294 \uAC83\uC785\uB2C8\uB2E4.', ' - Our main goal is a mutually beneficial agreement.')}</span>
            </li>
            <li>
              <code>We value this partnership and want to make sure both sides are satisfied.</code>
              <span className="translation">{t(' - \uC774 \uD30C\uD2B8\uB108\uC2ED\uC744 \uC18C\uC911\uD788 \uC5EC\uAE30\uBA70 \uC591\uCE21 \uBAA8\uB450 \uB9CC\uC871\uD558\uAE38 \uBC14\uB78D\uB2C8\uB2E4.', ' - We value this partnership and want both sides satisfied.')}</span>
            </li>
            <li>
              <code>Before we get into specifics, let's agree on the overall framework.</code>
              <span className="translation">{t(' - \uC138\uBD80 \uC0AC\uD56D\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0, \uC804\uCCB4\uC801\uC778 \uD2C0\uC5D0 \uD569\uC758\uD569\uC2DC\uB2E4.', ' - Before details, let\'s agree on the overall framework.')}</span>
            </li>
            <li>
              <code>I'd like to begin by understanding your key priorities.</code>
              <span className="translation">{t(' - \uBA3C\uC800 \uADC0\uC0AC\uC758 \uD575\uC2EC \uC6B0\uC120\uC21C\uC704\uB97C \uC774\uD574\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - I\'d like to start by understanding your key priorities.')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Making Proposals */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="200">
        <h2>{t('\uC81C\uC548\uD558\uAE30 (Making Proposals)', 'Making Proposals')}</h2>
        <div className="example-box">
          <h4>{t('\uC81C\uC548 \uD45C\uD604', 'Proposal Expressions')}</h4>
          <ul className="expression-list">
            <li>
              <code>What if we were to...?</code>
              <span className="translation">{t(' - \uB9CC\uC57D \uC6B0\uB9AC\uAC00 ~\uD55C\uB2E4\uBA74 \uC5B4\uB5A8\uAE4C\uC694?', ' - What if we...?')}</span>
            </li>
            <li>
              <code>We'd like to propose the following terms...</code>
              <span className="translation">{t(' - \uB2E4\uC74C\uACFC \uAC19\uC740 \uC870\uAC74\uC744 \uC81C\uC548\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - We\'d like to suggest the following terms...')}</span>
            </li>
            <li>
              <code>How would you feel about...?</code>
              <span className="translation">{t(' - ~\uC5D0 \uB300\uD574 \uC5B4\uB5BB\uAC8C \uC0DD\uAC01\uD558\uC2DC\uB098\uC694?', ' - What do you think about...?')}</span>
            </li>
            <li>
              <code>Would you be open to considering...?</code>
              <span className="translation">{t(' - ~\uC744 \uACE0\uB824\uD574 \uBCF4\uC2E4 \uC758\uD5A5\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?', ' - Would you consider...?')}</span>
            </li>
            <li>
              <code>We believe a fair price would be in the range of...</code>
              <span className="translation">{t(' - \uC801\uC815 \uAC00\uACA9\uC740 ~ \uBC94\uC704\uB77C\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4.', ' - We think a fair price would be around...')}</span>
            </li>
            <li>
              <code>I'd like to suggest an alternative approach.</code>
              <span className="translation">{t(' - \uB300\uC548\uC744 \uC81C\uC2DC\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.', ' - I\'d like to propose an alternative.')}</span>
            </li>
            <li>
              <code>Let me put forward a proposal that addresses both our concerns.</code>
              <span className="translation">{t(' - \uC591\uCE21\uC758 \uC6B0\uB824\uB97C \uD574\uACB0\uD558\uB294 \uC81C\uC548\uC744 \uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me propose something that addresses both our concerns.')}</span>
            </li>
          </ul>
        </div>

        <div className="tip-box" data-aos="fade-up">
          <h3>{t('\uD611\uC0C1 \uD301', 'Negotiation Tip')}</h3>
          <p>
            {t(
              '\uC81C\uC548\uC744 \uD560 \uB54C\uB294 \uBA85\uB839\uBB38\uBCF4\uB2E4 \uC9C8\uBB38 \uD615\uD0DC\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. "We want $50 per unit" \uBCF4\uB2E4 "Would you be open to $50 per unit?" \uAC00 \uD611\uC0C1\uC5D0\uC11C \uB354 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4. \uC9C8\uBB38\uC740 \uC0C1\uB300\uBC29\uC5D0\uAC8C \uC120\uD0DD\uAD8C\uC744 \uC8FC\uB294 \uB290\uB08C\uC744 \uC90D\uB2C8\uB2E4.',
              'Use question forms rather than commands when making proposals. "Would you be open to $50 per unit?" is more effective in negotiations than "We want $50 per unit." Questions give the other party a sense of having a choice.'
            )}
          </p>
        </div>
      </section>

      {/* Section 3: Counter-Offers */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="300">
        <h2>{t('\uBC18\uB300 \uC81C\uC548 (Counter-Offers)', 'Counter-Offers')}</h2>
        <div className="example-box">
          <h4>{t('\uBC18\uB300 \uC81C\uC548 \uD45C\uD604', 'Counter-Offer Expressions')}</h4>
          <ul className="expression-list">
            <li>
              <code>We appreciate your offer, but we were thinking more along the lines of...</code>
              <span className="translation">{t(' - \uC81C\uC548\uC5D0 \uAC10\uC0AC\uD558\uC9C0\uB9CC, \uC800\uD76C\uB294 ~ \uC815\uB3C4\uB97C \uC0DD\uAC01\uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.', ' - Thanks for the offer, but we were thinking more like...')}</span>
            </li>
            <li>
              <code>That's a good starting point, but we'd need to see some flexibility on...</code>
              <span className="translation">{t(' - \uC88B\uC740 \uCD9C\uBC1C\uC810\uC774\uC9C0\uB9CC, ~\uC5D0 \uB300\uD574 \uC720\uC5F0\uC131\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.', ' - Good starting point, but we\'d need flexibility on...')}</span>
            </li>
            <li>
              <code>I'm afraid that doesn't quite work for us. Could we consider...?</code>
              <span className="translation">{t(' - \uC720\uAC10\uC2A4\uB7FD\uC9C0\uB9CC \uADF8\uAC74 \uC800\uD76C\uC5D0\uAC8C\uB294 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. ~\uC744 \uACE0\uB824\uD574 \uBCFC \uC218 \uC788\uC744\uAE4C\uC694?', ' - I\'m afraid that won\'t work for us. Could we look at...?')}</span>
            </li>
            <li>
              <code>We understand your position, but our budget constraints require us to...</code>
              <span className="translation">{t(' - \uADC0\uC0AC\uC758 \uC785\uC7A5\uC744 \uC774\uD574\uD558\uC9C0\uB9CC, \uC608\uC0B0 \uC81C\uC57D\uC73C\uB85C \uC778\uD574 ~\uD574\uC57C \uD569\uB2C8\uB2E4.', ' - We understand, but budget constraints require us to...')}</span>
            </li>
            <li>
              <code>We can agree to that if you could also...</code>
              <span className="translation">{t(' - \uADC0\uC0AC\uC5D0\uC11C ~\uD574 \uC8FC\uC2E0\uB2E4\uBA74 \uB3D9\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', ' - We can agree if you could also...')}</span>
            </li>
            <li>
              <code>While we can't meet that specific request, we could offer...</code>
              <span className="translation">{t(' - \uADF8 \uD2B9\uC815 \uC694\uCCAD\uC740 \uC5B4\uB835\uC9C0\uB9CC, ~\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', ' - We can\'t meet that request, but we could offer...')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Compromise */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="400">
        <h2>{t('\uD0C0\uD611 \uD45C\uD604 (Compromise Expressions)', 'Compromise Expressions')}</h2>
        <div className="example-box">
          <h4>{t('\uD0C0\uD611\uC810 \uCC3E\uAE30', 'Finding Middle Ground')}</h4>
          <ul className="expression-list">
            <li>
              <code>How about we meet halfway on this?</code>
              <span className="translation">{t(' - \uC774 \uBD80\uBD84\uC5D0\uC11C \uC911\uAC04 \uC9C0\uC810\uC744 \uCC3E\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694?', ' - How about we find a middle ground?')}</span>
            </li>
            <li>
              <code>Perhaps we could find a middle ground.</code>
              <span className="translation">{t(' - \uC544\uB9C8 \uC911\uAC04 \uC9C0\uC810\uC744 \uCC3E\uC744 \uC218 \uC788\uC744 \uAC81\uB2C8\uB2E4.', ' - Maybe we can find a compromise.')}</span>
            </li>
            <li>
              <code>We're willing to make a concession on... if you can...</code>
              <span className="translation">{t(' - ~\uC5D0 \uB300\uD574 \uC591\uBCF4\uD560 \uC6A9\uC758\uAC00 \uC788\uC2B5\uB2C8\uB2E4, \uB2E8 \uADC0\uC0AC\uAC00 ~\uD574 \uC8FC\uC2E0\uB2E4\uBA74.', ' - We\'re willing to concede on... if you can...')}</span>
            </li>
            <li>
              <code>Let's try to find a win-win solution.</code>
              <span className="translation">{t(' - \uC591\uCE21 \uBAA8\uB450 \uC774\uAE34\uC758 \uD574\uACB0\uCC45\uC744 \uCC3E\uC544\uBD05\uC2DC\uB2E4.', ' - Let\'s find a solution that benefits both sides.')}</span>
            </li>
            <li>
              <code>I think there's room for compromise here.</code>
              <span className="translation">{t(' - \uC5EC\uAE30\uC11C \uD0C0\uD611\uC758 \uC5EC\uC9C0\uAC00 \uC788\uB2E4\uACE0 \uBD05\uB2C8\uB2E4.', ' - I see room for compromise here.')}</span>
            </li>
            <li>
              <code>We can be flexible on the timeline if you can adjust the budget.</code>
              <span className="translation">{t(' - \uADC0\uC0AC\uAC00 \uC608\uC0B0\uC744 \uC870\uC815\uD574 \uC8FC\uC2E0\uB2E4\uBA74 \uC77C\uC815\uC5D0 \uB300\uD574\uC11C\uB294 \uC720\uC5F0\uD558\uAC8C \uB300\uCC98\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', ' - We can flex on timeline if you can adjust the budget.')}</span>
            </li>
            <li>
              <code>Would you consider a phased approach?</code>
              <span className="translation">{t(' - \uB2E8\uACC4\uC801 \uC811\uADFC\uC744 \uACE0\uB824\uD574 \uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?', ' - Would you consider a step-by-step approach?')}</span>
            </li>
          </ul>
        </div>

        <div className="tip-box" data-aos="fade-up">
          <h3>{t('\uD611\uC0C1 \uC804\uB7B5 \uD301', 'Negotiation Strategy Tip')}</h3>
          <p>
            {t(
              '\uD6A8\uACFC\uC801\uC778 \uD611\uC0C1\uC758 \uD575\uC2EC\uC740 "Win-Win" \uC785\uB2C8\uB2E4. \uC0C1\uB300\uBC29\uC774 \uBB34\uC5C7\uC744 \uC6D0\uD558\uB294\uC9C0 \uBA3C\uC800 \uD30C\uC545\uD55C \uD6C4, \uC591\uCE21 \uBAA8\uB450\uC5D0\uAC8C \uC774\uB85C\uC6B4 \uBC29\uC548\uC744 \uCC3E\uC73C\uC138\uC694. \uD55C \uBD80\uBD84\uC5D0\uC11C \uC591\uBCF4\uD560 \uB54C\uB294 \uB2E4\uB978 \uBD80\uBD84\uC5D0\uC11C \uBCF4\uC0C1\uC744 \uBC1B\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.',
              'The key to effective negotiation is "Win-Win". First understand what the other party wants, then find solutions beneficial to both. When conceding in one area, seek compensation in another.'
            )}
          </p>
        </div>
      </section>

      {/* Section 5: Closing Deals */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="500">
        <h2>{t('\uACC4\uC57D \uCCB4\uACB0 (Closing Deals)', 'Closing Deals')}</h2>
        <div className="example-box">
          <h4>{t('\uACC4\uC57D \uCCB4\uACB0 \uD45C\uD604', 'Deal Closing Expressions')}</h4>
          <ul className="expression-list">
            <li>
              <code>I think we've reached a good agreement.</code>
              <span className="translation">{t(' - \uC88B\uC740 \uD569\uC758\uC5D0 \uB3C4\uB2EC\uD55C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.', ' - I believe we\'ve reached a solid agreement.')}</span>
            </li>
            <li>
              <code>Let me summarize what we've agreed on.</code>
              <span className="translation">{t(' - \uD569\uC758\uB41C \uB0B4\uC6A9\uC744 \uC694\uC57D\uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - Let me recap what we\'ve agreed.')}</span>
            </li>
            <li>
              <code>We have a deal.</code>
              <span className="translation">{t(' - \uACC4\uC57D \uC131\uB9BD\uC785\uB2C8\uB2E4.', ' - It\'s a deal.')}</span>
            </li>
            <li>
              <code>I'll have our legal team draft the contract based on these terms.</code>
              <span className="translation">{t(' - \uC774 \uC870\uAC74\uC744 \uBC14\uD0D5\uC73C\uB85C \uBC95\uBB34\uD300\uC5D0\uC11C \uACC4\uC57D\uC11C\uB97C \uC791\uC131\uD558\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.', ' - I\'ll have our legal team prepare the contract.')}</span>
            </li>
            <li>
              <code>We look forward to a long and successful partnership.</code>
              <span className="translation">{t(' - \uAE38\uACE0 \uC131\uACF5\uC801\uC778 \uD30C\uD2B8\uB108\uC2ED\uC744 \uAE30\uB300\uD569\uB2C8\uB2E4.', ' - We look forward to a lasting and successful partnership.')}</span>
            </li>
            <li>
              <code>Shall we shake on it?</code>
              <span className="translation">{t(' - \uC545\uC218\uB85C \uD569\uC758\uB97C \uD655\uC778\uD560\uAE4C\uC694?', ' - Let\'s seal the deal with a handshake?')}</span>
            </li>
            <li>
              <code>I'm confident this agreement will benefit both parties.</code>
              <span className="translation">{t(' - \uC774 \uD569\uC758\uAC00 \uC591\uCE21 \uBAA8\uB450\uC5D0\uAC8C \uC774\uC775\uC774 \uB420 \uAC83\uC774\uB77C \uD655\uC2E0\uD569\uB2C8\uB2E4.', ' - I\'m sure this deal benefits both parties.')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Example Negotiation Dialogue */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="600">
        <h2>{t('\uD611\uC0C1 \uB300\uD654 \uC608\uC2DC', 'Example Negotiation Dialogue')}</h2>
        <div className="example-box">
          <h4>{t('\uACF5\uAE09 \uACC4\uC57D \uD611\uC0C1', 'Supply Contract Negotiation')}</h4>
          <div className="dialogue">
            <p><span className="speaker a">Buyer (Park):</span> Thank you for meeting with us today. We're here to discuss the terms of a supply contract for our electronic components. Let me start by outlining our position.</p>
            <p><span className="speaker b">Supplier (Johnson):</span> Of course. We're very interested in this partnership. Please go ahead.</p>
            <p><span className="speaker a">Park:</span> We're looking to purchase 10,000 units per month. Based on our market research, we believe a fair price would be in the range of $45 to $48 per unit.</p>
            <p><span className="speaker b">Johnson:</span> We appreciate your interest. However, given the current raw material costs, our standard pricing starts at $55 per unit. That said, for a long-term contract, we could offer $52.</p>
            <p><span className="speaker a">Park:</span> I'm afraid that doesn't quite work for us. Our budget constraints require us to stay below $50 per unit. What if we were to increase the order volume to 15,000 units per month? Would that allow for more competitive pricing?</p>
            <p><span className="speaker b">Johnson:</span> That's a good starting point for discussion. With 15,000 units, we could come down to $49, but we'd need a 12-month commitment.</p>
            <p><span className="speaker a">Park:</span> How about we meet halfway? We'll commit to a 12-month contract at 15,000 units, and you bring the price down to $48 per unit. We're also willing to handle the shipping logistics on our end, which should reduce your costs.</p>
            <p><span className="speaker b">Johnson:</span> I think there's room for compromise here. We can agree to $48 per unit if you can also commit to a 60-day payment cycle instead of the standard 90 days.</p>
            <p><span className="speaker a">Park:</span> We can be flexible on the payment terms. Let's agree on 60-day net payment.</p>
            <p><span className="speaker b">Johnson:</span> I think we've reached a good agreement. Let me summarize: 15,000 units per month at $48 per unit, 12-month contract, 60-day payment terms, with shipping handled by your team.</p>
            <p><span className="speaker a">Park:</span> That's correct. We have a deal. I'll have our legal team draft the contract based on these terms. We look forward to a long and successful partnership.</p>
            <p><span className="speaker b">Johnson:</span> Likewise. Thank you for your flexibility. I'm confident this agreement will benefit both parties.</p>
          </div>
        </div>

        <div className="tip-box" data-aos="fade-up">
          <h3>{t('\uB300\uD654 \uBD84\uC11D', 'Dialogue Analysis')}</h3>
          <ul>
            <li>{t('\uC591\uCE21 \uBAA8\uB450 \uC0C1\uB300\uBC29\uC758 \uC81C\uC548\uC744 \uC778\uC815\uD55C \uD6C4\uC5D0 \uBC18\uB300 \uC81C\uC548\uC744 \uD569\uB2C8\uB2E4', 'Both sides acknowledge the other\'s proposal before making counter-offers')}</li>
            <li>{t('\uAD6C\uCCB4\uC801\uC778 \uC22B\uC790\uC640 \uC870\uAC74\uC744 \uC81C\uC2DC\uD558\uC5EC \uBA85\uD655\uD55C \uD611\uC0C1\uC744 \uD569\uB2C8\uB2E4', 'Specific numbers and conditions are presented for clear negotiation')}</li>
            <li>{t('\uD55C\uCABD\uC774 \uC591\uBCF4\uD560 \uB54C \uB2E4\uB978 \uBD80\uBD84\uC5D0\uC11C \uBCF4\uC0C1\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 (\uBCFC\uB958 \uC99D\uAC00 \u2194 \uAC00\uACA9 \uC778\uD558)', 'When one side concedes, they gain in another area (volume increase vs price reduction)')}</li>
            <li>{t('\uB9C8\uBB34\uB9AC\uC5D0 \uD569\uC758 \uB0B4\uC6A9\uC744 \uC694\uC57D\uD558\uC5EC \uC624\uD574\uB97C \uBC29\uC9C0\uD569\uB2C8\uB2E4', 'Agreement is summarized at the end to prevent misunderstandings')}</li>
          </ul>
        </div>
      </section>

      {/* Key Negotiation Phrases Table */}
      <section className="lesson-section" data-aos="fade-up" data-aos-delay="650">
        <h2>{t('\uD611\uC0C1 \uD544\uC218 \uD45C\uD604 \uC815\uB9AC', 'Essential Negotiation Phrases')}</h2>
        <div className="example-box">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{t('\uC0C1\uD669', 'Situation')}</th>
                <th>{t('\uD45C\uD604', 'Expression')}</th>
                <th>{t('\uD55C\uAD6D\uC5B4', 'Korean')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('\uC2DC\uAC04 \uBC8C\uAE30', 'Buying time')}</td>
                <td><code>Let me think about that.</code></td>
                <td>{t('\uADF8 \uBD80\uBD84\uC740 \uACE0\uBBFC\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.', '')}</td>
              </tr>
              <tr>
                <td>{t('\uBA85\uD655\uD788 \uD558\uAE30', 'Clarifying')}</td>
                <td><code>Just to clarify, you're suggesting...?</code></td>
                <td>{t('\uD655\uC778\uD558\uC790\uBA74, ~\uC744 \uC81C\uC548\uD558\uC2DC\uB294 \uAC74\uAC00\uC694?', '')}</td>
              </tr>
              <tr>
                <td>{t('\uC555\uBC15 \uC644\uD654', 'Reducing pressure')}</td>
                <td><code>There's no rush on this decision.</code></td>
                <td>{t('\uC11C\uB450\uB97C \uD544\uC694\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.', '')}</td>
              </tr>
              <tr>
                <td>{t('\uB9C8\uC9C0\uB178\uC120 \uC124\uC815', 'Setting limits')}</td>
                <td><code>That's as far as we can go.</code></td>
                <td>{t('\uADF8\uAC83\uC774 \uC800\uD76C\uAC00 \uD560 \uC218 \uC788\uB294 \uCD5C\uB300\uC785\uB2C8\uB2E4.', '')}</td>
              </tr>
              <tr>
                <td>{t('\uD611\uC0C1 \uBCF4\uB958', 'Tabling discussion')}</td>
                <td><code>Let's revisit this point later.</code></td>
                <td>{t('\uC774 \uBD80\uBD84\uC740 \uB098\uC911\uC5D0 \uB2E4\uC2DC \uB17C\uC758\uD569\uC2DC\uB2E4.', '')}</td>
              </tr>
              <tr>
                <td>{t('\uB3D9\uC758 \uD655\uC778', 'Confirming agreement')}</td>
                <td><code>So we're all in agreement on this?</code></td>
                <td>{t('\uC774 \uBD80\uBD84\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD558\uC2DC\uB294 \uAC70\uC8E0?', '')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practice Section */}
      <section className="practice-section" data-aos="fade-up" data-aos-delay="700">
        <h2>{t('\uC5F0\uC2B5 \uBB38\uC81C (Practice)', 'Practice')}</h2>

        <div className="example-box">
          <h4>{t('\uC5F0\uC2B5 1: \uD611\uC0C1 \uC2DC\uB098\uB9AC\uC624', 'Exercise 1: Negotiation Scenario')}</h4>
          <p>
            {t(
              '\uB2F9\uC2E0\uC740 IT \uC11C\uBE44\uC2A4 \uD68C\uC0AC\uC758 \uC601\uC5C5 \uB2F4\uB2F9\uC790\uC785\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC6F9\uC0AC\uC774\uD2B8 \uAC1C\uBC1C \uD504\uB85C\uC81D\uD2B8\uB97C \uC694\uCCAD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC870\uAC74\uC73C\uB85C \uD611\uC0C1 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC791\uC131\uD574 \uBCF4\uC138\uC694:',
              'You are a sales representative at an IT services company. A new client has requested a website development project. Write a negotiation script with the following conditions:'
            )}
          </p>
          <ul>
            <li>{t('\uADC0\uC0AC \uD76C\uB9DD \uAC00\uACA9: $30,000 / \uD074\uB77C\uC774\uC5B8\uD2B8 \uC608\uC0B0: $20,000', 'Your desired price: $30,000 / Client budget: $20,000')}</li>
            <li>{t('\uADC0\uC0AC \uD76C\uB9DD \uAE30\uAC04: 4\uAC1C\uC6D4 / \uD074\uB77C\uC774\uC5B8\uD2B8 \uD76C\uB9DD: 2\uAC1C\uC6D4', 'Your desired timeline: 4 months / Client wants: 2 months')}</li>
            <li>{t('\uC720\uC9C0\uBCF4\uC218 \uACC4\uC57D \uCD94\uAC00 \uAC00\uB2A5', 'Maintenance contract available as add-on')}</li>
          </ul>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers
            ? t('\uBAA8\uBC94 \uB2F5\uC548 \uC228\uAE30\uAE30', 'Hide Sample Answer')
            : t('\uBAA8\uBC94 \uB2F5\uC548 \uBCF4\uAE30', 'Show Sample Answer')
          }
        </button>

        {showAnswers && (
          <div className="example-box" data-aos="fade-up">
            <h4>{t('\uBAA8\uBC94 \uB2F5\uC548', 'Sample Answer')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">You:</span> Thank you for considering us for this project. We're here today to discuss the terms for your website development. Let me start by outlining what we can offer.</p>
              <p><span className="speaker b">Client:</span> Sure, please go ahead.</p>
              <p><span className="speaker a">You:</span> Based on the scope you've described, we believe a fair price would be in the range of $28,000 to $30,000 for a comprehensive solution, with a timeline of about 4 months.</p>
              <p><span className="speaker b">Client:</span> I appreciate the proposal, but our budget is around $20,000, and we'd really need this completed in 2 months.</p>
              <p><span className="speaker a">You:</span> I understand your position. Would you be open to considering a phased approach? We could deliver the core website in Phase 1 within 2.5 months for $24,000, and then add advanced features in Phase 2.</p>
              <p><span className="speaker b">Client:</span> That's interesting. But $24,000 is still above our budget.</p>
              <p><span className="speaker a">You:</span> How about we meet halfway? We'll do Phase 1 for $22,000 with a 3-month timeline. Additionally, we'd offer a discounted annual maintenance contract at $3,000 per year, which normally costs $5,000. This way, you get long-term support at a great value.</p>
              <p><span className="speaker b">Client:</span> I think there's room for compromise here. Let me discuss this with my team and get back to you.</p>
              <p><span className="speaker a">You:</span> Of course. Take your time. We look forward to working with you.</p>
            </div>
          </div>
        )}

        <div className="example-box" data-aos="fade-up">
          <h4>{t('\uC5F0\uC2B5 2: \uD45C\uD604 \uC644\uC131\uD558\uAE30', 'Exercise 2: Complete the Expressions')}</h4>
          <ol>
            <li>"We appreciate your offer, ________ we were thinking more along the lines of $35 per unit." {t('(\uBC18\uB300 \uC81C\uC548)', '(Counter-offer)')}</li>
            <li>"________ we increase the order to 20,000 units? Would that allow for better pricing?" {t('(\uC81C\uC548)', '(Proposal)')}</li>
            <li>"We're ________ to make a concession on the delivery schedule if you can adjust the payment terms." {t('(\uD0C0\uD611)', '(Compromise)')}</li>
            <li>"I think we've ________ a good agreement. Let me summarize the key points." {t('(\uCCB4\uACB0)', '(Closing)')}</li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default Negotiation;
