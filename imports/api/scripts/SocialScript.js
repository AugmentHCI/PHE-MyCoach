const SOCMOD1 = {
    id: "SOC_MOD_1",
    title: "Het belang van sociale steun",
    titleMarkup: ["Het belang van", "sociale steun"],
    navBarTitle: "Belang sociale steun",
    part: 1,
    description: "We hebben allemaal nood aan sociale steun. Maar wat is sociale steun juist en waarom is dit zo belangrijk? Dit hoofdstuk geeft een kort overzicht.",
    duration: "5 minuten",
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
                },
                {
                    type: "Image",
                    link: "/images/social/people.jpg"
                },]
        },
        {
            title: "Sociale interacties zijn dynamisch",
            showIfAnswered: ["SOC-MOD-1-Q1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Mensen zijn sociale wezens en beïnvloeden elkaar voortdurend. Wanneer je chronische pijn ervaart, heeft dit niet enkel een grote impact op jezelf, maar ook op je naaste omgeving. De reactie van de omgeving kan beïnvloeden hoe jij met je klachten omgaat. Maar hoe jij met jouw klachten omgaat kan ook de reactie van de omgeving beïnvloeden. Bovendien kan de reactie van de omgeving veranderen doorheen de tijd. Mensen ervaren over het algemeen veel steun van hun omgeving wanneer ze onverwachts iets ernstig voorhebben, zoals acute pijn. Maar velen merken ook dat deze steun heel snel afneemt naarmate de klachten langer blijven duren. Kortom, sociale interacties zijn een complex gegeven."
                },
                {
                    type: "Image",
                    link: "/images/social/network2.jpg"
                },
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
                        {image: "/images/social/cleaning.jpg", title: "Praktische steun", text: "Iets concreet doen om te helpen zoals bijvoorbeeld taken in het huishouden overnemen."},
                        {image: "/images/social/worried.jpg", title: "Emotionele steun", text: "Dit zijn bijvoorbeeld mensen waarbij je terecht kan om je verhaal te doen, die begrip tonen en die laten zien dat ze in je geloven."},
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


const SOCMOD2 = {
    id: "SOC_MOD_2",
    title: "Sociale steun verhogen",
    titleMarkup: ["Sociale steun", "verhogen"],
    part: 2,
    description: "Hoe kan sociale steun van je omgeving verhogen? Dit onderdeel staat boordevol tips & tricks.",
    duration: "10 minuten",
    type: "Interactief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Sociale steun verhogen bij problemen of uitdagingen (zoals bij chronische pijnklachten) is geen gemakkelijke opdracht. Het beste plan van aanpak is een goede communicatie. Communiceer daarom met je omgeving over jouw problemen en uitdagingen. Dit doe je op een heldere, duidelijke, assertieve en respectvolle manier. Hieronder volgen tal van tips om mee aan de slag te gaan."
                },
            ]
        },
        {
            title: "Tip 1: Gebruik de bouwstenen van de verbindende communicatie",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Verbindende communicatie is gebaseerd op het gedachtengoed van ‘geweldloze communicatie' van Dr. Marshall Rosenberg. De bouwstenen van de verbindende communicatie kunnen helpend zijn om een boodschap over te brengen op een duidelijke, opbouwende en respectvolle manier. De bedoeling van verbindende communicatie is een kwalitatieve verbinding tot stand brengen die je toelaat om rekening te houden met je eigen behoeften én met die van de andere. Vanuit die verbinding - waarin geen oordelen of verwijten uitgesproken worden - kan je de ander tegemoet komen zonder jezelf te verliezen of weg te cijferen."
                }, 
                {
                    type: "Text",
                    content: "Hieronder vind je de 4 bouwstenen: waarneming, gevoel, behoefte en verzoek."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/facts.jpg", title: "Stap 1 - Waarneming", text: "Start met de waarneming. Beschrijf hierbij de feiten (wat zie je, wat hoor je...). Beperk je hier tot de objectieve feiten en verbind hier geen interpretaties of oordelen aan."},
                        {image: "/images/social/emojis.jpg", title: "Stap 2 - Gevoel", text: "Beschrijf hoe je je hierbij voelt (ik voel me: blij, bang, verdrietig, boos, verbaasd, ...)"},
                        {image: "/images/social/sadhappy.jpg", title: "Stap 3 - Behoefte", text: "Geef aan wat jouw behoeftes of waarden zijn, wat jij belangrijk vindt. Wanneer je een bepaalde emotie voelt, zoals bijvoorbeeld verdriet of boosheid, zegt dit namelijk iets over een onderliggende behoefte die op dat moment niet vervuld is (bijvoorbeeld de behoefte aan steun of aanmoediging)."},
                        {image: "/images/social/explaining.jpg", title: "Stap 4 - Verzoek", text: "Eindig met een verzoek: wat wil je vragen of verwacht je van de andere? Zorg ervoor dat je verzoek: zo contreet mogelijk is, positief geformuleerd is (dus bijvoorbeeld niet: wil je stoppen met schreeuwen aub? Maar wel: wil je stiller praten aub?), realistisch is, en beleefd geformuleerd is (Gebruik AUB en dankjewel)"},
                    ]
                }
            ]
        },
        {
            title: "Voorbeeld",
            cardContents: [
                {
                    type: "Text",
                    content: "Klinkt dit allemaal nogal theoretisch? We proberen het te verduidelijken met een voorbeeld!"
                },
                {
                    type: "Break"
                },
                {
                    type: "Image",
                    link: "/images/social/backpain.jpg"
                },
                {
                    type: "Text",
                    content: "Stel: Je hebt last van chronische rugpijn. Je doet je best om hier zo goed mogelijk mee om te gaan door een gezonde levensstijl aan te houden, in beweging te blijven, afleiding en ontspanning te voorzien én aan het werk te blijven, ondanks het feit dat je pijn hebt. Blijven werken is erg belangrijk voor jou, het geeft een nuttige invulling van je dag en het gevoel iets te kunnen betekenen. Het helpt je wanneer de mensen rondom jou je hierin steunen en aanmoedigen. Je naaste collega is erg bezorgd om jou. Elke dag opnieuw vraagt ze, vanaf het moment dat je toekomt op het werk, of het echt wel gaat met je rug. Ze vraagt of het toch niet beter is als je thuis zou blijven, zodat jij je zeker niet gaat forceren."
                },
                {
                    type: "Image",
                    link: "/images/social/tired.jpg"
                },
                {
                    type: "Text",
                    content: "Je vindt het best vervelend dat je collega hier elke dag opnieuw over begint. Je snapt dat ze dit met de beste bedoelingen doet, maar je wordt er verdrietig van en zou eigenlijk willen dat ze ermee stopt en jou in de plaats hiervan steunt en aanmoedigt in je beslissing om aan het werk te blijven. Haar opmerkingen en feedback beginnen echter zwaar op je te wegen en je merkt dat het je meer en meer moeite kost om gemotiveerd aan het werk te blijven. Je weet echter niet hoe je dit aan haar duidelijk kan maken, zonder haar te kwetsen of boos te maken."
                },
                {
                    type: "Image",
                    link: "/images/social/blocks.jpg"
                },
                {
                    type: "Text",
                    content: "De vier bouwstenen van de verbindende communicatie kunnen je helpen om feedback te geven aan je collega. Je maakt aan je collega duidelijk waar je het moeilijk mee hebt en waarom. Ook geef je aan wat je in de plaats daarvan dan wél zou willen. Dit doe je op een duidelijke en respectvolle manier, zonder dat je collega zich hier aangevallen door zal voelen!"
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/facts.jpg", title: "Stap 1 - Waarneming", text: "Beperk je hier tot de objectieve feiten en verbind hier geen interpretaties of oordelen aan. Bijvoorbeeld zeg niet: Ik merk dat je je erg moeit met mijn situatie en vind dat onbeleefd! Maar zeg wel: Ik merk op dat je dagelijks vraagt of ik toch niet beter thuis zou blijven van het werk."},
                        {image: "/images/social/emojis.jpg", title: "Stap 2 - Gevoel", text: "Beschrijf hoe je je hierbij voelt. Bijvoorbeeld: Ik weet dat dit goed bedoeld is, maar ik voel me hier verdrietig bij."},
                        {image: "/images/social/sadhappy.jpg", title: "Stap 3 - Behoefte", text: "Geef aan wat jouw behoefte of waarde is, wat jij belangrijk vindt. Bijvoorbeeld: Omdat ik behoefte heb aan steun in mijn keuze om aan het werk te blijven."},
                        {image: "/images/social/explaining.jpg", title: "Stap 4 - Verzoek", text: "Geef aan wat jouw behoefte of waarde is, wat jij belangrijk vindt. Bijvoorbeeld: Omdat ik behoefte heb aan steun in mijn keuze om aan het werk te blijven."},
                    ]
                }
            ]
        },
        {
            title: "Alles bij elkaar",
            cardContents: [
                {
                    type: "Text",
                    content: "Samenvattend zou je je collega dus als volgt kunnen aanspreken:"
                },
                {
                    type: "List",
                    numbered: true,
                    content: [
                        "Ik merk op dat je dagelijks vraagt of ik toch niet beter thuis zou blijven van het werk",
                        "Ik weet dat dit goed bedoeld is, maar ik voel me hier verdrietig bij",
                        "Omdat ik net behoefte heb aan steun in mijn keuze om aan het werk te blijven",
                        "Zou je mij daarom aub willen steunen en aanmoedigen in mijn keuze om aan het werk te zijn?"
                    ]
                },
                {
                    type: "Image",
                    link: "/images/social/coffee.jpg"
                },
                {
                    type: "Text",
                    content: "Hieronder heb je invulvelden waar je zelf oncomfortabele situaties aan kan toevoegen en vervolgens verbindende reacties op kan formuleren."
                },
                {
                    type: "Multitext-Input",
                    id: "SOC-MOD-1-SITUATIONS",
                    text: "Welke onconfortabele situaties heb jij meegemaakt die verbindende reacties konden gebruiken?",
                    placeholder: "Schrijf ze hier neer:"
                },
            ]
        },
        {
            title: "Tip 2: Geef duidelijk aan wat je verwacht van je omgeving of waar je hulp bij nodig hebt",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/three-emotions.jpg"
                },
                {
                    type: "Text",
                    content: "Stel je de volgende situatie voor: Je hebt veel last van pijn vandaag, dit maakt je boos en ook verdrietig. Je hebt nood aan troost van je partner in de vorm van een knuffel. Daarom zeg je tegen je partner: ‘Ik heb veel last van pijn vandaag.’ Je vertelt er echter niet bij wat je op dit moment juist verwacht en waar je nood aan hebt, dat is nu toch wel duidelijk of niet soms...?"
                },
                {
                    type: "Text",
                    content: [{type: "bold", content: "Niet dus..."}]
                },
                {
                    type: "Text",
                    content: "Hoewel het voor onszelf misschien heel duidelijk is wat we juist willen van de ander, kan die ander geen gedachten lezen... Je partner heeft er dus maar naar te raden wat je juist verwacht. Is dat troost? Hulp bij de afwas die nog in de gootsteen staat? Iemand die mee nadenkt over hoe de pijn het best aangepakt kan worden?"
                },
                {
                    type: "Text",
                    content: "Wanneer je niet duidelijk aangeeft waar je behoefte aan hebt, is de kans groot dat de ander jou niet gaat geven wat je nodig hebt. Dit kan er dan weer voor zorgen dat jij teleurgesteld bent, terwijl je partner misschien gefrustreerd is omdat hij of zij het gevoel heeft jou niet te kunnen helpen. Je kan je voorstellen dat dit de pijn geen goed gaat doen."
                },
                {
                    type: "Image",
                    link: "/images/social/diverge.jpg"
                },
            ]
        },
        {
            title: "Communiceer duidelijk",
            cardContents: [
                {
                    type: "Text",
                    content: "Communiceer daarom duidelijk en concreet over je noden en verwachtingen volgens de bouwstenen van de verbindende communicatie. Bijvoorbeeld:"
                },
                {
                    type: "List",
                    content: [
                        [{type: "bold", content: "Waarneming: "}, "Ik heb veel last van pijn vandaag"],
                        [{type: "bold", content: "Gevoel: "}, "Dit maakt me boos en ook verdrietig"],
                        [{type: "bold", content: "Behoefte: "}, "Ik heb behoefte aan wat troost en steun"],
                        [{type: "bold", content: "Verzoek: "}, "Zou je mij een dikke knuffel willen geven?"],

                    ]
                },
                {
                    type: "Text",
                    content: "De kans dat je partner tegemoetkomt aan jouw verwachtingen is een heel pak groter op deze manier!"
                },
            ]
        },
        {
            title: "Tip 3: Sensibiliseer je omgeving d.m.v. een elevator pitch",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Text",
                    content: "Alleen door je situatie kort en helder toe te lichten aan je omgeving, weten zij wat er speelt en kunnen ze hier rekening mee houden. Zorg ervoor dat je al een uitleg klaar hebt in de vorm van een elevator pitch en oefen deze goed in, dat maakt de drempel om erover te praten wat kleiner!"
                },
                {
                    type: "Image",
                    link: "/images/social/elevator.jpg"
                },
                {
                    type: "Text",
                    content: "Wat is een elevator pitch? Dit is een beschrijving van ongeveer zestig seconden over een bepaald onderwerp. De naam ‘elevator pitch’ slaat op de korte tijd die je hebt om je verhaal te doen. Stel je voor dat je op het gelijkvloers in de lift stapt, samen met iemand die je meer uitleg wilt geven over jouw situatie. Je hebt hiervoor de tijd tot jullie samen uitstappen op de 20e of 30e verdieping, dus pakweg één minuut. Om hier een duidelijk en volledig verhaal van te maken, is het belangrijk om dit goed voor te bereiden en te oefenen zodat je het vlot kan vertellen. Als je iets verwacht van de andere, zorg er dan ook voor dat je duidelijk jouw noden formuleert."
                },
                {
                    type: "Text",
                    content: "Hieronder heb je een voorbeeldje van een elevator pitch. Er is ook een invulveld waar jezelf jouw elevator pitch kan noteren indien je dit zou willen."
                },
                {
                    type: "Voorbeeld",
                    text: "Volgt nog (Comaco)"
                },
                {
                    type: "Groot invulveld",
                    text: "Nieuw tekst-inputveld maken dat meerdere regels kan tonen."
                }
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Hoe verhoog je sociale steun (bijvoorbeeld in het kader van chronische pijn)?"
                },
                {
                    type: "List",
                    content: [
                        "Licht je naaste omgeving (bv. familie, vrienden, je leidinggevende en collega’s) in over je situatie en blijf er niet alleen mee zitten.",
                        "Durf op een respectvolle, verbindende manier te reageren wanneer je bepaalde reacties van je omgeving als niet helpend ervaart of het gevoel hebt dat jouw grenzen overschreden worden.",
                        "Communiceer duidelijk over waar je hulp bij nodig hebt en hoe die hulp eruit kan zien"
                    ]
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

const SOCMOD3 = {
    id: "SOC_MOD_3",
    title: "Omgaan met reacties van mijn omgeving",
    titleMarkup: ["Omgaan met reacties", "van mijn omgeving"],
    navBarTitle: "Omgaan met reacties",
    part: 3,
    description: "In dit hoofdstuk leer je welke reacties van jouw omgeving mogelijks een negatief effect hebben op jouw situatie en hoe je hiermee kan omgaan.",
    duration: "7 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Vormen van reacties",
            cardContents: [
                {
                    type: "Text",
                    content: "Over het algemeen zijn er drie vormen van reacties uit de omgeving die je waarschijnlijk als niet helpend zal ervaren: onbegrip tonen, overbezorgd reageren en ongewild advies geven. Wat doe je best wel en wat best niet in deze situaties?"
                },
            ]
        },
        {
            title: "Onbegrip",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/oh-no.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Stel je niet aan”",
                },
                {
                    type: "TextBubble",
                    content: "“Ik heb ook pijn, maar werk wel”",
                    float: "right"
                },
                {
                    type: "TextBubble",
                    content: "“Er is toch niets aan je te zien”",
                },
                {
                    type: "TextBubble",
                    content: "“Je wilt gewoon niet werken”",
                    float: "right"
                },
                {
                    id: "SOC-MOD-3-SLIDER-1",
                    type: "Slider",
                    text: "Zijn deze reacties herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "De juiste reactie",
            showIfAnswered: ["SOC-MOD-3-SLIDER-1"],
            cardContents: [
                {
                    type: "Text",
                    content: "En welke reacties heb je best wel of niet in zo een situatie?"
                },
                {
                    id: "SOC-MOD-3-SWIPE-ACTION",
                    type: "Swipe",
                    small: true,
                    buttons: {disagree: "Niet doen", agree: "Doen"},
                    options: [
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-1",
                            text: "In een hoekje kruipen en niet reageren",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-2",
                            text: "Je klachten verbijten en zo over je grenzen gaan",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-3",
                            text: "Je klachten uitvergroten en extra in de verf zetten om zo toch begrip te proberen verkrijgen",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-4",
                            text: "De situatie kort en helder toelichten d.m.v. je elevator pitch, de persoon weet er vaak het fijne niet van",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-5",
                            text: "De bouwstenen van de verbindende communicatie gebruiken om op een respectvolle maar assertieve manier te reageren.",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE-ACTION-6",
                            text: "Het gesprek afronden en het contact met deze persoon proberen te beperken.",
                        }
                    ]
                },
            ]
        },
        {
            title: "Wat wel en niet doen",
            showIfAnswered: ["SOC-MOD-3-SWIPE-ACTION"],
            cardContents: [
                {
                    type: "Text",
                    content: "Nu gaan we even kort bespreken welke van de reacties jij best wel en niet kan hebben om de situaties zo goed mogelijk aan te pakken."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/elevator-pitch.jpg", title: "Doen: Licht je situatie kort en helder toe", text: "De andere weet vaak het fijne niet over jouw situatie. Door je situatie kort en duidelijk toe te lichten zal de persoon jouw situatie misschien beter begrijpen en zijn of haar reactie aanpassen. Dit kan je bijvoorbeeld doen met een elevator pitch."},
                        {image: "/images/social/listen.jpg", title: "Doen: Reageer op een respectvolle maar assertieve manier", text: "Gebruik de bouwstenen van de verbindende communicatie om duidelijk te maken hoe jij je voelt bij dergelijke reacties en wat je in de toekomst zou willen."},
                        {image: "/images/social/business.jpg", title: "Doen: Rond het gesprek af", text: "Ervaar je nog steeds onbegrip na het hanteren van verbindende communicatie? Rond dan het gesprek af en probeer het contact met deze persoon te beperken."},
                        {image: "/images/social/wall.jpg", title: "Niet doen: In een hoekje kruipen en niet reageren", text: "Je mag op een assertieve manier reageren op onbegrip door bijvoorbeeld jouw situatie te verduidelijken en aan te geven dat je dit soort van opmerkingen niet helpend vindt. Misschien gaat degene die de opmerkingen maakt wel anders reageren als hij of zij jouw situatie beter begrijpt of denkt hij of zij in de toekomst twee keer na alvorens bepaalde opmerkingen te maken."},
                        {image: "/images/social/pain.jpg", title: "Niet doen: Je klachten verbijten", text: "Door je klachten te verbijten loop je het risico dat je over je grenzen gaat. Dit is uiteraard niet helpend voor jouw situatie. Let wel op, vanuit de module pijneducatie weet je dat pijn niet altijd betekent dat er schade is of dat je iets fout doet. Maak dus een goede afweging tussen jouw belasting en jouw belastbaarheid."},
                        {image: "/images/social/puzzle.jpg", title: "Niet doen: Je klachten uitvergroten", text: "Je klachten uitvergroten en extra in de verf zetten om zo toch begrip proberen te krijgen is geen goed idee. Dit zal vaak een omgekeerd effect hebben en leiden tot nog meer onbegrip. Probeer daarom op een verbindende manier over jouw klachten te communiceren."}
                    ]
                }
            ]
        },
        {
            title: "Overbezorgdheid",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/nurse.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Ga maar zitten, ik doe dat wel”",
                },
                {
                    type: "TextBubble",
                    content: "“Is dat niet te zwaar voor jou?”",
                    float: "right"
                },
                {
                    type: "TextBubble",
                    content: "“Oei, dat is niet goed! Laat dat toch maar nakijken”",
                },
                {
                    type: "TextBubble",
                    content: "“Doe toch maar rustig aan!”",
                    float: "right"
                },
                {
                    id: "SOC-MOD-3-SLIDER-2",
                    type: "Slider",
                    text: "Zijn deze reacties herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "De juiste reactie",
            showIfAnswered: ["SOC-MOD-3-SLIDER-2"],
            cardContents: [
                {
                    type: "Text",
                    content: "En welke reacties heb je best wel of niet in zo een situatie?"
                },
                {
                    id: "SOC-MOD-3-SWIPE2-ACTION",
                    type: "Swipe",
                    small: true,
                    buttons: {disagree: "Niet doen", agree: "Doen"},
                    options: [
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-1",
                            text: "Ingaan op de bezorgdheid en het advies volgen",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-2",
                            text: "Uitgebreid praten over je klachten",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-3",
                            text: "De ernst van je situatie benadrukken",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-4",
                            text: "De persoon bedanken voor de interesse en je situatie kort en helder toelichten d.m.v. je elevator pitch",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-5",
                            text: "Het belang benadrukken van niet te focussen op je klachten en het opnemen van je normale taken",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-6",
                            text: "Zeggen dat je het zeker zal aangeven wanneer je over je klachten wilt praten of hulp nodig hebt",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE2-ACTION-7",
                            text: "De bouwstenen van de verbindende communicatie gebruiken om een reactie te formuleren",
                        }
                    ]
                },
            ]
        },
        {
            title: "Wat wel en niet doen",
            showIfAnswered: ["SOC-MOD-3-SWIPE2-ACTION"],
            cardContents: [
                {
                    type: "Text",
                    content: "Nu gaan we even kort bespreken welke van de reacties jij best wel en niet kan hebben om de situaties zo goed mogelijk aan te pakken."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/explaining.jpg", title: "Doen: Licht je situatie kort en helder toe", text: "Overdreven bezorgdheid kan ervoor zorgen dat je meer gaat focussen op de klachten wat het herstelproces kan vertragen of waardoor je meer pijn gaat ervaren. Bovendien kan dit knagen aan jouw motivatie om voornemens verder te zetten. Bedank daarom de persoon voor de interesse en licht je situatie kort en helder toe. Dit kan je doen door middel van de elevator pitch."},
                        {image: "/images/social/focus.jpg", title: "Doen: Benadruk het belang van niet te focussen op je klachten.", text: "Te zeer focussen op jouw klachten kan niet alleen zorgen voor een onprettig gevoel, het kan ook bijdragen aan de overgevoeligheid van het zenuwstelsel waardoor je klachten verergeren. Benadruk daarom dat het belangrijk is dat je jouw normale taken geleidelijk aan terug opneemt en opbouwt."},
                        {image: "/images/social/saved.jpg", title: "Doen: Geef zelf aan waar je behoefte aan hebt", text: "Personen die dit soort van opmerkingen maken bedoelen het goed. Bedank hen daarom en geef zeker aan dat je zelf zal aangeven wanneer je over jouw klachten wilt praten of hulp nodig hebt."},
                        {image: "/images/social/minds.jpg", title: "Doen: Reageer op een assertieve en respectvolle manier", text: "Gebruik de bouwstenen van verbindende communicatie om een reactie te formuleren."},
                        {image: "/images/social/window.jpg", title: "Niet doen: Ingaan op de bezorgdheid", text: "Door in te gaan op de bezorgdheid leg je meer de nadruk op je klachten en val je in een vermijdingspatroon. Dit zal je op termijn niet vooruithelpen. Diegene die de opmerking maakte zal in de toekomst ook terug zijn bezorgdheid uiten."},
                        {image: "/images/social/messages.jpg", title: "Niet doen: Uitgebreid praten over je klachten", text: "Door uitgebreid over je klachten te praten leg je er te veel nadruk op. Hierdoor kan je meer onaangename gevoelens of pijn ervaren. Een korte en duidelijke uitleg volstaat."},
                        {image: "/images/social/nervous.jpg", title: "Niet doen: De ernst van de situatie benadrukken", text: "Wanneer je de situatie heel ernstig voorstelt zal dit niet alleen zorgen voor een slecht gevoel, het zal er ook voor zorgen dat de persoon nog meer bezorgd zal zijn in de toekomst."},
                    ]
                }
            ]
        },
        {
            title: "Ongevraagd advies geven",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/pointing.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Zou je dit niet eens proberen?”",
                },
                {
                    type: "TextBubble",
                    content: "“Een vriend van mij heeft net hetzelfde, met dat middeltje gaat het beter”",
                    float: "right"
                },
                {
                    id: "SOC-MOD-3-SLIDER-3",
                    type: "Slider",
                    text: "Zijn deze reacties herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "De juiste reactie",
            showIfAnswered: ["SOC-MOD-3-SLIDER-3"],
            cardContents: [
                {
                    type: "Text",
                    content: "En welke reacties heb je best wel of niet in zo een situatie?"
                },
                {
                    id: "SOC-MOD-3-SWIPE3-ACTION",
                    type: "Swipe",
                    small: true,
                    buttons: {disagree: "Niet doen", agree: "Doen"},
                    options: [
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-1",
                            text: "De adviezen ter harte nemen en je huidige behandelplan volledig omgooien",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-2",
                            text: "Verder praten over jouw klachten en de ernst van je situatie",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-3",
                            text: "De persoon bedanken voor de interesse / adviezen en benadrukken dat je je gaat houden aan het je huidige behandelplan",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-4",
                            text: "Je situatie kort en helder toelichten d.m.v. je elevator pitch",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-5",
                            text: "Zeggen dat je het zeker zal aangeven wanneer je over je klachten wilt praten of hulp nodig hebt",
                        },
                        {
                            id: "SOC-MOD-3-SWIPE3-ACTION-6",
                            text: "De bouwstenen van de verbindende communicatie gebruiken om een reactie te formuleren",
                        },
                    ]
                },
            ]
        },
        {
            title: "Wat wel en niet doen",
            showIfAnswered: ["SOC-MOD-3-SWIPE3-ACTION"],
            cardContents: [
                {
                    type: "Text",
                    content: "Nu gaan we even kort bespreken welke van de reacties jij best wel en niet kan hebben om de situaties zo goed mogelijk aan te pakken."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/paper.jpg", title: "Doen: Benadruk dat je je gaat houden aan je huidige behandelplan", text: "Veel adviezen zijn niet wetenschappelijk onderbouwd. Vertrouw daarom op het behandelplan dat je samen met jouw gezondheidsexperts hebt opgesteld. Bedank de persoon, maar benadruk dat je je gaat houden aan je huidige behandelplan."},
                        {image: "/images/social/elevator-pitch.jpg", title: "Doen: Licht je situatie kort en helder toe", text: "Ieder zijn situatie is uniek en wat voor iemand anders helpt, helpt daarom niet voor jou. Licht daarom je situatie kort en helder toe en vertel waarom je hebt gekozen voor je huidige behandelplan. Dit kan je doen door middel van de elevator pitch."},
                        {image: "/images/social/saved.jpg", title: "Doen: Geef zelf aan waar je behoefte aan hebt", text: "Deze personen bedoelen het goed. Bedank hen daarom, maar geef zeker aan dat je zelf zal aangeven wanneer je over jouw klachten wilt praten of hulp nodig hebt."},
                        {image: "/images/social/blocks.jpg", title: "Doen: Reageer op een assertieve en respectvolle manier", text: "Gebruik de bouwstenen van verbindende communicatie om een reactie te formuleren."},
                        {image: "/images/social/stepping-stones.jpg", title: "Niet doen: Je huidige behandelplan volledig omgooien", text: "Door de adviezen ter harte te nemen kan je onzeker worden over jouw huidige behandelplan. Doordat je verwachtingen wijzigen kan de behandeling ook daadwerkelijk minder effectief worden. Heb je toch twijfels over jouw huidige behandelplan, dan neem je best contact op met een gezondheidsexpert."},
                        {image: "/images/social/nervous.jpg", title: "Niet doen: De ernst van de situatie benadrukken", text: "Wanneer je de situatie heel ernstig voorstelt zal dit niet alleen zorgen voor een slecht gevoel en je pijn beïnvloeden, het zal er ook voor zorgen dat de persoon meer bezorgd zal zijn in de toekomst en nog meer advies zal geven."},
                    ]
                }
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Over het algemeen zijn er drie vormen van reacties uit de omgeving die je waarschijnlijk als niet helpend zal ervaren: onbegrip tonen, overbezorgd reageren en ongewild advies geven. Het gebruiken van de bouwstenen van de verbindende communicatie, het communiceren van jouw noden en het sensibiliseren van je omgeving kunnen dienen als handvaten om hierop te reageren."
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

const SOCMOD4 = {
    id: "SOC_MOD_4",
    title: "Mijn houding t.a.v. mijn omgeving",
    titleMarkup: ["Mijn houding t.a.v.", "de omgeving"],
    navBarTitle: "Mijn eigen houding",
    part: 4,
    description: "In dit hoofdstuk leer je welke reacties van jouw omgeving mogelijks een negatief effect hebben op jouw situatie en hoe je hiermee kan omgaan.",
    duration: "10 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "We beginnen dit onderdeel met een vraag:"
                },
                {
                    id: "SOC-MOD-4-Q1",
                    type: "Question",
                    question: "Ik heb zelf geen impact op de houding en reactie van mijn omgeving op mijn chronische pijn.",
                    options: ["Waar", "Niet waar"],
                    correct: "Niet waar",
                    explanation: "Ook hoe jij met je klachten omgaat naar anderen kan je situatie beïnvloeden. Over het algemeen zijn er drie manieren van omgang die mogelijks negatieve gevolgen hebben voor je situatie: je klachten verbergen, klagen en situaties vermijden. Waarom zijn deze coping mechanismen nadelig en wat doe je dan best anders?",
                    onCorrect: "Niet waar!",
                    onIncorrect: "Niet waar!"
                }
            ]
        },
        /* KLACHTEN VERBERGEN */
        {
            title: "Klachten verbergen",
            titleCard: true,
            showIfAnswered: ["SOC-MOD-4-Q1"]
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/smile.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Hoe gaan ze reageren, ik zal maar niks vertellen.”",
                },
                {
                    type: "TextBubble",
                    content: "“Ik wil de rest niet met mijn problemen lastigvallen”",
                    float: "right"
                },
                {
                    type: "TextBubble",
                    content: "“Ze zullen wel denken dat ik overdrijf”",
                },
                {
                    id: "SOC-MOD-4-SLIDER-1",
                    type: "Slider",
                    text: "Is dit herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "Waarom is dit nadelig?",
            showIfAnswered: ["SOC-MOD-4-SLIDER-1"],
            cardContents: [
                {
                    type: "Text",
                    content: "Meestal weten mensen niet dat je klachten hebt. Als je niets vertelt over je pijnprobleem, krijgt je omgeving ook geen houvast over hoe ze erover moeten denken en ermee kunnen omgaan. Mogelijks reageert je omgeving met onbegrip, aan de buitenkant is er immers vaak niets te zien. Zo heb jij het gevoel alleen te zijn met je klachten en het gevoel dat je niet serieus genomen wordt. Dit is niet leuk en kan een negatief effect hebben op jouw welbevinden. Wanneer je het moeilijk vindt om open te zijn over je situatie bestaat de kans dat je over je grenzen gaat en het risico loopt op overbelasting."
                },
            ]
        },
        {
            title: "Wat kan je beter doen?",
            cardContents: [
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/stress.jpg", title: "Het is oké om klachten te hebben!", text: "Dit is helemaal niets om je over te schamen. Wel is het belangrijk dat je communiceert over jouw klachten indien nodig, zodat anderen weten wat er speelt en hier rekening mee kunnen houden."},
                        {image: "/images/social/explain.jpg", title: "Licht je situatie kort en helder toe", text: "Ieder zijn situatie is uniek. Licht daarom je situatie kort en duidelijk toe, bijvoorbeeld door middel van een elevator pitch. Zo is je omgeving niet langer onwetend en kunnen jullie samen naar oplossingen zoeken."},
                        {image: "/images/social/blocks.jpg", title: "Geef aan waar je behoefte aan hebt", text: "Geef mee wat je van je omgeving verwacht of hoe zij kunnen helpen. Hiervoor kan je de bouwstenen van de verbindende communicatie gebruiken."},
                    ]
                }
            ]
        },
        /* KLAGEN */
        {
            title: "Klagen",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/complaining.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Ik heb echt een heel zwaar leven”",
                },
                {
                    type: "TextBubble",
                    content: "“Ik kan bijna niets meer”",
                    float: "right"
                },
                {
                    type: "TextBubble",
                    content: "“Jullie weten niet hoe zwaar ik het heb”",
                },
                {
                    id: "SOC-MOD-4-SLIDER-2",
                    type: "Slider",
                    text: "Is dit herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "Waarom is dit nadelig?",
            showIfAnswered: ["SOC-MOD-4-SLIDER-2"],
            cardContents: [
                {
                    type: "Text",
                    content: "Door steeds enkel en alleen te focussen op je pijn, bestaat de kans dat je deze in stand houdt of zelfs erger maakt. Bovendien loop je het risico dat de sociale steun vanuit je omgeving hierdoor na verloop van tijd zal afnemen."
                },
            ]
        },
        {
            title: "Wat kan je beter doen?",
            cardContents: [
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/ventilator.jpg", title: "Ventileer met mate over je klachten", text: "Het is oké om over je klachten te praten, dit is zelfs aan te raden! Soms kan het deugd doen om over je situatie te ventileren. Erkenning en begrip krijgen kan ook een positief effect hebben op het ervaren van pijn, maar doe dit met mate!"},
                        {image: "/images/social/focus.jpg", title: "Focus ook op wat wel goed gaat", text: "Focus ook op zaken die nog wel goed gaan in je leven en praat ook over andere dingen: je bent meer dan je pijn! Dit kan er zelfs voor zorgen dat je je beter voelt en minder last hebt van je pijn!"},
                        {image: "/images/social/family.jpg", title: "Geef aan waar je behoefte aan hebt", text: "Geef mee wat je van je omgeving verwacht of hoe zij kunnen helpen. Hiervoor kan je de bouwstenen van de verbindende communicatie gebruiken."},
                    ]
                }
            ]
        },
        /* VERMIJDEN */
        {
            title: "VERMIJDEN",
            titleCard: true
        },
        {
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/scared.jpg"
                },
                {
                    type: "TextBubble",
                    content: "“Ik kom niet, want ik heb last”",
                },
                {
                    type: "TextBubble",
                    content: "“Dat kan ik niet met mijn klachten hoor”",
                    float: "right"
                },
                {
                    type: "TextBubble",
                    content: "“Gaan jullie maar zonder mij”",
                },
                {
                    id: "SOC-MOD-4-SLIDER-3",
                    type: "Slider",
                    text: "Is dit herkenbaar voor jou?",
                    from: 1,
                    to: 10,
                    mapping: "10-AGREE",
                    showValue: true,
                    save: true,
                },
            ]
        },
        {
            title: "Waarom is dit nadelig?",
            showIfAnswered: ["SOC-MOD-4-SLIDER-3"],
            cardContents: [
                {
                    type: "Text",
                    content: "Door activiteiten te vermijden en enkel te focussen op je pijn kan je pijn in stand houden of zelfs verergeren. Bovendien zonder je je ook meer af van jouw omgeving waardoor je mogelijks leuke zaken misloopt."
                },
            ]
        },
        {
            title: "Wat kan je beter doen?",
            cardContents: [
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/stops.jpg", title: "Ken je grenzen", text: "Afleiding en ontspanning kunnen het ervaren van pijn verminderen. Blijf dus in de mate van het mogelijke en zonder je grenzen te overschrijden, dingen ondernemen en deelnemen aan activiteiten!"},
                        {image: "/images/social/spotlight.jpg", title: "Licht je situatie kort en helder toe", text: "Ieder zijn situatie is uniek. Licht daarom je situatie kort en duidelijk toe, bijvoorbeeld door middel van een elevator pitch. Zo is je omgeving niet langer onwetend en kunnen jullie samen naar oplossingen zoeken."},
                        {image: "/images/social/different.jpg", title: "Stel alternatieven voor", text: "Zie je bepaalde activiteiten niet zitten? Stel dan alternatieven voor."},
                        {image: "/images/social/paper-ripped.jpg", title: "Geef aan waar je behoefte aan hebt", text: "Geef mee wat je van je omgeving verwacht of hoe zij kunnen helpen. Hiervoor kan je de bouwstenen van de verbindende communicatie gebruiken."},
                    ]
                }
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Je klachten verbergen, klagen of veel activiteiten vermijden dan kan je situatie negatief beïnvloeden en mogelijks onprettige reacties van je omgeving uitlokken. Durf daarom -met mate- te communiceren over jouw klachten, communiceer je noden aan je omgeving, focus ook op wat wél goed gaat en blijf, rekening houdend met jouw grenzen, dingen ondernemen."
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

