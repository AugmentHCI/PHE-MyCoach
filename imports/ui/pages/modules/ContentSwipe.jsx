import React, { useState, useMemo, useRef, useEffect } from 'react';

/* External API */

/* Internal API */
import Button from "../../components/Button.jsx";
import LoadingScreen from '../../components/LoadingScreen.jsx';

/* Styles */
import "./ContentSwipe.scss";

export default function createSwipeContent({module, questionID, items, questionManager, callback, agreeButtonText=undefined, disagreeButtonText=undefined}) {

    const [loading, setLoading] = useState(true);
    const [blockChange, setBlockChange] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);
    const [index, updateIndex] = useState(0);
    const [agreedItems, updateAgreedItems] = useState([]);
    const [disagreedItems, updateDisgreedItems] = useState([]);

    function agree() {
        if (!blockChange) {
            updateAgreedItems([...agreedItems, items[index].id]);
            updateIndex(index => index + 1);
            setBlockChange(true);
        }
    }

    function disagree() {
        if (!blockChange) {
            updateDisgreedItems([...disagreedItems, items[index].id]);
            updateIndex(index => index + 1);
            setBlockChange(true);
        }
    }

    function containsImages() {
        for (let item of items) { if (item.image) return true; }
        return false;
    }

    useEffect(() => {
        if (blockChange) setTimeout(() => setBlockChange(false), 200);
    }, [blockChange]);

    useEffect(() => {
      async function fetchAnswers() {
        const answers = await questionManager.getLatestAnswerOnQuestion(questionID);
        if (answers) setHasSeen(true);
        setLoading(false);
      }
      fetchAnswers();
    }, []);

    useEffect(() => {
        async function saveAnswers() {
            const answers = {disagree: disagreedItems, agree: agreedItems};
            await questionManager.setModuleQuestion(module, questionID, JSON.stringify(answers));
            callback();
        }
        if (index === items.length) { saveAnswers() }
      }, [index]);
    
    if (loading) return (<LoadingScreen/>);

    return (<div>
        { (index < items.length && !hasSeen) && <div>
            <div className={"card-container" + (containsImages() ? "-image" : "")} style={{backgroundImage:`url(${items[index].image})`}}>
                {items[index].subtitle && <div className={"card-subtitle"}>{items[index].subtitle}</div>}
                {items[index].text && <div className={"card-text" + (items[index].image ? "-image" : "")}>{items[index].text}</div>}
            </div>
            <div style={{display:"flex", justifyContent: "center"}}>
                <Button center color="red"   width="45%" onClick={() => disagree()} style={{marginRight:"5%"}}>{disagreeButtonText ? disagreeButtonText : "Niet akkoord"}</Button>
                <Button center color="green" width="45%" onClick={() => agree()}>{agreeButtonText ? agreeButtonText : "Akkoord"}</Button>
            </div>
        </div>}
        { (index === items.length || hasSeen) && <div className={"card-finished" + (containsImages() ? "-image" : "")}>
            Klaar met de oefening!
        </div>}
    </div>)
}
