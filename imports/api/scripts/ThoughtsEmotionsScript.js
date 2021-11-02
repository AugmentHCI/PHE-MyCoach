export const values = [ 
    {id: "VALUE_NICE",        text: "Aardig"},
    {id: "VALUE_ACCEPTING",   text: "Accepterend"},
    {id: "VALUE_AMBITIOUS",   text: "Ambitieus"},
    {id: "VALUE_ASSERTIVE",   text: "Assertief"},
    {id: "VALUE_ATTENTIVE",   text: "Attent"},
    {id: "VALUE_AUTHENTIC",   text: "Authentiek"},
    {id: "VALUE_ADVENTUROUS", text: "Avontuurlijk"},
    {id: "VALUE_POLITE",      text: "Beleefd"},
    {id: "VALUE_ENCOURAGING", text: "Bemoedigend"},
    {id: "VALUE_MODEST",      text: "Bescheiden"},
    {id: "VALUE_RELIABLE",    text: "Betrouwbaar"},
    {id: "VALUE_PATIENT",     text: "Geduldig"},
    {id: "VALUE_SPORTY",      text: "Sportief"},
    {id: "VALUE_CURIOUS",     text: "Nieuwsgierig"},
    {id: "VALUE_SELFCONTIOUS",    text: "Zelfbewust"},
    {id: "VALUE_WARM",    text: "Warmhartig"},
    {id: "VALUE_INDEPENDENT",    text: "Zelfstandig"},
    {id: "VALUE_LOYAL",    text: "Trouw"},
    {id: "VALUE_SPONTANEOUS",    text: "Spontaan"},
    {id: "VALUE_FLEXIBLE",    text: "Flexibel"},
    {id: "VALUE_COOPERATING",    text: "Coöperatief"},
    {id: "VALUE_PLAYFUL",    text: "Speels"},
    {id: "VALUE_ENERGETIC",    text: "Energiek"},
    {id: "VALUE_ENTHOUSIASTIC",    text: "Enthousiast"},
    {id: "VALUE_TEAMSPIRIT",    text: "Teamgeest"},
    {id: "VALUE_EMPATHY",    text: "Meevoelend"},
    {id: "VALUE_FRIENDLY",    text: "Vriendelijk"},
    {id: "VALUE_IMAGINATIVE",    text: "Fantasierijk"},
    {id: "VALUE_SPIRITUAL",    text: "Spiritueel"},
    {id: "VALUE_FIGHTER",    text: "Vechter"},
    {id: "VALUE_SUPPORTIVE",    text: "Ondersteunend"},
]

