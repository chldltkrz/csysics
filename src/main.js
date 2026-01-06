import './styles/global.css';
import './styles/hero.css';
import './styles/sections.css';
import { Hero } from './components/Hero.js';
import { About, Philosophy, Services } from './components/Sections.js';
import { Footer } from './components/Footer.js';
import { CsysicsLogo } from './components/Logo.js';
import { LanguageSwitcher } from './components/LanguageSwitcher.js';
import { getTranslation } from './utils/i18n.js';

let currentLang = 'en';

const updateMeta = (t) => {
  document.title = currentLang === 'en'
    ? "CSYSICS | Computing the Universe"
    : "CSYSICS | 우주를 계산하다";

  const desc = currentLang === 'en'
    ? "CSYSICS combines Computer Science and Physics to build high-performance digital apps, cloud infrastructure, and backend systems."
    : "CSYSICS는 컴퓨터 과학과 물리학을 융합하여 고성능 앱 개발, 클라우드 인프라, 서버 백엔드 시스템을 구축합니다.";

  document.querySelector('meta[name="description"]').setAttribute("content", desc);
  document.querySelector('meta[property="og:description"]').setAttribute("content", desc);
  document.querySelector('meta[property="twitter:description"]').setAttribute("content", desc);
};


const render = () => {
  const t = getTranslation(currentLang);
  updateMeta(t);
  const app = document.querySelector('#app');

  app.innerHTML = `
    <main>
      <section id="hero">
        <div class="hero-content">
          <div style="margin-bottom: 2rem;">
              ${CsysicsLogo()}
          </div>
          <h1 class="hero-title">CSYSICS</h1>
          <p class="hero-subtitle">${t.hero.subtitle}</p>
        </div>
      </section>
      ${About(t)}
      ${Philosophy(t)}
      ${Services(t)}
      ${Footer(t)}
    </main>
  `;

  // Re-initialize Hero animation since DOM was wiped
  new Hero('hero');

  // Add Language Switcher
  const switcher = LanguageSwitcher(currentLang, (lang) => {
    currentLang = lang;
    render();
  });
  app.appendChild(switcher);
};

// Initial render
render();
