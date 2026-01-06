export const LanguageSwitcher = (currentLang, onSwitch) => {
    const container = document.createElement('div');
    container.className = 'lang-switcher';
    container.style.cssText = `
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
  `;

    const btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.style.cssText = `
    background: ${currentLang === 'en' ? 'var(--color-primary)' : 'transparent'};
    color: ${currentLang === 'en' ? '#fff' : 'var(--color-text-muted)'};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-family: var(--font-body);
    transition: all 0.3s ease;
  `;
    btnEn.onclick = () => onSwitch('en');

    const btnKo = document.createElement('button');
    btnKo.textContent = 'KR';
    btnKo.style.cssText = `
    background: ${currentLang === 'ko' ? 'var(--color-primary)' : 'transparent'};
    color: ${currentLang === 'ko' ? '#fff' : 'var(--color-text-muted)'};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-family: var(--font-body);
    transition: all 0.3s ease;
  `;
    btnKo.onclick = () => onSwitch('ko');

    container.appendChild(btnEn);
    container.appendChild(btnKo);

    return container;
};
