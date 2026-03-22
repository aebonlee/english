import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";import{a as r}from"./index-DCsRU_Ll.js";import{i,n as a,r as o,t as s}from"./vocabulary-BV-y12ut.js";var c=e(t(),1),l=n(),u=[{title:`기초 필수 단어 500`,subtitle:`Basic Essential 500`,description:`영어 학습의 기본이 되는 필수 단어 500개. 일상 회화와 기초 독해에 꼭 필요한 핵심 어휘를 학습하세요.`,words:s,path:`/vocabulary/basic`,icon:`📖`,color:`#4A90D9`,bgColor:`#EBF3FB`},{title:`비즈니스 필수 단어 500`,subtitle:`Business Essential 500`,description:`직장 생활과 비즈니스 환경에서 자주 사용되는 전문 어휘 500개. 회의, 보고서, 이메일에 필수적인 단어들입니다.`,words:a,path:`/vocabulary/business`,icon:`💼`,color:`#E67E22`,bgColor:`#FDF2E9`},{title:`TOEIC 필수 단어 800`,subtitle:`TOEIC Essential 800`,description:`TOEIC 시험에 자주 출제되는 핵심 어휘 800개. 고득점을 위해 반드시 알아야 할 단어들을 정리했습니다.`,words:i,path:`/vocabulary/toeic`,icon:`🎯`,color:`#8E44AD`,bgColor:`#F4ECF7`},{title:`일상 필수 단어 500`,subtitle:`Daily Essential 500`,description:`일상생활에서 매일 사용하는 실용적인 어휘 500개. 쇼핑, 요리, 여행 등 생활 속 영어를 마스터하세요.`,words:o,path:`/vocabulary/daily`,icon:`🏠`,color:`#27AE60`,bgColor:`#EAFAF1`}];function d(){let[e,t]=(0,c.useState)(``),n=(0,c.useMemo)(()=>[...s.map(e=>({...e,source:`기초`})),...a.map(e=>({...e,source:`비즈니스`})),...i.map(e=>({...e,source:`TOEIC`})),...o.map(e=>({...e,source:`일상`}))],[]),d=n.length,f=(0,c.useMemo)(()=>{if(!e.trim())return[];let t=e.toLowerCase().trim();return n.filter(e=>e.word.toLowerCase().includes(t)||e.meaning.includes(t)||e.example.toLowerCase().includes(t)).slice(0,30)},[e,n]);return(0,l.jsxs)(`div`,{className:`vocab-home`,children:[(0,l.jsxs)(`div`,{className:`vocab-home-header`,children:[(0,l.jsx)(`h1`,{children:`필수 영단어`}),(0,l.jsx)(`p`,{className:`vocab-home-subtitle`,children:`Essential Vocabulary`}),(0,l.jsxs)(`p`,{className:`vocab-home-total`,children:[`총 `,(0,l.jsx)(`strong`,{children:d.toLocaleString()}),`개의 필수 영단어를 학습하세요`]})]}),(0,l.jsx)(`div`,{className:`vocab-home-search`,children:(0,l.jsxs)(`div`,{className:`search-input-wrapper`,children:[(0,l.jsxs)(`svg`,{className:`search-icon`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,l.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,l.jsx)(`input`,{type:`text`,placeholder:`모든 카테고리에서 단어 검색... (영어 또는 한국어)`,value:e,onChange:e=>t(e.target.value)}),e&&(0,l.jsx)(`button`,{className:`search-clear`,onClick:()=>t(``),children:`×`})]})}),e.trim()&&(0,l.jsxs)(`div`,{className:`vocab-search-results`,children:[(0,l.jsxs)(`h3`,{children:[`검색 결과: `,f.length,`개`,f.length===30&&` (최대 30개 표시)`]}),f.length===0?(0,l.jsx)(`p`,{className:`no-results`,children:`검색 결과가 없습니다.`}):(0,l.jsx)(`div`,{className:`search-results-list`,children:f.map((e,t)=>(0,l.jsxs)(`div`,{className:`search-result-item`,children:[(0,l.jsxs)(`div`,{className:`search-result-top`,children:[(0,l.jsx)(`span`,{className:`search-result-word`,children:e.word}),(0,l.jsx)(`span`,{className:`search-result-pron`,children:e.pronunciation}),(0,l.jsx)(`span`,{className:`search-result-source`,style:{background:e.source===`기초`?`#EBF3FB`:e.source===`비즈니스`?`#FDF2E9`:e.source===`TOEIC`?`#F4ECF7`:`#EAFAF1`,color:e.source===`기초`?`#4A90D9`:e.source===`비즈니스`?`#E67E22`:e.source===`TOEIC`?`#8E44AD`:`#27AE60`},children:e.source})]}),(0,l.jsx)(`div`,{className:`search-result-meaning`,children:e.meaning}),(0,l.jsx)(`div`,{className:`search-result-example`,children:e.example})]},`${e.source}-${e.id}-${t}`))})]}),!e.trim()&&(0,l.jsx)(`div`,{className:`vocab-category-grid`,children:u.map(e=>(0,l.jsxs)(r,{to:e.path,className:`vocab-category-card`,style:{borderTopColor:e.color},children:[(0,l.jsx)(`div`,{className:`vocab-category-icon`,style:{background:e.bgColor},children:(0,l.jsx)(`span`,{children:e.icon})}),(0,l.jsx)(`h2`,{children:e.title}),(0,l.jsx)(`p`,{className:`vocab-category-subtitle`,children:e.subtitle}),(0,l.jsx)(`p`,{className:`vocab-category-desc`,children:e.description}),(0,l.jsxs)(`div`,{className:`vocab-category-count`,style:{color:e.color},children:[e.words.length,`개 단어`]}),(0,l.jsx)(`div`,{className:`vocab-category-enter`,style:{background:e.color},children:`학습 시작`})]},e.path))}),(0,l.jsx)(`style`,{children:`
        .vocab-home {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }

        .vocab-home-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .vocab-home-header h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 4px;
        }

        .vocab-home-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin: 0 0 12px;
        }

        .vocab-home-total {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .vocab-home-total strong {
          color: var(--accent);
          font-size: 1.3rem;
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
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input-wrapper input {
          width: 100%;
          padding: 14px 44px 14px 48px;
          border: 2px solid var(--border);
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          background: var(--bg-card);
          color: var(--text-primary);
        }

        .search-input-wrapper input:focus {
          border-color: var(--accent);
        }

        .search-clear {
          position: absolute;
          right: 12px;
          background: var(--bg-secondary);
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
          background: var(--accent-light);
          color: var(--accent);
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
          color: var(--text-muted);
          padding: 40px 0;
        }

        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-result-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
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
          color: var(--text-muted);
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
          color: var(--text-muted);
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
          background: var(--bg-card);
          border: 1px solid var(--border);
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
          box-shadow: var(--shadow);
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
          color: var(--text-muted);
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
      `})]})}export{d as default};