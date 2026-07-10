/* ===== 60 jours de français — Story Engine ===== */
/* Shared by all 5 chapters. The story is a capstone read for the last 5
   days of the course (Day 56 → chapter 1, ... Day 60 → chapter 5), not
   spread across all 60 days. To add a chapter:
   1. Drop chapter-N.html in this folder
   2. Add one entry to CHAPTERS below
   3. Add/update the matching `chapter` field on the day in data.js
   Never edit anything else in this file.
*/

// ── Chapter registry ──────────────────────────────────────────
// Add one object per chapter as you produce them. Mirrors the `chapter`
// field set per day in data.js (Days 56-60).
const CHAPTERS = [
  { n:1,  file:'chapter-1.html', title:'Un nouveau départ',               subtitle:'Élise arrive en France, valise à la main et cœur un peu inquiet.' },
  { n:2,  file:'chapter-2.html', title:'Dans la cuisine de Marie',         subtitle:'Marie enseigne à Élise la recette du bœuf bourguignon.' },
  { n:3,  file:'chapter-3.html', title:'Les courses',                      subtitle:'Élise découvre le marché et apprend à demander ce qu\'il faut.' },
  { n:4,  file:'chapter-4.html', title:'Chez les grands-parents',          subtitle:'Un dimanche en famille — les anciens, les histoires, et un peu de nostalgie.' },
  // chapter 5: add here when ready, same format
];
const TOTAL_CHAPTERS = 5;

