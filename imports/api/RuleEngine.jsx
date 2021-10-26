import { RECOMMENDATIONS } from "./data/PainLogbook";

export default class PainRecommenderSystem {
    constructor(rules) {
        this.rules = rules;
    }

    matchRules(inputs) {
        const scores = {};
        /* Calculate scores */
        for (let input of inputs) {
            if (input?.scores) {
                for (let score of input.scores) {
                    scores[score.recommendation] = scores[score.recommendation] ? scores[score.recommendation] + score.score : score.score;
                }
            }
        }
        /* Sort recommendations, e.g.: [["REC3", 4], ["REC6", 2]] */
        let recommendations = Object.entries(scores).sort(([,score1],[,score2]) => score2-score1);
        /* Filter out positive recommendation if negative recommendations available */
        if (recommendations.length > 1) recommendations = recommendations.filter(rec => rec[0] !== "REC1");
        /* Append order */
        recommendations = recommendations.map(([rec,score], index) => [rec, score, index+1]);
        /* Normalise with maxScore */
        recommendations = recommendations.map(([rec,score, index]) => [rec, score, index, score/RECOMMENDATIONS[rec].maxScore]);
        /* Order by normalised scores */
        recommendations = recommendations.sort(([,,,nScore1],[,,,nScore2]) => nScore2-nScore1);
        /* Sum order and normalised order */
        recommendations = recommendations.map(([rec, score, index, nScore], nIndex) => [rec, score, index, nScore, nIndex+1, index + nIndex+1]);
        /* Order by summed order */
        recommendations = recommendations.sort(([,,,,,sScore1],[,,,,,sScore2]) => sScore1-sScore2);
        /* Calculate bar percentage and drop calculated intermediate values */
        const max = recommendations.reduce((val, [,,,,,index]) => {return Math.max(val, index)}, 0);
        const min = recommendations.reduce((val, [,,,,,index]) => {return Math.min(val, index)}, 1000);
        recommendations = recommendations.map(([rec,,,,,index]) => [rec, index, (max+min-index)/max]);
        /* Sort equal values based on priority */
        recommendations = recommendations.sort(([rec1, index1,], [rec2, index2,]) => {
            if (index1 === index2) return RECOMMENDATIONS[rec2].priority - RECOMMENDATIONS[rec1].priority;
            return index1 - index2;
        });
        /* Normalise scores */
        console.log(recommendations);
        return recommendations;
    }
}