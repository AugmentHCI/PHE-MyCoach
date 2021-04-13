export function parseCodes(questionnaires) {
    let codes = {}
    questionnaires.forEach(questionnaire => {
      questionnaire.questionnaire.vragen.forEach(vraag => {
        let answers = {}
        vraag.mogelijkeAntwoorden.forEach(antwoord => {
          if (!["SUGGESTIE", "GETAL", "SLIDER", "TIJD", "SUGGESTIE_MEERKEUZE", "SUGGESTIE_SPINNER"].includes(antwoord.type)) 
		  	{console.log(antwoord.type);}
          if (["SUGGESTIE", "SUGGESTIE_MEERKEUZE", "SLIDER", "TIJD", "SUGGESTIE_SPINNER"].includes(antwoord.type)) 
		  	{answers[antwoord.id] = {antwoord: antwoord.vertaling, code: questions[vraag.vertaling]?.answers[antwoord.vertaling]};}
          /* Follow-up questions */
          if (antwoord.vervolgActie?.type === "VervolgVraagActie") {
            let followUpAnswers = {};
            antwoord.vervolgActie?.volgendeVraag?.mogelijkeAntwoorden.forEach(followUpAnswer => {
              followUpAnswers[followUpAnswer.id] = {antwoord: antwoord.vertaling, code: ""};
            });
			codes[antwoord.vervolgActie?.volgendeVraag?.id] = {question:antwoord.vervolgActie?.volgendeVraag?.vertaling, questionnaire: questionnaire.name, code: "", coding: answers}
          }
        })
		let questionFields = { questionnaire: questionnaire.name, question: vraag.vertaling }
		if (questions[vraag.vertaling]?.questioncode) { questionFields["questioncode"] = questions[vraag.vertaling].questioncode }
		if (questions[vraag.vertaling]?.subquestionnaire) { questionFields["subquestionnaire"] = questions[vraag.vertaling]?.subquestionnaire }
		questionFields["coding"] = answers;
        codes[vraag.id] = questionFields;
      })
    })
    console.log(JSON.stringify(codes))
    console.log(codes)
}

export function printQuestions() {
	let questions = {}
	for (const [questionCode, data] of Object.entries(questionnaireCodes)) {
		let answers = {};
		for (const [, answerData] of Object.entries(data.coding)) {
			answers[answerData.antwoord] = answerData.code
		}
		questions[data.question] = {questioncode: data.code, subquestionnaire: data.subquestionnaire, answers: answers};
	}
	console.log(JSON.stringify(questions));
}

const subquestionnaireMapping = {
	"": "PCS"
}

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
	"PCS": { type: "sum", from: 0, to: 4 },
	"CPAQ_PW": { type: "sum-inverse", from: 0, to: 6 },
	"CPAQ_AE": { type: "sum", from: 0, to: 6 },
	"K": { type: "value", value: "Nergens" },
	"K_ns": { type: "exists" },
	"K_rug": { type: "exists" },
	"K_eph": { type: "exists" },
	"K_hkev": { type: "exists" },
}

