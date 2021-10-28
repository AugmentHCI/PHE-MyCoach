const MOVMOD1 = {
    id: "MOV_MOD_1",
    title: "Voordelen van bewegen",
    titleMarkup: ["Voordelen", "van bewegen"],
    part: 1,
    description: "Bewegen is één van de beste dingen die je kan doen voor je gezondheid. In dit onderdeel kom je alle voordelen van bewegen en lichamelijke activiteit te weten.",
    duration: "10 minuten",
    type: "Informatief",
    image: "mov-mod-1",
    imageWidth: "180px",
    icon: "thumbs-up",
    cards: [{
            title: "Introductie",
            cardContents: [
                {
                    type: "Text",
                    content: "Bewegen is één van de beste dingen die je kan doen voor je gezondheid."
                },
                {
                    type: "Selection",
                    id: "MOV-MOD-1-Q1",
                    width: "fit",
                    question: "Welk gevoel illustreert het best hoe jij je bij fysieke activiteit voelt?",
                    options: [{id: "😄", text: "😄 blij"}, {id: "😟", text: "😟 bang"}, {id: "😡", text: "😡 boos"},{id: "😩", text: "😩 gestresst"}, {id: "😒", text: "😒 geërgerd"},{id: "😔", text: "😔 droevig"}, {id: "🥴", text: "🥴 misselijk"}, {id: "😰", text: "😰 hopeloos"}, {id: "😴", text: "😴 moe"}, {id: "😆", text: "😆 energiek"}]
                }]
        },
        {
            showIfAnswered: ["MOV-MOD-1-Q1"],
            title: "Voordelen van bewegen",
            cardContents: [
                {
                    type: "Text",
                    content: "In het volgende filmpje krijg je een overzicht van alle voordelen van bewegen."
                },
                {
                    type: "Video",
                    link: "https://player.vimeo.com/video/556073021"
                },
            ]
        },
        {
            title: "Bewegen en pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "In de module pijneducatie heb je al geleerd hoe pijn ontstaat en dat het, zowel bij acute als bij chronische pijn, aangewezen is om binnen de mate van het mogelijke actief te blijven. Hier is nog eens een kort overzicht."
                }
            ]
        },
        {
            title: "Acute pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "Acute pijn is vaak een reactie op weefselschade, zoals een gebroken been. Het pijnsysteem wordt gevoeliger zodat we het aangedane lichaamsdeel tijdelijk ontlasten. Ontlasten betekent niet niets doen. Bewegen is een belangrijk onderdeel van het herstelproces."
                },
                {
                    type: "Image",
                    width: "100",
                    link: "/images/movement/brain.png"
                },
                {
                    type: "Text",
                    content: "Pijn die je ervaart tijdens bewegen is een reactie van het zenuwstelsel en betekent niet noodzakelijk dat je meer schade oploopt. Naarmate het letsel herstelt neemt de overgevoeligheid van het zenuwstelsel af en zal je minder pijn ervaren."
                },
                {
                    type: "Image",
                    link: "/images/movement/broken.jpg"
                },
            ]
        },
        {
            title: "Chronische pijn",
            cardContents: [
                {
                    type: "Text",
                    content: "Bij chronische of langdurige pijn is de relatie met weefselschade veel kleiner. De schade is meestal hersteld, maar de overgevoeligheid van het zenuwstelsel is nog steeds aanwezig. Normale inspanningen kunnen dan pijnlijk blijven of soms kan er zelfs spontane pijn optreden. Het is in dit geval heel belangrijk om te beseffen dat pijn niet noodzakelijk wil zeggen dat je schade oploopt. Een initiële toename in pijnklachten is normaal wanneer je opnieuw meer gaat bewegen of activiteiten gaat opbouwen. Toch is het cruciaal dat je dit doet, en wel op een veilige en consequente manier! Na verloop van tijd zal de overgevoeligheid van het zenuwstelsel terug afnemen en zal je minder last ervaren."
                },
                {
                    type: "Image",
                    link: "/images/movement/neckpain.jpg"
                },
                {
                    type: "Text",
                    content: "Je ondervindt dan ook de andere voordelen van bewegen; je fysieke en mentale welzijn krijgt een boost, wat helpt bij het realiseren van de doelen die jij belangrijk vindt. De aanhouder wint!"
                },
                {
                    type: "Image",
                    link: "/images/movement/car.jpg"
                },
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Bewegen is één van de beste dingen die je kan doen voor je gezondheid. Bewegen..."
                },
                {
                    type: "List",
                    content: ["Traint het hart en beperkt het risico op hart- en vaatzieken.",
                    "Geeft je immuunsysteem een boost.",
                    "Zet hormonen vrij die zorgen voor een goed gevoel en pijndemping.",
                    "Traint de spieren, houdt de gewichten soepel en versterkt de botten.",
                    "Houdt je gewicht onder controle en beperkt het risico op diabetes type 2.",
                    "Zorgt voor een betere concentratie en een beter geheugen.",
                    "Werkt ontspannend en leidt tot een betere slaap."]
                }]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi dit onderdeel",
            textOnCompleted: "Keer terug"
        }
    ]
}

