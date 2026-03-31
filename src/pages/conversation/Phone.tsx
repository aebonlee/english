import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import PageLayout from '../../components/PageLayout';

export default function Phone(): React.ReactElement {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  useAOS();

  const sections = [
    { id: 'answering', ko: '전화 받기', en: 'Answering' },
    { id: 'making', ko: '전화 걸기', en: 'Making Calls' },
    { id: 'messages', ko: '메시지', en: 'Messages' },
    { id: 'business', ko: '비즈니스', en: 'Business Calls' },
    { id: 'ending', ko: '전화 끝내기', en: 'Ending Calls' },
    { id: 'summary', ko: '핵심 표현', en: 'Key Expressions' },
    { id: 'practice', ko: '연습 문제', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('전화 영어 - English Pro', 'Phone English - English Pro')}
        description={t(
          '전화 받기, 걸기, 메시지 남기기 등 전화 영어 표현을 배워보세요.',
          'Learn English phone expressions for answering, making calls, and leaving messages.'
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
            <span>{t('전화 영어', 'Phone')}</span>
          </div>
          <h1 className="page-header__title">
            {language === 'ko'
              ? <>전화 영어 <span className="page-header__en">(Phone English)</span></>
              : 'Phone English'}
          </h1>
          <p className="page-header__description">
            {t(
              '전화 통화는 상대방의 표정을 볼 수 없어서 영어가 더 어렵게 느껴질 수 있습니다. 전화 받기, 걸기, 메시지 남기기 등 전화 영어의 핵심 표현을 익혀보세요.',
              'Phone conversations can feel harder in English because you can\'t see the other person\'s face. Learn the key expressions for answering, making calls, and leaving messages.'
            )}
          </p>
        </div>
      </section>

      <PageLayout sections={sections} category="conversation">

      {/* Section 1: Answering the Phone */}
      <section id="answering" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 전화 받기 (Answering the Phone)', '1. Answering the Phone')}</h2>
          <p>
            {t(
              '전화를 받을 때 상황에 따라 다른 표현을 사용합니다.',
              'Different expressions are used when answering the phone depending on the situation.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('전화 받기 표현', 'Answering the Phone Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('상황', 'Situation')}</th>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('일상', 'Casual')}</td>
                  <td>Hello? / Hey, what's up?</td>
                  <td>여보세요? / 야, 뭐해?</td>
                </tr>
                <tr>
                  <td>{t('비즈니스', 'Business')}</td>
                  <td>Good morning, [회사명]. How can I help you?</td>
                  <td>좋은 아침입니다, [회사명]입니다. 어떻게 도와드릴까요?</td>
                </tr>
                <tr>
                  <td>{t('비즈니스', 'Business')}</td>
                  <td>Thank you for calling [회사명]. This is [이름] speaking.</td>
                  <td>[회사명]에 전화해 주셔서 감사합니다. [이름]입니다.</td>
                </tr>
                <tr>
                  <td>{t('누구인지 확인', 'Identifying')}</td>
                  <td>May I ask who's calling?</td>
                  <td>누구시죠? / 실례지만 누구세요?</td>
                </tr>
                <tr>
                  <td>{t('연결 요청', 'Connecting')}</td>
                  <td>One moment, please. I'll put you through.</td>
                  <td>잠시만요. 연결해 드릴게요.</td>
                </tr>
                <tr>
                  <td>{t('부재 중', 'Unavailable')}</td>
                  <td>I'm sorry, she's not available right now.</td>
                  <td>죄송합니다, 지금 자리에 안 계세요.</td>
                </tr>
                <tr>
                  <td>{t('다시 전화', 'Call back')}</td>
                  <td>Could you call back later?</td>
                  <td>나중에 다시 전화해 주시겠어요?</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 친구에게서 전화', 'Conversation - Call from a Friend')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Hello?</p>
              <p><span className="speaker a">Friend:</span> Hey! It's Minho. Are you busy right now?</p>
              <p><span className="speaker b">You:</span> Hey Minho! Not really. What's up?</p>
              <p><span className="speaker a">Friend:</span> I was wondering if you're free tomorrow evening. A few of us are getting together for dinner.</p>
              <p><span className="speaker b">You:</span> Tomorrow evening? Let me think... Yeah, I should be free after 6.</p>
              <p><span className="speaker a">Friend:</span> Great! We're meeting at the Korean BBQ place near the station at 7.</p>
              <p><span className="speaker b">You:</span> Sounds good! I'll be there. Anyone else coming?</p>
              <p><span className="speaker a">Friend:</span> Yeah, Sujin and Jaehyun are coming too. See you tomorrow then!</p>
              <p><span className="speaker b">You:</span> Awesome! See you tomorrow. Bye!</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '나: 여보세요?\n친구: 야! 민호야. 지금 바빠?\n나: 민호! 별로. 왜?\n친구: 내일 저녁에 시간 되나 해서. 몇 명이서 저녁 먹기로 했거든.\n나: 내일 저녁? 생각해 볼게... 응, 6시 이후로 괜찮을 것 같아.\n친구: 좋아! 역 근처 한식 고깃집에서 7시에 만나기로 했어.\n나: 좋다! 갈게. 누구 또 와?\n친구: 응, 수진이랑 재현이도 와. 그럼 내일 보자!\n나: 좋아! 내일 봐. 잘 가!',
                'You: Hello? / Friend: Hey! It\'s Minho. Are you busy right now? ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Making Calls */}
      <section id="making" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 전화 걸기 (Making Calls)', '2. Making Calls')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('전화 걸기 표현', 'Making Calls Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hi, this is [이름] calling.</td><td>안녕하세요, [이름]입니다.</td></tr>
                <tr><td>May I speak to [이름], please?</td><td>[이름]과 통화할 수 있을까요?</td></tr>
                <tr><td>I'm calling about...</td><td>...에 관해 전화했습니다.</td></tr>
                <tr><td>I'm calling to make an appointment.</td><td>예약하려고 전화했습니다.</td></tr>
                <tr><td>Is this a good time to talk?</td><td>지금 통화하기 괜찮으세요?</td></tr>
                <tr><td>Could I leave a message?</td><td>메시지를 남겨도 될까요?</td></tr>
                <tr><td>I'm returning your call.</td><td>전화 주셔서 다시 드립니다.</td></tr>
                <tr><td>Sorry, I think I have the wrong number.</td><td>죄송합니다, 잘못 걸었나 봐요.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 병원 예약 전화', 'Conversation - Calling to Make a Doctor\'s Appointment')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Receptionist:</span> Good morning, City Medical Center. How can I help you?</p>
              <p><span className="speaker b">You:</span> Hi, I'm calling to make an appointment with Dr. Johnson.</p>
              <p><span className="speaker a">Receptionist:</span> Sure. Are you an existing patient?</p>
              <p><span className="speaker b">You:</span> Yes, I am. My name is Jina Kim.</p>
              <p><span className="speaker a">Receptionist:</span> Thank you, Ms. Kim. What seems to be the issue?</p>
              <p><span className="speaker b">You:</span> I've been having back pain for about a week.</p>
              <p><span className="speaker a">Receptionist:</span> I see. Dr. Johnson has an opening on Thursday at 2 PM. Would that work for you?</p>
              <p><span className="speaker b">You:</span> Thursday at 2 works perfectly.</p>
              <p><span className="speaker a">Receptionist:</span> Great. You're all set. Please arrive 10 minutes early. Is there anything else?</p>
              <p><span className="speaker b">You:</span> No, that's all. Thank you!</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '접수원: 좋은 아침입니다, City Medical Center입니다. 어떻게 도와드릴까요?\n나: 안녕하세요, Johnson 선생님 진료 예약하려고 전화했습니다.\n접수원: 네. 기존 환자이신가요?\n나: 네, 그렇습니다. 이름은 김지나입니다.\n접수원: 감사합니다, Ms. Kim. 어디가 불편하세요?\n나: 약 일주일 동안 허리가 아팠어요.\n접수원: 알겠습니다. Johnson 선생님이 목요일 오후 2시에 빈 시간이 있으세요. 괜찮으세요?\n나: 목요일 2시 괜찮아요.\n접수원: 좋습니다. 예약되었습니다. 10분 일찍 오시기 바랍니다. 다른 건 있으세요?\n나: 아니요, 됐어요. 감사합니다!',
                'Receptionist: Good morning, City Medical Center. How can I help you? / You: Hi, I\'m calling to make an appointment with Dr. Johnson. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Taking Messages */}
      <section id="messages" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 메시지 남기기 & 받기 (Taking Messages)', '3. Taking & Leaving Messages')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('메시지 관련 표현', 'Message Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Can I take a message?</td><td>메시지를 전해드릴까요?</td></tr>
                <tr><td>Could you tell him/her I called?</td><td>제가 전화했다고 전해주시겠어요?</td></tr>
                <tr><td>Could you ask her to call me back?</td><td>제게 다시 전화해 달라고 전해주시겠어요?</td></tr>
                <tr><td>My number is 010-1234-5678.</td><td>제 번호는 010-1234-5678입니다.</td></tr>
                <tr><td>I'll make sure he gets the message.</td><td>반드시 전달하겠습니다.</td></tr>
                <tr><td>Please leave a message after the beep.</td><td>삐 소리 후에 메시지를 남겨주세요.</td></tr>
                <tr><td>I'll call back later.</td><td>나중에 다시 전화할게요.</td></tr>
                <tr><td>Could you repeat that, please?</td><td>다시 말씀해 주시겠어요?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 메시지 남기기', 'Conversation - Leaving a Message')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Receptionist:</span> Good afternoon, KTech Solutions. How may I direct your call?</p>
              <p><span className="speaker b">You:</span> Hello, may I speak to Mr. Lee in the sales department?</p>
              <p><span className="speaker a">Receptionist:</span> I'm sorry, Mr. Lee is in a meeting at the moment. Can I take a message?</p>
              <p><span className="speaker b">You:</span> Yes, please. Could you tell him that Jina Park called? It's regarding the proposal we discussed last week.</p>
              <p><span className="speaker a">Receptionist:</span> Sure. And what's the best number to reach you?</p>
              <p><span className="speaker b">You:</span> He can reach me at 02-555-1234. I'll be available until 5 PM.</p>
              <p><span className="speaker a">Receptionist:</span> Got it. Jina Park, regarding the proposal, call back at 02-555-1234 before 5 PM. I'll make sure he gets the message.</p>
              <p><span className="speaker b">You:</span> Thank you very much. Have a nice day.</p>
              <p><span className="speaker a">Receptionist:</span> You too. Goodbye.</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '접수원: 안녕하세요, KTech Solutions입니다. 어디로 연결해 드릴까요?\n나: 안녕하세요, 영업부의 이 씨와 통화할 수 있을까요?\n접수원: 죄송합니다, 이 씨는 지금 회의 중이세요. 메시지를 남기시겠어요?\n나: 네, 부탁드립니다. 박지나가 전화했다고 전해주세요. 지난주에 논의한 제안서 건이에요.\n접수원: 네. 연락 가능한 전화번호가 어떻게 되세요?\n나: 02-555-1234로 전화 주시면 돼요. 오후 5시까지 가능합니다.\n접수원: 알겠습니다. 박지나, 제안서 건, 02-555-1234로 5시 전에 전화. 꼭 전달하겠습니다.\n나: 감사합니다. 좋은 하루 보내세요.\n접수원: 감사합니다. 안녕히 계세요.',
                'Receptionist: Good afternoon, KTech Solutions. How may I direct your call? / You: Hello, may I speak to Mr. Lee in the sales department? ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Business Calls */}
      <section id="business" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 비즈니스 전화 (Business Calls)', '4. Business Calls')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('비즈니스 전화 표현', 'Business Call Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'm calling regarding the contract.</td><td>계약 건으로 전화드립니다.</td></tr>
                <tr><td>Could we schedule a meeting?</td><td>미팅을 잡을 수 있을까요?</td></tr>
                <tr><td>I'll send you the details by email.</td><td>세부 사항을 이메일로 보내겠습니다.</td></tr>
                <tr><td>Let me confirm the details.</td><td>세부 사항을 확인하겠습니다.</td></tr>
                <tr><td>I'll follow up on this by Friday.</td><td>금요일까지 후속 조치하겠습니다.</td></tr>
                <tr><td>Could you hold on for a moment?</td><td>잠시만 기다려 주시겠어요?</td></tr>
                <tr><td>I'll transfer you to the right department.</td><td>적절한 부서로 연결해 드릴게요.</td></tr>
                <tr><td>Thank you for your time.</td><td>시간 내주셔서 감사합니다.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 비즈니스 전화', 'Conversation - Business Call')}</h4>
            <div className="dialogue">
              <p><span className="speaker b">You:</span> Hello, this is Jina Kim from ABC Trading. I'm calling regarding the shipment we discussed last week.</p>
              <p><span className="speaker a">Partner:</span> Oh, hi Jina. Yes, I've been expecting your call. What's the update?</p>
              <p><span className="speaker b">You:</span> We've confirmed the order, and the shipment is scheduled for next Monday.</p>
              <p><span className="speaker a">Partner:</span> That's great news. Could you send me the tracking details once it ships?</p>
              <p><span className="speaker b">You:</span> Of course. I'll send everything by email. Also, there's one thing I wanted to confirm.</p>
              <p><span className="speaker a">Partner:</span> Sure, go ahead.</p>
              <p><span className="speaker b">You:</span> The payment terms are net 30, correct?</p>
              <p><span className="speaker a">Partner:</span> Yes, that's correct. Net 30 from the invoice date.</p>
              <p><span className="speaker b">You:</span> Perfect. Thank you for confirming. I'll follow up with the invoice this week.</p>
              <p><span className="speaker a">Partner:</span> Sounds good. Thanks for the call, Jina.</p>
              <p><span className="speaker b">You:</span> Thank you for your time. Have a good day!</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '나: 안녕하세요, ABC Trading의 김지나입니다. 지난주에 논의한 배송 건으로 전화드립니다.\n파트너: 아, 지나 씨. 네, 전화 기다리고 있었어요. 업데이트가 어떻게 되나요?\n나: 주문을 확인했고, 배송은 다음 주 월요일로 예정되어 있습니다.\n파트너: 좋은 소식이네요. 배송되면 추적 정보를 보내주실 수 있나요?\n나: 물론이죠. 이메일로 모두 보내드리겠습니다. 그리고 하나 확인하고 싶은 게 있어요.\n파트너: 네, 말씀하세요.\n나: 결제 조건이 30일 이내 결제(net 30)가 맞나요?\n파트너: 네, 맞습니다. 청구서 날짜로부터 30일입니다.\n나: 완벽합니다. 확인해 주셔서 감사합니다. 이번 주에 청구서를 후속 조치하겠습니다.\n파트너: 좋습니다. 전화해 줘서 고마워요, 지나 씨.\n나: 시간 내주셔서 감사합니다. 좋은 하루 되세요!',
                'You: Hello, this is Jina Kim from ABC Trading. I\'m calling regarding the shipment we discussed last week. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 비즈니스 전화 팁', '💡 Business Call Tips')}</h4>
            <p>
              {t(
                '비즈니스 전화에서는 항상 자신의 이름과 회사를 먼저 밝히세요. 통화 목적을 명확히 말하고, 통화 끝에 논의된 내용을 요약하면 오해를 줄일 수 있습니다. "Thank you for your time"으로 마무리하면 전문적인 인상을 줍니다.',
                'In business calls, always state your name and company first. Clearly state the purpose of your call, and summarize what was discussed at the end to reduce misunderstandings. Ending with "Thank you for your time" gives a professional impression.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Ending Calls */}
      <section id="ending" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('5. 전화 끝내기 (Ending Calls)', '5. Ending Calls')}</h2>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('전화 마무리 표현', 'Ending Call Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('상황', 'Situation')}</th>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('일상', 'Casual')}</td>
                  <td>Alright, I'll let you go. Talk to you later!</td>
                  <td>그럼, 이만 끊을게. 나중에 통화하자!</td>
                </tr>
                <tr>
                  <td>{t('일상', 'Casual')}</td>
                  <td>Okay, I gotta go. See you soon!</td>
                  <td>나 가봐야 해. 곧 보자!</td>
                </tr>
                <tr>
                  <td>{t('일상', 'Casual')}</td>
                  <td>It was great talking to you. Bye!</td>
                  <td>통화 좋았어. 안녕!</td>
                </tr>
                <tr>
                  <td>{t('비즈니스', 'Business')}</td>
                  <td>Thank you for your time. I'll be in touch.</td>
                  <td>시간 내주셔서 감사합니다. 연락드리겠습니다.</td>
                </tr>
                <tr>
                  <td>{t('비즈니스', 'Business')}</td>
                  <td>I look forward to hearing from you.</td>
                  <td>연락 기다리겠습니다.</td>
                </tr>
                <tr>
                  <td>{t('비즈니스', 'Business')}</td>
                  <td>Let's wrap up here. I'll email you the summary.</td>
                  <td>여기서 마무리합시다. 요약을 이메일로 보내겠습니다.</td>
                </tr>
                <tr>
                  <td>{t('정중한 끝맺음', 'Polite close')}</td>
                  <td>Is there anything else I can help you with?</td>
                  <td>다른 도움 드릴 것이 있으신가요?</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 전화 마무리', 'Conversation - Wrapping Up a Call')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Colleague:</span> Alright, I think we've covered everything. Is there anything else?</p>
              <p><span className="speaker b">You:</span> No, I think that's it. Thank you for the update.</p>
              <p><span className="speaker a">Colleague:</span> No problem. I'll send you the revised document by tomorrow morning.</p>
              <p><span className="speaker b">You:</span> That would be great. I'll review it as soon as I get it.</p>
              <p><span className="speaker a">Colleague:</span> Perfect. Thanks for your time, Jina.</p>
              <p><span className="speaker b">You:</span> Thank you too. Have a great rest of your day!</p>
              <p><span className="speaker a">Colleague:</span> You too. Goodbye!</p>
              <p><span className="speaker b">You:</span> Bye!</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '동료: 좋아, 다 다룬 것 같아요. 다른 건 있어요?\n나: 아니요, 그게 다인 것 같아요. 업데이트해 줘서 감사합니다.\n동료: 천만에요. 수정된 문서를 내일 아침까지 보내드릴게요.\n나: 좋겠어요. 받으면 바로 검토할게요.\n동료: 완벽합니다. 시간 내줘서 고마워요, 지나 씨.\n나: 저도 감사합니다. 좋은 하루 보내세요!\n동료: 감사합니다. 안녕히 계세요!\n나: 안녕!',
                'Colleague: Alright, I think we\'ve covered everything. Is there anything else? / You: No, I think that\'s it. Thank you for the update. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 전화 통화 일반 팁', '💡 General Phone Tips')}</h4>
            <p>
              {t(
                '전화 통화 중 잘 안 들릴 때는 "Could you speak a little louder?" 또는 "Sorry, you\'re breaking up"이라고 말하세요. 상대방의 말을 확인할 때는 "Let me repeat that back to you..."라고 하면 오해를 줄일 수 있습니다.',
                'When you can\'t hear well during a call, say "Could you speak a little louder?" or "Sorry, you\'re breaking up." To confirm what the other person said, use "Let me repeat that back to you..." to reduce misunderstandings.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Key Expressions Summary */}
      <section id="summary" className="lesson-section" data-aos="fade-up">
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
                <tr><td>1</td><td>This is [이름] speaking.</td><td>[이름]입니다.</td></tr>
                <tr><td>2</td><td>May I speak to [이름]?</td><td>[이름]과 통화할 수 있을까요?</td></tr>
                <tr><td>3</td><td>May I ask who's calling?</td><td>실례지만 누구세요?</td></tr>
                <tr><td>4</td><td>One moment, please.</td><td>잠시만요.</td></tr>
                <tr><td>5</td><td>I'll put you through.</td><td>연결해 드릴게요.</td></tr>
                <tr><td>6</td><td>She's not available right now.</td><td>지금 자리에 안 계세요.</td></tr>
                <tr><td>7</td><td>Can I take a message?</td><td>메시지를 전해드릴까요?</td></tr>
                <tr><td>8</td><td>Could you ask her to call me back?</td><td>다시 전화해 달라고 전해주세요.</td></tr>
                <tr><td>9</td><td>I'm calling about...</td><td>...에 관해 전화했습니다.</td></tr>
                <tr><td>10</td><td>I'm returning your call.</td><td>전화 주셔서 다시 드립니다.</td></tr>
                <tr><td>11</td><td>Is this a good time to talk?</td><td>지금 통화 괜찮으세요?</td></tr>
                <tr><td>12</td><td>Sorry, I have the wrong number.</td><td>죄송합니다, 잘못 걸었나 봐요.</td></tr>
                <tr><td>13</td><td>Could you hold on for a moment?</td><td>잠시 기다려 주시겠어요?</td></tr>
                <tr><td>14</td><td>I'll follow up on this.</td><td>후속 조치하겠습니다.</td></tr>
                <tr><td>15</td><td>I'll send you the details by email.</td><td>세부 사항을 이메일로 보내겠습니다.</td></tr>
                <tr><td>16</td><td>Thank you for your time.</td><td>시간 내주셔서 감사합니다.</td></tr>
                <tr><td>17</td><td>I look forward to hearing from you.</td><td>연락 기다리겠습니다.</td></tr>
                <tr><td>18</td><td>Could you repeat that, please?</td><td>다시 말씀해 주시겠어요?</td></tr>
                <tr><td>19</td><td>Sorry, you're breaking up.</td><td>죄송해요, 소리가 끊겨요.</td></tr>
                <tr><td>20</td><td>I'll call back later.</td><td>나중에 다시 전화할게요.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Practice Exercises */}
      <section id="practice" className="practice-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('연습 문제', 'Practice Exercises')}</h2>
          <p>
            {t('빈칸에 알맞은 표현을 채워 넣어보세요.', 'Fill in the blanks with the appropriate expressions.')}
          </p>

          <div className="practice-questions" data-aos="fade-up">
            <div className="practice-item">
              <p className="practice-question">
                <strong>Q1.</strong> {t('누군가와 통화하고 싶을 때:', 'When you want to speak to someone:')} <br />
                "May I ________ to Mr. Lee, please?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> speak
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('전화 건 사람이 누구인지 물을 때:', 'Asking who is calling:')} <br />
                "May I ________ who's ________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> ask / calling
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('연결해 준다고 할 때:', 'When putting someone through:')} <br />
                "One moment, please. I'll ________ you ________."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> put / through
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('다시 전화해 달라고 부탁할 때:', 'Asking someone to call you back:')} <br />
                "Could you ________ her to ________ me back?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> ask / call
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('전화를 잘못 걸었을 때:', 'When you dialed the wrong number:')} <br />
                "Sorry, I think I have the ________ ________."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> wrong / number
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('이메일로 정보를 보내겠다고 할 때:', 'When saying you will send details by email:')} <br />
                "I'll ________ you the details by ________."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> send / email
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q7.</strong> {t('소리가 잘 안 들릴 때:', 'When you can\'t hear well:')} <br />
                "Sorry, you're ________ up. Could you ________ that?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> breaking / repeat
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
            <Link to="/conversation/restaurant" className="btn btn-secondary">
              {t('← 이전: 음식점 영어', '← Prev: Restaurant')}
            </Link>
            <Link to="/conversation" className="btn btn-primary">
              {t('목록으로 돌아가기', 'Back to List')}
            </Link>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}
