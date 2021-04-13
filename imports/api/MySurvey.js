export const FollowUp = {
    "id": 4,
    "naam": "My Survey",
    "vragen": [
        {
            "id": 72135,
            "vertaling": "Welkom bij My Survey, je ervaringen en gedachten van de voorbije 6 weken. Op basis van deze gegevens en de evoluties die je maakt, kunnen we je persoonlijke coaching bieden. Het invullen duurt ongeveer 20 minuten. Je kan de vragenlijst steeds onderbreken en op een later moment verder gaan.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72136,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55461,
            "vertaling": "Heb je de afgelopen 6 weken last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)",
            "mogelijkeAntwoorden": [
                {
                    "id": 55462,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Nek",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55463,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Rug",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55464,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Schouder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55465,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Elleboog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55466,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Pols/hand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55467,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Heup",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55468,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Knie",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55469,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Enkel/voet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55470,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Nergens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55482,
            "vertaling": "Ben je in de afgelopen 6 weken afwezig geweest omwille van jouw nek- of schouderklachten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55484,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55485,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, 1-2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55486,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, meer dan 2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55487,
                    "type": "SUGGESTIE",
                    "vertaling": "Neen, nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55483,
                    "mogelijkAntwoordIds": [
                        55462,
                        55464
                    ]
                }
            ]
        },
        {
            "id": 55499,
            "vertaling": "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw rugklachten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55501,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55502,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, 1-2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55503,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, meer dan 2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55504,
                    "type": "SUGGESTIE",
                    "vertaling": "Neen, nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55500,
                    "mogelijkAntwoordIds": [
                        55463
                    ]
                }
            ]
        },
        {
            "id": 55516,
            "vertaling": "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw elleboog- of pols/handklachten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55518,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55519,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, 1-2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55520,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, meer dan 2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55521,
                    "type": "SUGGESTIE",
                    "vertaling": "Neen, nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55517,
                    "mogelijkAntwoordIds": [
                        55465,
                        55466
                    ]
                }
            ]
        },
        {
            "id": 55533,
            "vertaling": "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw heup-, knie- of enkel/voetklachten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55535,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55536,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, 1-2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55537,
                    "type": "SUGGESTIE",
                    "vertaling": "Ja, meer dan 2 weken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55538,
                    "type": "SUGGESTIE",
                    "vertaling": "Neen, nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55534,
                    "mogelijkAntwoordIds": [
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72133,
            "vertaling": "De volgende twee vragen gaan over jouw algemene gezondheid en werkvermogen. De term werkvermogen verwijst naar de mate waarin iemand lichamelijk en mentaal in staat is om zijn/haar werk uit te voeren.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72134,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55539,
            "vertaling": "Hoe zou je over het algemeen jouw gezondheid noemen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55540,
                    "type": "SUGGESTIE",
                    "vertaling": "Uitstekend",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55541,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55542,
                    "type": "SUGGESTIE",
                    "vertaling": "Goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55543,
                    "type": "SUGGESTIE",
                    "vertaling": "Matig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55544,
                    "type": "SUGGESTIE",
                    "vertaling": "Slecht",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72121,
            "vertaling": "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen? ",
            "mogelijkeAntwoorden": [
                {
                    "id": 72122,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet in staat om te werken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72123,
                    "type": "SLIDER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72124,
                    "type": "SLIDER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72125,
                    "type": "SLIDER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72126,
                    "type": "SLIDER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72127,
                    "type": "SLIDER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72128,
                    "type": "SLIDER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72129,
                    "type": "SLIDER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72130,
                    "type": "SLIDER",
                    "vertaling": "8",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72131,
                    "type": "SLIDER",
                    "vertaling": "9",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72132,
                    "type": "SLIDER",
                    "vertaling": "Optimaal werkvermogen",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72119,
            "vertaling": "De volgende vragen gaan over hoe je je voelt en hoe het met je ging de afgelopen 6 weken. Kan je bij elke vraag het antwoord geven dat het best benadert hoe je je voelde.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72120,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72112,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72113,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72114,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72115,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72116,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72117,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72118,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72105,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72106,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72107,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72108,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72109,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72110,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72111,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72098,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72099,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72100,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72101,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72102,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72103,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72104,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72091,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72092,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72093,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72094,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72095,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72096,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72097,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72084,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72085,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72086,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72087,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72088,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72089,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72090,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72971,
            "vertaling": "Goed bezig! Een derde van de vragenlijst zit er al op.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72972,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55545,
            "vertaling": "Iedereen ervaart wel eens pijn in zijn leven, zoals hoofdpijn, tandpijn, gewrichts- of spierpijn. Mensen komen ook vaak in situaties terecht die pijn veroorzaken, zoals een behandeling bij de tandarts of een chirurgische ingreep. Wij zijn geïnteresseerd in de soort gedachten en gevoelens die jij ervaart als je pijn hebt. Hierna volgen dertien beweringen die verschillende gedachten en gevoelens beschrijven die mogelijk met pijn te maken hebben. Probeer aan te geven in welke mate deze gedachten en gevoelens ook voor jou van toepassing zijn.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55546,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55547,
            "vertaling": "Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55548,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55549,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55550,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55551,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55552,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55553,
            "vertaling": "Als ik pijn heb, voel ik dat het zo niet verder kan",
            "mogelijkeAntwoorden": [
                {
                    "id": 55554,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55555,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55556,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55557,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55558,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55559,
            "vertaling": "Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55560,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55561,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55562,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55563,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55564,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55565,
            "vertaling": "Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
            "mogelijkeAntwoorden": [
                {
                    "id": 55566,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55567,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55568,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55569,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55570,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55571,
            "vertaling": "Als ik pijn heb, voel ik dat ik het niet meer uithoud",
            "mogelijkeAntwoorden": [
                {
                    "id": 55572,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55573,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55574,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55575,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55576,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55577,
            "vertaling": "Als ik pijn heb, word ik bang dat de pijn erger zal worden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55578,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55579,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55580,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55581,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55582,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55583,
            "vertaling": "Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55584,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55585,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55586,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55587,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55588,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55589,
            "vertaling": "Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
            "mogelijkeAntwoorden": [
                {
                    "id": 55590,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55591,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55592,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55593,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55594,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55595,
            "vertaling": "Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
            "mogelijkeAntwoorden": [
                {
                    "id": 55596,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55597,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55598,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55599,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55600,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55601,
            "vertaling": "Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
            "mogelijkeAntwoorden": [
                {
                    "id": 55602,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55603,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55604,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55605,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55606,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55607,
            "vertaling": "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
            "mogelijkeAntwoorden": [
                {
                    "id": 55608,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55609,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55610,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55611,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55612,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55613,
            "vertaling": "Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55614,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55615,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55616,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55617,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55618,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55619,
            "vertaling": "Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
            "mogelijkeAntwoorden": [
                {
                    "id": 55620,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55621,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55622,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55623,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55624,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55625,
            "vertaling": "Hierna volgen enkele uitspraken van mensen met pijn. Wil je voor iedere uitspraak aangeven in welke mate jouw normale werk of lichamelijke activiteiten zoals bukken, tillen, lopen en autorijden jouw pijn beïnvloeden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55626,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55627,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55628,
            "vertaling": "Lichamelijke activiteit verergert de pijn",
            "mogelijkeAntwoorden": [
                {
                    "id": 55629,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55630,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55631,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55632,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55633,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55634,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55635,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55636,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55637,
            "vertaling": "Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55638,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55639,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55640,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55641,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55642,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55643,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55644,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55645,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55646,
            "vertaling": "Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
            "mogelijkeAntwoorden": [
                {
                    "id": 55647,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55648,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55649,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55650,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55651,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55652,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55653,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55654,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55655,
            "vertaling": "Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
            "mogelijkeAntwoorden": [
                {
                    "id": 55656,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55657,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55658,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55659,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55660,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55661,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55662,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55663,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72075,
            "vertaling": "De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
            "mogelijkeAntwoorden": [
                {
                    "id": 72076,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72077,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72078,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72079,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72080,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72081,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72082,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72083,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72066,
            "vertaling": "Door mijn werk is de pijn erger geworden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72067,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72068,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72069,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72070,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72071,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72072,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72073,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72074,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55664,
            "vertaling": "Mijn werk is te zwaar voor mij",
            "mogelijkeAntwoorden": [
                {
                    "id": 55665,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55666,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55667,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55668,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55669,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55670,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55671,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55672,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55673,
            "vertaling": "Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
            "mogelijkeAntwoorden": [
                {
                    "id": 55674,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55675,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55676,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55677,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55678,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55679,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55680,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55681,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55682,
            "vertaling": "Mijn werk zou mijn lichaam kunnen schaden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55683,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55684,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55685,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55686,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55687,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55688,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55689,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 55690,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72057,
            "vertaling": "Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
            "mogelijkeAntwoorden": [
                {
                    "id": 72058,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72059,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72060,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72061,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72062,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72063,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72064,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72065,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72048,
            "vertaling": "Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
            "mogelijkeAntwoorden": [
                {
                    "id": 72049,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72050,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72051,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72052,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72053,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72054,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72055,
                    "type": "SLIDER",
                    "vertaling": "Geheel eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72056,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72973,
            "vertaling": "Je bent halfweg de vragenlijst, nog even volhouden!",
            "mogelijkeAntwoorden": [
                {
                    "id": 72974,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72045,
            "vertaling": "Hieronder vind je een lijst met uitspraken. Geef voor elke uitspraak aan in hoeverre deze waar en toepasbaar is voor jou.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72046,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72047,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72036,
            "vertaling": "Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72037,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72038,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72039,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72040,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72041,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72042,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72043,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72044,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72027,
            "vertaling": "Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72028,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72029,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72030,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72031,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72032,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72033,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72034,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72035,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72018,
            "vertaling": "Ik leid een volwaardig leven ook al heb ik chronische pijn.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72019,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72020,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72021,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72022,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72023,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72024,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72025,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72026,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72009,
            "vertaling": "Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72010,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72011,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72012,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72013,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72014,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72015,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72016,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72017,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 72000,
            "vertaling": "Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72001,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72002,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72003,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72004,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72005,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72006,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72007,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72008,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 71991,
            "vertaling": "Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 71992,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71993,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71994,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71995,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71996,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71997,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71998,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 71999,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 71982,
            "vertaling": "Ik vermijd situaties die mijn pijn verergeren.",
            "mogelijkeAntwoorden": [
                {
                    "id": 71983,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71984,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71985,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71986,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71987,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71988,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71989,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 71990,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 71973,
            "vertaling": "Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
            "mogelijkeAntwoorden": [
                {
                    "id": 71974,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71975,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71976,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71977,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71978,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71979,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71980,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 71981,
                    "mogelijkAntwoordIds": [
                        55462,
                        55463,
                        55464,
                        55465,
                        55466,
                        55467,
                        55468,
                        55469
                    ]
                }
            ]
        },
        {
            "id": 55691,
            "vertaling": "De hierna volgende vragen gaan over de hoeveelheid lichaamsbeweging die je doet in jouw dagelijks leven (zowel op het werk, thuis, in jouw vrije tijd als voor jouw verplaatsingen). Zware fysieke activiteiten verwijzen naar activiteiten die een zware lichamelijke inspanning vereisen en waarbij je veel sneller en dieper ademt dan normaal. Matige fysieke activiteiten verwijzen naar activiteiten die een matige lichamelijke inspanning vereisen en waarbij je iets sneller en dieper ademt dan normaal.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55692,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55705,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55706,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55707,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55708,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55709,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55710,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55711,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55712,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55713,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55702,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55704,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55717,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55718,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55719,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55720,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55721,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55722,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55723,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55724,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55725,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55714,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55716,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55729,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55730,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55731,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55732,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55733,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55734,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55735,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55736,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                },
                {
                    "id": 55737,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 55726,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 55728,
                                    "type": "TIJD",
                                    "vertaling": "Uren en minuten",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                }
                            ],
                            "vraagCondities": []
                        }
                    },
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55738,
            "vertaling": "Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 55739,
                    "type": "TIJD",
                    "vertaling": "Uren en minuten",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 72975,
            "vertaling": "Je bent er bijna! Er volgen nog twee korte delen die gaan over jouw job.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72976,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55740,
            "vertaling": "De hierna volgende stellingen gaan over situaties in jouw job. Geef aan hoe vaak deze situaties voorkomen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55741,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 71965,
            "vertaling": "Op mijn werk bruis ik van energie",
            "mogelijkeAntwoorden": [
                {
                    "id": 71966,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71967,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71968,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71969,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71970,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71971,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71972,
                    "type": "SUGGESTIE",
                    "vertaling": "Dagelijks",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 71957,
            "vertaling": "Ik ben enthousiast over mijn baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 71958,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71959,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71960,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71961,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71962,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71963,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71964,
                    "type": "SUGGESTIE",
                    "vertaling": "Dagelijks",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 71949,
            "vertaling": "Ik ga helemaal op in mijn werk",
            "mogelijkeAntwoorden": [
                {
                    "id": 71950,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71951,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71952,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71953,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71954,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71955,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 71956,
                    "type": "SUGGESTIE",
                    "vertaling": "Dagelijks",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55748,
            "vertaling": "Ik moet extra hard werken om iets af te krijgen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55749,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55750,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55751,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55752,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55753,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55754,
            "vertaling": "Ik werk onder tijdsdruk",
            "mogelijkeAntwoorden": [
                {
                    "id": 55755,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55756,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55757,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55758,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55759,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55760,
            "vertaling": "Ik moet mij haasten",
            "mogelijkeAntwoorden": [
                {
                    "id": 55761,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55762,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55763,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55764,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55765,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55784,
            "vertaling": "Ik kan mijn eigen werk plannen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55785,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55786,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55787,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55788,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55789,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55790,
            "vertaling": "Ik kan mijn werk doen op een manier die ik het beste vind",
            "mogelijkeAntwoorden": [
                {
                    "id": 55791,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55792,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55793,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55794,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55795,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55796,
            "vertaling": "Ik kan mijn opdracht zelf kiezen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55797,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55798,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55799,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55800,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55801,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55802,
            "vertaling": "Ik kan mijn manier van werken variëren",
            "mogelijkeAntwoorden": [
                {
                    "id": 55803,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55804,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55805,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55806,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55807,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55808,
            "vertaling": "Ik kan, als dat nodig is, mijn collega's om hulp vragen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55809,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55810,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55811,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55812,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55813,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55814,
            "vertaling": "Ik voel me sterk gewaardeerd door mijn collega's",
            "mogelijkeAntwoorden": [
                {
                    "id": 55815,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55816,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55817,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55818,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55819,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55820,
            "vertaling": "Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen",
            "mogelijkeAntwoorden": [
                {
                    "id": 55821,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55822,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55823,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55824,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55825,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55826,
            "vertaling": "Ik voel me sterk gewaardeerd door mijn directe leidinggevende",
            "mogelijkeAntwoorden": [
                {
                    "id": 55827,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55828,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55829,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55830,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55831,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55832,
            "vertaling": "Hierna vind je een aantal stellingen. Duid aan wat voor jou het meest van toepassing is.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55833,
                    "type": "SUGGESTIE",
                    "vertaling": "Oké",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55834,
            "vertaling": "De kans dat ik over 3 maanden blijf werken is…",
            "mogelijkeAntwoorden": [
                {
                    "id": 55835,
                    "type": "SUGGESTIE",
                    "vertaling": "Erg laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55836,
                    "type": "SUGGESTIE",
                    "vertaling": "Laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 1209567,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55837,
                    "type": "SUGGESTIE",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 1209568,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder hoog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55838,
                    "type": "SUGGESTIE",
                    "vertaling": "Hoog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55839,
                    "type": "SUGGESTIE",
                    "vertaling": "Heel hoog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55852,
            "vertaling": "Ik wil over 3 maanden blijven werken in een betaalde baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 55853,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55854,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55855,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55856,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55857,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55858,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55859,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55860,
            "vertaling": "Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
            "mogelijkeAntwoorden": [
                {
                    "id": 55861,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55862,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55863,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55864,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55865,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55866,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55867,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55868,
            "vertaling": "Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 55869,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55870,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55871,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55872,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55873,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55874,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55875,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55840,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 55841,
                    "type": "SUGGESTIE",
                    "vertaling": "Goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55842,
                    "type": "SUGGESTIE",
                    "vertaling": "Slecht",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55843,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 55844,
                    "type": "SUGGESTIE",
                    "vertaling": "Wijs",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55845,
                    "type": "SUGGESTIE",
                    "vertaling": "Dom",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55846,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 55847,
                    "type": "SUGGESTIE",
                    "vertaling": "Voordelig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55848,
                    "type": "SUGGESTIE",
                    "vertaling": "Nadelig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55849,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 55850,
                    "type": "SUGGESTIE",
                    "vertaling": "Plezierig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55851,
                    "type": "SUGGESTIE",
                    "vertaling": "Akelig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55876,
            "vertaling": "De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55877,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55878,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55879,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55880,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55881,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55882,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55883,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55884,
            "vertaling": "De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55885,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55886,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55887,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55888,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55889,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55890,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55891,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55892,
            "vertaling": "Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55893,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55894,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55895,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55896,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55897,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55898,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55899,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55900,
            "vertaling": "Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55901,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55902,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55903,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55904,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55905,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55906,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55907,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55908,
            "vertaling": "Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55909,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55910,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55911,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55912,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55913,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55914,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 55915,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                }
            ],
            "vraagCondities": []
        },
        {
            "id": 55916,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
            "mogelijkeAntwoorden": [
                {
                    "id": 55917,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55918,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55919,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55920,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55921,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55922,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                },
                {
                    "id": 55923,
                    "type": "SLIDER",
                    "vertaling": "Helemaal akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VragenlijstAfrondenActie",
                        "meldingVoorAfronding": "Je bent er!  Je kan nu je antwoorden doorsturen. Wijzigingen zijn nadien niet meer mogelijk.",
                        "meldingNaAfronding": "Goed gedaan! Met de antwoorden kunnen wij je coaching aanpassen. Sluit dit scherm om terug te keren naar het dashboard."
                    },
                    "validaties": []
                }
            ],
            "vraagCondities": []
        }
    ],
    "welkomVertaling": null,
    "voortgangVertaling": "Vraag",
    "voortgangWijzigingVertaling": "Wijziging van vraag",
    "deelnemerWijzigtAntwoordVertaling": "Ik had graag het antwoord op vraag {{index}} gewijzigd.",
    "herhaalVraagVertaling": "We gaan verder met de vragenlijst. Ik herhaal de vraag en eventuele voorgaande vragen.",
    "herhaalVraagVoorWijzigingVertaling": "Ok, ik herhaal de vraag en eventuele voorgaande vragen.",
    "herhaalAntwoordVertaling": "Jouw vorige antwoord:",
    "afrondenMetAttentieVertaling": "",
    "afrondenZonderAttentieVertaling": "",
    "securityVraag": null
}