import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const QUICK_LINKS = [
  { path: '/conversation', labelKo: '일상 회화', labelEn: 'Conversation' },
  { path: '/business', labelKo: '비즈니스 영어', labelEn: 'Business English' },
  { path: '/vocabulary', labelKo: '영단어', labelEn: 'Vocabulary' },
  { path: '/writing', labelKo: '작문', labelEn: 'Writing' },
  { path: '/toeic', labelKo: 'TOEIC', labelEn: 'TOEIC' },
  { path: '/ai-chat', labelKo: 'AI 학습', labelEn: 'AI Chat' },
];

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand-col">
            <Link to="/" className="footer-brand">
              <span className="footer-logo" aria-hidden="true">E</span>
              <span className="footer-brand-text">English Pro</span>
            </Link>
            <p className="footer-description">
              {t(
                'AI 기반 영어 학습으로 영어를 마스터하세요. 회화 연습, 어휘 구축, 시험 준비까지 맞춤형 학습을 제공합니다.',
                'Master English with AI-powered learning. Practice conversation, build vocabulary, and prepare for exams with personalized guidance.'
              )}
            </p>
            <div className="footer-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3 className="footer-heading">
              {t('바로가기', 'Quick Links')}
            </h3>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {t(link.labelKo, link.labelEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info Column */}
          <div className="footer-col">
            <h3 className="footer-heading">
              {t('연락처 & 정보', 'Contact & Info')}
            </h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:support@englishpro.com" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  support@englishpro.com
                </a>
              </li>
              <li>
                <Link to="/settings" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  {t('설정', 'Settings')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  {t('대시보드', 'Dashboard')}
                </Link>
              </li>
              <li>
                <span className="footer-link footer-info-text">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-link-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t('서울, 대한민국', 'Seoul, South Korea')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="footer-copyright-inner">
          <p>
            &copy; {currentYear} English Pro. {t('All rights reserved.', 'All rights reserved.')}
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">
              {t('개인정보처리방침', 'Privacy Policy')}
            </Link>
            <Link to="/terms" className="footer-legal-link">
              {t('이용약관', 'Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
