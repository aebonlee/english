import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_MENU } from '../../config/site';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import UserMenu from '../auth/UserMenu';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Scroll-aware navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const handleDropdownToggle = useCallback((path) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
  }, []);

  const handleKeyDown = useCallback((e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(path);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  }, [handleDropdownToggle]);

  // Helper to get the display label based on current language
  const getLabel = useCallback((item) => {
    return t(item.label, item.labelEn || item.label);
  }, [t]);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand" onClick={closeMobile}>
            <span className="navbar-logo" aria-hidden="true">E</span>
            <span className="navbar-brand-text">English Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop" ref={dropdownRef}>
            <ul className="navbar-menu">
              {NAV_MENU.map((item) => (
                <li
                  key={item.path}
                  className={`navbar-menu-item${item.children ? ' has-dropdown' : ''}`}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`navbar-menu-link dropdown-toggle${openDropdown === item.path ? ' active' : ''}`}
                        onClick={() => handleDropdownToggle(item.path)}
                        onKeyDown={(e) => handleKeyDown(e, item.path)}
                        aria-expanded={openDropdown === item.path}
                        aria-haspopup="true"
                      >
                        {item.icon && <span className="nav-icon">{item.icon}</span>}
                        {getLabel(item)}
                        <svg
                          className={`dropdown-arrow${openDropdown === item.path ? ' rotated' : ''}`}
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {openDropdown === item.path && (
                        <ul className="navbar-dropdown" role="menu">
                          {item.children.map((child) => (
                            <li key={child.path} role="none">
                              <NavLink
                                to={child.path}
                                className={({ isActive }) =>
                                  `navbar-dropdown-link${isActive ? ' active' : ''}`
                                }
                                onClick={() => setOpenDropdown(null)}
                                role="menuitem"
                              >
                                {child.icon && <span className="nav-icon">{child.icon}</span>}
                                <span className="dropdown-link-title">{getLabel(child)}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `navbar-menu-link${isActive ? ' active' : ''}`
                      }
                    >
                      {item.icon && <span className="nav-icon">{item.icon}</span>}
                      {getLabel(item)}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side actions */}
          <div className="navbar-actions">
            {/* Theme Toggle */}
            <button
              className="navbar-icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button
              className="navbar-lang-btn"
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'ko' ? 'English' : 'Korean'}`}
              title={language === 'ko' ? 'English' : '한국어'}
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {/* Auth */}
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Link to="/login" className="navbar-login-btn">
                {t('로그인', 'Login')}
              </Link>
            )}

            {/* Mobile Hamburger */}
            <button
              className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`mobile-overlay${mobileOpen ? ' visible' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />
      <aside
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={mobileOpen}
      >
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={closeMobile}>
            <span className="navbar-logo" aria-hidden="true">E</span>
            <span className="navbar-brand-text">English Pro</span>
          </Link>
          <button
            className="mobile-close-btn"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            {NAV_MENU.map((item) => (
              <li key={item.path} className="mobile-menu-item">
                {item.children ? (
                  <>
                    <button
                      className={`mobile-menu-link dropdown-toggle${openDropdown === item.path ? ' active' : ''}`}
                      onClick={() => handleDropdownToggle(item.path)}
                      aria-expanded={openDropdown === item.path}
                    >
                      {item.icon && <span className="nav-icon">{item.icon}</span>}
                      {getLabel(item)}
                      <svg
                        className={`dropdown-arrow${openDropdown === item.path ? ' rotated' : ''}`}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openDropdown === item.path && (
                      <ul className="mobile-dropdown">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `mobile-dropdown-link${isActive ? ' active' : ''}`
                              }
                              onClick={closeMobile}
                            >
                              {child.icon && <span className="nav-icon">{child.icon}</span>}
                              {getLabel(child)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `mobile-menu-link${isActive ? ' active' : ''}`
                    }
                    onClick={closeMobile}
                  >
                    {item.icon && <span className="nav-icon">{item.icon}</span>}
                    {getLabel(item)}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-actions">
            <button className="navbar-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button className="navbar-lang-btn" onClick={toggleLanguage} aria-label="Toggle language">
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
          </div>
          {!isAuthenticated && (
            <Link to="/login" className="mobile-login-btn" onClick={closeMobile}>
              {t('로그인', 'Login')}
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}
