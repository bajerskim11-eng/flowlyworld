import { projects } from './data/projects.js';

const grid=document.querySelector('#project-grid');
if(grid){grid.innerHTML=projects.map(p=>`<a class="project-card ${p.id==='chillera'?'project-chillera':''}" href="${p.href}" aria-label="${p.title}" data-tilt><div class="project-image ${p.image?'':'project-placeholder'}">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async">`:''}</div><div class="project-copy"><div class="project-number">${p.number} / PROJEKT</div><h3>${p.title}</h3><p>${p.description}</p><span class="project-link">${p.href==='#'?'ROZBUDUJEMY WKRÓTCE →':'OTWÓRZ PROJEKT →'}</span></div></a>`).join('')}

const output=document.querySelector('#principle-output');
const copy={miejsce:'Miejsce → ludzie → działanie. OAZA zaczyna się od pierwszego SPOTU.',ludzie:'Ludzie → pomysł → partnerstwo. Każdy może wnieść umiejętność, sprzęt, kontakt albo energię.',razem:'Razem → projekt → efekt. Małe wkłady wielu osób budują rzeczy, których jedna osoba nie zrobi sama.'};
document.querySelectorAll('.principle').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.principle').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(output)output.textContent=copy[b.dataset.principle]}));

const reveal=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});reveal.forEach(x=>observer.observe(x))}else reveal.forEach(x=>x.classList.add('is-visible'));

if(window.matchMedia('(pointer:fine)').matches){document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--rx',`${((e.clientY-r.top)/r.height-.5)*-3}deg`);card.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*3}deg`)});card.addEventListener('pointerleave',()=>{card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')})})}

const progress=document.querySelector('#scroll-progress');
window.addEventListener('scroll',()=>{if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max>0?window.scrollY/max*100:0}%`},{passive:true});
