export default class RuleEngine {
    constructor(rules) {
        this.rules = rules;
    }

    matchRules(inputs) {
        return this.rules
            .filter(rule => this.conditionsMatchInput(rule.conditions, inputs))
            .sort(function(a, b) {return b.priority - a.priority});
    }

    conditionsMatchInput(conditions, inputs) {
        let ruleIsValid = false;
        inputs.forEach( input => {
            let inputMatchesRule = true;
            /* See if all specified conditions apply to the input */
            for (const [level, condition] of Object.entries(conditions)) {
                if (!condition.includes(input[level])) {inputMatchesRule = false;}
            }
            /* If at least one user input matches rule, mark rule as true */
            if (inputMatchesRule) ruleIsValid = true;
        });
        return ruleIsValid;
    }
}