const TEMOD1 = {
    id: "TE_MOD_1",
    title: "G&E: een inleiding",
    titleMarkup: ["G&E: een", "inleiding"],
    part: 1,
    description: "Dit onderdeel zal je een blik geven op wat de module gedachten en emoties (G&E) te bieden heeft.",
    duration: "20 minuten",
    type: "Informatief",
    image: "te-part-1",
    imageWidth: "180px",
    icon: "information",
    cards: [{
            id: "TE-MOD1-CARD1",
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren of bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten en meer in het hier en nu. Ook helpen we je onderzoeken hoe je het leven kan leiden dat je wil leiden.",
                    showIf: [{rule: "Profile", profiles: [1]}]
                },
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Dat is ook zo met lastige gedachten en gevoelens rond pijn. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren en bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten maar en meer in het hier en nu. Ook helpen we je onderzoeken hoe je, ondanks de pijn, het leven kan leiden dat je wil leiden.",
                    showIf: [{rule: "Profile", profiles: [2, 3, 4, 5, 6]}]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/thinking.jpg"
                },
                {
                    type: "Text",
                    content: "We laten hiervoor je actief aan de slag gaan door middel van verschillende oefeningen. Let’s go!",
                },
            ]
        },
        {
            id: "TE-MOD1-CARD2",
            cardContents: [
                {
                    type: "Text",
                    content: "Moeilijke, lastige gedachten en emoties kunnen ons serieus parten spelen en een impact hebben op hoe we ons voelen. Worstel jij soms met moeilijke gedachten en gevoelens?"
                },
                {
                    id: "TE-MOD-1-SLIDER",
                    type: "Slider",
                    text: "Duid op een schaal van 1 tot 10 (waarbij 1 staat voor een heel sterke negatieve impact en 10 voor helemaal geen negatieve impact) aan hoe groot de impact van gedachten en gevoelens waar je mee worstelt is welbevinden.",
                    from: 1,
                    to: 10,
                    mapping: "10-IMPACT",
                    oneTime: false,
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            id: "TE-MOD1-CARD3",
            showIfAnswered: ["TE-MOD-1-SLIDER"],
            cardContents: [
                {
                    type: "Text",
                    content: ["Jij scoorde een ", {type: "answer", questionID:"TE-MOD-1-SLIDER"}, " op de schaalvraag. Na het doorlopen van deze module zullen we je opnieuw vragen om je score aan te duiden. Zo kan je zien of je score verbeterd, verminderd of hetzelfde gebleven is. Je kan dan ook in kaart proberen brengen welke factoren hiertoe bijgedragen hebben."],
                }]
        },
        {
            id: "TE-MOD1-CARD4",
            title: "Veel gedachten!",
            cardContents: [
                {
                    type: "Text",
                    content: "Gedachten kunnen we niet tegenhouden. In een flits zijn ze daar. Zonder aankondiging. En zo heb je er wel duizenden per dag."
                },
                {
                    id: "TE-MOD-1-Q1",
                    type: "Question",
                    question: "Enig idee hoeveel gedachten we zo hebben per dag?",
                    options: ["5.000", "20.000", "70.000"],
                    correct: "70.000",
                    explanation: "We hebben gemiddeld 70.000 gedachten per dag, dat is een enorm aantal! Vaak passeren deze gedachten onbewust in ons hoofd. ",
                    onCorrect: "Interdaad!",
                    onIncorrect: "Meer dan dat!"
                }
            ]
        },
        {
            id: "TE-MOD1-CARD5",
            title: "Even reflecteren",
            showIfAnswered: ["TE-MOD-1-Q1"], 
            cardContents: [
                {
                    id: "TE-MOD-1-Q2",
                    type: "Selection",
                    question: "Heb je soms het idee dat steeds opnieuw dezelfde gedachte jou achtervolgt?",
                    options: [{id: "YES", text: "Ja"}, {id: "NO", text: "Nee"}]
                },
                {
                    id: "TE-MOD-1-Q3",
                    type: "Selection",
                    question: "Zou je soms je gedachten eens graag even op stop willen zetten?",
                    options: [{id: "YES", text: "Ja"}, {id: "NO", text: "Nee"}]
                }
            ]
        },
        {
            id: "TE-MOD1-CARD5-1",
            title: "Gedachte-oefening",
            showIfAnswered: ["TE-MOD-1-Q2", "TE-MOD-1-Q3"], 
            cardContents: [
                {
                    type: "Text",
                    content: "En laten we nu even de volgende gedachte-oefening proberen:"
                },
                {
                    id: "TE-MOD-1-THOUGHT",
                    type: "DelayedDisplay",
                    content: ["Denk eens aan een paard...", "Een rood paard...", "Met zes poten...", "Al vliegend door de lucht."]
                }
            ]
        },
        {
            id: "TE-MOD1-CARD5-2",
            showIfAnswered: ["TE-MOD-1-THOUGHT"], 
            cardContents: [
                {
                    type: "Text",
                    content: "Zelfs de meest absurde situaties kunnen we zomaar voor de geest halen."
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/flying-horse.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: ["En ", {type: "bold", content: "stop"}, " nu eens met te denken aan dat vliegende, rode paard. Denk er niet meer aan."]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/stop.jpg"
                },
                {
                    type: "Text",
                    content: "De kans is groot dat dit paard toch nog ergens door je hoofd vliegt of blijft naar boven springen. En dat is ook helemaal normaal."
                }
            ]
        },
        {
            id: "TE-MOD1-CARD6",
            title: "Terugkerende gedachten",
            showIfAnswered: ["TE-MOD-1-Q2", "TE-MOD-1-Q3"],
            cardContents: [
                {
                    type: "Text",
                    content: "Zoals bovenstaand experiment aantoont, kunnen we onze gedachten niet ‘uit’ zetten. We zijn voortdurend aan het denken. Vaak is dit onbewust en hebben we er geen last van."
                },
                {
                    type: "Text",
                    content: "Het kan echter moeilijk en vervelend worden wanneer moeilijke gedachten vaak terugkeren en met ons op de loop gaan."
                },
                {
                    type: "Image", 
                    link: "/images/thoughtsemotions/horse.jpg"
                },
                {
                    type: "Text",
                    content: "Verschillende van deze moeilijke gedachten kunnen ook pijngerelateerd zijn, mogelijks schieten ze meerdere keren per dag door je hoofd. Enkele voorbeelden:"
                },
                {
                    type: "List",
                    content: ["Ik heb last van rugpijn, hopelijk is er niets ergs aan de hand", "Deze activiteit ga ik niet kunnen doen door mijn pijn", "De pijn gaat alleen maar verslechteren", "Niemand houdt rekening met mijn pijnklachten", "Met deze pijn kan ik niet op een goede manier werken"]
                }, 
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/backpain.jpg"
                }
            ]
        },
        {
            id: "TE-MOD1-CARD7",
            title: "Gevoelens",
            cardContents: [
                {
                    type: "Text",
                    content: "Naast gedachten hebben we ook heel wat emoties en gevoelens die ons lijf binnenkomen. Deze zijn net als wolken die aan de lucht verschijnen en dan weer verdwijnen."
                },
                {
                    type: "Image", 
                    link: "/images/thoughtsemotions/cloud.jpg"
                },
                {
                    type: "Text",
                    content: "En net zoals onze gedachten, hebben we ook onze emoties en gevoelens niet onder controle..."
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Stel je voor dat iemand een geladen pistool op je richt en je zegt dat je niet bang mag zijn. Dat hij je zal neerschieten van zodra hij ook maar de geringste angst bij je merkt. Kun je jezelf er in die situatie van weerhouden bang te zijn, zelfs al hangt je leven ervan af? Natuurlijk kan je doen alsof je kalm bent, maar kun je je ook echt kalm voelen? Waarschijnlijk gaat dit je niet lukken: emoties kunnen we, net zoals gedachten, niet zomaar aan- en uitzetten."
                }, 
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/gun.jpg"
                }
            ]
        },
        {
            id: "TE-MOD1-CARD8",
            title: "Gedachten en gevoelens",
            cardContents: [
                {
                    type: "Text",
                    content: "Onze gedachten en gevoelens hangen bovendien sterk samen."
                },
                {
                    type: "Text",
                    content: "Zo zou je je bijvoorbeeld verdrietig kunnen voelen omdat je de gedachte hebt dat je door je pijn niet meer kan wat je vroeger wel nog kon. Of wanhopig, wanneer je eraan denkt dat er naar jouw gevoel geen verbetering optreedt. Of misschien ook kwaad, wanneer je erover nadenkt dat je het niet eerlijk vindt dat dit net jou moet overkomen. Of schuldig, wanneer je de gedachte hebt dat je te weinig bewogen hebt vandaag, of bang, wanneer de gedachte in je opkomt dat een bepaalde beweging pijn gaat veroorzaken, of ..."
                },
                {
                    type: "Text",
                    content: "Herkenbaar?"
                }, 
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/lots-of-thoughts.jpg"
                }
            ]
        },
        {
            id: "TE-MOD1-CARD9",
            title: "Afleiding van gedachten en gevoelens",
            cardContents: [
                {
                    type: "Text",
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om met onze moeilijke gedachten en gevoelens (bijvoorbeeld rond pijn) om te gaan zoals bijvoorbeeld afleiding zoeken door tv te kijken, bepaalde activiteiten vermijden, bepaalde bewegingen niet meer doen, meer eten, drinken of roken, meer slapen, veel op onze smartphone bezig zijn, ..."
                },
                {
                    type: "Break"
                },
                {
                    type: "Multitext-Input",
                    id: "TE-MOD-1-THOUGHTACTIONS",
                    text: "Wat heb jij verder al allemaal geprobeerd om je moeilijke gedachten en emoties te vermijden of kwijt te geraken?",
                    placeholder: "Schrijf ze hier neer:"
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/stress.jpg",
                }
            ]
        },
        {
            title: "En helpt het?",
            cardContents: [
                {
                    id: "TE-MOD-1-Q4",
                    type: "Selection",
                    question: "En hebben deze pogingen gewerkt en ervoor gezorgd dat je moeilijke gedachten en gevoelens verdwenen of verminderden?",
                    options: [{id: "ALWAYS", text: "Altijd"}, {id: "SOMETIMES", text: "Tijdelijk wel"}, {id: "NEVER", text: "Eigenlijk niet"}],
                    lockOnAnswer: true
                },
            ]
        },
        {
            id: "TE-MOD1-CARD10",
            showIfAnswered: ["TE-MOD-1-Q4"],
            cardContents: [
                {
                    type: "Text",
                    content: "Je geeft aan dat je pogingen altijd helpen om je gedachten te doen verdwijnen. Hoe hard we ook moeilijke gedachten en emoties proberen vermijden of kwijt geraken, diep vanbinnen zijn ze er nog steeds en steken ze vroeg of laat opnieuw de kop op. Het is dus belangrijk om ook te leren omgaan met deze gedachten en emoties, zodanig dat hun effect op jou minder groot is.",
                    showIf: [{rule: "HasAnswered", questionID: "TE-MOD-1-Q4", answerID: "ALWAYS"}]
                },
                {
                    type: "Text",
                    content: "Je geeft aan dat je pogingen soms helpen om je gedachten te doen verdwijnen. We hebben allemaal wel eens de neiging om allerlei pogingen te ondernemen om moeilijke gedachten en gevoelens uit de weg te gaan of te onderdrukken. Je gaat waarschijnlijk merken dat ze vaak geen of slechts tijdelijk een effect hebben. Hoe hard we ook ons best doen, diep vanbinnen zijn ze er nog steeds en steken ze vroeg of laat opnieuw de kop op.",
                    showIf: [{rule: "HasAnswered", questionID: "TE-MOD-1-Q4", answerID: "SOMETIMES"}]
                },
                {
                    type: "Text",
                    content: "Je geeft aan dat je pogingen eigenlijk niet helpen om je gedachten te doen verdwijnen. We hebben allemaal wel eens de neiging om allerlei pogingen te ondernemen om moeilijke gedachten en gevoelens uit de weg te gaan of te onderdrukken. Je gaat waarschijnlijk merken dat ze vaak geen of slechts tijdelijk een effect hebben. Hoe hard we ook ons best doen, diep vanbinnen zijn ze er nog steeds en steken ze vroeg of laat opnieuw de kop op.",
                    showIf: [{rule: "HasAnswered", questionID: "TE-MOD-1-Q4", answerID: "NEVER"}]
                },
                {
                    type: "Text",
                    content: "Dit kun je vergelijken met een bal die je onder water houdt. Zolang je erop blijft duwen, zal hij onder water blijven. Maar op een gegeven moment wordt je arm moe, en op het moment dat je loslaat, springt de bal meteen omhoog, het water uit."
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/ball.jpg"
                }
            ]
        },
        {
            title: "Leren omgaan met gedachten en gevoelens",
            cardContents: [
                {
                    type: "Text",
                    content: "Het werd je ondertussen waarschijnlijk duidelijk dat we onze gedachten en emoties niet kunnen uitzetten."
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/switch.jpg"
                },
                {
                    type: "Text",
                    content: "Het goede nieuws is dat we wél kunnen leren om op een andere manier om te gaan met moeilijke, vervelende, gedachten en emoties, zodat we er minder last van ondervinden en zodat ze ons gedrag minder bepalen! In het volgende hoofdstuk verkennen we met jou een aantal manieren die je kunnen helpen om afstand te nemen van gedachten en gevoelen. Test ze uit en neem mee wat voor jou werkt."
                },
            ]
        },
        {
            "title": "Overzicht",
            "overview": true,
            cardContents: [
                {
                    type: "Text",
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om van onze moeilijke gedachten en gevoelens af te raken. Deze hebben echter geen of slechts een tijdelijk effect. We kunnen onze gedachten en gevoelens niet zomaar aan- en uitzetten… Wél kunnen we leren om er op zo’n manier mee om te gaan dat we er minder last van ondervinden of zodat ze ons gedrag minder bepalen!"
                }
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi dit onderdeel",
            textOnCompleted: "Keer terug"
        }
    ]
}