const SOCMOD5 = {
    id: "SOC_MOD_5",
    title: "Sociale media",
    titleMarkup: ["Sociale", "media"],
    part: 5,
    description: "In welk opzicht kan sociale media helpen maar waar moet je ook echt mee oppassen?",
    duration: "5 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Tegenwoordig gebruikt iedereen sociale media. Om te connecteren met vrienden en familie, foto’s te delen, deel uit te maken van groepen of gewoon pagina’s te volgen die je leuk vindt. Sociale media maakt ons leven makkelijker. Maar pas op want deze medaille heeft ook een keerzijde. Naast het verslavend effect zijn er ook nog andere valkuilen waarmee je rekening moet houden. Hieronder krijg je een overzichtje van de voordelen en valkuilen."
                },
                {
                    type: "Image",
                    link: "/images/social/socials.jpg"
                },
            ]
        },
        {
            title: "Voordelen van sociale media",
            cardContents: [
                {
                    type: "Text",
                    content: "Sociale media maken ons leven makkelijker en bieden tal van voordelen. Hieronder volgt een overzicht."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/network1.jpg", title: "Je kan connecteren met mensen die je belangrijk vindt", text: "Sociale media laten toe om op een makkelijke manier te connecteren met mensen die jij belangrijk vindt (zoals vrienden en familie, maar ook collega’s). Je kan levensgebeurtenissen en ervaringen delen, maar ook sociale steun zoeken."},
                        {image: "/images/social/circle.jpg", title: "Je kan lid worden van zelfhulpgroepen", text: "Via sociale media kan je lotgenoten zoeken door bijvoorbeeld lid te worden van een zelfhulpgroep. Kijken hoe andere mensen met hun klachten omgaan kan motiverend werken en je nieuwe ideeën geven. Let er wel op dat de zelfhulpgroep goed begeleid wordt. Anders loop je het risico dat er tips en adviezen worden gedeeld die misschien helemaal niet onderbouwd zijn. Of misschien kom je dan wel terecht in groep met mensen die enkel focussen op de negatieve kanten. Dit helpt je natuurlijk ook niet verder. Enkele goede voorbeelden van zelfhulpgroepen voor mensen met chronische pijnklachten zijn: Het Lichtpuntje, De Maretak en de Vlaamse Pijnliga."},
                        {image: "/images/social/strong.jpg", title: "Je kan je laten inspireren", text: "Je kan mensen of pagina’s volgen die jou motiveren en inspireren. Zo krijg je nieuwe moed om verder te zetten."},
                        {image: "/images/social/data.jpg", title: "Je kan nieuwe informatie of tips verwerven", text: "Er zijn tal van kwalitatieve pagina’s waar je nieuwe inzichten kan verwerven en waar je goede tips en adviezen kan terugvinden. Ben je op zoek naar nieuwe oefeningen om wat meer variatie te krijgen in je oefenschema? Online vind je zeker een aantal leuke voorbeelden terug."},
                    ]
                }
            ]
        },
        {
            title: "Valkuilen van sociale media",
            cardContents: [
                {
                    type: "Text",
                    content: "Sociale media maken ons leven makkelijker en bieden tal van voordelen. Hieronder volgt een overzicht."
                },
                {
                    type: "Story",
                    content: [
                        {image: "/images/social/addicted.jpg", title: "Sociale media zijn verslavend", text: "Voordat je het weet kan je jouw smartphone niet meer aan de kant leggen en blijf je maar scrollen door de nieuwsoverzichten. Vergeet ook niet om in de echte wereld te leven en regelmatig te de-connecteren."},
                        {image: "/images/social/losing-mind.jpg", title: "Niet alles is wat het lijkt", text: "Op sociale media lijkt iedereen altijd happy en nooit ergens last van te hebben. Dit kan heel demotiverend zijn wanneer jij wel een moeilijke periode hebt. Maar wees je ervan bewust dat veel dingen die op sociale media staan geen weerspiegeling zijn van de realiteit. Iedereen heeft wel eens mindere dagen."},
                        {title: "Je bent meer waard dan enkel jouw likes", text: "Hoeveel likes krijg jij op jouw posts? Mensen maken er tegenwoordig een wedstrijd van. Ook dit is verslavend. En wanneer je dan eens minder likes krijgt, bestaat de kans dat je je slecht gaat voelen. Je bent meer waard dan enkel jouw likes en mensen die om je geven weten dat."},
                        {image: "/images/social/rocket.jpg", title: "Pas op met quick fixes", text: "Veel personen of online pagina’s beweren dat ze het wondermiddel hebben voor jouw klachten. Neem deze medicatie in, doe die oefening… Dit is zelden goed advies. Vaak helpen deze “oplossingen” niet, zijn het maar één van de zoveel mogelijke oplossingen of kunnen ze zelfs een negatief effect op je gezondheid hebben. Bespreek daarom goed jouw behandelplan met een gezondheidsexpert en ga op zoek naar kwaliteitsvolle pagina’s."},
                    ]
                }
            ]
        },
        {
            title: "Adviezen voor sociale media",
            cardContents: [
                {
                    type: "Text",
                    content: "Tot slot hebben we nog 2 adviezen voor het gebruik van sociale media."
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Pas op met wat je deelt"
                },
                {
                    type: "Text",
                    content: "Eens je iets deelt op het internet blijft het er altijd opstaan. Zelfs wanneer je het verwijderd, is er nog ergens een spoor van terug te vinden. Berichten verspreiden ook razendsnel, je weet nooit wie er allemaal meekijkt. Stel je bent thuis van het werk omwille van ziekte, een burn-out of lichamelijke klachten. Mensen hebben dan vaak de opvatting dat je geen plezier meer mag maken. Als jij dan een foto post van een leuke activiteit (al is het maar een wandeling en is dit belangrijk voor je herstel), dan zullen veel mensen met onbegrip reageren. Denk daarom goed na over wat je op sociale media zet en stel je privacy instellingen zorgvuldig in."
                },
                {
                    type: "Image",
                    link: "/images/social/thinking-laptop.jpg"
                },
                {
                    type: "Break"
                },
                {
                    type: "Subtitle",
                    content: "Wees kritisch"
                },
                {
                    type: "Text",
                    content: "Niet alles wat op sociale media staat is waar. Dit kan gaan van complottheorieën tot opinies over politieke en sociale thema’s. Er wordt ook heel wat foutieve informatie verspreid over pijn en andere gezondheidsproblemen. Heb je een filmpje met opinie al bekeken dat zullen de algoritmes steeds vaker gelijkaardige filmpjes aanbevelen. Hierdoor wordt het heel makkelijk om onze manier van denken en ons gedrag te beïnvloeden. Wees daarom kritisch en probeer steeds de bron of beide kanten van het verhaal te achterhalen."
                },
                {
                    type: "Image",
                    link: "/images/social/hmm.jpg"
                },
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Sociale media zijn niet meer uit ons leven weg te denken. Deze handige tools bieden tal van voordelen zoals het bijdragen aan sociale steun en verbondenheid. Maar pas op, want naast het verslavend effect zijn er nog tal van andere valkuilen verbonden aan sociale media."
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


const SOCMOD6 = {
    id: "SOC_MOD_6",
    title: "Jouw netwerk",
    titleMarkup: ["Jouw", "Netwerk"],
    part: 6,
    description: "Wie kan echt een verschil maken en betrek je dus best in je netwerk?",
    duration: "5 minuten",
    type: "Informatief",
    image: "learning",
    imageWidth: "180px",
    cards: [{
            title: "Inleiding",
            cardContents: [
                {
                    type: "Text",
                    content: "Onderzoek toont aan dat het ervaren van een gebrek aan sociale steun op het werk een belangrijke voorspeller is van uitval. Het is dus erg belangrijk om een helpend netwerk rondom je te bouwen, dat je kan helpen met het voorkomen van uitval t.g.v. je pijnklachten of dat je kan ondersteunen in het voorbereiden van je werkhervatting na een periode van afwezigheid."
                },
                {
                    type: "Image",
                    link: "/images/social/network2.jpg"
                },
                {
                    type: "Text",
                    content: "In dit hoofdstuk overlopen we belangrijke partners die je hierin kan betrekken."
                },
            ]
        },
        {
            title: "Jouw rechtstreekse collega’s",
            cardContents: [
                {
                    type: "Text",
                    content: "Zoals eerder in deze module werd aangehaald, is het belangrijk om jouw situatie toe te lichten aan je omgeving. Zo weten zij wat er speelt en kunnen zij hier rekening mee houden. Ook kan je op die manier onbegrip van collega’s vermijden bv. over het feit dat jij aangepast werk krijgt in het kader van je chronische pijnklachten. Wanneer je het niet ziet zitten om dit alleen te doen, kan je hiervoor zeker hulp inroepen, bijvoorbeeld van je rechtstreekse leidinggevende."
                },
                {
                    type: "Image",
                    link: "/images/social/team.jpg"
                },
            ]
        },
        {
            title: "Jouw leidinggevende",
            cardContents: [
                {
                    type: "Text",
                    content: "Jouw rechtstreeks leidinggevende kan een belangrijke rol spelen in het zorgen voor aanpassingen die het werk kunnen vergemakkelijken voor jou. Ook kan je leidinggevende je collega’s (mee) op de hoogte brengen van je situatie."
                },
                {
                    type: "Image",
                    link: "/images/social/letters.jpg"
                },
            ]
        },
        {
            title: "De personeelsdienst",
            cardContents: [
                {
                    type: "Text",
                    content: "De personeelsdienst kan je o.a. verder helpen wanneer je met vragen zit rond progressieve werkhervatting, aanpassingen aan je uurrooster en dergelijke."
                },
                {
                    type: "Image",
                    link: "/images/social/network3.jpg"
                },
            ]
        },
        {
            title: "De interne vertrouwenspersoon",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/trustperson.jpg"
                },
                {
                    type: "Text",
                    content: "Sommige organisaties hebben een interne vertrouwenspersoon aangesteld. Deze heeft een opleiding gevolgd om deze rol te mogen uitoefenen. Je kan bij de vertrouwenspersoon terecht voor een vertrouwelijk gesprek. Dit kan nuttig zijn wanneer psychosociale factoren, zoals bijvoorbeeld een hoge werkdruk, het ervaren van veel stress of het hebben van een conflict op het werk, het moeilijk maken om aan het werk te blijven of drempels zijn om het werk opnieuw te hervatten. Tijdens het gesprek kan je je verhaal doen en krijg je advies en tips. Indien dit aangewezen is, kan je de vertrouwenspersoon je doorverwijzen, bijvoorbeeld naar je huisarts, de preventieadviseur psychosociale aspecten of een psycholoog. Ook wordt er bekeken of je verdere ondersteuning wenst, zoals bijvoorbeeld een aantal individuele gesprekken, een contact met jouw leidinggevende of het organiseren van een bemiddelingsgesprek. De vertrouwenspersoon heeft beroepsgeheim en gaat enkel en alleen met jouw toestemming contact opnemen met het werk en bepaalde informatie doorgeven! Je kan de contactgegevens van de preventieadviseur psychosociale aspecten terugvinden in jouw arbeidsreglement."
                },
            ]
        },
          {
            title: "De arbeidsgeneesheer van IDEWE",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/idewe.png"
                },
                {
                    type: "Text",
                    content: "De arbeidsgeneesheer is een arts die gespecialiseerd is in de relatie tussen gezondheid en werk. In het kader van chronische pijn kan hij onder andere aanbevelingen doen om de werkpost aan te passen zodat rekening gehouden wordt met jouw gezondheidsbeperkingen als werknemer. Ook kan de arbeidsgeneesheer advies geven over progressieve werkhervatting. De arbeidsgeneesheer werkt nauw samen met de preventieadviseur ergonomie en de preventieadviseur psychosociale aspecten en kan jou, indien hij inschat dat dit aangewezen is, hiernaar doorverwijzen."
                },
            ]
        },
          {
            title: "De preventieadviseur ergonomie van IDEWE",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/ergo.jpg"
                },
                {
                    type: "Text",
                    content: "De preventieadviseur ergonomie kan samen met jou als werknemer het individuele functioneren bij het uitvoeren van de verschillende taken in je functie evalueren. Hierbij wordt o.a. naar de volgende aspecten gekeken: Welke taken verlopen vlot en kunnen zonder pijn of last uitgevoerd worden? Bij welke taken ervaar je hinder en pijn? Welke taken vermijd je? De ergonoom analyseert de risico’s en zal op basis van de deze analyse gericht advies geven. Deze adviezen kunnen gaan over de ergonomische inrichting en opstelling van je werkpost, je werkmiddelen, de werkorganisatie en je werkmethode. Wil je een afspraak maken bij de preventieadviseur ergonomie, dan neem je best contact op met het regionaal kantoor van IDEWE."
                },
            ]
        },
          {
            title: "De preventieadviseur psychosociale aspecten van IDEWE",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/paps.jpg"
                },
                {
                    type: "Text",
                    content: "Heeft jouw organisatie geen interne vertrouwenspersoon of wil je liever je verhaal doen aan iemand buiten jouw organisatie, dan kan je bij de preventieadviseur psychosociale aspecten (PAPS) terecht voor een vertrouwelijk gesprek. Dit kan nuttig zijn wanneer psychosociale factoren, zoals bijvoorbeeld een hoge werkdruk, het ervaren van veel stress of het hebben van een conflict op het werk, het moeilijk maken om aan het werk te blijven of voor jou een drempel zijn om het werk opnieuw te hervatten. Tijdens het gesprek kan je je verhaal doen en krijg je advies en tips. Indien dit aangewezen is, kan je de PAPS je doorverwijzen naar hulpverlening, zoals bijvoorbeeld je huisarts of een psycholoog. Ook wordt er bekeken of je verdere ondersteuning wenst, zoals bijvoorbeeld een aantal individuele gesprekken, een contactname met jouw leidinggevende of het organiseren van een bemiddelingsgesprek. De PAPS heeft beroepsgeheim en gaat enkel en alleen met jouw toestemming contact opnemen met het werk en bepaalde informatie doorgeven! Je kan de contactgegevens van de preventieadviseur psychosociale aspecten terugvinden in jouw arbeidsreglement."
                },
            ]
        },
          {
            title: "De huisarts",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/huisarts.jpg"
                },
                {
                    type: "Text",
                    content: "De huisarts is voor veel mensen, die te kampen hebben met gezondheidsproblemen van fysieke en/of mentale aard, een eerste en laagdrempelig aanspreekpunt. Vaak fungeert de huisarts als een soort van vertrouwenspersoon, die aandacht heeft voor jouw medische en mentale toestand en jouw sociale situatie. De huisarts kan o.a. ook beslissingen nemen over ziekteverlof en progressieve werkhervatting. Ook kan de huisarts je indien nodig doorverwijzen naar gespecialiseerde hulp, bijvoorbeeld naar een psycholoog of kinesist."
                },
            ]
        },
          {
            title: "Een kinesist of psycholoog",
            cardContents: [
                {
                    type: "Image",
                    link: "/images/social/fitness.jpg"
                },
                {
                    type: "Text",
                    content: "Kinesisten zijn gespecialiseerd in het behandelen van lichamelijke klachten. Zij kunnen helpen bij het opbouwen of aanpassen van je activiteiten, het opmaken van een oefenschema om je lichaam te versterken en het aanpassen van je levensstijl. Aanvullend kunnen zij ook manuele therapie aanbieden om beperkingen in de mobiliteit van gewrichten op te lossen of om gespannen spieren terug helpen te ontspannen. Onderzoek wijst ook uit dat personen met chronische pijn die het psychologisch moeilijk hebben, meer last hebben van de pijn, minder actief zijn en meer medicatie nodig hebben. Merkt je zelf dat je het mentaal moeilijk hebt en nood hebt naar bijkomende ondersteuning, dan kan ondersteuning door een psycholoog met achtergrond in chronische pijn zeker helpend zijn."
                },
            ]
        },
        {
            title: "Key take-away",
            overview: true,
            cardContents: [
                {
                    type: "Text",
                    content: "Onderzoek toont aan dat het ervaren van een gebrek aan sociale steun op het werk een belangrijke voorspeller is van ziekteverzuim. Het is dus erg belangrijk om een helpend netwerk rondom je op te bouwen, dat je kan helpen met het voorkomen van uitval t.g.v. je pijnklachten of dat je kan ondersteunen in het voorbereiden van je werkhervatting na een periode van afwezigheid."
                },
            ]
        },
        {
            generateFinishSubmoduleButton: true,
            lastModule: true,
            text: "Voltooi module 'Sociale omgeving'",
            textOnCompleted: "Keer terug"
        }
    ]
}

const SocialScript = {
    id: "SOC",
    title: "Sociale omgeving",
    submodules: [SOCMOD1, SOCMOD2, SOCMOD3, SOCMOD4, SOCMOD5, SOCMOD6]
}

export default SocialScript;