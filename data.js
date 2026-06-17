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

const SESSION_TEMPLATE = [
  "Recall — quick spaced-repetition pass on today's vocab/chunk batch (3-5 min)",
  "Listening + shadowing — one native-speed clip, listen twice, shadow it out loud (7-8 min)",
  "Speaking output — answer today's prompt out loud, recorded or with a real person (8-10 min)",
  "Reading or writing — short native text, or write 3-4 sentences with the new structure (3-5 min)"
];
