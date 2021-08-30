import React, { useState, useMemo, createRef } from 'react';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import Button from '../../components/Button';
import './ContentStory.scss';

const db = [
  {
    id: 'Richard Hendricks',
    image: '/images/stress/balance.jpg'
  },
  {
    id: 'Erlich Bachman',
  },
  {
    id: 'Monica Hall',
  },
  {
    id: 'Jared Dunn',
  },
  {
    id: 'Dinesh Chugtai',
  }
]

const dbCopy = [...db];

const alreadyRemoved = new Set();
let itemsState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export default function CardWrapper () {

  const [length, setLength] = useState(dbCopy.length);
  const [items, setItems] = useState(db);
  const [liked, updateLiked] = useState(new Set());
  const [disliked, updateDisliked] = useState(new Set());

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => createRef()), [])

  const cardSwipe = (direction, id) => {
    console.log('removing: ' + id);
    if (direction === "right") updateLiked((likeSet) => likeSet.add(id));
    if (direction === "left") updateDisliked((likeSet) => likeSet.add(id));
    alreadyRemoved.add(id);
  }

  const outOfFrame = (id) => {
    itemsState = itemsState.filter(item => item.id !== id);
    setItems(itemsState);
  }

  const swipe = (direction) => {
    const itemsLeft = items.filter(item => !alreadyRemoved.has(item.id))
    if (itemsLeft.length) {
      const toBeRemoved = itemsLeft[itemsLeft.length - 1].id // Find the card object to be removed
      const index = db.map(item => item.id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.add(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(direction) // Swipe the card!
    }
  }

  return (
    <div>
      { alreadyRemoved.size < length && 
      <React.Fragment>
      <div className='cardContainer'>
        {items.map((item, index) =>
          <TinderCard ref={childRefs[index]} 
                      className='swipe' 
                      key={item.id} 
                      onSwipe={(dir) => cardSwipe(dir, item.id)} 
                      onCardLeftScreen={() => outOfFrame(item.id)}>
            <div style={{ backgroundImage: 'url(' + item.image + ')'}} className={"swipecard" + (item.image ? "" : "-noimage")}>
              <h3>{item.id}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <Button center color='blue' width='40%' onClick={() => swipe('left')}>Niet akkoord</Button>
        <Button center color='blue' width='40%' onClick={() => swipe('right')}>Akkoord</Button>
      </div>
    </React.Fragment>}
    {
      alreadyRemoved.size === length && <div className="finishedSwiping"><h4>Klaar!</h4></div>
    }
    </div>
  )
}