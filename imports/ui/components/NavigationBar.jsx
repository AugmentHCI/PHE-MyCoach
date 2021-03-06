import React, { useState } from 'react';
import './NavigationBar.scss';
import Icon from './Illustrations/Icon.jsx';
import AppModal from "../components/AppModal.jsx";

export default function NavigationBar(props) {

    const [showModal, setShowModal] = useState(false);
    const noNavigationBar = ["MyProgress", "MyCoach"];

    if (noNavigationBar.includes(FlowRouter.current().route.name)) return (<React.Fragment/>);

    const title = props.title ? props.title : FlowRouter.current().route.name;

    function modalClicked(close) {
        setShowModal(false);
        if (close) goBack();
    }

    function goBack() {
        if (FlowRouter.current().queryParams.goPainlogbookOnBack === "true") FlowRouter.go(`/${FlowRouter.getParam('language')}/mycoach/${FlowRouter.getParam('token')}/painlogbook`);
        else if (FlowRouter.current().queryParams.goHomeOnBack === "true") FlowRouter.go(`/${FlowRouter.getParam('language')}/mycoach/${FlowRouter.getParam('token')}`);
        else if (props.back) FlowRouter.go(props.back);
        else { history.back() }
    }

    function renderButton() {
        if (props.action === "close") {
            return (<button className="navigation-bar-button" onClick={() => setShowModal(true)}>
                <Icon width="18px" image={"delete"} color={"blue-dark"} style={{marginTop: "2px"}}/>
            </button>)
        }
        return (<button className="navigation-bar-button" onClick={() => goBack()}>
            <Icon width="18px" image={"back"} color={"blue-dark"} style={{marginTop: "2px"}}/>
        </button>)
    }

    return (
        <div className="navigation-bar">
            {showModal && <AppModal show={true} title={"Afsluiten"} defaultOption={"Bevestig"} notifyParent={() => modalClicked(true)} backOption={"Annuleer"} notifyBack={() => modalClicked(false)}>
                    Weet je zeker dat je wilt afsluiten? Je niet-opgeslagen gegevens gaan verloren.
                </AppModal>}
            {renderButton()}
            {title}
        </div>
    )
}