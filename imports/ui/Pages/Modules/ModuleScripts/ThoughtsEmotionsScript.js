const TEMOD1 = {
    id: "TE_MOD_1",
    title: "Gedachten en emoties: een inleiding",
    titleMarkup: ["Gedachten en emoties:", "een inleiding"],
    part: 1,
    description: "TODO",
    duration: "20 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            id: "TE-MOD1-CARD1",
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren of bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten en meer in het hier en nu. Ook helpen we je onderzoeken hoe je het leven kan leiden dat je wil leiden.",
                    showIf: {rule: "Profile", profiles: [1]}
                },
                {
                    type: "Text",
                    content: "Moeilijke gedachten en gevoelens kunnen een grote impact hebben op ons welbevinden en op de manier waarop we ons gedragen. Dat is ook zo met lastige gedachten en gevoelens rond pijn. Zo kunnen ze er bijvoorbeeld voor zorgen dat we veel piekeren en bepaald gedrag niet (meer) gaan stellen. In deze module reiken we je een aantal handvaten aan die je kunnen helpen om minder te vechten tegen deze lastige gevoelens en gedachten. Hiernaast bekijken we met jou hoe je minder ‘in je hoofd’ kan zitten maar en meer in het hier en nu. Ook helpen we je onderzoeken hoe je, ondanks de pijn, het leven kan leiden dat je wil leiden.",
                    showIf: {rule: "Profile", profiles: [2, 3, 4, 5, 6]}
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
                    valueText: "Jouw selectie",
                    show: true,
                    save: true,
                }]
        },
        {
            id: "TE-MOD1-CARD3",
            showIfAnswered: ["TE-MOD-1-SLIDER"],
            cardContents: [
                {
                    type: "Text",
                    content: ["Jij scoorde een ", {type: "answer", questionID:"TE-MOD-1-SLIDER"}, " op de schaalvraag. Na het doorlopen van deze module zullen we je opnieuw vragen om je score aan te duiden. Zo kan je zien of je score verbeterd, verminderd of hetzelfde gebleven is. Je kan dan ook in kaart proberen brengen welke factoren hiertoe bijgedragen hebben."]
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
                    options: ["Ja", "Nee"]
                },
                {
                    id: "TE-MOD-1-Q3",
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
            cardContents: [
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
            cardContents: [
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
            cardContents: [
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
                    id: "TE-MOD-1-Q4",
                    type: "Selection",
                    question: "Hebben deze pogingen gewerkt en ervoor gezorgd dat je moeilijke gedachten en gevoelens verdwenen of verminderden?",
                    options: ["Ja, altijd", "Ja, tijdelijk wel", "Neen, eigenlijk niet"]
                },
            ]
        },
        {
            id: "TE-MOD1-CARD10",
            showIfAnswered: ["TE-MOD-1-Q4"],
            cardContents: [
                {
                    type: "Text",
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om met onze moeilijke gedachten en gevoelens (bijvoorbeeld rond pijn) om te gaan zoals bijvoorbeeld afleiding zoeken door tv te kijken, bepaalde activiteiten vermijden, bepaalde bewegingen niet meer doen, meer eten, drinken of roken, meer slapen, veel op onze smartphone bezig zijn, ..."
                },
                {
                    type: "Todo - Navragen Rosanne/Steffi",
                    text: "Wat wordt er bedoeld met 'Je geeft aan dat je pogingen (insert antwoord ‘altijd’ of ‘tijdelijk’ of ‘eigenlijk niet’) verdwenen.', ik denk dat hier iets anders bedoeld wordt/de verwoording anders moet zijn (helpen ipv verdwenen?)? + hier gaan we dan ook verschillende tekst tonen o.b.v. hun pijnlogboek - zelfde bedenking: misschien wat te vroeg om hier al te verwachten dat ze het regelmatig invullen?"
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
            "id": "TE-MOD1-OVERVIEW",
            "title": "Overzicht",
            "overview": true,
            cardContents: [
                {
                    type: "Text",
                    overview: true,
                    content: "Vaak hebben we de neiging om allerlei pogingen te ondernemen om van onze moeilijke gedachten en gevoelens af te raken. Deze hebben echter geen of slechts een tijdelijk effect. We kunnen onze gedachten en gevoelens niet zomaar aan- en uitzetten… Wél kunnen we leren om zo’n manier mee om te gaan dat we er minder last van ondervinden of zodat ze ons gedrag minder bepalen! Dit gaan we bekijken in het volgende onderdeel: 'Aan de slag met gedachten en emoties'"
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
    title: "Aan de slag met gedachten en emoties",
    titleMarkup: ["Aan de slag met", "gedachten en emoties"],
    part: 2,
    description: "TODO",
    duration: "Meerdere dagen",
    type: "Oefeningen",
    image: "learning",
    imageWidth: "180px",
    cards: [{
        id: "TE-MOD2-CARD1",
        title: "Gedachte-oefening",
        cardContents: [
            {
                type: "Text",
                content: "We moedigen je aan om de komende twee dagen eens bewust stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten?",
                showIf: {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden.",
                showIf: {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "We moedigen je aan om de komende twee dagen eens bewust stil te staan bij jouw gedachten. Welke gedachten komen vaak terug en spelen je best wel parten? Welke zijn pijngerelateerd?",
                showIf: {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
            },
            {
                type: "Text",
                content: "Je kan deze hier invullen en bijhouden. De gedachten die je invult in je pijnlogboek verschijnen er automatisch bij.",
                showIf: {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
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
        id: "TE-MOD2-PAUZE-1",
        cardContents: [
            {
                type: "Text",
                content: [{type: "bold", content: "Hier komt een pauzemoment van 2 dagen ..."}],
            }]
    },
    {
        id: "TE-MOD2-CARD2",
        title: "Eens reflecteren",
        cardContents: [
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
                showIf: {"rule": "Profile", "profiles": [1]}
            },
            {
                type: "Text",
                content: "Meestal zijn de wederkerende gedachten die we hebben niet dadelijk helpend. Door bv. te denken aan je pijn of welke gevolgen dit zal hebben voel je je vaak niet beter of biedt dat niet meteen een oplossing. Daarom gaan we in deze module verder in op hoe je anders met deze gedachten kunt leren omgaan zodat zij zo min mogelijk impact hebben op jouw leven.",
                showIf: {"rule": "Profile", "profiles": [2, 3, 4, 5, 6]}
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
    {
        id: "TE-MOD2-PAUZE-2",
        cardContents: [
            {
                type: "Text",
                content: [{type: "bold", content: "Hier komt een pauzemoment van 1 dag ..."}],
            }]
    },
    {
        id: "TE-MOD2-CARD3",
        title: "Afstand nemen van gedachten",
        cardContents: [
            {
                type: "Text",
                content: "Tijd om een volgende manier te bekijken om wat afstand te leren nemen van moeilijke gedachten die door je hoofd gaan. Ga even rustig zitten beluister volgend audiofragment.",
            },
            {
                type: "Audiofile"
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
                content: "Let op! Het doel van deze oefening is niet perse om jezelf beter te doen voelen, hoewel dit een aangename bijkomstigheid kan zijn. Wel is het de bedoeling om je los te kunnen maken van niet-helpende gedachten die veel tijd en energie van je vragen. Op die manier ontstaat er meer ruimte om je aandacht te kunnen richten op zaken die jij belangrijk vindt.",
            },
            {
                type: "Text",
                content: "Probeer je hier extra bewust van te zijn de komende dagen. Het is vooral door te oefenen dat je je dit steeds beter onder de knie zal krijgen. Als je (wederkerende en lastige) gedachten opmerkt, plaats er dan ‘Ik heb de gedachte dat…’ voor of bekijk ze als auto’s op een drukke baan. Je kan altijd terugkomen en het audiofragment opnieuw beluisteren."
            }
        ]
    },
    {
        id: "TE-MOD2-PAUZE-3",
        cardContents: [
            {
                type: "Text",
                content: [{type: "bold", content: "Hier komt een pauzemoment van 1 dag ..."}],
            }]
    },
    {
        id: "TE-MOD2-CARD4",
        title: "Invloed beperken",
        cardContents: [
            {
                type: "Text",
                content: "Welkom terug! Tijd voor het verkennen van een volgende manier om om te gaan met moeilijke gedachten en gevoelens op zo’n manier dat ze je gedrag en je leven minder gaan bepalen.",
            },
            {
                type: "Text",
                content: "Zo kan je moeilijke gedachten en gevoelens namelijk ook proberen te bekijken als die vervelende buurman, die plots je feestje komt crashen:",
            },
            {
                type: "Video",
                link: "https://www.youtube.com/embed/x0xeQe198gE"
            },
            {
                type: "Text",
                content: "Herinner je dat als je sterk focust op je pijngedachten dat er makkelijker prikkels doorkomen (TODO: Insert verwijzing naar module in kwestie). Ook deze kan je vergelijken met deze vervelende buurman. Zijn er wederkerende gedachten die je doen denken aan deze vervelende buurman? Probeer de komende dag verder in te zetten op bewust worden van je gedachten."
            }
        ]
    },
    {
        id: "TE-MOD2-PAUZE-4",
        cardContents: [
            {
                type: "Text",
                content: [{type: "bold", content: "Hier komt een pauzemoment van 1 dag ..."}],
            }]
    },
    {
        id: "TE-MOD2-SLIDER",
        cardContents: [
            {
                type: "Text",
                content: "We halen deze schaalvraag er nog eens opnieuw bij."
            },
            {
                id: "TE-MOD-2-SLIDER-FOLLOWUP",
                type: "Slider",
                text: "Hoe zou je, na het doorlopen van deze module, op een schaal van 1 tot 10 - waarbij 1 staat voor een heel sterke negatieve impact en 10 voor helemaal geen negatieve impact - de impact van moeilijke gedachten en gevoelens op jouw welbevinden scoren?",
                from: 1,
                to: 10,
                valueText: "Jouw selectie",
                show: true,
                save: true,
            }
        ]
    },
    {
        id: "TE-MOD2-OVERVIEW",
        title: "Key take-away",
        overview: true,
        showIfAnswered: ["TE-MOD-2-SLIDER-FOLLOWUP"],
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
    description: "TODO",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "learning",
    imageWidth: "180px",
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
                content: "Het uitoefenen van mindfulness zal er niet voor zorgen dat je pijn verdwijnt, maar kan wel je manier van omgaan met de pijn veranderen en je helpen om deze pijn een plaats te geven in je leven. Met mindfulness leer je om aandacht te geven aan het huidige moment, zonder oordeel. Vaak leven we vaker in ons hoofd en onze gedachten, mindfulness leert je je aandacht richten op het hier en nu.",
            },
            {
                type: "Break"
            },
            {
                type: "Text",
                content: "Wetenschappelijk onderzoek toont aan dat mindfulness kan helpen om beter om te gaan met stress en minder te piekeren. Ook voor veel personen die te kampen hebben met (chronische) pijnklachten kan mindfulness helpend zijn als manier om hier beter mee te kunnen omgaan.",
            },
            {
                type: "Text",
                content: "Mindfulness is iets dat je, net als fietsen, moet leren. Hoeveel te meer je ermee oefent, hoeveel te makkelijker het je zal afgaan. Laat dus ook toe dat het een proces zal zijn, met vallen en opstaan, net zoals je als kind leerde fietsen.",
            },
            {
                type: "Text",
                content: "Aan de slag!",
            }
        ]
    },
    {
        id: "TE-MOD3-CARD3",
        title: "Mindfulness oefening",
        cardContents: [
            {
                type: "Oefening"
            },
            {
                type: "Text",
                content: ["Kijk rond je heen en merk ", {type: "bold", content: "5 dingen"}, " op die je kan zien, zoals bijvoorbeeld een boom, je koffietas voor je, je schoenen, ..."]
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "4 dingen"}, " die je kunt horen, zoals het fluiten van de vogels, een wasmachine dat staat te draaien, iemand die iets zegt in de kamer langs je, ..."]
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "3 dingen"}, " die je fysiek kan voelen, zoals je voeten die op de grond staan, je kleren op je lichaam, de warmte doorheen je koffietas, ..."]
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "2 dingen"}, " die je kan ruiken, zoals de geur van de koffie in je koffietas, het wasproduct van je kleren, ..."]
            },
            {
                type: "Text",
                content: ["Let op ", {type: "bold", content: "1 ding"}, " dat je kan proeven, zoals de smaak van je tandpasta, ..."]
            }
        ]
    },
    {
        id: "TE-MOD3-CARD4",
        title: "Uitbreidingsoefening",
        wrapup: true,
        cardContents: [
            {
                type: "Text",
                content: "We bekijken met jou graag nog een mindfulness oefening die je gemakkelijk kan integreren in je dagelijks leven, nl. tijdens het tandenpoetsen. Zet het volgende audiofragment aan de volgende keer dat je je tanden poetst of luister hier alvast naar en denk eraan terug wanneer je je tanden aan het poetsen bent."
            },
            {
                type: "Audiofragment",
            },
            {
                type: "Text",
                content: "Pak je tandenborstel en op het moment dat je deze in je hand hebt, ben je alleen nog maar bezig met tandenpoetsen. Je voelt bewust de borstel in je hand, het dopje van de tandpasta tube, je ruikt de geur, je ziet de stroperige structuur van de pasta. Blijf er met je aandacht bij. Komen er bijvoorbeeld gedachten naar boven over de lichamelijke pijn de je ervaart, ga dan weer met je aandacht terug naar het poetsen. Dan ga je poetsen: je proeft de smaak van de tandpasta, je voelt de structuur van de borstel en hoort de geluiden tijdens het poetsen. Je maakt alles intens mee en bent volledig met de aandacht bij alle sensaties van het poetsen. Iedere keer als je gedachten afdwalen, ga je met je aandacht terug naar het poetsen. Keer op keer. Dit hou je vol totdat je je tandenborstel weglegt. Merk vervolgens op hoe je je voelt."
            }
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
                content: "Met mindfulness leer je om aandacht te richten op het hier en nu. Het vergt wat oefening, maar is bewezen helpend te kunnen zijn in het omgaan met moeilijke, mogelijks pijngerelateerde gedachten en emoties.",
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
    title: "CONTROLE OVER JE GEDRAG",
    titleMarkup: ["Controle", "over je gedrag"],
    part: 4,
    description: "TODO",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "learning",
    imageWidth: "180px",
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
                    content: "Zoals we al geleerd hebben, kunnen we gedachten niet uitzetten. Ons hoofd denkt ook vooral op korte termijn, en op korte termijn wil ons lichaam pijn vermijden. In het begin zal dit misschien ook een gunstig effect hebben, want door niet te stofzuigen ga je mogelijke pijn uit de weg.",
                },
                {
                    type: "Text",
                    content: "Echter – op langere termijn kan dit een hele hoop negatieve gevolgen hebben. Weet je nog wat deze zijn? Meerdere antwoorden mogelijk.",
                },
                {
                    type: "Multiple Choice",
                    options: ["Je zenuwstelsel wordt overgevoelig en gaat sneller pijnprikkels doorsturen waardoor ook normale prikkels pijnlijk kunnen worden", "Door je angst ga je meer focussen op pijnprikkels en dus sneller pijn krijgen en hier harder van af zien", "Je fysieke capaciteit gaat achteruit waardoor je je sneller overbelast en dus sneller pijn gaat ervaren", "Je raakt meer geïsoleerd van je omgeving en dit is niet goed voor je mentale welzijn"]
                },
            ]
        },
        {
            id: "TE-MOD4-CARD3",
            title: "Eens denken",
            cardContents: [
                {
                    type: "Text",
                    content: "Goed zo – alle antwoorden waren juist. Je hebt dus al goed door dat bewegen op lange termijn ook heel wat negatieve gevolgen kan hebben."
                },
                {
                    type: "Text",
                    content: "Indien 0 1 of 2 juist: Je hebt nog wat juiste antwoorden laten liggen – kan je ze verder aanvullen?"
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
                    type: "Text",
                    content: [{type: "bold", content: "1. Probeer je activiteiten rustig op te bouwen."}]
                },
                {
                    type: "List",
                    content: ["Bv. als je stofzuigt en je voelt een pijnscheut. Wat is een alternatief dat werkt voor jou? Misschien kan je beginnen met het stofzuigen van één kamer in de plaats van dadelijk het hele huis onder handen te nemen, misschien kan je de borstel nemen omdat die lichter is, ...", "Dit noemen we graded activity of graded exposure – dit wordt verder uitgelegd in de modules ‘activiteiten en werk’ en ‘bewegen’."]
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
                    type: "Text",
                    content: [{type: "bold", content: "3. Tenslotte, Herinner je ook dat je gedachten en emoties er altijd zullen zijn, maar dat je kan kiezen en oefenen om er minder aandacht aan te besteden en om, ondanks deze gedachten en emoties, toch te kiezen voor activiteiten die waardevol zijn voor jou."}]
                },
                {
                    type: "List",
                    content: ["Denk terug aan de mindfulness oefeningen zoals de 5, 4, 3, 2, 1 oefening als manier om je aandacht te focussen op waarmee je bezig bent en minder in je hoofd te zitten", "Probeer je gedachten en gevoelens vanop een afstand te bekijken door er het zinnetje ‘Ik heb de gedachte dat’ voor te zetten."]
                },
            ]
        },
        {
            id: "TE-MOD4-CARD5",
            title: "Aan de slag!",
            cardContents: [
                {
                    type: "Text",
                    content: "Hopelijk is het tijdens deze module duidelijk geworden dat stilstaan bij hetgene dat je kan controleren en bewust zijn van je gedachten en emoties zinvol kan zijn. We hebben hiervoor verschillende oefeningen en tips doorlopen. Welke zijn het meest geschikt voor jou en ga je mee aan de slag? Je kan er meerdere aanduiden:"
                },
                {
                    type: "Multiple choice",
                },
                {
                    type: "List",
                    content: ["Oefening 'ik heb de gedachte dat ...'", "Filmpje van de vervelende buurman", "Filmpje van gedachten als auto’s op een drukke baan", "Mindfulness oefening zoals 5,4,3,2,1", "Oefening mindful tandenpoetsen (niet voor profiel 1 en 3)", "Gedachten en emoties van op een afstand bekijken", "Activiteiten rustig opbouwen (zie modules ‘activiteiten en werk’ en ‘bewegen’)", "Analyse van mijn activiteiten door gebruik van het pijnlogboek"]
                }
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
    description: "TODO",
    duration: "10 minuten",
    type: "Oefeningen",
    image: "learning",
    imageWidth: "180px",
    cards: [
        {
            id: "TE-MOD5-CARD1",
            title: "Inleiding",
            showIf: {rule: "Profile", profiles: [1]},
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
                    type: "Text-Input",
                    text: "Wat zou ik (anders) doen als pijnlijke gedachten en gevoelens m.b.t. mijn pijn mij niet meer belemmerden?",
                    placeholder: "Schrijf hier"
                },
                {
                    type: "Text-Input",
                    text: "Welke projecten of activiteiten zou ik oppakken (of met welke zou ik doorgaan) als mijn tijd en energie niet werden opgeslokt door verontrustende emoties rond het ervaren van pijn?",
                    placeholder: "Schrijf hier"
                },
                {
                    type: "Text-Input",
                    text: "Wat zou ik doen als angst voor pijn geen probleem meer was?",
                    placeholder: "Schrijf hier"
                },
                {
                    type: "Text-Input",
                    text: "Wat zou ik proberen als gedachten over het ervaren van pijn me niet zouden afschrikken?",
                    placeholder: "Schrijf hier"
                },
                {
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
            cardContents: [
                {
                    type: "Text",
                    content: "Je kan een waarde vergelijken met een vuurtoren in de verte, die je door slecht weer gidst en de richting aanwijst."
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
                    content: "Op het volgende scherm ga je een reeks waarden te zien krijgen. Geef aan in hoeverre deze waarde bij jou aansluit als persoon."
                }
            ]
        },
        {
            id: "TE-MOD5-CARD3",
            title: "Jouw waarden",
            cardContents: [
                {
                    type: "Waarden-Oefening",
                    content: "Je kan een waarde vergelijken met een vuurtoren in de verte, die je door slecht weer gidst en de richting aanwijst."
                },
            ]
        },
        {
            id: "TE-MOD5-CARD4",
            title: "Jouw top 10",
            cardContents: [
                {
                    type: "Text",
                    content: "Volgende waarden heb je aangeduid als passend bij jou in de vorige oefening. Als je hieruit je top 10 zou moeten kiezen, welke zijn dan de belangrijkste voor jou?"
                },
                {
                    type: "Top-10-Oefening",
                    content: ""
                }
            ]
        },
        {
            id: "TE-MOD5-CARD5",
            title: "Jouw top 5",
            cardContents: [
                {
                    type: "Text",
                    content: "Je waarden zijn erg belangrijk en wegen erg zwaar. Stel je voor dat je ze in een rugzak hebt en je bent met de boot op weg naar het bereiken van deze waarden. Maar, de boot lekt en begint te zinken. Je moet 5 waarden uit je rugzak halen, welke 5 waarden blijven dan over?"
                },
                {
                    type: "Top-5-Oefening",
                    content: ""
                },
                {
                    type: "Text",
                    content: "Proficiat! Je eigen waarden bekomen is geen makkelijke opdracht, maar wel oh zo belangrijk!"
                }
            ]
        },
        {
            id: "TE-MOD5-CARD6",
            title: "En nu je doelen",
            cardContents: [
                {
                    type: "Text",
                    content: "Je hebt je waarden benoemd: goed gedaan! En nu? Nu is het tijd om actie te ondernemen en doelen te proberen stellen die gebaseerd zijn op jouw waarden. Let’s go!"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Je hebt je waarden benoemd: goed gedaan! En nu? Nu is het tijd om actie te ondernemen en doelen te proberen stellen die gebaseerd zijn op jouw waarden. Let’s go!"}]
                },
                {
                    type: "Doelen vermelden",
                    text: "Optie 1: Nog geen formuleren van doelstellingen vrijgespeeld in module activiteiten en werk of in module bewegen - Boodschap: Er is een tegel toegevoegd aan je coaching met jouw waarden. Eventueel wel al doelstellingen formuleren om te koppelen aan activiteiten. Optie 2:  Wel al formuleren van doelstellingen vrijgespeeld - link om te koppelen aan geformuleerde waarden."
                }
            ]
        },
        {
            id: "TE-MOD5-CARD7",
            title: "Even denken",
            cardContents: [
                {
                    type: "Text",
                    content: "Er zijn verschillende manieren om naar je waarden te leven. Stel dat jij bijvoorbeeld veel belang hecht aan gezondheid en zelfzorg. Dan kan je dit in je leven incorporeren door een marathon te lopen, maar evenzeer door dagelijks een wandeling rond de blok te doen of ook door voldoende rustmomenten in te bouwen of door op je voeding te letten, ... Stel dat jij belang hecht aan het leveren van een zinvolle bijdrage, dan zou je dat kunnen doen door te gaan werken, door vrijwilligerswerk te doen, door boodschappen te doen voor je zieke buurvrouw, ..."
                },
                {
                    type: "Text",
                    content: "Het hoeven niet altijd grootse dingen te zijn die jou leven waardevol maken. Denk gewoon al eens terug aan de afgelopen dagen – welke (kleine) zaken heb je gedaan die eigenlijk best goed aansluiten met de 5 waarden die je net bent bekomen?"
                }
            ]
        },
        {
            id: "TE-MOD5-CARD8",
            title: "Leef naar je waarden",
            cardContents: [
                {
                    type: "Text",
                    content: "Wat kunnen verder nog manieren zijn om naar je waarden te leven voor jou?"
                },
                {
                    type: "Waarden herhalen",
                    text: "Vijf ingevulde waarden herhalen en hier per waarde een invulveld aan koppelen."
                },
                {
                    type: "Text",
                    content: "Hoe kan je een eerste kleine stap zetten om deze acties te doen? Probeer hier de komende periode extra aandacht aan te besteden. Je kan hiervoor altijd terugkomen naar dit onderdeel, om het opnieuw onder je aandacht te brengen."
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
    ]
}

const TEMOD6 = {
    id: "TE_MOD_6",
    title: "Afronding",
    titleMarkup: ["Afronding"],
    part: 6,
    description: "TODO",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
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
                    valueText: "Jouw selectie",
                    show: true,
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
                    content: "Indien score is verhoogd",
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
    ]
}


const ThoughtsEmotionsScript = {
    id: "TE",
    title: "Gedachten en Emoties",
    submodules: [TEMOD1, TEMOD2, TEMOD3, TEMOD4, TEMOD5, TEMOD6]
}

export default ThoughtsEmotionsScript;