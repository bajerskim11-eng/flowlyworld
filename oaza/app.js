import { projects } from './data/projects.js';

const grid = document.querySelector('#project-grid');
if (grid) {
  grid.innerHTML = projects.map(project => `
    <a class="project-card" href="${project.href}" aria-label="${project.title}" data-tilt>
      <div class="project-image ${project.image ? '' : 'project-placeholder'}" ${project.image ? `style="background-image:url('${project.image}')"` : ''}></div>
      <div class="project-copy">
        <div class="project-number">${project.number} / PROJEKT</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="project-link">${project.href === '#' ? 'ROZBUDUJEMY WKRÓTCE →' : 'OTWÓRZ PROJEKT →'}</span>
      </div>
    </a>
  `).join('');
}

// Subtelny parallax hero — reaguje na ruch myszy, ale nie przeszkadza w nawigacji.
const hero = document.querySelector('#hero');
if (hero && window.matchMedia('(pointer:fine)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - .5);
    const y = (event.clientY / window.innerHeight - .5);
    hero.style.setProperty('--mx', `${x * 18}px`);
    hero.style.setProperty('--my', `${y * 12}px`);
  });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--mx', '0px');
    hero.style.setProperty('--my', '0px');
  });
}

// Interaktywna opowieść OAZY.
const principleOutput = document.querySelector('#principle-output');
const principleCopy = {
  miejsce: 'Miejsce → ludzie → działanie. OAZA zaczyna się od pierwszego SPOTU.',
  ludzie: 'Ludzie → pomysł → partnerstwo. Każdy może wnieść umiejętność, sprzęt, kontakt albo energię.',
  razem: 'Razem → projekt → efekt. Małe wkłady wielu osób budują rzeczy, których jedna osoba nie zrobi sama.'
};
document.querySelectorAll('.principle').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.principle').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    if (principleOutput) principleOutput.textContent = principleCopy[button.dataset.principle];
  });
});

// Pojawianie się sekcji podczas przewijania.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }), { threshold: .12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

// Delikatny tilt kart.
if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - .5) * -3;
      const ry = ((event.clientX - rect.left) / rect.width - .5) * 3;
      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

// Pasek postępu przewijania.
const progress = document.querySelector('#scroll-progress');
window.addEventListener('scroll', () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });
