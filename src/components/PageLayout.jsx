import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SectionNav from './SectionNav';
import SubNav from './SubNav';
import { navData, categoryTitles } from './SubNav';

export default function PageLayout({ sections, category, children }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const [navOpen, setNavOpen] = useState(true);
  const tocRef = useRef(null);

  const items = category ? navData[category] : null;
  const catTitle = category ? categoryTitles[category] : null;

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-150px 0px -60% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!tocRef.current) return;
    const activeLink = tocRef.current.querySelector('.toc-link.active');
    if (activeLink) {
      activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeId]);

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  if (!sections || sections.length === 0) return children;

  return (
    <>
      {/* 모바일: SubNav 가로 바 */}
      {category && (
        <div className="sub-nav-mobile">
          <SubNav category={category} />
        </div>
      )}

      {/* 모바일: SectionNav 칩 */}
      <div className="section-nav-mobile">
        <SectionNav sections={sections} />
      </div>

      <div className="page-layout">
        <div className="container">
          <div className="content-layout">
            <aside className="content-sidebar">
              {/* ToC 목차 */}
              <nav className="toc" ref={tocRef}>
                <h3 className="toc-title">{t('목차', 'Contents')}</h3>
                <ul className="toc-list">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        className={`toc-link${activeId === s.id ? ' active' : ''}`}
                        href={`#${s.id}`}
                        onClick={(e) => handleClick(e, s.id)}
                      >
                        {t(s.ko, s.en)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* 카테고리 드롭다운 (목차 아래) */}
              {items && catTitle && (
                <nav className="sidebar-nav">
                  <button
                    className="sidebar-nav__toggle"
                    onClick={() => setNavOpen((v) => !v)}
                  >
                    {t(catTitle.ko, catTitle.en)}
                    <i className={`fas fa-chevron-${navOpen ? 'up' : 'down'}`} />
                  </button>
                  {navOpen && (
                    <ul className="sidebar-nav__list">
                      {items.map((item) => (
                        <li key={item.path}>
                          <Link
                            className={`sidebar-nav__link${pathname === item.path ? ' sidebar-nav__link--active' : ''}`}
                            to={item.path}
                          >
                            {t(item.ko, item.en)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
              )}
            </aside>

            <main className="content-main">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
