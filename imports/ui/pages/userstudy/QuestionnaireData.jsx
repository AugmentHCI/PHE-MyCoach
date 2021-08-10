export const questionnaires = {
    ncs: {
        title: "Need for Cognition / Behoefte aan kennis",
        questions: {
            q1: {
                en: "I would prefer complex to simple problems.",
                nl: "Ik verkies complexe problemen boven eenvoudige problemen.",
                optionType: "agree"
            },
            q2: {
                en: "I like to have the responsibility of handling a situation that requires a lot of thinking.",
                nl: "Ik heb graag de verantwoordelijkheid bij een situatie dat veel denkvermogen vereist.",
                optionType: "agree"
            },
            q3: {
                en: "Thinking is not my idea of fun.",
                nl: "Denken is niet mijn definitie van plezier.",
                optionType: "agree"
            },
            q4: {
                en: "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.",
                nl: "Ik doe liever iets dat weinig denkvermogen vereist, dan iets dat mijn denkvermogen zeker op de proef stelt.",
                optionType: "agree"
            },
            q5: {
                en: "I really enjoy a task that involves coming up with new solutions to problems.",
                nl: "Ik geniet enorm van een taak waarbij nieuwe oplossingen voor problemen moeten worden bedacht.",
                optionType: "agree"
            },
            q6: {
                en: "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.",
                nl: "Ik heb liever een taak die intellectueel moeilijk en belangrijk is, boven een taak die enigszins belangrijk is, maar niet veel denkwerk vereist.",
                optionType: "agree"
            }
        }
    },
    eos: {
        title: "Ease-of-satisfaction / Gemak van tevredenheid",
        questions: {
            q1: {
                en: "I think I will trust the health recommendations given in this task.",
                nl: "Ik denk dat ik de gezondheids-aanbevelingen in deze opdracht zal vertrouwen.",
                optionType: "agree"
            },
            q2: {
                en: "I think I will be satisfied with the health recommendations given in this task.",
                nl: "Ik denk dat ik tevreden zal zijn met de gezondheids-aanbevelingen in deze opdracht.",
                optionType: "agree"
            },
            q3: {
                en: "I think the health recommendations in this task will be accurate.",
                nl: "Ik denk dat de gezondheids-aanbevelingen in deze opdracht accuraat zullen zijn.",
                optionType: "agree"
            }
        }
    },
    trust: {
        title: "Trust / Vertrouwen",
        questions: {
            q1: {
                en: "I trust the recommendations by the system with this interaction model.",
                nl: "Ik vertrouw de aanbevelingen van het systeem met dit interactiemodel.",
                optionType: "agree"
            },
            q2: {
                en: "I believe the explanation given by the interaction model, about why each item is recommended.",
                nl: "Ik geloof de uitleg dat het interactiemodel mij geeft, over waarom ik de aanbeveling krijg.",
                optionType: "agree"
            },
            q3: {
                en: "I believe that the order of recommendations is consistent with my needs.",
                nl: "Ik geloof dat de volgorde van de aanbevelingen consistent is met mijn noden.",
                optionType: "agree"
            },
            q4: {
                en: "The explanation given by system leads me to believe that the recommendations are suitable to my needs.",
                nl: "De uitleg dat het systeem mij geeft, doet mij geloven dat de aanbevelingen afgestemd zijn op mijn noden.",
                optionType: "agree"
            }
        }
    },
    transparency: {
        title: "Transparency / Transparantie",
        questions: {
            q1: {
                en: "The explanation presents the similarity between my input and the recommendation.",
                nl: "De aanbeveling geeft de gelijkenis aan tussen mijn input en de aanbeveling.",
                optionType: "agree"
            },
            q2: {
                en: "The explanation presents the relationship between the recommendation and me.",
                nl: "De uitleg geeft de relatie weer tussen de aanbeveling en mij.",
                optionType: "agree"
            },
            q3: {
                en: "The explanation presents where the information was retrieved.",
                nl: "De uitleg geeft aan waar de informatie vandaan komt.",
                optionType: "agree"
            },
            q4: {
                en: "The explanation presents more in-depth information on how the recommendation came about.",
                nl: "De uitleg geeft uitgebreidere informatie weer over hoe mijn aanbeveling is ontstaan.",
                optionType: "agree"
            }
        }
    },
    persuasiveness: {
        title: "Persuasiveness / Overtuigingskracht",
        questions: {
            q1: {
                en: "The explanation shows me how my inputs are aligned with the recommendation.",
                nl: "De aanbeveling toont mij hoe mijn inputs overeenkomen met de recommendation.",
                optionType: "agree"
            },
            q2: {
                en: "The explanation has a friendly, easy-to-use interface.",
                nl: "De explanation heeft een aangename, makkelijk te gebruiken interface.",
                optionType: "agree"
            },
            q3: {
                en: "The explanation inspired my curiosity to discover or open the recommendation",
                nl: "De uitleg prikkelde mijn nieuwsgierigheid om meer te ontdekken over de aanbeveling.",
                optionType: "agree"
            },
        }
    },
    acceptance: {
        title: "Acceptance / Acceptatie",
        questions: {
            q1: {from: "Useful",            to: "Useless",        fromNL: "Nuttig",     toNL: "Nutteloos"},
            q2: {from: "Pleasant",          to: "Unpleasant",     fromNL: "Prettig",    toNL: "Onaangenaam"},
            q3: {from: "Bad",               to: "Good",           fromNL: "Slecht",     toNL: "Goed"},
            q4: {from: "Nice",              to: "Annoying",       fromNL: "Leuk",       toNL: "Vervelend"},
            q5: {from: "Effective",         to: "Superfluous",    fromNL: "Effectief",  toNL: "Overbodig"},
            q6: {from: "Irritating",        to: "Likeable",       fromNL: "Vervelend",  toNL: "Aangenaam"},
            q7: {from: "Assisting",         to: "Worthless",      fromNL: "Behulpzaam", toNL: "Waardeloos"},
            q8: {from: "Undesirable",       to: "Desirable",      fromNL: "Ongewenst",  toNL: "Gewenst"},
            q9: {from: "Raising alertness", to: "Sleep-inducing", fromNL: "Opwekkend",  toNL: "Slaapverwekkend"},
        }
    }
}