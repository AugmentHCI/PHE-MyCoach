import React from 'react';
import FadeIn from 'react-fade-in';

import Card from '../../components/Card.jsx';
import ContentParser from './ContentParser.jsx';

/* [TEMP] Use dummy user data */
import UserData from '../../../api/userdata_dummy.js';


function CardsParser(props) {

    let contentsHTML = [];

    // DUMMY DATA
    const userProfile = {pain: "No pain", profile: 6, language: "nl-NL"};

    /**
     * Creates all the Cards HTML in a given array.
     * @param {Array} cards 
     */
    function createCards(cards) {
        cards.forEach(card => {
            if (Object.keys(card).length === 0) return; /* Empty card */
            contentsHTML.push(
                <Card key={card.id} title={card.title} icon={card.icon} noTranslate overview={card.overview}>
                    {createCardContent(card.id, card["card-contents"])}
                </Card>
            );
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
                         userProfile={userProfile}/>);
        });
        return contentArray;
    }

    createCards(props.cards);

    return <FadeIn>{contentsHTML}</FadeIn>;
}

export default CardsParser;