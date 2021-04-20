const ACTMOD1 = {
    id: "ACT_MOD_1",
    title: "Belasting en belastbaarheid?",
    titleMarkup: ["Belasting en", "belastbaarheid?"],
    part: 1,
    description: "TODO",
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
                    text: ["Welzijn, je lichamelijk en mentaal goed voelen, bereik je wanneer de ", {type: "bold", content: "belasting"},  " (draaglast) die je te verwerken krijgt op het werk en tijdens je vrije tijd (bv. strijken, stofzuigen, …) en je ", {type: "bold", content: "belastbaarheid"},  " (draagkracht), datgene wat je fysiek en mentaal aankan, in balans zijn. Zijn beide gedurende langere tijd uit balans, dan vermindert je welzijn en kunnen er gezondheidsklachten ontstaan."]
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




const ActivityWorkScript = {
    id: "TE",
    title: "Activiteit en Werk",
    submodules: [ACTMOD1]
}

export default ActivityWorkScript;