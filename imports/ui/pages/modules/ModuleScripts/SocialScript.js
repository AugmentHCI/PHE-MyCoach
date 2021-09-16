const SOCMOD1 = {
    id: "SOC_MOD_1",
    title: "Het belang van sociale steun",
    titleMarkup: ["Het belang van", "sociale steun"],
    part: 1,
    description: "We hebben allemaal nood aan sociale steun. Maar wat is sociale steun juist en waarom is dit zo belangrijk? Dit hoofdstuk geeft een kort overzicht.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Een stelling",
            cardContents: [
                {
                    type: "Text",
                    content: "We beginnen deze module met een stelling."
                },
                {
                    id: "SOC-MOD-1-Q1",
                    type: "Question",
                    question: "Familie, vrienden en collega’s kunnen mijn pijn beïnvloeden.",
                    options: ["Waar", "Niet waar"],
                    correct: "Waar",
                    explanation: "Hoe je omgeving omgaat met je klachten en erop reageert kan de evolutie ervan mee bepalen! Je familie, vrienden en collega’s kunnen op verschillende manieren reageren. Sommige reacties zal je als helpend ervaren, terwijl anderen dat helemaal niet zijn. En nog andere reacties zijn misschien wel goed bedoeld, maar kunnen op termijn jouw situatie misschien net negatief beïnvloeden.",
                    onCorrect: "De stelling is waar!",
                    onIncorrect: "De stelling is waar!"
                },]
        },
        {
            title: "Sociale interacties zijn dynamisch",
            cardContents: [
                {
                    type: "Text",
                    content: "Mensen zijn sociale wezens en beïnvloeden elkaar voortdurend. Wanneer je chronische pijn ervaart, heeft dit niet enkel een grote impact op jezelf, maar ook op je naaste omgeving. De reactie van de omgeving kan beïnvloeden hoe jij met je klachten omgaat. Maar hoe jij met jouw klachten omgaat kan ook de reactie van de omgeving beïnvloeden. Bovendien kan de reactie van de omgeving veranderen doorheen de tijd. Mensen ervaren over het algemeen veel steun van hun omgeving wanneer ze onverwachts iets ernstig voorhebben, zoals acute pijn. Maar velen merken ook dat deze steun heel snel afneemt naarmate de klachten langer blijven duren. Kortom, sociale interacties zijn een complex gegeven."
                }
            ]
        },
        {
            title: "Wat is sociale steun?",
            cardContents: [
                {
                    type: "Text",
                    content: "Het ervaren van sociale steun heeft een positief effect op onze gezondheid en op onze veerkracht, maar wat is dit juist? Sociale steun omvat de hulp die jou wordt aangeboden wanneer je staat voor een probleem of uitdaging. Deze steun kan erop gericht zijn om het probleem op te lossen, of om ervoor te zorgen dat je minder stress zal ervaren omwille van het probleem. Je kan sociale steun krijgen bij zowel grote als kleine problemen en uitdagingen."
                }, 
                {
                    type: "Text",
                    content: "In feite zijn er 3 vormen van sociale steun, die vaak door elkaar lopen. Het beroep doen op en ervaren van een combinatie van de verschillende soorten van steun zijn belangrijk in relatie tot chronische pijn."
                },
                {
                    type: "Story",
                    content: [
                        {title: "Praktische steun", text: "Zoals bijvoorbeeld iets concreet doen om te helpen zoals bijvoorbeeld taken in het huishouden overnemen."},
                        {title: "Emotionele steun", text: "Dit zijn bijvoorbeeld mensen waarbij je terecht kan om je verhaal te doen, die begrip tonen en die laten zien dat ze in je geloven."},
                        {title: "Informatieve steun", text: "Dit omvat het geven van informatie, tips en adviezen om je vooruit te helpen."},
                    ]
                }
            ]
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "In deze module bekijken hoe je met je omgeving kan communiceren over jouw situatie, hoe je kan omgaan met bepaalde reacties van je omgeving, welke impact je eigen houding t.a.v. je omgeving heeft en waar je terecht kan voor hulp en ondersteuning."
                },
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Het ervaren van sociale steun heeft een positief effect op onze gezondheid en op onze veerkracht. Een steunend netwerk rondom je is daarom extra belangrijk wanneer je te kampen hebt met chronische pijn. Er zijn verschillende soorten sociale steun, nl. praktische steun, emotionele steun en informatieve steun."
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



const SocialScript = {
    id: "SOC",
    title: "Sociale omgeving",
    submodules: [SOCMOD1]
}

export default SocialScript;