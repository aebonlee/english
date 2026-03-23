import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';

export default function Travel() {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  return (
    <>
      <SEOHead
        title={t('여행 영어 - English Pro', 'Travel English - English Pro')}
        description={t(
          '공항, 호텔, 길 찾기 등 해외여행에서 꼭 필요한 영어 표현을 배워보세요.',
          'Learn essential English expressions for airports, hotels, directions, and more while traveling abroad.'
        )}
      />

      {/* Page Header */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <div className="page-header__breadcrumb">
            <Link to="/">{t('홈', 'Home')}</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/conversation">{t('일상 회화', 'Conversation')}</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{t('여행 영어', 'Travel')}</span>
          </div>
          <h1 className="page-header__title">
            {t('여행 영어 (Travel English)', 'Travel English')}
          </h1>
          <p className="page-header__description">
            {t(
              '공항에서 호텔까지, 해외여행에서 필요한 모든 영어 표현을 상황별로 정리했습니다. 입국 심사, 호텔 체크인, 길 찾기, 긴급 상황까지 자신 있게 대처할 수 있습니다.',
              'From the airport to the hotel, we have organized all the English expressions you need for overseas travel. Handle immigration, hotel check-in, directions, and emergencies with confidence.'
            )}
          </p>
        </div>
      </section>

      <SubNav category="conversation" />

      {/* Section 1: At the Airport */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 공항에서 (At the Airport)', '1. At the Airport')}</h2>
          <p>
            {t(
              '체크인부터 탑승까지 공항에서 사용하는 필수 표현들입니다.',
              'Essential expressions for the airport from check-in to boarding.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('공항 표현', 'Airport Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Where is the check-in counter for [airline]?</td><td>[항공사] 체크인 카운터가 어디예요?</td></tr>
                <tr><td>I'd like a window seat, please.</td><td>창가 좌석으로 해주세요.</td></tr>
                <tr><td>I'd like an aisle seat, please.</td><td>복도 좌석으로 해주세요.</td></tr>
                <tr><td>How many bags can I check?</td><td>수하물 몇 개까지 부칠 수 있나요?</td></tr>
                <tr><td>Is this bag carry-on size?</td><td>이 가방은 기내 반입 사이즈인가요?</td></tr>
                <tr><td>Where is Gate B12?</td><td>B12 게이트가 어디예요?</td></tr>
                <tr><td>What time does boarding start?</td><td>탑승 시간이 언제예요?</td></tr>
                <tr><td>My flight has been delayed.</td><td>제 비행기가 지연됐어요.</td></tr>
                <tr><td>I missed my connecting flight.</td><td>환승 비행기를 놓쳤어요.</td></tr>
                <tr><td>Where is the baggage claim?</td><td>수하물 찾는 곳이 어디예요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 체크인 카운터', 'Conversation - Check-in Counter')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Agent:</span> Good morning! May I see your passport and booking confirmation, please?</p>
              <p><span className="speaker b">You:</span> Sure, here you go.</p>
              <p><span className="speaker a">Agent:</span> Thank you. Are you checking any bags today?</p>
              <p><span className="speaker b">You:</span> Yes, I have one suitcase to check and one carry-on.</p>
              <p><span className="speaker a">Agent:</span> Please place your suitcase on the scale. Do you have a seat preference?</p>
              <p><span className="speaker b">You:</span> I'd like a window seat, please.</p>
              <p><span className="speaker a">Agent:</span> Sure. You're in seat 24A. Your gate is B7, and boarding starts at 10:30.</p>
              <p><span className="speaker b">You:</span> Thank you. Where is Gate B7?</p>
              <p><span className="speaker a">Agent:</span> Go through security, and it'll be on your right. Have a great flight!</p>
            </div>
            <p className="translation">
              {t(
                '직원: 안녕하세요! 여권과 예약 확인서 보여주시겠어요? / 나: 네, 여기 있습니다. / 직원: 감사합니다. 오늘 부치실 짐이 있으세요? / 나: 네, 캐리어 하나 부치고 기내용 하나 있어요. / 직원: 캐리어를 저울에 올려주세요. 좌석 선호가 있으세요? / 나: 창가 좌석으로 해주세요. / 직원: 네. 24A 좌석이에요. 게이트는 B7이고 탑승은 10시 30분에 시작합니다. / 나: 감사합니다. B7 게이트가 어디예요? / 직원: 보안 검색대를 지나서 오른쪽에 있어요. 좋은 비행 되세요!',
                'Agent: Good morning! May I see your passport and booking confirmation, please? / You: Sure, here you go. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Immigration */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 입국 심사 (Immigration)', '2. Immigration')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('입국 심사 표현', 'Immigration Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('심사관 질문', 'Officer\'s Question')}</th>
                  <th>{t('대답 예시', 'Sample Answer')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>What is the purpose of your visit?</td><td>I'm here on vacation. / I'm here for business.</td></tr>
                <tr><td>How long will you be staying?</td><td>I'll be staying for two weeks.</td></tr>
                <tr><td>Where will you be staying?</td><td>I'll be staying at the Hilton Hotel.</td></tr>
                <tr><td>Do you have a return ticket?</td><td>Yes, I have a return ticket for March 30th.</td></tr>
                <tr><td>Do you have anything to declare?</td><td>No, I have nothing to declare.</td></tr>
                <tr><td>What do you do for a living?</td><td>I'm a software engineer.</td></tr>
                <tr><td>Is this your first time here?</td><td>Yes, it's my first time. / No, I've been here before.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 입국 심사', 'Conversation - Immigration')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Officer:</span> Good afternoon. Passport, please.</p>
              <p><span className="speaker b">You:</span> Here you go.</p>
              <p><span className="speaker a">Officer:</span> What is the purpose of your visit?</p>
              <p><span className="speaker b">You:</span> I'm here on vacation.</p>
              <p><span className="speaker a">Officer:</span> How long will you be staying?</p>
              <p><span className="speaker b">You:</span> About ten days. I'm leaving on April 5th.</p>
              <p><span className="speaker a">Officer:</span> Where will you be staying?</p>
              <p><span className="speaker b">You:</span> At the Grand Hotel in Manhattan.</p>
              <p><span className="speaker a">Officer:</span> Do you have anything to declare?</p>
              <p><span className="speaker b">You:</span> No, nothing to declare.</p>
              <p><span className="speaker a">Officer:</span> Alright. Enjoy your stay.</p>
              <p><span className="speaker b">You:</span> Thank you!</p>
            </div>
            <p className="translation">
              {t(
                '심사관: 안녕하세요. 여권 주세요. / 나: 여기 있습니다. / 심사관: 방문 목적이 무엇인가요? / 나: 관광으로 왔습니다. / 심사관: 얼마나 머무르실 건가요? / 나: 약 10일이요. 4월 5일에 출국합니다. / 심사관: 어디에 머무르실 건가요? / 나: 맨해튼의 Grand Hotel에서요. / 심사관: 신고할 물품이 있으신가요? / 나: 아니요, 없습니다. / 심사관: 좋습니다. 좋은 여행 되세요. / 나: 감사합니다!',
                'Officer: Good afternoon. Passport, please. / You: Here you go. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 입국 심사 팁', '💡 Immigration Tips')}</h4>
            <p>
              {t(
                '입국 심사에서는 짧고 명확하게 대답하세요. 너무 길게 설명하면 오히려 의심을 받을 수 있습니다. 긴장하지 말고 자연스럽게 대답하면 됩니다.',
                'At immigration, keep your answers short and clear. Overly long explanations can actually raise suspicion. Stay calm and answer naturally.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Hotel Check-in */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 호텔 체크인 (Hotel Check-in)', '3. Hotel Check-in')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('호텔 표현', 'Hotel Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I have a reservation under [이름].</td><td>[이름]으로 예약했습니다.</td></tr>
                <tr><td>I'd like to check in, please.</td><td>체크인하고 싶습니다.</td></tr>
                <tr><td>What time is check-out?</td><td>체크아웃 시간이 언제예요?</td></tr>
                <tr><td>Is breakfast included?</td><td>조식 포함인가요?</td></tr>
                <tr><td>Could I get a room with a view?</td><td>전망 좋은 방 가능할까요?</td></tr>
                <tr><td>Is there Wi-Fi in the room?</td><td>방에 와이파이 있나요?</td></tr>
                <tr><td>What's the Wi-Fi password?</td><td>와이파이 비밀번호가 뭐예요?</td></tr>
                <tr><td>Can I get a late check-out?</td><td>늦은 체크아웃 가능할까요?</td></tr>
                <tr><td>Could I have some extra towels?</td><td>수건 좀 더 받을 수 있나요?</td></tr>
                <tr><td>The air conditioning isn't working.</td><td>에어컨이 안 돼요.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 호텔 체크인', 'Conversation - Hotel Check-in')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Hello, I'd like to check in, please. I have a reservation under Kim.</p>
              <p><span className="speaker a">Receptionist:</span> Welcome! Let me look that up. Yes, I see a reservation for two nights. Could I see your ID, please?</p>
              <p><span className="speaker b">You:</span> Sure, here's my passport.</p>
              <p><span className="speaker a">Receptionist:</span> Thank you. You're in room 508 on the fifth floor. Here's your key card.</p>
              <p><span className="speaker b">You:</span> Great. Is breakfast included?</p>
              <p><span className="speaker a">Receptionist:</span> Yes, breakfast is served in the restaurant on the second floor from 7 to 10 AM.</p>
              <p><span className="speaker b">You:</span> Perfect. And what's the Wi-Fi password?</p>
              <p><span className="speaker a">Receptionist:</span> It's "Welcome2024." You'll find it on the card in your room as well. Is there anything else?</p>
              <p><span className="speaker b">You:</span> What time is check-out?</p>
              <p><span className="speaker a">Receptionist:</span> Check-out is at 11 AM. Enjoy your stay!</p>
            </div>
            <p className="translation">
              {t(
                '나: 안녕하세요, 체크인하고 싶습니다. Kim으로 예약했습니다. / 프런트: 환영합니다! 확인해 볼게요. 네, 2박 예약이 있네요. 신분증 보여주시겠어요? / 나: 네, 여기 여권이요. / 프런트: 감사합니다. 5층 508호입니다. 여기 카드키예요. / 나: 좋아요. 조식 포함인가요? / 프런트: 네, 조식은 2층 레스토랑에서 오전 7시부터 10시까지 제공됩니다. / 나: 완벽하네요. 와이파이 비밀번호가 뭐예요? / 프런트: "Welcome2024"입니다. 방에 있는 카드에도 적혀 있어요. 다른 건 있으세요? / 나: 체크아웃 시간이 몇 시예요? / 프런트: 체크아웃은 오전 11시입니다. 좋은 시간 보내세요!',
                'You: Hello, I\'d like to check in, please. I have a reservation under Kim. / Receptionist: Welcome! Let me look that up. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Asking Directions */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 길 찾기 (Asking Directions)', '4. Asking Directions')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('길 찾기 표현', 'Direction Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Excuse me, how do I get to [장소]?</td><td>실례합니다, [장소]에 어떻게 가나요?</td></tr>
                <tr><td>Is it within walking distance?</td><td>걸어갈 수 있는 거리인가요?</td></tr>
                <tr><td>Go straight for two blocks.</td><td>두 블록 직진하세요.</td></tr>
                <tr><td>Turn left / right at the intersection.</td><td>교차로에서 좌/우회전하세요.</td></tr>
                <tr><td>It's on your left / right.</td><td>왼쪽/오른쪽에 있어요.</td></tr>
                <tr><td>It's across from the bank.</td><td>은행 맞은편에 있어요.</td></tr>
                <tr><td>It's next to the pharmacy.</td><td>약국 옆에 있어요.</td></tr>
                <tr><td>Can you show me on the map?</td><td>지도에서 보여주실 수 있나요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 길 묻기', 'Conversation - Asking for Directions')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Excuse me, could you tell me how to get to the nearest subway station?</p>
              <p><span className="speaker a">Local:</span> Sure! Go straight down this street for about two blocks.</p>
              <p><span className="speaker b">You:</span> Okay, and then?</p>
              <p><span className="speaker a">Local:</span> Then turn left at the big intersection. You'll see a coffee shop on the corner.</p>
              <p><span className="speaker b">You:</span> Turn left at the coffee shop. Got it.</p>
              <p><span className="speaker a">Local:</span> The station entrance will be on your right, right next to a bookstore. You can't miss it.</p>
              <p><span className="speaker b">You:</span> Is it walking distance from here?</p>
              <p><span className="speaker a">Local:</span> Yeah, it's about a 5-minute walk.</p>
              <p><span className="speaker b">You:</span> Great, thank you so much!</p>
              <p><span className="speaker a">Local:</span> No problem. Have a good day!</p>
            </div>
            <p className="translation">
              {t(
                '나: 실례합니다, 가장 가까운 지하철역에 어떻게 가나요? / 현지인: 물론이죠! 이 길을 따라 두 블록 정도 직진하세요. / 나: 네, 그다음에요? / 현지인: 큰 교차로에서 왼쪽으로 도세요. 모퉁이에 커피숍이 보일 거예요. / 나: 커피숍에서 좌회전. 알겠어요. / 현지인: 역 입구는 오른쪽에 있을 거예요, 서점 바로 옆이에요. 못 지나칠 거예요. / 나: 여기서 걸어갈 수 있는 거리인가요? / 현지인: 네, 걸어서 약 5분이에요. / 나: 정말 감사합니다! / 현지인: 천만에요. 좋은 하루 보내세요!',
                'You: Excuse me, could you tell me how to get to the nearest subway station? / Local: Sure! Go straight down this street for about two blocks. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Emergency */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('5. 긴급 상황 (Emergency)', '5. Emergency Situations')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('긴급 상황 표현', 'Emergency Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Help! / Please help me!</td><td>도와주세요!</td></tr>
                <tr><td>I need to see a doctor.</td><td>의사를 만나야 해요.</td></tr>
                <tr><td>Where is the nearest hospital?</td><td>가장 가까운 병원이 어디예요?</td></tr>
                <tr><td>I lost my passport.</td><td>여권을 잃어버렸어요.</td></tr>
                <tr><td>My wallet was stolen.</td><td>지갑을 도난당했어요.</td></tr>
                <tr><td>I need to call the police.</td><td>경찰에 전화해야 해요.</td></tr>
                <tr><td>Can you call an ambulance?</td><td>구급차를 불러주실 수 있나요?</td></tr>
                <tr><td>I'm allergic to [음식/약].</td><td>저는 [음식/약]에 알레르기가 있어요.</td></tr>
                <tr><td>I don't feel well.</td><td>몸이 안 좋아요.</td></tr>
                <tr><td>Where is the Korean Embassy?</td><td>한국 대사관이 어디예요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 약국에서', 'Conversation - At a Pharmacy')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Excuse me, I'm not feeling well. I have a terrible headache and a sore throat.</p>
              <p><span className="speaker a">Pharmacist:</span> I'm sorry to hear that. How long have you been feeling this way?</p>
              <p><span className="speaker b">You:</span> Since yesterday. I think I might have a cold.</p>
              <p><span className="speaker a">Pharmacist:</span> Do you have any allergies to medication?</p>
              <p><span className="speaker b">You:</span> No, I don't have any allergies.</p>
              <p><span className="speaker a">Pharmacist:</span> I'd recommend this cold medicine. Take two tablets every six hours. And here are some throat lozenges.</p>
              <p><span className="speaker b">You:</span> Thank you. Should I see a doctor if it doesn't get better?</p>
              <p><span className="speaker a">Pharmacist:</span> Yes, if your symptoms persist for more than three days, you should see a doctor. There's a clinic two blocks from here.</p>
            </div>
            <p className="translation">
              {t(
                '나: 실례합니다, 몸이 안 좋아요. 두통이 심하고 목이 아파요. / 약사: 안됐네요. 얼마나 됐어요? / 나: 어제부터요. 감기에 걸린 것 같아요. / 약사: 약에 알레르기가 있으세요? / 나: 아니요, 알레르기 없어요. / 약사: 이 감기약을 추천해 드릴게요. 6시간마다 2알씩 드세요. 그리고 여기 목 캔디도 있어요. / 나: 감사합니다. 나아지지 않으면 의사를 만나야 하나요? / 약사: 네, 증상이 3일 이상 지속되면 의사를 만나세요. 여기서 두 블록 거리에 병원이 있어요.',
                'You: Excuse me, I\'m not feeling well. I have a terrible headache and a sore throat. / Pharmacist: I\'m sorry to hear that. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 긴급 상황 팁', '💡 Emergency Tips')}</h4>
            <p>
              {t(
                '미국의 긴급 전화번호는 911, 영국은 999입니다. 여행 전에 현지 한국 대사관 연락처를 저장해 두세요. 여권 분실 시 대사관에서 임시 여권을 발급받을 수 있습니다.',
                'The emergency number in the US is 911, and in the UK it\'s 999. Save the local Korean Embassy contact before traveling. If you lose your passport, you can get a temporary passport from the embassy.'
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
                <tr><td>1</td><td>I'd like a window seat, please.</td><td>창가 좌석으로 해주세요.</td></tr>
                <tr><td>2</td><td>Where is Gate B7?</td><td>B7 게이트가 어디예요?</td></tr>
                <tr><td>3</td><td>What time does boarding start?</td><td>탑승 시간이 언제예요?</td></tr>
                <tr><td>4</td><td>What is the purpose of your visit?</td><td>방문 목적이 무엇인가요?</td></tr>
                <tr><td>5</td><td>I'm here on vacation.</td><td>관광으로 왔습니다.</td></tr>
                <tr><td>6</td><td>I have a reservation under [이름].</td><td>[이름]으로 예약했습니다.</td></tr>
                <tr><td>7</td><td>What time is check-out?</td><td>체크아웃 시간이 언제예요?</td></tr>
                <tr><td>8</td><td>Is breakfast included?</td><td>조식 포함인가요?</td></tr>
                <tr><td>9</td><td>Excuse me, how do I get to [장소]?</td><td>[장소]에 어떻게 가나요?</td></tr>
                <tr><td>10</td><td>Go straight for two blocks.</td><td>두 블록 직진하세요.</td></tr>
                <tr><td>11</td><td>Turn left at the intersection.</td><td>교차로에서 좌회전하세요.</td></tr>
                <tr><td>12</td><td>Is it within walking distance?</td><td>걸어갈 수 있는 거리인가요?</td></tr>
                <tr><td>13</td><td>I lost my passport.</td><td>여권을 잃어버렸어요.</td></tr>
                <tr><td>14</td><td>I need to see a doctor.</td><td>의사를 만나야 해요.</td></tr>
                <tr><td>15</td><td>Can you call an ambulance?</td><td>구급차를 불러주실 수 있나요?</td></tr>
                <tr><td>16</td><td>My flight has been delayed.</td><td>제 비행기가 지연됐어요.</td></tr>
                <tr><td>17</td><td>I'll be staying for two weeks.</td><td>2주 동안 머무를 겁니다.</td></tr>
                <tr><td>18</td><td>Can I get a late check-out?</td><td>늦은 체크아웃 가능할까요?</td></tr>
                <tr><td>19</td><td>Where is the nearest hospital?</td><td>가장 가까운 병원이 어디예요?</td></tr>
                <tr><td>20</td><td>I'm allergic to peanuts.</td><td>저는 땅콩 알레르기가 있어요.</td></tr>
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
                <strong>Q1.</strong> {t('창가 좌석을 요청할 때:', 'Requesting a window seat:')} <br />
                "I'd like a ________ seat, please."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> window
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('입국 심사에서 방문 목적을 말할 때:', 'Stating purpose of visit at immigration:')} <br />
                "I'm here ________ vacation."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> on
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('호텔 예약을 확인할 때:', 'Confirming a hotel reservation:')} <br />
                "I have a ________ under Kim."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> reservation
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('길을 물어볼 때:', 'Asking for directions:')} <br />
                "Excuse me, ________ do I get to the subway station?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> how
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('여권을 잃어버렸을 때:', 'When you lost your passport:')} <br />
                "I ________ my passport. Where is the Korean ________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> lost / Embassy
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('체크아웃 시간을 물어볼 때:', 'Asking check-out time:')} <br />
                "What ________ is check-________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> time / out
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
            <Link to="/conversation/shopping" className="btn btn-secondary">
              {t('← 이전: 쇼핑 & 주문', '← Prev: Shopping')}
            </Link>
            <Link to="/conversation/restaurant" className="btn btn-primary">
              {t('다음: 음식점 영어 →', 'Next: Restaurant →')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