const TEMOD2 = {
    id: "TE_MOD_2",
    title: "Mijn wederkerende gedachten",
    titleMarkup: ["Mijn wederkerende", "gedachten"],
    part: 2,
    description: "Nu is het tijd om enkele dagen stil te staan bij jouw gedachten.",
    duration: "Dagen",
    type: "Oefeningen",
    image: "te-mod-2",
    imageWidth: "130px",
    icon: "thought",
    cards: [{
        id: "TE-MOD2-CARD1",
        title: "Terugkerende of pieker-gedachten",
        cardContents: [
            {
                type: "Text",
                content: "We moedigen je aan om stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten?",
                showIf: [{"rule": "Profile", "profiles": [1]}]
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden.",
                showIf: [{"rule": "Profile", "profiles": [1]}]
            },
            {
                type: "Text",
                content: "We moedigen je aan om de komende twee dagen eens bewust stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten? Welke zijn pijngerelateerd?",
                showIf: [{"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}]
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden.",
                showIf: [{"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}]
            },
            {
                type: "Multitext-Input",
                id: "TE-MOD-2-NEGTHOUGHTS",
                text: "Welke (negatieve) gedachten komen de laatste tijd bij jou vaak terug?",
                placeholder: "Schrijf ze hier neer:"
            },
        ]
    },
    {
        id: "TE-MOD2-CARD2",
        title: "Drukke baan",
        cardContents: [
            {
                type: "Text",
                content: "Je kan je gedachten leren bekijken zoals auto's die voorbijrijden op een drukke baan. Je probeert de gedachten te laten komen en gaan zonder ze vast te houden, , achterna te hollen, of ze weg te duwen.  Uiteraard gaat dit niet elke keer en met iedere lastige gedachte lukken, maar het kan al zeker helpen om hier bewuster mee bezig te zijn. De enige manier om te leren om je gedachten te laten komen en gaan, zoals auto's op een drukke snelweg, of zoals wolken die voorbijglijden voor de zon, is oefenen, oefenen, oefenen!",
            },
            {
                type: "Video",
                link: "https://www.youtube.com/embed/iN6g2mr0p3Q"
            },
        ]
    },
    {
        id: "TE-MOD2-CARD3",
        title: "Ik heb de gedachte dat",
        cardContents: [
            {
                type: "Text",
                content: "Ga even rustig zitten en beluister volgend audiofragment.",
            },
            {
                type: "Audiofile",
                source: "/audio/thoughtThat.mp3"
            },
            {
                type: "Text",
                content: "En? Wat gebeurde er?",
            },
            {
                type: "Text",
                content: "Waarschijnlijk merkte je dat het tussenvoegen van die zinnetjes je meteen iets meer afstand gaf tot de gedachte, alsof je er een stapje van terugnam. Deze techniek kan je gebruiken voor al je onplezierige gedachten. Het helpt je namelijk om een stapje terug te zetten en de gedachten te zien zoals ze zijn: niets meer dan woorden die door je hoofd gaan.",
            },
            {
                type: "Image",
                link: "/images/thoughtsemotions/thoughts.jpg"
            },
            {
                type: "Text",
                content: "Let op! Het doel van deze oefening is niet perse om jezelf beter te doen voelen, hoewel dit een aangename bijkomstigheid kan zijn. Wel is het de bedoeling om je los te kunnen maken van niet-helpende gedachten die veel tijd en energie van je vragen. Op die manier ontstaat er meer ruimte om je aandacht te kunnen richten op zaken die jij belangrijk vindt. Het is vooral door te oefenen dat je deze techniek steeds beter onder de knie zal krijgen.",
            },
        ]
    },
    {
        id: "TE-MOD2-CARD4",
        title: "De vervelende buurman",
        cardContents: [
            {
                type: "Text",
                content: "Je kan moeilijke gedachten en gevoelens ook proberen te bekijken als een vervelende buurman die je plots je feestje komt crashen:",
            },
            {
                type: "Video",
                link: "https://www.youtube.com/embed/x0xeQe198gE"
            },
            {
                type: "Text",
                content: "Herinner je dat als je sterk focust op pijn en gedachten gerelateerd aan pijn dat er makkelijker prikkels doorkomen? Ook dat kan je vergelijken met een vervelende buurman."
            }
        ]
    },
    {
        id: "TE-MOD2-OVERVIEW",
        title: "Key take-away",
        overview: true,
        cardContents: [
            {
                type: "Text",
                overview: true,
                content: "We kunnen onze moeilijke, mogelijks pijngerelateerde gedachten niet uitzetten. Wel kunnen we er anders mee leren omgaan, zodat we er minder last van hebben! Zo kunnen we proberen onze gedachten te laten komen en gaan, zoals auto’s die we zien voorbijrijden op een drukke baan. Ook kunnen we afstand leren nemen van onze gedachten en ze leren zien voor wat ze zijn: niets meer dan woorden die door je hoofd gaan. Tenslotte kunnen we naar onze gedachten proberen kijken zoals naar die vervelende buurman, die als ongewenste gast ons feestje komt crashen.",
            },
        ]
    },
    {
        generateFinishSubmoduleButton: true,
        lastModule: false,
        text: "Voltooi dit onderdeel",
        textOnCompleted: "Keer terug"
    }
]
}

const TEMOD3 = {
    id: "TE_MOD_3",
    title: "Mindfulness",
    titleMarkup: ["Mindfulness"],
    part: 3,
    description: "In dit onderdeel gaan we een techniek bekijken die je kan helpen omgaan met verschillende gedachten.",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "te-mod-3",
    imageWidth: "210px",
    icon: "mindfulness",
    cards: [{
        id: "TE-MOD3-CARD1",
        title: "Inleiding",
        cardContents: [
            {
                type: "Text",
                content: "We hebben ondertussen geleerd dat gedachten en emoties niet echt te controleren zijn. We kunnen ze niet uitzetten waardoor we er vooral anders mee moeten leren omgaan. We reikten je hiertoe al enkele handvaten aan. Nog een techniek die je hiermee kan helpen is mindfulness.",
            }
        ]
    },
    {
        id: "TE-MOD3-CARD2",
        title: "Wat is mindfulness?",
        cardContents: [
            {
                type: "Text",
                content: "Het uitoefenen van mindfulness zal er niet voor zorgen dat je pijn verdwijnt, maar kan wel je manier van omgaan met de pijn veranderen en je helpen om deze pijn een plaats te geven in je leven. Met mindfulness leer je om aandacht te geven aan het huidige moment, zonder oordeel. Vaak leven we in ons hoofd en onze gedachten, mindfulness leert je je aandacht richten op het hier en nu.",
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: "Wetenschappelijk onderzoek toont aan dat mindfulness kan helpen om beter om te gaan met stress en minder te piekeren. Ook voor veel personen die te kampen hebben met (chronische) pijnklachten kan mindfulness helpend zijn als manier om hier beter mee te kunnen omgaan.",
            },
            {
                type: "Image",
                link: "/images/thoughtsemotions/relax-cleaning.jpg"
            },
            {
                type: "Text",
                content: "Mindfulness is iets dat je, net als fietsen, moet leren. Hoeveel te meer je ermee oefent, hoeveel te makkelijker het je zal afgaan. Laat dus ook toe dat het een proces zal zijn, met vallen en opstaan, net zoals je als kind leerde fietsen.",
            },
            {
                type: "Text",
                content: [{type: "bold", content: "Aan de slag!"}],
            }
        ]
    },
    {
        id: "TE-MOD3-CARD3",
        title: "Mindfulness oefening",
        cardContents: [
            {
                type: "Text",
                content: ["Kijk rond je heen en merk ", {type: "bold", content: "5 dingen"}, " op die je kan zien, zoals bijvoorbeeld een boom, je koffietas voor je, je schoenen, ..."]
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "4 dingen"}, " die je kunt horen, zoals het fluiten van de vogels, een wasmachine dat staat te draaien, iemand die iets zegt in de kamer langs je, ..."]
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "3 dingen"}, " die je fysiek kan voelen, zoals je voeten die op de grond staan, je kleren op je lichaam, de warmte doorheen je koffietas, ..."]
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "2 dingen"}, " die je kan ruiken, zoals de geur van de koffie in je koffietas, het wasproduct van je kleren, ..."]
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "1 ding"}, " dat je kan proeven, zoals de smaak van je tandpasta, ..."]
            }
        ]
    },
    {
        id: "TE-MOD3-CARD4",
        title: "Mindful tandenpoetsen",
        cardContents: [
            {
                type: "Text",
                content: "We bekijken met jou graag een mindfulness oefening die je gemakkelijk kan integreren in je dagelijks leven, nl. tijdens het tandenpoetsen. Zet het volgende audiofragment aan de volgende keer dat je je tanden poetst of luister hier alvast naar en denk eraan terug wanneer je je tanden aan het poetsen bent."
            },
            {
                type: "Audiofile",
                source: "/audio/mindfulBrushing.m4a"
            },
            {
                type: "Image",
                link: "/images/thoughtsemotions/brushing.jpg"
            },
        ]
    },
    {
        id: "TE-MOD3-CARD5",
        title: "Klaar!",
        wrapup: true,
        cardContents: [
            {
                type: "Text",
                content: "Het leuke aan deze oefening is dat je ze op heel veel verschillende plaatsen en momenten kan toepassen: op een wandeling, in je bed, tijdens de afwas, ..."
            },
            {
                type: "Text",
                content: "Hoe kan jij deze toepassen in je dagdagelijks leven? Of maak er eens bewust tijd voor. Benieuwd hoe je dit ervaart!"
            },
        ]
    },
    {
        id: "TE-MOD3-OVERVIEW",
        title: "Key take-away",
        overview: true,
        cardContents: [
            {
                type: "Text",
                overview: true,
                content: "Met mindfulness leer je om aandacht te richten op het hier en nu. Het vergt wat oefening, maar het is bewezen helpend te kunnen zijn in het omgaan met moeilijke, mogelijks pijngerelateerde gedachten en emoties.",
            },
            {
                type: "Text",
                overview: true,
                content: "Mindfulness is een vaardigheid die je kan trainen. Hoeveel te meer je oefent, hoeveel te beter je deze in de vingers zak krijgen!"
            }
        ]
    },
    {
        generateFinishSubmoduleButton: true,
        lastModule: false,
        text: "Voltooi dit onderdeel",
        textOnCompleted: "Keer terug"
    }
]
}

