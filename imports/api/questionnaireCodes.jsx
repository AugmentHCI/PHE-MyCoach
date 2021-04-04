export const activityHeaders = {
    "werk": "Werken", 
    "huis": "Huishouden", 
    "rel": "Relaxatie oefeningen", 
    "lich": "Lichamelijke oefeningen", 
    "fam": "Tijd spenderen met familie of vrienden", 
    "leuk": "Iets wat ik leuk vind", 
    "tv": "TV/Computer/Lezen", 
    "rust": "Rusten", 
    "ov": "Overig"
};

export const fillerQuestionCodes = {
    72962: "phe.dagelijks.beschrijving",
    72137: "phe.voorgeschiedenis.v0.beschrijving",
    72213: "phe.voorgeschiedenis.gezondheid.beschrijving",
    72268: "phe.voorgeschiedenis.gemoedstoestand.beschrijving",
    72965: "phe.voorgeschiedenis.progressie.een.derde",
    72270: "phe.voorgeschiedenis.pijnperceptie.beschrijving",
    72350: "phe.voorgeschiedenis.pijnperceptie.pijn.beschrijving",
    72967: "phe.voorgeschiedenis.progressie.halfweg",
    72524: "phe.voorgeschiedenis.pijnacceptatie.beschrijving",
    72527: "phe.voorgeschiedenis.fysieke-activiteit.beschrijving",
    72969: "phe.voorgeschiedenis.progressie.bijna.klaar",
    72567: "phe.voorgeschiedenis.psychosociaal.beschrijving",
    72659: "phe.voorgeschiedenis.planned-behavior.beschrijving"
}

export const questionnaireMetadata = {
    "PCS": {type: "sum", from: 0, to: 4},
    "CPAQ-PW": {type: "sum-inverse", from: 0, to: 6},
    "CPAQ-AE": {type: "sum", from: 0, to: 6},
    "K": {type: "value", value: "Nergens"},
    "K_ns": {type: "exists"},
    "K_rug": {type: "exists"},
    "K_eph": {type: "exists"},
    "K_hkev": {type: "exists"},
}

