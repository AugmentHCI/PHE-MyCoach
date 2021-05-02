import React, { useState, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import Button from "../../components/Button.jsx";
import "./ContentSwiping.scss";

let cardsState = undefined;
const alreadyRemoved = new Set();

export default function createSwipeContent(props) {

    const [cards, setCards] = useState(props.options);
    const [saved, setSaved] = useState(false);
    const [userState, updateUserState] = useState({});

    cardsState = props.options;
  
    const childRefs = useMemo(() => Array(props.options.length).fill(0).map(() => React.createRef()), []);
  
    function swiped(direction, id) {
      console.log("THIS")
      alreadyRemoved.add(id);
      if (direction === 'left') updateUserState({...userState, [id]: "disagree"});
      else updateUserState({...userState, [id]: "agree"});
    }
  
    const outOfFrame = (id) => {
      console.log(id + ' left the screen!')
      cardsState = cardsState.filter(character => character.id !== id);
      setCards(cardsState);
    }
  
    const swipe = (direction) => {
      console.log("OTHER")
      const cardsLeft = cards.filter(card => !alreadyRemoved.has(card.id));
      if (cardsLeft.length) {
        const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
        const index = props.options.map(card => card.id).indexOf(toBeRemoved); // Find the index of which to make the reference to
        alreadyRemoved.add(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
        childRefs[index].current.swipe(direction); // Swipe the card!
      }
    }

    function saveResults() {
      setSaved(true);
      console.log(userState);
    }
    
    return (
      <div>
        {alreadyRemoved.size < props.options.length && <React.Fragment>
        <div className='cardContainer'>
          {props.options.map((card, index) =>
            <TinderCard className='swipe' ref={childRefs[index]} key={card.text} onSwipe={(dir) => swiped(dir, card.id)} onCardLeftScreen={() => outOfFrame(card.id)}>
              <div style={{ backgroundImage: 'url(' + card.image + ')' }} className='swipecard'>
                <h3>{card.text}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        <div className='swipe-buttons'>
          <Button style={{marginTop: "10px"}} width={"48%"} color={"blue"} onClick={() => swipe('left')}>{props.buttons.disagree}</Button>
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