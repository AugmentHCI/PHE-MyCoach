export const fillerWords = ["de", "het", "ik", "dat", "die", "er", "me", "mij", "deze"];

export const codes = {
    "TIR":       {type: "NEGATIVE", translation: {"nl-BE": "Te verbeteren reacties",  "nl-FR": "", "en-EN": "To improve reaction"}},
    "TIT":       {type: "NEGATIVE", translation: {"nl-BE": "Te verbeteren gedachten", "nl-FR": "", "en-EN": "To imporve thought"}},
    "ANXIOUS":   {type: "NEGATIVE", translation: {"nl-BE": "Gespannen / angstig",     "nl-FR": "", "en-EN": "Tense / Anxious"}},
    "ANGER":     {type: "NEGATIVE", translation: {"nl-BE": "Geergerd / kwaad",        "nl-FR": "", "en-EN": "Irritated / Angry"}},
    "FATIGUE":   {type: "NEGATIVE", translation: {"nl-BE": "Vermoeid / uitgeput",     "nl-FR": "", "en-EN": "Exhausted / Worn out"}},
    "DEPRESSED": {type: "NEGATIVE", translation: {"nl-BE": "Ontmoedigd / hulpeloos",  "nl-FR": "", "en-EN": "Discouraged"}},
    "HR":        {type: "POSITIVE", translation: {"nl-BE": "Helpende reacties",       "nl-FR": "", "en-EN": "Helping reaction"}},
    "HT":        {type: "POSITIVE", translation: {"nl-BE": "Helpende gedachten",      "nl-FR": "", "en-EN": "Helping thought"}},
    "VIGOR":     {type: "POSITIVE", translation: {"nl-BE": "Energiek / levendig",     "nl-FR": "", "en-EN": "Energetic / lively"},},
    "RELAXED":   {type: "POSITIVE", translation: {"nl-BE": "Rustig / ontspannen",     "nl-FR": "", "en-EN": "Relaxed"}},
}

