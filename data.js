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
  1: { grammar: "être (au présent)", vocab: "Pronoms sujets : je, tu, il, elle, on, nous, vous, ils, elles", vocabWords: ["je", "tu", "il", "elle", "on", "nous", "vous"], examples: { grammar: [["Je suis content.", "I am happy."], ["Tu es gentil.", "You are kind."], ["Il est là.", "He is there."], ["Elle est prête.", "She is ready."], ["On est en retard.", "We're late."], ["Nous sommes ensemble.", "We are together."], ["Vous êtes libre ce soir ?", "Are you free tonight?"]], listening: [["Je suis content.", "I am happy."], ["Tu es prêt ?", "Are you ready?"], ["Nous sommes ensemble.", "We are together."]] }, dialogue: [["A", "Tu es prêt ?", "Are you ready?"], ["B", "Oui, je suis prêt.", "Yes, I'm ready."], ["A", "Et ta sœur, elle est prête aussi ?", "And your sister, is she ready too?"], ["B", "Non, elle est en retard, comme toujours.", "No, she's late, as always."]], didYouNotice: "« On » remplace très souvent « nous » à l'oral en famille — « On est en retard » sonne plus naturel que « Nous sommes en retard », même si les deux sont corrects.", didYouNoticeEn: "« On » very often replaces « nous » in spoken family French — « On est en retard » sounds more natural than « Nous sommes en retard », even though both are correct.", tables: [CONJUGATIONS.etre], prompt: "Mission : dis trois phrases sur toi et ta famille avec être — utilise au moins trois formes différentes (je suis, tu es, il/elle est...).", promptEn: "Mission: say three sentences about yourself and your family using être — use at least three different forms (je suis, tu es, il/elle est...)." },
  2: { grammar: "avoir (au présent)", vocab: "Pronoms compléments (moi, toi, lui) + possessifs (mon/ma/mes, ton/ta/tes)", vocabWords: ["moi", "toi", "lui", "mon/ma/mes", "ton/ta/tes"], examples: { grammar: [["J'ai confiance en toi.", "I trust you."], ["Tu as mes clés ?", "Do you have my keys?"], ["Il a ton stylo, pas moi.", "He has your pen, not me."], ["Elle a ma confiance.", "She has my trust."], ["Nous avons ton adresse.", "We have your address."], ["Vous avez raison, pas lui.", "You're right, not him."], ["Ils ont mon numéro.", "They have my number."]], listening: [["J'ai confiance en toi.", "I trust you."], ["Tu as mes clés ?", "Do you have my keys?"], ["Vous avez raison, pas lui.", "You're right, not him."]] }, dialogue: [["A", "Tu as mon numéro ?", "Do you have my number?"], ["B", "Oui, j'ai ton numéro.", "Yes, I have your number."], ["A", "Et tu as mes clés aussi ?", "And do you have my keys too?"], ["B", "Non, ça, je ne les ai pas.", "No, I don't have those."]], didYouNotice: "Le français utilise souvent « avoir » là où l'anglais utilise « to be » — avoir raison (to be right), avoir tort (to be wrong), avoir faim (to be hungry).", didYouNoticeEn: "French often uses « avoir » where English uses \"to be\" — avoir raison (to be right), avoir tort (to be wrong), avoir faim (to be hungry).", tables: [CONJUGATIONS.avoir], prompt: "Mission : dis trois phrases avec avoir sur ce que toi et ta famille avez — utilise au moins trois formes différentes.", promptEn: "Mission: say three sentences with avoir about what you and your family have — use at least three different forms." },
  3: { grammar: "Révision : être + avoir ensemble", vocab: "Possessifs (son/sa/ses, notre, votre, leur)", vocabWords: ["son/sa/ses", "notre", "votre", "leur"], examples: { grammar: [["Sa sœur est drôle.", "His/her sister is funny."], ["Son père a raison.", "His/her father is right."], ["Notre maison est petite.", "Our house is small."], ["Notre famille a une grande maison.", "Our family has a big house."], ["Votre famille est grande.", "Your family is big."], ["Leur fille est fatiguée.", "Their daughter is tired."]], listening: [["Sa sœur est drôle.", "His/her sister is funny."], ["Notre maison est petite.", "Our house is small."], ["Leur fille est fatiguée.", "Their daughter is tired."]] }, dialogue: [["A", "Comment est ta sœur ?", "What's your sister like?"], ["B", "Elle est drôle, et elle a beaucoup de patience.", "She's funny, and she has a lot of patience."], ["A", "Et votre maison, elle est grande ?", "And your house, is it big?"], ["B", "Non, notre maison est petite, mais on est bien.", "No, our house is small, but we're happy there."]], didYouNotice: "« Son/sa/ses » s'accorde avec le mot qui suit, pas avec la personne dont on parle — « son père » et « sa mère » utilisent son/sa selon le genre du mot (père, mère), pas selon qui possède.", didYouNoticeEn: "« Son/sa/ses » agrees with the word that follows it, not with the person being talked about — « son père » and « sa mère » use son/sa based on the gender of the noun (père, mère), not who owns it.", tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir], prompt: "Mission : décris deux membres de ta famille en combinant être et avoir dans la même phrase, comme « Il est fatigué et il a faim ».", promptEn: "Mission: describe two family members by combining être and avoir in the same sentence, like « Il est fatigué et il a faim »." },
  4: { grammar: "faire (au présent)", vocab: "Famille proche : maman, papa, frère, sœur, fils, fille", vocabWords: ["maman", "papa", "frère", "sœur", "fils", "fille"], examples: { grammar: [["Je fais le dîner.", "I'm making dinner."], ["Tu fais la vaisselle.", "You're doing the dishes."], ["Papa fait la cuisine.", "Dad is cooking."], ["Maman fait le café.", "Mom is making coffee."], ["Mon frère fait ses devoirs.", "My brother is doing his homework."], ["Nous faisons une promenade avec ma sœur.", "We're going for a walk with my sister."], ["Vous faites une surprise à votre fille ?", "Are you surprising your daughter?"], ["Mon fils et ma fille font leurs devoirs ensemble.", "My son and daughter are doing homework together."]], listening: [["Je fais le dîner.", "I'm making dinner."], ["Papa fait la cuisine.", "Dad is cooking."], ["Mon fils et ma fille font leurs devoirs ensemble.", "My son and daughter are doing homework together."]] }, dialogue: [["A", "Tu fais quoi ?", "What are you doing?"], ["B", "Je fais le dîner.", "I'm making dinner."], ["A", "Tu veux de l'aide ?", "Do you want some help?"], ["B", "Oui, merci !", "Yes, thanks!"]], didYouNotice: "« Faire » couvre énormément d'activités où l'anglais utilise un autre verbe : faire les courses (go shopping), faire la cuisine (cook), faire du sport (exercise).", didYouNoticeEn: "« Faire » covers a huge range of activities where English uses a different verb: faire les courses (go shopping), faire la cuisine (cook), faire du sport (exercise).", tables: [CONJUGATIONS.faire], prompt: "Mission : regarde les exemples, puis parle de ta vraie vie pendant une minute. Utilise au moins quatre formes de faire.", promptEn: "Mission: look at the examples, then talk about your real life for one minute. Use at least four forms of faire." },
  5: { grammar: "aller (au présent)", vocab: "Famille : mari, femme, copain, copine, enfant, bébé", vocabWords: ["mari", "femme", "copain/copine", "enfant", "bébé"], examples: { grammar: [["Je vais au marché.", "I'm going to the market."], ["Tu vas chez ton copain ?", "Are you going to your boyfriend's place?"], ["Mon mari va à la maison.", "My husband is going home."], ["Ma femme va au marché avec le bébé.", "My wife is going to the market with the baby."], ["Nous allons chez mes parents.", "We're going to my parents' place."], ["Vous allez chez votre copine ?", "Are you going to your girlfriend's place?"], ["Les enfants vont au parc avec le bébé.", "The kids are going to the park with the baby."]], listening: [["Je vais au marché.", "I'm going to the market."], ["Nous allons chez mes parents.", "We're going to my parents' place."], ["Les enfants vont au parc avec le bébé.", "The kids are going to the park with the baby."]] }, dialogue: [["A", "Tu vas où ?", "Where are you going?"], ["B", "Je vais chez mes parents.", "I'm going to my parents' place."], ["A", "Avec le bébé ?", "With the baby?"], ["B", "Oui, avec le bébé et mon mari.", "Yes, with the baby and my husband."]], didYouNotice: "« Chez » + une personne veut dire « à/chez la maison de cette personne » — chez mes parents, chez toi, chez lui. L'anglais n'a pas d'équivalent en un seul mot.", didYouNoticeEn: "« Chez » + a person means \"at/to that person's home\" — chez mes parents, chez toi, chez lui. English has no single-word equivalent.", tables: [CONJUGATIONS.aller], prompt: "Mission : dis où vont trois personnes de ta famille aujourd'hui, en utilisant aller à au moins trois formes différentes.", promptEn: "Mission: say where three people in your family are going today, using aller in at least three different forms." },
  6: { grammar: "Révision : faire + aller", vocab: "Belle-famille : beau-père, belle-mère, beau-frère, belle-sœur, grands-parents", vocabWords: ["beau-père/belle-mère", "beau-frère/belle-sœur", "grands-parents"], examples: { grammar: [["Mon beau-père fait le café.", "My father-in-law is making coffee."], ["Ma belle-mère va au marché.", "My mother-in-law is going to the market."], ["Mon beau-frère fait la cuisine.", "My brother-in-law is cooking."], ["Ma belle-sœur va chez mes parents.", "My sister-in-law is going to my parents' place."], ["Mes grands-parents font une promenade.", "My grandparents are going for a walk."], ["Nous allons chez mes grands-parents.", "We're going to my grandparents' place."], ["Vous faites quoi avec vos beaux-parents ?", "What are you doing with your in-laws?"]], listening: [["Mon beau-père fait le café.", "My father-in-law is making coffee."], ["Nous allons chez mes grands-parents.", "We're going to my grandparents' place."], ["Vous faites quoi avec vos beaux-parents ?", "What are you doing with your in-laws?"]] }, dialogue: [["A", "Qu'est-ce que tu fais chez tes grands-parents ?", "What are you doing at your grandparents' place?"], ["B", "On fait la cuisine ensemble.", "We're cooking together."], ["A", "Et ton beau-frère, il fait quoi ?", "And your brother-in-law, what's he doing?"], ["B", "Il fait la vaisselle !", "He's doing the dishes!"]], didYouNotice: "Le préfixe « beau-/belle- » dans beau-père, belle-mère, beau-frère... veut littéralement dire « beau/belle » — c'est un ancien titre de courtoisie, pas une description physique.", didYouNoticeEn: "The prefix « beau-/belle- » in beau-père, belle-mère, beau-frère... literally means \"beau/belle\" — it's an old courtesy title, not a physical description.", tables: [CONJUGATIONS.faire, CONJUGATIONS.aller], prompt: "Mission : raconte ce que fait et où va ta belle-famille cette semaine, avec faire et aller.", promptEn: "Mission: talk about what your in-laws are doing and where they're going this week, using faire and aller." },
  7: { grammar: "pouvoir (au présent)", vocab: "Émotions de base : content(e), heureux/heureuse, triste, fâché(e)", vocabWords: ["content(e)", "heureux/heureuse", "triste", "fâché(e)"], examples: { grammar: [["Je peux être content aujourd'hui.", "I can be happy today."], ["Tu peux être heureux avec moi.", "You can be happy with me."], ["Il peut être triste aujourd'hui.", "He can be sad today."], ["Elle peut être fâchée aussi.", "She can be angry too."], ["Nous pouvons être heureux ensemble.", "We can be happy together."], ["Vous pouvez être contents aujourd'hui.", "You can be happy today."], ["Ils peuvent être tristes aussi.", "They can be sad too."]], listening: [["Je peux être content aujourd'hui.", "I can be happy today."], ["Nous pouvons être heureux ensemble.", "We can be happy together."], ["Ils peuvent être tristes aussi.", "They can be sad too."]] }, dialogue: [["A", "Tu peux m'aider ?", "Can you help me?"], ["B", "Oui, je peux t'aider.", "Yes, I can help you."], ["A", "Merci, je suis un peu triste aujourd'hui.", "Thanks, I'm a little sad today."], ["B", "Je peux être là pour toi.", "I can be here for you."]], didYouNotice: "« Pouvoir » se met directement devant un autre verbe, sans mot pour « to » — « je peux aider » et non « je peux à aider ».", didYouNoticeEn: "« Pouvoir » goes directly before another verb, with no word for \"to\" — « je peux aider », not « je peux à aider ».", tables: [CONJUGATIONS.pouvoir], prompt: "Mission : dis trois choses que toi et ta famille pouvez faire ensemble ce week-end.", promptEn: "Mission: say three things you and your family can do together this weekend." },
  8: { grammar: "vouloir (au présent)", vocab: "Émotions : fatigué(e), stressé(e), surpris(e), fier/fière, gêné(e)", vocabWords: ["fatigué(e)", "stressé(e)", "surpris(e)", "fier/fière", "gêné(e)"], examples: { grammar: [["Je veux être fier de toi.", "I want to be proud of you."], ["Tu veux être fier, pas gêné.", "You want to be proud, not embarrassed."], ["Il veut être content, pas fatigué.", "He wants to be happy, not tired."], ["Elle veut être surprise par toi.", "She wants to be surprised by you."], ["Nous voulons être fiers de nos enfants.", "We want to be proud of our kids."], ["Vous voulez être fiers de la famille.", "You want to be proud of the family."], ["Ils veulent être surpris.", "They want to be surprised."]], listening: [["Je veux être fier de toi.", "I want to be proud of you."], ["Nous voulons être fiers de nos enfants.", "We want to be proud of our kids."], ["Ils veulent être surpris.", "They want to be surprised."]] }, dialogue: [["A", "Tu veux quoi pour toi, ce soir ?", "What do you want for yourself, tonight?"], ["B", "Je veux être content, pas stressé.", "I want to be happy, not stressed."], ["A", "Moi aussi. Je veux être fier de notre semaine.", "Me too. I want to be proud of our week."]], didYouNotice: "« Vouloir » + infinitif est plus direct en français que l'anglais « would like » — « je veux » peut sonner un peu brusque, c'est pourquoi on apprendra bientôt « je voudrais », plus doux.", didYouNoticeEn: "« Vouloir » + infinitive is more direct in French than English \"would like\" — « je veux » can sound a bit blunt, which is why you'll soon learn the softer « je voudrais ».", tables: [CONJUGATIONS.vouloir], prompt: "Mission : dis ce que veulent trois personnes différentes de ta famille, en utilisant vouloir à plusieurs formes.", promptEn: "Mission: say what three different people in your family want, using vouloir in several forms." },
  9: { grammar: "Révision pouvoir + vouloir, et le patron régulier des verbes en -er", vocab: "d'accord, pas d'accord, peut-être, vraiment", vocabWords: ["d'accord", "pas d'accord", "peut-être", "vraiment"], examples: { grammar: [["D'accord, je peux faire ça.", "Okay, I can do that."], ["Tu veux vraiment parler de ça ?", "Do you really want to talk about that?"], ["Il peut parler un peu français.", "He can speak a little French."], ["Elle veut peut-être rester à la maison.", "Maybe she wants to stay home."], ["Nous pouvons regarder un film ensemble.", "We can watch a movie together."], ["Vous voulez manger avec nous ?", "Do you want to eat with us?"], ["Ils ne sont pas d'accord, mais ils peuvent essayer.", "They disagree, but they can try."]], listening: [["D'accord, je peux faire ça.", "Okay, I can do that."], ["Tu veux vraiment parler de ça ?", "Do you really want to talk about that?"], ["Nous pouvons regarder un film ensemble.", "We can watch a movie together."]] }, dialogue: [["A", "Tu veux vraiment parler français avec moi ?", "Do you really want to speak French with me?"], ["B", "Oui, d'accord, je peux essayer.", "Yes, okay, I can try."], ["A", "Tu peux parler un peu plus lentement ?", "Can you speak a little slower?"], ["B", "D'accord, pas de problème.", "Okay, no problem."]], didYouNotice: "Les verbes en -er sont la plus grande famille de verbes en français — une fois que tu connais « parler », les mêmes terminaisons marchent pour regarder, manger, écouter, et des centaines d'autres.", didYouNoticeEn: "-er verbs are the largest family of verbs in French — once you know « parler », the same endings work for regarder, manger, écouter, and hundreds more.", tables: [CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir, CONJUGATIONS.parlerEr], prompt: "Mission : enregistre-toi pendant une minute en mélangeant pouvoir, vouloir et un verbe en -er comme parler.", promptEn: "Mission: record yourself for one minute mixing pouvoir, vouloir, and an -er verb like parler." },
  10: { grammar: "Révision complète du bloc : être, avoir, faire, aller, pouvoir, vouloir + verbes en -er", vocab: "Révision de tout le vocabulaire des jours 1 à 9", vocabWords: [], tables: [CONJUGATIONS.etre, CONJUGATIONS.avoir, CONJUGATIONS.faire, CONJUGATIONS.aller, CONJUGATIONS.pouvoir, CONJUGATIONS.vouloir], prompt: "Mission de contrôle : enregistre un mini-monologue d'une minute en utilisant être, avoir, faire, aller, pouvoir et vouloir — sans regarder tes notes.", promptEn: "Checkpoint mission: record a one-minute mini-monologue using être, avoir, faire, aller, pouvoir, and vouloir — without looking at your notes." },

  11: { grammar: "savoir (au présent)", vocab: "Temps : aujourd'hui, hier, demain, maintenant", vocabWords: ["aujourd'hui", "hier", "demain", "maintenant"], vocabExamples: [["Aujourd'hui, je sais où je vais.", "Today, I know where I'm going."], ["Maintenant, tu sais tout.", "Now you know everything."], ["Il sait ce qu'il veut faire demain.", "He knows what he wants to do tomorrow."], ["Elle sait bien cuisiner.", "She knows how to cook well."], ["Nous savons que c'est difficile aujourd'hui.", "We know it's hard today."], ["Vous savez ce que vous voulez, maintenant ?", "Do you know what you want, now?"], ["Ils savent tout sur la famille.", "They know everything about the family."]], tables: [CONJUGATIONS.savoir], prompt: "Dis ce que tu sais faire avec savoir : « Je sais... », « Tu sais... », « Il/elle sait... ».", promptEn: "Say what you know how to do with savoir: « Je sais... », « Tu sais... », « Il/elle sait... »." },
  12: { grammar: "venir (au présent)", vocab: "Fréquence : toujours, jamais, souvent, parfois, déjà, encore", vocabWords: ["toujours", "jamais", "souvent", "parfois", "déjà", "encore"], vocabExamples: [["Je viens toujours ici.", "I always come here."], ["Tu ne viens jamais.", "You never come."], ["On vient souvent le soir.", "We often come in the evening."], ["Elle vient parfois le matin.", "She sometimes comes in the morning."], ["Nous venons déjà à midi.", "We're already coming at noon."], ["Ils viennent encore ce soir.", "They're coming again tonight."]], tables: [CONJUGATIONS.venir], prompt: "Dis d'où tu viens avec venir : « Je viens... », « Tu viens... », « Il/elle vient... ».", promptEn: "Say where you come from with venir: « Je viens... », « Tu viens... », « Il/elle vient... »." },
  13: { grammar: "Révision savoir + venir", vocab: "Quantité : beaucoup, un peu, assez, trop", vocabWords: ["beaucoup", "un peu", "assez", "trop"], vocabExamples: [["Je sais beaucoup de choses.", "I know a lot of things."], ["Tu viens un peu en retard.", "You're coming a little late."], ["Il sait assez bien cuisiner.", "He knows how to cook well enough."], ["Ils viennent trop souvent.", "They come too often."]], tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir], prompt: "Combine savoir et venir dans deux phrases sur ta semaine.", promptEn: "Combine savoir and venir in two sentences about your week." },
  14: { grammar: "voir (au présent)", vocab: "Quantité : peu, plus, moins, tout/tous/toute/toutes, rien", vocabWords: ["peu", "plus", "moins", "tout/tous/toute/toutes", "rien"], vocabExamples: [["Je vois peu de monde le week-end.", "I see few people on weekends."], ["Tu vois plus de choses que moi.", "You see more things than me."], ["Il voit moins sa famille maintenant.", "He sees his family less now."], ["Elle voit tout le monde à la fête.", "She sees everyone at the party."], ["Nous ne voyons rien de nouveau.", "We don't see anything new."], ["Vous voyez tout, vous deux.", "You two see everything."], ["Ils voient toute la famille ce week-end.", "They see the whole family this weekend."]], tables: [CONJUGATIONS.voir], prompt: "Dis qui tu vois avec voir : « Je vois... », « Tu vois... », « Il/elle voit... ».", promptEn: "Say who you see with voir: « Je vois... », « Tu vois... », « Il/elle voit... »." },
  15: { grammar: "prendre (au présent)", vocab: "Opinions : penser que, croire que, trouver que", vocabWords: ["penser que", "croire que", "trouver que"], vocabExamples: [["Je prends un café le matin.", "I have a coffee in the morning."], ["Tu prends ton temps, je trouve que c'est bien.", "You're taking your time, I think that's good."], ["Il prend le train, je crois.", "He's taking the train, I believe."], ["Elle prend soin de sa famille, je pense.", "She takes care of her family, I think."], ["Nous prenons un dessert, tu penses que c'est trop ?", "We're having dessert, do you think that's too much?"], ["Vous prenez le temps de parler, je trouve que c'est important.", "You take the time to talk, I think that's important."], ["Ils prennent le café ensemble tous les matins.", "They have coffee together every morning."]], tables: [CONJUGATIONS.prendre], prompt: "Dis ce que tu prends avec prendre : « Je prends... », « Tu prends... », « Il/elle prend... ». Par exemple : « Je prends un café. »", promptEn: "Say what you're having/taking with prendre: « Je prends... », « Tu prends... », « Il/elle prend... ». For example: « Je prends un café. »" },
  16: { grammar: "Révision voir + prendre", vocab: "avoir envie de, avoir besoin de, avoir peur de, avoir hâte de, espérer", vocabWords: ["avoir envie de", "avoir besoin de", "avoir peur de", "avoir hâte de", "espérer"], vocabExamples: [["J'ai envie de voir ma famille.", "I feel like seeing my family."], ["Tu as besoin de prendre une pause.", "You need to take a break."], ["Il a peur de prendre l'avion.", "He's afraid of taking the plane."], ["Elle a hâte de voir ses grands-parents.", "She can't wait to see her grandparents."], ["Nous espérons voir toute la famille ce week-end.", "We hope to see the whole family this weekend."], ["Vous avez envie de prendre un café ?", "Do you feel like having a coffee?"]], tables: [CONJUGATIONS.voir, CONJUGATIONS.prendre], prompt: "Réponds : « Qu'est-ce que tu prends d'habitude le matin ? Qui est-ce que tu vois cette semaine ? »", promptEn: "Answer: \"What do you usually have in the morning? Who are you seeing this week?\"" },
  17: { grammar: "dire (au présent)", vocab: "Descripteurs : bon/bonne, mauvais(e), grand(e), petit(e), beau/belle", vocabWords: ["bon/bonne", "mauvais(e)", "grand(e)", "petit(e)", "beau/belle"], vocabExamples: [["Je dis toujours la vérité.", "I always tell the truth."], ["Tu dis que c'est une bonne idée.", "You say it's a good idea."], ["Il dit que c'est un mauvais moment.", "He says it's a bad time."], ["Elle dit que son frère est grand.", "She says her brother is tall."], ["Nous disons que c'est une petite maison.", "We say it's a small house."], ["Vous dites qu'elle est belle.", "You say she's beautiful."], ["Ils disent que c'est très beau ici.", "They say it's very beautiful here."]], tables: [CONJUGATIONS.dire], prompt: "Dis ce que tu dis souvent avec dire : « Je dis... », « Tu dis... », « Il/elle dit... ».", promptEn: "Say what you often say with dire: « Je dis... », « Tu dis... », « Il/elle dit... »." },
  18: { grammar: "mettre (au présent)", vocab: "Descripteurs : gentil(le), drôle, sympa, difficile, facile, important(e)", vocabWords: ["gentil(le)", "drôle", "sympa", "difficile/facile", "important(e)"], vocabExamples: [["Je mets la table pour ma famille, je suis gentil.", "I set the table for my family, I'm kind."], ["Tu mets beaucoup d'effort, c'est important pour toi.", "You put in a lot of effort, it's important to you."], ["Il met de la bonne humeur, il est drôle.", "He brings good vibes, he's funny."], ["Elle met les choses en ordre, c'est facile pour elle.", "She puts things in order, it's easy for her."], ["Nous mettons du temps, mais c'est important.", "We take time, but it's important."], ["Vous mettez trop de pression, ce n'est pas sympa.", "You put too much pressure, that's not nice."], ["Ils mettent de la musique, c'est sympa.", "They put on music, that's nice."]], tables: [CONJUGATIONS.mettre], prompt: "Dis ce que tu mets avec mettre : « Je mets... », « Tu mets... », « Il/elle met... ».", promptEn: "Say what you put/set with mettre: « Je mets... », « Tu mets... », « Il/elle met... »." },
  19: { grammar: "connaître (au présent) + il faut (phrase figée, pas encore le subjonctif complet)", vocab: "Descripteurs : différent(e), nouveau/nouvelle, vieux/vieille, jeune, occupé(e), libre", vocabWords: ["différent(e)", "nouveau/nouvelle", "vieux/vieille", "jeune", "occupé(e)", "libre"], vocabExamples: [["Je connais un nouveau restaurant.", "I know a new restaurant."], ["Tu connais ma vieille voiture ?", "Do you know my old car?"], ["Il connaît bien sa jeune sœur.", "He knows his young sister well."], ["Elle connaît quelqu'un de très occupé.", "She knows someone who's very busy."], ["Nous connaissons une personne différente.", "We know a different person."], ["Il faut être libre pour voir la famille.", "You need to be free to see the family."], ["Il faut connaître toute la famille.", "You need to know the whole family."]], tables: [CONJUGATIONS.connaitre, CONJUGATIONS.falloir], prompt: "Dis qui tu connais avec connaître, puis utilise « il faut » dans une phrase figée : « Il faut que je parte » (pas besoin d'analyser sa conjugaison).", promptEn: "Say who you know with connaître, then use « il faut » in a fixed phrase: « Il faut que je parte » (no need to analyze its conjugation)." },
  20: { grammar: "Révision complète : savoir, venir, voir, prendre, dire, mettre, connaître, il faut", vocab: "Révision de tout le vocabulaire des jours 11 à 19", vocabWords: [], tables: [CONJUGATIONS.savoir, CONJUGATIONS.venir, CONJUGATIONS.voir, CONJUGATIONS.prendre, CONJUGATIONS.dire, CONJUGATIONS.mettre, CONJUGATIONS.connaitre], prompt: "Enregistre un monologue de 2 minutes en utilisant tous les verbes des blocs 1 et 2.", promptEn: "Record a 2-minute monologue using all the verbs from blocks 1 and 2." },

  21: { grammar: "Passé composé avec avoir — verbes réguliers en -er", vocab: "Maison : maison, appartement, chambre, cuisine, salon", vocabWords: ["maison", "appartement", "chambre", "cuisine", "salon"], vocabExamples: [["J'ai parlé avec ma sœur dans la cuisine.", "I talked with my sister in the kitchen."], ["J'ai mangé dans l'appartement.", "I ate in the apartment."], ["J'ai regardé la chambre.", "I looked at the bedroom."], ["J'ai travaillé dans le salon.", "I worked in the living room."], ["Nous avons habité dans cette maison.", "We lived in this house."], ["Tu as écouté de la musique dans le salon.", "You listened to music in the living room."], ["Il a aimé la nouvelle maison.", "He liked the new house."]], didYouNotice: "Passé composé is always two pieces: the helper (avoir, conjugated: j'ai, tu as, il a...) plus a participle (what happened: parlé, mangé...). For -er verbs the participle is predictable — drop -er, add -é — but you'll meet verbs on Day 22 where the participle doesn't follow this pattern at all.", tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Regular -er verbs have predictable past participles. The verb after avoir is never the infinitive. For regular -er verbs, simply replace -er with -é: parler → parlé, manger → mangé." }], participleLesson: { intro: "A past participle is a special form of a verb used after avoir (or être) to talk about completed actions. It is not the infinitive.", pairs: [["parler", "parlé", "to speak"], ["manger", "mangé", "to eat"], ["regarder", "regardé", "to watch/look"], ["aimer", "aimé", "to like/love"], ["écouter", "écouté", "to listen"], ["travailler", "travaillé", "to work"], ["habiter", "habité", "to live (somewhere)"]], helperExamples: [["j'ai", "parlé"], ["tu as", "parlé"], ["il a", "parlé"]], examplePairs: [["J'ai parlé.", "J'ai parler."]] }, prompt: "Raconte ce que tu as fait aujourd'hui avec des verbes en -er : « J'ai parlé avec... », « J'ai mangé... »." },
  22: { grammar: "Passé composé avec avoir — participes irréguliers", vocab: "travail, voiture, téléphone, argent, temps", vocabWords: ["travail", "voiture", "téléphone", "argent", "temps"], vocabExamples: [["J'ai eu beaucoup de travail.", "I had a lot of work."], ["J'ai pris la voiture.", "I took the car."], ["J'ai mis mon téléphone là.", "I put my phone there."], ["J'ai eu besoin d'argent.", "I needed money."], ["J'ai eu peu de temps.", "I had little time."], ["Tu as vu la nouvelle voiture ?", "Did you see the new car?"], ["Elle a fait beaucoup de travail aujourd'hui.", "She did a lot of work today."]], didYouNotice: "Passé composé always has two parts: the helper (avoir, conjugated: j'ai, tu as, il a...) and the past participle (the special verb form that describes the completed action). The verb after the helper is never the infinitive — you can't skip the participle, and you can't double avoir (\"j'ai avoir\" doesn't exist).", tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows, note: "Every verb has its own past participle. Regular -er verbs follow the pattern -er → -é, but irregular verbs must be learned individually: faire → fait, avoir → eu, prendre → pris. Remember: after avoir, you always use the past participle, never the infinitive." }], participleLesson: { intro: "Irregular verbs don't follow the -er → -é pattern — each one has its own past participle that has to be learned individually.", pairs: [["faire", "fait", "to do/make"], ["avoir", "eu", "to have"], ["prendre", "pris", "to take"], ["mettre", "mis", "to put"], ["dire", "dit", "to say"], ["voir", "vu", "to see"]], helperExamples: [["j'ai", "fait"], ["j'ai", "eu"], ["j'ai", "pris"]], examplePairs: [["J'ai fait.", "J'ai faire."], ["J'ai eu.", "J'ai avoir."]] }, prompt: "Utilise j'ai fait, j'ai eu, j'ai pris, j'ai mis, j'ai dit ou j'ai vu — choisis-en trois et fais une phrase avec chacun." },
  23: { grammar: "Révision : poser des questions au passé composé", vocab: "jour, semaine, week-end, matin, soir, nuit", vocabWords: ["jour/semaine/week-end", "matin/soir/nuit"], vocabExamples: [["Qu'est-ce que tu as fait ce jour-là ?", "What did you do that day?"], ["J'ai dormi tout le matin.", "I slept all morning."], ["Tu as travaillé toute la semaine ?", "Did you work all week?"], ["Il a dormi tout le week-end.", "He slept all weekend."], ["Elle a parlé tout le soir.", "She talked all evening."], ["Nous avons travaillé toute la nuit.", "We worked all night."]], tables: [{ title: "Passé composé = avoir (conjugué) + participe passé", rows: CONJUGATIONS.avoir.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu as fait aujourd'hui ? » et réponds aussi pour toi-même." },
  24: { grammar: "Verbes avec être au passé composé : aller, venir", vocab: "repas, dîner, déjeuner, courses, faire les courses", vocabWords: ["repas/dîner/déjeuner", "courses", "faire les courses"], vocabExamples: [["Je suis allé faire les courses ce matin.", "I went grocery shopping this morning."], ["Tu es allée au déjeuner en famille ?", "Did you go to the family lunch?"], ["Il est venu pour le dîner.", "He came for dinner."], ["Elle est venue préparer le repas.", "She came to prepare the meal."], ["Nous sommes allés au déjeuner ensemble.", "We went to lunch together."], ["Ils sont venus pour le repas du soir.", "They came for the evening meal."]], didYouNotice: "A small group of verbs (mostly movement, like aller and venir) use être instead of avoir as the helper. With these, the participle behaves like an adjective and agrees with the subject: il est allé, elle est allée, ils sont allés, elles sont allées. This agreement never happens with avoir-verbs — avoir-verbs' participles stay fixed no matter who the subject is.", tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Le participe s'accorde : il est allé / elle est allée." }], participleLesson: { intro: "Aller and venir use être as their helper instead of avoir, because they're verbs of movement. Like avoir-verbs, the participle is never the infinitive — but with être-verbs, the participle also changes spelling to agree with the subject.", pairs: [["aller", "allé(e)", "to go"], ["venir", "venu(e)", "to come"]], rule: "Passé composé = être (conjugué) + participe passé", helperExamples: [["je suis", "allé(e)"], ["tu es", "allé(e)"], ["il est", "allé"]], examplePairs: [["Je suis allé(e).", "Je suis aller."]] }, prompt: "Raconte où tu es allé(e) et qui est venu te voir récemment : « Je suis allé(e)... », « Il/elle est venu(e)... »." },
  25: { grammar: "Verbes avec être : arriver, partir", vocab: "ranger, nettoyer, rentrer", vocabWords: ["ranger", "nettoyer", "rentrer"], vocabExamples: [["Je suis arrivé tôt aujourd'hui.", "I arrived early today."], ["Tu es partie sans dire au revoir ?", "You left without saying goodbye?"], ["Il est arrivé tard ce soir.", "He arrived late tonight."], ["Elle est partie tôt ce matin.", "She left early this morning."], ["Nous sommes arrivés ensemble.", "We arrived together."], ["Ils sont partis avant le dîner.", "They left before dinner."], ["Je suis rentré tard, j'ai rangé la maison avant.", "I came home late, I tidied the house before that."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis arrivé(e), tu es parti(e)." }], participleLesson: { intro: "Arriver and partir also use être as their helper. Same two rules as Day 24: the participle is never the infinitive, and it agrees with the subject.", pairs: [["arriver", "arrivé(e)", "to arrive"], ["partir", "parti(e)", "to leave"]], rule: "Passé composé = être (conjugué) + participe passé", helperExamples: [["je suis", "arrivé(e)"], ["tu es", "parti(e)"], ["il est", "arrivé"]], examplePairs: [["Je suis arrivé(e).", "Je suis arriver."], ["Tu es parti(e).", "Tu es partir."]] }, prompt: "Raconte à quelle heure tu es arrivé(e) et parti(e) aujourd'hui." },
  26: { grammar: "Révision : aller, venir, arriver, partir", vocab: "voyage, vacances, rendez-vous, projet", vocabWords: ["voyage/vacances", "rendez-vous", "projet"], vocabExamples: [["Je suis allé en voyage récemment.", "I went on a trip recently."], ["Tu es venu pour les vacances ?", "Did you come for the holidays?"], ["Il est arrivé pour son rendez-vous.", "He arrived for his appointment."], ["Elle est partie pour un nouveau projet.", "She left for a new project."], ["Nous sommes allés en vacances ensemble.", "We went on vacation together."], ["Ils sont venus discuter du projet.", "They came to discuss the project."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows }], prompt: "Raconte ta journée en quatre phrases avec aller, venir, arriver et partir." },
  27: { grammar: "Verbes avec être : rester, sortir", vocab: "problème, solution", vocabWords: ["problème", "solution"], vocabExamples: [["Je suis resté à la maison à cause d'un problème.", "I stayed home because of a problem."], ["Tu es sorti trouver une solution ?", "Did you go out to find a solution?"], ["Il est resté toute la soirée.", "He stayed all evening."], ["Elle est sortie chercher une solution.", "She went out to look for a solution."], ["Nous sommes restés ensemble pendant le problème.", "We stayed together during the problem."], ["Ils sont sortis fêter la solution.", "They went out to celebrate the solution."]], tables: [{ title: "Passé composé avec être (verbes de mouvement)", rows: CONJUGATIONS.etre.rows, note: "Exemples : je suis resté(e), tu es sorti(e)." }], participleLesson: { intro: "Rester and sortir round out this group of être-verbs. Same two rules apply: the participle is never the infinitive, and it agrees with the subject.", pairs: [["rester", "resté(e)", "to stay"], ["sortir", "sorti(e)", "to go out"]], rule: "Passé composé = être (conjugué) + participe passé", helperExamples: [["je suis", "resté(e)"], ["tu es", "sorti(e)"], ["il est", "resté"]], examplePairs: [["Je suis resté(e).", "Je suis rester."], ["Tu es sorti(e).", "Tu es sortir."]] }, prompt: "Dis si tu es resté(e) à la maison ou si tu es sorti(e) ce week-end." },
  28: { grammar: "Révision complète des verbes avec être — l'accord", vocab: "Révision vie quotidienne", vocabWords: [], tables: [{ title: "Passé composé avec être — accord", rows: CONJUGATIONS.etre.rows, note: "elle est allée / ils sont sortis / elles sont parties." }], prompt: "Raconte la journée de quelqu'un d'autre (il/elle) — fais attention à l'accord : « elle est allée », « ils sont sortis »." },
  29: { grammar: "Mélange avoir + être au passé composé", vocab: "Révision vie quotidienne", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en mélangeant avoir et être : « Je suis allé(e) au travail, j'ai mangé, puis je suis rentré(e). »" },
  30: { grammar: "Connecteurs de récit : puis, ensuite, alors", vocab: "Révision vie quotidienne", vocabWords: ["puis", "ensuite", "alors"], vocabExamples: [["J'ai mangé, puis je suis sorti.", "I ate, then I went out."], ["Je suis rentré, ensuite j'ai dormi.", "I came home, then I slept."], ["J'ai eu faim, alors j'ai mangé.", "I got hungry, so I ate."]], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée en reliant les phrases avec puis, ensuite, alors." },
  31: { grammar: "Révision libre du bloc", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Réécoute ta phrase du Jour 21 et améliore-la." },
  32: { grammar: "Jour de parole : raconte ta journée d'hier en détail", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte ta journée d'hier en détail, à voix haute, une minute minimum." },
  33: { grammar: "Jour de parole : raconte un événement familial récent", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Raconte un événement familial récent en quatre ou cinq phrases au passé composé." },
  34: { grammar: "Révision des points faibles identifiés", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Reprends les verbes du passé composé qui te bloquent encore et répète-les trois fois chacun." },
  35: { grammar: "Checkpoint du bloc : monologue de 2 min entièrement au passé composé", vocab: "Révision de tout le bloc 3", vocabWords: [], tables: [CONJUGATIONS.avoir, CONJUGATIONS.etre], prompt: "Enregistre un monologue de deux minutes entièrement au passé composé." },

  36: { grammar: "Futur proche : aller + infinitif", vocab: "manger, boire, café, eau", vocabWords: ["manger", "boire", "café", "eau"], vocabExamples: [["Je vais manger bientôt.", "I'm going to eat soon."], ["Tu vas boire un café ?", "Are you going to have a coffee?"], ["Il va boire de l'eau.", "He's going to drink water."], ["Elle va manger avec nous.", "She's going to eat with us."], ["On va prendre un café.", "We're going to have a coffee."], ["Vous allez manger bientôt ?", "Are you going to eat soon?"], ["Ils vont prendre de l'eau.", "They're going to get some water."]], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows, note: "Exemple : je vais manger, tu vas sortir, ils vont rester." }], prompt: "Dis ce que tu vas faire avec aller + infinitif : « Je vais... », « Tu vas... », « Il/elle va... »." },
  37: { grammar: "Futur proche — pratique : parler de cette semaine", vocab: "restaurant, inviter, fête, anniversaire, cadeau", vocabWords: ["restaurant", "inviter", "fête", "anniversaire", "cadeau"], vocabExamples: [["On va aller au restaurant.", "We're going to go to the restaurant."], ["Je vais inviter mes amis.", "I'm going to invite my friends."], ["Il va organiser une fête samedi.", "He's going to throw a party Saturday."], ["On va fêter mon anniversaire demain.", "We're going to celebrate my birthday tomorrow."], ["Je vais t'apporter un cadeau.", "I'm going to bring you a gift."]], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Dis trois choses que tu vas faire cette semaine." },
  38: { grammar: "Révision futur proche", vocab: "Révision nourriture & social", vocabWords: [], tables: [{ title: "Futur proche = aller (conjugué) + infinitif", rows: CONJUGATIONS.aller.rows }], prompt: "Demande à quelqu'un : « Qu'est-ce que tu vas faire ce week-end ? »" },
  39: { grammar: "Impératif — formes « tu » (viens, attends, dis-moi, fais)", vocab: "boire un verre, cuisiner, recette, plat, dessert", vocabWords: ["boire un verre", "cuisiner", "recette", "plat", "dessert"], vocabExamples: [["Viens boire un verre avec moi !", "Come have a drink with me!"], ["Attends, je cuisine le dessert !", "Wait, I'm cooking the dessert!"], ["Dis-moi la recette du plat !", "Tell me the recipe for the dish!"], ["Fais un bon plat pour ce soir !", "Make a good dish for tonight!"]], tables: [CONJUGATIONS.impTu], prompt: "Donne trois ordres ou demandes avec l'impératif : « Viens ! », « Attends ! », « Dis-moi ! »." },
  40: { grammar: "Impératif — formes « nous/vous » (allons-y, venez)", vocab: "santé, bon appétit, trinquer, partager un repas", vocabWords: ["santé", "bon appétit", "trinquer", "partager un repas"], vocabExamples: [["Santé ! Trinquons ensemble !", "Cheers! Let's toast together!"], ["Bon appétit ! Partageons ce repas !", "Enjoy your meal! Let's share this meal!"], ["Venez, on va trinquer !", "Come, let's toast!"], ["Allons-y, le repas est prêt !", "Let's go, the meal is ready!"]], tables: [CONJUGATIONS.impNousVous], prompt: "Utilise « Allons-y ! » et « Venez ! » dans une situation imaginée." },
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
  53: { grammar: "ça serait + révision des formules d'adoucissement", vocab: "d'accord, pas d'accord, sûr(e), peut-être", vocabWords: ["sûr(e)", "peut-être"], vocabExamples: [["Ça serait bien de se voir bientôt.", "It would be nice to see each other soon."], ["Je suis sûr que ça serait une bonne idée.", "I'm sure that would be a good idea."], ["Peut-être que ça serait plus simple comme ça.", "Maybe it would be simpler that way."], ["Ça serait sympa de manger ensemble.", "It would be nice to eat together."]], tables: [CONJUGATIONS.condChunks], prompt: "Utilise « ça serait » dans une phrase : « Ça serait bien de... »." },
  54: { grammar: "Désaccord & réparation : pas d'accord, ce n'est pas grave, on peut en parler", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Pratique : « Je ne suis pas d'accord, mais... » suivi de « Ce n'est pas grave » ou « On peut en parler »." },
  55: { grammar: "Checkpoint du bloc : adoucis 3 demandes réelles + 1 désaccord", vocab: "Révision de tout le bloc 5", vocabWords: [], tables: [CONJUGATIONS.condChunks], prompt: "Adoucis trois demandes réelles et pratique un désaccord avec réparation." },

  56: { grammar: "Aucune nouvelle structure — monologue intégrant présent, passé composé, futur proche, conditionnel", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Enregistre un monologue de deux minutes intégrant présent, passé composé, futur proche et une formule au conditionnel.", chapter: { n: 1, file: "chapter-1.html", title: "Un nouveau départ" } },
  57: { grammar: "Vraie conversation de 10+ minutes, sans anglais pendant les 5 premières minutes", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Vraie conversation de dix minutes ou plus, sans anglais pendant les cinq premières minutes.", chapter: { n: 2, file: "chapter-2.html", title: "Dans la cuisine de Marie" } },
  58: { grammar: "Compare ton enregistrement du Jour 20 à aujourd'hui", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Réécoute ton enregistrement du Jour 20 — qu'est-ce qui a changé depuis ?", chapter: { n: 3, file: "chapter-3.html", title: "Les courses" } },
  59: { grammar: "Réparation ciblée des 3 points qui te bloquent encore", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Reprends les trois points qui te bloquent encore et entraîne-toi uniquement sur ceux-là.", chapter: { n: 4, file: "chapter-4.html", title: "Chez les grands-parents" } },
  60: { grammar: "Monologue final + vraie conversation — compare au Jour 1", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Monologue final, puis vraie conversation — compare au tout premier jour.", chapter: { n: 5, file: null, title: "à venir" } }
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
