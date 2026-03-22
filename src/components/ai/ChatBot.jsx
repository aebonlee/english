import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { chatScenarios } from '../../data/conversations';
import { useLanguage } from '../../contexts/LanguageContext';

const DEFAULT_SYSTEM_PROMPT =
  'You are an English tutor. Help the user practice English. Correct their grammar and suggest better expressions. Respond in English, but add Korean translations for difficult words.';

const API_KEY_STORAGE_KEY = 'englishpro_openai_key';

function ChatBot() {
  const { t } = useLanguage();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('free');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const apiKey = (() => {
    try {
      return localStorage.getItem(API_KEY_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  })();

  const currentScenario = chatScenarios.find((s) => s.id === selectedScenario) || chatScenarios[0];

  const systemPrompt = currentScenario.systemPrompt || DEFAULT_SYSTEM_PROMPT;

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleScenarioChange = (e) => {
    const scenarioId = e.target.value;
    setSelectedScenario(scenarioId);
    setMessages([]);
    setError(null);
  };

  const sendMessage = useCallback(async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    if (!apiKey) {
      setError(t(
        'OpenAI API 키가 설정되지 않았습니다. 설정 페이지에서 API 키를 등록해주세요.',
        'OpenAI API key is not set. Please register your API key in the Settings page.'
      ));
      return;
    }

    const userMessage = { role: 'user', content: trimmedInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...updatedMessages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 401) {
          throw new Error(
            t(
              'API 키가 유효하지 않습니다. 설정에서 올바른 키를 입력해주세요.',
              'Invalid API key. Please enter a valid key in Settings.'
            )
          );
        }

        if (response.status === 429) {
          throw new Error(
            t(
              'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
              'API rate limit exceeded. Please try again later.'
            )
          );
        }

        throw new Error(
          errorData.error?.message ||
            t('AI 응답을 가져오는데 실패했습니다.', 'Failed to get AI response.')
        );
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0]?.message?.content || t('응답을 받지 못했습니다.', 'No response received.'),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }, [input, messages, isLoading, apiKey, systemPrompt, t]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setError(null);
  };

  // If no API key, show setup message
  if (!apiKey) {
    return (
      <div className="chatbot">
        <div className="chatbot__no-key">
          <div className="chatbot__no-key-icon">🔑</div>
          <h3>
            {t('API 키가 필요합니다', 'API Key Required')}
          </h3>
          <p>
            {t(
              'AI 채팅을 사용하려면 OpenAI API 키를 등록해야 합니다.',
              'You need to register an OpenAI API key to use AI chat.'
            )}
          </p>
          <Link to="/settings" className="btn btn--primary">
            {t('설정에서 API 키 등록하기', 'Register API Key in Settings')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="chatbot">
      {/* Scenario Selector */}
      <div className="chatbot__header">
        <div className="chatbot__scenario">
          <label htmlFor="scenario-select" className="chatbot__scenario-label">
            {t('대화 시나리오', 'Conversation Scenario')}
          </label>
          <select
            id="scenario-select"
            className="chatbot__scenario-select"
            value={selectedScenario}
            onChange={handleScenarioChange}
          >
            {chatScenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.icon} {t(scenario.title, scenario.titleEn)}
              </option>
            ))}
          </select>
        </div>
        <p className="chatbot__scenario-desc">
          {currentScenario.desc}
        </p>
        {messages.length > 0 && (
          <button className="chatbot__clear-btn" onClick={handleClearChat}>
            {t('대화 초기화', 'Clear Chat')}
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="chatbot__messages">
        {messages.length === 0 && (
          <div className="chatbot__empty">
            <p className="chatbot__empty-icon">{currentScenario.icon}</p>
            <p className="chatbot__empty-text">
              {t(
                '영어로 대화를 시작해보세요! AI가 문법을 교정하고 더 좋은 표현을 제안해줍니다.',
                'Start a conversation in English! The AI will correct grammar and suggest better expressions.'
              )}
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot__message chatbot__message--${msg.role}`}
          >
            <div className="chatbot__message-avatar">
              {msg.role === 'user' ? '👤' : '🤖'}
            </div>
            <div className="chatbot__message-content">
              <span className="chatbot__message-role">
                {msg.role === 'user'
                  ? t('나', 'You')
                  : t('AI 튜터', 'AI Tutor')}
              </span>
              <div className="chatbot__message-text">
                {msg.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="chatbot__message chatbot__message--assistant">
            <div className="chatbot__message-avatar">🤖</div>
            <div className="chatbot__message-content">
              <span className="chatbot__message-role">
                {t('AI 튜터', 'AI Tutor')}
              </span>
              <div className="chatbot__typing">
                <span className="chatbot__typing-dot" />
                <span className="chatbot__typing-dot" />
                <span className="chatbot__typing-dot" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Error */}
      {error && (
        <div className="chatbot__error">
          <span className="chatbot__error-icon">⚠️</span>
          <p className="chatbot__error-text">{error}</p>
          <button
            className="chatbot__error-close"
            onClick={() => setError(null)}
            aria-label="Close error"
          >
            ✕
          </button>
        </div>
      )}

      {/* Input */}
      <div className="chatbot__input-area">
        <textarea
          ref={inputRef}
          className="chatbot__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t(
            '영어로 메시지를 입력하세요... (Enter로 전송)',
            'Type your message in English... (Press Enter to send)'
          )}
          rows={1}
          disabled={isLoading}
        />
        <button
          className="chatbot__send-btn"
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          aria-label={t('전송', 'Send')}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
