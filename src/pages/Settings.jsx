import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const API_KEY_STORAGE_KEY = 'englishpro_openai_api_key';

function Settings() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKeyStatus, setApiKeyStatus] = useState('not_registered');
  const [saveMessage, setSaveMessage] = useState('');

  // Load API key status on mount
  useEffect(() => {
    try {
      const storedKey = localStorage.getItem(API_KEY_STORAGE_KEY);
      if (storedKey) {
        setApiKey(storedKey);
        setApiKeyStatus('registered');
      } else {
        setApiKeyStatus('not_registered');
      }
    } catch {
      setApiKeyStatus('not_registered');
    }
  }, []);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      setSaveMessage('API 키를 입력해주세요.');
      return;
    }

    if (!apiKey.trim().startsWith('sk-')) {
      setSaveMessage('올바른 OpenAI API 키 형식이 아닙니다. (sk-로 시작해야 합니다)');
      return;
    }

    try {
      localStorage.setItem(API_KEY_STORAGE_KEY, apiKey.trim());
      setApiKeyStatus('registered');
      setSaveMessage('API 키가 저장되었습니다.');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch {
      setSaveMessage('API 키 저장에 실패했습니다.');
    }
  };

  const handleDeleteApiKey = () => {
    try {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
      setApiKey('');
      setApiKeyStatus('not_registered');
      setShowApiKey(false);
      setSaveMessage('API 키가 삭제되었습니다.');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch {
      setSaveMessage('API 키 삭제에 실패했습니다.');
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };

  return (
    <>
      <SEOHead
        title="설정 - English Pro"
        description="English Pro 설정. API 키, 테마, 언어를 관리하세요."
      />

      <div className="settings">
        <h1 className="settings__title">설정</h1>

        {/* API Key Management */}
        <section className="settings__section">
          <h2 className="settings__section-title">API 키 관리</h2>
          <p className="settings__section-description">
            AI 채팅 기능을 사용하려면 OpenAI API 키가 필요합니다.
            API 키는 브라우저의 로컬 스토리지에 안전하게 저장됩니다.
          </p>

          {/* Status Indicator */}
          <div className="settings__status">
            <span
              className={`settings__status-dot ${
                apiKeyStatus === 'registered'
                  ? 'settings__status-dot--active'
                  : 'settings__status-dot--inactive'
              }`}
            />
            <span className="settings__status-text">
              {apiKeyStatus === 'registered'
                ? 'API 키 등록됨'
                : 'API 키 미등록'}
            </span>
          </div>

          {/* API Key Input */}
          <div className="settings__field">
            <label htmlFor="api-key" className="settings__label">
              OpenAI API Key
            </label>
            <div className="settings__input-group">
              <input
                id="api-key"
                type={showApiKey ? 'text' : 'password'}
                className="settings__input"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                autoComplete="off"
              />
              <button
                type="button"
                className="settings__toggle-btn"
                onClick={() => setShowApiKey(!showApiKey)}
                aria-label={showApiKey ? '비밀번호 숨기기' : '비밀번호 보기'}
              >
                {showApiKey ? '숨기기' : '보기'}
              </button>
            </div>
          </div>

          {/* Save Message */}
          {saveMessage && (
            <p
              className={`settings__message ${
                saveMessage.includes('실패') || saveMessage.includes('형식') || saveMessage.includes('입력')
                  ? 'settings__message--error'
                  : 'settings__message--success'
              }`}
              role="alert"
            >
              {saveMessage}
            </p>
          )}

          {/* Action Buttons */}
          <div className="settings__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleSaveApiKey}
            >
              저장
            </button>
            {apiKeyStatus === 'registered' && (
              <button
                type="button"
                className="btn btn--danger"
                onClick={handleDeleteApiKey}
              >
                키 삭제
              </button>
            )}
          </div>

          {/* Guide Link */}
          <div className="settings__guide">
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="settings__guide-link"
            >
              OpenAI API 키 발급 가이드 →
            </a>
          </div>
        </section>

        {/* Theme Settings */}
        <section className="settings__section">
          <h2 className="settings__section-title">테마 설정</h2>
          <p className="settings__section-description">
            앱의 테마를 선택하세요.
          </p>
          <div className="settings__options">
            <button
              type="button"
              className={`settings__option ${theme === 'light' ? 'settings__option--active' : ''}`}
              onClick={() => handleThemeChange('light')}
            >
              <span className="settings__option-icon">☀️</span>
              <span className="settings__option-label">라이트 모드</span>
            </button>
            <button
              type="button"
              className={`settings__option ${theme === 'dark' ? 'settings__option--active' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              <span className="settings__option-icon">🌙</span>
              <span className="settings__option-label">다크 모드</span>
            </button>
            <button
              type="button"
              className={`settings__option ${theme === 'system' ? 'settings__option--active' : ''}`}
              onClick={() => handleThemeChange('system')}
            >
              <span className="settings__option-icon">💻</span>
              <span className="settings__option-label">시스템 설정</span>
            </button>
          </div>
        </section>

        {/* Language Settings */}
        <section className="settings__section">
          <h2 className="settings__section-title">언어 설정</h2>
          <p className="settings__section-description">
            인터페이스 언어를 선택하세요.
          </p>
          <div className="settings__options">
            <button
              type="button"
              className={`settings__option ${lang === 'ko' ? 'settings__option--active' : ''}`}
              onClick={() => handleLanguageChange('ko')}
            >
              <span className="settings__option-icon">🇰🇷</span>
              <span className="settings__option-label">한국어</span>
            </button>
            <button
              type="button"
              className={`settings__option ${lang === 'en' ? 'settings__option--active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              <span className="settings__option-icon">🇺🇸</span>
              <span className="settings__option-label">English</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;
