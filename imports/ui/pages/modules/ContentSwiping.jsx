import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Button from "../../components/Button.jsx";
import "./ContentSwiping.scss";

let cardsState = undefined;
const alreadyRemoved = new Set();

export default function createSwipeContent(props) {

    const [cards, setCards] = useState(props.data.options);
    const [saved, setSaved] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [userState, updateUserState] = useState({});
    const [swipeCounter, updateSwipeCounter] = useState(0);
    const counterRef = useRef(swipeCounter);

    cardsState = props.data.options;
  
    const childRefs = useMemo(() => Array(props.data.options.length).fill(0).map(() => React.createRef()), []);
  
    function swiped(direction, id) {
      alreadyRemoved.add(id);
      if (direction === 'left') updateUserState({...userState, [id]: "disagree"});
      else updateUserState({...userState, [id]: "agree"});
      updateSwipeCounter(swipeCounter + 1);
      counterRef.current = counterRef.current + 1;
    }
  
    /*
    function outOfFrame(id) {
      console.log(id + ' left the screen!')
      cardsState = cardsState.filter(character => character.id !== id);
      setCards(cardsState);
    }*/
  
    function swipe(direction) {
      const cardsLeft = cards.filter(card => !alreadyRemoved.has(card.id));
      if (cardsLeft.length) {
        const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
        const index = props.data.options.map(card => card.id).indexOf(toBeRemoved); // Find the index of which to make the reference to
        alreadyRemoved.add(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
        childRefs[index].current.swipe(direction); // Swipe the card!
      }
    }

    async function saveResults() {
      let saveUserState = {};
      Object.keys(userState).forEach(answer => { if (userState[answer] === "agree") saveUserState[answer] = true; else {saveUserState[answer] = false} });
      await props.questionManager.setModuleQuestion(props.module, props.data.id, JSON.stringify(saveUserState)); 
      if (props.data.specialCaseTE) {
        let selectedObjects = {};
        Object.keys(userState).forEach(answer => { if (userState[answer] === "agree") selectedObjects[answer] = true });
        if (Object.keys(selectedObjects).length <= 5) {
          await props.questionManager.setModuleQuestion(props.module, "TE-MOD-5-SELECT-5", JSON.stringify(selectedObjects)); 
        }
      }
      props.callback();
      setSaved(true);
    }

    useEffect(() => {
      async function fetchAnswers() {
        const answers = await props.questionManager.getLatestAnswerOnQuestion(props.data.id);
        if (answers) setLoaded(true);
      }
      fetchAnswers();
    }, []);
    
    if (loaded) return (<div className="content-swiping-loaded">Je hebt deze oefening voltooid!</div>)
    return (
      <div>
        {alreadyRemoved.size < props.data.options.length && <React.Fragment>
        <div className='cardContainer'>
          {props.data.options.sort(() => {return (props.data.randomize ? Math.random() - 0.5 : 1)}).map((card, index) =>
            <TinderCard className='swipe' ref={childRefs[index]} key={card.text} onSwipe={(dir) => swiped(dir, card.id)} /*onCardLeftScreen={() => outOfFrame(card.id)}*/>
              <div style={{ backgroundImage: card.image ? 'url(' + card.image + ')' : ""}} className={"swipecard" + (card.image ? "" : "-noimage")}>
                {card.image && <h3>{card.text}</h3>}
                {!card.image && <h2>{card.text}</h2>}
              </div>
            </TinderCard>
          )}
        </div>
        <div className='swipe-buttons'>
          <Button style={{marginTop: "10px"}} width={"48%"} color={"blue"} onClick={() => swipe('left')}>{props.data.buttons.disagree}</Button>
          <Button style={{marginTop: "10px", float: "right"}} width={"48%"} color={"blue"} onClick={() => swipe('right')}>{props.data.buttons.agree}</Button>
        </div>
        Nog {props.data.options.length - counterRef.current} te gaan.
        </React.Fragment>}
        {alreadyRemoved.size === props.data.options.length && <div className="finishedSwiping">
          <h4>Je bent er door!</h4>
          <Button center color={"blue"} style={{marginTop:"20px"}} onClick={()=>saveResults()} disabled={saved}>{saved ? "Opgeslagen!" : "Sla op"}</Button>
        </div>
          }
      </div>
    )
}