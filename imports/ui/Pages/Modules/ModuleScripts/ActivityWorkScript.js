const ACTMOD1 = {
    id: "ACT_MOD_1",
    title: "Belasting en belastbaarheid?",
    titleMarkup: ["Belasting en", "belastbaarheid?"],
    part: 1,
    description: "Belasting is alles wat je fysiek en psychisch ondergaat in de loop van de dag. Bijvoorbeeld: je werk, huishoudelijke taken, vrije tijd, stress, … Ervaar jij een hoge of lage belasting? Hoe ga je hier mee om?",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
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
    part: 2,
    description: "Kan je best rusten als je pijn hebt of net niet? Of ga je naar je werk als je pijn hebt? Vragen die we bespreken tijdens deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
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
            ]
        },
        {
            title: "Reflectie oefening",
            cardContents: [
                {
                    type: "Selection",
                    id: "ACT-MOD-2-Q1",
                    options: ["Waardering", "Erkenning", "Betrokken in de samenleving", "Sociale steun", "Sociale status"]
                },
                {
                    type: "Text",
                    content: "Kan je nog meer voordelen van werk vinden?"
                },
            ]
        },
        {
            title: "Voordelen werk",
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
                    content: "Er zijn een aantal voorwaarden verbonden om te kunnen (blijven werken) met pijn zoals:"
                },
                {
                    type: "List",
                    content: ["Regelmogelijkheden privé", "Werkmotivatie", "Zelfmanagementvaardigheden", "Persoonlijke kenmerken", "Regelmogelijkheden werk"]
                },
                {
                    type: "Todo - Invullen en aanduiden",
                    text: "Tekst: Duid aan welke voorwaarden voor jou belangrijk zijn. Vul aan wat jij belangrijk vindt."
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
    part: 3,
    description: "Heb jij soms pijn bij het uitvoeren van werkgerelateerde taken? Weet je niet goed hoe je een taak op een ergonomische manier kan uitvoeren? Lees dan zeker deze module!",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
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
                    type: "Selection",
                    id: "ACT-MOD-3-Q4",
                    options: ["Fysiek werk", "Zorghandelingen", "Kantoor"]
                },
                {
                    type: "TODO-Multiple select",
                    text: "Maak er een multiple select van. Verder moeten hier ook nog de kaarten komen wanneer ze de opties aanduiden, die wat uitleg geven over hoe ze elk van de situaties het best aanpakken!"
                }
            ]
        },
    ]
}


