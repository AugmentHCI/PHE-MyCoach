export const Baseline = {
    "id": 2,
    "naam": "phe-voorgeschiedenis",
    "vragen": [
        {
            "id": 72137,
            "vertaling": "Welkom bij de Health Empower opstart vragenlijst. Hierin peilen we naar je fysieke klachten en je ervaringen hieromtrent. Na het afronden ben je officieel van start gegaan en krijg je iedere 6 weken een nieuwe vragenlijst om de evoluties in kaart te brengen. Het invullen duurt ongeveer 20 minuten. Je kan de vragenlijst steeds onderbreken en op een later moment verder gaan.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72138,
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
            "id": 72203,
            "vertaling": "Heb je de afgelopen 7 dagen last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)",
            "mogelijkeAntwoorden": [
                {
                    "id": 72204,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Nek",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72205,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Rug",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72206,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Schouder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72207,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Elleboog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72208,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Pols/hand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72209,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Heup",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72210,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Knie",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72211,
                    "type": "SUGGESTIE_MEERKEUZE",
                    "vertaling": "Enkel/voet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72212,
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
            "id": 72139,
            "vertaling": "Hoelang heb je jouw nek- of schouderklachten al?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72140,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "Minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72141,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1-6 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72142,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72143,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3-6 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72144,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72145,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "langer dan 1 jaar",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72171,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72172,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72173,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72174,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72175,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72176,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72177,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72146,
                    "mogelijkAntwoordIds": [
                        72204,
                        72206
                    ]
                }
            ]
        },
        {
            "id": 72147,
            "vertaling": "Hoelang heb je jouw rugklachten al?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72148,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "Minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72149,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1-6 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72150,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72151,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3-6 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72152,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72153,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "langer dan 1 jaar",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72179,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72180,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72181,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72182,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72183,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72184,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72185,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72154,
                    "mogelijkAntwoordIds": [
                        72205
                    ]
                }
            ]
        },
        {
            "id": 72155,
            "vertaling": "Hoelang heb je jouw elleboog- of pols/handklachten al?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72156,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "Minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72157,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1-6 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72158,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72159,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3-6 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72160,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72161,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "langer dan 1 jaar",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72187,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72188,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72189,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72190,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72191,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72192,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72193,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72162,
                    "mogelijkAntwoordIds": [
                        72207,
                        72208
                    ]
                }
            ]
        },
        {
            "id": 72163,
            "vertaling": "Hoelang heb je jouw heup-, knie- of enkel/voetklachten al?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72164,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "Minder dan 1 week",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72165,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1-6 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72166,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 weken",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72167,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3-6 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72168,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6-12 maanden",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
                    "id": 72169,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "langer dan 1 jaar",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72195,
                            "vertaling": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72196,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "0 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72197,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-7 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72198,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "8-14 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72199,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "15-28 dagen",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72200,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "1-3 maanden",
                                    "attentieVertaling": null,
                                    "vervolgActie": null,
                                    "validaties": []
                                },
                                {
                                    "id": 72201,
                                    "type": "SUGGESTIE_SPINNER",
                                    "vertaling": "langer dan 3 maanden",
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
            "vraagCondities": [
                {
                    "type": "MogelijkeAntwoordenVraagConditie",
                    "id": 72170,
                    "mogelijkAntwoordIds": [
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72213,
            "vertaling": "De volgende twee vragen gaan over jouw algemene gezondheid en werkvermogen. De term werkvermogen verwijst naar de mate waarin iemand lichamelijk en mentaal in staat is om zijn/haar werk uit te voeren.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72214,
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
            "id": 72215,
            "vertaling": "Hoe zou je over het algemeen jouw gezondheid noemen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72216,
                    "type": "SUGGESTIE",
                    "vertaling": "Uitstekend",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72217,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72218,
                    "type": "SUGGESTIE",
                    "vertaling": "Goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72219,
                    "type": "SUGGESTIE",
                    "vertaling": "Matig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72220,
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
            "id": 72221,
            "vertaling": "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72222,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet in staat om te werken",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72223,
                    "type": "SLIDER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72224,
                    "type": "SLIDER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72225,
                    "type": "SLIDER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72226,
                    "type": "SLIDER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72227,
                    "type": "SLIDER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72228,
                    "type": "SLIDER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72229,
                    "type": "SLIDER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72230,
                    "type": "SLIDER",
                    "vertaling": "8",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72231,
                    "type": "SLIDER",
                    "vertaling": "9",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72232,
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
            "id": 72268,
            "vertaling": "De volgende vragen gaan over hoe je je voelt en hoe het met je ging de afgelopen 6 weken. Kan je bij elke vraag het antwoord geven dat het best benadert hoe je je voelde.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72269,
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
            "id": 72261,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72262,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72263,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72264,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72265,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72266,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72267,
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
            "id": 72254,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72255,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72256,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72257,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72258,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72259,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72260,
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
            "id": 72247,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72248,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72249,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72250,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72251,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72252,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72253,
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
            "id": 72240,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72241,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72242,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72243,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72244,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72245,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72246,
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
            "id": 72233,
            "vertaling": "Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72234,
                    "type": "SUGGESTIE",
                    "vertaling": "Altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72235,
                    "type": "SUGGESTIE",
                    "vertaling": "Meestal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72236,
                    "type": "SUGGESTIE",
                    "vertaling": "Vaak",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72237,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72238,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72239,
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
            "id": 72965,
            "vertaling": "Goed bezig! Een derde van de vragenlijst zit er al op.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72966,
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
            "id": 72270,
            "vertaling": "Iedereen ervaart wel eens pijn in zijn leven, zoals hoofdpijn, tandpijn, gewrichts- of spierpijn. Mensen komen ook vaak in situaties terecht die pijn veroorzaken, zoals een behandeling bij de tandarts of een chirurgische ingreep. Wij zijn geïnteresseerd in de soort gedachten en gevoelens die jij ervaart als je pijn hebt. Hierna volgen dertien beweringen die verschillende gedachten en gevoelens beschrijven die mogelijk met pijn te maken hebben. Probeer aan te geven in welke mate deze gedachten en gevoelens ook voor jou van toepassing zijn.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72271,
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
            "id": 72272,
            "vertaling": "Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72273,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72274,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72275,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72276,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72277,
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
            "id": 72278,
            "vertaling": "Als ik pijn heb, voel ik dat het zo niet verder kan",
            "mogelijkeAntwoorden": [
                {
                    "id": 72279,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72280,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72281,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72282,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72283,
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
            "id": 72284,
            "vertaling": "Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72285,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72286,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72287,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72288,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72289,
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
            "id": 72290,
            "vertaling": "Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
            "mogelijkeAntwoorden": [
                {
                    "id": 72291,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72292,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72293,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72294,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72295,
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
            "id": 72296,
            "vertaling": "Als ik pijn heb, voel ik dat ik het niet meer uithoud",
            "mogelijkeAntwoorden": [
                {
                    "id": 72297,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72298,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72299,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72300,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72301,
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
            "id": 72302,
            "vertaling": "Als ik pijn heb, word ik bang dat de pijn erger zal worden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72303,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72304,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72305,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72306,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72307,
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
            "id": 72308,
            "vertaling": "Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72309,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72310,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72311,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72312,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72313,
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
            "id": 72314,
            "vertaling": "Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
            "mogelijkeAntwoorden": [
                {
                    "id": 72315,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72316,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72317,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72318,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72319,
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
            "id": 72320,
            "vertaling": "Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
            "mogelijkeAntwoorden": [
                {
                    "id": 72321,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72322,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72323,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72324,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72325,
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
            "id": 72326,
            "vertaling": "Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
            "mogelijkeAntwoorden": [
                {
                    "id": 72327,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72328,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72329,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72330,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72331,
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
            "id": 72332,
            "vertaling": "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
            "mogelijkeAntwoorden": [
                {
                    "id": 72333,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72334,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72335,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72336,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72337,
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
            "id": 72338,
            "vertaling": "Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72339,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72340,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72341,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72342,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72343,
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
            "id": 72344,
            "vertaling": "Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
            "mogelijkeAntwoorden": [
                {
                    "id": 72345,
                    "type": "SUGGESTIE",
                    "vertaling": "Helemaal niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72346,
                    "type": "SUGGESTIE",
                    "vertaling": "In lichte mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72347,
                    "type": "SUGGESTIE",
                    "vertaling": "In zekere mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72348,
                    "type": "SUGGESTIE",
                    "vertaling": "In grote mate",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72349,
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
            "id": 72350,
            "vertaling": "Hierna volgen enkele uitspraken van mensen met pijn. Wil je voor iedere uitspraak aangeven in welke mate jouw normale werk of lichamelijke activiteiten zoals bukken, tillen, lopen en autorijden jouw pijn beïnvloeden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72351,
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
                    "id": 72352,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72353,
            "vertaling": "Lichamelijke activiteit verergert de pijn",
            "mogelijkeAntwoorden": [
                {
                    "id": 72354,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72355,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72356,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72357,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72358,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72359,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72360,
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
                    "id": 72361,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72362,
            "vertaling": "Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72363,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72364,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72365,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72366,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72367,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72368,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72369,
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
                    "id": 72370,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72371,
            "vertaling": "Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
            "mogelijkeAntwoorden": [
                {
                    "id": 72372,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72373,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72374,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72375,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72376,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72377,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72378,
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
                    "id": 72379,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72380,
            "vertaling": "Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
            "mogelijkeAntwoorden": [
                {
                    "id": 72381,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72382,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72383,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72384,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72385,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72386,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72387,
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
                    "id": 72388,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72389,
            "vertaling": "De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
            "mogelijkeAntwoorden": [
                {
                    "id": 72390,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72391,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72392,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72393,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72394,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72395,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72396,
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
                    "id": 72397,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72398,
            "vertaling": "Door mijn werk is de pijn erger geworden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72399,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72400,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72401,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72402,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72403,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72404,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72405,
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
                    "id": 72406,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72407,
            "vertaling": "Mijn werk is te zwaar voor mij",
            "mogelijkeAntwoorden": [
                {
                    "id": 72408,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72409,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72410,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72411,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72412,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72413,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72414,
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
                    "id": 72415,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72416,
            "vertaling": "Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
            "mogelijkeAntwoorden": [
                {
                    "id": 72417,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72418,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72419,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72420,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72421,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72422,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72423,
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
                    "id": 72424,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72425,
            "vertaling": "Mijn werk zou mijn lichaam kunnen schaden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72426,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72427,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72428,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72429,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72430,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72431,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72432,
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
                    "id": 72433,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72434,
            "vertaling": "Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
            "mogelijkeAntwoorden": [
                {
                    "id": 72435,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72436,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72437,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72438,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72439,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72440,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72441,
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
                    "id": 72442,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72443,
            "vertaling": "Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
            "mogelijkeAntwoorden": [
                {
                    "id": 72444,
                    "type": "SLIDER",
                    "vertaling": "Geheel oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72445,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72446,
                    "type": "SLIDER",
                    "vertaling": "Enigszins oneens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72447,
                    "type": "SLIDER",
                    "vertaling": "Weet het niet",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72448,
                    "type": "SLIDER",
                    "vertaling": "Enigszins eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72449,
                    "type": "SLIDER",
                    "vertaling": "Tamelijk eens",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72450,
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
                    "id": 72451,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72967,
            "vertaling": "Je bent halfweg de vragenlijst, nog even volhouden!",
            "mogelijkeAntwoorden": [
                {
                    "id": 72968,
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
            "id": 72524,
            "vertaling": "Hieronder vind je een lijst met uitspraken. Geef voor elke uitspraak aan in hoeverre deze waar en toepasbaar is voor jou.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72525,
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
                    "id": 72526,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72515,
            "vertaling": "Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72516,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72517,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72518,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72519,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72520,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72521,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72522,
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
                    "id": 72523,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72506,
            "vertaling": "Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72507,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72508,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72509,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72510,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72511,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72512,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72513,
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
                    "id": 72514,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72497,
            "vertaling": "Ik leid een volwaardig leven ook al heb ik chronische pijn.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72498,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72499,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72500,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72501,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72502,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72503,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72504,
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
                    "id": 72505,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72488,
            "vertaling": "Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72489,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72490,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72491,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72492,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72493,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72494,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72495,
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
                    "id": 72496,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72479,
            "vertaling": "Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72480,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72481,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72482,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72483,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72484,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72485,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72486,
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
                    "id": 72487,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72470,
            "vertaling": "Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72471,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72472,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72473,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72474,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72475,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72476,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72477,
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
                    "id": 72478,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72461,
            "vertaling": "Ik vermijd situaties die mijn pijn verergeren.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72462,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72463,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72464,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72465,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72466,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72467,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72468,
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
                    "id": 72469,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72452,
            "vertaling": "Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72453,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72454,
                    "type": "SUGGESTIE",
                    "vertaling": "Zeer zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72455,
                    "type": "SUGGESTIE",
                    "vertaling": "Zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72456,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72457,
                    "type": "SUGGESTIE",
                    "vertaling": "Dikwijls",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72458,
                    "type": "SUGGESTIE",
                    "vertaling": "Bijna altijd",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72459,
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
                    "id": 72460,
                    "mogelijkAntwoordIds": [
                        72204,
                        72205,
                        72206,
                        72207,
                        72208,
                        72209,
                        72210,
                        72211
                    ]
                }
            ]
        },
        {
            "id": 72527,
            "vertaling": "De hierna volgende vragen gaan over de hoeveelheid lichaamsbeweging die je doet in jouw dagelijks leven (zowel op het werk, thuis, in jouw vrije tijd als voor jouw verplaatsingen). Zware fysieke activiteiten verwijzen naar activiteiten die een zware lichamelijke inspanning vereisen en waarbij je veel sneller en dieper ademt dan normaal. Matige fysieke activiteiten verwijzen naar activiteiten die een matige lichamelijke inspanning vereisen en waarbij je iets sneller en dieper ademt dan normaal.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72528,
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
            "id": 72532,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72533,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72534,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72535,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72536,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72537,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72538,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72539,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
                    "id": 72540,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72529,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72531,
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
            "id": 72544,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72545,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72546,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72547,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72548,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72549,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72550,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72551,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
                    "id": 72552,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72541,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72543,
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
            "id": 72556,
            "vertaling": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72557,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "0",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72558,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "1",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72559,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "2",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72560,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "3",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72561,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "4",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72562,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "5",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72563,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "6",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
                    "id": 72564,
                    "type": "SUGGESTIE_SPINNER",
                    "vertaling": "7",
                    "attentieVertaling": null,
                    "vervolgActie": {
                        "type": "VervolgVraagActie",
                        "volgendeVraag": {
                            "id": 72553,
                            "vertaling": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
                            "mogelijkeAntwoorden": [
                                {
                                    "id": 72555,
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
            "id": 72565,
            "vertaling": "Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?",
            "mogelijkeAntwoorden": [
                {
                    "id": 72566,
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
            "id": 72969,
            "vertaling": "Je bent er bijna! Er volgen nog twee korte delen die gaan over jouw job.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72970,
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
            "id": 72567,
            "vertaling": "De hierna volgende stellingen gaan over situaties in jouw job. Geef aan hoe vaak deze situaties voorkomen.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72568,
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
            "id": 72585,
            "vertaling": "Op mijn werk bruis ik van energie",
            "mogelijkeAntwoorden": [
                {
                    "id": 72586,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72587,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72588,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72589,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72590,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72591,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72592,
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
            "id": 72577,
            "vertaling": "Ik ben enthousiast over mijn baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 72578,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72579,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72580,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72581,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72582,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72583,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72584,
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
            "id": 72569,
            "vertaling": "Ik ga helemaal op in mijn werk",
            "mogelijkeAntwoorden": [
                {
                    "id": 72570,
                    "type": "SUGGESTIE",
                    "vertaling": "Nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72571,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per jaar of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72572,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per maand of minder",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72573,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per maand",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72574,
                    "type": "SUGGESTIE",
                    "vertaling": "Eens per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72575,
                    "type": "SUGGESTIE",
                    "vertaling": "Een paar keer per week",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72576,
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
            "id": 72593,
            "vertaling": "Ik moet extra hard werken om iets af te krijgen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72594,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72595,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72596,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72597,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72598,
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
            "id": 72599,
            "vertaling": "Ik werk onder tijdsdruk",
            "mogelijkeAntwoorden": [
                {
                    "id": 72600,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72601,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72602,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72603,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72604,
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
            "id": 72605,
            "vertaling": "Ik moet mij haasten",
            "mogelijkeAntwoorden": [
                {
                    "id": 72606,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72607,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72608,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72609,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72610,
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
            "id": 72611,
            "vertaling": "Ik kan mijn eigen werk plannen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72612,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72613,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72614,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72615,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72616,
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
            "id": 72617,
            "vertaling": "Ik kan mijn werk doen op een manier die ik het beste vind",
            "mogelijkeAntwoorden": [
                {
                    "id": 72618,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72619,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72620,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72621,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72622,
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
            "id": 72623,
            "vertaling": "Ik kan mijn opdracht zelf kiezen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72624,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72625,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72626,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72627,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72628,
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
            "id": 72629,
            "vertaling": "Ik kan mijn manier van werken variëren",
            "mogelijkeAntwoorden": [
                {
                    "id": 72630,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72631,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72632,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72633,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72634,
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
            "id": 72635,
            "vertaling": "Ik kan, als dat nodig is, mijn collega's om hulp vragen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72636,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72637,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72638,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72639,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72640,
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
            "id": 72641,
            "vertaling": "Ik voel me sterk gewaardeerd door mijn collega's",
            "mogelijkeAntwoorden": [
                {
                    "id": 72642,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72643,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72644,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72645,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72646,
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
            "id": 72647,
            "vertaling": "Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen",
            "mogelijkeAntwoorden": [
                {
                    "id": 72648,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72649,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72650,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72651,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72652,
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
            "id": 72653,
            "vertaling": "Ik voel me sterk gewaardeerd door mijn directe leidinggevende",
            "mogelijkeAntwoorden": [
                {
                    "id": 72654,
                    "type": "SUGGESTIE",
                    "vertaling": "(Bijna) nooit",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72655,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder zelden",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72656,
                    "type": "SUGGESTIE",
                    "vertaling": "Soms",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72657,
                    "type": "SUGGESTIE",
                    "vertaling": "Regelmatig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72658,
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
            "id": 72659,
            "vertaling": "Hierna vind je een aantal stellingen. Duid aan wat voor jou het meest van toepassing is.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72660,
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
            "id": 72661,
            "vertaling": "De kans dat ik over 3 maanden blijf werken is…",
            "mogelijkeAntwoorden": [
                {
                    "id": 72662,
                    "type": "SUGGESTIE",
                    "vertaling": "Erg laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72663,
                    "type": "SUGGESTIE",
                    "vertaling": "Laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 1209565,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder laag",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72664,
                    "type": "SUGGESTIE",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 1209566,
                    "type": "SUGGESTIE",
                    "vertaling": "Eerder hoog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72665,
                    "type": "SUGGESTIE",
                    "vertaling": "Hoog",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72666,
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
            "id": 72667,
            "vertaling": "Ik wil over 3 maanden blijven werken in een betaalde baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 72668,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72669,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72670,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72671,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72672,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72673,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72674,
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
            "id": 72675,
            "vertaling": "Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
            "mogelijkeAntwoorden": [
                {
                    "id": 72676,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72677,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72678,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72679,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72680,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72681,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72682,
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
            "id": 72683,
            "vertaling": "Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
            "mogelijkeAntwoorden": [
                {
                    "id": 72684,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72685,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72686,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72687,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72688,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72689,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72690,
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
            "id": 72691,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 72692,
                    "type": "SUGGESTIE",
                    "vertaling": "Goed",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72693,
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
            "id": 72694,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 72695,
                    "type": "SUGGESTIE",
                    "vertaling": "Wijs",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72696,
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
            "id": 72697,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 72698,
                    "type": "SUGGESTIE",
                    "vertaling": "Voordelig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72699,
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
            "id": 72700,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
            "mogelijkeAntwoorden": [
                {
                    "id": 72701,
                    "type": "SUGGESTIE",
                    "vertaling": "Plezierig",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72702,
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
            "id": 72703,
            "vertaling": "De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72704,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72705,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72706,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72707,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72708,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72709,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72710,
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
            "id": 72711,
            "vertaling": "De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72712,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72713,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72714,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72715,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72716,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72717,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72718,
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
            "id": 72719,
            "vertaling": "Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72720,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72721,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72722,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72723,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72724,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72725,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72726,
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
            "id": 72727,
            "vertaling": "Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72728,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72729,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72730,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72731,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72732,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72733,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72734,
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
            "id": 72735,
            "vertaling": "Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72736,
                    "type": "SLIDER",
                    "vertaling": "Helemaal niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72737,
                    "type": "SLIDER",
                    "vertaling": "Niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72738,
                    "type": "SLIDER",
                    "vertaling": "Eerder niet akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72739,
                    "type": "SLIDER",
                    "vertaling": "Neutraal",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72740,
                    "type": "SLIDER",
                    "vertaling": "Eerder akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72741,
                    "type": "SLIDER",
                    "vertaling": "Akkoord",
                    "attentieVertaling": null,
                    "vervolgActie": null,
                    "validaties": []
                },
                {
                    "id": 72742,
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
            "id": 72743,
            "vertaling": "Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
            "mogelijkeAntwoorden": [
                {
                    "id": 72744,
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
                    "id": 72745,
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
                    "id": 72746,
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
                    "id": 72747,
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
                    "id": 72748,
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
                    "id": 72749,
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
                    "id": 72750,
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