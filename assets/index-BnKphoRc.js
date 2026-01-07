(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class p{constructor(s){this.container=document.getElementById(s),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.particles=[],this.lineDistance=150,this.mouse={x:null,y:null,radius:200},this.init()}init(){this.container.appendChild(this.canvas),this.resize(),this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",s=>{this.mouse.x=s.x,this.mouse.y=s.y}),window.addEventListener("mouseout",()=>{this.mouse.x=null,this.mouse.y=null})}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.createParticles()}createParticles(){this.particles=[];const s=this.canvas.width*this.canvas.height/9e3;for(let e=0;e<s;e++){const o=Math.random()*2+1,i=Math.random()*(this.canvas.width-o*2)+o*2,r=Math.random()*(this.canvas.height-o*2)+o*2,n=Math.random()*2-1,c=Math.random()*2-1,h=Math.random()>.5?"#ffffff":"#888888";this.particles.push({x:i,y:r,directionX:n,directionY:c,size:o,color:h})}}animate(){requestAnimationFrame(()=>this.animate()),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let s=0;s<this.particles.length;s++){const e=this.particles[s];if(e.x+=e.directionX,e.y+=e.directionY,(e.x+e.size>this.canvas.width||e.x-e.size<0)&&(e.directionX=-e.directionX),(e.y+e.size>this.canvas.height||e.y-e.size<0)&&(e.directionY=-e.directionY),this.mouse.x!=null){let o=this.mouse.x-e.x,i=this.mouse.y-e.y;Math.sqrt(o*o+i*i)<this.mouse.radius&&(this.mouse.x<e.x&&e.x<this.canvas.width-e.size*10&&(e.x+=2),this.mouse.x>e.x&&e.x>e.size*10&&(e.x-=2),this.mouse.y<e.y&&e.y<this.canvas.height-e.size*10&&(e.y+=2),this.mouse.y>e.y&&e.y>e.size*10&&(e.y-=2))}this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2,!1),this.ctx.fillStyle=e.color,this.ctx.fill(),this.connect(s,this.particles)}}connect(s,e){let o=e[s];for(let i=s;i<e.length;i++){let r=e[i],n=(o.x-r.x)*(o.x-r.x)+(o.y-r.y)*(o.y-r.y);if(n<this.lineDistance*this.lineDistance){let c=1-n/2e4;this.ctx.strokeStyle=`rgba(140, 140, 140, ${c})`,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(r.x,r.y),this.ctx.stroke()}}}}const u=t=>`
  <section id="about">
    <div class="container">
      <h2 class="section-title">${t.about.title}</h2>
      <div class="grid">
        <div class="card">
          <h3>${t.about.cs.title}</h3>
          <p>${t.about.cs.desc}</p>
        </div>
        <div class="card">
          <h3>${t.about.physics.title}</h3>
          <p>${t.about.physics.desc}</p>
        </div>
        <div class="card">
          <h3>${t.about.csysics.title}</h3>
          <p>${t.about.csysics.desc}</p>
        </div>
      </div>
    </div>
  </section>
`,m=t=>`
  <section id="philosophy" style="background: var(--color-bg-alt);">
    <div class="container">
      <h2 class="section-title">${t.philosophy.title}</h2>
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">
          ${t.philosophy.quote}
        </p>
        <p style="color: var(--color-text-muted);">
          ${t.philosophy.desc}
        </p>
      </div>
    </div>
  </section>
`,f=t=>`
  <section id="services">
    <div class="container">
      <h2 class="section-title">${t.services.title}</h2>
      <div class="grid">
        <div class="card">
          <h3>${t.services.app.title}</h3>
          <p>${t.services.app.desc}</p>
        </div>
        <div class="card">
          <h3>${t.services.cloud.title}</h3>
          <p>${t.services.cloud.desc}</p>
        </div>
        <div class="card">
          <h3>${t.services.server.title}</h3>
          <p>${t.services.server.desc}</p>
        </div>
      </div>
    </div>
  </section>
`,y=t=>`
  <footer style="padding: 4rem 1rem; border-top: 1px solid var(--glass-border); margin-top: 4rem; background: var(--color-bg-alt); color: var(--color-text-muted); font-size: 0.9rem;">
    <div class="container">
      <div style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 3rem;">
        <div>
           <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-text);">CSYSICS</h2>
           <p style="margin-bottom: 1rem;">${t.footer.tagline}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; border-top: 1px solid #333; padding-top: 2rem;">
          <div>
            <strong style="color: var(--color-text); display: block; margin-bottom: 0.5rem;">${t.footer.contactInfo}</strong>
            <p>Email: ceo@csysics.com</p>
            <p>Mobile: 010-5725-2222</p>
            <p>Fax: 0504-159-1421</p>
          </div>
          <div>
            <strong style="color: var(--color-text); display: block; margin-bottom: 0.5rem;">${t.footer.companyInfo}</strong>
            <p>${t.footer.ceo}</p>
            <p>${t.footer.address}</p>
            <p>Business License: 710-34-01552</p>
          </div>

        </div>
      </div>
      
      <div style="border-top: 1px solid #333; padding-top: 1.5rem; text-align: center; color: #666;">
        <p>${t.footer.rights}</p>
      </div>
    </div>
  </footer>
`,v=()=>`
<!-- 
  ViewBox: 180 50 150 150 (Unchanged)
  Width/Height: Reduced to 80% of previous (400 -> 320)
  Max-Width: Reduced to 400px
-->
<svg viewBox="180 50 150 150" width="320" height="320" xmlns="http://www.w3.org/2000/svg" class="company-logo" style="width: 100%; max-width: 400px; height: auto; display: block; margin: 0 auto;">
  <defs>
    <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
       <stop offset="0%" stop-color="#cccccc" /> <!-- Silver/White start -->
       <stop offset="100%" stop-color="#666666" /> <!-- Darker Grey end -->
    </linearGradient>
  </defs>
  <path id="&lt;Compound Path&gt;" fill-rule="evenodd" fill="url(#logoGradient)" d="m316.97 170.45h-103.45l-10.6 18.35-11.69-6.75 51.73-89.59-10.6-18.35 11.69-6.75 51.73 89.59h21.19zm-66.22-64.49l-29.44 50.99h58.88z"/>
</svg>
`,g=(t,s)=>{const e=document.createElement("div");e.className="lang-switcher",e.style.cssText=`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 1000;
    display: flex;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    padding: 0.5rem;
    border-radius: 2rem;
    border: 1px solid var(--glass-border);
  `;const o=document.createElement("button");o.textContent="EN",o.style.cssText=`
    background: ${t==="en"?"var(--color-primary)":"transparent"};
    color: ${t==="en"?"#fff":"var(--color-text-muted)"};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-family: var(--font-body);
    transition: all 0.3s ease;
  `,o.onclick=()=>s("en");const i=document.createElement("button");return i.textContent="KR",i.style.cssText=`
    background: ${t==="ko"?"var(--color-primary)":"transparent"};
    color: ${t==="ko"?"#fff":"var(--color-text-muted)"};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-family: var(--font-body);
    transition: all 0.3s ease;
  `,i.onclick=()=>s("ko"),e.appendChild(o),e.appendChild(i),e},l={en:{hero:{subtitle:"Computing Service"},about:{title:"The Fusion",cs:{title:"Computer Science",desc:"The language of the artificial. Algorithms, data structures, and the logic that drives the digital world. We build robust systems that scale."},physics:{title:"Physics",desc:"The language of the natural. Forces, energy, and the laws that govern the physical universe. We apply first principles to solve complex problems."},csysics:{title:"CSYSICS",desc:"The synthesis. Where code simulates reality, and physical laws inspire algorithms. We create technology that feels natural, powerful, and fundamental."}},philosophy:{title:"Our Philosophy",quote:'"we do not just write code; we simulate possibilities."',desc:"In a world increasingly driven by digital complexity, we return to the elegance of physical laws. Our approach reduces noise, focuses on signal, and builds solutions that are as inevitable as gravity."},services:{title:"Our Services",app:{title:"Digital Experience Engineering",desc:"Crafting seamless user interfaces that flow with the precision of fluid dynamics. We build intuitive, high-performance mobile applications that connect users to your digital universe."},cloud:{title:"Cloud Infrastructure Architecture",desc:"Building scalable, nebulous networks that expand infinitely. We design distributed cloud systems that process data with the efficiency of thermodynamic equilibrium."},server:{title:"High-Performance Backend",desc:"The gravitational core of your digital service. We engineer robust server architectures that maintain stability and performance under the immense pressure of massive traffic."}},footer:{tagline:"Computing the Universe.",contactInfo:"Contact Info",companyInfo:"Company Info",ceo:"Representative: Choi Issac (최이삭)",address:"Address: Yeonnamro-3gil 28-12 102Ho, Mapo-gu, Seoul, Republic of Korea (03988)",rights:"© 2026 CSYSICS. All rights reserved."}},ko:{hero:{subtitle:"컴퓨팅 서비스"},about:{title:"융합의 정점",cs:{title:"컴퓨터 과학",desc:"디지털 세상을 설계하는 논리이자 언어. 우리는 알고리즘과 데이터 구조를 통해 견고하고 확장 가능한 시스템을 구축합니다."},physics:{title:"물리학",desc:"자연계의 근본 원리. 힘과 에너지, 우주를 지배하는 법칙을 탐구하여 복잡한 문제의 본질적인 해답을 찾습니다."},csysics:{title:"CSYSICS",desc:"두 세계의 결합. 코드로 현실을 시뮬레이션하고, 물리 법칙에서 알고리즘의 영감을 얻습니다. 우리는 자연스럽고 강력하며, 본질에 충실한 기술을 창조합니다."}},philosophy:{title:"우리의 철학",quote:'"우리는 코드를 넘어, 가능성을 시뮬레이션합니다."',desc:"복잡함이 지배하는 디지털 세상에서, 우리는 물리 법칙의 우아한 단순함에 주목합니다. 불필요한 소음을 걷어내고 본질에 집중하며, 중력처럼 거부할 수 없는 필연적인 솔루션을 제시합니다."},services:{title:"제공 서비스",app:{title:"디지털 경험 공학 (App)",desc:"유체처럼 매끄럽게 흐르는 사용자 경험을 설계합니다. 사용자와 디지털 세계를 직관적으로 연결하는 고성능 모바일 애플리케이션을 구현합니다."},cloud:{title:"클라우드 인프라 아키텍처 (Cloud)",desc:"무한히 팽창하는 우주처럼 유연한 네트워크를 구축합니다. 열역학적 효율성을 바탕으로 데이터를 처리하는 최적의 분산형 클라우드 시스템을 설계합니다."},server:{title:"고성능 백엔드 (Server)",desc:"서비스의 중심핵(Core)을 담당합니다. 폭발적인 트래픽 부하 속에서도 흔들리지 않는 안정성과 강력한 성능을 갖춘 서버 아키텍처를 엔지니어링합니다."}},footer:{tagline:"우주를 계산하다.",contactInfo:"연락처",companyInfo:"회사 정보",ceo:"대표: 최이삭",address:"주소: 서울특별시 마포구 연남로3길 28-12 102호 (03988)",rights:"© 2026 CSYSICS. All rights reserved."}}},b=t=>l[t]||l.en;let a="en";const x=t=>{document.title=a==="en"?"CSYSICS | Computing the Universe":"CSYSICS | 우주를 계산하다";const s=a==="en"?"CSYSICS combines Computer Science and Physics to build high-performance digital apps, cloud infrastructure, and backend systems.":"CSYSICS는 컴퓨터 과학과 물리학을 융합하여 디지털 경험, 클라우드 인프라, 고성능 백엔드 시스템을 설계합니다.";document.querySelector('meta[name="description"]').setAttribute("content",s),document.querySelector('meta[property="og:description"]').setAttribute("content",s),document.querySelector('meta[property="twitter:description"]').setAttribute("content",s)},d=()=>{const t=b(a);x();const s=document.querySelector("#app");s.innerHTML=`
    <main>
      <section id="hero">
        <div class="hero-content">
          <div style="margin-bottom: 2rem;">
              ${v()}
          </div>
          <h1 class="hero-title">CSYSICS</h1>
          <p class="hero-subtitle">${t.hero.subtitle}</p>
        </div>
      </section>
      ${u(t)}
      ${m(t)}
      ${f(t)}
      ${y(t)}
    </main>
  `,new p("hero");const e=g(a,o=>{a=o,d()});s.appendChild(e)};d();
