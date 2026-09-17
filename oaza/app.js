import { projects } from './data/projects.js';

const grid=document.querySelector('#project-grid');
if(grid){grid.innerHTML=projects.map(p=>`<a class="project-card ${p.id==='chillera'?'project-chillera':''}" href="${p.href}" aria-label="${p.title}" data-tilt><div class="project-image ${p.image?'':'project-placeholder'}">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async">`:''}</div><div class="project-copy"><div class="project-number">${p.number} / PROJEKT</div><h3>${p.title}</h3><p>${p.description}</p><span class="project-link">${p.href==='#'?'ROZBUDUJEMY WKRÓTCE →':'OTWÓRZ PROJEKT →'}</span></div></a>`).join('')}

const output=document.querySelector('#principle-output');
const copy={miejsce:'Miejsce → ludzie → działanie. OAZA zaczyna się od pierwszego SPOTU.',ludzie:'Ludzie → pomysł → partnerstwo. Każdy może wnieść umiejętność, sprzęt, kontakt albo energię.',razem:'Razem → projekt → efekt. Małe wkłady wielu osób budują rzeczy, których jedna osoba nie zrobi sama.'};
document.querySelectorAll('.principle').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.principle').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(output)output.textContent=copy[b.dataset.principle]}));

const style=document.createElement('style');
style.textContent=`
.partner-feature{position:relative;display:grid;grid-template-columns:1.35fr .65fr;gap:30px;align-items:end;margin:0 0 14px;padding:32px;border:1px solid rgba(215,169,71,.48);border-radius:24px;background:radial-gradient(circle at 85% 20%,rgba(145,213,193,.10),transparent 35%),linear-gradient(135deg,rgba(215,169,71,.07),rgba(255,255,255,.015));overflow:hidden}
.partner-feature:before{content:'OAZA SPOT';position:absolute;right:-8px;top:-35px;font:800 clamp(80px,14vw,180px)/1 'DM Sans',sans-serif;letter-spacing:-.08em;color:rgba(255,255,255,.025);pointer-events:none}
.partner-kicker{position:relative;z-index:1;display:block;color:#d7a947;font-size:9px;font-weight:800;letter-spacing:.2em;margin-bottom:14px}
.partner-feature h3{position:relative;z-index:1;font-family:'Playfair Display',Georgia,serif;font-size:clamp(34px,5vw,62px);line-height:.88;letter-spacing:-.05em;margin:0 0 16px}.partner-feature h3 em{font-style:normal;color:#91d5c1}.partner-feature p{position:relative;z-index:1;color:#aeb4ad;line-height:1.7;font-size:13px;max-width:680px;margin:0}.partner-feature .button{justify-self:end;position:relative;z-index:2;cursor:pointer;border:0}.partner-mail.copied{background:#91d5c1;color:#07100d}
@media(max-width:800px){.partner-feature{grid-template-columns:1fr;padding:24px}.partner-feature .button{justify-self:start}.partner-feature:before{font-size:80px}}
`;
document.head.appendChild(style);

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
    featured.innerHTML='<div><span class="partner-kicker">SZUKAMY TERAZ · PARTNER #01</span><h3>OBIEKT / OŚRODEK<br><em>NA PIERWSZY SPOT</em></h3><p>Szukamy miejsca w okolicach Katowic, które chce zostać gospodarzem pierwszego wydarzenia Oazy. Muzyka, ludzie, Chillera i lokalny klimat. Partner daje przestrzeń i współtworzy format — my dokładamy projekt, komunikację i ekipę.</p></div><button class="button button-primary partner-mail" type="button">SKOPIUJ WIADOMOŚĆ →</button>';
    grid.parentNode.insertBefore(featured,grid);
    const btn=featured.querySelector('.partner-mail');
    btn?.addEventListener('click',async()=>{
      const message='Cześć! Szukamy partnera dla Śląskiej Oazy — miejsca lub ośrodka w okolicach Katowic, który chce zostać gospodarzem pierwszego OAZA SPOT. Muzyka, lokalni twórcy, Chillera i wspólna komunikacja. Jeśli macie obiekt, który może wejść w taki format, odezwijcie się — chcemy porozmawiać o konkretnej realizacji.';
      try{await navigator.clipboard.writeText(message);btn.textContent='SKOPIOWANE ✓';btn.classList.add('copied');setTimeout(()=>{btn.textContent='SKOPIUJ WIADOMOŚĆ →';btn.classList.remove('copied')},2200)}catch{window.prompt('Skopiuj wiadomość dla partnera:',message)}});
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
