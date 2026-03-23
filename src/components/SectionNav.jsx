import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SectionNav({ sections }) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // nav + sub-nav + section-nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

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

  if (!sections || sections.length === 0) return null;

  return (
    <nav className="section-nav">
      <div className="container">
        <div className="section-nav__list">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`section-nav__item${activeId === s.id ? ' section-nav__item--active' : ''}`}
              onClick={(e) => handleClick(e, s.id)}
            >
              {t(s.ko, s.en)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
