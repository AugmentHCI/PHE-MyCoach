export const FILLERWORDS = ["de", "het", "ik", "dat", "die", "er", "me", "mij", "deze"];

export const EMOTIONS = {
    "EMOTION-VIGOROUS": {
        scores: [{recommendation: "REC1", score: 1}], 
        translation: {"nl-BE": "😄 Energiek"}},
    "EMOTION-CHEERFUL": {
        scores: [{recommendation: "REC1", score: 1}], 
        translation: {"nl-BE": "😊 Vrolijk", "nl-FR": "", "en-EN": ""}},
    "EMOTION-LIVELY": {
        scores: [{recommendation: "REC1", score: 1}], 
        translation: {"nl-BE": "😆 Levendig", "nl-FR": "", "en-EN": ""}},
    "EMOTION-ANXIOUS": {
        scores: [{recommendation: "REC2", score: 4}, {recommendation: "REC3", score: 3}], 
        translation: {"nl-BE": "😧 Angstig", "nl-FR": "", "en-EN": ""}},
    "EMOTION-ONEDGE": {
        scores: [{recommendation: "REC2", score: 4}, {recommendation: "REC3", score: 1}],  
        translation: {"nl-BE": "😬 Gespannen", "nl-FR": "", "en-EN": ""}},
    "EMOTION-UNEASY": {
        scores: [{recommendation: "REC2", score: 4}, {recommendation: "REC3", score: 3}], 
        translation: {"nl-BE": "😰 Paniekerig", "nl-FR": "", "en-EN": ""}},
    "EMOTION-SAD": {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "😔 Droevig", "nl-FR": "", "en-EN": ""}},
    "EMOTION-HOPELESS":    {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "😓 Hulpeloos", "nl-FR": "", "en-EN": ""}},
    "EMOTION-DISCOURAGED": {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "😨 Ontmoedigd", "nl-FR": "", "en-EN": ""}},
    "EMOTION-ANGRY":       {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "😡 Kwaad", "nl-FR": "", "en-EN": ""}},
    "EMOTION-RESENTFUL":   {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "🤬 Wrokkig", "nl-FR": "", "en-EN": ""}},
    "EMOTION-ANNOYED":     {
        scores: [{recommendation: "REC3", score: 4}], 
        translation: {"nl-BE": "😒 Geërgerd", "nl-FR": "", "en-EN": ""}},
    "EMOTION-FATIGUED":    {
        scores: [{recommendation: "REC4", score: 4}, {recommendation: "REC62", score: 1}], 
        translation: {"nl-BE": "🥱 Vermoeid", "nl-FR": "", "en-EN": ""}},
    "EMOTION-WORNOUT":     {
        scores: [{recommendation: "REC4", score: 4}, {recommendation: "REC62", score: 1}], 
        translation: {"nl-BE": "🥵 Afgemat", "nl-FR": "", "en-EN": ""}},
    "EMOTION-EXHAUSTED":   {
        scores: [{recommendation: "REC4", score: 4}, {recommendation: "REC62", score: 1}], 
        translation: {"nl-BE": "😴 Uitgeput", "nl-FR": "", "en-EN": ""}},
}

