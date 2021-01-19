import React from 'react';

import Card from '../components/Card.jsx';
import Content from '../components/Content.jsx';


function CardsParser(props) {

    let contentsHTML = [];

    // DUMMY DATA
    const userProfile = {pain: "No pain", profile: 6, language: "nl-NL"};

    function createCards() {
        props.cards.forEach(card => {   
            let cardHTML = [];     
            Object.entries(card).forEach(([key, value]) => {
                cardHTML.push(createCardContent(key, value["card-content"]));
            });
            contentsHTML.push(<Card title={"Hello"}>{cardHTML}</Card>);
        });
    }

    function createCardContent(key, contents) {
        let contentArray = [];
        contents.forEach(content => {
            contentArray.push(<Content key={key} data={content} userProfile={userProfile}></Content>)
        });
        return contentArray;
    }

    createCards();

    return contentsHTML;

}

export default CardsParser;