// ── Vocab list ─────────────────────────────────────────────────
// Sorted longest-first so multi-word phrases match before single words.
const VOCAB = [
  ["être","to be"],["avoir","to have"],["faire","to do/make"],["aller","to go"],
  ["pouvoir","to be able to"],["vouloir","to want"],["devoir","to have to"],
  ["savoir","to know (facts)"],["voir","to see"],["prendre","to take"],
  ["mettre","to put"],["dire","to say"],["venir","to come"],["falloir","to be necessary"],
  ["aimer","to like/love"],["parler","to speak"],["penser","to think"],["croire","to believe"],
  ["trouver","to find/think"],["donner","to give"],["demander","to ask"],["rester","to stay"],
  ["passer","to pass/spend time"],["arriver","to arrive"],["sortir","to go out"],["partir","to leave"],
  ["comprendre","to understand"],["connaître","to know (people/places)"],["sentir","to feel/smell"],
  ["manger","to eat"],["boire","to drink"],["dormir","to sleep"],["travailler","to work"],
  ["habiter","to live (somewhere)"],["écouter","to listen"],["regarder","to watch/look"],
  ["attendre","to wait"],["essayer","to try"],["oublier","to forget"],["expliquer","to explain"],
  ["je","I"],["tu","you"],["il","he"],["elle","she"],["on","we/one"],["nous","we"],["vous","you"],
  ["ils","they"],["elles","they"],["moi","me"],["toi","you"],["lui","him"],
  ["le","the/him/it"],["la","the/her/it"],["les","the/them"],
  ["mon","my"],["ma","my"],["mes","my"],["ton","your"],["ta","your"],["tes","your"],
  ["son","his/her"],["sa","his/her"],["ses","his/her"],["notre","our"],["votre","your"],["leur","their"],
  ["ce","this/that"],["cette","this/that"],["ces","these"],["qui","who"],["que","that/what"],["quoi","what"],
  ["et","and"],["ou","or"],["mais","but"],["donc","so"],["parce que","because"],["alors","so/then"],
  ["aussi","also"],["puis","then"],["ensuite","next"],["comme","like/as"],["si","if"],["quand","when"],
  ["pourquoi","why"],["comment","how"],["combien","how much"],["lequel","which one"],["est-ce que","(question word)"],
  ["aujourd'hui","today"],["hier","yesterday"],["demain","tomorrow"],["maintenant","now"],["bientôt","soon"],
  ["toujours","always"],["jamais","never"],["souvent","often"],["parfois","sometimes"],["déjà","already"],
  ["encore","still/again"],["tout de suite","right away"],["beaucoup","a lot"],["un peu","a little"],
  ["assez","enough"],["trop","too much"],["peu","little"],["plus","more"],["moins","less"],
  ["tout","all"],["tous","all"],["toute","all"],["toutes","all"],["rien","nothing"],
  ["famille","family"],["maman","mom"],["papa","dad"],["frère","brother"],["sœur","sister"],
  ["fils","son"],["fille","daughter"],["mari","husband"],["femme","wife"],
  ["copain","boyfriend"],["copine","girlfriend"],["beau-père","father-in-law"],["belle-mère","mother-in-law"],
  ["beau-frère","brother-in-law"],["belle-sœur","sister-in-law"],["grands-parents","grandparents"],
  ["grand-père","grandfather"],["grand-mère","grandmother"],["enfant","child"],["bébé","baby"],
  ["oncle","uncle"],["tante","aunt"],["cousin","cousin"],["cousine","cousin"],
  ["amour","love"],["cœur","heart"],["ensemble","together"],["tu me manques","I miss you"],
  ["embrasser","to kiss/hug"],["câlin","hug/cuddle"],["soutenir","to support"],["partager","to share"],
  ["confiance","trust"],["dispute","argument"],["se réconcilier","to make up"],
  ["content","happy/glad"],["contente","happy/glad"],["heureux","happy"],["heureuse","happy"],
  ["triste","sad"],["fâché","angry"],["fâchée","angry"],["inquiet","worried"],["inquiète","worried"],
  ["fatigué","tired"],["fatiguée","tired"],["stressé","stressed"],["stressée","stressed"],
  ["surpris","surprised"],["surprise","surprised"],["fier","proud"],["fière","proud"],
  ["gêné","embarrassed"],["gênée","embarrassed"],
  ["penser que","to think that"],["croire que","to believe that"],["trouver que","to find that"],
  ["avoir envie de","to feel like"],["avoir besoin de","to need"],["avoir peur de","to be afraid of"],
  ["avoir hâte de","to look forward to"],["espérer","to hope"],["désolé","sorry"],["désolée","sorry"],
  ["s'excuser","to apologize"],["d'accord","agreed/okay"],["pas d'accord","disagree"],
  ["sûr","sure"],["sûre","sure"],["peut-être","maybe"],["vraiment","really"],["franchement","honestly"],
  ["honnêtement","honestly"],
  ["maison","house"],["appartement","apartment"],["chambre","bedroom"],["cuisine","kitchen"],
  ["salon","living room"],["travail","work"],["voiture","car"],["téléphone","phone"],["argent","money"],
  ["temps","time/weather"],["jour","day"],["semaine","week"],["week-end","weekend"],
  ["matin","morning"],["soir","evening"],["nuit","night"],
  ["repas","meal"],["dîner","dinner"],["déjeuner","lunch"],
  ["courses","groceries"],["faire les courses","to go grocery shopping"],
  ["ranger","to tidy"],["nettoyer","to clean"],["rentrer","to come home"],
  ["voyage","trip"],["vacances","vacation"],["rendez-vous","appointment/date"],
  ["projet","project/plan"],["problème","problem"],["solution","solution"],
  ["café","coffee"],["eau","water"],["restaurant","restaurant"],["inviter","to invite"],
  ["fête","party"],["anniversaire","birthday"],["cadeau","gift"],["boire un verre","to grab a drink"],
  ["cuisiner","to cook"],["recette","recipe"],["plat","dish"],["dessert","dessert"],
  ["santé","cheers"],["bon appétit","enjoy your meal"],["trinquer","to toast"],["partager un repas","to share a meal"],
  ["bon","good"],["bonne","good"],["mauvais","bad"],["mauvaise","bad"],
  ["grand","big/tall"],["grande","big/tall"],["petit","small"],["petite","small"],
  ["beau","beautiful"],["belle","beautiful"],["gentil","kind"],["gentille","kind"],
  ["drôle","funny"],["sympa","nice"],["difficile","hard"],["facile","easy"],
  ["important","important"],["importante","important"],["différent","different"],["différente","different"],
  ["pareil","same"],["pareille","same"],["nouveau","new"],["nouvelle","new"],
  ["vieux","old"],["vieille","old"],["jeune","young"],
  ["intéressant","interesting"],["intéressante","interesting"],
  ["ennuyeux","boring"],["ennuyeuse","boring"],["occupé","busy"],["occupée","busy"],
  ["libre","free"],["prêt","ready"],["prête","ready"],["normal","normal"],["normale","normal"],
  ["bizarre","weird"],["génial","great"],["géniale","great"]
].sort((a, b) => b[0].length - a[0].length);

