import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import PageLayout from '../../components/PageLayout';

function Negotiation(): React.ReactElement {
  const { t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  useAOS();

  const sections = [
    { id: 'opening', ko: '협상 시작', en: 'Opening' },
    { id: 'proposals', ko: '제안하기', en: 'Proposals' },
    { id: 'counter', ko: '반대 제안', en: 'Counter-Offers' },
    { id: 'compromise', ko: '타협 표현', en: 'Compromise' },
    { id: 'closing', ko: '계약 체결', en: 'Closing Deals' },
    { id: 'dialogue', ko: '대화 예시', en: 'Dialogue' },
    { id: 'summary', ko: '필수 표현', en: 'Key Phrases' },
  ];

  return (
    <>
      <SEOHead
        title={t(
          '협상 & 설득 영어 - English Pro',
          'Negotiation & Persuasion English - English Pro'
        )}
        description={t(
          '비즈니스 협상, 제안, 반대 제안, 타협, 계약 체결을 위한 핵심 영어 표현을 학습합니다.',
          'Learn key English expressions for business negotiation, proposals, counter-offers, compromise, and closing deals.'
        )}
      />

      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/business">{t('비즈니스', 'Business')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('협상 & 설득', 'Negotiation')}</span>
          </div>
          <h1 className="page-header__title">{t('협상 & 설득', 'Negotiation & Persuasion')}</h1>
          <p className="page-header__description">
            {t(
              '비즈니스 협상에서 원하는 결과를 얻기 위한 전략적 영어 표현을 배워보세요.',
              'Learn strategic English expressions to achieve desired results in business negotiations.'
            )}
          </p>
        </div>
      </section>

      <PageLayout sections={sections} category="business">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('학습 목표', 'Learning Objectives')}</h3>
              <ul>
                <li>{t('협상을 시작할 때 자신의 입장을 명확히 전달하는 표현을 익힙니다.', 'Learn expressions to clearly state your position when opening a negotiation.')}</li>
                <li>{t('제안 및 반대 제안을 할 때 사용하는 전략적 표현을 학습합니다.', 'Learn strategic expressions for making proposals and counter-offers.')}</li>
                <li>{t('타협점을 찾고 Win-Win 합의에 도달하는 표현을 배웁니다.', 'Learn expressions for finding compromise and reaching Win-Win agreements.')}</li>
                <li>{t('계약 체결 및 합의 마무리 표현을 습득합니다.', 'Master expressions for closing deals and finalizing agreements.')}</li>
              </ul>
            </div>

            {/* Section 1: Opening Positions */}
            <h2 id="opening">{t('협상 시작 (Opening Positions)', 'Opening Positions')}</h2>
            <p>
              {t(
                '협상의 첫 단계에서는 자신의 입장을 명확하게 전달하면서도 유연성을 보여주는 것이 중요합니다.',
                'In the opening phase, it\'s important to clearly state your position while showing flexibility.'
              )}
            </p>
            <div className="example-box">
              <h4>{t('협상 시작 표현', 'Opening Negotiation Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>Let me start by outlining our position.</code>
                  <span className="translation">{t(' - 저희의 입장을 먼저 설명하겠습니다.', ' - Let me begin by explaining our stance.')}</span>
                </li>
                <li>
                  <code>We're here today to discuss the terms of...</code>
                  <span className="translation">{t(' - 오늘 ~의 조건에 대해 논의하기 위해 모였습니다.', ' - We\'re here to discuss the terms of...')}</span>
                </li>
                <li>
                  <code>Our primary objective is to find a mutually beneficial agreement.</code>
                  <span className="translation">{t(' - 우리의 주요 목표는 상호 이익이 되는 합의를 찾는 것입니다.', ' - Our main goal is a mutually beneficial agreement.')}</span>
                </li>
                <li>
                  <code>We value this partnership and want to make sure both sides are satisfied.</code>
                  <span className="translation">{t(' - 이 파트너십을 소중히 여기며 양컡 모두 만족하길 바랍니다.', ' - We value this partnership and want both sides satisfied.')}</span>
                </li>
                <li>
                  <code>Before we get into specifics, let's agree on the overall framework.</code>
                  <span className="translation">{t(' - 세부 사항에 들어가기 전에, 전체적인 틀에 합의합시다.', ' - Before details, let\'s agree on the overall framework.')}</span>
                </li>
                <li>
                  <code>I'd like to begin by understanding your key priorities.</code>
                  <span className="translation">{t(' - 먼저 귀사의 핵심 우선순위를 이해하고 싶습니다.', ' - I\'d like to start by understanding your key priorities.')}</span>
                </li>
              </ul>
            </div>

            {/* Section 2: Making Proposals */}
            <h2 id="proposals">{t('제안하기 (Making Proposals)', 'Making Proposals')}</h2>
            <div className="example-box">
              <h4>{t('제안 표현', 'Proposal Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>What if we were to...?</code>
                  <span className="translation">{t(' - 만약 우리가 ~한다면 어떨까요?', ' - What if we...?')}</span>
                </li>
                <li>
                  <code>We'd like to propose the following terms...</code>
                  <span className="translation">{t(' - 다음과 같은 조건을 제안하고 싶습니다.', ' - We\'d like to suggest the following terms...')}</span>
                </li>
                <li>
                  <code>How would you feel about...?</code>
                  <span className="translation">{t(' - ~에 대해 어떻게 생각하시나요?', ' - What do you think about...?')}</span>
                </li>
                <li>
                  <code>Would you be open to considering...?</code>
                  <span className="translation">{t(' - ~을 고려해 보실 의향이 있으신가요?', ' - Would you consider...?')}</span>
                </li>
                <li>
                  <code>We believe a fair price would be in the range of...</code>
                  <span className="translation">{t(' - 적정 가격은 ~ 범위라고 생각합니다.', ' - We think a fair price would be around...')}</span>
                </li>
                <li>
                  <code>I'd like to suggest an alternative approach.</code>
                  <span className="translation">{t(' - 대안을 제시하고 싶습니다.', ' - I\'d like to propose an alternative.')}</span>
                </li>
                <li>
                  <code>Let me put forward a proposal that addresses both our concerns.</code>
                  <span className="translation">{t(' - 양컡의 우려를 해결하는 제안을 하겠습니다.', ' - Let me propose something that addresses both our concerns.')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('협상 팁', 'Negotiation Tip')}</h3>
              <p>
                {t(
                  '제안을 할 때는 명령문보다 질문 형태를 사용하세요. “We want $50 per unit” 보다 “Would you be open to $50 per unit?” 가 협상에서 더 효과적입니다. 질문은 상대방에게 선택권을 주는 느낌을 줍니다.',
                  'Use question forms rather than commands when making proposals. “Would you be open to $50 per unit?” is more effective in negotiations than “We want $50 per unit.” Questions give the other party a sense of having a choice.'
                )}
              </p>
            </div>

            {/* Section 3: Counter-Offers */}
            <h2 id="counter">{t('반대 제안 (Counter-Offers)', 'Counter-Offers')}</h2>
            <div className="example-box">
              <h4>{t('반대 제안 표현', 'Counter-Offer Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>We appreciate your offer, but we were thinking more along the lines of...</code>
                  <span className="translation">{t(' - 제안에 감사하지만, 저희는 ~ 정도를 생각하고 있었습니다.', ' - Thanks for the offer, but we were thinking more like...')}</span>
                </li>
                <li>
                  <code>That's a good starting point, but we'd need to see some flexibility on...</code>
                  <span className="translation">{t(' - 좋은 출발점이지만, ~에 대해 유연성이 필요합니다.', ' - Good starting point, but we\'d need flexibility on...')}</span>
                </li>
                <li>
                  <code>I'm afraid that doesn't quite work for us. Could we consider...?</code>
                  <span className="translation">{t(' - 유감스럽지만 그건 저희에게는 어렵습니다. ~을 고려해 보실 수 있을까요?', ' - I\'m afraid that won\'t work for us. Could we look at...?')}</span>
                </li>
                <li>
                  <code>We understand your position, but our budget constraints require us to...</code>
                  <span className="translation">{t(' - 귀사의 입장을 이해하지만, 예산 제약으로 인해 ~해야 합니다.', ' - We understand, but budget constraints require us to...')}</span>
                </li>
                <li>
                  <code>We can agree to that if you could also...</code>
                  <span className="translation">{t(' - 귀사에서 ~해 주신다면 동의할 수 있습니다.', ' - We can agree if you could also...')}</span>
                </li>
                <li>
                  <code>While we can't meet that specific request, we could offer...</code>
                  <span className="translation">{t(' - 그 특정 요청은 어렵지만, ~을 제공할 수 있습니다.', ' - We can\'t meet that request, but we could offer...')}</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Compromise */}
            <h2 id="compromise">{t('타협 표현 (Compromise Expressions)', 'Compromise Expressions')}</h2>
            <div className="example-box">
              <h4>{t('타협점 찾기', 'Finding Middle Ground')}</h4>
              <ul className="expression-list">
                <li>
                  <code>How about we meet halfway on this?</code>
                  <span className="translation">{t(' - 이 부분에서 중간 지점을 찾는 건 어떨까요?', ' - How about we find a middle ground?')}</span>
                </li>
                <li>
                  <code>Perhaps we could find a middle ground.</code>
                  <span className="translation">{t(' - 아마 중간 지점을 찾을 수 있을 겁니다.', ' - Maybe we can find a compromise.')}</span>
                </li>
                <li>
                  <code>We're willing to make a concession on... if you can...</code>
                  <span className="translation">{t(' - ~에 대해 양보할 용의가 있습니다, 단 귀사가 ~해 주신다면.', ' - We\'re willing to concede on... if you can...')}</span>
                </li>
                <li>
                  <code>Let's try to find a win-win solution.</code>
                  <span className="translation">{t(' - 양컡 모두 이긴의 해결책을 찾아봅시다.', ' - Let\'s find a solution that benefits both sides.')}</span>
                </li>
                <li>
                  <code>I think there's room for compromise here.</code>
                  <span className="translation">{t(' - 여기서 타협의 여지가 있다고 봅니다.', ' - I see room for compromise here.')}</span>
                </li>
                <li>
                  <code>We can be flexible on the timeline if you can adjust the budget.</code>
                  <span className="translation">{t(' - 귀사가 예산을 조정해 주신다면 일정에 대해서는 유연하게 대처할 수 있습니다.', ' - We can flex on timeline if you can adjust the budget.')}</span>
                </li>
                <li>
                  <code>Would you consider a phased approach?</code>
                  <span className="translation">{t(' - 단계적 접근을 고려해 보시겠습니까?', ' - Would you consider a step-by-step approach?')}</span>
                </li>
              </ul>
            </div>

            <div className="tip-box">
              <h3>{t('협상 전략 팁', 'Negotiation Strategy Tip')}</h3>
              <p>
                {t(
                  '효과적인 협상의 핵심은 “Win-Win” 입니다. 상대방이 무엇을 원하는지 먼저 파악한 후, 양컡 모두에게 이로운 방안을 찾으세요. 한 부분에서 양보할 때는 다른 부분에서 보상을 받는 것이 좋습니다.',
                  'The key to effective negotiation is “Win-Win”. First understand what the other party wants, then find solutions beneficial to both. When conceding in one area, seek compensation in another.'
                )}
              </p>
            </div>

            {/* Section 5: Closing Deals */}
            <h2 id="closing">{t('계약 체결 (Closing Deals)', 'Closing Deals')}</h2>
            <div className="example-box">
              <h4>{t('계약 체결 표현', 'Deal Closing Expressions')}</h4>
              <ul className="expression-list">
                <li>
                  <code>I think we've reached a good agreement.</code>
                  <span className="translation">{t(' - 좋은 합의에 도달한 것 같습니다.', ' - I believe we\'ve reached a solid agreement.')}</span>
                </li>
                <li>
                  <code>Let me summarize what we've agreed on.</code>
                  <span className="translation">{t(' - 합의된 내용을 요약하겠습니다.', ' - Let me recap what we\'ve agreed.')}</span>
                </li>
                <li>
                  <code>We have a deal.</code>
                  <span className="translation">{t(' - 계약 성립입니다.', ' - It\'s a deal.')}</span>
                </li>
                <li>
                  <code>I'll have our legal team draft the contract based on these terms.</code>
                  <span className="translation">{t(' - 이 조건을 바탕으로 법무팀에서 계약서를 작성하도록 하겠습니다.', ' - I\'ll have our legal team prepare the contract.')}</span>
                </li>
                <li>
                  <code>We look forward to a long and successful partnership.</code>
                  <span className="translation">{t(' - 길고 성공적인 파트너십을 기대합니다.', ' - We look forward to a lasting and successful partnership.')}</span>
                </li>
                <li>
                  <code>Shall we shake on it?</code>
                  <span className="translation">{t(' - 악수로 합의를 확인할까요?', ' - Let\'s seal the deal with a handshake?')}</span>
                </li>
                <li>
                  <code>I'm confident this agreement will benefit both parties.</code>
                  <span className="translation">{t(' - 이 합의가 양컡 모두에게 이익이 될 것이라 확신합니다.', ' - I\'m sure this deal benefits both parties.')}</span>
                </li>
              </ul>
            </div>

            {/* Example Negotiation Dialogue */}
            <h2 id="dialogue">{t('협상 대화 예시', 'Example Negotiation Dialogue')}</h2>
            <div className="example-box">
              <h4>{t('공급 계약 협상', 'Supply Contract Negotiation')}</h4>
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

            <div className="tip-box">
              <h3>{t('대화 분석', 'Dialogue Analysis')}</h3>
              <ul>
                <li>{t('양컡 모두 상대방의 제안을 인정한 후에 반대 제안을 합니다', 'Both sides acknowledge the other\'s proposal before making counter-offers')}</li>
                <li>{t('구체적인 숫자와 조건을 제시하여 명확한 협상을 합니다', 'Specific numbers and conditions are presented for clear negotiation')}</li>
                <li>{t('한쪽이 양보할 때 다른 부분에서 보상을 받습니다 (볼류 증가 ↔ 가격 인하)', 'When one side concedes, they gain in another area (volume increase vs price reduction)')}</li>
                <li>{t('마무리에 합의 내용을 요약하여 오해를 방지합니다', 'Agreement is summarized at the end to prevent misunderstandings')}</li>
              </ul>
            </div>

            {/* Key Negotiation Phrases Table */}
            <h2 id="summary">{t('협상 필수 표현 정리', 'Essential Negotiation Phrases')}</h2>
            <div className="example-box">
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>{t('상황', 'Situation')}</th>
                    <th>{t('표현', 'Expression')}</th>
                    <th>{t('한국어', 'Korean')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('시간 벌기', 'Buying time')}</td>
                    <td><code>Let me think about that.</code></td>
                    <td>{t('그 부분은 고민해 보겠습니다.', '')}</td>
                  </tr>
                  <tr>
                    <td>{t('명확히 하기', 'Clarifying')}</td>
                    <td><code>Just to clarify, you're suggesting...?</code></td>
                    <td>{t('확인하자면, ~을 제안하시는 건가요?', '')}</td>
                  </tr>
                  <tr>
                    <td>{t('압박 완화', 'Reducing pressure')}</td>
                    <td><code>There's no rush on this decision.</code></td>
                    <td>{t('서두를 필요는 없습니다.', '')}</td>
                  </tr>
                  <tr>
                    <td>{t('마지노선 설정', 'Setting limits')}</td>
                    <td><code>That's as far as we can go.</code></td>
                    <td>{t('그것이 저희가 할 수 있는 최대입니다.', '')}</td>
                  </tr>
                  <tr>
                    <td>{t('협상 보류', 'Tabling discussion')}</td>
                    <td><code>Let's revisit this point later.</code></td>
                    <td>{t('이 부분은 나중에 다시 논의합시다.', '')}</td>
                  </tr>
                  <tr>
                    <td>{t('동의 확인', 'Confirming agreement')}</td>
                    <td><code>So we're all in agreement on this?</code></td>
                    <td>{t('이 부분에 모두 동의하시는 거죠?', '')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Exercise Section */}
            <div className="exercise-box">
              <h3>{t('연습 문제', 'Practice')}</h3>

              <div className="example-box">
                <h4>{t('연습 1: 협상 시나리오', 'Exercise 1: Negotiation Scenario')}</h4>
                <p>
                  {t(
                    '당신은 IT 서비스 회사의 영업 담당자입니다. 새로운 클라이언트가 웹사이트 개발 프로젝트를 요청했습니다. 다음 조건으로 협상 스크립트를 작성해 보세요:',
                    'You are a sales representative at an IT services company. A new client has requested a website development project. Write a negotiation script with the following conditions:'
                  )}
                </p>
                <ul>
                  <li>{t('귀사 희망 가격: $30,000 / 클라이언트 예산: $20,000', 'Your desired price: $30,000 / Client budget: $20,000')}</li>
                  <li>{t('귀사 희망 기간: 4개월 / 클라이언트 희망: 2개월', 'Your desired timeline: 4 months / Client wants: 2 months')}</li>
                  <li>{t('유지보수 계약 추가 가능', 'Maintenance contract available as add-on')}</li>
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

              <div className="example-box">
                <h4>{t('연습 2: 표현 완성하기', 'Exercise 2: Complete the Expressions')}</h4>
                <ol>
                  <li>"We appreciate your offer, ________ we were thinking more along the lines of $35 per unit." {t('(반대 제안)', '(Counter-offer)')}</li>
                  <li>"________ we increase the order to 20,000 units? Would that allow for better pricing?" {t('(제안)', '(Proposal)')}</li>
                  <li>"We're ________ to make a concession on the delivery schedule if you can adjust the payment terms." {t('(타협)', '(Compromise)')}</li>
                  <li>"I think we've ________ a good agreement. Let me summarize the key points." {t('(체결)', '(Closing)')}</li>
                </ol>
              </div>

              {showAnswers && (
                <div className="example-box">
                  <h4>{t('연습 2 정답', 'Exercise 2 Answers')}</h4>
                  <ol>
                    <li><strong>but</strong></li>
                    <li><strong>What if</strong></li>
                    <li><strong>willing</strong></li>
                    <li><strong>reached</strong></li>
                  </ol>
                </div>
              )}
            </div>

            <div className="lesson-nav">
              <Link to="/business/meeting" className="lesson-nav-btn prev">&larr; {t('회의 영어', 'Meeting English')}</Link>
              <Link to="/business/interview" className="lesson-nav-btn next">{t('면접 영어', 'Interview English')} &rarr;</Link>
            </div>

          </div>
      </PageLayout>
    </>
  );
}

export default Negotiation;
