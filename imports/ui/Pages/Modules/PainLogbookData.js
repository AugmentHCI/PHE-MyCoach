export const fillerWords = ["de", "het", "ik", "dat", "er", "me", "deze"];

export const options = {
    /* Oorzaak - Negatief */
    "Deze pijn betekent dat er wel iets beschadigd moet zijn": 
        {type: "negative", tag: "Oorzaak", synonyms: ["kapot", "versleten"]},
    "Ik moet een scan laten nemen om de oorzaak van deze pijn te achterhalen": 
        {type: "negative", tag: "Oorzaak", synonyms: ["vorig", "vorige", "voorgaande", "bijdragen", "dokter", "ziekenhuis"]},
    "Ik heb slijtage van mijn gewrichten, daardoor heb ik nu pijn": 
        {type: "negative", tag: "", synonyms: ["versleten", "slijt"]},
    /* Oorzaak - Positief */
    "De pijn, die ik nu ervaar, wilt niet noodzakelijk zeggen dat er iets beschadigd is": 
        {type: "positive", tag: "", synonyms: []},
    "Normale ouderdomsverschijnselen, zoals slijtage van de gewrichten, spelen maar deels mee in de pijn die ik nu ervaar": 
        {type: "negative", tag: "", synonyms: []},
    "Ik denk dat ongezonde gewoontes leiden tot de pijn die ik nu ervaar": 
        {type: "positive", tag: "Oorzaak", synonyms: ["slechte", "gezonde", "niet-gezonde"]},
    "De pijn, die ik nu ervaar, kan veroorzaakt zijn door spanning en foutief bewegen (gespannen, verkrampt, ...).": 
        {type: "positive", tag: "", synonyms: []},

    /* Activiteiten en werk - Negatief */
    "Deze pijn is veroorzaakt door 'slechte' houdingen": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Mijn spieren zijn gespannen door deze bewegingen of activiteiten": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Ik krijg slijtage van mijn lichaam door de herhaaldelijke belasting tijdens deze bewegingen of activiteiten": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Ik moet mijn lichaam opspannen tijdens deze bewegingen of activiteiten": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Ik heb teveel gedaan (mezelf overbelast), daardoor is de schade aan mijn lichaam toegenomen": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Nu kan ik maar beter al de bewegingen en activiteiten vermijden die mijn pijn nog kunnen verergeren": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Deze bewegingen of activiteiten zijn gevaarlijk voor mijn lichaam": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    "Deze pijn is een teken dat ik best stop waarmee ik bezig ben of de activiteit aanpas": 
        {type: "negative", tag: "Activiteit en werk", synonyms: []},
    /* Activiteiten en werk - Positief */
    "Als ik geleidelijk wat meer zou bewegen of deze activiteit zou opbouwen, dan zou mijn lichaam sterker en gezonder worden": 
        {type: "positive", tag: "Activiteit en werk", synonyms: []},
    "Als ik een gezondere levensstijl zou hebben, dan zou ik nu misschien niet zoveel pijn hebben": 
        {type: "positive", tag: "Activiteit en werk", synonyms: []},
    "Het is oké, deze bewegingen of activiteiten zijn veilig voor mijn lichaam": 
        {type: "positive", tag: "Activiteit en werk", synonyms: []},
    "Als ik wat meer ontspannen was, dan zou ik waarschijnlijk nu niet zoveel pijn hebben": 
        {type: "positive", tag: "Activiteit en werk", synonyms: []},

    /* Gevolgen  - Negatief */ 
    "De pijn zal erger worden naarmate ik ouder word": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    "Mijn pijn zal chronisch worden": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    "Mijn pijn zal niet meer beter worden": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    "Ik zal steeds minder kunnen doen door de pijn": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    "Ik kan niet meer de dingen doen die ik wil door de pijn": 
        {type: "negative", tag: "Gevolgen", synonyms: []},
    /* Gevolgen  - Positief */ 
    "Ik kan de dingen doen die ik wil ondanks de pijn. ": 
        {type: "positive", tag: "Gevolgen", synonyms: []},

    /* Controle - Negatief */
    "Ik heb geen vertrouwen meer in mijn lichaam": 
        {type: "negative", tag: "Controle", synonyms: []},
    "Ik geef het op": 
        {type: "negative", tag: "Controle", synonyms: ["give", "up"]},
    "Er is niets dan ik kan doen aan deze pijn": 
        {type: "negative", tag: "Controle", synonyms: []},
    "Ik heb weinig controle over mijn pijn": 
        {type: "negative", tag: "Controle", synonyms: []},
    "Ik kan mijn pijn niet voorspellen": 
        {type: "negative", tag: "Controle", synonyms: ["voorspel", "onvoorspelbaar", "willekeur", "willekeurig", "random"]},
    "Ik ben in de war omdat men al zoveel verschillende dingen heeft gezegd over de pijn die ik heb": 
        {type: "negative", tag: "Controle", synonyms: []},
    /* Controle - Positief */
    "Ik heb vertrouwen in mijn lichaam": 
        {type: "positive", tag: "Controle", synonyms: []},
    "Ik weet wat ik kan doen bij deze pijnopstoot": 
        {type: "positive", tag: "Controle", synonyms: []},
    "Ik kan met mijn pijn leven": 
        {type: "positive", tag: "Controle", synonyms: ["oke", "okay", "oké", "draagbaar"]},
    "Ik denk dat ik van deze pijn kan verlost geraken": 
        {type: "positive", tag: "Controle", synonyms: []},

    /* Psychosociale invloed - Negatief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) heeft geen invloed op de pijn die ik nu ervaar": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    "Alleen al de gedachte aan bewegen of het uitvoeren van activiteiten met mijn pijn maakt me bang": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["bang", "schrik", "eng"]},
    "Anderen weten niet wat het is om te leven met pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    "Ik voel me gefrustreerd en boos omdat dit mij weer overkomt": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["waarom"]},
    "Deze pijn is zo intens dat ik niet kan nadenken": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["intens", "fel", "concentratie", "concentreren", "denken", "helder"]},
    "Ik heb alle hoop verloren": 
        {type: "negative", tag: "Psychosiciaal", synonyms: ["geef"]},
    "Ik word bang van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    "Ik word wanhopig van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    "Ik word gek van deze pijn": 
        {type: "negative", tag: "Psychosiciaal", synonyms: []},
    /* Psychosociale invloed - Positief */
    "Hoe ik mij voel (gestresst/moe/angstig/somber) zorgt ervoor dat ik nu meer pijn ervaar": 
        {type: "positive", tag: "Psychosiciaal", synonyms: []},
    "Ik mag niet opgeven, de pijn hoort erbij": 
        {type: "positive", tag: "Psychosiciaal", synonyms: ["geef"]},
    "Het is oké om pijn te hebben, ik moet niet bang zijn": 
        {type: "positive", tag: "Gevolgen", synonyms: []}
}