// ── Vocab highlighter ──────────────────────────────────────────
// Note: deliberately avoids regex lookbehind ((?<!...)) — some browsers
// (older Safari/iOS, some Android webviews) throw a SyntaxError on it,
// which would silently kill the whole render before any story text is
// appended. A leading capture group + manual re-insertion does the same
// job and works everywhere.
function highlight(text, counts) {
  const placeholders = [];
  let result = text;
  for (const [term, en] of VOCAB) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(
      "(^|[^A-Za-zÀ-ÖØ-öø-ÿ'\u2019-])(" + escaped + ")(?![A-Za-zÀ-ÖØ-öø-ÿ'\u2019-])",
      "gi"
    );
    result = result.replace(re, (m, pre, word) => {
      counts[term] = counts[term] || { en, n: 0 };
      counts[term].n++;
      const idx = placeholders.length;
      placeholders.push('<span class="voc" title="' + en + '">' + word + '</span>');
      return pre + '\u0000' + idx + '\u0000';
    });
  }
  return result.replace(/\u0000(\d+)\u0000/g, (_, i) => placeholders[i]);
}

// ── Text-to-speech ─────────────────────────────────────────────
function buildAudio(story, blockEls, rateSelectId, playId, stopId, audionoteId, audiobarId) {
  const supported = 'speechSynthesis' in window;
  const audionote = document.getElementById(audionoteId);
  if (!supported) {
    const bar = document.getElementById(audiobarId);
    if (bar) bar.style.display = 'none';
    if (audionote) audionote.textContent = "La lecture audio n'est pas disponible dans ce navigateur.";
    return;
  }
  let frenchVoice = null;
  function pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    frenchVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('fr')) || null;
    if (!frenchVoice && voices.length && audionote) {
      audionote.textContent = "Aucune voix française trouvée — la lecture utilisera la voix par défaut.";
    }
  }
  pickVoice();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }

  let playing = false;

  function clearHighlight() {
    blockEls.forEach(el => el && el.classList.remove('playing'));
  }

  function speakBlock(i) {
    if (i >= story.length) { playing = false; clearHighlight(); return; }
    clearHighlight();
    if (blockEls[i]) blockEls[i].classList.add('playing');
    const utter = new SpeechSynthesisUtterance(story[i].fr);
    utter.lang = 'fr-FR';
    if (frenchVoice) utter.voice = frenchVoice;
    utter.rate = parseFloat(document.getElementById(rateSelectId).value);
    utter.onend = () => { if (playing) speakBlock(i + 1); };
    utter.onerror = () => { if (playing) speakBlock(i + 1); };
    window.speechSynthesis.speak(utter);
  }

  document.getElementById(playId).addEventListener('click', () => {
    window.speechSynthesis.cancel();
    playing = true;
    speakBlock(0);
  });

  document.getElementById(stopId).addEventListener('click', () => {
    playing = false;
    window.speechSynthesis.cancel();
    clearHighlight();
  });

  // Per-paragraph speak buttons
  blockEls.forEach((el, i) => {
    if (!el) return;
    const btn = document.createElement('button');
    btn.className = 'sjf-play-line';
    btn.textContent = '🔊';
    btn.title = 'Écouter ce paragraphe';
    btn.addEventListener('click', () => {
      window.speechSynthesis.cancel();
      playing = false;
      clearHighlight();
      el.classList.add('playing');
      const utter = new SpeechSynthesisUtterance(story[i].fr);
      utter.lang = 'fr-FR';
      if (frenchVoice) utter.voice = frenchVoice;
      utter.rate = parseFloat(document.getElementById(rateSelectId).value);
      utter.onend = () => el.classList.remove('playing');
      utter.onerror = () => el.classList.remove('playing');
      window.speechSynthesis.speak(utter);
    });
    el.appendChild(btn);
  });
}

