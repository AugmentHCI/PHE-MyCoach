export const fillerWords = ["de", "het", "ik", "dat", "er", "me", "deze"];

export const emotions = {
    "😄 Energiek": {code: "EM-VIGOROUS", type: "Vigor"},
    "😊 Vrolijk": {code: "EM-CHEERFUL", type: "Vigor"},
    "😆 Levendig": {code: "EM-LIVELY", type: "Vigor"},
    "😧 Angstig": {code: "EM-ANXIOUS", type: "Anxious"},
    "😬 Gespannen": {code: "EM-ONEDGE", type: "Anxious"},
    "😰 Paniekerig": {code: "EM-UNEASY", type: "Anxious"},
    "😔 Droevig": {code: "EM-SAD", type: "Depressed"},
    "😓 Hulpeloos": {code: "EM-HOPELESS", type: "Depressed"},
    "😨 Ontmoedigd": {code: "EM-DISCOURAGED", type: "Depressed"},
    "😡 Kwaad": {code: "EM-ANGRY", type: "Anger"},
    "🤬 Wrokkig": {code: "EM-RESENTFUL", type: "Anger"},
    "😒 Geërgerd": {code: "EM-ANNOYED", type: "Anger"},
    "🥱 Vermoeid": {code: "EM-FATIGUED", type: "Fatigue"},
    "🥵 Afgemat": {code: "EM-WORNOUT", type: "Fatigue"},
    "😴 Uitgeput": {code: "EM-EXHAUSTED", type: "Fatigue"},
}

