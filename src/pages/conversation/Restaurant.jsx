import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';

export default function Restaurant() {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  return (
    <>
      <SEOHead
        title={t('음식점 영어 - English Pro', 'Restaurant English - English Pro')}
        description={t(
          '예약, 주문, 계산 등 레스토랑에서 필요한 영어 표현을 배워보세요.',
          'Learn essential English for reservations, ordering, and paying at restaurants.'
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
            <span>{t('음식점 영어', 'Restaurant')}</span>
          </div>
          <h1 className="page-header__title">
            {t('음식점 영어 (At the Restaurant)', 'At the Restaurant')}
          </h1>
          <p className="page-header__description">
            {t(
              '레스토랑에서 예약부터 계산까지 자신 있게 영어로 대화할 수 있도록 상황별 표현을 정리했습니다.',
              'We have organized expressions by situation so you can confidently speak English at a restaurant from reservation to payment.'
            )}
          </p>
        </div>
      </section>

      {/* Section 1: Reservation */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 예약하기 (Making a Reservation)', '1. Making a Reservation')}</h2>
          <p>
            {t(
              '인기 있는 레스토랑은 예약이 필수입니다. 전화나 현장에서 예약할 때 사용하는 표현들을 배워봅시다.',
              'Reservations are essential for popular restaurants. Let\'s learn expressions for making reservations by phone or in person.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('예약 관련 표현', 'Reservation Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'd like to make a reservation.</td><td>예약하고 싶습니다.</td></tr>
                <tr><td>A table for two, please.</td><td>2명 자리 부탁합니다.</td></tr>
                <tr><td>Do you have any tables available tonight?</td><td>오늘 밤에 자리 있나요?</td></tr>
                <tr><td>I have a reservation under [이름].</td><td>[이름]으로 예약했습니다.</td></tr>
                <tr><td>Could we sit by the window?</td><td>창가 자리에 앉을 수 있나요?</td></tr>
                <tr><td>How long is the wait?</td><td>대기 시간이 얼마나 되나요?</td></tr>
                <tr><td>Can we be seated outside?</td><td>야외 좌석에 앉을 수 있나요?</td></tr>
                <tr><td>I'd like to cancel my reservation.</td><td>예약을 취소하고 싶습니다.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 전화 예약', 'Conversation - Phone Reservation')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Host:</span> Thank you for calling Bella Italia. How can I help you?</p>
              <p><span className="speaker b">You:</span> Hi, I'd like to make a reservation for this Friday evening.</p>
              <p><span className="speaker a">Host:</span> Sure. How many guests?</p>
              <p><span className="speaker b">You:</span> Four people. Around 7 PM, if possible.</p>
              <p><span className="speaker a">Host:</span> Let me check... We have a table available at 7:15. Would that work?</p>
              <p><span className="speaker b">You:</span> Yes, that's fine.</p>
              <p><span className="speaker a">Host:</span> Great. And the name for the reservation?</p>
              <p><span className="speaker b">You:</span> Kim. K-I-M.</p>
              <p><span className="speaker a">Host:</span> Perfect. A table for four at 7:15 on Friday, under Kim. Do you have any special requests?</p>
              <p><span className="speaker b">You:</span> Could we have a table by the window, if possible?</p>
              <p><span className="speaker a">Host:</span> I'll do my best. See you Friday!</p>
            </div>
            <p className="translation">
              {t(
                '직원: Bella Italia에 전화 주셔서 감사합니다. 어떻게 도와드릴까요? / 나: 안녕하세요, 이번 금요일 저녁에 예약하고 싶습니다. / 직원: 네. 몇 분이세요? / 나: 4명이요. 가능하면 7시쯤이요. / 직원: 확인해 볼게요... 7시 15분에 자리가 있네요. 괜찮으세요? / 나: 네, 괜찮아요. / 직원: 좋습니다. 예약자 성함은요? / 나: Kim이요. K-I-M. / 직원: 완벽합니다. 금요일 7시 15분, Kim 이름으로 4명 예약. 특별한 요청사항 있으세요? / 나: 가능하면 창가 자리로 부탁드릴 수 있을까요? / 직원: 최선을 다할게요. 금요일에 뵐게요!',
                'Host: Thank you for calling Bella Italia. How can I help you? / You: Hi, I\'d like to make a reservation for this Friday evening. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Ordering */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 주문하기 (Ordering)', '2. Ordering')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('주문 관련 표현', 'Ordering Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Could I see the menu, please?</td><td>메뉴판 좀 볼 수 있을까요?</td></tr>
                <tr><td>What do you recommend?</td><td>추천 메뉴가 뭔가요?</td></tr>
                <tr><td>I'll have the grilled salmon.</td><td>그릴 연어로 할게요.</td></tr>
                <tr><td>I'd like to order now.</td><td>지금 주문하고 싶어요.</td></tr>
                <tr><td>Can I get this without onions?</td><td>양파 빼고 할 수 있나요?</td></tr>
                <tr><td>What's today's special?</td><td>오늘의 특선 메뉴가 뭐예요?</td></tr>
                <tr><td>I'm still deciding.</td><td>아직 고르는 중이에요.</td></tr>
                <tr><td>Could we have some more bread?</td><td>빵 좀 더 주시겠어요?</td></tr>
                <tr><td>Can I have the same thing?</td><td>저도 같은 걸로 할게요.</td></tr>
                <tr><td>For here or to go?</td><td>매장에서 드시나요, 가져가시나요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 레스토랑에서 주문', 'Conversation - Ordering at a Restaurant')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Server:</span> Hi, welcome! Are you ready to order, or do you need a few more minutes?</p>
              <p><span className="speaker b">You:</span> I think we're ready. What do you recommend?</p>
              <p><span className="speaker a">Server:</span> Our grilled salmon is very popular, and today's special is mushroom risotto.</p>
              <p><span className="speaker b">You:</span> The salmon sounds great. I'll have the grilled salmon, please.</p>
              <p><span className="speaker a">Server:</span> Excellent choice. And for you?</p>
              <p><span className="speaker b">Friend:</span> I'd like the mushroom risotto. Can I get it without cheese?</p>
              <p><span className="speaker a">Server:</span> Sure, no problem. Would you like anything to drink?</p>
              <p><span className="speaker b">You:</span> I'll have a glass of white wine, please.</p>
              <p><span className="speaker b">Friend:</span> Just water for me, thanks.</p>
              <p><span className="speaker a">Server:</span> Got it. I'll have those right out for you.</p>
            </div>
            <p className="translation">
              {t(
                '서버: 안녕하세요, 환영합니다! 주문하시겠어요, 아니면 조금 더 시간이 필요하세요? / 나: 준비됐어요. 추천 메뉴가 뭐예요? / 서버: 그릴 연어가 인기 많고요, 오늘의 특선은 버섯 리조또예요. / 나: 연어 좋네요. 그릴 연어로 할게요. / 서버: 좋은 선택이에요. 이쪽 분은요? / 친구: 버섯 리조또로 할게요. 치즈 빼고 할 수 있나요? / 서버: 네, 문제 없어요. 음료는요? / 나: 화이트 와인 한 잔 주세요. / 친구: 저는 물만 주세요. / 서버: 알겠습니다. 바로 가져다 드릴게요.',
                'Server: Hi, welcome! Are you ready to order? / You: I think we\'re ready. What do you recommend? ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Special Requests */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 특별 요청 (Special Requests)', '3. Special Requests')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('특별 요청 표현', 'Special Request Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'm vegetarian.</td><td>저는 채식주의자예요.</td></tr>
                <tr><td>I'm allergic to nuts.</td><td>저는 견과류 알레르기가 있어요.</td></tr>
                <tr><td>Does this contain gluten?</td><td>이거 글루텐이 들어있나요?</td></tr>
                <tr><td>Is this dish spicy?</td><td>이 음식 매운가요?</td></tr>
                <tr><td>Could you make it less spicy?</td><td>덜 맵게 해주실 수 있나요?</td></tr>
                <tr><td>I'm on a diet. Do you have any low-calorie options?</td><td>다이어트 중이에요. 저칼로리 메뉴 있나요?</td></tr>
                <tr><td>Can I substitute the fries for a salad?</td><td>감자튀김 대신 샐러드로 바꿀 수 있나요?</td></tr>
                <tr><td>Could I have the dressing on the side?</td><td>드레싱을 따로 주실 수 있나요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 알레르기 팁', '💡 Allergy Tips')}</h4>
            <p>
              {t(
                '알레르기가 있다면 반드시 "I\'m allergic to..."라고 명확하게 말하세요. "I don\'t like..."은 단순히 싫다는 의미이고, "I\'m allergic to..."는 건강 문제라는 것을 알립니다. 심각한 알레르기의 경우 "I have a severe allergy to..."라고 강조하세요.',
                'If you have an allergy, always clearly say "I\'m allergic to..." "I don\'t like..." simply means you don\'t enjoy it, while "I\'m allergic to..." communicates a health concern. For serious allergies, emphasize with "I have a severe allergy to..."'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Complaints */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 불만 표현 (Complaints)', '4. Complaints')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('불만 관련 표현', 'Complaint Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Excuse me, this isn't what I ordered.</td><td>실례합니다, 이건 제가 주문한 게 아닌데요.</td></tr>
                <tr><td>This steak is undercooked.</td><td>이 스테이크가 덜 익었어요.</td></tr>
                <tr><td>This dish is too cold. Could you heat it up?</td><td>이 음식이 너무 차가워요. 데워주실 수 있나요?</td></tr>
                <tr><td>We've been waiting for a long time.</td><td>오래 기다리고 있어요.</td></tr>
                <tr><td>There's a hair in my food.</td><td>음식에 머리카락이 있어요.</td></tr>
                <tr><td>Could I speak to the manager?</td><td>매니저와 이야기할 수 있을까요?</td></tr>
                <tr><td>I think there's a mistake on the bill.</td><td>계산서에 실수가 있는 것 같아요.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 주문 실수', 'Conversation - Wrong Order')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Excuse me, I'm sorry, but this isn't what I ordered. I ordered the chicken pasta, not the beef.</p>
              <p><span className="speaker a">Server:</span> Oh, I'm so sorry about that! Let me fix that for you right away.</p>
              <p><span className="speaker b">You:</span> Thank you. Also, my friend's soup seems a bit cold.</p>
              <p><span className="speaker a">Server:</span> I apologize. I'll have the kitchen heat that up immediately. Can I get you anything else while you wait?</p>
              <p><span className="speaker b">You:</span> No, that's fine. Thank you for understanding.</p>
              <p><span className="speaker a">Server:</span> Of course. Again, I'm very sorry for the mix-up. Your correct order should be ready in just a few minutes.</p>
            </div>
            <p className="translation">
              {t(
                '나: 실례합니다, 죄송한데 이건 제가 주문한 게 아닌 것 같아요. 비프가 아니라 치킨 파스타를 주문했거든요. / 서버: 아, 정말 죄송합니다! 바로 수정해 드릴게요. / 나: 감사합니다. 그리고 제 친구 수프가 좀 식은 것 같아요. / 서버: 죄송합니다. 바로 주방에서 데워 드리겠습니다. 기다리시는 동안 다른 필요하신 게 있으세요? / 나: 아니요, 괜찮아요. 이해해 주셔서 감사합니다. / 서버: 물론이죠. 다시 한번 혼선에 대해 죄송합니다. 올바른 주문은 몇 분 안에 준비될 거예요.',
                'You: Excuse me, I\'m sorry, but this isn\'t what I ordered. / Server: Oh, I\'m so sorry about that! ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 불만을 정중하게 전달하는 팁', '💡 Tips for Polite Complaints')}</h4>
            <p>
              {t(
                '불만을 표현할 때는 "Excuse me"로 시작하고 "I\'m sorry, but..."을 붙이면 정중하게 들립니다. 감정적으로 말하지 않고 사실만 전달하면 원하는 결과를 더 쉽게 얻을 수 있습니다.',
                'When expressing complaints, start with "Excuse me" and add "I\'m sorry, but..." to sound polite. Stating facts without being emotional will help you get the result you want more easily.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Paying */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('5. 계산하기 (Paying the Bill)', '5. Paying the Bill')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('계산 관련 표현', 'Paying Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Could we have the check, please?</td><td>계산서 주시겠어요?</td></tr>
                <tr><td>Can I pay by card?</td><td>카드로 결제할 수 있나요?</td></tr>
                <tr><td>We'd like to split the bill.</td><td>각자 계산하고 싶어요.</td></tr>
                <tr><td>It's on me. / I'll treat you.</td><td>제가 살게요.</td></tr>
                <tr><td>Let me get this one.</td><td>이번은 제가 낼게요.</td></tr>
                <tr><td>Keep the change.</td><td>거스름돈은 가지세요.</td></tr>
                <tr><td>Is the tip included?</td><td>팁이 포함되어 있나요?</td></tr>
                <tr><td>Could I have a receipt?</td><td>영수증 주시겠어요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 계산할 때', 'Conversation - Paying the Bill')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Excuse me, could we have the check, please?</p>
              <p><span className="speaker a">Server:</span> Of course. Here you go. That'll be $64.50.</p>
              <p><span className="speaker b">Friend:</span> Let's split the bill.</p>
              <p><span className="speaker b">You:</span> No, no. It's on me today. You can get it next time.</p>
              <p><span className="speaker b">Friend:</span> Are you sure? That's really nice of you!</p>
              <p><span className="speaker b">You:</span> Absolutely. Can I pay by card?</p>
              <p><span className="speaker a">Server:</span> Of course. Just insert or tap your card here.</p>
              <p><span className="speaker b">You:</span> The food was excellent, by the way. Thank you.</p>
              <p><span className="speaker a">Server:</span> Thank you! I'm glad you enjoyed it. Have a great evening!</p>
            </div>
            <p className="translation">
              {t(
                '나: 실례합니다, 계산서 주시겠어요? / 서버: 물론이죠. 여기 있어요. 64.50달러입니다. / 친구: 각자 내자. / 나: 아니, 아니. 오늘은 내가 살게. 다음에 네가 사. / 친구: 진짜? 정말 고마워! / 나: 물론이지. 카드로 결제할 수 있나요? / 서버: 물론이죠. 카드를 여기에 넣거나 터치해 주세요. / 나: 그런데 음식 정말 맛있었어요. 감사합니다. / 서버: 감사합니다! 맛있게 드셨다니 기쁘네요. 좋은 저녁 되세요!',
                'You: Excuse me, could we have the check, please? / Server: Of course. Here you go. That\'ll be $64.50. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 팁(Tip) 문화', '💡 Tipping Culture')}</h4>
            <p>
              {t(
                '미국에서는 레스토랑에서 보통 식사 금액의 15-20% 팁을 줍니다. 서비스가 좋았으면 20%, 보통이면 15%, 나빴으면 10% 정도가 기준입니다. 패스트푸드점에서는 팁을 주지 않습니다. 영국이나 호주에서는 팁 문화가 덜 엄격합니다.',
                'In the US, it\'s customary to tip 15-20% of the meal total at restaurants. 20% for great service, 15% for average, and 10% for poor service. No tipping at fast food restaurants. Tipping culture is less strict in the UK or Australia.'
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
                <tr><td>1</td><td>I'd like to make a reservation.</td><td>예약하고 싶습니다.</td></tr>
                <tr><td>2</td><td>A table for two, please.</td><td>2명 자리 부탁합니다.</td></tr>
                <tr><td>3</td><td>How long is the wait?</td><td>대기 시간이 얼마나 되나요?</td></tr>
                <tr><td>4</td><td>Could I see the menu, please?</td><td>메뉴판 좀 볼 수 있을까요?</td></tr>
                <tr><td>5</td><td>What do you recommend?</td><td>추천 메뉴가 뭔가요?</td></tr>
                <tr><td>6</td><td>I'll have the grilled salmon.</td><td>그릴 연어로 할게요.</td></tr>
                <tr><td>7</td><td>Can I get this without onions?</td><td>양파 빼고 할 수 있나요?</td></tr>
                <tr><td>8</td><td>What's today's special?</td><td>오늘의 특선이 뭐예요?</td></tr>
                <tr><td>9</td><td>I'm allergic to nuts.</td><td>견과류 알레르기가 있어요.</td></tr>
                <tr><td>10</td><td>Could you make it less spicy?</td><td>덜 맵게 해주실 수 있나요?</td></tr>
                <tr><td>11</td><td>This isn't what I ordered.</td><td>제가 주문한 게 아닌데요.</td></tr>
                <tr><td>12</td><td>This dish is too cold.</td><td>이 음식이 너무 차가워요.</td></tr>
                <tr><td>13</td><td>Could we have the check, please?</td><td>계산서 주시겠어요?</td></tr>
                <tr><td>14</td><td>We'd like to split the bill.</td><td>각자 계산하고 싶어요.</td></tr>
                <tr><td>15</td><td>It's on me.</td><td>제가 살게요.</td></tr>
                <tr><td>16</td><td>Is the tip included?</td><td>팁이 포함되어 있나요?</td></tr>
                <tr><td>17</td><td>For here or to go?</td><td>매장에서 드시나요, 가져가시나요?</td></tr>
                <tr><td>18</td><td>Does this contain gluten?</td><td>이거 글루텐이 들어있나요?</td></tr>
                <tr><td>19</td><td>Could I have the dressing on the side?</td><td>드레싱을 따로 주실 수 있나요?</td></tr>
                <tr><td>20</td><td>The food was excellent.</td><td>음식이 훌륭했어요.</td></tr>
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
                <strong>Q1.</strong> {t('예약할 때:', 'Making a reservation:')} <br />
                "I'd like to ________ a ________ for Friday evening."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> make / reservation
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('추천 메뉴를 물을 때:', 'Asking for recommendations:')} <br />
                "What do you ________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> recommend
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('알레르기가 있을 때:', 'When you have an allergy:')} <br />
                "I'm ________ to shellfish."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> allergic
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('계산서를 요청할 때:', 'Asking for the check:')} <br />
                "Could we have the ________, please?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> check (or bill)
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('내가 사겠다고 할 때:', 'Offering to pay:')} <br />
                "It's ________ me. You can get it next time."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> on
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('각자 계산하고 싶을 때:', 'When splitting the bill:')} <br />
                "We'd like to ________ the ________."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> split / bill
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q7.</strong> {t('주문한 것과 다를 때:', 'When you got the wrong order:')} <br />
                "Excuse me, this ________ what I ________."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> isn't / ordered
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
            <Link to="/conversation/travel" className="btn btn-secondary">
              {t('← 이전: 여행 영어', '← Prev: Travel')}
            </Link>
            <Link to="/conversation/phone" className="btn btn-primary">
              {t('다음: 전화 영어 →', 'Next: Phone →')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