export const originalCodes = {
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
		"coding": { "Man": 1, "Vrouw": 2, "x": 3 }
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
		"coding": { "Ja": 1, "Nee": 0 }
	},
	"55929": {
		"code": "D6",
		"question": "phe.vragenlijst.diploma",
		"questionFull": "Wat is de hoogste opleiding die je hebt afgemaakt?",
		"coding": { "Lager onderwijs": 1, "Lager middelbaar onderwijs": 2, "Hoger middelbaar onderwijs": 3, "Bachelor (Universitaire kandidatuur of Hogeschool)": 4, "Master (Universitaire licentie) of hoger": 5 }
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
		"coding": { "Minder dan 1 jaar": 1, "1-4 jaren": 2, "5-9 jaren": 3, "10-14 jaren": 4, "15-19 jaren": 5, "20-24 jaren": 6, "Meer dan 25 jaren": 7 }
	},
	"55954": {
		"code": "WS3",
		"question": "phe.vragenlijst.aantal.jaren.in.huidige.functie",
		"questionFull": "Hoelang werk je in jouw huidige functie?",
		"coding": { "Minder dan 1 jaar": 1, "1-4 jaren": 2, "5-9 jaren": 3, "10-14 jaren": 4, "15-19 jaren": 5, "20-24 jaren": 6, "Meer dan 25 jaren": 7 }
	},
	"55962": {
		"code": "WS4",
		"question": "phe.vragenlijst.type.contract",
		"questionFull": "Welk type contract heb je?",
		"coding": { "Statutair": 1, "Contract onbepaalde duur": 2, "Contract bepaalde duur": 3, "Interim": 4, "Zelfstandig": 5, "Ander soort contract": 6 }
	},
	"55969": {
		"code": "WS5",
		"question": "phe.vragenlijst.werkregime",
		"questionFull": "Welk werkregime heb je?",
		"coding": { "Voltijds": 1, "Tussen voltijds en halftijds": 2, "Halftijds": 3, "Minder dan halftijds": 4 }
	},
	"55974": {
		"code": "WS6",
		"question": "phe.vragenlijst.verantwoordelijk.voor.medewerkers",
		"questionFull": "Ben je verantwoordelijk voor medewerkers?",
		"coding": { "Ja": 1, "Nee": 0 }
	},
	/* Fysieke belasting werk */
	"71887": {
		"code": "WF11",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.herhaaldelijk.dezelfde.bewegingen.maken.armen.handen",
		"questionFull": "Hoe vaak moet je op het werk herhaaldelijk dezelfde bewegingen maken met de armen en/of handen?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71892": {
		"code": "WF10",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.dezelfde.houding",
		"questionFull": "Hoe vaak moet je op het werk langdurig in dezelfde houding werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71897": {
		"code": "WF9",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.ongemakkelijke.houdingen",
		"questionFull": "Hoe vaak moet je op het werk in ongemakkelijke houdingen werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71902": {
		"code": "WF8",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.in.voertuigen.werken",
		"questionFull": "Hoe vaak moet je op het werk in voertuigen rijden?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71907": {
		"code": "WF7",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.met.trillend.of.stotend.gereedschap.werken",
		"questionFull": "Hoe vaak moet je op het werk met trillend of stotend gereedschap werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71912": {
		"code": "WF6",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.zware.lasten.verplaatsen",
		"questionFull": "Hoe vaak moet je op het werk zware lasten (meer dan 20 kg) verplaatsen?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71917": {
		"code": "WF5",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.lasten.verplaatsen",
		"questionFull": "Hoe vaak moet je op het werk lasten (meer dan 5 kg) verplaatsen?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71922": {
		"code": "WF4",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.geknield.of.gehurkt.werken",
		"questionFull": "Hoe vaak moet je op het werk langdurig geknield of gehurkt werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71927": {
		"code": "WF3",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.beeldschermwerk.verrichten",
		"questionFull": "Hoe vaak moet je op het werk langdurig beeldschermwerk verrichten?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71932": {
		"code": "WF2",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.zittend.werken",
		"questionFull": "Hoe vaak moet je op het werk langdurig zittend werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
	"71937": {
		"code": "WF1",
		"question": "phe.vragenlijst.hoe.vaak.moet.je.op.het.werk.langdurig.staand.werken",
		"questionFull": "Hoe vaak moet je op het werk langdurig staand werken?",
		"coding": { "(Bijna) nooit": 1, "Af en toe": 2, "Vrij veel": 3, "(Bijna) altijd": 4 }
	},
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
		"coding": { "Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6 }
	},
	"72147": {
		"code": "K_rug",
		"questionnaire": "K_rug",
		"questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.rug",
		"questionFull": "Hoelang heb je jouw rugklachten al?",
		"coding": { "Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6 }
	},
	"72155": {
		"code": "K_eph",
		"questionnaire": "K_eph",
		"questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.elleboog-pols-hand",
		"questionFull": "Hoelang heb je jouw elleboog- of pols/handklachten al?",
		"coding": { "Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6 }
	},
	"72163": {
		"code": "K_hkev",
		"questionnaire": "K_hkev",
		"questionnaire-full": "Klachten",
		"question": "phe.voorgeschiedenis.chroniciteit.heup-knie-enkel-voet",
		"questionFull": "Hoelang heb je jouw heup-, knie- of enkel/voetklachten al?",
		"coding": { "Minder dan 1 week": 1, "1-6 weken": 2, "6-12 weken": 3, "3-6 maanden": 4, "6-12 maanden": 5, "langer dan 1 jaar": 6 }
	},
	"72171": {
		"code": "V_ns",
		"question": "phe.voorgeschiedenis.ziekteverzuim.nek-schouder",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?",
		"coding": { "0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6 }
	},
	"72179": {
		"code": "V_rug",
		"question": "phe.voorgeschiedenis.ziekteverzuim.rug",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?",
		"coding": { "0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6 }
	},
	"72187": {
		"code": "V_eph",
		"question": "phe.voorgeschiedenis.ziekteverzuim.elleboog-pols-hand",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?",
		"coding": { "0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6 }
	},
	"72195": {
		"code": "V_hkev",
		"question": "phe.voorgeschiedenis.ziekteverzuim.heup-knie-enkel-voet",
		"questionFull": "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?",
		"coding": { "0 dagen": 1, "1-7 dagen": 2, "8-14 dagen": 3, "15-28 dagen": 4, "1-3 maanden": 5, "langer dan 3 maanden": 6 }
	},
	/* SF & WAS */
	"72215": {
		"code": "SF",
		"questionnaire": "SF",
		"questionnaire-full": "Algemene gezondheid",
		"question": "phe.voorgeschiedenis.gezondheid.algemeen",
		"questionFull": "Hoe zou je over het algemeen jouw gezondheid noemen?",
		"coding": { "Uitstekend": 1, "Zeer goed": 2, "Goed": 3, "Matig": 4, "Slecht": 5 }
	},
	"72221": {
		"code": "WAS",
		"questionnaire": "WAS",
		"questionnaire-full": "Werkvermogen",
		"question": "phe.voorgeschiedenis.gezondheid.optimaal.werkvermogen",
		"questionFull": "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen?",
		"coding": { "Helemaal niet in staat om te werken": 0, "Optimaal werkvermogen": 10 }
	},
	/* Mental Health Inventory */
	"72261": {
		"code": "MHI1",
		"questionnaire": "MHI-5",
		"questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.erg.zenuwachtig",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
		"coding": { "Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6 }
	},
	"72254": {
		"code": "MHI2",
		"questionnaire": "MHI-5",
		"questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.in.de.put.dat.niets.je.opvrolijkt",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
		"coding": { "Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6 }
	},
	"72247": {
		"code": "MHI3",
		"questionnaire": "MHI-5",
		"questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.rustig.en.tevreden",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
		"coding": { "Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6 }
	},
	"72240": {
		"code": "MHI4",
		"questionnaire": "MHI-5",
		"questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.somber.en.neerslachtig",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
		"coding": { "Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6 }
	},
	"72233": {
		"code": "MHI5",
		"questionnaire": "MHI-5",
		"questionnaire-full": "Mental Health Inventory",
		"question": "phe.voorgeschiedenis.gemoedstoestand.afgelopen.6.weken.gelukkig",
		"questionFull": "Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
		"coding": { "Altijd": 1, "Meestal": 2, "Vaak": 3, "Soms": 4, "Zelden": 5, "Nooit": 6 }
	},
	/* Pain Catastrophizing scale */
	"72272": {
		"code": "PCS1",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.ophouden",
		"questionFull": "Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72278": {
		"code": "PCS2",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.kan-niet-verder",
		"questionFull": "Als ik pijn heb, voel ik dat het zo niet verder kan",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72284": {
		"code": "PCS3",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.verschrikkelijk",
		"questionFull": "Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72290": {
		"code": "PCS4",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.afschuwelijk",
		"questionFull": "Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72296": {
		"code": "PCS5",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.niet-uithoud",
		"questionFull": "Als ik pijn heb, voel ik dat ik het niet meer uithoud",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72302": {
		"code": "PCS6",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.bang-erger-worden",
		"questionFull": "Als ik pijn heb, word ik bang dat de pijn erger zal worden",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72308": {
		"code": "PCS7",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.andere-pijnlijke-momenten",
		"questionFull": "Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72314": {
		"code": "PCS8",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.verlang-pijn-weggaat",
		"questionFull": "Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72320": {
		"code": "PCS9",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.uit-gedachten-zetten",
		"questionFull": "Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72326": {
		"code": "PCS10",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.denken-hoeveel-pijn",
		"questionFull": "Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72332": {
		"code": "PCS11",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.graag-pijn-ophouden",
		"questionFull": "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72338": {
		"code": "PCS12",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.intensiteit-verminderen",
		"questionFull": "Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	"72344": {
		"code": "PCS13",
		"questionnaire": "PCS",
		"questionnaire-full": "PCS (PCS)",
		"question": "phe.voorgeschiedenis.pijnperceptie.ernstig-gebeuren",
		"questionFull": "Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
		"coding": { "Helemaal niet": 0, "In lichte mate": 1, "In zekere mate": 2, "In grote mate": 3, "Altijd": 4 }
	},
	/* Fear Avoidance Beliefs */
	"72353": {
		"code": "FABQ1",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-verergert-pijn",
		"questionFull": "Lichamelijke activiteit verergert de pijn",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72362": {
		"code": "FABQ2",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-schaden",
		"questionFull": "Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72371": {
		"code": "FABQ3",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-zou-verergeren",
		"questionFull": "Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72380": {
		"code": "FABQ4",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.lichamelijke-activiteit-kan-verergeren",
		"questionFull": "Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72389": {
		"code": "FABQ5",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.ontstaan.door.mijn.werk.of.ongeval.tijdens.werk",
		"questionFull": "De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72398": {
		"code": "FABQ6",
		"question": "phe.voorgeschiedenis.pijnperceptie.door.mijn.werk.is.pijn.erger.geworden",
		"questionFull": "Door mijn werk is de pijn erger geworden",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72407": {
		"code": "FABQ7",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-te-zwaar",
		"questionFull": "Mijn werk is te zwaar voor mij",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72416": {
		"code": "FABQ8",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-verergert-pijn",
		"questionFull": "Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72425": {
		"code": "FABQ9",
		"question": "phe.voorgeschiedenis.pijnperceptie.pijn.werk-schaadt-lichaam",
		"questionFull": "Mijn werk zou mijn lichaam kunnen schaden",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72434": {
		"code": "FABQ10",
		"question": "phe.voorgeschiedenis.pijnperceptie.ik.zou.normale.werk.niet.moeten.doen.met.huidige.pijn",
		"questionFull": "Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	"72443": {
		"code": "FABQ11",
		"question": "phe.voorgeschiedenis.pijnperceptie.ik.denk.normale.werk.binnen.3.maanden.hervatten",
		"questionFull": "Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
		"coding": { "Geheel oneens": 0, "Tamelijk oneens": 1, "Enigszins oneens": 2, "Weet het niet": 3, "Enigszins eens": 4, "Tamelijk eens": 5, "Geheel eens": 6 }
	},
	/* Chronic Pain Acceptance Questionnaire */
	"72515": {
		"code": "CPAQ1",
		"questionnaire": "CPAQ_AE",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.ga.gewoon.verder.met.mijn.leven.hoe.erg.pijn",
		"questionFull": "Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72506": {
		"code": "CPAQ2",
		"questionnaire": "CPAQ_AE",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.hoewel.sommige.zaken.veranderd.ondanks.pijn.normaal.leven",
		"questionFull": "Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72497": {
		"code": "CPAQ3",
		"questionnaire": "CPAQ_AE",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.leid.een.volwaardig.leven.ook.al.heb.ik.chronische.pijn",
		"questionFull": "Ik leid een volwaardig leven ook al heb ik chronische pijn.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72488": {
		"code": "CPAQ4",
		"questionnaire": "CPAQ_AE",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Activity Engagement)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ook.al.pijn.erger.als.onderneem.ik.blijf.dingen.doen.die.voorgenomen",
		"questionFull": "Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72479": {
		"code": "CPAQ5",
		"questionnaire": "CPAQ_PW",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ergens.aan.begin.zorg.ervoor.dat.pijn.niet.zal.toenemen",
		"questionFull": "Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72470": {
		"code": "CPAQ6",
		"questionnaire": "CPAQ_PW",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.voor.plannen.maak.moet.pijn.minder.worden",
		"questionFull": "Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72461": {
		"code": "CPAQ7",
		"questionnaire": "CPAQ_PW",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.ik.vermijd.situaties.die.mijn.pijn.verergeren",
		"questionFull": "Ik vermijd situaties die mijn pijn verergeren.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
	},
	"72452": {
		"code": "CPAQ8",
		"questionnaire": "CPAQ_PW",
		"questionnaire-full": "Chronic Pain Acceptance Questionnaire (Pain Willingness)",
		"question": "phe.voorgeschiedenis.pijnacceptatie.zorgen.wat.pijn.zal.aanrichten.in.mijn.leven",
		"questionFull": "Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
		"coding": { "Nooit": 0, "Zeer zelden": 1, "Zelden": 2, "Soms": 3, "Dikwijls": 4, "Bijna altijd": 5, "Altijd": 6 }
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
		"coding": { "Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6 }
	},
	"72577": {
		"code": "BEV2",
		"question": "phe.voorgeschiedenis.psychosociaal.ik.ben.enthousiast.over.mijn.baan",
		"questionFull": "Ik ben enthousiast over mijn baan",
		"coding": { "Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6 }
	},
	"72569": {
		"code": "BEV3",
		"question": "phe.voorgeschiedenis.psychosociaal.ik.ga.helemaal.op.in.mijn.werk",
		"questionFull": "Ik ga helemaal op in mijn werk",
		"coding": { "Nooit": 0, "Een paar keer per jaar of minder": 1, "Eens per maand of minder": 2, "Een paar keer per maand": 3, "Eens per week": 4, "Een paar keer per week": 5, "Dagelijks": 6 }
	},
	"72593": {
		"code": "WD1",
		"question": "phe.voorgeschiedenis.psychosociaal.hard-werken-om-af-te-krijgen",
		"questionFull": "Ik moet extra hard werken om iets af te krijgen",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72599": {
		"code": "WD2",
		"question": "phe.voorgeschiedenis.psychosociaal.tijdsdruk",
		"questionFull": "Ik werk onder tijdsdruk",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72605": {
		"code": "WD3",
		"question": "phe.voorgeschiedenis.psychosociaal.haasten",
		"questionFull": "Ik moet mij haasten",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72611": {
		"code": "AUT1",
		"question": "phe.voorgeschiedenis.psychosociaal.werk-plannen",
		"questionFull": "Ik kan mijn eigen werk plannen",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72617": {
		"code": "AUT2",
		"question": "phe.voorgeschiedenis.psychosociaal.werk-eigen-manier",
		"questionFull": "Ik kan mijn werk doen op een manier die ik het beste vind",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72623": {
		"code": "AUT3",
		"question": "phe.voorgeschiedenis.psychosociaal.opdracht-kiezen",
		"questionFull": "Ik kan mijn opdracht zelf kiezen",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72629": {
		"code": "AUT4",
		"question": "phe.voorgeschiedenis.psychosociaal.manier-varieren",
		"questionFull": "Ik kan mijn manier van werken variëren",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72635": {
		"code": "SOC_C1",
		"question": "phe.voorgeschiedenis.psychosociaal.collega-hulp-vragen",
		"questionFull": "Ik kan, als dat nodig is, mijn collega's om hulp vragen",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72641": {
		"code": "SOC_C2",
		"question": "phe.voorgeschiedenis.psychosociaal.sterk-gewaardeerd-collegas",
		"questionFull": "Ik voel me sterk gewaardeerd door mijn collega's",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72647": {
		"code": "SOC_L1",
		"question": "phe.voorgeschiedenis.psychosociaal.hulp-leidinggevende",
		"questionFull": "Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	"72653": {
		"code": "SOC_L2",
		"question": "phe.voorgeschiedenis.psychosociaal.sterk-gewaardeerd-leidinggevende",
		"questionFull": "Ik voel me sterk gewaardeerd door mijn directe leidinggevende",
		"coding": { "(Bijna) nooit": 1, "Eerder zelden": 2, "Soms": 3, "Regelmatig": 4, "(Bijna) altijd": 5 }
	},
	/* Planned behaviour */
	"72661": {
		"code": "EVV1",
		"questionnaire": "EVV",
		"questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.kans-blijven-werken-3-maanden",
		"questionFull": "De kans dat ik over 3 maanden blijf werken is…",
		"coding": { "Erg laag": 0, "Laag": 1, "Eerder laag": 2, "Neutraal": 3, "Eerder hoog": 4, "Hoog": 5, "Heel hoog": 6 }
	},
	"72667": {
		"code": "EVV2",
		"questionnaire": "EVV",
		"questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.wil-blijven-werken",
		"questionFull": "Ik wil over 3 maanden blijven werken in een betaalde baan",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72675": {
		"code": "EVV3",
		"questionnaire": "EVV",
		"questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.verwacht-blijven-werken",
		"questionFull": "Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72683": {
		"code": "EVV4",
		"questionnaire": "EVV",
		"questionnaire-full": "Planned behaviour",
		"question": "phe.voorgeschiedenis.planned-behavior.van-plan-blijven-werken",
		"questionFull": "Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72691": {
		"code": "AT1",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-goed-slecht",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
		"coding": { "Goed": 1, "Slecht": 0 }
	},
	"72694": {
		"code": "AT2",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-wijs-dom",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
		"coding": { "Wijs": 1, "Dom": 0 }
	},
	"72697": {
		"code": "AT3",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-voor-na-delig",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
		"coding": { "Voordelig": 1, "Nadelig": 0 }
	},
	"72700": {
		"code": "AT4",
		"question": "phe.voorgeschiedenis.planned-behavior.blijven-werken-plezierig-akelig",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden vind ik...",
		"coding": { "Plezierig": 1, "Akelig": 0 }
	},
	"72703": {
		"code": "SN1",
		"question": "phe.voorgeschiedenis.planned-behavior.belangrijke-mensen-denken-blijven-werken",
		"questionFull": "De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72711": {
		"code": "SN2",
		"question": "phe.voorgeschiedenis.planned-behavior.belangrijke-mensen-willen-blijven-werken",
		"questionFull": "De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72719": {
		"code": "ZEC1",
		"question": "phe.voorgeschiedenis.planned-behavior.vertrouwen-blijven-werken",
		"questionFull": "Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72727": {
		"code": "ZEC2",
		"question": "phe.voorgeschiedenis.planned-behavior.geen-moeite-blijven-werken",
		"questionFull": "Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72735": {
		"code": "ZEC3",
		"question": "phe.voorgeschiedenis.planned-behavior.aan-mij-blijven-werken",
		"questionFull": "Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	},
	"72743": {
		"code": "ZEC4",
		"question": "phe.voorgeschiedenis.planned-behavior.mijn-controle-blijven-werken",
		"questionFull": "Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
		"coding": { "Helemaal niet akkoord": 0, "Niet akkoord": 1, "Eerder niet akkoord": 2, "Neutraal": 3, "Eerder akkoord": 4, "Akkoord": 5, "Helemaal akkoord": 6 }
	}
}

export const dailyCodes = {
	"55448": {
		"code": "VAS",
		"question": "phe.dagelijks.pijn.intensiteit",
		"questionFull": "Hoeveel pijn heb je op dit moment?",
		"coding": { "0 (Geen pijn)": 0 }
	},
	"55443": {
		"code": "WB_F",
		"question": "phe.dagelijks.lichamelijke.vermoeidheid",
		"questionFull": "Hoe lichamelijk vermoeid was je aan het einde van jouw werkdag?",
		"coding": { "Niet vermoeid": 1, "Enigszins vermoeid": 2, "Tamelijk vermoeid": 3, "Erg vermoeid": 4 }
	},
	"55438": {
		"code": "WB_M",
		"question": "phe.dagelijks.mentale.vermoeidheid",
		"questionFull": "Hoe mentaal vermoeid was je aan het einde van jouw werkdag?",
		"coding": { "Niet vermoeid": 1, "Enigszins vermoeid": 2, "Tamelijk vermoeid": 3, "Erg vermoeid": 4 }
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
		"coding": { "Zeer ontevreden": 0, "Zeer tevreden": 100 }
	},
	"72751": {
		"code": "T",
		"question": "phe.dagelijks.tevredenheid.dag",
		"questionFull": "Hoe tevreden ben je, alles bij elkaar genomen, met jouw dag?",
		"coding": { "Zeer ontevreden": 0, "Zeer tevreden": 100 }
	}
}

const questions = {
    "Heb je de afgelopen 6 weken last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)": {
        "answers": {
            "Nek": "",
            "Rug": "",
            "Schouder": "",
            "Elleboog": "",
            "Pols/hand": "",
            "Heup": "",
            "Knie": "",
            "Enkel/voet": "",
            "Nergens": ""
        }
    },
    "Ben je in de afgelopen 6 weken afwezig geweest omwille van jouw nek- of schouderklachten?": {
        "answers": {
            "Ja, minder dan 1 week": "1",
            "Ja, 1-2 weken": "2",
            "Ja, meer dan 2 weken": "3",
            "Neen, nooit": "4"
        }
    },
    "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw rugklachten?": {
        "answers": {
            "Ja, minder dan 1 week": "1",
            "Ja, 1-2 weken": "2",
            "Ja, meer dan 2 weken": "3",
            "Neen, nooit": "4"
        }
    },
    "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw elleboog- of pols/handklachten?": {
        "answers": {
            "Ja, minder dan 1 week": "1",
            "Ja, 1-2 weken": "2",
            "Ja, meer dan 2 weken": "3",
            "Neen, nooit": "4"
        }
    },
    "Ben je in de afgelopen 6 weken afwezig geweest omwille van uw heup-, knie- of enkel/voetklachten?": {
        "answers": {
            "Ja, minder dan 1 week": "1",
            "Ja, 1-2 weken": "2",
            "Ja, meer dan 2 weken": "3",
            "Neen, nooit": "4"
        }
    },
    "Hoe zou je over het algemeen jouw gezondheid noemen?": {
        "questioncode": "SF",
        "subquestionnaire": "SF",
        "answers": {
            "Uitstekend": "1",
            "Zeer goed": "2",
            "Goed": "3",
            "Matig": "4",
            "Slecht": "5"
        }
    },
    "Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden": {
        "questioncode": "PCS1",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, voel ik dat het zo niet verder kan": {
        "questioncode": "PCS2",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden": {
        "questioncode": "PCS3",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt": {
        "questioncode": "PCS4",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, voel ik dat ik het niet meer uithoud": {
        "questioncode": "PCS5",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, word ik bang dat de pijn erger zal worden": {
        "questioncode": "PCS6",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen": {
        "questioncode": "PCS7",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, verlang ik hevig dat de pijn weggaat": {
        "questioncode": "PCS8",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten": {
        "questioncode": "PCS9",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet": {
        "questioncode": "PCS10",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt": {
        "questioncode": "PCS11",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen": {
        "questioncode": "PCS12",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren": {
        "questioncode": "PCS13",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    },
    "Lichamelijke activiteit verergert de pijn": {
        "questioncode": "FABQ1_A",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden": {
        "questioncode": "FABQ2_A",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren": {
        "questioncode": "FABQ3_A",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren": {
        "questioncode": "FABQ4_A",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Mijn werk is te zwaar voor mij": {
        "questioncode": "FABQ7_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Mijn werk verergert de pijn (of zou dat kunnen verergeren)": {
        "questioncode": "FABQ8_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Mijn werk zou mijn lichaam kunnen schaden": {
        "questioncode": "FABQ9_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?": {
        "questioncode": "",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?": {
        "questioncode": "IPAQ_V1",
        "subquestionnaire": "IPAQ",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?": {
        "questioncode": "",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?": {
        "questioncode": "IPAQ_M1",
        "subquestionnaire": "IPAQ",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?": {
        "questioncode": "",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?": {
        "questioncode": "IPAQ_W1",
        "subquestionnaire": "IPAQ",
        "answers": {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7"
        }
    },
    "Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?": {
        "questioncode": "IPAQ_Z",
        "subquestionnaire": "IPAQ",
        "answers": {
        }
    },
    "Ik moet extra hard werken om iets af te krijgen": {
        "questioncode": "WD1",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik werk onder tijdsdruk": {
        "questioncode": "WD2",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik moet mij haasten": {
        "questioncode": "WD3",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan mijn eigen werk plannen": {
        "questioncode": "AUT1",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan mijn werk doen op een manier die ik het beste vind": {
        "questioncode": "AUT2",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan mijn opdracht zelf kiezen": {
        "questioncode": "AUT3",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan mijn manier van werken variëren": {
        "questioncode": "AUT4",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan, als dat nodig is, mijn collega's om hulp vragen": {
        "questioncode": "SOC_C1",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik voel me sterk gewaardeerd door mijn collega's": {
        "questioncode": "SOC_C2",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen": {
        "questioncode": "SOC_L1",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "Ik voel me sterk gewaardeerd door mijn directe leidinggevende": {
        "questioncode": "SOC_L2",
        "answers": {
            "(Bijna) nooit": "1",
            "Eerder zelden": "2",
            "Soms": "3",
            "Regelmatig": "4",
            "(Bijna) altijd": "5"
        }
    },
    "De kans dat ik over 3 maanden blijf werken is…": {
        "questioncode": "EVV1",
        "subquestionnaire": "EVV",
        "answers": {
            "Erg laag": "0",
            "Laag": "1",
            "Neutraal": "2",
            "Hoog": "3",
            "Heel hoog": "4",
            "Eerder laag": "5",
            "Eerder hoog": "6"
        }
    },
    "Blijven werken in een betaalde baan over 3 maanden vind ik...": {
        "questioncode": "AT4",
        "answers": {
            "Plezierig": "1",
            "Akelig": "0"
        }
    },
    "Ik wil over 3 maanden blijven werken in een betaalde baan": {
        "questioncode": "EVV2",
        "subquestionnaire": "EVV",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Ik verwacht te blijven werken in een betaalde baan over 3 maanden": {
        "questioncode": "EVV3",
        "subquestionnaire": "EVV",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan": {
        "questioncode": "EVV4",
        "subquestionnaire": "EVV",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.": {
        "questioncode": "SN1",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.": {
        "questioncode": "SN2",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.": {
        "questioncode": "ZEC1",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.": {
        "questioncode": "ZEC2",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.": {
        "questioncode": "ZEC3",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.": {
        "questioncode": "ZEC4",
        "answers": {
            "Helemaal niet akkoord": "0",
            "Niet akkoord": "1",
            "Eerder niet akkoord": "2",
            "Neutraal": "3",
            "Eerder akkoord": "4",
            "Akkoord": "5",
            "Helemaal akkoord": "6"
        }
    },
    "Geboortejaar": {
        "questioncode": "D1",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {}
    },
    "Geslacht": {
        "questioncode": "D2",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {
            "Man": "1",
            "Vrouw": "2",
            "x": "3"
        }
    },
    "Wat is de hoogste opleiding die je hebt afgemaakt?": {
        "questioncode": "D6",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {
            "Lager onderwijs": "1",
            "Lager middelbaar onderwijs": "2",
            "Hoger middelbaar onderwijs": "3",
            "Bachelor (Universitaire kandidatuur of Hogeschool)": "4",
            "Master (Universitaire licentie) of hoger": "5"
        }
    },
    "In welke sector werk je?": {
        "questioncode": "WS1",
        "answers": {
            "Zorg": "1",
            "Industrie/reiniging": "2",
            "Logistiek/retail": "3",
            "Overheid": "4",
            "Kantoor": "5",
            "Bouw": "6",
            "Onderwijs": "7",
            "Hulpdiensten": "8",
            "Voeding/horeca": "9",
            "Cultuur/media/entertainment": "10",
            "Land-/tuinbouw": "11"
        }
    },
    "Hoelang werk je bij jouw huidige werkgever?": {
        "questioncode": "WS2",
        "answers": {
            "Minder dan 1 jaar": "1",
            "1-4 jaren": "2",
            "5-9 jaren": "3",
            "10-14 jaren": "4",
            "15-19 jaren": "5",
            "20-24 jaren": "6",
            "Meer dan 25 jaren": "7"
        }
    },
    "Hoelang werk je in jouw huidige functie?": {
        "questioncode": "WS3",
        "answers": {
            "Minder dan 1 jaar": "1",
            "1-4 jaren": "2",
            "5-9 jaren": "3",
            "10-14 jaren": "4",
            "15-19 jaren": "5",
            "20-24 jaren": "6",
            "Meer dan 25 jaren": "7"
        }
    },
    "Welk type contract heb je?": {
        "questioncode": "WS4",
        "answers": {
            "Statutair": "1",
            "Contract onbepaalde duur": "2",
            "Contract bepaalde duur": "3",
            "Interim": "4",
            "Zelfstandig": "5",
            "Ander soort contract": "6"
        }
    },
    "Welk werkregime heb je?": {
        "questioncode": "WS5",
        "answers": {
            "Voltijds": "",
            "Tussen voltijds en halftijds": "",
            "Halftijds": "",
            "Minder dan halftijds": ""
        }
    },
    "Ben je verantwoordelijk voor medewerkers?": {
        "questioncode": "WS6",
        "answers": {
            "Ja": "1",
            "Nee": "0"
        }
    },
    "Hoe vaak moet je op het werk herhaaldelijk dezelfde bewegingen maken met de armen en/of handen?": {
        "questioncode": "WF11",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk langdurig in dezelfde houding werken?": {
        "questioncode": "WF10",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk in ongemakkelijke houdingen werken?": {
        "questioncode": "WF9",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk in voertuigen rijden?": {
        "questioncode": "WF8",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk met trillend of stotend gereedschap werken?": {
        "questioncode": "WF7",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk zware lasten (meer dan 20 kg) verplaatsen?": {
        "questioncode": "WF6",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk lasten (meer dan 5 kg) verplaatsen?": {
        "questioncode": "WF5",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk langdurig geknield of gehurkt werken?": {
        "questioncode": "WF4",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk langdurig beeldschermwerk verrichten?": {
        "questioncode": "WF3",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk langdurig zittend werken?": {
        "questioncode": "WF2",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Hoe vaak moet je op het werk langdurig staand werken?": {
        "questioncode": "WF1",
        "answers": {
            "(Bijna) nooit": "1",
            "Af en toe": "2",
            "Vrij veel": "3",
            "(Bijna) altijd": "4"
        }
    },
    "Rook jij?": {
        "questioncode": "D5",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {
            "Ja": "1",
            "Nee": "0"
        }
    },
    "Wat is jouw gewicht? (kg)": {
        "questioncode": "D4",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {}
    },
    "Wat is jouw lengte? (cm)": {
        "questioncode": "D3",
        "subquestionnaire": "DEMOGRAFISCH",
        "answers": {}
    },
    "Ik ga helemaal op in mijn werk": {
        "questioncode": "BEV3",
        "subquestionnaire": "BEV",
        "answers": {
            "Nooit": "0",
            "Een paar keer per jaar of minder": "1",
            "Eens per maand of minder": "2",
            "Een paar keer per maand": "3",
            "Eens per week": "4",
            "Een paar keer per week": "5",
            "Dagelijks": "6"
        }
    },
    "Ik ben enthousiast over mijn baan": {
        "questioncode": "BEV2",
        "subquestionnaire": "BEV",
        "answers": {
            "Nooit": "0",
            "Een paar keer per jaar of minder": "1",
            "Eens per maand of minder": "2",
            "Een paar keer per maand": "3",
            "Eens per week": "4",
            "Een paar keer per week": "5",
            "Dagelijks": "6"
        }
    },
    "Op mijn werk bruis ik van energie": {
        "questioncode": "BEV1",
        "subquestionnaire": "BEV",
        "answers": {
            "Nooit": "0",
            "Een paar keer per jaar of minder": "1",
            "Eens per maand of minder": "2",
            "Een paar keer per maand": "3",
            "Eens per week": "4",
            "Een paar keer per week": "5",
            "Dagelijks": "6"
        }
    },
    "Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.": {
        "questioncode": "CPAQ8",
        "subquestionnaire": "CPAQ_PW",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Ik vermijd situaties die mijn pijn verergeren.": {
        "questioncode": "CPAQ7",
        "subquestionnaire": "CPAQ_PW",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Voor ik grote plannen maak, moet de pijn eerst iets minder worden.": {
        "questioncode": "CPAQ6",
        "subquestionnaire": "CPAQ_PW",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.": {
        "questioncode": "CPAQ5",
        "subquestionnaire": "CPAQ_PW",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.": {
        "questioncode": "CPAQ4",
        "subquestionnaire": "CPAQ_AE",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Ik leid een volwaardig leven ook al heb ik chronische pijn.": {
        "questioncode": "CPAQ3",
        "subquestionnaire": "CPAQ_AE",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.": {
        "questioncode": "CPAQ2",
        "subquestionnaire": "CPAQ_AE",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.": {
        "questioncode": "CPAQ1",
        "subquestionnaire": "CPAQ_AE",
        "answers": {
            "Nooit": "0",
            "Zeer zelden": "1",
            "Zelden": "2",
            "Soms": "3",
            "Dikwijls": "4",
            "Bijna altijd": "5",
            "Altijd": "6"
        }
    },
    "Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten": {
        "questioncode": "FABQ11_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Ik zou mijn normale werk niet moeten doen met mijn huidige pijn": {
        "questioncode": "FABQ10_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Door mijn werk is de pijn erger geworden": {
        "questioncode": "FABQ6_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk": {
        "questioncode": "FABQ5_W",
        "subquestionnaire": "FABQ",
        "answers": {
            "Geheel oneens": "0",
            "Tamelijk oneens": "1",
            "Enigszins oneens": "2",
            "Weet het niet": "3",
            "Enigszins eens": "4",
            "Tamelijk eens": "5",
            "Geheel eens": "6"
        }
    },
    "Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?": {
        "questioncode": "MHI5",
        "subquestionnaire": "MHI-5",
        "answers": {
            "Altijd": "1",
            "Meestal": "2",
            "Vaak": "3",
            "Soms": "4",
            "Zelden": "5",
            "Nooit": "6"
        }
    },
    "Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?": {
        "questioncode": "MHI4",
        "subquestionnaire": "MHI-5",
        "answers": {
            "Altijd": "1",
            "Meestal": "2",
            "Vaak": "3",
            "Soms": "4",
            "Zelden": "5",
            "Nooit": "6"
        }
    },
    "Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?": {
        "questioncode": "MHI3",
        "subquestionnaire": "MHI-5",
        "answers": {
            "Altijd": "1",
            "Meestal": "2",
            "Vaak": "3",
            "Soms": "4",
            "Zelden": "5",
            "Nooit": "6"
        }
    },
    "Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?": {
        "questioncode": "MHI2",
        "subquestionnaire": "MHI-5",
        "answers": {
            "Altijd": "1",
            "Meestal": "2",
            "Vaak": "3",
            "Soms": "4",
            "Zelden": "5",
            "Nooit": "6"
        }
    },
    "Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?": {
        "questioncode": "MHI1",
        "subquestionnaire": "MHI-5",
        "answers": {
            "Altijd": "1",
            "Meestal": "2",
            "Vaak": "3",
            "Soms": "4",
            "Zelden": "5",
            "Nooit": "6"
        }
    },
    "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen? ": {
        "questioncode": "WAS",
        "subquestionnaire": "WAS",
        "answers": {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "Helemaal niet in staat om te werken": "0",
            "Optimaal werkvermogen": "10"
        }
    },
    "Hoelang heb je jouw nek- of schouderklachten al?": {
        "questioncode": "K_ns",
        "subquestionnaire": "K_ns",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoelang heb je jouw rugklachten al?": {
        "questioncode": "K_rug",
        "subquestionnaire": "K_rug",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoelang heb je jouw elleboog- of pols/handklachten al?": {
        "questioncode": "K_eph",
        "subquestionnaire": "K_eph",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoelang heb je jouw heup-, knie- of enkel/voetklachten al?": {
        "questioncode": "K_hkev",
        "subquestionnaire": "K_hkev",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?": {
        "questioncode": "V_ns",
        "subquestionnaire": "V",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?": {
        "questioncode": "V_rug",
        "subquestionnaire": "V",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?": {
        "questioncode": "V_eph",
        "subquestionnaire": "V",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?": {
        "questioncode": "V_hkev",
        "subquestionnaire": "V",
        "answers": {
            "Minder dan 1 week": "1",
            "1-6 weken": "2",
            "6-12 weken": "3",
            "3-6 maanden": "4",
            "6-12 maanden": "5",
            "langer dan 1 jaar": "6"
        }
    },
    "Heb je de afgelopen 7 dagen last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)": {
        "questioncode": "K",
        "subquestionnaire": "K",
        "answers": {
            "Nek": "",
            "Rug": "",
            "Schouder": "",
            "Elleboog": "",
            "Pols/hand": "",
            "Heup": "",
            "Knie": "",
            "Enkel/voet": "",
            "Nergens": ""
        }
    },
    "Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen?": {
        "questioncode": "WAS",
        "subquestionnaire": "WAS",
        "answers": {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "Helemaal niet in staat om te werken": "0",
            "Optimaal werkvermogen": "10"
        }
    },
    "Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn ophoudt": {
        "questioncode": "PCS11",
        "subquestionnaire": "PCS",
        "answers": {
            "Helemaal niet": "0",
            "In lichte mate": "1",
            "In zekere mate": "2",
            "In grote mate": "3",
            "Altijd": "4"
        }
    }
}

export const questionnaireCodes = {
    "55461":{
        "questionnaire":"followup",
        "questioncode":"K",
        "subquestionnaire":"K",
        "question":"Heb je de afgelopen 6 weken last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)",
        "coding":{"55462":{"antwoord":"Nek","code":""},"55463":{"antwoord":"Rug","code":""},"55464":{"antwoord":"Schouder","code":""},"55465":{"antwoord":"Elleboog","code":""},"55466":{"antwoord":"Pols/hand","code":""},"55467":{"antwoord":"Heup","code":""},"55468":{"antwoord":"Knie","code":""},"55469":{"antwoord":"Enkel/voet","code":""},"55470":{"antwoord":"Nergens","code":""}}},
    "55482":{
        "questionnaire":"followup",
        "question":"Ben je in de afgelopen 6 weken afwezig geweest omwille van jouw nek- of schouderklachten?",
        "coding":{"55484":{"antwoord":"Ja, minder dan 1 week","code":1},"55485":{"antwoord":"Ja, 1-2 weken","code":2},"55486":{"antwoord":"Ja, meer dan 2 weken","code":3},"55487":{"antwoord":"Neen, nooit","code":4}}},
    "55499":{
        "questionnaire":"followup",
        "question":"Ben je in de afgelopen 6 weken afwezig geweest omwille van uw rugklachten?",
        "coding":{"55501":{"antwoord":"Ja, minder dan 1 week","code":1},"55502":{"antwoord":"Ja, 1-2 weken","code":2},"55503":{"antwoord":"Ja, meer dan 2 weken","code":3},"55504":{"antwoord":"Neen, nooit","code":4}}},
    "55516":{
        "questionnaire":"followup",
        "question":"Ben je in de afgelopen 6 weken afwezig geweest omwille van uw elleboog- of pols/handklachten?",
        "coding":{"55518":{"antwoord":"Ja, minder dan 1 week","code":1},"55519":{"antwoord":"Ja, 1-2 weken","code":2},"55520":{"antwoord":"Ja, meer dan 2 weken","code":3},"55521":{"antwoord":"Neen, nooit","code":4}}},
    "55533":{
        "questionnaire":"followup",
        "question":"Ben je in de afgelopen 6 weken afwezig geweest omwille van uw heup-, knie- of enkel/voetklachten?",
        "coding":{"55535":{"antwoord":"Ja, minder dan 1 week","code":1},"55536":{"antwoord":"Ja, 1-2 weken","code":2},"55537":{"antwoord":"Ja, meer dan 2 weken","code":3},"55538":{"antwoord":"Neen, nooit","code":4}}},
    "55539":{
        "questionnaire":"followup",
        "question":"Hoe zou je over het algemeen jouw gezondheid noemen?",
        "questioncode":"SF",
        "subquestionnaire":"SF",
        "coding":{"55540":{"antwoord":"Uitstekend","code":1},"55541":{"antwoord":"Zeer goed","code":2},"55542":{"antwoord":"Goed","code":3},"55543":{"antwoord":"Matig","code":4},"55544":{"antwoord":"Slecht","code":5}}},
    "55547":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
        "questioncode":"PCS1",
        "subquestionnaire":"PCS",
        "coding":{"55548":{"antwoord":"Helemaal niet","code":0},"55549":{"antwoord":"In lichte mate","code":1},"55550":{"antwoord":"In zekere mate","code":2},"55551":{"antwoord":"In grote mate","code":3},"55552":{"antwoord":"Altijd","code":4}}},
    "55553":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, voel ik dat het zo niet verder kan",
        "questioncode":"PCS2",
        "subquestionnaire":"PCS",
        "coding":{"55554":{"antwoord":"Helemaal niet","code":0},"55555":{"antwoord":"In lichte mate","code":1},"55556":{"antwoord":"In zekere mate","code":2},"55557":{"antwoord":"In grote mate","code":3},"55558":{"antwoord":"Altijd","code":4}}},
    "55559":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
        "questioncode":"PCS3",
        "subquestionnaire":"PCS",
        "coding":{"55560":{"antwoord":"Helemaal niet","code":0},"55561":{"antwoord":"In lichte mate","code":1},"55562":{"antwoord":"In zekere mate","code":2},"55563":{"antwoord":"In grote mate","code":3},"55564":{"antwoord":"Altijd","code":4}}},
    "55565":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
        "questioncode":"PCS4",
        "subquestionnaire":"PCS",
        "coding":{"55566":{"antwoord":"Helemaal niet","code":0},"55567":{"antwoord":"In lichte mate","code":1},"55568":{"antwoord":"In zekere mate","code":2},"55569":{"antwoord":"In grote mate","code":3},"55570":{"antwoord":"Altijd","code":4}}},
    "55571":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, voel ik dat ik het niet meer uithoud",
        "questioncode":"PCS5",
        "subquestionnaire":"PCS",
        "coding":{"55572":{"antwoord":"Helemaal niet","code":0},"55573":{"antwoord":"In lichte mate","code":1},"55574":{"antwoord":"In zekere mate","code":2},"55575":{"antwoord":"In grote mate","code":3},"55576":{"antwoord":"Altijd","code":4}}},
    "55577":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, word ik bang dat de pijn erger zal worden",
        "questioncode":"PCS6",
        "subquestionnaire":"PCS",
        "coding":{"55578":{"antwoord":"Helemaal niet","code":0},"55579":{"antwoord":"In lichte mate","code":1},"55580":{"antwoord":"In zekere mate","code":2},"55581":{"antwoord":"In grote mate","code":3},"55582":{"antwoord":"Altijd","code":4}}},
    "55583":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
        "questioncode":"PCS7",
        "subquestionnaire":"PCS",
        "coding":{"55584":{"antwoord":"Helemaal niet","code":0},"55585":{"antwoord":"In lichte mate","code":1},"55586":{"antwoord":"In zekere mate","code":2},"55587":{"antwoord":"In grote mate","code":3},"55588":{"antwoord":"Altijd","code":4}}},
    "55589":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
        "questioncode":"PCS8",
        "subquestionnaire":"PCS",
        "coding":{"55590":{"antwoord":"Helemaal niet","code":0},"55591":{"antwoord":"In lichte mate","code":1},"55592":{"antwoord":"In zekere mate","code":2},"55593":{"antwoord":"In grote mate","code":3},"55594":{"antwoord":"Altijd","code":4}}},
    "55595":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
        "questioncode":"PCS9",
        "subquestionnaire":"PCS",
        "coding":{"55596":{"antwoord":"Helemaal niet","code":0},"55597":{"antwoord":"In lichte mate","code":1},"55598":{"antwoord":"In zekere mate","code":2},"55599":{"antwoord":"In grote mate","code":3},"55600":{"antwoord":"Altijd","code":4}}},
    "55601":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
        "questioncode":"PCS10",
        "subquestionnaire":"PCS",
        "coding":{"55602":{"antwoord":"Helemaal niet","code":0},"55603":{"antwoord":"In lichte mate","code":1},"55604":{"antwoord":"In zekere mate","code":2},"55605":{"antwoord":"In grote mate","code":3},"55606":{"antwoord":"Altijd","code":4}}},
    "55607":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
        "questioncode":"PCS11",
        "subquestionnaire":"PCS",
        "coding":{"55608":{"antwoord":"Helemaal niet","code":0},"55609":{"antwoord":"In lichte mate","code":1},"55610":{"antwoord":"In zekere mate","code":2},"55611":{"antwoord":"In grote mate","code":3},"55612":{"antwoord":"Altijd","code":4}}},
    "55613":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
        "questioncode":"PCS12",
        "subquestionnaire":"PCS",
        "coding":{"55614":{"antwoord":"Helemaal niet","code":0},"55615":{"antwoord":"In lichte mate","code":1},"55616":{"antwoord":"In zekere mate","code":2},"55617":{"antwoord":"In grote mate","code":3},"55618":{"antwoord":"Altijd","code":4}}},
    "55619":{
        "questionnaire":"followup",
        "question":"Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
        "questioncode":"PCS13",
        "subquestionnaire":"PCS",
        "coding":{"55620":{"antwoord":"Helemaal niet","code":0},"55621":{"antwoord":"In lichte mate","code":1},"55622":{"antwoord":"In zekere mate","code":2},"55623":{"antwoord":"In grote mate","code":3},"55624":{"antwoord":"Altijd","code":4}}},
    "55628":{
        "questionnaire":"followup",
        "question":"Lichamelijke activiteit verergert de pijn",
        "questioncode":"FABQ1_A",
        "subquestionnaire":"FABQ",
        "coding":{"55629":{"antwoord":"Geheel oneens","code":0},"55630":{"antwoord":"Tamelijk oneens","code":1},"55631":{"antwoord":"Enigszins oneens","code":2},"55632":{"antwoord":"Weet het niet","code":3},"55633":{"antwoord":"Enigszins eens","code":4},"55634":{"antwoord":"Tamelijk eens","code":5},"55635":{"antwoord":"Geheel eens","code":6}}},
    "55637":{
        "questionnaire":"followup",
        "question":"Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
        "questioncode":"FABQ2_A",
        "subquestionnaire":"FABQ",
        "coding":{"55638":{"antwoord":"Geheel oneens","code":0},"55639":{"antwoord":"Tamelijk oneens","code":1},"55640":{"antwoord":"Enigszins oneens","code":2},"55641":{"antwoord":"Weet het niet","code":3},"55642":{"antwoord":"Enigszins eens","code":4},"55643":{"antwoord":"Tamelijk eens","code":5},"55644":{"antwoord":"Geheel eens","code":6}}},
    "55646":{
        "questionnaire":"followup",
        "question":"Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
        "questioncode":"FABQ3_A",
        "subquestionnaire":"FABQ",
        "coding":{"55647":{"antwoord":"Geheel oneens","code":0},"55648":{"antwoord":"Tamelijk oneens","code":1},"55649":{"antwoord":"Enigszins oneens","code":2},"55650":{"antwoord":"Weet het niet","code":3},"55651":{"antwoord":"Enigszins eens","code":4},"55652":{"antwoord":"Tamelijk eens","code":5},"55653":{"antwoord":"Geheel eens","code":6}}},
    "55655":{
        "questionnaire":"followup",
        "question":"Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
        "questioncode":"FABQ4_A",
        "subquestionnaire":"FABQ",
        "coding":{"55656":{"antwoord":"Geheel oneens","code":0},"55657":{"antwoord":"Tamelijk oneens","code":1},"55658":{"antwoord":"Enigszins oneens","code":2},"55659":{"antwoord":"Weet het niet","code":3},"55660":{"antwoord":"Enigszins eens","code":4},"55661":{"antwoord":"Tamelijk eens","code":5},"55662":{"antwoord":"Geheel eens","code":6}}},
    "55664":{
        "questionnaire":"followup",
        "question":"Mijn werk is te zwaar voor mij",
        "questioncode":"FABQ7_W",
        "subquestionnaire":"FABQ",
        "coding":{"55665":{"antwoord":"Geheel oneens","code":0},"55666":{"antwoord":"Tamelijk oneens","code":1},"55667":{"antwoord":"Enigszins oneens","code":2},"55668":{"antwoord":"Weet het niet","code":3},"55669":{"antwoord":"Enigszins eens","code":4},"55670":{"antwoord":"Tamelijk eens","code":5},"55671":{"antwoord":"Geheel eens","code":6}}},
    "55673":{
        "questionnaire":"followup",
        "question":"Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
        "questioncode":"FABQ8_W",
        "subquestionnaire":"FABQ",
        "coding":{"55674":{"antwoord":"Geheel oneens","code":0},"55675":{"antwoord":"Tamelijk oneens","code":1},"55676":{"antwoord":"Enigszins oneens","code":2},"55677":{"antwoord":"Weet het niet","code":3},"55678":{"antwoord":"Enigszins eens","code":4},"55679":{"antwoord":"Tamelijk eens","code":5},"55680":{"antwoord":"Geheel eens","code":6}}},
    "55682":{
        "questionnaire":"followup",
        "question":"Mijn werk zou mijn lichaam kunnen schaden",
        "questioncode":"FABQ9_W",
        "subquestionnaire":"FABQ",
        "coding":{"55683":{"antwoord":"Geheel oneens","code":0},"55684":{"antwoord":"Tamelijk oneens","code":1},"55685":{"antwoord":"Enigszins oneens","code":2},"55686":{"antwoord":"Weet het niet","code":3},"55687":{"antwoord":"Enigszins eens","code":4},"55688":{"antwoord":"Tamelijk eens","code":5},"55689":{"antwoord":"Geheel eens","code":6}}},
    "55702":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?","questionnaire":"followup","code":"",
        "coding":{"55706":{"antwoord":"0","code":0},"55707":{"antwoord":"1","code":1},"55708":{"antwoord":"2","code":2},"55709":{"antwoord":"3","code":3},"55710":{"antwoord":"4","code":4},"55711":{"antwoord":"5","code":5},"55712":{"antwoord":"6","code":6},"55713":{"antwoord":"7","code":7}}},
    "55705":{
        "questionnaire":"followup",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?",
        "questioncode":"IPAQ_V1",
        "subquestionnaire":"IPAQ",
        "coding":{"55706":{"antwoord":"0","code":0},"55707":{"antwoord":"1","code":1},"55708":{"antwoord":"2","code":2},"55709":{"antwoord":"3","code":3},"55710":{"antwoord":"4","code":4},"55711":{"antwoord":"5","code":5},"55712":{"antwoord":"6","code":6},"55713":{"antwoord":"7","code":7}}},
    "55714":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?","questionnaire":"followup","code":"",
        "coding":{"55718":{"antwoord":"0","code":0},"55719":{"antwoord":"1","code":1},"55720":{"antwoord":"2","code":2},"55721":{"antwoord":"3","code":3},"55722":{"antwoord":"4","code":4},"55723":{"antwoord":"5","code":5},"55724":{"antwoord":"6","code":6},"55725":{"antwoord":"7","code":7}}},
    "55717":{
        "questionnaire":"followup",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?",
        "questioncode":"IPAQ_M1",
        "subquestionnaire":"IPAQ",
        "coding":{"55718":{"antwoord":"0","code":0},"55719":{"antwoord":"1","code":1},"55720":{"antwoord":"2","code":2},"55721":{"antwoord":"3","code":3},"55722":{"antwoord":"4","code":4},"55723":{"antwoord":"5","code":5},"55724":{"antwoord":"6","code":6},"55725":{"antwoord":"7","code":7}}},
    "55726":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?","questionnaire":"followup","code":"",
        "coding":{"55730":{"antwoord":"0","code":0},"55731":{"antwoord":"1","code":1},"55732":{"antwoord":"2","code":2},"55733":{"antwoord":"3","code":3},"55734":{"antwoord":"4","code":4},"55735":{"antwoord":"5","code":5},"55736":{"antwoord":"6","code":6},"55737":{"antwoord":"7","code":7}}},
    "55729":{
        "questionnaire":"followup",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?",
        "questioncode":"IPAQ_W1",
        "subquestionnaire":"IPAQ",
        "coding":{"55730":{"antwoord":"0","code":0},"55731":{"antwoord":"1","code":1},"55732":{"antwoord":"2","code":2},"55733":{"antwoord":"3","code":3},"55734":{"antwoord":"4","code":4},"55735":{"antwoord":"5","code":5},"55736":{"antwoord":"6","code":6},"55737":{"antwoord":"7","code":7}}},
    "55738":{
        "questionnaire":"followup",
        "question":"Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?",
        "questioncode":"IPAQ_Z",
        "subquestionnaire":"IPAQ",
        "coding":{"55739":{"antwoord":"Uren en minuten"}}},
    "55748":{
        "questionnaire":"followup",
        "question":"Ik moet extra hard werken om iets af te krijgen",
        "questioncode":"WD1",
        "coding":{"55749":{"antwoord":"(Bijna) nooit","code":1},"55750":{"antwoord":"Eerder zelden","code":2},"55751":{"antwoord":"Soms","code":3},"55752":{"antwoord":"Regelmatig","code":4},"55753":{"antwoord":"(Bijna) altijd","code":5}}},
    "55754":{
        "questionnaire":"followup",
        "question":"Ik werk onder tijdsdruk",
        "questioncode":"WD2",
        "coding":{"55755":{"antwoord":"(Bijna) nooit","code":1},"55756":{"antwoord":"Eerder zelden","code":2},"55757":{"antwoord":"Soms","code":3},"55758":{"antwoord":"Regelmatig","code":4},"55759":{"antwoord":"(Bijna) altijd","code":5}}},
    "55760":{
        "questionnaire":"followup",
        "question":"Ik moet mij haasten",
        "questioncode":"WD3",
        "coding":{"55761":{"antwoord":"(Bijna) nooit","code":1},"55762":{"antwoord":"Eerder zelden","code":2},"55763":{"antwoord":"Soms","code":3},"55764":{"antwoord":"Regelmatig","code":4},"55765":{"antwoord":"(Bijna) altijd","code":5}}},
    "55784":{
        "questionnaire":"followup",
        "question":"Ik kan mijn eigen werk plannen",
        "questioncode":"AUT1",
        "coding":{"55785":{"antwoord":"(Bijna) nooit","code":1},"55786":{"antwoord":"Eerder zelden","code":2},"55787":{"antwoord":"Soms","code":3},"55788":{"antwoord":"Regelmatig","code":4},"55789":{"antwoord":"(Bijna) altijd","code":5}}},
    "55790":{
        "questionnaire":"followup",
        "question":"Ik kan mijn werk doen op een manier die ik het beste vind",
        "questioncode":"AUT2",
        "coding":{"55791":{"antwoord":"(Bijna) nooit","code":1},"55792":{"antwoord":"Eerder zelden","code":2},"55793":{"antwoord":"Soms","code":3},"55794":{"antwoord":"Regelmatig","code":4},"55795":{"antwoord":"(Bijna) altijd","code":5}}},
    "55796":{
        "questionnaire":"followup",
        "question":"Ik kan mijn opdracht zelf kiezen",
        "questioncode":"AUT3",
        "coding":{"55797":{"antwoord":"(Bijna) nooit","code":1},"55798":{"antwoord":"Eerder zelden","code":2},"55799":{"antwoord":"Soms","code":3},"55800":{"antwoord":"Regelmatig","code":4},"55801":{"antwoord":"(Bijna) altijd","code":5}}},
    "55802":{
        "questionnaire":"followup",
        "question":"Ik kan mijn manier van werken variëren",
        "questioncode":"AUT4",
        "coding":{"55803":{"antwoord":"(Bijna) nooit","code":1},"55804":{"antwoord":"Eerder zelden","code":2},"55805":{"antwoord":"Soms","code":3},"55806":{"antwoord":"Regelmatig","code":4},"55807":{"antwoord":"(Bijna) altijd","code":5}}},
    "55808":{
        "questionnaire":"followup",
        "question":"Ik kan, als dat nodig is, mijn collega's om hulp vragen",
        "questioncode":"SOC_C1",
        "coding":{"55809":{"antwoord":"(Bijna) nooit","code":1},"55810":{"antwoord":"Eerder zelden","code":2},"55811":{"antwoord":"Soms","code":3},"55812":{"antwoord":"Regelmatig","code":4},"55813":{"antwoord":"(Bijna) altijd","code":5}}},
    "55814":{
        "questionnaire":"followup",
        "question":"Ik voel me sterk gewaardeerd door mijn collega's",
        "questioncode":"SOC_C2",
        "coding":{"55815":{"antwoord":"(Bijna) nooit","code":1},"55816":{"antwoord":"Eerder zelden","code":2},"55817":{"antwoord":"Soms","code":3},"55818":{"antwoord":"Regelmatig","code":4},"55819":{"antwoord":"(Bijna) altijd","code":5}}},
    "55820":{
        "questionnaire":"followup",
        "question":"Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen",
        "questioncode":"SOC_L1",
        "coding":{"55821":{"antwoord":"(Bijna) nooit","code":1},"55822":{"antwoord":"Eerder zelden","code":2},"55823":{"antwoord":"Soms","code":3},"55824":{"antwoord":"Regelmatig","code":4},"55825":{"antwoord":"(Bijna) altijd","code":5}}},
    "55826":{
        "questionnaire":"followup",
        "question":"Ik voel me sterk gewaardeerd door mijn directe leidinggevende",
        "questioncode":"SOC_L2",
        "coding":{"55827":{"antwoord":"(Bijna) nooit","code":1},"55828":{"antwoord":"Eerder zelden","code":2},"55829":{"antwoord":"Soms","code":3},"55830":{"antwoord":"Regelmatig","code":4},"55831":{"antwoord":"(Bijna) altijd","code":5}}},
    "55834":{
        "questionnaire":"followup",
        "question":"De kans dat ik over 3 maanden blijf werken is…",
        "questioncode":"EVV1",
        "subquestionnaire":"EVV",
        "coding":{"55835":{"antwoord":"Erg laag","code":0},"55836":{"antwoord":"Laag","code":1},"55837":{"antwoord":"Neutraal","code":2},"55838":{"antwoord":"Hoog","code":3},"55839":{"antwoord":"Heel hoog","code":4},"1209567":{"antwoord":"Eerder laag","code":5},"1209568":{"antwoord":"Eerder hoog","code":6}}},
    "55840":{
        "questionnaire":"followup",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"55841":{"antwoord":"Goed", "code":1},"55842":{"antwoord":"Slecht", "code":0}}},
    "55843":{
        "questionnaire":"followup",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"55844":{"antwoord":"Wijs", "code":1},"55845":{"antwoord":"Dom", "code":0}}},
    "55846":{
        "questionnaire":"followup",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"55847":{"antwoord":"Voordelig", "code":1},"55848":{"antwoord":"Nadelig", "code":0}}},
    "55849":{
        "questionnaire":"followup",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"55850":{"antwoord":"Plezierig","code":1},"55851":{"antwoord":"Akelig","code":0}}},
    "55852":{
        "questionnaire":"followup",
        "question":"Ik wil over 3 maanden blijven werken in een betaalde baan",
        "questioncode":"EVV2",
        "subquestionnaire":"EVV",
        "coding":{"55853":{"antwoord":"Helemaal niet akkoord","code":0},"55854":{"antwoord":"Niet akkoord","code":1},"55855":{"antwoord":"Eerder niet akkoord","code":2},"55856":{"antwoord":"Neutraal","code":3},"55857":{"antwoord":"Eerder akkoord","code":4},"55858":{"antwoord":"Akkoord","code":5},"55859":{"antwoord":"Helemaal akkoord","code":6}}},
    "55860":{
        "questionnaire":"followup",
        "question":"Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
        "questioncode":"EVV3",
        "subquestionnaire":"EVV",
        "coding":{"55861":{"antwoord":"Helemaal niet akkoord","code":0},"55862":{"antwoord":"Niet akkoord","code":1},"55863":{"antwoord":"Eerder niet akkoord","code":2},"55864":{"antwoord":"Neutraal","code":3},"55865":{"antwoord":"Eerder akkoord","code":4},"55866":{"antwoord":"Akkoord","code":5},"55867":{"antwoord":"Helemaal akkoord","code":6}}},
    "55868":{
        "questionnaire":"followup",
        "question":"Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
        "questioncode":"EVV4",
        "subquestionnaire":"EVV",
        "coding":{"55869":{"antwoord":"Helemaal niet akkoord","code":0},"55870":{"antwoord":"Niet akkoord","code":1},"55871":{"antwoord":"Eerder niet akkoord","code":2},"55872":{"antwoord":"Neutraal","code":3},"55873":{"antwoord":"Eerder akkoord","code":4},"55874":{"antwoord":"Akkoord","code":5},"55875":{"antwoord":"Helemaal akkoord","code":6}}},
    "55876":{
        "questionnaire":"followup",
        "question":"De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"SN1",
        "coding":{"55877":{"antwoord":"Helemaal niet akkoord","code":0},"55878":{"antwoord":"Niet akkoord","code":1},"55879":{"antwoord":"Eerder niet akkoord","code":2},"55880":{"antwoord":"Neutraal","code":3},"55881":{"antwoord":"Eerder akkoord","code":4},"55882":{"antwoord":"Akkoord","code":5},"55883":{"antwoord":"Helemaal akkoord","code":6}}},
    "55884":{
        "questionnaire":"followup",
        "question":"De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"SN2",
        "coding":{"55885":{"antwoord":"Helemaal niet akkoord","code":0},"55886":{"antwoord":"Niet akkoord","code":1},"55887":{"antwoord":"Eerder niet akkoord","code":2},"55888":{"antwoord":"Neutraal","code":3},"55889":{"antwoord":"Eerder akkoord","code":4},"55890":{"antwoord":"Akkoord","code":5},"55891":{"antwoord":"Helemaal akkoord","code":6}}},
    "55892":{
        "questionnaire":"followup",
        "question":"Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"ZEC1",
        "coding":{"55893":{"antwoord":"Helemaal niet akkoord","code":0},"55894":{"antwoord":"Niet akkoord","code":1},"55895":{"antwoord":"Eerder niet akkoord","code":2},"55896":{"antwoord":"Neutraal","code":3},"55897":{"antwoord":"Eerder akkoord","code":4},"55898":{"antwoord":"Akkoord","code":5},"55899":{"antwoord":"Helemaal akkoord","code":6}}},
    "55900":{
        "questionnaire":"followup",
        "question":"Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
        "questioncode":"ZEC2",
        "coding":{"55901":{"antwoord":"Helemaal niet akkoord","code":0},"55902":{"antwoord":"Niet akkoord","code":1},"55903":{"antwoord":"Eerder niet akkoord","code":2},"55904":{"antwoord":"Neutraal","code":3},"55905":{"antwoord":"Eerder akkoord","code":4},"55906":{"antwoord":"Akkoord","code":5},"55907":{"antwoord":"Helemaal akkoord","code":6}}},
    "55908":{
        "questionnaire":"followup",
        "question":"Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
        "questioncode":"ZEC3",
        "coding":{"55909":{"antwoord":"Helemaal niet akkoord","code":0},"55910":{"antwoord":"Niet akkoord","code":1},"55911":{"antwoord":"Eerder niet akkoord","code":2},"55912":{"antwoord":"Neutraal","code":3},"55913":{"antwoord":"Eerder akkoord","code":4},"55914":{"antwoord":"Akkoord","code":5},"55915":{"antwoord":"Helemaal akkoord","code":6}}},
    "55916":{
        "questionnaire":"followup",
        "question":"Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
        "questioncode":"ZEC4",
        "coding":{"55917":{"antwoord":"Helemaal niet akkoord","code":0},"55918":{"antwoord":"Niet akkoord","code":1},"55919":{"antwoord":"Eerder niet akkoord","code":2},"55920":{"antwoord":"Neutraal","code":3},"55921":{"antwoord":"Eerder akkoord","code":4},"55922":{"antwoord":"Akkoord","code":5},"55923":{"antwoord":"Helemaal akkoord","code":6}}},
    "55924":{"questionnaire":"profiel","question":"Geboortejaar",
        "questioncode":"D1",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{}},"55926":{"questionnaire":"profiel","question":"Geslacht",
        "questioncode":"D2",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{"55927":{"antwoord":"Man","code":1},"55928":{"antwoord":"Vrouw","code":2},"72964":{"antwoord":"x","code":3}}},
    "55929":{"questionnaire":"profiel","question":"Wat is de hoogste opleiding die je hebt afgemaakt?",
        "questioncode":"D6",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{"55930":{"antwoord":"Lager onderwijs","code":1},"55931":{"antwoord":"Lager middelbaar onderwijs","code":2},"55932":{"antwoord":"Hoger middelbaar onderwijs","code":3},"55933":{"antwoord":"Bachelor (Universitaire kandidatuur of Hogeschool)","code":4},"55934":{"antwoord":"Master (Universitaire licentie) of hoger","code":5}}},
    "55935":{"questionnaire":"profiel","question":"In welke sector werk je?",
        "questioncode":"WS1",
        "coding":{"55936":{"antwoord":"Zorg","code":1},"55937":{"antwoord":"Industrie/reiniging","code":2},"55938":{"antwoord":"Logistiek/retail","code":3},"55939":{"antwoord":"Overheid","code":4},"55940":{"antwoord":"Kantoor","code":5},"55941":{"antwoord":"Bouw","code":6},"55942":{"antwoord":"Onderwijs","code":7},"55943":{"antwoord":"Hulpdiensten","code":8},"55944":{"antwoord":"Voeding/horeca","code":9},"55945":{"antwoord":"Cultuur/media/entertainment","code":10},"1607224":{"antwoord":"Land-/tuinbouw","code":11}}},
    "55946":{"questionnaire":"profiel","question":"Hoelang werk je bij jouw huidige werkgever?",
        "questioncode":"WS2",
        "coding":{"55947":{"antwoord":"Minder dan 1 jaar","code":1},"55948":{"antwoord":"1-4 jaren","code":2},"55949":{"antwoord":"5-9 jaren","code":3},"55950":{"antwoord":"10-14 jaren","code":4},"55951":{"antwoord":"15-19 jaren","code":5},"55952":{"antwoord":"20-24 jaren","code":6},"55953":{"antwoord":"Meer dan 25 jaren","code":7}}},
    "55954":{"questionnaire":"profiel","question":"Hoelang werk je in jouw huidige functie?",
        "questioncode":"WS3",
        "coding":{"55955":{"antwoord":"Minder dan 1 jaar","code":1},"55956":{"antwoord":"1-4 jaren","code":2},"55957":{"antwoord":"5-9 jaren","code":3},"55958":{"antwoord":"10-14 jaren","code":4},"55959":{"antwoord":"15-19 jaren","code":5},"55960":{"antwoord":"20-24 jaren","code":6},"55961":{"antwoord":"Meer dan 25 jaren","code":7}}},
    "55962":{"questionnaire":"profiel","question":"Welk type contract heb je?",
        "questioncode":"WS4",
        "coding":{"55963":{"antwoord":"Statutair","code":1},"55964":{"antwoord":"Contract onbepaalde duur","code":2},"55965":{"antwoord":"Contract bepaalde duur","code":3},"55966":{"antwoord":"Interim","code":4},"55967":{"antwoord":"Zelfstandig","code":5},"55968":{"antwoord":"Ander soort contract","code":6}}},
    "55969":{"questionnaire":"profiel","question":"Welk werkregime heb je?",
        "questioncode":"WS5",
        "coding":{"55970":{"antwoord":"Voltijds","code":""},"55971":{"antwoord":"Tussen voltijds en halftijds","code":""},"55972":{"antwoord":"Halftijds","code":""},"55973":{"antwoord":"Minder dan halftijds","code":""}}},
    "55974":{"questionnaire":"profiel","question":"Ben je verantwoordelijk voor medewerkers?",
        "questioncode":"WS6",
        "coding":{"55975":{"antwoord":"Ja","code":1},"55976":{"antwoord":"Nee","code":0}}},
    "71887":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk herhaaldelijk dezelfde bewegingen maken met de armen en/of handen?",
        "questioncode":"WF11",
        "coding":{"71888":{"antwoord":"(Bijna) nooit","code":1},"71889":{"antwoord":"Af en toe","code":2},"71890":{"antwoord":"Vrij veel","code":3},"71891":{"antwoord":"(Bijna) altijd","code":4}}},
    "71892":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk langdurig in dezelfde houding werken?",
        "questioncode":"WF10",
        "coding":{"71893":{"antwoord":"(Bijna) nooit","code":1},"71894":{"antwoord":"Af en toe","code":2},"71895":{"antwoord":"Vrij veel","code":3},"71896":{"antwoord":"(Bijna) altijd","code":4}}},
    "71897":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk in ongemakkelijke houdingen werken?",
        "questioncode":"WF9",
        "coding":{"71898":{"antwoord":"(Bijna) nooit","code":1},"71899":{"antwoord":"Af en toe","code":2},"71900":{"antwoord":"Vrij veel","code":3},"71901":{"antwoord":"(Bijna) altijd","code":4}}},
    "71902":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk in voertuigen rijden?",
        "questioncode":"WF8",
        "coding":{"71903":{"antwoord":"(Bijna) nooit","code":1},"71904":{"antwoord":"Af en toe","code":2},"71905":{"antwoord":"Vrij veel","code":3},"71906":{"antwoord":"(Bijna) altijd","code":4}}},
    "71907":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk met trillend of stotend gereedschap werken?",
        "questioncode":"WF7",
        "coding":{"71908":{"antwoord":"(Bijna) nooit","code":1},"71909":{"antwoord":"Af en toe","code":2},"71910":{"antwoord":"Vrij veel","code":3},"71911":{"antwoord":"(Bijna) altijd","code":4}}},
    "71912":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk zware lasten (meer dan 20 kg) verplaatsen?",
        "questioncode":"WF6",
        "coding":{"71913":{"antwoord":"(Bijna) nooit","code":1},"71914":{"antwoord":"Af en toe","code":2},"71915":{"antwoord":"Vrij veel","code":3},"71916":{"antwoord":"(Bijna) altijd","code":4}}},
    "71917":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk lasten (meer dan 5 kg) verplaatsen?",
        "questioncode":"WF5",
        "coding":{"71918":{"antwoord":"(Bijna) nooit","code":1},"71919":{"antwoord":"Af en toe","code":2},"71920":{"antwoord":"Vrij veel","code":3},"71921":{"antwoord":"(Bijna) altijd","code":4}}},
    "71922":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk langdurig geknield of gehurkt werken?",
        "questioncode":"WF4",
        "coding":{"71923":{"antwoord":"(Bijna) nooit","code":1},"71924":{"antwoord":"Af en toe","code":2},"71925":{"antwoord":"Vrij veel","code":3},"71926":{"antwoord":"(Bijna) altijd","code":4}}},
    "71927":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk langdurig beeldschermwerk verrichten?",
        "questioncode":"WF3",
        "coding":{"71928":{"antwoord":"(Bijna) nooit","code":1},"71929":{"antwoord":"Af en toe","code":2},"71930":{"antwoord":"Vrij veel","code":3},"71931":{"antwoord":"(Bijna) altijd","code":4}}},
    "71932":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk langdurig zittend werken?",
        "questioncode":"WF2",
        "coding":{"71933":{"antwoord":"(Bijna) nooit","code":1},"71934":{"antwoord":"Af en toe","code":2},"71935":{"antwoord":"Vrij veel","code":3},"71936":{"antwoord":"(Bijna) altijd","code":4}}},
    "71937":{"questionnaire":"profiel","question":"Hoe vaak moet je op het werk langdurig staand werken?",
        "questioncode":"WF1",
        "coding":{"71938":{"antwoord":"(Bijna) nooit","code":1},"71939":{"antwoord":"Af en toe","code":2},"71940":{"antwoord":"Vrij veel","code":3},"71941":{"antwoord":"(Bijna) altijd","code":4}}},
    "71942":{"questionnaire":"profiel","question":"Rook jij?",
        "questioncode":"D5",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{"71943":{"antwoord":"Ja","code":1},"71944":{"antwoord":"Nee","code":0}}},
    "71945":{"questionnaire":"profiel","question":"Wat is jouw gewicht? (kg)",
        "questioncode":"D4",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{}},"71947":{"questionnaire":"profiel","question":"Wat is jouw lengte? (cm)",
        "questioncode":"D3",
        "subquestionnaire":"DEMOGRAFISCH",
        "coding":{}},"71949":{
        "questionnaire":"followup",
        "question":"Ik ga helemaal op in mijn werk",
        "questioncode":"BEV3",
        "subquestionnaire":"BEV",
        "coding":{"71950":{"antwoord":"Nooit","code":0},"71951":{"antwoord":"Een paar keer per jaar of minder","code":1},"71952":{"antwoord":"Eens per maand of minder","code":2},"71953":{"antwoord":"Een paar keer per maand","code":3},"71954":{"antwoord":"Eens per week","code":4},"71955":{"antwoord":"Een paar keer per week","code":5},"71956":{"antwoord":"Dagelijks","code":6}}},
    "71957":{
        "questionnaire":"followup",
        "question":"Ik ben enthousiast over mijn baan",
        "questioncode":"BEV2",
        "subquestionnaire":"BEV",
        "coding":{"71958":{"antwoord":"Nooit","code":0},"71959":{"antwoord":"Een paar keer per jaar of minder","code":1},"71960":{"antwoord":"Eens per maand of minder","code":2},"71961":{"antwoord":"Een paar keer per maand","code":3},"71962":{"antwoord":"Eens per week","code":4},"71963":{"antwoord":"Een paar keer per week","code":5},"71964":{"antwoord":"Dagelijks","code":6}}},
    "71965":{
        "questionnaire":"followup",
        "question":"Op mijn werk bruis ik van energie",
        "questioncode":"BEV1",
        "subquestionnaire":"BEV",
        "coding":{"71966":{"antwoord":"Nooit","code":0},"71967":{"antwoord":"Een paar keer per jaar of minder","code":1},"71968":{"antwoord":"Eens per maand of minder","code":2},"71969":{"antwoord":"Een paar keer per maand","code":3},"71970":{"antwoord":"Eens per week","code":4},"71971":{"antwoord":"Een paar keer per week","code":5},"71972":{"antwoord":"Dagelijks","code":6}}},
    "71973":{
        "questionnaire":"followup",
        "question":"Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
        "questioncode":"CPAQ8",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"71974":{"antwoord":"Nooit","code":0},"71975":{"antwoord":"Zeer zelden","code":1},"71976":{"antwoord":"Zelden","code":2},"71977":{"antwoord":"Soms","code":3},"71978":{"antwoord":"Dikwijls","code":4},"71979":{"antwoord":"Bijna altijd","code":5},"71980":{"antwoord":"Altijd","code":6}}},
    "71982":{
        "questionnaire":"followup",
        "question":"Ik vermijd situaties die mijn pijn verergeren.",
        "questioncode":"CPAQ7",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"71983":{"antwoord":"Nooit","code":0},"71984":{"antwoord":"Zeer zelden","code":1},"71985":{"antwoord":"Zelden","code":2},"71986":{"antwoord":"Soms","code":3},"71987":{"antwoord":"Dikwijls","code":4},"71988":{"antwoord":"Bijna altijd","code":5},"71989":{"antwoord":"Altijd","code":6}}},
    "71991":{
        "questionnaire":"followup",
        "question":"Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
        "questioncode":"CPAQ6",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"71992":{"antwoord":"Nooit","code":0},"71993":{"antwoord":"Zeer zelden","code":1},"71994":{"antwoord":"Zelden","code":2},"71995":{"antwoord":"Soms","code":3},"71996":{"antwoord":"Dikwijls","code":4},"71997":{"antwoord":"Bijna altijd","code":5},"71998":{"antwoord":"Altijd","code":6}}},
    "72000":{
        "questionnaire":"followup",
        "question":"Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
        "questioncode":"CPAQ5",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"72001":{"antwoord":"Nooit","code":0},"72002":{"antwoord":"Zeer zelden","code":1},"72003":{"antwoord":"Zelden","code":2},"72004":{"antwoord":"Soms","code":3},"72005":{"antwoord":"Dikwijls","code":4},"72006":{"antwoord":"Bijna altijd","code":5},"72007":{"antwoord":"Altijd","code":6}}},
    "72009":{
        "questionnaire":"followup",
        "question":"Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
        "questioncode":"CPAQ4",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72010":{"antwoord":"Nooit","code":0},"72011":{"antwoord":"Zeer zelden","code":1},"72012":{"antwoord":"Zelden","code":2},"72013":{"antwoord":"Soms","code":3},"72014":{"antwoord":"Dikwijls","code":4},"72015":{"antwoord":"Bijna altijd","code":5},"72016":{"antwoord":"Altijd","code":6}}},
    "72018":{
        "questionnaire":"followup",
        "question":"Ik leid een volwaardig leven ook al heb ik chronische pijn.",
        "questioncode":"CPAQ3",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72019":{"antwoord":"Nooit","code":0},"72020":{"antwoord":"Zeer zelden","code":1},"72021":{"antwoord":"Zelden","code":2},"72022":{"antwoord":"Soms","code":3},"72023":{"antwoord":"Dikwijls","code":4},"72024":{"antwoord":"Bijna altijd","code":5},"72025":{"antwoord":"Altijd","code":6}}},
    "72027":{
        "questionnaire":"followup",
        "question":"Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
        "questioncode":"CPAQ2",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72028":{"antwoord":"Nooit","code":0},"72029":{"antwoord":"Zeer zelden","code":1},"72030":{"antwoord":"Zelden","code":2},"72031":{"antwoord":"Soms","code":3},"72032":{"antwoord":"Dikwijls","code":4},"72033":{"antwoord":"Bijna altijd","code":5},"72034":{"antwoord":"Altijd","code":6}}},
    "72036":{
        "questionnaire":"followup",
        "question":"Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
        "questioncode":"CPAQ1",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72037":{"antwoord":"Nooit","code":0},"72038":{"antwoord":"Zeer zelden","code":1},"72039":{"antwoord":"Zelden","code":2},"72040":{"antwoord":"Soms","code":3},"72041":{"antwoord":"Dikwijls","code":4},"72042":{"antwoord":"Bijna altijd","code":5},"72043":{"antwoord":"Altijd","code":6}}},
    "72048":{
        "questionnaire":"followup",
        "question":"Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
        "questioncode":"FABQ11_W",
        "subquestionnaire":"FABQ",
        "coding":{"72049":{"antwoord":"Geheel oneens","code":0},"72050":{"antwoord":"Tamelijk oneens","code":1},"72051":{"antwoord":"Enigszins oneens","code":2},"72052":{"antwoord":"Weet het niet","code":3},"72053":{"antwoord":"Enigszins eens","code":4},"72054":{"antwoord":"Tamelijk eens","code":5},"72055":{"antwoord":"Geheel eens","code":6}}},
    "72057":{
        "questionnaire":"followup",
        "question":"Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
        "questioncode":"FABQ10_W",
        "subquestionnaire":"FABQ",
        "coding":{"72058":{"antwoord":"Geheel oneens","code":0},"72059":{"antwoord":"Tamelijk oneens","code":1},"72060":{"antwoord":"Enigszins oneens","code":2},"72061":{"antwoord":"Weet het niet","code":3},"72062":{"antwoord":"Enigszins eens","code":4},"72063":{"antwoord":"Tamelijk eens","code":5},"72064":{"antwoord":"Geheel eens","code":6}}},
    "72066":{
        "questionnaire":"followup",
        "question":"Door mijn werk is de pijn erger geworden",
        "questioncode":"FABQ6_W",
        "subquestionnaire":"FABQ",
        "coding":{"72067":{"antwoord":"Geheel oneens","code":0},"72068":{"antwoord":"Tamelijk oneens","code":1},"72069":{"antwoord":"Enigszins oneens","code":2},"72070":{"antwoord":"Weet het niet","code":3},"72071":{"antwoord":"Enigszins eens","code":4},"72072":{"antwoord":"Tamelijk eens","code":5},"72073":{"antwoord":"Geheel eens","code":6}}},
    "72075":{
        "questionnaire":"followup",
        "question":"De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
        "questioncode":"FABQ5_W",
        "subquestionnaire":"FABQ",
        "coding":{"72076":{"antwoord":"Geheel oneens","code":0},"72077":{"antwoord":"Tamelijk oneens","code":1},"72078":{"antwoord":"Enigszins oneens","code":2},"72079":{"antwoord":"Weet het niet","code":3},"72080":{"antwoord":"Enigszins eens","code":4},"72081":{"antwoord":"Tamelijk eens","code":5},"72082":{"antwoord":"Geheel eens","code":6}}},
    "72084":{
        "questionnaire":"followup",
        "question":"Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
        "questioncode":"MHI5",
        "subquestionnaire":"MHI-5",
        "coding":{"72085":{"antwoord":"Altijd","code":1},"72086":{"antwoord":"Meestal","code":2},"72087":{"antwoord":"Vaak","code":3},"72088":{"antwoord":"Soms","code":4},"72089":{"antwoord":"Zelden","code":5},"72090":{"antwoord":"Nooit","code":6}}},
    "72091":{
        "questionnaire":"followup",
        "question":"Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
        "questioncode":"MHI4",
        "subquestionnaire":"MHI-5",
        "coding":{"72092":{"antwoord":"Altijd","code":1},"72093":{"antwoord":"Meestal","code":2},"72094":{"antwoord":"Vaak","code":3},"72095":{"antwoord":"Soms","code":4},"72096":{"antwoord":"Zelden","code":5},"72097":{"antwoord":"Nooit","code":6}}},
    "72098":{
        "questionnaire":"followup",
        "question":"Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
        "questioncode":"MHI3",
        "subquestionnaire":"MHI-5",
        "coding":{"72099":{"antwoord":"Altijd","code":1},"72100":{"antwoord":"Meestal","code":2},"72101":{"antwoord":"Vaak","code":3},"72102":{"antwoord":"Soms","code":4},"72103":{"antwoord":"Zelden","code":5},"72104":{"antwoord":"Nooit","code":6}}},
    "72105":{
        "questionnaire":"followup",
        "question":"Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
        "questioncode":"MHI2",
        "subquestionnaire":"MHI-5",
        "coding":{"72106":{"antwoord":"Altijd","code":1},"72107":{"antwoord":"Meestal","code":2},"72108":{"antwoord":"Vaak","code":3},"72109":{"antwoord":"Soms","code":4},"72110":{"antwoord":"Zelden","code":5},"72111":{"antwoord":"Nooit","code":6}}},
    "72112":{
        "questionnaire":"followup",
        "question":"Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
        "questioncode":"MHI1",
        "subquestionnaire":"MHI-5",
        "coding":{"72113":{"antwoord":"Altijd","code":1},"72114":{"antwoord":"Meestal","code":2},"72115":{"antwoord":"Vaak","code":3},"72116":{"antwoord":"Soms","code":4},"72117":{"antwoord":"Zelden","code":5},"72118":{"antwoord":"Nooit","code":6}}},
    "72121":{
        "questionnaire":"followup",
        "question":"Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen? ",
        "questioncode":"WAS",
        "subquestionnaire":"WAS",
        "coding":{"72122":{"antwoord":"Helemaal niet in staat om te werken","code":0},"72123":{"antwoord":"1","code":1},"72124":{"antwoord":"2","code":2},"72125":{"antwoord":"3","code":3},"72126":{"antwoord":"4","code":4},"72127":{"antwoord":"5","code":5},"72128":{"antwoord":"6","code":6},"72129":{"antwoord":"7","code":7},"72130":{"antwoord":"8","code":8},"72131":{"antwoord":"9","code":9},"72132":{"antwoord":"Optimaal werkvermogen","code":10}}},
    "72139":{
        "questionnaire":"baseline",
        "question":"Hoelang heb je jouw nek- of schouderklachten al?",
        "questioncode":"K_ns",
        "subquestionnaire":"K_ns",
        "coding":{"72140":{"antwoord":"Minder dan 1 week","code":1},"72141":{"antwoord":"1-6 weken","code":2},"72142":{"antwoord":"6-12 weken","code":3},"72143":{"antwoord":"3-6 maanden","code":4},"72144":{"antwoord":"6-12 maanden","code":5},"72145":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72147":{
        "questionnaire":"baseline",
        "question":"Hoelang heb je jouw rugklachten al?",
        "questioncode":"K_rug",
        "subquestionnaire":"K_rug",
        "coding":{"72148":{"antwoord":"Minder dan 1 week","code":1},"72149":{"antwoord":"1-6 weken","code":2},"72150":{"antwoord":"6-12 weken","code":3},"72151":{"antwoord":"3-6 maanden","code":4},"72152":{"antwoord":"6-12 maanden","code":5},"72153":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72155":{
        "questionnaire":"baseline",
        "question":"Hoelang heb je jouw elleboog- of pols/handklachten al?",
        "questioncode":"K_eph",
        "subquestionnaire":"K_eph",
        "coding":{"72156":{"antwoord":"Minder dan 1 week","code":1},"72157":{"antwoord":"1-6 weken","code":2},"72158":{"antwoord":"6-12 weken","code":3},"72159":{"antwoord":"3-6 maanden","code":4},"72160":{"antwoord":"6-12 maanden","code":5},"72161":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72163":{
        "questionnaire":"baseline",
        "question":"Hoelang heb je jouw heup-, knie- of enkel/voetklachten al?",
        "questioncode":"K_hkev",
        "subquestionnaire":"K_hkev",
        "coding":{"72164":{"antwoord":"Minder dan 1 week","code":1},"72165":{"antwoord":"1-6 weken","code":2},"72166":{"antwoord":"6-12 weken","code":3},"72167":{"antwoord":"3-6 maanden","code":4},"72168":{"antwoord":"6-12 maanden","code":5},"72169":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72171":{
        "question":"Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw nek- of schouderklachten?","questionnaire":"baseline","code":"",
        "coding":{"72140":{"antwoord":"Minder dan 1 week","code":1},"72141":{"antwoord":"1-6 weken","code":2},"72142":{"antwoord":"6-12 weken","code":3},"72143":{"antwoord":"3-6 maanden","code":4},"72144":{"antwoord":"6-12 maanden","code":5},"72145":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72179":{
        "question":"Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw rugklachten?","questionnaire":"baseline","code":"",
        "coding":{"72148":{"antwoord":"Minder dan 1 week","code":1},"72149":{"antwoord":"1-6 weken","code":2},"72150":{"antwoord":"6-12 weken","code":3},"72151":{"antwoord":"3-6 maanden","code":4},"72152":{"antwoord":"6-12 maanden","code":5},"72153":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72187":{
        "question":"Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw elleboog- of pols/handklachten?","questionnaire":"baseline","code":"",
        "coding":{"72156":{"antwoord":"Minder dan 1 week","code":1},"72157":{"antwoord":"1-6 weken","code":2},"72158":{"antwoord":"6-12 weken","code":3},"72159":{"antwoord":"3-6 maanden","code":4},"72160":{"antwoord":"6-12 maanden","code":5},"72161":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72195":{
        "question":"Hoeveel dagen ben je de afgelopen 12 maanden afwezig geweest omwille van jouw heup-, knie- of enkel/voetklachten?","questionnaire":"baseline","code":"",
        "coding":{"72164":{"antwoord":"Minder dan 1 week","code":1},"72165":{"antwoord":"1-6 weken","code":2},"72166":{"antwoord":"6-12 weken","code":3},"72167":{"antwoord":"3-6 maanden","code":4},"72168":{"antwoord":"6-12 maanden","code":5},"72169":{"antwoord":"langer dan 1 jaar","code":6}}},
    "72203":{
        "questionnaire":"baseline",
        "question":"Heb je de afgelopen 7 dagen last (pijn/ongemak) gehad aan jouw… (Je kan meerdere antwoorden aanduiden)",
        "questioncode":"K",
        "subquestionnaire":"K",
        "coding":{"72204":{"antwoord":"Nek","code":""},"72205":{"antwoord":"Rug","code":""},"72206":{"antwoord":"Schouder","code":""},"72207":{"antwoord":"Elleboog","code":""},"72208":{"antwoord":"Pols/hand","code":""},"72209":{"antwoord":"Heup","code":""},"72210":{"antwoord":"Knie","code":""},"72211":{"antwoord":"Enkel/voet","code":""},"72212":{"antwoord":"Nergens","code":""}}},
    "72215":{
        "questionnaire":"baseline",
        "question":"Hoe zou je over het algemeen jouw gezondheid noemen?",
        "questioncode":"SF",
        "subquestionnaire":"SF",
        "coding":{"72216":{"antwoord":"Uitstekend","code":1},"72217":{"antwoord":"Zeer goed","code":2},"72218":{"antwoord":"Goed","code":3},"72219":{"antwoord":"Matig","code":4},"72220":{"antwoord":"Slecht","code":5}}},
    "72221":{
        "questionnaire":"baseline",
        "question":"Als jij er van uit gaat dat jouw optimaal werkvermogen een waarde heeft van 10 punten. Hoeveel punten zou je dan geven aan je huidig werkvermogen?",
        "questioncode":"WAS",
        "subquestionnaire":"WAS",
        "coding":{"72222":{"antwoord":"Helemaal niet in staat om te werken","code":0},"72223":{"antwoord":"1","code":1},"72224":{"antwoord":"2","code":2},"72225":{"antwoord":"3","code":3},"72226":{"antwoord":"4","code":4},"72227":{"antwoord":"5","code":5},"72228":{"antwoord":"6","code":6},"72229":{"antwoord":"7","code":7},"72230":{"antwoord":"8","code":8},"72231":{"antwoord":"9","code":9},"72232":{"antwoord":"Optimaal werkvermogen","code":10}}},
    "72233":{
        "questionnaire":"baseline",
        "question":"Hoe vaak gedurende de afgelopen 6 weken was je een gelukkig mens?",
        "questioncode":"MHI5",
        "subquestionnaire":"MHI-5",
        "coding":{"72234":{"antwoord":"Altijd","code":1},"72235":{"antwoord":"Meestal","code":2},"72236":{"antwoord":"Vaak","code":3},"72237":{"antwoord":"Soms","code":4},"72238":{"antwoord":"Zelden","code":5},"72239":{"antwoord":"Nooit","code":6}}},
    "72240":{
        "questionnaire":"baseline",
        "question":"Hoe vaak gedurende de afgelopen 6 weken voelde je je somber en neerslachtig?",
        "questioncode":"MHI4",
        "subquestionnaire":"MHI-5",
        "coding":{"72241":{"antwoord":"Altijd","code":1},"72242":{"antwoord":"Meestal","code":2},"72243":{"antwoord":"Vaak","code":3},"72244":{"antwoord":"Soms","code":4},"72245":{"antwoord":"Zelden","code":5},"72246":{"antwoord":"Nooit","code":6}}},
    "72247":{
        "questionnaire":"baseline",
        "question":"Hoe vaak gedurende de afgelopen 6 weken voelde je je rustig en tevreden?",
        "questioncode":"MHI3",
        "subquestionnaire":"MHI-5",
        "coding":{"72248":{"antwoord":"Altijd","code":1},"72249":{"antwoord":"Meestal","code":2},"72250":{"antwoord":"Vaak","code":3},"72251":{"antwoord":"Soms","code":4},"72252":{"antwoord":"Zelden","code":5},"72253":{"antwoord":"Nooit","code":6}}},
    "72254":{
        "questionnaire":"baseline",
        "question":"Hoe vaak gedurende de afgelopen 6 weken zat je zo in de put dat niets je kon opvrolijken?",
        "questioncode":"MHI2",
        "subquestionnaire":"MHI-5",
        "coding":{"72255":{"antwoord":"Altijd","code":1},"72256":{"antwoord":"Meestal","code":2},"72257":{"antwoord":"Vaak","code":3},"72258":{"antwoord":"Soms","code":4},"72259":{"antwoord":"Zelden","code":5},"72260":{"antwoord":"Nooit","code":6}}},
    "72261":{
        "questionnaire":"baseline",
        "question":"Hoe vaak gedurende de afgelopen 6 weken was je erg zenuwachtig?",
        "questioncode":"MHI1",
        "subquestionnaire":"MHI-5",
        "coding":{"72262":{"antwoord":"Altijd","code":1},"72263":{"antwoord":"Meestal","code":2},"72264":{"antwoord":"Vaak","code":3},"72265":{"antwoord":"Soms","code":4},"72266":{"antwoord":"Zelden","code":5},"72267":{"antwoord":"Nooit","code":6}}},
    "72272":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, vraag ik mij voortdurend af of de pijn wel zal ophouden",
        "questioncode":"PCS1",
        "subquestionnaire":"PCS",
        "coding":{"72273":{"antwoord":"Helemaal niet","code":0},"72274":{"antwoord":"In lichte mate","code":1},"72275":{"antwoord":"In zekere mate","code":2},"72276":{"antwoord":"In grote mate","code":3},"72277":{"antwoord":"Altijd","code":4}}},
    "72278":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, voel ik dat het zo niet verder kan",
        "questioncode":"PCS2",
        "subquestionnaire":"PCS",
        "coding":{"72279":{"antwoord":"Helemaal niet","code":0},"72280":{"antwoord":"In lichte mate","code":1},"72281":{"antwoord":"In zekere mate","code":2},"72282":{"antwoord":"In grote mate","code":3},"72283":{"antwoord":"Altijd","code":4}}},
    "72284":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, is dat verschrikkelijk en denk ik dat het nooit beter zal worden",
        "questioncode":"PCS3",
        "subquestionnaire":"PCS",
        "coding":{"72285":{"antwoord":"Helemaal niet","code":0},"72286":{"antwoord":"In lichte mate","code":1},"72287":{"antwoord":"In zekere mate","code":2},"72288":{"antwoord":"In grote mate","code":3},"72289":{"antwoord":"Altijd","code":4}}},
    "72290":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, is dat afschuwelijk en voel ik dat de pijn mij overweldigt",
        "questioncode":"PCS4",
        "subquestionnaire":"PCS",
        "coding":{"72291":{"antwoord":"Helemaal niet","code":0},"72292":{"antwoord":"In lichte mate","code":1},"72293":{"antwoord":"In zekere mate","code":2},"72294":{"antwoord":"In grote mate","code":3},"72295":{"antwoord":"Altijd","code":4}}},
    "72296":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, voel ik dat ik het niet meer uithoud",
        "questioncode":"PCS5",
        "subquestionnaire":"PCS",
        "coding":{"72297":{"antwoord":"Helemaal niet","code":0},"72298":{"antwoord":"In lichte mate","code":1},"72299":{"antwoord":"In zekere mate","code":2},"72300":{"antwoord":"In grote mate","code":3},"72301":{"antwoord":"Altijd","code":4}}},
    "72302":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, word ik bang dat de pijn erger zal worden",
        "questioncode":"PCS6",
        "subquestionnaire":"PCS",
        "coding":{"72303":{"antwoord":"Helemaal niet","code":0},"72304":{"antwoord":"In lichte mate","code":1},"72305":{"antwoord":"In zekere mate","code":2},"72306":{"antwoord":"In grote mate","code":3},"72307":{"antwoord":"Altijd","code":4}}},
    "72308":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, blijf ik denken aan andere pijnlijke gebeurtenissen",
        "questioncode":"PCS7",
        "subquestionnaire":"PCS",
        "coding":{"72309":{"antwoord":"Helemaal niet","code":0},"72310":{"antwoord":"In lichte mate","code":1},"72311":{"antwoord":"In zekere mate","code":2},"72312":{"antwoord":"In grote mate","code":3},"72313":{"antwoord":"Altijd","code":4}}},
    "72314":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, verlang ik hevig dat de pijn weggaat",
        "questioncode":"PCS8",
        "subquestionnaire":"PCS",
        "coding":{"72315":{"antwoord":"Helemaal niet","code":0},"72316":{"antwoord":"In lichte mate","code":1},"72317":{"antwoord":"In zekere mate","code":2},"72318":{"antwoord":"In grote mate","code":3},"72319":{"antwoord":"Altijd","code":4}}},
    "72320":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, kan ik de pijn niet uit mijn gedachten zetten",
        "questioncode":"PCS9",
        "subquestionnaire":"PCS",
        "coding":{"72321":{"antwoord":"Helemaal niet","code":0},"72322":{"antwoord":"In lichte mate","code":1},"72323":{"antwoord":"In zekere mate","code":2},"72324":{"antwoord":"In grote mate","code":3},"72325":{"antwoord":"Altijd","code":4}}},
    "72326":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, blijf ik eraan denken hoeveel pijn het wel doet",
        "questioncode":"PCS10",
        "subquestionnaire":"PCS",
        "coding":{"72327":{"antwoord":"Helemaal niet","code":0},"72328":{"antwoord":"In lichte mate","code":1},"72329":{"antwoord":"In zekere mate","code":2},"72330":{"antwoord":"In grote mate","code":3},"72331":{"antwoord":"Altijd","code":4}}},
    "72332":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, blijf ik denken hoe graag ik zou willen dat de pijn  ophoudt",
        "questioncode":"PCS11",
        "subquestionnaire":"PCS",
        "coding":{"72333":{"antwoord":"Helemaal niet","code":0},"72334":{"antwoord":"In lichte mate","code":1},"72335":{"antwoord":"In zekere mate","code":2},"72336":{"antwoord":"In grote mate","code":3},"72337":{"antwoord":"Altijd","code":4}}},
    "72338":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, is er niets dat ik kan doen om de intensiteit van de te verminderen",
        "questioncode":"PCS12",
        "subquestionnaire":"PCS",
        "coding":{"72339":{"antwoord":"Helemaal niet","code":0},"72340":{"antwoord":"In lichte mate","code":1},"72341":{"antwoord":"In zekere mate","code":2},"72342":{"antwoord":"In grote mate","code":3},"72343":{"antwoord":"Altijd","code":4}}},
    "72344":{
        "questionnaire":"baseline",
        "question":"Als ik pijn heb, vraag ik me af of er iets ernstig kan gebeuren",
        "questioncode":"PCS13",
        "subquestionnaire":"PCS",
        "coding":{"72345":{"antwoord":"Helemaal niet","code":0},"72346":{"antwoord":"In lichte mate","code":1},"72347":{"antwoord":"In zekere mate","code":2},"72348":{"antwoord":"In grote mate","code":3},"72349":{"antwoord":"Altijd","code":4}}},
    "72353":{
        "questionnaire":"baseline",
        "question":"Lichamelijke activiteit verergert de pijn",
        "questioncode":"FABQ1_A",
        "subquestionnaire":"FABQ",
        "coding":{"72354":{"antwoord":"Geheel oneens","code":0},"72355":{"antwoord":"Tamelijk oneens","code":1},"72356":{"antwoord":"Enigszins oneens","code":2},"72357":{"antwoord":"Weet het niet","code":3},"72358":{"antwoord":"Enigszins eens","code":4},"72359":{"antwoord":"Tamelijk eens","code":5},"72360":{"antwoord":"Geheel eens","code":6}}},
    "72362":{
        "questionnaire":"baseline",
        "question":"Lichamelijke activiteit zou mijn (rug)pijn kunnen schaden",
        "questioncode":"FABQ2_A",
        "subquestionnaire":"FABQ",
        "coding":{"72363":{"antwoord":"Geheel oneens","code":0},"72364":{"antwoord":"Tamelijk oneens","code":1},"72365":{"antwoord":"Enigszins oneens","code":2},"72366":{"antwoord":"Weet het niet","code":3},"72367":{"antwoord":"Enigszins eens","code":4},"72368":{"antwoord":"Tamelijk eens","code":5},"72369":{"antwoord":"Geheel eens","code":6}}},
    "72371":{
        "questionnaire":"baseline",
        "question":"Ik zou geen lichamelijke activiteiten moeten uitvoeren die de pijn (kunnen) verergeren",
        "questioncode":"FABQ3_A",
        "subquestionnaire":"FABQ",
        "coding":{"72372":{"antwoord":"Geheel oneens","code":0},"72373":{"antwoord":"Tamelijk oneens","code":1},"72374":{"antwoord":"Enigszins oneens","code":2},"72375":{"antwoord":"Weet het niet","code":3},"72376":{"antwoord":"Enigszins eens","code":4},"72377":{"antwoord":"Tamelijk eens","code":5},"72378":{"antwoord":"Geheel eens","code":6}}},
    "72380":{
        "questionnaire":"baseline",
        "question":"Ik kan geen lichamelijke activiteiten uitvoeren die de pijn (kunnen) verergeren",
        "questioncode":"FABQ4_A",
        "subquestionnaire":"FABQ",
        "coding":{"72381":{"antwoord":"Geheel oneens","code":0},"72382":{"antwoord":"Tamelijk oneens","code":1},"72383":{"antwoord":"Enigszins oneens","code":2},"72384":{"antwoord":"Weet het niet","code":3},"72385":{"antwoord":"Enigszins eens","code":4},"72386":{"antwoord":"Tamelijk eens","code":5},"72387":{"antwoord":"Geheel eens","code":6}}},
    "72389":{
        "questionnaire":"baseline",
        "question":"De pijn is ontstaan door mijn werk of door een ongeval tijdens mijn werk",
        "questioncode":"FABQ5_W",
        "subquestionnaire":"FABQ",
        "coding":{"72390":{"antwoord":"Geheel oneens","code":0},"72391":{"antwoord":"Tamelijk oneens","code":1},"72392":{"antwoord":"Enigszins oneens","code":2},"72393":{"antwoord":"Weet het niet","code":3},"72394":{"antwoord":"Enigszins eens","code":4},"72395":{"antwoord":"Tamelijk eens","code":5},"72396":{"antwoord":"Geheel eens","code":6}}},
    "72398":{
        "questionnaire":"baseline",
        "question":"Door mijn werk is de pijn erger geworden",
        "questioncode":"FABQ6_W",
        "subquestionnaire":"FABQ",
        "coding":{"72399":{"antwoord":"Geheel oneens","code":0},"72400":{"antwoord":"Tamelijk oneens","code":1},"72401":{"antwoord":"Enigszins oneens","code":2},"72402":{"antwoord":"Weet het niet","code":3},"72403":{"antwoord":"Enigszins eens","code":4},"72404":{"antwoord":"Tamelijk eens","code":5},"72405":{"antwoord":"Geheel eens","code":6}}},
    "72407":{
        "questionnaire":"baseline",
        "question":"Mijn werk is te zwaar voor mij",
        "questioncode":"FABQ7_W",
        "subquestionnaire":"FABQ",
        "coding":{"72408":{"antwoord":"Geheel oneens","code":0},"72409":{"antwoord":"Tamelijk oneens","code":1},"72410":{"antwoord":"Enigszins oneens","code":2},"72411":{"antwoord":"Weet het niet","code":3},"72412":{"antwoord":"Enigszins eens","code":4},"72413":{"antwoord":"Tamelijk eens","code":5},"72414":{"antwoord":"Geheel eens","code":6}}},
    "72416":{
        "questionnaire":"baseline",
        "question":"Mijn werk verergert de pijn (of zou dat kunnen verergeren)",
        "questioncode":"FABQ8_W",
        "subquestionnaire":"FABQ",
        "coding":{"72417":{"antwoord":"Geheel oneens","code":0},"72418":{"antwoord":"Tamelijk oneens","code":1},"72419":{"antwoord":"Enigszins oneens","code":2},"72420":{"antwoord":"Weet het niet","code":3},"72421":{"antwoord":"Enigszins eens","code":4},"72422":{"antwoord":"Tamelijk eens","code":5},"72423":{"antwoord":"Geheel eens","code":6}}},
    "72425":{
        "questionnaire":"baseline",
        "question":"Mijn werk zou mijn lichaam kunnen schaden",
        "questioncode":"FABQ9_W",
        "subquestionnaire":"FABQ",
        "coding":{"72426":{"antwoord":"Geheel oneens","code":0},"72427":{"antwoord":"Tamelijk oneens","code":1},"72428":{"antwoord":"Enigszins oneens","code":2},"72429":{"antwoord":"Weet het niet","code":3},"72430":{"antwoord":"Enigszins eens","code":4},"72431":{"antwoord":"Tamelijk eens","code":5},"72432":{"antwoord":"Geheel eens","code":6}}},
    "72434":{
        "questionnaire":"baseline",
        "question":"Ik zou mijn normale werk niet moeten doen met mijn huidige pijn",
        "questioncode":"FABQ10_W",
        "subquestionnaire":"FABQ",
        "coding":{"72435":{"antwoord":"Geheel oneens","code":0},"72436":{"antwoord":"Tamelijk oneens","code":1},"72437":{"antwoord":"Enigszins oneens","code":2},"72438":{"antwoord":"Weet het niet","code":3},"72439":{"antwoord":"Enigszins eens","code":4},"72440":{"antwoord":"Tamelijk eens","code":5},"72441":{"antwoord":"Geheel eens","code":6}}},
    "72443":{
        "questionnaire":"baseline",
        "question":"Ik denk niet dat ik mijn normale werk binnen 3 maanden zal hervatten",
        "questioncode":"FABQ11_W",
        "subquestionnaire":"FABQ",
        "coding":{"72444":{"antwoord":"Geheel oneens","code":0},"72445":{"antwoord":"Tamelijk oneens","code":1},"72446":{"antwoord":"Enigszins oneens","code":2},"72447":{"antwoord":"Weet het niet","code":3},"72448":{"antwoord":"Enigszins eens","code":4},"72449":{"antwoord":"Tamelijk eens","code":5},"72450":{"antwoord":"Geheel eens","code":6}}},
    "72452":{
        "questionnaire":"baseline",
        "question":"Ik maak mij echt zorgen over wat pijn zal aanrichten in mijn leven.",
        "questioncode":"CPAQ8",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"72453":{"antwoord":"Nooit","code":0},"72454":{"antwoord":"Zeer zelden","code":1},"72455":{"antwoord":"Zelden","code":2},"72456":{"antwoord":"Soms","code":3},"72457":{"antwoord":"Dikwijls","code":4},"72458":{"antwoord":"Bijna altijd","code":5},"72459":{"antwoord":"Altijd","code":6}}},
    "72461":{
        "questionnaire":"baseline",
        "question":"Ik vermijd situaties die mijn pijn verergeren.",
        "questioncode":"CPAQ7",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"72462":{"antwoord":"Nooit","code":0},"72463":{"antwoord":"Zeer zelden","code":1},"72464":{"antwoord":"Zelden","code":2},"72465":{"antwoord":"Soms","code":3},"72466":{"antwoord":"Dikwijls","code":4},"72467":{"antwoord":"Bijna altijd","code":5},"72468":{"antwoord":"Altijd","code":6}}},
    "72470":{
        "questionnaire":"baseline",
        "question":"Voor ik grote plannen maak, moet de pijn eerst iets minder worden.",
        "questioncode":"CPAQ6",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"72471":{"antwoord":"Nooit","code":0},"72472":{"antwoord":"Zeer zelden","code":1},"72473":{"antwoord":"Zelden","code":2},"72474":{"antwoord":"Soms","code":3},"72475":{"antwoord":"Dikwijls","code":4},"72476":{"antwoord":"Bijna altijd","code":5},"72477":{"antwoord":"Altijd","code":6}}},
    "72479":{
        "questionnaire":"baseline",
        "question":"Als ik ergens aan begin, dan zorg ik ervoor dat de pijn niet zal toenemen.",
        "questioncode":"CPAQ5",
        "subquestionnaire":"CPAQ_PW",
        "coding":{"72480":{"antwoord":"Nooit","code":0},"72481":{"antwoord":"Zeer zelden","code":1},"72482":{"antwoord":"Zelden","code":2},"72483":{"antwoord":"Soms","code":3},"72484":{"antwoord":"Dikwijls","code":4},"72485":{"antwoord":"Bijna altijd","code":5},"72486":{"antwoord":"Altijd","code":6}}},
    "72488":{
        "questionnaire":"baseline",
        "question":"Ook al wordt de pijn erger als ik iets onderneem, ik blijf de dingen doen die ik mij heb voorgenomen.",
        "questioncode":"CPAQ4",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72489":{"antwoord":"Nooit","code":0},"72490":{"antwoord":"Zeer zelden","code":1},"72491":{"antwoord":"Zelden","code":2},"72492":{"antwoord":"Soms","code":3},"72493":{"antwoord":"Dikwijls","code":4},"72494":{"antwoord":"Bijna altijd","code":5},"72495":{"antwoord":"Altijd","code":6}}},
    "72497":{
        "questionnaire":"baseline",
        "question":"Ik leid een volwaardig leven ook al heb ik chronische pijn.",
        "questioncode":"CPAQ3",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72498":{"antwoord":"Nooit","code":0},"72499":{"antwoord":"Zeer zelden","code":1},"72500":{"antwoord":"Zelden","code":2},"72501":{"antwoord":"Soms","code":3},"72502":{"antwoord":"Dikwijls","code":4},"72503":{"antwoord":"Bijna altijd","code":5},"72504":{"antwoord":"Altijd","code":6}}},
    "72506":{
        "questionnaire":"baseline",
        "question":"Hoewel sommige zaken veranderd zijn, heb ik ondanks de pijn een normaal leven.",
        "questioncode":"CPAQ2",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72507":{"antwoord":"Nooit","code":0},"72508":{"antwoord":"Zeer zelden","code":1},"72509":{"antwoord":"Zelden","code":2},"72510":{"antwoord":"Soms","code":3},"72511":{"antwoord":"Dikwijls","code":4},"72512":{"antwoord":"Bijna altijd","code":5},"72513":{"antwoord":"Altijd","code":6}}},
    "72515":{
        "questionnaire":"baseline",
        "question":"Ik ga gewoon verder met mijn leven, hoe erg mijn pijn ook is.",
        "questioncode":"CPAQ1",
        "subquestionnaire":"CPAQ_AE",
        "coding":{"72516":{"antwoord":"Nooit","code":0},"72517":{"antwoord":"Zeer zelden","code":1},"72518":{"antwoord":"Zelden","code":2},"72519":{"antwoord":"Soms","code":3},"72520":{"antwoord":"Dikwijls","code":4},"72521":{"antwoord":"Bijna altijd","code":5},"72522":{"antwoord":"Altijd","code":6}}},
    "72529":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan zware fysieke activiteiten?","questionnaire":"baseline","code":"",
        "coding":{"72533":{"antwoord":"0","code":0},"72534":{"antwoord":"1","code":1},"72535":{"antwoord":"2","code":2},"72536":{"antwoord":"3","code":3},"72537":{"antwoord":"4","code":4},"72538":{"antwoord":"5","code":5},"72539":{"antwoord":"6","code":6},"72540":{"antwoord":"7","code":7}}},
    "72532":{
        "questionnaire":"baseline",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je zware fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals zware lasten dragen, graven, aerobics of snel fietsen?",
        "questioncode":"IPAQ_V1",
        "subquestionnaire":"IPAQ",
        "coding":{"72533":{"antwoord":"0","code":0},"72534":{"antwoord":"1","code":1},"72535":{"antwoord":"2","code":2},"72536":{"antwoord":"3","code":3},"72537":{"antwoord":"4","code":4},"72538":{"antwoord":"5","code":5},"72539":{"antwoord":"6","code":6},"72540":{"antwoord":"7","code":7}}},
    "72541":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan matige fysieke activiteiten?","questionnaire":"baseline","code":"",
        "coding":{"72545":{"antwoord":"0","code":0},"72546":{"antwoord":"1","code":1},"72547":{"antwoord":"2","code":2},"72548":{"antwoord":"3","code":3},"72549":{"antwoord":"4","code":4},"72550":{"antwoord":"5","code":5},"72551":{"antwoord":"6","code":6},"72552":{"antwoord":"7","code":7}}},
    "72544":{
        "questionnaire":"baseline",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je matige fysieke activiteiten (gedurende minstens 10 minuten aan één stuk) gedaan zoals lichte lasten dragen of rustig fietsen?",
        "questioncode":"IPAQ_M1",
        "subquestionnaire":"IPAQ",
        "coding":{"72545":{"antwoord":"0","code":0},"72546":{"antwoord":"1","code":1},"72547":{"antwoord":"2","code":2},"72548":{"antwoord":"3","code":3},"72549":{"antwoord":"4","code":4},"72550":{"antwoord":"5","code":5},"72551":{"antwoord":"6","code":6},"72552":{"antwoord":"7","code":7}}},
    "72553":{"question":"Hoeveel tijd in totaal heb je gewoonlijk op zo'n dag besteed aan wandelen?","questionnaire":"baseline","code":"",
        "coding":{"72557":{"antwoord":"0","code":0},"72558":{"antwoord":"1","code":1},"72559":{"antwoord":"2","code":2},"72560":{"antwoord":"3","code":3},"72561":{"antwoord":"4","code":4},"72562":{"antwoord":"5","code":5},"72563":{"antwoord":"6","code":6},"72564":{"antwoord":"7","code":7}}},
    "72556":{
        "questionnaire":"baseline",
        "question":"Op hoeveel dagen, gedurende de laatste 7 dagen, heb je gewandeld gedurende minstens 10 minuten aan één stuk?",
        "questioncode":"IPAQ_W1",
        "subquestionnaire":"IPAQ",
        "coding":{"72557":{"antwoord":"0","code":0},"72558":{"antwoord":"1","code":1},"72559":{"antwoord":"2","code":2},"72560":{"antwoord":"3","code":3},"72561":{"antwoord":"4","code":4},"72562":{"antwoord":"5","code":5},"72563":{"antwoord":"6","code":6},"72564":{"antwoord":"7","code":7}}},
    "72565":{
        "questionnaire":"baseline",
        "question":"Hoeveel tijd heb je op een weekdag, gedurende de laatste 7 dagen, gespendeerd aan zitten?",
        "questioncode":"IPAQ_Z",
        "subquestionnaire":"IPAQ",
        "coding":{"72566":{"antwoord":"Uren en minuten"}}},
    "72569":{
        "questionnaire":"baseline",
        "question":"Ik ga helemaal op in mijn werk",
        "questioncode":"BEV3",
        "subquestionnaire":"BEV",
        "coding":{"72570":{"antwoord":"Nooit","code":0},"72571":{"antwoord":"Een paar keer per jaar of minder","code":1},"72572":{"antwoord":"Eens per maand of minder","code":2},"72573":{"antwoord":"Een paar keer per maand","code":3},"72574":{"antwoord":"Eens per week","code":4},"72575":{"antwoord":"Een paar keer per week","code":5},"72576":{"antwoord":"Dagelijks","code":6}}},
    "72577":{
        "questionnaire":"baseline",
        "question":"Ik ben enthousiast over mijn baan",
        "questioncode":"BEV2",
        "subquestionnaire":"BEV",
        "coding":{"72578":{"antwoord":"Nooit","code":0},"72579":{"antwoord":"Een paar keer per jaar of minder","code":1},"72580":{"antwoord":"Eens per maand of minder","code":2},"72581":{"antwoord":"Een paar keer per maand","code":3},"72582":{"antwoord":"Eens per week","code":4},"72583":{"antwoord":"Een paar keer per week","code":5},"72584":{"antwoord":"Dagelijks","code":6}}},
    "72585":{
        "questionnaire":"baseline",
        "question":"Op mijn werk bruis ik van energie",
        "questioncode":"BEV1",
        "subquestionnaire":"BEV",
        "coding":{"72586":{"antwoord":"Nooit","code":0},"72587":{"antwoord":"Een paar keer per jaar of minder","code":1},"72588":{"antwoord":"Eens per maand of minder","code":2},"72589":{"antwoord":"Een paar keer per maand","code":3},"72590":{"antwoord":"Eens per week","code":4},"72591":{"antwoord":"Een paar keer per week","code":5},"72592":{"antwoord":"Dagelijks","code":6}}},
    "72593":{
        "questionnaire":"baseline",
        "question":"Ik moet extra hard werken om iets af te krijgen",
        "questioncode":"WD1",
        "coding":{"72594":{"antwoord":"(Bijna) nooit","code":1},"72595":{"antwoord":"Eerder zelden","code":2},"72596":{"antwoord":"Soms","code":3},"72597":{"antwoord":"Regelmatig","code":4},"72598":{"antwoord":"(Bijna) altijd","code":5}}},
    "72599":{
        "questionnaire":"baseline",
        "question":"Ik werk onder tijdsdruk",
        "questioncode":"WD2",
        "coding":{"72600":{"antwoord":"(Bijna) nooit","code":1},"72601":{"antwoord":"Eerder zelden","code":2},"72602":{"antwoord":"Soms","code":3},"72603":{"antwoord":"Regelmatig","code":4},"72604":{"antwoord":"(Bijna) altijd","code":5}}},
    "72605":{
        "questionnaire":"baseline",
        "question":"Ik moet mij haasten",
        "questioncode":"WD3",
        "coding":{"72606":{"antwoord":"(Bijna) nooit","code":1},"72607":{"antwoord":"Eerder zelden","code":2},"72608":{"antwoord":"Soms","code":3},"72609":{"antwoord":"Regelmatig","code":4},"72610":{"antwoord":"(Bijna) altijd","code":5}}},
    "72611":{
        "questionnaire":"baseline",
        "question":"Ik kan mijn eigen werk plannen",
        "questioncode":"AUT1",
        "coding":{"72612":{"antwoord":"(Bijna) nooit","code":1},"72613":{"antwoord":"Eerder zelden","code":2},"72614":{"antwoord":"Soms","code":3},"72615":{"antwoord":"Regelmatig","code":4},"72616":{"antwoord":"(Bijna) altijd","code":5}}},
    "72617":{
        "questionnaire":"baseline",
        "question":"Ik kan mijn werk doen op een manier die ik het beste vind",
        "questioncode":"AUT2",
        "coding":{"72618":{"antwoord":"(Bijna) nooit","code":1},"72619":{"antwoord":"Eerder zelden","code":2},"72620":{"antwoord":"Soms","code":3},"72621":{"antwoord":"Regelmatig","code":4},"72622":{"antwoord":"(Bijna) altijd","code":5}}},
    "72623":{
        "questionnaire":"baseline",
        "question":"Ik kan mijn opdracht zelf kiezen",
        "questioncode":"AUT3",
        "coding":{"72624":{"antwoord":"(Bijna) nooit","code":1},"72625":{"antwoord":"Eerder zelden","code":2},"72626":{"antwoord":"Soms","code":3},"72627":{"antwoord":"Regelmatig","code":4},"72628":{"antwoord":"(Bijna) altijd","code":5}}},
    "72629":{
        "questionnaire":"baseline",
        "question":"Ik kan mijn manier van werken variëren",
        "questioncode":"AUT4",
        "coding":{"72630":{"antwoord":"(Bijna) nooit","code":1},"72631":{"antwoord":"Eerder zelden","code":2},"72632":{"antwoord":"Soms","code":3},"72633":{"antwoord":"Regelmatig","code":4},"72634":{"antwoord":"(Bijna) altijd","code":5}}},
    "72635":{
        "questionnaire":"baseline",
        "question":"Ik kan, als dat nodig is, mijn collega's om hulp vragen",
        "questioncode":"SOC_C1",
        "coding":{"72636":{"antwoord":"(Bijna) nooit","code":1},"72637":{"antwoord":"Eerder zelden","code":2},"72638":{"antwoord":"Soms","code":3},"72639":{"antwoord":"Regelmatig","code":4},"72640":{"antwoord":"(Bijna) altijd","code":5}}},
    "72641":{
        "questionnaire":"baseline",
        "question":"Ik voel me sterk gewaardeerd door mijn collega's",
        "questioncode":"SOC_C2",
        "coding":{"72642":{"antwoord":"(Bijna) nooit","code":1},"72643":{"antwoord":"Eerder zelden","code":2},"72644":{"antwoord":"Soms","code":3},"72645":{"antwoord":"Regelmatig","code":4},"72646":{"antwoord":"(Bijna) altijd","code":5}}},
    "72647":{
        "questionnaire":"baseline",
        "question":"Ik kan, als dat nodig is, mijn directe leidinggevende om hulp vragen",
        "questioncode":"SOC_L1",
        "coding":{"72648":{"antwoord":"(Bijna) nooit","code":1},"72649":{"antwoord":"Eerder zelden","code":2},"72650":{"antwoord":"Soms","code":3},"72651":{"antwoord":"Regelmatig","code":4},"72652":{"antwoord":"(Bijna) altijd","code":5}}},
    "72653":{
        "questionnaire":"baseline",
        "question":"Ik voel me sterk gewaardeerd door mijn directe leidinggevende",
        "questioncode":"SOC_L2",
        "coding":{"72654":{"antwoord":"(Bijna) nooit","code":1},"72655":{"antwoord":"Eerder zelden","code":2},"72656":{"antwoord":"Soms","code":3},"72657":{"antwoord":"Regelmatig","code":4},"72658":{"antwoord":"(Bijna) altijd","code":5}}},
    "72661":{
        "questionnaire":"baseline",
        "question":"De kans dat ik over 3 maanden blijf werken is…",
        "questioncode":"EVV1",
        "subquestionnaire":"EVV",
        "coding":{"72662":{"antwoord":"Erg laag","code":0},"72663":{"antwoord":"Laag","code":1},"72664":{"antwoord":"Neutraal","code":2},"72665":{"antwoord":"Hoog","code":3},"72666":{"antwoord":"Heel hoog","code":4},"1209565":{"antwoord":"Eerder laag","code":5},"1209566":{"antwoord":"Eerder hoog","code":6}}},
    "72667":{
        "questionnaire":"baseline",
        "question":"Ik wil over 3 maanden blijven werken in een betaalde baan",
        "questioncode":"EVV2",
        "subquestionnaire":"EVV",
        "coding":{"72668":{"antwoord":"Helemaal niet akkoord","code":0},"72669":{"antwoord":"Niet akkoord","code":1},"72670":{"antwoord":"Eerder niet akkoord","code":2},"72671":{"antwoord":"Neutraal","code":3},"72672":{"antwoord":"Eerder akkoord","code":4},"72673":{"antwoord":"Akkoord","code":5},"72674":{"antwoord":"Helemaal akkoord","code":6}}},
    "72675":{
        "questionnaire":"baseline",
        "question":"Ik verwacht te blijven werken in een betaalde baan over 3 maanden",
        "questioncode":"EVV3",
        "subquestionnaire":"EVV",
        "coding":{"72676":{"antwoord":"Helemaal niet akkoord","code":0},"72677":{"antwoord":"Niet akkoord","code":1},"72678":{"antwoord":"Eerder niet akkoord","code":2},"72679":{"antwoord":"Neutraal","code":3},"72680":{"antwoord":"Eerder akkoord","code":4},"72681":{"antwoord":"Akkoord","code":5},"72682":{"antwoord":"Helemaal akkoord","code":6}}},
    "72683":{
        "questionnaire":"baseline",
        "question":"Ik ben van plan om over 3 maanden te blijven werken in een betaalde baan",
        "questioncode":"EVV4",
        "subquestionnaire":"EVV",
        "coding":{"72684":{"antwoord":"Helemaal niet akkoord","code":0},"72685":{"antwoord":"Niet akkoord","code":1},"72686":{"antwoord":"Eerder niet akkoord","code":2},"72687":{"antwoord":"Neutraal","code":3},"72688":{"antwoord":"Eerder akkoord","code":4},"72689":{"antwoord":"Akkoord","code":5},"72690":{"antwoord":"Helemaal akkoord","code":6}}},
    "72691":{
        "questionnaire":"baseline",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"72692":{"antwoord":"Goed", "code":1},"72693":{"antwoord":"Slecht", "code":0}}},
    "72694":{
        "questionnaire":"baseline",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"72695":{"antwoord":"Wijs", "code":1},"72696":{"antwoord":"Dom", "code":0}}},
    "72697":{
        "questionnaire":"baseline",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"72698":{"antwoord":"Voordelig", "code":1},"72699":{"antwoord":"Nadelig", "code":0}}},
    "72700":{
        "questionnaire":"baseline",
        "question":"Blijven werken in een betaalde baan over 3 maanden vind ik...",
        "questioncode":"AT4",
        "coding":{"72701":{"antwoord":"Plezierig","code":1},"72702":{"antwoord":"Akelig","code":0}}},
    "72703":{
        "questionnaire":"baseline",
        "question":"De meeste mensen die belangrijk voor me zijn, denken dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"SN1",
        "coding":{"72704":{"antwoord":"Helemaal niet akkoord","code":0},"72705":{"antwoord":"Niet akkoord","code":1},"72706":{"antwoord":"Eerder niet akkoord","code":2},"72707":{"antwoord":"Neutraal","code":3},"72708":{"antwoord":"Eerder akkoord","code":4},"72709":{"antwoord":"Akkoord","code":5},"72710":{"antwoord":"Helemaal akkoord","code":6}}},
    "72711":{
        "questionnaire":"baseline",
        "question":"De meeste mensen die belangrijk voor me zijn, willen dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"SN2",
        "coding":{"72712":{"antwoord":"Helemaal niet akkoord","code":0},"72713":{"antwoord":"Niet akkoord","code":1},"72714":{"antwoord":"Eerder niet akkoord","code":2},"72715":{"antwoord":"Neutraal","code":3},"72716":{"antwoord":"Eerder akkoord","code":4},"72717":{"antwoord":"Akkoord","code":5},"72718":{"antwoord":"Helemaal akkoord","code":6}}},
    "72719":{
        "questionnaire":"baseline",
        "question":"Ik heb er vertrouwen in dat ik over 3 maanden in een betaalde baan blijf werken.",
        "questioncode":"ZEC1",
        "coding":{"72720":{"antwoord":"Helemaal niet akkoord","code":0},"72721":{"antwoord":"Niet akkoord","code":1},"72722":{"antwoord":"Eerder niet akkoord","code":2},"72723":{"antwoord":"Neutraal","code":3},"72724":{"antwoord":"Eerder akkoord","code":4},"72725":{"antwoord":"Akkoord","code":5},"72726":{"antwoord":"Helemaal akkoord","code":6}}},
    "72727":{
        "questionnaire":"baseline",
        "question":"Ik zal geen enkele moeite hebben met blijven werken in een betaalde baan over 3 maanden.",
        "questioncode":"ZEC2",
        "coding":{"72728":{"antwoord":"Helemaal niet akkoord","code":0},"72729":{"antwoord":"Niet akkoord","code":1},"72730":{"antwoord":"Eerder niet akkoord","code":2},"72731":{"antwoord":"Neutraal","code":3},"72732":{"antwoord":"Eerder akkoord","code":4},"72733":{"antwoord":"Akkoord","code":5},"72734":{"antwoord":"Helemaal akkoord","code":6}}},
    "72735":{
        "questionnaire":"baseline",
        "question":"Of ik nu over 3 maanden blijf werken in een betaalde baan, is geheel aan mij.",
        "questioncode":"ZEC3",
        "coding":{"72736":{"antwoord":"Helemaal niet akkoord","code":0},"72737":{"antwoord":"Niet akkoord","code":1},"72738":{"antwoord":"Eerder niet akkoord","code":2},"72739":{"antwoord":"Neutraal","code":3},"72740":{"antwoord":"Eerder akkoord","code":4},"72741":{"antwoord":"Akkoord","code":5},"72742":{"antwoord":"Helemaal akkoord","code":6}}},
    "72743":{
        "questionnaire":"baseline",
        "question":"Blijven werken in een betaalde baan over 3 maanden valt onder mijn controle.",
        "questioncode":"ZEC4",
        "coding":{"72744":{"antwoord":"Helemaal niet akkoord","code":0},"72745":{"antwoord":"Niet akkoord","code":1},"72746":{"antwoord":"Eerder niet akkoord","code":2},"72747":{"antwoord":"Neutraal","code":3},"72748":{"antwoord":"Eerder akkoord","code":4},"72749":{"antwoord":"Akkoord","code":5},"72750":{"antwoord":"Helemaal akkoord","code":6}}}
}


export const fillerQuestionCodesNew = {
	"55625": {
        "questionnaire": "followup",
        "question": "Hierna volgen enkele uitspraken van mensen met pijn. Wil je voor iedere uitspraak aangeven in welke mate jouw normale werk of lichamelijke activiteiten zoals bukken, tillen, lopen en autorijden jouw pijn beïnvloeden.",
        "coding": {"55626":{"antwoord":"Oké","code":""}}},
    
    
	"55691": {
        "questionnaire": "followup",
        "question": "De hierna volgende vragen gaan over de hoeveelheid lichaamsbeweging die je doet in jouw dagelijks leven (zowel op het werk, thuis, in jouw vrije tijd als voor jouw verplaatsingen). Zware fysieke activiteiten verwijzen naar activiteiten die een zware lichamelijke inspanning vereisen en waarbij je veel sneller en dieper ademt dan normaal. Matige fysieke activiteiten verwijzen naar activiteiten die een matige lichamelijke inspanning vereisen en waarbij je iets sneller en dieper ademt dan normaal.",
        "coding": {"55692":{"antwoord":"Oké","code":""}}},
    
    
	"55740": {
        "questionnaire": "followup",
        "question": "De hierna volgende stellingen gaan over situaties in jouw job. Geef aan hoe vaak deze situaties voorkomen.",
        "coding": {"55741":{"antwoord":"Oké","code":""}}},
    
    
	"55832": {
        "questionnaire": "followup",
        "question": "Hierna vind je een aantal stellingen. Duid aan wat voor jou het meest van toepassing is.",
        "coding": {"55833":{"antwoord":"Oké","code":""}}},
    
    
	"72045": {
        "questionnaire": "followup",
        "question": "Hieronder vind je een lijst met uitspraken. Geef voor elke uitspraak aan in hoeverre deze waar en toepasbaar is voor jou.",
        "coding": {"72046":{"antwoord":"Oké","code":""}}},
    
    
	"72119": {
        "questionnaire": "followup",
        "question": "De volgende vragen gaan over hoe je je voelt en hoe het met je ging de afgelopen 6 weken. Kan je bij elke vraag het antwoord geven dat het best benadert hoe je je voelde.",
        "coding": {"72120":{"antwoord":"Oké","code":""}}},
    
    
	"72133": {
		"questionnaire": "followup",
		"question": "De volgende twee vragen gaan over jouw algemene gezondheid en werkvermogen. De term werkvermogen verwijst naar de mate waarin iemand lichamelijk en mentaal in staat is om zijn/haar werk uit te voeren.",
		"coding": {"72134":{"antwoord":"Oké","code":""}}},
    
    
	"72135": {
		"questionnaire": "followup",
		"question": "Welkom bij My Survey, je ervaringen en gedachten van de voorbije 6 weken. Op basis van deze gegevens en de evoluties die je maakt, kunnen we je persoonlijke coaching bieden. Het invullen duurt ongeveer 20 minuten. Je kan de vragenlijst steeds onderbreken en op een later moment verder gaan.",
		"coding": {"72136":{"antwoord":"Oké","code":""}}},
    
    
	"72137": {
        "questionnaire": "baseline",
        "question": "Welkom bij de Health Empower opstart vragenlijst. Hierin peilen we naar je fysieke klachten en je ervaringen hieromtrent. Na het afronden ben je officieel van start gegaan en krijg je iedere 6 weken een nieuwe vragenlijst om de evoluties in kaart te brengen. Het invullen duurt ongeveer 20 minuten. Je kan de vragenlijst steeds onderbreken en op een later moment verder gaan.",
        "coding": {"72138":{"antwoord":"Oké","code":""}}},
    
    
	"72213": {
        "questionnaire": "baseline",
        "question": "De volgende twee vragen gaan over jouw algemene gezondheid en werkvermogen. De term werkvermogen verwijst naar de mate waarin iemand lichamelijk en mentaal in staat is om zijn/haar werk uit te voeren.",
        "coding": {"72214":{"antwoord":"Oké","code":""}}},
    
    
	"72268": {
        "questionnaire": "baseline",
        "question": "De volgende vragen gaan over hoe je je voelt en hoe het met je ging de afgelopen 6 weken. Kan je bij elke vraag het antwoord geven dat het best benadert hoe je je voelde.",
        "coding": {"72269":{"antwoord":"Oké","code":""}}},
    
    
    "72270": {
        "questionnaire": "baseline",
        "question": "Iedereen ervaart wel eens pijn in zijn leven, zoals hoofdpijn, tandpijn, gewrichts- of spierpijn. Mensen komen ook vaak in situaties terecht die pijn veroorzaken, zoals een behandeling bij de tandarts of een chirurgische ingreep. Wij zijn geïnteresseerd in de soort gedachten en gevoelens die jij ervaart als je pijn hebt. Hierna volgen dertien beweringen die verschillende gedachten en gevoelens beschrijven die mogelijk met pijn te maken hebben. Probeer aan te geven in welke mate deze gedachten en gevoelens ook voor jou van toepassing zijn.",
        "coding": {"72271":{"antwoord":"Oké","code":""}}},
    
    
	"72350": {
        "questionnaire": "baseline",
        "question": "Hierna volgen enkele uitspraken van mensen met pijn. Wil je voor iedere uitspraak aangeven in welke mate jouw normale werk of lichamelijke activiteiten zoals bukken, tillen, lopen en autorijden jouw pijn beïnvloeden.",
        "coding": {"72351":{"antwoord":"Oké","code":""}}},
    
    
	"72524": {
        "questionnaire": "baseline",
        "question": "Hieronder vind je een lijst met uitspraken. Geef voor elke uitspraak aan in hoeverre deze waar en toepasbaar is voor jou.",
        "coding": {"72525":{"antwoord":"Oké","code":""}}},
    
    
    "72527": {
        "questionnaire": "baseline",
        "question": "De hierna volgende vragen gaan over de hoeveelheid lichaamsbeweging die je doet in jouw dagelijks leven (zowel op het werk, thuis, in jouw vrije tijd als voor jouw verplaatsingen). Zware fysieke activiteiten verwijzen naar activiteiten die een zware lichamelijke inspanning vereisen en waarbij je veel sneller en dieper ademt dan normaal. Matige fysieke activiteiten verwijzen naar activiteiten die een matige lichamelijke inspanning vereisen en waarbij je iets sneller en dieper ademt dan normaal.",
        "coding": {"72528":{"antwoord":"Oké","code":""}}},
    
    
	"72567": {
        "questionnaire": "baseline",
        "question": "De hierna volgende stellingen gaan over situaties in jouw job. Geef aan hoe vaak deze situaties voorkomen.",
        "coding": {"72568":{"antwoord":"Oké","code":""}}},
    
    
	"72659": {
        "questionnaire": "baseline",
        "question": "Hierna vind je een aantal stellingen. Duid aan wat voor jou het meest van toepassing is.",
        "coding": {"72660":{"antwoord":"Oké","code":""}}},
    
    
	"72965": {
        "questionnaire": "baseline",
        "question": "Goed bezig! Een derde van de vragenlijst zit er al op.",
        "coding": {"72966":{"antwoord":"Oké","code":""}}},
    
    
    "72967": {
        "questionnaire": "baseline",
        "question": "Je bent halfweg de vragenlijst, nog even volhouden!",
        "coding": {"72968":{"antwoord":"Oké","code":""}}},
    
    
    "72969": {
        "questionnaire": "baseline",
        "question": "Je bent er bijna! Er volgen nog twee korte delen die gaan over jouw job.",
        "coding": {"72970":{"antwoord":"Oké","code":""}}},
    
    
    "72971": {
        "questionnaire": "followup",
        "question": "Goed bezig! Een derde van de vragenlijst zit er al op.",
        "coding": {"72972":{"antwoord":"Oké","code":""}}},
    
    
    "72973": {
        "questionnaire": "followup",
        "question": "Je bent halfweg de vragenlijst, nog even volhouden!",
        "coding": {"72974":{"antwoord":"Oké","code":""}}},
    
    
    "72975": {
        "questionnaire": "followup",
        "question": "Je bent er bijna! Er volgen nog twee korte delen die gaan over jouw job.",
        "coding": {"72976":{"antwoord":"Oké","code":""}}},
    
    
	"55545": {
		"questionnaire": "followup",
		"question": "Iedereen ervaart wel eens pijn in zijn leven, zoals hoofdpijn, tandpijn, gewrichts- of spierpijn. Mensen komen ook vaak in situaties terecht die pijn veroorzaken, zoals een behandeling bij de tandarts of een chirurgische ingreep. Wij zijn geïnteresseerd in de soort gedachten en gevoelens die jij ervaart als je pijn hebt. Hierna volgen dertien beweringen die verschillende gedachten en gevoelens beschrijven die mogelijk met pijn te maken hebben. Probeer aan te geven in welke mate deze gedachten en gevoelens ook voor jou van toepassing zijn.",
		"coding": {"55546":{"antwoord":"Oké","code":""}}},
    
    
}

//{"([0-9]*)":{"antwoord":"Ja, minder dan 1 week","code":""},"([0-9]*)":{"antwoord":"Ja, 1-2 weken","code":""},"([0-9]*)":{"antwoord":"Ja, meer dan 2 weken","code":""},"([0-9]*)":{"antwoord":"Neen, nooit","code":""}}}
//{"([0-9]*)":{"antwoord":"Ja, minder dan 1 week","code":""},"([0-9]*)":{"antwoord":"Ja, 1-2 weken","code":""},"([0-9]*)":{"antwoord":"Ja, meer dan 2 weken","code":""},"([0-9]*)":{"antwoord":"Neen, nooit","code":""}}}

// {"([0-9]*)":{"antwoord":"Helemaal niet","code":0},"([0-9]*)":{"antwoord":"In lichte mate","code":1},"([0-9]*)":{"antwoord":"In zekere mate","code":2},"([0-9]*)":{"antwoord":"In grote mate","code":3},"([0-9]*)":{"antwoord":"Altijd","code":""}}
// {"$1":{"antwoord":"Helemaal niet","code":0},"$2":{"antwoord":"In lichte mate","code":1},"$3":{"antwoord":"In zekere mate","code":2},"$4":{"antwoord":"In grote mate","code":3},"$5":{"antwoord":"Altijd","code":4}}