const ACTMOD4MGMT = {
    id: "ACT_MOD_4",
    title: "Activiteitenmanagement",
    titleMarkup: ["Belasting -", "Activiteitenmanagement"],
    part: 4,
    description: "Vind je het moeilijk om een evenwicht te vinden tussen jouw activiteiten en rust? In de module activiteitenmanagement krijg je tips om beter te leren omgaan met je energie.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: ["In het onderdeel activiteitenmanagement geven we je een leidraad mee om een beter evenwicht te vinden tussen activiteit en rust om zo binnen je eigen grenzen terug actiever te worden. Het is niet aangewezen om je rust te laten variëren op basis van je klachten. Dat is immers een klachtafhankelijk patroon. Dit patroon zal de ", {type: "italic", content: "klachten op langere termijn in stand houden en verergeren"}, ". Activiteitenmanagement heeft als doel (beter) te leren omgaan met je energie. Verwacht niet dat je onmiddellijk meer actief zal zijn, maar op lange termijn is dit wel de doestelling. Op korte termijn is het de bedoeling om je activiteiten vooraf in te plannen en je activiteiten geleidelijk op te bouwen."]
                },
            ]
        },
        {
            title: "Doe de test",
            cardContents: [
                {
                    type: "Text",
                    content: "Bedenk eerst voor jezelf welke activiteiten je graag weer zou willen oppakken of zou willen uitbreiden. Misschien wil je naar de supermarkt kunnen wandelen of naar het voetbalveld kunnen fietsen. Misschien wil je wel iets heel specifieks zoals eten in een bepaald restaurant, weer eens op vakantie naar de plek waar je vroeger zo graag kwam. Of je kindje te voet naar school brengen. Bedenk wat daarvoor nodig is en stel dat als je doel. De afstand tussen mijn huis en de school is 3km. Ik verdeel dit doel op in stapjes van bijvoorbeeld 0,5km."
                },
                {
                    type: "Text",
                    content: "Door doelen te stellen wordt het duidelijk wat je wil gaan bereiken ondanks dat je pijn ervaart. Het maakt duidelijk wat waarde heeft en wat belangrijk voor je is. Schrijf voor jezelf op welke doelen je wil bereiken op korte termijn en op lange termijn."
                },
                {
                    type: "TODO - Text input",
                },
            ]
        },
        {
            title: "Basisprincipes om je omgeving aan te passen",
            cardContents: [
                {
                    type: "Text",
                    content: "Laat je bij het stellen van doelen niet leiden door strakke tijdsschema’s, ook al kan door sociale of andere druk de tijd een belangrijke factor worden. Strakke tijdschema’s werken meestal stress verhogend en dreigen ons terug uit evenwicht te brengen. Bovendien werken ze demotiverend, doordat we ons teleurgesteld voelen als we bepaalde doelen niet bereiken binnen de gestelde termijn."
                },
                {
                    type: "Text",
                    content: "Probeer bij het stellen van doelen je te laten leiden door je visie, waarden en principes. Doelen kies je in functie van wat je als belangrijk aanvoelt, hoe je je leven wilt leiden. Omgekeerd kan het stellen van een doel dat indruist tegen een belangrijke waarde, ongewenste effecten met zich meebrengen."
                },
            ]
        },
        {
            title: "Je activiteiten",
            cardContents: [
                {
                    type: "Text",
                    content: "Om een zicht te krijgen van jouw activiteiten, dien je een overzicht te maken van de activiteiten van de afgelopen week."
                },
                {
                    type: "Text",
                    content: "Bepaal per activiteit/taak de mate van belasting. Op deze manier kunnen wij gerichte tips geven na het invullen van het schema."
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Licht"}]
                },
                {
                    type: "List",
                    content: ["Deze activiteit kan je comfortabel uitvoeren", "Er is geen verandering in je pijn", "Deze activiteit kan voor een langere tijd worden uitgevoerd", "Deze taak kan je veilig uitvoeren"]
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Middelzwaar"}]
                },
                {
                    type: "List",
                    content: ["Deze activiteit kan je voor kortere tijd uitvoeren", "Te lange uitvoering geeft toename van je pijn", "Het is oké indien je dit niet te vaak of niet te lang moet doen", "Er is geen probleem om deze activiteit af en toe te moeten uitvoeren"]
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Zwaar"}]
                },
                {
                    type: "List",
                    content: ["Deze activiteit zorgt voor een overbelasting van je lichaam", "Geeft te sterke toename van je pijn", "Dient te worden vermeden in je job", "Het is niet oké ook al dien je de activiteit kort of uitzonderlijk uit te voeren"]
                },
            ]
        },
        {
            title: "Activiteitenlogboek",
            cardContents: [
                {
                    type: "Activiteitenlogboek",
                }
            ]
        },
    ]
}

const ACTMOD5 = {
    id: "ACT_MOD_5",
    title: "Belastbaarheid",
    titleMarkup: ["Belastbaarheid"],
    part: 5,
    description: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aan kan. Hoe is jouw belastbaarheid? In deze module krijg je handvaten om je belastbaarheid te verhogen.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
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
                    type: "Swipe",
                    buttons: {disagree: "Nee", agree: "Ja"},
                    options: [
                        {
                            text: "Ik heb een vast slaapritueel",
                            image: "/images/activitywork/slaapritueel.jpg"
                        },
                        {
                            text: "Ik bouw regelmatig een rustmoment in",
                            image: "/images/activitywork/rustmomenten.jpg"
                        },
                        {
                            text: "Ik eet gezond",
                            image: "/images/activitywork/food.jpg"
                        },
                        {
                            text: "Ik beperk mijn alcoholinname",
                            image: "/images/activitywork/drinken.jpg"
                        },
                        {
                            text: "Ik rook",
                            image: "/images/activitywork/smoking.jpg"
                        },
                        {
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
    ]
}

const ACTMOD6MOV = {
    id: "ACT_MOD_6",
    title: "Gezond bewegen",
    titleMarkup: ["Belastbaarheid - Gezond bewegen"],
    part: 6,
    description: "Hoe kan je gezond bewegen inbouwen in jouw dagelijks leven? Dit leer in je deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
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
    ]
}

