import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../contexts/LanguageContext';
import useAOS from '../../hooks/useAOS';
import SubNav from '../../components/SubNav';

export default function Greetings() {
  const { language, t } = useLanguage();
  const [showAnswers, setShowAnswers] = useState(false);
  useAOS();

  return (
    <>
      <SEOHead
        title={t('인사 & 소개 - English Pro', 'Greetings & Introductions - English Pro')}
        description={t(
          '영어 인사와 자기소개 표현을 배워보세요. Hello, Hi, Hey 차이부터 실전 대화까지.',
          'Learn English greetings and introductions. From Hello, Hi, Hey differences to real conversations.'
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
            <span>{t('인사 & 소개', 'Greetings')}</span>
          </div>
          <h1 className="page-header__title">
            {t('인사 & 소개 (Greetings & Introductions)', 'Greetings & Introductions')}
          </h1>
          <p className="page-header__description">
            {t(
              '첫인상은 인사에서 시작됩니다. 상황에 맞는 자연스러운 영어 인사법과 자기소개 표현을 익혀보세요.',
              'First impressions start with a greeting. Learn natural English greetings and self-introductions for every situation.'
            )}
          </p>
        </div>
      </section>

      <SubNav category="conversation" />

      {/* Section 1: 기본 인사 */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('1. 기본 인사', '1. Basic Greetings')}</h2>
          <p>
            {t(
              '영어에는 격식, 일상, 친근한 인사가 있습니다. 상황에 따라 적절한 인사를 선택하세요.',
              'English has formal, casual, and informal greetings. Choose the right one depending on the situation.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('Hello / Hi / Hey 의 차이', 'Differences: Hello / Hi / Hey')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('표현', 'Expression')}</th>
                  <th>{t('격식 수준', 'Formality')}</th>
                  <th>{t('사용 상황', 'When to Use')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hello</strong></td>
                  <td>{t('격식 / 일상', 'Formal / Neutral')}</td>
                  <td>{t('누구에게나 사용 가능. 비즈니스, 처음 만남에 적합.', 'Safe for anyone. Good for business and first meetings.')}</td>
                </tr>
                <tr>
                  <td><strong>Hi</strong></td>
                  <td>{t('일상', 'Casual')}</td>
                  <td>{t('가장 흔히 쓰는 인사. 친구, 동료에게 자연스러움.', 'Most common greeting. Natural with friends and colleagues.')}</td>
                </tr>
                <tr>
                  <td><strong>Hey</strong></td>
                  <td>{t('친근', 'Informal')}</td>
                  <td>{t('친한 친구에게만 사용. 비즈니스에서는 피하세요.', 'Use with close friends only. Avoid in business settings.')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('시간대별 인사', 'Time-based Greetings')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                  <th>{t('시간대', 'Time')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Good morning</strong></td>
                  <td>좋은 아침이에요</td>
                  <td>{t('아침 ~ 정오', 'Morning ~ Noon')}</td>
                </tr>
                <tr>
                  <td><strong>Good afternoon</strong></td>
                  <td>안녕하세요 (오후)</td>
                  <td>{t('정오 ~ 오후 6시', 'Noon ~ 6 PM')}</td>
                </tr>
                <tr>
                  <td><strong>Good evening</strong></td>
                  <td>안녕하세요 (저녁)</td>
                  <td>{t('오후 6시 이후', 'After 6 PM')}</td>
                </tr>
                <tr>
                  <td><strong>Good night</strong></td>
                  <td>안녕히 주무세요 / 잘 자</td>
                  <td>{t('잠자리에 들 때 (인사가 아님)', 'When going to bed (farewell, not greeting)')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 문화 팁', '💡 Cultural Tip')}</h4>
            <p>
              {t(
                '"Good night"은 만날 때 하는 인사가 아닙니다! 헤어질 때, 특히 잠자리에 들기 전에 하는 인사입니다. 저녁에 만날 때는 "Good evening"을 쓰세요.',
                '"Good night" is NOT a greeting when meeting someone! It\'s said when parting, especially before going to bed. Use "Good evening" when meeting someone in the evening.'
              )}
            </p>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('"How are you?" 와 대답', '"How are you?" and Responses')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('질문', 'Question')}</th>
                  <th>{t('일반적인 대답', 'Common Responses')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>How are you?</strong></td>
                  <td>I'm fine, thank you. / I'm good, thanks. / Not bad.</td>
                </tr>
                <tr>
                  <td><strong>How's it going?</strong></td>
                  <td>Pretty good. / It's going well. / Can't complain.</td>
                </tr>
                <tr>
                  <td><strong>What's up?</strong></td>
                  <td>Not much. / Nothing much. / Just the usual.</td>
                </tr>
                <tr>
                  <td><strong>How have you been?</strong></td>
                  <td>I've been great. / Been busy, but good. / Pretty well.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tip-box" data-aos="fade-up">
            <h4>{t('💡 알아두세요', '💡 Good to Know')}</h4>
            <p>
              {t(
                '"How are you?"는 진짜 안부를 묻는 것이 아니라 인사의 일부입니다. 길게 대답하지 않아도 됩니다. "I\'m good, thanks. And you?" 정도면 충분합니다.',
                '"How are you?" is mostly a social greeting, not a real question about your wellbeing. A brief answer like "I\'m good, thanks. And you?" is perfectly fine.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 자기소개 */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('2. 자기소개', '2. Self-Introduction')}</h2>
          <p>
            {t(
              '새로운 사람을 만났을 때 자기소개를 하는 기본 패턴을 익혀봅시다.',
              'Learn the essential patterns for introducing yourself when meeting someone new.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('자기소개 기본 패턴', 'Basic Introduction Patterns')}</h4>
            <table className="expression-table">
              <thead>
                <tr>
                  <th>{t('영어', 'English')}</th>
                  <th>{t('한국어', 'Korean')}</th>
                  <th>{t('상황', 'Context')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>My name is [이름].</strong></td>
                  <td>제 이름은 [이름]입니다.</td>
                  <td>{t('격식', 'Formal')}</td>
                </tr>
                <tr>
                  <td><strong>I'm [이름].</strong></td>
                  <td>저는 [이름]이에요.</td>
                  <td>{t('일상', 'Casual')}</td>
                </tr>
                <tr>
                  <td><strong>Please call me [별명].</strong></td>
                  <td>[별명]이라고 불러주세요.</td>
                  <td>{t('친근', 'Friendly')}</td>
                </tr>
                <tr>
                  <td><strong>I'm from Korea / Seoul.</strong></td>
                  <td>저는 한국 / 서울에서 왔습니다.</td>
                  <td>{t('출신', 'Origin')}</td>
                </tr>
                <tr>
                  <td><strong>I work at [회사명].</strong></td>
                  <td>[회사명]에서 일합니다.</td>
                  <td>{t('직장', 'Work')}</td>
                </tr>
                <tr>
                  <td><strong>I'm a [직업].</strong></td>
                  <td>저는 [직업]입니다.</td>
                  <td>{t('직업', 'Profession')}</td>
                </tr>
                <tr>
                  <td><strong>I've been living here for [기간].</strong></td>
                  <td>여기에서 [기간] 동안 살고 있어요.</td>
                  <td>{t('거주', 'Residence')}</td>
                </tr>
                <tr>
                  <td><strong>Nice to meet you.</strong></td>
                  <td>만나서 반갑습니다.</td>
                  <td>{t('처음 만남', 'First meeting')}</td>
                </tr>
                <tr>
                  <td><strong>It's a pleasure to meet you.</strong></td>
                  <td>만나 뵙게 되어 영광입니다.</td>
                  <td>{t('격식', 'Formal')}</td>
                </tr>
                <tr>
                  <td><strong>I've heard a lot about you.</strong></td>
                  <td>많이 들었습니다.</td>
                  <td>{t('소개 받은 후', 'After being introduced')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: 실전 대화 */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('3. 실전 대화', '3. Real Conversations')}</h2>
          <p>
            {t(
              '실제 상황에서 사용할 수 있는 대화 예시입니다. 소리 내어 연습해 보세요.',
              'Here are example conversations you can use in real situations. Practice reading them aloud.'
            )}
          </p>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 1 - 직장에서 처음 만남', 'Conversation 1 - Meeting at Work')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Tom:</span> Hi, I don't think we've met. I'm Tom from the marketing team.</p>
              <p><span className="speaker b">Jina:</span> Oh, hi Tom! I'm Jina. I just started in the design department last week.</p>
              <p><span className="speaker a">Tom:</span> Welcome aboard! How are you finding it so far?</p>
              <p><span className="speaker b">Jina:</span> It's been great. Everyone's been really welcoming.</p>
              <p><span className="speaker a">Tom:</span> That's good to hear. If you need anything, don't hesitate to ask.</p>
              <p><span className="speaker b">Jina:</span> Thanks, I really appreciate that. Nice to meet you, Tom!</p>
              <p><span className="speaker a">Tom:</span> Nice to meet you too, Jina!</p>
            </div>
            <p className="translation">
              {t(
                'Tom: 안녕하세요, 아직 만난 적이 없는 것 같아요. 마케팅 팀의 Tom입니다. / Jina: 아, 안녕하세요 Tom! 저는 Jina예요. 지난주에 디자인 부서에 입사했어요. / Tom: 환영합니다! 지금까지 어떠세요? / Jina: 좋아요. 모두 정말 친절하게 맞아주셨어요. / Tom: 다행이네요. 필요한 게 있으면 편하게 말씀하세요. / Jina: 감사합니다, 정말 감사해요. 만나서 반가워요, Tom! / Tom: 저도 만나서 반가워요, Jina!',
                'Korean Translation: Tom: Hi, I don\'t think we\'ve met. I\'m Tom from the marketing team. / Jina: Oh, hi Tom! I\'m Jina. I just started in the design department last week. ...'
              )}
            </p>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 2 - 파티에서 만남', 'Conversation 2 - Meeting at a Party')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Alex:</span> Hey! I'm Alex. I don't think I've seen you around before.</p>
              <p><span className="speaker b">Minji:</span> Hi Alex, I'm Minji. I'm a friend of Sarah's.</p>
              <p><span className="speaker a">Alex:</span> Oh, cool! So where are you from, Minji?</p>
              <p><span className="speaker b">Minji:</span> I'm from Seoul, Korea. I've been living here for about two years.</p>
              <p><span className="speaker a">Alex:</span> Nice! What brought you here?</p>
              <p><span className="speaker b">Minji:</span> I'm doing my master's in computer science at the university.</p>
              <p><span className="speaker a">Alex:</span> That's awesome! I studied engineering there. Small world!</p>
              <p><span className="speaker b">Minji:</span> Really? That's so cool! It was nice meeting you, Alex.</p>
            </div>
            <p className="translation">
              {t(
                'Alex: 안녕! 나는 Alex야. 전에 본 적이 없는 것 같은데. / Minji: 안녕 Alex, 나는 Minji야. Sarah 친구야. / Alex: 오, 멋지다! Minji 어디에서 왔어? / Minji: 한국 서울에서 왔어. 여기에 산 지 약 2년 됐어. / Alex: 멋지다! 어쩌다 여기 오게 됐어? / Minji: 대학교에서 컴퓨터 공학 석사 과정 중이야. / Alex: 대단하다! 나도 거기서 공학 공부했는데. 세상 좁다! / Minji: 진짜? 신기하다! 만나서 반가웠어, Alex.',
                'Korean Translation: Alex: Hey! I\'m Alex. I don\'t think I\'ve seen you around before. / Minji: Hi Alex, I\'m Minji. I\'m a friend of Sarah\'s. ...'
              )}
            </p>
          </div>

          <div className="example-box" data-aos="fade-up">
            <h4>{t('실전 대화 3 - 비즈니스 미팅에서', 'Conversation 3 - At a Business Meeting')}</h4>
            <div className="dialogue">
              <p><span className="speaker a">Mr. Park:</span> Good morning. I'm Sunwoo Park, the project manager at KTech.</p>
              <p><span className="speaker b">Ms. Davis:</span> Good morning, Mr. Park. I'm Rachel Davis, the head of international partnerships at GlobalCo. It's a pleasure to meet you.</p>
              <p><span className="speaker a">Mr. Park:</span> The pleasure is all mine, Ms. Davis. I've heard wonderful things about your team.</p>
              <p><span className="speaker b">Ms. Davis:</span> That's very kind of you. How was your flight?</p>
              <p><span className="speaker a">Mr. Park:</span> It was smooth, thank you for asking. I arrived last night.</p>
              <p><span className="speaker b">Ms. Davis:</span> Great. Please, have a seat. Can I get you some coffee or tea?</p>
              <p><span className="speaker a">Mr. Park:</span> Coffee would be wonderful, thank you.</p>
            </div>
            <p className="translation">
              {t(
                'Mr. Park: 안녕하세요. KTech의 프로젝트 매니저 박선우입니다. / Ms. Davis: 안녕하세요, Mr. Park. GlobalCo 국제 파트너십 부서 책임자 Rachel Davis입니다. 만나 뵙게 되어 영광입니다. / Mr. Park: 저야말로 영광입니다. 팀에 대해 좋은 이야기를 많이 들었습니다. / Ms. Davis: 과찬이세요. 비행은 어떠셨나요? / Mr. Park: 편안했습니다, 물어봐 주셔서 감사합니다. 어젯밤 도착했습니다. / Ms. Davis: 좋습니다. 앉으세요. 커피나 차 드릴까요? / Mr. Park: 커피 주시면 감사하겠습니다.',
                'Korean Translation: Mr. Park: Good morning. I\'m Sunwoo Park, the project manager at KTech. / Ms. Davis: Good morning, Mr. Park. ...'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 핵심 표현 정리 */}
      <section className="lesson-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('4. 핵심 표현 정리', '4. Key Expressions Summary')}</h2>
          <p>
            {t(
              '이번 레슨에서 배운 핵심 표현들을 정리했습니다. 반복해서 외워보세요.',
              'Here is a summary of the key expressions from this lesson. Practice them repeatedly.'
            )}
          </p>

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
                <tr><td>1</td><td>Hello / Hi / Hey</td><td>안녕하세요 / 안녕 / 야</td></tr>
                <tr><td>2</td><td>Good morning / afternoon / evening</td><td>좋은 아침 / 오후 / 저녁</td></tr>
                <tr><td>3</td><td>How are you?</td><td>어떻게 지내세요?</td></tr>
                <tr><td>4</td><td>I'm fine, thank you.</td><td>잘 지내요, 감사합니다.</td></tr>
                <tr><td>5</td><td>What's up?</td><td>뭐해? / 별일 없어?</td></tr>
                <tr><td>6</td><td>Not much. / Nothing much.</td><td>별일 없어.</td></tr>
                <tr><td>7</td><td>My name is...</td><td>제 이름은...입니다.</td></tr>
                <tr><td>8</td><td>I'm from Korea.</td><td>저는 한국에서 왔습니다.</td></tr>
                <tr><td>9</td><td>I work at...</td><td>저는 ...에서 일합니다.</td></tr>
                <tr><td>10</td><td>Nice to meet you.</td><td>만나서 반갑습니다.</td></tr>
                <tr><td>11</td><td>It's a pleasure to meet you.</td><td>만나 뵙게 되어 영광입니다.</td></tr>
                <tr><td>12</td><td>I've heard a lot about you.</td><td>많이 들었습니다.</td></tr>
                <tr><td>13</td><td>Welcome aboard!</td><td>환영합니다! (새 동료에게)</td></tr>
                <tr><td>14</td><td>How are you finding it?</td><td>어떠세요? (새 환경 적응)</td></tr>
                <tr><td>15</td><td>Don't hesitate to ask.</td><td>편하게 물어보세요.</td></tr>
                <tr><td>16</td><td>Please call me [이름].</td><td>[이름]이라고 불러주세요.</td></tr>
                <tr><td>17</td><td>What brought you here?</td><td>어쩌다 여기 오게 되셨어요?</td></tr>
                <tr><td>18</td><td>How was your flight?</td><td>비행은 어떠셨나요?</td></tr>
                <tr><td>19</td><td>The pleasure is all mine.</td><td>저야말로 영광입니다.</td></tr>
                <tr><td>20</td><td>See you later / Take care</td><td>나중에 봐요 / 잘 가요</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: 연습 문제 */}
      <section className="practice-section" data-aos="fade-up">
        <div className="container">
          <h2>{t('5. 연습 문제', '5. Practice Exercises')}</h2>
          <p>
            {t(
              '빈칸에 알맞은 표현을 채워 넣어보세요.',
              'Fill in the blanks with the appropriate expressions.'
            )}
          </p>

          <div className="practice-questions" data-aos="fade-up">
            <div className="practice-item">
              <p className="practice-question">
                <strong>Q1.</strong> {t('아침에 만났을 때 인사:', 'Morning greeting:')} <br />
                "________ ! How are you today?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Good morning
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q2.</strong> {t('처음 만난 사람에게 이름 소개:', 'Introducing your name to someone new:')} <br />
                "Hi, ________ Jina. Nice to meet you."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> I'm / My name is
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q3.</strong> {t('"How are you?"에 대한 일반적인 대답:', 'Common response to "How are you?":')} <br />
                "________ , thank you. And you?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> I'm fine / I'm good / I'm great
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q4.</strong> {t('출신을 말할 때:', 'Telling someone where you are from:')} <br />
                "________ Seoul, Korea."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> I'm from
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q5.</strong> {t('격식 있게 만나서 반갑다고 할 때:', 'Formal way to say "nice to meet you":')} <br />
                "It's a ________ to meet you."
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> pleasure
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q6.</strong> {t('친한 친구에게 하는 인사:', 'Casual greeting to a close friend:')} <br />
                "________ ! What's up?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Hey
                </p>
              )}
            </div>

            <div className="practice-item">
              <p className="practice-question">
                <strong>Q7.</strong> {t('새 동료를 환영할 때:', 'Welcoming a new colleague:')} <br />
                "________ ! How are you finding it so far?"
              </p>
              {showAnswers && (
                <p className="practice-answer">
                  <strong>{t('정답', 'Answer')}:</strong> Welcome aboard
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
            <Link to="/conversation" className="btn btn-secondary">
              {t('← 목록으로', '← Back to List')}
            </Link>
            <Link to="/conversation/daily-life" className="btn btn-primary">
              {t('다음: 일상생활 표현 →', 'Next: Daily Life →')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
