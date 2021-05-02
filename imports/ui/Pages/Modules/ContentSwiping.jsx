import React, { useState, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import Button from "../../components/Button.jsx";
import "./ContentSwiping.scss";

let cardsState = undefined;
const alreadyRemoved = new Set();

export default function createSwipeContent(props) {

    const [cards, setCards] = useState(props.options);
    const [saved, setSaved] = useState(false);

    cardsState = props.options;
  
    const childRefs = useMemo(() => Array(props.options.length).fill(0).map(() => React.createRef()), []);

    console.log(childRefs);
  
    const swiped = (nameToDelete) => {
      alreadyRemoved.add(nameToDelete);
    }
  
    const outOfFrame = (text) => {
      console.log(text + ' left the screen!')
      cardsState = cardsState.filter(character => character.text !== text);
      setCards(cardsState);
    }
  
    const swipe = (dir) => {
      const cardsLeft = cards.filter(card => !alreadyRemoved.has(card.text));
      if (cardsLeft.length) {
        const toBeRemoved = cardsLeft[cardsLeft.length - 1].text // Find the card object to be removed
        const index = props.options.map(card => card.text).indexOf(toBeRemoved); // Find the index of which to make the reference to
        alreadyRemoved.add(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
        childRefs[index].current.swipe(dir); // Swipe the card!
      }
    }

    function saveResults() {
      setSaved(true);
    }
    
    return (
      <div>
        {alreadyRemoved.size < props.options.length && <React.Fragment>
        <div className='cardContainer'>
          {props.options.map((card, index) =>
            <TinderCard className='swipe'ref={childRefs[index]} key={card.text} onSwipe={() => swiped(card.text)} onCardLeftScreen={() => outOfFrame(card.text)}>
              <div style={{ backgroundImage: 'url(' + card.image + ')' }} className='swipecard'>
                <h3>{card.text}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        <div className='swipe-buttons'>
          <Button style={{marginTop: "10px", textAlign: "center", justifyContent:"center"}} width={"48%"} color={"blue"} onClick={() => swipe('left')}>{props.buttons.disagree}</Button>
          <Button style={{marginTop: "10px", float: "right"}} width={"48%"} color={"blue"} onClick={() => swipe('right')}>{props.buttons.agree}</Button>
        </div>
        </React.Fragment>}
        {alreadyRemoved.size === props.options.length && <div className="finishedSwiping">
          <h4>Je bent er door!</h4>
          <Button width={"fit"} color={"blue"} style={{marginTop:"20px"}} onClick={()=>saveResults()} disabled={saved}>{saved ? "Opgeslagen!" : "Sla op"}</Button>
        </div>
          }
      </div>
    )
}