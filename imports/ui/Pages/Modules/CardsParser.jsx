import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import QuestionManager from '../../../api/QuestionManager.jsx';
import ShortcutManager from '../../../api/ShortcutManager.jsx';

import Button from '../../components/Button.jsx';
import Card from '../../components/Card.jsx';
import ContentParser from './ContentParser.jsx';


function CardsParser(props) {

    const userProfile = props.userProfile;
    const questionManager = new QuestionManager(props.userID);
    const shortcutManager = new ShortcutManager(props.userID);
    const [userQuestions, setUserQuestions] = useState(undefined);
    const [userShortcuts, setUserShortcuts] = useState(undefined);

    /**
     * Creates all the Cards HTML in a given array.
     * @param {Array} cards 
     */
    function createCards(cards) {
        let contentsHTML = [];
        if (props.moduleStatus === "COMPLETED_DEMO") {
            generateCards(cards, contentsHTML, "OVERVIEW");
            contentsHTML.push(<hr key={"CARD-DIVIDER"} className="module-hr-line"/>);
            generateCards(cards, contentsHTML, "NONOVERVIEW");
        }
        else {
            generateCards(cards, contentsHTML);
        }
        return contentsHTML;
    }

    function generateCards(cards, contentsHTML, showonly=undefined) {
        let cardIndex = 1;
        for (const card of cards) {
            if (showonly === "OVERVIEW" && !card.overview) continue;
            if (showonly === "NONOVERVIEW" && (card.overview || card.wrapup)) continue;
            if (Object.keys(card).length === 0) continue; /* Empty card */
            if (card.showIfAnswered && !card.showIfAnswered.every(question => Object.keys(userQuestions).includes(question))) {
                if (!card.showIf || (card.showIf && showCard(card.showIf))) {console.log("Case 1 - breaking rendering: " + card.id); break; }
                else if (card.showIf && !showCard(card.showIf)) {console.log("Case 2 - continue rendering: " + card.id); continue; }
                else {console.log("Case 3 - UNHANDLED! "); }
            }
            if (card.showIf && !showCard(card.showIf)) continue;
            if (card.generateFinishSubmoduleButton) {
                contentsHTML.push(<Button 
                    key={"finish-submodule-button"+props.module}
                    style={{marginBottom: "100px"}}
                    color="blue" 
                    center
                    onClick={() => props.finishCallback(props.moduleStatus !== "COMPLETED", card.action)}>
                        {props.moduleStatus === "COMPLETED" ? card.textOnCompleted : card.text}
                </Button>);
                continue;
            }
            const cardID = card.overview ? props.submodule + "_CARD_OVERVIEW" : props.submodule + "_CARD_" + cardIndex++;
            if (card.titleCard) { contentsHTML.push( <Card key={cardID} title={card.title} noTranslate titleCard={true}></Card>); continue; }
            contentsHTML.push(
                <Card key={cardID} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                    {createCardContent(cardID, card.cardContents, card.overview)}
                </Card>);
        }
        return contentsHTML;
    }

    async function updateQuestionsCallback() {
        const questions = await questionManager.getModuleQuestions(props.module);
        setUserQuestions(questions);
    }

    function showCard(rules) {
        for (const rule of rules) {
            /* Only return false if one of the rules is not met */
            switch (rule.rule) {
                case "Profile": 
                    if (rule.profiles.includes(props.userProfile.profile)) return false;
                    break;
                case "SwipeAgreeCount": 
                    let swipeAnswers = userQuestions[rule.questionID];
                    if (!swipeAnswers) return false;
                    swipeAnswers = JSON.parse(swipeAnswers);
                    let count = 0;
                    Object.keys(swipeAnswers).forEach(answer => { if (swipeAnswers[answer]) count++; })
                    if (rule.atLeast && count < rule.atLeast) return false;
                    else if (rule.atMost && count > rule.atMost) return false;
                    else {console.log("SwipeAgreeCount - unhandled case"); break;}
                case "HasSelected": 
                    let swipeAnswersSelection = userQuestions[rule.questionID];
                    if (!swipeAnswersSelection || !JSON.parse(swipeAnswersSelection)[rule.answerID]) return false;
                    break;
                case "HasUnlockedShortcut":
                    if (userShortcuts && userShortcuts.every(shortcut => shortcut.shortcut !== rule.shortcut)) return false;
                    break;
                case "HasNotUnlockedShortcut":
                    if (userShortcuts && userShortcuts.some(shortcut => shortcut.shortcut === rule.shortcut)) return false;
                    break;
                default:
                    console.log(`Card-rule ${rule.rule} not implemented.`);
                    break;
            }
        }
        return true;
    }

    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchQuestionsAndShortcuts() {
            const questions = await questionManager.getModuleQuestions(props.module);
            const shortcuts = await shortcutManager.getShortcuts("MAIN", "ANY");
            setUserQuestions(questions);
            setUserShortcuts(shortcuts);
        }
        fetchQuestionsAndShortcuts();
    }, []);

    /**
     * Creates all the Contents HTML in a given array.
     * @param {String} key 
     * @param {Array} contents 
     */
    function createCardContent(key, contents, isOverview) {
        let contentArray = [];
        contents.forEach((content, index) => {
            if (isOverview) content["overview"] = true;
            contentArray.push(
                <ContentParser key={"content-" + key + "-" + index} 
                        childrenKey={"content-" + key + "-" + index}
                        data={content} 
                        module={props.module}
                        userProfile={userProfile}
                        questionManager={questionManager}
                        callback={updateQuestionsCallback}/>);
        });
        return contentArray;
    }

    return (<React.Fragment>{userQuestions && <FadeIn>{createCards(props.cards)}</FadeIn>}</React.Fragment>);
}

export default CardsParser;