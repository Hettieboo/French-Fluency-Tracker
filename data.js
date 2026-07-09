// data.js — content for the 60-day French fluency tracker
// All study content lives here so script.js stays purely behavioral.

const VOCAB = {
  "Pronoms & déterminants": [
    ["je", "I"], ["tu", "you (informal)"], ["il", "he"], ["elle", "she"],
    ["on", "we/one (informal)"], ["nous", "we"], ["vous", "you (formal/plural)"],
    ["ils", "they (m)"], ["elles", "they (f)"], ["moi", "me"], ["toi", "you"],
    ["lui", "him"], ["le/la/les", "the / him-her-it / them"],
    ["mon/ma/mes", "my"], ["ton/ta/tes", "your"], ["son/sa/ses", "his/her"],
    ["notre", "our"], ["votre", "your (formal)"], ["leur", "their"],
    ["ce/cette/ces", "this/that/these"], ["qui", "who"], ["que", "that/what"], ["quoi", "what"]
  ],
  "Verbes essentiels": [
    ["être", "to be"], ["avoir", "to have"], ["faire", "to do/make"], ["aller", "to go"],
    ["pouvoir", "to be able to"], ["vouloir", "to want"], ["devoir", "to have to"],
    ["savoir", "to know (facts)"], ["voir", "to see"], ["prendre", "to take"],
    ["mettre", "to put"], ["dire", "to say"], ["venir", "to come"], ["falloir", "to be necessary"],
    ["aimer", "to like/love"], ["parler", "to speak"], ["penser", "to think"],
    ["croire", "to believe"], ["trouver", "to find/think"], ["donner", "to give"],
    ["demander", "to ask"], ["rester", "to stay"], ["passer", "to pass/spend time"],
    ["arriver", "to arrive"], ["sortir", "to go out"], ["partir", "to leave"],
    ["comprendre", "to understand"], ["connaître", "to know (people/places)"],
    ["sentir", "to feel/smell"], ["manger", "to eat"], ["boire", "to drink"],
    ["dormir", "to sleep"], ["travailler", "to work"], ["habiter", "to live (somewhere)"],
    ["écouter", "to listen"], ["regarder", "to watch/look"], ["attendre", "to wait"],
    ["essayer", "to try"], ["oublier", "to forget"], ["expliquer", "to explain"]
  ],
  "Connecteurs & questions": [
    ["et", "and"], ["ou", "or"], ["mais", "but"], ["donc", "so"],
    ["parce que", "because"], ["alors", "so/then"], ["aussi", "also"],
    ["puis", "then"], ["ensuite", "next"], ["comme", "like/as"], ["si", "if"],
    ["quand", "when"], ["pourquoi", "why"], ["comment", "how"], ["combien", "how much"],
    ["lequel", "which one"], ["est-ce que", "[question marker]"]
  ],
  "Temps & quantité": [
    ["aujourd'hui", "today"], ["hier", "yesterday"], ["demain", "tomorrow"],
    ["maintenant", "now"], ["bientôt", "soon"], ["toujours", "always"],
    ["jamais", "never"], ["souvent", "often"], ["parfois", "sometimes"],
    ["déjà", "already"], ["encore", "still/again"], ["tout de suite", "right away"],
    ["beaucoup", "a lot"], ["un peu", "a little"], ["assez", "enough"],
    ["trop", "too much"], ["peu", "little"], ["plus", "more"], ["moins", "less"],
    ["tout/tous/toute/toutes", "all"], ["rien", "nothing"]
  ],
  "Famille & relation": [
    ["famille", "family"], ["maman", "mom"], ["papa", "dad"], ["frère", "brother"],
    ["sœur", "sister"], ["fils", "son"], ["fille", "daughter"], ["mari", "husband"],
    ["femme", "wife"], ["copain/copine", "boyfriend/girlfriend"],
    ["beau-père/belle-mère", "father-in-law/mother-in-law"],
    ["beau-frère/belle-sœur", "brother-in-law/sister-in-law"],
    ["grands-parents", "grandparents"], ["grand-père/grand-mère", "grandfather/grandmother"],
    ["enfant", "child"], ["bébé", "baby"], ["oncle/tante", "uncle/aunt"],
    ["cousin/cousine", "cousin"], ["amour", "love"], ["cœur", "heart"],
    ["ensemble", "together"], ["tu me manques", "I miss you"], ["embrasser", "to kiss/hug"],
    ["câlin", "hug/cuddle"], ["soutenir", "to support"], ["partager", "to share"],
    ["confiance", "trust"], ["dispute", "argument"], ["se réconcilier", "to make up"]
  ],
  "Émotions & opinions": [
    ["content(e)", "happy/glad"], ["heureux/heureuse", "happy"], ["triste", "sad"],
    ["fâché(e)", "angry"], ["inquiet/inquiète", "worried"], ["fatigué(e)", "tired"],
    ["stressé(e)", "stressed"], ["surpris(e)", "surprised"], ["fier/fière", "proud"],
    ["gêné(e)", "embarrassed"], ["penser que", "to think that"], ["croire que", "to believe that"],
    ["trouver que", "to find that"], ["avoir envie de", "to feel like"],
    ["avoir besoin de", "to need"], ["avoir peur de", "to be afraid of"],
    ["avoir hâte de", "to look forward to"], ["espérer", "to hope"],
    ["désolé(e)", "sorry"], ["s'excuser", "to apologize"], ["d'accord", "agreed/okay"],
    ["pas d'accord", "disagree"], ["sûr(e)", "sure"], ["peut-être", "maybe"],
    ["vraiment", "really"], ["franchement", "honestly"], ["honnêtement", "honestly"]
  ],
  "Vie quotidienne & maison": [
    ["maison", "house"], ["appartement", "apartment"], ["chambre", "bedroom"],
    ["cuisine", "kitchen"], ["salon", "living room"], ["travail", "work"],
    ["voiture", "car"], ["téléphone", "phone"], ["argent", "money"], ["temps", "time/weather"],
    ["jour/semaine/week-end", "day/week/weekend"], ["matin/soir/nuit", "morning/evening/night"],
    ["repas/dîner/déjeuner", "meal/dinner/lunch"], ["courses", "groceries"],
    ["faire les courses", "to go grocery shopping"], ["ranger", "to tidy"],
    ["nettoyer", "to clean"], ["rentrer", "to come home"], ["voyage/vacances", "trip/vacation"],
    ["rendez-vous", "appointment/date"], ["projet", "project/plan"], ["problème", "problem"],
    ["solution", "solution"]
  ],
  "Nourriture & social": [
    ["manger", "to eat"], ["boire", "to drink"], ["café", "coffee"], ["eau", "water"],
    ["restaurant", "restaurant"], ["inviter", "to invite"], ["fête", "party"],
    ["anniversaire", "birthday"], ["cadeau", "gift"], ["boire un verre", "to grab a drink"],
    ["cuisiner", "to cook"], ["recette", "recipe"], ["plat", "dish"], ["dessert", "dessert"],
    ["santé", "cheers"], ["bon appétit", "enjoy your meal"], ["trinquer", "to toast"],
    ["partager un repas", "to share a meal"]
  ],
  "Descripteurs": [
    ["bon/bonne", "good"], ["mauvais(e)", "bad"], ["grand(e)", "big/tall"],
    ["petit(e)", "small"], ["beau/belle", "beautiful"], ["gentil(le)", "kind"],
    ["drôle", "funny"], ["sympa", "nice"], ["difficile/facile", "hard/easy"],
    ["important(e)", "important"], ["différent(e)", "different"], ["pareil(le)", "same"],
    ["nouveau/nouvelle", "new"], ["vieux/vieille", "old"], ["jeune", "young"],
    ["intéressant(e)", "interesting"], ["ennuyeux/ennuyeuse", "boring"],
    ["occupé(e)", "busy"], ["libre", "free"], ["prêt(e)", "ready"],
    ["normal(e)", "normal"], ["bizarre", "weird"], ["génial(e)", "great"]
  ]
};

