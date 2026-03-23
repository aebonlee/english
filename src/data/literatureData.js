// ============================================================
// Literature Data — Public Domain Works
// Poetry (9) + Prose/Speeches (5)
// ============================================================

export const poetryWorks = [
  {
    id: 'frost-road',
    title: 'The Road Not Taken',
    author: 'Robert Frost',
    year: 1916,
    level: 'intermediate',
    paragraphs: [
      'Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;',
      'Then took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,',
      'And both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.',
      'I shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.'
    ],
    translation: '노란 숲 속에서 두 갈래 길이 갈라졌다.\n두 길을 다 갈 수 없는 한 사람의 나그네로서\n나는 오래 서서 한쪽 길을 바라보았다.\n덤불 속으로 꺾이는 데까지 먼 곳을.\n\n그리고 다른 길을 택했다. 똑같이 아름다운,\n어쩌면 더 나은 이유가 있는 길이었으니,\n풀이 무성하고 사람이 밟지 않은 듯했으므로.\n그러나 실은 두 길 다\n거의 비슷하게 밟혀 있었다.\n\n그 아침 두 길 모두 똑같이\n밟히지 않은 낙엽 위에 놓여 있었다.\n아, 나는 첫 번째 길을 다음 기회로 남겨 두었다!\n하지만 길이 길로 이어지는 것을 알기에\n다시 돌아올 수 있을지 의심했다.\n\n먼 훗날 어디선가\n나는 한숨을 쉬며 이야기할 것이다.\n숲 속에서 두 갈래 길이 갈라졌고, 나는—\n사람이 덜 간 길을 택했다고,\n그리고 그것이 모든 것을 바꾸어 놓았다고.',
    vocabulary: [
      { word: 'diverged', meaning: '갈라지다, 분기하다', example: 'Two roads diverged in a yellow wood.' },
      { word: 'undergrowth', meaning: '덤불, 관목', example: 'To where it bent in the undergrowth.' },
      { word: 'wanted wear', meaning: '사람의 발길이 닿지 않은', example: 'Because it was grassy and wanted wear.' },
      { word: 'trodden', meaning: '밟힌 (tread의 과거분사)', example: 'In leaves no step had trodden black.' },
      { word: 'hence', meaning: '이후에, 지금부터', example: 'Somewhere ages and ages hence.' }
    ],
    analysis: '로버트 프로스트의 대표작으로, 인생의 선택과 그 결과에 대한 명상을 담고 있습니다. 표면적으로는 숲 속 산책길에 대한 시이지만, 깊이 읽으면 인생의 갈림길에서 내리는 결정의 의미를 묻고 있습니다. 마지막 연에서 화자는 "사람이 덜 간 길"을 택한 것이 모든 것을 바꾸었다고 말하지만, 사실 두 길은 "거의 비슷하게 밟혀" 있었다는 역설이 이 시의 핵심입니다.'
  },
  {
    id: 'frost-woods',
    title: 'Stopping by Woods on a Snowy Evening',
    author: 'Robert Frost',
    year: 1923,
    level: 'beginner',
    paragraphs: [
      'Whose woods these are I think I know.\nHis house is in the village though;\nHe will not see me stopping here\nTo watch his woods fill up with snow.',
      'My little horse must think it queer\nTo stop without a farmhouse near\nBetween the woods and frozen lake\nThe darkest evening of the year.',
      'He gives his harness bells a shake\nTo ask if there is some mistake.\nThe only other sound\'s the sweep\nOf easy wind and downy flake.',
      'The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.'
    ],
    translation: '이 숲의 주인이 누구인지 나는 알 것 같다.\n하지만 그의 집은 마을에 있으니\n내가 여기 멈춰 서서\n그의 숲에 눈이 쌓이는 것을 바라보는 걸 모를 것이다.\n\n내 작은 말은 이상하게 여기리라\n근처에 농가도 없는 곳,\n숲과 얼어붙은 호수 사이에서\n한 해의 가장 어두운 저녁에 멈춰 선 것을.\n\n말은 방울 달린 고삐를 흔든다\n뭔가 잘못된 게 아닌지 묻듯이.\n다른 유일한 소리는\n부드러운 바람과 솜털 같은 눈송이가 스치는 소리뿐.\n\n숲은 사랑스럽고, 어둡고, 깊다.\n하지만 나에겐 지켜야 할 약속이 있고,\n잠들기 전에 가야 할 먼 길이 있다.\n잠들기 전에 가야 할 먼 길이 있다.',
    vocabulary: [
      { word: 'queer', meaning: '이상한, 기묘한', example: 'My little horse must think it queer.' },
      { word: 'harness', meaning: '마구(말에 씌우는 기구)', example: 'He gives his harness bells a shake.' },
      { word: 'sweep', meaning: '스치는 소리, 쓸기', example: 'The only other sound\'s the sweep.' },
      { word: 'downy', meaning: '솜털 같은, 부드러운', example: 'Of easy wind and downy flake.' },
      { word: 'promises to keep', meaning: '지켜야 할 약속들', example: 'But I have promises to keep.' }
    ],
    analysis: '겨울 저녁 눈 내리는 숲에서 잠시 멈춘 화자의 명상을 담은 시입니다. 마지막 두 행의 반복("잠들기 전에 가야 할 먼 길")은 단순한 여행이 아니라 인생의 책임과 의무를 상징합니다. 아름다운 자연의 유혹과 현실의 의무 사이의 긴장감이 시 전체를 관통합니다.'
  },
  {
    id: 'shakespeare-sonnet18',
    title: 'Sonnet 18 — Shall I Compare Thee to a Summer\'s Day?',
    author: 'William Shakespeare',
    year: 1609,
    level: 'advanced',
    paragraphs: [
      'Shall I compare thee to a summer\'s day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer\'s lease hath all too short a date:',
      'Sometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm\'d;\nAnd every fair from fair sometime declines,\nBy chance, or nature\'s changing course untrimm\'d;',
      'But thy eternal summer shall not fade\nNor lose possession of that fair thou owest;\nNor shall death brag thou wander\'st in his shade,\nWhen in eternal lines to time thou growest:',
      'So long as men can breathe or eyes can see,\nSo long lives this and this gives life to thee.'
    ],
    translation: '그대를 여름날에 비할까?\n그대는 더 사랑스럽고 더 온화하다.\n거친 바람은 5월의 사랑스러운 꽃봉오리를 흔들고,\n여름의 기한은 너무나 짧다.\n\n때로 하늘의 눈(태양)은 너무 뜨겁게 비추고,\n그 황금빛 얼굴은 종종 흐려진다.\n아름다운 것은 언젠가 아름다움에서 물러나니,\n우연히, 혹은 자연의 변화하는 흐름에 의해.\n\n하지만 그대의 영원한 여름은 시들지 않으리,\n그대가 가진 그 아름다움을 잃지도 않으리.\n영원한 시구 속에서 그대가 시간과 함께 자라나니,\n죽음도 그대가 그의 그늘을 헤맨다고 자랑하지 못하리.\n\n사람이 숨 쉬고 눈이 볼 수 있는 한,\n이 시는 살아서 그대에게 생명을 주리.',
    vocabulary: [
      { word: 'temperate', meaning: '온화한, 절제된', example: 'Thou art more lovely and more temperate.' },
      { word: 'lease', meaning: '기한, 임대 기간', example: "And summer's lease hath all too short a date." },
      { word: 'complexion', meaning: '얼굴빛, 안색', example: 'And often is his gold complexion dimm\'d.' },
      { word: 'untrimm\'d', meaning: '다듬어지지 않은, 가꾸어지지 않은', example: "Or nature's changing course untrimm'd." },
      { word: 'eternal lines', meaning: '영원한 시구(詩句)', example: 'When in eternal lines to time thou growest.' }
    ],
    analysis: '셰익스피어의 가장 유명한 소네트로, 사랑하는 이의 아름다움을 여름과 비교하며 시작합니다. 여름은 덧없이 지나가지만, 시 속에 담긴 아름다움은 영원하다는 메시지를 전합니다. 마지막 대구(couplet)에서 예술(문학)이 시간과 죽음을 초월하여 사랑하는 이에게 영원한 생명을 부여한다고 선언합니다.'
  },
  {
    id: 'dickinson-hope',
    title: '"Hope" is the thing with feathers',
    author: 'Emily Dickinson',
    year: 1891,
    level: 'intermediate',
    paragraphs: [
      '"Hope" is the thing with feathers —\nThat perches in the soul —\nAnd sings the tune without the words —\nAnd never stops — at all —',
      'And sweetest — in the Gale — is heard —\nAnd sore must be the storm —\nThat could abash the little Bird\nThat kept so many warm —',
      'I\'ve heard it in the chillest land —\nAnd on the strangest Sea —\nYet — never — in Extremity,\nIt asked a crumb — of me.'
    ],
    translation: '"희망"은 깃털 달린 것 —\n영혼에 깃들어 앉아 —\n가사 없는 노래를 부르는 것 —\n그리고 결코 — 멈추지 않는 것 —\n\n폭풍 속에서 — 가장 달콤하게 들린다 —\n그리고 그 작은 새를 부끄럽게 할 수 있는\n폭풍은 정녕 혹독해야 하리 —\n그토록 많은 이를 따뜻하게 한 새를 —\n\n나는 가장 추운 땅에서도 들었다 —\n그리고 가장 낯선 바다에서도 —\n그러나 — 결코 — 극한의 상황에서도,\n내게 빵 부스러기 하나 — 달라 하지 않았다.',
    vocabulary: [
      { word: 'perches', meaning: '(새가) 앉다, 자리 잡다', example: 'That perches in the soul.' },
      { word: 'Gale', meaning: '강풍, 폭풍', example: 'And sweetest — in the Gale — is heard.' },
      { word: 'abash', meaning: '부끄럽게 하다, 당황하게 하다', example: 'That could abash the little Bird.' },
      { word: 'Extremity', meaning: '극한, 궁지', example: 'Yet — never — in Extremity.' },
      { word: 'crumb', meaning: '빵 부스러기, 조각', example: 'It asked a crumb — of me.' }
    ],
    analysis: '에밀리 디킨슨은 희망을 영혼에 앉은 작은 새에 비유합니다. 이 새는 폭풍 속에서도 노래하며, 아무런 대가를 요구하지 않습니다. 디킨슨 특유의 대시(—) 사용은 시에 독특한 리듬감을 부여합니다. 희망의 보편성과 무조건성을 강조하는 작품입니다.'
  },
  {
    id: 'dickinson-death',
    title: 'Because I could not stop for Death',
    author: 'Emily Dickinson',
    year: 1890,
    level: 'advanced',
    paragraphs: [
      'Because I could not stop for Death –\nHe kindly stopped for me –\nThe Carriage held but just Ourselves –\nAnd Immortality.',
      'We slowly drove – He knew no haste\nAnd I had put away\nMy labor and my leisure too,\nFor His Civility –',
      'We passed the School, where Children strove\nAt Recess – in the Ring –\nWe passed the Fields of Gazing Grain –\nWe passed the Setting Sun –',
      'Or rather – He passed Us –\nThe Dews drew quivering and Chill –\nFor only Gossamer, my Gown –\nMy Tippet – only Tulle –',
      'We paused before a House that seemed\nA Swelling of the Ground –\nThe Roof was scarcely visible –\nThe Cornice – in the Ground –',
      'Since then – \'tis Centuries – and yet\nFeels shorter than the Day\nI first surmised the Horses\' Heads\nWere toward Eternity –'
    ],
    translation: '내가 죽음을 위해 멈출 수 없었기에 —\n그가 친절하게 내게 멈추어 주었다 —\n마차에는 우리 둘만 —\n그리고 불멸.\n\n우리는 천천히 달렸다 — 그는 서두름을 몰랐다\n그리고 나는 내려놓았다\n나의 일과 나의 여가도,\n그의 예의를 위해 —\n\n우리는 학교를 지나갔다, 아이들이\n쉬는 시간에 — 동그라미 안에서 — 놀고 있었다\n우리는 응시하는 곡식의 들판을 지나갔다 —\n우리는 지는 해를 지나갔다 —\n\n아니 — 해가 우리를 지나간 것이다 —\n이슬이 떨리며 차갑게 다가왔다 —\n거미줄 같은 것이, 내 옷 —\n내 숄은 — 얇은 망사뿐 —\n\n우리는 집 앞에서 멈추었다\n땅이 부풀어 오른 것 같은 —\n지붕은 거의 보이지 않았고 —\n처마는 — 땅 속에 —\n\n그 이후로 — 수 세기가 흘렀다 — 하지만\n그날보다 짧게 느껴진다\n내가 처음 말들의 머리가\n영원을 향하고 있다고 짐작했던 그날보다.',
    vocabulary: [
      { word: 'Civility', meaning: '예의, 정중함', example: 'For His Civility.' },
      { word: 'strove', meaning: '분투하다 (strive의 과거)', example: 'where Children strove At Recess.' },
      { word: 'Gossamer', meaning: '거미줄 같은 얇은 천', example: 'For only Gossamer, my Gown.' },
      { word: 'Tippet', meaning: '숄, 어깨걸이', example: 'My Tippet – only Tulle.' },
      { word: 'surmised', meaning: '추측하다, 짐작하다', example: 'I first surmised the Horses\' Heads.' }
    ],
    analysis: '죽음을 신사적인 마차 기사로 의인화한 디킨슨의 걸작입니다. 화자는 죽음과 함께 마차를 타고 인생의 단계(학교=유년, 곡식 밭=성년, 지는 해=노년)를 지나 무덤(땅의 부풀음)에 도착합니다. 죽음을 공포가 아닌 예의 바른 동반자로 묘사한 것이 이 시의 독특한 매력입니다.'
  },
  {
    id: 'blake-tyger',
    title: 'The Tyger',
    author: 'William Blake',
    year: 1794,
    level: 'intermediate',
    paragraphs: [
      'Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?',
      'In what distant deeps or skies,\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?',
      'And what shoulder, & what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? & what dread feet?',
      'What the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp,\nDare its deadly terrors clasp!',
      'When the stars threw down their spears\nAnd water\'d heaven with their tears:\nDid he smile his work to see?\nDid he who made the Lamb make thee?',
      'Tyger Tyger burning bright,\nIn the forests of the night:\nWhat immortal hand or eye,\nDare frame thy fearful symmetry?'
    ],
    translation: '호랑이 호랑이, 타오르며 빛나는,\n밤의 숲 속에서;\n어떤 불멸의 손 혹은 눈이\n네 두려운 균형미를 만들 수 있었나?\n\n어떤 먼 심연 혹은 하늘에서,\n네 눈의 불꽃이 타올랐나?\n어떤 날개로 감히 높이 올랐나?\n어떤 손이, 감히 불을 움켜쥐었나?\n\n그리고 어떤 어깨, 어떤 솜씨가\n네 심장의 힘줄을 꼬을 수 있었나?\n그리고 네 심장이 뛰기 시작했을 때,\n어떤 무서운 손? 어떤 무서운 발?\n\n어떤 망치? 어떤 사슬,\n어떤 용광로에서 네 뇌가 만들어졌나?\n어떤 모루? 어떤 무서운 움켜쥠이\n감히 그 치명적 공포를 붙잡았나!\n\n별들이 창을 내던지고\n눈물로 하늘에 물을 주었을 때:\n그는 자기 작품을 보며 미소 지었나?\n어린양을 만든 그가 너를 만들었나?\n\n호랑이 호랑이 타오르며 빛나는,\n밤의 숲 속에서:\n어떤 불멸의 손 혹은 눈이\n감히 네 두려운 균형미를 만들었나?',
    vocabulary: [
      { word: 'symmetry', meaning: '균형(미), 대칭', example: 'Could frame thy fearful symmetry?' },
      { word: 'aspire', meaning: '열망하다, 높이 오르다', example: 'On what wings dare he aspire?' },
      { word: 'sinews', meaning: '힘줄, 근육', example: 'Could twist the sinews of thy heart?' },
      { word: 'furnace', meaning: '용광로, 화로', example: 'In what furnace was thy brain?' },
      { word: 'anvil', meaning: '모루 (대장장이 도구)', example: 'What the anvil? what dread grasp.' }
    ],
    analysis: '윌리엄 블레이크의 대표작으로, 호랑이의 강렬한 아름다움을 통해 창조의 신비와 선악의 이중성을 탐구합니다. "어린양을 만든 그가 너를 만들었나?"라는 질문은 순수함과 두려움이 같은 창조주에게서 나올 수 있는지 묻는 근본적 질문입니다. 대장간 이미지(망치, 사슬, 용광로, 모루)가 창조의 힘을 상징합니다.'
  },
  {
    id: 'poe-annabel',
    title: 'Annabel Lee',
    author: 'Edgar Allan Poe',
    year: 1849,
    level: 'intermediate',
    paragraphs: [
      'It was many and many a year ago,\nIn a kingdom by the sea,\nThat a maiden there lived whom you may know\nBy the name of Annabel Lee;\nAnd this maiden she lived with no other thought\nThan to love and be loved by me.',
      'I was a child and she was a child,\nIn this kingdom by the sea,\nBut we loved with a love that was more than love —\nI and my Annabel Lee —\nWith a love that the winged seraphs of Heaven\nCoveted her and me.',
      'And this was the reason that, long ago,\nIn this kingdom by the sea,\nA wind blew out of a cloud, chilling\nMy beautiful Annabel Lee;\nSo that her highborn kinsmen came\nAnd bore her away from me,\nTo shut her up in a sepulchre\nIn this kingdom by the sea.',
      'The angels, not half so happy in Heaven,\nWent envying her and me —\nYes! — that was the reason (as all men know,\nIn this kingdom by the sea)\nThat the wind came out of the cloud by night,\nChilling and killing my Annabel Lee.',
      'But our love it was stronger by far than the love\nOf those who were older than we —\nOf many far wiser than we —\nAnd neither the angels in Heaven above\nNor the demons down under the sea\nCan ever dissever my soul from the soul\nOf the beautiful Annabel Lee;',
      'For the moon never beams, without bringing me dreams\nOf the beautiful Annabel Lee;\nAnd the stars never rise, but I feel the bright eyes\nOf the beautiful Annabel Lee;\nAnd so, all the night-tide, I lie down by the side\nOf my darling — my darling — my life and my bride,\nIn her sepulchre there by the sea —\nIn her tomb by the sounding sea.'
    ],
    translation: '오래오래 전의 일이었다,\n바닷가 왕국에서,\n한 소녀가 살았는데 이름은\n아나벨 리;\n이 소녀는 다른 생각 없이 살았다\n나를 사랑하고 내게 사랑받는 것 외에는.\n\n나는 아이였고 그녀도 아이였다,\n이 바닷가 왕국에서,\n하지만 우리는 사랑 이상의 사랑으로 사랑했다 —\n나와 나의 아나벨 리 —\n천상의 날개 달린 천사들마저\n그녀와 나를 부러워하는 사랑으로.\n\n그리고 이것이 이유였다, 오래전,\n이 바닷가 왕국에서,\n구름 속에서 바람이 불어와\n나의 아름다운 아나벨 리를 얼어붙게 했다;\n그래서 그녀의 고귀한 친척들이 와서\n그녀를 내게서 빼앗아 갔다,\n이 바닷가 왕국의\n무덤 속에 가두기 위해.\n\n천국에서 반도 행복하지 못한 천사들이\n그녀와 나를 시기했다 —\n그렇다! — 그것이 이유였다 (누구나 아는 것처럼,\n이 바닷가 왕국에서)\n밤에 구름 속에서 바람이 불어와\n나의 아나벨 리를 얼어붙게, 죽게 한 것은.\n\n하지만 우리의 사랑은 훨씬 강했다\n우리보다 나이 든 사람들의 사랑보다 —\n우리보다 훨씬 현명한 사람들보다 —\n하늘 위의 천사도\n바다 밑의 악마도\n내 영혼을 갈라놓을 수 없다\n아름다운 아나벨 리의 영혼에서;\n\n달빛이 비출 때면, 언제나 꿈을 가져다주니\n아름다운 아나벨 리의 꿈을;\n별이 뜰 때면, 언제나 밝은 눈동자를 느끼니\n아름다운 아나벨 리의;\n그래서, 밤새도록, 나는 누워 있다\n나의 사랑 — 나의 사랑 — 나의 생명이자 신부 곁에,\n바닷가 그녀의 무덤에 —\n파도 소리 들리는 바닷가 무덤에.',
    vocabulary: [
      { word: 'maiden', meaning: '소녀, 처녀', example: 'That a maiden there lived whom you may know.' },
      { word: 'seraphs', meaning: '치천사 (가장 높은 천사)', example: 'With a love that the winged seraphs of Heaven.' },
      { word: 'coveted', meaning: '탐내다, 부러워하다', example: 'Coveted her and me.' },
      { word: 'sepulchre', meaning: '무덤, 묘', example: 'To shut her up in a sepulchre.' },
      { word: 'dissever', meaning: '갈라놓다, 분리하다', example: 'Can ever dissever my soul from the soul.' }
    ],
    analysis: '에드거 앨런 포의 마지막 시로, 죽음도 갈라놓을 수 없는 영원한 사랑을 노래합니다. "바닷가 왕국"이라는 동화적 배경과 반복되는 후렴구가 음악적 효과를 만들어냅니다. 천사들의 시기가 사랑하는 이의 죽음을 가져왔다는 설정은 사랑의 초월적 힘을 강조합니다.'
  },
  {
    id: 'whitman-captain',
    title: 'O Captain! My Captain!',
    author: 'Walt Whitman',
    year: 1865,
    level: 'intermediate',
    paragraphs: [
      'O Captain! my Captain! our fearful trip is done,\nThe ship has weather\'d every rack, the prize we sought is won,\nThe port is near, the bells I hear, the people all exulting,\nWhile follow eyes the steady keel, the vessel grim and daring;\nBut O heart! heart! heart!\nO the bleeding drops of red,\nWhere on the deck my Captain lies,\nFallen cold and dead.',
      'O Captain! my Captain! rise up and hear the bells;\nRise up — for you the flag is flung — for you the bugle trills,\nFor you bouquets and ribbon\'d wreaths — for you the shores a-crowding,\nFor you they call, the swaying mass, their eager faces turning;\nHere Captain! dear father!\nThis arm beneath your head!\nIt is some dream that on the deck,\nYou\'ve fallen cold and dead.',
      'My Captain does not answer, his lips are pale and still,\nMy father does not feel my arm, he has no pulse nor will,\nThe ship is anchor\'d safe and sound, its voyage closed and done,\nFrom fearful trip the victor ship comes in with object won;\nExult O shores, and ring O bells!\nBut I with mournful tread,\nWalk the deck my Captain lies,\nFallen cold and dead.'
    ],
    translation: '오 선장이여! 나의 선장이여! 두려운 항해가 끝났습니다,\n배는 모든 풍파를 이겨냈고, 우리가 찾던 상은 쟁취되었습니다,\n항구가 가까이, 종소리가 들리고, 사람들 모두 환호하며,\n눈길은 흔들림 없는 용골을, 험난하고 대담한 배를 따릅니다;\n하지만 오 가슴이여! 가슴이여! 가슴이여!\n오 붉게 흐르는 피 방울이여,\n갑판 위에 나의 선장이 누워 있는 곳,\n차갑게 쓰러져 죽어 있는 곳.\n\n오 선장이여! 나의 선장이여! 일어나 종소리를 들으소서;\n일어나소서 — 당신을 위해 깃발이 펄럭이고 — 당신을 위해 나팔이 울리며,\n당신을 위해 꽃다발과 리본 달린 화환이 — 당신을 위해 해안에 인파가 몰려들고,\n당신을 부르며, 흔들리는 군중이, 열망하는 얼굴을 돌립니다;\n여기 선장님! 사랑하는 아버지!\n이 팔을 당신 머리 아래에!\n갑판 위에서\n차갑게 쓰러져 죽었다니 꿈이겠지요.\n\n나의 선장은 대답하지 않는다, 그의 입술은 창백하고 고요하다,\n나의 아버지는 내 팔을 느끼지 못한다, 맥박도 의지도 없다,\n배는 안전하게 정박했고, 항해는 끝나고 완수되었다,\n두려운 항해에서 승리의 배가 목표를 이루고 들어온다;\n환호하라 해안이여, 울려라 종이여!\n하지만 나는 슬픈 발걸음으로,\n나의 선장이 누운 갑판을 걷는다,\n차갑게 쓰러져 죽어 있는.',
    vocabulary: [
      { word: 'weather\'d', meaning: '(폭풍을) 이겨내다', example: 'The ship has weather\'d every rack.' },
      { word: 'exulting', meaning: '환호하는, 크게 기뻐하는', example: 'The people all exulting.' },
      { word: 'keel', meaning: '용골 (배의 밑바닥 뼈대)', example: 'While follow eyes the steady keel.' },
      { word: 'bugle', meaning: '나팔', example: 'For you the bugle trills.' },
      { word: 'mournful tread', meaning: '슬픈 발걸음', example: 'But I with mournful tread.' }
    ],
    analysis: '링컨 대통령의 암살(1865) 직후 쓰인 추모시입니다. "선장"은 링컨을, "배"는 남북전쟁을 거친 미합중국을, "항해"는 남북전쟁을, "항구"는 전쟁의 승리를 상징합니다. 승리의 기쁨과 지도자를 잃은 슬픔이 극명하게 대비됩니다. 휘트먼으로서는 드물게 전통적 운율을 사용한 시입니다.'
  },
  {
    id: 'wordsworth-daffodils',
    title: 'I Wandered Lonely as a Cloud',
    author: 'William Wordsworth',
    year: 1807,
    level: 'beginner',
    paragraphs: [
      'I wandered lonely as a cloud\nThat floats on high o\'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.',
      'Continuous as the stars that shine\nAnd twinkle on the milky way,\nThey stretched in never-ending line\nAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.',
      'The waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed — and gazed — but little thought\nWhat wealth the show to me had brought:',
      'For oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.'
    ],
    translation: '나는 구름처럼 외로이 떠돌았다\n골짜기와 언덕 위를 높이 떠다니는;\n그때 홀연히 나는 보았다, 한 무리의,\n한 떼의, 황금빛 수선화를;\n호수 옆, 나무 아래에서,\n산들바람에 나부끼며 춤추는.\n\n은하수에서 빛나고\n반짝이는 별들처럼 끊임없이,\n수선화는 끝없는 줄로 뻗어 있었다\n만의 가장자리를 따라:\n한눈에 만 송이를 보았다,\n경쾌한 춤으로 머리를 흔들며.\n\n옆의 파도도 춤을 추었다; 하지만\n수선화는 반짝이는 파도보다 더 기쁘게:\n시인이 즐겁지 않을 수 없었다,\n이렇게 유쾌한 무리 속에서:\n나는 바라보고 — 바라보았다 — 하지만 거의 몰랐다\n그 광경이 내게 가져다줄 풍요를:\n\n왜냐하면 종종, 소파에 누워\n멍하거나 생각에 잠길 때,\n수선화가 그 내면의 눈에 번쩍 떠오르니\n그것이 고독의 축복;\n그러면 내 마음은 기쁨으로 가득 차\n수선화와 함께 춤을 춘다.',
    vocabulary: [
      { word: 'vales', meaning: '골짜기 (=valleys)', example: 'That floats on high o\'er vales and hills.' },
      { word: 'host', meaning: '무리, 떼', example: 'A host, of golden daffodils.' },
      { word: 'sprightly', meaning: '경쾌한, 활기찬', example: 'Tossing their heads in sprightly dance.' },
      { word: 'jocund', meaning: '유쾌한, 명랑한', example: 'In such a jocund company.' },
      { word: 'pensive', meaning: '생각에 잠긴, 사색하는', example: 'In vacant or in pensive mood.' }
    ],
    analysis: '영국 낭만주의를 대표하는 시로, "수선화 시"로도 불립니다. 호수 지방에서 수선화를 본 실제 경험에서 영감을 받았습니다. 핵심은 마지막 연: 자연의 아름다운 기억이 "내면의 눈"에 저장되어 고독한 순간에 기쁨을 가져다준다는 것입니다. 자연과 인간 정서의 교감이라는 낭만주의의 정수를 보여줍니다.'
  }
];

