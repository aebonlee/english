import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionNav from './SectionNav';

export default function PageLayout({ sections, children }) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const tocRef = useRef(null);

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
      <div className="section-nav-mobile">
        <SectionNav sections={sections} />
      </div>

      <div className="page-layout">
        <div className="container">
          <div className="content-layout">
            <aside className="content-sidebar">
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