const CHUNKS = [
  ["Je voudrais...", "I would like..."],
  ["J'aimerais...", "I would like (softer)..."],
  ["Est-ce que tu peux...", "Can you..."],
  ["Est-ce que tu pourrais...", "Could you..."],
  ["Qu'est-ce que tu en penses ?", "What do you think about it?"],
  ["Qu'est-ce que tu veux faire ?", "What do you want to do?"],
  ["Ça te dit de... ?", "Are you up for...?"],
  ["Ça dépend.", "It depends."],
  ["Je ne sais pas.", "I don't know."],
  ["Je suis désolé(e).", "I'm sorry."],
  ["Tu as raison.", "You're right."],
  ["Tu as tort.", "You're wrong."],
  ["Il faut que je...", "I need to..."],
  ["Il faut que tu...", "You need to..."],
  ["Je viens de...", "I just..."],
  ["Je vais...", "I'm going to..."],
  ["On verra.", "We'll see."],
  ["Tant mieux.", "So much the better."],
  ["Tant pis.", "Too bad / oh well."],
  ["Ça va ?", "How's it going?"],
  ["Comment ça s'est passé ?", "How did it go?"],
  ["Qu'est-ce qui s'est passé ?", "What happened?"],
  ["Tu me manques.", "I miss you."],
  ["Je tiens à toi.", "I care about you."],
  ["On peut en parler.", "We can talk about it."],
  ["Je comprends ce que tu veux dire.", "I understand what you mean."],
  ["Ce n'est pas grave.", "It's not a big deal."],
  ["Laisse-moi t'expliquer.", "Let me explain."],
  ["Je suis fier/fière de toi.", "I'm proud of you."],
  ["Félicitations !", "Congratulations!"],
  ["Bon courage.", "Good luck / hang in there."],
  ["Prends soin de toi.", "Take care of yourself."],
  ["À tout à l'heure.", "See you soon (later today)."],
  ["On se voit quand ?", "When are we seeing each other?"],
  ["Qu'est-ce qu'on mange ce soir ?", "What are we eating tonight?"],
  ["Tu as bien dormi ?", "Did you sleep well?"],
  ["Comment s'est passée ta journée ?", "How was your day?"],
  ["J'ai besoin de...", "I need..."],
  ["Ça m'énerve.", "It annoys me."],
  ["Ça me fait plaisir.", "It makes me happy."]
];

const PRONUNCIATION_PATTERNS = [
  {
    name: "Voyelles nasales (an/en/on/in/un)",
    hint: "Don't pronounce the n/m as a consonant — push air out your nose and let it fade.",
    examples: [["maman", "mah-mahn"], ["enfant", "ahn-fahn"], ["demain", "duh-mahn"], ["comment", "koh-mahn"], ["combien", "kohn-byahn"], ["ensemble", "ahn-sahnbl"]]
  },
  {
    name: "Le R français",
    hint: "Back-of-throat sound, almost a soft gargle — not the tip-of-tongue English R.",
    examples: [["rester", "rehs-tay"], ["regarder", "ruh-gar-day"], ["frère", "frehr"], ["grand-père", "grahn-pehr"]]
  },
  {
    name: '"eu / œu"',
    hint: 'Round your lips like saying "oh," but say "eh" instead.',
    examples: [["sœur", "suhr"], ["cœur", "kuhr"], ["heureux", "uh-ruh"], ["je veux", "zhuh vuh"]]
  },
  {
    name: '"ille"',
    hint: 'Sounds like "ee-y," not "ill."',
    examples: [["fille", "fee-y"], ["famille", "fa-mee-y"], ["gentille", "zhahn-tee-y"]]
  },
  {
    name: "Lettres finales muettes",
    hint: "The spelling looks longer than the sound actually is.",
    examples: [["beaucoup", "boh-koo"], ["toujours", "too-zhoor"], ["vous êtes", "voo-zet"]]
  },
  {
    name: '"u" vs "ou"',
    hint: 'Genuinely different vowels — tight lips-forward "ew" vs. rounder "oo."',
    examples: [["tu", "tew"], ["sûr", "sewr"], ["tout", "too"], ["sortir", "sor-teer"]]
  }
];

const BLOCKS = [
  {
    range: [1, 10],
    title: "Présent — fondations",
    grammar: "Présent: être, avoir, faire, aller, pouvoir, vouloir + regular -er pattern",
    vocabFocus: "Pronoms, famille, émotions de base",
    prompts: [
      "Comment tu vas aujourd'hui ? Qu'est-ce que tu fais ce soir ?",
      "Décris un membre de ta famille avec être + un adjectif.",
      "Qu'est-ce que tu veux faire ce week-end ?",
      "Qu'est-ce que tu peux faire pour aider aujourd'hui ?",
      "Raconte ta journée en 3 phrases avec être/avoir/faire."
    ]
  },
  {
    range: [11, 20],
    title: "Présent — maîtrise",
    grammar: "Ajout: savoir, venir, voir, prendre, dire, mettre, connaître, il faut",
    vocabFocus: "Temps/quantité, opinions, descripteurs",
    prompts: [
      "Qu'est-ce que tu penses de ça ?",
      "Qu'est-ce qu'il faut que tu fasses cette semaine ?",
      "Tu connais bien cette personne ?",
      "Enregistre un monologue de 2 minutes sur ta semaine."
    ]
  },
  {
    range: [21, 35],
    title: "Passé composé — raconter ce qui s'est passé",
    grammar: "Passé composé avec avoir, puis les verbes avec être (aller, venir, arriver, partir, rester, sortir)",
    vocabFocus: "Vie quotidienne, connecteurs de récit (puis, ensuite, alors)",
    prompts: [
      "Qu'est-ce que tu as fait aujourd'hui ?",
      "Comment s'est passée ta journée ?",
      "Raconte un événement récent en famille avec avoir + être.",
      "Qu'est-ce qui s'est passé hier soir ?"
    ]
  },
  {
    range: [36, 50],
    title: "Futur proche & impératif",
    grammar: "aller + infinitif, impératif, venir de + infinitif",
    vocabFocus: "Projets, demandes, affection",
    prompts: [
      "Qu'est-ce qu'on va faire ce week-end ?",
      "Demande quelque chose avec l'impératif (viens, attends, dis-moi).",
      "Je viens de... — décris ce que tu viens de faire.",
      "Qu'est-ce que tu vas faire pour [occasion familiale] ?"
    ]
  },
  {
    range: [51, 55],
    title: "Conditionnel — formules d'adoucissement",
    grammar: "je voudrais, tu pourrais, j'aimerais, ça serait (phrases figées, pas de tableau complet)",
    vocabFocus: "Désaccord, réparation (ce n'est pas grave, on peut en parler)",
    prompts: [
      "Transforme une demande directe en demande adoucie avec « tu pourrais ».",
      "Pratique un désaccord doux avec « je ne suis pas d'accord, mais... »."
    ]
  },
  {
    range: [56, 60],
    title: "Consolidation & vraie conversation",
    grammar: "Aucune nouvelle structure — intégration de tout",
    vocabFocus: "Tout le vocabulaire des blocs précédents",
    prompts: [
      "Enregistre un monologue de 2 minutes avec présent, passé composé, futur proche, et une formule au conditionnel.",
      "Vraie conversation de 10+ minutes sans anglais pendant les 5 premières minutes.",
      "Compare ton enregistrement du Jour 1 à aujourd'hui."
    ]
  }
];

// Reusable present-tense conjugation tables, referenced by day entries below.
const CONJUGATIONS = {
  etre:      { title: "être (présent)", meaning: "to be", rows: [["je", "suis"], ["tu", "es"], ["il / elle / on", "est"], ["nous", "sommes"], ["vous", "êtes"], ["ils / elles", "sont"]] },
  avoir:     { title: "avoir (présent)", meaning: "to have", rows: [["j'", "ai"], ["tu", "as"], ["il / elle / on", "a"], ["nous", "avons"], ["vous", "avez"], ["ils / elles", "ont"]] },
  faire:     { title: "faire (présent)", meaning: "to do / to make", rows: [["je", "fais"], ["tu", "fais"], ["il / elle / on", "fait"], ["nous", "faisons"], ["vous", "faites"], ["ils / elles", "font"]] },
  aller:     { title: "aller (présent)", meaning: "to go", rows: [["je", "vais"], ["tu", "vas"], ["il / elle / on", "va"], ["nous", "allons"], ["vous", "allez"], ["ils / elles", "vont"]] },
  pouvoir:   { title: "pouvoir (présent)", meaning: "to be able to / can", rows: [["je", "peux"], ["tu", "peux"], ["il / elle / on", "peut"], ["nous", "pouvons"], ["vous", "pouvez"], ["ils / elles", "peuvent"]] },
  vouloir:   { title: "vouloir (présent)", meaning: "to want", rows: [["je", "veux"], ["tu", "veux"], ["il / elle / on", "veut"], ["nous", "voulons"], ["vous", "voulez"], ["ils / elles", "veulent"]] },
  savoir:    { title: "savoir (présent)", meaning: "to know (a fact / how to do something)", rows: [["je", "sais"], ["tu", "sais"], ["il / elle / on", "sait"], ["nous", "savons"], ["vous", "savez"], ["ils / elles", "savent"]] },
  venir:     { title: "venir (présent)", meaning: "to come", rows: [["je", "viens"], ["tu", "viens"], ["il / elle / on", "vient"], ["nous", "venons"], ["vous", "venez"], ["ils / elles", "viennent"]] },
  voir:      { title: "voir (présent)", meaning: "to see", rows: [["je", "vois"], ["tu", "vois"], ["il / elle / on", "voit"], ["nous", "voyons"], ["vous", "voyez"], ["ils / elles", "voient"]] },
  prendre:   { title: "prendre (présent)", meaning: "to take", rows: [["je", "prends"], ["tu", "prends"], ["il / elle / on", "prend"], ["nous", "prenons"], ["vous", "prenez"], ["ils / elles", "prennent"]] },
  dire:      { title: "dire (présent)", meaning: "to say / to tell", rows: [["je", "dis"], ["tu", "dis"], ["il / elle / on", "dit"], ["nous", "disons"], ["vous", "dites"], ["ils / elles", "disent"]] },
  mettre:    { title: "mettre (présent)", meaning: "to put / to place", rows: [["je", "mets"], ["tu", "mets"], ["il / elle / on", "met"], ["nous", "mettons"], ["vous", "mettez"], ["ils / elles", "mettent"]] },
  connaitre: { title: "connaître (présent)", meaning: "to know (a person or place)", rows: [["je", "connais"], ["tu", "connais"], ["il / elle / on", "connaît"], ["nous", "connaissons"], ["vous", "connaissez"], ["ils / elles", "connaissent"]] },
  falloir:   { title: "falloir (présent)", meaning: "to be necessary / must", rows: [["il (impersonnel)", "faut"]], note: "Une seule forme possible — toujours « il faut », jamais conjugué pour je/tu/etc." },
  parlerEr:  { title: "verbes en -er (modèle : parler)", meaning: "to speak — pattern for all regular -er verbs", rows: [["je", "parle"], ["tu", "parles"], ["il / elle / on", "parle"], ["nous", "parlons"], ["vous", "parlez"], ["ils / elles", "parlent"]] },
  impTu:     { title: "impératif — forme « tu »", meaning: "giving commands or requests (informal)", rows: [["(tu) →", "Viens !"], ["(tu) →", "Attends !"], ["(tu) →", "Dis-moi !"], ["(tu) →", "Fais !"]], note: "On enlève le pronom sujet. Pour les verbes en -er, on enlève aussi le « s » final (tu regardes → Regarde !)." },
  impNousVous: { title: "impératif — formes « nous/vous »", meaning: "giving commands or requests (we / formal you)", rows: [["(nous) →", "Allons-y !"], ["(vous) →", "Venez !"]] },
  condChunks: { title: "Formes utiles au conditionnel", meaning: "softening requests — would like / could", rows: [["je", "voudrais"], ["j'", "aimerais"], ["tu", "pourrais"], ["ça", "serait"]], note: "On apprend seulement ces formes comme blocs fixes, pas toute la conjugaison du conditionnel." }
};

// ============================================================
// EXAMPLE SENTENCES — 4 per day, verbs strictly sequenced
// Only verbs taught up to that day appear in these sentences.
// ============================================================
const SENTENCES = {
  1:  [["Je suis content(e) aujourd'hui.", "I'm happy today."], ["Tu es ma sœur.", "You're my sister."], ["Il est à la maison.", "He's at home."], ["Nous sommes ensemble.", "We're together."]],
  2:  [["J'ai un frère et une sœur.", "I have a brother and a sister."], ["Tu as faim ?", "Are you hungry?"], ["Elle a mon numéro.", "She has my number."], ["Nous avons une belle famille.", "We have a beautiful family."]],
  3:  [["Mon frère est grand.", "My brother is tall."], ["Ma sœur a un bébé.", "My sister has a baby."], ["Son fils est petit.", "Her son is small."], ["Notre famille est importante pour moi.", "Our family is important to me."]],
  4:  [["Je fais la cuisine ce soir.", "I'm cooking tonight."], ["Tu fais quoi là ?", "What are you doing?"], ["Maman fait tout pour nous.", "Mom does everything for us."], ["Nous faisons les courses ensemble.", "We do the shopping together."]],
  5:  [["Je vais chez maman ce soir.", "I'm going to mom's tonight."], ["Tu vas bien ?", "Are you doing well?"], ["Mon mari va au travail.", "My husband goes to work."], ["Nous allons chez ma fille.", "We're going to my daughter's."]],
  6:  [["Mon beau-père fait la cuisine le dimanche.", "My father-in-law cooks on Sundays."], ["Nous allons chez les grands-parents ce week-end.", "We're going to grandma and grandpa's this weekend."], ["Ma belle-mère fait tout pour sa famille.", "My mother-in-law does everything for her family."], ["Je fais ça pour mon beau-frère.", "I'm doing this for my brother-in-law."]],
  7:  [["Je peux t'écouter si tu veux.", "I can listen to you if you want."], ["Tu peux me dire la vérité.", "You can tell me the truth."], ["Nous pouvons être heureux ensemble.", "We can be happy together."], ["Elle peut être triste parfois.", "She can be sad sometimes."]],
  8:  [["Je veux être avec toi.", "I want to be with you."], ["Tu veux un câlin ?", "Do you want a hug?"], ["Il veut parler — il est fâché.", "He wants to talk — he's angry."], ["Nous voulons être ensemble ce soir.", "We want to be together tonight."]],
  9:  [["Tu peux parler, je veux t'écouter.", "You can talk, I want to listen."], ["Je veux travailler, mais je peux aussi rester.", "I want to work, but I can stay too."], ["D'accord, je peux regarder ça avec toi.", "Okay, I can look at that with you."], ["Peut-être que tu peux m'expliquer ?", "Maybe you can explain to me?"]],
  10: [["Je suis fier(e) de toi et j'ai beaucoup de chance.", "I'm proud of you and I'm very lucky."], ["Tu peux tout faire quand tu veux vraiment.", "You can do anything when you really want to."], ["Nous allons bien et nous faisons de notre mieux.", "We're doing well and we're doing our best."], ["Elle peut être heureuse si elle veut.", "She can be happy if she wants."]],
  11: [["Je sais que tu es là pour moi.", "I know you're here for me."], ["Tu sais parler français — c'est bien !", "You know how to speak French — that's great!"], ["Je sais que demain sera mieux.", "I know tomorrow will be better."], ["Vous savez ce que vous voulez faire aujourd'hui ?", "Do you know what you want to do today?"]],
  12: [["Tu viens souvent ici — j'aime ça.", "You come here often — I like that."], ["Elle vient nous voir parfois le week-end.", "She sometimes comes to see us on the weekend."], ["Ils viennent toujours à l'heure.", "They always come on time."], ["Tu viens avec moi ?", "Are you coming with me?"]],
  13: [["Tu sais quand ils viennent ?", "Do you know when they're coming?"], ["Je viens parce que tu me manques beaucoup.", "I'm coming because I miss you a lot."], ["Elle sait que tu viens — elle est très contente.", "She knows you're coming — she's very happy."], ["Nous venons assez souvent pour voir la famille.", "We come often enough to see the family."]],
  14: [["Je vois beaucoup ma famille en ce moment.", "I see my family a lot right now."], ["Tu vois ce que je veux dire ?", "Do you see what I mean?"], ["Nous voyons trop peu nos amis.", "We see our friends too little."], ["Il voit sa fille plus souvent maintenant.", "He sees his daughter more often now."]],
  15: [["Je prends le temps de t'écouter.", "I take the time to listen to you."], ["Je pense que tu prends la bonne décision.", "I think you're making the right decision."], ["Elle prend soin de toute la famille.", "She takes care of the whole family."], ["Tu prends un café avec moi ?", "Will you have a coffee with me?"]],
  16: [["Je vois que tu prends ça bien.", "I see that you're taking it well."], ["J'ai envie de te voir — tu peux venir ?", "I feel like seeing you — can you come?"], ["Elle voit que j'ai besoin d'aide.", "She sees that I need help."], ["J'ai peur de prendre la mauvaise décision.", "I'm afraid of making the wrong decision."]],
  17: [["Je dis toujours ce que je pense.", "I always say what I think."], ["Il dit que c'est difficile, mais c'est un grand homme.", "He says it's difficult, but he's a great man."], ["Tu dis que tu es fatigué(e) — c'est normal.", "You say you're tired — that's normal."], ["Elle dit la vérité — c'est beau.", "She tells the truth — that's beautiful."]],
  18: [["Je mets du temps à comprendre, mais je veux essayer.", "I take time to understand, but I want to try."], ["Tu mets beaucoup d'amour dans tout ce que tu fais.", "You put a lot of love in everything you do."], ["Il met la table — il est très gentil.", "He's setting the table — he's very kind."], ["Elle met les enfants au lit — ce n'est pas facile !", "She's putting the kids to bed — it's not easy!"]],
  19: [["Je connais ta famille depuis longtemps.", "I've known your family for a long time."], ["Il faut parler quand quelque chose est différent.", "We need to talk when something is different."], ["Tu connais quelqu'un de nouveau ici ?", "Do you know anyone new here?"], ["Il faut être honnête — c'est important.", "We need to be honest — it's important."]],
  20: [["Je sais ce que je veux et je viens te le dire.", "I know what I want and I'm coming to tell you."], ["Il faut prendre soin l'un de l'autre.", "We need to take care of each other."], ["Tu vois combien je tiens à toi ?", "Do you see how much I care about you?"], ["Je connais bien cette famille — ils sont tous importants pour moi.", "I know this family well — they're all important to me."]],
  21: [["J'ai parlé avec maman hier soir.", "I spoke with mom last night."], ["Tu as mangé ? La cuisine est dans le salon.", "Did you eat? The food is in the living room."], ["Nous avons regardé un film dans la chambre.", "We watched a film in the bedroom."], ["Elle a travaillé tard — la maison est calme.", "She worked late — the house is quiet."]],
  22: [["J'ai fait les courses après le travail.", "I did the shopping after work."], ["Tu as eu un problème avec ta voiture ?", "Did you have a problem with your car?"], ["Il a pris son téléphone et il a dit au revoir.", "He took his phone and said goodbye."], ["Elle a vu que nous avons besoin d'argent.", "She saw that we need money."]],
  23: [["Qu'est-ce que tu as fait ce week-end ?", "What did you do this weekend?"], ["Tu as bien dormi cette nuit ?", "Did you sleep well last night?"], ["Vous avez passé une bonne semaine ?", "Did you have a good week?"], ["Qu'est-ce qu'elle a dit hier matin ?", "What did she say yesterday morning?"]],
  24: [["Je suis allé(e) faire les courses ce matin.", "I went grocery shopping this morning."], ["Ma fille est venue dîner hier soir.", "My daughter came for dinner last night."], ["Tu es allé(e) chez ta mère ?", "Did you go to your mother's?"], ["Ils sont venus nous voir — on a bien mangé.", "They came to see us — we ate well."]],
  25: [["Il est arrivé juste quand j'ai fini de ranger.", "He arrived just as I finished tidying."], ["Elle est partie tôt ce matin sans nettoyer.", "She left early this morning without cleaning."], ["Tu es arrivé(e) à quelle heure hier soir ?", "What time did you arrive last night?"], ["Je suis parti(e) après lui — la maison était propre.", "I left after him — the house was clean."]],
  26: [["Ils sont arrivés de leur voyage hier soir.", "They arrived from their trip last night."], ["Je suis allé(e) les chercher — ils sont venus avec moi.", "I went to pick them up — they came with me."], ["Tu es parti(e) en vacances sans nous dire au revoir !", "You left on vacation without saying goodbye to us!"], ["Elle est venue nous rejoindre — on a passé un bon moment.", "She came to join us — we had a good time."]],
  27: [["Je suis resté(e) à la maison — c'était la bonne solution.", "I stayed at home — it was the right solution."], ["Tu es sorti(e) avec qui ce soir ?", "Who did you go out with tonight?"], ["Elle est restée avec les enfants — pas de problème.", "She stayed with the children — no problem."], ["Ils sont sortis trouver une solution ensemble.", "They went out to find a solution together."]],
  28: [["Elle est allée faire les courses et elle est rentrée tard.", "She went grocery shopping and came home late."], ["Ils sont restés dîner — nous avons bien mangé ensemble.", "They stayed for dinner — we ate well together."], ["Elles sont parties ensemble après le repas.", "They left together after the meal."], ["Elle est venue me voir et elle a tout compris.", "She came to see me and she understood everything."]],
  29: [["J'ai fait la cuisine et ma fille est venue me rejoindre.", "I cooked and my daughter came to join me."], ["Tu es parti(e) mais tu as oublié ton téléphone.", "You left but you forgot your phone."], ["Elle est restée et on a parlé de tout.", "She stayed and we talked about everything."], ["Ils sont allés au restaurant et ils ont bien mangé.", "They went to the restaurant and they ate well."]],
  30: [["J'ai appelé maman, puis je suis allé(e) la voir.", "I called mom, then I went to see her."], ["Il est arrivé, ensuite on a mangé ensemble.", "He arrived, then we ate together."], ["Elle était fatiguée, alors elle est restée.", "She was tired, so she stayed."], ["J'ai rangé, puis j'ai cuisiné, ensuite on a dîné.", "I tidied, then I cooked, then we had dinner."]],
  31: [["J'ai parlé avec tout le monde hier.", "I spoke with everyone yesterday."], ["Tu es venu(e) — c'était vraiment bien.", "You came — it was really great."], ["Elle a fait de son mieux, puis elle est partie.", "She did her best, then she left."], ["Nous avons passé un bon moment ensemble.", "We had a good time together."]],
  32: [["J'ai eu une bonne journée — j'ai vu ma famille.", "I had a good day — I saw my family."], ["Tu es allé(e) travailler, puis tu es rentré(e).", "You went to work, then you came home."], ["Elle a dit quelque chose d'important hier soir.", "She said something important last night."], ["Ils sont restés, ensuite ils sont partis tard.", "They stayed, then they left late."]],
  33: [["Nous sommes allés chez les grands-parents dimanche.", "We went to the grandparents' on Sunday."], ["J'ai fait la cuisine et tout le monde a mangé ensemble.", "I cooked and everyone ate together."], ["Elle est venue, alors j'ai été vraiment content(e).", "She came, so I was really happy."], ["Ils ont parlé pendant des heures — c'était bien.", "They talked for hours — it was great."]],
  34: [["J'ai vu que tu as fait de gros efforts.", "I saw that you made a real effort."], ["Elle est restée parce qu'elle voulait aider.", "She stayed because she wanted to help."], ["Nous avons pris le temps — c'est important.", "We took the time — it's important."], ["Tu es parti(e), puis tu es revenu(e).", "You left, then you came back."]],
  35: [["Je suis allé(e) les voir, puis on a mangé ensemble.", "I went to see them, then we ate together."], ["Elle a tout fait pour nous — je le sais.", "She did everything for us — I know it."], ["Tu es venu(e), tu es resté(e), et tu es parti(e) tard.", "You came, you stayed, and you left late."], ["J'ai parlé, il a écouté, alors on a trouvé une solution.", "I talked, he listened, so we found a solution."]],
  36: [["Je vais manger avec ma famille ce soir.", "I'm going to eat with my family tonight."], ["Tu vas boire quelque chose ? J'ai de l'eau et du café.", "Are you going to drink something? I have water and coffee."], ["Il va faire la cuisine — c'est son tour.", "He's going to cook — it's his turn."], ["Nous allons passer un bon moment ensemble.", "We're going to have a good time together."]],
  37: [["Je vais inviter toute la famille pour l'anniversaire.", "I'm going to invite the whole family for the birthday."], ["Tu vas venir au restaurant avec nous ?", "Are you going to come to the restaurant with us?"], ["Elle va apporter un cadeau pour la fête.", "She's going to bring a gift to the party."], ["Nous allons trinquer pour ce moment spécial.", "We're going to toast to this special moment."]],
  38: [["Qu'est-ce qu'on va manger ce soir ?", "What are we going to eat tonight?"], ["Je vais cuisiner quelque chose de bon pour tout le monde.", "I'm going to cook something good for everyone."], ["Ils vont inviter des amis — ça va être bien.", "They're going to invite friends — it's going to be great."], ["Tu vas boire un café avec moi ?", "Are you going to have a coffee with me?"]],
  39: [["Viens manger avec nous ce soir !", "Come eat with us tonight!"], ["Dis-moi ce que tu veux boire.", "Tell me what you want to drink."], ["Attends-moi — j'arrive tout de suite.", "Wait for me — I'm coming right away."], ["Fais attention en cuisinant.", "Be careful while cooking."]],
  40: [["Allons-y — tout le monde nous attend !", "Let's go — everyone's waiting for us!"], ["Venez dîner samedi — ce sera bon.", "Come for dinner Saturday — it will be good."], ["Allons manger quelque chose ensemble.", "Let's go eat something together."], ["Venez trinquer avec nous — santé !", "Come toast with us — cheers!"]],
  41: [["Appelle-moi quand tu arrives, s'il te plaît.", "Call me when you arrive, please."], ["Dis-moi la vérité — je peux tout entendre.", "Tell me the truth — I can handle anything."], ["Reste encore un peu avec nous.", "Stay a little longer with us."], ["Allons-y ensemble — on va bien manger.", "Let's go together — we're going to eat well."]],
  42: [["Je viens de parler avec maman — elle va bien.", "I just spoke with mom — she's doing well."], ["Tu viens de rentrer — tu es fatigué(e) ?", "You just got home — are you tired?"], ["Il vient de partir pour son rendez-vous.", "He just left for his appointment."], ["Nous venons de décider notre projet de vacances.", "We just decided on our vacation project."]],
  43: [["Je viens de voir papa — il pense à toi.", "I just saw dad — he's thinking of you."], ["Tu viens de manquer ta sœur.", "You just missed your sister."], ["Elle vient de rentrer du travail — laisse-lui le temps.", "She just got back from work — give her time."], ["Ils viennent de décider — ils vont venir.", "They just decided — they're going to come."]],
  44: [["Je viens de finir de cuisiner — on va manger dans cinq minutes.", "I just finished cooking — we're going to eat in five minutes."], ["Il vient d'arriver et on va pouvoir commencer.", "He just arrived and we're going to be able to start."], ["Tu viens de dire ça et je vais y penser.", "You just said that and I'm going to think about it."], ["Elle vient de dormir et elle va se sentir mieux.", "She just slept and she's going to feel better."]],
  45: [["Je viens de faire la cuisine — viens manger avec moi !", "I just cooked — come eat with me!"], ["Il va arriver, alors attends-le encore un peu.", "He's going to arrive, so wait for him a little longer."], ["Tu viens de rentrer, mais on va quand même sortir ?", "You just got home, but we're still going to go out?"], ["Je viens de voir ça — allons leur dire !", "I just saw that — let's go tell them!"]],
  46: [["On va avoir une belle soirée en famille.", "We're going to have a lovely family evening."], ["Je vais appeler tout le monde pour leur dire.", "I'm going to call everyone to tell them."], ["Tu vas voir — ça va bien se passer.", "You'll see — it's going to go well."], ["Nous allons prendre le temps de tout faire ensemble.", "We're going to take the time to do everything together."]],
  47: [["Viens me voir ce week-end — j'ai besoin de toi.", "Come see me this weekend — I need you."], ["Dis-leur que tout va bien.", "Tell them everything is fine."], ["Allons-y — le moment est parfait.", "Let's go — the moment is perfect."], ["Reste avec moi — je ne veux pas être seul(e).", "Stay with me — I don't want to be alone."]],
  48: [["Je viens de comprendre quelque chose d'important.", "I just understood something important."], ["Tu vas voir — ça va changer.", "You'll see — it's going to change."], ["Viens, on va parler de tout ça.", "Come, let's talk about all of that."], ["Allons-y ensemble — c'est mieux comme ça.", "Let's go together — it's better that way."]],
  49: [["Je viens de rentrer — qu'est-ce qu'on va faire ce soir ?", "I just got home — what are we going to do tonight?"], ["Il est arrivé — allons-y, venez tous !", "He arrived — let's go, everyone come!"], ["Tu viens de me dire ça — je vais y réfléchir.", "You just told me that — I'm going to think about it."], ["On vient de décider — on va sortir manger. Viens !", "We just decided — we're going to go eat out. Come!"]],
  50: [["Je viens de voir la famille — on va se retrouver bientôt.", "I just saw the family — we're going to get together soon."], ["Tu es venu(e), tu as mangé avec nous, et tu vas revenir.", "You came, you ate with us, and you're going to come back."], ["Allons-y — la vie est belle quand on est ensemble.", "Let's go — life is beautiful when we're together."], ["Je viens de comprendre combien vous êtes importants pour moi.", "I just understood how important you all are to me."]],
  51: [["Je voudrais passer plus de temps avec toi.", "I would like to spend more time with you."], ["J'aimerais qu'on dîne ensemble ce soir.", "I would like us to have dinner together tonight."], ["Je voudrais te dire quelque chose d'important.", "I would like to tell you something important."], ["J'aimerais venir te voir ce week-end, si tu veux.", "I would like to come see you this weekend, if you want."]],
  52: [["Tu pourrais me rappeler ce soir ?", "Could you call me back tonight?"], ["Est-ce que tu pourrais venir demain matin ?", "Could you come tomorrow morning?"], ["Tu pourrais faire ça pour moi, s'il te plaît ?", "Could you do that for me, please?"], ["Est-ce que tu pourrais m'expliquer ce qui s'est passé ?", "Could you explain to me what happened?"]],
  53: [["Ça serait bien de se voir bientôt.", "It would be nice to see each other soon."], ["Ça serait important d'en parler ensemble.", "It would be important to talk about it together."], ["Ça serait génial si tu pouvais venir.", "It would be great if you could come."], ["Ça serait mieux de décider ensemble.", "It would be better to decide together."]],
  54: [["Je ne suis pas d'accord, mais je t'écoute.", "I don't agree, but I'm listening to you."], ["Ce n'est pas grave — on peut en parler calmement.", "It's not a big deal — we can talk about it calmly."], ["Je voudrais qu'on trouve une solution ensemble.", "I would like us to find a solution together."], ["Je ne suis pas d'accord, mais ça serait bien d'en discuter.", "I don't agree, but it would be good to discuss it."]],
  55: [["Je voudrais mieux te connaître, si tu veux bien.", "I would like to know you better, if you're okay with that."], ["Tu pourrais me dire ce que tu penses vraiment ?", "Could you tell me what you really think?"], ["Ça serait bien si on se voyait plus souvent.", "It would be nice if we saw each other more often."], ["Je ne suis pas d'accord, mais tu pourrais m'expliquer ta pensée ?", "I don't agree, but could you explain your thinking?"]],
  56: [["Je suis allé(e) chez eux, j'ai passé du temps avec eux, et je vais y retourner bientôt.", "I went to their place, I spent time with them, and I'm going to go back soon."], ["Tu viens de me parler de ça — j'aimerais qu'on y réfléchisse ensemble.", "You just told me about that — I would like us to think about it together."], ["Elle est arrivée hier, elle a fait la cuisine, et demain on va sortir ensemble.", "She arrived yesterday, she cooked, and tomorrow we're going to go out together."], ["Je sais que c'est difficile, mais ça serait mieux d'en parler maintenant.", "I know it's hard, but it would be better to talk about it now."]],
  57: [["Je voulais te dire depuis longtemps : tu pourrais venir plus souvent.", "I've been wanting to tell you for a long time: you could come more often."], ["On vient de passer une belle soirée — ça serait bien de le faire plus souvent.", "We just had a lovely evening — it would be nice to do it more often."], ["Tu es venu(e), tu as dit des choses importantes, et je vais y penser.", "You came, you said important things, and I'm going to think about it."], ["Allons-y — il faut prendre soin les uns des autres.", "Let's go — we need to take care of each other."]],
  58: [["Il y a 20 jours, je ne savais pas comment dire tout ça.", "20 days ago, I didn't know how to say all this."], ["Je viens de relire mes notes — j'ai fait beaucoup de progrès.", "I just re-read my notes — I've made a lot of progress."], ["Je peux maintenant parler, dire ce que je pense, et comprendre les réponses.", "I can now speak, say what I think, and understand the answers."], ["Ça serait bien de continuer comme ça encore un peu.", "It would be nice to continue like this a little longer."]],
  59: [["Je ne comprends pas encore tout, mais je veux continuer.", "I don't understand everything yet, but I want to continue."], ["Tu pourrais m'aider avec les points difficiles ?", "Could you help me with the difficult points?"], ["J'ai travaillé dur et je vais continuer à progresser.", "I worked hard and I'm going to keep progressing."], ["Ça serait bien de pratiquer encore et encore.", "It would be nice to practice again and again."]],
  60: [["Je suis fier(e) de tout ce que j'ai appris en 60 jours.", "I'm proud of everything I've learned in 60 days."], ["Je viens de finir ce programme — et je vais continuer à parler.", "I just finished this program — and I'm going to keep speaking."], ["Allons-y — le français, c'est pour toujours maintenant.", "Let's go — French is forever now."], ["Merci d'être là — je t'aime.", "Thank you for being here — I love you."]]
};


// Day-specific focus: what THIS day covers, as opposed to BLOCKS which describes
// the whole 10/15/5-day phase. renderToday() in script.js uses this, not block.grammar.
// "tables" lists which conjugation tables to show; "prompt" only uses verbs already
// taught by that day, so the example sentence always matches what's been introduced.
const DAY_DETAILS = {
  1: { grammar: "être (au présent)", vocab: "Pronoms sujets : je, tu, il, elle, on, nous, vous, ils, elles", tables: [CONJUGATIONS.etre], prompt: "Dis trois phrases avec être : « Je suis... », « Tu es... », « Il/elle est... ». Par exemple : « Je suis content(e) aujourd'hui. »", sentences: SENTENCES[1] },
  2: { grammar: "avoir (au présent)", vocab: "Pronoms compléments (moi, toi, lui) + possessifs (mon/ma/mes, ton/ta/tes)", tables: [CONJUGATIONS.avoir], prompt: "Dis trois phrases avec avoir : « J'ai... », « Tu as... », « Il/elle a... ». Par exemple : « J'ai un frère. »", sentences: SENTENCES[2] },
  3: { grammar: "Révision : être + avoir ensemble", vocab: "Possessifs (son/sa/ses, notre, votre, leur)", tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir], prompt: "Combine être et avoir dans une seule phrase, par exemple : « Je suis fatigué(e) et j'ai faim. » Essaie avec ta propre situation.", sentences: SENTENCES[3] },
  4: { grammar: "faire (au présent)", vocab: "Famille proche : maman, papa, frère, sœur, fils, fille", tables: [CONJUGATIONS.faire], prompt: "Dis ce que tu fais en ce moment avec faire : « Je fais... », « Tu fais... », « Il/elle fait... ».", sentences: SENTENCES[4] },
  5: { grammar: "aller (au présent)", vocab: "Famille : mari, femme, copain, copine, enfant, bébé", tables: [CONJUGATIONS.aller], prompt: "Dis où tu vas avec aller : « Je vais... », « Tu vas... », « Il/elle va... ».", sentences: SENTENCES[5] },
  6: { grammar: "Révision : faire + aller", vocab: "Belle-famille : beau-père, belle-mère, beau-frère, belle-sœur, grands-parents", tables: [CONJUGATIONS.faire, CONJUGATIONS.aller], prompt: "Réponds : « Qu'est-ce que tu fais ce soir ? Où est-ce que tu vas après ? » (utilise faire et aller).", sentences: SENTENCES[6] },
  7: { grammar: "pouvoir (au présent)", vocab: "Émotions de base : content(e), heureux/heureuse, triste, fâché(e)", tables: [CONJUGATIONS.pouvoir], prompt: "Dis ce que tu peux faire avec pouvoir : « Je peux... », « Tu peux... », « Il/elle peut... ».", sentences: SENTENCES[7] },
  8: { grammar: "vouloir (au présent)", vocab: "Émotions : fatigué(e), stressé(e), surpris(e), fier/fière, gêné(e)", tables: [CONJUGATIONS.vouloir], prompt: "Dis ce que tu veux faire avec vouloir : « Je veux... », « Tu veux... », « Il/elle veut... ».", sentences: SENTENCES[8] },
  9: { grammar: "Révision pouvoir + vouloir, et le patron régulier des verbes en -er", vocab: "d'accord, pas d'accord, peut-être, vraiment", tables: [CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir, CONJUGATIONS.parlerEr], prompt: "Utilise pouvoir, vouloir et un verbe en -er (comme parler) dans une phrase : « Je veux parler français » ou « Tu peux regarder ça ? ».", sentences: SENTENCES[9] },
  10: { grammar: "Révision complète du bloc : être, avoir, faire, aller, pouvoir, vouloir + verbes en -er", vocab: "Révision de tout le vocabulaire des jours 1 à 9", tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir, CONJUGATIONS.faire, CONJUGATIONS.aller, CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir], prompt: "Enregistre un mini-monologue d'une minute en utilisant être, avoir, faire, aller, pouvoir et vouloir.", sentences: SENTENCES[10] },

  11: { grammar: "savoir (au présent)", vocab: "Temps : aujourd'hui, hier, demain, maintenant", tables: [CONJUGATIONS.savoir], prompt: "Dis ce que tu sais faire avec savoir : « Je sais... », « Tu sais... », « Il/elle sait... ».", sentences: SENTENCES[11] },
  12: { grammar: "venir (au présent)", vocab: "Fréquence : toujours, jamais, souvent, parfois, déjà, encore", tables: [CONJUGATIONS.venir], prompt: "Dis d'où tu viens avec venir : « Je viens... », « Tu viens... », « Il/elle vient... ».", sentences: SENTENCES[12] },
  13: { grammar: "Révision savoir + venir", vocab: "Quantité : beaucoup, un peu, assez, trop", tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir], prompt: "Combine savoir et venir dans deux phrases sur ta semaine.", sentences: SENTENCES[13] },
  14: { grammar: "voir (au présent)", vocab: "Quantité : peu, plus, moins, tout/tous/toute/toutes, rien", tables: [CONJUGATIONS.voir], prompt: "Dis qui tu vois avec voir : « Je vois... », « Tu vois... », « Il/elle voit... ».", sentences: SENTENCES[14] },
  15: { grammar: "prendre (au présent)", vocab: "Opinions : penser que, croire que, trouver que", tables: [CONJUGATIONS.prendre], prompt: "Dis ce que tu prends avec prendre : « Je prends... », « Tu prends... », « Il/elle prend... ». Par exemple : « Je prends un café. »", sentences: SENTENCES[15] },
  16: { grammar: "Révision voir + prendre", vocab: "avoir envie de, avoir besoin de, avoir peur de, avoir hâte de, espérer", tables: [CONJUGATIONS.voir, CONJUGATIONS.prendre], prompt: "Réponds : « Qu'est-ce que tu prends d'habitude le matin ? Qui est-ce que tu vois cette semaine ? »", sentences: SENTENCES[16] },
  17: { grammar: "dire (au présent)", vocab: "Descripteurs : bon/bonne, mauvais(e), grand(e), petit(e), beau/belle", tables: [CONJUGATIONS.dire], prompt: "Dis ce que tu dis souvent avec dire : « Je dis... », « Tu dis... », « Il/elle dit... ».", sentences: SENTENCES[17] },
  18: { grammar: "mettre (au présent)", vocab: "Descripteurs : gentil(le), drôle, sympa, difficile, facile, important(e)", tables: [CONJUGATIONS.mettre], prompt: "Dis ce que tu mets avec mettre : « Je mets... », « Tu mets... », « Il/elle met... ».", sentences: SENTENCES[18] },
  19: { grammar: "connaître (au présent) + il faut (phrase figée, pas encore le subjonctif complet)", vocab: "Descripteurs : différent(e), nouveau/nouvelle, vieux/vieille, jeune, occupé(e), libre", tables: [CONJUGATIONS.connaitre, CONJUGATIONS.falloir], prompt: "Dis qui tu connais avec connaître, puis utilise « il faut » dans une phrase figée : « Il faut que je parte » (pas besoin d'analyser sa conjugaison).", sentences: SENTENCES[19] },
  20: { grammar: "Révision complète : savoir, venir, voir, prendre, dire, mettre, connaître, il faut", vocab: "Révision de tout le vocabulaire des jours 11 à 19", tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir, CONJUGATIONS.voir, CONJUGATIONS.prendre, CONJUGATIONS.dire, CONJUGATIONS.mettre, CONJUGATIONS.connaitre], prompt: "Enregistre un monologue de 2 minutes en utilisant tous les verbes des blocs 1 et 2.", sentences: SENTENCES[20] },

  21: { grammar: "Passé composé avec avoir — verbes réguliers en -er", vocab: "Maison : maison, appartement, chambre, cuisine, salon", tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Participes en -er : parlé, mangé, regardé, aimé, écouté, travaillé, habité." }], prompt: "Raconte ce que tu as fait aujourd'hui avec des verbes en -er : « J'ai parlé avec... », « J'ai mangé... ».", sentences: SENTENCES[21] },
  22: { grammar: "Passé composé avec avoir — participes irréguliers", vocab: "travail, voiture, téléphone, argent, temps", tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Participes irréguliers : fait, eu, pris, mis, dit, vu." }], prompt: "Utilise j'ai fait, j'ai eu, j'ai pris, j'ai mis, j'ai dit ou j'ai vu — choisis-en trois et fais une phrase avec chacun.", sentences: SENTENCES[22] },
  23: { grammar: "Révision : poser des questions au passé composé", vocab: "jour, semaine, week-end, matin, soir, nuit", tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu as fait aujourd'hui ? » et réponds aussi pour toi-même.", sentences: SENTENCES[23] },
  24: { grammar: "Verbes avec être au passé composé : aller, venir", vocab: "repas, dîner, déjeuner, courses, faire les courses", tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Le participe s'accorde : il est allé / elle est allée." }], prompt: "Raconte où tu es allé(e) et qui est venu te voir récemment : « Je suis allé(e)... », « Il/elle est venu(e)... ».", sentences: SENTENCES[24] },
  25: { grammar: "Verbes avec être : arriver, partir", vocab: "ranger, nettoyer, rentrer", tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis arrivé(e), tu es parti(e)." }], prompt: "Raconte à quelle heure tu es arrivé(e) et parti(e) aujourd'hui.", sentences: SENTENCES[25] },
  26: { grammar: "Révision : aller, venir, arriver, partir", vocab: "voyage, vacances, rendez-vous, projet", tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows }], prompt: "Raconte ta journée en quatre phrases avec aller, venir, arriver et partir.", sentences: SENTENCES[26] },
  27: { grammar: "Verbes avec être : rester, sortir", vocab: "problème, solution", tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis resté(e), tu es sorti(e)." }], prompt: "Dis si tu es resté(e) à la maison ou si tu es sorti(e) ce week-end.", sentences: SENTENCES[27] },
  28: { grammar: "Révision complète des verbes avec être — l'accord", vocab: "Révision vie quotidienne", tables: [{ title: "Passé composé avec être — accord", rows: CONJUGATIONS.etre.rows, note: "elle est allée / ils sont sortis / elles sont parties." }], prompt: "Raconte la journée de quelqu'un d'autre (il/elle) — fais attention à l'accord : « elle est allée », « ils sont sortis ».", sentences: SENTENCES[28] },
  29: { grammar: "Mélange avoir + être au passé composé", vocab: "Révision vie quotidienne", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en mélangeant avoir et être : « Je suis allé(e) au travail, j'ai mangé, puis je suis rentré(e). »", sentences: SENTENCES[29] },
  30: { grammar: "Connecteurs de récit : puis, ensuite, alors", vocab: "Révision vie quotidienne", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en reliant les phrases avec puis, ensuite, alors.", sentences: SENTENCES[30] },
  31: { grammar: "Révision libre du bloc", vocab: "Révision libre", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Réécoute ta phrase du Jour 21 et améliore-la.", sentences: SENTENCES[31] },
  32: { grammar: "Jour de parole : raconte ta journée d'hier en détail", vocab: "Révision libre", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée d'hier en détail, à voix haute, une minute minimum.", sentences: SENTENCES[32] },
  33: { grammar: "Jour de parole : raconte un événement familial récent", vocab: "Révision libre", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte un événement familial récent en quatre ou cinq phrases au passé composé.", sentences: SENTENCES[33] },
  34: { grammar: "Révision des points faibles identifiés", vocab: "Révision libre", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Reprends les verbes du passé composé qui te bloquent encore et répète-les trois fois chacun.", sentences: SENTENCES[34] },
  35: { grammar: "Checkpoint du bloc : monologue de 2 min entièrement au passé composé", vocab: "Révision de tout le bloc 3", tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Enregistre un monologue de deux minutes entièrement au passé composé.", sentences: SENTENCES[35] },

  36: { grammar: "Futur proche : aller + infinitif", vocab: "manger, boire, café, eau", tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows, note: "Exemple : je vais manger, tu vas sortir, ils vont rester." }], prompt: "Dis ce que tu vas faire avec aller + infinitif : « Je vais... », « Tu vas... », « Il/elle va... ».", sentences: SENTENCES[36] },
  37: { grammar: "Futur proche — pratique : parler de cette semaine", vocab: "restaurant, inviter, fête, anniversaire, cadeau", tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Dis trois choses que tu vas faire cette semaine.", sentences: SENTENCES[37] },
  38: { grammar: "Révision futur proche", vocab: "Révision nourriture & social", tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu vas faire ce week-end ? »", sentences: SENTENCES[38] },
  39: { grammar: "Impératif — formes « tu » (viens, attends, dis-moi, fais)", vocab: "boire un verre, cuisiner, recette, plat, dessert", tables: [CONJUGATIONS.impTu], prompt: "Donne trois ordres ou demandes avec l'impératif : « Viens ! », « Attends ! », « Dis-moi ! ».", sentences: SENTENCES[39] },
  40: { grammar: "Impératif — formes « nous/vous » (allons-y, venez)", vocab: "santé, bon appétit, trinquer, partager un repas", tables: [CONJUGATIONS.impNousVous], prompt: "Utilise « Allons-y ! » et « Venez ! » dans une situation imaginée.", sentences: SENTENCES[40] },
  41: { grammar: "Révision impératif", vocab: "Révision nourriture & social", tables: [CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Pratique cinq demandes que tu dirais vraiment à la maison, à l'impératif.", sentences: SENTENCES[41] },
  42: { grammar: "venir de + infinitif (passé récent) — introduction", vocab: "Révision : rendez-vous, projet", tables: [{ title: "venir de + infinitif (passé récent)", rows: CONJUGATIONS.venir.rows, note: "Exemple : je viens de manger, tu viens de partir." }], prompt: "Dis ce que tu viens de faire : « Je viens de... », « Tu viens de... ».", sentences: SENTENCES[42] },
  43: { grammar: "venir de + infinitif — pratique", vocab: "Révision libre", tables: [{ title: "venir de + infinitif (passé récent)", rows: CONJUGATIONS.venir.rows }], prompt: "Dis trois choses que tu viens de faire aujourd'hui.", sentences: SENTENCES[43] },
  44: { grammar: "Révision : venir de + futur proche ensemble", vocab: "Révision libre", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir], prompt: "Combine les deux dans une phrase : « Je viens de... et je vais... ».", sentences: SENTENCES[44] },
  45: { grammar: "Mélange : projets + actions récentes + demandes", vocab: "Révision libre", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Raconte un plan : ce que tu viens de faire, ce que tu vas faire, et une demande à quelqu'un.", sentences: SENTENCES[45] },
  46: { grammar: "Jour de parole : fais des projets pour le week-end à voix haute", vocab: "Révision libre", tables: [CONJUGATIONS.aller], prompt: "Fais des projets pour le week-end à voix haute, avec aller + infinitif.", sentences: SENTENCES[46] },
  47: { grammar: "Jour de parole : 5 vraies demandes que tu dirais à la maison", vocab: "Révision libre", tables: [CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Dis cinq vraies demandes que tu dirais à la maison, à l'impératif.", sentences: SENTENCES[47] },
  48: { grammar: "Révision des points faibles", vocab: "Révision libre", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Reprends ce qui te bloque encore dans ce bloc et répète-le.", sentences: SENTENCES[48] },
  49: { grammar: "Intègre tout le bloc dans un dialogue court", vocab: "Révision libre", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Imagine un court dialogue avec futur proche, impératif et venir de.", sentences: SENTENCES[49] },
  50: { grammar: "Checkpoint du bloc : monologue de 2 min avec futur proche, impératif, venir de", vocab: "Révision de tout le bloc 4", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Enregistre un monologue de deux minutes avec futur proche, impératif et venir de.", sentences: SENTENCES[50] },

  51: { grammar: "je voudrais / j'aimerais", vocab: "Révision émotions & opinions", tables: [CONJUGATIONS.condChunks], prompt: "Utilise « je voudrais » et « j'aimerais » dans deux phrases sur ce que tu veux faire bientôt.", sentences: SENTENCES[51], chapter: { n:1, file:'stories/chapter-1.html', title:'Un nouveau départ' } },
  52: { grammar: "tu pourrais / est-ce que tu pourrais", vocab: "Révision émotions & opinions", tables: [CONJUGATIONS.condChunks], prompt: "Transforme une demande directe en demande adoucie : « Fais ça » → « Tu pourrais faire ça ? ».", sentences: SENTENCES[52], chapter: { n:2, file:'stories/chapter-2.html', title:'Dans la cuisine de Marie' } },
  53: { grammar: "ça serait + révision des formules d'adoucissement", vocab: "d'accord, pas d'accord, sûr(e), peut-être", tables: [CONJUGATIONS.condChunks], prompt: "Utilise « ça serait » dans une phrase : « Ça serait bien de... ».", sentences: SENTENCES[53], chapter: { n:3, file:'stories/chapter-3.html', title:'Les courses' } },
  54: { grammar: "Désaccord & réparation : pas d'accord, ce n'est pas grave, on peut en parler", vocab: "Révision libre", tables: [CONJUGATIONS.condChunks], prompt: "Pratique : « Je ne suis pas d'accord, mais... » suivi de « Ce n'est pas grave » ou « On peut en parler ».", sentences: SENTENCES[54], chapter: { n:4, file:'stories/chapter-4.html', title:'Chez les grands-parents' } },
  55: { grammar: "Checkpoint du bloc : adoucis 3 demandes réelles + 1 désaccord", vocab: "Révision de tout le bloc 5", tables: [CONJUGATIONS.condChunks], prompt: "Adoucis trois demandes réelles et pratique un désaccord avec réparation.", sentences: SENTENCES[55], chapter: { n:5, file:null, title:'à venir' } },

  56: { grammar: "Aucune nouvelle structure — monologue intégrant présent, passé composé, futur proche, conditionnel", vocab: "Révision générale", tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir, CONJUGATIONS.faire, CONJUGATIONS.aller, CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir], prompt: "Enregistre un monologue de deux minutes intégrant présent, passé composé, futur proche et une formule au conditionnel.", sentences: SENTENCES[56], chapter: { n:6, file:null, title:'à venir' } },
  57: { grammar: "Vraie conversation de 10+ minutes, sans anglais pendant les 5 premières minutes", vocab: "Révision générale", tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir, CONJUGATIONS.voir, CONJUGATIONS.prendre, CONJUGATIONS.dire, CONJUGATIONS.mettre, CONJUGATIONS.connaitre], prompt: "Vraie conversation de dix minutes ou plus, sans anglais pendant les cinq premières minutes.", sentences: SENTENCES[57], chapter: { n:7, file:null, title:'à venir' } },
  58: { grammar: "Compare ton enregistrement du Jour 20 à aujourd'hui", vocab: "Révision générale", tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Réécoute ton enregistrement du Jour 20 — qu'est-ce qui a changé depuis ?", sentences: SENTENCES[58], chapter: { n:8, file:null, title:'à venir' } },
  59: { grammar: "Réparation ciblée des 3 points qui te bloquent encore", vocab: "Révision générale", tables: [CONJUGATIONS.condChunks, CONJUGATIONS.falloir, CONJUGATIONS.parlerEr], prompt: "Reprends les trois points qui te bloquent encore et entraîne-toi uniquement sur ceux-là.", sentences: SENTENCES[59], chapter: { n:9, file:null, title:'à venir' } },
  60: { grammar: "Monologue final + vraie conversation — compare au Jour 1", vocab: "Révision générale", tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir, CONJUGATIONS.faire, CONJUGATIONS.aller, CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir, CONJUGATIONS.savoir, CONJUGATIONS.venir, CONJUGATIONS.voir, CONJUGATIONS.prendre, CONJUGATIONS.dire, CONJUGATIONS.mettre, CONJUGATIONS.connaitre, CONJUGATIONS.condChunks], prompt: "Monologue final, puis vraie conversation — compare au tout premier jour.", sentences: SENTENCES[60], chapter: { n:10, file:null, title:'à venir' } }
};

const SESSION_TEMPLATE = [
  "Recall — quick spaced-repetition pass on today's vocab/chunk batch (3-5 min)",
  "Listening + shadowing — one native-speed clip, listen twice, shadow it out loud (7-8 min)",
  "Speaking output — answer today's prompt out loud, recorded or with a real person (8-10 min)",
  "Reading or writing — short native text, or write 3-4 sentences with the new structure (3-5 min)"
];
