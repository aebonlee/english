import { useState, useCallback, useEffect, useRef } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

const TAB_LOGIN = 'login';
const TAB_REGISTER = 'register';

export default function LoginModal({ isOpen, onClose }: LoginModalProps): React.ReactElement | null {
  const { login, signup, loginWithGoogle, error: authError, loading } = useAuth() as ReturnType<typeof useAuth> & { clearError?: () => void };
  const clearError = undefined as (() => void) | undefined;
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState(TAB_LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Reset form when modal opens or tab changes
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setLocalError('');
      clearError?.();
      // Focus email field after animation
      setTimeout(() => emailRef.current?.focus(), 100);
    }
  }, [isOpen, activeTab, clearError]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Trap focus within the modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          (lastFocusable as HTMLElement)?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          (firstFocusable as HTMLElement)?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    return () => modal.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const handleTabSwitch = useCallback((tab: string) => {
    setActiveTab(tab);
    setLocalError('');
  }, []);

  const validateForm = useCallback(() => {
    if (!email.trim()) {
      setLocalError(t('이메일을 입력해주세요.', 'Email is required.'));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLocalError(t('유효한 이메일 주소를 입력해주세요.', 'Please enter a valid email address.'));
      return false;
    }
    if (!password) {
      setLocalError(t('비밀번호를 입력해주세요.', 'Password is required.'));
      return false;
    }
    if (password.length < 6) {
      setLocalError(t('비밀번호는 6자 이상이어야 합니다.', 'Password must be at least 6 characters.'));
      return false;
    }
    if (activeTab === TAB_REGISTER && password !== confirmPassword) {
      setLocalError(t('비밀번호가 일치하지 않습니다.', 'Passwords do not match.'));
      return false;
    }
    setLocalError('');
    return true;
  }, [email, password, confirmPassword, activeTab, t]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (activeTab === TAB_LOGIN) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      onClose();
    } catch {
      // Error is handled by AuthContext
    }
  }, [activeTab, email, password, validateForm, login, signup, onClose]);

  const handleGoogleLogin = useCallback(async () => {
    try {
      await loginWithGoogle();
      onClose();
    } catch {
      // Error is handled by AuthContext
    }
  }, [loginWithGoogle, onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const displayError = localError || authError;

  if (!isOpen) return null;

  return (
    <div
      className="login-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={activeTab === TAB_LOGIN
        ? t('로그인', 'Log in')
        : t('회원가입', 'Create account')
      }
    >
      <div className="login-modal" ref={modalRef}>
        {/* Close button */}
        <button
          className="login-modal-close"
          onClick={onClose}
          aria-label={t('닫기', 'Close')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="login-modal-header">
          <div className="login-modal-brand">
            <span className="login-modal-logo" aria-hidden="true">E</span>
            <span>English Pro</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="login-modal-tabs" role="tablist">
          <button
            className={`login-tab${activeTab === TAB_LOGIN ? ' active' : ''}`}
            onClick={() => handleTabSwitch(TAB_LOGIN)}
            role="tab"
            aria-selected={activeTab === TAB_LOGIN}
            aria-controls="login-panel"
          >
            {t('로그인', 'Login')}
          </button>
          <button
            className={`login-tab${activeTab === TAB_REGISTER ? ' active' : ''}`}
            onClick={() => handleTabSwitch(TAB_REGISTER)}
            role="tab"
            aria-selected={activeTab === TAB_REGISTER}
            aria-controls="register-panel"
          >
            {t('회원가입', 'Register')}
          </button>
        </div>

        {/* Error display */}
        {displayError && (
          <div className="login-modal-error" role="alert">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>{displayError}</span>
          </div>
        )}

        {/* Form */}
        <form
          className="login-modal-form"
          onSubmit={handleSubmit}
          noValidate
          id={activeTab === TAB_LOGIN ? 'login-panel' : 'register-panel'}
          role="tabpanel"
        >
          <div className="form-group">
            <label htmlFor="login-email" className="form-label">
              {t('이메일', 'Email')}
            </label>
            <input
              ref={emailRef}
              id="login-email"
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('your@email.com', 'your@email.com')}
              autoComplete="email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password" className="form-label">
              {t('비밀번호', 'Password')}
            </label>
            <input
              id="login-password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('비밀번호 입력', 'Enter password')}
              autoComplete={activeTab === TAB_LOGIN ? 'current-password' : 'new-password'}
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          {activeTab === TAB_REGISTER && (
            <div className="form-group">
              <label htmlFor="login-confirm-password" className="form-label">
                {t('비밀번호 확인', 'Confirm Password')}
              </label>
              <input
                id="login-confirm-password"
                type="password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('비밀번호 재입력', 'Re-enter password')}
                autoComplete="new-password"
                required
                minLength={6}
                disabled={loading}
              />
            </div>
          )}

          <button
            type="submit"
            className="login-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="btn-spinner" />
                {t('잠시만 기다려주세요...', 'Please wait...')}
              </span>
            ) : activeTab === TAB_LOGIN ? (
              t('로그인', 'Log In')
            ) : (
              t('계정 만들기', 'Create Account')
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="login-modal-divider">
          <span>{t('또는', 'or')}</span>
        </div>

        {/* Social Login */}
        <div className="login-modal-social">
          <button
            className="social-login-btn google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>{t('Google로 계속하기', 'Continue with Google')}</span>
          </button>
        </div>

        {/* Footer text */}
        <p className="login-modal-footer-text">
          {activeTab === TAB_LOGIN
            ? t('계정이 없으신가요? ', "Don't have an account? ")
            : t('이미 계정이 있으신가요? ', 'Already have an account? ')}
          <button
            className="login-switch-btn"
            onClick={() => handleTabSwitch(activeTab === TAB_LOGIN ? TAB_REGISTER : TAB_LOGIN)}
            type="button"
          >
            {activeTab === TAB_LOGIN
              ? t('회원가입', 'Sign up')
              : t('로그인', 'Sign in')}
          </button>
        </p>
      </div>
    </div>
  );
}