const TEMOD4 = {
    id: "TE_MOD_4",
    title: "Controle over je gedrag",
    titleMarkup: ["Controle", "over je gedrag"],
    part: 4,
    description: "In dit onderdeel leren wij hoe je controle kunt uitoefenen over je gedrag.",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "te-mod-4",
    imageWidth: "150px",
    icon: "stop",
    cards: [
        {
            id: "TE-MOD4-CARD1",
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Stel – je hebt het goede voornemen om wat te doen in het huishouden en bij het oprapen van de stofzuiger voel je een pijnscheut. Welke gedachten komen er op dat moment in je op? Misschien denk je dan ‘stofzuigen is slecht voor mij’ of je denkt ‘het gaat alleen maar erger worden als ik nu doordoe’. Met als gevolg dat je de stofzuiger laat liggen en je iets anders gaat doen, even gaan zitten bijvoorbeeld of wat rusten in de zetel. Misschien heb je zelfs de stofzuiger niet aangeraakt omdat je hoofd je op voorhand al gedachten toewierp als: ‘Stofzuigen gaat mijn pijn verergeren, dus ik kan het beter niet doen.’",
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/vacuum.jpg"
                },
            ]
        },
        {
            id: "TE-MOD4-CARD2",
            title: "Eens denken",
            cardContents: [
                {
                    type: "Text",
                    content: "Zoals we al geleerd hebben, kunnen we gedachten niet uitzetten. Ons hoofd denkt ook vooral op korte termijn, en op korte termijn wil ons lichaam pijn vermijden. In het begin zal stofzuigen vermijden misschien een gunstig effect hebben, want door niet te stofzuigen ga je mogelijke pijn uit de weg.",
                },
                {
                    type: "Text",
                    content: "Echter – op langere termijn kan dit een hele hoop negatieve gevolgen hebben. Weet je nog wat deze zijn? Meerdere antwoorden mogelijk.",
                },
                {
                    id: "TE-MOD-4-NEGAVTIVE-CONSEQUENCES",
                    type: "Multiple-Choice",
                    options: [
                        {id: "SENSITIVE", text: "Je zenuwstelsel wordt overgevoelig en gaat sneller pijnprikkels doorsturen waardoor ook normale prikkels pijnlijk kunnen worden"}, 
                        {id: "FOCUS_ON_PAIN", text: "Door je angst ga je meer focussen op pijnprikkels en dus sneller pijn krijgen en hier harder van af zien"}, 
                        {id: "CAPACITY", text: "Je fysieke capaciteit gaat achteruit waardoor je je sneller overbelast en dus sneller pijn gaat ervaren"}, 
                        {id: "ISOLATED", text: "Je raakt meer geïsoleerd van je omgeving en dit is niet goed voor je mentale welzijn"}],
                    needsSelectedAtLeast: 1,
                    needsSelectedAtMost: 4
                },
            ]
        },
        {
            id: "TE-MOD4-CARD3",
            title: "Controle of niet?",
            showIfAnswered: ["TE-MOD-4-NEGAVTIVE-CONSEQUENCES"],
            cardContents: [
                {
                    type: "Text",
                    content: "Goed zo – alle antwoorden waren juist. Je hebt dus al goed door dat bewegen op lange termijn ook heel wat negatieve gevolgen kan hebben.",
                    showIf: [{rule: "SelectionCount", questionID: "TE-MOD-4-NEGAVTIVE-CONSEQUENCES", count: [4]}]
                },
                {
                    type: "Text",
                    content: "Je hebt drie antwoorden aangeduid van de vier, wat al goed is! Ze waren eigenlijk allemaal juist, maar je hebt dus al door dat bewegen op lange termijn ook heel wat negatieve gevolgen kan hebben.",
                    showIf: [{rule: "SelectionCount", questionID: "TE-MOD-4-NEGAVTIVE-CONSEQUENCES", count: [3]}]
                },
                {
                    type: "Text",
                    content: "Je hebt nog wat juiste antwoorden laten liggen. Alle antwoorden waren namelijk juist.",
                    showIf: [{rule: "SelectionCount", questionID: "TE-MOD-4-NEGAVTIVE-CONSEQUENCES", count: [0, 1, 2]}]
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Waar heb je weinig tot geen controle over?"}]
                },
                {
                    type: "List",
                    content: ["Wat er in de toekomst zal gebeuren", "Welke gedachten er in je opkomen", "Het feit dat je pijn voelt", "De angst die je zal voelen om een bepaalde beweging te doen"]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/ideas.jpg"
                },
                {
                    type: "Text",
                    content: ["Zoals we ook eerder al zagen, is controleren en sturen van je gedachten en gevoelens een onmogelijke opdracht. Het meest nuttige dat je kan doen tijdens zo’n momenten is ", {type: "italic", content: "focussen op wat je wél kan controleren."}]
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Waar heb je dan wel controle over? "}]
                },
                {
                    type: "List",
                    content: [["Je hebt wel controle over ", {type: "bold", content: "je gedrag"}, ", over wat je doet."]]
                },
                {
                    type: "Text",
                    content: "Die controle is belangrijk omdat hetgeen je doet – hier en nu – een enorm verschil kan maken. De realiteit is namelijk dat we veel meer controle kunnen uitoefenen op ons gedrag, dan op onze gevoelens en gedachten."
                },
            ]
        },
        {
            id: "TE-MOD4-CARD4",
            title: "Aan de slag!",
            cardContents: [
                {
                    type: "Text",
                    content: "Ons belangrijkste doel is dus om ons gedrag - hier en nu - in eigen handen te nemen om effectief te reageren."
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/strings.jpg"
                },
                {
                    type: "Text",
                    content: "Tijd om aan de slag te gaan! Je kan niet controleren of je angstig zal zijn, of welke gedachten rond bewegen en pijn in je opkomen. Je kan wél kiezen om deze gedachten te herkennen, je activiteiten te analyseren en toch de keuze te maken die voor jou op lange termijn gunstig is. Hoe kan je dit doen?"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "1. Probeer je activiteiten rustig op te bouwen."}]
                },
                {
                    type: "List",
                    content: ["Bv. als je stofzuigt en je voelt een pijnscheut. Wat is een alternatief dat werkt voor jou? Misschien kan je beginnen met het stofzuigen van één kamer in de plaats van dadelijk het hele huis onder handen te nemen, misschien kan je de borstel nemen omdat die lichter is, ...", "Dit noemen we graded activity of graded exposure – dit wordt verder uitgelegd in de modules ‘activiteiten en werk’ en ‘bewegen’."]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/up.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "2. Sta stil bij je verschillende activiteiten en hun invloed op je pijn. Zaken als: "}]
                },
                {
                    type: "List",
                    content: ["Wat was de situatie?", "Welke emoties en gedachten had ik?", "Wat was het gevolg? Welke reactie heb ik gehad?", "Had ik deze activiteit anders kunnen aanpakken?"]
                },
                {
                    type: "Text",
                    content: ["Door dit telkens bij te houden in je ", {type: "italic", content: "pijnlogboek"}, ", zal je beter inzicht krijgen op wat voor jou goed werkt."]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/puzzle.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "3. Herinner je ook dat je gedachten en emoties er altijd zullen zijn, maar dat je kan kiezen en oefenen om er minder aandacht aan te besteden en om, ondanks deze gedachten en emoties, toch te kiezen voor activiteiten die waardevol zijn voor jou."}]
                },
                {
                    type: "List",
                    content: ["Denk terug aan de mindfulness oefeningen zoals de 5, 4, 3, 2, 1 oefening als manier om je aandacht te focussen op waarmee je bezig bent en minder in je hoofd te zitten", "Probeer je gedachten en gevoelens vanop een afstand te bekijken door er het zinnetje ‘Ik heb de gedachte dat’ voor te zetten."]
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/signs.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Je kan hiervoor altijd eens een kijkje nemen bij het onderdeel 'Activiteitenmanagement:"
                },
                {
                    type: "Shortcut",
                    module: "ACTIVITYWORK",
                    submodule: "ACT_MOD_4"
                }
            ]
        },
        {
            id: "TE-MOD4-CARD5",
            title: "Aan de slag!",
            cardContents: [
                {
                    type: "Text",
                    content: "Hopelijk is het tijdens deze module duidelijk geworden dat stilstaan bij hetgene dat je kan controleren en bewust zijn van je gedachten en emoties zinvol kan zijn. We hebben hiervoor verschillende oefeningen en tips doorlopen. Deze kan je terugvinden in de shortcut 'Oefeningen' op je startscherm en in deze module."
                },
            ]
        },
        {
            id: "TE-MOD4-OVERVIEW",
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "We hebben heel weinig controle over onze gevoelens en gedachten, maar wél over ons gedrag!",
                }
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi dit onderdeel",
            textOnCompleted: "Keer terug"
        }
    ]
}