export const emotions = {
    "EMOTION-VIGOROUS":    {level4: "EMOTION-VIGOROUS",    level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😄 Energiek", "nl-FR": "", "en-EN": "😄 Vigorous"}},
    "EMOTION-CHEERFUL":    {level4: "EMOTION-CHEERFUL",    level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😊 Vrolijk", "nl-FR": "", "en-EN": "😊 Cheerful"}},
    "EMOTION-LIVELY":      {level4: "EMOTION-LIVELY",      level3: "VIGOR",     level2: "POSITIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😆 Levendig", "nl-FR": "", "en-EN": "😆 Lively"}},
    "EMOTION-ANXIOUS":     {level4: "EMOTION-ANXIOUS",     level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😧 Angstig", "nl-FR": "", "en-EN": "😧 Anxious"}},
    "EMOTION-ONEDGE":      {level4: "EMOTION-ONEDGE",      level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😬 Gespannen", "nl-FR": "", "en-EN": "😬 On edge"}},
    "EMOTION-UNEASY":      {level4: "EMOTION-UNEASY",      level3: "ANXIOUS",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😰 Paniekerig", "nl-FR": "", "en-EN": "😰 Panicky"}},
    "EMOTION-SAD":         {level4: "EMOTION-SAD",         level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😔 Droevig", "nl-FR": "", "en-EN": "😔 Sad"}},
    "EMOTION-HOPELESS":    {level4: "EMOTION-HOPELESS",    level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😓 Hulpeloos", "nl-FR": "", "en-EN": "😓 Hopeless"}},
    "EMOTION-DISCOURAGED": {level4: "EMOTION-DISCOURAGED", level3: "DEPRESSED", level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😨 Ontmoedigd", "nl-FR": "", "en-EN": "😨 Discouraged"}},
    "EMOTION-ANGRY":       {level4: "EMOTION-ANGRY",       level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😡 Kwaad", "nl-FR": "", "en-EN": "😡 Angry"}},
    "EMOTION-RESENTFUL":   {level4: "EMOTION-RESENTFUL",   level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "🤬 Wrokkig", "nl-FR": "", "en-EN": "🤬 Resentful"}},
    "EMOTION-ANNOYED":     {level4: "EMOTION-ANNOYED",     level3: "ANGER",     level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😒 Geërgerd", "nl-FR": "", "en-EN": "😒 Annoyed"}},
    "EMOTION-FATIGUED":    {level4: "EMOTION-FATIGUED",    level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "🥱 Vermoeid", "nl-FR": "", "en-EN": "🥱 Fatigued"}},
    "EMOTION-WORNOUT":     {level4: "EMOTION-WORNOUT",     level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "🥵 Afgemat", "nl-FR": "", "en-EN": "🥵 Worn out"}},
    "EMOTION-EXHAUSTED":   {level4: "EMOTION-EXHAUSTED",   level3: "FATIGUE",   level2: "NEGATIVE", level1: "EMOTION", 
        translation: {"nl-BE": "😴 Uitgeput", "nl-FR": "", "en-EN": "😴 Exhausted"}},
}

export const thoughts = {
    /* Oorzaak - Negatief */
    "THOUGHT-CAUSE-NEG-1": 
        {level4: "THOUGHT-CAUSE-NEG-1", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["kapot", "versleten"], translation: {
            "nl-BE": "Deze pijn betekent dat er wel iets beschadigd moet zijn",
            "nl-FR": "",
            "en-EN": "This pain means that something isn't working properly."}},
    "THOUGHT-CAUSE-NEG-2": 
        {level4: "THOUGHT-CAUSE-NEG-2", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["vorig", "vorige", "voorgaande", "bijdragen", "dokter", "ziekenhuis"], translation: {
            "nl-BE": "Ik moet een scan laten nemen om de oorzaak van deze pijn te achterhalen",
            "nl-FR": "",
            "en-EN": "I should be examined to determine the cause of this pain."}},
    "THOUGHT-CAUSE-NEG-3": 
        {level4: "THOUGHT-CAUSE-NEG-3", level3: "CAUSE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["versleten", "slijt"], translation: {
            "nl-BE": "Ik heb slijtage van mijn gewrichten, daardoor heb ik nu pijn",
            "nl-FR": "",
            "en-EN": "My joints are worn out and that's why I'm in pain now."}},
    /* Oorzaak - Positief */
    "THOUGHT-CAUSE-POS-1": 
        {level4: "THOUGHT-CAUSE-POS-1", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["gevolg", "versleten"], translation: {
            "nl-BE": "De pijn, die ik nu ervaar, wilt niet noodzakelijk zeggen dat er iets beschadigd is",
            "nl-FR": "",
            "en-EN": "My current pain does not necessarily mean I have an injury."}},
    "THOUGHT-CAUSE-POS-2": 
        {level4: "THOUGHT-CAUSE-POS-2", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["leeftijd", "parte"], translation: {
            "nl-BE": "Normale ouderdomsverschijnselen, zoals slijtage van de gewrichten, spelen maar deels mee in de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": "Normal signs of ageing, such as worn joints, are only partly responsible for my current pain."}},
    "THOUGHT-CAUSE-POS-3": 
        {level4: "THOUGHT-CAUSE-POS-3", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["slechte", "gezonde", "niet-gezonde"], translation: {
            "nl-BE": "Ik denk dat ongezonde gewoontes leiden tot de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": "I believe unhealthy habits have led to the pain I am currently experiencing."}},
    "THOUGHT-CAUSE-POS-4": 
        {level4: "THOUGHT-CAUSE-POS-4", level3: "CAUSE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT", "ANXIOUS"], synonyms: [], translation: {
            "nl-BE": "De pijn die ik nu ervaar, kan veroorzaakt zijn door spanning en foutief bewegen (gespannen, verkrampt, ...)",
            "nl-FR": "",
            "en-EN": "My current pain may be due to tension and improper movement (strain, cramps)."}},

    /* Activiteiten en werk - Negatief */
    "THOUGHT-ACTIVITY-NEG-1": 
        {level4: "THOUGHT-ACTIVITY-NEG-1", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: [], translation: {
            "nl-BE": "Deze pijn is veroorzaakt door 'slechte' houdingen",
            "nl-FR": "",
            "en-EN": "This pain is due to poor posture."}},
    "THOUGHT-ACTIVITY-NEG-2": 
        {level4: "THOUGHT-ACTIVITY-NEG-2", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: [], translation: {
            "nl-BE": "Mijn spieren zijn gespannen door deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": "My muscles are tense due to certain movements or activities."}},
    "THOUGHT-ACTIVITY-NEG-3": 
        {level4: "THOUGHT-ACTIVITY-NEG-3", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["versleten", "werken"], translation: {
            "nl-BE": "Ik krijg slijtage van mijn lichaam door de herhaaldelijke belasting tijdens deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": "These repetitive movements or activities are causing wear and tear to my body."}},
    "THOUGHT-ACTIVITY-NEG-4": 
        {level4: "THOUGHT-ACTIVITY-NEG-4", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["gespannen"], translation: {
            "nl-BE": "Ik moet mijn lichaam opspannen tijdens deze bewegingen of activiteiten",
            "nl-FR": "",
            "en-EN": "These movements or activities require bodily tension."}},
    "THOUGHT-ACTIVITY-NEG-5": 
        {level4: "THOUGHT-ACTIVITY-NEG-5", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "FATIGUE"], synonyms: ["te veel"], translation: {
            "nl-BE": "Ik heb teveel gedaan (mezelf overbelast), daardoor is de schade aan mijn lichaam toegenomen",
            "nl-FR": "",
            "en-EN": "I have done too much and overexerted myself, which has increased the injury to my body."}},
    "THOUGHT-ACTIVITY-NEG-6": 
        {level4: "THOUGHT-ACTIVITY-NEG-6", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["slecht", "niet goed", "werken"], translation: {
            "nl-BE": "Deze bewegingen of activiteiten zijn gevaarlijk voor mijn lichaam",
            "nl-FR": "",
            "en-EN": "These movements or activities are a risk to my body."}},
    "THOUGHT-ACTIVITY-NEG-7": 
        {level4: "THOUGHT-ACTIVITY-NEG-7", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["stoppen"], translation: {
            "nl-BE": "Nu kan ik maar beter al de bewegingen en activiteiten vermijden die mijn pijn nog kunnen verergeren",
            "nl-FR": "",
            "en-EN": "I should avoid making any movements or activities that could aggravate my pain."}},
    "THOUGHT-ACTIVITY-NEG-8": 
        {level4: "THOUGHT-ACTIVITY-NEG-8", level3: "ACTIVITY-WORK", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: [], translation: {
            "nl-BE": "Deze pijn is een teken dat ik best stop waarmee ik bezig ben of de activiteit aanpas",
            "nl-FR": "",
            "en-EN": "This pain is a sign that I should stop what I’m doing or adapt my activity."}},
    /* Activiteiten en werk - Positief */
    "THOUGHT-ACTIVITY-POS-1": 
        {level4: "THOUGHT-ACTIVITY-POS-1", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["beetje", "werken"], translation: {
            "nl-BE": "Als ik geleidelijk wat meer zou bewegen of deze activiteit zou opbouwen, dan zou mijn lichaam sterker en gezonder worden",
            "nl-FR": "",
            "en-EN": "If I were to gradually exercise more or increase this activity, my body would become stronger and healthier."}},
    "THOUGHT-ACTIVITY-POS-2": 
        {level4: "THOUGHT-ACTIVITY-POS-2", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["beter", "actiever"], translation: {
            "nl-BE": "Als ik een gezondere levensstijl zou hebben, dan zou ik nu misschien niet zoveel pijn hebben",
            "nl-FR": "",
            "en-EN": "If I led a healthier lifestyle, I wouldn't be in so much pain now. "}},
    "THOUGHT-ACTIVITY-POS-3": 
        {level4: "THOUGHT-ACTIVITY-POS-3", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["okay", "oke", "niet erg", "werken"], translation: {
            "nl-BE": "Het is oké, deze bewegingen of activiteiten zijn veilig voor mijn lichaam",
            "nl-FR": "",
            "en-EN": "It’s fine. My body can perform these movements or activities safely."}},
    "THOUGHT-ACTIVITY-POS-4": 
        {level4: "THOUGHT-ACTIVITY-POS-4", level3: "ACTIVITY-WORK", level2: "POSITIVE", level1: "THOUGHT", codes: ["ANXIOUS"], synonyms: ["relaxed", "minder"], translation: {
            "nl-BE": "Als ik wat meer ontspannen was, dan zou ik waarschijnlijk nu niet zoveel pijn hebben",
            "nl-FR": "",
            "en-EN": "If I were more relaxed, I probably wouldn't be in so much pain now."}},

    /* Gevolg  - Negatief */ 
    "THOUGHT-CONSEQUENCE-NEG-1": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-1", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["verergeren", "leeftijd"], translation: {
            "nl-BE": "De pijn zal erger worden naarmate ik ouder word",
            "nl-FR": "",
            "en-EN": "My pain will worsen as I age."}},
    "THOUGHT-CONSEQUENCE-NEG-2": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-2", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["langdurig", "aanhouden"], translation: {
            "nl-BE": "Mijn pijn zal chronisch worden",
            "nl-FR": "",
            "en-EN": "My pain will become chronic."}},
    "THOUGHT-CONSEQUENCE-NEG-3": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-3", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["verergeren"], translation: {
            "nl-BE": "Mijn pijn zal niet meer beter worden",
            "nl-FR": "",
            "en-EN": "My pain will never get better."}},
    "THOUGHT-CONSEQUENCE-NEG-4": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-4", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: [], translation: {
            "nl-BE": "Ik zal steeds minder kunnen doen door de pijn",
            "nl-FR": "",
            "en-EN": "I will be able to do less and less because of this pain."}},
    "THOUGHT-CONSEQUENCE-NEG-5": 
        {level4: "THOUGHT-CONSEQUENCE-NEG-5", level3: "CONSEQUENCE", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: [], translation: {
            "nl-BE": "Ik kan niet meer de dingen doen die ik wil door de pijn",
            "nl-FR": "",
            "en-EN": "I can no longer do the things I want because of this pain"}},
    /* Gevolg  - Positief */ 
    "THOUGHT-CONSEQUENCE-POS-1": 
        {level4: "THOUGHT-CONSEQUENCE-POS-1", level3: "CONSEQUENCE", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["doorsta"], translation: {
            "nl-BE": "Ik kan de dingen doen die ik wil ondanks de pijn",
            "nl-FR": "",
            "en-EN": "I can do the things I want despite the pain"}},

    /* Controle - Negatief */
    "THOUGHT-CONTROL-NEG-1": 
        {level4: "THOUGHT-CONTROL-NEG-1", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["trust"], translation: {
            "nl-BE": "Ik heb geen vertrouwen meer in mijn lichaam",
            "nl-FR": "",
            "en-EN": "I no longer trust my body"}},
    "THOUGHT-CONTROL-NEG-2": 
        {level4: "THOUGHT-CONTROL-NEG-2", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["give", "up", "stop"], translation: {
            "nl-BE": "Ik geef het op",
            "nl-FR": "",
            "en-EN": "I give up"}},
    "THOUGHT-CONTROL-NEG-3": 
        {level4: "THOUGHT-CONTROL-NEG-3", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["niks"], translation: {
            "nl-BE": "Er is niets dan ik kan doen aan deze pijn",
            "nl-FR": "",
            "en-EN": "There is nothing I can do to stop this pain"}},
    "THOUGHT-CONTROL-NEG-4": 
        {level4: "THOUGHT-CONTROL-NEG-4", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["geen"], translation: {
            "nl-BE": "Ik heb weinig controle over mijn pijn",
            "nl-FR": "",
            "en-EN": "I have little control over my pain"}},
    "THOUGHT-CONTROL-NEG-5": 
        {level4: "THOUGHT-CONTROL-NEG-5", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["voorspelt", "onvoorspelbaar", "willekeurig", "random"], translation: {
            "nl-BE": "Ik kan mijn pijn niet voorspellen",
            "nl-FR": "",
            "en-EN": "I cannot predict my pain"}},
    "THOUGHT-CONTROL-NEG-6": 
        {level4: "THOUGHT-CONTROL-NEG-6", level3: "CONTROL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["weet niet", "verward", "snap", "begrijp", "niet"], translation: {
            "nl-BE": "Ik ben in de war omdat men al zoveel verschillende dingen heeft gezegd over de pijn die ik heb",
            "nl-FR": "",
            "en-EN": "I have heard so many different things about the pain I'm in that I am confused"}},
    /* Controle - Positief */
    "THOUGHT-CONTROL-POS-1": 
        {level4: "THOUGHT-CONTROL-POS-1", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["komt", "goed"], translation: {
            "nl-BE": "Ik heb vertrouwen in mijn lichaam",
            "nl-FR": "",
            "en-EN": "I trust my body"}},
    "THOUGHT-CONTROL-POS-2": 
        {level4: "THOUGHT-CONTROL-POS-2", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["moet", "actie"], translation: {
            "nl-BE": "Ik weet wat ik kan doen bij deze pijnopstoot",
            "nl-FR": "",
            "en-EN": "I know how to deal with this painful flare-up"}},
    "THOUGHT-CONTROL-POS-3": 
        {level4: "THOUGHT-CONTROL-POS-3", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["oke", "okay", "oké", "draagbaar"], translation: {
            "nl-BE": "Ik kan met mijn pijn leven",
            "nl-FR": "",
            "en-EN": "I can live with my pain"}},
    "THOUGHT-CONTROL-POS-4": 
        {level4: "THOUGHT-CONTROL-POS-4", level3: "CONTROL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["tijdelijk", "weg", "verdwijnt"], translation: {
            "nl-BE": "Ik denk dat ik van deze pijn kan verlost geraken",
            "nl-FR": "",
            "en-EN": "I think I can rid myself of this pain"}},

    /* Psychosociale invloed - Negatief */
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-1": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-1", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "niet"], translation: {
            "nl-BE": "Hoe ik mij voel (gestresst/moe/angstig/somber) heeft geen invloed op de pijn die ik nu ervaar",
            "nl-FR": "",
            "en-EN": "How I feel does not affect the pain I'm currently in (stressed, tired, anxious, gloomy)"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-2": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-2", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["bang", "schrik", "eng"], translation: {
            "nl-BE": "Alleen al de gedachte aan bewegen of het uitvoeren van activiteiten met mijn pijn maakt me bang",
            "nl-FR": "",
            "en-EN": "Even the thought of moving or carrying out activities when I have this pain is scary"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-3": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-3", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["begrip", "begrijpt", "snappen", "snapt"], translation: {
            "nl-BE": "Anderen weten niet wat het is om te leven met pijn",
            "nl-FR": "",
            "en-EN": "Others don't know what it is like to live with pain"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-4": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-4", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["waarom"], translation: {
            "nl-BE": "Ik voel me gefrustreerd en boos omdat dit mij weer overkomt",
            "nl-FR": "",
            "en-EN": "I feel frustrated and angry because this has happened to me once again"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-5":
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-5", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["nadenken", "concentratie", "focus"], translation: {
            "nl-BE": "Ik kan deze pijn niet uit mijn gedachten zetten",
            "nl-FR": "",
            "en-EN": "I can't stop thinking about this pain"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-6": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-6", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT"], synonyms: ["intens", "fel", "concentratie", "concentreren", "denken", "helder"], translation: {
            "nl-BE": "Deze pijn is zo intens dat ik niet kan nadenken",
            "nl-FR": "",
            "en-EN": "This pain is so intense I can't think"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-7": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-7", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: ["geef"], translation: {
            "nl-BE": "Ik heb alle hoop verloren",
            "nl-FR": "",
            "en-EN": "I have lost all hope"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-8": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-8", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANXIOUS"], synonyms: ["schrik", "angst", "angstig", "eng"], translation: {
            "nl-BE": "Ik word bang van deze pijn",
            "nl-FR": "",
            "en-EN": "This pain scares me"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-9": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-9", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "DEPRESSED"], synonyms: [], translation: {
            "nl-BE": "Ik word wanhopig van deze pijn",
            "nl-FR": "",
            "en-EN": "This pain brings me to despair"}},
    "THOUGHT-NEGATIVE-PSYCHOSOCIAL-10": 
        {level4: "THOUGHT-NEGATIVE-PSYCHOSOCIAL-10", level3: "PSYCHOSOCIAL", level2: "NEGATIVE", level1: "THOUGHT", codes: ["TIT", "ANGER"], synonyms: ["wild", "beu", "boos", "stop", "stoppen"], translation: {
            "nl-BE": "Ik word gek van deze pijn",
            "nl-FR": "",
            "en-EN": "This pain is driving me mad"}},
    /* Psychosociale invloed - Positief */
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-1": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-1", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["vermoeid", "bang", "schrik", "droevig", "sip", "draagt", "versterkt"], translation: {
            "nl-BE": "Hoe ik mij voel (gestresst/moe/angstig/somber) zorgt ervoor dat ik nu meer pijn ervaar",
            "nl-FR": "",
            "en-EN": "How I feel makes my current pain worse (stressed, tired, anxious, gloomy)"}},
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-2": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-2", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["geef", "komaan"], translation: {
            "nl-BE": "Ik mag niet opgeven, de pijn hoort erbij",
            "nl-FR": "",
            "en-EN": "I can't give up; the pain is just what it is"}},
    "THOUGHT-POSITIVE-PSYCHOSOCIAL-3": 
        {level4: "THOUGHT-POSITIVE-PSYCHOSOCIAL-3", level3: "PSYCHOSOCIAL", level2: "POSITIVE", level1: "THOUGHT", codes: ["HT"], synonyms: ["oke", "ok", "niet erg", "geen probleem", "geen", "schrik"], translation: {
            "nl-BE": "Het is oké om pijn te hebben, ik moet niet bang zijn",
            "nl-FR": "",
            "en-EN": "It’s okay to feel pain; I won't fear it"}}
}

