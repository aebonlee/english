import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";import{a as r,r as i}from"./index-DXNOY27D.js";import{t as a}from"./SEOHead-C5egaLi8.js";import{t as o}from"./useAOS-KlJJLvZR.js";import{t as s}from"./vocabulary-BV-y12ut.js";var c=e(t(),1),l=n(),u=20,d=500;function f(){let{t:e}=i();o();let[t,n]=(0,c.useState)(``),[f,m]=(0,c.useState)(`all`),[h,g]=(0,c.useState)(!0),[_,v]=(0,c.useState)({}),[y,b]=(0,c.useState)(u),[x,S]=(0,c.useState)({}),C=e=>{h&&v(t=>({...t,[e]:!t[e]}))},w=(e,t)=>{e.stopPropagation(),S(e=>({...e,[t]:!e[t]}))},T=(0,c.useMemo)(()=>{let e=s;if(f!==`all`&&(e=e.filter(e=>e.category===f)),t.trim()){let n=t.toLowerCase().trim();e=e.filter(e=>e.word.toLowerCase().includes(n)||e.meaning.includes(n)||e.example.toLowerCase().includes(n))}return e},[t,f]),E=T.slice(0,y),D=y<T.length,O=Object.values(x).filter(Boolean).length,k=()=>{b(e=>e+u)},A=[{value:`all`,label:`전체`},{value:`noun`,label:`Noun (명사)`},{value:`verb`,label:`Verb (동사)`},{value:`adjective`,label:`Adjective (형용사)`},{value:`adverb`,label:`Adverb (부사)`}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:e(`기초 필수 단어 500 - English Pro`,`Basic Essential 500 - English Pro`),description:e(`영어 학습의 기본이 되는 필수 단어 500개를 학습하세요.`,`Study 500 essential words for English learning basics.`)}),(0,l.jsx)(`section`,{className:`page-header`,"data-aos":`fade-up`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`page-header__breadcrumb`,children:[(0,l.jsx)(r,{to:`/`,children:e(`홈`,`Home`)}),(0,l.jsx)(`i`,{className:`fas fa-chevron-right`}),(0,l.jsx)(r,{to:`/vocabulary`,children:e(`필수 영단어`,`Vocabulary`)}),(0,l.jsx)(`i`,{className:`fas fa-chevron-right`}),(0,l.jsx)(`span`,{children:e(`기초 필수 단어`,`Basic Essential`)})]}),(0,l.jsx)(`h1`,{className:`page-header__title`,children:e(`기초 필수 단어 500`,`Basic Essential 500`)}),(0,l.jsx)(`p`,{className:`page-header__description`,children:e(`영어 학습의 기본이 되는 필수 단어 500개를 학습하세요.`,`Study 500 essential words for English learning basics.`)})]})}),(0,l.jsxs)(`div`,{className:`vocab-container`,children:[(0,l.jsx)(`div`,{className:`vocab-progress-wrap`,children:(0,l.jsxs)(`div`,{className:`vocab-progress`,children:[(0,l.jsx)(`div`,{className:`vocab-progress-bar`,children:(0,l.jsx)(`div`,{className:`vocab-progress-fill`,style:{width:`${O/d*100}%`}})}),(0,l.jsxs)(`span`,{className:`vocab-progress-text`,children:[O,` / `,d,` `,e(`학습 완료`,`completed`)]})]})}),(0,l.jsxs)(`div`,{className:`vocab-controls`,children:[(0,l.jsxs)(`div`,{className:`vocab-search-bar`,children:[(0,l.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,l.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,l.jsx)(`input`,{type:`text`,placeholder:`단어 검색...`,value:t,onChange:e=>{n(e.target.value),b(u)}}),t&&(0,l.jsx)(`button`,{className:`search-clear-btn`,onClick:()=>n(``),children:`×`})]}),(0,l.jsxs)(`div`,{className:`vocab-filters`,children:[(0,l.jsx)(`div`,{className:`vocab-category-filters`,children:A.map(e=>(0,l.jsx)(`button`,{className:`filter-btn ${f===e.value?`active`:``}`,onClick:()=>{m(e.value),b(u)},children:e.label},e.value))}),(0,l.jsx)(`button`,{className:`meaning-toggle ${h?``:`hidden-mode`}`,onClick:()=>{g(e=>!e),v({})},children:h?`뜻 가리기`:`뜻 보이기`})]}),(0,l.jsxs)(`div`,{className:`vocab-result-count`,children:[`검색 결과: `,T.length,`개`]})]}),(0,l.jsx)(`div`,{className:`vocab-grid`,children:E.map(e=>(0,l.jsx)(`div`,{className:`vocab-card ${_[e.id]?`flipped`:``} ${x[e.id]?`learned`:``}`,onClick:()=>C(e.id),children:(0,l.jsxs)(`div`,{className:`vocab-card-inner`,children:[(0,l.jsxs)(`div`,{className:`vocab-card-front`,children:[(0,l.jsxs)(`div`,{className:`card-top-row`,children:[(0,l.jsx)(`span`,{className:`category-badge`,children:e.category}),(0,l.jsx)(`button`,{className:`learn-check ${x[e.id]?`checked`:``}`,onClick:t=>w(t,e.id),title:x[e.id]?`학습 완료 취소`:`학습 완료`,children:x[e.id]?`✓`:`○`})]}),(0,l.jsx)(`h3`,{className:`card-word`,children:e.word}),(0,l.jsx)(`span`,{className:`pronunciation`,children:e.pronunciation}),!h&&(0,l.jsx)(`p`,{className:`card-hint`,children:`클릭하여 뜻 확인`})]}),(0,l.jsxs)(`div`,{className:`vocab-card-back`,children:[(0,l.jsxs)(`div`,{className:`card-top-row`,children:[(0,l.jsx)(`span`,{className:`category-badge`,children:e.category}),(0,l.jsx)(`button`,{className:`learn-check ${x[e.id]?`checked`:``}`,onClick:t=>w(t,e.id),title:x[e.id]?`학습 완료 취소`:`학습 완료`,children:x[e.id]?`✓`:`○`})]}),(0,l.jsx)(`h3`,{className:`card-meaning`,children:e.meaning}),(0,l.jsx)(`p`,{className:`example`,children:e.example})]})]})},e.id))}),E.length===0&&(0,l.jsx)(`div`,{className:`vocab-empty`,children:(0,l.jsx)(`p`,{children:`검색 결과가 없습니다.`})}),D&&(0,l.jsx)(`div`,{className:`vocab-load-more`,children:(0,l.jsxs)(`button`,{onClick:k,children:[`더 보기 (`,T.length-y,`개 남음)`]})}),(0,l.jsx)(`style`,{children:p})]})]})}var p=`
  .vocab-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 32px 20px 80px;
  }

  .vocab-progress-wrap {
    text-align: center;
    margin-bottom: 28px;
  }

  .vocab-progress {
    max-width: 400px;
    margin: 0 auto;
  }

  .vocab-progress-bar {
    height: 8px;
    background: #e8e8e8;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .vocab-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4A90D9, #357ABD);
    border-radius: 4px;
    transition: width 0.4s ease;
    min-width: 0;
  }

  .vocab-progress-text {
    font-size: 0.85rem;
    color: #666;
    font-weight: 500;
  }

  .vocab-controls {
    margin-bottom: 24px;
  }

  .vocab-search-bar {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 480px;
    margin: 0 auto 16px;
  }

  .vocab-search-bar svg {
    position: absolute;
    left: 14px;
    color: #aaa;
    pointer-events: none;
  }

  .vocab-search-bar input {
    width: 100%;
    padding: 12px 40px 12px 42px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
    background: #fff;
  }

  .vocab-search-bar input:focus {
    border-color: #4A90D9;
  }

  .search-clear-btn {
    position: absolute;
    right: 10px;
    background: #e0e0e0;
    border: none;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
  }

  .search-clear-btn:hover {
    background: #ccc;
  }

  .vocab-filters {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .vocab-category-filters {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .filter-btn {
    padding: 7px 16px;
    border: 1px solid #ddd;
    border-radius: 20px;
    background: #fff;
    color: #555;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
  }

  .filter-btn:hover {
    border-color: #4A90D9;
    color: #4A90D9;
  }

  .filter-btn.active {
    background: #4A90D9;
    color: #fff;
    border-color: #4A90D9;
  }

  .meaning-toggle {
    padding: 7px 18px;
    border: 2px solid #4A90D9;
    border-radius: 20px;
    background: #fff;
    color: #4A90D9;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .meaning-toggle:hover {
    background: #4A90D9;
    color: #fff;
  }

  .meaning-toggle.hidden-mode {
    background: #4A90D9;
    color: #fff;
  }

  .vocab-result-count {
    text-align: center;
    font-size: 0.85rem;
    color: #999;
  }

  .vocab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
  }

  @media (max-width: 600px) {
    .vocab-grid {
      grid-template-columns: 1fr;
    }
  }

  .vocab-card {
    perspective: 800px;
    height: 200px;
    cursor: pointer;
  }

  .vocab-card.learned {
    opacity: 0.7;
  }

  .vocab-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
  }

  .vocab-card.flipped .vocab-card-inner {
    transform: rotateY(180deg);
  }

  .vocab-card-front,
  .vocab-card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 14px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #e8e8e8;
    background: #fff;
    overflow: hidden;
  }

  .vocab-card-front {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .vocab-card-back {
    transform: rotateY(180deg);
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #f0f7ff;
    border-color: #c8ddf5;
  }

  .card-top-row {
    position: absolute;
    top: 12px;
    left: 14px;
    right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .category-badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    background: #eef2f7;
    color: #6b7c93;
    padding: 3px 10px;
    border-radius: 10px;
    letter-spacing: 0.5px;
  }

  .learn-check {
    background: none;
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    transition: all 0.2s;
    padding: 0;
    line-height: 1;
  }

  .learn-check:hover {
    border-color: #4A90D9;
    color: #4A90D9;
  }

  .learn-check.checked {
    background: #4A90D9;
    border-color: #4A90D9;
    color: #fff;
  }

  .card-word {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 6px;
  }

  .pronunciation {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 4px;
  }

  .card-hint {
    font-size: 0.78rem;
    color: #bbb;
    margin: 8px 0 0;
  }

  .card-meaning {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 12px;
  }

  .example {
    font-size: 0.85rem;
    color: #666;
    font-style: italic;
    line-height: 1.4;
    margin: 0;
  }

  .vocab-empty {
    text-align: center;
    padding: 60px 0;
    color: #999;
    font-size: 1rem;
  }

  .vocab-load-more {
    text-align: center;
    margin-top: 32px;
  }

  .vocab-load-more button {
    padding: 12px 36px;
    border: 2px solid #4A90D9;
    border-radius: 10px;
    background: #fff;
    color: #4A90D9;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .vocab-load-more button:hover {
    background: #4A90D9;
    color: #fff;
  }
`;export{f as default};