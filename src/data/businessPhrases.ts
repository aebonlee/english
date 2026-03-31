interface Phrase {
  en: string;
  ko: string;
}

interface PhraseCategory {
  category: string;
  phrases: Phrase[];
}

export const emailPhrases: PhraseCategory[] = [
  {
    category: '인사 & 시작 (Opening)',
    phrases: [
      { en: 'I hope this email finds you well.', ko: '잘 지내고 계시길 바랍니다.' },
      { en: 'Thank you for your prompt reply.', ko: '빠른 답변 감사합니다.' },
      { en: 'I am writing to inquire about...', ko: '...에 대해 문의드리고자 합니다.' },
      { en: 'Following up on our previous conversation...', ko: '이전 대화에 이어서...' },
      { en: 'I am reaching out regarding...', ko: '...와 관련하여 연락드립니다.' },
    ],
  },
  {
    category: '요청 (Requests)',
    phrases: [
      { en: 'Could you please send me the report by Friday?', ko: '금요일까지 보고서를 보내주시겠어요?' },
      { en: 'I would appreciate it if you could...', ko: '...해 주시면 감사하겠습니다.' },
      { en: 'Would it be possible to reschedule the meeting?', ko: '회의 일정을 변경할 수 있을까요?' },
      { en: 'Please find attached the documents you requested.', ko: '요청하신 문서를 첨부해 드립니다.' },
      { en: 'I kindly request your feedback on this matter.', ko: '이 건에 대한 피드백을 부탁드립니다.' },
    ],
  },
  {
    category: '마무리 (Closing)',
    phrases: [
      { en: 'Please do not hesitate to contact me if you have any questions.', ko: '궁금한 점이 있으시면 언제든지 연락 주세요.' },
      { en: 'I look forward to hearing from you.', ko: '답변 기다리겠습니다.' },
      { en: 'Thank you for your time and consideration.', ko: '시간 내주시고 검토해 주셔서 감사합니다.' },
      { en: 'Best regards,', ko: '감사합니다,' },
      { en: 'Should you need any further information, please let me know.', ko: '추가 정보가 필요하시면 알려주세요.' },
    ],
  },
];

export const meetingPhrases: PhraseCategory[] = [
  {
    category: '회의 시작 (Opening a Meeting)',
    phrases: [
      { en: 'Let\'s get started. Thank you all for joining.', ko: '시작하겠습니다. 참석해 주셔서 감사합니다.' },
      { en: 'The purpose of today\'s meeting is to...', ko: '오늘 회의의 목적은...입니다.' },
      { en: 'I\'d like to go over the agenda quickly.', ko: '안건을 빠르게 살펴보겠습니다.' },
      { en: 'Before we begin, does anyone have any questions?', ko: '시작 전에 질문 있으신 분 계신가요?' },
    ],
  },
  {
    category: '의견 제시 (Expressing Opinions)',
    phrases: [
      { en: 'In my opinion, we should focus on...', ko: '제 의견으로는 ...에 집중해야 합니다.' },
      { en: 'I agree with your point, however...', ko: '말씀에 동의하지만, 그러나...' },
      { en: 'From my perspective, the best approach would be...', ko: '제 관점에서는 최선의 접근 방법은...' },
      { en: 'I\'d like to add to what was just said.', ko: '방금 말씀하신 것에 추가하고 싶습니다.' },
      { en: 'That\'s a valid point, but have we considered...?', ko: '타당한 지적이지만, ...을 고려해 보셨나요?' },
    ],
  },
  {
    category: '회의 마무리 (Closing a Meeting)',
    phrases: [
      { en: 'Let me summarize what we\'ve discussed.', ko: '논의한 내용을 정리하겠습니다.' },
      { en: 'The action items are as follows...', ko: '실행 항목은 다음과 같습니다...' },
      { en: 'Thank you for a productive meeting.', ko: '생산적인 회의에 감사드립니다.' },
      { en: 'Let\'s schedule a follow-up meeting for next week.', ko: '다음 주에 후속 회의를 잡겠습니다.' },
    ],
  },
];