export const proseWorks = [
  {
    id: 'aesop-tortoise',
    title: 'The Tortoise and the Hare',
    author: 'Aesop',
    year: -600,
    level: 'beginner',
    paragraphs: [
      'A Hare was making fun of the Tortoise one day for being so slow.',
      '"Do you ever get anywhere?" he asked with a mocking laugh.',
      '"Yes," replied the Tortoise, "and I get there sooner than you think. I\'ll run you a race and prove it."',
      'The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed. So the Fox, who had consented to act as judge, marked the distance and started the runners off.',
      'The Hare was soon far out of sight, and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare, he lay down beside the road to have a nap. "I can catch a little nap," he thought, "and still easily win."',
      'The Tortoise meanwhile kept going slowly but steadily, and, after a time, passed the place where the Hare was sleeping. But the Hare slept on very peacefully; and when at last he did wake up, the Tortoise was near the goal.',
      'The Hare now ran his swiftest, but he could not overtake the Tortoise in time.',
      'Moral: Slow and steady wins the race.'
    ],
    translation: '어느 날 토끼가 거북이의 느림을 놀리고 있었다.\n\n"넌 어딘가에 도착하기는 하니?" 토끼가 비웃으며 물었다.\n\n"그럼," 거북이가 대답했다, "게다가 네가 생각하는 것보다 빨리 도착하지. 경주하자, 증명해 보이겠어."\n\n토끼는 거북이와 경주한다는 발상에 매우 재미있어했지만, 재미 삼아 동의했다. 그래서 심판 역할을 맡기로 한 여우가 거리를 정하고 주자들을 출발시켰다.\n\n토끼는 금방 시야에서 사라졌고, 거북이가 토끼와 경주하는 것이 얼마나 우스운 일인지 뼛속 깊이 느끼게 해주려고, 길가에 누워 낮잠을 자기로 했다. "잠깐 눈 좀 붙여도," 그는 생각했다, "쉽게 이길 수 있어."\n\n그동안 거북이는 느리지만 꾸준히 계속 갔고, 얼마 후 토끼가 잠든 곳을 지나갔다. 하지만 토끼는 아주 평화롭게 잠들어 있었다; 마침내 깨어났을 때, 거북이는 거의 결승점에 다다르고 있었다.\n\n토끼는 있는 힘껏 달렸지만, 제시간에 거북이를 따라잡을 수 없었다.\n\n교훈: 느리고 꾸준한 것이 경주에서 이긴다.',
    vocabulary: [
      { word: 'mocking', meaning: '비웃는, 조롱하는', example: 'He asked with a mocking laugh.' },
      { word: 'consented', meaning: '동의하다, 승낙하다', example: 'The Fox, who had consented to act as judge.' },
      { word: 'ridiculous', meaning: '우스꽝스러운, 터무니없는', example: 'How ridiculous it was for him to try a race.' },
      { word: 'steadily', meaning: '꾸준히, 한결같이', example: 'Kept going slowly but steadily.' },
      { word: 'overtake', meaning: '따라잡다, 추월하다', example: 'He could not overtake the Tortoise in time.' }
    ],
    analysis: '이솝 우화 중 가장 유명한 이야기로, "느리고 꾸준한 것이 이긴다"라는 교훈을 전합니다. 토끼의 자만심과 거북이의 끈기를 대비시킵니다. 재능만으로는 부족하고, 꾸준한 노력이 궁극적 성공의 열쇠라는 보편적 교훈을 담고 있습니다.'
  },
  {
    id: 'aesop-boy-wolf',
    title: 'The Boy Who Cried Wolf',
    author: 'Aesop',
    year: -600,
    level: 'beginner',
    paragraphs: [
      'There once was a shepherd boy who was bored as he sat on the hillside watching the village sheep. To amuse himself he took a great breath and sang out, "Wolf! Wolf! The Wolf is chasing the sheep!"',
      'The villagers came running up the hill to help the boy drive the wolf away. But when they arrived at the top of the hill, they found no wolf. The boy laughed at the sight of their angry faces.',
      '"Don\'t cry \'wolf\', shepherd boy," said the villagers, "when there\'s no wolf!" They went grumbling back down the hill.',
      'Later, the boy sang out again, "Wolf! Wolf! The wolf is chasing the sheep!" To his naughty delight, the villagers came running up the hill to help him drive the wolf away.',
      'But once again they found no wolf, and they went grumbling back down the hill once more.',
      'Later, the boy saw a REAL wolf prowling about his flock. Alarmed, he leaped to his feet and sang out as loudly as he could, "Wolf! Wolf!"',
      'But the villagers thought he was trying to fool them again, and so they didn\'t come.',
      'At sunset, everyone wondered why the shepherd boy hadn\'t returned to the village with their sheep. They went up the hill to find the boy. They found him weeping.',
      '"There really was a wolf here! The flock has scattered! I cried out, \'Wolf!\' Why didn\'t you come?"',
      'An old man tried to comfort the boy as they walked back to the village.\n\n"We\'ll help you look for the lost sheep in the morning," he said, putting his arm around the youth. "Nobody believes a liar... even when he is telling the truth!"'
    ],
    translation: '옛날에 마을 양떼를 언덕에서 지키며 앉아 있던 양치기 소년이 지루해하고 있었다. 재미 삼아 큰 숨을 들이마시고 소리쳤다, "늑대! 늑대! 늑대가 양을 쫓고 있어!"\n\n마을 사람들이 소년이 늑대를 쫓는 것을 도우려고 언덕을 뛰어 올라왔다. 하지만 언덕 꼭대기에 도착했을 때, 늑대는 없었다. 소년은 그들의 화난 얼굴을 보고 웃었다.\n\n"\'늑대\'라고 외치지 마라, 양치기 소년아," 마을 사람들이 말했다, "늑대가 없을 때에!" 그들은 투덜거리며 언덕을 다시 내려갔다.\n\n나중에, 소년은 다시 소리쳤다, "늑대! 늑대! 늑대가 양을 쫓고 있어!" 그의 장난스러운 기쁨에, 마을 사람들이 다시 언덕을 뛰어 올라왔다.\n\n하지만 다시 한번 늑대는 없었고, 그들은 다시 투덜거리며 언덕을 내려갔다.\n\n나중에, 소년은 진짜 늑대가 양떼 주위를 어슬렁거리는 것을 보았다. 놀란 그는 벌떡 일어나 있는 힘껏 소리쳤다, "늑대! 늑대!"\n\n하지만 마을 사람들은 그가 또 속이려 한다고 생각했고, 그래서 오지 않았다.\n\n해질녘, 모두가 왜 양치기 소년이 양들과 함께 마을로 돌아오지 않았는지 궁금해했다. 그들은 소년을 찾으러 언덕을 올라갔다. 그들은 울고 있는 소년을 발견했다.\n\n"정말로 여기 늑대가 있었어요! 양떼가 흩어졌어요! \'늑대!\'라고 외쳤는데 왜 안 왔어요?"\n\n한 노인이 마을로 돌아가며 소년을 위로하려 했다.\n\n"내일 아침에 잃어버린 양을 찾는 걸 도와주마," 그가 소년의 어깨에 팔을 두르며 말했다. "거짓말쟁이의 말은 아무도 안 믿는단다... 진실을 말할 때조차도!"',
    vocabulary: [
      { word: 'shepherd', meaning: '양치기, 목자', example: 'There once was a shepherd boy.' },
      { word: 'grumbling', meaning: '투덜거리며, 불평하며', example: 'They went grumbling back down the hill.' },
      { word: 'prowling', meaning: '어슬렁거리는, 배회하는', example: 'A REAL wolf prowling about his flock.' },
      { word: 'alarmed', meaning: '놀란, 경각심을 느낀', example: 'Alarmed, he leaped to his feet.' },
      { word: 'scattered', meaning: '흩어진, 뿔뿔이 흩어진', example: 'The flock has scattered!' }
    ],
    analysis: '이솝의 유명한 우화로, 거짓말의 결과를 가르칩니다. 신뢰는 한번 무너지면 회복하기 어렵다는 교훈입니다. "Nobody believes a liar... even when he is telling the truth!"(거짓말쟁이는 진실을 말해도 아무도 믿지 않는다)는 문장이 핵심 메시지입니다.'
  },
  {
    id: 'ohenry-lastleaf',
    title: 'The Last Leaf (Abridged)',
    author: 'O. Henry',
    year: 1907,
    level: 'intermediate',
    paragraphs: [
      'In a little district west of Washington Square, two young women named Sue and Johnsy shared an apartment. Johnsy fell very ill with pneumonia in November, and she lay on her bed, scarcely moving, looking through the window at the blank side of the next brick house.',
      'One morning the doctor spoke to Sue in the hallway. "She has one chance in ten," he said. "And that chance is for her to want to live. Your little lady has made up her mind that she\'s not going to get well. Is there anything she has to live for?"',
      'Sue came in and found Johnsy counting backward. "Twelve," she said, and a little later "eleven"; and then "ten," and "nine"; and then "eight" and "seven" almost together.',
      'Sue looked out the window. What was there to count? There was only an old, old ivy vine climbing half way up the brick wall opposite. The cold autumn wind had stripped its leaves until only a few remained on the skeleton branches.',
      '"What is it, dear?" asked Sue. "Six," said Johnsy. "They\'re falling faster now. Three days ago there were almost a hundred. It hurts my head to count them. But now it\'s easy. There goes another one. There are only five left now."',
      '"Five what, darling?" "Leaves. On the ivy vine. When the last one falls I must go, too. I\'ve known that for three days."',
      'Old Behrman lived on the ground floor beneath them. He was a painter who had talked for forty years about his coming masterpiece but had never yet begun it. He was a fierce old man who scoffed at weakness in anyone.',
      'Sue told him about Johnsy\'s fancy. "What!" he cried. "Are there people in the world with such foolishness as to die because leaves drop off a vine? I have not heard of such a thing."',
      'That night a storm raged, with driving rain and a fierce wind. When Sue woke in the morning and drew up the shade, the last ivy leaf was still there on the wall. It hung bravely from a branch some twenty feet above the ground.',
      'Johnsy lay for a long time looking at it. "I\'ve been a bad girl," she said at last. "Something has made that last leaf stay there to show me how wicked I was. It is a sin to want to die. You may bring me a little soup now."',
      'The next day the doctor said to Sue: "She\'s out of danger now. Nutrition and good care — that\'s all." And then he said: "Old Behrman died of pneumonia today in the hospital. He was ill only two days. He was found on the first morning, helpless with pain, and his shoes and clothing were wet through and icy cold."',
      '"And then they found a lantern, still lighted, and a ladder, and some scattered brushes, and a palette with green and yellow colors mixed on it."',
      '"Look out the window, dear, at the last ivy leaf on the wall. Didn\'t you wonder why it never fluttered or moved when the wind blew? Ah, darling, it\'s Behrman\'s masterpiece — he painted it there the night that the last leaf fell."'
    ],
    translation: '워싱턴 광장 서쪽의 작은 지구에서, 수와 존시라는 두 젊은 여인이 아파트를 함께 쓰고 있었다. 존시는 11월에 폐렴으로 심하게 앓았고, 침대에 누워 거의 움직이지 않은 채 창문을 통해 옆 벽돌 건물의 빈 벽면을 바라보고 있었다.\n\n어느 아침 의사가 복도에서 수에게 말했다. "열 중에 하나의 가능성이에요," 그가 말했다. "그리고 그 가능성은 그녀가 살고 싶어 하는 것입니다. 당신의 친구는 나을 수 없다고 마음을 정했어요. 그녀가 살아야 할 이유가 있나요?"\n\n수가 들어가니 존시가 거꾸로 세고 있었다. "열둘," 그녀가 말했고, 잠시 후 "열하나"; 그리고 "열", "아홉"; 그리고 "여덟"과 "일곱"을 거의 동시에.\n\n수가 창밖을 보았다. 셀 게 뭐가 있지? 맞은편 벽돌 벽을 반쯤 타고 올라간 아주 오래된 담쟁이덩굴뿐이었다. 차가운 가을바람이 잎을 벗겨내어 앙상한 가지에 몇 잎만 남아 있었다.\n\n"뭘 세는 거야?" 수가 물었다. "여섯," 존시가 말했다. "더 빨리 떨어지고 있어. 사흘 전엔 거의 백 장이었는데. 세면 머리가 아파. 하지만 이제는 쉬워. 또 하나 떨어진다. 이제 다섯 장만 남았어."\n\n"다섯이 뭐?" "잎이야. 담쟁이덩굴에. 마지막 잎이 떨어지면 나도 가야 해. 사흘 전부터 알고 있었어."\n\n늙은 베어먼은 그들 아래 1층에 살았다. 40년간 자기 걸작에 대해 말해왔지만 아직 시작도 하지 않은 화가였다. 다른 사람의 나약함을 비웃는 사나운 노인이었다.\n\n수가 존시의 이야기를 들려주자. "뭐라고!" 그가 소리쳤다. "세상에 덩굴에서 잎이 떨어진다고 죽겠다는 어리석은 사람이 있단 말이야? 그런 건 들어본 적이 없어."\n\n그날 밤 폭풍이 몰아치며 억수같은 비와 거센 바람이 불었다. 아침에 수가 일어나 블라인드를 올렸을 때, 마지막 담쟁이 잎이 아직 벽에 붙어 있었다. 땅에서 약 6미터 높이의 가지에서 용감하게 매달려 있었다.\n\n존시는 오랫동안 그것을 바라보았다. "나 나쁜 아이였어," 마침내 그녀가 말했다. "무언가가 저 마지막 잎이 머물게 해서 내가 얼마나 나빴는지 보여주려 한 거야. 죽고 싶어 하는 건 죄야. 수프 좀 갖다 줘."\n\n다음 날 의사가 수에게 말했다: "이제 위험에서 벗어났어요. 영양과 좋은 간호 — 그게 전부입니다." 그리고 말했다: "늙은 베어먼이 오늘 병원에서 폐렴으로 죽었어요. 이틀밖에 앓지 않았어요. 첫날 아침에 고통으로 움직이지 못하는 채 발견되었는데, 신발과 옷이 젖어서 얼음처럼 차가웠어요."\n\n"그리고 그들은 아직 켜져 있는 등불과, 사다리, 흩어진 붓들, 그리고 초록과 노란 물감이 섞인 팔레트를 발견했어요."\n\n"창밖의 벽에 있는 마지막 담쟁이 잎을 봐. 바람이 불어도 왜 한 번도 펄럭이거나 움직이지 않았는지 궁금하지 않았어? 아, 얘야, 그건 베어먼의 걸작이야 — 마지막 잎이 떨어진 밤에 그가 거기에 그렸어."',
    vocabulary: [
      { word: 'pneumonia', meaning: '폐렴', example: 'Johnsy fell very ill with pneumonia.' },
      { word: 'scoffed', meaning: '비웃다, 조롱하다', example: 'He was a fierce old man who scoffed at weakness.' },
      { word: 'masterpiece', meaning: '걸작, 명작', example: 'His coming masterpiece but had never yet begun it.' },
      { word: 'fancy', meaning: '공상, 변덕스러운 생각', example: 'Sue told him about Johnsy\'s fancy.' },
      { word: 'scattered', meaning: '흩어진', example: 'Some scattered brushes, and a palette.' }
    ],
    analysis: 'O. 헨리의 대표적 단편으로, 반전의 묘미가 돋보입니다. 40년간 걸작을 만들겠다고 말만 하던 늙은 화가 베어먼이 폭풍우 속에서 목숨을 걸고 벽에 그린 마지막 잎이 바로 그의 걸작이었습니다. 자기희생적 사랑과 예술의 힘이라는 두 가지 주제를 절묘하게 엮어낸 작품입니다.'
  },
  {
    id: 'lincoln-gettysburg',
    title: 'The Gettysburg Address',
    author: 'Abraham Lincoln',
    year: 1863,
    level: 'advanced',
    paragraphs: [
      'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
      'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.',
      'But, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here.',
      'It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us — that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion — that we here highly resolve that these dead shall not have died in vain — that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.'
    ],
    translation: '87년 전, 우리의 아버지들은 이 대륙에 새로운 나라를 세웠습니다. 자유 속에서 잉태되고, 모든 사람은 평등하게 태어났다는 명제에 헌신하는 나라를.\n\n지금 우리는 거대한 내전에 휘말려 있으며, 그렇게 잉태되고 헌신된 나라가 — 혹은 그 어떤 나라든 — 오래 존속할 수 있는지 시험받고 있습니다. 우리는 그 전쟁의 위대한 전장에 모였습니다. 우리는 그 나라가 살 수 있도록 이곳에서 목숨을 바친 이들의 마지막 안식처로 이 들판의 일부를 봉헌하러 왔습니다. 이것은 마땅히 합당한 일입니다.\n\n하지만, 더 큰 의미에서, 우리는 이 땅을 봉헌할 수 없고 — 신성하게 할 수 없고 — 거룩하게 할 수 없습니다. 살아 있는 이들과 죽은 이들, 이곳에서 싸운 용감한 사람들이 이미 신성하게 했으며, 이는 우리의 보잘것없는 힘으로 더하거나 뺄 수 있는 것을 훨씬 넘어섭니다. 세상은 우리가 여기서 하는 말을 거의 주목하지 않을 것이고, 오래 기억하지도 않을 것이지만, 그들이 여기서 한 일은 결코 잊을 수 없을 것입니다.\n\n살아 있는 우리에게 남은 것은, 오히려, 이곳에서 싸운 이들이 고귀하게 진전시킨 미완의 과업에 헌신하는 것입니다. 우리 앞에 남은 위대한 과업에 헌신하는 것입니다 — 이 명예로운 전사자들로부터 그들이 마지막 헌신을 다한 그 대의에 더 큰 헌신을 받는 것입니다 — 우리가 여기서 굳게 결의하는 것입니다, 이 전사자들이 헛되이 죽지 않았다고 — 이 나라가 하느님 아래 자유의 새로운 탄생을 맞을 것이라고 — 그리고 인민의, 인민에 의한, 인민을 위한 정부가 이 땅에서 사라지지 않을 것이라고.',
    vocabulary: [
      { word: 'Four score and seven', meaning: '87 (score = 20)', example: 'Four score and seven years ago.' },
      { word: 'conceived', meaning: '잉태된, 착상된', example: 'A new nation, conceived in Liberty.' },
      { word: 'consecrate', meaning: '신성하게 하다, 봉헌하다', example: 'We can not consecrate this ground.' },
      { word: 'hallow', meaning: '거룩하게 하다, 경건히 하다', example: 'We can not hallow this ground.' },
      { word: 'perish', meaning: '사라지다, 멸망하다', example: 'Shall not perish from the earth.' }
    ],
    analysis: '1863년 게티즈버그 전투 추모식에서 링컨이 한 연설입니다. 겨우 272단어로 이루어진 짧은 연설이지만, 미국 역사상 가장 위대한 연설로 꼽힙니다. "인민의, 인민에 의한, 인민을 위한 정부"(government of the people, by the people, for the people)라는 구절은 민주주의의 정수를 압축합니다. 전사자의 희생을 미완의 과업에 대한 헌신으로 연결한 수사법이 뛰어납니다.'
  },
  {
    id: 'churchill-beaches',
    title: 'We Shall Fight on the Beaches (Excerpt)',
    author: 'Winston Churchill',
    year: 1940,
    level: 'advanced',
    paragraphs: [
      'I have, myself, full confidence that if all do their duty, if nothing is neglected, and if the best arrangements are made, as they are being made, we shall prove ourselves once again able to defend our Island home, to ride out the storm of war, and to outlive the menace of tyranny, if necessary for years, if necessary alone.',
      'Even though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not flag or fail.',
      'We shall go on to the end, we shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be.',
      'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.',
      'And even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God\'s good time, the New World, with all its power and might, steps forth to the rescue and the liberation of the old.'
    ],
    translation: '나 자신은 완전한 확신을 가지고 있습니다. 모두가 의무를 다하고, 소홀히 하는 것이 없고, 최선의 대비를 한다면 — 지금 하고 있듯이 — 우리는 다시 한번 우리의 섬 고향을 지키고, 전쟁의 폭풍을 이겨내고, 폭정의 위협을 견뎌낼 수 있음을 증명할 것입니다. 필요하다면 수년간, 필요하다면 홀로.\n\n유럽의 넓은 지역과 많은 오래되고 유명한 나라들이 게슈타포와 나치 통치의 모든 혐오스러운 기구에 넘어갔거나 넘어갈지라도, 우리는 주저하거나 실패하지 않을 것입니다.\n\n우리는 끝까지 갈 것입니다. 우리는 프랑스에서 싸울 것이고, 바다와 대양에서 싸울 것이고, 하늘에서 점점 더 커지는 자신감과 힘으로 싸울 것이고, 어떤 대가를 치르든 우리의 섬을 지킬 것입니다.\n\n우리는 해변에서 싸울 것이고, 상륙 지점에서 싸울 것이고, 들판과 거리에서 싸울 것이고, 언덕에서 싸울 것입니다; 우리는 결코 항복하지 않을 것입니다.\n\n그리고 설령 — 나는 단 한 순간도 그렇게 믿지 않지만 — 이 섬이나 그 대부분이 정복당하고 굶주린다 해도, 영국 함대가 무장하고 지키는 바다 너머의 우리 제국이 투쟁을 계속할 것입니다. 하느님의 선한 때에, 신세계가 그 모든 힘과 역량으로 나서서 구세계를 구출하고 해방할 때까지.',
    vocabulary: [
      { word: 'tyranny', meaning: '폭정, 독재', example: 'To outlive the menace of tyranny.' },
      { word: 'odious', meaning: '혐오스러운, 불쾌한', example: 'All the odious apparatus of Nazi rule.' },
      { word: 'flag', meaning: '(힘·관심이) 시들다, 약해지다', example: 'We shall not flag or fail.' },
      { word: 'subjugated', meaning: '정복당한, 굴복한', example: 'This Island were subjugated and starving.' },
      { word: 'liberation', meaning: '해방, 자유', example: 'The rescue and the liberation of the old.' }
    ],
    analysis: '1940년 6월 4일, 덩케르크 철수 직후 처칠이 하원에서 한 연설의 발췌입니다. "We shall fight..."의 반복(anaphora)이 압도적 결의를 전달합니다. 2차 세계대전 최대 위기 속에서 영국인의 투지를 불태운 역사적 연설입니다. "Never surrender"는 오늘날까지 불굴의 의지를 상징하는 표현으로 남아 있습니다.'
  }
];

export const levelLabels = {
  beginner: { ko: '초급', en: 'Beginner', color: '#22C55E' },
  intermediate: { ko: '중급', en: 'Intermediate', color: '#F59E0B' },
  advanced: { ko: '고급', en: 'Advanced', color: '#EF4444' }
};