const MOVMOD2 = {
    id: "MOV_MOD_2",
    title: "Wat is gezond bewegen?",
    titleMarkup: ["Wat is gezond", "bewegen?"],
    part: 2,
    description: "Hoeveel moet je nu bewegen voor je gezondheid en welke vormen van bewegen zijn het best? In dit onderdeel kom je hier alles over te weten.",
    duration: "10 minuten",
    type: "Informatief",
    image: "mov-mod-2",
    imageWidth: "220px",
    icon: "lifting",
    cards: [{
            title: "Bewegingsdriehoek",
            cardContents: [
                {
                    type: "Text",
                    content: "Er bestaat niet één enkele aanbeveling voor beweging. Iedereen is anders en heeft andere klachten, noden én grenzen. En iedereen start op een ander niveau. Het is dus niet de bedoeling dat de aanbevolen beweging in één keer wordt nagestreefd. Verantwoord opbouwen en stap voor stap vooruitgaan is de boodschap: elke stap telt! Op jouw eigen ritme. Laat je leiden door de bewegingsdriehoek: je kompas voor een beweeglijker leven."
                },
                {
                    type: "Text",
                    content: "Bekijk hier de uitleg van het Vlaams instituut Gezond Leven over de bewegingsdriehoek:"
                },
                {
                    type: "Infographic",
                }]
        },
        {
            title: "Hoeveel beweeg je best?",
            cardContents: [
                {
                    type: "Text",
                    content: "Hoeveel moet je bewegen voor je gezondheid, hier heb je stap voor stap een overzicht!"
                },
                {
                    type: "Subtitle",
                    underline: true,
                    content: "Elke 30 minuten"
                },
                {
                    type: "Text",
                    content: "Probeer langdurig stilzitten te vermijden en regelmatig te onderbreken (idealiter iedere 20 à 30 minuten). Sta even recht, beweeg een beetje of wissel van houding. Zo stimuleer je de doorbloeding in je lichaam. Je zal ook beter kunnen slapen en je loopt minder risico op verschillende aandoeningen zoals diabetes type 2."
                },
                {
                    type: "Image",
                    link: "/images/movement/deskwork.jpg"
                },
                {
                    type: "Subtitle",
                    underline: true,
                    content: "Iedere dag"
                },
                {
                    type: "Text",
                    content: "Probeer actiever te zijn doorheen de dag. Neem de trap, wandel zoveel mogelijk rond, wissel zittend en staand werk af… Iedere stap telt! Dit zijn activiteiten aan een lage intensiteit, je hartslag blijft rustig dus dit is niet vermoeiend. De meeste taken binnen actieve jobs vallen onder deze categorie. Probeer bijvoorbeeld rustig op te bouwen naar 10.000 stappen per dag."
                },
                {
                    type: "Image",
                    link: "/images/movement/stairs.jpg"
                },
                {
                    type: "Subtitle",
                    underline: true,
                    content: "Wekelijks"
                },
                {
                    type: "Text",
                    content: "Beweeg iedere week 150 tot 300 minuten aan matige intensiteit óf 75 tot 150 minuten aan hoge intensiteit óf een combinatie van beiden. Dat kan door 5 dagen per week gedurende 30 minuten te bewegen aan matige intensiteit. Je kan dit ook opsplitsen in kleinere blokken van bijvoorbeeld 10 minuten. Tijdens inspanningen aan matige intensiteit gaat je hartslag omhoog, adem je sneller maar je raakt niet uitgeput (stevig doorstappen, rustig fietsen of zwaar werk in de tuin). Bij activiteiten aan een hoge intensiteit raak je wel uitgeput (hardlopen of andere sporten). Beweeg je nog meer? Dan geeft dit nog extra voordelen voor de gezondheid! Ook bij deze intensievere activiteiten is het belangrijk dat je ze geleidelijk opbouwt."
                },
                {
                    type: "Image",
                    link: "/images/movement/bycicle.jpg"
                },
                {
                    type: "Subtitle",
                    underline: true,
                    content: "2 keer per week"
                },
                {
                    type: "Text",
                    content: "Probeer 2 keer per week de kracht en uithouding van je globale spiergroepen te trainen. Doe dit aan de hand van functionele oefeningen."
                },
                {
                    type: "Image",
                    link: "/images/movement/workout.png"
                }]
        },
        {
            title: "Oefening gezonde beweeggewoontes",
            cardContents: [
                {
                    type: "Text",
                    content: "Hier volgen de beweeggewoontes van een viertal personen doorheen hun dag. Denk jij dat deze personen een gezonde beweeggewoonte hebben of niet? Swipe door hun verhaal en antwoord dan op de vragen!"
                },
            ]
        },
        {   
            title: "Alain",
            cardContents: [
                {
                    type: "Text",
                    content: "We beginnen met Alain, een 32-jarige receptionist."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/alain/alain1.png"},
                        {image: "/images/movement/alain/alain2.png"},
                        {image: "/images/movement/alain/alain3.png"},
                        {image: "/images/movement/alain/alain4.png"},
                        {image: "/images/movement/alain/alain5.png"},
                        {image: "/images/movement/alain/alain6.png"},
                        {image: "/images/movement/alain/alain7.png"},
                        {image: "/images/movement/alain/alain8.png"},
                        {image: "/images/movement/alain/alain9.png"},
                        {image: "/images/movement/alain/alain10.png"},
                        {image: "/images/movement/alain/alain11.png"},
                    ]
                },
                {
                    type: "Break"
                },
                {
                    id: "MOV-MOD-2-Q1",
                    type: "Question",
                    question: "Heeft Alain gezonde beweeggewoontes?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Alain zit veel te veel stil en beweegt onvoldoende. Het grootste deel van de tijd op zijn werk en thuis brengt hij al zittend door. Hij haalt de normen voor bewegen aan matige of intensieve intensiteit niet.",
                    onCorrect: "Nee, inderdaad.",
                    onIncorrect: "Toch niet!"
                },
            ]
        },
        {   
            showIfAnswered: ["MOV-MOD-2-Q1"],
            title: "Lydia",
            cardContents: [
                {
                    type: "Text",
                    content: "Nu een tweede voorbeeld: Lydia, een 27-jarige poetshulp."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/lydia/lydia1.png"},
                        {image: "/images/movement/lydia/lydia2.png"},
                        {image: "/images/movement/lydia/lydia3.png"},
                        {image: "/images/movement/lydia/lydia4.png"},
                        {image: "/images/movement/lydia/lydia5.png"},
                        {image: "/images/movement/lydia/lydia6.png"},
                        {image: "/images/movement/lydia/lydia7.png"},
                        {image: "/images/movement/lydia/lydia8.png"},
                        {image: "/images/movement/lydia/lydia9.png"},
                        {image: "/images/movement/lydia/lydia10.png"}
                    ]
                },
                {
                    type: "Break"
                },
                {
                    id: "MOV-MOD-2-Q2",
                    type: "Question",
                    question: "Heeft Lydia gezonde beweeggewoontes?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Lydia zit niet lang stil, zowel op haar werk als thuis doet ze veel activiteiten met een lichte intensiteit. Maar ze haalt de normen voor bewegen aan matige of intensieve intensiteit niet.",
                    onCorrect: "Nee, ook zij niet.",
                    onIncorrect: "Ook niet."
                },
            ]
        },
        {   
            showIfAnswered: ["MOV-MOD-2-Q2"],
            title: "Guido",
            cardContents: [
                {
                    type: "Text",
                    content: "Hier een derde voorbeeld van Guido, die al 15 jaar werkt op de marketingafdeling."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/guido/guido1.png"},
                        {image: "/images/movement/guido/guido2.png"},
                        {image: "/images/movement/guido/guido3.png"},
                        {image: "/images/movement/guido/guido4.png"},
                        {image: "/images/movement/guido/guido5.png"},
                        {image: "/images/movement/guido/guido6.png"},
                        {image: "/images/movement/guido/guido7.png"},
                        {image: "/images/movement/guido/guido8.png"},
                        {image: "/images/movement/guido/guido9.png"},
                        {image: "/images/movement/guido/guido10.png"}
                    ]
                },
                {
                    type: "Break"
                },
                {
                    id: "MOV-MOD-2-Q3",
                    type: "Question",
                    question: "Heeft Guido gezonde beweeggewoontes?",
                    options: ["Ja", "Nee"],
                    correct: "Nee",
                    explanation: "Door met de fiets te gaan werken haalt Guido de norm van bewegen aan matige of intensieve intensiteit. Maar zowel op het werk als thuis zit hij te lang stil.",
                    onCorrect: "Ook Guido niet.",
                    onIncorrect: "Ook Guido niet."
                },
            ]
        },
        {   
            showIfAnswered: ["MOV-MOD-2-Q3"],
            title: "Michel",
            cardContents: [
                {
                    type: "Text",
                    content: "En ten slotte Michel, een 61-jarige leerkracht."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/michel/michel1.png"},
                        {image: "/images/movement/michel/michel2.png"},
                        {image: "/images/movement/michel/michel3.png"},
                        {image: "/images/movement/michel/michel4.png"},
                        {image: "/images/movement/michel/michel5.png"},
                        {image: "/images/movement/michel/michel6.png"},
                        {image: "/images/movement/michel/michel7.png"},
                        {image: "/images/movement/michel/michel8.png"},
                        {image: "/images/movement/michel/michel9.png"},
                        {image: "/images/movement/michel/michel10.png"},
                        {image: "/images/movement/michel/michel11.png"}
                    ]
                },
                {
                    type: "Break"
                },
                {
                    id: "MOV-MOD-2-Q4",
                    type: "Question",
                    question: "Heeft Michel gezonde beweeggewoontes?",
                    options: ["Ja", "Nee"],
                    correct: "Ja",
                    explanation: "Michel wisselt voldoende af tussen staand en zittend werk. Ook buiten het werk beweegt hij voldoende. Door met de fiets te gaan werken haalt hij de normen voor bewegen aan matige of intensieve intensiteit.",
                    onCorrect: "Inderdaad!.",
                    onIncorrect: "Toch wel!"
                },
            ]
        },
        {
            showIfAnswered: ["MOV-MOD-2-Q4"],
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Verantwoord opbouwen en stap voor stap vooruitgaan naar de bewegingsrichtlijnen, dat is de manier om jouw gezondheid een boost te geven:"
                },
                {
                    type: "List",
                    content: ["Probeer na 30 minuten stilzitten, 3 minuten te bewegen.",
                        "Bouw beweging door de dag op. Werk bijvoorbeeld naar 10000 stappen per dag.",
                        "Beweeg elke week 150 à 300 minuten aan matige intensiteit of 75-150 minuten aan hoge intensiteit of een combinatie van beide.",
                        "Train 2 keer per week de kracht en uithouding van de grote spiergroepen.",]
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


const MOVMOD3 = {
    id: "MOV_MOD_3",
    title: "Bewegen op het werk",
    titleMarkup: ["Bewegen op", "het werk"],
    part: 3,
    description: "Hoe kan je beweging en houdingsveranderingen toepassen als je aan het werk bent? In dit onderdeel kom je hier alles over te weten.",
    duration: "10 minuten",
    type: "Interactief",
    image: "mov-mod-3",
    imageWidth: "180px",
    icon: "work",
    cards: [
        {
            title: "Beweeg jij voldoende?",
            cardContents: [
                {
                    type: "Text",
                    content: "We beginnen dit onderdeel met de volgende vraag:"
                },
                {
                    id: "MOV-MOD-3-INTRO",
                    type: "Slider",
                    text: "Slaag jij er op het werk al in om voldoende te bewegen of af te wisselen tussen verschillende houdingen?",
                    from: 1,
                    to: 5,
                    showValue: true,
                    save: true,
                    mapping: "5-FREQUENCY"
                }
            ]
        },
        {
            title: "Tips op een rijtje",
            showIfAnswered: ["MOV-MOD-3-INTRO"],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier vind je tal van tips om meer te bewegen op het werk."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/stairs.jpg", title: "Gezonde keuzes", text: "Maak bewust gezonde keuzes zoals het nemen van de trap in plaats van de lift."},
                        {image: "/images/movement/file.jpg", title: "Vermijd de file", text: "Maak je woon-werkverkeer actiever door het nemen van de fiets of stap een halte vroeger van de bus. Woon je te ver? Misschien helpt een elektrische fiets of neem je plooifiets mee in de koffer."},
                        {image: "/images/movement/standup.jpg", title: "Wissel staan en zitten af", text: "Maak een lijstje van taken die je al staand of zittend wil doen. Telefoneren kan je perfect al wandelend doen. Een zit-sta tafel geeft nog extra mogelijkheden. Probeer iedere 30 minuten af te wisselen tussen staan en zitten, maar let op dat je dit rustig opbouwt. Kan je moeilijk afwisselen tussen verschillende taken? Wissel dan eens van houding of maak 10 seconden vrij om even anders te bewegen."},
                        {image: "/images/movement/food.jpg", title: "Middagpauze", text: "De middagpauze is een ideaal moment om wat extra te bewegen. Ga alleen of samen met collega’s wandelen of speel een potje pingpong. Dit is niet alleen gezond, maar ook goed voor de teamgeest."},
                        {image: "/images/movement/buttons.jpg", title: "Beperk mails", text: "Ga langs bij een collega als je iets wilt vragen, dit is niet alleen gezond maar is ook veel efficiënter dan heen en weer ge-email."},
                        {image: "/images/movement/desk.jpg", title: "Organiseer je omgeving", text: "Zorg ervoor dat je fysiek actief moet zijn. Zet je printer niet vlak aan je bureau, zet enkel een glaasje water op je bureau in plaats van een drinkbus. De vuilbak kan je ook op een afstand zetten."},
                        {image: "/images/movement/water.jpg", title: "Drink veel water", text: "Water is niet alleen gezond, het zorgt er ook voor dat je vaker moet plassen."},
                        {image: "/images/movement/sitting.jpg", title: "Wissel eens van stoel", text: "Een andere houding zorgt voor ander spierwerk. Wissel je bureaustoel eens af met een zitbal of balanskussen. Een dynamische bureaustoel helpt ook. Je kan natuurlijk ook voor een deskbike gaan. Probeer iedere 30 minuten af te wisselen, maar let op dat je dit rustig opbouwt."},
                        {image: "/images/movement/brainstorm.jpg", title: "Actief vergaderen", text: "Je kan eens staand vergaderen of zelfs al wandelend. Je kan een vergadering ook organiseren zodat er moet bewogen worden, door bijvoorbeeld te werken met post-its. Dit is heel efficiënt en verhoogt de concentratie."},
                        {image: "/images/movement/road.jpg", title: "Neem niet de kortste weg", text: "Zet je auto wat verder op de parking, ga naar het toilet op een ander verdiep of haal je koffie in een andere cafetaria."},
                        {image: "/images/movement/stretch.jpg", title: "Stretchen", text: "Neem eens een korte pauze om wat stretchoefeningen te doen. Dit kan vanop je stoel of al staand."},
                        {image: "/images/movement/team.jpg", title: "Motiveer elkaar", text: "Spreek samen af met collega’s om iets actief te doen. Of zet de koffietassen in de kast onderaan, zo moet iedereen bukken om er één te pakken."},
                        {image: "/images/movement/alarm.jpg", title: "Zet een alarm", text: "Heb je moeite om er zelf aan te denken wanneer je eens moet bewegen? Zet dan een alarm. Er bestaat software voor je computer die je hierbij kan helpen. Je Fitbit kan ook een seintje geven wanneer je te weinig stappen zet in een uur."},
                        {image: "/images/movement/time.jpg", title: "Houd het kort", text: "Heb je geen tijd om langere pauzes te nemen? Dat is niet erg, het is beter om regelmatig een korte pauze te nemen dan één lange."},
                        {image: "/images/movement/boxes.jpg", title: "Alle beetjes helpen", text: "Laat je job het niet toe om je werkpost te verlaten? Zet dan in op microbewegingen: verplaats je lichaamsgewicht van je ene naar je andere been, ga eens op je tenen staan, wieg met je heupen, draai met je schouders of roteer eens met je romp. Deze kleine bewegingen maken het verschil."},
                    ]
                }
            ]
        },
        {
            title: "Wisselwerken",
            cardContents: [
                {
                    type: "Text",
                    content: "Wisselwerken is een gezonde, afwisselende mix van posities om je werk uit te voeren. Het ‘staat’ voor een gezonde reflex waarbij je bijvoorbeeld spontaan rechtstaat als je een telefoongesprek moet voeren, liever een wandelmeeting organiseert met je collega dan je op te sluiten in een duffe vergaderzaal, geregeld aan een sta-bureau werkt, een frisse neus haalt tijdens de lunchpauze of je liefst de auto in de garage laat staan om naar het werk te gaan."
                },
                {
                    type: "Image",
                    link: "/images/movement/wisselwerk.jpg"
                },
                {
                    type: "Text",
                    content: "Door langdurig zitten te beperken en het zitten regelmatig te onderbreken door even recht te staan, rond te stappen en te bewegen ondervind je niet alleen een positieve impact op je fysieke gezondheid, maar je krijgt ook meer energie, kan je beter concentreren en je bent ook nog eens productiever."
                },
                {
                    type: "Image",
                    link: "/images/movement/kantoor.jpg"
                },
                {
                    type: "Text",
                    content: "Beluister hier de podcast over wisselwerken van Tineke, onze preventieadviseur ergonomie:"
                },
                {
                    type: "Audiofile",
                    source: "/audio/Podcast.mp3"
                }            ]
        },
        {
            title: "Oefeningen voor op het werk",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Hier vind je een aantal oefeningen die je makkelijk kan doen op het werk. Neem regelmatig een korte pauze waarin je enkele oefeningen uitvoert. Kies er dus af en toe een oefening uit en wandel regelmatig eens rond, zo kan je meer beweging in je dag verwerken."
                }
            ]
        },
        {
            title: "Nek-schouder-bovenrug oefeningen",
            cardContents: [
                {
                    type: "Text",
                    content: "Swipe door de volgende nek-oefeningen en probeer ze kort uit."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/exercises/Picture 1.jpg", title: "Nek - Oefening 1", text: "Draai je hoofd naar links en naar rechts. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 2.jpg", title: "Nek - Oefening 2", text: "Kijk met je hoofd naar het plafond en dan naar de grond. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 3.jpg", title: "Nek - Oefening 3", text: "Breng je linkeroor naar je linkerschouder en omgekeerd. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 4.jpg", title: "Nek - Oefening 4", text: "Breng je kin naar achteren, maak dus een dubbele kin, houdt deze positie 5 seconden aan en ontspan daarna je nek/hoofd. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 5.jpg", title: "Schouder - Oefening 1", text: "Haal je schouders op en duw daarna je schouders naar beneden. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 6.jpg", title: "Schouder - Oefening 2", text: "Maak een schouderrol naar achteren en daarna naar voor. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 7.jpg", title: "Schouder - Oefening 3", text: "Leg je handen gekruist op je schouders en draai met je romp naar links en naar rechts. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 8.jpg", title: "Schouder - Oefening 4", text: "Leg je handen gekruist op je schouders en kantel je romp naar links en naar rechts. Doe deze oefening 5 maal."}
                    ]
                }]
        },
        {
            title: "Been-oefeningen",
            cardContents: [
                {
                    type: "Story",
                    dynamicHeight: false,
                    content: [
                        {image: "/images/movement/exercises/Picture 25.png", title: "Benen - Oefening 1", text: "Sta recht, ga op je tenen staan en daarna terug met je hielen op de grond. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 26.png", title: "Benen - Oefening 2", text: "Sta recht, hef je tenen en daarna terug de tenen op de grond. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 20.jpg", title: "Benen - Oefening 3", text: "Plaats je voeten op heupbreedte en zak rustig door je knieën. Zorg ervoor dat je je knieën goed naar buiten duwt en je rug in een neutrale positie blijft. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 22.jpg", title: "Benen - Oefening 4", text: "Breng je linkerknie naar je borst, houdt deze positie 5 seconden aan en doe daarna dezelfde beweging met je rechterbeen. Doe deze oefening 3 maal."},
                        {image: "/images/movement/exercises/Picture 23.jpg", title: "Benen - Oefening 5", text: "Breng je rechter hiel naar je zitvlak, houdt deze positie 5 seconden aan en doe daarna dezelfde beweging met je linkerbeen. Doe deze oefening 3 maal."}
                    ]
                }]
        },
        {
            title: "Elastiek-oefeningen",
            cardContents: [
                {
                    type: "Text",
                    content: "Als je een weerstandband (elastiek) hebt liggen, kan je deze ook gebruiken om verschillende oefeningen thuis of op kantoor te doen. Deze oefeningen versterken de armen, rug en borst"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/exercises/Picture 27.png", title: "Elastiek - Oefening 1", text: "Bevestig de elastiek bv. aan een de deurklink. Breng je armen (ellebogen 90°) naar achteren. Houdt deze positie 5 seconden aan en keer terug naar voren met de armen. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 28.png", title: "Elastiek - Oefening 2", text: "Bevestig de elastiek bv. aan een de deurklink. Breng je armen (ellebogen gestrekt) naar achteren. Houdt deze positie 5 seconden aan en keer terug naar voren met de armen. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 29.png", title: "Elastiek - Oefening 3", text: "Breng het elastiek achter je schouders- bovenrug. Strek je armen en beweeg nu met de armen naar voor. Doe deze oefening 5 maal."},
                        {image: "/images/movement/exercises/Picture 30.png", title: "Elastiek - Oefening 4", text: "Plaats beide voeten op het elastiek en houdt de elastiek vast met beide handen. Plooi en strek je ellebogen. Doe deze oefening 5 maal."}
                    ]
                }]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Ook tijdens de werkuren is het belangrijk om regelmatig te bewegen. Evalueer eens of je vaak in dezelfde houding moet werken of gedurende lange tijd dezelfde bewegingen moet uitvoeren. Probeer een aantal strategieën te bedenken om regelmatig af te wisselen in je houding en bewegingen en langdurig zitten te onderbreken. Ook voor actieve jobs kan het nuttig zijn om hier eens bij stil te staan. Met wat creativiteit en voldoende doorzettingsvermogen kan je voor elke job wel een aantal strategieën bedenken. Alle beetjes helpen!"
                }]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi dit onderdeel",
            textOnCompleted: "Keer terug"
        }
    ]
}

