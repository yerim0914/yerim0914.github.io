'use strict';
const projects=[
  {
    "id": "finance",
    "category": "kinfa",
    "label": "FINANCIAL INFRASTRUCTURE",
    "visual": "finance",
    "title": "IT 인프라·시스템 운영",
    "short": "대외계 연계 · VOC 솔루션 관리 · 재해복구(DR) ISP 사업 지원",
    "period": "2025 — 현재",
    "company": "서민금융진흥원",
    "role": "대외계 개발·운영 · VOC 솔루션 관리 · DR ISP 사업 지원",
    "summary": "대외계 연계 · VOC 솔루션 관리 · 재해복구(DR) ISP 사업 지원",
    "context": "대외계 시스템과 사내 VOC 솔루션을 운영·관리하고, 재해복구체계 고도화 ISP 사업을 지원하는 업무입니다. 대외계에서는 기관별 전문 규격과 데이터 연계 흐름을 확인하고, VOC 솔루션의 운영 이슈와 요구사항에 대응합니다. DR ISP 사업은 부담당자로 운영관리와 기술 검토를 지원합니다.",
    "approach": "전문 설계서와 업무 요건을 분석하고, 기관별 필수값과 데이터 매핑 구조, 변경에 따른 기존 거래 영향을 검토합니다. 거래 지연이나 연계 오류가 발생하면 로그·DB 데이터·통신 경로를 확인하며 원인 분석을 지원합니다.",
    "contributions": [
      "금융기관·유관기관 간 TCP/IP 기반 전문 송수신 및 데이터 연계 운영",
      "전문 규격·필수값·데이터 매핑 변경 검토 및 인터페이스·프로그램 수정",
      "로그·DB 데이터·통신 경로를 활용한 거래 지연·연계 오류 원인 분석 지원",
      "SQL 기반 거래 데이터·처리 이력 조회 및 정합성 검증",
      "대외계 배치·파일 연계 처리 결과 및 오류 구간 확인",
      "대외기관·내부 현업·개발·운영 담당자와 변경 영향 및 운영 이슈 협의"
    ],
    "outcome": "데이터 흐름에 대한 이해를 금융 시스템의 서버·통신·운영 영역까지 확장했습니다. 여러 조직과 협업하며 안정적인 기관 간 서비스 운영을 지원하고 있습니다.",
    "stack": [
      "Java",
      "Spring Framework",
      "Oracle / SQL",
      "TCP/IP",
      "Batch",
      "Linux",
      "SVN"
    ],
    "art": "<div class=\"infra-board\"><div class=\"infra-board-head\"><strong>대외계 · 솔루션 · DR 사업 지원</strong><span>담당 업무</span></div><div class=\"infra-flow\"><div class=\"infra-node\"><strong>외부기관</strong><small>금융기관·유관기관</small></div><b class=\"infra-arrow\">⇄</b><div class=\"infra-node infra-interface\"><strong>인터페이스</strong><small>전문·배치·파일 연계</small></div><b class=\"infra-arrow\">⇄</b><div class=\"infra-node\"><strong>서민금융<br>진흥원</strong><small>대외계 시스템</small></div></div><div class=\"infra-capabilities\"><span>대외계 연계 운영</span><span>VOC 솔루션 관리</span><span>ISMS 대응</span><span>DR ISP 사업 지원</span></div></div>",
    "supportingWork": [
      {
        "title": "VOC 솔루션 운영·관리",
        "points": [
          "ISMS 대응",
          "요구사항 검토",
          "유지보수 업체 회의 및 업무 협의",
          "운영 오류 대응",
          "관련 데이터 관리"
        ]
      },
      {
        "title": "재해복구체계 고도화 ISP 사업",
        "role": "사업 운영관리 지원 · 부담당자",
        "points": [
          "재해복구체계 고도화 ISP 사업 운영관리 지원",
          "네트워크·IT 인프라 및 백업·복구 솔루션 기술 검토",
          "재해복구체계 개선 방향 및 기술적 요구사항 검토"
        ]
      }
    ]
  },
  {
    "id": "financial-services",
    "category": "kinfa",
    "label": "CORE SYSTEMS · SERVICE PLANNING & OPERATIONS",
    "visual": "service",
    "title": "잇다(맞춤대출) · 복합지원",
    "short": "잇다(맞춤대출)·복합지원 서비스",
    "period": "현재 담당",
    "company": "서민금융진흥원",
    "role": "계정계 시스템 기획·운영 및 데이터·웹 연계 인터페이스 관리",
    "summary": "잇다(맞춤대출)의 계정계 시스템을 담당하며, 서비스 데이터 전반과 웹 연계 인터페이스를 관리합니다. 복합지원 서비스 업무도 함께 수행합니다.",
    "context": "잇다(맞춤대출)의 계정계 시스템과 복합지원 서비스 관련 업무입니다. 잇다에서는 서비스 데이터 전반과 웹·계정계 시스템 간 데이터를 주고받는 연계 인터페이스를 관리합니다.",
    "approach": "계정계 시스템을 중심으로 서비스 기획·운영과 데이터 관리를 담당합니다. 웹과 계정계 사이의 연계 인터페이스도 함께 관리하며 서비스 운영을 지원합니다.",
    "contributions": [
      "잇다(맞춤대출) 계정계 시스템 관련 서비스 기획·운영",
      "잇다(맞춤대출) 서비스 데이터 전반 관리",
      "웹·계정계 시스템 간 데이터 연계 인터페이스 관리",
      "복합지원 서비스 관련 기획·운영 및 데이터 관리"
    ],
    "outcome": "서비스 기획·운영 경험에 계정계 시스템, 데이터, 웹 연계 인터페이스에 대한 이해를 함께 쌓고 있습니다.",
    "stack": [
      "계정계 시스템",
      "서비스 기획·운영",
      "데이터 관리",
      "웹 연계 인터페이스",
      "Oracle / SQL"
    ],
    "art": "<div class=\"mini-service\"><span>잇다</span><div>계정계 <i>·</i> 데이터 <i>·</i> 웹 연계</div></div>",
    "publicUrl": "https://loan.kinfa.or.kr/main.ke",
    "coverImage": "./assets/itda-home.jpg",
    "coverAlt": "서민금융 잇다 공식 홈페이지의 금융상품·복합지원 서비스 소개 화면",
    "publicLinkLabel": "잇다(맞춤대출) 서비스 보기",
    "coverCaption": "잇다 공식 서비스 화면 · 담당: 계정계 시스템·데이터·웹 연계 인터페이스"
  },
  {
    "id": "builder",
    "category": "tmax",
    "label": "FRONTEND · CANVAS",
    "visual": "builder",
    "title": "노코드 앱 빌더",
    "short": "노코드 앱 빌더",
    "period": "2023 — 2024",
    "company": "티맥스가이아",
    "role": "그리기 도구 기획·컴포넌트 및 속성 편집 UI 개발",
    "publicUrl": "https://www.sharedit.co.kr/products/816",
    "publicLinkLabel": "제품 소개 보기",
    "summary": "노코드 빌더의 그리기 영역·도구를 컴포넌트로 구성하고, 속성 모델 설계부터 삽입 동작·속성 편집 패널까지 개발했습니다.",
    "context": "사용자가 코딩 없이 화면에 그리기 영역과 도구를 배치하고 설정할 수 있는 노코드 앱 빌더입니다. Drawing Area와 펜·선택·지우개·형광펜 등의 도구를 각각 컴포넌트로 구성하고, 도구별 속성을 편집할 수 있는 UI를 개발했습니다.",
    "approach": "MX에서 제공하는 라이브러리를 활용해 그리기 도구 컴포넌트를 개발했습니다. 컴포넌트·속성 모델을 정의하고 DB의 속성 정보와 편집 UI를 연결했습니다. 드래그앤드롭·클릭으로 컴포넌트를 삽입하고 도구별 설정을 수정할 수 있도록 구현했습니다.",
    "contributions": [
      "그리기 영역·도구의 컴포넌트 및 속성 모델 정의",
      "MX 라이브러리를 활용한 그리기 도구 컴포넌트 개발",
      "드래그앤드롭·클릭을 통한 컴포넌트 삽입 기능 구현",
      "DB 속성 정보와 연동되는 도구별 속성 편집 패널 구현",
      "React·TypeScript·MobX 기반 편집 상태 관리 및 Konva 기반 그래픽 편집 기능 개발"
    ],
    "outcome": "노코드 빌더의 컴포넌트·속성 모델부터 삽입 동작과 편집 UI까지 연결해 개발했습니다.",
    "stack": [
      "React",
      "TypeScript",
      "MobX",
      "Konva",
      "MX 라이브러리"
    ],
    "art": "<div class=\"mini-builder\"><div class=\"selection-box\"></div></div>"
  },
  {
    "id": "slideshow",
    "category": "tmax",
    "label": "FRONTEND · WEB OFFICE",
    "visual": "slideshow",
    "title": "웹 기반 Office",
    "short": "웹 기반 Office · Point팀",
    "period": "2021 — 2023",
    "company": "티맥스가이아 · Point팀",
    "role": "슬라이드 쇼·애니메이션 개발 및 안정화",
    "summary": "웹 기반 프레젠테이션 서비스. 슬라이드 탐색·전체 화면 실행·객체 애니메이션·화면 전환을 개발했습니다.",
    "context": "티맥스가이아 Point팀에서 참여한 웹 기반 Office 프로젝트입니다. 프레젠테이션의 슬라이드 쇼와 애니메이션 기능을 개발하며, 브라우저·모니터 등 다양한 실행 환경과 사용자 입력을 함께 고려했습니다.",
    "approach": "2021–2022년에는 슬라이드 탐색·실행과 Fullscreen API 기반 전체 화면 기능, 서버·DB 연동을 개발했습니다. 2022–2023년에는 Web Animations API로 객체 애니메이션과 화면 전환을 구현하고, 마우스 이벤트와 실행 순서의 충돌을 분석·개선했습니다.",
    "contributions": [
      "원하는 슬라이드부터 시작하는 탐색·실행 기능 구현",
      "Fullscreen API를 활용한 전체 화면 프레젠테이션 기능 개발",
      "다양한 화면 및 모니터 환경에 대한 동작 대응",
      "React UI와 서버·데이터베이스 간 연동 기능 개발",
      "브라우저 및 실행 환경별 동작 차이 분석과 예외 상황 대응 로직 구현",
      "Web Animations API 기반 객체별 애니메이션 및 슬라이드 전환 효과 구현",
      "실행 순서와 전환 과정의 이벤트 충돌 분석·개선",
      "마우스 이벤트와 애니메이션 간 충돌 문제 해결",
      "복잡한 UI 상태 및 이벤트 흐름을 추적해 재현이 어려운 오류 분석"
    ],
    "outcome": "웹 프레젠테이션의 실행부터 표현 기능까지 같은 프로젝트 안에서 연속적으로 개발했습니다. 서버·DB 연동과 UI 상태·이벤트 흐름을 함께 다루며 기능과 동작 안정성을 개선했습니다.",
    "stack": [
      "React",
      "TypeScript",
      "MobX",
      "Web Animations API",
      "Fullscreen API",
      "Tibero",
      "Electron"
    ],
    "art": "<div class=\"mini-slide\"></div>",
    "coverImage": "./assets/point-editor-reference.png",
    "coverAlt": "웹 기반 Office 프로젝트의 프레젠테이션 편집 UI 참고 이미지",
    "coverWidth": 1266,
    "coverHeight": 638,
    "coverCaption": "프레젠테이션 편집 UI 참고 이미지"
  },
  {
    "id": "layout",
    "category": "sk",
    "label": "AUTOMATION · SEMICONDUCTOR",
    "visual": "layout",
    "title": "반도체 Layout 자동화 시스템",
    "short": "반도체 Layout 자동화 시스템",
    "period": "2018 — 2021",
    "company": "SK하이닉스",
    "role": "자동화 프로그램 개발 · 시스템 UI·기능 기획",
    "summary": "MASK Frame Data의 반복 작업을 자동화하고, 작업자 요구에 맞춰 입력 방식·시스템 UI·작업 프로세스를 설계했습니다.",
    "context": "SK하이닉스의 반도체 공정 Layout 업무를 자동화하는 프로젝트입니다. OPUS Tool로 MASK Frame Data를 배치하는 반복 업무와, 좌표를 직접 계산해 도형을 만드는 작업을 개선했습니다.",
    "approach": "2018–2020년에는 사용자별 작업 방식을 분석해 SKILL 기반 자동화 프로그램을 개발하고 현업에 적용했습니다. 2020–2021년에는 수치 입력만으로 사각형·Donut 등 다양한 도형을 생성하도록 시스템 UI와 입력 방식, 작업 프로세스를 기획·설계했습니다.",
    "contributions": [
      "OPUS Tool 기반 MASK Frame Data Layout 업무 수행 및 프로세스 분석",
      "반복 수작업을 대체하는 SKILL 언어 기반 자동화 프로그램 개발",
      "사용자별 요구사항과 작업 방식에 맞춘 기능 설계·구현",
      "실제 업무에 프로그램을 적용해 작업 효율화 및 품질 관리 지원",
      "작업자 요구를 반영한 자동화 시스템 UI 및 기능 설계",
      "사각형·Donut 등의 좌표 계산을 줄이는 수치 입력 기반 Design System 기획",
      "사용자 중심의 입력 방식 및 작업 프로세스 설계"
    ],
    "outcome": "개발과 UI·업무 프로세스 기획을 함께 수행했습니다. 반복 작업의 처리 속도와 정확도를 높이고, 작업자의 계산 부담과 휴먼에러 가능성을 줄이는 데 기여했습니다.",
    "stack": [
      "SKILL",
      "OPUS Tool",
      "UI·기능 기획",
      "업무 프로세스 설계"
    ],
    "art": "<div class=\"mini-layout\"></div>"
  }
];
const stitchgrid={
  "id": "stitchgrid",
  "label": "SOLO PROJECT · STITCHGRID",
  "title": "StitchGrid",
  "short": "혼자 기획하고 개발해 운영하는 코바늘 도안 서비스.",
  "period": "2026.07 — 2026.08 · 이후 운영·개선",
  "company": "1인 기획·개발 서비스",
  "role": "1인 기획·설계·개발·배포·운영",
  "context": "뜨개 도안을 제작하면서 도구가 흩어져 있고 기호 입력과 편집이 복잡하다는 불편을 느꼈습니다. 도안을 생성하고 편집한 뒤 저장·내보내기까지 이어지는 흐름을 하나의 웹 서비스로 만들고자 했습니다.",
  "approach": "사용자 흐름을 직접 정의하고 Grid 기반 편집기, 기호 관리, 페이지·레이어 관리 구조를 설계했습니다. 프론트엔드와 서버, 데이터 처리까지 구현하고 AI Agent를 구조 검토, 반복 코드 작성, 리팩토링과 오류 분석의 보조 도구로 활용했습니다.",
  "contributions": [
    "도안 생성 → 편집 → 저장 → 내보내기로 이어지는 사용자 흐름 정의",
    "Grid 기반 편집기, 기호 관리, 페이지·레이어 관리 기능 설계·구현",
    "편집 상태와 기능 간 상호작용 오류의 데이터 흐름·상태 변화 추적",
    "AI 생성 코드를 동작 원리와 서비스 구조에 맞게 직접 검토·수정",
    "사용성 문제를 발견하면 설계를 재검토하고 기능 구조 개선",
    "직접 배포·운영하며 실제 사용자 이용 현황을 확인하고 기능 보완"
  ],
  "outcome": "이력서 작성 시점 기준 일평균 약 50–100명이 방문하는 서비스로 운영했습니다. 실제 사용 환경을 관찰하고 지속적으로 개선하는 제품 개발의 전체 과정을 경험했습니다.",
  "stack": [
    "React",
    "TypeScript",
    "웹 편집기",
    "프론트엔드·서버 연동",
    "AI Agent",
    "서비스 운영"
  ],
  "live": "https://stitchgrid.co.kr"
};
const grid=document.querySelector('#project-grid');
grid.innerHTML=projects.map(p=>`<button type="button" class="project-card${p.id==='finance'?' card-finance':''}" data-project="${p.id}" data-category="${p.category}" aria-label="${p.short} 상세보기"><div class="project-visual visual-${p.visual}" data-label="${p.label}" aria-hidden="true">${p.coverImage?`<img class="project-cover" src="${p.coverImage}" alt="" width="${p.coverWidth??1440}" height="${p.coverHeight??800}" loading="lazy">`:p.art}</div><div class="card-content"><div class="card-meta"><span>${p.company}</span><span>${p.period}</span></div><h3>${p.title}</h3><p>${p.summary}</p><div class="card-bottom"><span class="card-tech">${p.stack.slice(0,3).join(' · ')}</span><span class="card-arrow" aria-hidden="true">↗</span></div></div></button>`).join('');
const dialog=document.querySelector('#project-dialog');let previousFocus=null;
function openProject(id){
const p=id==='stitchgrid'?stitchgrid:projects.find(p=>p.id===id);if(!p)return;previousFocus=document.activeElement;
document.querySelector('#project-detail').innerHTML=`<header class="detail-header"><div class="eyebrow">${p.label}</div><h2 id="detail-title">${p.title}</h2><p>${p.short}</p><dl class="detail-meta"><div><dt>기간</dt><dd>${p.period}</dd></div><div><dt>소속 / 프로젝트</dt><dd>${p.company}</dd></div><div><dt>담당 역할</dt><dd>${p.role}</dd></div><div><dt>프로젝트 성격</dt><dd>${p.live?'1인 기획·개발 · 공개 운영':'회사 업무 · 공개 범위 내 요약'}</dd></div></dl></header><div class="detail-body">${p.id==='finance'?`<section class="detail-infra" aria-label="대외계 연계 구조와 담당 업무">${p.art}</section>`:''}${p.coverImage?`<section class="real-gallery" aria-label="프로젝트 화면"><figure><a href="${p.publicUrl??p.coverImage}" target="_blank" rel="noopener noreferrer"><img src="${p.coverImage}" width="${p.coverWidth??1440}" height="${p.coverHeight??800}" alt="${p.coverAlt}"></a><figcaption>${p.coverCaption}</figcaption></figure></section>`:''}${p.live?'<section class="real-gallery" aria-label="StitchGrid 실제 화면"><figure><a href="./assets/stitchgrid-symbols.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/stitchgrid-symbols.jpg" width="1440" height="700" alt="StitchGrid 실제 원형 레이스 기호도안 편집기 화면"></a><figcaption>기호도안 편집기 · 캡처용 원형 레이스 예시</figcaption></figure><figure><a href="./assets/stitchgrid-home.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/stitchgrid-home.jpg" width="1440" height="560" alt="StitchGrid 실제 서비스 홈페이지"></a><figcaption>홈페이지 · 모눈도안과 기호도안의 시작 화면</figcaption></figure></section>':''}<section class="detail-section"><h3><span>01</span> 프로젝트 소개</h3><p>${p.context}</p></section><section class="detail-section"><h3><span>02</span> 담당 범위</h3><p>${p.approach}</p></section><section class="detail-section"><h3><span>03</span> 주요 업무</h3><ul>${p.contributions.map(c=>`<li>${c}</li>`).join('')}</ul></section>${p.supportingWork?.length?`<section class="detail-section"><h3>함께 담당한 운영·사업 지원</h3>${p.supportingWork.map(work=>`<div class="support-work"><h4>${work.title}</h4>${work.role?`<p class="support-work-role">${work.role}</p>`:''}<ul>${work.points.map(point=>`<li>${point}</li>`).join('')}</ul></div>`).join('')}</section>`:''}<section class="detail-outcome"><h3>경험과 역량</h3><p>${p.outcome}</p></section><section class="detail-section"><h3>사용 기술 · 업무 영역</h3><div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div></section>${p.publicUrl?`<div class="detail-links"><a class="button primary" href="${p.publicUrl}" target="_blank" rel="noopener noreferrer">${p.publicLinkLabel} <span>↗</span></a></div>`:''}${p.live?`<div class="detail-links"><a class="button primary" href="${p.live}" target="_blank" rel="noopener noreferrer">StitchGrid 방문하기 <span>↗</span></a><a class="text-link" href="https://github.com/yerim0914" target="_blank" rel="noopener noreferrer">GitHub 프로필 ↗</a></div>`:'<p class="confidential-note">회사 프로젝트는 제공된 이력서와 직접 설명한 업무 내용을 바탕으로 구성했습니다. 내부 화면 및 비공개 코드는 포함하지 않습니다.</p>'}</div>`;
dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');}
document.addEventListener('click',e=>{const p=e.target.closest('[data-project]');if(p)openProject(p.dataset.project);});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousFocus?.focus({preventScroll:true});});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});let visible=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)visible++;});document.querySelector('.project-count').textContent=`${visible} PROJECT${visible===1?'':'S'}`;}));
