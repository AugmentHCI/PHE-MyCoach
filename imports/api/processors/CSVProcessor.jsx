import moment from "moment";
import * as Moment from "../Moment";


export class CSVProcessor {
 
    constructor(userQuestionnaires) {
        this.userQuestionnaires = userQuestionnaires;
        this.csv = "";
    }

    createHeader = function() {
        let days = this.#getLongestPeriod(), daysWithinPeriod = 0, period = 1;
        this.#appendTemplate("info");
        this.#appendTemplate("profiel");
        this.#appendTemplate("baseline", 0);
        while (days >= 0) {
            if (daysWithinPeriod === 42) {
                this.#appendTemplate("followup", period);
                period++; daysWithinPeriod = 0;
            }
            this.#appendTemplate("daily", daysWithinPeriod);
            days--; daysWithinPeriod ++;
        }
        this.csv += "\n";
        console.log(`Created header with ${this.csv.split(",").length} columns.`);
        return this;
    }

    addAllUsers = function() {
        for (let i = 0; i < this.userQuestionnaires.length; i++) { this.addUser(i); }
        return this;
    }

    addUser = function(userIndex) {
        const userQuestionnaire = this.userQuestionnaires[userIndex];
        /* Do not add empty user or IDEWE employee */
        if (isNaN(userQuestionnaire.info.period) || coachRRNRs.includes(userQuestionnaire.info.rrnr)) return this;
        let days = userQuestionnaire.info.period, daysWithinPeriod = 0, date = userQuestionnaire.info.from;
        this.#appendUserQuestionnaire(userIndex, "info");
        this.#appendUserQuestionnaire(userIndex, "profiel", date);
        this.#appendUserQuestionnaire(userIndex, "baseline", date);
        while (days >= 0) {
            if (daysWithinPeriod === 42) {
                const followupDate = this.#findFollowupDate(userIndex, date);
                this.#appendUserQuestionnaire(userIndex, "followup", followupDate);
                daysWithinPeriod = 0;
            }
            this.#appendUserQuestionnaire(userIndex, "daily", date);
            days--; daysWithinPeriod ++; date = incrementDateByDay(date);
        }
        this.csv += "\n";
        return this;
    }

    createShortHeader = function(type) {
        this.#appendTemplate(type);
        this.csv += "\n";
        return this;
    }

    #appendUserQuestionnaire = function(userIndex, type, date=undefined) {
        if (type === "info") {
            const info = this.userQuestionnaires[userIndex].info;
            this.csv += [info.rrnr, info.user, info.from, info.to, info.period, info.dailiesDone, info.dailiesPercent, info.followupsReceived, info.followupsDone, info.followupsPercent].join(",") + ",";
            return;
        }
        /* Get user questionnaire of correct date */
        const userQuestionnaire = this.userQuestionnaires[userIndex][type][date];
        /* Append answers to csv (or empty fields if no questionnaire found */
        if (!userQuestionnaire) this.csv += ",".repeat(questionCount(type));
        else {
            /* Go over subquestionnaires within template */
            for (const subquestionnaire of Object.keys(templates[type])) {
                /* Go over each individual question within subquestionnaire template */
                for (const question of templates[type][subquestionnaire]) {
                    /* Find users answer to question and append to csv*/
                    if (subquestionnaire === "K" && userQuestionnaire[subquestionnaire]) {
                        const question_codes = question.split("_");
                        let answer = false;
                        userQuestionnaire[subquestionnaire].forEach(K_question => {if (question_codes.includes(K_question.answer)) answer = true;})
                        this.csv += answer ? "1," : "0,";
                    }
                    else if (!userQuestionnaire[subquestionnaire]) {
                        if (["FABQ", "V", "Ch", "CPAQ_AE", "CPAQ_PW"].includes(subquestionnaire)) {this.csv += "0,";}
                        else {
                            this.csv += "*,"; 
                            console.log(`Did not find ${subquestionnaire}`);
                        }
                    }
                    else {
                        switch (subquestionnaire) {
                            case "AU":
                            case "AP":
                                const activityAnswer = userQuestionnaire[subquestionnaire].find(a => a.questioncode + "_" + a.answer === question) ;
                                this.csv += activityAnswer !== undefined ? "1," : "0,";
                                break;
                            default:
                                const answer = userQuestionnaire[subquestionnaire].find(a => a.questioncode === question);
                                if (["V", "Ch", "IPAQ", "K"].includes(subquestionnaire)) this.csv += answer?.answer === undefined ? "0," : answer.answer + ",";
                                else { this.csv += answer?.answer !== undefined ? answer.answer + "," : "*,"; }
                        }
                    }
                }
            }
        }
    }

    #appendTemplate = function(type, suffix=undefined) {
        for (const questionnaire of Object.keys(templates[type])) {
            for (const question of templates[type][questionnaire]) {
                this.csv += (suffix !== undefined ? suffix + "_" : "") + question + ",";
            }
        }
    }

    #getLongestPeriod = function() {
        let maxPeriod = 0;
        this.userQuestionnaires.forEach(user => { 
            if (user.info?.period > maxPeriod && !coachRRNRs.includes(user.info.rrnr)) maxPeriod = user.info.period
        });
        console.log(maxPeriod)
        return maxPeriod;
    }

    #findFollowupDate = function(userIndex, date) {
        const followupDates = Object.keys(this.userQuestionnaires[userIndex].followup);
        for (const followupDate of followupDates) {
            if (Moment.daysBetween(date, followupDate, true, "DD-MM-YYYY") < 7) return followupDate;
        }
    }
}