export const profileCodes = {
    /* Demografisch */
    "55924": {
        "code": "D1",
        "question": "phe.vragenlijst.geboortejaar",
        "questionFull": "Geboortejaar"
    },
    "55926": {
        "code": "D2",
        "question": "phe.vragenlijst.geslacht",
        "questionFull": "Geslacht",
        "coding": {"Man": 1, "Vrouw": 2, "x": 3}
    },
    "71947": {
        "code": "D3",
        "question": "phe.vragenlijst.wat.is.jouw.lengte",
        "questionFull": "Wat is jouw lengte? (cm)",
    },
    "71945": {
        "code": "D4",
        "question": "phe.vragenlijst.wat.is.jouw.gewicht",
        "questionFull": "Wat is jouw gewicht? (kg)"
    },
    "71942": {
        "code": "D5",
        "question": "phe.vragenlijst.rook.jij",
        "questionFull": "Rook jij?",
        "coding": {"Ja": 1, "Nee": 0}
    },
    "55929": {
        "code": "D6",
        "question": "phe.vragenlijst.diploma",
        "questionFull": "Wat is de hoogste opleiding die je hebt afgemaakt?",
        "coding": {"Lager onderwijs": 1, "Lager middelbaar onderwijs": 2, "Hoger middelbaar onderwijs": 3, "Bachelor (Universitaire kandidatuur of Hogeschool)": 4, "Master (Universitaire licentie) of hoger": 5}
    },
    /* Werksituatie */
    "55935": {
        "code": "WS1",
        "question": "phe.vragenlijst.sector",
        "questionFull": "In welke sector werk je?"
    },
    "55946": {
        "code": "WS2",
        "question": "phe.vragenlijst.aantal.jaren.bij.huidige.werkgever",
        "questionFull": "Hoelang werk je bij jouw huidige werkgever?",
        "coding": {"Minder dan 1 jaar": 1, "1-4 jaren": 2, "5-9 jaren": 3, "10-14 jaren": 4, "15-19 jaren": 5, "20-24 jaren": 6, "Meer dan 25 jaren": 7}
    },
    "55954": {
        "code": "WS3",
        "question": "phe.vragenlijst.aantal.jaren.in.huidige.functie",
        "questionFull": "Hoelang werk je in jouw huidige functie?",
        "coding": {"Minder dan 1 jaar": 1, "1-4 jaren": 2, "5-9 jaren": 3, "10-14 jaren": 4, "15-19 jaren": 5, "20-24 jaren": 6, "Meer dan 25 jaren": 7}
    },
    "55962": {
        "code": "WS4",
        "question": "phe.vragenlijst.type.contract",
        "questionFull": "Welk type contract heb je?",
        "coding": {"Statutair": 1, "Contract onbepaalde duur": 2, "Contract bepaalde duur": 3, "Interim": 4, "Zelfstandig": 5, "Ander soort contract": 6}
    },
    "55969": {
        "code": "WS5",
        "question": "phe.vragenlijst.werkregime",
        "questionFull": "Welk werkregime heb je?",
        "coding": {"Voltijds": 1, "Tussen voltijds en halftijds": 2, "Halftijds": 3, "Minder dan halftijds": 4}
    },
    "55974": {
        "code": "WS6",
        "question": "phe.vragenlijst.verantwoordelijk.voor.medewerkers",
        "questionFull": "Ben je verantwoordelijk voor medewerkers?",
        "coding": {"Ja": 1, "Nee": 0}
    },
    /* Fysieke belasting werk */
    "71887": {
        "code": "WF11",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.herhaaldelijk.dezelfde.bewegingen.maken.armen.handen",
        "questionFull": "Hoe vaak moet je op het werk herhaaldelijk dezelfde bewegingen maken met de armen en/of handen?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71892": {
        "code": "WF10",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.dezelfde.houding",
        "questionFull": "Hoe vaak moet je op het werk langdurig in dezelfde houding werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71897": {
        "code": "WF9",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.ongemakkelijke.houdingen",
        "questionFull": "Hoe vaak moet je op het werk in ongemakkelijke houdingen werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71902": {
        "code": "WF8",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.in.voertuigen.werken",
        "questionFull": "Hoe vaak moet je op het werk in voertuigen rijden?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71907": {
        "code": "WF7",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.met.trillend.of.stotend.gereedschap.werken",
        "questionFull": "Hoe vaak moet je op het werk met trillend of stotend gereedschap werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71912": {
        "code": "WF6",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.zware.lasten.verplaatsen",
        "questionFull": "Hoe vaak moet je op het werk zware lasten (meer dan 20 kg) verplaatsen?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71917": {
        "code": "WF5",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.lasten.verplaatsen",
        "questionFull": "Hoe vaak moet je op het werk lasten (meer dan 5 kg) verplaatsen?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71922": {
        "code": "WF4",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.geknield.of.gehurkt.werken",
        "questionFull": "Hoe vaak moet je op het werk langdurig geknield of gehurkt werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71927": {
        "code": "WF3",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.beeldschermwerk.verrichten",
        "questionFull": "Hoe vaak moet je op het werk langdurig beeldschermwerk verrichten?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71932": {
        "code": "WF2",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.zittend.werken",
        "questionFull": "Hoe vaak moet je op het werk langdurig zittend werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    },
    "71937": {
        "code": "WF1",
        "question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.staand.werken",
        "questionFull": "Hoe vaak moet je op het werk langdurig staand werken?",
        "coding": {"(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4}
    }
}


export const baselineCodes = {
    /* Klachten (7 dagen) */
    "72203": {
		"code": "K",
        "questionnaire": "K",
        "questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.klachten.7.dagen",
        "questionFull": "Heb je de afgelopen 7 dagen last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)"
    },
    "72139": {
		"code": "K_ns",
        "questionnaire": "K_ns",
        "questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.nek-schouder",
        "questionFull": "Hoelang heb je jouw nek- of schouderklachten al?",
        "coding": {"Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6}
	},
	"72147": {
		"code": "K_rug",
        "questionnaire": "K_rug",
        "questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.rug",
		"questionFull": "Hoelang heb je jouw rugklachten al?",
        "coding": {"Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6}
	},
	"72155": {
		"code": "K_eph",
        "questionnaire": "K_eph",
        "questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.elleboog-pols-hand",
		"questionFull": "Hoelang heb je jouw elleboog- of pols/handklachten al?",
        "coding": {"Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6}
	},
	"72163": {
		"code": "K_hkev",
        "questionnaire": "K_hkev",
        "questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.heup-knie-enkel-voet",
		"questionFull": "Hoelang heb je jouw heup-, knie- of enkel/voetklachten al?",
        "coding": {"Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6}
	},
	"72171": {
		"code": "V_ns",
		"question": "phe.voorgeschiedenis.ziekteverzuim.nek-schouder",
        "questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
        "coding": {"0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6}
	},
	"72179": {
		"code": "V_rug",
		"question": "phe.voorgeschiedenis.ziekteverzuim.rug",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
        "coding": {"0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6}
	},
	"72187": {
		"code": "V_eph",
		"question": "phe.voorgeschiedenis.ziekteverzuim.elleboog-pols-hand",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
        "coding": {"0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6}
	},
	"72195": {
		"code": "V_hkev",
		"question": "phe.voorgeschiedenis.ziekteverzuim.heup-knie-enkel-voet",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
        "coding": {"0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6}
	},
    /* SF & WAS */
	"72215": {
		"code": "SF",
        "questionnaire": "SF",
        "questionnaire-full": "Algemene gezondheid",
		"question": "phe.voorgeschiedenis.gezondheid.algemeen",
        "questionFull": "Hoe zou je over het algemeen jouw gezondheid noemen?",
        "coding": {"Uitstekend": 1, "Zeer goed": 2, "Goed": 3, "Matig": 4, "Slecht": 5}
	},
	"72221": {
		"code": "WAS",
        "questionnaire": "WAS",
        "questionnaire-full": "Werkvermogen",
		"question": "phe.voorgeschiedenis.gezondheid.optimaal.werkvermogen",
        "questionFull": "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen?",
        "coding": {"Helemaal niet in staat om te werken": 0, "Optimaal werkvermogen": 10}
    },
    /* Mental Health Inventory */
    "72261": {
		"code": "MHI1",
        "questionnaire": "MHI-5",
        "questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.erg.zenuwachtig",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
        "coding": {"Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6}
    },
    "72254": {
		"code": "MHI2",
        "questionnaire": "MHI-5",
        "questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.in.de.put.dat.niets.je.opvrolijkt",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
        "coding": {"Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6}
	},
    "72247": {
		"code": "MHI3",
        "questionnaire": "MHI-5",
        "questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.rustig.en.tevreden",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
        "coding": {"Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6}
	},
    "72240": {
		"code": "MHI4",
        "questionnaire": "MHI-5",
        "questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.somber.en.neerslachtig",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
        "coding": {"Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6}
	},
	"72233": {
		"code": "MHI5",
        "questionnaire": "MHI-5",
        "questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.gelukkig",
        "questionFull": "Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
        "coding": {"Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6}
	},
    /* Pain Catastrophizing scale */
	"72272": {
		"code": "PCS1",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.ophouden",
        "questionFull": "Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72278": {
		"code": "PCS2",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.kan-niet-verder",
		"questionFull": "Als ik pijn heb, voel ik dat het zo niet verder kan",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72284": {
		"code": "PCS3",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.verschrikkelijk",
		"questionFull": "Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72290": {
		"code": "PCS4",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.afschuwelijk",
		"questionFull": "Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72296": {
		"code": "PCS5",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.niet-uithoud",
		"questionFull": "Als ik pijn heb, voel ik dat ik het niet meer uithoud",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72302": {
		"code": "PCS6",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.bang-erger-worden",
		"questionFull": "Als ik pijn heb, word ik bang dat de pijn erger zal worden",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72308": {
		"code": "PCS7",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.andere-pijnlijke-momenten",
		"questionFull": "Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72314": {
		"code": "PCS8",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.verlang-pijn-weggaat",
		"questionFull": "Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72320": {
		"code": "PCS9",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.uit-gedachten-zetten",
		"questionFull": "Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72326": {
		"code": "PCS10",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.denken-hoeveel-pijn",
		"questionFull": "Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72332": {
		"code": "PCS11",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.graag-pijn-ophouden",
		"questionFull": "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72338": {
		"code": "PCS12",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.intensiteit-verminderen",
		"questionFull": "Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
	},
	"72344": {
		"code": "PCS13",
        "questionnaire": "PCS",
        "questionnaire-full": "Pain-Catastrophizing Scale (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.ernstig-gebeuren",
		"questionFull": "Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
        "coding": {"Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4}
    },
    /* Fear Avoidance Beliefs */
	"72353": {
		"code": "FABQ1",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-verergert-pijn",
        "questionFull": "Lichamelijke activiteit verergert de pijn",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72362": {
		"code": "FABQ2",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-schaden",
		"questionFull": "Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72371": {
		"code": "FABQ3",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-zou-verergeren",
		"questionFull": "Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72380": {
		"code": "FABQ4",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-kan-verergeren",
		"questionFull": "Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72389": {
		"code": "FABQ5",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.ontstaan.door.mijn.werk.of.ongeval.tijdens.werk",
		"questionFull": "De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72398": {
		"code": "FABQ6",
		"question": "phe.voorgeschiedenis.pijnperceptie.door.mijn.werk.is.pijn.erger.geworden",
		"questionFull": "Door mijn werk is de pijn erger geworden",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72407": {
		"code": "FABQ7",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-te-zwaar",
		"questionFull": "Mijn werk is te zwaar voor mij",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72416": {
		"code": "FABQ8",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-verergert-pijn",
		"questionFull": "Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72425": {
		"code": "FABQ9",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-schaadt-lichaam",
		"questionFull": "Mijn werk zou mijn lichaam kunnen schaden",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72434": {
		"code": "FABQ10",
		"question": "phe.voorgeschiedenis.pijnperceptie.ik.zou.normale.werk.niet.moeten.doen.met.huidige.pijn",
		"questionFull": "Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
	},
	"72443": {
		"code": "FABQ11",
		"question": "phe.voorgeschiedenis.pijnperceptie.ik.denk.normale.werk.binnen.3.maanden.hervatten",
		"questionFull": "Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
        "coding": {"Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6}
    },
    /* Chronic Pain Acceptance Questionnaire */
    "72515": {
		"code": "CPAQ1",
        "questionnaire": "CPAQ-AE",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.ga.gewoon.verder.met.mijn.leven.hoe.erg.pijn",
		"questionFull": "Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
    },
    "72506": {
		"code": "CPAQ2",
        "questionnaire": "CPAQ-AE",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.hoewel.sommige.zaken.veranderd.ondanks.pijn.normaal.leven",
		"questionFull": "Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    "72497": {
		"code": "CPAQ3",
        "questionnaire": "CPAQ-AE",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.leid.een.volwaardig.leven.ook.al.heb.ik.chronische.pijn",
		"questionFull": "Ik leid een volwaardig leven ook al heb ik chronische pijn.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    "72488": {
		"code": "CPAQ4",
        "questionnaire": "CPAQ-AE",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ook.al.pijn.erger.als.onderneem.ik.blijf.dingen.doen.die.voorgenomen",
		"questionFull": "Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    "72479": {
		"code": "CPAQ5",
        "questionnaire": "CPAQ-PW",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ergens.aan.begin.zorg.ervoor.dat.pijn.niet.zal.toenemen",
		"questionFull": "Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    "72470": {
		"code": "CPAQ6",
        "questionnaire": "CPAQ-PW",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.voor.plannen.maak.moet.pijn.minder.worden",
		"questionFull": "Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    "72461": {
		"code": "CPAQ7",
        "questionnaire": "CPAQ-PW",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.vermijd.situaties.die.mijn.pijn.verergeren",
		"questionFull": "Ik vermijd situaties die mijn pijn verergeren.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
	"72452": {
		"code": "CPAQ8",
        "questionnaire": "CPAQ-PW",
        "questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.zorgen.wat.pijn.zal.aanrichten.in.mijn.leven",
        "questionFull": "Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
        "coding": {"Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6}
	},
    /* IPAQ */
    "72532": {
		"code": "IPAQ_V1",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-dagen-zware-activiteit",
		"questionFull": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?"
	},
	"72529": {
		"code": "IPAQ_V2",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-tijd-zware-activiteit",
        "questionFull": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?",
        "coding": "Time"
    },
    "72544": {
		"code": "IPAQ_M1",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-dagen-matige-activiteit",
		"questionFull": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?"
	},
	"72541": {
		"code": "IPAQ_M2",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-tijd-matige-activiteit",
		"questionFull": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?",
        "coding": "Time"
    },
    "72556": {
		"code": "IPAQ_W1",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-dagen-wandelen",
		"questionFull": "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?"
	},
	"72553": {
		"code": "IPAQ_W2",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.hoeveel-tijd-wandelen",
		"questionFull": "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?",
        "coding": "Time"
	},
	"72565": {
		"code": "IPAQ_Z",
        "questionnaire": "IPAQ",
        "questionnaire-full": "Activity score",
		"question": "phe.voorgeschiedenis.fysieke-activiteit.tijd-zitten",
		"questionFull": "Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?",
        "coding": "Time"
	},
    /* Werkbeleving */
    "72585": {
		"code": "BEV1",
		"question": "phe.voorgeschiedenis.psychosociaal.op.mijn.werk.bruis.ik.van.energie",
        "questionFull": "Op mijn werk bruis ik van energie",
        "coding": {"Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6}
    },
    "72577": {
		"code": "BEV2",
		"question": "phe.voorgeschiedenis.psychosociaal.ik.ben.enthousiast.over.mijn.baan",
		"questionFull": "Ik ben enthousiast over mijn baan",
        "coding": {"Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6}
	},
	"72569": {
		"code": "BEV3",
		"question": "phe.voorgeschiedenis.psychosociaal.ik.ga.helemaal.op.in.mijn.werk",
		"questionFull": "Ik ga helemaal op in mijn werk",
        "coding": {"Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6}
	},
	"72593": {
		"code": "WD1",
		"question": "phe.voorgeschiedenis.psychosociaal.hard-werken-om-af-te-krijgen",
        "questionFull": "Ik moet extra hard werken om iets af te krijgen", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72599": {
		"code": "WD2",
		"question": "phe.voorgeschiedenis.psychosociaal.tijdsdruk",
		"questionFull": "Ik werk onder tijdsdruk", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72605": {
		"code": "WD3",
		"question": "phe.voorgeschiedenis.psychosociaal.haasten",
		"questionFull": "Ik moet mij haasten", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72611": {
		"code": "AUT1",
		"question": "phe.voorgeschiedenis.psychosociaal.werk-plannen",
		"questionFull": "Ik kan mijn eigen werk plannen", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72617": {
		"code": "AUT2",
		"question": "phe.voorgeschiedenis.psychosociaal.werk-eigen-manier",
		"questionFull": "Ik kan mijn werk doen op een manier die ik het beste vind", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72623": {
		"code": "AUT3",
		"question": "phe.voorgeschiedenis.psychosociaal.opdracht-kiezen",
		"questionFull": "Ik kan mijn opdracht zelf kiezen", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72629": {
		"code": "AUT4",
		"question": "phe.voorgeschiedenis.psychosociaal.manier-varieren",
		"questionFull": "Ik kan mijn manier van werken variëren", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72635": {
		"code": "SOC_C1",
		"question": "phe.voorgeschiedenis.psychosociaal.collega-hulp-vragen",
		"questionFull": "Ik kan, als dat nodig is, mijn collega's om hulp vragen", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72641": {
		"code": "SOC_C2",
		"question": "phe.voorgeschiedenis.psychosociaal.sterk-gewaardeerd-collegas",
		"questionFull": "Ik voel me sterk gewaardeerd door mijn collega's", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72647": {
		"code": "SOC_L1",
		"question": "phe.voorgeschiedenis.psychosociaal.hulp-leidinggevende",
		"questionFull": "Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
	"72653": {
		"code": "SOC_L2",
		"question": "phe.voorgeschiedenis.psychosociaal.sterk-gewaardeerd-leidinggevende",
		"questionFull": "Ik voel me sterk gewaardeerd door mijn directe leidinggevende", 
        "coding": {"(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5}
	},
    /* Planned behaviour */
	"72661": {
		"code": "EVV1",
        "questionnaire": "EVV",
        "questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.kans-blijven-werken-3-maanden",
        "questionFull": "De kans dat ik over 3 maanden blijf werken is…",
        "coding": {"Erg laag": 0, "Laag": 1, "Eerder laag": 2, "Neutraal": 3, "Eerder hoog": 4, "Hoog": 5, "Heel hoog": 6}
	},
	"72667": {
		"code": "EVV2",
        "questionnaire": "EVV",
        "questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.wil-blijven-werken",
        "questionFull": "Ik wil over 3 maanden blijven werken in een betaalde baan",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72675": {
		"code": "EVV3",
        "questionnaire": "EVV",
        "questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.verwacht-blijven-werken",
		"questionFull": "Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72683": {
		"code": "EVV4",
        "questionnaire": "EVV",
        "questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.van-plan-blijven-werken",
		"questionFull": "Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72691": {
		"code": "AT1",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-goed-slecht",
        "questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "coding": {"Goed": 1, "Slecht": 0}
	},
	"72694": {
		"code": "AT2",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-wijs-dom",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "coding": {"Wijs": 1, "Dom": 0}
	},
	"72697": {
		"code": "AT3",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-voor-na-delig",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "coding": {"Voordelig": 1, "Nadelig": 0}
	},
	"72700": {
		"code": "AT4",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-plezierig-akelig",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "coding": {"Plezierig": 1, "Akelig": 0}
	},
	"72703": {
		"code": "SN1",
		"question": "phe.voorgeschiedenis.planned-behavior.belangrijke-mensen-denken-blijven-werken",
		"questionFull": "De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72711": {
		"code": "SN2",
		"question": "phe.voorgeschiedenis.planned-behavior.belangrijke-mensen-willen-blijven-werken",
		"questionFull": "De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72719": {
		"code": "ZEC1",
		"question": "phe.voorgeschiedenis.planned-behavior.vertrouwen-blijven-werken",
		"questionFull": "Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72727": {
		"code": "ZEC2",
		"question": "phe.voorgeschiedenis.planned-behavior.geen-moeite-blijven-werken",
		"questionFull": "Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72735": {
		"code": "ZEC3",
		"question": "phe.voorgeschiedenis.planned-behavior.aan-mij-blijven-werken",
		"questionFull": "Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	},
	"72743": {
		"code": "ZEC4",
		"question": "phe.voorgeschiedenis.planned-behavior.mijn-controle-blijven-werken",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
        "coding": {"Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6}
	}
}

export const dailyCodes = {
    "55448": {
        "code": "VAS",
        "question": "phe.dagelijks.pijn.intensiteit",
        "questionFull": "Hoeveel pijn heb je op dit moment?",
        "coding": {"0 (Geen pijn)": 0}
    },
    "55443": {
        "code": "WB_F",
        "question": "phe.dagelijks.lichamelijke.vermoeidheid",
        "questionFull": "Hoe lichamelijk vermoeid was je aan het einde van jouw werkdag?",
        "coding": {"Niet vermoeid": 1, "Enigszins vermoeid": 2, "Tamelijk vermoeid": 3, "Erg vermoeid": 4}
    },
    "55438": {
        "code": "WB_M",
        "question": "phe.dagelijks.mentale.vermoeidheid",
        "questionFull": "Hoe mentaal vermoeid was je aan het einde van jouw werkdag?",
        "coding": {"Niet vermoeid": 1, "Enigszins vermoeid": 2, "Tamelijk vermoeid": 3, "Erg vermoeid": 4}
    },
    "55428": {
        "code": "AP",
        "question": "phe.dagelijks.welke.activiteiten.gepland",
        "questionFull": "Welke activiteiten had je vandaag gepland? (Je kan meerdere antwoorden aanduiden)"
    },
    "55418": {
        "code": "AU",
        "question": "phe.dagelijks.welke.activiteiten.gedaan",
        "questionFull": "Welke activiteiten heb je vandaag gedaan? (Je kan meerdere antwoorden aanduiden)"
    },
    "55412": {
        "code": "AE",
        "question": "phe.dagelijks.tevredenheid.activiteiten",
        "questionFull": "Hoe tevreden ben je met de hoeveelheid activiteiten die je vandaag hebt gedaan?",
        "coding": {"Zeer ontevreden": 0, "Zeer tevreden": 100}
    },
    "72751": {
        "code": "T",
        "question": "phe.dagelijks.tevredenheid.dag",
        "questionFull": "Hoe tevreden ben je, alles bij elkaar genomen, met jouw dag?",
        "coding": {"Zeer ontevreden": 0, "Zeer tevreden": 100}
    }
}

