import { projects } from './data/projects.js';

const grid=document.querySelector('#project-grid');
if(grid){grid.innerHTML=projects.map(p=>`<a class="project-card ${p.id==='chillera'?'project-chillera':''}" href="${p.href}" aria-label="${p.title}" data-tilt><div class="project-image ${p.image?'':'project-placeholder'}">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async">`:''}</div><div class="project-copy"><div class="project-number">${p.number} / PROJEKT</div><h3>${p.title}</h3><p>${p.description}</p><span class="project-link">${p.href==='#'?'ROZBUDUJEMY WKRÓTCE →':'OTWÓRZ PROJEKT →'}</span></div></a>`).join('')}

const output=document.querySelector('#principle-output');
const copy={miejsce:'Miejsce → ludzie → działanie. OAZA zaczyna się od pierwszego SPOTU.',ludzie:'Ludzie → pomysł → partnerstwo. Każdy może wnieść umiejętność, sprzęt, kontakt albo energię.',razem:'Razem → projekt → efekt. Małe wkłady wielu osób budują rzeczy, których jedna osoba nie zrobi sama.'};
document.querySelectorAll('.principle').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.principle').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(output)output.textContent=copy[b.dataset.principle]}));

const partnerSection=document.querySelector('#partnerzy');
if(partnerSection){
  const heading=partnerSection.querySelector('.partner-heading h2');
  const lead=partnerSection.querySelector('.partner-heading p');
  if(heading) heading.innerHTML='Szukamy<br><span>partnerów.</span>';
  if(lead) lead.textContent='Masz miejsce, obiekt, sprzęt, markę albo ekipę, która chce zrobić z nami pierwszy OAZA SPOT? Szukamy partnerów do uruchomienia konkretnego miejsca i wydarzenia — nie kolejnej prezentacji.';
  const grid=partnerSection.querySelector('.slot-grid');
  if(grid){
    const featured=document.createElement('div');
    featured.className='partner-feature';
    featured.innerHTML='<div><span class="partner-kicker">SZUKAMY TERAZ · PARTNER #01</span><h3>OBIEKT / OŚRODEK<br><em>NA PIERWSZY SPOT</em></h3><p>Szukamy miejsca w okolicach Katowic, które chce zostać gospodarzem pierwszego wydarzenia Oazy. Muzyka, ludzie, Chillera i lokalny klimat. Partner daje przestrzeń i współtworzy format — my dokładamy projekt, komunikację i ekipę.</p></div><a class="button button-primary partner-mail" href="mailto:?subject=Partner%20dla%20%C5%9Al%C4%85skiej%20Oazy&body=Cze%C5%9B%C4%87%2C%20chc%C4%99%20porozmawia%C4%87%20o%20partnerstwie%20dla%20%C5%9Al%C4%85skiej%20Oazy.%20Mam%20miejsce%2Fobiekt%2Fzasoby%20i%20chc%C4%99%20zrobi%C4%87%20pierwszy%20SPOT.%20%0A%0AMoje%20dane%3A">ZAPROPONUJ MIEJSCE →</a>';
    grid.parentNode.insertBefore(featured,grid);
  }
}

const hero=document.querySelector('.oaza-hero-clean');
if(hero){
  const eyebrow=hero.querySelector('.eyebrow');
  const title=hero.querySelector('h1');
  const lead=hero.querySelector('p');
  const cta=hero.querySelector('.hero-link');
  if(eyebrow) eyebrow.textContent='ŚLĄSKA OAZA / OPEN CALL / 2026';
  if(title) title.innerHTML='Znajdźmy<br><span>miejsce.</span>';
  if(lead) lead.textContent='Śląska Oaza to otwarty projekt łączący ludzi, kulturę, technologię i lokalne miejsca. Teraz szukamy partnera, który chce zostać gospodarzem pierwszego OAZA SPOT.';
  if(cta){cta.textContent='SZUKAMY PARTNERA →';cta.href='#partnerzy';}
}

const projectsIntro=document.querySelector('.oaza-project-intro p');
if(projectsIntro) projectsIntro.textContent='Projekt #01 to CHILLERA. Oaza jest jego wspólnym zapleczem: miejsce, ludzie, wydarzenia, technologia i kolejne moduły budowane razem z partnerami.';

const reveal=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});reveal.forEach(x=>observer.observe(x))}else reveal.forEach(x=>x.classList.add('is-visible'));

if(window.matchMedia('(pointer:fine)').matches){document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--rx',`${((e.clientY-r.top)/r.height-.5)*-3}deg`);card.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*3}deg`)});card.addEventListener('pointerleave',()=>{card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')})})}

const progress=document.querySelector('#scroll-progress');
window.addEventListener('scroll',()=>{if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max>0?window.scrollY/max*100:0}%`},{passive:true});