export const thoughts = {
    /* Oorzaak - Negatief */
    "Deze pijn betekent dat er wel iets beschadigd moet zijn": 
        {code: "TH-CAU-NEG-1", type: "negative", tag: "Oorzaak", synonyms: ["kapot", "versleten"]},
    "Ik moet een scan laten nemen om de oorzaak van deze pijn te achterhalen": 
        {code: "TH-CAU-NEG-2", type: "negative", tag: "Oorzaak", synonyms: ["vorig", "vorige", "voorgaande", "bijdragen", "dokter", "ziekenhuis"]},
    "Ik heb slijtage van mijn gewrichten, daardoor heb ik nu pijn": 
        {code: "TH-CAU-NEG-3", type: "negative", tag: "", synonyms: ["versleten", "slijt"]},
    /* Oorzaak - Positief */
    "De pijn, die ik nu ervaar, wilt niet noodzakelijk zeggen dat er iets beschadigd is": 
        {code: "TH-CAU-POS-1", type: "positive", tag: "", synonyms: ["gevolg", "versleten"]},
    "Normale ouderdomsverschijnselen, zoals slijtage van de gewrichten, spelen maar deels mee in de pijn die ik nu ervaar": 
        {code: "TH-CAU-POS-2", type: "negative", tag: "", synonyms: ["leeftijd", "parte"]},
    "Ik denk dat ongezonde gewoontes leiden tot de pijn die ik nu ervaar": 
        {code: "TH-CAU-POS-3", type: "positive", tag: "Oorzaak", synonyms: ["slechte", "gezonde", "niet-gezonde"]},
    "De pijn die ik nu ervaar, kan veroorzaakt zijn door spanning en foutief bewegen (gespannen, verkrampt, ...).": 
        {code: "TH-CAU-POS-4", type: "positive", tag: "", synonyms: []},

    /* Activiteiten en werk - Negatief */
    "Deze pijn is veroorzaakt door 'slechte' houdingen": 
        {code: "TH-ACT-NEG-1", type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Mijn spieren zijn gespannen door deze bewegingen of activiteiten": 
        {code: "TH-ACT-NEG-2", type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Ik krijg slijtage van mijn lichaam door de herhaaldelijke belasting tijdens deze bewegingen of activiteiten": 
        {code: "TH-ACT-NEG-3", type: "negative", tag: "Activiteit en werk", synonyms: ["versleten"]},
    "Ik moet mijn lichaam opspannen tijdens deze bewegingen of activiteiten": 
        {code: "TH-ACT-NEG-4", type: "negative", tag: "Activiteit en werk", synonyms: ["gespannen"]},
    "Ik heb teveel gedaan (mezelf overbelast), daardoor is de schade aan mijn lichaam toegenomen": 
        {code: "TH-ACT-NEG-5", type: "negative", tag: "Activiteit en werk", synonyms: ["te veel"]},
    "Nu kan ik maar beter al de bewegingen en activiteiten vermijden die mijn pijn nog kunnen verergeren": 
        {code: "TH-ACT-NEG-6", type: "negative", tag: "Activiteit en werk", synonyms: ["stoppen"]},
    "Deze bewegingen of activiteiten zijn gevaarlijk voor mijn lichaam": 
        {code: "TH-ACT-NEG-7", type: "negative", tag: "Activiteit en werk", synonyms: ["slecht", "niet goed"]},
    "Deze pijn is een teken dat ik best stop waarmee ik bezig ben of de activiteit aanpas": 
        {code: "TH-ACT-NEG-8", type: "negative", tag: "Activiteit en werk", synonyms: []},
    /* Activiteiten en werk - Positief */
    "Als ik geleidelijk wat meer zou bewegen of deze activiteit zou opbouwen, dan zou mijn lichaam sterker en gezonder worden": 
        {code: "TH-ACT-POS-1", type: "positive", tag: "Activiteit en werk", synonyms: ["beetje"]},
    "Als ik een gezondere levensstijl zou hebben, dan zou ik nu misschien niet zoveel pijn hebben": 
        {code: "TH-ACT-POS-2", type: "positive", tag: "Activiteit en werk", synonyms: ["beter", "actiever"]},
    "Het is oké, deze bewegingen of activiteiten zijn veilig voor mijn lichaam": 
        {code: "TH-ACT-POS-3", type: "positive", tag: "Activiteit en werk", synonyms: ["okay", "oke", "niet erg"]},
    "Als ik wat meer ontspannen was, dan zou ik waarschijnlijk nu niet zoveel pijn hebben": 
        {code: "TH-ACT-POS-4", type: "positive", tag: "Activiteit en werk", synonyms: ["relaxed", "minder"]},

    /* Gevolgen  - Negatief */ 
    "De pijn zal erger worden naarmate ik ouder word": 
        {type: "negative", tag: "Gevolgen", synonyms: ["verergeren", "leeftijd"]},
    "Mijn pijn zal chronisch worden": 
        {type: "negative", tag: "Gevolgen", synonyms: ["langdurig", "aanhouden"]},
    "Mijn pijn zal niet meer beter worden": 
        {type: "negative", tag: "Gevolgen", synonyms: ["verergeren"]},
    "Ik zal steeds minder kunnen doen door de pijn": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    "Ik kan niet meer de dingen doen die ik wil door de pijn": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    /* Gevolgen  - Positief */ 
    "Ik kan de dingen doen die ik wil ondanks de pijn. ": 
        {type: "positive", tag: "Gevolgen", synonyms: ["doorsta"]},

    /* Controle - Negatief */
    "Ik heb geen vertrouwen meer in mijn lichaam": 
        {type: "negative", tag: "Controle", synonyms: ["trust"]},
    "Ik geef het op": 
        {type: "negative", tag: "Controle", synonyms: ["give", "up", "stop"]},
    "Er is niets dan ik kan doen aan deze pijn": 
        {type: "negative", tag: "Controle", synonyms: ["niks"]},
    "Ik heb weinig controle over mijn pijn": 
        {type: "negative", tag: "Controle", synonyms: ["geen"]},
    "Ik kan mijn pijn niet voorspellen": 
        {type: "negative", tag: "Controle", synonyms: ["voorspel", "onvoorspelbaar", "willekeur", "willekeurig", "random"]},
    "Ik ben in de war omdat men al zoveel verschillende dingen heeft gezegd over de pijn die ik heb": 
        {type: "negative", tag: "Controle", synonyms: ["weet niet", "snap", "verward", "snap", "begrijp", "niet"]},
    /* Controle - Positief */
    "Ik heb vertrouwen in mijn lichaam": 
        {type: "positive", tag: "Controle", synonyms: ["komt", "goed"]},
    "Ik weet wat ik kan doen bij deze pijnopstoot": 
        {type: "positive", tag: "Controle", synonyms: ["moet", "actie"]},
    "Ik kan met mijn pijn leven": 
        {type: "positive", tag: "Controle", synonyms: ["oke", "okay", "oké", "draagbaar"]},
    "Ik denk dat ik van deze pijn kan verlost geraken": 
        {type: "positive", tag: "Controle", synonyms: ["tijdelijk", "weg", "verdwijnt", "verdwijn"]},

    /* Psychosociale invloed - Negatief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) heeft geen invloed op de pijn die ik nu ervaar": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "niet"]},
    "Alleen al de gedachte aan bewegen of het uitvoeren van activiteiten met mijn pijn maakt me bang": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["bang", "schrik", "eng"]},
    "Anderen weten niet wat het is om te leven met pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["begrip", "begrijpt", "snappen", "snapt"]},
    "Ik voel me gefrustreerd en boos omdat dit mij weer overkomt": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["waarom"]},
    "Deze pijn is zo intens dat ik niet kan nadenken": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["intens", "fel", "concentratie", "concentreren", "denken", "helder"]},
    "Ik heb alle hoop verloren": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["geef"]},
    "Ik word bang van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["schrik", "angst", "angstig", "eng"]},
    "Ik word wanhopig van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    "Ik word gek van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["wild", "beu", "boos", "stop", "stoppen"]},
    /* Psychosociale invloed - Positief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) zorgt ervoor dat ik nu meer pijn ervaar": 
        {type: "positive", tag: "Psychosiciaal", synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "versterkt"]},
    "Ik mag niet opgeven, de pijn hoort erbij": 
        {type: "positive", tag: "Psychosiciaal", synonyms: ["geef", "komaan"]},
    "Het is oké om pijn te hebben, ik moet niet bang zijn": 
        {type: "positive", tag: "Gevolgen", synonyms: ["oke", "ok", "niet erg", "geen", "schrik"]}
}

export const reactions = {
    /* Negatief */
    "Ik ga rusten totdat de pijn volledig is verdwenen": 
        {type: "negative", synonyms: ["ontspannen", "stop"]},
    "Ik panikeer en probeer hopeloos van de pijn verlost te geraken": 
        {type: "negative", synonyms: ["paniek"]},
    "Ik word bang en maak me zorgen dat de pijn niet beter zal worden": 
        {type: "negative", synonyms: ["angstig", "schrik"]},
    "Ik vermijd al de bewegingen en activiteiten die de pijn kunnen verergeren": 
        {type: "negative", synonyms: ["stop", "alles"]},
    "Ik neem de correcte houding aan en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: []},
    "Ik span mijn lichaam op en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: [""]},
    "Ik probeer mijn pijnlijke lichaamsdeel te ontlasten en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: []},
    "Ik word gefrustreerd omdat dit mij overkomen is": 
        {type: "negative", synonyms: ["why", "waarom", "ik", "typisch"]},
    "Ik blijf verder doen waar ik mee bezig ben hoe erg de pijn ook wordt": 
        {type: "negative", synonyms: ["doordoen", "continue", "ga"]},
    /* Positief */
    "Ik pas de activiteit aan waar ik mee bezig ben of ga verder met een andere activiteit": 
        {type: "positive", synonyms: ["aanpassen", "verander"]},
    "Ik probeer te ontspannen": 
        {type: "positive", synonyms: ["relaxen", "chillen"]},
    "Ik zeg tegen mezelf: Het is oké! Wees niet bang van de pijn, je veroorzaakt niet meer schade in je lichaam": 
        {type: "positive", synonyms: ["ok", "oke", "okay", "rustig", "schrik", "geen"]},
    "Ik probeer mijn gedachten van de pijn af te leiden": 
        {type: "positive", synonyms: ["afleiden", "afleiding"]},
    "Ik wordt me bewust van mijn gedachten en gevoelens": 
        {type: "positive", synonyms: []},
    "Ik neem een korte pauze": 
        {type: "positive", synonyms: ["stop", "pauzeer"]},
    "Ik probeer bewust op een gepaste manier te reageren op de situatie": 
        {type: "positive", synonyms: ["juist", "correct"]},
    "Ik haal een paar keer diep adem": 
        {type: "positive", synonyms: ["inademen", "sluit", "ogen"]},
    "Ik probeer op een ontspannen/soepele manier te bewegen": 
        {type: "positive", synonyms: [""]}
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
        type: "button",
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
        response: ["Recommendation"]
    },
    "RESPONSE-NO-MESSAGE-6": {
        content: "Nee ",
        sentBy: "user", 
        response: ["Recommendation"]
    },
    /* Recommendation */
    "Recommendation": {
        content: "We bevelen je de volgende module aan.",
        sentBy: "coach"
    }
}