import React from 'react';

import Card from '../../components/Card.jsx';
import Content from '../../components/Content.jsx';


function CardsParser(props) {

    let contentsHTML = [];

    // DUMMY DATA
    const userProfile = {pain: "No pain", profile: 6, language: "nl-NL"};

    function createCards() {
        props.cards.forEach((card, index) => {   
            contentsHTML.push(
                <Card key={index} title={card.header} noTranslate>
                    {createCardContent(index, card["card-contents"])}
                </Card>
            );
        });
    }

    function createCardContent(key, contents) {
        let contentArray = [];
        contents.forEach((content, index) => {
            contentArray.push(<Content key={"content-" + key + "-" + index} data={content} userProfile={userProfile}></Content>)
        });
        return contentArray;
    }

    createCards();

    return contentsHTML;

}

export default CardsParser;