const TEMOD5 = {
    id: "TE_MOD_5",
    title: "Waarden",
    titleMarkup: ["Waarden"],
    part: 5,
    description: "Leven volgens je waarden is belangrijk om gelukkig te zijn. Maar hoe doe je dat juist?",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "te-mod-5",
    imageWidth: "170px",
    icon: "star",
    cards: [
        {
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Iedereen zou graag gelukkig zijn. Maar dit is niet altijd even vanzelfsprekend. Soms zorgt het leven voor tegenslagen die het geluk in de weg kunnen staan, zoals pijnklachten. Deze zaken heb je niet altijd onder controle en dat is lastig. Ze kunnen ons leven zo domineren dat we geen aandacht meer hebben voor wat we echt belangrijk vinden. Toch kan je bekijken hoe je, ondanks deze tegenslagen, een stapje kan zetten naar het leven dat je wilt leiden. En heb je geen pijn of tegenslagen? Ook dan kan het leven ervoor zorgen dat je te weinig aandacht of energie steekt in de zaken die je echt belangrijk vindt.",
                },
            ]
        },
        {
            titleCard: true,
            title: "Levensdomeinen"
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Om erachter te komen wat jij belangrijk vindt, kan het helpen om al eens even stil te staan bij volgende vraag:",
                },
                {
                    type: "Multitext-Input",
                    id: "TE-MOD-5-NOLIMIT",
                    text: "Wat zou je anders of meer doen wanneer je nergens door gehinderd zou worden?",
                    placeholder: "Schrijf het hier neer"
                },
            ]
        },
        {
            title: "Belang van domeinen",
            cardContents: [
                {
                    type: "Text",
                    content: "Nu is het tijd om concreter aan de slag te gaan. Hieronder staan een aantal levensdomeinen die energie en aandacht kunnen opeisen. Het belang van de domeinen kan sterk verschillen afhankelijk van de fase in je leven.",
                },
                {
                    type: "Text",
                    content: "Duid eerst op de sliders aan hoe belangrijk jij ieder domein nu vindt in je leven.",
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-WORK",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij je werk?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-RELAX",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij ontspanning?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-HEALTH",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij je gezondheid?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-DEVELOPMENT",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij je persoonlijke ontwikkeling?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-SOCIAL",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij je sociaal leven?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-IMPORTANCE-FAMILY",
                    type: "Slider",
                    text: "Hoe belangrijk vind jij je familie?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-IMPORTANCE",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            title: "Investeren in domeinen",
            showIfAnswered: ["TE-MOD-5-IMPORTANCE-WORK", "TE-MOD-5-IMPORTANCE-RELAX", "TE-MOD-5-IMPORTANCE-HEALTH", "TE-MOD-5-IMPORTANCE-DEVELOPMENT", "TE-MOD-5-IMPORTANCE-SOCIAL", "TE-MOD-5-IMPORTANCE-FAMILY"],
            cardContents: [
                {
                    type: "Text",
                    content: "Duid nu voor ieder domein aan hoeveel je in dat levensdomein investeert.",
                },
                {
                    id: "TE-MOD-5-INVEST-WORK",
                    type: "Slider",
                    text: "Hoeveel investeer jij in je werk?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-INVEST-RELAX",
                    type: "Slider",
                    text: "Hoeveel investeer jij in ontspanning?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-INVEST-HEALTH",
                    type: "Slider",
                    text: "Hoeveel investeer jij in je gezondheid?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-INVEST-DEVELOPMENT",
                    type: "Slider",
                    text: "Hoeveel investeer jij in je persoonlijke ontwikkeling?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-INVEST-SOCIAL",
                    type: "Slider",
                    text: "Hoeveel investeer jij in je sociaal leven?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                },
                {
                    id: "TE-MOD-5-INVEST-FAMILY",
                    type: "Slider",
                    text: "Hoeveel investeer jij in je familie?",
                    from: 1,
                    to: 5,
                    oneTime: false,
                    mapping: "5-AMOUNT",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            title: "Investeren in domeinen",
            showIfAnswered: ["TE-MOD-5-INVEST-WORK", "TE-MOD-5-INVEST-RELAX", "TE-MOD-5-INVEST-HEALTH", "TE-MOD-5-INVEST-DEVELOPMENT", "TE-MOD-5-INVEST-SOCIAL", "TE-MOD-5-INVEST-FAMILY"],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier zie je een overzicht van je levensdomeinen.",
                },
                {
                    type: "LifedomainChart"
                },
                {
                    type: "Text",
                    content: "Komt het belang van ieder domein ongeveer overeen met de tijd die je er aan besteedt? Als dat niet zo is, probeer dan je activiteiten anders in te delen en tijd vrij te maken voor de zaken die jij belangrijk vindt. Zo bouw je aan je eigen geluk! Je kan altijd terugkeren naar deze module om de domeinen opnieuw te scoren."
                }
            ]
        },
        {
            titleCard: true,
            title: "Waarden"
        },
        {
            id: "TE-MOD5-CARD1",
            showIf: [{rule: "Profile", profiles: [1]}],
            cardContents: [
                {
                    type: "Text",
                    content: "Te kampen hebben met (chronische) pijn is lastig. Aan die pijn kan je niet steeds iets veranderen, het is iets wat je niet volledig onder controle hebt. Wel kan je bekijken hoe je, ondanks de pijn, het leven kan leiden dat je wil leiden en de activiteiten kan uitoefenen die jij belangrijk vindt.",
                },
                {
                    type: "Text",
                    content: "Om erachter te komen wat jij belangrijk vindt, wat jouw waarden zijn, kan het helpend zijn om de komende periode stil te staan bij de volgende vragen:",
                },
                {
                    id: "TE_MOD_5_INPUT_1",
                    type: "Text-Input",
                    text: "Wat zou ik (anders) doen als pijnlijke gedachten en gevoelens m.b.t. mijn pijn mij niet meer belemmerden?",
                    placeholder: "Schrijf hier"
                },
                {
                    id: "TE_MOD_5_INPUT_2",
                    type: "Text-Input",
                    text: "Welke projecten of activiteiten zou ik oppakken (of met welke zou ik doorgaan) als mijn tijd en energie niet werden opgeslokt door verontrustende emoties rond het ervaren van pijn?",
                    placeholder: "Schrijf hier"
                },
                {
                    id: "TE_MOD_5_INPUT_3",
                    type: "Text-Input",
                    text: "Wat zou ik doen als angst voor pijn geen probleem meer was?",
                    placeholder: "Schrijf hier"
                },
                {
                    id: "TE_MOD_5_INPUT_4",
                    type: "Text-Input",
                    text: "Wat zou ik proberen als gedachten over het ervaren van pijn me niet zouden afschrikken?",
                    placeholder: "Schrijf hier"
                },
                {
                    id: "TE_MOD_5_INPUT_5",
                    type: "Text-Input",
                    text: "Wat vind ik, ondanks mijn pijn, belangrijk in mijn leven?",
                    placeholder: "Schrijf hier"
                },
                {
                    type: "Text",
                    content: "Jouw antwoorden op deze vragen kunnen je een idee geven van wat jouw waarden zijn, wat jij belangrijk vindt, hoe jij je leven wil leiden. Neem hier je tijd voor. Kom af en toe terug naar deze pagina om hem in te vullen de komende dagen."
                }
            ]
        },
        {
            id: "TE-MOD5-CARD2",
            title: "Waarden",
            cardContents: [
                {
                    type: "Text",
                    content: "Vervolgens is het belangrijk om stil te staan bij jouw waarden. Je kan een waarde vergelijken met een vuurtoren in de verte, die je door slecht weer gidst en de richting aanwijst."
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/storm.jpg"
                },
                {
                    type: "Text",
                    content: "Door te weten wat je belangrijkste waarden zijn in je leven, zal het ook makkelijker worden om lastige situaties te begrijpen én om keuzes te maken. Daarom staan we uitgebreid stil bij wat voor jou een waardig leven is."
                },
                {
                    type: "Text",
                    content: "Hieronder ga je een 50-tal waarden te zien krijgen. Neem hier even de tijd voor om aan te geven of deze waarde bij jou aansluit als persoon."
                }
            ]
        },
        {
            id: "TE-MOD5-CARD3",
            title: "Jouw waarden",
            cardContents: [
                {
                    type: "Text",
                    content: ["Je krijgt nu ongeveer 50 waarden te zien. Als je een waarde ziet die bij je past, tik je op ", {type: "bold", content:"'akkoord'"}, ", en indien de waarde niet bij je past, tik je op ", {type: "bold", content:"'niet akkoord'"}, ". Succes er mee!"]
                },
                {
                    id: "TE-MOD-5-SWIPE-50",
                    type: "Swipe",
                    randomize: true,
                    items: values,
                },
            ]
        },
        /* Als ze uit de 50 kaarten, meer 10 hebben kunnen kiezen -> 10 kiezen dan 5 */
        {
            id: "TE-MOD5-CARD4_MORETHAN10",
            title: "Jouw top 10",
            showIfAnswered: ["TE-MOD-5-SWIPE-50"],
            showIf: [{rule:"SwipeAgreeCount", questionID: "TE-MOD-5-SWIPE-50", atLeast: 11}],
            cardContents: [
                {
                    type: "Text",
                    content: ["Volgende waarden heb je aangeduid als passend bij jou in de vorige oefening. Als je hieruit je ",  {type:"bold", content: "top 10"}, " zou moeten kiezen, welke zijn dan de belangrijkste voor jou?"]
                },
                {
                    id: "TE-MOD-5-SELECT-10",
                    type: "Multiple-Choice",
                    options: values,
                    useSelectionFrom: "TE-MOD-5-SWIPE-50",
                    needsSelectedAtLeast: 10,
                    needsSelectedAtMost: 10,
                    showUnchecked: false
                },
            ]
        },
        /* Als ze uit de 50 kaarten, tussen de 6 en 10 hebben kunnen kiezen -> meteen oefening van 5 kaarten */
        {
            id: "TE-MOD5-CARD4_LESSTHAN10",
            title: "Jouw top 5",
            showIfAnswered: ["TE-MOD-5-SWIPE-50"],
            showIf: [{rule:"SwipeAgreeCount", questionID: "TE-MOD-5-SWIPE-50", atLeast: 6}, {rule:"SwipeAgreeCount", questionID: "TE-MOD-5-SWIPE-50", atMost: 10}],
            cardContents: [
                {
                    type: "Text",
                    content: ["Volgende waarden heb je aangeduid als passend bij jou in de vorige oefening. Je hebt er al minder dan 10 kunnen aanduiden, goed! Stel je voor dat je ze in een rugzak hebt en je bent met de boot op weg naar het bereiken van deze waarden. Maar, de boot lekt en begint te zinken. Je moet 5 waarden uit je rugzak halen om te redden, ", {type:"bold", content: "welke 5 waarden blijven dan over"}, "?"]
                },
                {
                    id: "TE-MOD-5-SELECT-5",
                    type: "Multiple-Choice",
                    options: values,
                    useSelectionFrom: "TE-MOD-5-SWIPE-50",
                    needsSelectedAtLeast: 5,
                    needsSelectedAtMost: 5,
                    showUnchecked: false
                },
            ]
        },
        /* Als ze uit de 50 kaarten, minder dan 5 hebben kunnen kiezen -> Geen oefening meer */
        {
            id: "TE-MOD5-CARD4_LESSTHAN5",
            title: "Jouw top 5",
            showIfAnswered: ["TE-MOD-5-SWIPE-50"],
            showIf: [{rule:"SwipeAgreeCount", questionID: "TE-MOD-5-SWIPE-50", atMost: 5}],
            cardContents: [
                {
                    type: "Text",
                    content: "Volgende waarden heb je aangeduid als passend bij jou in de vorige oefening. Je hebt meteen al je top 5 kunnen kiezen uit de lijst van 50 waarden, wat geen makkelijke opgave is. Goed bezig!"
                },
                {
                    type: "Display-Values",
                    values: values,
                    useSelectionFrom: "TE-MOD-5-SWIPE-50",
                },
            ]
        },
        /* Show if selected 50, then did 10 -> Nu 5 */
        {
            id: "TE-MOD5-CARD5_10THEN5",
            title: "Jouw top 5",
            showIfAnswered: ["TE-MOD-5-SELECT-10"],
            showIf: [{rule:"SwipeAgreeCount", questionID: "TE-MOD-5-SWIPE-50", atLeast: 11}],
            cardContents: [
                {
                    type: "Text",
                    content: ["Je waarden zijn erg belangrijk en wegen erg zwaar. Stel je voor dat je ze in een rugzak hebt en je bent met de boot op weg naar het bereiken van deze waarden. Maar, de boot lekt en begint te zinken. Je moet 5 waarden uit je rugzak halen om te redden, ",  {type:"bold", content: "welke 5 waarden blijven dan over"}, "?"]
                },
                {
                    id: "TE-MOD-5-SELECT-5",
                    type: "Multiple-Choice",
                    options: values,
                    useSelectionFrom: "TE-MOD-5-SELECT-10",
                    needsSelectedAtLeast: 5,
                    needsSelectedAtMost: 5
                },
            ]
        },
        {
            titleCard: true,
            showIfAnswered: ["TE-MOD-5-SWIPE-50"],
            title: "Doelen"
        },
        {
            id: "TE-MOD5-CARD6",
            title: "En nu je doelen",
            cardContents: [
                {
                    type: "Text",
                    content: "Proficiat! Je hebt je levensdomeinen eens overlopen en je waarden benoemd: goed gedaan! Dat is dan ook geen gemakkelijke opdracht. En nu?"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Nu is het tijd om actie te ondernemen en doelen te proberen stellen die gebaseerd zijn op jouw waarden. Let’s go!"}]
                },
            ]
        },
        {
            id: "TE-MOD5-CARD7",
            title: "Leef naar je waarden",
            cardContents: [
                {
                    type: "Text",
                    content: "Er zijn verschillende manieren om naar je waarden te leven. Stel dat jij bijvoorbeeld veel belang hecht aan gezondheid en zelfzorg. Dan kan je dit in je leven incorporeren door een marathon te lopen, maar evenzeer door dagelijks een wandeling rond de blok te doen of ook door voldoende rustmomenten in te bouwen of door op je voeding te letten, ... Stel dat jij belang hecht aan het leveren van een zinvolle bijdrage, dan zou je dat kunnen doen door te gaan werken, door vrijwilligerswerk te doen, door boodschappen te doen voor je zieke buurvrouw, ... Of stel dat je graag meer quality time wilt met je familie. Bijvoorbeeld door wekelijks met je ouders te bellen of door de kinderen met de fiets naar school te brengen."
                },
                {
                    type: "Image",
                    link: "/images/movement/thoughts.jpg"
                },
                {
                    type: "Text",
                    content: "Het stellen van doelen maakt heel duidelijk wat belangrijk voor je is en wat je wilt bereiken (of je nu last hebt van pijn of niet). Hier zijn alvast enkele tips bij het stellen van doelen:"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/path.jpg", title: "Tip 1 - Laat je leiden door je visie, waarden en principes", text: "Doelen kies je in functie van wat voor jou als belangrijk aanvoelt, hoe je je leven wilt leiden. Omgekeerd kan het stellen van een doel dat indruist tegen een belangrijke waarde, ongewenste effecten met zich meebrengen."},
                        {image: "/images/movement/goals.jpg", title: "Tip 2 - Maak concrete doelen", text: "Je kan een doel pas bereiken als je weet wat je hiervoor moet doen. Werken aan je gezondheid is bijvoorbeeld geen doel, maar een waarde (je hecht belang aan jouw gezondheid). Een concreet doel om deze waarde te bereiken kan zijn dat je dagelijks een wandeling van 30 minuten maakt, of dat je maar 1 keer per week een dessertje eet."},
                        {image: "/images/movement/rock.jpg", title: "Tip 3 - Stel realistische doelen", text: "Een goed gekozen doel kan je bereiken. Onrealistische doelen werken heel demotiverend en de kans is groot dat je vroegtijdig afhaakt. Stel je doet zelden iets van sport, dan is het niet het beste plan om onmiddellijk een marathon als doel te nemen. Je kan beter starten met een doel van 5km, dan 10km, enz."},
                        {image: "/images/movement/pins.jpg", title: "Tip 4 - Houd rekening met de termijn", text: "Hoe verder weg in de toekomst een bepaald doel ligt, hoe moeilijker het wordt om dit te bereiken. Splits daarom ambitieuze doelen op in tussentijdse doelen, zo bewaar je het overzicht. Let op dat je je ook niet laat leiden door strakke tijdschema's, ook al kan door sociale of andere druk de tijd een belangrijke factor worden. Strakke tijdschema’s werken meestal stress verhogend en dreigen ons uit evenwicht te brengen. Bovendien werken ze demotiverend, doordat we ons teleurgesteld voelen als we bepaalde doelen niet bereiken binnen de gestelde termijn."},
                    ]
                }
            ]
        },
        {
            id: "TE-MOD5-CARD8",
            title: "Enkele voorbeelden",
            cardContents: [
                {
                    type: "Text",
                    content: "Hier volgen 2 voorbeelden van hoe je goede doelen kan stellen."
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Voorbeeld 1 - Els"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/neckpain.jpg", text: "Els is 35 jaar, getrouwd, heeft een dochter van 5 jaar en werkt op een kantoor. Ze heeft tijdens het werken geregeld last van haar nek, zeker op dagen dat ze vaak met klanten moet bellen."},
                        {image: "/images/movement/clock.jpg", text: "Omdat gezondheid een belangrijke rol heeft in haar leven, wilt ze hieraan werken. Ze weet dat het belangrijk is om te bewegen en regelmatig van houding te wisselen. Daarom neemt ze haar voor om 2 minuten recht te staan en te bewegen na ieder uur te werken."}
                    ]
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Voorbeeld 2 - Paul"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/paul.jpg", text: "Paul is 52 jaar, gescheiden, zijn kinderen zijn al uit huis en werkt als schrijnwerker. Zijn vrienden gaan iedere zaterdag 100 km samen fietsen."},
                        {image: "/images/movement/graph.jpg", text: "Omdat hij veel belang hecht aan vriendschap, zou hij graag meegaan. Conditioneel is hij nog niet zo sterk en hij heeft ook wat last van zijn knie. Daarom besluit hij om zijn fietsen op te bouwen. Hij wilt 1 keer per week trainen en op zaterdag rijdt hij een stukje mee met zijn vrienden."}
                    ]
                },
            ]
        },
        {
            id: "TE-MOD5-CARD8_NU",
            title: "Nu is het aan jou!",
            showIf: [{rule:"HasNotUnlockedShortcut", shortcut: "GOALSETTING"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Nu is het aan jou! We hebben de shortcut 'Waarden en Doelen' op het startscherm toegevoegd. Hier kan je zelf jouw persoonlijke doelen stellen, en waarden bekijken. De tool helpt om jouw doelen concreet te maken en te realiseren. Neem dus zeker een kijkje, en succes!"
                }
            ]
        },
        {
            id: "TE-MOD5-CARD8_U",
            title: "Nu is het aan jou!",
            showIf: [{rule:"HasUnlockedShortcut", shortcut: "GOALSETTING"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Nu is het aan jou! We hebben de shortcut 'Waarden en Doelen' op het startscherm toegevoegd, en ook uitgebreid met doelen. Hier kan je zelf jouw persoonlijke doelen stellen. De tool helpt om jouw doelen concreet te maken en te realiseren. Neem dus zeker een kijkje, en succes!"
                }
            ]
        },
        {
            id: "TE-MOD5-OVERVIEW",
            title: "Key take-aways",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Een waarde kan je vergelijken met een vuurtoren in de verte, die je door slecht weer gidst en de richting aanwijst. Zicht krijgen op jouw persoonlijke waarden helpt je om voor jezelf uit te maken wat jij belangrijk vindt in je leven en hoe je je leven wil leiden."
                },
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi dit onderdeel",
            textOnCompleted: "Keer terug",
            action: "UnlockValues"
        }
    ]
}