const ACTMOD7FOOD = {
    id: "ACT_MOD_7",
    title: "Gezonde voeding",
    titleMarkup: ["Belastbaarheid - Gezonde voeding"],
    part: 7,
    description: "Hoe kan je gezond bewegen inbouwen in jouw dagelijks leven? Dit leer in je deze module.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
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
                    type: "Textballon",
                    content: "Maak van de quotes nog leuke tekstballonnen of quotes"
                },
                {
                    type: "Text",
                    content: "“Ik ontbijt niet want ik wil vermageren”"
                },
                {
                    type: "List",
                    content: ["Je eet de calorieën er toch weer aan!", "Niet ontbijten doet je in de loop van de voormiddag grijpen naar suikers en vetrijke tussendoortjes"]
                },
                {
                    type: "Text",
                    content: "“Ik kan onmogelijk 300 gram groenten eten per dag”"
                },
                {
                    type: "List",
                    content: ["Zet voor het eten alvast een schaaltje met kerstomaten, stukjes komkommer of wortelreepjes op tafel", "Of zet een schaaltje snoepgroenten op je bureau of in de keuken naast je werkblad.", "Leg groenten tussen je boterhammen", "Verwerk ook groenten in puree", "Maak een lekkere, verse soep", "Haal diepvriesgroenten in huis: ze zijn op drukke dagen een goed en snel alternatief"]
                },
                {
                    type: "Text",
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
                    type: "Foto - Eten met tijd",
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
                    type: "Foto - Mindful eten",
                },
            ]
        },
        {
            title: "Alcohol",
            cardContents: [
                {
                    type: "Text",
                    content: ["Alcohol werkt pijnstillend en kan effect hebben op je stemming. Met als gevolg dat je meer wordt afgeleid van je pijn. Op zich hoeft alcoholgebruik in die omstandigheden geen probleem te zijn, maar het kan wel " , {type: "italic", content: "problematisch worden wanneer je het systematisch gaat gebruiken"}, ". Veelvuldig drinken is immers geen ideaal middel tegen pijn, spanning of angst."]
                },
                {
                    type: "Text",
                    content: ["De opluchting en de ontspanning zijn het gevolg van de eerste glazen. Als je meer drinkt blijkt alcohol ", {type: "italic", content:"dikwijls negatieve gevoelens te versterken"}, ". Uit onderzoek weten we dat veel drinken de gevoelens van angst of somberheid doet toenemen. Hoe meer en hoe frequenter je drinkt, hoe meer de negatieve gevoelens zullen versterkt worden. De kans op algemene somberheid of depressie neemt toe. Bij veel drinken voel je je nadien miserabel omwille van de bekende 'kater'. ", {type: "italic", content: "Je wordt dan net gevoeliger voor pijn"}, ", terwijl je er tegelijkertijd minder 'weerbaar' tegenover wordt. Opnieuw drinken lijkt even een oplossing te bieden, maar je komt in een vicieuze cirkel terecht."]
                },
                {
                    type: "Foto - Alcohol",
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
    ]
}

const ACTMOD8RES = {
    id: "ACT_MOD_8",
    title: "Veerkracht",
    titleMarkup: ["Belastbaarheid - Veerkracht"],
    part: 8,
    description: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Hoe veer je terug na herval of na een acute pijn op stoot?",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [
        {
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Veerkracht is het vermogen om je aan te passen aan stress en tegenslag en daar misschien zelfs sterker uit te komen. Het gaat niet alleen over ‘terugveren’ naar de oorspronkelijke positie, maar ook om doorgroeivermogen."
                },
                {
                    type: "Snelkoppeling module Stress",
                },
            ]
        },
        {
            title: "Video",
            cardContents: [
                {
                    type: "Text",
                    content: "Bekijk onderstaande video."
                },
                {
                    type: "Video",
                    link: "https://www.youtube.com/embed/IYHhOyU8wUk"
                },
            ]
        },
    ]
}

const ACTMOD9SLP = {
    id: "ACT_MOD_9",
    title: "Nachtrust",
    titleMarkup: ["Belastbaarheid - Nachtrust"],
    part: 9,
    description: "Slaap je goed? Ook slaap versterkt je basis. Lees hier de belangrijkste tips rond slaapkwaliteit.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
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
                    text: "Slaap je goed",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
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
    ]
}


const ActivityWorkScript = {
    id: "ACT",
    title: "Activiteit en Werk",
    submodules: [ACTMOD1, ACTMOD2WORK, ACTMOD3ERGO, ACTMOD4MGMT, ACTMOD5, ACTMOD6MOV, ACTMOD7FOOD, ACTMOD8RES, ACTMOD9SLP]
}


export default ActivityWorkScript;