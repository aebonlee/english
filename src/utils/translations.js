/**
 * Translation dictionary for English Pro.
 *
 * Usage with useLanguage hook:
 *   const { language } = useLanguage();
 *   const label = UI_STRINGS.nav.home[language];
 *
 * Or use the t() helper:
 *   const { t } = useLanguage();
 *   t(UI_STRINGS.nav.home.ko, UI_STRINGS.nav.home.en);
 */

export const UI_STRINGS = {
  // Navigation
  nav: {
    home: { ko: '\ud648', en: 'Home' },
    conversation: { ko: '\uc77c\uc0c1 \ud68c\ud654', en: 'Conversation' },
    business: { ko: '\ube44\uc988\ub2c8\uc2a4', en: 'Business' },
    vocabulary: { ko: '\uc601\ub2e8\uc5b4', en: 'Vocabulary' },
    writing: { ko: '\uc791\ubb38', en: 'Writing' },
    toeic: { ko: 'TOEIC', en: 'TOEIC' },
    aiChat: { ko: 'AI \ud559\uc2b5', en: 'AI Chat' },
    speech: { ko: '\ubc1c\uc74c \uc5f0\uc2b5', en: 'Speech' },
    menu: { ko: '\uba54\ub274', en: 'Menu' },
    close: { ko: '\ub2eb\uae30', en: 'Close' }
  },

  // Common buttons
  buttons: {
    start: { ko: '\uc2dc\uc791\ud558\uae30', en: 'Start' },
    next: { ko: '\ub2e4\uc74c', en: 'Next' },
    prev: { ko: '\uc774\uc804', en: 'Previous' },
    submit: { ko: '\uc81c\ucd9c', en: 'Submit' },
    cancel: { ko: '\ucde8\uc18c', en: 'Cancel' },
    save: { ko: '\uc800\uc7a5', en: 'Save' },
    delete: { ko: '\uc0ad\uc81c', en: 'Delete' },
    edit: { ko: '\uc218\uc815', en: 'Edit' },
    confirm: { ko: '\ud655\uc778', en: 'Confirm' },
    reset: { ko: '\ucd08\uae30\ud654', en: 'Reset' },
    retry: { ko: '\ub2e4\uc2dc \uc2dc\ub3c4', en: 'Retry' },
    copy: { ko: '\ubcf5\uc0ac', en: 'Copy' },
    copied: { ko: '\ubcf5\uc0ac\ub428!', en: 'Copied!' },
    showAnswer: { ko: '\uc815\ub2f5 \ubcf4\uae30', en: 'Show Answer' },
    hideAnswer: { ko: '\uc815\ub2f5 \uc228\uae30\uae30', en: 'Hide Answer' },
    learnMore: { ko: '\ub354 \uc54c\uc544\ubcf4\uae30', en: 'Learn More' },
    goBack: { ko: '\ub3cc\uc544\uac00\uae30', en: 'Go Back' },
    seeAll: { ko: '\uc804\uccb4 \ubcf4\uae30', en: 'See All' },
    tryAgain: { ko: '\ub2e4\uc2dc \ud480\uae30', en: 'Try Again' },
    check: { ko: '\ud655\uc778\ud558\uae30', en: 'Check' },
    play: { ko: '\uc7ac\uc0dd', en: 'Play' },
    pause: { ko: '\uc77c\uc2dc\uc815\uc9c0', en: 'Pause' },
    stop: { ko: '\uc815\uc9c0', en: 'Stop' },
    record: { ko: '\ub179\uc74c', en: 'Record' }
  },

  // Authentication
  auth: {
    login: { ko: '\ub85c\uadf8\uc778', en: 'Log In' },
    logout: { ko: '\ub85c\uadf8\uc544\uc6c3', en: 'Log Out' },
    signup: { ko: '\ud68c\uc6d0\uac00\uc785', en: 'Sign Up' },
    email: { ko: '\uc774\uba54\uc77c', en: 'Email' },
    password: { ko: '\ube44\ubc00\ubc88\ud638', en: 'Password' },
    passwordConfirm: { ko: '\ube44\ubc00\ubc88\ud638 \ud655\uc778', en: 'Confirm Password' },
    forgotPassword: { ko: '\ube44\ubc00\ubc88\ud638 \ucc3e\uae30', en: 'Forgot Password?' },
    resetPassword: { ko: '\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815', en: 'Reset Password' },
    loginWithGoogle: { ko: 'Google\ub85c \ub85c\uadf8\uc778', en: 'Sign in with Google' },
    noAccount: { ko: '\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?', en: "Don't have an account?" },
    hasAccount: { ko: '\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?', en: 'Already have an account?' },
    welcome: { ko: '\ud658\uc601\ud569\ub2c8\ub2e4', en: 'Welcome' },
    profile: { ko: '\ud504\ub85c\ud544', en: 'Profile' },
    myPage: { ko: '\ub9c8\uc774\ud398\uc774\uc9c0', en: 'My Page' }
  },

  // Theme
  theme: {
    light: { ko: '\ub77c\uc774\ud2b8 \ubaa8\ub4dc', en: 'Light Mode' },
    dark: { ko: '\ub2e4\ud06c \ubaa8\ub4dc', en: 'Dark Mode' },
    auto: { ko: '\uc2dc\uc2a4\ud15c \uc124\uc815', en: 'System Default' },
    toggle: { ko: '\ud14c\ub9c8 \ubcc0\uacbd', en: 'Toggle Theme' }
  },

  // Language
  language: {
    ko: { ko: '\ud55c\uad6d\uc5b4', en: 'Korean' },
    en: { ko: 'English', en: 'English' },
    toggle: { ko: '\uc5b8\uc5b4 \ubcc0\uacbd', en: 'Change Language' }
  },

  // Learning / Quiz
  learning: {
    level: { ko: '\ub808\ubca8', en: 'Level' },
    beginner: { ko: '\ucd08\uae09', en: 'Beginner' },
    intermediate: { ko: '\uc911\uae09', en: 'Intermediate' },
    advanced: { ko: '\uace0\uae09', en: 'Advanced' },
    progress: { ko: '\uc9c4\ud589\ub960', en: 'Progress' },
    score: { ko: '\uc810\uc218', en: 'Score' },
    correct: { ko: '\uc815\ub2f5', en: 'Correct' },
    incorrect: { ko: '\uc624\ub2f5', en: 'Incorrect' },
    hint: { ko: '\ud78c\ud2b8', en: 'Hint' },
    explanation: { ko: '\ud574\uc124', en: 'Explanation' },
    example: { ko: '\uc608\ubb38', en: 'Example' },
    meaning: { ko: '\ub73b', en: 'Meaning' },
    pronunciation: { ko: '\ubc1c\uc74c', en: 'Pronunciation' },
    sentence: { ko: '\ubb38\uc7a5', en: 'Sentence' },
    word: { ko: '\ub2e8\uc5b4', en: 'Word' },
    definition: { ko: '\uc815\uc758', en: 'Definition' },
    synonym: { ko: '\ub3d9\uc758\uc5b4', en: 'Synonym' },
    antonym: { ko: '\ubc18\uc758\uc5b4', en: 'Antonym' },
    quiz: { ko: '\ud034\uc988', en: 'Quiz' },
    test: { ko: '\ud14c\uc2a4\ud2b8', en: 'Test' },
    review: { ko: '\ubcf5\uc2b5', en: 'Review' },
    bookmark: { ko: '\ubd81\ub9c8\ud06c', en: 'Bookmark' },
    bookmarked: { ko: '\ubd81\ub9c8\ud06c\ub428', en: 'Bookmarked' },
    completed: { ko: '\uc644\ub8cc', en: 'Completed' },
    inProgress: { ko: '\uc9c4\ud589 \uc911', en: 'In Progress' },
    notStarted: { ko: '\ubbf8\uc2dc\uc791', en: 'Not Started' },
    totalWords: { ko: '\uc804\uccb4 \ub2e8\uc5b4', en: 'Total Words' },
    learnedWords: { ko: '\ud559\uc2b5\ud55c \ub2e8\uc5b4', en: 'Learned Words' },
    remainingWords: { ko: '\ub0a8\uc740 \ub2e8\uc5b4', en: 'Remaining Words' },
    dailyGoal: { ko: '\uc624\ub298\uc758 \ubaa9\ud45c', en: 'Daily Goal' },
    streak: { ko: '\uc5f0\uc18d \ud559\uc2b5', en: 'Study Streak' }
  },

  // Conversation / Dialog
  dialog: {
    speaker: { ko: '\ud654\uc790', en: 'Speaker' },
    situation: { ko: '\uc0c1\ud669', en: 'Situation' },
    keyExpression: { ko: '\ud575\uc2ec \ud45c\ud604', en: 'Key Expression' },
    practice: { ko: '\uc5f0\uc2b5', en: 'Practice' },
    rolePlay: { ko: '\uc5ed\ud560\uadf9', en: 'Role Play' },
    yourTurn: { ko: '\ub2f9\uc2e0 \ucc28\ub840', en: 'Your Turn' },
    tip: { ko: '\ud301', en: 'Tip' },
    note: { ko: '\ucc38\uace0', en: 'Note' }
  },

  // Status / Messages
  status: {
    loading: { ko: '\ub85c\ub529 \uc911...', en: 'Loading...' },
    error: { ko: '\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4', en: 'An error occurred' },
    noData: { ko: '\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4', en: 'No data available' },
    notFound: { ko: '\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4', en: 'Page not found' },
    comingSoon: { ko: '\uace7 \ucd9c\uc2dc \uc608\uc815', en: 'Coming Soon' },
    success: { ko: '\uc131\uacf5!', en: 'Success!' },
    saved: { ko: '\uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4', en: 'Saved successfully' },
    deleted: { ko: '\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4', en: 'Deleted successfully' },
    networkError: { ko: '\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uc785\ub2c8\ub2e4', en: 'Network error' },
    sessionExpired: { ko: '\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4', en: 'Session expired' }
  },

  // Footer
  footer: {
    copyright: { ko: '\ubaa8\ub4e0 \uad8c\ub9ac \ubcf4\uc720', en: 'All rights reserved' },
    privacy: { ko: '\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68', en: 'Privacy Policy' },
    terms: { ko: '\uc774\uc6a9\uc57d\uad00', en: 'Terms of Service' },
    contact: { ko: '\ubb38\uc758\ud558\uae30', en: 'Contact Us' },
    github: { ko: 'GitHub', en: 'GitHub' }
  },

  // Home page
  home: {
    heroTitle: { ko: '\uc2e4\uc6a9 \uc601\uc5b4 \ub9c8\uc2a4\ud130', en: 'Master Practical English' },
    heroSubtitle: {
      ko: '\ube44\uc988\ub2c8\uc2a4 \ubc0f \uc77c\uc0c1\uc5d0\uc11c \ud65c\uc6a9 \uac00\ub2a5\ud55c \uc2e4\uc6a9 \uc601\uc5b4 \ud68c\ud654\xb7\uc791\ubb38 \ud559\uc2b5',
      en: 'Practical English conversation and writing for business and daily life'
    },
    getStarted: { ko: '\ud559\uc2b5 \uc2dc\uc791\ud558\uae30', en: 'Get Started' },
    exploreCurriculum: { ko: '\ucee4\ub9ac\ud058\ub7fc \ub458\ub7ec\ubcf4\uae30', en: 'Explore Curriculum' },
    features: { ko: '\ud559\uc2b5 \ucf58\ud150\uce20', en: 'Learning Content' },
    recentUpdates: { ko: '\ucd5c\uadfc \uc5c5\ub370\uc774\ud2b8', en: 'Recent Updates' }
  },

  // Accessibility
  a11y: {
    skipToContent: { ko: '\ubcf8\ubb38\uc73c\ub85c \uac74\ub108\ub6f0\uae30', en: 'Skip to content' },
    openMenu: { ko: '\uba54\ub274 \uc5f4\uae30', en: 'Open menu' },
    closeMenu: { ko: '\uba54\ub274 \ub2eb\uae30', en: 'Close menu' },
    externalLink: { ko: '\uc678\ubd80 \ub9c1\ud06c', en: 'External link' },
    newWindow: { ko: '\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc', en: 'Opens in new window' }
  },

  // AI Chat
  ai: {
    placeholder: { ko: '\uc601\uc5b4\ub85c \uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud558\uc138\uc694...', en: 'Type a message in English...' },
    send: { ko: '\ubcf4\ub0b4\uae30', en: 'Send' },
    thinking: { ko: 'AI\uac00 \uc0dd\uac01 \uc911...', en: 'AI is thinking...' },
    correction: { ko: '\uad50\uc815', en: 'Correction' },
    suggestion: { ko: '\uc81c\uc548', en: 'Suggestion' },
    newChat: { ko: '\uc0c8 \ub300\ud654', en: 'New Chat' },
    chatHistory: { ko: '\ub300\ud654 \uae30\ub85d', en: 'Chat History' }
  },

  // Speech
  speech: {
    startRecording: { ko: '\ub179\uc74c \uc2dc\uc791', en: 'Start Recording' },
    stopRecording: { ko: '\ub179\uc74c \uc911\uc9c0', en: 'Stop Recording' },
    analyzing: { ko: '\ubd84\uc11d \uc911...', en: 'Analyzing...' },
    accuracy: { ko: '\uc815\ud655\ub3c4', en: 'Accuracy' },
    tryAgain: { ko: '\ub2e4\uc2dc \ub179\uc74c\ud558\uae30', en: 'Record Again' },
    listenOriginal: { ko: '\uc6d0\uc74c \ub4e3\uae30', en: 'Listen to Original' },
    listenYours: { ko: '\ub0b4 \ub179\uc74c \ub4e3\uae30', en: 'Listen to Yours' },
    micPermission: { ko: '\ub9c8\uc774\ud06c \uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4', en: 'Microphone permission required' }
  }
};

/**
 * Helper to get a translated string from the UI_STRINGS dictionary.
 *
 * @param {Object} entry - A translation entry like { ko: '...', en: '...' }
 * @param {string} lang - The current language ('ko' or 'en')
 * @returns {string} The translated string
 */
export function getTranslation(entry, lang) {
  if (!entry) return '';
  return entry[lang] || entry.ko || '';
}

export default UI_STRINGS;