const templates = {
    info: {
        info:  ["R-Nummer", "DeelnemerId", "Begindatum",  "Laatste datum",  "Aantal dagen", "Aantal dailies", "Procent dailies", "Followups gekregegen", "Followups ingevuld", "Procent followup"] },
    profiel: {
        D:  ["D1",  "D2",  "D3",  "D4",  "D5",  "D6"], 
        WS: ["WS1", "WS2", "WS3", "WS4", "WS5", "WS6"], 
        WF: ["WF1", "WF2", "WF3", "WF4", "WF5", "WF6", "WF7", "WF8", "WF9", "WF10", "WF11"] },
    baseline: {
        K:    ["K_nek", "K_sch", "K_rug", "K_el", "K_ph", "K_heup", "K_knie", "K_ev"],
        Ch:   ["Ch_ns", "Ch_rug", "Ch_eph", "Ch_hkev"], 
        V:    ["V_ns", "V_rug", "V_eph", "V_hkev"], 
        SF:   ["SF"], 
        WAS:  ["WAS"], 
        MHI:  ["MHI1", "MHI2", "MHI3", "MHI4", "MHI5"], 
        PCS:  ["PCS1", "PCS2", "PCS3", "PCS4", "PCS5", "PCS6", "PCS7", "PCS8", "PCS9", "PCS10", "PCS11", "PCS12", "PCS13"], 
        FABQ: ["FABQ1A", "FABQ2A", "FABQ3A", "FABQ4A", "FABQ5W", "FABQ6W", "FABQ7W", "FABQ8W", "FABQ9W", "FABQ10W", "FABQ11W"], 
        CPAQ_AE: ["CPAQ1", "CPAQ2", "CPAQ3", "CPAQ4"], 
        CPAQ_PW: ["CPAQ5", "CPAQ6", "CPAQ7", "CPAQ8"], 
        IPAQ: ["IPAQ_V1", "IPAQ_V2", "IPAQ_M1", "IPAQ_M2", "IPAQ_W1", "IPAQ_W2", "IPAQ_Z"], 
        BEV:  ["BEV1", "BEV2", "BEV3"], 
        WD:   ["WD1", "WD2", "WD3"], 
        AUT:  ["AUT1", "AUT2", "AUT3", "AUT4"], 
        SOC:  ["SOC_C1", "SOC_C2", "SOC_L1", "SOC_L2"], 
        EVV:  ["EVV1", "EVV2", "EVV3", "EVV4"], 
        AT:   ["AT1", "AT2", "AT3", "AT4"], 
        SN:   ["SN1", "SN2"], 
        ZEC:  ["ZEC1", "ZEC2", "ZEC3", "ZEC4"] },
    followup: {
        K:    ["K_nek", "K_sch", "K_rug", "K_el", "K_ph", "K_heup", "K_knie", "K_ev"],
        V:    ["V_ns", "V_rug", "V_eph", "V_hkev"], 
        SF:   ["SF"], 
        WAS:  ["WAS"], 
        MHI: ["MHI1", "MHI2", "MHI3", "MHI4", "MHI5"], 
        PCS:  ["PCS1", "PCS2", "PCS3", "PCS4", "PCS5", "PCS6", "PCS7", "PCS8", "PCS9", "PCS10", "PCS11", "PCS12", "PCS13"], 
        FABQ: ["FABQ1A", "FABQ2A", "FABQ3A", "FABQ4A", "FABQ5W", "FABQ6W", "FABQ7W", "FABQ8W", "FABQ9W", "FABQ10W", "FABQ11W"], 
        CPAQ_AE: ["CPAQ1", "CPAQ2", "CPAQ3", "CPAQ4"], 
        CPAQ_PW: ["CPAQ5", "CPAQ6", "CPAQ7", "CPAQ8"], 
        IPAQ: ["IPAQ_V1", "IPAQ_V2", "IPAQ_M1", "IPAQ_M2", "IPAQ_W1", "IPAQ_W2", "IPAQ_Z"], 
        BEV:  ["BEV1", "BEV2", "BEV3"], 
        WD:   ["WD1", "WD2", "WD3"], 
        AUT:  ["AUT1", "AUT2", "AUT3", "AUT4"], 
        SOC:  ["SOC_C1", "SOC_C2", "SOC_L1", "SOC_L2"], 
        EVV:  ["EVV1", "EVV2", "EVV3", "EVV4"], 
        AT:   ["AT1", "AT2", "AT3", "AT4"], 
        SN:   ["SN1", "SN2"], 
        ZEC:  ["ZEC1", "ZEC2", "ZEC3", "ZEC4"] },
    daily: {
        AE:  ["AE"], 
        AU:  ["AU_huis", "AU_werk", "AU_rel", "AU_tv", "AU_lich", "AU_fam", "AU_leuk", "AU_rust", "AU_ov"], 
        AP:  ["AP_huis", "AP_werk", "AP_rel", "AP_tv", "AP_lich", "AP_fam", "AP_leuk", "AP_rust", "AP_ov"], 
        WB:  ["WB_M", "WB_F"], 
        VAS: ["VAS"], 
        T:   ["T"] },
}

const questionCount = function(type) {
    let count = 0;
    for (const subquestionnaire of Object.keys(templates[type])) {
        count += templates[type][subquestionnaire].length;
    }
    return count;
}


const incrementDateByDay = function(date) {
    return moment(date, "DD-MM-YYYY").add(1, "day").format("DD-MM-YYYY")
}

const coachRRNRs = [1111111, 4862876, 3381097, 4018425, 4799179, 3237616, 4013945, 3475505, 4557583, 2988321, 3604510, 3731886, 3430269, 85508, 91995, 92422];