export const reactions = {
    /* Negatief */
    "REACTION-NEG-1": 
        {level4: "REACTION-NEG-1", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: ["ontspannen", "stop"], translation: {
            "nl-BE": "Ik ga rusten totdat de pijn volledig is verdwenen",
            "nl-FR": "",
            "en-EN": "I rest until the pain is completely gone"}},
    "REACTION-NEG-2": 
        {level4: "REACTION-NEG-2", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS", "DEPRESSED"], synonyms: ["paniek"], translation: {
            "nl-BE": "Ik panikeer en probeer hopeloos van de pijn verlost te geraken",
            "nl-FR": "",
            "en-EN": "I panic and try desperately to make the pain go away"}},
    "REACTION-NEG-3": 
        {level4: "REACTION-NEG-3", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS", "DEPRESSED"], synonyms: ["angstig", "schrik"], translation: {
            "nl-BE": "Ik word bang en maak me zorgen dat de pijn niet beter zal worden",
            "nl-FR": "",
            "en-EN": "I am scared and worry that my pain will not get better"}},
    "REACTION-NEG-4": 
        {level4: "REACTION-NEG-4", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS"], synonyms: ["stop", "alles"], translation: {
            "nl-BE": "Ik vermijd al de bewegingen en activiteiten die de pijn kunnen verergeren",
            "nl-FR": "",
            "en-EN": "I avoid any movement or activity that could aggravate the pain"}},
    "REACTION-NEG-5": 
        {level4: "REACTION-NEG-5", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANXIOUS"], synonyms: [], translation: {
            "nl-BE": "Ik neem de correcte houding aan en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": "I adopt the proper posture and continue with what I am doing"}},
    "REACTION-NEG-6": 
        {level4: "REACTION-NEG-6", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: [], translation: {
            "nl-BE": "Ik span mijn lichaam op en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": "I tense up and continue with what I am doing"}},
    "REACTION-NEG-7": 
        {level4: "REACTION-NEG-7", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: [], translation: {
            "nl-BE": "Ik probeer mijn pijnlijke lichaamsdeel te ontlasten en doe verder waar ik mee bezig ben",
            "nl-FR": "",
            "en-EN": "I try to relieve the painful parts of my body and continue with what I am doing"}},
    "REACTION-NEG-8": 
        {level4: "REACTION-NEG-8", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR", "ANGER"], synonyms: ["why", "waarom", "ik", "typisch"], translation: {
            "nl-BE": "Ik word gefrustreerd omdat dit mij overkomen is",
            "nl-FR": "",
            "en-EN": "I feel frustrated that this has happened to me"}},
    "REACTION-NEG-9": 
        {level4: "REACTION-NEG-9", level3: "", level2: "NEGATIVE", level1: "REACTION", codes: ["TIR"], synonyms: ["doordoen", "continue", "ga"], translation: {
            "nl-BE": "Ik blijf verder doen waar ik mee bezig ben hoe erg de pijn ook wordt",
            "nl-FR": "",
            "en-EN": "I continue with what I am doing, no matter how painful it becomes"}},
    /* Positief */
    "REACTION-POS-1": {level4: "REACTION-POS-1", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["aanpassen", "verander", "werken"], translation: {
            "nl-BE": "Ik pas de activiteit aan waar ik mee bezig ben of ga verder met een andere activiteit",
            "nl-FR": "",
            "en-EN": "I adjust my approach to my activity or switch to something else"}},
    "REACTION-POS-2": {level4: "REACTION-POS-2", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: ["relaxen", "chillen"], translation: {
            "nl-BE": "Ik probeer te ontspannen",
            "nl-FR": "",
            "en-EN": "I do my best to relax"}},
    "REACTION-POS-3": {level4: "REACTION-POS-3", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["ok", "oke", "okay", "rustig", "schrik", "geen"], translation: {
            "nl-BE": "Ik zeg tegen mezelf: Het is oké! Wees niet bang van de pijn, je veroorzaakt niet meer schade in je lichaam",
            "nl-FR": "",
            "en-EN": "I tell myself: It’s okay! Don't be afraid of the pain – you won't damage your body any further"}},
    "REACTION-POS-4": {level4: "REACTION-POS-4", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["afleiden", "afleiding"], translation: {
            "nl-BE": "Ik probeer mijn gedachten van de pijn af te leiden",
            "nl-FR": "",
            "en-EN": "I try to distract myself from the pain"}},
    "REACTION-POS-5": {level4: "REACTION-POS-5", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: [], translation: {
            "nl-BE": "Ik word me bewust van mijn gedachten en gevoelens",
            "nl-FR": "",
            "en-EN": "I make myself conscious of my thoughts and feelings"}},
    "REACTION-POS-6": {level4: "REACTION-POS-6", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["stop", "pauzeer"], translation: {
            "nl-BE": "Ik neem een korte pauze",
            "nl-FR": "",
            "en-EN": "I take a short break"}},
    "REACTION-POS-7": {level4: "REACTION-POS-7", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR"], synonyms: ["juist", "correct"], translation: {
            "nl-BE": "Ik probeer bewust op een gepaste manier te reageren op de situatie",
            "nl-FR": "",
            "en-EN": "I consciously attempt to respond to the situation appropriately"}},
    "REACTION-POS-8": {level4: "REACTION-POS-8", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: ["inademen", "sluit", "ogen"], translation: {
            "nl-BE": "Ik haal een paar keer diep adem",
            "nl-FR": "",
            "en-EN": "I take several deep breaths"}},
    "REACTION-POS-9": {level4: "REACTION-POS-9", level3: "", level2: "POSITIVE", level1: "REACTION", codes: ["HR", "RELAXED"], synonyms: [""], translation: {
            "nl-BE": "Ik probeer op een ontspannen/soepele manier te bewegen",
            "nl-FR": "",
            "en-EN": "I try to stay relaxed and flexible in my movements"}}
}