// ── Main render function ───────────────────────────────────────
window.SJF = {
  render(root, chapter) {
    const { number, title, subtitle, story, nextChapterLabel } = chapter;
    const counts = {};

    // Head
    root.innerHTML = `
      <div class="sjf-head">
        <svg class="sjf-lamp" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v3" stroke="#D4A93E" stroke-width="1.4" stroke-linecap="round"/>
          <path d="M8 6h8l-1.5 6h-5L8 6z" stroke="#D4A93E" stroke-width="1.4" stroke-linejoin="round"/>
          <circle cx="12" cy="9" r="1.6" fill="#D4A93E"/>
          <path d="M9.5 12h5l1 8h-7l1-8z" stroke="#D4A93E" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>
        <p class="sjf-eyebrow">60 jours de français &middot; Chapitre ${number}</p>
        <h1 class="sjf-title">${title}</h1>
        <p class="sjf-sub">${subtitle}</p>
        <div class="sjf-dots" id="sjf-dots"></div>
      </div>

      <div class="sjf-audiobar" id="sjf-audiobar">
        <button id="sjf-play">▶ Écouter</button>
        <button id="sjf-stop">■ Arrêter</button>
        <span class="sjf-rate-label">Vitesse :</span>
        <select id="sjf-rate-select" class="sjf-rate-select">
          <option value="0.7">Lente</option>
          <option value="0.9" selected>Normale</option>
          <option value="1.1">Rapide</option>
        </select>
        <p class="sjf-audionote" id="sjf-audionote">Utilise la voix française de ton navigateur. Clique 🔊 à côté d'une phrase pour l'écouter seule.</p>
      </div>

      <div class="sjf-tabs">
        <button class="sjf-tab active" id="tab-fr">Français</button>
        <button class="sjf-tab" id="tab-en">English</button>
      </div>

      <div class="sjf-body">
        <div class="sjf-pane active" id="sjf-fr"></div>
        <div class="sjf-pane" id="sjf-en"></div>
      </div>

      <div class="sjf-recap">
        <h3>Vocabulaire de ce chapitre</h3>
        <p class="hint">Mots de ta liste apparus dans ce chapitre, avec le nombre d'occurrences.</p>
        <div class="sjf-grid" id="sjf-recap-grid"></div>
      </div>

      <div class="sjf-note">${nextChapterLabel || ''}</div>
    `;

    // Progress dots
    const dotsEl = document.getElementById('sjf-dots');
    for (let i = 1; i <= TOTAL_CHAPTERS; i++) {
      const d = document.createElement('div');
      d.className = 'sjf-dot' + (i <= number ? ' done' : '');
      dotsEl.appendChild(d);
    }
    const label = document.createElement('span');
    label.className = 'sjf-dots-label';
    label.textContent = `Chapitre ${number} sur ${TOTAL_CHAPTERS}`;
    dotsEl.appendChild(label);

    // Story rendering
    const frEl = document.getElementById('sjf-fr');
    const enEl = document.getElementById('sjf-en');
    const blockEls = [];

    story.forEach((block, i) => {
      const isDialogue = block.t === 'd';
      const cls = isDialogue ? 'sjf-d' : 'sjf-p';
      const speakerHTML = isDialogue ? `<span class="sjf-speaker">${block.s}</span>` : '';

      const frBlock = document.createElement('p');
      frBlock.className = cls;
      frBlock.innerHTML = speakerHTML + highlight(block.fr, counts);
      frEl.appendChild(frBlock);
      blockEls.push(frBlock);

      const enBlock = document.createElement('p');
      enBlock.className = cls;
      enBlock.innerHTML = speakerHTML + block.en;
      enEl.appendChild(enBlock);
    });

    // Tab switcher
    document.getElementById('tab-fr').addEventListener('click', function() {
      document.querySelectorAll('.sjf-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sjf-pane').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('sjf-fr').classList.add('active');
    });
    document.getElementById('tab-en').addEventListener('click', function() {
      document.querySelectorAll('.sjf-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sjf-pane').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('sjf-en').classList.add('active');
    });

    // Vocab recap grid
    const grid = document.getElementById('sjf-recap-grid');
    Object.entries(counts)
      .sort((a, b) => b[1].n - a[1].n)
      .forEach(([term, data]) => {
        const row = document.createElement('div');
        row.className = 'sjf-word';
        row.innerHTML = `<span><b>${term}</b> — ${data.en}</span><span class="count">×${data.n}</span>`;
        grid.appendChild(row);
      });

    // Audio
    buildAudio(story, blockEls, 'sjf-rate-select', 'sjf-play', 'sjf-stop', 'sjf-audionote', 'sjf-audiobar');
  }
};