const MOVMOD4 = {
    id: "MOV_MOD_4",
    title: "Bewegen in je vrije tijd",
    titleMarkup: ["Bewegen in", "je vrije tijd"],
    part: 4,
    description: "Ook als je thuis bent kan je aan je belastbaarheid en conditie werken. In dit onderdeel kom je hier alles over te weten.",
    duration: "10 minuten",
    type: "Interactief",
    image: "mov-mod-4",
    imageWidth: "180px",
    icon: "running",
    cards: [
        {
            title: "Beweeg jij voldoende?",
            cardContents: [
                {
                    type: "Text",
                    content: "We beginnen dit onderdeel met de volgende vraag:"
                },
                {
                    id: "MOV-MOD-4-INTRO",
                    type: "Slider",
                    text: "Slaag jij er in je vrije tijd al in om voldoende te bewegen of af te wisselen tussen verschillende houdingen?",
                    from: 1,
                    to: 5,
                    showValue: true,
                    save: true,
                    mapping: "5-FREQUENCY"
                }
            ]
        },
        {
            title: "Tips op een rijtje",
            showIfAnswered: ["MOV-MOD-4-INTRO"],
            cardContents: [
                {
                    type: "Text",
                    content: "Hier vind je tal van tips om meer te bewegen in je vrije tijd. Veeg (swipe) naar links om ze even te bekijken."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/movement/bycicle.jpg", title: "Maak korte afstanden actief", text: "Tal van korte verplaatsingen kunnen actiever: breng de kinderen met de fiets naar school of fiets naar de bakker. Ook als je in de buurt op restaurant gaat is het de moeite om de fiets of het openbaar vervoer te nemen, zo kan je een glaasje drinken. Neem je toch de auto? Parkeer deze dan wat verder weg."},
                        {image: "/images/movement/team.jpg", title: "Beweeg samen meer", text: "Doe samen met familie of vrienden eens een actievere bezigheid. Maak samen een fietstocht, speel spelletjes, doe iets van sport of trek er met z’n allen op uit. Dit versterkt de band en je leert elkaar op een andere manier kennen."},
                        {image: "/images/movement/phone.jpg", title: "Leg de telefoon aan de kant", text: "Je kan natuurlijk al wandelend telefoneren. Maar het is nog leuker als je afspreekt om bij te praten tijdens een leuke activiteit. Ga bijvoorbeeld samen bowlen? Spreken jullie gewoon af bij het café om de hoek? Dan kan je nog altijd al staand bijpraten of neem de fiets tot daar."},
                        {image: "/images/movement/gardening.jpg", title: "Klusjes", text: "Klusjes in het huis of de tuin zijn goed om extra te bewegen. Je kan poetsen, koken, tuinieren…Sommigen doen dit graag en vinden dit zelfs ontspannend. Behoor jij niet tot deze categorie? Probeer het dan eens met je lievelingsmuziek."},
                        {image: "/images/movement/ideas.jpg", title: "Bereid je voor", text: "Een goed voorbereid persoon is er twee waard. Zo kan je beter anticiperen op onvoorziene situaties. Neem bijvoorbeeld sportkledij mee naar het werk, misschien kan je na het werk gaan sporten? Zorg ervoor dat je ook regenkledij voorziet en iets om zichtbaar te zijn in de donker."},
                        {image: "/images/movement/dog-beach.jpg", title: "Vakantie", text: "Heerlijk, verlof! De ene persoon is van nature al zeer actief tijdens vrije dagen terwijl de ander misschien liever een goed boek leest. Toch is dit een ideaal moment om extra te bewegen: ontdek nieuwe plekjes of laat je verbijsteren door de schoonheid van de natuur tijdens een leuke wandeling."},
                        {image: "/images/movement/weights.jpg", title: "Bouw op", text: "Het is niet makkelijk om actiever te worden, dit moet groeien. Bouw je te snel op of doe je te veel ineens, dan houd je het niet vol en loop je het risico op een blessure. Bouw je te traag op, dan maak je weinig progressie en blijven de voordelen voor je gezondheid beperkt."},
                        {image: "/images/movement/planning.jpg", title: "Maak een planning", text: "Om echt meer te bewegen in het dagelijks leven moet het een gewoonte worden. Nieuwe gewoontes vragen tijd en een goede planning. Plan daarom extra beweegmomenten in je agenda. Om je aan je plan te helpen herinneren kan je een alarm instellen."},
                        {image: "/images/movement/shoes.jpg", title: "Organiseer je omgeving", text: "Richt je omgeving zo in dat je herinnerd wordt om meer te bewegen. Zet je loopschoenen aan de voordeur, berg je gameconsole op in de kast, zet je fiets voor de auto..."},
                        {image: "/images/movement/engagement.jpg", title: "Gebruik je tijd nuttig", text: "Je hoeft niet lang te bewegen of sporten om al voordeel te halen voor je gezondheid. Maar zorg ervoor dat je de tijd die je vrijmaakt om te bewegen optimaal benut. Leg afleidingen zoals je GSM aan de kant, neem niet te veel pauzes, maak geen lange babbels met je buur... Focus! Muziek kan je hierbij helpen."},
                        {image: "/images/movement/yoga.jpg", title: "Beweeg bij de tv", text: "Ook tijdens het kijken naar je favoriete serie kan je meer bewegen. Je kan dit vanop de hometrainer doen of terwijl je yoga doet. Ook afwisselen tussen zitten en staan is al voldoende."},
                        {image: "/images/movement/wrench.jpg", title: "Pak activiteiten slim aan", text: "Je kan activiteiten zo aanpakken dat je meer afwisseling hebt in je houding en bewegingen. Strijk bijvoorbeeld een paar kledingstukken en leg deze dan weg. Dit is beter dan ineens een hele mand te strijken, je moet meer rondlopen waardoor je de spieren die je gebruikt tijdens het strijken even rust gunt."},
                        {image: "/images/movement/start.jpg", title: "Gewoon starten", text: "Na een lange dag op het werk kan je absoluut geen zin hebben om nog iets van sport of beweging te doen. Probeer je er toch achter te zetten, al is het maar voor 10 minuten. Je gaat zien, je kan even stoom aflaten en op termijn voel je je energieker, je concentratie verbetert en je kan beter slapen."},
                        {image: "/images/movement/balance.jpg", title: "Evenwicht", text: "Evenwicht in je activiteiten is belangrijk. Zowel over- als onder belasting vormen een risico op lichamelijke klachten. Probeer daarom evenwicht in je planning te krijgen waarbij je afwisselt tussen zware- en lichte taken, rust en beweging, zaken die je graag en minder graag doet..."},
                        {image: "/images/movement/shot.jpg", title: "Stel een doel", text: "Doelen helpen om je motivatie te verhogen. Ga voor jezelf na waarom je meer wilt bewegen? Wat moet je precies kunnen om dit doel te bereiken? Zorg ervoor dat je een haalbaar doel kiest. Is je doel te hoog, dan loop je het risico dit niet te halen wat heel demotiverend kan zijn."},
                        {image: "/images/movement/gift.jpg", title: "Goed gedaan", text: "Een gezonde levensstijl hanteren is niet gemakkelijk. Zorg er daarom voor dat je jezelf beloont wanneer je gezonde doelen haalt of volhoudt. Denk bijvoorbeeld aan een leuk tripje, een gezellig etentje of een nieuw paar loopschoenen."},
                    ]
                }]
        },
        {
            title: "Actieve hobby’s",
            cardContents: [
                {
                    type: "Text",
                    content: "Er zijn ontelbare actieve hobby’s, maar welke activiteiten iemand leuk vindt is heel individueel. Weet je niet goed wat bij jou past? Denk dan eens terug aan activiteiten die je vroeger hebt gedaan of graag deed. Of kijk eens wat mensen binnen je familie of vriendenkring doen, want samen actief bezig zijn is veel leuker. Heb je echt geen idee waar te beginnen? Via de website van Sport Vlaanderen krijg je een overzicht van al de clubs bij jou in de buurt:"
                },
                {
                    type: "Link",
                    content: "https://www.sport.vlaanderen/waar-sporten/vind-een-sportorganisatie/"
                }
            ]
        },
        {
            title: "Workout",
            cardContents: [
                {
                    type: "Text",
                    content: "Hieronder vind je een workout van 10 minuten die je kan helpen bij het versterken van de globale spiergroepen. Volg samen met ons de workout in het filmpje."
                },
                {
                    type: "List",
                    content: ["De workout is een circuit van 10 oefeningen",
                        "Er wordt telkens 40 seconden oefenen afgewisseld met 20 seconden rust",
                        "Er is van iedere oefening een makkelijke, middelmatige en moeilijke variant",
                        "Eén ronde duurt 10 minuten. Je kan meerdere rondes na elkaar doen."]
                },
                {
                    type: "Text",
                    content: "Nog enkele tips:"
                },
                {
                    type: "List",
                    content: ["Warm op voor je begint met sporten",
                        "Voorzie voldoende water tijdens en na het sporten, zeker als het warm is",
                        "Sport je buiten en de zon schijnt? Smeer je dan in en zet een pet op"]
                },
                {
                    type: "Text",
                    content: "Hier kan je een overzicht zien van alle oefeningen die aan bod komen in het filmpje."
                },
                {
                    type: "Story",
                    content: [
                        {
                            image: "/images/movement/workout/exercise1.jpg", 
                            title: "Been oefening – Squats", 
                            text: "Je start rechtopstaand met je voeten op schouderbreedte. Span je buik- en bilspieren aan en zak rustig door je knieën. Zorg ervoor dat je je knieën goed naar buiten duwt en je rug in een neutrale positie blijft. Je kan de oefening makkelijker en moeilijker maken door meer of minder steun te gebruiken."
                        },
                        {
                            image: "/images/movement/workout/exercise2.jpg", 
                            title: "Arm oefening – Bicep curl", 
                            text: "Sta in een brede steunbasis. Je schouders zijn ontspannen en lichtjes naar achteren. Breng het gewicht naar je toe door je ellenbogen te plooien. Let erop dat je bovenarmen naast je lichaam blijven en dat je niet slingert met je romp. Je kan de oefening makkelijker of moeilijker maken door het gewicht aan te passen."
                        },
                        {
                            image: "/images/movement/workout/exercise3.jpg", 
                            title: "Rug oefening – Row", 
                            text: "Sta licht voorovergebogen met je voeten op schouderbreedte. Je rug blijft in een neutrale positie. Houd tijdens de hele oefening je schouders lichtjes naar achteren. Span je buik- en bilspieren aan en breng het gewicht naar je borst. Je ellenbogen blijven hierbij dicht bij het lichaam. Je kan de oefening makkelijker of moeilijker maken door het gewicht aan te passen."
                        },
                        {
                            image: "/images/movement/workout/exercise4.jpg", 
                            title: "Borst oefening – Push up", 
                            text: "Plaats je handen op schouderbreedte en je voeten op heupbreedte. Maak van je lichaam een plank door je buik- en bilspieren aan te spannen. Breng rustig je borst naar de grond door te buigen in de ellenbogen. Je ellenbogen blijven dicht bij het lichaam. Je kan de oefening makkelijker en moeilijker maken door meer of minder steun te gebruiken (bijvoorbeeld op je knieën zitten of met je handen ergens op steunen)."
                        },
                        {
                            image: "/images/movement/workout/exercise5.jpg", 
                            title: "Been oefening – Lunge", 
                            text: "Je start rechtopstaand. Maak een uitvalpas naar voren of naar achteren. Let erop dat je je voorste knie goed naar buiten duwt. Je achterste knie raakt ongeveer de grond. Je voorste voet blijft plat op de grond en bij de achterste komt de hiel van de grond. Je romp blijft mooi rechtop. Wissel links en rechts af. Je kan de oefening makkelijker maken door meer steun te gebruiken of moeilijker door bij het rechtkomen even op één been te blijven staan."
                        },
                        {
                            image: "/images/movement/workout/exercise6.jpg", 
                            title: "Arm oefening – Dip", 
                            text: "Plaats je handen op de rand van de stoel op schouderbreedte. Span je buikspieren lichtjes aan en beweeg je zitvlak recht naar beneden door te buigen in je ellenbogen. De schouders blijven laag tijdens de hele oefening. Neem zoveel steun met je voeten als nodig is. Is de oefening te zwaar, dan kan je een gewichtje heffen achter je hoofd door je armen te strekken."
                        },
                        {
                            image: "/images/movement/workout/exercise7.jpg", 
                            title: "Buik oefening – Plank", 
                            text: "Je voeten zijn op heupbreedte en je ellenbogen zijn recht onder je schouders. Span je buik- en bilspieren aan en maak van je lichaam een plank. Blijf zo staan en zorg ervoor dat je niet gaat doorhangen in je rug. Je kan de oefening makkelijker en moeilijker maken door meer of minder steun te gebruiken (bijvoorbeeld op je knieën zitten of op je handen steunen)."
                        },
                        {
                            image: "/images/movement/workout/exercise8.jpg", 
                            title: "Been oefening – Tenenstand", 
                            text: "Je staat rechtop met je voeten op heupbreedte. Ga op je tenen staan op een trage en gecontroleerde manier. Tijdens de beweging blijft je romp rechtop. Je kan de oefening makkelijker en moeilijker maken door meer of minder steun te gebruiken."
                        },
                        {
                            image: "/images/movement/workout/exercise9.jpg", 
                            title: "Schouder oefening – zijwaarts heffen", 
                            text: "Sta in schredestand. Span je buik- en bilspieren lichtjes aan en hef de gewichten zijwaarts en een klein beetje voorwaarts omhoog tot horizontaal. De schouders blijven laag en je slingert niet met je romp. Je kan de oefening makkelijker of moeilijker maken door het gewicht aan te passen."
                        },
                        {
                            image: "/images/movement/workout/exercise10.jpg", 
                            title: "Buik oefening – Benen heffen", 
                            text: "Ga languit op de mat liggen met je benen recht omhoog. Duw je onderrug in de mat en laat je benen rustig zakken. Zorg ervoor dat je onderrug niet loskomt van de mat. Buig je knieën om de oefening minder zwaar te maken. Of wissel af tussen je linker- en rechterbeen."
                        },
                    ]
                }
            ]
        },
        {
            title: "Workout video",
            cardContents: [
                {
                    type: "Video",
                    link: "https://player.vimeo.com/video/577948106"
                }
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "De doorsnee persoon beweegt veel te weinig, ook thuis. Nochtans is voor of na de werkuren het ideale moment om wat meer beweging in je dag te krijgen. Ook mensen met een actieve job kunnen hun gezondheid een extra boost geven door ook buiten het werk voldoende te bewegen. Probeer een aantal strategieën te bedenken om meer te bewegen die bij jou passen. Met wat creativiteit en doorzettingsvermogen kom je er wel! Alle beetjes helpen!"
                }]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi onderdeel",
            textOnCompleted: "Keer terug"
        }
    ]
}

