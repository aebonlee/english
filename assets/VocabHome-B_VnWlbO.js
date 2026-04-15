import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";import{a as r,r as i}from"./index-DMm0vAK2.js";import{t as a}from"./SEOHead-DE3XjPK9.js";import{t as o}from"./useAOS-BDkVCXSx.js";import{i as s,n as c,r as l,t as u}from"./vocabulary-xt64Jpwu.js";var d=e(t(),1),f=n(),p=[{title:`기초 필수 단어 500`,subtitle:`Basic Essential 500`,description:`영어 학습의 기본이 되는 필수 단어 500개. 일상 회화와 기초 독해에 꼭 필요한 핵심 어휘를 학습하세요.`,words:u,path:`/vocabulary/basic`,icon:`📖`,color:`#4A90D9`,bgColor:`#EBF3FB`},{title:`비즈니스 필수 단어 500`,subtitle:`Business Essential 500`,description:`직장 생활과 비즈니스 환경에서 자주 사용되는 전문 어휘 500개. 회의, 보고서, 이메일에 필수적인 단어들입니다.`,words:c,path:`/vocabulary/business`,icon:`💼`,color:`#E67E22`,bgColor:`#FDF2E9`},{title:`TOEIC 필수 단어 800`,subtitle:`TOEIC Essential 800`,description:`TOEIC 시험에 자주 출제되는 핵심 어휘 800개. 고득점을 위해 반드시 알아야 할 단어들을 정리했습니다.`,words:s,path:`/vocabulary/toeic`,icon:`🎯`,color:`#8E44AD`,bgColor:`#F4ECF7`},{title:`일상 필수 단어 500`,subtitle:`Daily Essential 500`,description:`일상생활에서 매일 사용하는 실용적인 어휘 500개. 쇼핑, 요리, 여행 등 생활 속 영어를 마스터하세요.`,words:l,path:`/vocabulary/daily`,icon:`🏠`,color:`#27AE60`,bgColor:`#EAFAF1`}];function m(){let{t:e}=i();o();let[t,n]=(0,d.useState)(``),m=(0,d.useMemo)(()=>[...u.map(e=>({...e,source:`기초`})),...c.map(e=>({...e,source:`비즈니스`})),...s.map(e=>({...e,source:`TOEIC`})),...l.map(e=>({...e,source:`일상`}))],[]),h=m.length,g=(0,d.useMemo)(()=>{if(!t.trim())return[];let e=t.toLowerCase().trim();return m.filter(t=>t.word.toLowerCase().includes(e)||t.meaning.includes(e)||t.example.toLowerCase().includes(e)).slice(0,30)},[t,m]);return(0,f.jsxs)(`div`,{className:`vocab-home`,children:[(0,f.jsx)(a,{title:e(`필수 영단어 - English Pro`,`Essential Vocabulary - English Pro`),description:e(`기초, 비즈니스, TOEIC, 일상 필수 영단어 2,300+개를 학습하세요.`,`Study 2,300+ essential vocabulary words across basic, business, TOEIC, and daily categories.`)}),(0,f.jsx)(`section`,{className:`page-header`,"data-aos":`fade-up`,children:(0,f.jsxs)(`div`,{className:`container`,children:[(0,f.jsxs)(`div`,{className:`page-header__breadcrumb`,children:[(0,f.jsx)(r,{to:`/`,children:e(`홈`,`Home`)}),(0,f.jsx)(`i`,{className:`fas fa-chevron-right`}),(0,f.jsx)(`span`,{children:e(`필수 영단어`,`Vocabulary`)})]}),(0,f.jsx)(`h1`,{className:`page-header__title`,children:e(`필수 영단어`,`Essential Vocabulary`)}),(0,f.jsx)(`p`,{className:`page-header__description`,children:e(`총 ${h.toLocaleString()}개의 필수 영단어를 학습하세요`,`Study ${h.toLocaleString()} essential vocabulary words`)})]})}),(0,f.jsx)(`div`,{className:`vocab-home-search`,children:(0,f.jsxs)(`div`,{className:`search-input-wrapper`,children:[(0,f.jsxs)(`svg`,{className:`search-icon`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,f.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,f.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,f.jsx)(`input`,{type:`text`,placeholder:`모든 카테고리에서 단어 검색... (영어 또는 한국어)`,value:t,onChange:e=>n(e.target.value)}),t&&(0,f.jsx)(`button`,{className:`search-clear`,onClick:()=>n(``),children:`×`})]})}),t.trim()&&(0,f.jsxs)(`div`,{className:`vocab-search-results`,children:[(0,f.jsxs)(`h3`,{children:[`검색 결과: `,g.length,`개`,g.length===30&&` (최대 30개 표시)`]}),g.length===0?(0,f.jsx)(`p`,{className:`no-results`,children:`검색 결과가 없습니다.`}):(0,f.jsx)(`div`,{className:`search-results-list`,children:g.map((e,t)=>(0,f.jsxs)(`div`,{className:`search-result-item`,children:[(0,f.jsxs)(`div`,{className:`search-result-top`,children:[(0,f.jsx)(`span`,{className:`search-result-word`,children:e.word}),(0,f.jsx)(`span`,{className:`search-result-pron`,children:e.pronunciation}),(0,f.jsx)(`span`,{className:`search-result-source`,style:{background:e.source===`기초`?`#EBF3FB`:e.source===`비즈니스`?`#FDF2E9`:e.source===`TOEIC`?`#F4ECF7`:`#EAFAF1`,color:e.source===`기초`?`#4A90D9`:e.source===`비즈니스`?`#E67E22`:e.source===`TOEIC`?`#8E44AD`:`#27AE60`},children:e.source})]}),(0,f.jsx)(`div`,{className:`search-result-meaning`,children:e.meaning}),(0,f.jsx)(`div`,{className:`search-result-example`,children:e.example})]},`${e.source}-${e.id}-${t}`))})]}),!t.trim()&&(0,f.jsx)(`div`,{className:`vocab-category-grid`,children:p.map(e=>(0,f.jsxs)(r,{to:e.path,className:`vocab-category-card`,style:{borderTopColor:e.color},children:[(0,f.jsx)(`div`,{className:`vocab-category-icon`,style:{background:e.bgColor},children:(0,f.jsx)(`span`,{children:e.icon})}),(0,f.jsx)(`h2`,{children:e.title}),(0,f.jsx)(`p`,{className:`vocab-category-subtitle`,children:e.subtitle}),(0,f.jsx)(`p`,{className:`vocab-category-desc`,children:e.description}),(0,f.jsxs)(`div`,{className:`vocab-category-count`,style:{color:e.color},children:[e.words.length,`개 단어`]}),(0,f.jsx)(`div`,{className:`vocab-category-enter`,style:{background:e.color},children:`학습 시작`})]},e.path))}),(0,f.jsx)(`style`,{children:`
        .vocab-home {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }

        .vocab-home-search {
          max-width: 600px;
          margin: 0 auto 36px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--text-light);
          pointer-events: none;
        }

        .search-input-wrapper input {
          width: 100%;
          padding: 14px 44px 14px 48px;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          background: var(--bg-white);
          color: var(--text-primary);
        }

        .search-input-wrapper input:focus {
          border-color: var(--primary-blue);
        }

        .search-clear {
          position: absolute;
          right: 12px;
          background: var(--bg-light-gray);
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          line-height: 1;
        }

        .search-clear:hover {
          background: var(--primary-blue-bg);
          color: var(--primary-blue);
        }

        .vocab-search-results {
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .vocab-search-results h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0 0 16px;
        }

        .no-results {
          text-align: center;
          color: var(--text-light);
          padding: 40px 0;
        }

        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-result-item {
          background: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 16px 20px;
          transition: box-shadow 0.2s;
        }

        .search-result-item:hover {
          box-shadow: var(--shadow-sm);
        }

        .search-result-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .search-result-word {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .search-result-pron {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .search-result-source {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 6px;
          margin-left: auto;
        }

        .search-result-meaning {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .search-result-example {
          font-size: 0.85rem;
          color: var(--text-light);
          font-style: italic;
        }

        .vocab-category-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 700px) {
          .vocab-category-grid {
            grid-template-columns: 1fr;
          }
        }

        .vocab-category-card {
          background: var(--bg-white);
          border: 1px solid var(--border-light);
          border-top: 4px solid;
          border-radius: 14px;
          padding: 28px 24px 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .vocab-category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .vocab-category-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        .vocab-category-card h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px;
        }

        .vocab-category-subtitle {
          font-size: 0.85rem;
          color: var(--text-light);
          margin: 0 0 12px;
        }

        .vocab-category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0 0 16px;
          flex: 1;
        }

        .vocab-category-count {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .vocab-category-enter {
          display: inline-block;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 10px 0;
          border-radius: 8px;
          text-align: center;
          transition: opacity 0.2s;
        }

        .vocab-category-card:hover .vocab-category-enter {
          opacity: 0.9;
        }
      `})]})}export{m as default};