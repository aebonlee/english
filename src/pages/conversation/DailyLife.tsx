import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import PageLayout from '../../components/PageLayout';

export default function DailyLife(): React.ReactElement {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  useAOS();

  const sections = [
    { id: 'morning', ko: '아침 루틴', en: 'Morning Routine' },
    { id: 'weather', ko: '날씨', en: 'Weather' },
    { id: 'plans', ko: '약속 잡기', en: 'Making Plans' },
    { id: 'home', ko: '집에서', en: 'At Home' },
    { id: 'help', ko: '도움 요청', en: 'Asking Help' },
    { id: 'summary', ko: '핵심 표현', en: 'Key Expressions' },
    { id: 'practice', ko: '연습 문제', en: 'Practice' },
  ];

  return (
    <>
      <SEOHead
        title={t('일상생활 표현 - English Pro', 'Daily Life Expressions - English Pro')}
        description={t(
          '아침 루틴, 날씨, 약속 잡기 등 일상에서 자주 쓰는 영어 표현을 배워보세요.',
          'Learn everyday English expressions for morning routines, weather, making plans, and more.'
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
            <span>{t('일상생활 표현', 'Daily Life')}</span>
          </div>
          <h1 className="page-header__title">
            {language === 'ko'
              ? <>일상생활 표현 <span className="page-header__en">(Daily Life)</span></>
              : 'Daily Life Expressions'}
          </h1>
          <p className="page-header__description">
            {t(
              '매일 반복되는 일상에서 자주 사용하는 영어 표현들을 익혀보세요. 아침부터 저녁까지, 자연스러운 영어 대화를 위한 필수 표현입니다.',
              'Learn frequently used English expressions for your daily routine. Essential expressions for natural English conversation from morning to evening.'
            )}
          </p>
        </div>
      </section>

      <PageLayout sections={sections} category="conversation">

      {/* Section 1: Morning Routine */}
      <section id="morning" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 아침 루틴 (Morning Routine)', '1. Morning Routine')}</h2>
          <p>
            {t(
              '아침에 일어나서 집을 나서기까지 사용하는 표현들입니다.',
              'Expressions you use from waking up to leaving the house.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('아침 루틴 표현', 'Morning Routine Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I woke up early today.</td><td>오늘 일찍 일어났어.</td></tr>
                <tr><td>I overslept this morning.</td><td>오늘 아침에 늦잠 잤어.</td></tr>
                <tr><td>I need to take a shower.</td><td>샤워해야 해.</td></tr>
                <tr><td>I'm getting dressed.</td><td>옷 입는 중이야.</td></tr>
                <tr><td>Let me grab a quick breakfast.</td><td>간단히 아침 먹을게.</td></tr>
                <tr><td>I'm running late!</td><td>늦었어!</td></tr>
                <tr><td>I have to leave in 10 minutes.</td><td>10분 안에 나가야 해.</td></tr>
                <tr><td>Don't forget your keys.</td><td>열쇠 잊지 마.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 아침 준비', 'Conversation - Morning Preparation')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Mom:</span> Good morning! Time to wake up. You're going to be late.</p>
              <p><span className="speaker b">Jisu:</span> Already? Just five more minutes...</p>
              <p><span className="speaker a">Mom:</span> No, get up now. Breakfast is ready.</p>
              <p><span className="speaker b">Jisu:</span> Okay, okay. I'm getting up. What's for breakfast?</p>
              <p><span className="speaker a">Mom:</span> Toast and scrambled eggs. Hurry up and take a shower first.</p>
              <p><span className="speaker b">Jisu:</span> Got it. I'll be quick. Is it cold outside?</p>
              <p><span className="speaker a">Mom:</span> Yes, don't forget to wear your jacket.</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '엄마: 좋은 아침! 일어날 시간이야. 늦겠다.\nJisu: 벌써? 5분만 더...\n엄마: 안 돼, 지금 일어나. 아침 준비됐어.\nJisu: 알겠어, 알겠어. 일어나는 중이야. 아침 뭐야?\n엄마: 토스트랑 스크램블 에그. 얼른 샤워부터 해.\nJisu: 알겠어. 빨리 할게. 밖에 추워?\n엄마: 응, 재킷 입는 거 잊지 마.',
                'Mom: Good morning! Time to wake up. / Jisu: Already? Just five more minutes... / Mom: No, get up now. Breakfast is ready. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Weather Talk */}
      <section id="weather" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 날씨 이야기 (Weather Talk)', '2. Weather Talk')}</h2>
          <p>
            {t(
              '날씨는 영어권에서 가장 흔한 대화 주제 중 하나입니다. 날씨 관련 표현을 익혀두면 누구와도 자연스럽게 대화를 시작할 수 있습니다.',
              'Weather is one of the most common conversation topics in English-speaking countries. Knowing weather expressions helps you start a conversation with anyone naturally.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('날씨 표현', 'Weather Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>It's a beautiful day today.</td><td>오늘 날씨 정말 좋다.</td></tr>
                <tr><td>It's raining cats and dogs.</td><td>비가 억수같이 내려.</td></tr>
                <tr><td>It's freezing outside.</td><td>밖이 엄청 추워.</td></tr>
                <tr><td>It's boiling hot today.</td><td>오늘 엄청 덥다.</td></tr>
                <tr><td>Looks like it's going to rain.</td><td>비가 올 것 같아.</td></tr>
                <tr><td>The weather forecast says it'll be sunny.</td><td>일기 예보에서 맑을 거라고 했어.</td></tr>
                <tr><td>Did you bring an umbrella?</td><td>우산 가져왔어?</td></tr>
                <tr><td>I love this kind of weather.</td><td>이런 날씨 좋아.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 날씨에 대해', 'Conversation - About the Weather')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Chris:</span> Nice weather today, isn't it?</p>
              <p><span className="speaker b">Yuna:</span> Yeah, it's gorgeous! I heard it's supposed to rain tomorrow though.</p>
              <p><span className="speaker a">Chris:</span> Really? That's too bad. I was planning to go hiking.</p>
              <p><span className="speaker b">Yuna:</span> Maybe you should check the forecast again. It might just be light showers.</p>
              <p><span className="speaker a">Chris:</span> Good idea. By the way, can you believe how hot it was last week?</p>
              <p><span className="speaker b">Yuna:</span> I know! It was like 38 degrees. I couldn't go outside at all.</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                'Chris: 오늘 날씨 좋다, 그지?\nYuna: 응, 정말 좋아! 근데 내일 비 온다고 들었어.\nChris: 진짜? 아쉽다. 등산 가려고 했는데.\nYuna: 일기 예보 다시 확인해 봐. 가벼운 소나기일 수도 있어.\nChris: 좋은 생각이야. 근데 지난주 얼마나 더웠는지 믿기 힘들지 않아?\nYuna: 맞아! 38도였잖아. 밖에 아예 못 나갔어.',
                'Chris: Nice weather today, isn\'t it? / Yuna: Yeah, it\'s gorgeous! I heard it\'s supposed to rain tomorrow though. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 문화 팁', '💡 Cultural Tip')}</h4>
            <p>
              {t(
                '영미권에서 날씨 이야기는 "스몰 토크(small talk)"의 대표적인 주제입니다. 엘리베이터에서, 버스 정류장에서, 줄 서 있을 때 모르는 사람과도 날씨 이야기를 나누는 것이 자연스럽습니다.',
                'In English-speaking countries, weather is the classic "small talk" topic. It\'s natural to chat about the weather with strangers in elevators, at bus stops, or while waiting in line.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Making Plans */}
      <section id="plans" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 약속 잡기 (Making Plans)', '3. Making Plans')}</h2>
          <p>
            {t(
              '친구나 동료와 약속을 잡을 때 사용하는 표현들입니다.',
              'Expressions for making plans and scheduling with friends and colleagues.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('약속 잡기 표현', 'Making Plans Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Are you free this weekend?</td><td>이번 주말에 시간 있어?</td></tr>
                <tr><td>Do you want to grab coffee sometime?</td><td>언제 커피 한잔 할래?</td></tr>
                <tr><td>Let's hang out on Saturday.</td><td>토요일에 놀자.</td></tr>
                <tr><td>What time works for you?</td><td>몇 시가 괜찮아?</td></tr>
                <tr><td>How about meeting at 3?</td><td>3시에 만나는 거 어때?</td></tr>
                <tr><td>Sounds good to me!</td><td>좋아!</td></tr>
                <tr><td>I'm sorry, I already have plans.</td><td>미안, 이미 약속이 있어.</td></tr>
                <tr><td>Can we reschedule?</td><td>일정을 바꿀 수 있을까?</td></tr>
                <tr><td>Let me check my schedule.</td><td>일정 확인해 볼게.</td></tr>
                <tr><td>Where should we meet?</td><td>어디서 만날까?</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 주말 약속', 'Conversation - Weekend Plans')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Mike:</span> Hey Sora, are you doing anything this Saturday?</p>
              <p><span className="speaker b">Sora:</span> I don't think so. Why, what's up?</p>
              <p><span className="speaker a">Mike:</span> I was thinking of checking out that new Italian restaurant downtown. Want to come?</p>
              <p><span className="speaker b">Sora:</span> Oh, that sounds great! What time were you thinking?</p>
              <p><span className="speaker a">Mike:</span> How about noon? We could have lunch there.</p>
              <p><span className="speaker b">Sora:</span> Noon works for me. Should I invite Hana too?</p>
              <p><span className="speaker a">Mike:</span> Sure, the more the merrier! Let's meet at the subway station and walk together.</p>
              <p><span className="speaker b">Sora:</span> Sounds like a plan! See you Saturday.</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                'Mike: 소라야, 이번 토요일에 뭐 해?\nSora: 아마 없을 것 같은데. 왜, 무슨 일이야?\nMike: 시내에 새로 생긴 이탈리안 레스토랑 가보려고 하는데. 같이 갈래?\nSora: 오, 좋다! 몇 시 생각하고 있어?\nMike: 낮 12시 어때? 거기서 점심 먹으면 되잖아.\nSora: 12시 괜찮아. 하나도 부를까?\nMike: 물론, 다다익선이지! 지하철역에서 만나서 같이 걸어가자.\nSora: 좋은 계획이다! 토요일에 봐.',
                'Mike: Hey Sora, are you doing anything this Saturday? / Sora: I don\'t think so. Why, what\'s up? ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: At Home */}
      <section id="home" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 집에서 (At Home)', '4. At Home')}</h2>
          <p>
            {t(
              '집에서 가족이나 룸메이트와 사용하는 일상적인 표현들입니다.',
              'Everyday expressions you use at home with family or roommates.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('집에서 쓰는 표현', 'At Home Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I'm home!</td><td>나 왔어!</td></tr>
                <tr><td>What's for dinner?</td><td>저녁 뭐야?</td></tr>
                <tr><td>It's your turn to do the dishes.</td><td>설거지 네 차례야.</td></tr>
                <tr><td>Can you take out the trash?</td><td>쓰레기 좀 버려줄 수 있어?</td></tr>
                <tr><td>I'm going to bed early tonight.</td><td>오늘 일찍 잘 거야.</td></tr>
                <tr><td>Don't forget to lock the door.</td><td>문 잠그는 거 잊지 마.</td></tr>
                <tr><td>Could you turn down the volume?</td><td>볼륨 좀 줄여줄 수 있어?</td></tr>
                <tr><td>Make yourself at home.</td><td>편하게 있어. (손님에게)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 저녁 시간', 'Conversation - Evening at Home')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Roommate A:</span> Hey, I'm home! What smells so good?</p>
              <p><span className="speaker b">Roommate B:</span> I'm making pasta. Are you hungry?</p>
              <p><span className="speaker a">Roommate A:</span> Starving! Do you need help with anything?</p>
              <p><span className="speaker b">Roommate B:</span> Could you set the table? Dinner will be ready in about 10 minutes.</p>
              <p><span className="speaker a">Roommate A:</span> Sure thing. Oh, by the way, the landlord called about the heater.</p>
              <p><span className="speaker b">Roommate B:</span> Really? What did they say?</p>
              <p><span className="speaker a">Roommate A:</span> Someone's coming to fix it on Wednesday morning.</p>
              <p><span className="speaker b">Roommate B:</span> Great, I'll make sure to be home then. Can you wash the dishes after dinner? It's your turn.</p>
              <p><span className="speaker a">Roommate A:</span> No problem!</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                'A: 나 왔어! 무슨 냄새가 이렇게 좋아?\nB: 파스타 만들고 있어. 배고프지?\nA: 완전 배고파! 뭐 도와줄 거 있어?\nB: 테이블 좀 세팅해줄래? 10분 정도면 저녁 다 돼.\nA: 물론이지. 아 참, 집주인이 히터 관련해서 전화했어.\nB: 진짜? 뭐래?\nA: 수요일 아침에 수리하러 온대.\nB: 좋아, 그때 집에 있어야겠다. 저녁 먹고 설거지 좀 해줄래? 네 차례야.\nA: 문제 없어!',
                'A: Hey, I\'m home! What smells so good? / B: I\'m making pasta. Are you hungry? ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Asking for Help */}
      <section id="help" className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('5. 도움 요청하기 (Asking for Help)', '5. Asking for Help')}</h2>
          <p>
            {t(
              '일상생활에서 도움을 요청하거나 부탁할 때 사용하는 정중한 표현들입니다.',
              'Polite expressions for asking for help or making requests in daily life.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('도움 요청 표현', 'Asking for Help Expressions')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                  <th>{t('격식 수준', 'Formality')}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Can you help me?</td><td>도와줄 수 있어?</td><td>{t('일상', 'Casual')}</td></tr>
                <tr><td>Could you help me with this?</td><td>이것 좀 도와주실 수 있나요?</td><td>{t('정중', 'Polite')}</td></tr>
                <tr><td>Would you mind helping me?</td><td>도와주시면 안 될까요?</td><td>{t('격식', 'Formal')}</td></tr>
                <tr><td>I was wondering if you could...</td><td>혹시 ...해주실 수 있을까 해서요.</td><td>{t('매우 정중', 'Very polite')}</td></tr>
                <tr><td>Do you have a minute?</td><td>잠깐 시간 있어?</td><td>{t('일상', 'Casual')}</td></tr>
                <tr><td>Sorry to bother you, but...</td><td>방해해서 죄송한데...</td><td>{t('정중', 'Polite')}</td></tr>
                <tr><td>I'd really appreciate your help.</td><td>도와주시면 정말 감사하겠습니다.</td><td>{t('정중', 'Polite')}</td></tr>
                <tr><td>Never mind, I'll figure it out.</td><td>괜찮아, 내가 알아볼게.</td><td>{t('일상', 'Casual')}</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 - 이웃에게 도움 요청', 'Conversation - Asking a Neighbor for Help')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">You:</span> Hi, sorry to bother you. I'm your neighbor from next door.</p>
              <p><span className="speaker b">Neighbor:</span> Oh hi! No bother at all. What can I do for you?</p>
              <p><span className="speaker a">You:</span> I was wondering if you could help me move a heavy table? I can't lift it by myself.</p>
              <p><span className="speaker b">Neighbor:</span> Sure, no problem! When do you need help?</p>
              <p><span className="speaker a">You:</span> Would now be okay? It'll only take a few minutes.</p>
              <p><span className="speaker b">Neighbor:</span> Let me just grab my shoes. I'll be right over.</p>
              <p><span className="speaker a">You:</span> Thank you so much! I really appreciate it.</p>
              <p><span className="speaker b">Neighbor:</span> Happy to help! That's what neighbors are for.</p>
            </div>
            <p className="translation dialogue-translation">
              {t(
                '나: 안녕하세요, 방해해서 죄송해요. 옆집에 사는 이웃이에요.\n이웃: 아 안녕하세요! 전혀 괜찮아요. 무슨 일이세요?\n나: 혹시 무거운 테이블 옮기는 거 도와주실 수 있을까 해서요. 혼자서는 들 수가 없어서요.\n이웃: 물론이죠, 문제 없어요! 언제 도움이 필요하세요?\n나: 지금 괜찮으세요? 몇 분이면 될 거예요.\n이웃: 신발만 신고 올게요. 바로 갈게요.\n나: 정말 감사합니다! 정말 감사해요.\n이웃: 기꺼이 도와드려요! 이웃이 있는 이유가 그거잖아요.',
                'You: Hi, sorry to bother you. I\'m your neighbor from next door. / Neighbor: Oh hi! No bother at all. ...'
              )}
            </p>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 정중함의 단계', '💡 Levels of Politeness')}</h4>
            <p>
              {t(
                '영어에서 정중함은 조동사로 조절합니다. "Can you" < "Could you" < "Would you mind" 순서로 점점 정중해집니다. 처음 만난 사람이나 윗사람에게는 "Could you" 이상을 쓰는 것이 좋습니다.',
                'In English, politeness is adjusted through modal verbs. "Can you" < "Could you" < "Would you mind" increases in politeness. Use "Could you" or higher for people you\'ve just met or superiors.'
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
                <tr><td>1</td><td>I overslept this morning.</td><td>오늘 아침에 늦잠 잤어.</td></tr>
                <tr><td>2</td><td>I'm running late!</td><td>늦었어!</td></tr>
                <tr><td>3</td><td>It's a beautiful day today.</td><td>오늘 날씨 정말 좋다.</td></tr>
                <tr><td>4</td><td>Looks like it's going to rain.</td><td>비가 올 것 같아.</td></tr>
                <tr><td>5</td><td>Are you free this weekend?</td><td>이번 주말에 시간 있어?</td></tr>
                <tr><td>6</td><td>Sounds good to me!</td><td>좋아!</td></tr>
                <tr><td>7</td><td>Let me check my schedule.</td><td>일정 확인해 볼게.</td></tr>
                <tr><td>8</td><td>Can we reschedule?</td><td>일정을 바꿀 수 있을까?</td></tr>
                <tr><td>9</td><td>I'm home!</td><td>나 왔어!</td></tr>
                <tr><td>10</td><td>What's for dinner?</td><td>저녁 뭐야?</td></tr>
                <tr><td>11</td><td>It's your turn to do the dishes.</td><td>설거지 네 차례야.</td></tr>
                <tr><td>12</td><td>Make yourself at home.</td><td>편하게 있어.</td></tr>
                <tr><td>13</td><td>Could you help me with this?</td><td>이것 좀 도와주실 수 있나요?</td></tr>
                <tr><td>14</td><td>Sorry to bother you, but...</td><td>방해해서 죄송한데...</td></tr>
                <tr><td>15</td><td>I really appreciate it.</td><td>정말 감사합니다.</td></tr>
                <tr><td>16</td><td>It's raining cats and dogs.</td><td>비가 억수같이 내려.</td></tr>
                <tr><td>17</td><td>Do you want to grab coffee?</td><td>커피 한잔 할래?</td></tr>
                <tr><td>18</td><td>What time works for you?</td><td>몇 시가 괜찮아?</td></tr>
                <tr><td>19</td><td>Don't forget to lock the door.</td><td>문 잠그는 거 잊지 마.</td></tr>
                <tr><td>20</td><td>I was wondering if you could...</td><td>혹시 ...해주실 수 있을까 해서요.</td></tr>
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
                <strong>Q1.</strong> {t('아침에 늦잠 자서 서두를 때:', 'When you overslept and are in a rush:')} <br />
                "I ________ this morning. I'm ________ late!"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> overslept / running
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('주말 약속을 잡을 때:', 'When making weekend plans:')} <br />
                "________ you ________ this Saturday?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Are / free
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('날씨가 좋을 때:', 'When the weather is nice:')} <br />
                "It's a ________ day today, ________ it?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> beautiful / isn't
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('정중하게 도움을 요청할 때:', 'When politely asking for help:')} <br />
                "I was ________ if you ________ help me with this."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> wondering / could
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('집에 돌아왔을 때:', 'When you arrive home:')} <br />
                "________ ! What's for ________?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> I'm home / dinner
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('상대방의 제안에 동의할 때:', 'When agreeing to someone\'s suggestion:')} <br />
                "________ good to me!"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Sounds
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
            <Link to="/conversation/greetings" className="btn btn-secondary">
              {t('← 이전: 인사 & 소개', '← Prev: Greetings')}
            </Link>
            <Link to="/conversation/shopping" className="btn btn-primary">
              {t('다음: 쇼핑 & 주문 →', 'Next: Shopping →')}
            </Link>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}
