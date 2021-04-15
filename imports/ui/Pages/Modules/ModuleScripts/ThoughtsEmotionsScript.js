const TEMOD1 = {
    id: "TE_MOD_1",
    title: "Gedachten en emoties: een inleiding",
    "title-markup": ["Gedachten en emoties:", "een inleiding"],
    part: 1,
    description: "TODO",
    duration: "20 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            id: "TE-MOD1-CARD1",
            title: "Inleiding",
            "card-contents": [
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren of bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten en meer in het hier en nu. Ook helpen we je onderzoeken hoe je het leven kan leiden dat je wil leiden.",
                    "show-if": {"rule": "Profile", "profiles": [1]}
                },
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Dat is ook zo met lastige gedachten en gevoelens rond pijn. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren en bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten maar en meer in het hier en nu. Ook helpen we je onderzoeken hoe je, ondanks de pijn, het leven kan leiden dat je wil leiden.",
                    "show-if": {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
                },
                {
                    type: "Text",
                    content: "We laten hiervoor je actief aan de slag gaan door middel van verschillende oefeningen. Let’s go!",
                },
            ]
        },
        {
            id: "TE-MOD1-CARD2",
            "card-contents": [
                {
                    type: "Text",
                    content: "Moeilijke, lastige gedachten en emoties kunnen ons serieus parten spelen en een impact hebben op hoe we ons voelen. Worstel jij soms met moeilijke gedachten en gevoelens?"
                },
                {
                    id: "TE-MOD1-SLIDER",
                    type: "Slider",
                    text: "Duid op een schaal van 1 tot 10 (waarbij 1 staat voor een heel sterke negatieve impact en 10 voor helemaal geen negatieve impact) aan hoe groot de impact van gedachten en gevoelens waar je mee worstelt is welbevinden.",
                    from: 1,
                    to: 10,
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }]
        },
        {
            id: "TE-MOD1-CARD3",
            showIfAnswered: ["TE-MOD1-SLIDER"],
            "card-contents": [
                {
                    type: "Text",
                    content: ["Jij scoorde ", {type: "bold", content:"(TODO)"}, "op de schaalvraag. Na het doorlopen van deze module zullen we je opnieuw vragen om je score aan te duiden. Zo kan je zien of je score verbeterd, verminderd of hetzelfde gebleven is. Je kan dan ook in kaart proberen brengen welke factoren hiertoe bijgedragen hebben."]
                }]
        },
        {
            id: "TE-MOD1-CARD4",
            title: "Veel gedachten!",
            "card-contents": [
                {
                    type: "Text",
                    content: "Gedachten kunnen we niet tegenhouden. In een flits zijn ze daar. Zonder aankondiging. En zo heb je er wel duizenden per dag."
                },
                {
                    id: "TE-MOD1-Q1",
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
            showIfAnswered: ["TE-MOD1-Q1"], 
            "card-contents": [
                {
                    id: "TE-MOD1-Q2",
                    type: "Selection",
                    question: "Heb je soms het idee dat steeds opnieuw dezelfde gedachte jou achtervolgt?",
                    options: ["Ja", "Nee"]
                },
                {
                    id: "TE-MOD1-Q3",
                    type: "Selection",
                    question: "Zou je soms je gedachten eens graag even op stop willen zetten?",
                    options: ["Ja", "Nee"]
                }, 
                {
                    type: "Text",
                    content: "En laten we nu even de volgende gedachte-oefening proberen:"
                },
                {
                    type: "Delayed Display",
                    text: "Tekst één voor één laten verschijnen"
                },
                {
                    type: "List",
                    content: ["Denk eens aan een paard...", "Een rood paard...", "Met zes poten...", "Al vliegend door de lucht."]
                },
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
            showIfAnswered: ["TE-MOD1-Q2", "TE-MOD1-Q3"],
            "card-contents": [
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
                    content: "Verschillende van deze moeilijke gedachten kunnen ook pijn gerelateerd zijn, mogelijks schieten ze meerdere keren per dag door je hoofd. Enkele voorbeelden:"
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
            "card-contents": [
                {
                    type: "Text",
                    content: "Naast gedachten hebben we ook heel wat emoties en gevoelens die ons lijf binnenkomen. Deze zijn net als wolken die aan de lucht verschijnen en dan weer verdwijnen."
                },
                {
                    type: "Image-TODO-Wolkenfoto-opvragen", 
                    text: "In het Word-documentje is dit een iStock-video, maar cfr. de mail van Comaco: iStock video's kunnen ze met hun abonnement niet downladen. Is een gewone foto van wolken hier ook oké? En zo ja, zouden jullie mij zo ééntje kunnen bezorgen?"
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
            "card-contents": [
                {
                    type: "Text",
                    content: "Onze gedachten en gevoelens hangen bovendien sterk samen."
                },
                {
                    type: "Text",
                    content: "Zo zou je je bijvoorbeeld verdrietig kunnen voelen omdat je de gedachte hebt dat door je pijn niet meer kan wat je vroeger wel nog kon. Of wanhopig, wanneer je eraan denkt dat er naar jouw gevoel geen verbetering optreedt. Of misschien ook kwaad, wanneer je erover nadenkt dat je het niet eerlijk vindt dat dit net jou moet overkomen. Of schuldig, wanneer je de gedachte hebt dat je te weinig bewogen hebt vandaag, of bang, wanneer de gedachte in je opkomt dat een bepaalde beweging pijn gaat veroorzaken, of ..."
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
            title: "Afleiding van gedachten",
            "card-contents": [
                {
                    type: "Text",
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om met onze moeilijke gedachten en gevoelens (bijvoorbeeld rond pijn) om te gaan zoals bijvoorbeeld afleiding zoeken door tv te kijken, bepaalde activiteiten vermijden, bepaalde bewegingen niet meer doen, meer eten, drinken of roken, meer slapen, veel op onze smartphone bezig zijn, ..."
                },
                {
                    type: "Text",
                    content: "In je pijnlogboek heb je volgende reacties reeds aangegeven de afgelopen periode:"
                },
                {
                    type: "Content-From-Painlogbook",
                    text: "Ik vraag mij wel af: het pijnlogboek is het laatste wat vrijkomt in de vorige module, en dit is het eerste onderdeel die ze te zien krijgen (dus eventueel zelfs al de dag erna). Wat als ze nog niks ingevuld hebben?"
                }, 
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/lots-of-thoughts.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Multiple-Text-Input",
                    text: "Toelaten om ze meerdere inputs te laten typen, en deze ook eventueel te verwijderen uit de lijst, en om op klaar te drukken om de volgende vraag te laten verschijnen."
                },
                {
                    type: "Text-Input",
                    text: "Wat heb jij verder al allemaal geprobeerd om je moeilijke gedachten en emoties te vermijden of kwijt te geraken?",
                    placeholder: "Schrijf ze hier neer:"
                },
                {
                    type: "Image",
                    link: "/images/thoughtsemotions/stress.jpg",
                },
                {
                    id: "TE-MOD1-Q4",
                    type: "Selection",
                    question: "Hebben deze pogingen gewerkt en ervoor gezorgd dat je moeilijke gedachten en gevoelens verdwenen of verminderden?",
                    options: ["Ja, altijd", "Ja, tijdelijk wel", "Neen, eigenlijk niet"]
                },
            ]
        },
        {
            id: "TE-MOD1-CARD10",
            "card-contents": [
                {
                    type: "Text",
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om met onze moeilijke gedachten en gevoelens (bijvoorbeeld rond pijn) om te gaan zoals bijvoorbeeld afleiding zoeken door tv te kijken, bepaalde activiteiten vermijden, bepaalde bewegingen niet meer doen, meer eten, drinken of roken, meer slapen, veel op onze smartphone bezig zijn, ..."
                },
                {
                    type: "Todo - Navragen Rosanne/Steffi",
                    text: "Wat wordt er bedoeld met 'Je geeft aan dat je pogingen (insert antwoord ‘altijd’ of ‘tijdelijk’ of ‘eigenlijk niet’) verdwenen.', ik denk dat hier iets anders bedoeld wordt/de verwoording anders moet zijn? + hier gaan we dan ook verschillende tekst tonen o.b.v. hun pijnlogboek - zelfde bedenking: misschien wat te vroeg om hier al te verwachten dat ze het regelmatig invullen?"
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
            id: "TE-MOD1-CARD11",
            "card-contents": [
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
            "id": "TE-MOD1-OVERVIEW",
            "title": "Overzicht",
            "overview": true,
            "card-contents": [
                {
                    type: "Text",
                    overview: true,
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om van onze moeilijke gedachten en gevoelens af te raken. Deze hebben echter geen of slechts een tijdelijk effect. We kunnen onze gedachten en gevoelens niet zomaar aan- en uitzetten… Wél kunnen we leren om zo’n manier mee om te gaan dat we er minder last van ondervinden of zodat ze ons gedrag minder bepalen! Dit gaan we bekijken in het volgende onderdeel: 'Aan de slag met gedachten en emoties'"
                }
            ]
        }
    ]
}

const TEMOD2 = {
    id: "TE_MOD_2",
    title: "Aan de slag met gedachten en emoties",
    "title-markup": ["Aan de slag met", "gedachten en emoties"],
    part: 2,
    description: "TODO",
    duration: "Meerdere dagen",
    type: "Oefeningen",
    image: "learning",
    imageWidth: "180px",
    cards: [{
        id: "TE-MOD2-CARD1",
        title: "Gedachte-oefening",
        "card-contents": [
            {
                type: "Text",
                content: "We moedigen je aan om de komende twee dagen eens bewust stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten?",
                "show-if": {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden.",
                "show-if": {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "We moedigen je aan om de komende twee dagen eens bewust stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten? Welke zijn pijngerelateerd?",
                "show-if": {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden. De gedachten die je invult in je pijnlogboek verschijnen er automatisch bij.",
                "show-if": {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
            },
            {
                type: "Multiple-Text-Input",
                text: "Toelaten om ze meerdere inputs te laten typen, en deze ook eventueel te verwijderen uit de lijst, en om hoer automatisch ook de pijnlogboek-gedachten te tonen."
            },
            {
                type: "Text-Input",
                text: "Welke (negatieve) gedachten komen de laatste tijd bij jou vaak terug?",
                placeholder: "Schrijf hier een gedachte"
            },
        ]
    },
    {
        id: "TE-MOD2-CARD2",
        title: "Eens reflecteren",
        "card-contents": [
            {
                type: "Text",
                content: "Bekijk de wederkerende, lastige gedachten die je voor jezelf hebt genoteerd de afgelopen dag.",
            },
            {
                type: "Text",
                content: "Vraag jezelf ook eens het volgende af: Zijn deze gedachten helpend?",
            },
            {
                type: "Text",
                content: "Meestal zijn de wederkerende gedachten die we hebben niet dadelijk helpend. Daarom gaan we in deze module verder in op hoe je anders met deze gedachten kunt leren omgaan zodat zij zo min mogelijk impact hebben op jouw leven.",
                "show-if": {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "Meestal zijn de wederkerende gedachten die we hebben niet dadelijk helpend. Door bv. te denken aan je pijn of welke gevolgen dit zal hebben voel je je vaak niet beter of biedt dat niet meteen een oplossing. Daarom gaan we in deze module verder in op hoe je anders met deze gedachten kunt leren omgaan zodat zij zo min mogelijk impact hebben op jouw leven.",
                "show-if": {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
            },
            {
                type: "Text",
                content: "In volgend filmpje zie je een eerste manier om anders naar jouw gedachten te leren kijken, namelijk zoals auto’s die voorbijrijden op een drukke baan:",
            },
            {
                type: "Video",
                link: "https://www.youtube.com/embed/iN6g2mr0p3Q"
            },
            {
                type: "Text",
                content: "Je kan dus leren om gedachten te laten komen en gaan zonder ze vast te houden, achterna te hollen, of ze weg te duwen. Uiteraard gaat dit niet elke keer en met iedere lastige gedachte lukken, maar het kan al zeker helpen om je hier bewuster mee bezig te zijn."
            },
            {
                type: "Text",
                content: "De enige manier om te leren om je gedachten te laten komen en gaan, zoals auto’s op een drukke snelweg of zoals wolken die voorbijglijden voor de zon, is oefenen, oefenen, oefenen! Daarom vragen we je om hier de komende dag heel bewust mee te proberen bezig zijn. "
            },
        ]
    },
]
}

const ThoughtsEmotionsScript = {
    id: "TE",
    title: "Gedachten en Emoties",
    "submodule-parts": 6,
    submodules: [TEMOD1, TEMOD2]
}

export default ThoughtsEmotionsScript;