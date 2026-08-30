const zones = [
 ['01','RELAX','Zieleń + siedziska','Cień, ławki, leżaki, roślinność i miejsce na zwykłe spędzanie czasu.'],
 ['02','MUZYKA','Mała scena','Koncerty lokalnych wykonawców, jamy, DJ-e, kino i wydarzenia.'],
 ['03','SPORT','Aktywność','Proste strefy ruchu i rekreacji dostępne bez formalności.'],
 ['04','SPOTKANIA','Stół OAZY','Miejsce do siedzenia, rozmów i organizowania własnych inicjatyw.'],
 ['05','KULTURA','Beboki','Śląskie historie, sztuka i przyszła warstwa AR jako część miejsca.'],
 ['06','MŁODZI','Strefa twórców','Przestrzeń dla ludzi, którzy chcą coś zrobić, pokazać albo zorganizować.']
];
const phases = [
 ['A','POZNANIE TERENU','Lokalizacja, własność, dostęp, stan infrastruktury, ograniczenia i potrzeby.'],
 ['B','PROJEKT SPOTU','Układ stref, pierwsza infrastruktura, bezpieczeństwo i sposób użytkowania.'],
 ['C','PARTNERZY','Firmy i osoby obejmujące konkretne elementy realizacji.'],
 ['D','PIERWSZE URUCHOMIENIE','Minimalna wersja miejsca, pierwsze wydarzenie i sprawdzenie działania.']
];
const slots = [
 ['ARCHITEKT / PROJEKTANT','Koncepcja przestrzeni SPOTU.'],
 ['PARTNER INFRASTRUKTURY','Siedziska, zadaszenia, moduły i wyposażenie.'],
 ['PARTNER ŚWIATŁA','Oświetlenie i bezpieczne korzystanie po zmroku.'],
 ['PARTNER WYDARZEŃ','Pierwsze koncerty i wydarzenia lokalne.'],
 ['TWÓRCA / ARTYSTA','Sztuka, identyfikacja i elementy kultury.'],
 ['PARTNER ZIELENI','Projekt i wykonanie zielonej części SPOTU.'],
 ['TECHNOLOGIA','QR, mapa i przyszła warstwa AR.'],
 ['GŁÓWNY PARTNER SPOTU','Wsparcie powstania całego miejsca.']
];

document.querySelector('#zones').innerHTML = zones.map(z=>`<article class="zone"><span>${z[0]} / ${z[1]}</span><h3>${z[2]}</h3><p>${z[3]}</p></article>`).join('');
document.querySelector('#timeline').innerHTML = phases.map(p=>`<article class="phase"><b>${p[0]}</b><div><strong>${p[1]}</strong><p>${p[2]}</p></div></article>`).join('');
document.querySelector('#slots').innerHTML = slots.map(s=>`<article class="slot"><span>OTWARTY SLOT</span><h3>${s[0]}</h3><p>${s[1]}</p><a href="/oaza/">ZGŁOŚ SIĘ →</a></article>`).join('');

document.querySelectorAll('.image-slot').forEach(slot=>{
  const src=slot.dataset.image;
  if(!src) return;
  const img=new Image();
  img.onload=()=>{slot.style.backgroundImage=`url("${src}")`;slot.classList.add('has-image');slot.querySelector('.image-instruction')?.remove()};
  img.onerror=()=>slot.classList.add('needs-image');
  img.src=src;
});