export const reactions = {
    /* Negatief */
    "Ik ga rusten totdat de pijn volledig is verdwenen": 
        {type: "negative", synonyms: []},
    "Ik panikeer en probeer hopeloos van de pijn verlost te geraken": 
        {type: "negative", synonyms: []},
    "Ik word bang en maak me zorgen dat de pijn niet beter zal worden": 
        {type: "negative", synonyms: []},
    "Ik vermijd al de bewegingen en activiteiten die de pijn kunnen verergeren": 
        {type: "negative", synonyms: []},
    "Ik neem de correcte houding aan en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: []},
    "Ik span mijn lichaam op en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: []},
    "Ik probeer mijn pijnlijke lichaamsdeel te ontlasten en doe verder waar ik mee bezig ben": 
        {type: "negative", synonyms: []},
    "Ik word gefrustreerd omdat dit mij overkomen is": 
        {type: "negative", synonyms: []},
    "Ik blijf verder doen waar ik mee bezig ben hoe erg de pijn ook wordt": 
        {type: "negative", synonyms: []},
    /* Positief */
    "Ik pas de activiteit aan waar ik mee bezig ben of ga verder met een andere activiteit": 
        {type: "positive", synonyms: []},
    "Ik probeer te ontspannen": 
        {type: "positive", synonyms: []},
    "Ik zeg tegen mezelf: Het is oké! Wees niet bang van de pijn, je veroorzaakt niet meer schade in je lichaam": 
        {type: "positive", synonyms: []},
    "Ik probeer mijn gedachten van de pijn af te leiden": 
        {type: "positive", synonyms: []},
    "Ik wordt me bewust van mijn gedachten en gevoelens": 
        {type: "positive", synonyms: []},
    "Ik neem een korte pauze": 
        {type: "positive", synonyms: []},
    "Ik probeer bewust op een gepaste manier te reageren op de situatie": 
        {type: "positive", synonyms: []},
    "Ik haal een paar keer diep adem": 
        {type: "positive", synonyms: []},
    "Ik probeer op een ontspannen/soepele manier te bewegen": 
        {type: "positive", synonyms: []}
}

export const conversation = {
    /* Inleiding */
    "MESSAGE-INTRO": {
        content: "Goeiedag! Wil jij je pijnlogboek invullen?",
        sentBy: "coach",
        response: ["RESPONSE-1-MESSAGE-INTRO", "RESPONSE-2-MESSAGE-INTRO"]
    },
    "RESPONSE-1-MESSAGE-INTRO": {
        content: "Ja, graag",
        sentBy: "user",
        choice: true,
        response: ["MESSAGE-1"]
    },
    "RESPONSE-2-MESSAGE-INTRO": {
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
        response: ["MESSAGE-2"]
    },
    "RESPONSE-2-MESSAGE-1": {
        content: "Op het werk 💼",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-2"]
    },
    "RESPONSE-3-MESSAGE-1": {
        content: "Thuis 🏠",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-2"]
    },
    "RESPONSE-4-MESSAGE-1": {
        content: "Overig 💬",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-2"]
    },
    /* Vraag 2 - Emoties */
    "MESSAGE-2": {
        content: "Kan je aanduiden welke van onderstaande gevoelens aanwezig waren toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-1-MESSAGE-2", "RESPONSE-2-MESSAGE-2", "RESPONSE-3-MESSAGE-2", "RESPONSE-4-MESSAGE-2", "RESPONSE-5-MESSAGE-2"]
    },
    "RESPONSE-1-MESSAGE-2": {
        content: "Angstig",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    "RESPONSE-2-MESSAGE-2": {
        content: "Depressief",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    "RESPONSE-3-MESSAGE-2": {
        content: "Boos",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    "RESPONSE-4-MESSAGE-2": {
        content: "Vermoeid",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    "RESPONSE-5-MESSAGE-2": {
        content: "Energiek",
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-3"]
    },
    /* Vraag 3 - Gedachten */
    "MESSAGE-3": {
        content: "En kan je nu aanduiden welke van onderstaande gedachten aanwezig waren toen de pijn (in sterke mate) toenam?",
        sentBy: "coach", 
        response: ["RESPONSE-MESSAGE-3"]
    },
    "RESPONSE-MESSAGE-3": {
        content: "emotions",
        sentBy: "user", 
        response: ["MESSAGE-3"]
    }

}