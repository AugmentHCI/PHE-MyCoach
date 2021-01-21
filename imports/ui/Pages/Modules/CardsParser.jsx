import React from 'react';

import Card from '../../components/Card.jsx';
import Content from './Content.jsx';

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
        cards.forEach((card, index) => {  
            if (Object.keys(card).length === 0) return;
            contentsHTML.push(
                <Card key={index} title={card.header} noTranslate overview={card.overview}>
                    {createCardContent(index, card["card-contents"])}
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
                <Content key={"content-" + key + "-" + index} 
                         data={content} 
                         userProfile={userProfile}></Content>);
        });
        return contentArray;
    }

    createCards(props.cards);

    return contentsHTML;

}

export default CardsParser;