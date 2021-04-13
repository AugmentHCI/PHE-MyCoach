import React from 'react';
import FadeIn from 'react-fade-in';

import Card from '../../components/Card.jsx';
import ContentParser from './ContentParser.jsx';


function CardsParser(props) {

    let contentsHTML = [];
    console.log(props.moduleStatus)

    // DUMMY DATA
    const userProfile = {pain: "No pain", profile: 6, language: "nl-NL"};

    /**
     * Creates all the Cards HTML in a given array.
     * @param {Array} cards 
     */
    function createCards(cards) {
        if (props.moduleStatus === "COMPLETED") {
            cards.forEach(card => {
                if (card.overview) {
                    contentsHTML.push(
                        <Card key={card.id} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                            {createCardContent(card.id, card["card-contents"])}
                        </Card>
                    );
                }
            });
            contentsHTML.push(<hr className="module-hr-line"/>)
            cards.forEach(card => {
                if (!card.overview) {
                    contentsHTML.push(
                        <Card key={card.id} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                            {createCardContent(card.id, card["card-contents"])}
                        </Card>
                    );
                }
            });
        }
        else {
            cards.forEach(card => {
                if (Object.keys(card).length === 0) return; /* Empty card */
                contentsHTML.push(
                    <Card key={card.id} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                        {createCardContent(card.id, card["card-contents"])}
                    </Card>
                );
            });
        }
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
                         userProfile={userProfile}/>);
        });
        return contentArray;
    }

    createCards(props.cards);

    return <FadeIn>{contentsHTML}</FadeIn>;
}

export default CardsParser;