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
 ['PARTNER AR','Technologia i wsparcie pilotażu terenowej gry Beboki AR.'],
 ['PARTNER HYPEAT','Integracja lokalnej gastronomii, odkrywania miejsc i programu festiwalu z Hypeat.'],
 ['SPONSOR GŁÓWNY','Finansowe wsparcie uruchomienia Festiwalu Śląskiego.'],
 ['WOLONTARIUSZE','Ludzie, którzy chcą pomóc przed wydarzeniem, w trakcie i przy demontażu.']
];

const story = document.createElement('section');
story.className = 'section story-section';
story.innerHTML = `
  <div class="label">03 / HISTORIA · BEBOKI · NOWA WARSTWA MIASTA</div>
  <div class="two-col">
    <div>
      <p class="story-kicker">MIEJSCE MA SWOJĄ HISTORIĘ</p>
      <h2>Nie chowamy<br>przeszłości.<br><em>Opowiadamy ją dalej.</em></h2>
    </div>
    <div>
      <p class="lead">Stadion Starej Gwardii nie jest pustą działką. To miejsce z historią sportu, ludzi i Katowic.</p>
      <p class="muted">Podczas festiwalu chcemy stworzyć prostą ścieżkę opowieści: archiwalne zdjęcia, wspomnienia mieszkańców, historię stadionu i dzielnicy oraz współczesne prace lokalnych twórców. Materiały historyczne będziemy zbierać i weryfikować wspólnie z lokalnymi instytucjami, historykami, studentami i mieszkańcami.</p>
    </div>
  </div>
  <div class="story-cards">
    <article><span>HISTORIA STADIONU</span><h3>Co było tutaj wcześniej?</h3><p>Archiwalia, fotografie, wspomnienia i opowieści o sporcie. Zamiast suchej tablicy — żywa historia miejsca.</p></article>
    <article><span>BEBOKI</span><h3>Przewodnicy po Śląsku</h3><p>Beboki prowadzą uczestników przez kolejne punkty festiwalu i pomagają odkrywać historie związane z miejscem.</p></article>
    <article><span>LOKALNI TWÓRCY</span><h3>Śląsk widziany dzisiaj</h3><p>Malarstwo, fotografia, film i muzyka pokazują, jak region wygląda oczami ludzi, którzy żyją tutaj teraz.</p></article>
  </div>
`;
const conceptGallery = document.querySelector('.concept-gallery');
const program = document.querySelector('.festival-program');
if (conceptGallery && program) program.parentNode.insertBefore(story, program);

const game = document.createElement('section');
game.className = 'section game-section dark-section';
game.innerHTML = `
  <div class="label">04 / BEBOKI AR × HYPEAT</div>
  <div class="two-col">
    <div><p class="story-kicker">FESTIWAL MA DRUGĄ WARSTWĘ</p><h2>Spacerujesz.<br>Odkrywasz.<br><em>Grasz.</em></h2></div>
    <div><p class="lead">Na terenie uruchamiamy pilotaż gry Beboki AR, a Hypeat łączymy z prawdziwymi punktami jedzenia i aktywności.</p><p class="muted">Uczestnik może odnajdywać Beboki, poznawać historię miejsca, wykonywać proste zadania i odkrywać lokalnych partnerów. To ma prowadzić ludzi po realnym terenie, a nie zamykać ich w telefonie.</p></div>
  </div>
  <div class="game-flow"><div><b>01</b><strong>WEJDŹ</strong><p>Odbierz mapę / uruchom grę.</p></div><div><b>02</b><strong>ODKRYJ</strong><p>Znajdź punkty i Beboki.</p></div><div><b>03</b><strong>POZNAJ</strong><p>Historia, artyści, sport i jedzenie.</p></div><div><b>04</b><strong>WSPIERAJ</strong><p>Odwiedź lokalnych partnerów Hypeat.</p></div></div>
`;
if (program) program.parentNode.insertBefore(game, program);

// HERO WIZUALNY: Beboki AR podczas Festiwalu Śląskiego.
// Obraz jest zapisany w repo jako base64 asset, dzięki czemu nie zależy od zewnętrznego hostingu.
(async()=>{
  try {
    const r=await fetch('/oaza/assets/images/stadion/beboki-ar-festiwal.webp.b64');
    if(!r.ok) throw new Error('asset');
    const b64=(await r.text()).trim();
    const visual=document.createElement('section');
    visual.className='section beboki-ar-visual';
    visual.innerHTML=`
      <div class="label">04A / BEBOKI AR W TERENIE</div>
      <div class="vision-head"><h2>Śląskie historie<br><em>wchodzą do gry.</em></h2><p>Tak chcemy połączyć prawdziwy teren z Bebokami AR: uczestnicy spacerują po festiwalu, odnajdują postacie i punkty, poznają historię miejsca oraz wykonują zadania.</p></div>
      <figure style="margin:0;overflow:hidden;border-radius:18px;background:#111;box-shadow:0 18px 50px rgba(0,0,0,.28)">
        <img src="data:image/webp;base64,${b64}" alt="Wizualizacja gry Beboki AR podczas Festiwalu Śląskiego na Stadionie Starej Gwardii" loading="lazy" style="display:block;width:100%;height:auto;aspect-ratio:3/2;object-fit:cover">
        <figcaption style="padding:14px 18px;font-size:.78rem;letter-spacing:.08em">WIZUALIZACJA KONCEPCJI · BEBOKI AR × FESTIWAL ŚLĄSKI</figcaption>
      </figure>`;
    if(program) program.parentNode.insertBefore(visual, program);
  } catch(e) { console.warn('Nie udało się załadować wizualizacji Beboki AR',e); }
})();

document.querySelector('#zones').innerHTML = zones.map(z=>`<article class="zone"><span>${z[0]} / ${z[1]}</span><h3>${z[2]}</h3><p>${z[3]}</p></article>`).join('');
document.querySelector('#timeline').innerHTML = phases.map(p=>`<article class="phase"><b>${p[0]}</b><div><strong>${p[1]}</strong><p>${p[2]}</p></div></article>`).join('');
document.querySelector('#slots').innerHTML = slots.map(s=>`<article class="slot"><span>OTWARTY SLOT</span><h3>${s[0]}</h3><p>${s[1]}</p><a href="#partnerzy">DOŁĄCZ →</a></article>`).join('');

document.querySelectorAll('.image-slot').forEach(slot=>{
  const src=slot.dataset.image;
  if(!src) return;
  const img=new Image();
  img.onload=()=>{slot.style.backgroundImage=`url("${src}")`;slot.classList.add('has-image');slot.querySelector('.image-instruction')?.remove()};
  img.onerror=()=>slot.classList.add('needs-image');
  img.src=src;
});
