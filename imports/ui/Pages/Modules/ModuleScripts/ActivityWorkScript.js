const ACTMOD1 = {
    id: "ACT_MOD_1",
    title: "Wat is belasting?",
    titleMarkup: ["Wat is", "belasting?"],
    shortTitle: "Belasting",
    part: 1,
    description: "Belasting is alles wat je fysiek en psychisch ondergaat in de loop van de dag. Bijvoorbeeld: je werk, huishoudelijke taken, vrije tijd, stress, … Ervaar jij een hoge of lage belasting? Hoe ga je hier mee om?",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    icon: "weight",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "In deze module gaan we eens kijken naar jouw fysieke activiteiten en werk.",
                },
                {
                    type: "List",
                    content: ["Wat doe jij van activiteiten in je vrije tijd en/of op het werk?", "Wat is dus jouw fysieke en mentale belasting? Is dit in evenwicht met jouw belastbaarheid, datgene wat je lichaam aan kan?"],
                },
                {
                    type: "Text",
                    content: "Deze module geeft jouw handvaten om ervoor te zorgen dat jouw belasting en belastbaarheid in evenwicht zijn.",
                },
                {
                    type: "Text",
                    content: "Maar wat betekent nu belasting en wat betekent belastbaarheid? Hier gaan we even verder op in.",
                },
            ]
        },
        {
            title: "Wat is welzijn?",
            cardContents: [
                {
                    type: "Text",
                    content: ["Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de ", {type: "bold", content: "belasting"},  " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content: "belastbaarheid"},  " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."]
                }
            ]
        },
        {
            title: "Belasting",
            cardContents: [
                {
                    type: "Text",
                    content: "Belasting is alles wat je fysiek en psychisch ondergaat in de loop van de dag. Bijvoorbeeld: je werk, huishoudelijke taken, vrije tijd, stress, ... Zowel een te hoge als een te lage belasting kunnen een risico vormen en mogelijks leiden tot lichamelijke klachten."
                },
                {
                    type: "Text",
                    content: "Ervaar jij een hoge of lage belasting? Hoe ga je hier mee om?"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/belasting.jpg"
                },
            ]
        },
        {
            title: "Belastbaarheid",
            cardContents: [
                {
                    type: "Text",
                    content: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aan kan. Dat wordt bepaald door meerdere factoren waaronder: je algemene gezondheidstoestand, je lichamelijke conditie en spierkracht, je kennis en ervaring, je attitude (hoe je tegenover bepaalde zaken staat) en motivatie,  de manier waarop je met stress en druk omgaat, je familiale en sociale omstandigheden. Belastbaarheid is individueel verschillend."
                },
            ]
        },
        {
            title: "Reflectie oefening",
            cardContents: [
                {
                    type: "Text",
                    content: "Hoe ziet jouw weegschaal eruit? Is deze in balans of helt je weegschaal regelmatig over?"
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de belasting (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je belastbaarheid (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."
                },
                {
                    type: "Text",
                    overview: true,
                    content: "Deze module geeft jouw handvaten om ervoor te zorgen dat jouw belasting en belastbaarheid in evenwicht zijn."
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

const ACTMOD2WORK = {
    id: "ACT_MOD_2",
    title: "Werk",
    titleMarkup: ["Belasting -", "Werk"],
    shortTitle: "Werk",
    part: 2,
    description: "Kan je best rusten als je pijn hebt of net niet? Of ga je naar je werk als je pijn hebt? Vragen die we bespreken tijdens deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-work",
    icon: "work",
    imageWidth: "230px",
    cards: [{
            title: "Reflectie met stelling (Activiteiten)",
            cardContents: [
                {
                    type: "Text",
                    content: "Laten we beginnen met een stelling. Wat denk jij van het volgende:",
                },
                {
                    id: "ACT-MOD-2-SLIDER-1",
                    type: "Slider",
                    text: "Als je pijn hebt, kan je best rusten.",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }
            ]
        },
        {
            title: "Reflectie",
            cardContents: [
                {
                    type: "Text",
                    content: "Rusten en activiteiten vermijden is niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Daarnaast zetten je hersenen ook pijndempende stoffen vrij tijdens het bewegen. Werk en activiteiten kunnen je afleiden van je pijn. Door lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven. Dit wilt niet zeggen dat je bij een acute blessure de belasting niet tijdelijk mag verlagen om het herstelproces te bevorderen."
                },
            ]
        },
        {
            title: "Belasting",
            cardContents: [
                {
                    type: "Text",
                    content: "Wat denk jij van volgende stelling?"
                },
                {
                    id: "ACT-MOD-2-SLIDER-2",
                    type: "Slider",
                    text: "Ik blijf beter thuis van het werk als ik pijn heb.",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }
            ]
        },
        {
            title: "Reflectie met stelling (werk)",
            cardContents: [
                {
                    type: "Text",
                    content: "Naast financiële onafhankelijkheid zijn er nog andere voordelen aan werken! Herken jij enkele voordelen in de woordwolk?"
                },
                {
                    type: "Multiple-Choice",
                    id: "ACT-MOD-2-Q1",
                    options: [{id:"WORK_APPRECIATION", text: "Waardering"}, {id:"WORK_ACKNOWLEGDEMENT", text: "Erkenning"}, {id:"WORK_INVOLVEMENT", text: "Betrokken in de samenleving"}, {id:"WORK_SOCIALSUPPORT", text: "Sociale steun"}, {id:"WORK_SOCIALSTATUS", text: "Sociale status"}],
                    needsSelectedAtLeast: 1,
                    needsSelectedAtMost: 5
                },
                {
                    type: "Break"
                },
                {
                    type: "Multitext-Input",
                    id: "ACT-MOD-2-T1",
                    text: "Kan je nog meer voordelen van werk vinden?",
                    placeholder: "Schrijf ze hier neer:"
                },
            ]
        },
        {
            title: "Voordelen werk",
            showIfAnswered: ["ACT-MOD-2-Q1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Wist je dat werken ook therapeutisch kan werken?"
                },
                {
                    type: "Text",
                    content: "Werken ..."
                },
                {
                    type: "List",
                    content: ["... leidt je af van de pijn", "... geeft je energie", "... geeft structuur aan je leven", "... zorgt voor sociale contacten", "... verhoogt je zelfrespect"]
                },
            ]
        },
        {
            title: "Doorwerkers vs. verzuimers",
            cardContents: [
                {
                    type: "Text",
                    content: "Doorwerkers rapporteren ongeveer evenveel pijn als verzuimers. Verzuimers zijn werknemers die niet gaan werken omwille van hun pijn. Bij doorwerkers heeft de pijn minder impact op hun dagelijks leven."
                },
                {
                    type: "Text",
                    content: ["Wist je dat ", {type: "bold", content:"doorwerkers"}, ":"]
                },
                {
                    type: "List",
                    content: ["een hogere levenskwaliteit hebben", "pijn beter accepteren", "minder negatieve gedachten hebben", "minder bewegingsangst hebben", "een hoger activiteitenniveau van 30% hebben", "een hoger gevoel van controle over het leven hebben"]
                },
                {
                    type: "Text",
                    content: ["ten opzichte van ", {type: "bold", content:"verzuimers"}, "?"]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/thumbs-up.jpg"
                },
            ]
        },
        {
            title: "Voorwaarden",
            cardContents: [
                {
                    type: "Text",
                    content: "Je kan inderdaad niet zomaar met om het even welke pijn blijven doorwerken."
                },
                {
                    type: "Text",
                    content: "Er zijn een aantal voorwaarden verbonden om te kunnen (blijven werken). We geven enkele voorbeelden, duid aan in welke jij je kan vinden:"
                },
                {
                    type: "Multiple-Choice",
                    id: "ACT-MOD-2-Q1",
                    options: [{id:"WORK_PRIVATE", text: "Regelmogelijkheden privé"}, {id:"WORK_MOTIVATION", text: "Werkmotivatie"}, {id:"WORK_SELFMANAGEMENT", text: "Zelfmanagementvaardigheden"}, {id:"WORK_PERSONAL", text: "Persoonlijke kenmerken"}, {id:"WORK_WORK", text: "Regelmogelijkheden werk"}],
                    needsSelectedAtLeast: 1,
                    needsSelectedAtMost: 5
                },
                {
                    type: "Break"
                },
                {
                    type: "Multitext-Input",
                    id: "ACT-MOD-2-T2",
                    text: "Kan je nog wat voorwaarden opsommen die jij nog belangrijk vindt?",
                    placeholder: "Schrijf ze hier neer:"
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Rusten en activiteiten vermijden is niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Daarnaast zetten je hersenen ook pijndempende stoffen vrij tijdens het bewegen. Werk en activiteiten kunnen je afleiden van je pijn. Door te lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven."
                },
                {
                    type: "List",
                    overview: true,
                    content: ["Geeft je energie", "Erkenning", "Zelfrespect", "Sociale steun", "Waardering", "Geeft je structuur", "Afleiding van pijn"]
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

const ACTMOD3ERGO = {
    id: "ACT_MOD_3",
    title: "Ergonomie",
    titleMarkup: ["Belasting -", "Ergonomie"],
    shortTitle: "Ergonomie",
    part: 3,
    description: "Heb jij soms pijn bij het uitvoeren van werkgerelateerde taken? Weet je niet goed hoe je een taak op een ergonomische manier kan uitvoeren? Lees dan zeker deze module!",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-ergo",
    icon: "ergo",
    imageWidth: "180px",
    cards: [{
            title: "Ergonomie",
            cardContents: [
                {
                    type: "Text",
                    content: "Je lichaamshouding en de manier waarop je beweegt en handelingen uitvoert, bepalen mee hoe zwaar je lichaam wordt belast. Verschillende factoren kunnen fysieke klachten in de hand werken:",
                },
                {
                    type: "List",
                    content: ["Een slappe of een te gespannen lichaamshouding", "Snelle of bruuske bewegingen", "Een zware last tillen vanuit een ongunstige houding","Langdurig in eenzelfde houding staan", "Repetitieve bewegingen"]
                },
                {
                    type: "Text",
                    content: "Door aandacht te besteden aan je houding, je bewegingen en de uitvoering van je handelingen kun je de fysieke belasting verminderen.",
                },
            ]
        },
        {
            title: "Doe de test",
            cardContents: [
                {
                    type: "Text",
                    content: "Sta even recht en doorloop nu volgende stappen:"
                },
                {
                    type: "List",
                    content: ["Spreid de benen en buig lichtjes door de knieën.", "Plaats de handen in de zij.", "Kantel je bekken zo ver mogelijk naar achteren door bil- en buikspieren aan te spannen zodat de holte in je onderrug wordt uitgevlakt (= zitvlak intrekken).", "Kantel dadelijk hierna je bekken naar voren door de rugspieren aan te spannen zodat de holte in je onderrug groter wordt (= zitvlak uitsteken naar achteren)."]
                },
                {
                    type: "Text",
                    content: ["Je ziet en je voelt, de wervelkolom is geen rechte staaf! Ze heeft drie natuurlijke krommingen. Wat is de natuurlijke kromming van je  ", {type:"bold", content:"onderrug"}, "?"]
                },
                {
                    type: "Selection",
                    id: "ACT-MOD-3-Q1",
                    options: ["Onderrug hol", "Onderrug bol"]
                },
                {
                    type: "Text",
                    content: ["En wat is de natuurlijke kromming van je  ", {type:"bold", content:"bovenrug"}, "?"]
                },
                {
                    type: "Selection",
                    id: "ACT-MOD-3-Q2",
                    options: ["Bovenrug hol", "Bovenrug bol"]
                },
                {
                    type: "Text",
                    content: ["Ten slotte, wat is de natuurlijke kromming van je  ", {type:"bold", content:"nek"}, "?"]
                },
                {
                    type: "Selection",
                    id: "ACT-MOD-3-Q3",
                    options: ["Nek hol", "Nek bol"]
                },
            ]
        },
        {
            title: "Wervelkolom",
            showIfAnswered: ["ACT-MOD-3-Q1", "ACT-MOD-3-Q2", "ACT-MOD-3-Q3"],
            cardContents: [
                {
                    type: "Text",
                    content: "Als je de wervelkolom in zijaanzicht bekijkt, zie je drie natuurlijke krommingen."
                },
                {
                    type: "List",
                    content: [[{type: "bold", content:"Nek"}, ": holle kromming ", {type: "italic", content:"(cervicale lordose)"}], [{type: "bold", content:"Romp"}, ": bolle kromming ", {type: "italic", content:"(thoracale kyfose)"}], [{type: "bold", content:"Rug"}, ": lichte holle kromming ", {type: "italic", content:"(lumbale lordose)"}]]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/back.jpg"
                },
                {
                    type: "Text",
                    content: "De krommingen zorgen voor een optimaal evenwicht tussen enerzijds de beweeglijkheid en anderzijds de stabiliteit van de wervelkolom. Weet dat de rug ook gemaakt is om te bewegen. Bij taken met een grotere belasting (vb. tillen, langdurig of herhaaldelijk dezelfde houding aannemen) probeer je best deze natuurlijke krommingen te behouden."
                },
            ]
        },
        {
            title: "Basisprincipes om je omgeving aan te passen",
            cardContents: [
                {
                    type: "Text",
                    content: "Wanneer je ergonomisch werkt, kan je er zelf voor zorgen dat de belasting minder zwaar doorweegt. Zorg er eerst voor dat de omstandigheden zo ergonomisch mogelijk zijn. Enkele tips:"
                },
                {
                    type: "List",
                    content: ["Voorzie de juiste hulpmiddelen en /of materiaal en gereedschap (bv. bij het dweilen een voldoende lange steel, liefst tot aan je neus)", "Schuif, duw, of trek een last", "Verwijder obstakels, hindernissen", "Werk op een goede hoogte", "Vraag hulp", "Creëer bewegingsruimte", "Richt de werkplek goed in", "Verklein de reikafstand", "Maak de last lichter", "Beperk de loopafstand met de last", "Wissel houdingen/activiteiten af en beweeg", "Draag aangepaste kledij en schoenen"]
                },
            ]
        },
        {
            title: "Basisprincipes om je handelingen aan te passen",
            cardContents: [
                {
                    type: "Text",
                    content: "Daarnaast is het belangrijk om je eigen handelingen te optimaliseren. Gebruik onderstaande zes basisprincipes om een goede houding aan te nemen."
                },
                {
                    type: "Todo-Foto",
                },
                {
                    type: "Todo-Brochure",
                },
            ]
        },
        {
            title: "Welke sector",
            cardContents: [
                {
                    type: "Text",
                    content: "Duid aan welk van de drie activiteiten het beste past bij jouw situatie (werk en vrije tijd). Je kan meerdere activiteiten aanduiden, indien er meerdere voor jou van toepassing zijn."
                },
                {
                    id: "ACT-MOD-3-MULTISELECT",
                    type: "Multiple-Choice",
                    options: [{id: "FYS_WORK", text: "Fysiek werk"}, {id: "CARE_WORK", text: "Zorghandelingen"}, {id: "OFFICE_WORK", text: "Kantoor/Bureauwerk"}],
                    needsSelectedAtLeast: 1,
                    needsSelectedAtMost: 2,
                },
            ]
        },
        {
            title: "Principes voor fysiek werk",
            titleCard: true,
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: []
        },
        {
            title: "Principe 1 - Sta in evenwicht",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/cleaning.jpg"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/cleaning.jpg"
                },
                {
                    id: "ACT-MOD-3-FYS-Q1",
                    type: "Question",
                    question: "Staan deze personen in evenwicht?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Deze persoon hebben een smalle steunbasis. De voeten staan bijna tegen elkaar. Je ziet ook dat de hielen loskomen van de grond. Dit is dus een onstabiele houding. Bovendien is het langdurig werken in een gehurkte houding erg belastend voor het kniegewricht.",
                    onCorrect: "Interdaad!",
                    onIncorrect: "Nee, ze staan niet in evenwicht!"
                }
            ]
        },
        {
            showIfAnswered: ["ACT-MOD-3-FYS-Q1"],
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/drill.jpg"
                },
                {
                    type: "Text",
                    content: "Hier staat de persoon in evenwicht, en heeft hij een brede steunbasis. Hierdoor sta je niet alleen stabieler, maar ga je ook meer kracht kunnen leveren. Bovendien zal je vanuit deze positie minder diep door de knieën moeten buigen om iets op te rapen. Zoek tijdens het tillen naar bijkomende steunpunten in je omgeving (bijv. op een tafel, kast, muur …) of op je eigen lichaam (bijv. bovenbenen)."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/foot_positioning.png"
                },
            ]
        },
        {
            title: "Principe 2 - Houd gewrichten in neutrale zone",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "De neutrale zone is die zone waarin je gewrichten het minst belast worden en je spieren het efficiëntst kunnen werken. Hou alvast rekening met de volgende basisprincipes:"
                },
                {
                    type: "List",
                    content: [[{type: "bold", content: "Wervelkolom"}, ": behoud zo veel mogelijk de neutrale krommingen"], [{type: "bold", content: "Knieën "}, {type: "italic", content: "(tijdens het tillen)"}, ": buig niet dieper dan 90°"], [{type: "bold", content: "Knieën "}, {type: "italic", content: "(tijdens het stilstaan)"}, ": buig knieën lichtjes en overstrek ze niet"], [{type: "bold", content: "Schouders"}, ": houd bovenarmen zo dicht mogelijk bij je romp, je schouder ontspannen (niet optrekken en lichtjes naar achteren)"], [{type: "bold", content: "Pols"}, ": behoud zo veel mogelijk de verticale stand van de pols (zoals een hand geven)"]]
                },
            ]
        },
        {
            title: "Principe 3 - Werk met handen dicht bij romp",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "In het derde basisprincipe proberen we zo dicht mogelijk met de handen bij de romp te werken;  Dit verkleint de hefboom; hoe kunnen we dit nu doen?"
                },
                {
                    type: "List",
                    content: ["Breng het werk of de last dicht naar je toe", "Verplaats je dichter naar het werk of naar de last"]
                },
            ]
        },
        {
            title: "Principe 4 - Gebruik je lichaamsgewicht en beenspieren",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Je beenspieren zijn de sterkste spieren in je lichaam. Gebruik deze zoveel mogelijk. Wanneer je iets moet tillen van de grond, buig dan goed door je knieën (buig niet dieper dan een hoek van 90° in de knieën) en breng je rug niet te ver naar voren. Je lichaamsgewicht kun je effectief inzetten tijdens het trekken en duwen."
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Trekken of duwen?"}]
                },
                {
                    id: "ACT-MOD-3-FYS-Q2",
                    type: "Question",
                    question: "Is het trekken of duwen van zware lasten beter voor je lichaam?",
                    options: ["Trekken", "Duwen"],
                    correct: "Duwen",
                    explanation: "Het zorgt voor minder belasting van de schouders, door het inzetten van je eigen lichaamsgewicht. Het is ook minder vermoeiend.",
                    onCorrect: "Duwen is inderdaad beter dan trekken!",
                    onIncorrect: "Fout, duwen is juist beter dan trekken."
                }
            ]
        },
        {
            title: "Principe 5 - Zet de beweging rustig in",
            showIfAnswered: ["ACT-MOD-3-FYS-Q2"],
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "List",
                    content: ["Sta in evenwicht", "Gebruik steeds twee (gestrekte) armen zodat schouders en rug symmetrisch worden belast", "Zet de beweging rustig in. Gebruik de 3 seconden-regel: neem altijd drie tellen de tijd om een kar rustig in  beweging te krijgen"]
                },
            ]
        },
        {
            title: "Principe 6 - Beweeg handen en voeten in dezelfde richting",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "FYS_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/boxes.jpg"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/lifting.jpg"
                },
                {
                    id: "ACT-MOD-3-FYS-Q3",
                    type: "Question",
                    question: "Bewegen deze personen hun handen en voeten in dezelfde richting?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Beide personen roteren hun rug tijdens het uitvoeren van hun taak. Je beweegt je handen en voeten best in dezelde richting. Door handen en voeten in dezelfde richting te bewegen, vermijd je rotaties ter hoogte van de rug. Hierdoor zorg je ervoor dat het lichaam zich altijd mee verplaatst op een rugvriendelijke manier.",
                    onCorrect: "Nee, inderdaad.",
                    onIncorrect: "Juist niet."
                }
            ]
        },
        {
            title: "Principes voor kantoorwerk",
            titleCard: true,
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: []
        },
        {
            title: "Principe 1 - Sta in evenwicht",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
               {
                   type: "Text",
                   content: "In zittende positie zit je best op een stabiele stoel met je voeten plat op de grond. Een brede steunbasis zorgt er eveneens voor dat je goed ondersteunt wordt in je zittende werkhouding."
               },
               {
                   type: "Text",
                   content: "Het is belangrijk om het zittend werken af te wisselen met .bv. staand werken of vergaderen. Waar kan je op letten wanneer je rechtstaat vergadert?"
               },
               {
                   type: "List",
                   content: ["Zet je voeten op heupbreedte", "Neem af en toe een steunpunt. Leun bv. tegen de tafel", ["Varieer regelmatig van houding houding ", {type:"italic", content: "(bijvoorbeeld: beweeg je lichaamsgewicht van het ene been naar het andere)"}]]
               }
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: [{type:"bold", content:"Varieer - beweeg - doseer"}]
                },
                {
                    type: "Text",
                    content: "Probeer zo veel mogelijk te variëren van houding, beweeg en sta. Sta niet meer dan 30 min aan één stuk."
                },
                {
                    type: "List",
                    content: ["Verdeel je gewicht over je beide benen en voeten.", "Plaats je voeten op gelijke lijn met je schouders.", "Buig lichtjes door de knieën.", "Voorkom een ‘doorgezakte’ houding.", "Trek je schouderbladen naar achteren en werk aan je schouders door ze te laten ‘rollen’. Hoe doe je dat? Beweeg je schouders van voren naar achteren, ontspan ze en laat ze dan weer op hun plaats ‘vallen’.", "Hou je kin lichtjes ingetrokken en omhoog: een kleine moeite, maar van groot belang voor een goede lichaamshouding."]
                }
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Een goed evenwicht zoeken tussen zitten en staand werken is een uitdaging. Hieronder geven we enkele tips mee:"
                },
                {
                    type: "TextBubble",
                    content: "Een korte vergadering? Vergader eens staand. Zo kom je sneller tot betere besluiten en duurt het overleg korter."
                },
                {
                    type: "TextBubble",
                    content: "Integreer werkvormen die af en toe rechtstaan vereisen.",
                    float: "right"
                },
                {
                    type: "List",
                    content: ["Een brainstormsessie met post-its die je ergens op moet plakken.", "Een vragenronde waarbij iedereen die akkoord is met een stelling recht staat.", "Een overleg waarbij degene die aan het woord is, rechtstaat.", "Brainstorm in groepjes met rotatie."]
                },
                {
                    type: "TextBubble",
                    content: "Neem in een ruimte alle stoelen eens weg, zo ervaar je om rechtstaand te vergaderen.",
                },
                {
                    type: "TextBubble",
                    content: "Voorzie kleine beweegmomenten in je vergadering.",
                    float: "right"
                },
                {
                    type: "List",
                    content: ["Vergader op een andere verdieping of in een ander gebouw. Zo beweeg je al voor je in de vergadering toekomt. Gebruik de trap in plaats van de lift.", "Spreek vooraf af met iemand om het sein te geven voor een korte beweegpauze."]
                }
            ]
        },
        {
            title: "Principe 2 - Houd gewrichten in neutrale zone",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_voorover.jpg"
                },
                {
                    id: "ACT-MOD-3-OFFICE-Q1",
                    type: "Question",
                    question: "Neemt onderstaande persoon een goede houding aan?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Dit is een foute houding. We gaan je nu uitleggen waarom.",
                    onCorrect: "Correct.",
                    onIncorrect: "Helaas."
                }
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            showIfAnswered: ["ACT-MOD-3-OFFICE-Q1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Wanneer je werkt aan een laptop, is je nek voorovergebogen. Als je gedurende meer dan 30 min aan één stuk gebruik maakt van een laptop is het aangewezen om een laptophouder, dockingstation (op hoogte) of een extra scherm in combinatie met een extern toetsenbord en muis te voorzien. Plaats de bovenkant van het scherm op ooghoogte."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_zitten.jpg"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_scherm.jpg"
                },
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/zitten_incorrect.png"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/zitten_correct.png"
                },
                {
                    id: "ACT-MOD-3-OFFICE-Q2",
                    type: "Question",
                    question: "Op welke van de bovenstaande twee foto's heeft de persoon haar bureaustoel goed ingesteld?",
                    options: ["Bovenste foto", "Onderste foto"],
                    correct: "Onderste foto",
                    explanation: "Op de bovenste foto staat de bureaustoel te laag waardoor de knieën zich boven de heupen bevinden. Hierdoor wordt de rug afgevlakt en ga je doorhangen in de onderrug. Stel de hoogte van je bureaustoel zo in dat je bovenbenen lichtjes afhellen.",
                    onCorrect: "Correct.",
                    onIncorrect: "Niet correct."
                }
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            showIfAnswered: ["ACT-MOD-3-OFFICE-Q2"],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_knie.jpg",
                },
            ]
        },
        {
            title: "Principe 3 - Handen dichtbij de romp",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_voorover.jpg"
                },
                {
                    id: "ACT-MOD-3-OFFICE-Q3",
                    type: "Question",
                    question: "Op deze foto zie je dat de persoon een ‘doorgezakte’ houding heeft ter hoogte van de bovenrug. Hoe komt dit?",
                    options: ["Toetsenbord te ver van tafelrand", "Tafel te hoog", "Tafel te laag"],
                    correct: "Toetsenbord te ver van tafelrand",
                    explanation: "Het toetsenbord ligt inderdaad te ver van de rand van de tafel, waardoor deze persoon zich voorover moet buigen om er aan te kunnen. De persoon heeft trouwens ook geen armsteunen, wat bijdraagt voor de slechte houding.",
                    onCorrect: "Juist!",
                    onIncorrect: "Dat is niet juist."
                }
            ]
        },
        {
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            showIfAnswered: ["ACT-MOD-3-OFFICE-Q3"],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier enkele tips om je handen dichtbij je romp te houden:"
                },
                {
                    type: "List",
                    content: ["Plaats het klavier voldoende kort (5 tot 15 cm) tegen de rand van het bureau met de muis er vlak naast.", "Zet het bureau op dezelfde hoogte als de ellebogen: ellebogen 90° en schouders ontspannen.", "Is je bureautafel te hoog? Verhoog je stoel en gebruik een voetensteun.", "Is je bureautafel te laag? Probeer de tafel te verhogen door bijvoorbeeld blokjes onder de tafel te plaatsen.", "Kies liefst voor een bureaustoel met armsteunen. Zijn die er niet? Schuif dan met je buik tot tegen de bureautafel."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_docuhouder.jpg"
                },
                {
                    type: "Text",
                    content: "Tip: Werk je vaak met documenten? Gebruik een documentenhouder en plaats deze tussen het toetsenbord en het scherm."
                }
            ]
        },
        {
            title: "Principe 4 - Gebruik je lichaamsgewicht en beenspieren",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Til een papierendoos op. Wat ervaar je?"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Je beenspieren zijn de sterkste spieren in je lichaam. Gebruik deze zoveel mogelijk. Wanneer je iets moet tillen van de grond, buig dan goed door je knieën. Let op: buig niet dieper dan een hoek van 90° in de knieën en beweeg in de natuurlijke krommingen van je rug."
                }
            ]
        },
        {
            title: "Principe 5 - Zet de beweging rustig in",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Langzaam opbouwen van de kracht is de boodschap! Er is een spectaculair verschil tussen een snelle en rustige start bij duw- en trekbewegingen. Je hebt minder kracht nodig en het is minder belastend indien je een kracht langzaam opbouwt in drie tellen. Als je snel en hevig te werk gaat, ontstaan er enorme piekkrachten in je lichaam."
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Je beenspieren zijn de sterkste spieren in je lichaam. Gebruik deze zoveel mogelijk. Wanneer je iets moet tillen van de grond, buig dan goed door je knieën. Let op: buig niet dieper dan een hoek van 90° in de knieën en beweeg in de natuurlijke krommingen van je rug."
                }
            ]
        },
        {
            title: "Principe 6 - Beweeg je handen en voeten in dezelfde richting",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Door handen en voeten in dezelfde richting te bewegen, vermijd je rotaties ter hoogte van de rug. Hierdoor zorg je ervoor dat het lichaam zich altijd mee verplaatst op een rugvriendelijke manier."
                },
            ]
        },
        {
            title: "Stappenplan: stel je werkplek correct in",
            showIf: [{rule: "HasSelected", questionID: "ACT-MOD-3-MULTISELECT", answerID: "OFFICE_WORK"}],
            cardContents: [
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 1: De bureaustoel correct instellen"}]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_knie.jpg"
                },
                {
                    type: "List",
                    content: ["Ga diep in de stoel zitten.", "Kies voor een open hoek: bovenbeen licht afhellend.", "Voor de zitdiepte moeten er 4 vingers tussen zitting en knieholte zijn.", "Zorg voor een goede rugsteun door een bolling te maken tegen de lage rug of lende.", "Plaats de armsteunen (indien u hierover beschikt) op ellebooghoogte met ontspannen schouders.", "Zit dynamisch en stel de bureaustoel in op het lichaamsgewicht."]
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 2: Bureauhoogte"}]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_elleboog.jpg"
                },
                {
                    type: "List",
                    content: ["Zet het bureau op dezelfde hoogte als de ellebogen: ellebogen 90° en schouders ontspannen.", "Is je bureautafel te hoog? Verhoog je stoel en gebruik een voetensteun.", "Is je bureautafel te laag? Probeer de tafel te verhogen door bijvoorbeeld blokjes onder de tafel te plaatsen.", "Kies liefst voor een bureaustoel met armsteunen. Zijn die er niet? Schuif dan met je buik tot tegen de bureautafel."]
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 3: Scherm"}]
                },
                {
                    type: "Text",
                    content: "Plaats het externe scherm of de laptop op armlengte en de bovenrand van het scherm op ooghoogte."
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 4: Toetsenbord"}]
                },
                {
                    type: "Text",
                    content: "Plaats het klavier voldoende kort (5 tot 15 cm) tegen de rand van het bureau met de muis er vlak naast."
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 5: Documenten"}]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/beeldschermwerk_docuhouder.jpg"
                },
                {
                    type: "Text",
                    content: "Werken je vaak met documenten? Gebruik een documentenhouder en plaats deze tussen het toetsenbord en het scherm. scherm, liefst lichtjes gekanteld naar hen toe."
                },
                {
                    type: "Text",
                    content: [{type:"bold", content:"Stap 6: Beweeg en varieer"}]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/meeting.jpg"
                },
                {
                    type: "Text",
                    content: "Doe aan actief zitten. Verander regelmatig van houding, werk eens rechtstaand, of ga even op een andere soort stoel zitten (bijvoorbeeld een zitbal). De beste houding ... is de volgende!"
                }
            ]
        },
        {
            title: "Overzicht",
            showIfAnswered: ["ACT-MOD-3-MULTISELECT"],
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Je lichaamshouding en de manier waarop je beweegt en handelingen uitvoert, bepalen mee hoe zwaar je lichaam wordt belast. Een slappe of een te gespannen lichaamshouding, bruuske bewegingen of een zware last tillen vanuit een ongunstige houding kan fysieke klachten in de hand werken. Door aandacht te besteden aan je houding, je bewegingen en de uitvoering van je handelingen kun je de fysieke belasting verminderen."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/fys_principes.png",
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

const ACTMOD4MGMT = {
    id: "ACT_MOD_4",
    title: "Activiteitenmanagement",
    titleMarkup: ["Activiteiten-", "management"],
    shortTitle: "Act.management",
    part: 4,
    description: "In de module activiteitenmanagement krijg je tips om beter te leren omgaan met je energie.",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-mgmt",
    icon: "writing",
    imageWidth: "240px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "In het onderdeel activiteitenmanagement geven we je een leidraad mee om een beter evenwicht te vinden tussen activiteit en rust om zo binnen je eigen grenzen actiever te worden. Activiteitenmanagement heeft als doel (beter) te leren omgaan met je energie. Verwacht niet dat je onmiddellijk meer actief zal zijn, maar op lange termijn is dit wel de doelstelling. Op korte termijn is het de bedoeling om je activiteiten vooraf in te plannen en je activiteiten geleidelijk op te bouwen."
                },
            ]
        },
        {
            title: "Activiteitenpatronen",
            cardContents: [
                {
                    type: "Text",
                    content: "Er zijn 4 activiteitenpatronen of niveaus die frequent voorkomen:"
                },
                {
                    type: "List",
                    content: [[{type: "bold", content: "Laag activiteitenniveau"}, ": Deze personen voeren over het algemeen weinig activiteiten uit. Of, in geval van pijn, hebben de neiging om activiteiten te vermijden. Voldoende bewegen en het uitvoeren van waardevolle activiteiten is echter super belangrijk. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Door een laag activiteitenniveau wordt je lichaam zwakker waardoor het de belasting in je dagelijks leven minder goed aan kan. Naast de lichamelijke voordelen dragen waardevolle activiteiten ook bij aan je mentale welzijn. Ook bij pijn zijn beweging en zoveel mogelijk je normale activiteiten verderzetten essentieel voor het herstelproces. Krijg je bijvoorbeeld veel last tijdens een specifieke activiteit, dan kan je nog altijd verder gaan met iets anders in plaats van lang te rusten of in de zetel te hangen."], [{type: "bold", content: "Fluctuerend activiteitenpatroon"}, ": Bij mensen met een fluctuerend patroon varieert de hoeveelheid activiteiten sterk van dag tot dag. Hoewel een evenwichtig activiteitenpatroon beter is, is dit niet noodzakelijk een probleem. Tenzij jij je laat leiden door je klachten. Dit wil zeggen dat je op goede dagen heel veel doet en de dagen nadien maar heel weinig kan doen door een sterke toename van je klachten. Deze sterk afwisselende over- en onderbelasting brengt je op termijn nergens. Ook al vind je het niet altijd gemakkelijk om te stoppen wanneer je een activiteit wilt afwerken, toch is het belangrijk om een pauze in te lassen of een andere activiteit te doen wanneer je een sterke toename van je klachten krijgt. Lukt dat je, dan boek je winst. Je gaat minder in het rood en hoeft minder te herstellen, waardoor de daaropvolgende dagen een stuk comfortabeler zijn."], [{type: "bold", content: "Belastend activiteitenpatroon"}, ": Deze mensen hebben constant een hoog activiteitenniveau of voeren veel activiteiten uit die ze als belastend ervaren. Steeds activiteiten uitvoeren die belastend zijn of elke dag in het rood gaan, is uitputtend voor je lichaam. Op een moment zal dit zich wreken. Daarom is het belangrijk om af te wisselen met activiteiten die minder belastend zijn en rustmomenten in te lassen."], [{type: "bold", content: "Evenwichtig activiteitenpatroon"}, ": mensen met een evenwichtig activiteitenpatroon hebben een goede balans gevonden tussen rust en activiteit. Ze wisselen zwaardere taken af met minder zware taken. Ze bewegen voldoende, maar plannen ook voldoende rust in."]]
                }
            ]
        },
        {
            title: "Doelen en opbouwschema",
            showIf: [{rule:"HasNotUnlockedShortcut", shortcut: "GOALSETTING"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Om te beginnen is het belangrijk om stil te staan bij welke activiteiten voor jou belangrijk zijn. Het stellen van doelen maakt heel duidelijk wat belangrijk voor je is en wat je wilt bereiken (of je nu last hebt van pijn of niet). Stel dat jij bijvoorbeeld veel belang hecht aan gezondheid en zelfzorg. Dan kan je dit in je leven incorporeren door een marathon te lopen, maar evenzeer door dagelijks een wandeling rond de blok te doen of ook door voldoende rustmomenten in te bouwen of door op je voeding te letten,... Stel dat jij belang hecht aan het leveren van een zinvolle bijdrage, dan zou je dat kunnen doen door te gaan werken, door vrijwilligerswerk te doen, door boodschappen te doen voor je zieke buurvrouw,... Of stel dat je graag meer quality time wilt met je familie. Bijvoorbeeld door wekelijks met je ouders te bellen of door de kinderen met de fiets naar school te brengen."
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Hier zijn alvast enkele tips bij het stellen van doelen:"
                },
                {
                    type: "List",
                    numbered: true, 
                    content: ["Laat je leiden door je visie, waarden en principes: Doelen kies je in functie van wat voor jou als belangrijk aanvoelt, hoe je je leven wilt leiden. Omgekeerd kan het stellen van een doel dat indruist tegen een belangrijke waarde, ongewenste effecten met zich meebrengen.", "Maak concrete doelen: Je kan een doel pas bereiken als je weet wat je hiervoor moet doen. Werken aan je gezondheid is bijvoorbeeld geen doel, maar een waarde (je hecht belang aan jouw gezondheid). Een concreet doel om deze waarde te bereiken kan zijn dat je dagelijks een wandeling van 30 minuten maakt, of dat je maar 1 keer per week een dessertje eet.", "Stel realistische doelen: Een goed gekozen doen kan je bereiken. Onrealistische doelen werken heel demotiverend en de kans is groot dat je vroegtijdig afhaakt. Stel je doet zelden iets van sport, dan is het niet het beste plan om onmiddellijk een marathon als doel te neme. Je kan beter starten met een doel van 5km, dan 10km, enz.", "Houd rekening met de termijn: Hoe verder weg in de toekomst een bepaald doel ligt, hoe moeilijker het wordt om dit te bereiken. Splits daarom ambitieuze doelen op in tussentijdse doelen, zo bewaar je het overzicht. Let op dat je je ook niet laat leiden door strakke tijdschema's, ook al kan door sociale of andere druk de tijd een belangrijke factor worden. Strakke tijdschema’s werken meestal stress verhogend en dreigen ons uit evenwicht te brengen. Bovendien werken ze demotiverend, doordat we ons teleurgesteld voelen als we bepaalde doelen niet bereiken binnen de gestelde termijn."]
                }
            ]
        },
        {
            title: "Voorbeelden",
            showIf: [{rule:"HasNotUnlockedShortcut", shortcut: "GOALSETTING"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier volgen 2 voorbeelden van hoe je goede doelen kan stellen."
                },
                {
                    type: "List",
                    numbered: true, 
                    content: ["Els is 35 jaar, getrouwd, heeft een dochter van 5 jaar en werkt op een kantoor. Ze heeft tijdens het werken geregeld last van haar nek, zeker op dagen dat ze vaak met klanten moet bellen. Omdat gezondheid een belangrijke rol heeft in haar leven, wilt ze hieraan werken. Ze weet dat het belangrijk is om te bewegen en regelmatig van houding te wisselen. Daarom neemt ze haar voor om 2 minuten recht te staan en te bewegen na ieder uur te werken.", "Paul is 52 jaar, gescheiden, zijn kinderen zijn al uit huis en werkt als schrijnwerker. Zijn vrienden gaan iedere zaterdag 100 km samen fietsen. Omdat hij veel belang hecht aan vriendschap, zou hij graag meegaan. Conditioneel is hij nog niet zo sterk en hij heeft ook wat last van zijn knie. Daarom besluit hij om zijn fietsen op te bouwen. Hij wilt 1 keer per week trainen en op zaterdag rijdt hij een stukje mee met zijn vrienden."]
                },
                {
                    type: "Text",
                    content: "Sommige doelen zal je niet zomaar kunnen bereiken. Hiervoor heb je een goed opbouwschema nodig. Ook om je belastbaarheid te verhogen en actiever te worden is een veilig opbouwschema essentieel."
                }
            ]
        },
        {
            title: "Opbouwschema",
            showIf: [{rule:"HasNotUnlockedShortcut", shortcut: "GOALSETTING"}],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier heb je een overzicht van hoe je een opbouwschema kan maken:"
                },
                {
                    type: "Text",
                    content: "Om je activiteitenniveau langzaam op te gaan bouwen moeten we eerst je basisniveau vaststellen. Je basisniveau bepaal je door de tijd te meten dat je met een activiteit bezig kunt zijn totdat je moe wordt of de pijn toeneemt. Je bepaalt je basisniveau liefst meerdere keren, zodat je een betrouwbaar gemiddelde krijgt. Je hebt namelijk goede en slechte dagen. Van deze basis haal je 20% af om je startniveau te bepalen. Houd dit één tot twee weken vol, afhankelijk van je hersteltijd. Daarna breiden we uit met ± 10%. Wanneer je gaat opbouwen mag de hersteltijd niet toenemen. Het kan zijn dat pijn en vermoeidheid erger worden, maar dat is niet erg, zolang de hersteltijd maar niet langer wordt. Het is super belangrijk dat je je aan het schema houdt. Hoe verleidelijk misschien ook, maar het is niet goed dat je al je activiteiten tegelijk gaat opbouwen."
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Hier volgen 2 voorbeelden:"
                },
                {
                    type: "List",
                    content: ["Na 10 minuten fietsen neemt mijn pijn toe. Dan is je startniveau 8 minuten. Na één tot twee weken verhoog je dit naar 9 minuten.", "Na 500 meter stappen neemt mijn pijn toe. Dan is je startniveau 400 meter. Na één tot twee weken verhoog je dit naar 440 meter."]
                },
                {
                    type: "Text",
                    content: "Nu is het aan jou! We hebben een handige tool toegevoegd aan de shortcuts, waarmee je zelf persoonlijke doelen kan stellen. De app kan ook automatisch een opbouwschema maken voor doelen waar dit nodig is (bijvoorbeeld als je wilt opbouwen naar 10 000 stappen per dag)."
                }
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: true,
            text: "Voltooi onderdeel belasting",
            textOnCompleted: "Keer terug",
            action: "UnlockActivityLogbook"
        },
    ]
}