export const THOUGHTS = {
    /* Oorzaak - Negatief */
    "THOUGHT-CAUSE-NEG-1": {
        scores: [
            {recommendation: "REC5", score: 6}
        ],
        synonyms: ["kapot", "versleten", "stuk"],
        translation: {
            "nl-BE": "Deze pijn betekent dat er wel iets beschadigd moet zijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-NEG-2": {        
        scores: [
            {recommendation: "REC5", score: 6}
        ],
        synonyms: ["vorige", "voorgaande", "bijdragen", "dokter", "ziekenhuis"], 
        translation: {
            "nl-BE": "Ik moet een scan laten nemen om de oorzaak van deze pijn te achterhalen",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-NEG-3": {        
        scores: [
            {recommendation: "REC5", score: 6}
        ],
        synonyms: ["versleten", "kapot", "stuk", "herhaald", "lichaam"], 
        translation: {
            "nl-BE": "Ik heb slijtage van mijn gewrichten, daardoor heb ik nu pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-NEG-4": {        
        scores: [
            {recommendation: "REC5", score: 6}
        ],
        synonyms: ["versleten", "kapot", "stuk"], 
        translation: {
            "nl-BE": "Ik heb al zo lang pijn, dus er moet wel iets beschadigd zijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-NEG-5": {        
        scores: [
            {recommendation: "REC5", score: 6}
        ],
        synonyms: ["versleten", "kapot", "stuk", "schade", "letsel"], 
        translation: {
            "nl-BE": "Mijn oude blessure draagt bij aan de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-NEG-6": {        
        scores: [
            {recommendation: "REC5", score: 6},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC62", score: 2},
        ],
        synonyms: ["sterk", "zwak"], 
        translation: {
            "nl-BE": "Mijn spieren zijn te slap, daardoor ervaar ik nu zoveel pijn",
            "nl-FR": "",
            "en-EN": ""}},
    /* Oorzaak - Positief */
    "THOUGHT-CAUSE-POS-1": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["gevolg", "versleten", "kapot"], 
        translation: {
            "nl-BE": "De pijn, die ik nu ervaar, wilt niet noodzakelijk zeggen dat er iets beschadigd is",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-POS-2": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["leeftijd", "parten"], translation: {
            "nl-BE": "Normale ouderdomsverschijnselen, zoals slijtage van de gewrichten, spelen maar deels mee in de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-POS-3": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["slechte", "niet-gezonde", "inactiviteit", "spanning", "slaapproblemen", "weinig bewegen"], 
        translation: {
            "nl-BE": "Ik denk dat ongezonde gewoontes leiden tot de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CAUSE-POS-4": {
        scores: [
            {recommendation: "REC2", score: 6},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC62", score: 2},
            {recommendation: "REC5", score: 1},
        ],
        synonyms: ["houding", "bewegen", "zitten", "staan", "heffen", "tillen", "buigen", "bukken", "hurken", "spanning", "stress", "langdurig"], 
        translation: {
            "nl-BE": "De pijn die ik nu ervaar, kan veroorzaakt zijn door spanning en foutief bewegen (gespannen, verkrampt, ...)",
            "nl-FR": "",
            "en-EN": ""}},
    /* Activiteiten en werk - Negatief */
    "THOUGHT-ACTIVITY-NEG-1": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC5", score: 3},
            {recommendation: "REC62", score: 2},
        ],
        synonyms: ["houding", "bewegen", "zitten", "staan", "heffen", "tillen", "buigen", "bukken", "hurken", "spanning", "langdurig"], 
        translation: {
            "nl-BE": "Deze pijn is veroorzaakt door 'slechte' houdingen",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-2": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC4", score: 3},
        ],
        synonyms: ["opspannen", "opgespannen"], 
        translation: {
            "nl-BE": "Mijn spieren zijn gespannen door deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-3": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC5", score: 3},
            {recommendation: "REC4", score: 2},
        ],
        synonyms: ["versleten", "werken", "repetitief", "dezelfde"], 
        translation: {
            "nl-BE": "Ik krijg slijtage van mijn lichaam door de herhaaldelijke belasting tijdens deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-4": {
        scores: [
            {recommendation: "REC61", score: 6},
        ],
        synonyms: ["gespannen"], 
        translation: {
            "nl-BE": "Ik moet mijn lichaam opspannen tijdens deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-5": {
        scores: [
            {recommendation: "REC4", score: 6},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC5", score: 2},
        ],
        synonyms: ["te veel"], 
        translation: {
            "nl-BE": "Ik heb teveel gedaan (mezelf overbelast), daardoor is de schade aan mijn lichaam toegenomen",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-6": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC7", score: 3},
            {recommendation: "REC62", score: 2},
        ],
        synonyms: ["slecht", "niet goed", "werken"], 
        translation: {
            "nl-BE": "Deze bewegingen of activiteiten zijn gevaarlijk voor mijn lichaam",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-7": {
        scores: [
            {recommendation: "REC61", score: 6},
        ],
        synonyms: ["stoppen"], 
        translation: {
            "nl-BE": "Nu kan ik maar beter al de bewegingen en activiteiten vermijden die mijn pijn nog kunnen verergeren",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-NEG-8": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC5", score: 3},
            {recommendation: "REC62", score: 2},
        ],
        synonyms: ["stoppen"], 
        translation: {
            "nl-BE": "Deze pijn is een teken dat ik best stop waarmee ik bezig ben of de activiteit aanpas",
            "nl-FR": "",
            "en-EN": ""}},
    /* Activiteiten en werk - Positief */
    "THOUGHT-ACTIVITY-POS-1": {
        scores: [
            {recommendation: "REC61", score: 6},
            {recommendation: "REC62", score: 3},
        ],
        synonyms: ["beetje", "meer", "werken"], 
        translation: {
            "nl-BE": "Als ik geleidelijk wat meer zou bewegen of deze activiteit zou opbouwen, dan zou mijn lichaam sterker en gezonder worden",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-POS-2": {
        scores: [
            {recommendation: "REC62", score: 6},
        ],
        synonyms: ["beter", "actiever"], 
        translation: {
            "nl-BE": "Als ik een gezondere levensstijl zou hebben, dan zou ik nu misschien niet zoveel pijn hebben",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-POS-3": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["okay", "oke", "niet erg", "werken"], 
        translation: {
            "nl-BE": "Het is oké, deze bewegingen of activiteiten zijn veilig voor mijn lichaam",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-ACTIVITY-POS-4": {
        scores: [
            {recommendation: "REC2", score: 6},
        ],
        synonyms: ["relaxed", "minder", "rustiger"], 
        translation: {
            "nl-BE": "Als ik wat meer ontspannen was, dan zou ik waarschijnlijk nu niet zoveel pijn hebben",
            "nl-FR": "",
            "en-EN": ""}},

    /* Gevolg  - Negatief */ 
    "THOUGHT-CONSEQUENCE-NEG-1": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["verergeren", "leeftijd"], 
        translation: {
            "nl-BE": "De pijn zal erger worden naarmate ik ouder word",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONSEQUENCE-NEG-2": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["langdurig", "aanhouden", "niet weggaan", "blijven"], 
        translation: {
            "nl-BE": "Mijn pijn zal chronisch worden",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONSEQUENCE-NEG-3": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["verergeren"], 
        translation: {
            "nl-BE": "Mijn pijn zal niet meer beter worden",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONSEQUENCE-NEG-4": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC62", score: 6},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik zal steeds minder kunnen doen door de pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONSEQUENCE-NEG-5": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC62", score: 6},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik kan niet meer de dingen doen die ik wil door de pijn",
            "nl-FR": "",
            "en-EN": ""}},
    /* Gevolg  - Positief */ 
    "THOUGHT-CONSEQUENCE-POS-1": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["doorsta"], 
        translation: {
            "nl-BE": "Ik kan de dingen doen die ik wil ondanks de pijn",
            "nl-FR": "",
            "en-EN": ""}},

    /* Controle - Negatief */
    "THOUGHT-CONTROL-NEG-1": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["trust"], 
        translation: {
            "nl-BE": "Ik heb geen vertrouwen meer in mijn lichaam",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-NEG-2": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC3", score: 1},
        ],
        synonyms: ["give up", "stoppen"], 
        translation: {
            "nl-BE": "Ik geef het op",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-NEG-3": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC5", score: 3},
        ],
        synonyms: ["niks"], 
        translation: {
            "nl-BE": "Er is niets dan ik kan doen aan deze pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-NEG-4": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC5", score: 3},
        ],
        synonyms: ["geen", "niet in handen"], 
        translation: {
            "nl-BE": "Ik heb weinig controle over mijn pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-NEG-5": {
        scores: [
            {recommendation: "REC5", score: 6},
        ],
        synonyms: ["voorspelt", "onvoorspelbaar", "willekeurig", "random"], 
        translation: {
            "nl-BE": "Ik kan mijn pijn niet voorspellen",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-NEG-6": {
        scores: [
            {recommendation: "REC5", score: 6},
        ],
        synonyms: ["weet niet", "verward", "snap", "begrijp", "niet"], 
        translation: {
            "nl-BE": "Ik ben in de war omdat men al zoveel verschillende dingen heeft gezegd over de pijn die ik heb",
            "nl-FR": "",
            "en-EN": ""}},
    /* Controle - Positief */
    "THOUGHT-CONTROL-POS-1": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["komt goed"], 
        translation: {
            "nl-BE": "Ik heb vertrouwen in mijn lichaam",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-POS-2": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["moet", "actie"], 
        translation: {
            "nl-BE": "Ik weet wat ik kan doen bij deze pijnopstoot",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-POS-3": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["oke", "okay", "oké", "draagbaar", "verdragen"], 
        translation: {
            "nl-BE": "Ik kan met mijn pijn leven",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-CONTROL-POS-4": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["tijdelijk", "weg", "verdwijnt"], 
        translation: {
            "nl-BE": "Ik denk dat ik van deze pijn kan verlost geraken",
            "nl-FR": "",
            "en-EN": ""}},

    /* Psychosociale invloed - Negatief */
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-1": {
        scores: [
            {recommendation: "REC5", score: 6},
        ],
        synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "niet"], 
        translation: {
            "nl-BE": "Hoe ik mij voel (gestresst/moe/angstig/somber) heeft geen invloed op de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-2": {
        scores: [
            {recommendation: "REC3", score: 6},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC62", score: 2},
        ],
        synonyms: ["bang", "schrik", "eng"], 
        translation: {
            "nl-BE": "Alleen al de gedachte aan bewegen of het uitvoeren van activiteiten met mijn pijn maakt me bang",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-3": {
        scores: [
            {recommendation: "REC9", score: 6},
        ],
        synonyms: ["begrip", "begrijpt", "snappen", "snapt"], 
        translation: {
            "nl-BE": "Anderen weten niet wat het is om te leven met pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-4": {
        scores: [
            {recommendation: "REC3", score: 6},
        ],
        synonyms: ["waarom"], 
        translation: {
            "nl-BE": "Ik voel me gefrustreerd en boos omdat dit mij weer overkomt",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-5": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["nadenken", "concentratie", "focus"], 
        translation: {
            "nl-BE": "Ik kan deze pijn niet uit mijn gedachten zetten",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-6": {
        scores: [
            {recommendation: "REC7", score: 6},
        ],
        synonyms: ["intens", "fel", "concentratie", "concentreren", "denken", "helder"], 
        translation: {
            "nl-BE": "Deze pijn is zo intens dat ik niet kan nadenken",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-7": {
        scores: [
            {recommendation: "REC7", score: 6},
            {recommendation: "REC3", score: 1},
        ],
        synonyms: ["geef"], 
        translation: {
            "nl-BE": "Ik heb alle hoop verloren",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-8": {
        scores: [
            {recommendation: "REC3", score: 6},
            {recommendation: "REC2", score: 3},
        ],
        synonyms: ["schrik", "angst", "angstig", "eng"], 
        translation: {
            "nl-BE": "Ik word bang van deze pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-9": {
        scores: [
            {recommendation: "REC3", score: 6},
            {recommendation: "REC2", score: 3},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik word wanhopig van deze pijn",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-10": {
        scores: [
            {recommendation: "REC3", score: 6},
        ],
        synonyms: ["wild", "beu", "boos", "stop", "stoppen"], 
        translation: {
            "nl-BE": "Ik word gek van deze pijn",
            "nl-FR": "",
            "en-EN": ""}},
    /* Psychosociale invloed - Positief */
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-1": {
        scores: [
            {recommendation: "REC2", score: 6},
            {recommendation: "REC3", score: 6},
            {recommendation: "REC4", score: 6},
        ],
        synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "versterkt"], 
        translation: {
            "nl-BE": "Hoe ik mij voel (gestresst/moe/angstig/somber) zorgt ervoor dat ik nu meer pijn ervaar",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-2": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["geef", "komaan"], 
        translation: {
            "nl-BE": "Ik mag niet opgeven, de pijn hoort erbij",
            "nl-FR": "",
            "en-EN": ""}},
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-3": {
        scores: [
            {recommendation: "REC1", score: 1},
        ],
        synonyms: ["oke", "ok", "niet erg", "geen probleem", "geen", "schrik"], 
        translation: {
            "nl-BE": "Het is oké om pijn te hebben, ik moet niet bang zijn",
            "nl-FR": "",
            "en-EN": ""}}
}

export const REACTIONS = {
    /* Negatief */
    "REACTION-NEG-1": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC62", score: 2}
        ],
        synonyms: ["ontspannen", "stop"], 
        translation: {
            "nl-BE": "Ik ga rusten totdat de pijn volledig is verdwenen",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-2": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC2", score: 3}
        ],
        synonyms: ["paniek"], 
        translation: {
            "nl-BE": "Ik panikeer en probeer hopeloos van de pijn verlost te geraken",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-3": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC7", score: 2},
            {recommendation: "REC2", score: 1}
        ],
        synonyms: ["angstig", "schrik"], 
        translation: {
        "nl-BE": "Ik word bang en maak me zorgen dat de pijn niet beter zal worden",
        "nl-FR": "",
        "en-EN": ""}},
    "REACTION-NEG-4": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC62", score: 2}
        ],
        synonyms: ["stoppen", "alles", "neerleggen"], 
        translation: {
            "nl-BE": "Ik vermijd al de bewegingen en activiteiten die de pijn kunnen verergeren",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-5": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC4", score: 2},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik neem de correcte houding aan en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-6": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC4", score: 2},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik span mijn lichaam op en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-7": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC4", score: 2},
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik probeer mijn pijnlijke lichaamsdeel te ontlasten en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-8": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC3", score: 2},
        ],
        synonyms: ["why", "waarom", "ik", "typisch", "weeral"], 
        translation: {
            "nl-BE": "Ik word gefrustreerd omdat dit mij overkomen is",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-NEG-9": {
        scores: [
            {recommendation: "REC8", score: 10},
            {recommendation: "REC61", score: 3},
            {recommendation: "REC4", score: 2},
        ],
        synonyms: ["doordoen", "continue", "ga"], 
        translation: {
            "nl-BE": "Ik blijf verder doen waar ik mee bezig ben hoe erg de pijn ook wordt",
            "nl-FR": "",
            "en-EN": ""}},
    /* Positief */
    "REACTION-POS-1": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["aanpassen", "veranderen", "werken"], 
        translation: {
            "nl-BE": "Ik pas de activiteit aan waar ik mee bezig ben of ga verder met een andere activiteit",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-2": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["relaxen", "chillen"], 
        translation: {
            "nl-BE": "Ik probeer te ontspannen",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-3": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["oke", "okay", "rustig", "schrik", "geen"], 
        translation: {
            "nl-BE": "Ik zeg tegen mezelf: Het is oké! Wees niet bang van de pijn, je veroorzaakt niet meer schade in je lichaam",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-4": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["afleiden", "afleiding"], 
        translation: {
            "nl-BE": "Ik probeer mijn gedachten van de pijn af te leiden",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-5": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: [], 
        translation: {
            "nl-BE": "Ik word me bewust van mijn gedachten en gevoelens",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-6": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["stoppen", "pauzeren", "rusten", "even"], 
        translation: {
            "nl-BE": "Ik neem een korte pauze",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-7": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["juist", "correct"], 
        translation: {
            "nl-BE": "Ik probeer bewust op een gepaste manier te reageren op de situatie",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-8": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: ["inademen", "relaxen"], 
        translation: {
            "nl-BE": "Ik haal een paar keer diep adem",
            "nl-FR": "",
            "en-EN": ""}},
    "REACTION-POS-9": {
        scores: [
            {recommendation: "REC1", score: 1}
        ],
        synonyms: [""], 
        translation: {
            "nl-BE": "Ik probeer op een ontspannen/soepele manier te bewegen",
            "nl-FR": "",
            "en-EN": ""}}
}

export const EXPLANATIONS = {
    /* Emotions */
    "Depressed/scared/angry emotions": "Onprettige gevoelens (bv. angst, verdriet, boosheid...) kunnen bijdragen aan pijn. Zij stimuleren de pijnversterkende banen in het centrale zenuwstelsel, waardoor er sneller pijngerelateerde prikkels naar de hersenen worden gestuurd. Hierdoor kan het zijn dat je bij een letsel nog meer pijn gaat ervaren. Sterker nog, de hersenen kunnen normale prikkels zoals beweging of aanraking als gevaarlijk interpreteren (er hoeft zelfs niet altijd lichamelijke schade te zijn). Veel aandacht besteden aan de pijn of deze onprettige gevoelens heeft ook nog eens een versterkend effect. Probeer daarom onprettige gevoelens niet over het hoofd te zien. Naast weefselschade zijn het één van de vele factoren die in meerdere of mindere maten een rol kunnen spelen bij pijn.",
    "Panicky or Stressed emotions": "Een plotse toename in stress zal een aantal hormonen vrijzetten die zorgen voor veranderingen in je lichaam, waardoor je klaar bent voor actie. Je wordt alerter, er gaat meer bloed naar de spieren en je pijndempend systeem gaat beter werken. Je zal dus minder snel pijn ervaren. Maar, wanneer je langdurig verhoogde spanning of stress ervaart wordt deze hormoonbalans ontregeld en ontstaat er een omgekeerd effect. Naast spierspanning en een aantal risico's voor je gezondheid (zoals hart- en vaatziekten) zullen de pijnversterkende banen in het centrale zenuwstelsel worden gestimuleerd. Je zal dus sneller en meer pijn ervaren. Langdurige stress kan ook een teken zijn van een onevenwicht tussen je belastbaarheid en de eisen die je worden opgelegd. Dit vergroot het risico op overbelasting. Probeer daarom stress niet over het hoofd te zien. Naast weefselschade zijn het één van de vele factoren die in meerdere of mindere maten een rol kunnen spelen bij pijn.",
    /* Thoughts */
    "Tired or overload inputs": "Vermoeidheid en je frequent overbelasten hebben een negatieve invloed op het herstelproces van je lichaam. Bovendien zorgen ze ervoor dat de pijndempende mechanismen minder goed werken en dat er sneller pijngerelateerde prikkels naar de hersenen worden gestuurd. Hierdoor kan het zijn dat je sneller en meer pijn gaat ervaren. Sterker nog, de hersenen kunnen normale prikkels zoals beweging of aanraking als gevaarlijk interpreteren (er hoeft zelfs niet altijd lichamelijke schade te zijn). Langdurige vermoeidheid kan ook een teken zijn van een onevenwicht tussen je belastbaarheid en de eisen die je worden opgelegd. Wat opnieuw het risico vergroot op overbelasting. Probeer daarom vermoeidheid en frequent boven je grenzen gaan niet over het hoofd te zien. Naast weefselschade zijn het één van de vele factoren die in meerdere of mindere maten een rol kunnen spelen bij pijn.",
    "Cause of pain": "Pijn is een complex fenomeen dat ontstaat in het centrale zenuwstelsel. Prikkels uit je lichaam worden via de zenuwen en het ruggenmerg al dan niet doorgestuurd naar de hersenen. De hersenen interpreteren de binnenkomende signalen, rekening houdend met de situatie waarin je je bevindt en beslissen of pijn een gepaste reactie is. Volgende factoren kunnen bijdragen aan pijn: Lichamelijke schade: Na een blessure zoals een spierscheur worden stoffen vrijgegeven die tijdelijk het zenuwstelsel gevoeliger maken. De regio rond het letsel wordt gevoeliger en normale bewegingen of aanrakingen kunnen pijnlijk zijn. Je hersenen doen dit om het lichaamsdeel te beschermen zodat het kan herstellen. Ben je voldoende hersteld, dan zal de overgevoeligheid en de pijn terug afnemen. Maar niet alle schade leidt tot pijn (denk maar aan een verwonding die je oploopt tijdens een levensbedreigende situatie, of een blauwe plek tijdens het sporten). Uit onderzoek blijkt dat normale verschijnselen zoals slijtage van de gewrichten vaak voorkomen bij mensen zonder pijnklachten. De gevoeligheid van het zenuwstelsel is dus dynamisch en wordt door meer factoren dan lichamelijke schade beïnvloed. Stress: Bij acute stress komen er hormonen vrij die het zenuwstelsel minder gevoelig maken, zo ben je klaar voor actie. Bij langdurige stress raakt de hormoonbalans ontregeld en neemt de gevoeligheid van het zenuwstelsel toe, waardoor je sneller en meer pijn zal ervaren. Gedachten en gevoelens: Maak je je veel zorgen om pijnklachten, heb je schrik dat bepaalde activiteiten pijn zullen veroorzaken of kan je pijn moeilijk uit je gedachten zetten? Ook dan zal je zenuwstelsel gevoeliger worden en zullen je hersenen extra focussen op pijngerelateerde prikkels en deze uitvergroten. Langs de andere kant is het minimaliseren en verbijten van klachten ook geen goede aanpak. Levensstijl: Ongezonde voeding leidt tot een toename van het aantal inflammatoire stoffen in je lichaam wat het zenuwstelsel gevoeliger maakt. Ook een gebrek aan kwalitatieve slaap maakt het zenuwstelsel gevoeliger en verhindert een efficiënt herstelproces. Bewegen: Voldoende bewegen en regelmatige afwisselen van houding verbeteren de doorbloeding van je lichaam, versterken je spieren en botten en maken het zenuwstelsel minder gevoelig voor pijn. Ga je af en toe boven je limiet? Dat kan geen kwaad. Maar doe je dat frequent, dan loop je meer risico op blessures en zal het zenuwstelsel net gevoeliger worden. Hoe weet je nu welke factoren bijdragen aan jouw pijn? Door de puzzel te maken, zelf of samen met een hulpverlener. Over het algemeen zal bij acute pijn lichamelijke schade een grotere rol spelen. Blijven de klachten langer aanslepen (vanaf 6 weken) of wordt de pijn chronisch (vanaf 12 weken), dan gaat lichamelijke schade steeds een kleinere rol spelen. Ook een pijnopstoot betekent niet onmiddellijk dat er terug meer schade is. Ongeacht of het nu om acute of chronische pijn gaat is het belangrijk om al de factoren die kunnen bijdragen aan pijn te evalueren en hier rekening mee te houden bij de behandeling.",
    "Social environment": "Sociale steun is belangrijk omdat mensen uit je omgeving jouw pijn kunnen beïnvloeden. Ze kunnen helpen bij zware taken of je stimuleren om je persoonlijke doelen te halen. Helaas ervaren mensen met pijn over het algemeen een gebrek aan sociale steun. In de eerste fase is de omgeving meestal begripvol, maar dit neemt vaak af wanneer de klachten langer blijven duren. En sommige mensen zijn helemaal nooit begripvol. Dit brengt onaangename gedachten en gevoelens met zich mee en kan een bron zijn van stress. Als je niet mag tonen dat je klachten hebt, dan loop je het risico dat je deze gaat verbijten en boven je grenzen gaat gaan. Langs de andere kant, kunnen er ook mensen in je omgeving zijn die heel bezorgd zijn over jouw situatie. Ook dat is niet goed. Hierdoor ga je misschien veel activiteiten vermijden en meer op je klachten focussen waardoor het pijnsysteem beter wordt in het ervaren van pijn. Inzetten op sociale steun en duidelijk communiceren is daarom heel belangrijk. Pijn is complex en mensen kennen vaak jouw situatie niet, noch waar jij nood aan hebt. Zo sta je er niet alleen voor!",
    "P/M/A Activity/movement": "Bewegen, de activiteiten die je doet en de houdingen waarin je deze activiteiten uitvoert kunnen pijnklachten veroorzaken en onderhouden. Maar tegelijk zijn het ook beschermende factoren voor pijn en spelen ze een belangrijke rol in het herstelproces. Voldoende bewegen en regelmatig afwisselen van houding verbeteren de doorbloeding van je lichaam, dit stimuleert genezing en maken je spieren en botten sterker. Tijdens en na fysieke inspanning is het zenuwstelsel ook minder gevoelig voor pijn. Je zal bijvoorbeeld een blauwe plek niet opmerken tijdens het sporten. Vermijd je veel activiteiten omwille van pijn, dan wordt jouw lichaam zwakker waardoor je sneller overbelast raakt. Ga je af en toe boven je limiet? Dat kan geen kwaad. Maar doe je dat frequent of ga je fel boven je grenzen, dan loop je meer risico op blessures en zal het zenuwstelsel net gevoeliger worden. Ook een gespannen houding leidt tot meer pijngerelateerde prikkels en een overgevoelig zenuwstelsel. Een overgevoelig zenuwstelsel zorgt er dan weer voor dat je sneller pijn gaat ervaren, ook tijdens normale activiteiten of bewegingen. Maar hoe weet je nu of pijn tijdens het uitvoeren van activiteiten een reactie is van een overgevoelig zenuwstelsel of dat je effectief boven je grenzen gaat en risico loopt op (meer) schade? Door er zeker van te zijn dat de activiteit (duur, intensiteit en uitvoering) is afgestemd op jouw huidige capaciteit. Dit kan je zelf berekenen of je kan advies vragen aan een hulpverlener. Dus, zowel bij een acuut letsel als bij chronische pijn is bewegen belangrijk om het herstelproces te bevorderen. Dit doe je binnen jouw huidige grenzen en bouw je geleidelijk op. Is de activiteit aangepast aan jouw capaciteit, dan is het oké om pijn te ervaren tijdens de uitvoering ervan. Trouwens, mensen met chronische pijn maken vaak de fout zich te laten leiden door hun klachten. Hierdoor gaan ze op dagen dat het goed gaat veel te veel doen en zich overbelasten. De dagen nadien bewegen ze dan weer te weinig omdat ze zoveel last hebben.",
    "Catastrophizing": "Het belang van onze gedachten over pijn mag niet worden onderschat. Maak je je veel zorgen om pijnklachten, heb je schrik dat bepaalde activiteiten pijn zullen veroorzaken, kan je pijn moeilijk uit je gedachten zetten of focus je op wat er allemaal niet meer lukt? Dan heeft dit een ongunstig effect op de situatie. Onze gedachten beïnvloeden namelijk hoe we ons voelen, sturen ons gedrag en kunnen leiden tot stress. Dit stimuleert de pijnversterkende banen in het centrale zenuwstelsel, waardoor er sneller pijngerelateerde prikkels naar de hersenen worden gestuurd. De hersenen zullen ook meer aandacht besteden aan pijngerelateerde prikkels. Hierdoor kan het zijn dat je bij een letsel nog meer pijn gaat ervaren. Sterker nog, de hersenen kunnen normale prikkels zoals beweging of aanraking als gevaarlijk interpreteren (er hoeft zelfs niet altijd lichamelijke schade te zijn). Gelukkig is het omgekeerde ook waar! Ben je positief ingesteld en schenk je niet veel aandacht aan pijn, dan filteren je hersenen al een deel van de pijn weg. Let wel op, je klachten minimaliseren of verbijten is ook geen goede aanpak. Hierdoor loop je dan weer het risico op overbelasting. Hoe jij staat tegenover jouw pijn, kan degelijk de pijn beïnvloeden. Houd hier dus rekening mee, of je nu te maken hebt met een acuut letsel of chronische pijn.",
    /* Reactions */
    "Negative Reactions": "Bij acute en chronische pijn zijn er een aantal algemene tips die je in elke situatie kan toepassen. Een concreet actieplan stel je best op in samenspraak met een zorgverstrekker. Deze persoon kan je begeleiden en doorverwijzen naar de meest geschikte hulpverlening. Probeer mindful te reageren: Hevige emoties en gedachten zoals angst, frustratie of je zorgen maken zullen de situatie alleen maar negatief beïnvloeden. Hetzelfde geldt voor langdurige stress. Ze beïnvloeden de werking van het zenuwstelsel waardoor pijnprikkels worden versterkt en makkelijker worden doorgestuurd naar de hersenen. En de hersenen gaan meer focussen op de pijn. Bovendien leiden dit soort gedachten en emoties tot impulsieve, maar misschien niet altijd de beste reacties. Probeer daarom deze gedachten en emoties te herkennen en ze naast je neer te leggen. Nadien kan je een gepaste reactie kiezen. Evalueer de situatie: Sta even stil bij wat je aan het doen was? Valt de duur en de intensiteit van de activiteit binnen jouw huidige capaciteit? Kan je de activiteit in een goede en ontspannen houding uitvoeren? Heb je voldoende kunnen afwisselen tussen verschillende houdingen en bewegingen? Is dit niet het geval, dan is de activiteit misschien te zwaar voor jou op dit moment. Probeer de activiteit aan te passen of later geleidelijk op te bouwen. Blijf binnen de mate van het mogelijke bewegen: Bewegen bevordert de doorbloeding en verstevigt de spieren en botten. Langdurig platliggen bij pijn is daarom geen goed idee (ook niet bij acute pijn). Het is aangewezen om regelmatig en binnen jouw huidige grenzen te bewegen. Neem zeker ook voldoende rustmomenten. Is een activiteit te zwaar, pas ze dan aan of doe verder met een activiteit die wel past binnen jouw huidige capaciteit. Door geleidelijk meer te bewegen kan je jouw capaciteit verhogen. Denk aan je levensstijl: Voldoende kwalitatieve slaap en gezonde voeding dragen bij aan het herstelproces van je lichaam en kunnen de werking van het zenuwstelsel beïnvloeden. Heb je last van pijn, dan loont het om hier extra aandacht aan te besteden. De laatste tip is om de factoren die kunnen bijdragen aan jouw pijn in kaart te brengen. Zo kan je jezelf verbeteren, het herstel bevorderen en pijn in de toekomst beperken.",
    "Positive Inputs - Feelings/Thoughts/Reaction": "Bij acute en chronische pijn zijn er een aantal algemene tips die je in elke situatie kan toepassen. Een concreet actieplan stel je best op in samenspraak met een zorgverstrekker. Deze persoon kan je begeleiden en doorverwijzen naar de meest geschikte hulpverlening. Probeer mindful te reageren: Hevige emoties en gedachten zoals angst, frustratie of je zorgen maken zullen de situatie alleen maar negatief beïnvloeden. Hetzelfde geldt voor langdurige stress. Ze beïnvloeden de werking van het zenuwstelsel waardoor pijnprikkels worden versterkt en makkelijker worden doorgestuurd naar de hersenen. En de hersenen gaan meer focussen op de pijn. Bovendien leiden dit soort gedachten en emoties tot impulsieve, maar misschien niet altijd de beste reacties. Probeer daarom deze gedachten en emoties te herkennen en ze naast je neer te leggen. Nadien kan je een gepaste reactie kiezen. Evalueer de situatie: Sta even stil bij wat je aan het doen was? Valt de duur en de intensiteit van de activiteit binnen jouw huidige capaciteit? Kan je de activiteit in een goede en ontspannen houding uitvoeren? Heb je voldoende kunnen afwisselen tussen verschillende houdingen en bewegingen? Is dit niet het geval, dan is de activiteit misschien te zwaar voor jou op dit moment. Probeer de activiteit aan te passen of later geleidelijk op te bouwen. Blijf binnen de mate van het mogelijke bewegen: Bewegen bevordert de doorbloeding en verstevigt de spieren en botten. Langdurig platliggen bij pijn is daarom geen goed idee (ook niet bij acute pijn). Het is aangewezen om regelmatig en binnen jouw huidige grenzen te bewegen. Neem zeker ook voldoende rustmomenten. Is een activiteit te zwaar, pas ze dan aan of doe verder met een activiteit die wel past binnen jouw huidige capaciteit. Door geleidelijk meer te bewegen kan je jouw capaciteit verhogen. Denk aan je levensstijl: Voldoende kwalitatieve slaap en gezonde voeding dragen bij aan het herstelproces van je lichaam en kunnen de werking van het zenuwstelsel beïnvloeden. Heb je last van pijn, dan loont het om hier extra aandacht aan te besteden. De laatste tip is om de factoren die kunnen bijdragen aan jouw pijn in kaart te brengen. Zo kan je jezelf verbeteren, het herstel bevorderen en pijn in de toekomst beperken."
}

export const RECOMMENDATIONS = {
    REC1: {
        description: "Positive Thoughts/Emotions/Reactions",
        title: {
            "nl-BE": "Positieve gedachten",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Op basis van jouw inputs blijkt dat je al op een goede manier over jouw klachten nadenkt en er actief mee aan de slag gaat. <b>Super, doe zo verder!</b> In de module pijneducatie vind je een overzicht van al de factoren die kunnen bijdragen aan pijn. Je kan hier nog eens een kijkje nemen om te evalueren <b>welke factoren je nog kan optimaliseren</b> en of je misschien een factor over het hoofd hebt gezien.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Positive Inputs - Feelings/Thoughts/Reaction"],
        priority: 3,
        maxScore: 10,
        modules: [{module: "PAINEDUCATION", submodule: "PE_MOD_5"}]
    },
    REC2: {
        description: "Panicky or Stressed emotions",
        title: {
            "nl-BE": "Paniekerig / gespannen",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Je hebt een aantal inputs aangeduid die te maken hebben met spanning of stress. Het is oké om af en toe verhoogde spanning of stress te ervaren. Maar als dit langdurig blijft aanhouden dan <b>kan dat een rol spelen bij pijn. Wij hebben tal van tips om aan je veerkracht te werken.</b> Bijvoorbeeld: het stellen van prioriteiten, het afbakenen van je grenzen, het vrijmaken van tijd voor jezelf en rekening te houden met je cirkel van invloed. Je kan ook proberen te ontspannen met een ademhaling of relaxatie oefening. Voor anderen helpt sport en beweging om te ontstressen. Nadien kan je op zoek naar andere factoren die een rol spelen bij jouw pijn en concrete stappen ondernemen om deze te optimaliseren.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Panicky or Stressed emotions"],
        priority: 2,
        maxScore: 40,
        modules: [
            {module: "STRESS", submodule: "STR_MOD_4"}, 
            {module: "STRESS", submodule: "STR_MOD_5"},
            {module: "STRESS", submodule: "STR_MOD_6"}]
    },
    REC3: {
        description: "Depressed/Scared/Angry emotions",
        title: {
            "nl-BE": "Droevig / bang / boos",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Je hebt enkele inputs aangeduid die samengaan met <b>onprettige gevoelens</b>. Het moet behoorlijk lastig zijn om je zo te voelen. Dit <b>kan een invloed hebben op de pijn</b> die je ervaart, dus sta er even bij stil. Je kan (moeilijke) gevoelens niet zomaar aan- en uitzetten. Wel kan je <b>leren om er op zo'n manier mee om te gaan</b> dat je er minder last van ondervindt. Bijvoorbeeld: probeer bewust te worden van je gedachten en emoties, ze vanop een afstand te bekijken en jezelf af te vragen of ze jouw situatie verbeteren of alleen maar erger maken. Nadien kan je op zoek gaan naar nog andere factoren die een rol spelen bij jouw pijn en hier actie voor ondernemen.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Depressed/scared/angry emotions"],
        priority: 1,
        maxScore: 71,
        modules: [
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_2"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_3"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_4"}]
    },
    REC4: {
        description: "Tired or Overload inputs",
        title: {
            "nl-BE": "Uitgeput / overbelast",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Je hebt een aantal inputs aangeduid die kunnen wijzen op een <b>verstoord evenwicht tussen jouw belasting en belastbaarheid</b> (bijvoorbeeld vermoeidheid of overbelasting). Het kan geen kwaad als de weegschaal af en toe overhelt naar één kant. Maar een langdurig onevenwicht of fel boven je grenzen gaan <b>vergroot het risico op gezondheidsproblemen</b> zoals lichamelijke klachten. Je kan leren om beter om te gaan met je energie door een <b>evenwicht te zoeken tussen activiteit en rust</b>. Onze tips komen van pas om lichamelijke klachten in de toekomst te beperken en om terug actiever te worden na een blessure. Wissel af tussen zware en minder zware activiteiten, bouw zware activiteiten veilig op, pak ze slim aan en let op je houding. Besteed ook aandacht aan je slaap. Met een goede nachtrust ben je beter voorbereid op de obstakels die jouw pad kruisen. Nadien kan je jouw fysieke fitheid opbouwen waardoor je meer energie zal krijgen.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Tired or overload inputs"],
        priority: 2,
        maxScore: 37,
        modules: [
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_3"}, 
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_4"}, 
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_9"}]
    },
    REC5: {
        description: "Cause of pain",
        title: {
            "nl-BE": "Vragen rond pijnoorzaak",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Op basis van jouw inputs heb je precies nog enkele vragen over de oorzaak van jouw pijn? Dat is normaal, want pijn is complex. <b>Veel factoren spelen altijd in meerdere of mindere mate een rol bij het ontstaan of onderhouden van pijnklachten.</b> Naast lichamelijke schade kunnen ook levensstijlfactoren, jouw fysieke fitheid, mensen uit jouw omgeving, jouw gemoedstoestand en hoe jij omgaat met jouw klachten bijdragen aan pijn. De kunst bestaat er in om te achterhalen welke factoren bij jou belangrijk zijn en hier aan te werken. Wij geven je inzicht in hoe pijn ontstaat en welke factoren kunnen bijdragen aan pijn. <b>Probeer de puzzel te leggen en ga aan de slag om de bijdragende factoren te optimaliseren.</b> Nog een tip: beweeg even op een rustige en soepele manier. Vaak heeft dit al een pijndempend effect.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Cause of pain"],
        priority: 3,
        maxScore: 72,
        modules: [
            {module: "PAINEDUCATION", submodule: "PE_MOD_1"}, 
            {module: "PAINEDUCATION", submodule: "PE_MOD_2"}, 
            {module: "PAINEDUCATION", submodule: "PE_MOD_3"}, 
            {module: "PAINEDUCATION", submodule: "PE_MOD_4"}, 
            {module: "PAINEDUCATION", submodule: "PE_MOD_5"},]
    },
    REC61: {
        description: "P/M/A - Activity",
        title: {
            "nl-BE": "Activiteiten",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p><b>Fysieke activiteit kan pijn uitlokken, maar is tegelijk belangrijk voor het herstelproces.</b> Zowel bij acute als chronische pijn is <b>langdurig rusten en veel activiteiten vermijden niet aangewezen.</b> Anders wordt je lichaam zwakker en kan je minder goed om met de belasting in je dagelijkse leven. <b>Houd wel rekening met jouw huidige capaciteit</b>, zeker na een blessure, om het risico op overbelasting te beperken. Doe je dat, dan is pijn tijdens een activiteit niet zo erg. Heb aandacht voor de duur, intensiteit en spreiding van jouw activiteiten. Probeer ook op een ontspannen manier te bewegen, regelmatig van houding te wisselen en te denken aan je ergonomie (bij zware of langdurige taken). Even rustig en soepel bewegen werkt vaak al pijndempend. Op lange termijn helpen we om je taken op een veilige manier op te bouwen.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["P/M/A Activity/movement"],
        priority: 3,
        maxScore: 78,
        modules: [
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_3"}, 
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_4"},]
    },
    REC62: {
        description: "P/M/A - Movement",
        title: {
            "nl-BE": "Beweging",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Naast het vinden van een goed evenwicht in jouw activiteiten en ze slim aan te pakken, zijn <b>gezonde beweeggewoontes ook belangrijk</b>. Dit omvat het onderbreken van langdurige inactiviteit (bijvoorbeeld tv kijken of werken aan de pc) en voldoende bewegen aan een hogere intensiteit (bijvoorbeeld stevig wandelen). Bewegen stimuleert de doorbloeding en verstevigt de spieren en botten. Dit bevordert het herstelproces en jouw belastbaarheid. Op termijn krijg je ook meer energie. <b>De hoeveelheid en intensiteit van het bewegen moet wel aangepast zijn aan jouw huidige niveau</b> (zeker na een blessure), anders is er wel risico op overbelasting. Plan korte beweegmomenten in doorheen de dag en beweeg wekelijks aan een hogere intensiteit (bijvoorbeeld spierversterkende oefeningen of een sport die je leuk vindt). Wij hebben alvast tal van tips om meer te bewegen op het werk en in je vrije tijd! Vaak werkt even rustig en soepel bewegen al pijndempend.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["P/M/A Activity/movement"],
        priority: 1,
        maxScore: 38,
        modules: [
            {module: "MOVEMENT", submodule: "MOV_MOD_4"}, 
            {module: "MOVEMENT", submodule: "MOV_MOD_3"}, 
            {module: "MOVEMENT", submodule: "MOV_MOD_5"}, ]
    },
    REC7: {
        description: "Catastrophizing thoughts",
        title: {
            "nl-BE": "Catastroferende gedachten",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Je hebt enkele <b>onprettige gedachten</b> aangeduid. Deze kunnen samenhangen met zorgen over jouw klachten (bijvoorbeeld over de oorzaak of de evolutie ervan). Het is helemaal oké om je zo te voelen. Maar ze <b>beïnvloeden ons gedrag, zorgen voor stress en verhogen de kans op een overgevoelig zenuwstelsel</b>. Door veel aandacht te schenken aan pijn, gaan je hersenen meer op deze prikkels letten en ze uitvergroten. Je kan deze gedachten niet zomaar aan- en uitzetten.  Je kan wel leren om <b>negatieve gedachten en emoties te herkennen en er op zo'n manier mee om te gaan dat je er minder last van ondervindt</b>. Bijvoorbeeld door je gedachten vanop een afstand te bekijken of ze van je af te schrijven. Nadien kan je zoeken naar nog factoren die een rol spelen bij jouw pijn en hier actie voor ondernemen. Er is altijd wel iets dat je kan doen om jouw situatie te verbeteren. Nog een tip, probeer je energie te stoppen in waardevolle activiteiten. Ben je iets aan het doen dat je leuk vindt? Dan filteren de hersenen vanzelf al een deel van de pijn weg!</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Catastrophizing"],
        priority: 3,
        maxScore: 77,
        modules: [
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_2"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_3"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_4"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_5"}]
    },
    REC8: {
        description: "Negative Reactions",
        title: {
            "nl-BE": "Negatieve reacties",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Op basis van jouw input kunnen we een aantal tips aanreiken om jouw reactie op pijn nog te verbeteren. Deze tips kunnen je op korte termijn helpen. Op lange termijn kan je best proberen te achterhalen welke factoren allemaal bijdragen aan jouw pijn. Zo kan je een behandelplan opstellen dat rekening houdt met jouw noden. <b>Blijf in de eerste plaats kalm.</b> Bezorgdheid of hevige emoties maken de situatie alleen maar erger en dragen niet bij aan de oplossing. <b>Sta nadien stil bij de situatie.</b> Is er een evenwicht tussen hetgeen je doet en jouw huidige belastbaarheid? Beweeg je te weinig of ga je over jouw grenzen? Beweeg je op een ontspannen manier en heb je voldoende aandacht voor je ergonomie? <b>Neem een pauze, beweeg even op een rustige en soepele manier en beslis</b> of je de activiteit kan hervatten, of je deze moet aanpassen of dat je best verdergaat met een andere activiteit. Meer tips vind je in de module 'Belasting & Belastbaarheid'.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Negative Reactions"],
        priority: 2,
        maxScore: 90,
        modules: [
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_3"}, 
            {module: "ACTIVITYWORK", submodule: "ACT_MOD_4"}, 
            {module: "MOVEMENT", submodule: "MOV_MOD_3"}, 
            {module: "MOVEMENT", submodule: "MOV_MOD_4"}, 
            {module: "STRESSRESILIENCE", submodule: "STR_MOD_4"}, 
            {module: "STRESSRESILIENCE", submodule: "STR_MOD_5"}, 
            {module: "STRESSRESILIENCE", submodule: "STR_MOD_6"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_2"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_3"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_4"}, 
            {module: "THOUGHTSEMOTIONS", submodule: "TE_MOD_5"}]
    },
    REC9: {
        description: "Social environment",
        title: {
            "nl-BE": "Sociale omgeving",
            "nl-FR": "",
            "en-EN": ""
        },
        recommendation: {
            "nl-BE": "<p>Hoe jouw omgeving omgaat met jouw klachten en erop reageert kan de evolutie mee bepalen! Familie, vrienden en collega’s kunnen op verschillende manieren reageren. Sommige reacties zal je als helpend ervaren, terwijl anderen dat helemaal niet zijn. En nog andere reacties zijn misschien wel goed bedoeld, maar kunnen op termijn jouw situatie net negatief beïnvloeden. Mensen kennen vaak de exacte situatie niet en weten niet waar jij nood aan hebt. Verder kan je omgeving ook helpen om jouw belasting lichter te maken. Bijvoorbeeld door te helpen bij zware taken. <b>Wij geven je tips om steun vanuit jouw omgeving te vergroten.</b> Dit kan door op een verbindende en assertieve manier te reageren op personen uit jouw omgeving en door jouw noden uit te drukken.</p>",
            "nl-FR": "",
            "en-EN": ""},
        explanation: EXPLANATIONS["Social environment"],
        priority: 2,
        maxScore: 6,
        modules: [{module: "SOCIAL", submodule: "SOC_MOD_2"}, {module: "SOCIAL", submodule: "SOC_MOD_3"}],
    },
}

export const CONVERSATION = {
    /* Inleiding */
    "MESSAGE-INTRO": {
        content: "Goeiedag! Heb je recentelijk last gehad van een pijnscheut of een sterke toename van pijn?",
        sentBy: "coach",
        response: ["RESPONSE-YES-MESSAGE-INTRO", "RESPONSE-NO-MESSAGE-INTRO"]
    },
    "RESPONSE-YES-MESSAGE-INTRO": {
        content: "Ja, inderdaad",
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
        content: "En waar was je / wat was je aan het doen toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-1-MESSAGE-1", "RESPONSE-2-MESSAGE-1", "RESPONSE-3-MESSAGE-1", "RESPONSE-4-MESSAGE-1", "RESPONSE-5-MESSAGE-1", "RESPONSE-6-MESSAGE-1", "RESPONSE-7-MESSAGE-1", "RESPONSE-8-MESSAGE-1"]
    },
    "RESPONSE-1-MESSAGE-1": {
        id: "Sporten",
        category: "CONTEXT",
        content: "Sport / beweging 🏃🏽",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-2-MESSAGE-1": {
        id: "Werken",
        category: "CONTEXT",
        content: "Werk 💼 (betaald, vrijwillig, studeren, ...)",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-3-MESSAGE-1": {
        id: "Huishouden",
        category: "CONTEXT",
        content: "Huishouden 🏠 (tuinieren, koken, boodschappen doen, ...)",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-4-MESSAGE-1": {
        id: "Sociale activiteit",
        category: "CONTEXT",
        content: "Sociale activiteit 😄 (activiteiten met vrienden, familie, collega's, ...)",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-5-MESSAGE-1": {
        id: "Vrije tijd",
        category: "CONTEXT",
        content: "Vrije tijd 📚 (hobbies, TV kijken, relaxatie, iets wat je leuk vindt, )",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-6-MESSAGE-1": {
        id: "Verplaatsing",
        category: "CONTEXT",
        content: "Verplaatsing 🚘",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-7-MESSAGE-1": {
        id: "Rusten",
        category: "CONTEXT",
        content: "Rusten 😴",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-8-MESSAGE-1": {
        id: "Overig",
        category: "CONTEXT",
        content: "Overig 💬",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "MESSAGE-1-INPUT": {
        content: "Beschrijf kort wat je aan het doen was",
        sentBy: "coach", 
        response: ["MESSAGE-1-INPUT-RESPONSE"]
    },
    "MESSAGE-1-INPUT-RESPONSE": {
        category: "ACTIVITY",
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
        id: "Licht",
        category: "INTENSITY",
        content: "Licht",
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-2": {
        id: "Matig",
        category: "INTENSITY",
        content: "Matig",
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-3": {
        id: "Zwaar",
        category: "INTENSITY",
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
        response: ["RESPONSE-YES-MESSAGE-5", "RESPONSE-MAYBE-MESSAGE-5", "RESPONSE-NO-MESSAGE-5"]
    },
    "RESPONSE-YES-MESSAGE-5": {
        content: "Ja",
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    "RESPONSE-MAYBE-MESSAGE-5": {
        content: "Niet zeker",
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
        response: ["RESPONSE-YES-MESSAGE-6", "RESPONSE-MAYBE-MESSAGE-6", "RESPONSE-NO-MESSAGE-6"]
    },
    "RESPONSE-YES-MESSAGE-6": {
        content: "Ja ",
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    "RESPONSE-MAYBE-MESSAGE-6": {
        content: "Niet echt",
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
        response: ["OPEN-RECOMMENDATION", "EXPLAIN-RECOMMENDATION", "CLOSE-LOGBOOK"]
    }, 
    "OPEN-RECOMMENDATION": {
        content: "recommendation-answer",
        text: "Bekijk aanbevolen onderdelen",
        sentBy: "user",
        action: "openRecommendation",
        response: ["RECOMMENDATION"]
    },
    "EXPLAIN-RECOMMENDATION": {
        content: "recommendation-answer",
        text: "Leg uit waarom ik deze aanbeveling krijg",
        sentBy: "user",
        action: "explainRecommendation",
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

export const RECOMMENDATIONTITLES = {
    "THOUGHTSEMOTIONS": "Gedachten & Emoties",
    "SOCIAL": "Sociale omgeving",
    "STRESSRESILIENCE": "Stress & Veerkracht",
    "MOVEMENT": "Bewegen",
    "ACTIVITYWORK": "Belasting & Belastbaarheid",
    "PAINEDUCATION": "Pijneducatie"
}