const zones = [
 ['01','RELAX','Leżaki + zieleń','Prosta strefa odpoczynku: leżaki, stoły, cień, roślinność i miejsce na zwykłe spotkania.'],
 ['02','GASTRO','Food trucki','Lokalne jedzenie, kawa i napoje. Partnerzy dostają miejsce, publiczność dostaje wybór.'],
 ['03','KULTURA','Galeria w pawilonach','Producenci pawilonów i modułów udostępniają swoje realizacje, a my wypełniamy je sztuką lokalnych twórców.'],
 ['04','MUZYKA','Scena lokalna','Koncerty młodych kapel, wokalistów, DJ-ów i lokalnych wykonawców. Bez bariery wejścia dla publiczności.'],
 ['05','FILM','Kino pod ruinami','Wieczorne pokazy niszowych filmów, krótkich metraży, dokumentów, teledysków i produkcji lokalnych.'],
 ['06','AWF','Miasteczko studenckie','Sport, integracja i aktywności przygotowywane wspólnie ze studentami AWF.'],
 ['07','SPOTKANIA','Namiot całoroczny','Prosta, ogrzewana zimą przestrzeń do spotkań, warsztatów i wydarzeń.'],
 ['08','BEBOKI','Śląski charakter','Beboki jako przewodnicy projektu i warstwa opowieści, która łączy kulturę miejsca z OAZĄ.']
];
const phases = [
 ['A','ZGODA I TEREN','Ustalamy z AWF zakres udostępnienia, termin, zasady bezpieczeństwa, dostęp do mediów i dokładne miejsce wydarzenia.'],
 ['B','KONCEPCJA 30 DNI','Wspólnie przygotowujemy prosty plan: scena, pawilony, namiot, food trucki, leżaki, wystawy, kino i aktywności AWF.'],
 ['C','PARTNERZY','Zamiast kupować wszystko, zbieramy partnerów rzeczowych i sponsorów. Każdy może objąć konkretny element projektu.'],
 ['D','NABÓR LOKALNY','Otwieramy nabór dla muzyków, malarzy, fotografów, rzeźbiarzy, filmowców, food trucków i studentów.'],
 ['E','MONTAŻ','W ostatnich dniach składamy teren: pawilony, namiot, scena, światło, leżaki, wystawy i oznaczenia.'],
 ['F','FESTIWAL ŚLĄSKI','Otwieramy miejsce dla ludzi. Pierwsza edycja jest testem: sprawdzamy, co działa i co warto zostawić na stałe.']
];
const slots = [
 ['PRODUCENT DOMÓW MODUŁOWYCH','Jeden moduł do pokazania na żywo. Może służyć jako punkt informacji, warsztat albo przestrzeń partnera.'],
 ['PRODUCENT PAWILONÓW','Pawilon wystawowy do czasowego ustawienia na terenie. W środku pokazujemy prace lokalnych artystów.'],
 ['PARTNER NAMIOTU','Namiot eventowy, najlepiej z możliwością ogrzewania i wykorzystania również jesienią oraz zimą.'],
 ['PARTNER LEŻAKÓW','Leżaki, stoły i proste wyposażenie strefy chill.'],
 ['PARTNER SCENY','Mała scena / podest dla lokalnych koncertów i wydarzeń.'],
 ['PARTNER DŹWIĘKU I ŚWIATŁA','Nagłośnienie, podstawowe oświetlenie i obsługa techniczna.'],
 ['FOOD TRUCKI I LOKALNA GASTRONOMIA','Zapraszamy lokalnych przedsiębiorców do stworzenia strefy gastro.'],
 ['ARTYŚCI I GALERIE','Malarze, fotografowie, rzeźbiarze, ilustratorzy i twórcy lokalni.'],
 ['FILMOWCY','Lokalne i niszowe produkcje na wieczorne pokazy.'],
 ['PARTNER SPORTOWY','Sprzęt i aktywności przygotowywane razem ze studentami AWF.'],
 ['PARTNER ZIELENI','Rośliny, donice, ziemia i proste elementy zielonej przestrzeni.'],
 ['SPONSOR GŁÓWNY','Finansowe wsparcie uruchomienia Festiwalu Śląskiego.'],
 ['WOLONTARIUSZE','Ludzie, którzy chcą pomóc przed wydarzeniem, w trakcie i przy demontażu.']
];

document.querySelector('#zones').innerHTML = zones.map(z=>`<article class="zone"><span>${z[0]} / ${z[1]}</span><h3>${z[2]}</h3><p>${z[3]}</p></article>`).join('');
document.querySelector('#timeline').innerHTML = phases.map(p=>`<article class="phase"><b>${p[0]}</b><div><strong>${p[1]}</strong><p>${p[2]}</p></div></article>`).join('');
document.querySelector('#slots').innerHTML = slots.map(s=>`<article class="slot"><span>OTWARTY SLOT</span><h3>${s[0]}</h3><p>${s[1]}</p><a href="/oaza/">DOŁĄCZ →</a></article>`).join('');

document.querySelectorAll('.image-slot').forEach(slot=>{
  const src=slot.dataset.image;
  if(!src) return;
  const img=new Image();
  img.onload=()=>{slot.style.backgroundImage=`url("${src}")`;slot.classList.add('has-image');slot.querySelector('.image-instruction')?.remove()};
  img.onerror=()=>slot.classList.add('needs-image');
  img.src=src;
});