export const options = Object.assign({}, thoughts, emotions, reactions);

export const codeFrequencies = () => {
    let codesFreqs = {};
    Object.keys(codes).forEach(code => codesFreqs[code] = 0);
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
        content: {"en-EN": "Hello! Did you recently experience a pain flare-up or an increase in pain?", "nl-BE": "Goeiedag! Heb je recentelijk last gehad van een pijnscheut of een sterke toename van pijn?"},
        sentBy: "coach",
        response: ["RESPONSE-YES-MESSAGE-INTRO", "RESPONSE-YES2-MESSAGE-INTRO"]
    },
    "RESPONSE-YES-MESSAGE-INTRO": {
        content: {"en-EN": "Yes, indeed", "nl-BE":"Ja, inderdaad"},
        sentBy: "user",
        choice: true,
        response: ["MESSAGE-1"]
    },
    "RESPONSE-YES2-MESSAGE-INTRO": {
        content: {"en-EN": "Correct", "nl-BE":"Klopt"},
        sentBy: "user",
        choice: true,
        response: ["MESSAGE-1"]
    },
    /* Vraag 1 */
    "MESSAGE-1": {
        content: {"en-EN": "Where were you/what were you doing when your pain became (much) worse?", "nl-BE":"En waar was je / wat was je aan het doen toen je pijn of (in sterke mate) toenam?"},
        sentBy: "coach", 
        response: ["RESPONSE-1-MESSAGE-1", "RESPONSE-2-MESSAGE-1", "RESPONSE-3-MESSAGE-1", "RESPONSE-4-MESSAGE-1", "RESPONSE-5-MESSAGE-1", "RESPONSE-6-MESSAGE-1", "RESPONSE-7-MESSAGE-1", "RESPONSE-8-MESSAGE-1"]
    },
    "RESPONSE-1-MESSAGE-1": {
        id: "Sporten",
        category: "CONTEXT",
        content: {"en-EN": "Sport / movement 🏃🏽", "nl-BE":"Sport / beweging 🏃🏽"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-2-MESSAGE-1": {
        id: "Werken",
        category: "CONTEXT",
        content: {"en-EN": "Work 💼 (paid employment, volunteering, education, etc.)", "nl-BE": "Werk 💼 (betaald, vrijwillig, studeren, ...)"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-3-MESSAGE-1": {
        id: "Huishouden",
        category: "CONTEXT",
        content: {"en-EN": "Housework 🏠 (household chores, gardening, caregiving, shopping, etc.)", "nl-BE": "Huishouden 🏠 (tuinieren, koken, boodschappen doen, ...)"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-4-MESSAGE-1": {
        id: "Sociale activiteit",
        category: "CONTEXT",
        content: {"en-EN": "Social pastimes 😄 (activities with friends, family, colleagues, etc.)", "nl-BE":"Sociale activiteit 😄 (activiteiten met vrienden, familie, collega's, ...)"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-5-MESSAGE-1": {
        id: "Vrije tijd",
        category: "CONTEXT",
        content: {"en-EN": "Leisure 📚 (hobbies, watching TV, relaxation, activities you enjoy, etc.)", "nl-BE":"Vrije tijd 📚 (hobbies, TV kijken, relaxatie, iets wat je leuk vindt, )"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-6-MESSAGE-1": {
        id: "Verplaatsing",
        category: "CONTEXT",
        content: {"en-EN": "Travel 🚘 (driving, cycling, walking, public transport, etc.)", "nl-BE":"Verplaatsing 🚘 (auto, fiets, te voet, openbaar vervoer, ...)"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-7-MESSAGE-1": {
        id: "Rusten",
        category: "CONTEXT",
        content: {"en-EN": "Resting 😴", "nl-BE":"Rusten 😴"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "RESPONSE-8-MESSAGE-1": {
        id: "Overig",
        category: "CONTEXT",
        content: {"en-EN": "Other / miscellaneous 💬", "nl-BE":"Overig 💬"},
        sentBy: "user",
        choice: true, 
        response: ["MESSAGE-1-INPUT"]
    },
    "MESSAGE-1-INPUT": {
        content: {"en-EN": "Briefly specify what you were doing.", "nl-BE":"Specifieer kort wat je aan het doen was."},
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
        content: {"en-EN": "How intense was the activity?", "nl-BE":"Hoe intensief was de activiteit?"},
        sentBy: "coach", 
        response: ["MESSAGE-1-INTENSITY-RESPONSE-1", "MESSAGE-1-INTENSITY-RESPONSE-2", "MESSAGE-1-INTENSITY-RESPONSE-3"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-1": {
        id: "Licht",
        category: "INTENSITY",
        content: {"en-EN": "Light", "nl-BE":"Licht"},
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-2": {
        id: "Matig",
        category: "INTENSITY",
        content: {"en-EN": "Moderate", "nl-BE":"Matig"},
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    "MESSAGE-1-INTENSITY-RESPONSE-3": {
        id: "Zwaar",
        category: "INTENSITY",
        content: {"en-EN": "Heavy", "nl-BE":"Zwaar"},
        sentBy: "user",
        response: ["MESSAGE-2"]
    },
    /* Vraag 2 - Emoties */
    "MESSAGE-2": {
        content: {"en-EN": "Could you please indicate which of the following feelings you experienced when your pain became (much) worse? (You can indicate multiple)", "nl-BE":"Kan je aanduiden welke van onderstaande gevoelens aanwezig waren toen je pijn kreeg of (in sterke mate) toenam? (Je kan er meerdere aanduiden)"},
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
        content: {"en-EN": "Can you indicate which of the following thoughts you experienced when your pain became (much) worse?", "nl-BE":"Kan je aanduiden welke van onderstaande gedachten aanwezig waren toen je pijn kreeg of (in sterke mate) toenam?"},
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
        content: {"en-EN": "Can you now indicate how you responded to your pain?", "nl-BE":"En kan je nu aanduiden welke reactie je had op je pijn?"},
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
        content: {"en-EN": "Could you have done something different or better?", "nl-BE":"Had je iets anders/beter kunnen doen?"},
        sentBy: "coach", 
        response: ["RESPONSE-YES-MESSAGE-5", "RESPONSE-MAYBE-MESSAGE-5", "RESPONSE-NO-MESSAGE-5"]
    },
    "RESPONSE-YES-MESSAGE-5": {
        content: {"en-EN": "Yes", "nl-BE":"Ja"},
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    "RESPONSE-MAYBE-MESSAGE-5": {
        content: {"en-EN": "Not sure", "nl-BE":"Niet zeker"},
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    "RESPONSE-NO-MESSAGE-5": {
        content: {"en-EN": "No", "nl-BE":"Nee"},
        sentBy: "user", 
        response: ["MESSAGE-6"]
    },
    /* Vraag 5 - Reflectie */
    "MESSAGE-6": {
        content: {"en-EN": "Do you know how you can work on this in future? ", "nl-BE":"Weet je hoe je in de toekomst hier aan kan werken?"},
        sentBy: "coach", 
        response: ["RESPONSE-YES-MESSAGE-6", "RESPONSE-MAYBE-MESSAGE-6", "RESPONSE-NO-MESSAGE-6"]
    },
    "RESPONSE-YES-MESSAGE-6": {
        content: {"en-EN": "Yes ", "nl-BE":"Ja "},
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    "RESPONSE-MAYBE-MESSAGE-6": {
        content: {"en-EN": "Not really", "nl-BE":"Niet echt"},
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    "RESPONSE-NO-MESSAGE-6": {
        content: {"en-EN": "No ", "nl-BE":"Nee "},
        sentBy: "user", 
        response: ["RECOMMENDATION"]
    },
    /* Recommendation */
    "RECOMMENDATION": {
        content: "recommendation",
        sentBy: "coach",
        response: ["OPEN-RECOMMENDATION", "NONERELEVANT"]
    }, 
    "OPEN-RECOMMENDATION": {
        content: "recommendation-answer",
        text: {"nl-BE": "Ja, deze aanbeveling spreekt aan", "en-EN": "Yes, this recommendation is interesting"},
        sentBy: "user",
        action: "saveAndClose",
        response: ["RECOMMENDATION"]
    },
    "NONERELEVANT": {
        content: "recommendation-answer",
        text: {"nl-BE": "Geen enkele aanbeveling relevant", "en-EN": "None of the recommendations are relevant"},
        sentBy: "user", 
        action: "noneRelevant",
        response: ["RECOMMENDATION"]
    },
}

export const explanations = {
    /* Emotions */
    "Negative Feelings": {"en-EN": "You indicated some unpleasant feelings. Feeling like this must be quite a burden. Uncomfortable feelings such as anxiety, tension, sadness, anger and fatigue can cause your pain-relieving mechanisms to have less of an effect and make your brain more sensitive to painful stimuli. For example, normal movements or physical contact can cause you pain. You may even suffer pain spontaneously. Do you feel comfortable in your own skin? Your brain filters out some of the pain, making it less taxing to deal with.", "nl-BE": "Je hebt een aantal onprettige gevoelens aangeduid. Onprettige gevoelens zoals angst, spanning, verdriet, boosheid en vermoeidheid kunnen bijdragen aan de pijn die je nu ervaart. Je pijndempende mechanismen gaan minder goed werken en er worden sneller pijn-gerelateerde prikkels naar de hersenen gestuurd. Zo kan je pijn ervaren bij normale bewegingen en aanrakingen of soms zelfs spontane pijn."},
    "Positive Feelings": {"en-EN": "You indicated some pleasant feelings. That’s healthy. Do you feel comfortable in your own skin? Your brain filters out some of the pain, making it less taxing to deal with.", "nl-BE": "Je hebt enkele prettige gevoelens aangeduid, dat is mooi. Angst, spanning, verdriet, boosheid en vermoeidheid kunnen bijdragen aan pijn. Pijndempende mechanismen gaan minder goed werken en er worden sneller pijn-gerelateerde prikkels naar de hersenen gestuurd. Zo kan je pijn ervaren bij normale bewegingen en aanrakingen of soms zelfs spontane pijn."},
    /* Thoughts */
    "Physical damage - Negative": {"en-EN": "You believe that bodily injury is a major factor in the pain you are currently experiencing. However, this is just one of many factors that can contribute to pain. Many pain complaints are unrelated to physical injury. What’s more, our bodies are very good at repairing themselves. In cases of prolonged pain in particular, bodily injuries play only a minor role. Even when pain flares up, the risk of injury is limited. This tends to be a hypersensitive response by your nervous system to factors such as stress, tension, worry, a lack of exercise or activities you don't perform on a regular basis. Studies show that physical injury such as joint wear is also common among people who do not experience pain.", "nl-BE": "Volgens jou speelt lichamelijke schade een grote rol bij de pijn die je nu ervaart. Maar dit is slechts één van vele factoren die kunnen bijdragen aan pijn. Veel pijnklachten ontstaan zelfs zonder lichamelijke schade. Bovendien is ons lichaam zeer goed in staat om schade te herstellen. Zeker bij langdurige pijn speelt lichamelijke schade nog maar een kleine rol. Ook tijdens een pijnopstoot is de kans op schade beperkt. Dit wordt meestal veroorzaakt door een overgevoelig zenuwstelsel als reactie op factoren zoals stress, spanning, zorgen, onvoldoende beweging of het uitvoeren van activiteiten die je niet gewoon bent. Uit onderzoek blijkt ook dat lichamelijke schade zoals slijtage van de gewrichten vaak voorkomt bij mensen zonder pijnklachten."},
    "Physical damage - Positive": {"en-EN": "You believe bodily injury is not a major factor in the pain you are currently experiencing. Great! Bodily injury is just one of many factors that can contribute to pain. Many pain complaints are unrelated to physical injury. What’s more, our bodies are very good at repairing themselves. Even when pain flares up, the risk of injury is limited.", "nl-BE": "Volgens jou speelt lichamelijke schade geen grote rol bij de pijn die je nu ervaart. Super! Lichamelijke schade is slechts één van vele factoren die kunnen bijdragen aan pijn. Veel pijnklachten ontstaan zelfs zonder lichamelijke schade. Bovendien is ons lichaam zeer goed in staat om schade te herstellen. Ook tijdens een pijnopstoot is de kans op schade beperkt. Dit wordt meestal veroorzaakt door een overgevoelig zenuwstelsel als reactie op factoren zoals stress, spanning, zorgen, onvoldoende beweging of het uitvoeren van activiteiten die je niet gewoon bent. Uit onderzoek blijkt ook dat lichamelijke schade zoals slijtage van de gewrichten vaak voorkomt bij mensen zonder pijnklachten."},
    "Activities - Negative": {"en-EN": "You have indicated that your attitude and activities are significant contributing factors to your current level of pain. It is OK to experience pain while moving or performing activities. This is rarely due to physical damage and is more likely to be a hypersensitive response by your nervous system. Perhaps you overexerted yourself or did something different to your usual activities. A tense posture can trigger more pain-related stimuli and make your nervous system hypersensitive. A hypersensitive nervous system means you will feel pain more easily, even during normal activities or movement. Fortunately, you can reduce this sensitivity by working on the factors that contribute to it. Keep in mind that the effects will not be instantaneous.", "nl-BE": "Je geeft aan dat je houding en activiteiten een belangrijke rol spelen bij de pijn die je nu ervaart. Het is oké om pijn te ervaren tijdens bewegen of het uitvoeren van activiteiten. Dit heeft zelden te maken met lichamelijke schade, maar eerder met een overgevoelige reactie van het zenuwstelsel. Misschien heb je te veel gedaan (overbelasting) of heb je activiteiten gedaan die je niet gewoon bent. Ook een gespannen houding leidt tot meer pijn-gerelateerde prikkels en een overgevoelig zenuwstelsel. Een overgevoelig zenuwstelsel zorgt er dan weer voor dat je sneller pijn gaat ervaren, ook tijdens normale activiteiten of bewegingen."},
    "Activities - Positive": {"en-EN": "You have indicated that your attitude and activities are significant contributing factors to your current level of pain. It is OK to experience pain while moving or performing activities. This is rarely due to physical damage and is more likely to be a hypersensitive response by your nervous system. Fortunately, you can reduce this sensitivity by working on the factors that contribute to it. Keep in mind that the effects will not be instantaneous.", "nl-BE": "Je geeft aan dat het oké is om pijn te ervaren tijdens bewegen en het uitvoeren van je activiteiten. Heel goed. Deze pijn heeft zelden te maken met lichamelijke schade, maar eerder met een overgevoelige reactie van het zenuwstelsel. Misschien heb je te veel gedaan (overbelasting) of heb je activiteiten gedaan die je niet gewoon bent. Ook een gespannen houding leidt tot meer pijn-gerelateerde prikkels en een overgevoelig zenuwstelsel. Een overgevoelig zenuwstelsel zorgt er dan weer voor dat je sneller pijn gaat ervaren, ook tijdens normale activiteiten of bewegingen."},
    "Thoughts - Negative": {"en-EN": "You have indicated several thoughts that can have an adverse effect on your situation. It is totally fine to feel this way. You cannot switch on or off (troublesome) thoughts and feelings just like that. However, negative thoughts and emotions influence your behaviour, cause stress and increase the risk of making your nervous system hypersensitive. By paying close attention to your pain, your brain will be more aware of these stimuli and amplify them.", "nl-BE": "Je hebt een aantal gedachten aangeduid die mogelijks een ongunstig effect hebben op je situatie. Negatieve gedachten en emoties beïnvloeden ons gedrag, zorgen voor stress en verhogen de kans op een overgevoelig zenuwstelsel. Door veel aandacht te schenken aan je pijn, gaan je hersenen ook meer op deze prikkels letten en ze uitvergroten."},
    "Thoughts - Positive": {"en-EN": "You have indicated that you have some helping thoughts. Very good! Do you feel comfortable in your own skin? Your brain filters out some of the pain, making it less taxing to deal with.", "nl-BE": "Je hebt een aantal positieve en helpende gedachten aangeduid. Heel goed! Negatieve gedachten en emoties beïnvloeden ons gedrag, zorgen voor stress en verhogen de kans op een overgevoelig zenuwstelsel. Door veel aandacht te schenken aan je pijn, gaan je hersenen ook meer op deze prikkels letten en ze uitvergroten."},
    /* Reactions */
    "Reaction - Negative": {"en-EN": "Your reaction can be improved. Intense emotions and thoughts such as anxiety or frustration amplify pain stimuli and increase the risk of making your nervous system hypersensitive. They lead to impulsive responses that aren't necessarily the most appropriate. There is no use in letting your pain control you, taking on too much on good days and then being unable to do much at all in the days that follow. Overexertion results in a hypersensitive nervous system, while prolonged rest or avoidance of many activities will prolong your recovery process. Striking a balance between activity and relaxation is the most beneficial approach. You are less likely to exceed your limits and will not need to recover as much, making subsequent days much more pleasant. We can help you to optimise how you respond to pain.", "nl-BE": "Aan je reactie kan nog gewerkt worden. Hevige emoties en gedachten zoals angst of frustratie versterken pijnprikkels en vormen een risico op een overgevoelig zenuwstelsel. Ze leiden tot een impulsieve, maar misschien niet de beste, reactie. Het heeft geen zin om je te laten leiden door je pijn en op dagen dat het goed gaat veel te doen en de dagen nadien niets meer te kunnen doen. Door overbelasting werk je een overgevoelig zenuwstelsel in de hand. Lang rusten en veel activiteiten vermijden vertraagt het herstelproces en zorgt er zelfs voor dat je belastbaarheid afneemt. Dit brengt je op termijn nergens."},
    "Reaction - Positive": {"en-EN": "You demonstrated a good response to your pain. Great! A good response reduces the risk of making your nervous system hypersensitive and will gradually lessen the impact of your pain. This does take time. Having a bad day? Don't panic – just keep on keeping on. We can help you to further optimise how you respond to pain.", "nl-BE": "Uit jouw reactie blijkt dat je goed hebt gereageerd op de pijn. Super! Hevige emoties en gedachten zoals angst of frustratie versterken pijnprikkels en vormen een risico op een overgevoelig zenuwstelsel. Ze leiden tot een impulsieve, maar misschien niet de beste, reactie. Het heeft geen zin om je te laten leiden door je pijn en op dagen dat het goed gaat veel te doen en de dagen nadien niets meer te kunnen doen. Door overbelasting werk je een overgevoelig zenuwstelsel in de hand. Lang rusten en veel activiteiten vermijden vertraagt het herstelproces en zorgt er zelfs voor dat je belastbaarheid afneemt. Dit brengt je op termijn nergens."}
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
        codeMarkings: ["TIT", "ANXIOUS", "ANGER", "FATIGUE", "DEPRESSED"],
        priority: "2",
        recommendation: {"en-EN": "Learn to recognise unpleasant feelings and how to cope with them, so you can limit its impact on your life.", "nl-BE": "Leer onprettige gevoelens herkennen en hier mee om te gaan, zo beperk je de impact ervan op jouw leven en jouw pijn."},
        explanation: explanations["Negative Feelings"],
        module: "PAINEDUCATION",
        submodule: "PE_MOD_5",
    },
    {
        code: "REC-2",
        description: "Specific 'Panicky' or 'Stressed' emotions",
        conditions: {level4: ["EMOTION-UNEASY", "EMOTION-ONEDGE", "EMOTION-ANXIOUS"]},
        codeMarkings: ["ANXIOUS"],
        priority: "3",
        recommendation: {"en-EN": "Do your best to reduce excessive stress by prioritising, setting limits and making time for yourself. You can also try to calm down by taking a few deep breaths or doing relaxation exercises.", "nl-BE": "Probeer overmatige stress te beperken door het stellen van prioriteiten, het afbakenen van je grenzen en het vrijmaken van tijd voor jezelf. Je kan ook proberen te ontspannen door een paar keer diep te ademen of een relaxatie oefening te doen."},
        explanation: explanations["Negative Feelings"],
        module: "ACTIVITYWORK", /* Normally STRESS */
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-3.1",
        description: "Specific 'Tired' or 'Exhausted' emotions",
        conditions: {level1: ["EMOTION"], level3: ["FATIGUE"]},
        codeMarkings: ["FATIGUE"],
        priority: "3",
        recommendation: {"en-EN": "By striking a good balance between activity and relaxation, you can become more active again without overstepping your own boundaries. Activity management is aimed at learning to (improve how you) deal with your energy reserves.", "nl-BE": "Zoek een goed evenwicht tussen activiteit en rust om zo binnen je eigen grenzen terug actiever te worden. Activiteitenmanagement heeft als doel (beter) te leren omgaan met je energie."},
        explanation: explanations["Negative Feelings"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-3.2",
        description: "Specific 'Tired' or 'Exhausted' emotions",
        conditions: {level1: ["EMOTION"], level3: ["FATIGUE"]},
        codeMarkings: ["FATIGUE"],
        priority: "3",
        recommendation: {"en-EN": "Try to overcome exhaustion or tiredness. Building up your physical fitness will give you more energy.", "nl-BE": "Probeer vermoeidheid tegen te gaan door je fysieke fitheid op te bouwen, zo zal je ook meer energie krijgen."},
        explanation: explanations["Negative Feelings"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-5",
        description: "Negative thoughts around causes",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["CAUSE"]},
        codeMarkings: ["TIT"],
        priority: "2",
        recommendation: {"en-EN": "By gaining a better understanding of how pain occurs, you will be able to identify the factors that contribute to your own pain.", "nl-BE": "Als je meer inzicht krijgt in hoe pijn ontstaat, ga je kunnen achterhalen welke factoren een rol spelen bij jouw pijn. Nadien kan je aan de slag met de module om deze factoren te verbeteren."},
        explanation: explanations["Physical damage - Negative"],
        module: "PAINEDUCATION",
        submodule: "PE_MOD_1",
    },
    {
        code: "REC-6",
        description: "Positive thoughts around causes",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["CAUSE"]},
        codeMarkings: ["HT"],
        priority: "1",
        recommendation: {"en-EN": "By gaining a better understanding of how pain occurs, you will be able to identify the factors that contribute to your own pain.", "nl-BE": "Als je meer inzicht krijgt in hoe pijn ontstaat, ga je kunnen achterhalen welke factoren een rol spelen bij jouw pijn."},
        explanation: explanations["Physical damage - Positive"],
        module: "PAINEDUCATION",
        submodule: "PE_MOD_1",
    },
    {
        code: "REC-7.1",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["TIT"],
        priority: "2",
        recommendation: {"en-EN": "Try to stay relaxed as you move and change your position regularly. Approach your tasks intelligently and take ergonomics into account as required.", "nl-BE": "Probeer op een ontspannen manier te bewegen en regelmatig van houding te wisselen. Zorg ervoor dat je je taken slim aanpakt en indien nodig denkt aan je ergonomie."},
        explanation: explanations["Activities - Negative"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-7.2",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["TIT"],
        priority: "2",
        recommendation: {"en-EN": "Build up the amount of the activity you do to increase your capacity.", "nl-BE": "Verhoog je belastbaarheid door geleidelijk meer te bewegen en je activiteiten op te bouwen."},
        explanation: explanations["Activities - Negative"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-7.3",
        description: "Negative thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["TIT"],
        priority: "2",
        recommendation: {"en-EN": "If you are feeling too tense, it can help to do a relaxation exercise.", "nl-BE": "Bij overmatige spanning kan het helpen om een relaxatie oefening te doen."},
        explanation: explanations["Activities - Negative"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TE_MOD_3",
    },
    {
        code: "REC-8",
        description: "Negative thoughts around stopping all activities",
        conditions: {level4: ["THOUGHT-ACTIVITY-NEG-7", "THOUGHT-ACTIVITY-NEG-8"]},
        codeMarkings: ["ANXIOUS", "TIT"],
        priority: "3",
        recommendation: {"en-EN": "If you are in pain, resting and avoiding doing any activity is generally inadvisable. A long period of rest weakens your body, making it harder to cope in your daily life. Movement increases blood flow to your muscles and joints, keeping them supple and making them stronger. This is an essential part of your recovery process.", "nl-BE": "Rusten en activiteiten vermijden zijn niet aangewezen bij pijn, beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces."},
        explanation: explanations["Activities - Negative"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-9.1",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["HT"],
        priority: "1",
        recommendation: {"en-EN": "Try to stay relaxed as you move and change your position regularly. Approach your tasks intelligently and take ergonomics into account as required.", "nl-BE": "Probeer op een ontspannen manier te bewegen en regelmatig van houding te wisselen. Zorg ervoor dat je je taken slim aanpakt en indien nodig denkt aan je ergonomie."},
        explanation: explanations["Activities - Positive"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_3",
    },
    {
        code: "REC-9.2",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["HT"],
        priority: "1",
        recommendation: {"en-EN": "Build up the amount of the activity you do to increase your capacity.", "nl-BE": "Verhoog je belastbaarheid door geleidelijk meer te bewegen en je activiteiten op te bouwen."},
        explanation: explanations["Activities - Positive"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-9.3",
        description: "Positive thoughts around Activity and work",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["ACTIVITY-WORK"]},
        codeMarkings: ["HT"],
        priority: "1",
        recommendation: {"en-EN": "If you are feeling too tense, it can help to do a relaxation exercise.", "nl-BE": "Bij overmatige spanning kan het helpen om een relaxatie oefening te doen."},
        explanation: explanations["Activities - Positive"],
        module: "THOUGHTSEMOTIONS", /* Normaal stress */
        submodule: "TE_MOD_3",
    },
    {
        code: "REC-10",
        description: "Negative thoughts around worsening pain",
        conditions: {level4: ["THOUGHT-CONSEQUENCE-NEG-1", "THOUGHT-CONSEQUENCE-NEG-2", "THOUGHT-CONSEQUENCE-NEG-3", "THOUGHT-CONTROL-NEG-3", "THOUGHT-CONTROL-NEG-4", "THOUGHT-CONTROL-NEG-5", "THOUGHT-CONTROL-NEG-6"]},
        codeMarkings: ["DEPRESSED"],
        priority: "3",
        recommendation: {"en-EN": "You can influence many of the factors that contribute to pain. First, try to determine which factors are relevant specifically to you.", "nl-BE": "Aan veel factoren die pijn beïnvloeden kan je werken. Probeer eerst te achterhalen welke factoren bij jou een rol spelen"},
        explanation: explanations["Thoughts - Negative"],
        module: "PAINEDUCATION",
        submodule: "PE_MOD_5",
    },
    {
        code: "REC-11",
        description: "Negative thoughts around worsening activities",
        conditions: {level4: ["THOUGHT-CONTROL-NEG-1", "THOUGHT-CONSEQUENCE-NEG-4", "THOUGHT-CONSEQUENCE-NEG-5"]},
        codeMarkings: ["DEPRESSED"],
        priority: "3",
        recommendation: {"en-EN": "By approaching activities intelligently, you can still do a lot even with pain complaints.", "nl-BE": "Door je activiteiten slim aan te pakken kan je ook met pijnklachten nog heel veel doen. En met een goede opbouw, die rekening houdt met jouw capaciteit, kan je geleidelijk terug actiever worden."},
        explanation: explanations["Thoughts - Negative"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-12",
        description: "Negative thoughts",
        conditions: {level1: ["THOUGHT"], level2: ["NEGATIVE"], level3: ["PSYCHOSOCIAL", "CONTROL"]},
        codeMarkings: ["TIT"],
        priority: "2",
        recommendation: {"en-EN": "Try to direct your energy towards worthwhile activities. Are you working on something you enjoy? If so, your brain will automatically filter out some of the pain. ", "nl-BE": "Probeer negative gedachten te beperken en je energie te stoppen in waardevolle activiteiten. Ben je iets aan het doen wat je leuk vindt? Dan filteren je hersen vanzelf al een deel van de pijn weg!"},
        explanation: explanations["Thoughts - Negative"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TE_MOD_4", /* TODO */
    },
    {
        code: "REC-13",
        description: "Positive thoughts",
        conditions: {level1: ["THOUGHT"], level2: ["POSITIVE"], level3: ["PSYCHOSOCIAL", "CONTROL", "CONSEQUENCE"]},
        codeMarkings: ["HT"],
        priority: "1",
        recommendation: {"en-EN": "Try to direct your energy towards worthwhile activities. Are you working on something you enjoy? If so, your brain will automatically filter out some of the pain. ", "nl-BE": "Probeer negative gedachten te beperken en je energie te stoppen in waardevolle activiteiten. Ben je iets aan het doen wat je leuk vindt? Dan filteren je hersen vanzelf al een deel van de pijn weg!"},
        explanation: explanations["Thoughts - Positive"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TE_MOD_4", /* TODO */
    },
    {
        code: "REC-14",
        description: "Negative reactions",
        conditions: {level1: ["REACTION"], level2: ["NEGATIVE"]},
        codeMarkings: ["TIR"],
        priority: "2",
        recommendation: {"en-EN": "After a short break, try to resume your normal activities as much as possible. Approach your tasks intelligently and establish a good balance between activity and rest. Try to stay relaxed as you move, change position regularly and take ergonomics into account as needed.", "nl-BE": "Probeer zoveel mogelijk je normale activiteiten verder te zetten na een korte pauze. Pak je taken slim aan zodat je een goed evenwicht vindt tussen activiteit en rust. Beweeg op een ontspannen manier, wissel regelmatig van houding en denk aan je ergonomie indien nodig."},
        explanation: explanations["Reaction - Negative"],
        module: "ACTIVITYWORK",
        submodule: "ACT_MOD_4",
    },
    {
        code: "REC-14",
        description: "Negative 'panicky' reaction",
        conditions: {level3: ["REACTION-NEG-2"]},
        codeMarkings: ["ANXIOUS", "TIT"],
        priority: "3",
        recommendation: {"en-EN": "Remain calm, be conscious of your thoughts and emotions, and choose an appropriate response.", "nl-BE": "Blijf kalm, word je bewust van je gedachten en emoties en kies een gepaste reactie."},
        explanation: explanations["Reaction - Negative"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TE_MOD_4",
    },
    {
        code: "REC-15",
        description: "Positive reactions",
        conditions: {level1: ["REACTION"], level2: ["POSITIVE"]},
        codeMarkings: ["HR"],
        priority: "1",
        recommendation: {"en-EN": "Try to remind yourself which reactions are helpful when experiencing pain.", "nl-BE": "Herhaal af en toe welke reacties positief zijn in een pijnopstoot."},
        explanation: explanations["Reaction - Positive"],
        module: "THOUGHTSEMOTIONS",
        submodule: "TE_MOD_4",
    }
]
