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
            id: "ACT-MOD1-CARD1",
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
            id: "ACT-MOD1-CARD2",
            title: "Wat is welzijn?",
            cardContents: [
                {
                    type: "Text",
                    content: ["Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de ", {type: "bold", content: "belasting"},  " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content: "belastbaarheid"},  " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."]
                },
                {
                    type: "Image",
                    link: "/images/activitywork/balance.jpg"
                }
            ]
        },
        {
            id: "ACT-MOD1-CARD3",
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
            ]
        },
        {
            id: "ACT-MOD1-CARD4",
            title: "Belastbaarheid",
            cardContents: [
                {
                    type: "Text",
                    content: "Belastbaarheid of draagkracht is datgene wat je fysiek en mentaal aan kan. Dat wordt bepaald door meerdere factoren waaronder: je algemene gezondheidstoestand, je lichamelijke conditie en spierkracht, je kennis en ervaring, je attitude (hoe je tegenover bepaalde zaken staat) en motivatie,  de manier waarop je met stress en druk omgaat, je familiale en sociale omstandigheden. Belastbaarheid is individueel verschillend."
                },
            ]
        },
        {
            id: "ACT-MOD1-CARD5",
            title: "Reflectie oefening",
            cardContents: [
                {
                    type: "Text",
                    content: "Hoe ziet jouw weegschaal eruit? Is deze in balans of helt je weegschaal regelmatig over?"
                },
            ]
        },
        {
            "id": "ACT-MOD1-OVERVIEW",
            "title": "Overzicht",
            "overview": true,
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


const ACTMOD2 = {
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
            id: "ACT-MOD2-CARD1",
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
            id: "ACT-MOD1-CARD2",
            title: "Reflectie",
            cardContents: [
                {
                    type: "Text",
                    content: "Rusten en activiteiten vermijden is niet aangewezen bij pijn. Beweging en zoveel mogelijk je normale activiteiten verderzetten zijn essentieel voor het herstelproces. Beweging verhoogt de doorbloeding naar je spieren en gewrichten, waardoor ze soepel blijven en sterker worden. Daarnaast zetten je hersenen ook pijndempende stoffen vrij tijdens het bewegen. Werk en activiteiten kunnen je afleiden van je pijn. Door lang te rusten wordt je lichaam alleen maar zwakker waardoor het minder goed om kan met de belasting in je dagelijks leven. Dit wilt niet zeggen dat je bij een acute blessure de belasting niet tijdelijk mag verlagen om het herstelproces te bevorderen."
                },
            ]
        },
        {
            id: "ACT-MOD1-CARD3",
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
            id: "ACT-MOD1-CARD4",
            title: "Reflectie met stelling (werk)",
            cardContents: [
                {
                    type: "Text",
                    content: "Naast financiële onafhankelijkheid zijn er nog andere voordelen aan werken! Herken jij enkele voordelen in de woordwolk?"
                },
            ]
        },
        {
            id: "ACT-MOD1-CARD5",
            title: "Reflectie oefening",
            cardContents: [
                {
                    type: "Selection",
                    options: ["Waardering", "Erkenning"]
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


const ActivityWorkScript = {
    id: "TE",
    title: "Activiteit en Werk",
    submodules: [ACTMOD1, ACTMOD2]
}

export default ActivityWorkScript;