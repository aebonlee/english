import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

export default function Shopping() {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  return (
    <>
      <SEOHead
        title={t('쇼핑 & 주문 - English Pro', 'Shopping & Ordering - English Pro')}
        description={t(
          '쇼핑, 주문, 반품/교환 시 필요한 영어 표현을 배워보세요.',
          'Learn essential English expressions for shopping, ordering, returns and exchanges.'
        )}
      />

      {/* Page Header */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/conversation">{t('일상 회화', 'Conversation')}</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{t('쇼핑 & 주문', 'Shopping')}</span>
          </div>
          <h1 className="page-header__title">
            {t('쇼핑 & 주문 (Shopping & Ordering)', 'Shopping & Ordering')}
          </h1>
          <p className="page-header__description">
            {t(
              '매장에서 물건을 고르고, 가격을 물어보고, 결제하는 과정에서 필요한 영어 표현을 배워보세요. 온라인 쇼핑과 반품/교환 상황에서도 자신 있게 대화할 수 있습니다.',
              'Learn English expressions for browsing, asking prices, and paying at stores. Gain confidence for online shopping and handling returns and exchanges.'
            )}
          </p>
        </div>
      </section>

      {/* Section 1: At a Store */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 매장에서 (At a Store)', '1. At a Store')}</h2>
          <p>
            {t(
              '옷가게, 마트, 백화점 등에서 쇼핑할 때 사용하는 기본 표현들입니다.',
              'Basic expressions for shopping at clothing stores, supermarkets, and department stores.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('둘러보기 & 가격 묻기', 'Browsing & Asking Prices')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'm just looking, thanks.</td><td>그냥 둘러보는 중이에요, 감사합니다.</td></tr>
                <tr><td>How much is this?</td><td>이거 얼마예요?</td></tr>
                <tr><td>How much does this cost?</td><td>이것의 가격이 얼마인가요?</td></tr>
                <tr><td>Is this on sale?</td><td>이거 세일 중인가요?</td></tr>
                <tr><td>Do you have this in a different color?</td><td>이거 다른 색상 있나요?</td></tr>
                <tr><td>Do you have this in a medium?</td><td>이거 M 사이즈 있나요?</td></tr>
                <tr><td>Can I try this on?</td><td>이거 입어봐도 될까요?</td></tr>
                <tr><td>Where is the fitting room?</td><td>탈의실이 어디에 있나요?</td></tr>
                <tr><td>Do you have anything cheaper?</td><td>더 저렴한 것 있나요?</td></tr>
                <tr><td>I'll take this one.</td><td>이걸로 할게요.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 옷가게에서', 'Conversation - At a Clothing Store')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Staff:</span> Hi there! Welcome. Can I help you find anything?</p>
              <p><span className="speaker b">You:</span> Hi, I'm looking for a winter jacket.</p>
              <p><span className="speaker a">Staff:</span> Sure! We have a great selection over here. What size are you?</p>
              <p><span className="speaker b">You:</span> I'm usually a medium. How much is this navy one?</p>
              <p><span className="speaker a">Staff:</span> That one is $129.99. It's actually 20% off this week.</p>
              <p><span className="speaker b">You:</span> Oh, nice! Can I try it on?</p>
              <p><span className="speaker a">Staff:</span> Of course! The fitting room is right over there.</p>
              <p><span className="speaker b">You:</span> (after trying it on) It fits perfectly. I'll take it!</p>
              <p><span className="speaker a">Staff:</span> Great choice! Would you like to pay with cash or card?</p>
              <p><span className="speaker b">You:</span> Card, please.</p>
            </div>
            <p className="translation">
              {t(
                '직원: 안녕하세요! 환영합니다. 찾으시는 거 있으세요? / 나: 안녕하세요, 겨울 재킷을 찾고 있어요. / 직원: 네! 여기 좋은 제품들이 많아요. 사이즈가 어떻게 되세요? / 나: 보통 M이에요. 이 네이비색은 얼마예요? / 직원: 129.99달러인데, 이번 주 20% 할인 중이에요. / 나: 오, 좋네요! 입어봐도 될까요? / 직원: 물론이죠! 탈의실은 바로 저쪽에 있어요. / 나: (입어본 후) 딱 맞아요. 이걸로 할게요! / 직원: 좋은 선택이에요! 현금으로 하실 건가요 카드로 하실 건가요? / 나: 카드로 해주세요.',
                'Staff: Hi there! Welcome. Can I help you find anything? / You: Hi, I\'m looking for a winter jacket. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 쇼핑 팁', '💡 Shopping Tip')}</h4>
            <p>
              {t(
                '미국 매장에서 직원이 "Can I help you?"라고 물으면, 아직 정하지 않았다면 "I\'m just browsing, thanks." 또는 "I\'m just looking."이라고 대답하면 됩니다. 직원이 계속 따라다니지 않습니다.',
                'When staff in US stores ask "Can I help you?", if you haven\'t decided yet, just say "I\'m just browsing, thanks." or "I\'m just looking." The staff won\'t follow you around.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Paying */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 결제하기 (Paying)', '2. Paying')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('결제 관련 표현', 'Payment Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'd like to pay for these.</td><td>이것들 계산하고 싶어요.</td></tr>
                <tr><td>Do you accept credit cards?</td><td>신용카드 받으시나요?</td></tr>
                <tr><td>Can I pay with Apple Pay?</td><td>애플페이로 결제할 수 있나요?</td></tr>
                <tr><td>Could I get a receipt, please?</td><td>영수증 주실 수 있나요?</td></tr>
                <tr><td>Do you have a bag?</td><td>봉투 있나요?</td></tr>
                <tr><td>I don't need a bag, thanks.</td><td>봉투 괜찮아요, 감사합니다.</td></tr>
                <tr><td>Is there a discount for cash?</td><td>현금 할인 있나요?</td></tr>
                <tr><td>Can I get gift wrapping?</td><td>선물 포장 가능한가요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 카페에서 주문하기', 'Conversation - Ordering at a Cafe')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Staff:</span> Hi, what can I get for you?</p>
              <p><span className="speaker b">You:</span> I'd like a large latte, please.</p>
              <p><span className="speaker a">Staff:</span> Hot or iced?</p>
              <p><span className="speaker b">You:</span> Iced, please. And could I add an extra shot of espresso?</p>
              <p><span className="speaker a">Staff:</span> Sure! Anything else?</p>
              <p><span className="speaker b">You:</span> Do you have any blueberry muffins left?</p>
              <p><span className="speaker a">Staff:</span> Yes, we do! So that's a large iced latte with an extra shot and a blueberry muffin. That'll be $8.50.</p>
              <p><span className="speaker b">You:</span> Here you go. Can I pay with card?</p>
              <p><span className="speaker a">Staff:</span> Of course! Just tap or insert your card here. Your name for the order?</p>
              <p><span className="speaker b">You:</span> Jina, please.</p>
            </div>
            <p className="translation">
              {t(
                '직원: 안녕하세요, 뭘 드릴까요? / 나: 라떼 큰 거 하나 주세요. / 직원: 핫으로 할까요, 아이스로 할까요? / 나: 아이스요. 그리고 에스프레소 샷 추가할 수 있나요? / 직원: 물론이죠! 다른 건요? / 나: 블루베리 머핀 남은 거 있나요? / 직원: 네, 있어요! 라떼 큰 거 아이스 샷 추가, 블루베리 머핀 하나 합해서 8.50달러입니다. / 나: 여기요. 카드로 결제해도 될까요? / 직원: 물론이죠! 여기에 카드를 터치하거나 넣어주세요. 주문자 성함은요? / 나: Jina요.',
                'Staff: Hi, what can I get for you? / You: I\'d like a large latte, please. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Online Shopping */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 온라인 쇼핑 (Online Shopping)', '3. Online Shopping')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('온라인 쇼핑 표현', 'Online Shopping Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I ordered it online.</td><td>온라인으로 주문했어.</td></tr>
                <tr><td>How long does shipping take?</td><td>배송 얼마나 걸려요?</td></tr>
                <tr><td>Is there free shipping?</td><td>무료 배송인가요?</td></tr>
                <tr><td>My order hasn't arrived yet.</td><td>주문한 게 아직 안 왔어요.</td></tr>
                <tr><td>Can I track my order?</td><td>주문 추적할 수 있나요?</td></tr>
                <tr><td>I got the wrong item.</td><td>다른 물건이 왔어요.</td></tr>
                <tr><td>The product is out of stock.</td><td>상품이 품절이에요.</td></tr>
                <tr><td>Add to cart.</td><td>장바구니에 담기.</td></tr>
                <tr><td>Proceed to checkout.</td><td>결제 진행하기.</td></tr>
                <tr><td>Apply coupon code.</td><td>쿠폰 코드 적용.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 고객 서비스에 전화', 'Conversation - Calling Customer Service')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Agent:</span> Thank you for calling ShopStar customer service. How can I help you today?</p>
              <p><span className="speaker b">You:</span> Hi, I placed an order last week, but it still hasn't arrived.</p>
              <p><span className="speaker a">Agent:</span> I'm sorry to hear that. Could I have your order number, please?</p>
              <p><span className="speaker b">You:</span> Sure, it's A-7-8-5-2-3.</p>
              <p><span className="speaker a">Agent:</span> Let me check that for you... It looks like there was a delay at the warehouse. It should arrive within the next two business days.</p>
              <p><span className="speaker b">You:</span> Okay, that's a relief. Can I get a tracking number?</p>
              <p><span className="speaker a">Agent:</span> Absolutely. I'll email it to you right away. Is there anything else I can help you with?</p>
              <p><span className="speaker b">You:</span> No, that's all. Thank you for your help.</p>
            </div>
            <p className="translation">
              {t(
                '상담원: ShopStar 고객 서비스에 전화 주셔서 감사합니다. 어떻게 도와드릴까요? / 나: 안녕하세요, 지난주에 주문했는데 아직 도착하지 않았어요. / 상담원: 죄송합니다. 주문번호 알려주시겠어요? / 나: 네, A-7-8-5-2-3이에요. / 상담원: 확인해 볼게요... 창고에서 지연이 있었네요. 영업일 기준 이틀 내로 도착할 겁니다. / 나: 다행이네요. 추적 번호 받을 수 있을까요? / 상담원: 물론이죠. 바로 이메일로 보내드릴게요. 다른 도움이 필요하신 건 있으세요? / 나: 아니요, 됐어요. 도와주셔서 감사합니다.',
                'Agent: Thank you for calling ShopStar customer service. How can I help you today? / You: Hi, I placed an order last week, but it still hasn\'t arrived. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Returns & Exchanges */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 반품 & 교환 (Returns & Exchanges)', '4. Returns & Exchanges')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('반품/교환 표현', 'Return/Exchange Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'd like to return this.</td><td>이것을 반품하고 싶어요.</td></tr>
                <tr><td>Can I exchange this for a different size?</td><td>다른 사이즈로 교환할 수 있나요?</td></tr>
                <tr><td>I have the receipt.</td><td>영수증 있어요.</td></tr>
                <tr><td>This doesn't fit me.</td><td>저한테 안 맞아요.</td></tr>
                <tr><td>There's a defect in this product.</td><td>이 제품에 결함이 있어요.</td></tr>
                <tr><td>Can I get a refund?</td><td>환불 받을 수 있나요?</td></tr>
                <tr><td>What's your return policy?</td><td>반품 정책이 어떻게 되나요?</td></tr>
                <tr><td>I bought this yesterday.</td><td>이거 어제 샀어요.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 매장에서 반품', 'Conversation - Returning an Item')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Excuse me, I'd like to return this shirt.</p>
              <p><span className="speaker a">Staff:</span> Sure, is there a problem with it?</p>
              <p><span className="speaker b">You:</span> It doesn't fit. I need a larger size, but you didn't have it in stock.</p>
              <p><span className="speaker a">Staff:</span> I see. Do you have the receipt?</p>
              <p><span className="speaker b">You:</span> Yes, here it is. I bought it three days ago.</p>
              <p><span className="speaker a">Staff:</span> That's within our 30-day return policy. Would you like a refund or store credit?</p>
              <p><span className="speaker b">You:</span> A refund, please. Can it go back on my credit card?</p>
              <p><span className="speaker a">Staff:</span> Of course. The refund will appear on your card within 3-5 business days.</p>
              <p><span className="speaker b">You:</span> Great, thank you!</p>
            </div>
            <p className="translation">
              {t(
                '나: 실례합니다, 이 셔츠를 반품하고 싶어요. / 직원: 네, 문제가 있으셨나요? / 나: 사이즈가 안 맞아요. 더 큰 사이즈가 필요한데 재고가 없더라고요. / 직원: 그렇군요. 영수증 있으세요? / 나: 네, 여기 있어요. 3일 전에 샀어요. / 직원: 30일 반품 기간 내네요. 환불해 드릴까요, 아니면 스토어 크레딧으로 드릴까요? / 나: 환불로 해주세요. 신용카드로 돌려받을 수 있나요? / 직원: 물론이죠. 환불은 영업일 기준 3-5일 내에 카드에 반영됩니다. / 나: 감사합니다!',
                'You: Excuse me, I\'d like to return this shirt. / Staff: Sure, is there a problem with it? ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 반품 팁', '💡 Return Tips')}</h4>
            <p>
              {t(
                '미국과 영국에서는 대부분의 매장이 영수증만 있으면 30일 이내 반품을 허용합니다. "store credit"은 현금 대신 해당 매장에서만 사용할 수 있는 크레딧을 말합니다. 환불을 원하면 반드시 "I\'d like a refund"라고 명확히 말하세요.',
                'Most stores in the US and UK allow returns within 30 days with a receipt. "Store credit" means credit that can only be used at that store instead of cash. If you want a refund, make sure to clearly say "I\'d like a refund."'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Key Expressions Summary */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('핵심 표현 정리', 'Key Expressions Summary')}</h2>
          <div className="example-box" data-aos="fade-up">
            <table className="expression-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t('영어 표현', 'English Expression')}</th>
                  <th>{t('한국어 뜻', 'Korean Meaning')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>I'm just looking, thanks.</td><td>그냥 둘러보는 중이에요.</td></tr>
                <tr><td>2</td><td>How much is this?</td><td>이거 얼마예요?</td></tr>
                <tr><td>3</td><td>Do you have this in a different size?</td><td>이거 다른 사이즈 있나요?</td></tr>
                <tr><td>4</td><td>Can I try this on?</td><td>입어봐도 될까요?</td></tr>
                <tr><td>5</td><td>I'll take this one.</td><td>이걸로 할게요.</td></tr>
                <tr><td>6</td><td>Is this on sale?</td><td>이거 세일 중인가요?</td></tr>
                <tr><td>7</td><td>Do you accept credit cards?</td><td>신용카드 받으시나요?</td></tr>
                <tr><td>8</td><td>Could I get a receipt?</td><td>영수증 주실 수 있나요?</td></tr>
                <tr><td>9</td><td>I'd like to return this.</td><td>이것을 반품하고 싶어요.</td></tr>
                <tr><td>10</td><td>Can I get a refund?</td><td>환불 받을 수 있나요?</td></tr>
                <tr><td>11</td><td>Can I exchange this?</td><td>이거 교환할 수 있나요?</td></tr>
                <tr><td>12</td><td>There's a defect in this product.</td><td>이 제품에 결함이 있어요.</td></tr>
                <tr><td>13</td><td>How long does shipping take?</td><td>배송 얼마나 걸려요?</td></tr>
                <tr><td>14</td><td>Is there free shipping?</td><td>무료 배송인가요?</td></tr>
                <tr><td>15</td><td>My order hasn't arrived yet.</td><td>주문한 게 아직 안 왔어요.</td></tr>
                <tr><td>16</td><td>What's your return policy?</td><td>반품 정책이 어떻게 되나요?</td></tr>
                <tr><td>17</td><td>I'd like a large latte, please.</td><td>라떼 큰 거 하나 주세요.</td></tr>
                <tr><td>18</td><td>Anything else?</td><td>다른 건요?</td></tr>
                <tr><td>19</td><td>Where is the fitting room?</td><td>탈의실이 어디에 있나요?</td></tr>
                <tr><td>20</td><td>Do you have anything cheaper?</td><td>더 저렴한 것 있나요?</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Practice Exercises */}
      <section className="practice-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('연습 문제', 'Practice Exercises')}</h2>
          <p>
            {t('빈칸에 알맞은 표현을 채워 넣어보세요.', 'Fill in the blanks with the appropriate expressions.')}
          </p>

          <div className="practice-questions" data-aos="fade-up">
            <div className="practice-item">
              <p className="practice-question">
                <strong>Q1.</strong> {t('가격을 물어볼 때:', 'Asking the price:')} <br />
                "________ is this jacket?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> How much
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('입어보고 싶을 때:', 'When you want to try something on:')} <br />
                "________ I ________ this on?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Can / try
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('반품하고 싶을 때:', 'When you want to return an item:')} <br />
                "I'd ________ to ________ this."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> like / return
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('그냥 둘러보는 중일 때:', 'When you\'re just browsing:')} <br />
                "I'm ________ looking, thanks."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> just
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('다른 사이즈를 물어볼 때:', 'Asking for a different size:')} <br />
                "Do you ________ this in a ________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> have / small (or medium, large)
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('영수증을 요청할 때:', 'Requesting a receipt:')} <br />
                "Could I ________ a ________, please?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> get / receipt
                </p>
              )}
            </div>
          </div>

          <button
            className="btn btn-primary mt-lg"
            onClick={() => setShowAnswers(!showAnswers)}
          >
            {showAnswers
              ? t('정답 숨기기', 'Hide Answers')
              : t('정답 보기', 'Show Answers')}
          </button>
        </div>
      </section>

      {/* Navigation */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-nav">
            <Link to="/conversation/daily-life" className="btn btn-secondary">
              {t('← 이전: 일상생활 표현', '← Prev: Daily Life')}
            </Link>
            <Link to="/conversation/travel" className="btn btn-primary">
              {t('다음: 여행 영어 →', 'Next: Travel →')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
