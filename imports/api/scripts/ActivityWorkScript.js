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
                    content: ["Wat doe jij van activiteiten in je vrije tijd en/of op het werk?", "Wat is dus jouw fysieke en mentale belasting? Is dit in evenwicht met jouw belastbaarheid, datgene wat je lichaam aankan?"],
                },
                {
                    type: "Text",
                    content: "Deze module geeft jouw handvaten om ervoor te zorgen dat jouw belasting en belastbaarheid in evenwicht zijn.",
                },
                {
                    type: "Text",
                    content: "Maar wat betekent nu belasting en wat betekent belastbaarheid? Hier gaan we even dieper op in.",
                },
            ]
        },
        {
            title: "Wat is welzijn?",
            cardContents: [
                {
                    type: "Text",
                    content: ["Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de ", {type: "bold", content: "belasting"},  " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content: "belastbaarheid"},  " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/belastingbelastbaarheid.png"
                },
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
                    content: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aankan. Dat wordt bepaald door meerdere factoren waaronder: je algemene gezondheidstoestand, je lichamelijke conditie en spierkracht, je kennis en ervaring, je attitude (hoe je tegenover bepaalde zaken staat) en motivatie,  de manier waarop je met stress en druk omgaat, je familiale en sociale omstandigheden. Belastbaarheid is individueel verschillend."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/life.jpg"
                },
            ]
        },
        {
            title: "Reflectie oefening",
            cardContents: [
                {
                    type: "Text",
                    content: "Hoe ziet jouw weegschaal eruit? Is deze in balans of helt je weegschaal regelmatig over? We gaan eerst kijken naar je belasting."
                },
                {
                    type: "Subtitle",
                    content: "Belasting"
                },
                {
                    type: "Text",
                    content: ["Een ", {type: "italic", content: "hoge belasting"}, " houdt in dat je een hoge werkdruk of een groot takenpakket hebt op je werk en een druk privé leven met veel huishoudelijke taken, ... Een ", {type: "italic", content: "lage belasting"}, " houdt in dat je geen uitdagende job hebt, weinig om handen hebt in je privé leven, ..."]
                },
                {
                    id: "ACT-MOD-1-BELASTING",
                    type: "Slider",
                    oneTime: false,
                    text: "Hoe zit het met jouw belasting? Geef het een score op 100 (met 1 een lage belasting, en 100 een zeer hoge belasting)",
                    from: 1,
                    to: 100,
                    showValue: true,
                    save: true,
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Belastbaarheid"
                },
                {
                    type: "Text",
                    content: ["Een ", {type: "italic", content: "hoge belastbaarheid"}, " wilt zeggen dat je een gezonde levensstijl hebt, een goede nachtrust ervaart, doorgaans een positieve attitude aanneemt, ...  Een ", {type: "italic", content: "lage belastbaarheid"}, " daarentegen wilt zeggen dat je een slechte nachtrust hebt, geen tijd hebt om gezond te bewegen, een lagere mentale veerkracht hebt, een ziekte, ..."]
                },
                {
                    id: "ACT-MOD-1-BELASTBAARHEID",
                    type: "Slider",
                    oneTime: false,
                    text: "Hoe zit het met jouw belastbaarheid? Geef het een score op 100 (met 1 een lage belastbaarheid, en 100 een zeer hoge belastbaarheid)",
                    from: 1,
                    to: 100,
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "Overbelasting",
            showIf: [{rule: "ActScale", pattern: 1}],
            cardContents: [
                {
                    type: "Text",
                    content: "Je bent wat overbelast. Overbelasting treedt op wanneer de belasting en je belastbaarheid gedurende langere tijd uit balans zijn. Door goed voor jezelf te zorgen verhoog je je belastbaarheid en kan je de belasting beter opvangen. De volgende factoren kunnen bijdragen tot een goede balans: "
                },
                {
                    type: "List",
                    content: ["Afwisseling tussen inspanning en ontspanning.",
                        "Een gezond eetpatroon.",
                        "Goede kwaliteit en hoeveelheid slaap.",
                        "Voldoende beweging.",
                        "Regelmatige afwisseling van houdingen en bewegingen.",
                        "Goed omgaan met stressperioden."
                    ]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/meerbelasting.png"
                },
            ]
        },
        {
            title: "Onderbelasting",
            showIf: [{rule: "ActScale", pattern: 2}],
            cardContents: [
                {
                    type: "Text",
                    content: "Je bent wat onderbelast. Onderbelasting treedt op wanneer de belasting en je belastbaarheid gedurende langere tijd uit balans zijn. Bij onderbelasting beweeg je te weinig of zit je te lang en dit kan leiden tot gezondheidsklachten (zowel fysieke als mentale klachten). "
                },
                {
                    type: "Text",
                    content: "Bij chronische pijn is een gezond evenwicht tussen belasting en belastbaarheid extra belangrijk. In deze module krijg je tips en tricks aangereikt voor een gezonde balans, zoals afwisseling tussen rust en activiteit."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/meerbelastbaarheid.png"
                },
            ]
        },
        {
            title: "In balans",
            showIf: [{rule: "ActScale", pattern: 3}],
            cardContents: [
                {
                    type: "Text",
                    content: "Jouw belasting en belastbaarheid zijn redelijk in balans. Blijf goed voor jezelf zorgen zodoende je dit evenwicht kan bewaren. Hé, het is oké om even kort uit evenwicht te zijn als je nadien terug in balans geraakt."
                },
                {
                    type: "Text",
                    content: "Bij chronische pijn is een gezond evenwicht tussen belasting en belastbaarheid extra belangrijk. Vaak zien we patronen van overbelasting of juist te weinig belasting. In deze module krijg je tips en trucs aangereikt voor een gezonde balans. Zoals afwisseling tussen rust en activiteit, bewust kiezen tussen energiegevers en energievreters."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/belastingbelastbaarheid.png"
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
                    content: "Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de belasting (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd, en je belastbaarheid (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."
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
            title: "Enkele stellingen",
            cardContents: [
                {
                    type: "Text",
                    content: "Laten we beginnen met twee stellingen. Wat denk jij van het volgende:",
                },
                {
                    id: "ACT-MOD-2-SLIDER-1",
                    type: "Slider",
                    text: "Als je pijn hebt, kan je best rusten.",
                    from: 1,
                    to: 5,
                    mapping: "5-AGREE",
                    showValue: true,
                    save: true,
                },
                {
                    id: "ACT-MOD-2-SLIDER-2",
                    type: "Slider",
                    text: "Ik blijf beter thuis van het werk als ik pijn heb.",
                    from: 1,
                    to: 5,
                    showValue: true,
                    mapping: "5-AGREE",
                    save: true,
                }
            ]
        },
        {
            title: "Reflectie",
            showIfAnswered: ["ACT-MOD-2-SLIDER-1", "ACT-MOD-2-SLIDER-2"],
            cardContents: [
                {
                    type: "Text",
                    content: "Rusten en activiteiten vermijden is niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Daarnaast zetten je hersenen ook pijndempende stoffen vrij tijdens het bewegen. Werk en activiteiten kunnen je afleiden van je pijn. Door lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven. Dit wilt niet zeggen dat je bij een acute blessure de belasting niet tijdelijk mag verlagen om het herstelproces te bevorderen."
                },
            ]
        },
        {
            title: "Voordelen werk",
            cardContents: [
                {
                    type: "Text",
                    content: "Naast financiële onafhankelijkheid zijn er nog andere voordelen aan werken! Herken jij enkele voordelen in de lijst?"
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
            title: "Nog meer voordelen",
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
            title: "Doorwerkers vs. mensen die langdurig verzuimen",
            cardContents: [
                {
                    type: "Text",
                    content: "Doorwerkers rapporteren ongeveer evenveel pijn als mensen die langdurig verzuimen. Verzuimers zijn werknemers die niet gaan werken omwille van hun pijn. Bij doorwerkers heeft de pijn minder impact op hun dagelijks leven."
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
                    content: ["ten opzichte van ", {type: "bold", content:"mensen die langdurig verzuimen"}, "?"]
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
                    id: "ACT-MOD-2-Q2",
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
            showIfAnswered: ["ACT-MOD-2-Q2"],
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Rusten en activiteiten vermijden is niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Daarnaast zetten je hersenen ook pijndempende stoffen vrij tijdens het bewegen. Werk en activiteiten kunnen je afleiden van je pijn. Door te lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven."
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
                    type: "Image",
                    width: "60",
                    link: "/images/activitywork/warning.jpg"
                },
                {
                    type: "Text",
                    content: "Door aandacht te besteden aan je houding, je bewegingen en de uitvoering van je handelingen kun je de fysieke belasting verminderen.",
                },
            ]
        },
        {
            title: "Doe de test",
            wrapUp: true,
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
                    options: [{id: "CONCAVE", text: "Onderrug hol"}, {id: "CONVEX", text: "Onderrug bol"}]
                },
                {
                    type: "Text",
                    content: ["En wat is de natuurlijke kromming van je  ", {type:"bold", content:"bovenrug"}, "?"]
                },
                {
                    type: "Selection",
                    id: "ACT-MOD-3-Q2",
                    options: [{id: "CONCAVE", text: "Bovenrug hol"}, {id: "CONVEX", text: "Bovenrug bol"}]
                },
                {
                    type: "Text",
                    content: ["Ten slotte, wat is de natuurlijke kromming van je  ", {type:"bold", content:"nek"}, "?"]
                },
                {
                    type: "Selection",
                    id: "ACT-MOD-3-Q3",
                    options: [{id: "CONCAVE", text: "Nek hol"}, {id: "CONVEX", text: "Nek bol"}]
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
            title: "Basisprincipes van de ergonomie",
            cardContents: [
                {
                    type: "Text",
                    content: "Om ergonomisch te werken moet je rekening houden met 2 zaken, namelijk de omgeving en je eigen handelen. Daarom leren we jou de ergonomische basisprincipes om je omgeving en je eigen handelen aan te passen."
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
                    type: "Story",
                    content: [
                        {image: "/images/activitywork/wrench.jpg", title: "De juiste toolbox", text: "Voorzie de juiste hulpmiddelen, materialen en gereedschappen. Gebruik bij het dweilen bijvoorbeeld een voldoende lange steel (liefst tot aan je neus). Zorg ervoor dat je zelf ook aangepaste kledij en schoenen draagt."}, 
                        {image: "/images/activitywork/carrying.jpg", title: "Waarom zware lasten dragen?", text: "Ga zuinig om met je energie. Probeer lasten daarom te schuiven, duwen of trekken in plaats van te dragen. Misschien zijn er wel hulpmiddelen die je kunnen helpen?"},
                        {image: "/images/activitywork/boxesstocked.jpg", title: "Verken het parcours", text: "Voordat je een last verplaatst verken je best eerst het parcours. Probeer obstakels en hindernissen op voorhand te verwijderen. Denk bijvoorbeeld aan dozen of meubilair die een doorgang versperren."},
                        {image: "/images/activitywork/updown.jpg", title: "Omhoog of omlaag?", text: "Werk op een goede hoogte zodat je niet te diep moet bukken of te hoog moet reiken. Je kan ofwel de hoogte van het werkblad of de last proberen aan te passen, ofwel je eigen hoogte door bijvoorbeeld op een trapje te staan."},
                        {image: "/images/activitywork/together.jpg", title: "Samen sterk", text: "Bij sommige taken is het aangewezen om deze met meerdere personen uit te voeren. Aarzel dus niet om hulp te vragen."},
                        {image: "/images/activitywork/boxes.jpg", title: "Creëer beweegruimte", text: "Voorkom dat je je in bochten en ongemakkelijke houdingen moet wringen. Zorg er dus eerst voor dat je voldoende ruimte creëert om de taak zo ergonomisch mogelijk uit te voeren."},
                        {image: "/images/activitywork/workplace.jpg", title: "Richt de werkplek goed in", text: "Probeer je werkplek zo in te delen dat je het meest gebruikte gereedschap binnen handbereik ligt. Zo verklein je de reikafstand en de belasting. Ruim ook je werkplek regelmatig op zodat er niets in de weg kan liggen."},
                        {image: "/images/activitywork/pulling.jpg", title: "Maak de last lichter", text: "Moet je een zware last tillen of verplaatsen? Bekijk dan eerst of je de last lichter kan maken? Kan je bijvoorbeeld de last opsplitsen in stukjes? Kan je hulp van iemand krijgen? Of zijn er hulpmiddelen ter beschikking?"},
                        {image: "/images/activitywork/maze.jpg", title: "Ga voor de kortste en veiligste weg", text: "Beperk de loopafstand met een last door op voorhand de meest efficiënte route te bepalen. Let wel op dat de route ook veilig is en zo min mogelijk hindernissen bevat."},
                    ]
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
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/fys_principes.png",
                }
            ]
        },
        {
            title: "Principe 1 - Sta in evenwicht",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/cleaning.jpg"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/gehurkt.jpg"
                },
                {
                    id: "ACT-MOD-3-PRINCIPLE-1-Q1",
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
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-1-Q1"],
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
            cardContents: [
                {
                    type: "Text",
                    content: "Ook voor mensen die werken in de zorg is het hanteren van een brede steunbasis belangrijk. Stel, je begeleidt een zorgvrager bij het stappen en deze verliest het evenwicht."
                },
                {
                    type: "Image",
                    link: ["/images/activitywork/zorglinks.jpg", "/images/activitywork/zorgrechts.jpg"]
                },
                {
                    id: "ACT-MOD-3-PRINCIPLE-1-Q2",
                    type: "Question",
                    question: "In welke houding ga je de zorgvrager het beste kunnen opvangen?",
                    options: ["Links", "Rechts"],
                    correct: "Links",
                    explanation: "Door je voeten in een voor- of zijwaartse spreidstand te zetten, vergroot je je steunvlak. Door je knieën licht te buigen, sta je stabieler en kun je onverwachte bewegingen en het gewicht van de zorgvrager beter opvangen. Dat is minder belastend voor je lichaam.   ",
                    onCorrect: "Interdaad, in de linker houding!",
                    onIncorrect: "Nee, in de linker houding."
                }
            ]
        },
        {
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-1-Q2"],
            cardContents: [
                {
                    type: "Text",
                    content: "Het eerste basisprincipe kan ook worden toegepast door mensen met een zittende job zoals beeldschermwerk. In zittende positie zit je best op een stabiele stoel met je voeten plat op de grond. Een brede steunbasis zorgt er eveneens voor dat je goed ondersteund wordt in je zittende werkhouding."
                },
                {
                    type: "Text",
                    content: "Het is belangrijk om het zittend werken af te wisselen met bijvoorbeeld staand werken of vergaderen. Zet dus in op het variëren van je houding en bewegingen. Hier zijn enkele tips voor als je afwisselt tussen zittend en rechtstaand werk:"
                },
                {
                    type: "List",
                    content: [
                        "Zet je voeten op heupbreedte. Zo verdeel je het gewicht over je beide benen en voeten.",
                        "Zoek af en toe een extra steunpunt. Je kan bijvoorbeeld tegen een tafel leunen.",
                        "Varieer regelmatig van houding. Verplaats bijvoorbeeld je lichaamsgewicht van de ene naar het andere been.",
                        "Buig lichtjes door de knieën.",
                        "Voorkom een doorgezakte houding.",
                        "Plaats je schouders in een ontspannen positie (niet optrekken en lichtjes naar achteren kantelen).",
                        "Houd je kin lichtjes ingetrokken en omhoog. Dit is een kleine moeite, maar van groot belang voor een goede lichaamshouding.",
                        "Bouw het afwisselen tussen zittend en rechtstaand werk op. Sta niet meer dan 30 minuten aan één stuk recht.",

                    ]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/standup.jpg",
                },
                {
                    type: "Text",
                    content: "Vind je het moeilijk om tijdens het werk voldoende te bewegen en af te wisselen tussen verschillende houdingen? In de module bewegen krijg je tal van tips!"
                },
                {
                    type: "Shortcut",
                    module: "MOVEMENT",
                    submodule: "MOV_MOD_3"
                }
            ]
        },
        {
            title: "Principe 2 - Houd gewrichten in neutrale zone",
            titleCard: true,
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "De neutrale zone is die zone waarin je gewrichten het minst belast worden en je spieren het efficiëntst kunnen werken. Bij fysiek zware jobs en zorgberoepen kan je alvast rekening houden met de volgende richtlijnen:"
                },
                {
                    type: "List",
                    content: [
                        [{type: "bold", content: "Wervelkolom"}, ": behoud zoveel mogelijk de normale krommingen (onderrug hol, bovenrug bol en nek hol)."], 
                        [{type: "bold", content: "Knieën "}, ": buig tijdens het tillen de knieën niet dieper dan 90°. Zorg er tijdens het rechtstaan voor dat je de knieën niet overstrekt. Buig ze daarom lichtjes."], 
                        [{type: "bold", content: "Schouders"}, ": houd de bovenarmen zo dicht mogelijk bij je romp en ontspan je schouders (niet optrekken en lichtjes naar achteren kantelen)."], 
                        [{type: "bold", content: "Pols"}, ": behoud zoveel mogelijk de verticale stand van de polsen. Beeld je in dat je een hand geeft."]]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/back-2.jpg"
                },
                {
                    type: "Text",
                    content: "Onderstaande filmpjes geven een illustratie van hoe je dit kan toepassen:"
                },
                {
                    type: "Video",
                    link: "https://player.vimeo.com/video/511472364"
                },
                {
                    type: "Video",
                    link: " https://player.vimeo.com/video/511472311"
                },
            ]
        },
        {
            title: "In de zorg",
            cardContents: [
                {
                    type: "Text",
                    content: "Werk je in de zorg? Dan hebben we nog enkele tips om het bed van de zorgvrager af te stellen op de ideale hoogte:"
                },
                {
                    type: "Text",
                    content: [
                        "De ellebooghoogte is het standaard referentiepunt.",
                        "Zet het bed hoger bij precisietaken (bijvoorbeeld wondverzorging) of het uitoefenen van horizontale krachten (bijvoorbeeld zijwaarts verplaatsen).",
                        "Zet het bed lager bij taken die meer verticale krachten vereisen zoals reanimatie.",
                        "Bij een handeling met een kleine en grote zorgverlener, breng je het bed op hoogte van de kleinste zorgverlener. De grootste kan door de benen gaan om op een juiste hoogte te werken."
                    ]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/zorgbed.jpg"
                },
            ]
        },
        {
            title: "Op kantoor",
            cardContents: [
                {
                    type: "Text",
                    content: "Ook voor mensen met een zittend beroep en beeldschermwerk is het belangrijk om de gewrichten in de neutrale zones te houden."
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_typen.jpg"
                },
                {
                    id: "ACT-MOD-3-PRINCIPLE-2-Q1",
                    type: "Question",
                    question: "Neemt deze persoon een goede houding aan?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Dit is geen ideale houding. Wanneer je werkt aan een laptop, is je nek voorovergebogen.",
                    onCorrect: "Correct.",
                    onIncorrect: "Niet correct."
                }
            ]
        },
        {
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-2-Q1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Als je gedurende meer dan 30 min aan één stuk gebruik maakt van een laptop is het aangewezen om een laptophouder, dockingstation (op hoogte) of een extra scherm te gebruiken. Plaats de bovenkant van het scherm op ooghoogte. Dit doe je in combinatie met een extern toetsenbord en muis. "
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_correct.jpg"
                },
            ]
        },
        {
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
                    id: "ACT-MOD-3-PRINCIPLE-2-Q2",
                    type: "Question",
                    question: "Op welke van de bovenstaande twee foto's heeft de persoon haar bureaustoel goed ingesteld?",
                    options: ["Bovenste foto", "Onderste foto"],
                    correct: "Onderste foto",
                    explanation: "Op de bovenste foto staat de bureaustoel te laag waardoor de knieën zich boven de heupen bevinden. Hierdoor wordt de rug afgevlakt en ga je doorhangen in de onderrug.",
                    onCorrect: "Correct.",
                    onIncorrect: "Niet correct."
                }
            ]
        },
        {
            title: "Principe 3 - Werk met handen dicht bij romp",
            titleCard: true,
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-2-Q2"]
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/activitywork/zorgboven.jpg"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/zorgonder.jpg"
                },
                {
                    id: "ACT-MOD-3-PRINCIPLE-3-Q1",
                    type: "Question",
                    question: "Op welke van de bovenstaande twee foto's heeft de zorgverlener de meest ideale houding?",
                    options: ["Bovenste foto", "Onderste foto"],
                    correct: "Onderste foto",
                    explanation: "Op de bovenste foto staat de zorgverlener dichter bij de zorgvrager, waardoor er met de handen dicht bij de romp gewerkt kan worden. Dit verkleint de belasting voor je lichaam.",
                    onCorrect: "Correct.",
                    onIncorrect: "Niet correct."
                },
            ]
        },
        {
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-3-Q1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Probeer maar eens een volle fles water 30 seconden omhoog te houden met je armen gestrekt voor je lichaam. Door het hefboomeffect is dit meer belastend dan wanneer je de fles dicht bij jezelf houdt. Probeer dus te werken met de handen dicht bij de romp. Je kan dit doen door het werk of de last dichter naar jou te brengen of door zelf dichter bij het werk of de last te staan. "
                },
                {
                    type: "Text",
                    content: "Hier zijn ook nog 2 filmpjes ter illustratie:"
                },
                {
                    type: "Video",
                    link: "https://player.vimeo.com/video/511472440"
                },
                {
                    type: "Video",
                    link: "https://player.vimeo.com/video/511472523"
                },
                {
                    type: "Break"
                },
                {
                    type: "Text",
                    content: "Vermijd ook tijdens beeldschermwerk om langdurig met de handen ver van de romp te werken. Anders kan je niet de neutrale zones van de gewrichten bewaren."
                },
                {
                    type: "Text",
                    content: "Hier zijn enkele tips die kunnen helpen:"
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_voorover.jpg"
                },
                {
                    type: "List",
                    content: ["Plaats het klavier voldoende kort (5 tot 15 cm) tegen de rand van je bureau met de muis er vlak naast.",
                        "Zet je bureau op dezelfde hoogte als je ellebogen wanneer je ellebogen zich in 90° bevinden en je schouders ontspannen zijn.",
                        "Is je bureautafel te hoog? Verhoog dan je stoel en gebruik een voetensteun.",
                        "Is je bureautafel te laag? Probeer dan de tafel te verhogen door bijvoorbeeld blokjes onder de tafel te plaatsen.",
                        "Kies liefst voor een bureaustoel met armsteunen. Zijn die er niet? Schuif dan met je buik tot tegen de rand van je bureau."
                    ]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_elleboog.jpg"
                },
            ]
        },
        {
            title: "Principe 4 - Gebruik je lichaamsgewicht en beenspieren",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Je beenspieren zijn de sterkste spieren in je lichaam. Gebruik deze zoveel mogelijk. Wanneer je iets moet tillen van de grond, buig dan goed door je knieën (buig niet dieper dan een hoek van 90° in de knieën) en behoud de natuurlijke krommingen van je rug."
                },
                {
                    type: "Image",
                    link: "/images/activitywork/pushing.jpg"
                },
                {
                    type: "Text",
                    content: "Je lichaamsgewicht kan je ook effectief inzetten tijdens het trekken en duwen. Hetzelfde geldt voor het verplaatsen van zorgvragers."
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
            titleCard: true,
            showIfAnswered: ["ACT-MOD-3-FYS-Q2"],
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Langzaam opbouwen van de kracht is de boodschap! Er is een spectaculair verschil tussen een snelle en rustige start bij tillen en duw- en trekbewegingen. Als je snel en hevig te werk gaat, ontstaan er enorme piekkrachten in je lichaam. Door een beweging rustig in te zetten verlaag je deze piekbelasting. Hier zijn enkele tips om dit aan te pakken:"
                },
                {
                    type: "List",
                    content: ["Sta in evenwicht", "Gebruik steeds twee (gestrekte) armen zodat schouders en rug symmetrisch worden belast", "Zet de beweging rustig in. Gebruik de 3 seconden-regel: neem altijd drie tellen de tijd om een kar rustig in  beweging te krijgen"]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/trash.jpg"
                },
            ]
        },
        {
            title: "Principe 6 - Beweeg handen en voeten in dezelfde richting",
            titleCard: true
        },
        {
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
                    id: "ACT-MOD-3-PRINCIPLE-6-Q1",
                    type: "Question",
                    question: "Bewegen deze personen hun handen en voeten in dezelfde richting?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Beide personen roteren hun rug tijdens het uitvoeren van hun taak.",
                    onCorrect: "Nee, inderdaad.",
                    onIncorrect: "Juist niet."
                },
            ]
        },
        {
            showIfAnswered: ["ACT-MOD-3-PRINCIPLE-6-Q1"],
            cardContents: [
                {
                    type: "Text", 
                    content: "Je beweegt je handen en voeten best in dezelde richting. Door handen en voeten in dezelfde richting te bewegen, vermijd je rotaties ter hoogte van de rug. Hierdoor zorg je ervoor dat het lichaam zich altijd mee verplaatst op een rugvriendelijke manier."
                },
                {
                    type: "Image",
                    link: ["/images/activitywork/rugarmen1.png", "/images/activitywork/rugarmen2.png"]
                },
            ]
        },
        {
            title: "Extra - Principes voor kantoorwerk",
            titleCard: true,
        },
        {
            title: "Stap 1: De bureaustoel en tafel",
            cardContents: [
               {
                   type: "List",
                   content: [
                    "Ga diep in de stoel zitten.",
                    "Kies voor een open hoek: bovenbenen licht afhellend.",
                    "Voor de zitdiepte moeten er 4 vingers tussen zitting en knieholte zijn.",
                    "Zorg voor een goede rugsteun. Deze heeft een bolling tegen de lage rug of lende.",
                    "Zet je bureau op dezelfde hoogte als je ellebogen wanneer je ellebogen zich in 90° bevinden en je schouders ontspannen zijn.",
                    "Is je bureautafel te hoog? Verhoog dan je stoel en gebruik een voetensteun.",
                    "Is je bureautafel te laag? Probeer dan de tafel te verhogen door bijvoorbeeld blokjes onder de tafel te plaatsen.",
                    "Kies liefst voor een bureaustoel met armsteunen en plaats ze op ellebooghoogte. Zijn die er niet? Schuif dan met je buik tot tegen de rand van je bureau.",
                    "Zit dynamisch en stel de bureaustoel in op het lichaamsgewicht."
                   ]
               },
               {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_zitten.jpg"
                },
            ]
        },
        {
            title: "Stap 2: Beeldscherm",
            cardContents: [
                {
                    type: "List",
                    content: [
                        "Plaats het externe beeldscherm of je laptop op armlengte afstand.",
                        "Zorg ervoor dat de bovenrand van het externe beeldscherm of de laptop zich op ooghoogte bevindt.",
                    ]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_arm.jpg"
                },
            ]
        },
        {
            title: "Stap 3: Toetsenbord en muis",
            cardContents: [
                {
                    type: "List",
                    content: [
                        "Plaats het toetsenbord voldoende kort (5 tot 15 cm) tegen de rand van je bureau.",
                        "Plaats de muis vlak naast je toetsenbord.",
                    ]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_correct.jpg"
                },
            ]
        },
        {
            title: "Stap 4: Documenten",
            cardContents: [
                {
                    type: "Text",
                    content: "Werk je vaak met documenten? Gebruik dan een documentenhouder en plaats deze tussen het toetsenbord en het beeldscherm."
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/beeldschermwerk_scherm.jpg"
                },
            ]
        },
        {
            title: "Stap 5: Beweeg en varieer",
            cardContents: [
                {
                    type: "Text",
                    content: "Doe aan actief zitten. Verander regelmatig van houding, werk eens rechtstaand, of ga even op een andere soort stoel zitten (bijvoorbeeld een zitbal). De beste houding is afwisseling!"
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/kantoor.jpg"
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Je lichaamshouding en de manier waarop je beweegt en handelingen uitvoert, bepalen mee hoe zwaar je lichaam wordt belast. Een slappe of een te gespannen lichaamshouding, bruuske bewegingen of een zware last tillen vanuit een ongunstige houding kan fysieke klachten in de hand werken. Door aandacht te besteden aan je houding, je bewegingen en de uitvoering van je handelingen kun je de fysieke belasting verminderen."
                },
                {
                    type: "Image",
                    width: "100",
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
                    content: [[{type: "bold", content: "Laag activiteitenniveau"}, ": Deze personen voeren over het algemeen weinig activiteiten uit. Of, in geval van pijn, hebben de neiging om activiteiten te vermijden. Voldoende bewegen en het uitvoeren van waardevolle activiteiten is echter super belangrijk. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Door een laag activiteitenniveau wordt je lichaam zwakker waardoor het de belasting in je dagelijks leven minder goed aankan. Naast de lichamelijke voordelen dragen waardevolle activiteiten ook bij aan je mentale welzijn. Ook bij pijn zijn beweging en zoveel mogelijk je normale activiteiten verderzetten essentieel voor het herstelproces. Krijg je bijvoorbeeld veel last tijdens een specifieke activiteit, dan kan je nog altijd verder gaan met iets anders in plaats van lang te rusten of in de zetel te hangen."]]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/pattern1.png"
                },
                {
                    type: "List",
                    content: [[{type: "bold", content: "Fluctuerend activiteitenpatroon"}, ": Bij mensen met een fluctuerend patroon varieert de hoeveelheid activiteiten sterk van dag tot dag. Hoewel een evenwichtig activiteitenpatroon beter is, is dit niet noodzakelijk een probleem. Tenzij jij je laat leiden door je klachten. Dit wil zeggen dat je op goede dagen heel veel doet en de dagen nadien maar heel weinig kan doen door een sterke toename van je klachten. Deze sterk afwisselende over- en onderbelasting brengt je op termijn nergens. Ook al vind je het niet altijd gemakkelijk om te stoppen wanneer je een activiteit wilt afwerken, toch is het belangrijk om een pauze in te lassen of een andere activiteit te doen wanneer je een sterke toename van je klachten krijgt. Lukt dat je, dan boek je winst. Je gaat minder in het rood en hoeft minder te herstellen, waardoor de daaropvolgende dagen een stuk comfortabeler zijn."]]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/pattern2.png"
                },
                {
                    type: "List",
                    content: [[{type: "bold", content: "Belastend activiteitenpatroon"}, ": Deze mensen hebben constant een hoog activiteitenniveau of voeren veel activiteiten uit die ze als belastend ervaren. Steeds activiteiten uitvoeren die belastend zijn of elke dag in het rood gaan, is uitputtend voor je lichaam. Op een moment zal dit zich wreken. Daarom is het belangrijk om af te wisselen met activiteiten die minder belastend zijn en rustmomenten in te lassen."]]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/pattern3.png"
                },
                {
                    type: "List",
                    content: [[{type: "bold", content: "Evenwichtig activiteitenpatroon"}, ": mensen met een evenwichtig activiteitenpatroon hebben een goede balans gevonden tussen rust en activiteit. Ze wisselen zwaardere taken af met minder zware taken. Ze bewegen voldoende, maar plannen ook voldoende rust in."]]
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/activitywork/pattern4.png"
                },
            ]
        },
        {
            id: "GOALSETTING",
            title: "Doelen en opbouwschema",
            cardContents: [
                {
                    type: "Text",
                    content: "Om te beginnen is het belangrijk om stil te staan bij welke activiteiten voor jou belangrijk zijn. Het stellen van doelen maakt heel duidelijk wat belangrijk voor je is en wat je wilt bereiken (of je nu last hebt van pijn of niet). Stel dat jij bijvoorbeeld veel belang hecht aan gezondheid en zelfzorg. Dan kan je dit in je leven incorporeren door een marathon te lopen, maar evenzeer door dagelijks een wandeling rond de blok te doen of ook door voldoende rustmomenten in te bouwen of door op je voeding te letten,... Stel dat jij belang hecht aan het leveren van een zinvolle bijdrage, dan zou je dat kunnen doen door te gaan werken, door vrijwilligerswerk te doen, door boodschappen te doen voor je zieke buurvrouw,... Of stel dat je graag meer quality time wilt met je familie. Bijvoorbeeld door wekelijks met je ouders te bellen of door de kinderen met de fiets naar school te brengen."
                },
                {
                    type: "Image",
                    link: "/images/movement/thoughts.jpg"
                },
                {
                    type: "Text",
                    content: "Hier zijn alvast enkele tips bij het stellen van doelen:"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/path.jpg", title: "Tip 1 - Laat je leiden door je visie, waarden en principes", text: "Doelen kies je in functie van wat voor jou als belangrijk aanvoelt, hoe je je leven wilt leiden. Omgekeerd kan het stellen van een doel dat indruist tegen een belangrijke waarde, ongewenste effecten met zich meebrengen."},
                        {image: "/images/movement/goals.jpg", title: "Tip 2 - Maak concrete doelen", text: "Je kan een doel pas bereiken als je weet wat je hiervoor moet doen. Werken aan je gezondheid is bijvoorbeeld geen doel, maar een waarde (je hecht belang aan jouw gezondheid). Een concreet doel om deze waarde te bereiken kan zijn dat je dagelijks een wandeling van 30 minuten maakt, of dat je maar 1 keer per week een dessertje eet."},
                        {image: "/images/movement/rock.jpg", title: "Tip 3 - Stel realistische doelen", text: "Een goed gekozen doen kan je bereiken. Onrealistische doelen werken heel demotiverend en de kans is groot dat je vroegtijdig afhaakt. Stel je doet zelden iets van sport, dan is het niet het beste plan om onmiddellijk een marathon als doel te neme. Je kan beter starten met een doel van 5km, dan 10km, enz."},
                        {image: "/images/movement/pins.jpg", title: "Tip 4 - Houd rekening met de termijn", text: "Hoe verder weg in de toekomst een bepaald doel ligt, hoe moeilijker het wordt om dit te bereiken. Splits daarom ambitieuze doelen op in tussentijdse doelen, zo bewaar je het overzicht. Let op dat je je ook niet laat leiden door strakke tijdschema's, ook al kan door sociale of andere druk de tijd een belangrijke factor worden. Strakke tijdschema’s werken meestal stress verhogend en dreigen ons uit evenwicht te brengen. Bovendien werken ze demotiverend, doordat we ons teleurgesteld voelen als we bepaalde doelen niet bereiken binnen de gestelde termijn."},
                    ]
                }
            ]
        },
        {
            id: "GOALSETTING",
            title: "Voorbeelden",
            showIf: [{rule:"HasNotUnlockedShortcut", shortcut: "GOALSETTING"}],
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
            id: "GOALSETTING",
            title: "Opbouwschema",
            cardContents: [
                {
                    type: "Text",
                    content: "Sommige doelen zal je niet zomaar kunnen bereiken. Hiervoor heb je een goed opbouwschema nodig. Ook om je belastbaarheid te verhogen en actiever te worden is een veilig opbouwschema essentieel."
                },
                {
                    type: "Text",
                    content: "Hier heb je een overzicht van hoe je een opbouwschema kan maken:"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/start.jpg", title: "Stap 1", text: "Om je activiteitenniveau langzaam op te bouwen moeten we eerst je basisniveau vaststellen. Je basisniveau bepaal je door de tijd te meten dat je met een activiteit bezig kunt zijn totdat je moe wordt of de pijn toeneemt. Je bepaalt je basisniveau liefst meerdere keren, zodat je een betrouwbaar gemiddelde krijgt. Je hebt namelijk goede en slechte dagen. Van deze basis haal je 20% af om je startniveau te bepalen."},
                        {image: "/images/movement/stairs.jpg", title: "Stap 2", text: "Houd dit één tot twee weken vol, afhankelijk van je hersteltijd. Daarna breiden we uit met ± 10%. Wanneer je gaat opbouwen mag de hersteltijd niet toenemen. Het kan zijn dat pijn en vermoeidheid erger worden, maar dat is niet erg, zolang de hersteltijd maar niet langer wordt. Het is super belangrijk dat je je aan het schema houdt. Hoe verleidelijk misschien ook, maar het is niet goed dat je al je activiteiten tegelijk gaat opbouwen."},
                        {image: "/images/movement/stairs.jpg", title: "Voorbeeld 1", text: "Na 10 minuten fietsen neemt jouw pijn toe. Dan is je startniveau 8 minuten. Na één tot twee weken verhoog je dit naar 9 minuten."},
                        {image: "/images/movement/walking.jpg", title: "Voorbeeld 2", text: "Na 500 meter stappen neemt jouw pijn toe. Dan is je startniveau 400 meter. Na één tot twee weken verhoog je dit naar 440 meter."},
                    ]
                },
            ]
        },
        {
            id: "ACTIVITYMANAGEMENT",
            title: "Activiteitenmanagement",
            cardContents: [
                {
                    type: "Text",
                    content: "Nu je weet welke activiteiten belangrijk voor je zijn en welke doelen je wilt bereiken, is de volgende stap een agenda maken. Het is belangrijk om je dag goed te plannen, zodat je niet te veel over je eigen grenzen gaat. Hou bij het plannen rekening met hoe zwaar iedere activiteit is. Maak in je agenda ook ruimte voor de doelen die jij hebt vooropgesteld. Het is belangrijk om je te houden aan je agenda - dus niet méér doen op een goede dag, maar ook niet minder doen op een slechte dag!"
                },
                {
                    type: "Text",
                    content: "Hier heb je alvast enkele tips die je kunnen helpen bij het maken van een evenwichtige agenda:"
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Afwisseling"
                },
                {
                    type: "List",
                    content: ["Wissel af tussen zwaardere en lichtere taken.", "Wissel af tussen taken met een verschillende lichamelijke belasting.", "Wissel staande en zittende taken af. Beweeg en wandel af en toe.", "Wissel af tussen inspanning en ontspanning.", "Wissel af tussen taken die je leuk vindt en taken die je minder leuk vindt."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/batteries.png"
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Maak zware taken lichter"
                },
                {
                    type: "List",
                    content: ["Splits op in deeltaken (minder lange duur)", "Beperk de taak in tijd (bv. wasmand in 2x strijken)", "Onderbreek met een rustpauze", "Voer de taak op een ergonomische manier uit"]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/lifting2.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Rust"
                },
                {
                    type: "Text",
                    content: "Rusten is een manier om energie te geven aan je lichaam, maar het betekent niet niets doen of slapen."
                },
                {
                    type: "List",
                    content: ["Neem veel korte rustpauzes op een dag in plaats van één lange rustpauze.", "Probeer zoveel mogelijk te rusten vooraleer de vermoeidheid of pijn de kop opsteekt", "Wissel taken (activiteiten) af met rust", "Rust op vaste tijdstippen doorheen de dag", "Plan je rustmomenten in!"]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/rustmoment.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Leren weigeren"
                },
                {
                    type: "Text",
                    content: "Neen kunnen zeggen is belangrijk. Je hebt het recht om te beslissen of je iets wil of niet wil. Kunnen weigeren is belangrijk om te kunnen omgaan met anderen. Durven weigeren is voor je eigen behoeften durven opkomen."
                },
                {
                    type: "List",
                    content: ["Je weigering moet een duidelijke neen omvatten", "Maak duidelijk waarom je neen zegt", "Aanvaard de ontgoocheling van de ander en laat dit ook merken"]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/no.jpg"
                },
            ]
        },
        {
            title: "Activiteitenlogboek",
            cardContents: [
                {
                    type: "Text",
                    content: "We hebben een agenda met activiteiten management toegevoegd aan de shortcuts. Dit kan je helpen bij het plannen van je activiteiten. Zo kan je nog meer evenwicht in je activiteiten bekomen of proberen actiever te worden. Je bent vrij om hier gebruik van te maken."
                }
            ]
        },
        {
            overview: true,
            title: "Key take-away",
            cardContents: [
                {
                    type: "Text",
                    content: "Activiteitenmanagement heeft als doel te leren omgaan met je energie. Het stellen van doelen maakt duidelijk wat jij belangrijk vindt en vormen een basis voor de activiteiten waarin jij energie wilt steken. Om sommige doelen te kunnen bereiken heb je een goed opbouwschema nodig. Met een goede planning kan je je grenzen bewaken, een evenwicht vinden tussen activiteiten en rust en binnen je eigen grenzen actiever worden."
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
    description: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aankan. Hoe is jouw belastbaarheid? In deze module krijg je handvaten om je belastbaarheid te verhogen.",
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
            wrapup: true,
            cardContents: [
                {
                    id: "ACT-MOD-5-SWIPE",
                    type: "Swipe",
                    agreeButtonText: "Ja",
                    disagreeButtonText: "Nee",
                    items: [
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
            title: "Basisprincipes om je belastbaarheid te verhogen",
            cardContents: [
                {
                    type: "Story",
                    content: [
                        {
                            title: "Gezonde beweging en voeding",
                            text: "We kunnen ons lichaam fit houden door in te zetten op gezonde beweging en gezonde voeding.",
                            image: "/images/activitywork/food.jpg"
                        },
                        {
                            title: "Nachtrust en veerkracht",
                            text: "Ook voldoende nachtrust draagt bij tot een fit lichaam en een fitte geest. Besteed bovendien aandacht aan je eigen veerkracht en zorg voor een gezonde geest in een gezond lichaam",
                            image: "/images/activitywork/slaapritueel.jpg"
                        },
                        {
                            title: "Belastbaarheid",
                            text: "Streef naar een evenwicht in je lichamelijke en mentale belastbaarheid.",
                            image: "/images/activitywork/rustmomenten.jpg"
                        },
                        {
                            title: "Roken en alcohol",
                            text: "Roken en alcoholgebruik kunnen een negatieve invloed hebben op je gezondheid.",
                            image: "/images/activitywork/smoking.jpg"
                        },
                    ]
                },
                {
                    type: "Text",
                    content: "Op deze thema’s gaan we verder inzoomen bij 'Belastbaarheid'."
                },
            ]
        },
        {
            title: "Overzicht",
            overview: true, 
            cardContents: [
                {
                    type: "Text",
                    content: "Jouw belastbaarheid bepaalt wat je fysiek en mentaal aankan. De belastbaarheid is dynamisch en wordt beïnvloed door:"
                },
                {
                    type: "List",
                    content: [
                        "Gezonde beweeggewoontes te hanteren",
                        "Te werken aan je veerkracht",
                        "Aandacht te hebben voor je nachtrust",
                        "Gezond te eten",
                        "Roken en alcohol te vermijden"
                    ]
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
                {
                    type: "Image",
                    link: "/images/activitywork/family.jpg"
                }
            ]
        },
        {
            title: "Meer weten?",
            cardContents: [
                {
                    type: "Text",
                    content: ["Wil je meer weten over dit topic? Bekijk dan de module ", {type: "bold", content: "beweging"}, "."]
                },
                {
                    type: "Shortcut",
                    module: "MOVEMENT",
                    submodule: "MOV_MOD_2",
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
    description: "Eet jij al gezond, of kan je hier nog meer aandacht aan besteden? Ontdek het in dit onderdeel.",
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
            title: "Gezonde eetgewoontes",
            cardContents: [
                {
                    type: "Text",
                    content: "Gewichtstoename, onregelmatige eetpatronen, het samengaan van twee of meer ziektebeelden… Ook chronische pijn heeft meer te maken met voeding dan je misschien zou denken. Gepaste voedselopname kan de werking van het zenuw- en het immuunsysteem en van het hormoonstelsel verbeteren, wat een directe invloed heeft op de pijnervaring. Op gewicht blijven of kilo’s verliezen verlicht de druk op de gewrichten en houdt sluimerende ontstekingen klein."
                },
                {
                    id: "ACT-MOD-7-SLIDER-1",
                    type: "Slider",
                    text: "Ben je bewust van wat je eet?",
                    oneTime: false,
                    from: 1,
                    to: 5,
                    mapping: "5-AGREE",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            title: "Alcohol",
            showIfAnswered: ["ACT-MOD-7-SLIDER-1"],
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
            title: "Energie",
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
            title: "Energieverbruik",
            cardContents: [
                {
                    type: "Text",
                    content: "Eet met mate, niet te weinig, maar ook niet te veel. Wat is te weinig of te veel eten? Dit hangt voor een groot deel af van hoe fysiek actief je bent en jouw biologische postuur. Eet je meer dan de energie die je verbruikt, dan kom je bij. Eet je minder, dan val je af."
                },
                {
                    type: "Text",
                    content: "De BMI geeft aan of je gewicht gezond is ten opzichte van je lengte en wordt als volgt berekend: Gewicht(kg) / Lengte(m)^2. Een gezond BMI heeft een score van 18.5-24.9"
                },
                {
                    type: "Image",
                    link: "/images/activitywork/bmi.jpg"
                },
                {
                    type: "Text",
                    content: "En hoeveel energie of kcal mag je dan opeten? Een gemiddeld persoon (50-80 kg) die de bewegingsrichtlijnen (30-40 min sporten 3 keer per week) volgt verbruikt 1800–2400 kcal per dag of 25-35 kcal per kg lichaamsgewicht per dag."
                },
            ]
        },
        {
            title: "Macronutriënten",
            cardContents: [
                {
                    type: "Text",
                    content: "Er zijn 3 soorten macronutriënten, namelijk koolhydraten, proteïnen en vetten. Koolhydraten en vetten zijn de voornaamste bronnen van energie en proteïnen worden gebruikt voor het opbouwen van weefsels zoals spieren. Beperk vooral verzadigde vetzuren (kaas, boter…), snelle suikers (snoep, frisdrank…) en ultra bewerkt voedsel (fastfood, beleg…), want deze zorgen voor een verhoogd ontstekingsniveau in het lichaam en vormen een risico allerlei gezondheidsproblemen. Hieronder volgen de consumptierichtlijnen voor een gemiddeld persoon (50-80 kg) die de bewegingsrichtlijnen (30-40 min sporten 3 keer per week) volgt van ieder macronutriënt evenals de aanbevolen voedingsbronnen:"
                },
                {
                    type: "List",
                    content: [
                        "Koolhydraten (aardappelen, rijst of volkoren deegwaren): 45-65% van de totale voedselinname of 3-5g per kg lichaamsgewicht per dag.", 
                        "Vetten (plantaardige oorsprong of vette vis): 20-35% van de totale voedselinname.", 
                        "Proteïnen (vlees, bij voorkeur gevogelte, vis of vervangproducten zoals tofoe, tempé, ...): 0.8-1.0g per kg lichaamsgewicht per dag."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/nutrients.jpg"
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
                    type: "Break"
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
                    type: "Break"
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
                    type: "Break"
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
                    oneTime: false,
                    from: 1,
                    to: 5,
                    mapping: "5-AGREE",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            title: "Tijdstip eten",
            showIfAnswered: ["ACT-MOD-7-SLIDER-2"],
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
                    oneTime: false,
                    from: 1,
                    to: 5,
                    mapping: "5-AGREE",
                    showValue: true,
                    save: true,
                }
            ]
        },
        {
            title: "Mindful eten",
            showIfAnswered: ["ACT-MOD-7-SLIDER-3"],
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
            title: "Overzicht",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Voeding en eetgewoontes hebben meer te maken met pijn dan je misschien zou denken. Veel mensen willen graag gezond(er) eten, maar weten precies niet hoe ze hun voedingspatroon kunnen aanpassen. Gezond eten betekent vooral dat je slimme, gezonde keuzes maakt. De drie belangrijkste principes  zijn:"
                },
                {
                    type: "List",
                    content: ["Eet evenwichtig", "Eet met mate, niet te weinig maar ook niet te veel", "Eet gevarieerd, ga voor kleur op je bord"]
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
    description: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Hoe veer je terug na pijn of een herval/opstoot van je klachten?",
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
                    content: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Het gaat niet alleen over ‘terugveren’ naar de oorspronkelijke positie, maar ook om doorgroeivermogen. Wil je meer weten? Bekijk dan de module over stress en veerkracht."
                },
                {
                    type: "Shortcut",
                    module: "STRESS",
                    submodule: "STR_MOD_6",
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
    description: "Slaap je goed? Ook slaap verhoogt je belastbaarheid. Lees hier de belangrijkste tips rond slaapkwaliteit.",
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
                    oneTime: false,
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
            showIfAnswered: ["ACT-MOD-9-SLIDER-1"],
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
                {
                    type: "Image",
                    link: "/images/activitywork/alarm.jpg"
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
    title: "Belasting & Belastbaarheid",
    submodules: [ACTMOD1, ACTMOD2WORK, ACTMOD3ERGO, ACTMOD4MGMT, ACTMOD5, ACTMOD6MOV, ACTMOD7FOOD, ACTMOD8RES, ACTMOD9SLP]
}


export default ActivityWorkScript;