const ACTMOD5 = {
    id: "ACT_MOD_5",
    title: "Belastbaarheid",
    titleMarkup: ["Wat is belast-", "baarheid?"],
    shortTitle: "Belastbaarheid",
    part: 5,
    description: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aan kan. Hoe is jouw belastbaarheid? In deze module krijg je handvaten om je belastbaarheid te verhogen.",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-intro",
    icon: "lifting",
    imageWidth: "200px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: ["Welzijn, je lichamelijk en mentaal goed voelen bereik je wanneer de ", {type: "bold", content:"belasting"}, " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content:"belastbaarheid"}, " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan. Wat doe jij om je belastbaarheid zo hoog mogelijk te houden?"]
                },
            ]
        },
        {
            title: "Wat doe jij?",
            cardContents: [
                {
                    id: "ACT-MOD-5-SWIPE",
                    type: "Swipe",
                    buttons: {disagree: "Nee", agree: "Ja"},
                    options: [
                        {
                            id: "ACT_MOD_5_SWIPE_SLEEP",
                            text: "Ik heb een vast slaapritueel",
                            image: "/images/activitywork/slaapritueel.jpg"
                        },
                        {
                            id: "ACT_MOD_5_SWIPE_REST",
                            text: "Ik bouw regelmatig een rustmoment in",
                            image: "/images/activitywork/rustmomenten.jpg"
                        },
                        {
                            id: "ACT_MOD_5_SWIPE_EAT",
                            text: "Ik eet gezond",
                            image: "/images/activitywork/food.jpg"
                        },
                        {
                            id: "ACT_MOD_5_SWIPE_DRINK",
                            text: "Ik beperk mijn alcoholinname",
                            image: "/images/activitywork/drinken.jpg"
                        },
                        {
                            id: "ACT_MOD_5_SWIPE_SMOKE",
                            text: "Ik rook",
                            image: "/images/activitywork/smoking.jpg"
                        },
                        {
                            id: "ACT_MOD_5_SWIPE_MOVE",
                            text: "Ik beweeg gemiddeld 30 minuten per dag aan een matige intensiteit (bv. wandelen, fietsen)",
                            image: "/images/activitywork/bewegen.jpg"
                        }
                    ]
                },
            ]
        },
        {
            title: "Basisprincipes om je omgeving aan te passen",
            cardContents: [
                {
                    type: "Text",
                    content: ["We kunnen ons lichaam fit houden door in te zetten op gezonde beweging en gezonde voeding. Ook voldoende nachtrust draagt bij tot een fit lichaam en een fitte geest. Besteed bovendien aandacht aan je eigen veerkracht en zorg voor een ", {type: "italic", content: "gezonde geest in een gezond lichaam"}, ". Streef naar een evenwicht in je lichamelijke en mentale belastbaarheid. ", {type: "italic", content: "Roken en alcoholgebruik kunnen een negatieve invloed hebben"}, " op je gezondheid."]
                },
                {
                    type: "Text",
                    content: "Op deze thema’s gaan we verder inzoomen."
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true, 
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: ["Welzijn, je lichamelijk en mentaal goed voelen bereik je wanneer de ", {type: "bold", content:"belasting"}, " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content:"belastbaarheid"}, " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan. Wat doe jij om je belastbaarheid zo hoog mogelijk te houden?"]
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

const ACTMOD6MOV = {
    id: "ACT_MOD_6",
    title: "Gezond bewegen",
    titleMarkup: ["Belastbaarheid -", "Gezond bewegen"],
    shortTitle: "Gezond bewegen",
    part: 6,
    description: "Hoe kan je gezond bewegen inbouwen in jouw dagelijks leven? Dit leer in je deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-mov",
    icon: "running",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Voldoende fysieke activiteit houd je fit en gezond. Het versterkt spieren en botten, houdt je gewrichten soepel, verbetert de werking van je hart, verhoogt de concentratie, geeft een aangenaam gevoel en werkt pijndempend."
                },
            ]
        },
        {
            title: "Meer weten?",
            cardContents: [
                {
                    type: "Text",
                    content: "Wil je meer weten over dit topic? Klik dan op de brochure:"
                },
                {
                    type: "TODO - Brochure",
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

const ACTMOD7FOOD = {
    id: "ACT_MOD_7",
    title: "Gezonde voeding",
    titleMarkup: ["Belastbaarheid-", "Gezonde voeding"],
    shortTitle: "Gezonde voeding",
    part: 7,
    description: "Hoe kan je gezond bewegen inbouwen in jouw dagelijks leven? Dit leer in je deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-food",
    icon: "food",
    imageWidth: "180px",
    cards: [
        {
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Denk je dat voeding een invloed kan hebben op jouw pijn? Nee? Toch wel, ontdek wat chronische pijn te maken heeft met voeding en omgekeerd."
                },
            ]
        },
        {
            title: "Eten en diëten tegen chronische pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "Gewichtstoename, onregelmatige eetpatronen, het samengaan van twee of meer ziektebeelden… Ook chronische pijn heeft meer te maken met voeding dan je misschien zou denken. Gepaste voedselopname kan de werking van het zenuw- en het immuunsysteem en van het hormoonstelsel verbeteren, wat een directe invloed heeft op de pijnervaring. Op gewicht blijven of, nog beter, kilo’s verliezen verlicht de druk op de gewrichten houdt sluimerende ontstekingen klein."
                },
                {
                    id: "ACT-MOD-7-SLIDER-1",
                    type: "Slider",
                    text: "Ben je bewust van wat je eet?",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }
            ]
        },
        {
            title: "Eten en diëten tegen chronische pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "Veel mensen willen graag gezond(er) eten, maar weten niet precies hoe ze hun voedingspatroon kunnen aanpassen. Gezond eten betekent vooral dat je slimme, gezonde keuzes maakt. De drie belangrijkste principes zijn:"
                },
                {
                    type: "List",
                    content: ["Eet evenwichtig", "Eet met mate, niet te weinig maar ook niet te veel", "Eet gevarieerd, ga voor kleur op je bord"]
                },
            ]
        },
        {
            title: "Omega 3-vetzuren",
            cardContents: [
                {
                    type: "Text",
                    content: "Omega 3-vetzuren en olijfolie versterken je immuniteit en gaan ontstekingen tegen. Denk aan zalm en sardines (vette vis), lijnzaad- en koolzaadolie en walnoten om je omega 3-reserves aan te vullen."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/food.jpg"
                },
            ]
        },
        {
            title: "Vitamines",
            cardContents: [
                {
                    type: "Text",
                    content: "Houd je voorraad vitamines en mineralen op peil. Een tekort aan vitamine D, vitamine B12 en magnesium heeft een negatieve invloed op de pijnervaring: verslappende spieren, krampen,ontstekingen en zenuwpijn . Vlees, vis en zuivel zijn bronnen van vitamine B12. Vis en eieren zijn rijk aan vitamine D. Groene bladgroenten en volkorengranen bevatten veel magnesium. Vitamine D krijg je ook binnen door de zon."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/vitamine.jpg"
                },
            ]
        },
        {
            title: "Water",
            cardContents: [
                {
                    type: "Text",
                    content: "Drink voldoende water. Dehydratatie kan de pijngevoeligheid verhogen. Bij oudere mensen leidt het ertoe dat wonden slechter genezen. Twee tot drie liter per dag drinken is aangewezen."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/water.jpg"
                },
            ]
        },
        {
            title: "Minder suiker",
            cardContents: [
                {
                    type: "Text",
                    content: "Minder de inname van voeding en dranken met suiker. Die verhogen het risico op ontstekingen en oxidatie, wat een kwalijke impact heeft op de pijnervaring."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/suikers.jpg"
                },
            ]
        },
        {
            title: "Maak komaf met smoesjes!",
            cardContents: [
                {
                    type: "Text",
                    content: "Vaak praten we onszelf enkele smoesjes in om ons te doen geloven dat gezond eten niet haalbaar is. Maar we gaan met enkele voorbeelden aantonen waarom deze smoesjes toch niet goed zijn..."
                },
                {
                    type: "TextBubble",
                    content: "“Ik ontbijt niet want ik wil vermageren”"
                },
                {
                    type: "List",
                    content: ["Je eet de calorieën er toch weer aan!", "Niet ontbijten doet je in de loop van de voormiddag grijpen naar suikers en vetrijke tussendoortjes"]
                },
                {
                    type: "TextBubble",
                    content: "“Ik kan onmogelijk 300 gram groenten eten per dag”",
                    float: "right"
                },
                {
                    type: "List",
                    content: ["Zet voor het eten alvast een schaaltje met kerstomaten, stukjes komkommer of wortelreepjes op tafel", "Of zet een schaaltje snoepgroenten op je bureau of in de keuken naast je werkblad.", "Leg groenten tussen je boterhammen", "Verwerk ook groenten in puree", "Maak een lekkere, verse soep", "Haal diepvriesgroenten in huis: ze zijn op drukke dagen een goed en snel alternatief"]
                },
                {
                    type: "TextBubble",
                    content: "“Als tussendoortjes neem ik een koek, dit is makkelijk en snel”"
                },
                {
                    type: "List",
                    content: ["Eet fruit uit het vuistje: appel, peer, banaan, druiven, noten", "Ga voor hapklare groenten: komkommers, kerstomaatjes, paprikaatjes", "Maak je snoepgroenten (selder, worteltjes, bloemkool, paprika…) de avond voordien klaar en bewaar ze in de frigo", "Denk daar ook eens aan bij trakteren"]
                },
            ]
        },
        {
            title: "Voeding",
            cardContents: [
                {
                    type: "Text",
                    content: "De tijdstippen en regelmaat van wanneer je eet is ook heel belangrijk voor een evenwichtig eetpatroon."
                },
                {
                    id: "ACT-MOD-7-SLIDER-2",
                    type: "Slider",
                    text: "Ben je bewust van wanneer je eet?",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }
            ]
        },
        {
            title: "Tijdstip eten",
            cardContents: [
                {
                    type: "Text",
                    content: "Een paar tips die je op weg helpen:"
                },
                {
                    type: "List",
                    content: ["Regelmaat is belangrijk", "Eet zoveel mogelijk volgens een vast maaltijdpatroon (probeer de structuur van 3 hoofdmaaltijden zoveel mogelijk aan te houden).", "Neem een gezond tussendoortje, bijv. fruit, hapklare groenten, ...", "Te laat en te vet eten ligt zwaar op de maag en verstoort de slaap.", "Begin van de werkdag: eiwitten houden je wakker en alert. Bijvoorbeeld: yoghurt, mager vlees, noten, ...", "Einde van de werkdag: koolhydraten maken je slaperig. Bijvoorbeeld: brood, pasta, granen, fruit, ...", "Tijdens de nachtshift: licht verteerbaar voedsel.", "Na de nachtshift: een licht ontbijt met weinig eiwitten."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/food_clock.jpg"
                },
            ]
        },
        {
            title: "Voeding",
            cardContents: [
                {
                    type: "Text",
                    content: "Tijd voor de volgende reflectievraag over jouw voeding:"
                },
                {
                    id: "ACT-MOD-7-SLIDER-3",
                    type: "Slider",
                    text: "Eet je aandachtig?",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }
            ]
        },
        {
            title: "Mindful eten",
            cardContents: [
                {
                    type: "Text",
                    content: ["Om gezond te eten hoef je niets weg te laten uit je eetpatroon. Je voegt alleen iets toe: ’aandacht’. ", {type:"italic", content:"Mindful"}, " noemen we dat!"]
                },
                {
                    type: "List",
                    content: ["Hou je aandacht bij de eetervaring", "Maak gebruik van al je zintuigen. Ze helpen je om te genieten van je maaltijd en er met je aandacht bij te blijven", "Pauzeer regelmatig. Leg je bestek even neer, zo kun je altijd bewust beslissen of je nog meer wilt eten of niet. Je zult merken dat je daardoor vaak minder gaat eten.", "Eet langzaam en kauw goed. Je spijsvertering krijgt op die manier beter de kans om haar werk te doen en je voelt zelf beter aan wanneer je genoeg hebt.", "Kies voor kleinere porties en kleine hapjes. Dat geeft je meer smaakprikkels en doet je ook minder eten."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/mindful_eating.jpg"
                },
            ]
        },
        {
            title: "Alcohol",
            cardContents: [
                {
                    type: "Text",
                    content: ["Alcohol werkt pijnstillend en kan effect hebben op je stemming. Met als gevolg dat je meer wordt afgeleid van je pijn. Op zich hoeft alcoholgebruik in die omstandigheden geen probleem te zijn, maar het kan wel " , {type: "bold", content: "problematisch worden wanneer je het systematisch gaat gebruiken"}, ". Veelvuldig drinken is immers geen ideaal middel tegen pijn, spanning of angst."]
                },
                {
                    type: "Text",
                    content: ["De opluchting en de ontspanning zijn het gevolg van de eerste glazen. Als je meer drinkt blijkt alcohol ", {type: "bold", content:"dikwijls negatieve gevoelens te versterken"}, ". Uit onderzoek weten we dat veel drinken de gevoelens van angst of somberheid doet toenemen. Hoe meer en hoe frequenter je drinkt, hoe meer de negatieve gevoelens zullen versterkt worden. De kans op algemene somberheid of depressie neemt toe. Bij veel drinken voel je je nadien miserabel omwille van de bekende 'kater'. ", {type: "bold", content: "Je wordt dan net gevoeliger voor pijn"}, ", terwijl je er tegelijkertijd minder 'weerbaar' tegenover wordt. Opnieuw drinken lijkt even een oplossing te bieden, maar je komt in een vicieuze cirkel terecht."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/alcohol.jpg"
                },
                {
                    type: "Text",
                    content: "Als je daarnaast ook pijnstillers neemt, dan wordt het effect van beiden versterkt! Met als mogelijke gevolgen: versuffing, lusteloosheid, verwardheid,... Veel pijnstillers worden (gedeeltelijk) afgebroken door je lever. De afbraak van alcohol zal je lever nog meer belasten. Bij chronische pijn is het langdurig gebruik van aangepaste pijnstillers dikwijls noodzakelijk en wenselijk om de levenskwaliteit te verbeteren. Laat je goed begeleiden bij het gebruik van pijnmedicatie. Want medicatiegebruik kan ook nefast zijn voor je pijn."
                }
            ]
        },
        {
            title: "Roken doet pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "Het verband tussen roken en pijn is complex en ze beïnvloeden elkaar in beide richtingen. Bij acute pijn kan een nicotineshot tijdelijk een klein pijnstillend effect hebben, maar bij chronische pijn is roken slecht."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/smoking.jpg"
                },
                {
                    type: "Text",
                    content: "Kwetsbaarheid, pijnklachten, vermoeidheid, slaaptekort, stemmingswisselingen, prikkelbaarheid, woedeaanvallen, depressie – rokers blijken er gevoelig voor te zijn dan niet-rokers. Patiënten met chronische pijn die roken, hebben meer pijn, zijn labieler, functioneren minder en slapen slechter. Roken heeft ook een negatieve invloed op mogelijk herstel en eventuele genezing."
                },
                {
                    type: "Text",
                    content: "Stoppen met roken hoef je niet alleen te doen. Vraag raad aan ex-rokers en zoek steun bij partner, familie en vrienden. Aarzel niet om professionele hulp in te roepen. (bv. rookstopbegeleiding IDEWE, De Tabak Stop lijn)."
                }
            ]
        },
        {
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Gewichtstoename, onregelmatige eetpatronen, het samengaan van twee of meer ziektebeelden… Ook chronische pijn heeft meer te maken met voeding dan je misschien zou denken. Gepaste voedselopname kan de werking van het zenuw- en het immuunsysteem en van het hormoonstelsel verbeteren, wat een directe invloed heeft op de pijnervaring. Op gewicht blijven of, nog beter, kilo’s verliezen verlicht de druk op de gewrichten houdt sluimerende ontstekingen klein."
                },
                {
                    type: "Text",
                    content: "Je bent wat je eet. Veel mensen willen graag gezond(er) eten, maar weten niet precies hoe ze hun voedingspatroon kunnen aanpassen. Gezond eten betekent vooral dat je slimme, gezonde keuzes maakt. De drie belangrijkste principes zijn:"
                },
                {
                    type: "List",
                    content: ["Eet evenwichtig", "Eet met mate, niet te weinig maar ook niet te veel", "Eet gevarieerd, ga voor kleur op je bord"]
                },
                {
                    type: "Text",
                    content: "Ah ja en roken en regelmatige alcohol drinken doet weldegelijk pijn. Gezond keuzes maken, betekent naast gezond eten ook kiezen voor voldoende lichaamsbeweging."
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

const ACTMOD8RES = {
    id: "ACT_MOD_8",
    title: "Veerkracht",
    titleMarkup: ["Belastbaarheid -" , "Veerkracht"],
    shortTitle: "Veerkracht",
    part: 8,
    description: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Hoe veer je terug na herval of na een acute pijn op stoot?",
    duration: "10 minuten",
    type: "Informatief",
    image: "act-mod-res",
    icon: "feather",
    imageWidth: "190px",
    cards: [
        {
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Het gaat niet alleen over ‘terugveren’ naar de oorspronkelijke positie, maar ook om doorgroeivermogen."
                },
                {
                    type: "Shortcut",
                    module: "Stress",
                    buttonText: "Snelkoppeling - Module Stress",
                    modalText: "Dit is een snelkoppeling naar de module 'Stress'. Maar, deze wordt pas deze zomer ontwikkeld, dus de inhoud van deze module 'Veerkracht' is nog beperkt. Kom zeker terug wanneer de module 'Stress' is toegevoegd!"
                },
            ]
        },
        {
            title: "Video",
            cardContents: [
                {
                    type: "Text",
                    content: "Bekijk even de onderstaande video. Dit geeft je wat meer informatie over hoe je om kan gaan met stress op het werk."
                },
                {
                    type: "Video",
                    link: "https://www.youtube.com/embed/IYHhOyU8wUk"
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

const ACTMOD9SLP = {
    id: "ACT_MOD_9",
    title: "Nachtrust",
    titleMarkup: ["Belastbaarheid -", "Nachtrust"],
    shortTitle: "Nachtrust",
    part: 9,
    description: "Slaap je goed? Ook slaap versterkt je basis. Lees hier de belangrijkste tips rond slaapkwaliteit.",
    duration: "10 minuten",
    type: "Informatief",
    image: "te-mod-sleep",
    icon: "sleep",
    imageWidth: "220px",
    cards: [
        {
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Een goede nachtrust laadt je lichaam en geest weer op, zodat je er de volgende dag opnieuw tegenaan kunt."
                },
                {
                    id: "ACT-MOD-9-SLIDER-1",
                    type: "Slider",
                    text: "Slaap je goed?",
                    from: 1,
                    to: 5,
                    valueText: "Jouw selectie",
                    showValue: true,
                    mapping: "5-AGREE",
                    save: true,
                },
                {
                    type: "Text",
                    content: "Een goede nachtrust is essentieel voor je gezondheid. Maar wat kan je zelf doen?"
                }
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "ZORG VOOR EEN VAST SLAAPRITUEEL"}]
                },
                {
                    type: "Text",
                    content: "Ga elke avond op dezelfde manier naar bed. Bouw een routine op met activiteiten en handelingen die je elke avond uitvoert voor je gaat slapen, zoals lezen, rustige muziek beluisteren of een warm bad nemen. Zo bereiden je lichaam en geest zich voor op wat komen gaat: slapen."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/moe.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "REAGEER OP SIGNALEN VAN JE LICHAAM"}]
                },
                {
                    type: "Text",
                    content: "Ga slapen als je je slaperig voelt! Signalen zoals geeuwen, in de ogen wrijven en knikkebollen geven aan dat je moe bent."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/cat-yawning.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "GA VOOR REGELMAAT"}]
                },
                {
                    type: "Text",
                    content: "Ga zoveel mogelijk op hetzelfde uur slapen en sta op hetzelfde uur op, ook op vrije dagen. Op die manier ontwikkel je een vast slaap-waakritme dat de kwaliteit van je slaap bevordert."
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "WAKKER? OPSTAAN!"}]
                },
                {
                    type: "Text",
                    content: "Kun je de slaap niet vatten? Blijf dan niet liggen woelen, maar sta op en doe even iets anders, iets dat je ontspant. Ga pas terug naar bed als je voelt dat je slaperig wordt. Kijk niet voortdurend naar je wekker en draai die, indien nodig, van je weg."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/wakker-opstaan.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "GEBRUIK JE SLAAPKAMER OM TE SLAPEN"}]
                },
                {
                    type: "Text",
                    content: "Behoud je slaapkamer alleen om te slapen of te vrijen. Vermijd lezen, studeren, computeren, eten of tv-kijken! Zo leer je je lichaam opnieuw om je bed te associëren met slapen. Zorg ervoor dat de kamer rustig, goed verlucht, niet te warm en goed verduisterd is."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/slaapritueel.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "LET OP JE EET- EN DRINKPATROON"}]
                },
                {
                    type: "Text",
                    content: "Eet of drink geen opwekkende dingen tot vier uur voor het slapengaan. Koffie, thee en alcohol zijn bekende oppeppers, maar ook cola, chocolade en nicotine (roken) hebben een negatieve invloed op je slaap. Zorg ervoor dat je niet met een hongergevoel of met een overvolle maag in bed ligt. Beide kunnen je nachtrust verstoren."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/eet-drinkpatroon.jpg"
                },
                {
                    type: "Text",
                    content: "Alcohol werkt ontspannend en vertraagt je hersenactiviteit. Je wordt slaperig, voelt je misschien wat suf en hebt de indruk dat je gemakkelijker in slaap valt. Maar opgelet! Alcohol verstoort het natuurlijke verloop van de slaap."
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "BEWEEG VOLDOENDE OVERDAG"}]
                },
                {
                    type: "Text",
                    content: "Voldoende bewegen helpt om beter te slapen. Fysieke inspanning werkt mentaal ontspannend en vergemakkelijkt het inslapen. Vermijd echter wel intensief sporten net voor het slapen gaan. Kom overdag regelmatig buiten en zorg dat je voldoende daglicht ziet."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/gezin.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "ZORG VOOR EEN VAST SLAAPRITUEEL"}]
                },
                {
                    type: "Text",
                    content: "Ga elke avond op dezelfde manier naar bed. Bouw een routine op met activiteiten en handelingen die je elke avond uitvoert voor je gaat slapen, zoals lezen, rustige muziek beluisteren of een warm bad nemen. Zo bereiden je lichaam en geest zich voor op wat komen gaat: slapen."
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "ZORG VOOR ONTSPANNING"}]
                },
                {
                    type: "Text",
                    content: "Creëer rustmomenten overdag en bouw je dag af door je te ontspannen. Neem bewust de tijd om tot rust te komen! Ben je een piekeraar en kun je moeilijk je gedachten loslaten? Zorg dan voor een vast piekerkwartier overdag. Leer om te relativeren!"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/rust.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "VERMIJD COMPUTER-, TABLET- OF SMARTPHONEGEBRUIK VLAK VOOR HET SLAPENGAAN"}]
                },
                {
                    type: "Text",
                    content: "Schermen houden je wakker. Enerzijds door de mentale activiteit die ze oproepen en anderzijds door het sterke licht kort bij de ogen dat invloed heeft op je slaaphormoon melatonine. Schakel ze uit het laatste uur voor je naar bed gaat."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/geen-gsm.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "SLAAP ZOVEEL ALS NODIG EN VOLGENS JE EIGEN BEHOEFTE"}]
                },
                {
                    type: "Text",
                    content: "Er is geen vaste regel die zegt hoeveel slaap je nodig hebt. Als je uitgerust wakker wordt en overdag kunt functioneren zonder slaperig te worden, heb je voldoende geslapen. Dat is voor iedereen verschillend."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/veel-slapen.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "ZORG VOOR EEN GOED SLAAPSYSTEEM"}]
                },
                {
                    type: "Text",
                    content: "Slapen ‘laadt’ je rug weer op. Een goede ondersteuning is belangrijk en heeft een positieve invloed op je slaappatroon en slaapcomfort. Een goed slaapsysteem zorgt ervoor dat het bekken niet zoveel kan doorhangen en dat de schouders iets meer kunnen inzakken. Zo’n slaapsysteem heeft een verharde bekkenzone en een zachtere schouderzone, de zogenaamde comfortzones. Een goed"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/sleeping-side.jpg"
                },
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: [{type: "bold", content: "ZORG VOOR EEN GOEDE SLAAPHOUDING"}]
                },
                {
                    type: "Text",
                    content: "Op je rug of op je zijde slapen, zijn goede slaaphoudingen. Omdat ze de belasting op je rug verkleinen en een goede ondersteuning door het slaapsysteem mogelijk maken. Slapen op je buik is een ongunstige slaaphouding. Als je op je buik slaapt, ligt je nek gedraaid en lig je met een te holle rug.."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/slaaphouding.jpg"
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Een goede slaap is dus essentieel voor een goede gezondheid. Maar wat kan je er zelf aan doen? Een goede slaaphygiëne kan al veel oplossen en heb je bovendien helemaal zelf in de hand."
                },
                {
                    type: "List",
                    numbered: true,
                    content: ["Zorg voor een vast slaapritueel", "Reageer op signalen van je lichaam", "Ga voor regelmaat", "Wakker? Opstaan!", "Gebruik je slaapkamer om te slapen", "Let op je eet- en drinkpatroon", "Beweeg voldoende overdag", "Zorg voor ontspanning", "Vermijd computer-, tablet- of smartphonegebruik vlak voor het slapengaan", "Slaap zoveel als nodig en volgens je eigen behoefte", "Zorg voor een goed slaapsysteem"]
                },
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: true,
            text: "Voltooi onderdeel belasting",
            textOnCompleted: "Keer terug"
        },
    ]
}


const ActivityWorkScript = {
    id: "ACT",
    title: "Activiteit en Werk",
    submodules: [ACTMOD1, ACTMOD2WORK, ACTMOD3ERGO, ACTMOD4MGMT, ACTMOD5, ACTMOD6MOV, ACTMOD7FOOD, ACTMOD8RES, ACTMOD9SLP]
}


export default ActivityWorkScript;