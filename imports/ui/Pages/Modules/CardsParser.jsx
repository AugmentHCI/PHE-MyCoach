import React from 'react';
import FadeIn from 'react-fade-in';
import QuestionManager from '../../../api/QuestionManager.jsx';

import Card from '../../components/Card.jsx';
import ContentParser from './ContentParser.jsx';


function CardsParser(props) {

    let contentsHTML = [];

    // DUMMY DATA
    const userProfile = {pain: "No pain", profile: 6, language: "nl-NL"};
    const questionManager = new QuestionManager(props.userID);

    /**
     * Creates all the Cards HTML in a given array.
     * @param {Array} cards 
     */
    function createCards(cards) {
        if (props.moduleStatus === "COMPLETED") {
            generateCards(cards, "OVERVIEW");
            contentsHTML.push(<hr className="module-hr-line"/>);
            generateCards(cards, "NONOVERVIEW");
        }
        else {
            generateCards(cards);
        }
    }

    function generateCards(cards, showonly=undefined) {
        cards.forEach(card => {
            if (showonly === "OVERVIEW" && !card.overview) return;
            if (showonly === "NONOVERVIEW" && (card.overview || card.wrapup)) return;
            if (Object.keys(card).length === 0) return; /* Empty card */
            contentsHTML.push(
                <Card key={card.id} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                    {createCardContent(card.id, card["card-contents"])}
                </Card>);
        });
    }

    /**
     * Creates all the Contents HTML in a given array.
     * @param {String} key 
     * @param {Array} contents 
     */
    function createCardContent(key, contents) {
        let contentArray = [];
        contents.forEach((content, index) => {
            contentArray.push(
                <ContentParser key={"content-" + key + "-" + index} 
                         data={content} 
                         module={props.module}
                         userProfile={userProfile}
                         questionManager={questionManager}/>);
        });
        return contentArray;
    }

    createCards(props.cards);

    return <FadeIn>{contentsHTML}</FadeIn>;
}

export default CardsParser;