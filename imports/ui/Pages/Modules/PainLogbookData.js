export const fillerWords = ["de", "het", "ik", "dat", "die", "er", "me", "mij", "deze"];

export const codes = {
    "TIR": {type: "NEGATIVE", description: "Te verbeteren reacties"},
    "TIT": {type: "NEGATIVE", description: "Te verbeteren gedachten"},
    "ANXIOUS": {type: "NEGATIVE", description: "Gespannen / angstig / paniekerig"},
    "ANGER": {type: "NEGATIVE", description: "Kwaad / wrokkig / geergerd"},
    "FATIGUE": {type: "NEGATIVE", description: "Vermoeid / afgemat / uitgeput"},
    "DEPRESSED": {type: "NEGATIVE", description: "Hulpeloos / ontmoedigd / droevig"},
    "HR": {type: "POSITIVE", description: "Helpende reacties"},
    "HT": {type: "POSITIVE", description: "Helpende gedachten"},
    "VIGOR": {type: "POSITIVE", description: "Energiek / vrolijk / levendig"},
    "RELAXED": {type: "POSITIVE", description: "Rustig / ontspannen"},
}

export const emotions = {
    "😄 Energiek":   {level4: "EMOTION-VIGOROUS",    level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION"},
    "😊 Vrolijk":    {level4: "EMOTION-CHEERFUL",    level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION"},
    "😆 Levendig":   {level4: "EMOTION-LIVELY",      level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION"},
    "😧 Angstig":    {level4: "EMOTION-ANXIOUS",     level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION"},
    "😬 Gespannen":  {level4: "EMOTION-ONEDGE",      level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION"},
    "😰 Paniekerig": {level4: "EMOTION-UNEASY",      level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION"},
    "😔 Droevig":    {level4: "EMOTION-SAD",         level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION"},
    "😓 Hulpeloos":  {level4: "EMOTION-HOPELESS",    level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION"},
    "😨 Ontmoedigd": {level4: "EMOTION-DISCOURAGED", level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION"},
    "😡 Kwaad":      {level4: "EMOTION-ANGRY",       level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION"},
    "🤬 Wrokkig":    {level4: "EMOTION-RESENTFUL",   level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION"},
    "😒 Geërgerd":   {level4: "EMOTION-ANNOYED",     level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION"},
    "🥱 Vermoeid":   {level4: "EMOTION-FATIGUED",    level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION"},
    "🥵 Afgemat":    {level4: "EMOTION-WORNOUT",     level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION"},
    "😴 Uitgeput":   {level4: "EMOTION-EXHAUSTED",   level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION"},
}

export const thoughts = {
    /* Oorzaak - Negatief */
    "Deze pijn betekent dat er wel iets beschadigd moet zijn": 
        {level4: "THOUGHT-CAUSE-NEG-1", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["kapot", "versleten"]},
    "Ik moet een scan laten nemen om de oorzaak van deze pijn te achterhalen": 
        {level4: "THOUGHT-CAUSE-NEG-2", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["vorig", "vorige", "voorgaande", "bijdragen", "dokter", "ziekenhuis"]},
    "Ik heb slijtage van mijn gewrichten, daardoor heb ik nu pijn": 
        {level4: "THOUGHT-CAUSE-NEG-3", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["versleten", "slijt"]},
    /* Oorzaak - Positief */
    "De pijn, die ik nu ervaar, wilt niet noodzakelijk zeggen dat er iets beschadigd is": 
        {level4: "THOUGHT-CAUSE-POS-1", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["gevolg", "versleten"]},
    "Normale ouderdomsverschijnselen, zoals slijtage van de gewrichten, spelen maar deels mee in de pijn die ik nu ervaar": 
        {level4: "THOUGHT-CAUSE-POS-2", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["leeftijd", "parte"]},
    "Ik denk dat ongezonde gewoontes leiden tot de pijn die ik nu ervaar": 
        {level4: "THOUGHT-CAUSE-POS-3", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["slechte", "gezonde", "niet-gezonde"]},
    "De pijn die ik nu ervaar, kan veroorzaakt zijn door spanning en foutief bewegen (gespannen, verkrampt, ...)": 
        {level4: "THOUGHT-CAUSE-POS-4", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT", "ANXIOUS"], synonyms: []},

    /* Activiteiten en werk - Negatief */
    "Deze pijn is veroorzaakt door 'slechte' houdingen": 
        {level4: "THOUGHT-ACTIVITY-NEG-1", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: []},
    "Mijn spieren zijn gespannen door deze bewegingen of activiteiten": 
        {level4: "THOUGHT-ACTIVITY-NEG-2", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: []},
    "Ik krijg slijtage van mijn lichaam door de herhaaldelijke belasting tijdens deze bewegingen of activiteiten": 
        {level4: "THOUGHT-ACTIVITY-NEG-3", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["versleten"]},
    "Ik moet mijn lichaam opspannen tijdens deze bewegingen of activiteiten": 
        {level4: "THOUGHT-ACTIVITY-NEG-4", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["gespannen"]},
    "Ik heb teveel gedaan (mezelf overbelast), daardoor is de schade aan mijn lichaam toegenomen": 
        {level4: "THOUGHT-ACTIVITY-NEG-5", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "FATIGUE"], synonyms: ["te veel"]},
    "Deze bewegingen of activiteiten zijn gevaarlijk voor mijn lichaam": 
        {level4: "THOUGHT-ACTIVITY-NEG-6", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["slecht", "niet goed"]},
    "Nu kan ik maar beter al de bewegingen en activiteiten vermijden die mijn pijn nog kunnen verergeren": 
        {level4: "THOUGHT-ACTIVITY-NEG-7", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["stoppen"]},
    "Deze pijn is een teken dat ik best stop waarmee ik bezig ben of de activiteit aanpas": 
        {level4: "THOUGHT-ACTIVITY-NEG-8", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: []},
    /* Activiteiten en werk - Positief */
    "Als ik geleidelijk wat meer zou bewegen of deze activiteit zou opbouwen, dan zou mijn lichaam sterker en gezonder worden": 
        {level4: "THOUGHT-ACTIVITY-POS-1", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["beetje"]},
    "Als ik een gezondere levensstijl zou hebben, dan zou ik nu misschien niet zoveel pijn hebben": 
        {level4: "THOUGHT-ACTIVITY-POS-2", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["beter", "actiever"]},
    "Het is oké, deze bewegingen of activiteiten zijn veilig voor mijn lichaam": 
        {level4: "THOUGHT-ACTIVITY-POS-3", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["okay", "oke", "niet erg"]},
    "Als ik wat meer ontspannen was, dan zou ik waarschijnlijk nu niet zoveel pijn hebben": 
        {level4: "THOUGHT-ACTIVITY-POS-4", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["ANXIOUS"], synonyms: ["relaxed", "minder"]},

    /* Gevolg  - Negatief */ 
    "De pijn zal erger worden naarmate ik ouder word": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-1", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["verergeren", "leeftijd"]},
    "Mijn pijn zal chronisch worden": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-2", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["langdurig", "aanhouden"]},
    "Mijn pijn zal niet meer beter worden": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-3", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["verergeren"]},
    "Ik zal steeds minder kunnen doen door de pijn": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-4", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: []},
    "Ik kan niet meer de dingen doen die ik wil door de pijn": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-5", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: []},
    /* Gevolg  - Positief */ 
    "Ik kan de dingen doen die ik wil ondanks de pijn": 
        {level4: "THOUGHT-CONSEQUENCE-POS-1", level3: "CONSEQUENCE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["doorsta"]},

    /* Controle - Negatief */
    "Ik heb geen vertrouwen meer in mijn lichaam": 
        {level4: "THOUGHT-CONTROL-NEG-1", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["trust"]},
    "Ik geef het op": 
        {level4: "THOUGHT-CONTROL-NEG-2", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["give", "up", "stop"]},
    "Er is niets dan ik kan doen aan deze pijn": 
        {level4: "THOUGHT-CONTROL-NEG-3", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["niks"]},
    "Ik heb weinig controle over mijn pijn": 
        {level4: "THOUGHT-CONTROL-NEG-4", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["geen"]},
    "Ik kan mijn pijn niet voorspellen": 
        {level4: "THOUGHT-CONTROL-NEG-5", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["voorspelt", "onvoorspelbaar", "willekeurig", "random"]},
    "Ik ben in de war omdat men al zoveel verschillende dingen heeft gezegd over de pijn die ik heb": 
        {level4: "THOUGHT-CONTROL-NEG-6", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["weet niet", "verward", "snap", "begrijp", "niet"]},
    /* Controle - Positief */
    "Ik heb vertrouwen in mijn lichaam": 
        {level4: "THOUGHT-CONTROL-POS-1", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["komt", "goed"]},
    "Ik weet wat ik kan doen bij deze pijnopstoot": 
        {level4: "THOUGHT-CONTROL-POS-2", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["moet", "actie"]},
    "Ik kan met mijn pijn leven": 
        {level4: "THOUGHT-CONTROL-POS-3", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["oke", "okay", "oké", "draagbaar"]},
    "Ik denk dat ik van deze pijn kan verlost geraken": 
        {level4: "THOUGHT-CONTROL-POS-4", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["tijdelijk", "weg", "verdwijnt"]},

    /* Psychosociale invloed - Negatief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) heeft geen invloed op de pijn die ik nu ervaar": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-1", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "niet"]},
    "Alleen al de gedachte aan bewegen of het uitvoeren van activiteiten met mijn pijn maakt me bang": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-2", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["bang", "schrik", "eng"]},
    "Anderen weten niet wat het is om te leven met pijn": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-3", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["begrip", "begrijpt", "snappen", "snapt"]},
    "Ik voel me gefrustreerd en boos omdat dit mij weer overkomt": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-4", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["waarom"]},
    "Ik kan deze pijn niet uit mijn gedachten zetten":
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-5", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["nadenken", "concentratie", "focus"]},
    "Deze pijn is zo intens dat ik niet kan nadenken": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-6", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["intens", "fel", "concentratie", "concentreren", "denken", "helder"]},
    "Ik heb alle hoop verloren": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-7", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["geef"]},
    "Ik word bang van deze pijn": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-8", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["schrik", "angst", "angstig", "eng"]},
    "Ik word wanhopig van deze pijn": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-9", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: []},
    "Ik word gek van deze pijn": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-10", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["wild", "beu", "boos", "stop", "stoppen"]},
    /* Psychosociale invloed - Positief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) zorgt ervoor dat ik nu meer pijn ervaar": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-1", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "versterkt"]},
    "Ik mag niet opgeven, de pijn hoort erbij": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-2", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["geef", "komaan"]},
    "Het is oké om pijn te hebben, ik moet niet bang zijn": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-3", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["oke", "ok", "niet erg", "geen probleem", "geen", "schrik"]}
}

export const reactions = {
    /* Negatief */
    "Ik ga rusten totdat de pijn volledig is verdwenen": 
        {level4: "REACTION-NEG-1", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: ["ontspannen", "stop"]},
    "Ik panikeer en probeer hopeloos van de pijn verlost te geraken": 
        {level4: "REACTION-NEG-2", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS", "DEPRESSED"], synonyms: ["paniek"]},
    "Ik word bang en maak me zorgen dat de pijn niet beter zal worden": 
        {level4: "REACTION-NEG-3", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS", "DEPRESSED"], synonyms: ["angstig", "schrik"]},
    "Ik vermijd al de bewegingen en activiteiten die de pijn kunnen verergeren": 
        {level4: "REACTION-NEG-4", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS"], synonyms: ["stop", "alles"]},
    "Ik neem de correcte houding aan en doe verder waar ik mee bezig ben": 
        {level4: "REACTION-NEG-5", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS"], synonyms: []},
    "Ik span mijn lichaam op en doe verder waar ik mee bezig ben": 
        {level4: "REACTION-NEG-6", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: []},
    "Ik probeer mijn pijnlijke lichaamsdeel te ontlasten en doe verder waar ik mee bezig ben": 
        {level4: "REACTION-NEG-7", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: []},
    "Ik word gefrustreerd omdat dit mij overkomen is": 
        {level4: "REACTION-NEG-8", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANGER"], synonyms: ["why", "waarom", "ik", "typisch"]},
    "Ik blijf verder doen waar ik mee bezig ben hoe erg de pijn ook wordt": 
        {level4: "REACTION-NEG-9", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: ["doordoen", "continue", "ga"]},
    /* Positief */
    "Ik pas de activiteit aan waar ik mee bezig ben of ga verder met een andere activiteit": 
        {level4: "REACTION-POS-1", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["aanpassen", "verander"]},
    "Ik probeer te ontspannen": 
        {level4: "REACTION-POS-2", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: ["relaxen", "chillen"]},
    "Ik zeg tegen mezelf: Het is oké! Wees niet bang van de pijn, je veroorzaakt niet meer schade in je lichaam": 
        {level4: "REACTION-POS-3", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["ok", "oke", "okay", "rustig", "schrik", "geen"]},
    "Ik probeer mijn gedachten van de pijn af te leiden": 
        {level4: "REACTION-POS-4", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["afleiden", "afleiding"]},
    "Ik word me bewust van mijn gedachten en gevoelens": 
        {level4: "REACTION-POS-5", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: []},
    "Ik neem een korte pauze": 
        {level4: "REACTION-POS-6", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["stop", "pauzeer"]},
    "Ik probeer bewust op een gepaste manier te reageren op de situatie": 
        {level4: "REACTION-POS-7", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["juist", "correct"]},
    "Ik haal een paar keer diep adem": 
        {level4: "REACTION-POS-8", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: ["inademen", "sluit", "ogen"]},
    "Ik probeer op een ontspannen/soepele manier te bewegen": 
        {level4: "REACTION-POS-9", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: [""]}
}

export const options = Object.assign({}, thoughts, emotions, reactions);

export const codeFrequencies = () => {
    let codesFreqs = {}
    Object.keys(options).forEach(key => {
        if (options[key].level1 === "EMOTION" && Object.keys(codesFreqs).includes(options[key].level3))
            { codesFreqs[[options[key].level3]] = codesFreqs[[options[key].level3]] ? codesFreqs[[options[key].level3]] + 2 : 2 }
        else if (["THOUGHT", "REACTION"].includes(options[key].level1)) {
            options[key].codes.forEach(code => {
                codesFreqs[[code]] = codesFreqs[[code]] ? codesFreqs[[code]] + 1 : 1
            })
        }
    });
    return codesFreqs;
}

export const conversation = {
    /* Inleiding */
    "MESSAGE-INTRO": {
        content: "Goeiedag! Wil jij je pijnlogboek invullen?",
        sentBy: "coach",
        response: ["RESPONSE-YES-MESSAGE-INTRO", "RESPONSE-NO-MESSAGE-INTRO"]
    },
    "RESPONSE-YES-MESSAGE-INTRO": {
        content: "Ja, graag",
        sentBy: "user",
        choice: true,
        response: ["MESSAGE-1"]
    },
    "RESPONSE-NO-MESSAGE-INTRO": {
        content: "Nee, ga terug",
        sentBy: "user",
        choice: true,
        response: ["MESSAGE-EXIT"]
    },
    "MESSAGE-EXIT": {
        content: "Oké geen probleem. Laat gerust weten wanneer je de volgende keer je pijnlogboek wilt invullen.",
        sentBy: "coach",
        response: ["RESPONSE-MESSAGE-EXIT"]
    },
    "RESPONSE-MESSAGE-EXIT": {
        content: "Afsluiten",
        sentBy: "user",
        level3: "button",
        action: "leave",
        response: []
    },
    /* Vraag 1 */
    "MESSAGE-1": {
        content: "Laten we beginnen. Waar was je toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-1-MESSAGE-1", "RESPONSE-2-MESSAGE-1", "RESPONSE-3-MESSAGE-1", "RESPONSE-4-MESSAGE-1"]
    },
    "RESPONSE-1-MESSAGE-1": {
        content: "Aan het sporten 🏃🏽",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-2-MESSAGE-1": {
        content: "Op het werk 💼",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-3-MESSAGE-1": {
        content: "Thuis 🏠",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-4-MESSAGE-1": {
        content: "Overig 💬",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "MESSAGE-1-INPUT": {
        content: "En wat was je aan het doen op dat moment?",
        sentBy: "coach", 
        response: ["MESSAGE-1-INPUT-RESPONSE"]
    },
    "MESSAGE-1-INPUT-RESPONSE": {
        content: "input",
        sentBy: "user",
        response: ["MESSAGE-1-INTENSITY"]
    },
    "MESSAGE-1-INTENSITY": {
        content: "Hoe intensief was de activiteit?",
        sentBy: "coach", 
        response: ["MESSAGE-1-INTENSITY-RESPONSE-1", "MESSAGE-1-INTENSITY-RESPONSE-2", "MESSAGE-1-INTENSITY-RESPONSE-3"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-1": {
        content: "Licht",
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-2": {
        content: "Matig",
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-3": {
        content: "Zwaar",
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    /* Vraag 2 - Emoties */
    "MESSAGE-2": {
        content: "Kan je aanduiden welke van onderstaande gevoelens aanwezig waren toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-MESSAGE-2"]
    },
    "RESPONSE-MESSAGE-2": {
        content: "emotions",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    /* Vraag 3 - Gedachten */
    "MESSAGE-3": {
        content: "Kan je aanduiden welke van onderstaande gedachten aanwezig waren toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-MESSAGE-3"]
    },
    "RESPONSE-MESSAGE-3": {
        content: "thoughts",
        sentBy: "user", 
        response: ["MESSAGE-4"]
    },
    /* Vraag 4 - Reacties */
    "MESSAGE-4": {
        content: "En kan je nu aanduiden welke reactie je had op je pijn?",
        sentBy: "coach", 
        response: ["RESPONSE-MESSAGE-4"]
    },
    "RESPONSE-MESSAGE-4": {
        content: "reactions",
        sentBy: "user", 
        response: ["MESSAGE-5"]
    },
    /* Vraag 5 - Reflectie */
    "MESSAGE-5": {
        content: "Had je iets anders/beter kunnen doen?",
        sentBy: "coach", 
        response: ["RESPONSE-YES-MESSAGE-5", "RESPONSE-NO-MESSAGE-5"]
    },
    "RESPONSE-YES-MESSAGE-5": {
        content: "Ja",
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    "RESPONSE-NO-MESSAGE-5": {
        content: "Nee",
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    /* Vraag 5 - Reflectie */
    "MESSAGE-6": {
        content: "Weet je hoe je in de toekomst hier aan kan werken?",
        sentBy: "coach", 
        response: ["RESPONSE-YES-MESSAGE-6", "RESPONSE-NO-MESSAGE-6"]
    },
    "RESPONSE-YES-MESSAGE-6": {
        content: "Ja ",
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    "RESPONSE-NO-MESSAGE-6": {
        content: "Nee ",
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    /* Recommendation */
    "RECOMMENDATION": {
        content: "recommendation",
        sentBy: "coach",
        response: ["OPEN-RECOMMENDATION", "NEXT-RECOMMENDATION", "CLOSE-LOGBOOK"]
    }, 
    "OPEN-RECOMMENDATION": {
        content: "recommendation-answer",
        text: "Ja, open aanbeveling",
        sentBy: "user",
        action: "openRecommendation",
        response: ["RECOMMENDATION"]
    },
    "NEXT-RECOMMENDATION": {
        content: "recommendation-next",
        text: "Toon een andere aanbeveling",
        sentBy: "user", 
        action: "nextRecommendation",
        response: ["RECOMMENDATION"]
    },
    "CLOSE-LOGBOOK": {
        content: "recommendation-answer",
        text: "Sla mijn log op en keer terug",
        sentBy: "user", 
        action: "saveAndClose",
        response: ["RECOMMENDATION"]
    },
}

export const explanations = {
    /* Emotions */
    "Negative Feelings": "Je hebt een aantal onprettige gevoelens aangeduid. Onprettige gevoelens zoals angst, spanning, verdriet, boosheid en vermoeidheid kunnen bijdragen aan de pijn die je nu ervaart. Je pijndempende mechanismen gaan minder goed werken en er worden sneller pijn-gerelateerde prikkels naar de hersenen gestuurd. Zo kan je pijn ervaren bij normale bewegingen en aanrakingen of soms zelfs spontane pijn.",
    "Positive Feelings": "Je hebt enkel prettige gevoelens aangeduid, dat is mooi. Angst, spanning, verdriet, boosheid en vermoeidheid kunnen bijdragen aan pijn. Pijndempende mechanismen gaan minder goed werken en er worden sneller pijn-gerelateerde prikkels naar de hersenen gestuurd. Zo kan je pijn ervaren bij normale bewegingen en aanrakingen of soms zelfs spontane pijn.",
    /* Thoughts */
    "Physical damage - Negative": "Volgens jou speelt lichamelijke schade een grote rol bij de pijn die je nu ervaart. Maar dit is slechts één van vele factoren die kunnen bijdragen aan pijn. Veel pijnklachten ontstaan zelfs zonder lichamelijke schade. Bovendien is ons lichaam zeer goed in staat om schade te herstellen. Zeker bij langdurige pijn speelt lichamelijke schade nog maar een kleine rol. Ook tijdens een pijnopstoot is de kans op schade beperkt. Dit wordt meestal veroorzaakt door een overgevoelig zenuwstelsel als reactie op factoren zoals stress, spanning, zorgen, onvoldoende beweging of het uitvoeren van activiteiten die je niet gewoon bent. Uit onderzoek blijkt ook dat lichamelijke schade zoals slijtage van de gewrichten vaak voorkomt bij mensen zonder pijnklachten.",
    "Physical damage - Positive": "Volgens jou speelt lichamelijke schade geen grote rol bij de pijn die je nu ervaart. Super! Lichamelijke schade is slechts één van vele factoren die kunnen bijdragen aan pijn. Veel pijnklachten ontstaan zelfs zonder lichamelijke schade. Bovendien is ons lichaam zeer goed in staat om schade te herstellen. Ook tijdens een pijnopstoot is de kans op schade beperkt. Dit wordt meestal veroorzaakt door een overgevoelig zenuwstelsel als reactie op factoren zoals stress, spanning, zorgen, onvoldoende beweging of het uitvoeren van activiteiten die je niet gewoon bent. Uit onderzoek blijkt ook dat lichamelijke schade zoals slijtage van de gewrichten vaak voorkomt bij mensen zonder pijnklachten.",
    "Activities - Negative": "Je geeft aan dat je houding en activiteiten een belangrijke rol spelen bij de pijn die je nu ervaart. Het is oké om pijn te ervaren tijdens bewegen of het uitvoeren van activiteiten. Dit heeft zelden te maken met lichamelijke schade, maar eerder met een overgevoelige reactie van het zenuwstelsel. Misschien heb je te veel gedaan (overbelasting) of heb je activiteiten gedaan die je niet gewoon bent. Ook een gespannen houding leidt tot meer pijn-gerelateerde prikkels en een overgevoelig zenuwstelsel. Een overgevoelig zenuwstelsel zorgt er dan weer voor dat je sneller pijn gaat ervaren, ook tijdens normale activiteiten of bewegingen.",
    "Activities - Positive": "Je geeft aan dat het oké is om pijn te ervaren tijdens bewegen en het uitvoeren van je activiteiten. Heel goed. Deze pijn heeft zelden te maken met lichamelijke schade, maar eerder met een overgevoelige reactie van het zenuwstelsel. Misschien heb je te veel gedaan (overbelasting) of heb je activiteiten gedaan die je niet gewoon bent. Ook een gespannen houding leidt tot meer pijn-gerelateerde prikkels en een overgevoelig zenuwstelsel. Een overgevoelig zenuwstelsel zorgt er dan weer voor dat je sneller pijn gaat ervaren, ook tijdens normale activiteiten of bewegingen.",
    "Thoughts - Negative": "Je hebt een aantal gedachten aangeduid die mogelijks een ongunstig effect hebben op je situatie. Negatieve gedachten en emoties beïnvloeden ons gedrag, zorgen voor stress en verhogen de kans op een overgevoelig zenuwstelsel. Door veel aandacht te schenken aan je pijn, gaan je hersenen ook meer op deze prikkels letten en ze uitvergroten.",
    "Thoughts - Positive": "Je hebt een aantal positieve en helpende gedachten aangeduid. Heel goed! Negatieve gedachten en emoties beïnvloeden ons gedrag, zorgen voor stress en verhogen de kans op een overgevoelig zenuwstelsel. Door veel aandacht te schenken aan je pijn, gaan je hersenen ook meer op deze prikkels letten en ze uitvergroten.",
    /* Reactions */
    "Reaction - Negative": "Aan je reactie kan nog gewerkt worden. Hevige emoties en gedachten zoals angst of frustratie versterken pijnprikkels en vormen een risico op een overgevoelig zenuwstelsel. Ze leiden tot een impulsieve, maar misschien niet de beste, reactie. Het heeft geen zin om je te laten leiden door je pijn en op dagen dat het goed gaat veel te doen en de dagen nadien niets meer te kunnen doen. Door overbelasting werk je een overgevoelig zenuwstelsel in de hand. Lang rusten en veel activiteiten vermijden vertraagt het herstelproces en zorgt er zelfs voor dat je belastbaarheid afneemt. Dit brengt je op termijn nergens.",
    "Reaction - Positive": "Uit jouw reactie blijkt dat je goed hebt gereageerd op de pijn. Super! Hevige emoties en gedachten zoals angst of frustratie versterken pijnprikkels en vormen een risico op een overgevoelig zenuwstelsel. Ze leiden tot een impulsieve, maar misschien niet de beste, reactie. Het heeft geen zin om je te laten leiden door je pijn en op dagen dat het goed gaat veel te doen en de dagen nadien niets meer te kunnen doen. Door overbelasting werk je een overgevoelig zenuwstelsel in de hand. Lang rusten en veel activiteiten vermijden vertraagt het herstelproces en zorgt er zelfs voor dat je belastbaarheid afneemt. Dit brengt je op termijn nergens."
}

export const moduleTranslation = {
    "PAINEDUCATION": "Pijneducatie",
    "STRESS": "Stress en veerkracht",
    "ACTIVITYWORK": "Activiteit en werk",
    "THOUGHTSEMOTIONS": "Gedachten en emoties",
    "TODO": "Pijneducatie"
}

export const rules = [
    {
        code: "REC-1",
        description: "General negative emotions",
        conditions: {level1: ["EMOTION"], level2: ["NEGATIVE"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Leer onprettige gevoelens herkennen en hier mee om te gaan, zo beperk je de impact ervan op jouw leven en jouw pijn.",
        explanation: explanations["Negative Feelings"],
        module: "TODO",
        submodule: "TODO",
    },
    {
        code: "REC-2",
        description: "Specific 'Panicky' or 'Stressed' emotions",
        conditions: {level4: ["EMOTION-UNEASY", "EMOTION-ONEDGE"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Probeer overmatige stress te beperken door het stellen van prioriteiten, het afbakenen van je grenzen en het vrijmaken van tijd voor jezelf. Je kan ook proberen te ontspannen door een paar keer diep te ademen of een relaxatie oefening te doen.",
        explanation: explanations["Negative Feelings"],
        module: "STRESS",
        submodule: "TODO",
    },
    {
        code: "REC-3.1",
        description: "Specific 'Tired' or 'Exhausted' emotions",
        conditions: {level1: ["EMOTION"], level3: ["FATIGUE"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Zoek een goed evenwicht tussen activiteit en rust om zo binnen je eigen grenzen terug actiever te worden. Activiteitenmanagement heeft als doel (beter) te leren omgaan met je energie.",
        explanation: explanations["Negative Feelings"],
        module: "TODO",
        submodule: "TODO",
    },
    {
        code: "REC-3.2",
        description: "Specific 'Tired' or 'Exhausted' emotions",
        conditions: {level1: ["EMOTION"], level3: ["FATIGUE"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Probeer vermoeidheid tegen te gaan door je fysieke fitheid op te bouwen, zo zal je ook meer energie krijgen.",
        explanation: explanations["Negative Feelings"],
        module: "TODO",
        submodule: "TODO",
    },
    {
        code: "REC-5",
        description: "Negative thoughts around causes",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["CAUSE"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Als je meer inzicht krijgt in hoe pijn ontstaat, ga je kunnen achterhalen welke factoren een rol spelen bij jouw pijn. Nadien kan je aan de slag met de gepaste module om deze factoren te verbeteren.",
        explanation: explanations["Physical damage - Negative"],
        module: "PAINEDUCATION",
        submodule: "PE-MOD-1",
    },
    {
        code: "REC-6",
        description: "Positive thoughts around causes",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["CAUSE"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Als je meer inzicht krijgt in hoe pijn ontstaat, ga je kunnen achterhalen welke factoren een rol spelen bij jouw pijn. Nadien kan je aan de slag met de gepaste module om deze factoren te verbeteren.",
        explanation: explanations["Physical damage - Positive"],
        module: "PAINEDUCATION",
        submodule: "PE-MOD-1",
    },
    {
        code: "REC-7.1",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Probeer op een ontspannen manier te bewegen en regelmatig van houding te wisselen. Zorg ervoor dat je je taken slim aanpakt en indien nodig denkt aan je ergonomie.",
        explanation: explanations["Activities - Negative"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-7.2",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Verhoog je belastbaarheid door geleidelijk meer te bewegen en je activiteiten op te bouwen.",
        explanation: explanations["Activities - Negative"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-7.3",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Bij overmatige spanning kan het helpen om een relaxatie oefening te doen.",
        explanation: explanations["Activities - Negative"],
        module: "STRESS",
        submodule: "TODO",
    },
    {
        code: "REC-8",
        description: "Negative thoughts around stopping all activities",
        conditions: {level4: ["THOUGHT-ACTIVITY-NEG-7", "THOUGHT-ACTIVITY-NEG-8"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Rusten en activiteiten vermijden zijn niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Door lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven.",
        explanation: explanations["Activities - Negative"],
        module: "TODO",
        submodule: "TODO",
    },
    {
        code: "REC-9.1",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Probeer op een ontspannen manier te bewegen en regelmatig van houding te wisselen. Zorg ervoor dat je je taken slim aanpakt en indien nodig denkt aan je ergonomie.",
        explanation: explanations["Activities - Positive"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-9.2",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Verhoog je belastbaarheid door geleidelijk meer te bewegen en je activiteiten op te bouwen.",
        explanation: explanations["Activities - Positive"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-9.3",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Bij overmatige spanning kan het helpen om een relaxatie oefening te doen.",
        explanation: explanations["Activities - Positive"],
        module: "STRESS",
        submodule: "TODO",
    },
    {
        code: "REC-10",
        description: "Negative thoughts around worsening pain",
        conditions: {level4: ["THOUGHT-CONSEQUENCE-NEG-1", "THOUGHT-CONSEQUENCE-NEG-2", "THOUGHT-CONSEQUENCE-NEG-3", "THOUGHT-CONTROL-NEG-3", "THOUGHT-CONTROL-NEG-4", "THOUGHT-CONTROL-NEG-5", "THOUGHT-CONTROL-NEG-6"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Aan veel factoren die pijn beïnvloeden kan je werken. Probeer eerst te achterhalen welke factoren bij jou een rol spelen",
        explanation: explanations["Thoughts - Negative"],
        module: "PAINEDUCATION",
        submodule: "PE-MOD-5",
    },
    {
        code: "REC-11",
        description: "Negative thoughts around worsening activities",
        conditions: {level4: ["THOUGHT-CONTROL-NEG-1", "THOUGHT-CONSEQUENCE-NEG-4", "THOUGHT-CONSEQUENCE-NEG-5"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Door je activiteiten slim aan te pakken kan je ook met pijnklachten nog heel veel doen. En met een goede opbouw, die rekening houdt met jouw capaciteit, kan je geleidelijk terug actiever worden.",
        explanation: explanations["Thoughts - Negative"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-12",
        description: "Negative thoughts",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["PSYCHOSOCIAL", "CONTROL"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Probeer negative gedachten te beperken en je energie te stoppen in waardevolle activiteiten.Ben je iets aan het doen wat je leuk vindt? Dan filteren je hersen vanzelf al een deel van de pijn weg!",
        explanation: explanations["Thoughts - Negative"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TODO",
    },
    {
        code: "REC-13",
        description: "Positive thoughts",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["PSYCHOSOCIAL", "CONTROL", "CONSEQUENCE"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Probeer negative gedachten te beperken en je energie te stoppen in waardevolle activiteiten.Ben je iets aan het doen wat je leuk vindt? Dan filteren je hersen vanzelf al een deel van de pijn weg!",
        explanation: explanations["Thoughts - Positive"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TODO",
    },
    {
        code: "REC-14",
        description: "Negative reactions",
        conditions: {level1: ["REACTION"], level2: ["NEGATIVE"]},
        secondaryConditions: {},
        priority: "2",
        recommendation: "Probeer zoveel mogelijk je normale activiteiten verder te zetten na een korte pauze. Pak je taken slim aan zodat je een goed evenwicht vindt tussen activiteit en rust. Beweeg op een ontspannen manier, wissel regelmatig van houding en denk aan je ergonomie indien nodig.",
        explanation: explanations["Reaction - Negative"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    },
    {
        code: "REC-14",
        description: "Negative 'panicky' reaction",
        conditions: {level3: ["REACTION-NEG-2"]},
        secondaryConditions: {},
        priority: "3",
        recommendation: "Blijf kalm, word je bewust van je gedachten en emoties en kies een gepaste reactie.",
        explanation: explanations["Reaction - Negative"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TODO",
    },
    {
        code: "REC-15",
        description: "Positive reactions",
        conditions: {level1: ["REACTION"], level2: ["POSITIVE"]},
        secondaryConditions: {},
        priority: "1",
        recommendation: "Herhaal af en toe welke reacties positief zijn in een pijnopstoot.",
        explanation: explanations["Reaction - Positive"],
        module: "ACTIVITYWORK",
        submodule: "TODO",
    }
]
