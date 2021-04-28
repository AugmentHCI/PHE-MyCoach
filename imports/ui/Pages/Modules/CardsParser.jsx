import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import QuestionManager from '../../../api/QuestionManager.jsx';

import Button from '../../components/Button.jsx';
import Card from '../../components/Card.jsx';
import ContentParser from './ContentParser.jsx';


function CardsParser(props) {

    const userProfile = props.userProfile;
    const questionManager = new QuestionManager(props.userID);
    const [userQuestions, setUserQuestions] = useState(undefined);

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
            if (card.showIfAnswered && !card.showIfAnswered.every(question => Object.keys(userQuestions).includes(question))) break;
            if (card.generateFinishSubmoduleButton) {
                contentsHTML.push(<Button 
                    key={"finish-submodule-button"+props.module}
                    style={{marginBottom: "100px", 
                        textAlign: "center", 
                        justifyContent: "center"}} 
                    color="blue" 
                    onClick={() => props.finishCallback(props.moduleStatus !== "COMPLETED")}>
                        {props.moduleStatus === "COMPLETED" ? card.textOnCompleted : card.text}
                </Button>);
                continue;
            }
            const cardID = card.overview ? props.submodule + "_CARD_OVERVIEW" : props.submodule + "_CARD_" + cardIndex++;
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

    useEffect(() => {
        /* Wrap in async function, as getModuleProgress is async */
        async function fetchQuestions() {
            const questions = await questionManager.getModuleQuestions(props.module);
            setUserQuestions(questions);
        }
        fetchQuestions();
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