export const presentationPhrases: PhraseCategory[] = [
  {
    category: '도입 (Introduction)',
    phrases: [
      { en: 'Good morning, everyone. Today I\'d like to talk about...', ko: '안녕하세요, 여러분. 오늘은 ...에 대해 말씀드리겠습니다.' },
      { en: 'My presentation is divided into three parts.', ko: '제 프레젠테이션은 세 부분으로 나뉩니다.' },
      { en: 'First, I\'ll give you an overview of...', ko: '먼저 ...에 대해 개요를 말씀드리겠습니다.' },
      { en: 'Feel free to ask questions at any time.', ko: '언제든지 질문해 주세요.' },
    ],
  },
  {
    category: '전환 (Transitions)',
    phrases: [
      { en: 'Moving on to the next slide...', ko: '다음 슬라이드로 넘어가겠습니다...' },
      { en: 'Now let\'s take a look at the data.', ko: '이제 데이터를 살펴보겠습니다.' },
      { en: 'This brings me to my next point.', ko: '이것이 다음 요점으로 이어집니다.' },
      { en: 'As you can see from this chart...', ko: '이 차트에서 보시는 바와 같이...' },
    ],
  },
  {
    category: '마무리 (Conclusion)',
    phrases: [
      { en: 'In conclusion, I\'d like to emphasize...', ko: '결론적으로, ...을 강조하고 싶습니다.' },
      { en: 'To sum up the key takeaways...', ko: '핵심 요점을 요약하면...' },
      { en: 'Thank you for your attention. Any questions?', ko: '경청해 주셔서 감사합니다. 질문 있으신가요?' },
      { en: 'I\'d be happy to answer any questions.', ko: '기꺼이 질문에 답하겠습니다.' },
    ],
  },
];

export const negotiationPhrases: PhraseCategory[] = [
  {
    category: '제안 (Making Proposals)',
    phrases: [
      { en: 'We\'d like to propose the following terms.', ko: '다음 조건을 제안하고 싶습니다.' },
      { en: 'How about we meet halfway on this?', ko: '이 부분에서 서로 양보하는 건 어떨까요?' },
      { en: 'Our initial offer is...', ko: '저희의 초기 제안은...입니다.' },
      { en: 'Would you be open to considering...?', ko: '...을 고려해 보실 의향이 있으신가요?' },
    ],
  },
  {
    category: '협상 (Negotiating)',
    phrases: [
      { en: 'We can agree to that if you could...', ko: '...해 주신다면 동의할 수 있습니다.' },
      { en: 'That seems a bit high. Could you lower the price?', ko: '조금 높은 것 같습니다. 가격을 낮춰주실 수 있나요?' },
      { en: 'Let me think about it and get back to you.', ko: '생각해 보고 다시 연락드리겠습니다.' },
      { en: 'We\'re willing to make a concession on...', ko: '...에 대해 양보할 용의가 있습니다.' },
    ],
  },
  {
    category: '합의 (Reaching Agreement)',
    phrases: [
      { en: 'I think we have a deal.', ko: '합의가 된 것 같습니다.' },
      { en: 'Let\'s put this in writing.', ko: '이것을 서면으로 작성합시다.' },
      { en: 'We\'re pleased to accept your offer.', ko: '귀하의 제안을 기꺼이 수락합니다.' },
      { en: 'I\'m glad we could reach a mutual agreement.', ko: '상호 합의에 도달하게 되어 기쁩니다.' },
    ],
  },
];

export const interviewPhrases: PhraseCategory[] = [
  {
    category: '자기소개 (Self Introduction)',
    phrases: [
      { en: 'Thank you for giving me this opportunity to interview.', ko: '면접 기회를 주셔서 감사합니다.' },
      { en: 'I have over five years of experience in...', ko: '...분야에서 5년 이상의 경력이 있습니다.' },
      { en: 'My strengths include problem-solving and teamwork.', ko: '제 강점은 문제 해결 능력과 팀워크입니다.' },
      { en: 'I\'m passionate about continuous learning and growth.', ko: '저는 지속적인 학습과 성장에 열정적입니다.' },
    ],
  },
  {
    category: '경험 & 역량 (Experience & Skills)',
    phrases: [
      { en: 'In my previous role, I was responsible for...', ko: '이전 직장에서 저는 ...을 담당했습니다.' },
      { en: 'I successfully led a team of ten people.', ko: '10명의 팀을 성공적으로 이끌었습니다.' },
      { en: 'One of my key achievements was...', ko: '주요 성과 중 하나는...입니다.' },
      { en: 'I\'m proficient in project management tools such as...', ko: '...와 같은 프로젝트 관리 도구에 능숙합니다.' },
    ],
  },
  {
    category: '질문하기 (Asking Questions)',
    phrases: [
      { en: 'Could you tell me more about the team structure?', ko: '팀 구조에 대해 더 말씀해 주시겠어요?' },
      { en: 'What does a typical day look like in this role?', ko: '이 직무에서 일반적인 하루는 어떤가요?' },
      { en: 'What are the opportunities for professional development?', ko: '전문 역량 개발 기회는 어떻게 되나요?' },
      { en: 'When can I expect to hear back from you?', ko: '언제쯤 결과를 들을 수 있을까요?' },
    ],
  },
];
