import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";import{a as r,r as i}from"./index-C0kTGjlY.js";import{t as a}from"./SEOHead-Dg3yerid.js";import{t as o}from"./useAOS-KlJJLvZR.js";import{t as s}from"./SubNav-DYg52vGX.js";import{t as c}from"./vocabulary-C1_T1cZC.js";var l=e(t(),1),u=n(),d=20,f=500;function p(){let{t:e}=i();o();let[t,n]=(0,l.useState)(``),[p,h]=(0,l.useState)(`all`),[g,_]=(0,l.useState)(!0),[v,y]=(0,l.useState)({}),[b,x]=(0,l.useState)(d),[S,C]=(0,l.useState)({}),w=e=>{g&&y(t=>({...t,[e]:!t[e]}))},T=(0,l.useCallback)((e,t)=>{e.stopPropagation(),window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(t);n.lang=`en-US`,n.rate=.9,window.speechSynthesis.speak(n)},[]),E=(e,t)=>{e.stopPropagation(),C(e=>({...e,[t]:!e[t]}))},D=(0,l.useMemo)(()=>{let e=c;if(p!==`all`&&(e=e.filter(e=>e.category===p)),t.trim()){let n=t.toLowerCase().trim();e=e.filter(e=>e.word.toLowerCase().includes(n)||e.meaning.includes(n)||e.example.toLowerCase().includes(n))}return e},[t,p]),O=D.slice(0,b),k=b<D.length,A=Object.values(S).filter(Boolean).length,j=()=>{x(e=>e+d)},M=[{value:`all`,label:`전체`},{value:`noun`,label:`Noun (명사)`},{value:`verb`,label:`Verb (동사)`},{value:`adjective`,label:`Adjective (형용사)`},{value:`adverb`,label:`Adverb (부사)`}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:e(`기초 필수 단어 500 - English Pro`,`Basic Essential 500 - English Pro`),description:e(`영어 학습의 기본이 되는 필수 단어 500개를 학습하세요.`,`Study 500 essential words for English learning basics.`)}),(0,u.jsx)(`section`,{className:`page-header`,"data-aos":`fade-up`,children:(0,u.jsxs)(`div`,{className:`container`,children:[(0,u.jsxs)(`div`,{className:`page-header__breadcrumb`,children:[(0,u.jsx)(r,{to:`/`,children:e(`홈`,`Home`)}),(0,u.jsx)(`i`,{className:`fas fa-chevron-right`}),(0,u.jsx)(r,{to:`/vocabulary`,children:e(`필수 영단어`,`Vocabulary`)}),(0,u.jsx)(`i`,{className:`fas fa-chevron-right`}),(0,u.jsx)(`span`,{children:e(`기초 필수 단어`,`Basic Essential`)})]}),(0,u.jsx)(`h1`,{className:`page-header__title`,children:e(`기초 필수 단어 500`,`Basic Essential 500`)}),(0,u.jsx)(`p`,{className:`page-header__description`,children:e(`영어 학습의 기본이 되는 필수 단어 500개를 학습하세요.`,`Study 500 essential words for English learning basics.`)})]})}),(0,u.jsx)(s,{category:`vocabulary`}),(0,u.jsxs)(`div`,{className:`vocab-container`,children:[(0,u.jsx)(`div`,{className:`vocab-progress-wrap`,children:(0,u.jsxs)(`div`,{className:`vocab-progress`,children:[(0,u.jsx)(`div`,{className:`vocab-progress-bar`,children:(0,u.jsx)(`div`,{className:`vocab-progress-fill`,style:{width:`${A/f*100}%`}})}),(0,u.jsxs)(`span`,{className:`vocab-progress-text`,children:[A,` / `,f,` `,e(`학습 완료`,`completed`)]})]})}),(0,u.jsxs)(`div`,{className:`vocab-controls`,children:[(0,u.jsxs)(`div`,{className:`vocab-search-bar`,children:[(0,u.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,u.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,u.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,u.jsx)(`input`,{type:`text`,placeholder:`단어 검색...`,value:t,onChange:e=>{n(e.target.value),x(d)}}),t&&(0,u.jsx)(`button`,{className:`search-clear-btn`,onClick:()=>n(``),children:`×`})]}),(0,u.jsxs)(`div`,{className:`vocab-filters`,children:[(0,u.jsx)(`div`,{className:`vocab-category-filters`,children:M.map(e=>(0,u.jsx)(`button`,{className:`filter-btn ${p===e.value?`active`:``}`,onClick:()=>{h(e.value),x(d)},children:e.label},e.value))}),(0,u.jsx)(`button`,{className:`meaning-toggle ${g?``:`hidden-mode`}`,onClick:()=>{_(e=>!e),y({})},children:g?`뜻 가리기`:`뜻 보이기`})]}),(0,u.jsxs)(`div`,{className:`vocab-result-count`,children:[`검색 결과: `,D.length,`개`]})]}),(0,u.jsx)(`div`,{className:`vocab-grid`,children:O.map(e=>(0,u.jsx)(`div`,{className:`vocab-card ${v[e.id]?`flipped`:``} ${S[e.id]?`learned`:``}`,onClick:()=>w(e.id),children:(0,u.jsxs)(`div`,{className:`vocab-card-inner`,children:[(0,u.jsxs)(`div`,{className:`vocab-card-front`,children:[(0,u.jsxs)(`div`,{className:`card-top-row`,children:[(0,u.jsx)(`span`,{className:`category-badge`,children:e.category}),(0,u.jsx)(`button`,{className:`learn-check ${S[e.id]?`checked`:``}`,onClick:t=>E(t,e.id),title:S[e.id]?`학습 완료 취소`:`학습 완료`,children:S[e.id]?`✓`:`○`})]}),(0,u.jsx)(`h3`,{className:`card-word`,children:e.word}),(0,u.jsxs)(`div`,{className:`pronunciation-row`,children:[(0,u.jsx)(`span`,{className:`pronunciation`,children:e.pronunciation}),(0,u.jsx)(`button`,{className:`speak-btn`,onClick:t=>T(t,e.word),title:`발음 듣기`,children:(0,u.jsx)(`i`,{className:`fas fa-volume-up`})})]}),!g&&(0,u.jsx)(`p`,{className:`card-hint`,children:`클릭하여 뜻 확인`})]}),(0,u.jsxs)(`div`,{className:`vocab-card-back`,children:[(0,u.jsxs)(`div`,{className:`card-top-row`,children:[(0,u.jsx)(`span`,{className:`category-badge`,children:e.category}),(0,u.jsx)(`button`,{className:`learn-check ${S[e.id]?`checked`:``}`,onClick:t=>E(t,e.id),title:S[e.id]?`학습 완료 취소`:`학습 완료`,children:S[e.id]?`✓`:`○`})]}),(0,u.jsx)(`h3`,{className:`card-meaning`,children:e.meaning}),(0,u.jsx)(`p`,{className:`example`,children:e.example})]})]})},e.id))}),O.length===0&&(0,u.jsx)(`div`,{className:`vocab-empty`,children:(0,u.jsx)(`p`,{children:`검색 결과가 없습니다.`})}),k&&(0,u.jsx)(`div`,{className:`vocab-load-more`,children:(0,u.jsxs)(`button`,{onClick:j,children:[`더 보기 (`,D.length-b,`개 남음)`]})}),(0,u.jsx)(`style`,{children:m})]})]})}var m=`
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
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 10px;
  }

  @media (max-width: 600px) {
    .vocab-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }

  .vocab-card {
    perspective: 800px;
    height: 140px;
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
    border-radius: 10px;
    padding: 12px;
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
    top: 8px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .category-badge {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    background: #eef2f7;
    color: #6b7c93;
    padding: 2px 7px;
    border-radius: 8px;
    letter-spacing: 0.5px;
  }

  .learn-check {
    background: none;
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    font-size: 11px;
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
    font-size: 1.15rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 4px;
  }

  .pronunciation-row {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .pronunciation {
    font-size: 0.75rem;
    color: #888;
    margin-bottom: 0;
  }

  .speak-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    padding: 2px 4px;
    line-height: 1;
    border-radius: 4px;
    transition: transform 0.15s;
    color: #4A90D9;
  }

  .speak-btn:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }

  .card-hint {
    font-size: 0.7rem;
    color: #bbb;
    margin: 4px 0 0;
  }

  .card-meaning {
    font-size: 1.05rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 8px;
  }

  .example {
    font-size: 0.75rem;
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
`;export{p as default};