import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const API_KEY_STORAGE_KEY = 'englishpro_openai_key';

function ApiKeySetup() {
  const { t } = useLanguage();

  const [apiKey, setApiKey] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null); // 'success' | 'error' | null
  const [testMessage, setTestMessage] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(API_KEY_STORAGE_KEY) || '';
      setSavedKey(stored);
      setApiKey(stored);
    } catch {
      // localStorage not available
    }
  }, []);

  const maskKey = (key) => {
    if (!key || key.length < 8) return key;
    return key.substring(0, 4) + '••••••••' + key.substring(key.length - 4);
  };

  const handleSave = () => {
    const trimmedKey = apiKey.trim();
    try {
      if (trimmedKey) {
        localStorage.setItem(API_KEY_STORAGE_KEY, trimmedKey);
      } else {
        localStorage.removeItem(API_KEY_STORAGE_KEY);
      }
      setSavedKey(trimmedKey);
      setIsSaved(true);
      setTestResult(null);
      setTimeout(() => setIsSaved(false), 3000);
    } catch {
      setTestResult('error');
      setTestMessage(t(
        'API 키를 저장하는데 실패했습니다.',
        'Failed to save the API key.'
      ));
    }
  };

  const handleRemove = () => {
    try {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
      setApiKey('');
      setSavedKey('');
      setTestResult(null);
      setTestMessage('');
    } catch {
      // Ignore errors
    }
  };

  const handleTestKey = async () => {
    const keyToTest = apiKey.trim();
    if (!keyToTest) {
      setTestResult('error');
      setTestMessage(t('API 키를 입력해주세요.', 'Please enter an API key.'));
      return;
    }

    setIsTesting(true);
    setTestResult(null);
    setTestMessage('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keyToTest}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: 'Hello' }],
          max_tokens: 5,
        }),
      });

      if (response.ok) {
        setTestResult('success');
        setTestMessage(t(
          'API 키가 유효합니다! 정상적으로 작동합니다.',
          'API key is valid! It works correctly.'
        ));
      } else if (response.status === 401) {
        setTestResult('error');
        setTestMessage(t(
          'API 키가 유효하지 않습니다. 올바른 키를 입력해주세요.',
          'API key is invalid. Please enter a valid key.'
        ));
      } else if (response.status === 429) {
        setTestResult('error');
        setTestMessage(t(
          'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
          'Rate limit exceeded. Please try again later.'
        ));
      } else {
        const errorData = await response.json().catch(() => ({}));
        setTestResult('error');
        setTestMessage(
          errorData.error?.message ||
            t('API 테스트 중 오류가 발생했습니다.', 'An error occurred while testing the API.')
        );
      }
    } catch (err) {
      setTestResult('error');
      setTestMessage(t(
        '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.',
        'A network error occurred. Please check your internet connection.'
      ));
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="api-setup">
      <div className="api-setup__header">
        <h2 className="api-setup__title">
          {t('OpenAI API 키 설정', 'OpenAI API Key Setup')}
        </h2>
        <p className="api-setup__desc">
          {t(
            'AI 채팅 기능을 사용하려면 OpenAI API 키가 필요합니다.',
            'An OpenAI API key is required to use the AI chat feature.'
          )}
        </p>
      </div>

      {/* Step-by-step Guide */}
      <div className="api-setup__guide">
        <h3>{t('API 키 발급 방법', 'How to Get an API Key')}</h3>
        <ol className="api-setup__steps">
          <li>
            <strong>{t('1단계', 'Step 1')}:</strong>{' '}
            <a
              href="https://platform.openai.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI
            </a>{' '}
            {t('웹사이트에서 계정을 생성하세요.', 'Create an account on the website.')}
          </li>
          <li>
            <strong>{t('2단계', 'Step 2')}:</strong>{' '}
            {t(
              '로그인 후 ',
              'After logging in, go to '
            )}
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Keys
            </a>{' '}
            {t('페이지로 이동하세요.', 'page.')}
          </li>
          <li>
            <strong>{t('3단계', 'Step 3')}:</strong>{' '}
            {t(
              '"Create new secret key" 버튼을 클릭하여 새 키를 생성하세요.',
              'Click "Create new secret key" to generate a new key.'
            )}
          </li>
          <li>
            <strong>{t('4단계', 'Step 4')}:</strong>{' '}
            {t(
              '생성된 키를 복사하여 아래 입력란에 붙여넣으세요.',
              'Copy the generated key and paste it in the input field below.'
            )}
          </li>
        </ol>
        <div className="api-setup__notice">
          <p>
            ⚠️ {t(
              'API 키는 브라우저의 localStorage에 저장됩니다. 키는 외부 서버로 전송되지 않으며, OpenAI API 호출 시에만 사용됩니다.',
              'The API key is stored in your browser\'s localStorage. It is not sent to any external server and is only used for OpenAI API calls.'
            )}
          </p>
        </div>
      </div>

      {/* Current Key Status */}
      {savedKey && (
        <div className="api-setup__status">
          <div className="api-setup__status-icon">✅</div>
          <div className="api-setup__status-info">
            <p className="api-setup__status-label">
              {t('현재 등록된 키', 'Currently Registered Key')}
            </p>
            <p className="api-setup__status-key">{maskKey(savedKey)}</p>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="api-setup__input-group">
        <label htmlFor="api-key-input" className="api-setup__label">
          {t('API 키', 'API Key')}
        </label>
        <input
          id="api-key-input"
          type="password"
          className="api-setup__input"
          placeholder="sk-..."
          value={apiKey}
          onChange={(e) => {
            setApiKey(e.target.value);
            setIsSaved(false);
          }}
        />
      </div>

      {/* Actions */}
      <div className="api-setup__actions">
        <button
          className="btn btn--primary"
          onClick={handleSave}
          disabled={!apiKey.trim()}
        >
          {isSaved
            ? t('✅ 저장됨', '✅ Saved')
            : t('저장하기', 'Save Key')}
        </button>
        <button
          className="btn btn--outline"
          onClick={handleTestKey}
          disabled={!apiKey.trim() || isTesting}
        >
          {isTesting
            ? t('테스트 중...', 'Testing...')
            : t('키 테스트', 'Test Key')}
        </button>
        {savedKey && (
          <button className="btn btn--danger" onClick={handleRemove}>
            {t('키 삭제', 'Remove Key')}
          </button>
        )}
      </div>

      {/* Test Result */}
      {testResult && (
        <div className={`api-setup__result api-setup__result--${testResult}`}>
          <span className="api-setup__result-icon">
            {testResult === 'success' ? '✅' : '❌'}
          </span>
          <p className="api-setup__result-text">{testMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ApiKeySetup;
