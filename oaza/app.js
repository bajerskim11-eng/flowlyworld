import { projects } from './data/projects.js';

const CDN = {
  hero: 'https://cdn.shopify.com/s/files/1/1019/1903/1622/files/oaza-hero-katowice.jpg?v=1788111574',
  zones: 'https://cdn.shopify.com/s/files/1/1019/1903/1622/files/festiwal-strefy.png?v=1788111593',
  stage: 'https://cdn.shopify.com/s/files/1/1019/1903/1622/files/festiwal-saski-scena.png?v=1788111612',
  ar: 'https://cdn.shopify.com/s/files/1/1019/1903/1622/files/beboki-ar-festiwal.png?v=1788111629',
  program: 'https://cdn.shopify.com/s/files/1/1019/1903/1622/files/festiwal-program.png?v=1788111649'
};

const hero = document.querySelector('#hero');
if (hero) {
  hero.insertAdjacentHTML('afterbegin', `<div class="hero-real-image" aria-hidden="true"><img src="${CDN.hero}" alt="Śląska Oaza — skrzydła nad Katowicami"></div>`);
  const style = document.createElement('style');
  style.textContent = `.hero-real-image{position:absolute;inset:0;z-index:1;overflow:hidden}.hero-real-image img{width:100%;height:100%;object-fit:cover;object-position:center center;display:block;transform:scale(1.02);filter:saturate(.96) contrast(1.02)}.hero-real-image:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,10,9,.55) 0%,rgba(8,10,9,.18) 35%,rgba(8,10,9,.02) 62%,rgba(8,10,9,.18) 100%),linear-gradient(180deg,rgba(8,10,9,.04),rgba(8,10,9,.78) 100%)}.hero-content{z-index:8}.hero-wings,.spodek-mark{opacity:.04}.hero-floating-card{z-index:9}.oaza-visual-strip{width:min(1280px,calc(100% - 40px));margin:0 auto;display:grid;grid-template-columns:1.7fr 1fr;gap:12px}.oaza-visual-strip figure{margin:0;min-height:300px;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background:#101410;position:relative}.oaza-visual-strip img{width:100%;height:100%;min-height:300px;object-fit:cover;display:block}.oaza-visual-strip figcaption{position:absolute;left:18px;bottom:16px;padding:9px 12px;border-radius:999px;background:rgba(8,10,9,.72);backdrop-filter:blur(10px);font-size:10px;letter-spacing:.08em;color:#eee6d5}.oaza-visual-strip .crop img{object-position:72% center}@media(max-width:800px){.oaza-visual-strip{grid-template-columns:1fr}.hero-real-image:after{background:linear-gradient(180deg,rgba(8,10,9,.1),rgba(8,10,9,.84) 78%)}}`;
  document.head.appendChild(style);
}

const grid = document.querySelector('#project-grid');
if (grid) {
  const resolved = projects.map(project => ({
    ...project,
    image: project.id === 'stadion' ? CDN.zones : project.id === 'hypeat' ? CDN.stage : project.id === 'beboki' ? CDN.ar : project.image
  }));
  grid.innerHTML = resolved.map(project => `
    <a class="project-card" href="${project.href}" aria-label="${project.title}" data-tilt>
      <div class="project-image ${project.image ? '' : 'project-placeholder'}">
        ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" width="1200" height="900" onerror="this.closest('.project-image').classList.add('project-image-error');this.remove()">` : ''}
      </div>
      <div class="project-copy">
        <div class="project-number">${project.number} / PROJEKT</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="project-link">${project.href === '#' ? 'ROZBUDUJEMY WKRÓTCE →' : 'OTWÓRZ PROJEKT →'}</span>
      </div>
    </a>
  `).join('');
}

const intro = document.querySelector('#oaza');
if (intro && !document.querySelector('#oaza-visuals')) {
  const visual = document.createElement('div');
  visual.id = 'oaza-visuals';
  visual.className = 'oaza-visual-strip reveal';
  visual.innerHTML = `<figure><img src="${CDN.zones}" alt="Wizualizacja stref Festiwalu Śląskiego" loading="lazy" decoding="async"><figcaption>FESTIWAL ŚLĄSKI · PIERWSZY SPOT</figcaption></figure><figure class="crop"><img src="${CDN.ar}" alt="Beboki AR podczas Festiwalu Śląskiego" loading="lazy" decoding="async"><figcaption>BEBOKI AR · HISTORIA WCHODZI DO GRY</figcaption></figure>`;
  intro.appendChild(visual);
}

if (hero && window.matchMedia('(pointer:fine)').matches) {
  hero.addEventListener('pointermove', event => {
    const x = event.clientX / window.innerWidth - .5;
    const y = event.clientY / window.innerHeight - .5;
    hero.style.setProperty('--mx', `${x * 18}px`);
    hero.style.setProperty('--my', `${y * 12}px`);
  });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--mx', '0px');
    hero.style.setProperty('--my', '0px');
  });
}

const principleOutput = document.querySelector('#principle-output');
const principleCopy = {
  miejsce: 'Miejsce → ludzie → działanie. OAZA zaczyna się od pierwszego SPOTU.',
  ludzie: 'Ludzie → pomysł → partnerstwo. Każdy może wnieść umiejętność, sprzęt, kontakt albo energię.',
  razem: 'Razem → projekt → efekt. Małe wkłady wielu osób budują rzeczy, których jedna osoba nie zrobi sama.'
};
document.querySelectorAll('.principle').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.principle').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  if (principleOutput) principleOutput.textContent = principleCopy[button.dataset.principle];
}));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }), { threshold: .12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--rx', `${((event.clientY - rect.top) / rect.height - .5) * -3}deg`);
      card.style.setProperty('--ry', `${((event.clientX - rect.left) / rect.width - .5) * 3}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

const progress = document.querySelector('#scroll-progress');
window.addEventListener('scroll', () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });
