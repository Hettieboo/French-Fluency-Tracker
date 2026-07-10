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

// Each block now carries a `color` token used for the per-block colour band
// in the UI (left border on the day header + progress grid legend).
const BLOCKS = [
  {
    range: [1, 10],
    color: "#5B8DB8",
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
    color: "#5B8DB8",
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
    color: "#C17D3C",
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
    color: "#4F7942",
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
    color: "#9B6B9B",
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
    color: "#c0392b",
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
  etre: { title: "être (présent)", rows: [["je", "suis"], ["tu", "es"], ["il / elle / on", "est"], ["nous", "sommes"], ["vous", "êtes"], ["ils / elles", "sont"]] },
  avoir: { title: "avoir (présent)", rows: [["j'", "ai"], ["tu", "as"], ["il / elle / on", "a"], ["nous", "avons"], ["vous", "avez"], ["ils / elles", "ont"]] },
  faire: { title: "faire (présent)", rows: [["je", "fais"], ["tu", "fais"], ["il / elle / on", "fait"], ["nous", "faisons"], ["vous", "faites"], ["ils / elles", "font"]] },
  aller: { title: "aller (présent)", rows: [["je", "vais"], ["tu", "vas"], ["il / elle / on", "va"], ["nous", "allons"], ["vous", "allez"], ["ils / elles", "vont"]] },
  pouvoir: { title: "pouvoir (présent)", rows: [["je", "peux"], ["tu", "peux"], ["il / elle / on", "peut"], ["nous", "pouvons"], ["vous", "pouvez"], ["ils / elles", "peuvent"]] },
  vouloir: { title: "vouloir (présent)", rows: [["je", "veux"], ["tu", "veux"], ["il / elle / on", "veut"], ["nous", "voulons"], ["vous", "voulez"], ["ils / elles", "veulent"]] },
  savoir: { title: "savoir (présent)", rows: [["je", "sais"], ["tu", "sais"], ["il / elle / on", "sait"], ["nous", "savons"], ["vous", "savez"], ["ils / elles", "savent"]] },
  venir: { title: "venir (présent)", rows: [["je", "viens"], ["tu", "viens"], ["il / elle / on", "vient"], ["nous", "venons"], ["vous", "venez"], ["ils / elles", "viennent"]] },
  voir: { title: "voir (présent)", rows: [["je", "vois"], ["tu", "vois"], ["il / elle / on", "voit"], ["nous", "voyons"], ["vous", "voyez"], ["ils / elles", "voient"]] },
  prendre: { title: "prendre (présent)", rows: [["je", "prends"], ["tu", "prends"], ["il / elle / on", "prend"], ["nous", "prenons"], ["vous", "prenez"], ["ils / elles", "prennent"]] },
  dire: { title: "dire (présent)", rows: [["je", "dis"], ["tu", "dis"], ["il / elle / on", "dit"], ["nous", "disons"], ["vous", "dites"], ["ils / elles", "disent"]] },
  mettre: { title: "mettre (présent)", rows: [["je", "mets"], ["tu", "mets"], ["il / elle / on", "met"], ["nous", "mettons"], ["vous", "mettez"], ["ils / elles", "mettent"]] },
  connaitre: { title: "connaître (présent)", rows: [["je", "connais"], ["tu", "connais"], ["il / elle / on", "connaît"], ["nous", "connaissons"], ["vous", "connaissez"], ["ils / elles", "connaissent"]] },
  falloir: { title: "falloir (présent)", rows: [["il (impersonnel)", "faut"]], note: "Une seule forme possible — toujours « il faut », jamais conjugué pour je/tu/etc." },
  parlerEr: { title: "verbes en -er (modèle : parler)", rows: [["je", "parle"], ["tu", "parles"], ["il / elle / on", "parle"], ["nous", "parlons"], ["vous", "parlez"], ["ils / elles", "parlent"]] },
  impTu: { title: "impératif — forme « tu »", rows: [["(tu) →", "Viens !"], ["(tu) →", "Attends !"], ["(tu) →", "Dis-moi !"], ["(tu) →", "Fais !"]], note: "On enlève le pronom sujet. Pour les verbes en -er, on enlève aussi le « s » final (tu regardes → Regarde !)." },
  impNousVous: { title: "impératif — formes « nous/vous »", rows: [["(nous) →", "Allons-y !"], ["(vous) →", "Venez !"]] },
  condChunks: { title: "Formes utiles au conditionnel (pas un tableau complet)", rows: [["je", "voudrais"], ["j'", "aimerais"], ["tu", "pourrais"], ["ça", "serait"]], note: "On apprend seulement ces formes comme blocs fixes, pas toute la conjugaison du conditionnel." }
};

// Day-specific focus: what THIS day covers, as opposed to BLOCKS which describes
// the whole 10/15/5-day phase. renderToday() in script.js uses this, not block.grammar.
// "tables" lists which conjugation tables to show; "prompt" only uses verbs already
// taught by that day, so the example sentence always matches what's been introduced.
// "vocabWords" lists the French headwords (must match VOCAB entries exactly) that are
// THIS day's specific focus — rendered as a small chip row above the prompt, separate
// from the full vocab browser in the Vocabulaire tab.
const DAY_DETAILS = {
  1: { grammar: "être (au présent)", vocab: "Pronoms sujets : je, tu, il, elle, on, nous, vous, ils, elles", vocabWords: ["je", "tu", "il", "elle", "on", "nous", "vous"], vocabExamples: [["Je suis content.", "I am happy."], ["Tu es gentil.", "You are kind."], ["Il est là.", "He is there."], ["Elle est prête.", "She is ready."], ["On est en retard.", "We're late."], ["Nous sommes ensemble.", "We are together."], ["Vous êtes libre ce soir ?", "Are you free tonight?"]], tables: [CONJUGATIONS.etre], prompt: "Dis trois phrases avec être : « Je suis... », « Tu es... », « Il/elle est... ». Par exemple : « Je suis content(e) aujourd'hui. »" },
  2: { grammar: "avoir (au présent)", vocab: "Pronoms compléments (moi, toi, lui) + possessifs (mon/ma/mes, ton/ta/tes)", vocabWords: ["moi", "toi", "lui", "mon/ma/mes", "ton/ta/tes"], vocabExamples: [["J'ai confiance en moi.", "I have confidence in myself."], ["Tu as de la chance.", "You're lucky."], ["C'est pour lui.", "It's for him."], ["Mon frère est gentil.", "My brother is kind."], ["Ton café est froid.", "Your coffee is cold."]], tables: [CONJUGATIONS.avoir], prompt: "Dis trois phrases avec avoir : « J'ai... », « Tu as... », « Il/elle a... ». Par exemple : « J'ai un frère. »" },
  3: { grammar: "Révision : être + avoir ensemble", vocab: "Possessifs (son/sa/ses, notre, votre, leur)", vocabWords: ["son/sa/ses", "notre", "votre", "leur"], vocabExamples: [["Sa sœur est drôle.", "His/her sister is funny."], ["Notre maison est petite.", "Our house is small."], ["Votre famille est grande.", "Your family is big."], ["Leur fille est fatiguée.", "Their daughter is tired."]], tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir], prompt: "Combine être et avoir dans une seule phrase, par exemple : « Je suis fatigué(e) et j'ai faim. » Essaie avec ta propre situation." },
  4: { grammar: "faire (au présent)", vocab: "Famille proche : maman, papa, frère, sœur, fils, fille", vocabWords: ["maman", "papa", "frère", "sœur", "fils", "fille"], vocabExamples: [["Maman est à la maison.", "Mom is home."], ["Papa est content.", "Dad is happy."], ["Mon frère a faim.", "My brother is hungry."], ["Ma sœur est là.", "My sister is here."], ["Mon fils est petit.", "My son is small."], ["Ma fille est grande.", "My daughter is big/tall."]], tables: [CONJUGATIONS.faire], prompt: "Dis ce que tu fais en ce moment avec faire : « Je fais... », « Tu fais... », « Il/elle fait... »." },
  5: { grammar: "aller (au présent)", vocab: "Famille : mari, femme, copain, copine, enfant, bébé", vocabWords: ["mari", "femme", "copain/copine", "enfant", "bébé"], vocabExamples: [["Mon mari est fatigué.", "My husband is tired."], ["Ma femme est gentille.", "My wife is kind."], ["Mon copain est drôle.", "My boyfriend is funny."], ["L'enfant est content.", "The child is happy."], ["Le bébé dort.", "The baby is sleeping."]], tables: [CONJUGATIONS.aller], prompt: "Dis où tu vas avec aller : « Je vais... », « Tu vas... », « Il/elle va... »." },
  6: { grammar: "Révision : faire + aller", vocab: "Belle-famille : beau-père, belle-mère, beau-frère, belle-sœur, grands-parents", vocabWords: ["beau-père/belle-mère", "beau-frère/belle-sœur", "grands-parents"], vocabExamples: [["Mon beau-père est sympa.", "My father-in-law is nice."], ["Mon beau-frère est là.", "My brother-in-law is here."], ["Mes grands-parents sont gentils.", "My grandparents are kind."]], tables: [CONJUGATIONS.faire, CONJUGATIONS.aller], prompt: "Réponds : « Qu'est-ce que tu fais ce soir ? Où est-ce que tu vas après ? » (utilise faire et aller)." },
  7: { grammar: "pouvoir (au présent)", vocab: "Émotions de base : content(e), heureux/heureuse, triste, fâché(e)", vocabWords: ["content(e)", "heureux/heureuse", "triste", "fâché(e)"], vocabExamples: [["Je suis content.", "I am happy."], ["Elle est heureuse aujourd'hui.", "She is happy today."], ["Il est triste.", "He is sad."], ["Tu es fâché ?", "Are you angry?"]], tables: [CONJUGATIONS.pouvoir], prompt: "Dis ce que tu peux faire avec pouvoir : « Je peux... », « Tu peux... », « Il/elle peut... »." },
  8: { grammar: "vouloir (au présent)", vocab: "Émotions : fatigué(e), stressé(e), surpris(e), fier/fière, gêné(e)", vocabWords: ["fatigué(e)", "stressé(e)", "surpris(e)", "fier/fière", "gêné(e)"], vocabExamples: [["Je suis fatigué.", "I am tired."], ["On est stressé.", "We're stressed."], ["Elle est surprise.", "She is surprised."], ["Il est fier de toi.", "He is proud of you."], ["Je suis un peu gêné.", "I'm a bit embarrassed."]], tables: [CONJUGATIONS.vouloir], prompt: "Dis ce que tu veux faire avec vouloir : « Je veux... », « Tu veux... », « Il/elle veut... »." },
  9: { grammar: "Révision pouvoir + vouloir, et le patron régulier des verbes en -er", vocab: "d'accord, pas d'accord, peut-être, vraiment", vocabWords: ["d'accord", "pas d'accord", "peut-être", "vraiment"], vocabExamples: [["D'accord, je peux faire ça.", "Okay, I can do that."], ["Je ne suis pas d'accord.", "I disagree."], ["C'est peut-être vrai.", "Maybe it's true."], ["Tu parles vraiment bien.", "You really speak well."]], tables: [CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir, CONJUGATIONS.parlerEr], prompt: "Utilise pouvoir, vouloir et un verbe en -er (comme parler) dans une phrase : « Je veux parler français » ou « Tu peux regarder ça ? »." },
  10: { grammar: "Révision complète du bloc : être, avoir, faire, aller, pouvoir, vouloir + verbes en -er", vocab: "Révision de tout le vocabulaire des jours 1 à 9", vocabWords: [], tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir, CONJUGATIONS.faire, CONJUGATIONS.aller, CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir], prompt: "Enregistre un mini-monologue d'une minute en utilisant être, avoir, faire, aller, pouvoir et vouloir." },

  11: { grammar: "savoir (au présent)", vocab: "Temps : aujourd'hui, hier, demain, maintenant", vocabWords: ["aujourd'hui", "hier", "demain", "maintenant"], vocabExamples: [["Aujourd'hui, je suis content.", "Today, I am happy."], ["Hier, j'étais fatigué.", "Yesterday, I was tired."], ["Demain, je vais être là.", "Tomorrow, I'll be there."], ["Maintenant, tu sais.", "Now you know."]], tables: [CONJUGATIONS.savoir], prompt: "Dis ce que tu sais faire avec savoir : « Je sais... », « Tu sais... », « Il/elle sait... »." },
  12: { grammar: "venir (au présent)", vocab: "Fréquence : toujours, jamais, souvent, parfois, déjà, encore", vocabWords: ["toujours", "jamais", "souvent", "parfois", "déjà", "encore"], vocabExamples: [["Je viens toujours ici.", "I always come here."], ["Tu ne viens jamais.", "You never come."], ["On vient souvent le soir.", "We often come in the evening."], ["Elle vient parfois le matin.", "She sometimes comes in the morning."], ["J'ai déjà fini.", "I've already finished."], ["Il est encore là.", "He's still there."]], tables: [CONJUGATIONS.venir], prompt: "Dis d'où tu viens avec venir : « Je viens... », « Tu viens... », « Il/elle vient... »." },
  13: { grammar: "Révision savoir + venir", vocab: "Quantité : beaucoup, un peu, assez, trop", vocabWords: ["beaucoup", "un peu", "assez", "trop"], vocabExamples: [["Je sais beaucoup de choses.", "I know a lot of things."], ["Tu viens un peu en retard.", "You're coming a little late."], ["C'est assez difficile.", "It's hard enough."], ["Il y a trop de bruit.", "There's too much noise."]], tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir], prompt: "Combine savoir et venir dans deux phrases sur ta semaine." },
  14: { grammar: "voir (au présent)", vocab: "Quantité : peu, plus, moins, tout/tous/toute/toutes, rien", vocabWords: ["peu", "plus", "moins", "tout/tous/toute/toutes", "rien"], vocabExamples: [["Je vois peu de monde.", "I see few people."], ["Tu as plus de patience que moi.", "You have more patience than me."], ["J'ai moins de temps maintenant.", "I have less time now."], ["Tout va bien.", "Everything's fine."], ["Il ne dit rien.", "He says nothing."]], tables: [CONJUGATIONS.voir], prompt: "Dis qui tu vois avec voir : « Je vois... », « Tu vois... », « Il/elle voit... »." },
  15: { grammar: "prendre (au présent)", vocab: "Opinions : penser que, croire que, trouver que", vocabWords: ["penser que", "croire que", "trouver que"], vocabExamples: [["Je prends un café.", "I'm having a coffee."], ["Tu crois que c'est vrai ?", "Do you think it's true?"], ["Il trouve que c'est difficile.", "He finds it difficult."]], tables: [CONJUGATIONS.prendre], prompt: "Dis ce que tu prends avec prendre : « Je prends... », « Tu prends... », « Il/elle prend... ». Par exemple : « Je prends un café. »" },
  16: { grammar: "Révision voir + prendre", vocab: "avoir envie de, avoir besoin de, avoir peur de, avoir hâte de, espérer", vocabWords: ["avoir envie de", "avoir besoin de", "avoir peur de", "avoir hâte de", "espérer"], vocabExamples: [["J'ai envie de dormir.", "I feel like sleeping."], ["J'ai besoin de toi.", "I need you."], ["J'ai peur de l'eau.", "I'm afraid of water."], ["J'ai hâte de te voir.", "I can't wait to see you."], ["J'espère que ça va.", "I hope it's okay."]], tables: [CONJUGATIONS.voir, CONJUGATIONS.prendre], prompt: "Réponds : « Qu'est-ce que tu prends d'habitude le matin ? Qui est-ce que tu vois cette semaine ? »" },
  17: { grammar: "dire (au présent)", vocab: "Descripteurs : bon/bonne, mauvais(e), grand(e), petit(e), beau/belle", vocabWords: ["bon/bonne", "mauvais(e)", "grand(e)", "petit(e)", "beau/belle"], vocabExamples: [["C'est une bonne idée.", "That's a good idea."], ["C'est un mauvais moment.", "That's a bad time."], ["Il est grand.", "He is tall."], ["Elle est petite.", "She is small."], ["Tu es beau aujourd'hui.", "You look handsome today."]], tables: [CONJUGATIONS.dire], prompt: "Dis ce que tu dis souvent avec dire : « Je dis... », « Tu dis... », « Il/elle dit... »." },
  18: { grammar: "mettre (au présent)", vocab: "Descripteurs : gentil(le), drôle, sympa, difficile, facile, important(e)", vocabWords: ["gentil(le)", "drôle", "sympa", "difficile/facile", "important(e)"], vocabExamples: [["Il est gentil avec moi.", "He is kind to me."], ["Tu es drôle !", "You're funny!"], ["Elle est sympa.", "She's nice."], ["C'est difficile pour moi.", "It's hard for me."], ["C'est important pour nous.", "It's important to us."]], tables: [CONJUGATIONS.mettre], prompt: "Dis ce que tu mets avec mettre : « Je mets... », « Tu mets... », « Il/elle met... »." },
  19: { grammar: "connaître (au présent) + il faut (phrase figée, pas encore le subjonctif complet)", vocab: "Descripteurs : différent(e), nouveau/nouvelle, vieux/vieille, jeune, occupé(e), libre", vocabWords: ["différent(e)", "nouveau/nouvelle", "vieux/vieille", "jeune", "occupé(e)", "libre"], vocabExamples: [["C'est différent maintenant.", "It's different now."], ["J'ai une nouvelle voiture.", "I have a new car."], ["Mon père est vieux.", "My father is old."], ["Tu es jeune.", "You are young."], ["Je suis occupé aujourd'hui.", "I'm busy today."], ["Tu es libre ce soir ?", "Are you free tonight?"]], tables: [CONJUGATIONS.connaitre, CONJUGATIONS.falloir], prompt: "Dis qui tu connais avec connaître, puis utilise « il faut » dans une phrase figée : « Il faut que je parte » (pas besoin d'analyser sa conjugaison)." },
  20: { grammar: "Révision complète : savoir, venir, voir, prendre, dire, mettre, connaître, il faut", vocab: "Révision de tout le vocabulaire des jours 11 à 19", vocabWords: [], tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir, CONJUGATIONS.voir, CONJUGATIONS.prendre, CONJUGATIONS.dire, CONJUGATIONS.mettre, CONJUGATIONS.connaitre], prompt: "Enregistre un monologue de 2 minutes en utilisant tous les verbes des blocs 1 et 2." },

  21: { grammar: "Passé composé avec avoir — verbes réguliers en -er", vocab: "Maison : maison, appartement, chambre, cuisine, salon", vocabWords: ["maison", "appartement", "chambre", "cuisine", "salon"], vocabExamples: [["J'ai parlé avec ma sœur dans la cuisine.", "I talked with my sister in the kitchen."], ["J'ai mangé dans l'appartement.", "I ate in the apartment."], ["J'ai regardé la chambre.", "I looked at the bedroom."], ["Le salon est petit.", "The living room is small."], ["Notre maison est grande.", "Our house is big."]], tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Participes en -er : parlé, mangé, regardé, aimé, écouté, travaillé, habité." }], prompt: "Raconte ce que tu as fait aujourd'hui avec des verbes en -er : « J'ai parlé avec... », « J'ai mangé... »." },
  22: { grammar: "Passé composé avec avoir — participes irréguliers", vocab: "travail, voiture, téléphone, argent, temps", vocabWords: ["travail", "voiture", "téléphone", "argent", "temps"], vocabExamples: [["J'ai eu beaucoup de travail.", "I had a lot of work."], ["J'ai pris la voiture.", "I took the car."], ["J'ai mis mon téléphone là.", "I put my phone there."], ["J'ai eu besoin d'argent.", "I needed money."], ["J'ai eu peu de temps.", "I had little time."]], tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Participes irréguliers : fait, eu, pris, mis, dit, vu." }], prompt: "Utilise j'ai fait, j'ai eu, j'ai pris, j'ai mis, j'ai dit ou j'ai vu — choisis-en trois et fais une phrase avec chacun." },
  23: { grammar: "Révision : poser des questions au passé composé", vocab: "jour, semaine, week-end, matin, soir, nuit", vocabWords: ["jour/semaine/week-end", "matin/soir/nuit"], vocabExamples: [["Qu'est-ce que tu as fait ce jour-là ?", "What did you do that day?"], ["J'ai dormi tout le matin.", "I slept all morning."]], tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu as fait aujourd'hui ? » et réponds aussi pour toi-même." },
  24: { grammar: "Verbes avec être au passé composé : aller, venir", vocab: "repas, dîner, déjeuner, courses, faire les courses", vocabWords: ["repas/dîner/déjeuner", "courses", "faire les courses"], vocabExamples: [["J'ai mangé un bon repas.", "I ate a good meal."], ["J'ai fait les courses ce matin.", "I went grocery shopping this morning."], ["Je suis allé faire les courses.", "I went to do the shopping."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Le participe s'accorde : il est allé / elle est allée." }], prompt: "Raconte où tu es allé(e) et qui est venu te voir récemment : « Je suis allé(e)... », « Il/elle est venu(e)... »." },
  25: { grammar: "Verbes avec être : arriver, partir", vocab: "ranger, nettoyer, rentrer", vocabWords: ["ranger", "nettoyer", "rentrer"], vocabExamples: [["J'ai rangé ma chambre.", "I tidied my room."], ["J'ai nettoyé la cuisine.", "I cleaned the kitchen."], ["Je suis rentré tard.", "I came home late."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis arrivé(e), tu es parti(e)." }], prompt: "Raconte à quelle heure tu es arrivé(e) et parti(e) aujourd'hui." },
  26: { grammar: "Révision : aller, venir, arriver, partir", vocab: "voyage, vacances, rendez-vous, projet", vocabWords: ["voyage/vacances", "rendez-vous", "projet"], vocabExamples: [["J'ai un voyage prévu.", "I have a trip planned."], ["J'ai un rendez-vous demain.", "I have an appointment tomorrow."], ["J'ai un nouveau projet.", "I have a new project."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows }], prompt: "Raconte ta journée en quatre phrases avec aller, venir, arriver et partir." },
  27: { grammar: "Verbes avec être : rester, sortir", vocab: "problème, solution", vocabWords: ["problème", "solution"], vocabExamples: [["J'ai eu un problème hier.", "I had a problem yesterday."], ["J'ai trouvé une solution.", "I found a solution."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis resté(e), tu es sorti(e)." }], prompt: "Dis si tu es resté(e) à la maison ou si tu es sorti(e) ce week-end." },
  28: { grammar: "Révision complète des verbes avec être — l'accord", vocab: "Révision vie quotidienne", vocabWords: [], tables: [{ title: "Passé composé avec être — accord", rows: CONJUGATIONS.etre.rows, note: "elle est allée / ils sont sortis / elles sont parties." }], prompt: "Raconte la journée de quelqu'un d'autre (il/elle) — fais attention à l'accord : « elle est allée », « ils sont sortis »." },
  29: { grammar: "Mélange avoir + être au passé composé", vocab: "Révision vie quotidienne", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en mélangeant avoir et être : « Je suis allé(e) au travail, j'ai mangé, puis je suis rentré(e). »" },
  30: { grammar: "Connecteurs de récit : puis, ensuite, alors", vocab: "Révision vie quotidienne", vocabWords: ["puis", "ensuite", "alors"], vocabExamples: [["J'ai mangé, puis je suis sorti.", "I ate, then I went out."], ["Je suis rentré, ensuite j'ai dormi.", "I came home, then I slept."], ["Il faisait froid, alors je suis resté.", "It was cold, so I stayed in."]], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en reliant les phrases avec puis, ensuite, alors." },
  31: { grammar: "Révision libre du bloc", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Réécoute ta phrase du Jour 21 et améliore-la." },
  32: { grammar: "Jour de parole : raconte ta journée d'hier en détail", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée d'hier en détail, à voix haute, une minute minimum." },
  33: { grammar: "Jour de parole : raconte un événement familial récent", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte un événement familial récent en quatre ou cinq phrases au passé composé." },
  34: { grammar: "Révision des points faibles identifiés", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Reprends les verbes du passé composé qui te bloquent encore et répète-les trois fois chacun." },
  35: { grammar: "Checkpoint du bloc : monologue de 2 min entièrement au passé composé", vocab: "Révision de tout le bloc 3", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Enregistre un monologue de deux minutes entièrement au passé composé." },

  36: { grammar: "Futur proche : aller + infinitif", vocab: "manger, boire, café, eau", vocabWords: ["manger", "boire", "café", "eau"], vocabExamples: [["Je vais manger bientôt.", "I'm going to eat soon."], ["Tu vas boire un café ?", "Are you going to have a coffee?"], ["On va prendre un café.", "We're going to have a coffee."], ["Il y a de l'eau dans le frigo.", "There's water in the fridge."]], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows, note: "Exemple : je vais manger, tu vas sortir, ils vont rester." }], prompt: "Dis ce que tu vas faire avec aller + infinitif : « Je vais... », « Tu vas... », « Il/elle va... »." },
  37: { grammar: "Futur proche — pratique : parler de cette semaine", vocab: "restaurant, inviter, fête, anniversaire, cadeau", vocabWords: ["restaurant", "inviter", "fête", "anniversaire", "cadeau"], vocabExamples: [["On va aller au restaurant.", "We're going to go to the restaurant."], ["Je vais inviter mes amis.", "I'm going to invite my friends."], ["Il y a une fête samedi.", "There's a party on Saturday."], ["C'est mon anniversaire demain.", "It's my birthday tomorrow."], ["J'ai un cadeau pour toi.", "I have a gift for you."]], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Dis trois choses que tu vas faire cette semaine." },
  38: { grammar: "Révision futur proche", vocab: "Révision nourriture & social", vocabWords: [], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu vas faire ce week-end ? »" },
  39: { grammar: "Impératif — formes « tu » (viens, attends, dis-moi, fais)", vocab: "boire un verre, cuisiner, recette, plat, dessert", vocabWords: ["boire un verre", "cuisiner", "recette", "plat", "dessert"], vocabExamples: [["Viens ici !", "Come here!"], ["On va boire un verre ce soir ?", "Shall we grab a drink tonight?"], ["J'aime cuisiner le week-end.", "I like cooking on weekends."], ["Donne-moi la recette.", "Give me the recipe."], ["Ce plat est délicieux.", "This dish is delicious."]], tables: [CONJUGATIONS.impTu], prompt: "Donne trois ordres ou demandes avec l'impératif : « Viens ! », « Attends ! », « Dis-moi ! »." },
  40: { grammar: "Impératif — formes « nous/vous » (allons-y, venez)", vocab: "santé, bon appétit, trinquer, partager un repas", vocabWords: ["santé", "bon appétit", "trinquer", "partager un repas"], vocabExamples: [["Santé !", "Cheers!"], ["Bon appétit !", "Enjoy your meal!"], ["On va trinquer ensemble.", "We're going to toast together."], ["J'aime partager un repas en famille.", "I like sharing a meal with family."]], tables: [CONJUGATIONS.impNousVous], prompt: "Utilise « Allons-y ! » et « Venez ! » dans une situation imaginée." },
  41: { grammar: "Révision impératif", vocab: "Révision nourriture & social", vocabWords: [], tables: [CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Pratique cinq demandes que tu dirais vraiment à la maison, à l'impératif." },
  42: { grammar: "venir de + infinitif (passé récent) — introduction", vocab: "Révision : rendez-vous, projet", vocabWords: [], tables: [{ title: "venir de + infinitif (passé récent)", rows: CONJUGATIONS.venir.rows, note: "Exemple : je viens de manger, tu viens de partir." }], prompt: "Dis ce que tu viens de faire : « Je viens de... », « Tu viens de... »." },
  43: { grammar: "venir de + infinitif — pratique", vocab: "Révision libre", vocabWords: [], tables: [{ title: "venir de + infinitif (passé récent)", rows: CONJUGATIONS.venir.rows }], prompt: "Dis trois choses que tu viens de faire aujourd'hui." },
  44: { grammar: "Révision : venir de + futur proche ensemble", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.aller, CONJUGATIONS.venir], prompt: "Combine les deux dans une phrase : « Je viens de... et je vais... »." },
  45: { grammar: "Mélange : projets + actions récentes + demandes", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Raconte un plan : ce que tu viens de faire, ce que tu vas faire, et une demande à quelqu'un." },
  46: { grammar: "Jour de parole : fais des projets pour le week-end à voix haute", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.aller], prompt: "Fais des projets pour le week-end à voix haute, avec aller + infinitif." },
  47: { grammar: "Jour de parole : 5 vraies demandes que tu dirais à la maison", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Dis cinq vraies demandes que tu dirais à la maison, à l'impératif." },
  48: { grammar: "Révision des points faibles", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Reprends ce qui te bloque encore dans ce bloc et répète-le." },
  49: { grammar: "Intègre tout le bloc dans un dialogue court", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu, CONJUGATIONS.impNousVous], prompt: "Imagine un court dialogue avec futur proche, impératif et venir de." },
  50: { grammar: "Checkpoint du bloc : monologue de 2 min avec futur proche, impératif, venir de", vocab: "Révision de tout le bloc 4", vocabWords: [], tables: [CONJUGATIONS.aller, CONJUGATIONS.venir, CONJUGATIONS.impTu], prompt: "Enregistre un monologue de deux minutes avec futur proche, impératif et venir de." },

  51: { grammar: "je voudrais / j'aimerais", vocab: "Révision émotions & opinions", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Utilise « je voudrais » et « j'aimerais » dans deux phrases sur ce que tu veux faire bientôt." },
  52: { grammar: "tu pourrais / est-ce que tu pourrais", vocab: "Révision émotions & opinions", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Transforme une demande directe en demande adoucie : « Fais ça » → « Tu pourrais faire ça ? »." },
  53: { grammar: "ça serait + révision des formules d'adoucissement", vocab: "d'accord, pas d'accord, sûr(e), peut-être", vocabWords: ["sûr(e)", "peut-être"], vocabExamples: [["Je suis sûr que ça va marcher.", "I'm sure it will work."], ["Peut-être qu'on peut se voir demain.", "Maybe we can see each other tomorrow."]], tables: [CONJUGATIONS.condChunks], prompt: "Utilise « ça serait » dans une phrase : « Ça serait bien de... »." },
  54: { grammar: "Désaccord & réparation : pas d'accord, ce n'est pas grave, on peut en parler", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Pratique : « Je ne suis pas d'accord, mais... » suivi de « Ce n'est pas grave » ou « On peut en parler »." },
  55: { grammar: "Checkpoint du bloc : adoucis 3 demandes réelles + 1 désaccord", vocab: "Révision de tout le bloc 5", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Adoucis trois demandes réelles et pratique un désaccord avec réparation." },

  56: { grammar: "Aucune nouvelle structure — monologue intégrant présent, passé composé, futur proche, conditionnel", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Enregistre un monologue de deux minutes intégrant présent, passé composé, futur proche et une formule au conditionnel." },
  57: { grammar: "Vraie conversation de 10+ minutes, sans anglais pendant les 5 premières minutes", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Vraie conversation de dix minutes ou plus, sans anglais pendant les cinq premières minutes." },
  58: { grammar: "Compare ton enregistrement du Jour 20 à aujourd'hui", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Réécoute ton enregistrement du Jour 20 — qu'est-ce qui a changé depuis ?" },
  59: { grammar: "Réparation ciblée des 3 points qui te bloquent encore", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Reprends les trois points qui te bloquent encore et entraîne-toi uniquement sur ceux-là." },
  60: { grammar: "Monologue final + vraie conversation — compare au Jour 1", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Monologue final, puis vraie conversation — compare au tout premier jour." , chapter: {"n":10,"file":null,"title":"à venir"} }
};

// Days where every table should render collapsed by default (heavy review days —
// the learner already knows this material, so tables are reference, not the lesson).
const REVIEW_DAYS = [10, 20, 35, 50];

// Each step is [French headline, English gloss]. The checklist itself is
// operational instruction, not learning content, so a muted English subtext
// is shown under each French line — it's scaffolding for early days, not
// something to actively study.
const SESSION_TEMPLATE = [
  ["Rappel", "Quick review of today's vocab and example sentences (3–5 min)"],
  ["Écoute + répétition", "Listen to each example sentence twice, then repeat it out loud (7–8 min)"],
  ["Expression orale", "Answer today's prompt out loud — recorded, or with a real person (8–10 min)"],
  ["Lecture ou écriture", "Read today's material again, or write 3–4 sentences using today's structure (3–5 min)"]
];