const TEMOD6 = {
    id: "TE_MOD_6",
    title: "Afronding",
    titleMarkup: ["Afronding"],
    part: 6,
    description: "In het laatste onderdeel gaan wij nog eens alles overlopen wat wij gezien hebben.",
    duration: "10 minuten",
    type: "Informatief",
    image: "te-mod-6",
    imageWidth: "200px",
    icon: "pen",
    cards: [
        {
            id: "TE-MOD6-CARD1",
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Uiteraard zullen er allerlei obstakels in je leven zijn: doelen die je niet kunt bereiken, dingen die je niet kunt doen, problemen waarvoor geen eenvoudige oplossingen bestaan, moeilijke gedachten en gevoelens die de kop opsteken,...",
                },
            ]
        },
        {
            id: "TE-MOD6-CARD2",
            title: "Een anekdote",
            cardContents: [
                {
                    type: "Text",
                    content: "Je kan dit vergelijken met jij die de kapitein bent van je boot, onderweg naar je bestemming. Je zal ongetwijfeld moeilijkheden tegenkomen zoals storm op zee of hoge golven.",
                },
                {
                    type: "Text",
                    content: "In eerste instantie zal je misschien de neiging hebben om rechtsomkeer te maken, terug naar de veilige haven. Wanneer je angst hebt voor pijn bij het uitoefenen van bepaalde activiteiten, is dat misschien net zo. Ook hier is het zo dat het stoppen met de activiteit in kwestie of het vermijden ervan er op korte termijn misschien voor zal zorgen dat je je iets beter voelt omdat je moeilijke gevoelens en gedachten verminderen. Op lange termijn kan dit je echter verhinderen om die dingen te doen waar jij veel waarde aan hecht.",
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/storm.jpg"
                },
                {
                    type: "Text",
                    content: "Hier kan het dus helpend zijn om die vuurtoren voor ogen te houden en -ondanks de tegenwind en hoge golven op je weg- hier toch koers naar te blijven varen.",
                }
            ]
        },
        {
            id: "TE-MOD6-CARD3",
            title: "Wat betekent dat nu?",
            cardContents: [
                {
                    type: "Text",
                    content: "Wanneer jij het dus bijvoorbeeld belangrijk vindt om voldoende te blijven bewegen of aan het werk te blijven, kan je proberen om dit toch te doen, ondanks gedachten aan pijn of angst voor pijn die je hoofd onderweg misschien zal opwerpen!",
                },
            ]
        },
        {
            id: "TE-MOD6-CARD4",
            title: "De schaalvraag",
            cardContents: [
                {
                    type: "Text",
                    content: "Herinner je je nog de schaalvraag van deze module? Er werd reeds tweemaal gevraagd om op een schaal van 1 tot 10 -waarbij 1 staat voor een heel sterke negatieve impact en 10 voor helemaal geen negatieve impact - aan te duiden hoe groot de impact van moeilijke gedachten en gevoelens was op jouw welbevinden.",
                },
                {
                    type: "Text",
                    content: "We halen deze schaalvraag er nog eens opnieuw bij.",
                },
                {
                    id: "TE-MOD-6-SLIDER-FINAL",
                    type: "Slider",
                    text: "Hoe zou je, na het doorlopen van deze module, op een schaal van 1 tot 10 - waarbij 1 staat voor een heel sterke negatieve impact en 10 voor helemaal geen negatieve impact - de impact van moeilijke gedachten en gevoelens op jouw welbevinden scoren?",
                    from: 1,
                    to: 10,
                    mapping: "10-IMPACT",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            id: "TE-MOD6-CARD5",
            showIfAnswered: ["TE-MOD-6-SLIDER-FINAL"],
            cardContents: [
                {
                    type: "Text",
                    content: "Je score is verhoogd ten opzichte van de keer dat wij jou deze vraag hebben gesteld in de eerste module, super! ",
                    showIf: [{rule: "ScoresHigher", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
                {
                    id: "TE-MOD-6-INPUT-1",
                    type: "Text-Input",
                    text: "Wat was hierbij helpend? Hoe kan je proberen om hier meer van te doen? Hoe zou je je score nog met één punt kunnen verhogen? Maak dit zo concreet mogelijk voor jezelf!",
                    placeholder: "Schrijf hier",
                    showIf: [{rule: "ScoresHigher", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
                {
                    type: "Text",
                    content: "Je score is wat verlaagd ten opzichte van de keer dat wij jou deze vraag hebben gesteld in de eerste module.",
                    showIf: [{rule: "ScoresLower", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
                {
                    id: "TE-MOD-6-INPUT-1",
                    type: "Text-Input",
                    text: "Wat heeft hiertoe bijgedragen? Wat zou kunnen helpen om je score opnieuw met één punt te verhogen?",
                    placeholder: "Schrijf hier",
                    showIf: [{rule: "ScoresLower", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
                {
                    type: "Text",
                    content: "Je score is onveranderd gebleven ten opzichte van de keer dat wij jou deze vraag hebben gesteld in de eerste module.",
                    showIf: [{rule: "ScoresSame", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
                {
                    id: "TE-MOD-5-INPUT-1",
                    type: "Text-Input",
                    text: "Wat zou kunnen helpen om je score opnieuw met één punt te verhogen? Maak dit zo concreet mogelijk voor jezelf!",
                    placeholder: "Schrijf hier",
                    showIf: [{rule: "ScoresSame", questionID1: "TE-MOD-6-SLIDER-FINAL", questionID2: "TE-MOD-1-SLIDER"}]
                },
            ]
        },
        {
            id: "TE-MOD6-CARD6",
            title: "Klaar! 🎉",
            wrapup: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Proficiat! Je hebt de module gedachten en emoties met glans doorlopen!",
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/strong-thoughts.jpg"
                },
            ]
        },
        {
            id: "TE-MOD6-OVERVIEW",
            title: "Key take-aways",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Het kan helpend zijn om jouw waarden voor ogen te blijven houden om, ondanks de obstakels en moeilijke gedachten en gevoelens die je ervaart , toch naar jouw waarden te leven en te doen wat jij belangrijk vindt."
                },
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: true,
            text: "Voltooi Gedachten & Emoties",
            textOnCompleted: "Keer terug"
        }
    ]
}

const ThoughtsEmotionsScript = {
    id: "TE",
    title: "Gedachten en Emoties",
    submodules: [TEMOD1, TEMOD2, TEMOD3, TEMOD4, TEMOD5, TEMOD6]
}

export default ThoughtsEmotionsScript;