const MOVMOD5 = {
    id: "MOV_MOD_5",
    title: "Beweegplan",
    titleMarkup: ["Beweegplan"],
    part: 5,
    description: "Ga aan de slag en maak een concreet actieplan om voldoende te bewegen.",
    duration: "10 minuten",
    type: "Informatief",
    image: "mov-mod-5",
    imageWidth: "170px",
    icon: "calendar",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Goed bezig! Ondertussen ken je de voordelen van bewegen en weet je wat gezonde beweeggewoontes zijn. Je weet ook dat het bij pijnklachten belangrijk is om voldoende te bewegen, maar dat dit geleidelijk moet worden opgebouwd. Nu is het tijd om al onze tips en tricks om te zetten naar een beweegplan!"
                }]
        },
        {
            title: "HOE ZIT HET MET JOUW HOEVEELHEID BEWEGING",
            cardContents: [
                {
                    type: "Text",
                    content: "Probeer even te antwoorden op de volgende vragen om een inschatting te maken van jouw beweeggedrag."
                },
            ]
        },
        {
            title: "Fysieke activiteitsniveau",
            cardContents: [
                {
                    type: "Text",
                    content: "Het fysieke activiteitsniveau wordt berekend op basis van hoeveel jij wandelt en het aantal minuten dat je activiteiten doet aan een hoge en middelmatige intensiteit. Een gemiddelde score (bijna iedere dag minstens 30 minuten bewegen aan middelmatige intensiteit)  is voldoende om voordelen te ondervinden voor je gezondheid. Hogere scores leveren extra voordelen op. Maar let op dat je ook voldoende rust inplant, anders loop je het risico op overbelasting. Scoor je eerder aan de lage kant? Dan kan je best proberen om meer te bewegen en ook iets intensiever te bewegen. Een veilige opbouw is wel cruciaal!"
                },
                {
                    id: "MOV-MOD-5-FYS",
                    type: "Slider",
                    text: "Hoe zit het volgens jou met met jouw hoeveelheid fysieke activiteit?",
                    from: 1,
                    to: 3,
                    showValue: true,
                    save: true,
                    mapping: "3-LEVELS"
                }
            ]
        },
        {
            title: "Aantal stappen per dag",
            showIfAnswered: ["MOV-MOD-5-FYS"],
            cardContents: [
                {
                    type: "Text",
                    content: "Naast regelmatig activiteiten aan een hoge en middelmatige intensiteit te doen, is het ook belangrijk dat je voldoende stappen zet op een dag. Opnieuw geldt dat gemiddelde scores reeds een positief effect hebben op je gezondheid. Maar een veilige opbouw en voldoende rust zijn ook hier heel belangrijk om het risico op overbelasting te beperken."
                },
                {
                    id: "MOV-MOD-5-STEPS",
                    type: "Slider",
                    text: "Hoe zit het volgens jou met met jouw gemiddeld aantal stappen per dag?",
                    from: 1,
                    to: 3,
                    showValue: true,
                    save: true,
                    mapping: "3-STEPS"
                }
            ]
        },
        {
            title: "Inactieve uren",
            showIfAnswered: ["MOV-MOD-5-STEPS"],
            cardContents: [
                {
                    type: "Text",
                    content: "Inactieve uren zijn uren waarin je minder dan 250 stappen hebt gezet. Als je voldoende slaapt, zit je ongeveer al aan 8 inactieve uren per dag. Daarom is het belangrijk om je inactieve uren doorheen de dag te beperken. Verhoogd risico op gezondheidsproblemen heb je bij meer dan 8 inactieve uren per dag (een totaal van 16 uren dus)."
                },
                {
                    id: "MOV-MOD-5-INACTIVE",
                    type: "Slider",
                    text: "Hoe zit het volgens jou met met jouw inactieve uren?",
                    from: 1,
                    to: 3,
                    showValue: true,
                    save: true,
                    mapping: "3-AMOUNT"
                }
            ]
        },
        {
            titleCard: "true",
            showIfAnswered: ["MOV-MOD-5-INACTIVE"],
            title: "Redenen om meer te bewegen"
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "We gaan je enkele redenen meegeven die mensen aanzetten om meer te bewegen, alsook enkele drempels die de stap tot meer bewegen kunnen verhinderen. Maar we gaan je eerst een vraag stellen."
                },
                {
                    id: "MOV-MOD-5-MOTIVATED",
                    type: "Slider",
                    text: "Hoe gemotiveerd ben jij om voldoende te bewegen in de toekomst?",
                    from: 1,
                    to: 10,
                    showValue: true,
                    save: true,
                    mapping: "10-AGREE"
                }
            ]
        },
        {
            title: "Ik vind bewegen fijn",
            showIfAnswered: ["MOV-MOD-5-MOTIVATED"],
            cardContents: [
                {
                    type: "Text",
                    content: "De sterkste motivatie om iets te doen is intrinsieke motivatie. Dit wilt zeggen dat je iets doet omdat je het fijn vindt. Je moet natuurlijk niet alle vormen van sport of beweging fijn vinden. Er zijn talloze opties om uit te kiezen, dus er zal voor iedereen wel iets zijn dat bij hem of haar past!"
                },
                {
                    type: "Image",
                    link: "/images/movement/grandpa.jpg"
                },
                {
                    type: "Text",
                    content: "Trouwens, wist je dat er tijdens bewegen endorfine (gelukshormoon) wordt vrijgezet? Dit is natuurlijk een extra reden waarom je na sport of beweging zo’n heerlijk voldaan gevoel krijgt. Bewegen is ook een ideale uitlaatklep om je even af te reageren tijdens een moeilijke of stresserende periode."
                },
            ]
        },
        {
            title: "Bewegen verhoogt mijn zelfvertrouwen",
            cardContents: [
                {
                    type: "Text",
                    content: "Progressie maken in je beweegdoelen geeft je zelfvertrouwen een boost. Na verloop van tijd zal door meer te bewegen je lichaam ook enkele veranderingen ondergaan, je krijgt meer energie en je gaat meer kunnen. Maar, in het begin zal je misschien geconfronteerd kunnen worden met een aantal zaken die je zelfvertrouwen een deuk kunnen geven: een toename van je pijnklachten, je capaciteit of kunnen ligt lager dan je had verwacht, bij anderen lijkt het veel beter te gaan… Iedereen moet ergens beginnen, volhouden is de boodschap!"
                },
                {
                    type: "Image",
                    link: "/images/movement/finishline.jpg"
                },
            ]
        },
        {
            title: "Ik wil werken aan mijn gezondheid",
            cardContents: [
                {
                    type: "Text",
                    content: "Voldoende bewegen is een ideale manier om je fysieke en mentale gezondheid een boost te geven! Bewegen beschermt tegen en bevordert het herstel van lichamelijke klachten, hart- en vaatziekten… Door voldoende te bewegen krijg je meer energie en je concentratie neemt toe. Ook je belastbaarheid gaat toenemen, waardoor je meer gaat kunnen. Maar bewegen doseren en op een veilige manier opbouwen is belangrijk, anders leidt dit tot negatieve gevolgen voor je gezondheid."
                },
                {
                    type: "Image",
                    link: "/images/movement/workout.jpg"
                },
            ]
        },
        {
            title: "Ik wil tijd doorbrengen met vrienden of familie",
            cardContents: [
                {
                    type: "Text",
                    content: "Samen actief bezig zijn is een geweldig idee. Het is niet alleen gezond, je leert elkaar ook op een andere manier kennen en dat versterkt jullie band. Door samen te bewegen is het makkelijker om je beweegdoelen te halen, want je kan elkaar motiveren. Zorg er wel voor dat iedereen op zijn eigen niveau kan meedoen."
                },
                {
                    type: "Image",
                    link: "/images/movement/family.jpg"
                },
            ]
        },
        {
            title: "Jouw redenen",
            cardContents: [
                {
                    type: "Multitext-Input",
                    id: "MOV-MOD-5-REASONS",
                    text: "Wat zijn voor jouw redenen om meer te bewegen?",
                    placeholder: "Schrijf ze hier neer:"
                }
            ]
        },
        {
            titleCard: "true",
            title: "Drempels"
        },
        {
            cardContents: [
                {
                    id: "MOV-MOD-5-TRUST",
                    type: "Slider",
                    text: "Heb je veel vertrouwen dat je voldoende kan bewegen in de toekomst?",
                    from: 1,
                    to: 10,
                    showValue: true,
                    save: true,
                    mapping: "10-AGREE"
                }, 
                {
                    type: "Text",
                    content: "Hier zijn een aantal veel voorkomende drempels om meer te bewegen."
                }
            ]
        },
        {
            title: "Ik heb geen tijd om meer te bewegen",
            showIfAnswered: ["MOV-MOD-5-TRUST"],
            cardContents: [
                {
                    type: "Text",
                    content: "Je hoeft helemaal niet veel te bewegen om al een positief effect te hebben op je gezondheid. In de vorige onderdelen kreeg je reeds tal van tips om mee aan de slag te gaan. Je kan bijvoorbeeld een aantal taken actiever maken. Of je kan bewegen combineren met andere waardevolle aspecten in je leven, zoals tijd doorbrengen met het gezin. Vraag jezelf eens af of je echt geen tijd hebt, of dat bewegen voor jou geen prioriteit heeft? Probeer bewegen eens te bekijken zoals huishoudelijke taken of afspraakjes. Deze moet je ook inplannen. Vind je geen ruimte voor langere beweegmomenten? Splits dit dan op in kortere blokken. Kijk vooral naar wat voor hou haalbaar is!"
                },
                {
                    type: "Image",
                    link: "/images/movement/no.jpg"
                },
            ]
        },
        {
            title: "Het is duur",
            cardContents: [
                {
                    type: "Text",
                    content: "Sport en bewegen hoeft helemaal niet duur te zijn. Met een sportieve outfit en een goed paar schoenen kom je al heel ver. Is een duur abonnement bij de fitness echt nodig? Gebruik je al die toestellen of is een setje halters voor thuis al voldoende? Heb je echt de meest gesofisticeerde koersfiets nodig? Of ben je niet beter met gewoon een degelijke fiets die je nog voor andere zaken kan gebruiken? Als je gaat wandelen of joggen heb je naast schoenen zelfs geen extra materiaal nodig. Sport en bewegen kan met ieder budget!"
                },
                {
                    type: "Image",
                    link: "/images/movement/equipment.jpg"
                },
            ]
        },
        {
            title: "Ik vind bewegen niet leuk",
            cardContents: [
                {
                    type: "Text",
                    content: "Niet iedereen vindt sport en bewegen van nature even fijn, dat is normaal. Toch is het voor iedereen belangrijk om voldoende te bewegen. Er zijn talloze vormen van sport of beweging om uit te kiezen. De ene vorm zal je al wat meer liggen dan de andere, maar voor iedereen is er wel iets dat bij hem of haar past!"
                },
                {
                    type: "Image",
                    link: "/images/movement/stuff.jpg"
                },
                {
                    type: "Text",
                    content: "In het vorige onderdeel vind je een lijst terug met allemaal suggesties. Denk ook eens terug aan de hobby’s die je als kind had, hier kan je ook inspiratie uit halen."
                },
            ]
        },
        {
            title: "Ik heb lichamelijke klachten",
            cardContents: [
                {
                    type: "Text",
                    content: "Pijn hebben is helemaal niet prettig. En pijn die toeneemt tijdens bewegen kan inderdaad een grote drempel zijn om meer te bewegen. Als je activiteit goed is afgesteld op jouw capaciteit, dan is deze veilig. De pijn is dan een overgevoelige reactie van je zenuwstelsel en betekent niet dat je schade veroorzaakt. Ook voor mensen met pijnklachten is het belangrijk om voldoende te bewegen. Bewegen bevordert het herstelproces en de overgevoeligheid zal na verloop van tijd afnemen. Met een goede opbouw maak je jouw lichaam weerbaarder en zal je terug meer kunnen."
                },
                {
                    type: "Image",
                    link: "/images/movement/dogwalking.jpg"
                },
                {
                    type: "Text",
                    content: "Bij gebrek aan beweging neemt de belastbaarheid van je lichaam verder af en de overgevoeligheid van het zenuwstelsel toe. Je zal dus steeds meer last ondervinden. Je kan dit een beetje vergelijken met tandenpoetsen. Stel je poetst je tanden 10 keer op een jaar gedurende een uur. Na het poetsen zullen je tanden bloeden en op termijn worden ze rot. Zo helpt af en toe bewegen ook niet. Enkel als je hier frequent mee bezig bent en dit rustig opbouwt, dan pas zal dit een positief effect hebben op jouw gezondheid."
                },
            ]
        },
        {
            title: "Jouw drempels",
            cardContents: [
                {
                    type: "Multitext-Input",
                    id: "MOV-MOD-5-LIMITS",
                    text: "Wat zijn voor jouw drempels die je belemmeren van meer te bewegen?",
                    placeholder: "Schrijf ze hier neer:"
                }
            ]
        },
        {
            title: "Doelen en opbouwschema",
            titleCard: true
        },
        {
            title: "Doelen stellen",
            cardContents: [
                {
                    type: "Text",
                    content: "Om voldoende te bewegen is het belangrijk om rekening te houden met waar jij waarde aan hecht en wat jij als mogelijke drempel ziet. Het stellen van doelen maakt heel duidelijk wat je wilt bereiken en hoe je dit wilt doen (of je nu last hebt van pijn of niet). Stel dat jij bijvoorbeeld veel belang hecht aan gezondheid en zelfzorg. Dan kan je dit in je leven incorporeren door een marathon te lopen, maar evenzeer door dagelijks een wandeling rond de blok te doen… Stel dat jij belang hecht aan quality time met familie en vrienden, dan zou je dat kunnen doen door samen een fietstocht te maken. Kan jij niet goed volgen? Dan kan je bijvoorbeeld een elektrische fiets gebruiken of samen met de tandem rijden."
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
            title: "Goede doelen",
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
                        {image: "/images/movement/stairs.jpg", title: "Stap 2", text: "Houd dit één tot twee weken vol, afhankelijk van je hersteltijd. Daarna breiden we uit met ± 10%. Wanneer je gaat opbouwen mag de hersteltijd niet toenemen. Het kan zijn dat pijn en vermoeidheid erger worden, maar dat is niet erg, zolang de hersteltijd maar niet langer wordt. Het is zeer belangrijk dat je je aan het schema houdt. Hoe verleidelijk misschien ook, maar het is niet goed dat je al je activiteiten tegelijk gaat opbouwen."},
                        {image: "/images/movement/bycicle.jpg", title: "Voorbeeld 1", text: "Na 10 minuten fietsen neemt jouw pijn toe. Dan is je startniveau 8 minuten. Na één tot twee weken verhoog je dit naar 9 minuten."},
                        {image: "/images/movement/walking.jpg", title: "Voorbeeld 2", text: "Na 500 meter stappen neemt jouw pijn toe. Dan is je startniveau 400 meter. Na één tot twee weken verhoog je dit naar 440 meter."},
                    ]
                },
            ]
        },
        {
            title: "Activiteitenlogboek",
            cardContents: [
                {
                    type: "Text",
                    content: "Nu is het aan jou! Je kan gebruik maken van het activiteitenlogboek dat op het startscherm staat, waarmee je zelf persoonlijke doelen kan stellen. De app kan ook automatisch een opbouwschema maken voor doelen waar dit nodig is (bijvoorbeeld als je wilt opbouwen naar 10 000 stappen per dag). Deze doelen kan je toevoegen in je waarden en doelen."
                },
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Voor iedereen is het belangrijk om voldoende te bewegen, maar niet bij iedereen lukt het even goed om dit te verwezenlijken. Zicht krijgen op wat jou motiveert en welke drempels jij ervaart is een eerste stap. Nadien kan jouw beweegplan vormgeven door doelen te stellen. Met een opbouwschema kan je dan deze doelen realiseren."
                }
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: false,
            text: "Voltooi module Bewegen",
            textOnCompleted: "Keer terug"
        }
    ]
}



const MovementScript = {
    id: "MOV",
    title: "Bewegen",
    submodules: [MOVMOD1, MOVMOD2, MOVMOD3, MOVMOD4, MOVMOD5]
}

export default MovementScript;